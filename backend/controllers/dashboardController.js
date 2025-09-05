const Student = require('../models/Student');

const getDashboardStats = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments({ status: 'active' });

    const stats = {
      totalStudents,
      averagePerformance: 87.5,
      averageAttendance: 94.3,
      atRiskStudents: 23,
      newEnrollments: 45,
      monthlyGrowth: 12.5
    };

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getPerformanceCharts = async (req, res) => {
  try {
    const performanceData = [
      { month: 'Jan', performance: 78, attendance: 92, students: 120 },
      { month: 'Feb', performance: 82, attendance: 94, students: 125 },
      { month: 'Mar', performance: 75, attendance: 88, students: 118 },
      { month: 'Apr', performance: 88, attendance: 96, students: 132 },
      { month: 'May', performance: 85, attendance: 95, students: 128 },
      { month: 'Jun', performance: 91, attendance: 97, students: 135 }
    ];

    const subjectData = [
      { subject: 'Mathematics', average: 85, students: 45 },
      { subject: 'Science', average: 78, students: 42 },
      { subject: 'English', average: 92, students: 48 },
      { subject: 'History', average: 80, students: 38 }
    ];

    res.json({
      success: true,
      data: {
        performanceData,
        subjectData
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getRecentActivity = async (req, res) => {
  try {
    const activities = [
      {
        id: 1,
        type: 'performance',
        title: 'Excellent Performance',
        description: 'Sarah Johnson scored 98% in Advanced Mathematics',
        time: '2 minutes ago',
        icon: 'TrendingUp'
      },
      {
        id: 2,
        type: 'alert',
        title: 'Attention Required', 
        description: 'Mike Chen has missed 3 consecutive Physics classes',
        time: '15 minutes ago',
        icon: 'AlertTriangle'
      },
      {
        id: 3,
        type: 'achievement',
        title: 'Achievement Unlocked',
        description: 'Class 12A reached 95% attendance rate this month',
        time: '1 hour ago',
        icon: 'Award'
      }
    ];

    res.json({
      success: true,
      data: activities
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getDashboardStats,
  getPerformanceCharts,
  getRecentActivity
};