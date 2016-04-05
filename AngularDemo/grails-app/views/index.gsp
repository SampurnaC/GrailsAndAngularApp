<!DOCTYPE html>
<html ng-app="AngularDemo">
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>My App</title>
    <link rel="stylesheet" href="css/foundation-min.css"/>
    <link rel="stylesheet" href="css/app.css"/>
    <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.css"/>
</head>

<body>
<div class="navbar navbar-default navbar-static-top">
    <ul class="nav navbar-nav pull-right">
        <li ng-show="loading"><img src="images/spinner.gif"></li>
        <li><a href="#/"><img src="images/home.gif"/></a></li>
        <li><a href="#/new-mail"><img src="images/new-mail.gif"></a></li>
        <li><a href="#/settings"><img src="images/settings.gif"/></a></li>
    </ul>
</div>


<div ng-view></div>
<script src="js/angular.js"></script>
<script src="js/angular-route.js"></script>

<script src="js/main.js"></script>


<script src="js/controllers/HomeController.js"></script>
<script src="js/controllers/NewMailController.js"></script>
  <script src="js/controllers/SettingsController.js"></script>

%{----}%
  %{--<script src="js/directives/emailListing.js"></script>--}%
%{----}%
  <script src="js/services/mailService.js"></script>
  %{--<script src="js/services/userService.js"></script>--}%

</body>
</html>