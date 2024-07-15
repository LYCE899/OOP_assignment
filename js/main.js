// Base class for Residences
class Residence {
  constructor(name, address, isOccupied) {
    this.name = name;
    this.address = address;
    this.isOccupied = isOccupied;
  }
}

// Class for Dormitories, inheriting from Residence
class Dormitory extends Residence {
  constructor(name, address, isOccupied, sizeInSquareFeet) {
    super(name, address, isOccupied);
    this.sizeInSquareFeet = sizeInSquareFeet;
  }

  calculateRent() {
    return this.sizeInSquareFeet * 2; // Example: 2 currency units per square foot
  }
}

// Class for Apartments, inheriting from Residence
class Apartment extends Residence {
  constructor(name, address, isOccupied, numberOfRooms) {
    super(name, address, isOccupied);
    this.numberOfRooms = numberOfRooms;
  }

  calculateRent() {
    return this.numberOfRooms * 500; // Example: 500 currency units per room
  }
}

// Class for Students
class Student {
  constructor(name, studentId, gender, residence) {
    this.name = name;
    this.studentId = studentId;
    this.gender = gender;
    this.residence = residence;
  }
}

// Class for Maintenance Requests
class MaintenanceRequest {
  constructor(description, status, student, employee = null) {
    this.description = description;
    this.status = status; // 'submitted', 'in progress', 'completed'
    this.student = student;
    this.employee = employee;
  }

  assignEmployee(employee) {
    this.employee = employee;
  }

  updateStatus(status) {
    this.status = status;
  }
}

// Create some residences
let dormitory1 = new Dormitory("Dorm A", "123 University St", false, 300);
let apartment1 = new Apartment("Apartment B", "456 University Ave", true, 3);

// Create students and assign residences
let student1 = new Student("John Doe", "S12345", "Male", dormitory1);
let student2 = new Student("Jane Smith", "S67890", "Female", apartment1);

// Create a maintenance request
let maintenanceRequest1 = new MaintenanceRequest("Fix leaky faucet", "submitted", student1);

// Assign an employee to the maintenance request
maintenanceRequest1.assignEmployee("Employee1");

// Update the status of the maintenance request
maintenanceRequest1.updateStatus("in progress");

// Function to display the dormitories in the table
function displayDormitories() {
  let tableBody = document.getElementById('dormitoryTable').getElementsByTagName('tbody')[0];
  let row = tableBody.insertRow();
  row.insertCell(0).textContent = dormitory1.name;
  row.insertCell(1).textContent = dormitory1.address;
  row.insertCell(2).textContent = dormitory1.isOccupied ? "Yes" : "No";
  row.insertCell(3).textContent = dormitory1.sizeInSquareFeet;
  row.insertCell(4).textContent = dormitory1.calculateRent();
}

// Function to display the apartments in the table
function displayApartments() {
  let tableBody = document.getElementById('apartmentTable').getElementsByTagName('tbody')[0];
  let row = tableBody.insertRow();
  row.insertCell(0).textContent = apartment1.name;
  row.insertCell(1).textContent = apartment1.address;
  row.insertCell(2).textContent = apartment1.isOccupied ? "Yes" : "No";
  row.insertCell(3).textContent = apartment1.numberOfRooms;
  row.insertCell(4).textContent = apartment1.calculateRent();
}

// Function to display the students in the table
function displayStudents() {
  let tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
  let row = tableBody.insertRow();
  row.insertCell(0).textContent = student1.name;
  row.insertCell(1).textContent = student1.studentId;
  row.insertCell(2).textContent = student1.gender;
  row.insertCell(3).textContent = student1.residence.name;

  row = tableBody.insertRow();
  row.insertCell(0).textContent = student2.name;
  row.insertCell(1).textContent = student2.studentId;
  row.insertCell(2).textContent = student2.gender;
  row.insertCell(3).textContent = student2.residence.name;
}

// Function to display the maintenance requests in the table
function displayMaintenanceRequests() {
  let tableBody = document.getElementById('maintenanceTable').getElementsByTagName('tbody')[0];
  let row = tableBody.insertRow();
  row.insertCell(0).textContent = maintenanceRequest1.description;
  row.insertCell(1).textContent = maintenanceRequest1.status;
  row.insertCell(2).textContent = maintenanceRequest1.student.name;
  row.insertCell(3).textContent = maintenanceRequest1.employee;
}

// Display the data in the tables
displayDormitories();
displayApartments();
displayStudents();
displayMaintenanceRequests();
