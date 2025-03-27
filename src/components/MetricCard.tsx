
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  prefix = '',
  suffix = '',
  change,
  icon,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "metric-card relative overflow-hidden",
        className
      )}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
        <p className="metric-value">
          {prefix}{value}{suffix}
        </p>
        {typeof change !== 'undefined' && (
          <div 
            className={cn(
              "flex items-center text-xs font-medium",
              change >= 0 ? "text-emerald-500" : "text-rose-500"
            )}
          >
            {change >= 0 ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
            {Math.abs(change).toFixed(1)}%
          </div>
        )}
      </div>
      <div className="absolute bottom-0 right-0 h-16 w-16 opacity-5">
        {icon && React.cloneElement(icon as React.ReactElement, { size: 64 })}
      </div>
    </motion.div>
  );
};

export default MetricCard;
