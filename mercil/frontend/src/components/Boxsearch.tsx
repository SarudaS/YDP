import React,{ useState } from 'react'
import { Search, Sparkles, Home, MapPin, DollarSign, Layers } from 'lucide-react';

const Boxsearch = () => {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [area, setArea] = useState('');

  const propertyTypes = ['บ้านเดี่ยว', 'คอนโด', 'ทาวน์เฮ้าส์', 'อาคารพาณิชย์'];
  const locations = ['กรุงเทพมหานคร', 'เชียงใหม่', 'ภูเก็ต', 'พัทยา', 'หัวหิน'];
  const priceRanges = ['< 1 ล้าน', '1-3 ล้าน', '3-5 ล้าน', '5-10 ล้าน', '> 10 ล้าน'];
  const areas = ['< 50 ตร.ม.', '50-100 ตร.ม.', '100-200 ตร.ม.', '> 200 ตร.ม.'];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative group">

        {/* Glow หรูแบบทองแดง */}
        <div className="
          absolute -inset-1 rounded-3xl blur-xl opacity-0 
          group-hover:opacity-70 transition duration-500
          bg-gradient-to-r from-[#c8b8b1] via-[#d7a77a] to-[#b58363]
        "></div>

        {/* Card */}
        <div className="
          relative bg-[#f9f7f5] rounded-3xl shadow-xl p-8
          transition-all duration-300 group-hover:shadow-[#c8b8b1]/40
        ">
          
          <div className="grid grid-cols-4 gap-4">

            {/* ประเภททรัพย์สิน */}
            <div>
              <label className="text-sm font-medium text-[#7a4f35] mb-2 flex items-center gap-2">
                <Home className="w-4 h-4 text-[#b58363]" />
                ประเภททรัพย์สิน
              </label>

              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-xl bg-[#f3ece7] 
                    border-2 border-[#d7c5b8] text-[#7a4f35] cursor-pointer
                    outline-none transition-all duration-200
                    hover:border-[#c8b8b1] focus:border-[#b58363] focus:bg-white
                    appearance-none
                  "
                >
                  <option value="">เลือกประเภท</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                {/* ลูกศร */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-[#7a4f35] transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* จังหวัด */}
            <div>
              <label className="text-sm font-medium text-[#7a4f35] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b58363]" />
                จังหวัด/พื้นที่
              </label>

              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-xl bg-[#f3ece7]
                    border-2 border-[#d7c5b8] text-[#7a4f35]
                    hover:border-[#c8b8b1] focus:border-[#b58363]
                    transition-all duration-200 focus:bg-white appearance-none cursor-pointer
                  "
                >
                  <option value="">เลือกพื้นที่</option>
                  {locations.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-[#7a4f35] transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* ช่วงราคา */}
            <div>
              <label className="text-sm font-medium text-[#7a4f35] mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#b58363]" />
                ช่วงราคา
              </label>

              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-xl bg-[#f3ece7] 
                    border-2 border-[#d7c5b8] text-[#7a4f35]
                    hover:border-[#c8b8b1] focus:border-[#b58363]
                    transition-all duration-200 focus:bg-white appearance-none cursor-pointer
                  "
                >
                  <option value="">เลือกราคา</option>
                  {priceRanges.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-[#7a4f35] transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* พื้นที่ */}
            <div>
              <label className="text-sm font-medium text-[#7a4f35] mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#b58363]" />
                ขนาดพื้นที่
              </label>

              <div className="relative">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="
                    w-full px-4 py-3 rounded-xl bg-[#f3ece7] 
                    border-2 border-[#d7c5b8] text-[#7a4f35]
                    hover:border-[#c8b8b1] focus:border-[#b58363]
                    transition-all duration-200 focus:bg-white appearance-none cursor-pointer
                  "
                >
                  <option value="">เลือกขนาด</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-[#7a4f35] transform rotate-45"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Boxsearch;
