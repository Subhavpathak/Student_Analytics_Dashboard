import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const AttendanceChart = () => {
  const data = [
    { name: 'Present', value: 85, color: '#10B981' },
    { name: 'Late', value: 8, color: '#F59E0B' },
    { name: 'Absent', value: 5, color: '#EF4444' },
    { name: 'Excused', value: 2, color: '#8B5CF6' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 hover-lift"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Attendance Overview
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center space-x-3">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AttendanceChart;