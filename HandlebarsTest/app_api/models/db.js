﻿//Bring mongoose into the project
var mongoose = require('mongoose');
var dbURL = 'mongodb://localhost/moneyzone_test';

//create database connection
var dbConnection = mongoose.connect(dbURL);


//db events
//mongoose.connection.on('open', function () {

//    ////db drop 
//    //dbConnection.connection.db.dropDatabase(function (err, result) {
//    //    console.log('drop the database before starting...')
//    //});

//});  


mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURL);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected!');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('It is disconnected through app termination');
        process.exit(0);
    })
});


var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};


process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});



////rquired db models!!!

//require('./expense'); 
//require('./folder'); 


