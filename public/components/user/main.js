//= require_self
//= require ./states.js
//= require ./services.js
//= require ./controllers.js

angular.module('kabam.user.states', ['kabam.states']);
angular.module('kabam.user.services', ['ngGrid', 'ui.router']);
angular.module('kabam.user.controllers', ['kabam.user.services']);

angular.module('kabam.user', [
  'kabam.user.states',
  'kabam.user.services',
  'kabam.user.controllers'
]);
