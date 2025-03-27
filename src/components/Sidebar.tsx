
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart3, 
  Bookmark, 
  Tag, 
  Target, 
  Info, 
  Menu
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Tag, label: 'Tags Matching', path: '/tags' },
  { icon: Target, label: 'Strategies', path: '/strategies' },
  { icon: Bookmark, label: 'Watchlist', path: '/watchlist' },
  { icon: BarChart3, label: 'Visualization', path: '/visualization' },
  { icon: Info, label: 'Info', path: '/info' },
];

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const sidebarVariants = {
    expanded: { width: 240 },
    collapsed: { width: 80 },
  };

  return (
    <motion.aside
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 top-16 z-30 flex h-[calc(100vh-4rem)] flex-col border-r border-border/40 bg-background"
    >
      <div className="flex h-[60px] items-center border-b border-border/40 px-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-md p-2 text-muted-foreground hover:bg-accent"
        >
          <Menu className="h-5 w-5" />
        </button>
        {!isCollapsed && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="ml-2 text-lg font-medium"
          >
            Navigation
          </motion.h2>
        )}
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="flex flex-col gap-1 px-2">
          {sidebarItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`flex h-10 items-center rounded-md px-3 transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="ml-3 font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
