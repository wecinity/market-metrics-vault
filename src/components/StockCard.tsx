
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';

interface StockCardProps {
  symbol: string;
  name?: string;
  price: number;
  change: number;
  changePercent: number;
  tags?: string[];
  className?: string;
  onClick?: () => void;
}

const StockCard: React.FC<StockCardProps> = ({
  symbol,
  name,
  price,
  change,
  changePercent,
  tags = [],
  className,
  onClick,
}) => {
  const positive = change >= 0;

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "border border-border/40 rounded-xl p-4 bg-card shadow-sm cursor-pointer transition-all duration-200",
        className
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold">{symbol}</h3>
          {name && <p className="text-sm text-muted-foreground">{name}</p>}
        </div>
        <div className="flex items-center">
          <div
            className={cn(
              "text-sm font-medium flex items-center",
              positive ? "text-emerald-500" : "text-rose-500"
            )}
          >
            {positive ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
            {changePercent.toFixed(2)}%
          </div>
          <ExternalLink className="h-4 w-4 ml-2 text-muted-foreground" />
        </div>
      </div>
      
      <div className="flex items-end justify-between mt-2">
        <div>
          <p className="text-2xl font-bold">${price.toFixed(2)}</p>
          <p 
            className={cn(
              "text-sm font-medium",
              positive ? "text-emerald-500" : "text-rose-500"
            )}
          >
            {positive ? "+" : ""}{change.toFixed(2)}
          </p>
        </div>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-end">
            {tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="badge-pill bg-accent text-accent-foreground inline-block"
              >
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="badge-pill bg-secondary text-secondary-foreground inline-block">
                +{tags.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StockCard;
