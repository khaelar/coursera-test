(function() {

  angular.module('public')
    .controller('signupController', signupController)


  signupController.$inject = ['userService','MenuService'];
  function signupController(userService,MenuService) {
    var $ctrl = this;
    var signupCtrl = this;
    $ctrl.favoriteDishFound = true;
    signupCtrl.submit = function() {
    

    var userList={
          fname: signupCtrl.user.fname,
          lname: signupCtrl.user.lname,
          MobileNo: signupCtrl.user.MobileNo,
          email: signupCtrl.user.email,
          favitemname: signupCtrl.user.favitemname,
    }
    
    MenuService.getMenuItem(signupCtrl.user.favitemname)
      .then(function(data) {
        console.log("Item found:", data);
        userList.favoriteitemname = data;
        userService.addItem(userList);
        $ctrl.favoriteDishFound = true;
		signupCtrl.msg = "Your information has been saved";
		$ctrl.msg = "Your information has been saved";
		signupCtrl.completed = true;
      },
      function(err) {
        console.log("Item not found");
        userService.addItem(userList);
        $ctrl.favoriteDishFound = false;
		signupCtrl.msg = "No such menu number exists";
		$ctrl.msg = "No such menu number exists";
		signupCtrl.completed = true;
      });
  };

  }

})();
