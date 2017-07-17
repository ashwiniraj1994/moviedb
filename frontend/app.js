var myModule = angular.module('myModule', ['ngRoute']);


myModule.controller('movieCrtl', function ($scope, $http, $window, $route) {

    var path = 'http://localhost:8080/moviesdb/rest'
      
    $scope.createMovie = function() 
    {
      console.log("Inside createMovie: Begin");
      console.log('$scope.movieName: '+$scope.movieName);
      console.log('$scope.rating: '+$scope.rating);
      console.log('$scope.language: '+$scope.language);
      console.log('$scope.description: '+$scope.description);
      console.log('$scope.review: '+$scope.review);
      
      $http
      (
         {
                url: path+'/movie',
                method: "POST",
                data: {
                  movieName:$scope.movie.movieName, 
                  language:$scope.movie.language,
                  description:$scope.movie.description,
                  rating:$scope.movie.rating,
                  review:$scope.movie.review
                },
                headers : {'Content-Type' : 'application/json'}
        }
       )
       .success(function(data, status) {
              $scope.movie = data;
              console.log("Movie name is"+$scope.movie.movieName);
        }
      )
      console.log("Inside createMovie: End");
    };
    
    $scope.getMovie = function() 
    {
     console.log("Inside getMovie: Begin");
      $http
      (
        {
          url: path+'/movie/'+$scope.movieId,
          method: "GET",
          headers : {'Content-Type' : 'application/json'}
        }
      )
      .success(function(data, status) {
            $scope.movie = data;
            console.log("Movie name is"+data.movieName);
        }
      )
    
        
      console.log("Inside getMovie: End");
    };
    
    $scope.deleteMovie = function() 
    {
     console.log("Inside deleteMovie: Begin");
      $http
      (
        {
          url: path+'/movie/'+$scope.movieId,
          method: "DELETE",
          headers : {'Content-Type' : 'application/json'}
        }
      )
      .success(function(data, status) {
            $scope.movie = data;
            console.log("Movie name is"+data.movieName);
        }
      )
    
        
      console.log("Inside deleteMovie: End");
    };
    
    $scope.editMovie = function() 
    {
      console.log("Inside editMovie: Begin");

      $http
      (
         {
                url: path+'/movie/'+$scope.movieId,
                method: "PUT",
              
                headers : {'Content-Type' : 'application/json'}
        }
       )
       .success(function(data, status) {
              $scope.movie = data;
              console.log("Movie name is"+$scope.movie.movieName);
        }
      )
      console.log("Inside editMovie: End");
    };
    
    $scope.getAllMovie = function() 
    {
     console.log("Inside getAllMovie: Begin");
      $http
      (
        {
          url: path+'/movie/search?q='+$scope.movieName+'&pageNum=1&pageSize=5',
          method: "GET",
          headers : {'Content-Type' : 'application/json'}
        }
      )
      .success(function(data, status) {
            $scope.movie = data;
            console.log("Movies array size is: "+data.length);
        }
      )
    
        
      console.log("Inside getAllMovie: End");
    };
    
    
    
    
});