import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plus } from 'lucide-react';

const Students = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gradient mb-2">Students</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and monitor student information
          </p>
        </div>

        <button className="btn-premium flex items-center space-x-2 px-6 py-3 rounded-xl text-white">
          <Plus className="w-5 h-5" />
          <span>Add Student</span>
        </button>
      </div>

      <div className="glass-card rounded-3xl p-8 text-center">
        <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Students Management
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Complete student management interface coming soon
        </p>
      </div>
    </motion.div>
  );
};

export default Students;