package com.example.studentmanagement.model;

import jakarta.persistence.*;

@Entity
@Table(name = "students", uniqueConstraints = {@UniqueConstraint(columnNames = {"phone_number"})})
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String age;

    @Column(name = "student_class", nullable = false)
    private String studentClass;

    @Column(name = "phone_number", nullable = false, unique = true)
    private Long phoneNumber;

    public Student() {
    }

    public Student(String name, String age, String studentClass, Long phoneNumber) {
        this.name = name;
        this.age = age;
        this.studentClass = studentClass;
        this.phoneNumber = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
