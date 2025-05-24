
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    role: 'مالك منزل',
    content: 'أفضل استثمار قمت به لمنزلي. المياه أصبحت نقية وطعمها رائع. أنصح الجميع بمنتجات رايت واتر.',
    rating: 5,
    image: '/testimonial1.jpg'
  },
  {
    id: 2,
    name: 'سارة عبدالله',
    role: 'مديرة مطعم',
    content: 'نظام التناضح العكسي من رايت واتر غير طريقة عملنا بالكامل. جودة الطعام والمشروبات تحسنت بشكل ملحوظ.',
    rating: 5,
    image: '/testimonial2.jpg'
  },
  {
    id: 3,
    name: 'خالد العمري',
    role: 'مدير مصنع',
    content: 'استخدمنا محطة معالجة المياه الصناعية من رايت واتر، وكانت النتائج مذهلة. توفير في التكاليف وجودة أفضل.',
    rating: 4,
    image: '/testimonial3.jpg'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفتخر بثقة عملائنا ورضاهم عن منتجاتنا وخدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img  alt={`صورة ${testimonial.name}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558154839-19f6ddb31384" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
