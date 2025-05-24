
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <Droplets className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">رايت واتر</span>
            </div>
            <p className="text-gray-600 mb-6">
              نقدم أفضل حلول معالجة المياه بأعلى معايير الجودة لضمان مياه نقية وصحية لكل منزل وشركة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">المنتجات</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">المنتجات</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">فلاتر المياه</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">أنظمة التناضح العكسي</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">محطات تنقية المياه</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">قطع غيار وصيانة</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-600">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-600">+966 12 345 6789</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-600">info@rightwater.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} رايت واتر. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
