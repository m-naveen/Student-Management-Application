import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Import CSS for styling

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (error) {
      alert("Failed to fetch students.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:8080/api/students/${id}`);
        fetchStudents(); // Refresh the list
        alert("Student deleted successfully!");
      } catch (error) {
        alert("Failed to delete student.");
      }
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <h2>Student Management Application</h2>
        <div className="actions">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="add-btn" onClick={() => navigate("/add")}>
            Add New Student
          </button>
        </div>
      </div>
      <div className="student-cards-container">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="student-info">
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Age:</strong> {student.age}</p>
                <p><strong>Class:</strong> {student.studentClass}</p>
                <p><strong>Phone:</strong> {student.phoneNumber}</p>
              </div>
              <div className="student-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit/${student.id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-students">No students found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
