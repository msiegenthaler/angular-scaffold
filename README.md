AngularJS Scaffold
==================

Scaffolding for an AngularJS project using Gulp with Browserify. The language of choice is coffeescript, dependencies
are managed with NPM (no bower).


Setup
-----
- Install io.js (https://iojs.org/en/index.html)

- Initialize with (in the project root)

      npm install -g gulp
      npm install -g karma
      npm install


Usage
-----
- To run development webserver. The application will be available on http://localhost:8080/
    
      gulp
    
- You may use the live-reload browser plugin to speed up the development workflow (see http://livereload.com/)

- To run the unit test continuously

    gulp autotest

- To build your release (will be put into the 'release' sub-directory)

    gulp --release
    
 
