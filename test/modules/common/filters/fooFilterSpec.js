describe('The foo filter', function () {
  'use strict';

  var $filter;

  beforeEach(function () {
    module('angular-template.common.filters');
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should add an exclamation mark to a string', function () {
    var foo = 'hello world';
    var result;

    result = $filter('foo')(foo);

    expect(result).toEqual('hello world!');
  });
});
