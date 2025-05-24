
import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const QuantityInput = React.forwardRef(({ 
  className, 
  value, 
  onChange, 
  min = 1, 
  max = 99,
  ...props 
}, ref) => {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    } else if (e.target.value === "") {
      onChange(min); 
    }
  };

  return (
    <div 
      className={cn("flex items-center border rounded-md overflow-hidden", className)}
      {...props}
    >
      <Button 
        type="button"
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 rounded-none border-r"
        onClick={handleDecrement}
        disabled={value <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>
      
      <input
        ref={ref}
        type="number"
        value={value}
        onChange={handleChange}
        onBlur={(e) => { if(e.target.value === "") onChange(min);}}
        min={min}
        max={max}
        className="h-9 w-12 text-center border-0 focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      
      <Button 
        type="button"
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 rounded-none border-l"
        onClick={handleIncrement}
        disabled={value >= max}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
});

QuantityInput.displayName = "QuantityInput";

export { QuantityInput };
