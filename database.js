const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://mahendras00b:Mahendra70135%40@node.avpfn.mongodb.net/?retryWrites=true&w=majority&appName=node";
const client = new MongoClient(url);

// Database Name


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db("hello");
  const collection = db.collection("user");

const data  =   {
   "first name":"mahendra",
   "last name":"seervi",
   "city":"beawar"
};
// const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);
  // const deleteResult = await collection.deleteMany({ a:2});
// console.log('Deleted documents =>', deleteResult);
// const result = await collection.find({"first name":"mahendra"}).toArray();
// console.log(result);
//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);
  // the following code examples can be pasted here...
 
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// const {MongoClient} = require("mongodb")

// const uri = "mongodb+srv://mahendras00b:Mahendra70135%40@node.avpfn.mongodb.net/?retryWrites=true&w=majority&appName=node"
// const client =  new MongoClient(uri);

//  async function run() {
//    try {
//      await client.connect();
//      const database = client.db("hello");
//      const ratings = database.collection("user");
//      const cursor = ratings.find();
//      await cursor.forEach(doc => console.dir(doc));
//    } finally {
//      await client.close();
//    }
//  }
//  run().catch(console.dir);

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://mahendras00b:Mahendra70135%40@node.avpfn.mongodb.net/?retryWrites=true&w=majority&appName=node";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("hello").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
