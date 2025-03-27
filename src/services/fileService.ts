
// This service simulates loading Excel files with mock data
// In a real application, you would use actual Excel files and xlsx library

interface StockData {
  Symbol: string;
  Sector: string;
  'Total Score': number;
  Valuation?: number;
  Growth?: number;
  Stability?: number;
  Performance?: number;
  'Total Return'?: number;
  Tags?: string[];
  [key: string]: any;
}

const mockStockData: StockData[] = [
  { 
    Symbol: 'AAPL', 
    Sector: 'Technology', 
    'Total Score': 85, 
    Valuation: 78, 
    Growth: 90, 
    Stability: 82, 
    Performance: 88, 
    'Total Return': 75,
    Tags: ['Attractive valuation', 'Promising growth']
  },
  { 
    Symbol: 'MSFT', 
    Sector: 'Technology', 
    'Total Score': 88, 
    Valuation: 82, 
    Growth: 85, 
    Stability: 90, 
    Performance: 86, 
    'Total Return': 82,
    Tags: ['Thriving profitability', 'Resilient financial structure']
  },
  { 
    Symbol: 'AMZN', 
    Sector: 'Consumer Cyclical', 
    'Total Score': 83, 
    Valuation: 75, 
    Growth: 88, 
    Stability: 80, 
    Performance: 85, 
    'Total Return': 79,
    Tags: ['Promising growth', 'Reliable total return']
  },
  { 
    Symbol: 'GOOGL', 
    Sector: 'Communication Services', 
    'Total Score': 86, 
    Valuation: 80, 
    Growth: 87, 
    Stability: 84, 
    Performance: 87, 
    'Total Return': 80,
    Tags: ['Promising growth', 'Thriving profitability']
  },
  { 
    Symbol: 'TSLA', 
    Sector: 'Consumer Cyclical', 
    'Total Score': 79, 
    Valuation: 65, 
    Growth: 95, 
    Stability: 70, 
    Performance: 84, 
    'Total Return': 82,
    Tags: ['Unfavorable valuation', 'Promising growth']
  },
  { 
    Symbol: 'FB', 
    Sector: 'Communication Services', 
    'Total Score': 82, 
    Valuation: 77, 
    Growth: 84, 
    Stability: 78, 
    Performance: 83, 
    'Total Return': 74,
    Tags: ['Attractive valuation', 'Struggling profitability']
  },
  { 
    Symbol: 'NFLX', 
    Sector: 'Communication Services', 
    'Total Score': 80, 
    Valuation: 72, 
    Growth: 86, 
    Stability: 76, 
    Performance: 82, 
    'Total Return': 78,
    Tags: ['Promising growth', 'Vulnerable financial structure']
  },
  { 
    Symbol: 'NVDA', 
    Sector: 'Technology', 
    'Total Score': 86, 
    Valuation: 68, 
    Growth: 92, 
    Stability: 84, 
    Performance: 90, 
    'Total Return': 85,
    Tags: ['Unfavorable valuation', 'Promising growth']
  },
  { 
    Symbol: 'JPM', 
    Sector: 'Financial Services', 
    'Total Score': 81, 
    Valuation: 79, 
    Growth: 74, 
    Stability: 85, 
    Performance: 80, 
    'Total Return': 77,
    Tags: ['Attractive valuation', 'Stagnant growth']
  },
  { 
    Symbol: 'V', 
    Sector: 'Financial Services', 
    'Total Score': 84, 
    Valuation: 75, 
    Growth: 83, 
    Stability: 88, 
    Performance: 87, 
    'Total Return': 81,
    Tags: ['Attractive valuation', 'Thriving profitability']
  }
];

interface FileData {
  success: boolean;
  fileName: string;
  data: StockData[];
}

// List of available files (simulation)
export const availableFiles = [
  'IAA trading MCAP.xlsx', 
  'SET Financial Health.xlsx', 
  'Valuation Score.xlsx',
  'Growth Score.xlsx', 
  'Performance Score.xlsx', 
  'SET Trailing DPS.xlsx',
  'SET Trailing DY.xlsx', 
  'SET Trailing Close Change.xlsx', 
  'Sector Symbol.xlsx', 
  'score.xlsx', 
  'top picks.xlsx', 
  'stock tags.xlsx'
];

// Simulate loading a file with mock data
export const loadFile = (fileName: string): Promise<FileData> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // Return mock data with some randomization
      const shuffled = [...mockStockData].sort(() => 0.5 - Math.random());
      
      resolve({
        success: true,
        fileName,
        data: shuffled.slice(0, 7) // Return a random subset of the data
      });
    }, 800);
  });
};

// For demo purposes
export const loadFileSync = (fileName: string): FileData => {
  return {
    success: true,
    fileName,
    data: mockStockData
  };
};
