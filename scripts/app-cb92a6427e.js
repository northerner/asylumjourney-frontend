!function(){"use strict";angular.module("asylumjourneyFrontend",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngDialog"])}(),function(){"use strict";function e(e){function t(){return e(a+"services")}function i(){return e(a+"providers")}function s(){return e(a+"stages")}function r(){return e(a+"categories")}function n(){return e(a+"service-users")}function o(){return e(a+"issues")}var a="http://asylum-journey-dev.herokuapp.com/";this.services=t,this.providers=i,this.stages=s,this.categories=r,this.serviceUsers=n,this.issues=o}e.$inject=["$resource"],angular.module("asylumjourneyFrontend").service("data",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/overview/overview.html",restrict:"AE"};return e}angular.module("asylumjourneyFrontend").directive("overview",e)}(),function(){"use strict";function e(e,t,i){function s(){r(),n(),o(),a()}function r(){e.services().get().$promise.then(function(e){d.services=e._embedded.services,d.showLoader=!1})}function n(){e.providers().get().$promise.then(function(e){d.providers=e._embedded.providers})}function o(){e.stages().get().$promise.then(function(e){d.stages=e._embedded.stages,angular.forEach(d.stages,function(e){e.display=!0})})}function a(){e.categories().get().$promise.then(function(e){d.categories=e._embedded.categories,angular.forEach(d.categories,function(e){e.display=!0})})}function l(e,t,i){var s=t.indexOf(e);return-1===s?void t.push(e):(t.splice(s,1),void(t.length||d.resetFilters(t,i)))}function c(e,t){e.display=t,e.filtered=t}function g(e,t,i){d.filtered=!0,angular.forEach(i,function(i){return i.id===e?void c(i,-1===t.indexOf(e)):void(-1===t.indexOf(i.id)&&c(i,!1))}),l(e,t,i)}function u(e){angular.forEach(e,function(e){e.display=!0,e.filtered=!1})}var d=this,v=[],p=[];d.services=[],d.filtered=!1,d.showCategoryFilters=!1,d.showStageFilters=!1,d.showLoader=!0,s(),d.filterStage=function(e){g(e,p,d.stages)},d.filterCategory=function(e){g(e,v,d.categories)},d.toggleIssues=function(){d.showIssues=!d.showIssues},d.resetFilters=function(e,t){u(t),e=[]},d.resetAll=function(){u(d.stages),u(d.categories),v=[],p=[],d.showIssues=!1},d.expandCategoryFilters=function(e){d.showCategoryFilters=!e},d.expandStageFilters=function(e){d.showStageFilters=!e},d.openDialog=function(){i.open({template:"app/components/info-overlay/info.html",scope:t})},d.closeFilters=function(){d.showCategoryFilters=!1,d.showStageFilters=!1}}e.$inject=["data","$scope","ngDialog"],angular.module("asylumjourneyFrontend").controller("OverviewController",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/filters/filters.html",restrict:"AE"};return e}angular.module("asylumjourneyFrontend").directive("filters",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/card/card.html",restrict:"AE",controller:"CardController",controllerAs:"card",scope:{service:"="}};return e}angular.module("asylumjourneyFrontend").directive("card",e)}(),function(){"use strict";function e(e,t,i,s){function r(){n()}function n(){s.dialogOpen||parseInt(i.serviceId)!==a.service.id||(a.openDialog(),s.dialogOpen=!0)}function o(){t.open({template:"app/components/detail-overlay/detail.html",scope:e})}var a=this;a.service=e.service,a.openDialog=o,r()}e.$inject=["$scope","ngDialog","$routeParams","$rootScope"],angular.module("asylumjourneyFrontend").controller("CardController",e)}(),function(){"use strict";function e(){}angular.module("asylumjourneyFrontend").controller("MainController",e)}(),function(){"use strict";function e(){return function(e,t){var i=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.stages,function(s){s.id===t&&i.push(e)})}),i}}angular.module("asylumjourneyFrontend").filter("stage",e)}(),function(){"use strict";function e(){return function(e,t){var i=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.categories,function(s){s.id===t&&i.push(e)})}),i}}angular.module("asylumjourneyFrontend").filter("category",e)}(),function(){"use strict";function e(e,t){var i=t.$on("$routeChangeStart",function(i,s){i!==s&&(e.closeAll(),t.dialogOpen=!1)});t.$on("$destroy",i)}e.$inject=["ngDialog","$rootScope"],angular.module("asylumjourneyFrontend").run(e)}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/service/:serviceId",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}e.$inject=["$routeProvider"],angular.module("asylumjourneyFrontend").config(e)}(),function(){"use strict";angular.module("asylumjourneyFrontend").constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("asylumjourneyFrontend").config(e)}(),angular.module("asylumjourneyFrontend").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><overview></overview></div>'),e.put("app/components/card/card.html",'<a href="#/service/{{card.service.id}}" ng-click="$event.preventDefault(); card.openDialog()" class="card" ng-class="{\'card--has-issue\': card.service._embedded.issues.length}"><svg class="icon icon-warning" ng-if="card.service._embedded.issues.length"><use xlink:href="#icon-warning"></use></svg><h3>{{ card.service.name }}</h3></a>'),e.put("app/components/detail-overlay/detail.html",'<article class="details"><h2 class="details__heading"><span ng-if="service._embedded.issues" class="details__alert"><svg class="icon icon-warning"><use xlink:href="#icon-warning"></use></svg><i>Warning</i></span> {{ service.name }}</h2><a href="#/service/{{service.id}}">Permalink</a><ul class="tag-list"><li ng-repeat="stage in service._embedded.stages" class="tag-list__tag tag-list__tag--stage-{{ stage.id }}">{{ stage.name }}</li><li ng-repeat="category in service._embedded.categories" class="tag-list__tag">{{ category.name }}</li><li ng-repeat="serviceUser in service._embedded.serviceUsers" class="tag-list__tag">{{ serviceUser.name }}</li></ul><p>{{ service.description }}</p><p ng-if="service.endDate"><strong>End Date:</strong> {{ service.endDate | date }}</p><div ng-if="service._embedded.issues"><h3 class="details__sub-heading">Gaps or issues</h3><p ng-repeat="issue in service._embedded.issues">{{ issue.name }}</p></div><div ng-if="service._embedded.providers"><h3 class="details__sub-heading">Providers</h3><div ng-repeat="provider in service._embedded.providers" class="details__provider"><h4 class="details__service-name">{{ provider.name }}</h4><p>{{ provider.description }}</p><p ng-if="provider.phone"><strong>Tel:</strong> {{ provider.phone }}</p><p ng-if="provider.email"><strong>Email:</strong> <a href="mailto:{{ provider.email }}">{{ provider.email }}</a></p><p ng-if="provider.website"><strong>Website:</strong> <a href="{{ provider.website }}">{{ provider.website }}</a></p><p ng-if="provider.address"><strong>Address:</strong> {{ provider.address }}, {{ provider.postcode }}</p></div></div></article>'),e.put("app/components/filters/filters.html",'<div class="filters"><div class="filter"><button type="button" class="filter__toggle" ng-class="{ \'filter__toggle--active\': overview.showIssues}" ng-click="overview.toggleIssues()"><svg class="icon icon-warning"><use xlink:href="#icon-warning"></use></svg>Gaps/issues</button></div><div class="filter"><button type="button" class="filter__toggle" ng-class="{ \'filter__toggle--active\': overview.showStageFilters}" ng-click="overview.expandStageFilters(overview.showStageFilters)">Stage</button><ul class="filter__list" ng-show="overview.showStageFilters"><li ng-repeat="stage in overview.stages"><button type="button" class="filter__button" ng-class="{ \'filter__button--active\': stage.filtered}" ng-click="overview.filterStage(stage.id)"><span ng-if="stage.filtered">></span> {{stage.name}}</button></li></ul></div><div class="filter"><button type="button" class="filter__toggle" ng-class="{ \'filter__toggle--active\': overview.showCategoryFilters}" ng-click="overview.expandCategoryFilters(overview.showCategoryFilters)">Category</button><ul class="filter__list" ng-show="overview.showCategoryFilters"><li ng-repeat="category in overview.categories"><button type="button" class="filter__button" ng-class="{ \'filter__button--active\': category.filtered}" ng-click="overview.filterCategory(category.id)"><span ng-if="category.filtered">></span> {{category.name}}</button></li></ul></div><button type="button" class="button" ng-click="overview.resetAll()">Reset</button></div><div class="filters__overlay" ng-show="overview.showStageFilters || overview.showCategoryFilters" ng-click="overview.closeFilters()"></div>'),e.put("app/components/info-overlay/info.html","<h2>What's all this then?</h2>"),e.put("app/components/overview/overview.html",'<div ng-controller="OverviewController as overview" class="overview" ng-class="{\'show-issues\': overview.showIssues}"><ul class="overview-stages"><li class="overview-stages__stage brand"><img src="/app/images/logo-basic.png"><h1>The Asylum Journey</h1></li><li ng-if="stage.display" ng-repeat="stage in overview.stages" class="overview-stages__stage overview-stages__stage--{{stage.id}}"><span>{{stage.name}}</span></li></ul><div ng-if="overview.showLoader" class="overview__loader"><img ng-src="/app/images/loader-logo.svg" alt="Loading"> Loading...</div><div ng-if="category.display && !overview.showLoader" ng-repeat="category in overview.categories" class="overview-category"><h2 class="overview-category__heading">{{category.name}}</h2><ul ng-if="stage.display" class="overview-category__stage overview-category__stage--{{stage.id}}" ng-repeat="stage in overview.stages"><li ng-repeat="service in overview.services | category: category.id | stage: stage.id"><card service="service"></card></li></ul></div><filters></filters></div>')}]);
//# sourceMappingURL=../maps/scripts/app-cb92a6427e.js.map
