import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormCommon.css";

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    age: "",
    studentClass: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/students", student);
      alert("Student added successfully!");
      navigate("/");
    } catch (error) {
      alert("Failed to add student.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Student</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={student.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input
            type="text"
            name="studentClass"
            value={student.studentClass}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={student.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="form-button">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
