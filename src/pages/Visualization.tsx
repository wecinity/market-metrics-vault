
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import ChartContainer from '@/components/ChartContainer';
import MetricCard from '@/components/MetricCard';
import TagBadge from '@/components/TagBadge';
import { BarChart3, PieChart, TrendingUp, Activity, Target, ArrowUpRight, DollarSign, Percent } from 'lucide-react';

const Visualization = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
  
  // Sample data for the visualization
  const stockSymbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'];
  
  const stockData = {
    AAPL: {
      name: 'Apple Inc.',
      sector: 'Technology',
      totalScore: 85,
      currentPrice: 174.79,
      targetPrice: 195.50,
      upside: 11.85,
      metrics: {
        valuation: 78,
        growth: 90,
        stability: 82,
        performance: 88,
        totalReturn: 75
      },
      tags: ['Promising growth', 'Thriving profitability', 'Reliable total return']
    },
    MSFT: {
      name: 'Microsoft Corp.',
      sector: 'Technology',
      totalScore: 88,
      currentPrice: 327.89,
      targetPrice: 350.25,
      upside: 6.82,
      metrics: {
        valuation: 82,
        growth: 85,
        stability: 90,
        performance: 86,
        totalReturn: 82
      },
      tags: ['Resilient financial structure', 'Promising growth', 'Reliable total return']
    },
    GOOGL: {
      name: 'Alphabet Inc.',
      sector: 'Communication Services',
      totalScore: 86,
      currentPrice: 131.86,
      targetPrice: 148.20,
      upside: 12.39,
      metrics: {
        valuation: 80,
        growth: 87,
        stability: 84,
        performance: 87,
        totalReturn: 80
      },
      tags: ['Attractive valuation', 'Promising growth']
    },
    AMZN: {
      name: 'Amazon.com Inc.',
      sector: 'Consumer Cyclical',
      totalScore: 83,
      currentPrice: 136.03,
      targetPrice: 155.80,
      upside: 14.53,
      metrics: {
        valuation: 75,
        growth: 88,
        stability: 80,
        performance: 85,
        totalReturn: 79
      },
      tags: ['Promising growth', 'Thriving profitability']
    },
    TSLA: {
      name: 'Tesla Inc.',
      sector: 'Consumer Cyclical',
      totalScore: 79,
      currentPrice: 238.45,
      targetPrice: 275.15,
      upside: 15.39,
      metrics: {
        valuation: 65,
        growth: 95,
        stability: 70,
        performance: 84,
        totalReturn: 82
      },
      tags: ['Promising growth', 'Unfavorable valuation']
    }
  };
  
  const data = stockData[selectedSymbol as keyof typeof stockData];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">
            {selectedSymbol} - {data.name}
          </h1>
          <p className="text-muted-foreground">
            {data.sector} • Total Score: {data.totalScore}/100
          </p>
        </motion.div>
        
        <div className="flex gap-2">
          {stockSymbols.map((symbol) => (
            <button
              key={symbol}
              onClick={() => setSelectedSymbol(symbol)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                selectedSymbol === symbol
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Current Price"
          value={data.currentPrice.toFixed(2)}
          prefix="$"
          icon={<DollarSign className="h-5 w-5" />}
          delay={0.1}
        />
        <MetricCard
          title="Target Price"
          value={data.targetPrice.toFixed(2)}
          prefix="$"
          icon={<Target className="h-5 w-5" />}
          delay={0.2}
        />
        <MetricCard
          title="Upside Potential"
          value={data.upside.toFixed(2)}
          suffix="%"
          change={data.upside}
          icon={<ArrowUpRight className="h-5 w-5" />}
          delay={0.3}
        />
        <MetricCard
          title="Total Score"
          value={data.totalScore}
          suffix="/100"
          icon={<Activity className="h-5 w-5" />}
          delay={0.4}
        />
      </div>
      
      <Card title="Tags" delay={0.5}>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, index) => {
            // Determine tag type based on content
            const type = tag.includes('Promising') || tag.includes('Thriving') || tag.includes('Attractive') || tag.includes('Resilient') || tag.includes('Reliable')
              ? 'positive'
              : tag.includes('Unfavorable') || tag.includes('Stagnant') || tag.includes('Struggling') || tag.includes('Vulnerable') || tag.includes('Inconsistent')
                ? 'negative'
                : 'neutral';
            
            return (
              <TagBadge key={index} type={type}>
                {tag}
              </TagBadge>
            );
          })}
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Score Breakdown"
          subtitle={`${selectedSymbol} performance metrics`}
          delay={0.6}
        >
          <div className="h-72 grid grid-cols-5 gap-2 items-end px-4">
            {Object.entries(data.metrics).map(([key, value], index) => (
              <div key={key} className="flex flex-col items-center">
                <div 
                  className="w-full bg-secondary relative overflow-hidden rounded-md"
                  style={{ height: `${value * 0.72}px` }}  
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className={`absolute bottom-0 left-0 w-full ${
                      index === 0 ? 'bg-primary' :
                      index === 1 ? 'bg-emerald-500' :
                      index === 2 ? 'bg-blue-500' :
                      index === 3 ? 'bg-amber-500' :
                      'bg-rose-500'
                    }`}
                  />
                </div>
                <p className="mt-2 text-xs font-medium capitalize">{key}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Historical Dividends"
          subtitle={`${selectedSymbol} dividend performance`}
          delay={0.7}
        >
          <div className="h-72 flex items-center justify-center text-muted-foreground">
            <Percent className="h-16 w-16 opacity-20" />
          </div>
        </ChartContainer>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Valuation & Profitability"
          subtitle={`${selectedSymbol} compared to sector`}
          delay={0.8}
        >
          <div className="h-72 flex items-center justify-center text-muted-foreground">
            <PieChart className="h-16 w-16 opacity-20" />
          </div>
        </ChartContainer>
        
        <ChartContainer
          title="Financial Stability"
          subtitle={`${selectedSymbol} debt metrics`}
          delay={0.9}
        >
          <div className="h-72 flex items-center justify-center text-muted-foreground">
            <BarChart3 className="h-16 w-16 opacity-20" />
          </div>
        </ChartContainer>
      </div>
    </motion.div>
  );
};

export default Visualization;
