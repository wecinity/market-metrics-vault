
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Column {
  key: string;
  title: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataGridProps {
  data: any[];
  columns: Column[];
  className?: string;
  onRowClick?: (row: any) => void;
}

const DataGrid: React.FC<DataGridProps> = ({
  data,
  columns,
  className,
  onRowClick,
}) => {
  return (
    <div className={cn("overflow-auto relative", className)}>
      <table className="data-grid">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: rowIndex * 0.03 }}
              onClick={() => onRowClick?.(row)}
              className={onRowClick ? "cursor-pointer" : ""}
            >
              {columns.map((column) => (
                <td key={`${rowIndex}-${column.key}`}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="flex justify-center items-center py-8 text-muted-foreground">
          No data available
        </div>
      )}
    </div>
  );
};

export default DataGrid;
