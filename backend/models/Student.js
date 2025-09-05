const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  studentId: { type: String, unique: true },
  dateOfBirth: { type: Date, required: true },
  class: { type: String, required: true },
  grade: { type: String, required: true, enum: ['9', '10', '11', '12'] },
  guardian: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  performance: {
    overallGrade: { type: Number, default: 0, min: 0, max: 100 },
    gpa: { type: Number, default: 0, min: 0, max: 4.0 },
    attendanceRate: { type: Number, default: 100, min: 0, max: 100 }
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'graduated'],
    default: 'active'
  }
}, {
  timestamps: true
});

studentSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

studentSchema.pre('save', function(next) {
  if (!this.studentId) {
    const year = new Date().getFullYear().toString().slice(-2);
    const random = Math.floor(1000 + Math.random() * 9000);
    this.studentId = `STU${year}${random}`;
  }
  next();
});

module.exports = mongoose.model('Student', studentSchema);