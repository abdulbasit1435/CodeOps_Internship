const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'example',
});

client.connect()
  .then(() => {
    console.log('✅ Connected to PostgreSQL');
    console.log('GREETING:', process.env.GREETING || 'No Greeting');
  })
  .catch(err => {
    console.error('❌ Connection error:', err.stack);
  });

// 👇 This keeps the app running so Swarm doesn't think it's crashed
setInterval(() => {
  console.log("⏳ App is still running...");
}, 5000);




