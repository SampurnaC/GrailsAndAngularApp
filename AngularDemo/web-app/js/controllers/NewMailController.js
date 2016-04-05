angular.module('AngularDemo').controller('NewMailController', ['$scope','mailService', NewMailController]);

function NewMailController($scope, mailService){
    $scope.createNewMail = createNewMail;
    $scope.body = '';
    $scope.mailFrom = '';
    $scope.mailTo = '';
    $scope.subject = '';

    function createNewMail(){
        var params = {
            mailFrom: $scope.mailFrom,
            mailTo: $scope.mailTo,
            subject: $scope.subject,
            body: $scope.body
        };

        mailService.sendMail(params)
            .success(function(data,status,headers,config){
            console.log('New mail created');
        })
            .error(function(data,status,headers,config){
                console.log('Error creating new mail');
            });
    }
}
