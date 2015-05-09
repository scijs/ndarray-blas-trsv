'use strict';

var blas1 = require('ndarray-blas-level1');

var trsv = function trsv (A, x, uplo) {
  var dot = blas1.dot;
  var n = A.shape[1];

  if( A.dimension !== 2 || A.shape[0] !== A.shape[1] ) {
    throw new TypeError('trsv():: A must be a square matrix');
  }

  if( x.shape[0] !== A.shape[0] ) {
    throw new TypeError('trsv():: Dimensions of A and x must match');
  }

  switch(uplo) {
    case 'lo':
      x.set( 0, x.get(0)/A.get(0,0) );
      for(var i=1; i<n; i++) {
        x.set(i, (x.get(i) - dot(A.pick(i,null).hi(i), x.hi(i))) / A.get(i,i) );
      }
      break;
    case 'up':
    default:
      x.set( n-1, x.get(n-1)/A.get(n-1,n-1) );
      for(var i=n-2; i>=0; i--) {
        x.set(i, (x.get(i) - dot(A.pick(i,null).lo(i+1), x.lo(i+1))) / A.get(i,i) );
      }
  }
  return true;
};

module.exports = trsv;
