!function(){"use strict";angular.module("asylumjourneyFrontend",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ngDialog"])}(),function(){"use strict";function e(e){function t(){return e(a+"services")}function r(){return e(a+"providers")}function i(){return e(a+"stages")}function s(){return e(a+"categories")}function o(){return e(a+"service-users")}function n(){return e(a+"issues")}var a="http://asylum-journey-dev.herokuapp.com/";this.services=t,this.providers=r,this.stages=i,this.categories=s,this.serviceUsers=o,this.issues=n}e.$inject=["$resource"],angular.module("asylumjourneyFrontend").service("data",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/overview/overview.html",restrict:"AE"};return e}angular.module("asylumjourneyFrontend").directive("overview",e)}(),function(){"use strict";function e(e,t,r){function i(){s(),o(),n(),a(),l()}function s(){e.services().get().$promise.then(function(e){g.services=e._embedded.services,g.showLoader=!1})}function o(){e.providers().get().$promise.then(function(e){g.providers=e._embedded.providers,angular.forEach(g.providers,function(e){e.display=!0})})}function n(){e.stages().get().$promise.then(function(e){g.stages=e._embedded.stages,angular.forEach(g.stages,function(e){e.display=!0})})}function a(){e.categories().get().$promise.then(function(e){g.categories=e._embedded.categories,angular.forEach(g.categories,function(e){e.display=!0})})}function l(){e.serviceUsers().get().$promise.then(function(e){g.serviceUsers=e._embedded.serviceUsers,angular.forEach(g.serviceUsers,function(e){e.display=!0})})}function c(e,t,r,i){var s=t.indexOf(e);return-1===s?void t.push(e):(t.splice(s,1),void(t.length||g.resetFilters(t,r,i)))}function u(e,t){e.display=t,e.filtered=t}function d(e,t,r,i){g.filtered=!0,angular.forEach(r,function(r){return r.id===e?void u(r,-1===t.indexOf(e)):void(-1===t.indexOf(r.id)&&u(r,!1))}),c(e,t,r,i)}function v(e){angular.forEach(e,function(e){e.display=!0,e.filtered=!1})}var g=this,f=[],p=[];g.services=[],g.filtered=!1,g.showCategoryFilters=!1,g.showStageFilters=!1,g.showServiceUserFilters=!1,g.showLoader=!0,g.showIssues=!1,g.showFilters=!1,g.currentFilters={stage:!1,category:!1,serviceUser:!1,provider:!1},g.filteredServiceUsers=[],g.filteredProviders=[],i(),g.filterStage=function(e){g.currentFilters.stage=!0,d(e,p,g.stages,"stage")},g.filterCategory=function(e){g.currentFilters.category=!0,d(e,f,g.categories,"category")},g.filterServiceUser=function(e){g.currentFilters.serviceUser=!0,d(e,g.filteredServiceUsers,g.serviceUsers,"serviceUser")},g.filterProvider=function(e){g.currentFilters.provider=!0,d(e,g.filteredProviders,g.providers,"provider")},g.toggleIssues=function(){g.showIssues=!g.showIssues},g.toggleFilters=function(){g.showFilters=!g.showFilters},g.resetFilters=function(e,t,r){v(t),g.currentFilters[r]=!1,e=[]},g.resetAll=function(){v(g.stages),v(g.categories),v(g.serviceUsers),v(g.providers),f=[],p=[],g.filteredServiceUsers=[],g.filteredProviders=[],g.showIssues=!1,g.currentFilters={stage:!1,category:!1,serviceUser:!1,provider:!1}},g.expandCategoryFilters=function(e){g.showCategoryFilters=!e},g.expandStageFilters=function(e){g.showStageFilters=!e},g.expandServiceUserFilters=function(e){g.showServiceUserFilters=!e},g.expandProviderFilters=function(){r.open({template:"app/components/filters/providers-overlay.html",scope:t})},g.openDialog=function(){r.open({template:"app/components/info-overlay/info.html",scope:t})},g.closeFilters=function(){g.showCategoryFilters=!1,g.showStageFilters=!1,g.showServiceUserFilters=!1}}e.$inject=["data","$scope","ngDialog"],angular.module("asylumjourneyFrontend").controller("OverviewController",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/filters/filters.html",restrict:"AE"};return e}angular.module("asylumjourneyFrontend").directive("filters",e)}(),function(){"use strict";function e(){var e={templateUrl:"app/components/card/card.html",restrict:"AE",controller:"CardController",controllerAs:"card",scope:{service:"="}};return e}angular.module("asylumjourneyFrontend").directive("card",e)}(),function(){"use strict";function e(e,t,r,i){function s(){o()}function o(){i.dialogOpen||parseInt(r.serviceId)!==a.service.id||(a.openDialog(),i.dialogOpen=!0)}function n(){t.open({template:"app/components/detail-overlay/detail.html",scope:e})}var a=this;a.service=e.service,a.openDialog=n,s()}e.$inject=["$scope","ngDialog","$routeParams","$rootScope"],angular.module("asylumjourneyFrontend").controller("CardController",e)}(),function(){"use strict";function e(){}angular.module("asylumjourneyFrontend").controller("MainController",e)}(),function(){"use strict";function e(){}angular.module("asylumjourneyFrontend").controller("HomeController",e)}(),function(){"use strict";function e(){return function(e,t){var r=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.stages,function(i){i.id===t&&r.push(e)})}),r}}angular.module("asylumjourneyFrontend").filter("stage",e)}(),function(){"use strict";function e(e,t){return e.some(function(e){return e.id===t})}function t(){return function(t,r){if(!r.length)return t;var i=[];return angular.forEach(t,function(t){angular.forEach(t._embedded.serviceUsers,function(s){angular.forEach(r,function(r){if(s.id===r){if(e(i,t.id))return;return void i.push(t)}})})}),i}}angular.module("asylumjourneyFrontend").filter("serviceUser",t)}(),function(){"use strict";function e(e,t){return e.some(function(e){return e.id===t})}function t(){return function(t,r){if(!r.length)return t;var i=[];return angular.forEach(t,function(t){angular.forEach(t._embedded.providers,function(s){angular.forEach(r,function(r){if(s.id===r){if(e(i,t.id))return;return void i.push(t)}})})}),i}}angular.module("asylumjourneyFrontend").filter("provider",t)}(),function(){"use strict";function e(){return function(e,t){var r=[];return angular.forEach(e,function(e){angular.forEach(e._embedded.categories,function(i){i.id===t&&r.push(e)})}),r}}angular.module("asylumjourneyFrontend").filter("category",e)}(),function(){"use strict";function e(e,t,r){var i=t.$on("$routeChangeStart",function(r,i){r!==i&&(e.closeAll(),t.dialogOpen=!1)});"localhost"!==r.host()&&(ga("create","UA-80488368-1","auto"),i=t.$on("$routeChangeSuccess",function(){ga("send","pageview",r.path())})),t.$on("$destroy",i)}e.$inject=["ngDialog","$rootScope","$location"],angular.module("asylumjourneyFrontend").run(e)}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}).when("/tool",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/service/:serviceId",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}e.$inject=["$routeProvider"],angular.module("asylumjourneyFrontend").config(e)}(),function(){"use strict";angular.module("asylumjourneyFrontend").constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("asylumjourneyFrontend").config(e)}(),angular.module("asylumjourneyFrontend").run(["$templateCache",function(e){e.put("app/home/home.html",'<div class="home"><div class="banner"><div class="logo"><h1>The Asylum Journey</h1><p>By Sheffugees</p></div><a class="button-link" href="#/tool">Get Started</a></div><div class="questions"><h2>What is it?</h2><p>The Asylum Journey tool shows the different services available in Sheffield for asylum seekers and refugees at different stages of the asylum process - from arrival to the city to a positive decision, or to destitution.</p><h2>What problem does it solve?</h2><p>Services for asylum seekers and refugees are often complex and confusing. They are provided by many different statutory and voluntary organisations, and it can be difficult for any single organisation to know the whole picture. The Asylum Journey tool brings together information about these services in one place.</p><h2>Who is it for?</h2><p>The Asylum Journey is for people working for Sheffield-based statutory and voluntary organisations which provide advice and support for asylum seekers and refugees.</p><h2>Who made it?</h2><p>The Asylum Journey was created by members of the Sheffield tech community in partnership with volunteers from local refugee and asylum seeker organisations. It was initiated as part of the <a href="http://sheffugees.org">Sheffugees Hackathon</a>.</p><h2>Who updates the content?</h2><p>The Sheffield City Council Locality Management Team, in partnership with a lead voluntary sector organisation, keeps the content of the Asylum Journey tool up to date, with input from local partners.</p><h2>What is the current status?</h2><p>This is the first version of the tool, and it is currently undergoing user testing. Feedback is welcome.</p><h2>What next?</h2><p>Partners will be invited to participate in a demonstration and provide comments for further change if necessary.</p></div></div>'),e.put("app/main/main.html",'<div class="container"><overview></overview></div>'),e.put("app/components/card/card.html",'<a href="#/service/{{card.service.id}}" ng-click="$event.preventDefault(); card.openDialog()" class="card" ng-class="{\'card--has-issue\': card.service._embedded.issues.length}"><svg class="icon icon-warning" ng-if="card.service._embedded.issues.length"><use xlink:href="#icon-warning"></use></svg><h3>{{ card.service.name }}</h3></a>'),e.put("app/components/detail-overlay/detail.html",'<article class="details"><h2 class="details__heading"><span ng-if="service._embedded.issues" class="details__alert"><svg class="icon icon-warning"><use xlink:href="#icon-warning"></use></svg><i>Warning</i></span> {{ service.name }}</h2><ul class="tag-list"><li ng-repeat="stage in service._embedded.stages" class="tag-list__tag tag-list__tag--stage-{{ stage.id }}">{{ stage.name }}</li><li ng-repeat="category in service._embedded.categories" class="tag-list__tag">{{ category.name }}</li><li ng-repeat="serviceUser in service._embedded.serviceUsers" class="tag-list__tag">{{ serviceUser.name }}</li></ul><p ng-bind-html="service.description | linky"></p><p ng-if="service.endDate"><strong>End Date:</strong> {{ service.endDate | date }}</p><div ng-if="service._embedded.issues"><h3 class="details__sub-heading">Gaps or issues</h3><p ng-repeat="issue in service._embedded.issues">{{ issue.name }}</p></div><div ng-if="service._embedded.providers"><h3 class="details__sub-heading">Providers</h3><div ng-repeat="provider in service._embedded.providers" class="details__provider"><h4 class="details__service-name">{{ provider.name }}</h4><p>{{ provider.description }}</p><p ng-if="provider.phone"><strong>Tel:</strong> {{ provider.phone }}</p><p ng-if="provider.email"><strong>Email:</strong> <a href="mailto:{{ provider.email }}">{{ provider.email }}</a></p><p ng-if="provider.website"><strong>Website:</strong> <a href="{{ provider.website }}">{{ provider.website }}</a></p><p ng-if="provider.address"><strong>Address:</strong> {{ provider.address }}, {{ provider.postcode }}</p></div></div><a href="#/service/{{service.id}}">Permanent link to this card</a></article>'),e.put("app/components/filters/filters.html",'<div class="filters"><button class="filter__toggle filter__mobile-toggle" ng-click="overview.toggleFilters()"><svg class="icon"><use xlink:href="#icon-filter"></use></svg>Filter</button><div class="filter-menu" ng-class="{\'filter-menu--active\': overview.showFilters}"><div class="filter"><button type="button" class="filter__toggle" ng-class="{ \'filter__toggle--active\': overview.showIssues}" ng-click="overview.toggleIssues()"><svg class="icon icon-warning"><use xlink:href="#icon-warning"></use></svg>Gaps/issues</button></div><div class="filter"><button type="button" class="filter__toggle" ng-class="{ \'filter__toggle--active\': overview.currentFilters.stage}" ng-click="overview.expandStageFilters(overview.showStageFilters)">Stage</button><ul class="filter__list" ng-show="overview.showStageFilters"><li class="filter__list-item" ng-repeat="stage in overview.stages"><button type="button" class="filter__button" ng-class="{ \'filter__button--active\': stage.filtered}" ng-click="overview.filterStage(stage.id)">{{stage.name}}</button></li></ul></div><div class="filter"><button type="button" class="filter__toggle toggle" ng-class="{ \'filter__toggle--active\': overview.currentFilters.category}" ng-click="overview.expandCategoryFilters(overview.showCategoryFilters)">Category</button><ul class="filter__list" ng-show="overview.showCategoryFilters"><li class="filter__list-item" ng-repeat="category in overview.categories"><button type="button" class="filter__button" ng-class="{ \'filter__button--active\': category.filtered}" ng-click="overview.filterCategory(category.id)">{{category.name}}</button></li></ul></div><div class="filter"><button type="button" class="filter__toggle toggle" ng-class="{ \'filter__toggle--active\': overview.currentFilters.serviceUser}" ng-click="overview.expandServiceUserFilters(overview.showServiceUserFilters)">Service user</button><ul class="filter__list" ng-show="overview.showServiceUserFilters"><li class="filter__list-item" ng-repeat="serviceUser in overview.serviceUsers"><button type="button" class="filter__button" ng-class="{ \'filter__button--active\': serviceUser.filtered}" ng-click="overview.filterServiceUser(serviceUser.id)">{{serviceUser.name}}</button></li></ul></div><div class="filter"><button type="button" class="filter__toggle toggle" ng-class="{ \'filter__toggle--active\': overview.currentFilters.provider}" ng-click="overview.expandProviderFilters(overview.showProviderFilters)">Providers</button></div><div class="filter"><button type="button" class="button" ng-click="overview.resetAll()">Clear filters</button> <button ng-click="overview.openDialog()" class="button help">Help with this tool</button> <a href="http://goo.gl/forms/3helLLSBgK5qRvpg1" target="_blank" class="feedback button help">Feedback</a></div></div></div><div class="filters__overlay" ng-show="overview.showStageFilters || overview.showCategoryFilters || overview.showServiceUserFilters || overview.showProviderFilters" ng-click="overview.closeFilters()"></div>'),e.put("app/components/filters/providers-overlay.html",'<article class="details"><h2 class="details__heading">Providers</h2><ul class="filter__list filter__list--overlay"><li class="filter__list-item" ng-repeat="provider in overview.providers | orderBy: \'name\'"><button type="button" class="filter__button" ng-class="{ \'filter__button--active\': provider.filtered}" ng-click="overview.filterProvider(provider.id)">{{provider.name}}</button></li></ul></article>'),e.put("app/components/info-overlay/info.html",'<div class="info"><h2>The Asylum Journey Tool</h2><p>The Asylum Journey is a tool that shows the different services available for refugees and asylum seekers, organised according to the different stages of the asylum process from first arrival in the city to refugee status and beyond. The information can also be filtered by categories such as legal advice, housing, or education. Gaps in service and services at risk are highlighted.</p><h3 class="info__subtitle info__subtitle--stage-1">Arrival</h3><p>Services for people newly arrived in Sheffield, including information about making an asylum claim and information for new claimants.</p><h3 class="info__subtitle info__subtitle--stage-2">Awaiting Decision</h3><p>Services for people who have made an asylum claim and are awaiting a decision from the Home Office.</p><h3 class="info__subtitle info__subtitle--stage-3">Positive Decision</h3><p>Services for people who have been granted leave to remain and have recourse to public funds and support.</p><h3 class="info__subtitle info__subtitle--stage-4">Positive Decision - No recourse to public funds</h3><p>Services for people who have been granted leave to remain, but have been denied access to public funds and support.</p><h3 class="info__subtitle info__subtitle--stage-5">Negative Decision with state support</h3><p>Services for people who have had their asylum claim refused but are still eligible for state support, for example families with children, unaccompanied children, or vulnerable adults.</p><h3 class="info__subtitle info__subtitle--stage-6">Negative Decision - Destitute</h3><p>Services for people who have had their asylum claim refused and have no access to public funds or support.</p><h3 class="info__subtitle info__subtitle--stage-7">Gateway Protection Programme/Syrian Resettlement Programme</h3><p>Services for people who moved to Sheffield under the Gateway Protection Programme or the Syrian Resettlement Programme and have already been granted refugee status.</p></div>'),e.put("app/components/overview/overview.html",'<div ng-controller="OverviewController as overview" class="overview" ng-class="{\'show-issues\': overview.showIssues}"><ul class="overview-stages"><li class="overview-stages__stage brand"><h1><a ng-href="#/" class="logo logo--small">The Asylum Journey</a></h1></li><li ng-if="stage.display" ng-repeat="stage in overview.stages" class="overview-stages__stage overview-stages__stage--{{stage.id}}"><span>{{stage.name}}</span></li></ul><div ng-if="overview.showLoader" class="overview__loader"><img ng-src="/app/images/loader-logo.svg" alt="Loading"> Loading...</div><div ng-if="category.display && !overview.showLoader" ng-repeat="category in overview.categories" class="overview-category"><h2 class="overview-category__heading">{{category.name}}</h2><ul ng-if="stage.display" class="overview-category__stage overview-category__stage-{{stage.id}}" ng-repeat="stage in overview.stages"><li ng-repeat="service in overview.services | category: category.id | stage: stage.id | serviceUser: overview.filteredServiceUsers | provider: overview.filteredProviders"><card service="service"></card></li></ul></div><filters></filters></div>')}]);
//# sourceMappingURL=../maps/scripts/app-655edc084e.js.map
