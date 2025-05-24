
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ProductImageGallery = ({ image, name, isNew, discount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-inner">
        <img 
          src={image} 
          alt={name}
          className="w-full h-auto object-contain aspect-[4/3] p-4"
        />
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-green-500 text-white">جديد</Badge>
        )}
        {discount > 0 && (
          <Badge variant="destructive" className="absolute top-4 left-4">
            خصم {discount}%
          </Badge>
        )}
      </div>
    </motion.div>
  );
};

export default ProductImageGallery;
