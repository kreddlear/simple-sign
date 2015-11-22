  (function() {
      var app = angular.module('appName', ['ui.bootstrap', 'ngAnimate']);
      app.controller('MainCtrl', function() {
          this.foo = {
              bar1: 'bar1value',
              bar2: 'bar2value'
          };
      });
  })();
