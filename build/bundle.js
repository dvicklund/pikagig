/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* This script assumes that vars Sammy and jQuery ($) have been pre-loaded into
	    the global namespace */

	__webpack_require__(1)()

	var app = Sammy('body')
	app.use(Sammy.Template)

	__webpack_require__(2)(app)

	$(document).ready(function() {
	  app.run('#/')
	})


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function() {
	  var canvas = document.getElementById('dividerSineCanvas')
	  var ctx = canvas.getContext('2d')

	  var height = canvas.height = window.innerHeight * 3 / 100;
	  var width = canvas.width = window.innerWidth;

	  function draw() {
	    ctx.fillStyle = 'rgba(0,0,0,0.0)'
	    ctx.fillRect(0,0,width,height)

	    ctx.fillStyle="black"
	    for(var i = 0; i < width; i++) {
	      ctx.fillRect(i, Math.sin(i)+height/2, 1, 1)
	    }
	  }

	  draw()
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = function(app) {
	  __webpack_require__(3)(app)
	  __webpack_require__(4)(app)
	  __webpack_require__(5)(app)
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(app) {
	  app.get('#/', function(context) {
	    context.render('/templates/main.template', {
	      // TODO: Connect to user DB
	      'someName': 'A name of some sort'
	    }, function(view) {
	      $('#mainView').html(view)
	    })
	  })
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(app) {
	  app.get('#/user', function(context) {
	    console.log('hit user route')
	  })
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(app) {
	  app.get('#/profile', function(context) {
	    console.log('profile route hit')
	  })
	}


/***/ }
/******/ ]);