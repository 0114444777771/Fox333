
export const products = [
  {
    id: 1,
    name: "فلتر مياه منزلي 5 مراحل",
    shortDescription: "نظام تنقية مياه منزلي متكامل بخمس مراحل",
    description: "فلتر مياه منزلي متطور يتكون من 5 مراحل لتنقية المياه بشكل كامل. يزيل الشوائب والكلور والمعادن الثقيلة والبكتيريا، ويحسن طعم ورائحة الماء. سهل التركيب والصيانة، مع عمر افتراضي طويل للفلاتر.",
    price: 1200,
    discount: 10,
    discountedPrice: 1080,
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "فلاتر منزلية",
    isNew: true,
    features: [
      "5 مراحل تنقية",
      "إزالة الكلور والمعادن الثقيلة",
      "تحسين طعم ورائحة الماء",
      "سهل التركيب والصيانة",
      "عمر افتراضي طويل للفلاتر"
    ],
    specifications: {
      dimensions: "40 × 20 × 45 سم",
      weight: "5 كجم",
      capacity: "50 لتر/ساعة",
      warranty: "5 سنوات"
    },
    stock: 25
  },
  {
    id: 2,
    name: "نظام تناضح عكسي منزلي",
    shortDescription: "نظام تناضح عكسي لتنقية المياه بنسبة 99.9%",
    description: "نظام تناضح عكسي متطور يزيل 99.9% من الشوائب والملوثات من الماء. يتضمن 7 مراحل تنقية مع خزان سعة 10 لترات. يوفر مياه نقية صالحة للشرب والطهي. سهل التركيب مع لوحة تحكم رقمية لمراقبة جودة المياه.",
    price: 2500,
    discount: 0,
    discountedPrice: 2500,
    image: "https://images.unsplash.com/photo-1585687433886-a1144eedb350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "أنظمة تناضح عكسي",
    isNew: false,
    features: [
      "7 مراحل تنقية",
      "إزالة 99.9% من الملوثات",
      "خزان سعة 10 لترات",
      "لوحة تحكم رقمية",
      "مؤشر جودة المياه"
    ],
    specifications: {
      dimensions: "50 × 30 × 50 سم",
      weight: "8 كجم",
      capacity: "75 لتر/ساعة",
      warranty: "5 سنوات"
    },
    stock: 15
  },
  {
    id: 3,
    name: "محطة تنقية مياه منزلية",
    shortDescription: "محطة متكاملة لتنقية وتعقيم المياه المنزلية",
    description: "محطة تنقية مياه منزلية متكاملة تجمع بين التناضح العكسي والأشعة فوق البنفسجية لتنقية وتعقيم المياه. تزيل الشوائب والبكتيريا والفيروسات، وتحسن طعم ورائحة الماء. سعة كبيرة مناسبة للمنازل الكبيرة.",
    price: 3500,
    discount: 15,
    discountedPrice: 2975,
    image: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "محطات تنقية",
    isNew: true,
    features: [
      "تناضح عكسي مع أشعة فوق بنفسجية",
      "إزالة البكتيريا والفيروسات",
      "خزان سعة 20 لتر",
      "شاشة رقمية للتحكم",
      "نظام إنذار للصيانة"
    ],
    specifications: {
      dimensions: "60 × 40 × 120 سم",
      weight: "15 كجم",
      capacity: "100 لتر/ساعة",
      warranty: "7 سنوات"
    },
    stock: 8
  },
  {
    id: 4,
    name: "فلتر مياه للحنفية",
    shortDescription: "فلتر مياه يركب مباشرة على الحنفية",
    description: "فلتر مياه صغير الحجم يركب مباشرة على الحنفية. يزيل الشوائب والكلور ويحسن طعم الماء. سهل التركيب والاستخدام، مثالي للمطابخ والحمامات. يمكن التبديل بين الماء المفلتر وغير المفلتر بسهولة.",
    price: 350,
    discount: 0,
    discountedPrice: 350,
    image: "https://images.unsplash.com/photo-1593543294918-ca3634eef214?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "فلاتر منزلية",
    isNew: false,
    features: [
      "تركيب سهل على الحنفية",
      "إزالة الكلور والشوائب",
      "تحسين طعم الماء",
      "تبديل سهل بين الماء المفلتر وغير المفلتر",
      "عمر افتراضي 6 أشهر"
    ],
    specifications: {
      dimensions: "10 × 5 × 5 سم",
      weight: "0.3 كجم",
      capacity: "2 لتر/دقيقة",
      warranty: "1 سنة"
    },
    stock: 50
  },
  {
    id: 5,
    name: "فلتر مياه تحت الحوض",
    shortDescription: "فلتر مياه يركب تحت حوض المطبخ",
    description: "فلتر مياه يركب تحت حوض المطبخ مع صنبور خاص. يتكون من 3 مراحل تنقية لإزالة الشوائب والكلور والمعادن الثقيلة. سهل التركيب والصيانة، مع عمر افتراضي طويل للفلاتر. مثالي للمطابخ المنزلية.",
    price: 850,
    discount: 5,
    discountedPrice: 807.5,
    image: "https://images.unsplash.com/photo-1603016413333-5c17c2180b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "فلاتر منزلية",
    isNew: false,
    features: [
      "3 مراحل تنقية",
      "صنبور خاص للمياه المفلترة",
      "إزالة الكلور والمعادن الثقيلة",
      "سهل التركيب والصيانة",
      "عمر افتراضي 12 شهر للفلاتر"
    ],
    specifications: {
      dimensions: "30 × 15 × 40 سم",
      weight: "3 كجم",
      capacity: "30 لتر/ساعة",
      warranty: "3 سنوات"
    },
    stock: 20
  },
  {
    id: 6,
    name: "محطة تنقية مياه صناعية",
    shortDescription: "محطة تنقية مياه للمصانع والشركات",
    description: "محطة تنقية مياه صناعية عالية السعة مصممة للمصانع والشركات. تعالج كميات كبيرة من المياه بكفاءة عالية. تزيل الشوائب والملوثات الكيميائية والبكتيريا. مزودة بنظام تحكم آلي ومراقبة عن بعد.",
    price: 15000,
    discount: 0,
    discountedPrice: 15000,
    image: "https://images.unsplash.com/photo-1611921561569-f8072d6c6d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "محطات تنقية",
    isNew: true,
    features: [
      "سعة عالية للاستخدام الصناعي",
      "نظام تحكم آلي",
      "مراقبة عن بعد",
      "إزالة الملوثات الكيميائية",
      "توفير في استهلاك الطاقة"
    ],
    specifications: {
      dimensions: "200 × 150 × 180 سم",
      weight: "250 كجم",
      capacity: "2000 لتر/ساعة",
      warranty: "10 سنوات"
    },
    stock: 3
  },
  {
    id: 7,
    name: "فلتر مياه الاستحمام",
    shortDescription: "فلتر مياه يركب على رأس الدش",
    description: "فلتر مياه يركب على رأس الدش لإزالة الكلور والشوائب من مياه الاستحمام. يحمي البشرة والشعر من آثار الكلور الضارة. سهل التركيب ويناسب معظم أنواع الدش. يحتوي على مواد طبيعية لتنقية المياه.",
    price: 250,
    discount: 0,
    discountedPrice: 250,
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "فلاتر منزلية",
    isNew: false,
    features: [
      "إزالة الكلور من مياه الاستحمام",
      "حماية البشرة والشعر",
      "سهل التركيب",
      "يناسب معظم أنواع الدش",
      "عمر افتراضي 6 أشهر"
    ],
    specifications: {
      dimensions: "8 × 8 × 12 سم",
      weight: "0.4 كجم",
      capacity: "12 لتر/دقيقة",
      warranty: "1 سنة"
    },
    stock: 35
  },
  {
    id: 8,
    name: "خزان مياه مع فلتر",
    shortDescription: "خزان مياه منزلي مزود بنظام تنقية",
    description: "خزان مياه منزلي سعة 100 لتر مزود بنظام تنقية مدمج. يخزن المياه النقية ويحافظ على جودتها. مصنوع من مواد آمنة صحياً ومقاومة للبكتيريا. مثالي للمنازل والمكاتب الصغيرة.",
    price: 1800,
    discount: 8,
    discountedPrice: 1656,
    image: "https://images.unsplash.com/photo-1571907483083-af70aeda3086?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "خزانات مياه",
    isNew: false,
    features: [
      "سعة 100 لتر",
      "نظام تنقية مدمج",
      "مواد آمنة صحياً",
      "مقاوم للبكتيريا",
      "سهل التنظيف والصيانة"
    ],
    specifications: {
      dimensions: "80 × 60 × 100 سم",
      weight: "12 كجم",
      capacity: "100 لتر",
      warranty: "5 سنوات"
    },
    stock: 10
  }
];

export const categories = [
  { id: 1, name: "فلاتر منزلية", count: 4 },
  { id: 2, name: "أنظمة تناضح عكسي", count: 1 },
  { id: 3, name: "محطات تنقية", count: 2 },
  { id: 4, name: "خزانات مياه", count: 1 }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isNew || product.discount > 0).slice(0, 4);
};
