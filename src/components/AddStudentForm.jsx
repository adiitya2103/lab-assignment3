import { useState } from 'react';
import './AddStudentForm.css';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Please enter a student name.');
      return;
    }

    const parsedScore = parseInt(score, 10);
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      setError('Please enter a valid score between 0 and 100.');
      return;
    }

    onAddStudent(trimmedName, parsedScore);
    setName('');
    setScore('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit} id="add-student-form">
      <div className="add-form-fields">
        <input
          type="text"
          id="student-name"
          className="add-input"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          id="student-score"
          className="add-input add-input-score"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="0"
          max="100"
        />
        <button type="submit" className="add-btn" id="add-student-btn">
          Add Student
        </button>
      </div>
      {error && <p className="add-error" id="form-error">{error}</p>}
    </form>
  );
}

export default AddStudentForm;
