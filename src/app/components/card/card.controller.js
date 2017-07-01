(function() {
  'use strict';

  angular
    .module('asylumjourneyFrontend')
    .controller('CardController', CardController);

  function CardController(data, $scope, ngDialog, $routeParams, $rootScope, $log) {
    var vm = this;
    vm.service = $scope.service;
    vm.openDialog = openDialog;
    vm.editService = editService;

    angular.forEach($scope.service._embedded.providers, function(provider) {
      var googleMapsUrl = 'https://www.google.co.uk/maps/place/';
      provider.addressUrl = googleMapsUrl + [provider.address, provider.postcode]
        .join(' ')
        .replace(new RegExp(/\s/g, 'g'), '+');
    });

    activate();

    function activate() {
      checkRoute();
    }

    function checkRoute() {
      // permalink to modal
      if (!$rootScope.dialogOpen && (parseInt($routeParams.serviceId) === vm.service.id)) {
        vm.openDialog();
        $rootScope.dialogOpen = true;
      }
    }

    function getProviders() {
      return data.providers().get().$promise.then(function(response) {
        $scope.providers = response._embedded.providers;
      });
    }

    function getStages() {
      return data.stages().get().$promise.then(function(response) {
        $scope.stages = response._embedded.stages;
      });
    }

    function getCategories() {
      return data.categories().get().$promise.then(function(response) {
        $scope.categories = response._embedded.categories;
      });
    }

    function getServiceUsers() {
      return data.serviceUsers().get().$promise.then(function(response) {
        $scope.serviceUsers = response._embedded.serviceUsers;
      });
    }

    function getIssues() {
      return data.issues().get().$promise.then(function(response) {
        $scope.issues = response._embedded.issues;
      });
    }

    function getSelectOptions() {
      return Promise.all([
        getProviders(),
        getStages(),
        getCategories(),
        getServiceUsers(),
        getIssues()
      ]);
    }

    function openDialog() {
      ngDialog.open({
        template: 'app/components/detail-overlay/detail.html',
        scope: $scope
      });
    }

    function editService() {
      getSelectOptions().then(function() {
        ngDialog.close();
        ngDialog.open({
          template: 'app/components/detail-overlay/edit.html',
          scope: $scope
        });
      });
    }
  }

})();
