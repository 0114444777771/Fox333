
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const { cartItems } = useCart();
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-3xl font-bold mb-8 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShoppingCart className="ml-2 h-6 w-6" />
          سلة التسوق
        </motion.h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CartSummary />
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-white rounded-lg shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-300" />
            </div>
            <h2 className="text-2xl font-medium mb-4">سلة التسوق فارغة</h2>
            <p className="text-gray-500 mb-8">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
            <Button asChild>
              <Link to="/products" className="flex items-center justify-center">
                <ArrowRight className="ml-2 h-4 w-4" />
                تصفح المنتجات
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
