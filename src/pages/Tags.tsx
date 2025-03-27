
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import TagBadge from '@/components/TagBadge';
import DataGrid from '@/components/DataGrid';
import FileUpload from '@/components/FileUpload';
import { loadFileSync, availableFiles, loadFile } from '@/services/fileService';
import { Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [uploadedData, setUploadedData] = useState<any[] | null>(null);
  const [selectedFile, setSelectedFile] = useState<string>(availableFiles[0]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Load initial data
  useEffect(() => {
    const initialData = loadFileSync(selectedFile);
    setUploadedData(initialData.data);
  }, []);

  const loadSelectedFile = async () => {
    setLoading(true);
    try {
      const fileData = await loadFile(selectedFile);
      setUploadedData(fileData.data);
    } catch (error) {
      console.error('Error loading file:', error);
    } finally {
      setLoading(false);
    }
  };

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

  // Filter stocks based on tags and search term
  const filteredStocks = uploadedData ? uploadedData.filter(stock => {
    // Filter by search term
    if (searchTerm && !stock.Symbol.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !stock.Sector.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // If no tags selected, return all stocks that match search
    if (selectedTags.size === 0) {
      return true;
    }
    
    // Check if stock has ALL the selected tags
    const stockTags = stock.Tags || [];
    return Array.from(selectedTags).every(tag => stockTags.includes(tag));
  }) : [];

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
      
      <Card title="Select Data Source" delay={0.05}>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedFile} onValueChange={setSelectedFile}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a file" />
              </SelectTrigger>
              <SelectContent>
                {availableFiles.map((file) => (
                  <SelectItem key={file} value={file}>
                    {file}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button onClick={loadSelectedFile} disabled={loading}>
              {loading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                'Load Data'
              )}
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>* Using simulated data. In a production environment, you would load actual Excel files.</p>
          </div>
        </div>
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
      
      <Card title="Matching Stocks" delay={0.2}>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input 
            type="text" 
            placeholder="Search stocks..." 
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
