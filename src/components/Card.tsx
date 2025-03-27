
import React from 'react';
import { motion, HTMLMotionProps, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title?: React.ReactNode | MotionValue<number> | MotionValue<string>;
  subtitle?: React.ReactNode | MotionValue<number> | MotionValue<string>;
  icon?: React.ReactNode;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  icon,
  className,
  children,
  delay = 0,
  ...props
}) => {
  const renderContent = (content: React.ReactNode | MotionValue<number> | MotionValue<string> | undefined) => {
    if (content === undefined) return null;
    
    if (content && typeof content === 'object' && 'get' in content && typeof content.get === 'function') {
      return String(content.get());
    }
    
    return content;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "dashboard-card group overflow-hidden",
        className
      )}
      {...props}
    >
      {(title || subtitle || icon) && (
        <div className="dashboard-card-header">
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            <div>
              {title && <h3 className="dashboard-card-title">{renderContent(title)}</h3>}
              {subtitle && <p className="text-sm text-muted-foreground">{renderContent(subtitle)}</p>}
            </div>
          </div>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
