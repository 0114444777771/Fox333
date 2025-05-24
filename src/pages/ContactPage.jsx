
import React from 'react';
import { motion } from 'framer-motion';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactSocial from '@/components/contact/ContactSocial';
import ContactMap from '@/components/contact/ContactMap';

const ContactPage = () => {
  return (
    <div>
      <ContactHeader />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">تواصل معنا</h2>
                <p className="text-gray-600 mb-8">
                  نحن نقدر تواصلك معنا ونسعى دائماً لتقديم أفضل خدمة لعملائنا. يرجى ملء النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.
                </p>
                <ContactForm />
              </motion.div>
            </div>
            
            <div>
              <ContactInfo />
              <ContactSocial />
            </div>
          </div>
        </div>
      </section>
      
      <ContactMap />
    </div>
  );
};

export default ContactPage;
