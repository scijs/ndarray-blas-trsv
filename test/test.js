'use strict';

var assert = require('chai').assert,
    ndarray = require('ndarray'),
    trsv = require('../index.js'),
    ndt = require('ndarray-tests');

describe("trsv()",function() {

  var A, A0, x, x0, y, y0;

  beforeEach(function() {
    var Adata = [1,2,5,3];
    var xdata = [-4,7];
    var ydata = [3,-2];
    A = ndarray(new Float64Array(Adata), [2,2]);
    A0 = ndarray(new Float64Array(Adata), [2,2]);
    x = ndarray(new Float64Array(xdata));
    x0 = ndarray(new Float64Array(xdata));
    y = ndarray(new Float64Array(ydata));
    y0 = ndarray(new Float64Array(ydata));
  });

  it('upper triangular',function() {
    assert( trsv( A, x ) );
    assert( ndt.approximatelyEqual( x, ndarray([-8.66666666666666667,  2.3333333333333333]), 1e-8 ) );
    assert( ndt.approximatelyEqual( A0, A, 1e-8 ) );
  });

  it('lower triangular',function() {
    assert( trsv( A, x, 'lo' ) );
    assert( ndt.approximatelyEqual( x, ndarray([-4,  9]), 1e-8 ) );
    assert( ndt.approximatelyEqual( A0, A, 1e-8 ) );
  });

});

