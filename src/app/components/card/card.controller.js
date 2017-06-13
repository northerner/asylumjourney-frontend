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

    function openDialog() {
      ngDialog.open({
        template: 'app/components/detail-overlay/detail.html',
        scope: $scope
      });
    }

    function editService() {
      getProviders().then(function() {
        ngDialog.close();
        ngDialog.open({
          template: 'app/components/detail-overlay/edit.html',
          scope: $scope
        });
      });
    }
  }

})();
