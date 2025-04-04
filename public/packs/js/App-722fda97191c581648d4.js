/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/App.jsx":
/*!**************************************!*\
  !*** ./app/javascript/packs/App.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/dhina/React/BlogPlatform/app/javascript/packs/App.jsx: Identifier 'SignOut' has already been declared. (15:7)\n\n  13 | import Login from \"../Components/Login.jsx\"\n  14 | import SignUp from \"../Components/SignUp.jsx\"\n> 15 | import SignOut from \"../Components/SignOut.jsx\"\n     |        ^\n  16 | import Home from \"../Components/Home.jsx\"\n  17 | console.log(Articles);\n  18 | document.addEventListener('DOMContentLoaded', () => {\n    at constructor (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:360:19)\n    at JSXParserMixin.raise (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:3338:19)\n    at ScopeHandler.checkRedeclarationInScope (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:1566:19)\n    at ScopeHandler.declareName (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:1532:12)\n    at JSXParserMixin.declareNameFromIdentifier (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:7494:16)\n    at JSXParserMixin.checkIdentifier (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:7490:12)\n    at JSXParserMixin.checkLVal (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:7431:12)\n    at JSXParserMixin.finishImportSpecifier (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:13926:10)\n    at JSXParserMixin.parseImportSpecifierLocal (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:13923:31)\n    at JSXParserMixin.maybeParseDefaultImportSpecifier (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:14030:12)\n    at JSXParserMixin.parseImportSpecifiersAndAfter (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:13899:29)\n    at JSXParserMixin.parseImport (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:13895:17)\n    at JSXParserMixin.parseStatementContent (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:12540:27)\n    at JSXParserMixin.parseStatementLike (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:12432:17)\n    at JSXParserMixin.parseModuleItem (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:12409:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:12980:36)\n    at JSXParserMixin.parseBlockBody (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:12973:10)\n    at JSXParserMixin.parseProgram (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:12306:10)\n    at JSXParserMixin.parseTopLevel (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:12296:25)\n    at JSXParserMixin.parse (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:14152:10)\n    at parse (/home/dhina/React/BlogPlatform/node_modules/@babel/parser/lib/index.js:14186:38)\n    at parser (/home/dhina/React/BlogPlatform/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/dhina/React/BlogPlatform/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/dhina/React/BlogPlatform/node_modules/@babel/core/lib/transformation/index.js:22:50)\n    at run.next (<anonymous>)\n    at transform (/home/dhina/React/BlogPlatform/node_modules/@babel/core/lib/transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (/home/dhina/React/BlogPlatform/node_modules/gensync/index.js:261:32)\n    at /home/dhina/React/BlogPlatform/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/dhina/React/BlogPlatform/node_modules/gensync/index.js:223:11)\n    at /home/dhina/React/BlogPlatform/node_modules/gensync/index.js:189:28\n    at /home/dhina/React/BlogPlatform/node_modules/@babel/core/lib/gensync-utils/async.js:67:7\n    at /home/dhina/React/BlogPlatform/node_modules/gensync/index.js:113:33\n    at step (/home/dhina/React/BlogPlatform/node_modules/gensync/index.js:287:14)\n    at /home/dhina/React/BlogPlatform/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/dhina/React/BlogPlatform/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=App-722fda97191c581648d4.js.map