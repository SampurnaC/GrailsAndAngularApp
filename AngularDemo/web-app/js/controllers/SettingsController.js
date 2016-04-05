
angular.module('AngularDemo').controller('SettingsController',function($scope){
    $scope.settings={
        name1:"Sampurna",
        email:"sampurna.chapagainnn@gmail.com"
    };

$scope.updateSettings=function(){
    console.log("update settings was called");
}
});