/* File name: index.server.routes.js
      Author: Daniel Zhuo
   Student #: 301330354
        Date: Oct 5, 2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Products changed to projects
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Newly added mission
router.get('/mission', function(req, res, next) {
  res.render('mission', { title: 'Mission' });
});

// Capture the info entered by user and redirect to Homepage
router.post('/submit-form', function (req, res, next) {
  // Process the form data here (e.g., save to a database)
  const name = req.body.name;
  const cellphone = req.body.cellphone;
  const email = req.body.email;
  const message = req.body.message1;

  // After processing the form data, redirect to the home page
  res.redirect('/');
});


module.exports = router;
