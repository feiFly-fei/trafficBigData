/**
 * Created by lifei on 2017/11/10.
 */

$(function () {
    $('#distpicker').distpicker({
        province: "请选择",
        city: "不限",
        district: "不限",
        autoSelect: false
    });

    $('.selectpicker').selectpicker({

    });

    $('.toSecondBtn').click(function () {
        $('.step-ul li.first').removeClass('selected').next('.second').addClass('selected');
        $('.step-first-wrap').hide().next('.step-second-wrap').show();
    });

    $('.toThirdBtn').click(function () {
        $('.step-ul li.second').removeClass('selected').next('.third').addClass('selected');
        $('.step-second-wrap').hide().next('.step-third-wrap').show();
    });
});