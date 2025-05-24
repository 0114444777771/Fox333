
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; 
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { getProductById } from '@/data/products'; 
import ProductImageGallery from '@/components/product-detail/ProductImageGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductTabs from '@/components/product-detail/ProductTabs';
import ProductShippingInfo from '@/components/product-detail/ProductShippingInfo';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import Breadcrumbs from '@/components/product-detail/Breadcrumbs';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    const fetchedProduct = getProductById(id);
    setProduct(fetchedProduct);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${quantity} ${quantity > 1 ? 'وحدات' : 'وحدة'} من ${product.name} إلى سلة التسوق`,
      duration: 3000,
    });
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl">جاري تحميل المنتج...</p>
      </div>
    );
  }
  
  const breadcrumbItems = [
    { label: "المنتجات", path: "/products" },
    { label: product.category, path: `/products?category=${encodeURIComponent(product.category)}` },
    { label: product.name, path: `/products/${product.id}` }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 bg-white p-6 rounded-lg shadow-lg">
          <ProductImageGallery image={product.image} name={product.name} isNew={product.isNew} discount={product.discount} />
          <ProductInfo 
            product={product} 
            quantity={quantity} 
            setQuantity={setQuantity} 
            onAddToCart={handleAddToCart}
          />
        </div>
        
        <ProductTabs product={product} />
        <ProductShippingInfo />
        <RelatedProducts currentProductId={product.id} currentProductCategory={product.category} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
