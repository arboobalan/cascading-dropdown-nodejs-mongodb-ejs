require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//views
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

//Controller
const myController = require('./controller/mycontroller');
app.use('/', myController);

//Database
require('./database/config');

app.listen(process.env.PORT, (req,res)=>{
    console.log(`Port working on http://localhost:${process.env.PORT}`);
});