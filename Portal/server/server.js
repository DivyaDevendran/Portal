'use strict';

/**
 * Express - Node.js web application framework
 * Refer https://expressjs.com/
 * @constant
 */
const express = require('express');

/**
 * bodyParser - Node.js body parsing middleware
 * Refer https://github.com/expressjs/body-parser
 * @constant
 */
const bodyParser = require('body-parser');

/**
 * For Performance
 * compression - Node.js compression middleware
 * Refer https://github.com/expressjs/compression
 * Refer https://expressjs.com/en/advanced/best-practice-performance.html
 * @constant
 */
const compression = require('compression');

/**
 * For Security
 * helmet - Helmet helps you secure your Express apps by setting various HTTP headers
 * Refer https://helmetjs.github.io/
 * Refer https://expressjs.com/en/advanced/best-practice-security.html
 * @constant
 */
const helmet = require('helmet');

/**
 * config - Configure Node.js app deployments
 * Refer https://www.npmjs.com/package/config
 * @constant
 */
var config = require('config');

/**
 * express app
 * @constant
 * @type {object}
 */
const app = express();

// Appying required middlewares
// https://expressjs.com/en/resources/middleware.html

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());

//  serve static files
//  https://expressjs.com/en/starter/static-files.html

app.use(express.static(__dirname + '/../dist/dev-app'));
app.use('/app', express.static(__dirname + '/../dist/dev-app'));

/**
 * listen to port
 * @constant
 */
const port = 6006;
try {
  app.listen(port, () => {
    console.log('info', 'ServerStart', {
      port: port,
      Env: config.get('Env')
    });
  });
} catch (e) {
  console.log('error', 'Server 4000 error', e);
}

/**
 * Default route serving the web app.
 * @name get/
 * @function
 * @param {callback} middleware - Express middleware.
 */
app.get('/', (req, res) => {
  res.sendFile('/app/index.html');
});
