'use strict';

angular.module('sigmaWorldClockApp')
  .directive('settime', function () {
    return {
    	restrict: 'E',
    	transclude : true,
    	scope : {'loc':'@location', 'name':'@cityname', 'bCtrl':'@control'},
      templateUrl: 'views/settimetemplate.html',
      controller: function ($scope,$filter, PlaceConfiguration,ClockInputs) {
      	
      	$scope.clock = ClockInputs;
      	
       	$scope.placeconfig = PlaceConfiguration.getItem($scope.loc);
       	
       	if($scope.bCtrl === 'true'){
       		$scope.cityval = $filter('date')(ClockInputs.controlTime,'HH:mm:ss');
       	}else{
       		$scope.cityval = ClockInputs.getCity($scope.name).value;
       	}
       	
       	$scope.submit = function(){
       		
       		if($scope.bCtrl){

       			var aryTime = $scope.cityval.split(':');
       			
       			var iHour = aryTime[0];
       			var iMin = aryTime[1];
       			var iSec = aryTime[2];
       			
       			var localDate = new Date();
       			var time = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(),  iHour, iMin, iSec);
       			
       			$scope.clock.controlTime = time;
       			$scope.clock.controlInput = $scope.cityval;
       			
       			
       		}else{
       			
       			$scope.clock.updateCity($scope.name,$scope.cityval);
       			$scope.clock.control = $scope.name;
       		}
       		
       	}
       	
      }
    };
  });
