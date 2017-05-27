var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// // Load foundation
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')

// import $ from 'jquery'
// import '!style-loader!css-loader!foundation-sites/dist/foundation.min.css'
// $(document).foundation();

// ReactDOM.render(
//   <p>Boilerplate 4 Project</p>,
//   document.getElementById('app')
// );

require('./redux-example.jsx');
// require('./redux-todo-example.jsx');
