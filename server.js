const express = require('express');
const path = require('path');
const app = express();

const hbs = require('hbs');
require('./hbs/helper');

// Middleware
app.use(express.static(path.join(__dirname, './public')));

// Express Hbs engine
hbs.registerPartials(`${__dirname}/views/partials`);

app.set('view engine', 'hbs');

app.get('/', (request, response) => {

  response.render('home', {
    name: 'Luciano',
    lastname: 'Valenzuela'
  });

});

app.get('/about', (request, response) => {
  response.render('about', {
    name: 'Luciano'
  });
});

app.listen(3000, () => {
  console.log('Server on port: 3000');
});