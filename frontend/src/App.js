import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent"; // Edit page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
