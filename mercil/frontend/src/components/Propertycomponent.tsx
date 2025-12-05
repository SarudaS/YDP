import { useContext, useState, useEffect } from 'react';
import { MapPin, Bed, Bath, Maximize, Heart, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from '../context/AppContext';
import { AuthContext } from '../context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify';

// ✅ เพิ่ม export ให้ Interface
export interface Property {
  _id?: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rating: number;
  type: string;
  description?: string;
  image?: string;
  // เพิ่ม field เผื่อไว้สำหรับการแปลงค่า
  name_th?: string;
  asset_details_selling_price?: number;
  images_main_id?: string;
}

interface PropertyCardProps {
  property: Property;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// ✅ เพิ่มคำว่า export ตรงนี้ (สำคัญมาก)
export const PropertyCard = ({ property }: PropertyCardProps) => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ถ้าไม่มี user ให้ทำงานต่อได้ (แค่กด favorite ไม่ได้)
  const user = authContext?.user;

  useEffect(() => {
    const checkFavorite = async () => {
      if (!user?.token || !property._id) {
        setIsFavorite(false); 
        return;
      }

      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/favorites/check/${property._id}`,
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        if (response.data.success) {
          setIsFavorite(response.data.isFavorite);
        }
      } catch (error) {
        setIsFavorite(false); 
      }
    };

    checkFavorite();
  }, [user, property._id]);

  const handleToggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 

    if (!user) {
      toast.error('กรุณาเข้าสู่ระบบก่อน');
      return;
    }

    if (!property._id) return;

    try {
      setIsLoading(true);

      if (isFavorite) {
        const response = await axios.post(
          `${API_BASE_URL}/api/favorites/remove`,
          { propertyId: property._id },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        if (response.data.success) {
          setIsFavorite(false);
          toast.success('ลบออกจากรายการโปรดแล้ว');
        }
      } else {
        const response = await axios.post(
          `${API_BASE_URL}/api/favorites/add`,
          { propertyId: property._id },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        if (response.data.success) {
          setIsFavorite(true);
          toast.success('เพิ่มเข้ารายการโปรดแล้ว');
        }
      }
    } catch (error: any) {
      console.error('Error toggling favorite:', error);
      toast.error(error.response?.data?.message || 'เกิดข้อผิดพลาด');
    } finally {
      setIsLoading(false);
    }
  };

  if (!property) return null;

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 hover:cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={property.image || "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170"} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170";
          }}
        />
        <button 
          onClick={handleToggleFavorite}
          disabled={isLoading}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 shadow-lg group/heart ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          } ${
            isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-white/90 hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 transition-all duration-200 ${isFavorite ? 'text-white fill-white' : 'text-gray-600 group-hover/heart:text-[#b76e79] group-hover/heart:fill-[#b76e79]'}`} />
        </button>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
            <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" />
            <span className="text-xs font-semibold text-gray-800">{property.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#7b5e57] transition-colors duration-200 line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-[#a2836e] flex-shrink-0" />
          <span className="text-sm line-clamp-1">{property.location}</span>
        </div>
        <div className="flex justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-[#8d6e63]" />
            <span className="text-sm text-gray-700">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-[#a1887f]" />
            <span className="text-sm text-gray-700">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4 text-[#795548]" />
            <span className="text-sm text-gray-700">{Number(property.area)?.toLocaleString()} ตร.ม.</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">ราคา</p>
            <p className="text-xl font-bold bg-gradient-to-r from-[#7b5e57] to-[#a2836e] bg-clip-text text-transparent">
              ฿{Number(property.price)?.toLocaleString()}
            </p>
          </div>
          <Link 
            to={`/property/${property._id}`}
            state={{ from: location.pathname }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6f4e37] to-[#a47551] hover:from-[#5d3f2c] hover:to-[#8d623f] text-white text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            ดูเพิ่ม
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main List Component
const PropertyCardList = () => {
  const context = useContext(SearchContext);
  const [showAll, setShowAll] = useState(false);

  if (!context) return null;
  const { properties, loading } = context;

  const getInitialDisplay = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1280) return 8;
      if (width >= 1024) return 6;
      if (width >= 768) return 4;
      return 2;
    }
    return 8;
  };

  const [initialCount, setInitialCount] = useState(getInitialDisplay());

  useEffect(() => {
    const handleResize = () => setInitialCount(getInitialDisplay());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <div className="w-full flex justify-center py-20"><div className="w-12 h-12 border-4 border-gray-300 border-t-[#7b5e57] rounded-full animate-spin"></div></div>;

  if (properties.length === 0) return <div className="text-center py-20 text-gray-600">ไม่พบข้อมูลทรัพย์สิน</div>;

  const displayedProperties = showAll ? properties : properties.slice(0, initialCount);
  const hasMore = properties.length > initialCount;

  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProperties.map((property) => (
          // ใช้ PropertyCard ที่ export มา
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
      {hasMore && !showAll && (
        <div className="flex justify-center mt-10">
          <button onClick={() => setShowAll(true)} className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6f4e37] to-[#a47551] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <span>ดูเพิ่มเติม ({properties.length - initialCount})</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
      {showAll && hasMore && (
        <div className="flex justify-center mt-10">
          <button onClick={() => { setShowAll(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white border-2 border-[#7b5e57] text-[#7b5e57] font-semibold hover:bg-[#7b5e57] hover:text-white shadow-lg transition-all">
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            <span>ย่อกลับ</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyCardList;