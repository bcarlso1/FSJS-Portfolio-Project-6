// requirements

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

// set up routes

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

 app.get('/projects/:id', (req, res) => {
    res.render('project', { 
        title: projects[req.params.id].project_name, 
        detail: projects[req.params.id].description,
        techs: projects[req.params.id].technologies, 
        livelink: projects[req.params.id].live_link,
        gitlink: projects[req.params.id].github_link, 
        // move up a folder out of "projects" to find images
        image1: "../" + projects[req.params.id].image_urls[0],
        image2: "../" + projects[req.params.id].image_urls[1] 
    });
 });

app.use((req, res, next) => {
  const err= new Error('Aaaagh!');
    next(err); 
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error');
});

// listen port 3000
app.listen(3000, () =>  
    console.log("App is listening on Port 3000"));