/**
 * Created by Tauqeer Ahmed on 3/11/2016.
 */
angular.module('todoList')
    .controller('MainCtrl', ['todoService', function (todoService) {
        var _self = this;
        _self.formData = {};

        todoService.getList().then(function (data) {
            _self.todos = data;
        });
        _self.createTodo = function () {
            if (_self.formData.text === undefined) {
                return;
            }
            todoService.create(_self.formData).then(function (data) {
                _self.formData = {};    //clear the form so our user is ready to enter another
                _self.todos = data;
            });
        };
        _self.deleteTodo = function (id) {
            todoService.delete(id).then(function (data) {
                _self.todos = data;
            });
        };
    }]);