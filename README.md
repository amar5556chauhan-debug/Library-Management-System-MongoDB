# Library Management System Using MongoDB

## Project Overview

The Library Management System is a NoSQL database project developed using MongoDB. It is designed to manage book records, student information, and book issue/return transactions.

This project demonstrates MongoDB database creation, collections, CRUD operations, query operators, sorting, projection, and aggregation operations.

## Technologies Used

- MongoDB
- MongoDB Compass
- NoSQL Database
- JavaScript / MongoDB Query Language
- Visual Studio Code
- GitHub

## Database

Database Name:

`LIBRARYDB`

The database contains three collections:

1. `Books`
2. `Students`
3. `transaction`

## Dataset

The project contains:

- 50 Book Records
- 20 Student Records
- 15 Transaction Records

## Books Collection

The `Books` collection stores information about books.

Main fields:

- bookId
- title
- author
- category
- price
- available

## Students Collection

The `Students` collection stores student information.

Main fields:

- studentId
- name
- course
- semester
- contact

## Transaction Collection

The `transaction` collection stores information about book issue and return activities.

Main fields:

- transactionId
- studentId
- bookId
- issueDate
- dueDate
- returnDate
- status

## MongoDB Operations Performed

The project demonstrates:

- Database and Collection Creation
- Insert Operations
- Find Operations
- Update Operations
- Delete Operations
- Comparison Operators
- Logical Operators
- `$in` Operator
- Sorting
- Projection
- Count Documents
- Aggregation Pipeline
- Category-wise Book Count
- Average Book Price
- Total Library Book Value
- Available and Unavailable Book Count

## Project Structure

```text
Library-Management-System-MongoDB/
│
├── database/
│   ├── books.js
│   ├── students.js
│   └── transactions.js
│
├── queries/
│   └── library_queries.js
│
├── screenshots/
│
├── report/
│
└── README.md
```

## How to Run the Project

1. Install MongoDB and MongoDB Compass.
2. Start the MongoDB server.
3. Open MongoDB Compass or MongoDB Shell.
4. Create or switch to the `LIBRARYDB` database.
5. Execute the database files to insert Books, Students, and Transactions.
6. Run the required queries from `library_queries.js`.
7. View the results in MongoDB Compass or MongoDB Shell.

> Note: If the data already exists in the database, do not execute the `insertMany()` scripts again because duplicate records may be created.

## Project Purpose

The purpose of this project is to understand how a NoSQL database can be used to manage a library system and to practically implement MongoDB concepts such as collections, documents, CRUD operations, operators, sorting, projection, and aggregation.

## Author

**Amarjeet Chauhan**

BCA Data Science & Artificial Intelligence  
School of Computer Applications  
Babu Banarasi Das University

## Academic Session

**2026-2027**

## Project Guide

**Mr. Harendra Singh**