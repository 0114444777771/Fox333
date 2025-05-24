
import React, { useState, useEffect } from 'react';
import { getProductsByCategory } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

const RelatedProducts = ({ currentProductId, currentProductCategory }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (currentProductCategory) {
      const related = getProductsByCategory(currentProductCategory)
        .filter(p => p.id !== currentProductId)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [currentProductId, currentProductCategory]);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">منتجات ذات صلة</h2>
      <ProductGrid products={relatedProducts} />
    </div>
  );
};

export default RelatedProducts;
