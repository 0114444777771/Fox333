
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/ProductGrid';
import { products, categories } from '@/data/products';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = products;
    
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            منتجات رايت واتر
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            اكتشف مجموعتنا الواسعة من منتجات معالجة المياه عالية الجودة
          </motion.p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="ابحث عن منتج..."
                value={searchQuery}
                onChange={handleSearch}
                className="pr-10"
              />
            </div>
            <Button 
              variant="outline" 
              className="md:hidden flex items-center gap-2"
              onClick={toggleFilters}
              aria-expanded={showFilters}
              aria-controls="filters-panel"
            >
              <Filter className="h-4 w-4" />
              الفئات
            </Button>
          </div>

          <div id="filters-panel" className={`flex-wrap md:flex gap-2 ${showFilters ? 'flex' : 'hidden md:flex'}`}>
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              className="mb-2 md:mb-0"
              onClick={() => handleCategorySelect('')}
            >
              الكل
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                className="mb-2 md:mb-0"
                onClick={() => handleCategorySelect(category.name)}
              >
                {category.name} ({products.filter(p => p.category === category.name).length})
              </Button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لم يتم العثور على منتجات مطابقة للبحث</p>
            <Button 
              variant="link" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
              }}
            >
              إعادة ضبط البحث
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
