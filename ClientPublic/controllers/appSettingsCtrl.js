var app = angular.module('MRE');

app.controller('AppSettingsCtrl', function($scope, $log, $modalInstance, DashboardService) {
	var AS = this;

	$scope.checkbox = {
		notes: true
	};

	$scope.saveForm = function() {

	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};

});