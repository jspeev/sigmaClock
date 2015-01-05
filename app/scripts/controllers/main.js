'use strict';

angular.module('sigmaWorldClockApp')
  .controller('MainCtrl', function ($scope,$filter,$interval, PlaceConfiguration,ClockInputs) {
  	
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    //DEFAULT INPUT DATA MODEL
    $scope.clock = ClockInputs;
    
    $scope.jsControlCity = {'cityname':'Toronto','value':0};
    
    $scope.aryWorldLocations = [
									    	{'cityname':'London','value':-6},
									    	{'cityname':'Sydney','value':-13}
									    ];
									    
    ////////////////////////////////////////////////////////////////////
    
    
    //GRID CONFIGURATIONS
    var aryPlacementConfigs =  [
		    								{		//CONTROL CITY SETTINGS
				    							'lbl_md':2,'lbl_sm':5,
				    							'input_md':2,'input_sm':3,
				    							'submit_md':2,'submit_sm':4
		    								},{	//WORLD LOCATIONS SETTINGS
				    							'lbl_md':3,'lbl_sm':5,
				    							'input_md':1,'input_sm':3,
				    							'submit_md':2,'submit_sm':4
			    							},{	//CONTROL CITY RESULTS
				    							'lbl_md':2,'lbl_sm':4,
				    							'results_md':4,'results_sm':8
			    							},{	//WORLD LOCATIONS RESULTS
				    							'lbl_md':1,'lbl_sm':3,
				    							'results_md':2,'results_sm':3
			    							}
		    							];
	 //////////////////////////////////////////////////////////////////////
	 
	 
	 
	 //POPULATE SERVICE MODELS FOR DEPENDENCY INJECTION TO DIRECTIVES
	 for(var iConfig = 0 ; iConfig < aryPlacementConfigs.length ; iConfig ++)
	 	PlaceConfiguration.addItem(aryPlacementConfigs[iConfig]);						
	  
	 $scope.clock.addCity($scope.jsControlCity);
	 
	 for(var iWorldCity = 0 ; iWorldCity < $scope.aryWorldLocations.length ; iWorldCity ++)
	 	$scope.clock.addCity($scope.aryWorldLocations[iWorldCity]);

    ///////////////////////////////////////////////////////////////////////
	    						

 	$interval(function(){
 		$scope.clock.controlTime.setSeconds($scope.clock.controlTime.getSeconds()+5);
 		$scope.clock.increment ++;
 	},5000);	    						
	    							
  });
