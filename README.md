# Personal web application boilerplate

Although I highly appreciate tools like yeoman.io and Bower (I use the latter myself) this is my web application boilerplate.

It requires the following installations:

  npm install
  cd server
  npm install
  cd app
  bower install
  cd tests
  bower install

When all packages are installed, this contains

1. an express-based static file server for all files in app/ and below
2. the frontend modules
  - jQuery
  - BackboneJS
  - UnderscoreJS
  - Bootstrap
  - RequireJS
  - chaiJS
  - sinonJS
  - mocha