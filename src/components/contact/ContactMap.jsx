
import React from 'react';

const ContactMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">موقعنا</h2>
        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=46.6%2C24.6%2C46.8%2C24.8&amp;layer=mapnik" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            aria-hidden="false" 
            tabIndex="0"
            title="خريطة موقعنا"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
