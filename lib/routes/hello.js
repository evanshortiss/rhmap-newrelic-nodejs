'use strict';

const route = module.exports = new require('express').Router();
const log = require('fh-bunyan').getLogger(__filename);

// Used to extract the "hello" name property from an object
function getName (data) {
  log.trace('generating hello response from', data);
  return (data && data.hello) ? data.hello : 'World';
}

function genResponse (data) {
  return 'Hello, ' + getName(data);
}

// Try to parse body if request has "Content-Type: application/json"
route.use(require('body-parser').json());

route.get('/', function (req, res) {
  log.debug('GET /hello/');

  res.json({
    msg: genResponse(req.query)
  });
});

route.post('/', function (req, res) {
  log.debug('POST /hello/');

  res.json({
    msg: genResponse(req.body)
  });
});

