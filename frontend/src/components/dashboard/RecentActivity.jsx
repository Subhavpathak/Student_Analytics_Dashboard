import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Award, User } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'performance',
      title: 'Excellent Performance',
      description: 'Sarah Johnson scored 98% in Advanced Mathematics',
      time: '2 minutes ago',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 2,
      type: 'alert',
      title: 'Attention Required',
      description: 'Mike Chen has missed 3 consecutive Physics classes',
      time: '15 minutes ago',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Achievement Unlocked',
      description: 'Class 12A reached 95% attendance rate this month',
      time: '1 hour ago',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 hover-lift"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
          >
            <div className={`p-3 rounded-2xl bg-gradient-to-r ${activity.color} shadow-lg`}>
              <activity.icon className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {activity.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;