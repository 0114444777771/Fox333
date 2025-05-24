
import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Award, Clock, Zap, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'جودة عالية',
    description: 'منتجاتنا مصنعة وفق أعلى معايير الجودة العالمية لضمان أفضل أداء'
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: 'مياه نقية',
    description: 'تزيل أنظمتنا أكثر من 99% من الشوائب والملوثات من الماء'
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'ضمان شامل',
    description: 'نقدم ضمان لمدة 5 سنوات على جميع منتجاتنا مع خدمة ما بعد البيع'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'عمر افتراضي طويل',
    description: 'تم تصميم منتجاتنا لتدوم لسنوات طويلة مع الحد الأدنى من الصيانة'
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'كفاءة عالية',
    description: 'أنظمتنا موفرة للطاقة وتعمل بكفاءة عالية لتوفير المياه النقية'
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'صديقة للبيئة',
    description: 'منتجاتنا صديقة للبيئة وتساعد في تقليل استخدام البلاستيك'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار رايت واتر؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحن نقدم أفضل حلول معالجة المياه بأعلى معايير الجودة لضمان مياه نقية وصحية لكل منزل وشركة
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={item}
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
