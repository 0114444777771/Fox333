
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product, 1);
    
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.name} إلى سلة التسوق`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/products/${product.id}`}>
        <Card className="product-card overflow-hidden h-full flex flex-col">
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            {product.isNew && (
              <Badge className="absolute top-2 right-2">جديد</Badge>
            )}
            {product.discount > 0 && (
              <Badge variant="destructive" className="absolute top-2 left-2">
                خصم {product.discount}%
              </Badge>
            )}
          </div>
          
          <CardContent className="flex-grow pt-4">
            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.shortDescription}</p>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                {product.discount > 0 ? (
                  <>
                    <span className="font-bold text-primary text-lg">{product.discountedPrice} ر.س</span>
                    <span className="text-gray-400 line-through text-sm mr-2">{product.price} ر.س</span>
                  </>
                ) : (
                  <span className="font-bold text-primary text-lg">{product.price} ر.س</span>
                )}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="pt-0">
            <Button 
              className="w-full gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              إضافة للسلة
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
