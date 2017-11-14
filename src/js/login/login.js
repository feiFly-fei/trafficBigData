/**
 * Created by lifei on 2017/11/14.
 */


$(function () {
   $('.forgetPwd').click(function () {
       $('.forgetPwdModal').modal('toggle');
   });

   $('#modifyPwdBtn').click(function () {
       $('.forgetPwdModal').modal('toggle');

       setTimeout(function () {
           $('.remindModal').modal('toggle');
       }, 500)
   });
});