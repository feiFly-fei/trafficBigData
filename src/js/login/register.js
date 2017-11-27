/**
 * Created by lifei on 2017/11/10.
 */

$(function () {
    var requestData = {};

    $('#distpicker').distpicker({
        province: "请选择",
        city: "不限",
        district: "不限",
        autoSelect: false
    });

    $('.selectpicker').selectpicker({

    });

    $('#form_first').bootstrapValidator({
        fields:{
            userName: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    }
                }
            },
            companyName: {
                validators:{
                    notEmpty:{
                        message: '公司名称不能为空'
                    }
                }
            },
            province: {
                validators:{
                    notEmpty:{
                        message: '公司名称不能为空'
                    }
                }
            },
            city:{
                validators:{
                    notEmpty:{
                        message: '公司名称不能为空'
                    }
                }
            },
            district:{
                validators:{
                    notEmpty:{
                        message: '公司名称不能为空'
                    }
                }
            },
            industry:{
                validators:{
                    notEmpty:{
                        message: '公司名称不能为空'
                    }
                }
            }
        }
    });

    $('#form_second').bootstrapValidator({
        fields:{
            phoneNum: {
                validators:{
                    notEmpty:{
                        message: '手机号不能为空'
                    },
                    regexp:{
                        regexp: /^1(3|4|5|7|8)\d{9}$/,
                        message: '手机号格式不正确'
                    }
                }
            },
            validCode:{
                validators:{
                    notEmpty:{
                        message: '请输入验证码'
                    }
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message: '请输入密码'
                    }
                }
            },
            'agreeCheckbox[]': {
                validators:{
                    choice:{
                        min: 1,
                        message: '请阅读《慧数轨道交通大数据平台条款》和《用户须知》'
                    }
                }
            }
        }
    });

    $('.toSecondBtn').click(function () {
        $('#form_first').bootstrapValidator('validate').on('success.form.bv', function (e) {
            e.preventDefault();
            requestData.userName = $('#userName').val();
            requestData.companyName = $('#companyName').val();
            requestData.province = $('#province').val();
            requestData.city = $('#city').val();
            requestData.district = $('#district').val();
            requestData.industry = $('#industry').val();

            $('.step-ul li.first').removeClass('selected').next('.second').addClass('selected');
            $('.step-first-wrap').hide().next('.step-second-wrap').show();
        });

    });

    $('.toThirdBtn').click(function () {
        $('#form_second').bootstrapValidator('validate').on('success.form.bv', function (e) {
            e.preventDefault();
            requestData.phoneNum = $('#phoneNum').val();
            requestData.validCode = $('#validCode').val();
            requestData.password = $('#password').val();
            $('.step-ul li.second').removeClass('selected').next('.third').addClass('selected');
            $('.step-second-wrap').hide().next('.step-third-wrap').show();
        });
    });
});