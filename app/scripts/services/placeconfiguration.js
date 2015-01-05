'use strict';

angular.module('sigmaWorldClockApp')
  .factory('PlaceConfiguration', function () {
    
		var placeconfiguration = {};
		var list = [];
		
	   placeconfiguration.getItem = function(index) { return list[index]; }
	   placeconfiguration.addItem = function(item) { list.push(item); }
	
	   return placeconfiguration;
	   
  });
