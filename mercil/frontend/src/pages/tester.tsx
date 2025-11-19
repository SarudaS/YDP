import Navbar from '../components/navbar'
import PropertyHomePage from '../components/PropertyHome'
import AISearch from '../components/AISearch'
import Boxsearch from '../components/Boxsearch'
import Propertycard from '../components/Propertycard'

const Tester = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar /> 
      
      {/* อันแรห เต็มหน้าจอ */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col justify-end pb-32 px-8">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0891b2] via-[#06b6d4] to-[#1f2937] bg-clip-text text-transparent">
              ค้นหาอสังหาริมทรัพย์
            </h1>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
             text
            </p>
          </div>
        </div>
        <div className="w-full">
          <AISearch />
        </div>
      </section>

      {/* Boxsearch */}
      <section className="้้-1/3 bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ค้นหาแบบละเอียด
          </h2>
          <Boxsearch />
        </div>
      </section>

      {/*  แนะนำบ้าน */}
      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ทรัพย์สินแนะนำ
            </h2>
            <p className="text-xl text-gray-600">
              คัดสรรทรัพย์สินที่น่าสนใจสำหรับคุณ
            </p>
          </div>
          
          {/* Property Cards จะอยู่ที่นี่ */}
          <div className="space-y-6">
           <Propertycard />
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tester