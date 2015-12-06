angular
    .module('simpleSign')
    .directive('slideContainer', slideContainer);

function slideContainer(GradientService) {
    var directive = {};

    directive.restrict = 'E';

    function getGradientColors(color) {
        return GradientService.getGradient(color).colors;
    }

    directive.compile = function(element, attributes) {

        var linkFunction = function($scope, element, attributes) {
            function buildGradient(gradient) {
                var colors = getGradientColors(gradient);
                var color1 = colors[0];
                var color2 = colors[1];
                return "background: " + color1 + "; background: -webkit-linear-gradient(to top left, " + color1 + ", " + color2 + "); background: linear-gradient(to top left, " + color1 + ", " + color2 + ");";
            }
            element.html("<div style='" + buildGradient($scope.slide.color) + "' class='slide-animation flex-contain " + $scope.slide.color + "' slide-animation> <div class='title' titleresizer><span> <div class='title' titleresizer><span>" + $scope.slide.headline + "</span></div></span></div></div>");
        }

        return linkFunction;
    }

    return directive;

}
