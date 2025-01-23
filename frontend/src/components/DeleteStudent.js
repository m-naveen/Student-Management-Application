import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../api/studentApi';

const DeleteStudent = ({ studentId }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (confirmDelete) {
            try {
                await deleteStudent(studentId);
                alert("Student deleted successfully!");
                navigate('/'); // Redirect to the student list
            } catch (error) {
                alert("Error deleting student: " + error.message);
            }
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Student</button>
        </div>
    );
};

export default DeleteStudent;
