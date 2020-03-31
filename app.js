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

// index route
app.get('/', (req, res) => {
    // test if projects objects coming through:
        // console.log(projects);
            //res.end();
    // project is property and value name so just list once
    res.render('index', {projects} );
})

// about page route
app.get('/about', (req, res) => {
    res.render('about');
})


// dynamic routes for project pages
 app.get('/projects/:id', (req, res) => {
    // render "project" from "projects"
    res.render('project', { 
        // variables pug files, access json items
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

// error handling

// sets up 404 message

app.use((req, res, next) => {
    // set up error msg variable
    const err = new Error('Sorry, Page Not Found');
    // set status code
    err.status = 404;
    next(err);
}); 

// sets up error object

app.use((err, req, res, next) => {
    res.locals.error = err;
    // log note to console
    console.log("Sorry, Page Not Found")
    console.log(err);
    res.status(err.status);
    res.render('error');
}); 

// listen port 3000
app.listen(3000, () =>  
    console.log("App is listening on Port 3000"));