
import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          اتصل بنا
        </motion.h1>
        <motion.p 
          className="text-xl text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          نحن هنا للإجابة على جميع استفساراتك ومساعدتك في اختيار المنتج المناسب لاحتياجاتك
        </motion.p>
      </div>
    </div>
  );
};

export default ContactHeader;
