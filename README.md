﻿# University Residence Management System

This project is a University Residence Management System implemented using Object-Oriented Programming (OOP) principles in JavaScript. The system models and manages university dormitories, apartments, students, and maintenance requests.

## Project Structure


OOP_assignment/
├── index.html       # Main HTML file that includes the structure and script references
├── css/
   └── styles.css   # CSS file for styling the tables and other elements
└── js/
    └── main.js      # JavaScript file containing class definitions and data display logic


## Features

- Dormitory and Apartment Management: Models university dormitories and apartments, including rent calculations.
- Student Management: Manages student information and their assigned residences.
- Maintenance Request Handling: Captures and manages maintenance requests, including status updates and employee assignments.

## Classes

1. Residence: Base class for dormitories and apartments.
2. Dormitory: Extends `Residence`, includes size and rent calculation.
3. Apartment: Extends `Residence`, includes number of rooms and rent calculation.
4. Student: Represents students, including their assigned residences.
5. MaintenanceRequest: Manages maintenance requests, including status and employee assignments.

## Usage

1. Open `index.html` in a web browser to view the system.
2. The script automatically creates sample data for demonstration purposes:
   - Creates dormitories and apartments.
   - Creates students and assigns them to residences.
   - Creates a maintenance request and assigns it to an employee.
3. Data is displayed in tables for dormitories, apartments, students, and maintenance requests.

## How to Run

1. Clone the repository or download the project files.
2. Ensure all files are in the correct directory structure as outlined above.
3. Open `index.html` in your preferred web browser.

## Example Data

- Dormitory: Dorm A at 123 University St, 300 sq ft, rent calculated based on size.
- Apartment: Apartment B at 456 University Ave, 3 rooms, rent calculated based on the number of rooms.
- Students: John Doe and Jane Smith, assigned to Dorm A and Apartment B, respectively.
- Maintenance Request: Fix leaky faucet, status 'in progress', assigned to John Doe and an employee.

## Conclusion

This project demonstrates the application of OOP principles in JavaScript to create a simple yet functional University Residence Management System. The system streamlines the management of residences, students, and maintenance requests, providing an automated and efficient solution for university housing administration.


This README provides a concise overview of the project, its structure, features, and usage instructions, ensuring that anyone who reads it can understand and run the system effectively.
