import { useState, useEffect } from 'react';
import { Heart, Share2, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
import Navbar from '../components/navbar';

// กำหนด interface สำหรับ property
interface Property {
  id: number | string;
  title: string;
  location: string;
  description: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

interface FavoritePropertyCardProps {
  property: Property;
  onRemove: (id: number | string) => void;
}

const FavoritePropertyCard = ({ property, onRemove }: FavoritePropertyCardProps) => (
  <div className="bg-[#F8F5F2] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <div className="flex flex-col md:flex-row">
      {/* Image Section */}
      

      {/* Content Section */}
      <div className="md:w-3/5 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold text-[#6B4E3D] group-hover:text-[#956748] transition">
              {property.title || 'ไม่ระบุชื่อ'}
            </h3>
            <button className="text-[#8B7355] hover:text-[#956748] transition" aria-label="แชร์">
              <Share2 size={20} />
            </button>
          </div>
          
          <div className="flex items-center text-[#8B7355] mb-4">
            <MapPin size={16} className="mr-2" />
            <span>{property.location || 'ไม่ระบุที่อยู่'}</span>
          </div>

          <p className="text-[#8B7355] mb-6 line-clamp-2">
            {property.description || 'ไม่มีรายละเอียด'}
          </p>

          {/* Features */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center text-[#6B4E3D]">
              <Bed size={20} className="mr-2 text-[#956748]" />
              <span className="font-medium">{property.bedrooms || 0} ห้องนอน</span>
            </div>
            <div className="flex items-center text-[#6B4E3D]">
              <Bath size={20} className="mr-2 text-[#956748]" />
              <span className="font-medium">{property.bathrooms || 0} ห้องน้ำ</span>
            </div>
            <div className="flex items-center text-[#6B4E3D]">
              <Square size={20} className="mr-2 text-[#956748]" />
              <span className="font-medium">{property.area || 0} ตร.ม.</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[#A68A6F]">ราคา</p>
            <p className="text-3xl font-bold text-[#956748]">
              ฿{property.price ? property.price.toLocaleString() : '0'}
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#956748] to-[#7d5439] text-white px-8 py-3 rounded-full hover:shadow-lg transition font-semibold">
            ดูรายละเอียด
          </button>
        </div>
      </div>
    </div>
  </div>
);

type FilterType = 'all' | 'sell' | 'rent';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterType>('all');

  // ดึงข้อมูลจาก API
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        // เปลี่ยน URL เป็น API endpoint ของคุณ
        const response = await fetch('YOUR_API_ENDPOINT_HERE');
        
        if (!response.ok) {
          throw new Error('Failed to fetch favorites');
        }
        
        const data: Property[] = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
        // ถ้า API ยังไม่พร้อม ใช้ข้อมูลตัวอย่าง
        setFavorites([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemove = async (id: number | string) => {
    try {
      // เรียก API เพื่อลบรายการโปรด
      // const response = await fetch(`YOUR_API_ENDPOINT_HERE/${id}`, { 
      //   method: 'DELETE' 
      // });
      // if (!response.ok) throw new Error('Failed to remove favorite');
      
      // อัพเดท state
      setFavorites(favorites.filter(fav => fav.id !== id));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const filteredFavorites = filter === 'all' 
    ? favorites 
    : favorites.filter(fav => {
        if (filter === 'sell') return fav.type === 'ขาย';
        if (filter === 'rent') return fav.type === 'เช่า';
        return true;
      });

  if (loading) {
    return (
      <div className='bg-gradient-to-br from-[#e7d0c2] via-[#e9cbb8] to-amber-50 min-h-screen flex items-center justify-center'>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-amber-600 border-t-transparent mb-4"></div>
          <p className="text-stone-600 text-lg">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gradient-to-br from-[#f0eae7] via-white to-[#e9e0da] min-h-screen'>
      <div>
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5e4f46] via-[#c28966] to-[#63432f] rounded-full mb-4">
              <Heart size={32} className="text-white fill-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5e4f46] via-[#976648] to-[#63432f] bg-clip-text text-transparent mb-4">
              รายการโปรด
            </h1>
            <p className="text-xl text-stone-600">
              ทรัพย์สินที่คุณบันทึกไว้ทั้งหมด ({favorites.length} รายการ)
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition ${
                filter === 'all' 
                  ? 'bg-[#9e8270] text-white shadow-lg' 
                  : 'bg-white text-stone-700 hover:bg-amber-50'
              }`}
            >
              ทั้งหมด
            </button>
            <button 
              onClick={() => setFilter('sell')}
              className={`px-6 py-2 rounded-full transition ${
                filter === 'sell' 
                  ? 'bg-[#9e8270] text-white shadow-lg' 
                  : 'bg-white text-stone-700 hover:bg-amber-50'
              }`}
            >
              #2
            </button>
            <button 
              onClick={() => setFilter('rent')}
              className={`px-6 py-2 rounded-full transition ${
                filter === 'rent' 
                  ? 'bg-[#9e8270] text-white shadow-lg' 
                  : 'bg-white text-stone-700 hover:bg-amber-50'
              }`}
            >
              #3
            </button>
          </div>
        </div>
      </section>

      {/* Favorites List */}
      <section className="pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          {filteredFavorites.length > 0 ? (
            <div className="space-y-6">
              {filteredFavorites.map(property => (
                <FavoritePropertyCard 
                  key={property.id} 
                  property={property} 
                  onRemove={handleRemove}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Heart size={64} className="mx-auto text-stone-300 mb-4" />
              <h3 className="text-2xl font-bold text-[#836856] mb-2">
                ยังไม่มีรายการโปรด
              </h3>
              <p className="text-[#836856] mb-6">
                เริ่มค้นหาและบันทึกทรัพย์สินที่คุณสนใจได้เลย
              </p>
              <button className="bg-gradient-to-r from-[#836856] to-[#ac856b] text-white px-8 py-3 rounded-full hover:shadow-lg transition">
                เริ่มค้นหา
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;