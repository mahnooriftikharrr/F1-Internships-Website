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

app.get('/internships', (req, res) => {
    db.query('SELECT * FROM `internships - opt_cpt internships`', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/internships/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM `internships - opt_cpt internships` WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/internships/company/:company', (req, res) => {
    const company = `%${req.params.company}%`;
    db.query('SELECT * FROM `internships - opt_cpt internships` WHERE company LIKE ?', [company], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/internships/title/:title', (req, res) => {
    const title = `%${req.params.title}%`;
    db.query('SELECT * FROM `internships - opt_cpt internships` WHERE title LIKE ?', [title], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});