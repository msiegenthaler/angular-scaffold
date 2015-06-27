'use strict'

module.exports = angular.module('angular-template.foo', [])
    .config(($routeProvider) ->
      $routeProvider.when '/',
      templateUrl: 'app/foo/layout.html'
      controller: 'fooController'
      return
).controller('fooController', require('./fooController'))
