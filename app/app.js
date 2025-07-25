const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017";

app.get('/', async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    const db = client.db('testdb');
    const collection = db.collection('demo');
    const result = await collection.insertOne({ timestamp: new Date() });
    res.send(`Inserted with ID: ${result.insertedId}`);
  } catch (err) {
    res.status(500).send("MongoDB error: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
