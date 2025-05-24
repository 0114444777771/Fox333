
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Droplets } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden water-bg py-16 md:py-24">
      <div className="absolute inset-0 water-drop"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                مياه نقية <span className="text-blue-900">لحياة صحية</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                نقدم أفضل حلول معالجة المياه بأعلى معايير الجودة لضمان مياه نقية وصحية لكل منزل وشركة.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/products">
                    تسوق الآن
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/about">
                    تعرف علينا
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img  alt="أنظمة تنقية المياه من رايت واتر" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1623990088169-3eafccdec2c0" />
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <Droplets className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-bold text-primary">99.9%</p>
                      <p className="text-sm text-gray-600">نقاء المياه</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
