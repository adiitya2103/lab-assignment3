import { useState } from 'react';
import './StudentRow.css';

function StudentRow({ student, index, onUpdateScore }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editScore, setEditScore] = useState(student.score);

  const isPassing = student.score >= 40;

  const handleSave = () => {
    const newScore = parseInt(editScore, 10);
    if (!isNaN(newScore) && newScore >= 0 && newScore <= 100) {
      onUpdateScore(student.id, newScore);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditScore(student.score);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <tr className={`student-row ${isPassing ? 'pass-row' : 'fail-row'}`} id={`student-row-${student.id}`}>
      <td className="cell-index">{index + 1}</td>
      <td className="cell-name">
        <div className="name-wrapper">
          <span className="avatar">{student.name.charAt(0).toUpperCase()}</span>
          <span>{student.name}</span>
        </div>
      </td>
      <td className="cell-score">
        {isEditing ? (
          <div className="edit-score-wrapper">
            <input
              type="number"
              className="score-input"
              value={editScore}
              onChange={(e) => setEditScore(e.target.value)}
              onKeyDown={handleKeyDown}
              min="0"
              max="100"
              autoFocus
              id={`score-input-${student.id}`}
            />
            <div className="edit-actions">
              <button className="btn-save" onClick={handleSave} id={`save-btn-${student.id}`} title="Save">Save</button>
              <button className="btn-cancel" onClick={handleCancel} id={`cancel-btn-${student.id}`} title="Cancel">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="score-display">
            <span className="score-value">{student.score}</span>
            <span className="score-max">/ 100</span>
          </div>
        )}
      </td>
      <td className="cell-status">
        <span className={`status-badge ${isPassing ? 'status-pass' : 'status-fail'}`}>
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td className="cell-actions">
        {!isEditing && (
          <button
            className="btn-edit"
            onClick={() => setIsEditing(true)}
            id={`edit-btn-${student.id}`}
            title="Edit Score"
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
}

export default StudentRow;
