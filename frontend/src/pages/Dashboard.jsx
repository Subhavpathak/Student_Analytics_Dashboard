import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  AlertTriangle
} from 'lucide-react';

// Components
import StatsCard from '../components/dashboard/StatsCard';
import PerformanceChart from '../components/charts/PerformanceChart';
import AttendanceChart from '../components/charts/AttendanceChart';
import RecentActivity from '../components/dashboard/RecentActivity';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Average Performance',
      value: '87.5%',
      change: '+5.2%',
      trend: 'up', 
      icon: TrendingUp,
      color: 'green',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Attendance Rate',
      value: '94.3%',
      change: '+2.1%',
      trend: 'up',
      icon: Calendar,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'At Risk Students',
      value: '23',
      change: '-8%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
          Student Analytics Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Welcome back! Here's what's happening with your students today.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <PerformanceChart />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <AttendanceChart />
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <RecentActivity />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;