const { MongoClient } = require('mongodb');

// Connection URL
const url = "mongodb+srv://mahendras00b:Mahendra70135%40@node.avpfn.mongodb.net/?retryWrites=true&w=majority&appName=node";
const client = new MongoClient(url);

(async () => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Specify the database and collection
    const db = client.db('testDB'); // Replace 'testDB' with your database name
    const collection = db.collection('collection'); // Replace 'collection' with your collection name

    // Insert documents
    await collection.insertOne({ _id: 1 });
    await collection.insertOne({ _id: 1 }); // This will throw a duplicate key error
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error code
      console.error(`Duplicate Key Error: ${error.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error}`);
    }
  } finally {
    // Close the client
    await client.close();
    console.log('MongoDB connection closed');
  }
})();
