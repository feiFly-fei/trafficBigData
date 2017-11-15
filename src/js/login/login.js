/**
 * Created by lifei on 2017/11/14.
 */


$(function () {
   $('.forgetPwd').click(function () {
       $('.forgetPwdModal').modal('toggle');

       $('.forgetPwdModal').on('shown.bs.modal', function () {
           var bodyHeight = $('body').height(),
               modalHeight = $('.forgetPwdModal .modal-content').height();
           var diff = (bodyHeight - modalHeight) / 2;
           if(diff > 0){
               $('.forgetPwdModal .modal-dialog').css('margin-top', diff);
           }
       });
   });

   $('#modifyPwdBtn').click(function () {
       $('.forgetPwdModal').modal('toggle');

       setTimeout(function () {
           $('.remindModal').modal('toggle');

           $('.remindModal').on('shown.bs.modal', function () {
               var bodyHeight = $('body').height(),
                   modalHeight = $('.remindModal .modal-content').height();
               var diff = (bodyHeight - modalHeight) / 2;
               if(diff > 0){
                   $('.remindModal .modal-dialog').css('margin-top', diff);
               }
           });
       }, 500)
   });
});