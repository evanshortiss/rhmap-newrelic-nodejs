# Red Hat Mobile with Node.js  New Relic Integration

## Overview
This is a template express application designed to run on Red Hat Mobile
Application Platform. It integrates New Relic's Node.js module to provide
detailed analytics integration with their platform.

## Prerequisites

* Node.js v4.4.3
* npm v3 or higher
* MongoDB 2.4 or higher
* Redis 2.X or higher
* New Relic account and Licence Key

## Quickstart

To run this application you'll need to set the environment variables:

* NR_LICENCE_KEY - Your New Relic licence key
* NR_LICENCE_LOG_LEVEL - The New Relic log level to use
* FH_USE_LOCAL_DB - Instructs the application to connect to a local MongoDB

The easiest way to do this for development is to create a `.env` file inside
this repository and add the following content:

```
NR_LICENCE_KEY=your_new_relic_key_goes_here
NR_LICENCE_LOG_LEVEL=info
FH_USE_LOCAL_DB=true
```

You can replace the New Relic (those with the `NR` prefix) values as needed.
This file is ignored by Git so no need to worry about checking in your key.

Now just run the following commands to install dependencies from npm and start
the server:

```
npm install
npm start
```

Now make a GET request to `http://localhost:8001/hello` to verify your app is
running.

## Endpoints

### GET /hello
Echoes back the string "Hello, World", or you can pass a querystring parameter
like so to pass a name to echo back `/hello?hello=Bumblebee`. This would echo
back `Hello, Bumblebee`.

### POST /hello
Echoes back the string "Hello, World", or you can pass a body like so:

```
{
  "hello": "Bumblebee"
}
```

This would echo back `Hello, Bumblebee`.

### GET /error
Simulates an appliaction error. Returns a 500 response with error details.


## Running Project Tasks
Rather than using a task runner like _gulp_, _grunt_, or whichever other task
runner you're familiar with, we've chosen to simply use the _package.json_
"scripts" that npm supports. This makes it easy to use local dependencies and
reduce bloat. Of course, this project can easily be modified to use your
favourite task runner if you like.

Scripts can be run by typing:

```
npm run-script {SCRIPT_NAME}
```

You can view the _package.json_ to see the scripts in detail , but here's a
breakdown of each.

### start
Start the application, e.g _npm start_

### lint
Check code quality using ESLint.

### test
Execute ESLint, unit tests, and verification of code coverage. This would
make sense to run on a CI server.

### coverage
Execute unit tests and generate code coverage from them.

### check-coverage
Verify that code coverage is above a certain threshold.

### unit
Execute the unit tests.

### analysis
Uses Plato to provide feedback on code quality.

