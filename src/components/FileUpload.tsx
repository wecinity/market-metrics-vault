
import React, { useState } from 'react';
import { Upload, FileX, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface FileUploadProps {
  onFileLoaded: (data: any) => void;
  accept?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileLoaded,
  accept = ".xlsx, .xls, .csv" 
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) return;
    
    setFile(selectedFile);
  };

  const processFile = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // In a real implementation, we would use xlsx or similar library
      // Since we can't actually process Excel files here, we'll simulate it
      console.log('Processing file:', file.name);
      
      // This is where we'd normally process the Excel file
      // For demonstration, we'll just pass a mock object
      setTimeout(() => {
        const mockData = {
          success: true,
          fileName: file.name,
          sheets: ['Sheet1', 'Sheet2'],
          data: [
            { Symbol: 'AAPL', Sector: 'Technology', 'Total Score': 85 },
            { Symbol: 'MSFT', Sector: 'Technology', 'Total Score': 88 },
            { Symbol: 'GOOGL', Sector: 'Communication Services', 'Total Score': 86 },
          ]
        };
        
        onFileLoaded(mockData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error('Error processing file:', err);
      setError('Failed to process the file. Please try again.');
      setLoading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <div className="space-y-4 p-4 border rounded-md bg-card">
      <div className="flex items-center space-x-2">
        <Upload className="h-5 w-5 text-muted-foreground" />
        <h3 className="text-lg font-medium">Upload Data File</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr,auto,auto]">
        <div className="relative">
          <Input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="cursor-pointer"
          />
        </div>
        
        {file && (
          <>
            <Button
              variant="default"
              onClick={processFile}
              disabled={loading}
              className="whitespace-nowrap"
            >
              {loading ? 'Processing...' : 'Process File'}
            </Button>
            
            <Button
              variant="outline"
              onClick={clearFile}
              disabled={loading}
              className="whitespace-nowrap"
            >
              <FileX className="h-4 w-4 mr-1" />
              Clear
            </Button>
          </>
        )}
      </div>
      
      {file && (
        <div className="flex items-center text-sm">
          <Check className="h-4 w-4 text-green-500 mr-1" />
          <span className="font-medium">Selected:</span>
          <span className="ml-1 text-muted-foreground truncate max-w-xs">{file.name}</span>
          <span className="ml-1 text-muted-foreground">({(file.size / 1024).toFixed(1)} KB)</span>
        </div>
      )}
      
      {error && (
        <div className="text-sm text-destructive">{error}</div>
      )}
      
      <div className="text-xs text-muted-foreground mt-2">
        <p>Supported file types: Excel (.xlsx, .xls) and CSV (.csv) files</p>
        <p>For full Excel file processing, we would need to add a library like SheetJS/xlsx.</p>
      </div>
    </div>
  );
};

export default FileUpload;
