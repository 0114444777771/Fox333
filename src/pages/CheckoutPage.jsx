
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard } from 'lucide-react';
import CheckoutForm from '@/components/CheckoutForm';
import { useCart } from '@/contexts/CartContext';

const CheckoutPage = () => {
  const { cartItems } = useCart();
  
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );
  
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;
  
  // Redirect if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">الدفع</h1>
          <p className="text-gray-500 mb-6">سلة التسوق فارغة، لا يمكن متابعة عملية الدفع</p>
          <Link 
            to="/products" 
            className="text-primary hover:underline flex items-center justify-center"
          >
            <ArrowRight className="ml-2 h-4 w-4" />
            العودة للتسوق
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/cart" className="flex items-center text-primary hover:underline">
            <ArrowRight className="h-4 w-4 ml-1" />
            العودة إلى سلة التسوق
          </Link>
        </div>
        
        <motion.h1 
          className="text-3xl font-bold mb-8 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CreditCard className="ml-2 h-6 w-6" />
          إتمام الطلب
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <CheckoutForm />
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6 sticky top-24"
            >
              <h3 className="text-lg font-semibold mb-4">ملخص الطلب</h3>
              
              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 text-sm block">
                        {item.quantity} × {item.price} ر.س
                      </span>
                    </div>
                    <span>{(item.price * item.quantity).toFixed(2)} ر.س</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">المجموع الفرعي</span>
                  <span>{subtotal.toFixed(2)} ر.س</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الشحن</span>
                  <span>{shipping.toFixed(2)} ر.س</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span>الإجمالي</span>
                    <span className="text-primary">{total.toFixed(2)} ر.س</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
