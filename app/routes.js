/**
 * Created by Tauqeer Ahmed on 3/11/2016.
 */

var Todo = require('./models/todo');

module.exports = function (app) {

    //-------------------api----------------
    //get all todos
    app.get('/api/todos', function (req, res) {

        //use mongoose to get all todos from database
        Todo.find({}, function (err, todos) {
            //if there is an error retrieving send the error back
            if (err) {
                res.send(err);
            }
            //return all todos in json format
            res.json(todos);
        });
    });

    //create todo and send back all the todos after creation
    app.post('/api/todos', function (req, res) {

        //create a todo , information comes from AJAX request from angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            //get and return all the todos after you create another
            Todo.find({}, function (err, todos) {
                if (err) {
                    res.send(err);
                }
                res.json(todos);
            })
        });
    });

    //delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }

            Todo.find({}, function (err, todos) {
                if (err) {
                    res.send(err);
                }
                res.json(todos);
            });
        })
    });
    //application default page
    app.get('/', function (req, res) {
        res.sendFile('./public/index.html'); //load the single view file (angular will handle the page changes on the front end)
    });


};