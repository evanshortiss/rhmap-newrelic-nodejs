'use strict';

const route = module.exports = new require('express').Router();

route.get('/', function (req, res, next) {
  next(new Error('oops, something broke!'));
});
