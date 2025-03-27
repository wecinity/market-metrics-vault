
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import StockCard from '@/components/StockCard';
import ChartContainer from '@/components/ChartContainer';
import DataGrid from '@/components/DataGrid';
import { Bookmark, Search, Plus, X, TrendingUp, TrendingDown, BarChart3, Eye } from 'lucide-react';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 174.79, change: 2.43, changePercent: 1.41, sector: 'Technology', pe: 28.5, pbv: 34.2, roe: 42.8, de: 1.2 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 327.89, change: 3.57, changePercent: 1.10, sector: 'Technology', pe: 30.2, pbv: 10.8, roe: 36.9, de: 0.4 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 131.86, change: -0.98, changePercent: -0.74, sector: 'Communication Services', pe: 24.3, pbv: 5.6, roe: 23.5, de: 0.1 },
  ]);

  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for available stocks to add
  const availableStocks = [
    { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer Cyclical' },
    { symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Consumer Cyclical' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', sector: 'Technology' },
    { symbol: 'META', name: 'Meta Platforms Inc.', sector: 'Communication Services' },
    { symbol: 'BRK.B', name: 'Berkshire Hathaway Inc.', sector: 'Financials' },
  ].filter(stock => !watchlist.some(w => w.symbol === stock.symbol));

  const filteredStocks = availableStocks.filter(stock => 
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToWatchlist = (symbol: string) => {
    const stockToAdd = availableStocks.find(stock => stock.symbol === symbol);
    if (stockToAdd) {
      setWatchlist([
        ...watchlist,
        {
          ...stockToAdd,
          price: Math.random() * 300 + 50, // Random price for demo
          change: Math.random() * 10 - 5,  // Random change for demo
          changePercent: Math.random() * 5 - 2.5, // Random percent for demo
          pe: Math.random() * 40 + 10,
          pbv: Math.random() * 15 + 1,
          roe: Math.random() * 40 + 10,
          de: Math.random() * 2
        }
      ]);
      setSearchQuery('');
    }
  };

  const removeFromWatchlist = (symbol: string) => {
    setWatchlist(watchlist.filter(stock => stock.symbol !== symbol));
    if (selectedSymbol === symbol) {
      setSelectedSymbol('');
    }
  };

  // Configure grid columns for watchlist scores
  const columns = [
    { key: 'symbol', title: 'Symbol' },
    { key: 'sector', title: 'Sector' },
    { key: 'price', title: 'Price', 
      render: (value: number) => (
        <span className="font-semibold">${value.toFixed(2)}</span>
      ) 
    },
    { key: 'changePercent', title: 'Change', 
      render: (value: number) => (
        <div className={`flex items-center ${value >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
          {value >= 0 ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
          {value.toFixed(2)}%
        </div>
      ) 
    },
    { key: 'pe', title: 'P/E', 
      render: (value: number) => (
        <span>{value.toFixed(1)}</span>
      ) 
    },
    { key: 'roe', title: 'ROE', 
      render: (value: number) => (
        <span>{value.toFixed(1)}%</span>
      ) 
    },
    { key: 'actions', title: '', 
      render: (_: any, row: any) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedSymbol(row.symbol);
            }}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeFromWatchlist(row.symbol);
            }}
            className="p-1 text-muted-foreground hover:text-destructive transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) 
    },
  ];

  const selectedStock = watchlist.find(stock => stock.symbol === selectedSymbol);

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
        Watchlist
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card 
            title="My Watchlist" 
            icon={<Bookmark className="h-5 w-5" />}
            delay={0.1}
          >
            <DataGrid 
              data={watchlist} 
              columns={columns} 
              onRowClick={(row) => setSelectedSymbol(row.symbol)}
            />
          </Card>
          
          {selectedSymbol && selectedStock && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChartContainer
                title="Valuation & Profitability"
                subtitle={`${selectedSymbol} metrics`}
                delay={0.2}
              >
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <BarChart3 className="h-16 w-16 opacity-20" />
                </div>
              </ChartContainer>
              
              <ChartContainer
                title="Financial Stability"
                subtitle={`${selectedSymbol} metrics`}
                delay={0.3}
              >
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <TrendingUp className="h-16 w-16 opacity-20" />
                </div>
              </ChartContainer>
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <Card title="Add Stocks" icon={<Plus className="h-5 w-5" />} delay={0.1}>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input 
                type="text" 
                placeholder="Search stocks..." 
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="max-h-[400px] overflow-y-auto space-y-2">
              {filteredStocks.length === 0 ? (
                <p className="text-center text-muted-foreground p-4">No stocks found</p>
              ) : (
                filteredStocks.map((stock) => (
                  <div 
                    key={stock.symbol}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/50 cursor-pointer"
                    onClick={() => addToWatchlist(stock.symbol)}
                  >
                    <div>
                      <h4 className="font-medium">{stock.symbol}</h4>
                      <p className="text-sm text-muted-foreground">{stock.name}</p>
                    </div>
                    <div className="bg-primary/10 text-primary p-1 rounded-full">
                      <Plus className="h-4 w-4" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
          
          {watchlist.length > 0 && (
            <Card title="Quick View" delay={0.2}>
              <div className="space-y-3">
                {watchlist.slice(0, 3).map((stock) => (
                  <StockCard
                    key={stock.symbol}
                    symbol={stock.symbol}
                    name={stock.name}
                    price={stock.price}
                    change={stock.change}
                    changePercent={stock.changePercent}
                    onClick={() => setSelectedSymbol(stock.symbol)}
                  />
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Watchlist;
