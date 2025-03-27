
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
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
              {title && <h3 className="dashboard-card-title">{title}</h3>}
              {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
            </div>
          </div>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
