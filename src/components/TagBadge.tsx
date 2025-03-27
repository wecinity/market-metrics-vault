
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TagBadgeProps {
  children: React.ReactNode;
  type?: 'positive' | 'negative' | 'neutral';
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const TagBadge: React.FC<TagBadgeProps> = ({
  children,
  type = 'neutral',
  selected = false,
  onClick,
  className,
}) => {
  const getTypeClasses = () => {
    switch (type) {
      case 'positive':
        return selected 
          ? 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800'
          : 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-900 dark:hover:bg-emerald-900/30';
      case 'negative':
        return selected 
          ? 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-800'
          : 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100 hover:text-rose-800 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-900 dark:hover:bg-rose-900/30';
      default:
        return selected 
          ? 'bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600'
          : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700';
    }
  };

  return (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer",
        getTypeClasses(),
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );
};

export default TagBadge;
