const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

require('dotenv').config()

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: process.env.HOST,      
    user: process.env.USER,  
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

app.get('/internships/search/:query', (req, res) => {
    const search = `%${req.params.query}%`;
    const sql = `
        SELECT * FROM \`internships - opt_cpt internships\`
        WHERE role LIKE ? OR company LIKE ? OR title LIKE ?
    `;
    db.query(sql, [search, search, search], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/internships', (req, res) => {
    db.query('SELECT * FROM `internships - opt_cpt internships`', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
