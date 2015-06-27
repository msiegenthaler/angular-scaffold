'use strict'

module.exports = angular.module('angular-template.common', [
  require('./directives/index').name
  require('./filters/index').name
  require('./services/index').name
])
