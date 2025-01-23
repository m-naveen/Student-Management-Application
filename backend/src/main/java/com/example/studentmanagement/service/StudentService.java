package com.example.studentmanagement.service;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        if (studentRepository.findByPhoneNumber(student.getPhoneNumber()).isPresent()) {
            throw new IllegalArgumentException("A student with this phone number already exists.");
        }
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public List<Student> searchStudentsByName(String name) {
        return studentRepository.findByNameContainingIgnoreCase(name);
    }

    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public Student updateStudent(Long id, Student studentDetails) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        if (!existingStudent.getPhoneNumber().equals(studentDetails.getPhoneNumber())
                && studentRepository.findByPhoneNumber(studentDetails.getPhoneNumber()).isPresent()) {
            throw new IllegalArgumentException("A student with this phone number already exists.");
        }

        existingStudent.setName(studentDetails.getName());
        existingStudent.setAge(studentDetails.getAge());
        existingStudent.setStudentClass(studentDetails.getStudentClass());
        existingStudent.setPhoneNumber(studentDetails.getPhoneNumber());

        return studentRepository.save(existingStudent);
    }

    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            throw new RuntimeException("Student not found");
        }
        studentRepository.deleteById(id);
    }
}
