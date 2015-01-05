'use strict';

angular.module('sigmaWorldClockApp')
  .service('ClockInputs', function Clockinputs($filter) {
  	
  	 //EXPOSED INPUT SERVICE TO ALLOW DIRECT WATCH AND BIND
  	 
    this.controlTime = new Date();
    this.controlInput = $filter('date')(this.controlTime,'HH:mm:ss');
    this.control = '';
    this.inputList = [];
    this.increment = 0;
    
    this.addCity = function(js){
    	this.inputList[js.cityname] = js;
    };
    this.getCity = function(name){
    	return this.inputList[name];
    };
    this.updateCity = function(name,val){
    	this.inputList[name].value = val;
    }
    
 	
  });
