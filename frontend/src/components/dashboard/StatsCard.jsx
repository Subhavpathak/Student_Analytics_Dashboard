import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import CountUp from 'react-countup';

const StatsCard = ({ title, value, change, trend, icon: Icon, gradient }) => {
  const isPositive = trend === 'up';

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card rounded-3xl p-6 hover-lift cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl bg-gradient-to-r ${gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
          isPositive 
            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          <CountUp
            end={parseFloat(value.replace(/[^0-9.]/g, ''))}
            duration={2}
            separator=","
            decimal="."
            suffix={value.includes('%') ? '%' : ''}
          />
        </h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium">{title}</p>
      </div>
    </motion.div>
  );
};

export default StatsCard;