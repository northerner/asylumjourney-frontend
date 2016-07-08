!function(){"use strict";angular.module("asylumjourneyFrontend",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngDialog"])}(),function(){"use strict";function e(e){function t(){return e(a+"services")}function r(){return e(a+"providers")}function i(){return e(a+"stages")}function s(){return e(a+"categories")}function n(){return e(a+"service-users")}function o(){return e(a+"issues")}var a="http://asylum-journey-dev.herokuapp.com/";this.services=t,this.providers=r,this.stages=i,this.categories=s,this.serviceUsers=n,this.issues=o}e.$inject=["$resource"],angular.module("asylumjourneyFrontend").service("data",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/overview/overview.html",restrict:"AE"};return e}angular.module("asylumjourneyFrontend").directive("overview",e)}(),function(){"use strict";function e(e){function t(){r(),i(),s(),n()}function r(){e.services().get().$promise.then(function(e){u.services=e._embedded.services})}function i(){e.providers().get().$promise.then(function(e){u.providers=e._embedded.providers})}function s(){e.stages().get().$promise.then(function(e){u.stages=e._embedded.stages,angular.forEach(u.stages,function(e){e.display=!0})})}function n(){e.categories().get().$promise.then(function(e){u.categories=e._embedded.categories,angular.forEach(u.categories,function(e){e.display=!0})})}function o(e,t,r){var i=t.indexOf(e);return-1===i?void t.push(e):(t.splice(i,1),void(t.length||u.resetFilters(t,r)))}function a(e,t){e.display=t,e.filtered=t}function l(e,t,r){u.filtered=!0,angular.forEach(r,function(r){return r.id===e?void a(r,-1===t.indexOf(e)):void(-1===t.indexOf(r.id)&&a(r,!1))}),o(e,t,r)}function c(e){angular.forEach(e,function(e){e.display=!0,e.filtered=!1})}var u=this,g=[],d=[];u.services=[],u.filtered=!1,u.showCategoryFilters=!1,u.showStageFilters=!1,t(),u.filterStage=function(e){l(e,d,u.stages)},u.filterCategory=function(e){l(e,g,u.categories)},u.toggleIssues=function(){u.showIssues=!u.showIssues},u.resetFilters=function(e,t){c(t),e=[]},u.resetAll=function(){c(u.stages),c(u.categories),g=[],d=[],u.showIssues=!1},u.expandCategoryFilters=function(e){u.showCategoryFilters=!e},u.expandStageFilters=function(e){u.showStageFilters=!e}}e.$inject=["data"],angular.module("asylumjourneyFrontend").controller("OverviewController",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/filters/filters.html",restrict:"AE"};return e}angular.module("asylumjourneyFrontend").directive("filters",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/card/card.html",restrict:"AE",controller:"CardController",scope:{service:"="}};return e}angular.module("asylumjourneyFrontend").directive("card",e)}(),function(){"use strict";function e(e,t){var r=this;r.service=e.service,r.openDialog=function(){t.open({template:"app/components/detail-overlay/detail.html",scope:e})}}e.$inject=["$scope","ngDialog"],angular.module("asylumjourneyFrontend").controller("CardController",e)}(),function(){"use strict";function e(){}angular.module("asylumjourneyFrontend").controller("MainController",e)}(),function(){"use strict";function e(){return function(e,t){var r=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.stages,function(i){i.id===t&&r.push(e)})}),r}}angular.module("asylumjourneyFrontend").filter("stage",e)}(),function(){"use strict";function e(){return function(e,t){var r=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.categories,function(i){i.id===t&&r.push(e)})}),r}}angular.module("asylumjourneyFrontend").filter("category",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("asylumjourneyFrontend").run(e)}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}e.$inject=["$routeProvider"],angular.module("asylumjourneyFrontend").config(e)}(),function(){"use strict";angular.module("asylumjourneyFrontend").constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("asylumjourneyFrontend").config(e)}(),angular.module("asylumjourneyFrontend").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><overview></overview></div>'),e.put("app/components/card/card.html",'<a ng-controller="CardController as card" href="#/" ng-click="card.openDialog()" class="card"><h3>{{ card.service.name }}</h3></a>'),e.put("app/components/detail-overlay/detail.html",'<article class="details"><h2 class="details__heading"><span ng-if="service._embedded.issues" class="details__alert"><svg class="icon icon-warning"><use xlink:href="#icon-warning"></use></svg><i>Warning</i></span> {{ service.name }}</h2><ul class="tag-list"><li ng-repeat="stage in service._embedded.stages" class="tag-list__tag tag-list__tag--stage-{{ stage.id }}">{{ stage.name }}</li><li ng-repeat="category in service._embedded.categories" class="tag-list__tag">{{ category.name }}</li><li ng-repeat="serviceUser in service._embedded.serviceUsers" class="tag-list__tag">{{ serviceUser.name }}</li></ul><p>{{ service.description }}</p><p ng-if="service.endDate"><strong>End Date:</strong> {{ service.endDate | date }}</p><div ng-if="service._embedded.issues"><h3 class="details__sub-heading">Gaps or issues</h3><p ng-repeat="issue in service._embedded.issues">{{ issue.name }}</p></div><div ng-if="service._embedded.providers"><h3 class="details__sub-heading">Providers</h3><div ng-repeat="provider in service._embedded.providers" class="details__provider"><h4 class="details__service-name">{{ provider.name }}</h4><p>{{ provider.description }}</p><p ng-if="provider.phone"><strong>Tel:</strong> {{ provider.phone }}</p><p ng-if="provider.email"><strong>Email:</strong> <a href="mailto:{{ provider.email }}">{{ provider.email }}</a></p><p ng-if="provider.website"><strong>Website:</strong> <a href="{{ provider.website }}">{{ provider.website }}</a></p><p ng-if="provider.address"><strong>Address:</strong> {{ provider.address }}, {{ provider.postcode }}</p></div></div></article>'),e.put("app/components/filters/filters.html",'<div class="filters"><div class="filter"><button type="button" class="filter__toggle" ng-class="{ \'filter__toggle--active\': overview.showIssues}" ng-click="overview.toggleIssues()"><svg class="icon icon-warning"><use xlink:href="#icon-warning"></use></svg>Gaps/issues</button></div><div class="filter"><button type="button" class="filter__toggle" ng-click="overview.expandStageFilters(overview.showStageFilters)">Stage</button><ul class="filter__list" ng-show="overview.showStageFilters"><li ng-repeat="stage in overview.stages"><button type="button" class="filter__button" ng-class="{ \'filter__toggle--active\': stage.filtered}" ng-click="overview.filterStage(stage.id)">{{stage.name}} <span ng-if="stage.filtered">FILTERED</span></button></li></ul></div><div class="filter"><button type="button" class="filter__toggle" ng-click="overview.expandCategoryFilters(overview.showCategoryFilters)">Category</button><ul class="filter__list" ng-show="overview.showCategoryFilters"><li ng-repeat="category in overview.categories"><button type="button" class="filter__button" ng-class="{ \'filter__toggle--active\': category.filtered}" ng-click="overview.filterCategory(category.id)">{{category.name}} <span ng-if="category.filtered">FILTERED</span></button></li></ul></div><button type="button" ng-click="overview.resetAll()">Reset</button></div>'),e.put("app/components/overview/overview.html",'<div ng-controller="OverviewController as overview" class="overview"><ul class="overview-stages"><li class="overview-stages__stage"></li><li ng-if="stage.display" ng-repeat="stage in overview.stages" class="overview-stages__stage overview-stages__stage--{{stage.id}}"><span>{{stage.name}}</span></li></ul><div ng-if="category.display" ng-repeat="category in overview.categories" class="overview-category"><h2 class="overview-category__heading">{{category.name}}</h2><ul ng-if="stage.display" class="overview-category__stage overview-category__stage--{{stage.id}}" ng-repeat="stage in overview.stages"><li ng-repeat="service in overview.services | category: category.id | stage: stage.id"><card service="service" ng-if="!overview.showIssues || service._embedded.issues.length"></card></li></ul></div><filters></filters></div>')}]);
//# sourceMappingURL=../maps/scripts/app-6bd2e6af83.js.map
