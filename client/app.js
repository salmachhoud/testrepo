var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'JobsController',
		templateUrl: 'views/jobs.html'
	})
	.when('/jobs', {
		controller:'JobsController',
		templateUrl: 'views/jobs.html'
	})
	.when('/jobs/details/:id',{
		controller:'JobsController',
		templateUrl: 'views/job_details.html'
	})
	.when('/jobs/add',{
		controller:'JobsController',
		templateUrl: 'views/add_job.html'
	})
	.when('/jobs/edit/:id',{
		controller:'JobsController',
		templateUrl: 'views/edit_job.html'
	})
		.when('/jobs/delete/:id',{
            controller:'JobsController',
            templateUrl: 'views/jobs.html'
        })
	.otherwise({
		redirectTo: '/'
	});
});