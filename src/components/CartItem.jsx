
import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuantityInput } from '@/components/ui/quantity-input';
import { useCart } from '@/contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateCartItemQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateCartItemQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b">
      <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-lg">{item.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{item.shortDescription}</p>
        <p className="font-semibold text-primary">{item.price} ر.س</p>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0">
        <QuantityInput 
          value={item.quantity} 
          onChange={handleQuantityChange}
          className="mr-4"
        />
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500 hover:text-destructive"
          onClick={handleRemove}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
