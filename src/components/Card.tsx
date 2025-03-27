
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
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
              {title && <h3 className="dashboard-card-title">{typeof title === 'object' ? title : String(title)}</h3>}
              {subtitle && <p className="text-sm text-muted-foreground">{typeof subtitle === 'object' ? subtitle : String(subtitle)}</p>}
            </div>
          </div>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
