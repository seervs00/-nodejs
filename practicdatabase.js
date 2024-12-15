const {MongoClient} = require("mongodb");
const uri = "mongodb+srv://mahendras00b:Mahendra70135%40@node.avpfn.mongodb.net/?retryWrites=true&w=majority&appName=node";
const client = new MongoClient(uri);
 
async function run(){
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("hello");
    const collection = db.collection("user");
    const data  =   {
        "first name":"ravi",
        "last name":"pareek",
        "city":"khariya"
     };
    // const insertdoc = await collection.insertOne(data);
    // const deleteResult = await collection.deleteOne({ city:"khariya"});
    const updateresult = await collection.updateMany({city:"khariya"},{$set:{p_number:"8006864940"}})
    const result = await collection.find({}).toArray();
    console.log(result)
    return 'done.';

}
 run()
 .then(console.log)
 .catch(console.error)
 .finally(() => client.close());