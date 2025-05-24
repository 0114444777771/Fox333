
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            من نحن
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            شركة رايت واتر هي شركة رائدة في مجال معالجة المياه وتقديم حلول متكاملة للمنازل والشركات
          </motion.p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                تأسست شركة رايت واتر في عام 2010 بهدف توفير حلول مبتكرة وفعالة لمعالجة المياه. بدأنا رحلتنا بفريق صغير من الخبراء المتخصصين في مجال تنقية المياه، وسرعان ما نمت الشركة لتصبح واحدة من الشركات الرائدة في المملكة العربية السعودية.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                على مدار السنوات، قمنا بتطوير وتحسين منتجاتنا باستمرار لتلبية احتياجات عملائنا المتنوعة. نفتخر بأننا قدمنا خدماتنا لأكثر من 10,000 عميل، من المنازل الصغيرة إلى المصانع والشركات الكبرى.
              </p>
              <p className="text-gray-600 leading-relaxed">
                اليوم، تواصل رايت واتر التزامها بتقديم أفضل حلول معالجة المياه بأعلى معايير الجودة، مع التركيز على الابتكار والاستدامة وخدمة العملاء المتميزة.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img  alt="فريق رايت واتر" className="w-full h-auto" src="https://images.unsplash.com/photo-1621921712505-a2228ad77c76" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نلتزم بمجموعة من القيم الأساسية التي توجه كل ما نقوم به
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">الجودة</h3>
              <p className="text-gray-600">
                نلتزم بتقديم منتجات وخدمات بأعلى معايير الجودة دون تنازل
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">العملاء أولاً</h3>
              <p className="text-gray-600">
                نضع رضا العملاء في مقدمة أولوياتنا ونسعى دائماً لتجاوز توقعاتهم
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">الابتكار</h3>
              <p className="text-gray-600">
                نستثمر باستمرار في البحث والتطوير لتقديم حلول مبتكرة وفعالة
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">الاستدامة</h3>
              <p className="text-gray-600">
                نلتزم بتطوير منتجات صديقة للبيئة تساهم في الحفاظ على الموارد المائية
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">فريقنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              يتكون فريقنا من خبراء متخصصين في مجال معالجة المياه وتقنياتها
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-square">
                <img  alt="أحمد الشمري - المدير التنفيذي" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601125025578-b2a927b8a308" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">أحمد الشمري</h3>
                <p className="text-primary">المدير التنفيذي</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-square">
                <img  alt="سارة العتيبي - مديرة التطوير" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1510354420147-de6b4df2b829" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">سارة العتيبي</h3>
                <p className="text-primary">مديرة التطوير</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-square">
                <img  alt="محمد القحطاني - رئيس قسم الهندسة" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1678523418981-6757a3e78107" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">محمد القحطاني</h3>
                <p className="text-primary">رئيس قسم الهندسة</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلى عائلة رايت واتر</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            نحن ملتزمون بتوفير مياه نقية وصحية لكل منزل وشركة في المملكة العربية السعودية
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white text-primary font-bold py-3 px-6 rounded-lg"
            >
              +10,000 عميل
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white text-primary font-bold py-3 px-6 rounded-lg"
            >
              +50 منتج
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white text-primary font-bold py-3 px-6 rounded-lg"
            >
              +15 سنة خبرة
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
