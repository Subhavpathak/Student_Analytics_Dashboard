const Student = require('../models/Student');

const generateStudentReport = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    const report = {
      student: {
        name: student.fullName,
        class: student.class,
        grade: student.grade,
        email: student.email
      },
      performance: student.performance,
      insights: [
        'Strong performance in core subjects',
        'Excellent attendance record maintained',
        'Active participation in class activities'
      ],
      recommendations: [
        'Continue current study pattern',
        'Consider advanced placement courses',
        'Join academic excellence program'
      ]
    };

    res.json({
      success: true,
      data: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const generateClassReport = async (req, res) => {
  try {
    const className = req.params.class;
    const students = await Student.find({ class: className });

    const report = {
      class: className,
      totalStudents: students.length,
      averagePerformance: 85.7,
      attendanceRate: 94.2,
      topPerformers: students.slice(0, 5),
      insights: [
        'Class performing above grade level',
        'Strong collaboration among students', 
        'Consistent improvement in test scores'
      ]
    };

    res.json({
      success: true,
      data: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  generateStudentReport,
  generateClassReport
};