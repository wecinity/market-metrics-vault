
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import DataGrid from '@/components/DataGrid';
import { Target, AlertTriangle, LineChart, ShieldCheck } from 'lucide-react';

const Strategies = () => {
  const [selectedStrategy, setSelectedStrategy] = useState('apex');

  const strategies = [
    {
      id: 'apex',
      name: 'Apex',
      description: 'Implies the highest quality or best-in-class, capturing the allure of top-tier selections.',
      icon: <Target className="h-5 w-5" />,
      count: 24
    },
    {
      id: 'stride',
      name: 'Stride',
      description: 'Highlights stocks showing notable recent gains in financial strength.',
      icon: <LineChart className="h-5 w-5" />,
      count: 31
    },
    {
      id: 'hazard',
      name: 'Hazard',
      description: 'Evokes a sense of navigating financial danger while selectively avoiding high-risk stocks.',
      icon: <AlertTriangle className="h-5 w-5" />,
      count: 18
    },
    {
      id: 'risk-robust',
      name: 'Risk & Robust',
      description: 'Excludes high-risk stocks, focusing on those with solid financial fundamentals and resilience.',
      icon: <ShieldCheck className="h-5 w-5" />,
      count: 27
    }
  ];

  // Sample data - in a real app, this would be filtered based on selected strategy
  const strategyStocks = {
    apex: [
      { Symbol: 'AAPL', Sector: 'Technology', 'Total Score': 92, 'Valuation': 88, 'Growth': 95, 'Stability': 90, 'Performance': 94 },
      { Symbol: 'MSFT', Sector: 'Technology', 'Total Score': 94, 'Valuation': 86, 'Growth': 92, 'Stability': 96, 'Performance': 93 },
      { Symbol: 'NVDA', Sector: 'Technology', 'Total Score': 90, 'Valuation': 82, 'Growth': 98, 'Stability': 85, 'Performance': 96 },
      { Symbol: 'GOOGL', Sector: 'Communication Services', 'Total Score': 91, 'Valuation': 85, 'Growth': 90, 'Stability': 93, 'Performance': 90 },
      { Symbol: 'BRK.B', Sector: 'Financials', 'Total Score': 89, 'Valuation': 90, 'Growth': 84, 'Stability': 95, 'Performance': 88 },
    ],
    stride: [
      { Symbol: 'TSLA', Sector: 'Consumer Cyclical', 'Total Score': 86, 'Valuation': 75, 'Growth': 97, 'Stability': 78, 'Performance': 92 },
      { Symbol: 'AMD', Sector: 'Technology', 'Total Score': 85, 'Valuation': 80, 'Growth': 94, 'Stability': 82, 'Performance': 88 },
      { Symbol: 'CRM', Sector: 'Technology', 'Total Score': 87, 'Valuation': 82, 'Growth': 91, 'Stability': 84, 'Performance': 90 },
      { Symbol: 'PYPL', Sector: 'Financials', 'Total Score': 83, 'Valuation': 85, 'Growth': 89, 'Stability': 80, 'Performance': 85 },
      { Symbol: 'SQ', Sector: 'Financials', 'Total Score': 82, 'Valuation': 78, 'Growth': 93, 'Stability': 75, 'Performance': 87 },
    ],
    hazard: [
      { Symbol: 'XOM', Sector: 'Energy', 'Total Score': 78, 'Valuation': 84, 'Growth': 75, 'Stability': 80, 'Performance': 76 },
      { Symbol: 'CVX', Sector: 'Energy', 'Total Score': 79, 'Valuation': 82, 'Growth': 78, 'Stability': 83, 'Performance': 74 },
      { Symbol: 'KO', Sector: 'Consumer Defensive', 'Total Score': 81, 'Valuation': 75, 'Growth': 72, 'Stability': 90, 'Performance': 78 },
      { Symbol: 'PEP', Sector: 'Consumer Defensive', 'Total Score': 80, 'Valuation': 73, 'Growth': 75, 'Stability': 88, 'Performance': 77 },
      { Symbol: 'JNJ', Sector: 'Healthcare', 'Total Score': 82, 'Valuation': 76, 'Growth': 70, 'Stability': 92, 'Performance': 75 },
    ],
    'risk-robust': [
      { Symbol: 'COST', Sector: 'Consumer Defensive', 'Total Score': 84, 'Valuation': 78, 'Growth': 82, 'Stability': 88, 'Performance': 84 },
      { Symbol: 'HD', Sector: 'Consumer Cyclical', 'Total Score': 85, 'Valuation': 80, 'Growth': 79, 'Stability': 87, 'Performance': 86 },
      { Symbol: 'UNH', Sector: 'Healthcare', 'Total Score': 86, 'Valuation': 79, 'Growth': 84, 'Stability': 89, 'Performance': 87 },
      { Symbol: 'V', Sector: 'Financials', 'Total Score': 88, 'Valuation': 82, 'Growth': 86, 'Stability': 91, 'Performance': 89 },
      { Symbol: 'MA', Sector: 'Financials', 'Total Score': 87, 'Valuation': 81, 'Growth': 85, 'Stability': 90, 'Performance': 88 },
    ]
  };

  // Configure grid columns
  const columns = [
    { key: 'Symbol', title: 'Symbol' },
    { key: 'Sector', title: 'Sector' },
    { key: 'Total Score', title: 'Total Score', 
      render: (value: number) => (
        <div className="font-semibold">{value}</div>
      ) 
    },
    { key: 'Valuation', title: 'Valuation', 
      render: (value: number) => (
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-24 overflow-hidden">
          <div 
            className="bg-primary h-full rounded-full" 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      ) 
    },
    { key: 'Growth', title: 'Growth', 
      render: (value: number) => (
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-24 overflow-hidden">
          <div 
            className="bg-emerald-500 h-full rounded-full" 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      ) 
    },
    { key: 'Stability', title: 'Stability', 
      render: (value: number) => (
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-24 overflow-hidden">
          <div 
            className="bg-blue-500 h-full rounded-full" 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      ) 
    },
    { key: 'Performance', title: 'Performance', 
      render: (value: number) => (
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-24 overflow-hidden">
          <div 
            className="bg-amber-500 h-full rounded-full" 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      ) 
    },
  ];

  const selectedStrategyData = strategies.find(s => s.id === selectedStrategy);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight"
      >
        Investment Strategies
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {strategies.map((strategy, index) => (
          <Card
            key={strategy.id}
            className={`cursor-pointer transition-all ${selectedStrategy === strategy.id ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setSelectedStrategy(strategy.id)}
            delay={index * 0.1}
          >
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                {strategy.icon}
              </div>
              <h3 className="text-lg font-semibold">{strategy.name}</h3>
              <span className="ml-auto bg-secondary text-secondary-foreground text-xs font-medium rounded-full px-2 py-1">
                {strategy.count} stocks
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{strategy.description}</p>
          </Card>
        ))}
      </div>
      
      <Card 
        title={selectedStrategyData?.name || 'Strategy'} 
        subtitle={selectedStrategyData?.description || ''}
        icon={selectedStrategyData?.icon}
        delay={0.2}
      >
        <DataGrid 
          data={strategyStocks[selectedStrategy as keyof typeof strategyStocks]} 
          columns={columns} 
          onRowClick={(row) => console.log('Clicked row:', row)}
        />
      </Card>
    </motion.div>
  );
};

export default Strategies;
