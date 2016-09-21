testApp.controller('indexConroller',
    function indexConroller($scope) {
		
        $scope.response = {};

        init();

        function init() {
            console.log('indexConroller');
        }
    }
)