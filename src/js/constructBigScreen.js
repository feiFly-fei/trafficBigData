
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
        '北京': [116.395645, 39.929986],
        '天津': [117.210813, 39.14393],
        '上海': [121.4788,31.2303],
        '重庆': [106.55,29.5647],
        '河北': [114.522082,38.048958],
        '河南': [113.649644,34.75661],
        '云南': [102.714601,24.882],
        '辽宁': [123.432791,41.808645],
        '黑龙江': [126.657717,45.773225],
        '湖南': [112.979353,28.213478],
        '安徽': [117.282699,31.866942],
        '山东': [117.024967,36.682785],
        '新疆': [87.564988,43.84038],
        '江苏': [118.778074,32.057236],
        '浙江': [120.219375,30.259244],
        '江西': [115.893528,28.689578],
        '湖北': [114.3162,30.581084],
        '广西': [108.297234,22.806493],
        '甘肃': [103.823305,36.064226],
        '山西': [112.550864,37.890277],
        '内蒙古': [111.660351,40.828319],
        '陕西': [108.939,34.342],
        '吉林': [125.3222,43.816],
        '福建': [119.330221,26.047125],
        '贵州': [106.709177,26.629907],
        '广东': [113.30765,23.120049],
        '青海': [101.767921,36.640739],
        '西藏': [91.111891,29.662557],
        '四川': [104.0648,30.57],
        '宁夏': [106.206479,38.502621],
        '海南': [110.330802,20.022071],
        '台湾': [121.31, 25.03],
        '香港': [114.1529,22.542716],
        '澳门': [113.417008,22.337477]
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
                                state: data[i].value,
                                operate: data[i].operate,
                                prepare: data[i].prepare
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
                                state: data[index].value,
                                operate: data[i].operate,
                                prepare: data[i].prepare
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
        "value": 2,
        "operate": 4,
        "prepare": 6
    }, {
        "name": "深圳",
        "ID": 42,
        "value": 2,
        "operate": 5,
        "prepare": 2
    }, {
        "name": "河北",
        "ID": 43,
        "value": 2,
        "operate": 2,
        "prepare": 6
    }, {
        "name": "上海",
        "ID": 44,
        "value": 2
    }, {
        "name": "河南",
        "ID": 46,
        "value": 2,
        "operate": 0,
        "prepare": 1
    },  {
        "name": "宁夏",
        "ID": 55,
        "value": 2,
        "operate": 0,
        "prepare": 1
    }, {
        "name": "湖北",
        "ID": 73,
        "value": 2,
        "operate": 2,
        "prepare": 3
    },  {
        "name": "浙江",
        "ID": 87,
        "value": 2,
        "operate": 3,
        "prepare": 4
    }, {
        "name": "山西",
        "ID": 100,
        "value": 2,
        "operate": 0,
        "prepare": 1
    }, {
        "name": "黑龙江",
        "ID": 102,
        "value": 2,
        "operate": 0,
        "prepare": 0
    }, {
        "name": "新疆",
        "ID": 140,
        "value": 7,
        "operate": 0,
        "prepare": 0
    }, {
        "name": "江苏",
        "ID": 141,
        "value": 5,
        "operate": 1,
        "prepare": 2
    },  {
        "name": "西藏",
        "ID": 155,
        "value": 7,
        "operate": 0,
        "prepare": 0
    }, {
        "name": "四川",
        "ID": 156,
        "value": 8,
        "operate": 1,
        "prepare": 2
    },{
        "name": "海南",
        "ID": 158,
        "value": 1,
        "operate": 2,
        "prepare": 3
    }, {
        "name": "台湾",
        "ID": 159,
        "value": 2,
        "operate": 4,
        "prepare": 5
    }, {
        "name": "香港",
        "ID": 160,
        "value": 3,
        "operate": 2,
        "prepare": 3
    }];

    var chinaOption = {
        tooltip:{
            trigger: 'item',
            formatter: function (val) {
                var text = '<div style="font-size: 12px; padding: 10px;line-height: 30px;">'
                    + '<p>' + val.name + '地铁现有' + val.data.operate + '条运营线路,</p>'
                    + '<p>预计2020年' + val.name + '地铁线路将达' + val.data.prepare + '条' + '</p>'
                    + '<p>建设中天津地铁4、5、10号线</p>'
                    + '<p>规划中天津地铁7、8、11、12、13号线</p>'
                    + '<p style="color: red;text-align: right;">招标情况是。。。</p></div>';
                return text;

            }
        },
        geo: {
            map: 'china',
            roam: false,
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
                    show: true,
                    fontSize: 18,
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
                    show: false,
                    areaColor: '#fff'
                }
            },
            data: convertData(data)
        },{
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 25,
            symbol: '',
            symbolRotate: 35,
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
                    show: false,
                    areaColor: '#fff'
                }
            },
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6))
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
                data: [121,98,180,201,165,109],
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
                data: [23,12,19,{value: 0, label: {normal: {show: false}}},{value: 0, label: {normal: {show: false}}},10],
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



    function getCalendarData() {
        // var date = new Date().format('yyyy-MM');
        var data = getCalData();
        var data1 = [];
        for(var i = 0; i <　data.length; i++){
            var arr = [];
            arr.push(data[i].date);
            arr.push(parseInt(data[i].num));
            data1.push(arr);
        }

        return data1;
    }

    function getCalData() {
        var data = [ {
            "num" : "135",
            "date" : "2017-11-01"
        }, {
            "num" : "126",
            "date" : "2017-11-02"
        }, {
            "num" : "1133",
            "date" : "2017-11-03"
        }, {
            "num" : "63",
            "date" : "2017-11-04"
        }, {
            "num" : "43",
            "date" : "2017-11-05"
        }, {
            "num" : "129",
            "date" : "2017-11-06"
        }, {
            "num" : "4147",
            "date" : "2017-11-07"
        }, {
            "num" : "2141",
            "date" : "2017-11-08"
        }, {
            "num" : "158",
            "date" : "2017-11-09"
        }, {
            "num" : "109",
            "date" : "2017-11-10"
        }, {
            "num" : "53",
            "date" : "2017-11-11"
        }, {
            "num" : "57",
            "date" : "2017-11-12"
        }, {
            "num" : "140",
            "date" : "2017-11-13"
        }, {
            "num" : "150",
            "date" : "2017-11-14"
        }, {
            "num" : "142",
            "date" : "2017-11-15"
        }, {
            "num" : "101",
            "date" : "2017-11-16"
        }, {
            "num" : "120",
            "date" : "2017-11-17"
        }, {
            "num" : "57",
            "date" : "2017-11-18"
        }, {
            "num" : "50",
            "date" : "2017-11-19"
        }, {
            "num" : "190",
            "date" : "2017-11-20"
        }, {
            "num" : "137",
            "date" : "2017-11-21"
        }, {
            "num" : "132",
            "date" : "2017-11-22"
        }, {
            "num" : "144",
            "date" : "2017-11-23"
        }, {
            "num" : "134",
            "date" : "2017-11-24"
        }, {
            "num" : "39",
            "date" : "2017-11-25"
        }, {
            "num" : "34",
            "date" : "2017-11-26"
        }, {
            "num" : "2",
            "date" : "2017-11-27"
        }, {
            "num" : "0",
            "date" : "2017-11-28"
        }, {
            "num" : "1",
            "date" : "2017-11-29"
        }, {
            "num" : "0",
            "date" : "2017-11-30"
        }];

        return data;
    }


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

    var cellSize = [41,41];
    var calOpt  = {
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                var data = params.data;
                return data[0] + '，' + data[1];
            }
        },
        calendar:  {
            orient: 'vertical',
            yearLabel: {
                show: false,
                color: '#fff'
            },
            monthLabel: {
                show: false
            },
            dayLabel:{
                margin: 15,
                color: '#fff',
                firstDay: 1,
                nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
            },
            cellSize: cellSize,
            left: 'center',
            range: '2017-11',
            itemStyle: {
                normal: {
                    color: '#0a0e1d',
                    borderWidth: 1,
                    borderColor: '#3385ff'
                }
            }
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            symbolSize: function (val) {
                if(val[1]/18 >= 41){
                    return 41/1.5;
                }else{
                    return val[1] / 18;
                }
            },
            data: getCalendarData(),
            itemStyle: {
                normal: {
                    color: '#ff9900'
                }
            },
            rippleEffect:{
                scale: 1.5
            },
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        return echarts.format.formatTime('dd', params.value[0]);
                    },
                    offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
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
    }).on('changeDate', function (value) {
        var newDate = new Date(value.date).format('yyyy-MM')
        // console.log(newDate)
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:{
            delay: 2000,
            disableOnInteraction: false
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hiddenClass: 'my-button-hidden'
        }
    })
});






















