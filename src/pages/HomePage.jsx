
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <HeroSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">منتجاتنا المميزة</h2>
              <p className="text-gray-600">اكتشف أحدث وأفضل منتجات معالجة المياه</p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/products" className="flex items-center">
                عرض جميع المنتجات
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">مياه نقية لحياة صحية</h2>
                <p className="text-gray-600 mb-6">
                  في رايت واتر، نؤمن بأن المياه النقية هي أساس الحياة الصحية. نقدم حلول معالجة المياه المبتكرة والفعالة لضمان حصولك على مياه نقية وآمنة لك ولعائلتك.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm ml-2">✓</span>
                    <span>أنظمة تنقية متطورة بتقنيات عالمية</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm ml-2">✓</span>
                    <span>حلول مخصصة للمنازل والشركات</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm ml-2">✓</span>
                    <span>خدمة ما بعد البيع وصيانة دورية</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/about">تعرف علينا أكثر</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden"
              >
                <img  alt="نظام معالجة مياه متطور في منزل حديث" src="https://images.unsplash.com/photo-1623990088169-3eafccdec2c0" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      <TestimonialsSection />
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">احصل على استشارة مجانية</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية حول أفضل حلول معالجة المياه المناسبة لاحتياجاتك
          </p>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link to="/contact">تواصل معنا الآن</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
