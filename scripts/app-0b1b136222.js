!function(){"use strict";angular.module("asylumjourneyFrontend",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngDialog"])}(),function(){"use strict";function e(e){function r(){return e(s+"services")}function n(){return e(s+"providers")}function t(){return e(s+"stages")}function o(){return e(s+"categories")}function i(){return e(s+"service-users")}function a(){return e(s+"issues")}var s="http://private-7172d-asylumjourney.apiary-mock.com/";this.services=r,this.providers=n,this.stages=t,this.categories=o,this.serviceUsers=i,this.issues=a}e.$inject=["$resource"],angular.module("asylumjourneyFrontend").service("data",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/overview/overview.html",restrict:"AE"};return e}angular.module("asylumjourneyFrontend").directive("overview",e)}(),function(){"use strict";function e(e){function r(){n(),t(),o(),i()}function n(){e.services().get().$promise.then(function(e){a.services=e._embedded.services})}function t(){e.providers().get().$promise.then(function(e){a.providers=e._embedded.providers})}function o(){e.stages().get().$promise.then(function(e){a.stages=e._embedded.stages})}function i(){e.categories().get().$promise.then(function(e){a.categories=e._embedded.categories})}var a=this;a.services=[],r()}e.$inject=["data"],angular.module("asylumjourneyFrontend").controller("OverviewController",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/card/card.html",restrict:"AE",controller:"CardController",scope:{service:"="}};return e}angular.module("asylumjourneyFrontend").directive("card",e)}(),function(){"use strict";function e(e,r){var n=this;n.service=e.service,n.openDialog=function(){r.open({template:"app/components/detail-overlay/detail.html",scope:e})}}e.$inject=["$scope","ngDialog"],angular.module("asylumjourneyFrontend").controller("CardController",e)}(),function(){"use strict";function e(){}angular.module("asylumjourneyFrontend").controller("MainController",e)}(),function(){"use strict";function e(){return function(e,r){var n=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.stages,function(t){t.id===r&&n.push(e)})}),n}}angular.module("asylumjourneyFrontend").filter("stage",e)}(),function(){"use strict";function e(){return function(e,r){var n=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.categories,function(t){t.id===r&&n.push(e)})}),n}}angular.module("asylumjourneyFrontend").filter("category",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("asylumjourneyFrontend").run(e)}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}e.$inject=["$routeProvider"],angular.module("asylumjourneyFrontend").config(e)}(),function(){"use strict";angular.module("asylumjourneyFrontend").constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("asylumjourneyFrontend").config(e)}(),angular.module("asylumjourneyFrontend").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><overview></overview></div>'),e.put("app/components/card/card.html",'<a ng-controller="CardController as card" href="#/" ng-click="card.openDialog()" class="card"><h3>{{ card.service.name }}</h3></a>'),e.put("app/components/detail-overlay/detail.html",'<article class="details"><h2 class="details__heading">{{ service.name }}</h2><p>{{ service.description }}</p><p>{{ service.phone }}</p><a href="mailto:{{ service.email }}">{{ service.email }}</a><p>{{ service.address }} {{ service.postcode }}</p><p><a ng-href="{{ service.url }}">{{ service.url }}</a></p></article>'),e.put("app/components/overview/overview.html",'<div ng-controller="OverviewController as overview" class="overview"><ul class="overview-stages"><li class="overview-stages__stage"></li><li ng-repeat="stage in overview.stages" class="overview-stages__stage overview-stages__stage--{{$index + 1}}">{{stage.name}}</li></ul><div ng-repeat="category in overview.categories" class="overview-category"><h2 class="overview-category__heading">{{category.name}}</h2><ul class="overview-category__stage overview-category__stage--{{stage.id}}" ng-repeat="stage in overview.stages"><li ng-repeat="service in overview.services | category: category.id | stage: stage.id"><card service="service"></card></li></ul></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-0b1b136222.js.map
