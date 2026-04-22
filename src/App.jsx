import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

// Initial student data
const initialStudents = [
  { id: 1, name: 'Rahul Sharma', score: 85 },
  { id: 2, name: 'Ananya Singh', score: 35 },
  { id: 3, name: 'Vikram Malhotra', score: 72 },
  { id: 4, name: 'Neha Kapoor', score: 28 },
  { id: 5, name: 'Arjun Reddy', score: 91 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  // Add a new student
  const handleAddStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  // Update a student's score
  const handleUpdateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, score: newScore } : student
      )
    );
  };

  return (
    <>
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
      <StudentTable students={students} onUpdateScore={handleUpdateScore} />
    </>
  );
}

export default App;
