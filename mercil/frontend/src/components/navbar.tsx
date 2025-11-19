import { useState, useEffect } from 'react';
import { Menu, X, Home, Building2, Info, Heart, Mail, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // เช็คว่า scroll แล้ว
      setIsScrolled(currentScrollY > 20);
      
      // เช็คทิศทาง scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // เลื่อนลง - ซ่อน
        setIsVisible(false);
      } else {
        // เลื่อนขึ้น - แสดง 
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Spacer เพื่อไม่ให้ content ทับกัน */}
      <div className="h-20"></div>

      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-r from-[#0f4c81] via-[#4136a9] to-[#0f4c81]'
        }`}
      >
        {/* Animated Border Bottom */}
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0f4c81] via-[#4136a9] to-[#0f4c81] transition-all duration-500 ${
          isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}></div>

        <div className="max-w-7xl mx-auto px-6 py-4 md:px-12">
          <div className="flex justify-between items-center">
            
            {/* โลโก้ */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-[#0f4c81] via-[#4136a9] to-[#0f4c81]' 
                  : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30'
              }`}>
                
              </div>
              <div className={`text-2xl font-bold tracking-wide transition-all duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Mercil
              </div>
              {/* Sparkle Effect */}
              <div className="relative w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
            </div>

            {/* เมนูปกติ (desktop) */}
            <ul className="hidden md:flex items-center space-x-1 font-medium">
              <li className="relative group/item">
                <a href="#" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 group-hover/item:bg-blue-50 group-hover/item:text-blue-600' 
                    : 'text-white/90 group-hover/item:bg-white/10 group-hover/item:text-white'
                }`}>
                  <Home className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-200" />
                  หน้าหลัก
                </a>
                {/* Underline Animation */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover/item:w-16 transition-all duration-300 rounded-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></div>
              </li>
              <li className="relative group/item">
                <a href="#" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 group-hover/item:bg-blue-50 group-hover/item:text-blue-600' 
                    : 'text-white/90 group-hover/item:bg-white/10 group-hover/item:text-white'
                }`}>
                  <Building2 className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-200" />
                  ทรัพย์สิน
                </a>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover/item:w-16 transition-all duration-300 rounded-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></div>
              </li>
              <li className="relative group/item">
                <a href="#" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 group-hover/item:bg-blue-50 group-hover/item:text-blue-600' 
                    : 'text-white/90 group-hover/item:bg-white/10 group-hover/item:text-white'
                }`}>
                  <Info className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-200" />
                  เกี่ยวกับ
                </a>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover/item:w-16 transition-all duration-300 rounded-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></div>
              </li>
              <li className="relative group/item">
                <a href="#" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 group-hover/item:bg-blue-50 group-hover/item:text-blue-600' 
                    : 'text-white/90 group-hover/item:bg-white/10 group-hover/item:text-white'
                }`}>
                  <Heart className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-200" />
                  รายการโปรด
                </a>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover/item:w-16 transition-all duration-300 rounded-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></div>
              </li>
              <li className="relative group/item">
                <a href="#" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 group-hover/item:bg-blue-50 group-hover/item:text-blue-600' 
                    : 'text-white/90 group-hover/item:bg-white/10 group-hover/item:text-white'
                }`}>
                  <Mail className="w-4 h-4 group-hover/item:scale-110 transition-transform duration-200" />
                  ติดต่อ
                </a>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover/item:w-16 transition-all duration-300 rounded-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></div>
              </li>
            </ul>

            {/* ปุ่มเข้าสู่ระบบ (desktop) */}
            <div className="hidden md:block">
              <button className={`relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105'
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:scale-105'
              }`}>
                {/*  Effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
                <User className="w-4 h-4 relative z-10" />
                <span className="relative z-10">เข้าสู่ระบบ</span>
              </button>
            </div>

            {/* ปุ่มเมนูมือถือ */}
            <button
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* เมนูมือถือ */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-6 py-4 space-y-2 ${
            isScrolled ? 'bg-white border-t border-gray-200' : 'bg-white/10 backdrop-blur-sm'
          }`}>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              <Home className="w-5 h-5" />
              หน้าหลัก
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              รู้จัก SAM
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              ประกาศ
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              ประชาสัมพันธ์
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              ติดต่อเรา
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              ผู้ให้บริการภายนอก
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              คำถามที่พบบ่อย
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              ลงทะเบียนปรับโครงสร้างหนี้
            </a>
            <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}>
              คลินิกแก้หนี้
            </a>

            <button className={`relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:scale-105'
            }`}>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
              <User className="w-5 h-5 relative z-10" />
              <span className="relative z-10">เข้าสู่ระบบ</span>
            </button>
          </div>
        </div>
      </nav>

      

      {/* Custom Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;