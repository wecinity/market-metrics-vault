
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
  Expansion?: number;
  'Total Return'?: number;
  'Cash Flow'?: number;
  Tags?: string[];
  [key: string]: any;
}

// Expanded mock data based on the uploaded image
const mockStockData: StockData[] = [
  { 
    Symbol: '2S', 
    Sector: 'STEEL', 
    Valuation: 62, 
    Performance: 51, 
    Stability: 70, 
    Expansion: 40, 
    'Total Return': 74, 
    'Cash Flow': 60, 
    'Total Score': 59,
    Tags: ['Promising stability', 'Resilient financial structure']
  },
  { 
    Symbol: 'A', 
    Sector: 'PROP', 
    Valuation: 23, 
    Performance: 9, 
    Stability: 33, 
    Expansion: 8, 
    'Total Return': 52, 
    'Cash Flow': 53, 
    'Total Score': 29,
    Tags: ['Unfavorable valuation', 'Struggling profitability']
  },
  { 
    Symbol: 'A5', 
    Sector: 'PROP', 
    Valuation: 48, 
    Performance: 87, 
    Stability: 47, 
    Expansion: 87, 
    'Total Return': 4, 
    'Cash Flow': 28, 
    'Total Score': 50,
    Tags: ['Promising performance', 'Inconsistent total return']
  },
  { 
    Symbol: 'AAI', 
    Sector: 'FOOD', 
    Valuation: 39, 
    Performance: 72, 
    Stability: 75, 
    Expansion: 42, 
    'Total Return': 51, 
    'Cash Flow': 45, 
    'Total Score': 54,
    Tags: ['Promising stability', 'Thriving profitability']
  },
  { 
    Symbol: 'AAV', 
    Sector: 'TRANS', 
    Valuation: 45, 
    Performance: 73, 
    Stability: 31, 
    Expansion: 73, 
    'Total Return': 37, 
    'Cash Flow': 34, 
    'Total Score': 48,
    Tags: ['Promising performance', 'Vulnerable financial structure']
  },
  { 
    Symbol: 'ACC', 
    Sector: 'ENERG', 
    Valuation: 24, 
    Performance: 42, 
    Stability: 71, 
    Expansion: 18, 
    'Total Return': 12, 
    'Cash Flow': 42, 
    'Total Score': 34,
    Tags: ['Unfavorable valuation', 'Promising stability']
  },
  { 
    Symbol: 'ADVANC', 
    Sector: 'ICT', 
    Valuation: 21, 
    Performance: 65, 
    Stability: 36, 
    Expansion: 54, 
    'Total Return': 76, 
    'Cash Flow': 47, 
    'Total Score': 49,
    Tags: ['Unfavorable valuation', 'Reliable total return']
  },
  { 
    Symbol: 'AHC', 
    Sector: 'HELTH', 
    Valuation: 48, 
    Performance: 65, 
    Stability: 71, 
    Expansion: 56, 
    'Total Return': 86, 
    'Cash Flow': 49, 
    'Total Score': 62,
    Tags: ['Promising stability', 'Reliable total return']
  },
  { 
    Symbol: 'ALLA', 
    Sector: 'IMM', 
    Valuation: 61, 
    Performance: 74, 
    Stability: 70, 
    Expansion: 57, 
    'Total Return': 90, 
    'Cash Flow': 63, 
    'Total Score': 69,
    Tags: ['Attractive valuation', 'Reliable total return']
  },
  { 
    Symbol: 'AMATA', 
    Sector: 'PROP', 
    Valuation: 56, 
    Performance: 64, 
    Stability: 43, 
    Expansion: 83, 
    'Total Return': 78, 
    'Cash Flow': 80, 
    'Total Score': 67,
    Tags: ['Attractive valuation', 'Promising growth']
  },
  { 
    Symbol: 'AOT', 
    Sector: 'TRANS', 
    Valuation: 12, 
    Performance: 66, 
    Stability: 49, 
    Expansion: 75, 
    'Total Return': 56, 
    'Cash Flow': 57, 
    'Total Score': 52,
    Tags: ['Unfavorable valuation', 'Promising growth']
  },
  { 
    Symbol: 'ASIAN', 
    Sector: 'FOOD', 
    Valuation: 58, 
    Performance: 64, 
    Stability: 89, 
    Expansion: 55, 
    'Total Return': 41, 
    'Cash Flow': 59, 
    'Total Score': 61,
    Tags: ['Attractive valuation', 'Resilient financial structure']
  },
  { 
    Symbol: 'BCT', 
    Sector: 'PETRO', 
    Valuation: 84, 
    Performance: 73, 
    Stability: 73, 
    Expansion: 83, 
    'Total Return': 79, 
    'Cash Flow': 64, 
    'Total Score': 76,
    Tags: ['Attractive valuation', 'Thriving profitability']
  },
  { 
    Symbol: 'BDMS', 
    Sector: 'HELTH', 
    Valuation: 18, 
    Performance: 71, 
    Stability: 68, 
    Expansion: 56, 
    'Total Return': 73, 
    'Cash Flow': 62, 
    'Total Score': 57,
    Tags: ['Unfavorable valuation', 'Reliable total return']
  },
  { 
    Symbol: 'BH', 
    Sector: 'HELTH', 
    Valuation: 18, 
    Performance: 88, 
    Stability: 91, 
    Expansion: 62, 
    'Total Return': 74, 
    'Cash Flow': 71, 
    'Total Score': 67,
    Tags: ['Unfavorable valuation', 'Resilient financial structure']
  },
  { 
    Symbol: 'BUI', 
    Sector: 'INSUR', 
    Valuation: 72, 
    Performance: 90, 
    Stability: 66, 
    Expansion: 60, 
    'Total Return': 69, 
    'Cash Flow': 69, 
    'Total Score': 71,
    Tags: ['Attractive valuation', 'Thriving profitability']
  },
  { 
    Symbol: 'CPF', 
    Sector: 'FOOD', 
    Valuation: 60, 
    Performance: 66, 
    Stability: 38, 
    Expansion: 27, 
    'Total Return': 64, 
    'Cash Flow': 54, 
    'Total Score': 51,
    Tags: ['Attractive valuation', 'Reliable total return']
  },
  { 
    Symbol: 'CPN', 
    Sector: 'PROP', 
    Valuation: 30, 
    Performance: 70, 
    Stability: 42, 
    Expansion: 81, 
    'Total Return': 70, 
    'Cash Flow': 52, 
    'Total Score': 57,
    Tags: ['Unfavorable valuation', 'Promising growth']
  },
  { 
    Symbol: 'DELTA', 
    Sector: 'ETRON', 
    Valuation: 10, 
    Performance: 72, 
    Stability: 48, 
    Expansion: 81, 
    'Total Return': 42, 
    'Cash Flow': 68, 
    'Total Score': 53,
    Tags: ['Unfavorable valuation', 'Promising growth']
  },
  { 
    Symbol: 'GFPT', 
    Sector: 'AGRI', 
    Valuation: 73, 
    Performance: 68, 
    Stability: 63, 
    Expansion: 54, 
    'Total Return': 62, 
    'Cash Flow': 56, 
    'Total Score': 62,
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
      // If loading the score.xlsx file, return all data
      if (fileName.toLowerCase() === 'score.xlsx') {
        resolve({
          success: true,
          fileName,
          data: mockStockData
        });
        return;
      }
      
      // Return a random subset for other files
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
  // If loading the score.xlsx file, return all data
  if (fileName.toLowerCase() === 'score.xlsx') {
    return {
      success: true,
      fileName,
      data: mockStockData
    };
  }
  
  return {
    success: true,
    fileName,
    data: mockStockData.slice(0, 10) // Return first 10 items for other files
  };
};
