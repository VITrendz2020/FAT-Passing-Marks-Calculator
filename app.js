const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(5000, () => {
    console.log("APP IS LISTENING ON PORT 5000!");
})