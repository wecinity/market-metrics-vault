
import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import { Info, BarChart3, TrendingUp, Activity, AlertTriangle, DollarSign } from 'lucide-react';

const InfoPage = () => {
  const metricsCategories = [
    {
      id: 'valuation',
      title: 'Valuation',
      icon: <DollarSign className="h-5 w-5" />,
      description: 'Scoring by percentile ranking in sector and market.',
      metrics: [
        {
          name: 'Price-to-Earnings',
          description: 'Direct indicator of the market\'s expectations regarding a company\'s growth and profitability.'
        },
        {
          name: 'Price-to-Book',
          description: 'Reflects how the market values a company\'s net assets compared to its share price.'
        },
        {
          name: 'Market Capitalization',
          description: 'Serving as an essential metric for assessing a company\'s size and investment potential.'
        },
      ],
      note: 'We employ outlier removal using the Interquartile Range method to ensure data integrity and relevance.'
    },
    {
      id: 'growth',
      title: 'Growth',
      icon: <TrendingUp className="h-5 w-5" />,
      description: 'Scoring by percentile ranking in sector and market.',
      metrics: [
        {
          name: 'Price Target Upside',
          description: 'Anticipated price increase based on Investment Analysts Association analysis.'
        },
        {
          name: 'Earnings Per Share Growth',
          description: 'Indicator of a company's profitability increase over time.'
        },
        {
          name: 'Dividend Growth',
          description: 'Reflects the company's increasing cash flow to shareholders.'
        },
      ]
    },
    {
      id: 'stability',
      title: 'Stability',
      icon: <AlertTriangle className="h-5 w-5" />,
      description: 'Scoring by percentile ranking in sector and market.',
      metrics: [
        {
          name: 'Debt-to-Equity',
          description: 'Gauges financial leverage.'
        },
        {
          name: 'Interest Coverage',
          description: 'Measures how comfortably a company can pay interest on outstanding debt.'
        },
      ],
      note: 'These metrics are not applicable to the Banking and Insurance industries. We are developing specialized metrics for these sectors.'
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: <Activity className="h-5 w-5" />,
      description: 'Scoring by percentile ranking in sector and market.',
      metrics: [
        {
          name: 'Return on Equity',
          description: 'Indicates profitability relative to shareholder equity.'
        },
        {
          name: 'Net Profit Margin',
          description: 'Shows the percentage of revenue that translates into profit.'
        },
      ]
    },
    {
      id: 'totalReturn',
      title: 'Total Return',
      icon: <BarChart3 className="h-5 w-5" />,
      description: 'Scoring by percentile ranking in sector and market.',
      metrics: [
        {
          name: 'Capital Gain',
          description: 'Represents the increase/decrease in the market value of a company\'s stock.'
        },
        {
          name: 'Dividend Yield',
          description: 'Reflects the dividend income relative to the stock price.'
        },
      ]
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2"
      >
        <Info className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Metrics Information</h1>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground text-lg leading-relaxed"
      >
        Our scoring system evaluates stocks across five key dimensions, providing a comprehensive assessment of investment opportunities.
        Each metric is ranked within its sector and the broader market to ensure relevant comparisons.
      </motion.p>
      
      <div className="space-y-6">
        {metricsCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold">{index + 1}. {category.title}</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">{category.description}</p>
              
              <div className="space-y-4">
                {category.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metric.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + metricIndex * 0.05 }}
                    className="ml-4 border-l-2 border-primary/20 pl-4"
                  >
                    <h3 className="font-medium">{metric.name}</h3>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {category.note && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="mt-4 bg-accent/50 p-3 rounded-md text-sm"
                >
                  <strong>Note:</strong> {category.note}
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InfoPage;
