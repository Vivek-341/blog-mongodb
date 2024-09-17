const express = require('express');
const app = express.Router();
const mySqlConnection = require('../db/db.js')
const queries = require('../db/models/blogModel.js')

app.get("/", (req, res) => {
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
  console.log("inside post" + JSON.stringify(req.body));
  try {
    mySqlConnection.query(queries.INSERT_QUERY, [req.body.title, req.body.content, req.body.created_date, req.body.created_by, req.body.modified_date], function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  } catch (error) {
    res.json({ error: "Internal Server error" })
  }
});
app.put('/', (req, res) => {
  console.log("inside put" + JSON.stringify(req.body));
  try {
    mySqlConnection.query(queries.UPDATE_QUERY, [req.body.title, req.body.content,req.body.id], function (err, result) {
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


module.exports = app