export interface KoreanFood {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export const koreanFoods: KoreanFood[] = [
  {
    id: '1',
    name: '불고기',
    nameEn: 'Bulgogi',
    description: '달콤하고 간장 양념에 재운 소고기 구이',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=400',
    rating: 4.8,
    reviewCount: 1240,
    tags: ['인기', '한식']
  },
  {
    id: '2',
    name: '비빔밥',
    nameEn: 'Bibimbap',
    description: '나물, 고기, 계란 후라이와 고추장을 얹은 밥',
    price: 11000,
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400',
    rating: 4.9,
    reviewCount: 2341,
    tags: ['건강', '추천']
  },
  {
    id: '3',
    name: '김치찌개',
    nameEn: 'Kimchi Stew',
    description: '신김치와 돼지고기로 끓인 찌개',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
    rating: 4.7,
    reviewCount: 856,
    tags: ['매운맛', '한식']
  },
  {
    id: '4',
    name: '된장찌개',
    nameEn: 'Doenjang Stew',
    description: '된장과 야채를 넣어 끓인 전통 찌개',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1626508035297-4c622c873d96?w=400',
    rating: 4.6,
    reviewCount: 654,
    tags: ['전통', '건강']
  },
  {
    id: '5',
    name: '삼겹살',
    nameEn: 'Samgyeopsal',
    description: '삼겹살 구이와 쌈 채소',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400',
    rating: 4.9,
    reviewCount: 3421,
    tags: ['인기', '고기']
  },
  {
    id: '6',
    name: '떡볶이',
    nameEn: 'Tteokbokki',
    description: '고추장 양념에 볶은 떡과 어묵',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1633504581786-316c923d22f0?w=400',
    rating: 4.5,
    reviewCount: 1876,
    tags: ['간식', '매운맛']
  },
  {
    id: '7',
    name: '잡채',
    nameEn: 'Japchae',
    description: '당면과 Various 채소를 볶은 요리',
    price: 13000,
    image: 'https://images.unsplash.com/photo-1633504581786-316c923d22f0?w=400',
    rating: 4.7,
    reviewCount: 943,
    tags: ['전통', '명절']
  },
  {
    id: '8',
    name: '칼국수',
    nameEn: 'Kalguksu',
    description: '칼로 썬 면과 야채를 넣은 국수',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
    rating: 4.6,
    reviewCount: 521,
    tags: ['국수', '건강']
  }
];
