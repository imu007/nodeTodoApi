//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'nodeTodeApi';

// Use connect method to connect to the Server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
  const collName = "TodoList";
  const col = db.collection(collName);
  col.find().toArray(function (err, docs) {
    assert.equal(null, err);
    console.log(JSON.stringify(docs, undefined, 2));

    client.close();
  });
});