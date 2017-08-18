(function() {
  'use strict';

  angular
    .module('asylumjourneyFrontend')
    .controller('CardController', CardController);

  function CardController(data, $scope, ngDialog, $routeParams, $rootScope) {
    var vm = this;
    vm.service = $scope.service;
    vm.openDialog = openDialog;
    vm.editService = editService;
    vm.providers = data.providers;
    vm.stages = data.stages;
    vm.categories = data.categories;
    vm.serviceUsers = data.serviceUsers;
    vm.issues = data.issues;

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

    function openDialog() {
      ngDialog.open({
        template: 'app/components/detail-overlay/detail.html',
        scope: $scope
      });
    }

    function editService() {
      // getSelectOptions().then(function() {
        ngDialog.close();
        ngDialog.open({
          template: 'app/components/detail-overlay/edit.html',
          scope: $scope
        });
      // });
    }
  }

})();
