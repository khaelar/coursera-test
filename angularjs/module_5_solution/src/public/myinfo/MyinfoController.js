(function() {

  angular.module('public')
    .controller('MyInfoController', MyInfoController)

    MyInfoController.$inject = ['user'];
    function MyInfoController(user) {
      var $ctrl = this;
      $ctrl.user = user;
      console.log($ctrl.user);
      $ctrl.signUp = false;
      $ctrl.favoriteitemname;

      console.log($ctrl.signUp);
     if($ctrl.user){
        console.log(user);
          $ctrl.signUp = true;
          $ctrl.fname = $ctrl.user.fname;
          $ctrl.lname = $ctrl.user.lname;
          $ctrl.email = $ctrl.user.email;
          $ctrl.MobileNo = $ctrl.user.MobileNo;
          $ctrl.favitemname = $ctrl.user.favitemname;
          $ctrl.favoriteitemname = $ctrl.user.favoriteitemname;
      }
      else{
        $ctrl.signUp = false;
      }
    };

})();
