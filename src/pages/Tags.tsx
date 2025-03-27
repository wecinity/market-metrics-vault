import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import TagBadge from '@/components/TagBadge';
import DataGrid from '@/components/DataGrid';
import FileUpload from '@/components/FileUpload';
import { Search } from 'lucide-react';

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [uploadedData, setUploadedData] = useState<any[] | null>(null);

  const toggleTag = (tag: string) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(tag)) {
      newSelectedTags.delete(tag);
    } else {
      newSelectedTags.add(tag);
    }
    setSelectedTags(newSelectedTags);
  };

  const handleFileLoaded = (data: any) => {
    console.log('File loaded:', data);
    if (data.success && data.data) {
      setUploadedData(data.data);
    }
  };

  const positiveTags = [
    'Attractive valuation', 
    'Promising growth',
    'Thriving profitability', 
    'Resilient financial structure',
    'Reliable total return'
  ];
  
  const negativeTags = [
    'Unfavorable valuation', 
    'Stagnant growth',
    'Struggling profitability', 
    'Vulnerable financial structure',
    'Inconsistent total return'
  ];
  
  const etcTags = ['No extreme characteristics'];

  const filteredStocks = uploadedData || [
    { Symbol: 'AAPL', Sector: 'Technology', 'Total Score': 85, 'Valuation': 78, 'Growth': 90, 'Stability': 82, 'Performance': 88, 'Total Return': 75 },
    { Symbol: 'MSFT', Sector: 'Technology', 'Total Score': 88, 'Valuation': 82, 'Growth': 85, 'Stability': 90, 'Performance': 86, 'Total Return': 82 },
    { Symbol: 'AMZN', Sector: 'Consumer Cyclical', 'Total Score': 83, 'Valuation': 75, 'Growth': 88, 'Stability': 80, 'Performance': 85, 'Total Return': 79 },
    { Symbol: 'GOOGL', Sector: 'Communication Services', 'Total Score': 86, 'Valuation': 80, 'Growth': 87, 'Stability': 84, 'Performance': 87, 'Total Return': 80 },
    { Symbol: 'TSLA', Sector: 'Consumer Cyclical', 'Total Score': 79, 'Valuation': 65, 'Growth': 95, 'Stability': 70, 'Performance': 84, 'Total Return': 82 },
  ];

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
  ];

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
        Tags Matching
      </motion.h1>
      
      <Card title="Upload Data" delay={0.05}>
        <FileUpload onFileLoaded={handleFileLoaded} />
      </Card>
      
      <Card title="Filter by Tags" delay={0.1}>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Positive Factors</h3>
            <div className="flex flex-wrap gap-2">
              {positiveTags.map((tag) => (
                <TagBadge 
                  key={tag} 
                  type="positive" 
                  selected={selectedTags.has(tag)}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </TagBadge>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Negative Factors</h3>
            <div className="flex flex-wrap gap-2">
              {negativeTags.map((tag) => (
                <TagBadge 
                  key={tag} 
                  type="negative" 
                  selected={selectedTags.has(tag)}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </TagBadge>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Other Factors</h3>
            <div className="flex flex-wrap gap-2">
              {etcTags.map((tag) => (
                <TagBadge 
                  key={tag} 
                  type="neutral" 
                  selected={selectedTags.has(tag)}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </TagBadge>
              ))}
            </div>
          </div>
        </div>
        
        {selectedTags.size > 0 && (
          <div className="mt-4 p-3 bg-accent rounded-lg">
            <h3 className="text-sm font-medium mb-2">Selected Tags:</h3>
            <div className="flex flex-wrap gap-1">
              {Array.from(selectedTags).map((tag) => (
                <span key={tag} className="text-xs bg-background px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Card>
      
      <Card title={uploadedData ? "Uploaded Data" : "Matching Stocks"} delay={0.2}>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input 
            type="text" 
            placeholder="Search stocks..." 
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        
        <DataGrid 
          data={filteredStocks} 
          columns={columns} 
          onRowClick={(row) => console.log('Clicked row:', row)}
        />
      </Card>
    </motion.div>
  );
};

export default Tags;
