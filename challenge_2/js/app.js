console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("welcomeController", welcomeController);

function welcomeController(){
  this.full_name = "Jane Doe";
  this.age = 7;
  this.city = "San Francisco";
  this.state = "California";
  this.lettersInName = function(){
    return this.full_name.replace(/[^a-z]/i, "").length;
  }
  this.full_name_backwards = function(){
    return this.full_name.split("").reverse().join("");
  }
}

app.controller("wdiController", wdiController);

function wdiController(){
  this.class_name = "WDI25";
  this.enrolled_students = 16;
  this.start_date = "11/16/2015"
  this.end_date = "02/26/2016"
  this.days_remaining = function(){
    var ms_left = new Date(this.end_date) - Date.now();
    return Math.round( ms_left  / (1000 * 60 * 60 * 24) );
  }
}
