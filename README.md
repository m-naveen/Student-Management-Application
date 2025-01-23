# Student Management Application

## Overview
The Student Management Application is designed to manage student records efficiently and user-friendly. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on student data.

## Core Functions
The application provides the following functionalities:
- Add a new student record with the following fields:
  - Name (string, required)
  - Age (string, required)
  - Class (string, required)
  - Phone Number (number, required)
- Display all student records.
- Search student records by name.
- Modify existing student data.
- Remove student data.

## Project Structure
The project is divided into two main parts: backend and frontend.

### Backend
The backend is built using Spring Boot and follows a RESTful API approach. The structure is as follows:
- `src/main/java/com/example/studentmanagement/`
  - `StudentManagementApplication.java`: Entry point of the Spring Boot application.
  - `controller/StudentController.java`: Defines REST API endpoints for managing student records.
  - `model/Student.java`: Defines the Student model class.
  - `repository/StudentRepository.java`: Interface for CRUD operations on Student entities.
  - `service/StudentService.java`: Contains business logic for managing student records.
- `src/main/resources/application.properties`: Configuration settings for the Spring Boot application.
- `pom.xml`: Maven configuration file for dependencies and plugins.

### Frontend
The frontend is built using React and provides a user interface for interacting with the backend API. The structure is as follows:
- `public/index.html`: Main HTML file for the React application.
- `src/components/`
  - `AddStudent.js`: Component for adding a new student record.
  - `StudentList.js`: Component that displays a list of all student records.
  - `SearchStudent.js`: Component for searching student records by name.
  - `EditStudent.js`: Component for editing an existing student record.
  - `DeleteStudent.js`: Component for deleting a student record.
- `src/App.js`: Main React component that sets up routing and includes all other components.
- `src/api/studentApi.js`: Functions for making API calls to the backend.
- `package.json`: Configuration file for npm.

## Setup Instructions
### Backend
1. Navigate to the `backend` directory.
2. Ensure you have Java and Maven installed.
3. Run `mvn clean install` to build the project.
4. Start the application using `mvn spring-boot:run`.

### Frontend
1. Navigate to the `frontend` directory.
2. Ensure you have Node.js and npm installed.
3. Run `npm install` to install dependencies.
4. Start the application using `npm start`.

## API Usage
The backend exposes RESTful endpoints for managing student records. Refer to the backend `README.md` for detailed API usage instructions.

## Conclusion
This Student Management Application provides a comprehensive solution for managing student records with a clean and efficient interface. It leverages modern technologies to ensure a smooth user experience.