import React from 'react';
import { MapPin, Bed, Bath, Maximize, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom'

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rating: number;
  type: string;
}

interface PropertyCardProps {
  property?: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const defaultProperty: Property = {
    id: 1,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    title: 'บ้านเดี่ยว 2 ชั้น',
    location: 'สุขุมวิท, กรุงเทพฯ',
    price: '8,500,000',
    bedrooms: 3,
    bathrooms: 2,
    area: 250,
    rating: 4.8,
    type: 'ขาย'
  };

  const data = property || defaultProperty;

  return (
   <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 hover:cursor-pointer">
      
  {/* รูปภาพ */}
  <div className="relative h-56 overflow-hidden">
    <img 
      src={data.image} 
      alt={data.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />

    {/* Badge ประเภท */}
    <div className="absolute top-3 left-3">
      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#7b5e57] to-[#a2836e] text-white text-xs font-semibold shadow-lg">
        {data.type}
      </span>
    </div>

    {/* ปุ่มหัวใจ */}
    <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg group/heart">
      <Heart className="w-4 h-4 text-gray-600 group-hover/heart:text-[#b76e79] group-hover/heart:fill-[#b76e79] transition-all duration-200" />
    </button>

    {/* Rating */}
    <div className="absolute bottom-3 left-3">
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
        <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" />
        <span className="text-xs font-semibold text-gray-800">{data.rating}</span>
      </div>
    </div>
  </div>

  {/* ข้อมูล */}
  <div className="p-5">
    
    {/* หัวข้อ */}
    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#7b5e57] transition-colors duration-200 line-clamp-1">
      {data.title}
    </h3>
    
    {/* ที่อยู่ */}
    <div className="flex items-center gap-1 text-gray-600 mb-4">
      <MapPin className="w-4 h-4 text-[#a2836e] flex-shrink-0" />
      <span className="text-sm line-clamp-1">{data.location}</span>
    </div>

    {/* รายละเอียด */}
    <div className="flex justify-between mb-4 pb-4 border-b border-gray-200">
      <div className="flex items-center gap-1">
        <Bed className="w-4 h-4 text-[#8d6e63]" />
        <span className="text-sm text-gray-700">{data.bedrooms}</span>
      </div>
      <div className="flex items-center gap-1">
        <Bath className="w-4 h-4 text-[#a1887f]" />
        <span className="text-sm text-gray-700">{data.bathrooms}</span>
      </div>
      <div className="flex items-center gap-1">
        <Maximize className="w-4 h-4 text-[#795548]" />
        <span className="text-sm text-gray-700">{data.area} ตร.ม.</span>
      </div>
    </div>

    {/* ราคาและปุ่ม */}
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500">ราคา</p>
        <p className="text-xl font-bold bg-gradient-to-r from-[#7b5e57] to-[#a2836e] bg-clip-text text-transparent">
          ฿{data.price}
        </p>
      </div>

      <Link 
        to={`/detail/${data.id}`} 
        className="px-4 py-2 rounded-lg bg-gradient-to-r 
          from-[#6f4e37] to-[#a47551]
          hover:from-[#5d3f2c] hover:to-[#8d623f]
          text-white text-sm font-semibold transition-all duration-200 
          shadow-lg hover:shadow-xl"
      >
        ดูเพิ่ม
      </Link>
    </div>
  </div>
</div>
  );
};


const PropertyCardList = () => {
  const properties: Property[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      title: 'XXXXX',
      location: 'YYYYY',
      price: '8,500,000',
      bedrooms: 3,
      bathrooms: 2,
      area: 250,
      rating: 4.8,
      type: 'ขาย'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      title: 'XXXX',
      location: 'YYY',
      price: '12,000,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 80,
      rating: 4.9,
      type: 'ขาย'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      title: 'XXXXX',
      location: 'รYYYY',
      price: '5,800,000',
      bedrooms: 3,
      bathrooms: 3,
      area: 180,
      rating: 4.7,
      type: 'ขาย'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      title: 'XXXX',
      location: 'YYYY',
      price: '6,200,000',
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      rating: 4.6,
      type: 'ขาย'
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyCardList;