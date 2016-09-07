//todos restful routes
//whatever new routes you create i.e. users you will need to require in the app.js

var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Todo  = require("../models/todo.model");

//Get all Todos
router.get('/todos', function(req, res, next){
  Todo.find(function(err, todos){
    if(err){
      res.send(err);
    } else {
      res.json(todos);
    }
  });
});

// Get Single Todo
router.get('/todos/:id', function(req, res, next){
  var id = req.params.id;
  Todo.findOne({_id: id}, function(err, todo) {
    if (err) {
      res.send(err);
    } else {
      res.json(todo);
    }
  });
});

//create and save todo
router.post('/todos', function(req, res, next){
var todo = new Todo(req.body);
todo.save(function(err){
  if (err) return next (err);
  res.json(todo)
});
});


//update todo
router.put('/todos/:id', function(req, res, next){
  var id = req.params.id;
  Todo.findByIdAndUpdate({_id: id}, req.body, function(err, todo) {
        if (err) {
          return next(err);
        } else {
          res.json(todo);
        }
      });
    });

//delete Todo
router.delete('/todos/:id', function(req, res, next){
  var id = req.params.id;

  Todo.findOne({_id: id}, function(err, todo) {
    todo.remove();
    if (err) return next(err);
    res.json(todo);
  });

});


module.exports = router;
