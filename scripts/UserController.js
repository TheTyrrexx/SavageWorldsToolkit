SWModule.controller('UserController', ['$scope', '$rootScope', '$http', 'globalService', function($scope, $rootScope, $http, globalService)
{
    $scope.users = {};

    //Might accidently reset
    //$rootScope.cur_user = {};
    //$rootScope.logged_in = false;
    
    $scope.login_email = '';
    $scope.login_pass = '';

    $scope.modName = '';
    $scope.modPass1 = '';
    $scope.modPass2 = '';

    //Creation variables
    $scope.create_email = '';
    $scope.create_name = '';
    $scope.create_pass = '';
    $scope.create_res = '';

    //Get all users when opening index page.
    //Sending get command when loading page
    $http.get('/api/users')
        .success(function(db_data)
        {
            //On success give all JSON DB data to variable
            $scope.users = db_data;
            console.log(db_data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.login = function(email, pass)
    {
        console.log("Logging In!");
        $http.post('/api/users/login/' + email + '&' + pass, $rootScope.cur_user)
            .success(function(db_data)
            {
                //Clear current user
                $rootScope.cur_user = {};
                //Give variable new user
                $rootScope.cur_user = db_data[0];
                $rootScope.logged_in = true;
                console.log("Current user now is: " + db_data[0]);
                console.log(db_data[0].name);
            })
            .error(function(db_data)
            {
                console.log('Error: ' + db_data);
            });
            $('#login_modal').modal('hide')
    }

    $scope.logout = function()
    {
        console.log("Logging Out!");
        $rootScope.cur_user = {};
        $scope.login_email = '';
        $scope.login_pass = '';
        $rootScope.logged_in = false;
        $('#myModal').modal('hide')
        
    }

    $scope.create_acct = function(email, pass, name, create)
    {
        if(create === true)
        {
            console.log("Creating User!");
            $http.post('/api/users/create/' + email + '&' + pass + '&' + name, $scope.create_res)
                .success(function(db_data)
                {
                    console.log('Creating Account!')
                    console.log("EMAIL: " + email);
                    console.log("PASS: " + pass);
                    console.log("NAME: " + name);
                    console.log(db_data);
                    $scope.create_res = db_data;
                })
                .error(function(db_data)
                {
                   console.log('Error: ' + db_data);
                   $scope.create_res = db_data;
                });
            $('#createModal').modal('hide');
        }
        $('#createModal').modal('hide');
    }

    $scope.modAcctName = function(newName)
    {
        if(newName.length > 0)
        {
           $http.post('/api/users/updateName/' + $rootScope.cur_user.email + '&' + newName, $scope.updateRes)
               .success(function(db_data)
               {
                   console.log("Angular Updating Name");
                   console.log(db_data);
                   $rootScope.cur_user.name = db_data[1];
                   $scope.updateRes = db_data;
               })
               .error(function(db_data)
               {
                   console.log('Error: ' + db_data);
                   $scope.updateRes = db_data;
               })
        }
    }

    $scope.modAcctPass = function(newPass1, newPass2)
    {
        if(newPass1 === newPass2)
        {
            $http.post('/api/users/updatePass/' + $rootScope.cur_user.email + '&' + newPass1, $scope.updateRes)
                .success(function(db_data)
                {
                    console.log("Angular Updateing Password");
                    console.log(db_data);
                })
                .error(function(db_data)
                {
                    console.log("Error: " + db_data);
                })
        }
    }
}]);