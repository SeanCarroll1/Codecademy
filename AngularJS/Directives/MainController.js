app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [
  	{
  		icon: 'img/move.jpg', 
    	title: 'MOVE', 
    	developer: 'MOVE, Inc.', 
    	price: 0.99
  	},
  	{
  		icon: 'img/shutterbugg.jpg', 
    	title: 'Shutterbugg', 
    	developer: 'Chico Dusty', 
    	price: 2.99 
  	},
  	{
  		icon: 'https://placehold.it/600x400', 
    	title: 'Weamon', 
    	developer: 'Index Interactive, LLC', 
    	price: 1.99
  	},
  	{
  		icon: 'https://placehold.it/600x400', 
    	title: 'TwoTone', 
    	developer: 'Everything', 
    	price: 0.99 
  	}
  ]
}]);