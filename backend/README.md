# Student Management Application - Backend

## Overview
The Student Management Application is designed to manage student records efficiently. This backend service is built using Spring Boot and provides a RESTful API for performing CRUD operations on student data.

## Features
- Add a new student record
- Display all student records
- Search student records by name
- Modify existing student data
- Remove student data

## Project Structure
```
student-management-app
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── studentmanagement
│   │   │   │               ├── StudentManagementApplication.java
│   │   │   │               ├── controller
│   │   │   │               │   └── StudentController.java
│   │   │   │               ├── model
│   │   │   │               │   └── Student.java
│   │   │   │               ├── repository
│   │   │   │               │   └── StudentRepository.java
│   │   │   │               └── service
│   │   │   │                   └── StudentService.java
│   │   │   └── resources
│   │   │       └── application.properties
│   ├── pom.xml
```

## Setup Instructions
1. **Clone the repository**
   ```
   git clone https://github.com/m-naveen/Student-Management-Application Or Download Zip file:
   cd student-management-app/backend
   ```

2. **Build the project**
   ```
   mvn clean install
   ```

3. **Run the application**
   ```
   mvn spring-boot:run
   ```

4. **Access the API**
   The API will be available at `http://localhost:8080/api/students`.

## API Endpoints
- `POST /api/students` - Add a new student
- `GET /api/students` - Retrieve all students
- `GET /api/students/{name}` - Search for a student by name
- `PUT /api/students/{id}` - Update an existing student
- `DELETE /api/students/{id}` - Delete a student record

## Dependencies
- Spring Boot
- Spring Data JPA
- H2 Database (for in-memory database)

