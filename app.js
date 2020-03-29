// require express

const express = require('express');
const app = express();
const pug = require('pug');

// add json file
const data = require('./data.json')
const projects = data.projects

//set up middleware

// set view engine to pug
app.set('view engine', 'pug')

// static route to access public folder
app.use("/static",
    express.static('public'));

// set up your routes

app.get('/', (req, res) => {
    // test if projects objects coming through
        // console.log(projects);
        //res.end();
    // project is property and value name so just list once
    res.render('index', {projects} );
})

app.get('/about', (req, res) => {
    res.render('about');
})

 app.get('/project/:id', (req, res) => {
    res.render('project/:id', {prompt: "huh?"});
 })

// listen port 3000
app.listen(3000, () =>  
    console.log("App is listening on Port 3000"));