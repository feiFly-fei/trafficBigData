/**
 * Created by lifei on 2017/11/9.
 */

$(function () {

    $('.selectpicker').selectpicker({

    });

    $('#table').bootstrapTable({
        url: '../json/data.json',
        method: 'post',
        pagination: true,
        pageNumber: 1,
        pageSize: 10,
        columns: [
            {field: 'rank', title: '排名'},
            {field: 'companyName', title: '企业'},
            {field: 'representative', title: '法人代表'},
            {field: 'belongIndustry', title: '所属行业'},
            {field: 'companySource', title:　'企业资源'},
            {field: 'operateScale', title: '经营范围'},
            {field: 'registerMoney', title: '注册资本'},
            {field: 'setupDate', title: '成立日期'},
            {field: 'employeeNum', title: '人员规模'},
            {field: 'area', title: '所属地区'},
            {field: 'biddingNum', title: '中标次数'},
            {field: 'bidPrice', title: '中标价格'}
        ]
    });
});



function getTableData() {
    var data = [
        {
            "rank": "1", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "2", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "3", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "4", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "5", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "6", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "7", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "8", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "9", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "10", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "11", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业11", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        },
        {
            "rank": "12", "companyName": "江苏恒信科技有限公司", "representative": "张三", "belongIndustry": "科学研究和技术服务", "companySource": "暂无",
            "operateScale": "通信专业12", "注册资本": "5000万元人民币", "setupDate": "2013-10-10", "employeeNum": "500",
            "area": "江苏", "biddingNum": "828", "bidPrice": "100万美元"
        }
    ];
    return data;
}