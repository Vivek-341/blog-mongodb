const express = require('express');
const app = express.Router();
const mySqlConnection = require('../db/db.js');
const queries = require('../db/models/threadModel.js');

app.get('/', (req, res) => {
    try {
        mySqlConnection.query(queries.SELECT_QUERY, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get("/:id", (req, res) => {
    try {
        mySqlConnection.query(queries.SELECT_QUERY_ID, [req.params.id], function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/', (req, res) => {
    try {
        mySqlConnection.query(queries.INSERT_QUERY, [req.body.name,req.body.description,req.body.created_date,req.body.create_by,req.body.modified_date,req.body.blog_id], function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    } catch (error) {
        res.json({ error: "Internal Server error" })
    }
});

app.put('/:id', (req, res) => {
    try {
        mySqlConnection.query(queries.UPDATE_QUERY, [req.body.name,req.body.description,req.body.modified_date,req.body.blog_id, req.params.id], function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
});

app.delete('/:id', (req, res) => {
    try {
        mySqlConnection.query(queries.DELETE_QUERY, [req.params.id], function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = app;