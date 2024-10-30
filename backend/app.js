const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const cors = require('cors');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST || 'db',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'example',
    database: process.env.DATABASE_NAME || 'app_db',
    port: 3306
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.get('/', (req, res) => {
    db.query('SELECT NOW() AS time', (error, results) => {
        if (error) throw error;
        res.json({ message: 'Hello from the backend!', time: results[0].current_time });
    });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});