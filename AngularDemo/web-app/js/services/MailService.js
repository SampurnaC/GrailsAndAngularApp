angular.module('AngularDemo').service('mailService', ['$http','$q',MailService]);

function MailService($http, $q){
    return{
        getMail: getMail,
        sendMail: sendMail
    };

    function getMail(){
        return $http.get('api/mail/getAllMail');
    }

    function sendMail(data){
            var d = $q.defer();
            $http.post('api/mail/createMail', data)
                .success(function(data,status,headers){
                    d.resolve(data);
                }).error(function(data,status,headers){
                    d.reject(data);
                });
            return d.promise;
    }
}