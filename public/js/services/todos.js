/**
 * Created by Tauqeer Ahmed on 3/12/2016.
 */

angular.module('todoList', [])
    .service('todoService', ['$http', '$q', todoService]);
function todoService($http, $q) {
    var ser = this;
    // when landing on the page, get all todos and show them
    ser.getList = function () {
        var deferred = $q.defer();
        $http.get('/api/todos')
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    };
    // when submitting the add form, send the text to the node API
    ser.create = function (data) {
        var deferred = $q.defer();
        $http.post('/api/todos', data)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (err) {
                console.log("Error " + err);
                deferred.reject(err);
            });
        return deferred.promise;
    };
    // delete a todo after checking it
    ser.delete = function (id) {
        var deferred = $q.defer();
        $http.delete('/api/todos/' + id)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    };
}