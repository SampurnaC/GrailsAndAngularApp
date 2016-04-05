angular
    .module('gmailClone')
    .directive('emailListing', EmailListing);

    function EmailListing() {
        return{
            restrict: 'EA',
            replace: true,
            scope: {
                email: '=',              //accept an object as a parameter
                action: '&'             //accept a function as a parameter
            },
            templateUrl: 'templates/emailListing.html',
            controller: ['$scope', '$element', '$attrs', '$transclude', Controller],
            link: Link
        };

        function Controller($scope, $element, $attrs, $transclude) {
            $scope.handleClick = function () {
                $scope.action({selectedMail: $scope.email});
            };
        }

        function Link(scope, iElement, iAttrs, controller) {
            iElement.bind('click', function () {
                iElement.parent().children().removeClass('selected');
                iElement.addClass('selected');
            });
        }
    }
