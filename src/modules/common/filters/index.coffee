'use strict'

module.exports = angular.module('angular-template.common.filters', [])
  .filter('foo', require('./fooFilter'))
