import React,{ useState } from 'react'
import { Search, Sparkles, Home, MapPin, DollarSign, Layers } from 'lucide-react';
const Boxsearch = () => {
    const [searchText, setSearchText] = useState('');
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
      {/* Main Container */}
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>
        
        {/* White Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300 group-hover:shadow-blue-500/20">
          
          {/* Detailed Filters */}
          <div className="grid grid-cols-4 gap-4">
            
            {/* ประเภททรัพย์สิน */}
            <div className="group/item">
              <label className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                <Home className="w-4 h-4 text-purple-500" />
                ประเภททรัพย์สิน
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-700 outline-none hover:border-purple-300 focus:border-purple-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">เลือกประเภท</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* จังหวัด */}
            <div className="group/item">
              <label className=" text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                จังหวัด/พื้นที่
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-700 outline-none hover:border-blue-300 focus:border-blue-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">เลือกพื้นที่</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* ช่วงราคา */}
            <div className="group/item">
              <label className=" text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                ช่วงราคา
              </label>
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-700 outline-none hover:border-green-300 focus:border-green-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">เลือกราคา</option>
                  {priceRanges.map((price) => (
                    <option key={price} value={price}>{price}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* พื้นที่ */}
            <div className="group/item">
              <label className=" text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-500" />
                ขนาดพื้นที่
              </label>
              <div className="relative">
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-700 outline-none hover:border-orange-300 focus:border-orange-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">เลือกขนาด</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
export default Boxsearch