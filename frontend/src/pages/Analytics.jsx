import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

const Analytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-gradient mb-2">
          Advanced Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Deep insights into student performance and trends
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 text-center">
        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Advanced Analytics Suite
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive data analysis and visualization tools
        </p>
      </div>
    </motion.div>
  );
};

export default Analytics;