app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'A selection of the best-selling books from this month.';
  $scope.products = [
  	{
  		name: 'The Book of Trees',
  		price: 19,
  		pubdate: new Date('2014', '03', '08'),
  		cover: 'img/the-book-of-trees.jpg',
  		likes: 0,
  		dislikes: 0
  	},
  	{
  		name: 'Program or be Programmed', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/program-or-be-programmed.jpg',
  		likes: 0,
  		dislikes: 0
  	},
  	{
  		name: 'Harry Potter and the Prisoner of Azkaban', 
    	price: 11.99, 
    	pubdate: new Date('1999', '06', '08'), 
    	cover: 'https://placehold.it/160x240',
  		likes: 0,
  		dislikes: 0
  	},
  	{
  		name: 'Akira', 
    	price: 24.99, 
    	pubdate: new Date('1982', '11', '06'), 
    	cover: 'https://placehold.it/160x240',
  		likes: 0,
  		dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  }
}]);