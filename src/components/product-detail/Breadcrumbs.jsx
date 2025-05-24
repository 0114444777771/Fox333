
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronLeft className="h-4 w-4 text-gray-400 mx-1" />}
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-700">{item.label}</span>
            ) : (
              <Link to={item.path} className="hover:text-primary hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
