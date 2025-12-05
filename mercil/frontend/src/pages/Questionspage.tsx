import { useState } from "react";
import { ChevronDown,CircleQuestionMark } from "lucide-react";
import Navbar from "../components/Navbar";

interface Questionspage {
  question: string;
  answer: string;
}

const faqList: Questionspage[] = [
  {
    question: "Q : SAM คือใคร ?",
    answer:
      "A : SAM คือ บริษัท บริหารสินทรัพย์สุขุมวิท จำกัด (บสส. / SAM) เป็นหน่วยงานภาครัฐที่อยู่ภายใต้การกำกับดูแลของธนาคารแห่งประเทศไทย ดำเนินธุรกิจในด้านการบริหารสินทรัพย์ด้อยคุณภาพของระบบสถาบันการเงิน โดยทำหน้าที่แก้ไขหนี้ด้อยคุณภาพ เจรจาหาข้อยุติกับลูกค้าด้วยการปรับปรุงโครงสร้างหนี้ NPL  พัฒนาการจำหน่ายทรัพย์สินรอการขาย NPA เพื่อช่วยฟื้นฟูระบบเศรษฐกิจของประเทศ และสนับสนุนให้ประชาชนและภาคธุรกิจฟื้นตัวได้อย่างยั่งยืน",
  },
  {
    question: "Q : SAM มีนโยบายด้านการปล่อยสินเชื่อ / เงินกู้หรือไม่ ?",
    answer:
      "SAM ไม่มีนโยบายในด้านการปล่อยสินเชื่อ / เงินกู้ และไม่มีการเรียกรับผลประโยชน์ใดๆ จากลูกค้า  โปรดระมัดระวังมิจฉาชีพที่แอบแฝงใช้ชื่อ บริษัท บริหารสินทรัพย์สุขุมวิท จำกัด หรือ SAM หรือ บสส. หลอกลวง แอบอ้าง ผ่านช่องทางการสื่อสารต่างๆ",
  },
  {
    question: "Q : SAM มีนโยบายช่วยเหลือลูกค้าปรับโครงสร้างหนี้ NPL ที่อยู่ภายใต้การบริหารจัดการของ SAM อย่างไร ?",
    answer:
      "A : SAM มีนโยบายช่วยเหลือลูกค้า โดยมุ่งเน้นให้มีการเจรจาปรับโครงสร้างหนี้กับลูกค้าเป็นอันดับแรก โดยคำนึงถึงความสามารถในการชำระหนี้ของลูกค้าเป็นหลัก รวมถึงให้คำปรึกษา เจรจาหารือเพื่อให้ได้ข้อยุติภายใต้แนวทางที่เหมาะสมแก่ผู้ที่เกี่ยวข้อง และเพื่อให้ลูกค้าสามารถดำเนินชีวิตและธุรกิจต่อไปได้อย่างยั่งยืน ลูกค้าสามารถเข้ามาเจรจา ปรึกษาหารือแนวทางที่เป็นไปได้ในการแก้ไขหนี้ที่เหมาะสมกับกำลังความสามารถ รวมถึงสอบถามขั้นตอนการดำเนินการทางคดี และเจรจาได้ทุกช่วงเวลา แม้จะอยู่ในขั้นตอนการดำเนินคดีแล้ว",
  },
  {
    question: "Q: ก่อนซื้อทรัพย์กับ บสส. ควรต้องทำอย่างไรบ้าง ?",
    answer:
      "A: บสส. ขายทรัพย์ตามสภาพ และตามข้อมูลที่ปรากฎในเอกสารสิทธิ์ ดังนั้น ลูกค้าจึงต้องตรวจสอบประเด็นต่างๆ ที่เกี่ยวข้องกับทรัพย์ก่อน เช่น ทำเลที่ตั้ง สภาพทรัพย์สิน ภาระผูกพัน หรือ การใช้ประโยชน์ในทรัพย์สิน ความถูกต้องความครบถ้วนสมบูรณ์ของเอกสารสิทธิ์ หรือ สิ่งปลูกสร้าง หรือ ประเด็นอื่นใดที่เกี่ยวข้องจากหน่วยงานราชการ หรือ จากแหล่งอื่นที่เกี่ยวข้องให้เป็นที่พึงพอใจก่อนการตัดสินใจซื้อ",
  },
  {
    question: "Q: ลูกค้าสามารถเข้าชมทรัพย์ของ บสส. ได้หรือไม่ ?",
    answer:
      "A: ในกรณีที่ทรัพย์เป็นที่ดินพร้อมสิ่งปลูกสร้าง ลูกค้าสามารถติดต่อขอชมทรัพย์ได้ โดยโทรศัพท์แจ้งความประสงค์และนัดหมายที่ Call Center 02-686-1888 หรือสามารถดำเนินการด้วยตนเอง โดยการเข้า เว็บไซต์ บสส. www.sam.or.th กรอกข้อมูลทรัพย์ที่จะขอเข้าชม เลือกทรัพย์ตามเงื่อนไขที่ บสส. ระบุให้สามารถเข้าชมได้  และในกรณีที่ทรัพย์เป็นที่ดินเปล่า ลูกค้าสามารถเดินทางไปดูทรัพย์ได้ด้วยตนเอง ตามแผนที่ที่ บสส. ได้ให้ข้อมูลไว้บน website www.sam.or.th",
  },
  {
    question: "Q: หากต้องการเสนอซื้อทรัพย์จาก บสส. ควรเตรียมความพร้อมอย่างไร ?",
    answer:
      "A: ลูกค้าควรเตรียมความพร้อมทางการเงินให้เรียบร้อยก่อนทำการเสนอซื้อทรัพย์ กรณีที่ลูกค้าประสงค์จะใช้สินเชื่อ แนะนำให้ปรึกษากับสถาบันการเงินที่ท่านใช้บริการอยู่ ก่อนทำการเสนอซื้อ เพื่อความพร้อมในการชำระราคาซื้อทรัพย์ตามเงื่อนไขและระยะเวลาที่กำหนด และพร้อมรับโอนกรรมสิทธิ์ได้ต่อไป",
  },
];

export default function Questionspage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F6E5D6] via-[#FFF5EA] to-[#F6E5D6] py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-5xl"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-[#6B5A4A] text-lg">
            
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl rounded-3xl p-6 border-2 border-[#e5d5c5] hover:border-[#D4A574] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Q */}
              <button
                className="w-full flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4 text-[#3c2f2f] font-semibold text-left">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F3DCC9] to-[#E8C9A8] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className=" text-amber-900"><CircleQuestionMark /></span>
                  </div>
                  <span className="text-base md:text-lg">{item.question}</span>
                </div>

                <ChevronDown
                  className={`transition-all duration-300 text-amber-900 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  } group-hover:scale-110`}
                  size={24}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="mt-6 pl-16 pr-4">
                  <div className="bg-gradient-to-r from-[#FFF9F0] to-white p-5 rounded-2xl border-l-4 border-[#D4A574]">
                    <p className="text-[#4e3d3d] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}