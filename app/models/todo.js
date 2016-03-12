/**
 * Created by Tauqeer Ahmed on 3/11/2016.
 */

var mongoose = require('mongoose');

//define schema and model========================
var TodoSchema = mongoose.Schema({
    text: String,
    done: Boolean
});
var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;