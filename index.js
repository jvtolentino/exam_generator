const express = require('express');
const path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(3000, () => {
	console.log('Server started on Port 3000...');
});