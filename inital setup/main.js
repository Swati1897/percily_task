var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('../config');
var setupController = require('../controllers/setupController');
var apiController = require('../controllers/apiController');


var port = process.env.PORT || 3000;       

mongoose.connect(config.getDbConnectionString());  

setupController(app);
apiController(app);

app.listen(port);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // server.close(() => process.exit(1));// Close server & exit process
  });