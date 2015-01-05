'use strict';

angular.module('sigmaWorldClockApp')
  .directive('displaytime', function () {
    return {
      restrict: 'E',
    	transclude : true,
    	scope : {'loc':'@location','cityNameStyle':'@citynamestyle','resultsStyle':'@resultstyle','cityName':'@cityname'},
      templateUrl: 'views/displaytimetemplate.html',
      controller: function ($scope,$interval, PlaceConfiguration,ClockInputs) {
      	
      	$scope.clock = ClockInputs;
      	
      	$scope.$watch('clock.controlInput',function(){
      		resetTime();
      	});
      	
      	$scope.$watch('clock.control',function(){
      		if($scope.clock.control === $scope.cityName){
      			shiftTime();
      			$scope.clock.control = '';
      		}
      	});
      	
      	$scope.$watch('clock.increment',function(){
      		resetTime();
      	});
      	
      	function resetTime(){
      		
      		var ctrlTime = $scope.clock.controlTime;
	       	var timeOffset = parseInt($scope.clock.getCity($scope.cityName).value);
	       	
	       	$scope.adjustedTime = new Date(ctrlTime.getFullYear(), ctrlTime.getMonth(), ctrlTime.getDate(), ctrlTime.getHours()+timeOffset, ctrlTime.getMinutes(), ctrlTime.getSeconds());
	       	
	       	$scope.placeconfig = PlaceConfiguration.getItem($scope.loc);
	       	
      	}
      	
      	function shiftTime(){

      		var iCurHours = parseInt($scope.clock.controlTime.getHours());
	       	var iHoursNewOffset = parseInt($scope.clock.getCity($scope.cityName).value);
	       	var iHoursDiff = iCurHours + iHoursNewOffset;
	       	
	       	$scope.adjustedTime.setHours(iHoursDiff);
	       	
      	}
      	
       	resetTime();
       	
      }
      
    };
  });
