const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

// Подключение к БД (Docker service name 'db' используется как хост)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Z01 Server is running' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
