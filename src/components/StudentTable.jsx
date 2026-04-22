import StudentRow from './StudentRow';
import './StudentTable.css';

function StudentTable({ students, onUpdateScore }) {
  if (students.length === 0) {
    return (
      <div className="empty-state" id="empty-state">
        <h3>No Students Yet</h3>
        <p>Add your first student using the form above.</p>
      </div>
    );
  }

  const passCount = students.filter(s => s.score >= 40).length;
  const failCount = students.length - passCount;
  const avgScore = Math.round(students.reduce((sum, s) => sum + s.score, 0) / students.length);

  return (
    <div className="table-section" id="student-table-section">
      {/* Stats bar */}
      <div className="stats-bar" id="stats-bar">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{students.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Average</span>
          <span className="stat-value">{avgScore}%</span>
        </div>
        <div className="stat-item stat-pass">
          <span className="stat-label">Passed</span>
          <span className="stat-value">{passCount}</span>
        </div>
        <div className="stat-item stat-fail">
          <span className="stat-label">Failed</span>
          <span className="stat-value">{failCount}</span>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="student-table" id="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                index={index}
                onUpdateScore={onUpdateScore}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
