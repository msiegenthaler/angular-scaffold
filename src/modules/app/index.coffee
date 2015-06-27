'use strict'

module.exports = angular.module('angular-template', [
  'ui.bootstrap'
  'ngRoute'
  require('../../../tmp/templates/templates').name
  require('../common/index').name
  require('./foo/index').name
])
