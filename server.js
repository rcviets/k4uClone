
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rcviets:<Plzgtf0k!>@cluster0.76j9e.gcp.mongodb.net/<k4uClone>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
