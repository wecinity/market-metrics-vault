
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <motion.a 
            href="/" 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div 
              className="h-8 w-8 rounded-md bg-primary flex items-center justify-center"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <span className="text-primary-foreground font-semibold">M</span>
            </motion.div>
            <span className="font-medium text-xl">MarketVault</span>
          </motion.a>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <motion.nav 
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Dashboard</a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Watchlist</a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Analytics</a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                More
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-md border border-border/40 bg-card p-2 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent">Help & Support</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent">Preferences</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent">About</a>
              </div>
            </div>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
