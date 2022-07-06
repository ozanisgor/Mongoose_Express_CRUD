const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('WOOF!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
