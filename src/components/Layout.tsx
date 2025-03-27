
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 pl-[240px] pt-16"
        >
          <div className="container py-6 mx-auto">
            <AnimatePresence mode="wait">
              {children}
            </AnimatePresence>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
