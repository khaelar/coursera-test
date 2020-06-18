(function () {
"use strict";

angular.module('common')
.service('userService', userService);

function userService() {
  var service = this;
  // List of shopping items
  var register=false;
    var userList=[];
  service.addItem = function(newUser) {
    userList = {
      fname: newUser.fname,
      lname: newUser.lname,
      MobileNo: newUser.MobileNo,
      email: newUser.email,
      favitemname: newUser.favitemname,
  //    register:newUser.egister
    };
  //  userList.push(item);
   console.log(userList);
  };

  service.getUserList = function() {
    console.log("Get");
    return userList;
    console.log(userList);
  };
}
})();
