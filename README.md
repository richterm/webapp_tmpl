# Personal web application boilerplate

Although I highly appreciate tools like yeoman.io and Bower (I use the latter myself) this is my web application boilerplate.

It requires the following installations:

```sh
npm install
cd server
npm install
cd ../app
bower install
bower install eeroan/requirejs-tpl
cd tests
bower install
```

When all packages are installed, this contains

1. an express-based static file server for all files in app/ and below
2. the frontend modules
  - jQuery
  - BackboneJS
  - MarionetteJS
  - UnderscoreJS
  - Bootstrap
  - RequireJS
  - RequireJS-tpl plugin (eeroan's fork)
  - chaiJS
  - sinonJS
  - mocha