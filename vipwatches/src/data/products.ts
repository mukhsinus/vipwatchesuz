export type Category = "classic" | "sport" | "casual";
export type Mechanism = "quartz" | "automatic";

export interface Product {
  id: string;
  brand: string;
  name: string;
  /** Цена в USD — как принято у магазина. Формат вывода: см. formatPrice */
  price: number;
  category: Category;
  mechanism: Mechanism;
  /** Положите фото в public/images/products/ — пока файла нет, показывается заглушка */
  image: string;
  desc: { ru: string; uz: string };
  isNew?: boolean;
  featured?: boolean;
  /** Условная популярность для сортировки «по популярности» */
  popularity: number;
}

/**
 * ДЕМО-ДАННЫЕ: замените на реальные модели и цены.
 * id используется в URL (/catalog/rolex-datejust-41) — латиницей, без пробелов.
 */
export const products: Product[] = [
  {
    id: "rolex-datejust-41",
    brand: "Rolex",
    name: "Datejust 41",
    price: 1250,
    category: "classic",
    mechanism: "automatic",
    image: "/images/products/rolex-datejust-41.jpg",
    desc: {
      ru: "Классика, которая уместна везде: от переговоров до свадьбы. Стальной браслет Jubilee, циферблат с фирменным окошком даты.",
      uz: "Har joyda o'rinli klassika: muzokaralardan to'ygacha. Jubilee po'lat braslet, sana oynachali siferblat.",
    },
    isNew: true,
    featured: true,
    popularity: 98,
  },
  {
    id: "rolex-submariner",
    brand: "Rolex",
    name: "Submariner Date",
    price: 1390,
    category: "sport",
    mechanism: "automatic",
    image: "/images/products/rolex-submariner.jpg",
    desc: {
      ru: "Самые узнаваемые дайверские часы в мире. Вращающийся безель, светящиеся метки, характер — на все сто.",
      uz: "Dunyodagi eng taniqli g'avvos soati. Aylanadigan bezel, yorug' belgilar, xarakter — yuz foiz.",
    },
    featured: true,
    popularity: 95,
  },
  {
    id: "patek-nautilus",
    brand: "Patek Philippe",
    name: "Nautilus 5711",
    price: 1650,
    category: "classic",
    mechanism: "automatic",
    image: "/images/products/patek-nautilus.jpg",
    desc: {
      ru: "Икона спортивной элегантности с иллюминаторным корпусом. Часы, которые узнают без представления.",
      uz: "Illyuminator korpusli sport nafosati ikonasi. Tanishtiruvsiz taniladigan soat.",
    },
    featured: true,
    popularity: 92,
  },
  {
    id: "ap-royal-oak",
    brand: "Audemars Piguet",
    name: "Royal Oak",
    price: 1580,
    category: "sport",
    mechanism: "automatic",
    image: "/images/products/ap-royal-oak.jpg",
    desc: {
      ru: "Восьмиугольный безель, интегрированный браслет, гильошированный циферблат «Tapisserie». Легенда Жеральда Дженты.",
      uz: "Sakkiz burchakli bezel, yaxlit braslet, «Tapisserie» siferblat. Jerald Jenta afsonasi.",
    },
    popularity: 90,
  },
  {
    id: "omega-speedmaster",
    brand: "Omega",
    name: "Speedmaster Moonwatch",
    price: 980,
    category: "sport",
    mechanism: "automatic",
    image: "/images/products/omega-speedmaster.jpg",
    desc: {
      ru: "Хронограф, побывавший на Луне. Тахиметрическая шкала, три счётчика, история на запястье.",
      uz: "Oyda bo'lgan xronograf. Taximetr shkalasi, uchta hisoblagich, bilakdagi tarix.",
    },
    featured: true,
    popularity: 88,
  },
  {
    id: "cartier-santos",
    brand: "Cartier",
    name: "Santos de Cartier",
    price: 1100,
    category: "classic",
    mechanism: "quartz",
    image: "/images/products/cartier-santos.jpg",
    desc: {
      ru: "Квадратный корпус с открытыми винтами — первые в мире наручные часы, ставшие стилем.",
      uz: "Ochiq vintli kvadrat korpus — uslubga aylangan dunyodagi birinchi qo'l soati.",
    },
    popularity: 80,
  },
  {
    id: "hublot-classic-fusion",
    brand: "Hublot",
    name: "Classic Fusion",
    price: 1200,
    category: "sport",
    mechanism: "automatic",
    image: "/images/products/hublot-classic-fusion.jpg",
    desc: {
      ru: "Сплав материалов и характеров: керамика, каучук, сатинированная сталь. Смело, но сдержанно.",
      uz: "Materiallar va xarakterlar qorishmasi: keramika, kauchuk, satin po'lat. Dadil, lekin bosiq.",
    },
    popularity: 76,
  },
  {
    id: "seiko-presage",
    brand: "Seiko",
    name: "Presage Cocktail Time",
    price: 520,
    category: "classic",
    mechanism: "automatic",
    image: "/images/products/seiko-presage.jpg",
    desc: {
      ru: "Японская механика с циферблатом-коктейлем, играющим на свету. Лучший вход в мир автоматики.",
      uz: "Yorug'likda tovlanadigan kokteyl-siferblatli yapon mexanikasi. Avtomatika olamiga eng yaxshi kirish.",
    },
    isNew: true,
    popularity: 72,
  },
  {
    id: "tissot-prx",
    brand: "Tissot",
    name: "PRX Powermatic 80",
    price: 420,
    category: "casual",
    mechanism: "automatic",
    image: "/images/products/tissot-prx.jpg",
    desc: {
      ru: "Интегрированный браслет, ретро-дух 70-х и запас хода 80 часов. Хит среди молодых коллекционеров.",
      uz: "Yaxlit braslet, 70-yillar ruhi va 80 soatlik zaxira. Yosh kolleksionerlar orasida xit.",
    },
    isNew: true,
    popularity: 84,
  },
  {
    id: "casio-ga2100",
    brand: "Casio",
    name: "G-Shock GA-2100",
    price: 180,
    category: "casual",
    mechanism: "quartz",
    image: "/images/products/casio-ga2100.jpg",
    desc: {
      ru: "«CasiOak» — неубиваемый восьмиугольник на каждый день. Лёгкий, тонкий, с защитой от всего.",
      uz: "«CasiOak» — har kunga buzilmas sakkiz burchak. Yengil, yupqa, hamma narsadan himoyalangan.",
    },
    popularity: 70,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const brands: string[] = Array.from(
  new Set(products.map((p) => p.brand)),
).sort();

export function formatPrice(usd: number): string {
  return "$" + usd.toLocaleString("ru-RU");
}
