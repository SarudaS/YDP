import React,{ useState } from 'react'
import { Search, Sparkles } from 'lucide-react';

const AISearch = () => {
    
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Search Bar Container */}
      <div className="relative group">
        {/* แสดงเฉพาะตอน hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full 
        blur-lg opacity-0 group-hover:opacity-60 transition duration-500"></div>
        
        {/* MainSearchBar */}
        <div className={`relative bg-white rounded-full shadow-2xl transition-all duration-300 
            ${isFocused ? 'shadow-blue-500/50 scale-[1.02]' : ''}
             group-hover:shadow-blue-500/40 `}>
          <div className="flex items-center px-6 py-4 gap-4">
            
            {/* AI Icon กลับมาแก้ดเวย */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br 
               from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Search  */}
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="บ้านเดี่ยวใกล้ BTS"//ข้อความตัวอย่าง
              className="flex-1 text-lg text-gray-700 placeholder-gray-400 outline-none bg-transparent font-light"
            />

            {/*Search Button */}
            <button className="group relative flex-shrink-0 px-4 py-3 rounded-full bg-gradient-to-r
             from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-700 
             hover:via-[#1e40af] hover:to-[#3b82f6] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              {/*  Effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
              
              {/* Button Search R */}
              <div className="relative flex items-center gap-1">
                <Search className="w-8 h-8 text-white" strokeWidth={2.5} />
                <span className="text-white font-semibold whitespace-nowrap"></span>
              </div>
            </button>

          </div>
        </div>

         </div>

      

      {/*  Animations ปุ่มSearch ไว้ปรับanimationsข้างใน */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(50%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default AISearch