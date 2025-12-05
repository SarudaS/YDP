import { useContext, useState } from 'react';
import { Search, Sparkles, MapPin, Zap } from 'lucide-react';
import { SearchContext } from '../context/AppContext';
import MapSearch from './MapSearch';

type SearchMode = 'ai' | 'map';

const AISearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchMode, setSearchMode] = useState<SearchMode>('ai');
  
  const context = useContext(SearchContext);

  if (!context) return null;
  const { search } = context;

  const handleSearch = () => {
    if (searchMode === 'ai' && searchText.trim()) {
      search(searchText);
    }
  };

  return (
    // ปรับ Container ให้ padding เหมาะสมกับมือถือ (px-4) และจอใหญ่
    <div className="w-full max-w-5xl mx-auto px-4 md:px-0 py-2">
      
      {/* Mode Toggle */}
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="inline-flex rounded-full p-1 bg-gradient-to-r from-[#f0e6e0] to-[#e8ddd5] shadow-lg max-w-full overflow-x-auto">
          {/* AI Search Mode */}
          <button
            onClick={() => setSearchMode('ai')}
            className={`
              relative px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-all duration-300 overflow-hidden text-sm md:text-base whitespace-nowrap
              ${searchMode === 'ai'
                ? 'bg-gradient-to-r from-[#b58363] via-[#d7a77a] to-[#c8b8b1] text-white shadow-md'
                : 'text-[#8e5d44] hover:text-[#b58363]'
              }
            `}
          >
            <div className="flex items-center gap-1.5 md:gap-2 relative z-10">
              <Sparkles className={`w-4 h-4 md:w-5 md:h-5 ${searchMode === 'ai' ? 'animate-pulse' : ''}`} />
              <span>AI Search</span>
            </div>
            {searchMode === 'ai' && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            )}
          </button>

          {/* Map Search Mode */}
          <button
            onClick={() => setSearchMode('map')}
            className={`
              relative px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-all duration-300 overflow-hidden text-sm md:text-base whitespace-nowrap
              ${searchMode === 'map'
                ? 'bg-gradient-to-r from-[#b58363] via-[#d7a77a] to-[#c8b8b1] text-white shadow-md'
                : 'text-[#8e5d44] hover:text-[#b58363]'
              }
            `}
          >
            <div className="flex items-center gap-1.5 md:gap-2 relative z-10">
              <MapPin className={`w-4 h-4 md:w-5 md:h-5 ${searchMode === 'map' ? 'animate-bounce' : ''}`} />
              <span>Map Search</span>
            </div>
            {searchMode === 'map' && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            )}
          </button>
        </div>
      </div>

      {/* AI Search Bar */}
      {searchMode === 'ai' && (
        <div className="relative group animate-fadeIn w-full">
          {/* Glow รอบนอก */}
          <div className="
            absolute -inset-1 rounded-full opacity-0 
            group-hover:opacity-100 transition-opacity duration-700
            bg-gradient-to-r from-[#c8b8b1] via-[#d7a77a] to-[#b58363]
            blur-xl animate-glow
          "></div>

          {/* Secondary glow layer */}
          <div className=" 
            absolute -inset-0.5 rounded-full opacity-20 
            group-hover:opacity-40 transition-opacity duration-500
            bg-gradient-to-r from-[#b58363] to-[#d7a77a]
            blur-md 
          "></div>

          {/* Main Search Bar */}
          <div
            className={`
              relative rounded-full shadow-xl bg-[#f9f7f5]
              transition-all duration-300
              ${isFocused ? 'scale-[1.01] md:scale-[1.02]' : ''}
              group-hover:shadow-[#c8b8b1]/50
            `}
          >
            {/* ปรับ Padding และ Gap ให้เล็กลงในมือถือ */}
            <div className="flex items-center px-2 py-2 md:px-6 md:py-4 gap-2 md:gap-4">
              
              {/* AI Icon: ลดขนาดบนมือถือ (w-10) และซ่อนบนจอมือถือที่เล็กมากๆ ถ้าจำเป็น */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-gradient-to-br
                from-[#764b30] via-[#c8b8b1] to-[#a0662f]
                flex items-center justify-center shadow-md relative overflow-hidden
                group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5}/>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>

              {/* Input: ใช้ min-w-0 เพื่อป้องกัน layout แตก และปรับขนาด Font */}
              <input
                type="text"
                value={searchText}
                onKeyDown={(e) => {if (e.key === 'Enter') handleSearch()}}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="ค้นหาคอนโด ใกล้ BTS..." // ปรับ Placeholder ให้สั้นลงเล็กน้อยให้พอดีมือถือ หรือใช้ CSS ซ่อน text ยาวๆ
                className="flex-1 min-w-0 text-base md:text-lg text-[#7a4f35] placeholder-[#b49a8d] 
                  bg-transparent outline-none font-light truncate"
              />

              {/* Search Button: ปรับ Padding ให้กดง่ายแต่ไม่กินที่ */}
              <button
                onClick={handleSearch}
                disabled={!searchText.trim()}
                className="
                  group/btn relative flex-shrink-0 
                  px-3 py-2 md:px-5 md:py-3 
                  rounded-full shadow-md
                  bg-gradient-to-r from-[#b58363] via-[#d7a77a] to-[#c8b8b1]
                  hover:from-[#8e5d44] hover:via-[#b58363] hover:to-[#d7a77a]
                  active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  transition-all duration-300 hover:scale-105 hover:shadow-xl
                "
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>

                {/* Button content: ซ่อนข้อความหรือ icon บางส่วนถ้าจอเล็กมากๆ แต่กรณีนี้เก็บไว้ทั้งคู่แต่ลดขนาด */}
                <div className="relative flex items-center gap-1 md:gap-2">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-md" strokeWidth={2.3} fill="currentColor" />
                  {/* ซ่อน icon แว่นขยายบนมือถือจอเล็กมาก (optional) แต่เก็บไว้เพื่อความสวยงาม */}
                  <Search className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-md hidden sm:block" strokeWidth={2.3}/>
                </div>
              </button>
            </div>
          </div>

          {/* AI Hint */}
          <div className="mt-3 md:mt-4 text-center">
            <p className="text-xs md:text-sm text-[#fcf4ee] flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span>AI จะช่วยค้นหาที่พักในฝันของคุณ</span>
            </p>
          </div>
        </div>
      )}

      {/* Map Search Component */}
      {searchMode === 'map' && (
        <div className="animate-fadeIn w-full overflow-hidden rounded-xl">
          <MapSearch />
        </div>
      )}

      {/* Styles (Keep existing animations) */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; filter: blur(10px); }
          50% { opacity: 0.8; filter: blur(15px); }
        }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-bounce { animation: bounce 1s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        button, input { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        button:focus-visible, input:focus-visible { outline: 2px solid #b58363; outline-offset: 2px; }
      `}</style>
    </div>
  );
};

export default AISearch;