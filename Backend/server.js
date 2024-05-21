const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // add this line

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'test'
})

app.get('/', (req, res) => {
    return res.json("from backend side")
    });

app.get('/user', (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    
    })
});

app.post('/user', (req, res) => {
    const {name, phone, email} = req.body;
    const sql = `INSERT INTO user (name, phone, email) VALUES ('${name}', '${phone}', '${email
    }')`;
    db.query(sql, (err, data) => {
        if(err) {
            return res.json(err);
        }
        return res.json(data);
    });
})

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});