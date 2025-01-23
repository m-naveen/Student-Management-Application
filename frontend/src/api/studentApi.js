import axios from "axios";

// Base API URL for the backend
const API_URL = "http://localhost:8080/api/students";

// Ensures Axios sends cookies (if needed) for cross-origin requests
axios.defaults.withCredentials = true;

// Fetch all students
export const getStudents = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

// Add a new student
export const addStudent = async (student) => {
  try {
    const response = await axios.post(API_URL, student, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

// Update an existing student
export const updateStudent = async (id, student) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, student, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
};

// Delete a student
export const deleteStudent = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};

// Search students by name
export const searchStudentByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/search/${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching students by name:", error);
    throw error;
  }
};
