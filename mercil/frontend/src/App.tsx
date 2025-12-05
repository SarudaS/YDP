import Navbar from './components/navbar.tsx' 
import AISearch from './components/AISearch.tsx' 
import Boxsearch from './components/Boxsearch.tsx' 
import Propertycard from './components/Propertycard.tsx' 
import Footer from './components/Footer.tsx'
import BackgroundSwitcher from './components/BackgroundPicture.tsx'

const App = () => {
  return (
    <div className='bg-gradient-to-br from-amber-50 via-white to-amber-50 font-sans overflow-x-hidden'>
      <Navbar />

      {/* Hero Section */}
      <BackgroundSwitcher>
        {/* ใช้ min-h-[100dvh] เพื่อให้เต็มจอพอดีในมือถือ (Dynamic Viewport Height) */}
        <section className="min-h-[100dvh] flex flex-col justify-between md:justify-end pt-24 pb-10 px-4 md:px-8 relative">
          
          {/* Text Content: จัดกึ่งกลางพื้นที่ว่างด้านบน */}
          <div className="flex-1 flex flex-col items-center justify-center z-10">
            <div className="text-center space-y-4 md:space-y-6 animate-fadeIn">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg bg-gradient-to-t from-[#f5d9ba] via-[#f2ebe4] to-[#f1d7b9] bg-clip-text text-transparent tracking-tight">
                อสังหาริมทรัพย์
              </h1>
              {/* เพิ่มข้อความย่อย (Optional) หรือเว้นไว้ */}
              <p className="text-lg md:text-xl text-stone-200/90 max-w-2xl mx-auto font-light drop-shadow-md">
                ค้นหาที่พักในฝันของคุณได้ง่ายๆ ด้วย AI
              </p>
            </div>
          </div>

          {/* Search Bar Container: ปรับ margin ให้พอดีมือถือ */}
          <div className="w-full mt-8 md:mt-16 mb-4 md:mb-12 z-20">
            <AISearch />
          </div>
        </section>
      </BackgroundSwitcher>

      {/* Boxsearch Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#956748] mb-6 md:mb-10 text-center">
            ค้นหาแบบละเอียด
          </h2>
          <Boxsearch />
        </div>
      </section>

      {/* แนะนำบ้าน */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#956748] mb-3 md:mb-4">
              ทรัพย์สินแนะนำ
            </h2>
            <p className="text-base md:text-xl text-[#956748]/80 font-light">
              คัดสรรทรัพย์สินที่น่าสนใจสำหรับคุณ
            </p>
          </div>
          
          {/* Property Cards */}
          <div className="w-full">
            <Propertycard />
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default App