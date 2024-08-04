import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({

    employeeId: String,  // Unique identifier for the employee
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    position: String,  // Job title or role
    department: String,
    hireDate: Date,  // Date the employee was hired
    salary: Number,    // Numeric value representing the salary
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String
    },
    status: String

    // Add other fields as necessary
});

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;
