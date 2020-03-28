// require express

const express = require('express');
const app = express();

// add json file
const data = require('./data')


// test

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

//set up middleware

// set view engine to pug
app.set('view engine', 'pug')

// static route to access public folder
app.use("/static",
    express.static('public'));

// set up your routes

app.get('/', (req, res) => {
    res.render('index', colors 
    //{data: "projects"} 
    );
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/project', (req, res) => {
    res.render('project');
})

// listen port 3000
app.listen(3000, () =>  
    console.log("App is listening on Port 3000"));