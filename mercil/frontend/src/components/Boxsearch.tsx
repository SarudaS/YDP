import { useContext, useState, useEffect, useRef } from "react";
import { Home, MapPin, DollarSign, Layers, ChevronDown } from "lucide-react"; // เพิ่ม ChevronDown เพื่อทำลูกศรสวยๆ
import { SearchContext } from "../context/AppContext";

const FILTERS_STORAGE_KEY = "search_filters";

const Boxsearch = () => {
  // ... (Logic ส่วนเดิมทั้งหมดคงไว้เหมือนเดิม) ...
  const [propertyType, setPropertyType] = useState<string>(() => {
    try {
      const saved = sessionStorage.getItem(FILTERS_STORAGE_KEY);
      return saved ? JSON.parse(saved).propertyType || "" : "";
    } catch {
      return "";
    }
  });

  const [location, setLocation] = useState<string>(() => {
    try {
      const saved = sessionStorage.getItem(FILTERS_STORAGE_KEY);
      return saved ? JSON.parse(saved).location || "" : "";
    } catch {
      return "";
    }
  });

  const [priceRange, setPriceRange] = useState<string>(() => {
    try {
      const saved = sessionStorage.getItem(FILTERS_STORAGE_KEY);
      return saved ? JSON.parse(saved).priceRange || "" : "";
    } catch {
      return "";
    }
  });

  const [area, setArea] = useState<string>(() => {
    try {
      const saved = sessionStorage.getItem(FILTERS_STORAGE_KEY);
      return saved ? JSON.parse(saved).area || "" : "";
    } catch {
      return "";
    }
  });

  const { search, clear } = useContext(SearchContext) || {};
  const hasUserInteracted = useRef(false);

  useEffect(() => {
    const filters = {
      propertyType,
      location,
      priceRange,
      area,
    };
    sessionStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
  }, [propertyType, location, priceRange, area]);

  useEffect(() => {
    if (!search) return;

    const hasAnyValue = propertyType || priceRange || location || area;

    if (!hasUserInteracted.current && !hasAnyValue) {
      return;
    }

    if (hasAnyValue) {
      hasUserInteracted.current = true;
    }

    if (!hasAnyValue && hasUserInteracted.current) {
      clear?.();
      return;
    }

    let q = "";
    let min_price: number | null = null;
    let max_price: number | null = null;
    let min_area: number | null = null;
    let max_area: number | null = null;

    if (propertyType) q += propertyType + " ";
    if (location) q += location + " ";

    switch (priceRange) {
      case "< 1 ล้าน":
        min_price = 0;
        max_price = 1000000;
        break;
      case "1-3 ล้าน":
        min_price = 1000000;
        max_price = 3000000;
        break;
      case "3-5 ล้าน":
        min_price = 3000000;
        max_price = 5000000;
        break;
      case "5-10 ล้าน":
        min_price = 5000000;
        max_price = 10000000;
        break;
      case "> 10 ล้าน":
        min_price = 10000000;
        break;
    }

    switch (area) {
      case "30 - 50 ตรม":
        min_area = 30;
        max_area = 50;
        q += "ขนาดกลาง ";
        break;
      case "50 - 100 ตรม":
        min_area = 50;
        max_area = 100;
        q += "ขนาดใหญ่ ";
        break;
      case "100+ ตรม":
        min_area = 100;
        max_area = 999999999;
        q += "ขนาดใหญ่พิเศษ ";
        break;
    }

    const finalQuery = q.trim() || "ทรัพย์สินทั้งหมด";

    const filters: any = {};
    if (min_price !== null) filters.min_price = min_price;
    if (max_price !== null) filters.max_price = max_price;
    if (min_area !== null) filters.min_area = min_area;
    if (max_area !== null) filters.max_area = max_area;

    search(finalQuery, filters);
  }, [propertyType, priceRange, location, area]);

  // --- ส่วน UI ที่ปรับปรุง ---
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative group">
        {/* Glow Effect ด้านหลัง (ปรับให้ดูนุ่มนวลขึ้น) */}
        <div className="absolute -inset-0.5 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700 bg-gradient-to-r from-[#c8b8b1] via-[#d7a77a] to-[#b58363]"></div>

        {/* Main Box Container */}
        <div className="relative bg-[#fbf9f8]/95 backdrop-blur-sm rounded-[1.8rem] shadow-2xl p-6 sm:p-8 
                        border-2 border-[#e6dcd5] hover:border-[#d7c5b8] transition-all duration-300">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* ประเภททรัพย์สิน */}
            <div className="space-y-2 group/item">
              <label className="text-sm font-semibold text-[#8c6b5d] flex items-center gap-2 ml-1">
                <Home className="w-4 h-4 text-[#b58363]" /> ประเภททรัพย์สิน
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => {
                    setPropertyType(e.target.value);
                    setLocation("");
                    setPriceRange("");
                    setArea("");
                  }}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-2xl text-[#5e3e2b] 
                           bg-white border-2 border-[#e6dcd5] 
                           hover:border-[#c8b8b1] hover:bg-[#fafaf9]
                           focus:border-[#b58363] focus:ring-4 focus:ring-[#b58363]/10 focus:outline-none
                           appearance-none cursor-pointer transition-all duration-200 shadow-sm"
                >
                  <option value="">เลือกประเภท</option>
                  <option value="บ้านเดี่ยว">บ้านเดี่ยว</option>
                  <option value="คอนโด">คอนโด</option>
                  <option value="ทาวน์โฮม">ทาวน์โฮม</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a89085] pointer-events-none" />
              </div>
            </div>

            {/* จังหวัด */}
            <div className="space-y-2 group/item">
              <label className="text-sm font-semibold text-[#8c6b5d] flex items-center gap-2 ml-1">
                <MapPin className="w-4 h-4 text-[#b58363]" /> จังหวัด/พื้นที่
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-2xl text-[#5e3e2b] 
                           bg-white border-2 border-[#e6dcd5] 
                           hover:border-[#c8b8b1] hover:bg-[#fafaf9]
                           focus:border-[#b58363] focus:ring-4 focus:ring-[#b58363]/10 focus:outline-none
                           appearance-none cursor-pointer transition-all duration-200 shadow-sm"
                >
                  <option value="">เลือกพื้นที่</option>
                  <option value="กรุงเทพ">กรุงเทพ</option>
                  <option value="นนทบุรี">นนทบุรี</option>
                  <option value="เชียงใหม่">เชียงใหม่</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a89085] pointer-events-none" />
              </div>
            </div>

            {/* ช่วงราคา */}
            <div className="space-y-2 group/item">
              <label className="text-sm font-semibold text-[#8c6b5d] flex items-center gap-2 ml-1">
                <DollarSign className="w-4 h-4 text-[#b58363]" /> ช่วงราคา
              </label>
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-2xl text-[#5e3e2b] 
                           bg-white border-2 border-[#e6dcd5] 
                           hover:border-[#c8b8b1] hover:bg-[#fafaf9]
                           focus:border-[#b58363] focus:ring-4 focus:ring-[#b58363]/10 focus:outline-none
                           appearance-none cursor-pointer transition-all duration-200 shadow-sm"
                >
                  <option value="">เลือกราคา</option>
                  <option value="< 1 ล้าน">ต่ำกว่า 1 ล้าน</option>
                  <option value="1-3 ล้าน">1 - 3 ล้าน</option>
                  <option value="3-5 ล้าน">3 - 5 ล้าน</option>
                  <option value="5-10 ล้าน">5 - 10 ล้าน</option>
                  <option value="> 10 ล้าน">มากกว่า 10 ล้าน</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a89085] pointer-events-none" />
              </div>
            </div>

            {/* ขนาดพื้นที่ */}
            <div className="space-y-2 group/item">
              <label className="text-sm font-semibold text-[#8c6b5d] flex items-center gap-2 ml-1">
                <Layers className="w-4 h-4 text-[#b58363]" /> ขนาดพื้นที่
              </label>
              <div className="relative">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-2xl text-[#5e3e2b] 
                           bg-white border-2 border-[#e6dcd5] 
                           hover:border-[#c8b8b1] hover:bg-[#fafaf9]
                           focus:border-[#b58363] focus:ring-4 focus:ring-[#b58363]/10 focus:outline-none
                           appearance-none cursor-pointer transition-all duration-200 shadow-sm"
                >
                  <option value="">เลือกขนาด</option>
                  <option value="30 - 50 ตรม">30 - 50 ตรม</option>
                  <option value="50 - 100 ตรม">50 - 100 ตรม</option>
                  <option value="100+ ตรม">100+ ตรม</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a89085] pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxsearch;