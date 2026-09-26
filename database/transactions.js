use("LIBRARYDB");

db.transaction.insertMany([
  { transactionId: 301, studentId: 201, bookId: 106, issueDate: "2026-09-01", dueDate: "2026-09-15", returnDate: null, status: "Issued" },
  { transactionId: 302, studentId: 202, bookId: 109, issueDate: "2026-09-03", dueDate: "2026-09-17", returnDate: null, status: "Issued" },
  { transactionId: 303, studentId: 203, bookId: 113, issueDate: "2026-09-05", dueDate: "2026-09-19", returnDate: null, status: "Issued" },
  { transactionId: 304, studentId: 204, bookId: 119, issueDate: "2026-09-07", dueDate: "2026-09-21", returnDate: null, status: "Issued" },
  { transactionId: 305, studentId: 205, bookId: 123, issueDate: "2026-09-08", dueDate: "2026-09-22", returnDate: null, status: "Issued" },
  { transactionId: 306, studentId: 206, bookId: 128, issueDate: "2026-09-10", dueDate: "2026-09-24", returnDate: null, status: "Issued" },
  { transactionId: 307, studentId: 207, bookId: 132, issueDate: "2026-09-11", dueDate: "2026-09-25", returnDate: null, status: "Issued" },
  { transactionId: 308, studentId: 208, bookId: 137, issueDate: "2026-09-12", dueDate: "2026-09-26", returnDate: null, status: "Issued" },
  { transactionId: 309, studentId: 209, bookId: 142, issueDate: "2026-09-13", dueDate: "2026-09-27", returnDate: null, status: "Issued" },
  { transactionId: 310, studentId: 210, bookId: 147, issueDate: "2026-09-14", dueDate: "2026-09-28", returnDate: null, status: "Issued" },

  { transactionId: 311, studentId: 211, bookId: 101, issueDate: "2026-08-20", dueDate: "2026-09-03", returnDate: "2026-09-02", status: "Returned" },
  { transactionId: 312, studentId: 212, bookId: 102, issueDate: "2026-08-21", dueDate: "2026-09-04", returnDate: "2026-09-04", status: "Returned" },
  { transactionId: 313, studentId: 213, bookId: 103, issueDate: "2026-08-22", dueDate: "2026-09-05", returnDate: "2026-09-03", status: "Returned" },
  { transactionId: 314, studentId: 214, bookId: 104, issueDate: "2026-08-23", dueDate: "2026-09-06", returnDate: "2026-09-06", status: "Returned" },
  { transactionId: 315, studentId: 215, bookId: 105, issueDate: "2026-08-24", dueDate: "2026-09-07", returnDate: "2026-09-05", status: "Returned" }
]);