'use strict';

// Load our local environment variables from a .env file - see README for info
require('dotenv').config();

// Initialise the New Relic module
require('newrelic');

const express = require('express')
const mbaasApi = require('fh-mbaas-api')
const mbaasExpress = mbaasApi.mbaasExpress()
const app = module.exports = express()
const log = require('fh-bunyan').getLogger(__filename);

log.info('starting application');

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys([]));
app.use('/mbaas', mbaasExpress.mbaas);

// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

// Bind our routes
log.info('binding routes');

app.use('/hello', require('lib/routes/hello'));
app.use('/error', require('lib/routes/error-example'));

// Important that this is last!
app.use(mbaasExpress.errorHandler());

const port = process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001;
const host = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, function() {
  log.info('app started on %s:%s', host, port);
});
