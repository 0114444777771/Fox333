
import React from 'react';
import { Truck, ShieldCheck, RotateCcw } from 'lucide-react';

const ProductShippingInfo = () => {
  const infoItems = [
    { icon: Truck, text: "شحن سريع وموثوق", description: "توصيل إلى باب منزلك خلال 2-5 أيام عمل." },
    { icon: ShieldCheck, text: "ضمان الجودة", description: "منتجاتنا تأتي مع ضمان يصل إلى 5 سنوات." },
    { icon: RotateCcw, text: "إرجاع سهل", description: "سياسة إرجاع مرنة خلال 14 يومًا." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {infoItems.map((item, index) => (
        <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <item.icon className="h-8 w-8 text-primary ml-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">{item.text}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShippingInfo;
