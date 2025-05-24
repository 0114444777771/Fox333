
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'الوصف' },
    { id: 'specifications', label: 'المواصفات' },
    { id: 'features', label: 'المميزات' },
  ];

  return (
    <div className="mb-12">
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-6 space-x-reverse">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`py-3 px-1 font-medium border-b-2 transition-colors duration-200 ${
                activeTab === tab.id 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md min-h-[200px]">
        {activeTab === 'description' && (
          <div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{product.description}</p>
          </div>
        )}
        
        {activeTab === 'specifications' && (
          <div>
            <ul className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="flex border-b border-gray-100 pb-3 last:border-b-0">
                  <span className="font-medium text-gray-700 w-1/3">{
                    key === 'dimensions' ? 'الأبعاد' : 
                    key === 'weight' ? 'الوزن' : 
                    key === 'capacity' ? 'السعة' : 
                    key === 'material' ? 'المادة' :
                    key === 'color' ? 'اللون' :
                    key === 'power' ? 'الطاقة' :
                    key === 'filter_life' ? 'عمر الفلتر' :
                    key === 'warranty' ? 'الضمان' : key
                  }</span>
                  <span className="text-gray-600">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'features' && (
          <div>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
