(function() {

  angular.module('public')
    .controller('signupController', signupController)


  signupController.$inject = ['userService','MenuService'];
  function signupController(userService,MenuService) {
    var $ctrl=this;
    var signupCtrl = this;
    $ctrl.favoriteDishFound = true;
    signupCtrl.submit = function() {
    signupCtrl.completed = true;

    var userList={
          fname: signupCtrl.user.fname,
          lname: signupCtrl.user.lname,
          MobileNo: signupCtrl.user.MobileNo,
          email: signupCtrl.user.email,
          favitemname: signupCtrl.user.favitemname,
    }
    console.log(userList);
    MenuService.getMenuItem(signupCtrl.user.favitemname)
      .then(function(data) {
        console.log("Dish found:", data);
        userList.favoriteitemname = data;
        userService.addItem(userList);
        $ctrl.favoriteDishFound = true;
      },
      function(err) {
        console.log("Dish not found");
        userService.addItem(userList);
        $ctrl.favoriteDishFound = false;
      });
  };

  }

})();
