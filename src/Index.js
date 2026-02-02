const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
  res.render('home/index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('home/about', { title: 'About' });
});

app.get('/contact', (req, res) => {
  res.render('home/contact', { title: 'Contact' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
});
