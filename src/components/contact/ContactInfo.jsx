
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: "العنوان",
    lines: ["شارع الملك فهد، حي الورود", "الرياض، المملكة العربية السعودية"]
  },
  {
    icon: Phone,
    title: "الهاتف",
    lines: ["+966 12 345 6789", "+966 12 345 6780"]
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    lines: ["info@rightwater.com", "support@rightwater.com"]
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    lines: ["الأحد - الخميس: 9:00 ص - 5:00 م", "الجمعة - السبت: مغلق"]
  }
];

const ContactInfoItem = ({ icon: Icon, title, lines }) => (
  <div className="flex items-start">
    <div className="bg-blue-50 rounded-full p-3 ml-4 flex-shrink-0">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      {lines.map((line, index) => (
        <p key={index} className="text-gray-600 mt-1">{line}</p>
      ))}
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-xl font-semibold mb-6">معلومات التواصل</h3>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <ContactInfoItem key={index} {...detail} />
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
