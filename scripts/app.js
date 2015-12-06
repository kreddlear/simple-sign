'use strict'

angular
    .module('simpleSign', [
        'firebase',
        'ui.bootstrap',
        'ngAnimate',
        'ngRoute'
    ])

.constant('FBURL', 'https://simplesign.firebaseio.com/')

.config(function($routeProvider) {
    $routeProvider
        .when('/display', {
            templateUrl: 'display/display-partial.html',
            controller: 'DisplayController'
        })
        .when('/display/:collectionId', {
            templateUrl: 'display.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
})

.animation('.slide-animation', function($window) {
    return {
        enter: function(element, done) {
            var startPoint = $window.innerWidth * 0.05,
                tl = new TimelineLite();

            tl.fromTo(element.find('.title'), 1, {
                    left: 50,
                    alpha: 0,
                    delay: .30
                }, {
                    left: 50,
                    alpha: 1,
                    delay: .30
                })
                .fromTo(element.find('.dateTime'), 1, {
                    left: 50,
                    alpha: 0
                }, {
                    left: 50,
                    alpha: 1,
                    onComplete: done
                })
                .fromTo(element.find('.time'), 1, {
                    left: 50,
                    alpha: 0
                }, {
                    left: 50,
                    alpha: 1,
                    onComplete: done
                });
        },

        leave: function(element, done) {
            var tl = new TimelineLite();

            tl.to(element, .5, {
                alpha: 0,
                onComplete: done
            });
        }
    };
});

