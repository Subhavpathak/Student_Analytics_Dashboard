import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Reports = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">Reports</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Generate and analyze performance reports
          </p>
        </div>

        <button className="btn-premium flex items-center space-x-2 px-6 py-3 rounded-xl text-white">
          <Download className="w-5 h-5" />
          <span>Export Report</span>
        </button>
      </div>

      <div className="glass-card rounded-3xl p-8 text-center">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Reports & Analytics
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive reporting system with PDF export capabilities
        </p>
      </div>
    </motion.div>
  );
};

export default Reports;