
var app = angular.module("InspoScope", []);

app.config(
	function($routeProvider, $locationProvider){
	$routeProvider
		.when('/home', {
			templateUrl:'pages/home.html'
		})

		.when('/about', {
			templateUrl:'pages/about.html'
		})

		.when('/explore', {
			templateUrl:'pages/explore.html',
			controller: function exploreController() {
				$scope.$parent.loadScript('../js/map.js', 'text/javascript', 'utf-8');
			}
		})

		.when('/discover', {
			templateUrl:'pages/discover.html'
		})

		.when('/connect', {
			templateUrl:'pages/conect.html'
		})

		.when('/signin', {
			templateUrl:'pages/sign-in.html'
		});
});

app.controller('InspoScopeController', function InspoScopeController($scope){
	$scope.loadScript = function(url, type, charset) {
    if (type===undefined) type = 'text/javascript';
    if (url) {
        var script = document.querySelector("script[src*='"+url+"']");
        if (!script) {
            var heads = document.getElementsByTagName("head");
            if (heads && heads.length) {
                var head = heads[0];
                if (head) {
                    script = document.createElement('script');
                    script.setAttribute('src', url);
                    script.setAttribute('type', type);
                    if (charset) script.setAttribute('charset', charset);
                    head.appendChild(script);
                }
            }
        }
        return script;
    }
};
});