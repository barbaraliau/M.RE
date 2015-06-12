(function () {
	angular.module('MRE')
		.controller('ReservationsCtrl', ['$scope', "ReservationsService",'$modal', '$log',function($scope, ReservationsService, $modal, $log){
			var RE = this;
		
                 RE.reservations = ReservationsService.getReservations();
                 RE.reservations = [];
		
				 RE.reservationModal = function(size) {
                    console.log('hello');
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/reservations/Modal/reservationModal.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'ReservationModalCtrl as RMC',
                        size: size
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };
		}]);	//end of controller	
})();