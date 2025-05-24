
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuantityInput } from '@/components/ui/quantity-input';

const ProductInfo = ({ product, quantity, setQuantity, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">{product.name}</h1>
      <p className="text-gray-600 mb-6 text-lg">{product.shortDescription}</p>
      
      <div className="flex items-baseline mb-6 space-x-3 space-x-reverse">
        {product.discount > 0 ? (
          <>
            <span className="text-3xl font-bold text-primary">{product.discountedPrice} ر.س</span>
            <span className="text-gray-400 line-through text-xl">{product.price} ر.س</span>
          </>
        ) : (
          <span className="text-3xl font-bold text-primary">{product.price} ر.س</span>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <CheckCircle className={`h-5 w-5 ml-2 ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`} />
          <span className="font-medium">{product.stock > 0 ? 'متوفر في المخزون' : 'غير متوفر حالياً'}</span>
        </div>
        
        {product.stock > 0 && (
          <p className="text-sm text-gray-500">
            {product.stock < 10 ? `متبقي ${product.stock} فقط!` : 'كمية محدودة متوفرة'}
          </p>
        )}
      </div>
      
      <div className="mb-8">
        <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-gray-700">الكمية</label>
        <QuantityInput 
          id="quantity"
          value={quantity} 
          onChange={setQuantity}
          min={1}
          max={product.stock > 0 ? product.stock : 1}
        />
      </div>
      
      <Button 
        onClick={onAddToCart}
        className="w-full text-lg py-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
        size="lg"
        disabled={product.stock === 0}
      >
        <ShoppingCart className="ml-2 h-5 w-5" />
        إضافة إلى السلة
      </Button>
    </motion.div>
  );
};

export default ProductInfo;
