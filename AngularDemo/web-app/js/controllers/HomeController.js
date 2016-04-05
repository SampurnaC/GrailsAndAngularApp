
angular
    .module('AngularDemo')
    .controller('HomeController', ['$scope', HomeController])
    .controller('MailListingController', ['$scope', 'mailService', MailListingController])
    .controller('ContentController', ['$scope', '$rootScope', '$timeout', 'mailService', ContentController]);

function HomeController($scope) {
    $scope.isSelected = isSelected;
    $scope.selectedMail;
    $scope.setSelectedMail = setSelectedMail;

    function isSelected(mail1){
        if($scope.selectedMail){
            return $scope.selectedMail === mail1;
        }
    }

    function setSelectedMail(mail1){
        console.log('set selected mail');
        $scope.selectedMail = mail1;
    }
}

    function MailListingController($scope, mailService) {
        $scope.email = [];

        mailService.getMail()
            .success(function (data, status, headers, config) {
                $scope.email = data;
                console.log($scope.email);
                console.log('Displaying all mail');
            })
            .error(function (data, status, headers, config) {
                console.log('Error displaying mails');
            });
    }
    function ContentController($scope, $rootScope, $timeout, mailService){
        $scope.reply={};
//        $scope.sendReply = sendReply;
        $scope.showingReply = false;
        $scope.toggleReplyForm = toggleReplyForm;

        function toggleReplyForm(){
            $scope.showingReply = !$scope.showingReply;
            $scope.reply = {};
            $scope.reply.mailTo = $scope.selectedMail.mailTo;
            $scope.reply.mailFrom = $scope.selectedMail.mailTo;
            $scope.reply.subject = 'Re:' + $scope.selectedMail.subject;
            $scope.reply.body = '\n------------------------\n' + $scope.selectedMail.body;

        }

    }
//angular.module('AngularDemo').controller('MailListingController', function($scope){
//    $scope.email=[{
//        'id':1,
//        'from': 'sam@sam.com',
//        'subject': 'Congrats for the new laptop',
//        'title': 'sample mail'
//    }];
//});