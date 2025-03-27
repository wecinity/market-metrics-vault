
import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, BarChart3, Tag, Target, TrendingUp, DollarSign, ArrowUpRight, CalendarClock } from 'lucide-react';
import Card from '@/components/Card';
import MetricCard from '@/components/MetricCard';
import ChartContainer from '@/components/ChartContainer';
import StockCard from '@/components/StockCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Sample data - in a real app, this would come from an API or context
  const metrics = [
    { title: 'Portfolio Value', value: '24,892.00', prefix: '$', change: 2.4, icon: <DollarSign className="h-5 w-5" /> },
    { title: 'Today\'s Change', value: '521.34', prefix: '$', change: 2.1, icon: <TrendingUp className="h-5 w-5" /> },
    { title: 'Total Return', value: '12.84', suffix: '%', change: 5.3, icon: <ArrowUpRight className="h-5 w-5" /> },
    { title: 'Since', value: 'Jan 2023', icon: <CalendarClock className="h-5 w-5" /> },
  ];

  const topStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 174.79, change: 2.43, changePercent: 1.41, tags: ['Tech', 'Growth'] },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 327.89, change: 3.57, changePercent: 1.10, tags: ['Tech', 'Dividend'] },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 131.86, change: -0.98, changePercent: -0.74, tags: ['Tech', 'Momentum'] },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 136.03, change: 1.22, changePercent: 0.90, tags: ['Retail', 'Growth'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight"
        >
          Market Analytics
        </motion.h1>
      </div>
      
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            prefix={metric.prefix}
            suffix={metric.suffix}
            change={metric.change}
            icon={metric.icon}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/tags">
          <Card
            title="Tags Matching"
            subtitle="Find stocks that match specific characteristics"
            icon={<Tag className="h-5 w-5" />}
            delay={0.1}
          >
            <p className="text-muted-foreground text-sm">Filter stocks based on positive and negative traits for targeted investment opportunities.</p>
          </Card>
        </Link>
        
        <Link to="/strategies">
          <Card
            title="Strategies"
            subtitle="Explore curated investment strategies"
            icon={<Target className="h-5 w-5" />}
            delay={0.2}
          >
            <p className="text-muted-foreground text-sm">Access pre-defined strategies like Apex, Stride, Hazard, and Risk & Robust approaches.</p>
          </Card>
        </Link>
        
        <Link to="/watchlist">
          <Card
            title="Watchlist"
            subtitle="Track your favorite stocks"
            icon={<Bookmark className="h-5 w-5" />}
            delay={0.3}
          >
            <p className="text-muted-foreground text-sm">Create a personalized watchlist to monitor stocks of interest and track their performance.</p>
          </Card>
        </Link>
      </div>
      
      {/* Top Performing Stocks */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Top Performing Stocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topStocks.map((stock, index) => (
            <StockCard
              key={stock.symbol}
              symbol={stock.symbol}
              name={stock.name}
              price={stock.price}
              change={stock.change}
              changePercent={stock.changePercent}
              tags={stock.tags}
            />
          ))}
        </div>
      </div>
      
      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Market Trends"
          subtitle="Last 30 days performance"
          delay={0.4}
        >
          <div className="h-72 flex items-center justify-center text-muted-foreground">
            Chart visualization goes here
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Sector Performance"
          subtitle="Year-to-date performance by sector"
          delay={0.5}
        >
          <div className="h-72 flex items-center justify-center text-muted-foreground">
            Chart visualization goes here
          </div>
        </ChartContainer>
      </div>
    </motion.div>
  );
};

export default Dashboard;
