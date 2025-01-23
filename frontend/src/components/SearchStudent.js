import React, { useState } from "react";
import axios from "axios";

const SearchStudent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/students/search/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching students:", error);
      alert("Failed to search students.");
    }
  };

  return (
    <div>
      <h2>Search Student</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((student) => (
          <li key={student.id}>
            {student.name} - Age: {student.age}, Class: {student.studentClass}, Phone: {student.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudent;
