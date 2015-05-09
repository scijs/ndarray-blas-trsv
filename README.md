# ndarray-blas-trsv

[![Build Status](https://travis-ci.org/scijs/ndarray-blas-trsv.svg?branch=master)](https://travis-ci.org/scijs/ndarray-blas-trsv) [![npm version](https://badge.fury.io/js/ndarray-blas-trsv.svg)](http://badge.fury.io/js/ndarray-blas-trsv)

BLAS Level 2 TRSV (triangular solve) for [ndarrays](https://github.com/scijs/ndarray)

## Usage

##### `trsv( A, x [, uplo] )`
Calculate `x <- A^-1 x` for the upper triangular matrix A using back-substitution. Data below the diagonal is ignored.  If `uplo` is 'lo', uses the lower triangular portion of A and performs forward-substitution instead. Result overwrites the vector x.

## Credits
(c) 2015 Ricky Reusser. MIT License

