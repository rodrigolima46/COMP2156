import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Student ID: 101495163</h1>
      <h1>Student Name: Rodrigo Lima Cavalcante</h1>
      <h1>Student Information System</h1>
      <h5>Powered By: moxDroid Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      Developed By: Rodrigo Lima Cavalcante
      <StudentList students={students} />
    </div>
  );
};

export default App;
