angular
    .module('simpleSign')
    .controller('DisplayController', DisplayController);

function DisplayController($scope, $timeout, $firebaseArray, GradientService, FBURL) {

    var ref = new Firebase(FBURL + "/slides");

    $scope.slides = $firebaseArray(ref);

    function isCurrentSlideIndex(index) {
        return $scope.currentIndex === index;
    }

    var INTERVAL = 12000;

    function nextSlide() {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        $timeout(nextSlide, INTERVAL);
    }

    function loadSlides() {
        $timeout(nextSlide, INTERVAL);
    }

    $scope.currentIndex = 0;

    $scope.isCurrentSlideIndex = isCurrentSlideIndex;

    loadSlides();

};
