import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormCommon.css";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    age: "",
    studentClass: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/students/${id}`
        );
        setStudent(response.data);
      } catch (error) {
        alert("Failed to fetch student details.");
        navigate("/");
      }
    };

    fetchStudent();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/students/${id}`, student);
      alert("Student updated successfully!");
      navigate("/");
    } catch (error) {
      alert("Failed to update student.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Student</h2>
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
          Update Student
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
