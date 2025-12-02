import React from 'react';
import { Users, Target, Award, Heart, Sparkles, TrendingUp, Shield, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-[#c7a496] via-[#b89585] to-[#a87f6f] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">รัฐวิสาหกิจภายใต้การกำกับของ ธปท.</span>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">เกี่ยวกับ SAM</h1>
          <p className="text-xl text-amber-50 max-w-2xl mx-auto leading-relaxed">
            บริษัท บริหารสินทรัพย์สุขุมวิท จำกัด<br />
            บริหารสินทรัพย์ด้อยคุณภาพเพื่อเศรษฐกิจและสังคมไทย
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Company Story */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4">
                <span className="text-[#c7a496] font-semibold text-sm tracking-wide uppercase">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-[#8b6f5e] mb-6">
                ก่อตั้งเพื่อแก้ไขวิกฤตเศรษฐกิจ
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SAM ก่อตั้งขึ้นเมื่อวันที่ 18 เมษายน 2543 ตามมติคณะรัฐมนตรี และจดทะเบียนเป็นบริษัทบริหารสินทรัพย์ตามพระราคำ AMC Act 1998 
                โดยกองทุนเพื่อการฟื้นฟูและพัฒนาระบบสถาบันการเงิน (กองทุนฯ) ถือหุ้น 100%
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                ในปี 2547 SAM ได้รับโอนกิจการจากบริษัท บริหารสินทรัพย์เพชรบุรี จำกัด (PAMC) 
                ที่บริหาร NPL ของธนาคารสยามซิตี้ มารวมอยู่ภายใต้การดำเนินงานเดียวกัน
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                ตั้งแต่ปี 2549 SAM ได้ดำเนินการซื้อ NPL และ NPA จากสถาบันการเงินอื่นอย่างต่อเนื่อง 
                พร้อมขยายงานไปทั่วประเทศด้วยการเปิดสำนักงานสาขา 4 แห่ง ได้แก่ เชียงใหม่ ขอนแก่น สุราษฎร์ธานี และพิษณุโลก
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#c7a496] border-2 border-white flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#b89585] border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-[#a87f6f] border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-500">ทีมงานมืออาชีพ 50+ คน</span>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#c7a496] to-[#b89585] rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#c7a496] to-[#b89585] rounded-2xl h-96 flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white p-8">
                    <Award className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-bold mb-2">20+ ปี</p>
                    <p className="text-lg font-medium">ของการบริหารสินทรัพย์</p>
                    <p className="text-sm text-amber-100 mt-2">ตั้งแต่ปี 2543</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-transparent rounded-3xl -mx-6 px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#8b6f5e] mb-6">พันธกิจของเรา</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              SAM มีบทบาทสำคัญในการบริหารสินทรัพย์ด้อยคุณภาพของระบบสถาบันการเงินอย่างมีธรรมาภิบาล 
              เพื่อช่วยให้ลูกหนี้และเจ้าหนี้สามารถดำรงธุรกิจและดำเนินชีวิตได้ตามปกติ 
              พร้อมส่งเสริมเสถียรภาพของระบบสถาบันการเงินไทย เพื่อประโยชน์ต่อเศรษฐกิจและสังคม
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="text-center mb-12">
            <span className="text-[#c7a496] font-semibold text-sm tracking-wide uppercase">Core Values</span>
            <h2 className="text-4xl font-bold text-[#8b6f5e] mt-2 mb-4">
              หลักการดำเนินงาน
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เรายึดมั่นในการดำเนินงานด้วยความรับผิดชอบและโปร่งใส
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#c7a496] to-[#b89585] rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8b6f5e] mb-2">
                ธรรมาภิบาล
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ดำเนินงานด้วยความโปร่งใส ตรวจสอบได้ และเป็นธรรม
              </p>
            </div>

            <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#c7a496] to-[#b89585] rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8b6f5e] mb-2">
                ลูกค้าเป็นศูนย์กลาง
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                มุ่งเน้นการเจรจาปรับโครงสร้างหนี้ตามความสามารถจริง
              </p>
            </div>

            <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#c7a496] to-[#b89585] rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8b6f5e] mb-2">
                มืออาชีพ
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ทีมงานที่มีความรู้และประสบการณ์ในการบริหารสินทรัพย์
              </p>
            </div>

            <div className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#c7a496] to-[#b89585] rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#8b6f5e] mb-2">
                รับผิดชอบต่อสังคม
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ช่วยเหลือลูกหนี้ให้กลับมาดำเนินชีวิตได้ตามปกติ
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="bg-gradient-to-br from-[#c7a496] via-[#b89585] to-[#a87f6f] rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">ผลการดำเนินงานที่ภูมิใจ</h2>
                <p className="text-amber-50">ตัวเลขที่สะท้อนความมุ่งมั่นของเรา</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all">
                  <div className="text-6xl font-bold text-white mb-2">255,000+</div>
                  <div className="text-amber-50 text-lg font-medium mb-1">ล้านบาท</div>
                  <div className="text-amber-100 text-sm">นำส่งคืนกองทุนฯ (ตั้งแต่ปี 2543)</div>
                </div>
                
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all">
                  <div className="text-6xl font-bold text-white mb-2">54,899</div>
                  <div className="text-amber-50 text-lg font-medium mb-1">ราย</div>
                  <div className="text-amber-100 text-sm">ปรับโครงสร้างหนี้สำเร็จ (มูลค่า 341,448 ล้านบาท)</div>
                </div>
                
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all">
                  <div className="text-6xl font-bold text-white mb-2">68,071</div>
                  <div className="text-amber-50 text-lg font-medium mb-1">บัญชี</div>
                  <div className="text-amber-100 text-sm">ผ่านคุณสมบัติคลินิกแก้หนี้</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#8b6f5e] mb-4">บริการของเรา</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เรามีบริการหลากหลายเพื่อช่วยเหลือลูกหนี้และบริหารสินทรัพย์
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-[#c7a496]">
              <h3 className="text-xl font-bold text-[#8b6f5e] mb-3">ปรับโครงสร้างหนี้</h3>
              <p className="text-gray-600 leading-relaxed">
                เจรจาและปรับโครงสร้างหนี้ให้เหมาะสมกับความสามารถในการชำระของลูกหนี้
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-[#c7a496]">
              <h3 className="text-xl font-bold text-[#8b6f5e] mb-3">คลินิกแก้หนี้</h3>
              <p className="text-gray-600 leading-relaxed">
                ให้คำปรึกษาและแนวทางแก้ไขปัญหาหนี้สินอย่างมืออาชีพและเข้าใจ
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-[#c7a496]">
              <h3 className="text-xl font-bold text-[#8b6f5e] mb-3">จำหน่ายทรัพย์สิน</h3>
              <p className="text-gray-600 leading-relaxed">
                ขายทรัพย์สินรอการขาย (NPA) ในราคาที่เป็นธรรมและโปร่งใส
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-[#c7a496]" />
                <span className="text-sm font-medium text-[#8b6f5e]">เราพร้อมให้ความช่วยเหลือ</span>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-[#8b6f5e] mb-4">
              ต้องการความช่วยเหลือหรือคำปรึกษา?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              ทีมงานของเราพร้อมให้บริการและคำแนะนำ<br />
              เพื่อช่วยคุณแก้ไขปัญหาทางการเงินอย่างมืออาชีพ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[#c7a496] to-[#b89585] hover:from-[#b89585] hover:to-[#a87f6f] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>ติดต่อเรา</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <Link 
              to="/" 
              className="inline-block bg-white text-[#8b6f5e] px-8 py-4 rounded-xl font-semibold border-2 border-[#c7a496] hover:bg-amber-50 transition-all text-center"
            >
              ดูทรัพย์สินรอการขาย
            </Link>
            </div>

            <div className="mt-8 text-gray-500 text-sm">
              <p>โทร: 02-686-1888 | Email: info@sam.or.th</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}