
/**
 * Created by lifei on 2017/11/3.
 */


$(function () {
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'××', itemStyle: {normal: {color: '#55e4f9'}}},
                    {value:679, name:'地铁', itemStyle: {normal: {color: '#4304f9'}}},
                    {value:1548, name:'政府平台', itemStyle: {normal: { color: '#04b2fb'}}}
                ]
            },
            {
                name:'数据分布',
                type:'pie',
                radius: ['50%', '65%'],
                label: {
                    normal: {
                        show: true,
                        fontSize: 14
                    }
                },
                data:[
                    {value:335, name:'新闻', itemStyle: {normal: {color: '#55e4f9'}}},
                    {value:310, name:'微博', itemStyle: {normal: {color: '#04b2fb'}}},
                    {value:234, name:'微信', itemStyle: {normal: {color: '#047aff'}}},
                    {value:135, name:'贴吧', itemStyle: {normal: {color: '#4304f9'}}},
                    {value:348, name:'头条', itemStyle: {normal: {color: '#c400fd'}}},
                    {value:251, name:'博客', itemStyle: {normal: {color: '#8803f9'}}},
                    {value:847, name:'论坛', itemStyle: {normal: {color: '#01ffba'}}},
                    {value:102, name:'其他', itemStyle: {normal: {color: '#55e4f9'}}}
                ]
            }
        ]
    };

    var chart = echarts.init(document.getElementById('chart_data_distribution'));
    chart.setOption(option);

    var geoCoordMap = {
        '北京': [116.39737, 39.939502],
        '天津': [117.133262, 39.256321],
        '上海': [121.29, 31.14],
        '重庆': [106.32485, 29.895013],
        '河北': [114.336873, 38.21885],
        '河南': [113.453802, 34.895028],
        '云南': [102.599397, 25.248948],
        '辽宁': [123.241164, 41.948112],
        '黑龙江': [126.479088, 45.985284],
        '湖南': [112.800698, 28.474291],
        '安徽': [117.170056, 31.99595],
        '山东': [116.912494, 36.812038],
        '新疆': [87.476819, 43.894927],
        '江苏': [118.715429, 32.246466],
        '浙江': [120.040035, 30.350837],
        '江西': [115.808656, 28.774611],
        '湖北': [114.116105, 30.764814],
        '广西': [108.265765, 23.020403],
        '甘肃': [103.66644, 36.218003],
        '山西': [112.349964, 38.044464],
        '内蒙古': [111.614073, 40.951504],
        '陕西': [108.780889, 34.408508],
        '吉林': [125.228072, 43.894927],
        '福建': [119.156964, 26.182279],
        '贵州': [106.499624, 26.844365],
        '广东': [113.233035, 23.224606],
        '青海': [101.605943, 36.752842],
        '西藏': [90.972306, 29.838888],
        '四川': [103.924003, 30.796585],
        '宁夏': [106.094884, 38.624116],
        '海南': [110.179083, 19.921006],
        '台湾': [121.36464, 25.248948],
        '香港': [114.1529, 22.542716],
        '澳门': [113.417008, 22.337477],
    };

    var pagesize=4;
    var t = 0;
    function getgeo(geo,i){
        if(i%2==0){
            return [geo[0] + (0.2 * i%2), geo[1]];
        }else{
            return [geo[0] , geo[1] - (0.3 * i%2)];
        }
    }

    function convertData(datas) {
        var res = [];
        for (var g in geoCoordMap) {
            var geo = geoCoordMap[g];
            if (geo) {
                var data = $.grep(datas, function(p) {
                    return p.name == g && p.value!=null;
                });
                if (data.length < pagesize) {
                    for (var i in data) {
                        if (data[i]) {
                            res.push({
                                name:data[i].name,
                                value: getgeo(geo,i),
                                state: data[i].value
                            });
                        }
                    }
                } else {
                    var page= parseInt(data.length/pagesize);
                    page=data.length % pagesize >0 ? (page+1):page;
                    var cutPage= t % page;
                    for (var i = 0 ;i < pagesize; i++) {
                        var index=i+(cutPage*pagesize);
                        if(data[index]){
                            res.push({
                                name: data[index].name,
                                value:getgeo(geo,index),
                                state: data[index].value
                            });
                        }
                    }
                }
            }
        }
        return res;
    };

    var data = [{
        "name": "北京",
        "ID": 9,
        "value": 2
    },{
        "name": "湖南",
        "ID": 21,
        "value": 2
    }, {
        "name": "深圳",
        "ID": 42,
        "value": 2
    }, {
        "name": "河北",
        "ID": 43,
        "value": 2
    }, {
        "name": "上海",
        "ID": 44,
        "value": 2
    }, {
        "name": "河南",
        "ID": 46,
        "value": 2
    },  {
        "name": "宁夏",
        "ID": 55,
        "value": 2
    }, {
        "name": "湖北",
        "ID": 73,
        "value": 2
    },  {
        "name": "浙江",
        "ID": 87,
        "value": 2
    }, {
        "name": "黑龙江",
        "ID": 102,
        "value": 2
    }, {
        "name": "新疆",
        "ID": 140,
        "value": 7
    }, {
        "name": "江苏",
        "ID": 141,
        "value": 5
    },  {
        "name": "西藏",
        "ID": 155,
        "value": 7
    }, {
        "name": "四川",
        "ID": 156,
        "value": 8
    },{
        "name": "海南",
        "ID": 158,
        "value": 1
    }, {
        "name": "台湾",
        "ID": 159,
        "value": 2
    }, {
        "name": "香港",
        "ID": 160,
        "value": 3
    }];
    
    var chinaOption = {
        geo: {
            map: 'china',
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: '#13acf3',
                    areaColor: '#000622'
                },
                emphasis: {
                    areaColor: '#000622',
                    borderColor: '#13acf3'
                }
            },
            label: {
                emphasis: {
                    color: '#fff'
                }
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 20,
            symbol: '',
            symbolRotate: 30,
            itemStyle: {
                normal:{
                    color: '#c5a425'
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    areaColor: '#fff'
                }
            },
            data: convertData(data)
        },{
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 25,
            symbol: '',
            symbolRotate: 30,
            itemStyle: {
                normal:{
                    color: '#04fee4'
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    areaColor: '#fff'
                }
            },
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
        }]
    };

    var map = echarts.init(document.getElementById('chart_china_map'));
    map.setOption(chinaOption);


    var indexOpt = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine:{show: false}//去掉网格线
        },
        yAxis: {
            type: 'category',
            data: ['太原××公司','北京××公司','上海××公司','南宁××公司','武汉××公司','大连××公司'],
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine:{show: false}//去掉网格线
        },
        series: [
            {
                name: '优秀',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [750, 812, 601, 954, 990, 1000],
                itemStyle: {
                    normal: {
                        color: '#55e4f9'
                    }
                }
            },
            {
                name: '差评',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 232, 191, 174, 220, 160],
                itemStyle: {
                    normal: {
                        color: '#047aff'
                    }
                }
            }
        ]
    };

    var indexChart = echarts.init(document.getElementById('supply_index'));
    indexChart.setOption(indexOpt);


    var dataOpt ={
        "series": [
            {
                "name": "中国",
                "type": "map",
                "mapType": "china",
                "selectedMode": false,
                "itemStyle": {
                    "normal": {
                        "areaColor": "#000",
                        "borderWidth": 1.5,
                        "borderColor": "#40a5fc",
                        "label": {
                            "show": true
                        }
                    },
                    "emphasis": {
                        "areaColor": "#2a333d",
                        "label": {
                            "show": true
                        }
                    }
                },
                "label": {
                    "normal": {
                        "show": false
                    },
                    "emphasis": {
                        "show": false
                    }
                },
                "data": [
                    {
                        "value": 856402,
                        "name": "山西",
                        "itemStyle": {
                            "normal": {
                                "color": "#66ffcc",
                                "label": {
                                    "show": false
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }

    var dataChart = echarts.init(document.getElementById('data_report'));
    dataChart.setOption(dataOpt);




    function getVirtulData(year) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate((+year + 1) + '-01-01');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 1000)
            ]);
        }
        return data;
    }

    var graphData = [
        [
            1485878400000,
            260
        ],
        [
            1486137600000,
            200
        ],
        [
            1486569600000,
            279
        ],
        [
            1486915200000,
            847
        ],
        [
            1487347200000,
            241
        ],
        [
            1487779200000,
            411
        ],
        [
            1488124800000,
            985
        ]
    ];

    var links = graphData.map(function (item, idx) {
        return {
            source: idx,
            target: idx + 1
        };
    });
    links.pop();

    var calOpt  = {
        calendar:  {
            orient: 'vertical',
            yearLabel: {
                show: false,
                color: '#fff'
            },
            monthLabel: {
                show: false,
                margin: 5,
                color: '#fff'
            },
            dayLabel:{
                margin: 15,
                color: '#fff',
                firstDay: 1,
                nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            cellSize: 41,
            left: 'center',
            range: '2017-01',
            itemStyle: {
                normal: {
                    color: '#0a0e1d'
                }
            }
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            symbolSize: function (val) {
                return val[1] / 50;
            },
            data: getVirtulData(2017),
            itemStyle: {
                normal: {
                    color: '#ff9900'
                }
            }
        }]
    };
    var calChart = echarts.init(document.getElementById('calendar_chart'));
    calChart.setOption(calOpt);


    var trendOpt = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle:{
                color: '#fff'
            },
            inactiveColor:'#666',
            data:['竞争对手','投资企业','本公司','上游公司','下游公司','测试','合作伙伴','子公司']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel:{
              color: '#fff'
            },
            axisLine:{
              lineStyle:{
                  color:'#064470',
                  type: 'dashed'
              }
            },
            data: ['2017-07-10','2017-07-20','2017-07-30','2017-08-10','2017-08-20','2017-08-30','2017-09-10']
        },
        yAxis: {
            axisLabel:{
                color: '#fff'
            },
            axisLine:{
                lineStyle:{
                    color:'#064470'
                }
            },
            splitLine: {
                lineStyle:{
                    color: '#064470',
                    type: 'dashed'
                }
            },
            type: 'value'
        },
        series: [
            {
                name:'竞争对手',
                type:'line',
                data:[0, 332, 101, 434, 110, 530, 210],
                itemStyle:{
                    normal: {
                        color : '#55e4f9'
                    }
                }
            },
            {
                name:'投资企业',
                type:'line',
                data:[0, 282, 131, 334, 90, 478, 110],
                itemStyle: {
                    normal: {
                        color: '#047aff'
                    }
                }
            },
            {
                name:'本公司',
                type:'line',
                data:[0, 412, 121, 354, 190, 530, 210],
                itemStyle: {
                    normal: {
                        color: '#01ffba'
                    }
                }
            },
            {
                name:'上游公司',
                type:'line',
                data:[0, 232, 51, 334, 190, 430, 220],
                itemStyle:{
                    normal:{
                        color: '#8803f9'
                    }
                }
            },
            {
                name:'下游公司',
                type:'line',
                data:[0, 492, 201, 509, 190, 430, 120],
                itemStyle:{
                    normal:{
                        color: '#c400fd'
                    }
                }
            },
            {
                name:'测试',
                type:'line',
                data:[0, 432, 171, 387, 153, 358, 100],
                itemStyle:{
                    normal:{
                        color: '#5f6fee'
                    }
                }
            },
            {
                name:'合作伙伴',
                type:'line',
                data:[0, 182, 101, 334, 210, 460, 220],
                itemStyle:{
                    normal:{
                        color: '#04b2fb'
                    }
                }
            },
            {
                name:'子公司',
                type:'line',
                stack: '总量',
                data:[0, 132, 71, 234, 104, 330, 78],
                itemStyle: {
                    normal:{
                        color: '#4304f9'
                    }
                }
            }
        ]
    };
    var trendChart = echarts.init(document.getElementById('data_trend'));
    trendChart.setOption(trendOpt);

    $('#timeline1').myScroll({
        speed: 40,
        rowHeight: 45
    });

    $('#timeline2').myScroll({
        speed: 40,
        rowHeight: 60
    });

    $("#datetimepicker").datetimepicker({
        format: 'yyyy-mm',
        autoclose: true,
        startView: 'year',
        minView:'year',
        maxView:'decade',
        language:  'zh-CN'
    });
});






















