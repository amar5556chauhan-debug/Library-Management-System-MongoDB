use("LIBRARYDB");

// ================================
// 1. DISPLAY BOOK RECORDS
// ================================
db.Books.find();
db.Books.find().limit(5);

// ================================
// 2. SEARCH OPERATIONS
// ================================

// Search book by ID
db.Books.find({ bookId: 110 });

// Find AI books
db.Books.find({ category: "AI" });

// Find available books
db.Books.find({ available: true });

// ================================
// 3. CRUD OPERATIONS
// ================================

// Insert
db.Books.insertOne({
  bookId: 151,
  title: "Generative AI Basics",
  author: "David Foster",
  category: "AI",
  price: 850,
  available: true
});

// Update
db.Books.updateOne(
  { bookId: 151 },
  { $set: { price: 900 } }
);

// Delete
db.Books.deleteOne({ bookId: 151 });

// ================================
// 4. COMPARISON OPERATORS
// ================================

// Price greater than 800
db.Books.find({
  price: { $gt: 800 }
});

// Price less than 600
db.Books.find({
  price: { $lt: 600 }
});

// Price between 600 and 800
db.Books.find({
  price: { $gte: 600, $lte: 800 }
});

// ================================
// 5. LOGICAL OPERATORS
// ================================

// AND Operator
db.Books.find({
  $and: [
    { category: "AI" },
    { available: true }
  ]
});

// OR Operator
db.Books.find({
  $or: [
    { category: "AI" },
    { category: "Database" }
  ]
});

// IN Operator
db.Books.find({
  category: {
    $in: ["AI", "Database", "Programming"]
  }
});

// ================================
// 6. SORTING
// ================================

// Ascending price
db.Books.find().sort({ price: 1 });

// Descending price
db.Books.find().sort({ price: -1 });

// Top 5 most expensive books
db.Books.find()
  .sort({ price: -1 })
  .limit(5);

// ================================
// 7. PROJECTION
// ================================

db.Books.find(
  {},
  {
    _id: 0,
    title: 1,
    author: 1,
    price: 1
  }
);

// ================================
// 8. AGGREGATION
// ================================

// Category-wise number of books
db.Books.aggregate([
  {
    $group: {
      _id: "$category",
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { totalBooks: -1 }
  }
]);

// Average book price by category
db.Books.aggregate([
  {
    $group: {
      _id: "$category",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// Total library book value
db.Books.aggregate([
  {
    $group: {
      _id: null,
      totalValue: { $sum: "$price" }
    }
  }
]);

// Available and unavailable book count
db.Books.aggregate([
  {
    $group: {
      _id: "$available",
      totalBooks: { $sum: 1 }
    }
  }
]);

// ================================
// 9. COUNT DOCUMENTS
// ================================

db.Books.countDocuments();

// ================================
// 10. STUDENT RECORDS
// ================================

db.Students.find().limit(5);

// ================================
// 11. TRANSACTION RECORDS
// ================================

db.transaction.find().limit(5);