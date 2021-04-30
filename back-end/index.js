const express = require('express');
const cors = require('cors')
const knex = require('knex')(require('./knexfile.js')["development"]);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/books', (req, res) => {

  knex
    .select()
    .from('books')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/api/books/:bookid', (req, res) => {
  const { bookid } = req.params;

  knex
    .select()
    .from('books').where('bookid', bookid)
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.patch('/api/books/:bookid', (req, res) => {
  const { bookid } = req.params;
  console.log('req.body -----', req.body);

  knex("books").where('bookid', bookid).update(req.body)
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'Error. Please try again'
      })
    );
});

module.exports = app;
