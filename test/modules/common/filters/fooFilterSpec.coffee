'use strict'

describe('The foo filter', () ->
  $filter = {}

  beforeEach () ->
    module('angular-template.common.filters')
    inject (_$filter_) ->
      $filter = _$filter_

  it('should add an exclamation mark to a string', () ->
    foo = 'hello world'
    result = $filter('foo')(foo)
    expect(result).toEqual('hello world!')
  )
)
