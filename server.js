require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars')

const companyController = require('./controllers/companyController');

var app = express();


app.use(bodyparser.urlencoded({
    extended: true
}));

app.use('/public',express.static(path.join(__dirname, '/public/')));

app.use(bodyparser.json());
app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({ extname:'hbs' , defaultLayout:'mainLayout', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'hbs');
app.listen(3000,()=>{
    console.log('Server Started on port 3000!!!')
});

app.use('/',companyController);