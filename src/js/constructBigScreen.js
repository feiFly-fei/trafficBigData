
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



    var data = [
        {name: '延安', value: 38},
        {name: '太原', value: 39},
        {name: '清远', value: 39},
        {name: '中山', value: 39},
        {name: '昆明', value: 39},
        {name: '寿光', value: 40},
        {name: '盘锦', value: 40},
        {name: '长治', value: 41},
        {name: '深圳', value: 41},
        {name: '珠海', value: 42},
        {name: '大连', value: 47},
        {name: '临汾', value: 47},
        {name: '吴江', value: 47},
        {name: '石嘴山', value: 49},
        {name: '沈阳', value: 50},
        {name: '苏州', value: 50},
        {name: '茂名', value: 50},
        {name: '嘉兴', value: 51},
        {name: '长春', value: 51},
        {name: '胶州', value: 52},
        {name: '银川', value: 52},
        {name: '张家港', value: 52},
        {name: '三门峡', value: 53},
        {name: '西安', value: 61},
        {name: '金坛', value: 62},
        {name: '东营', value: 62},
        {name: '牡丹江', value: 63},
        {name: '遵义', value: 63},
        {name: '绍兴', value: 63},
        {name: '扬州', value: 64},
        {name: '常州', value: 64},
        {name: '潍坊', value: 65},
        {name: '重庆', value: 66},
        {name: '台州', value: 67},
        {name: '渭南', value: 72},
        {name: '马鞍山', value: 72},
        {name: '宝鸡', value: 72},
        {name: '焦作', value: 75},
        {name: '句容', value: 75},
        {name: '徐州', value: 79},
        {name: '衡水', value: 80},
        {name: '包头', value: 80},
        {name: '绵阳', value: 80},
        {name: '乌鲁木齐', value: 84},
        {name: '兰州', value: 99},
        {name: '沧州', value: 100},
        {name: '临沂', value: 103},
        {name: '宜昌', value: 130},
        {name: '义乌', value: 132},
        {name: '丽水', value: 133},
        {name: '洛阳', value: 134},
        {name: '秦皇岛', value: 136},
        {name: '株洲', value: 143},
        {name: '石家庄', value: 147},
        {name: '莱芜', value: 148},
        {name: '常德', value: 152},
        {name: '保定', value: 153},
        {name: '湘潭', value: 154},
        {name: '金华', value: 157},
        {name: '岳阳', value: 169},
        {name: '长沙', value: 175},
        {name: '衢州', value: 177},
        {name: '廊坊', value: 193},
        {name: '菏泽', value: 194},
        {name: '合肥', value: 229},
        {name: '武汉', value: 273},
        {name: '北京', value: 279}
    ];

    var geoCoordMap = {
        '延安':[109.47,36.6],
        '太原':[112.53,37.87],
        '清远':[113.01,23.7],
        '中山':[113.38,22.52],
        '昆明':[102.73,25.04],
        '寿光':[118.73,36.86],
        '盘锦':[122.070714,41.119997],
        '长治':[113.08,36.18],
        '深圳':[114.07,22.62],
        '珠海':[113.52,22.3],
        '大连':[121.62,38.92],
        '临汾':[111.5,36.08],
        '吴江':[120.63,31.16],
        '石嘴山':[106.39,39.04],
        '沈阳':[123.38,41.8],
        '苏州':[120.62,31.32],
        '茂名':[110.88,21.68],
        '嘉兴':[120.76,30.77],
        '长春':[125.35,43.88],
        '胶州':[120.03336,36.264622],
        '银川':[106.27,38.47],
        '张家港':[120.555821,31.875428],
        '三门峡':[111.19,34.76],
        '西安':[108.95,34.27],
        '金坛':[119.56,31.74],
        '东营':[118.49,37.46],
        '牡丹江':[129.58,44.6],
        '遵义':[106.9,27.7],
        '绍兴':[120.58,30.01],
        '扬州':[119.42,32.39],
        '常州':[119.95,31.79],
        '潍坊':[119.1,36.62],
        '重庆':[106.54,29.59],
        '台州':[121.420757,28.656386],
        '渭南':[109.5,34.52],
        '马鞍山':[118.48,31.56],
        '宝鸡':[107.15,34.38],
        '焦作':[113.21,35.24],
        '句容':[119.16,31.95],
        '北京':[116.46,39.92],
        '徐州':[117.2,34.26],
        '衡水':[115.72,37.72],
        '包头':[110,40.58],
        '绵阳':[104.73,31.48],
        '乌鲁木齐':[87.68,43.77],
        '兰州':[103.73,36.03],
        '沧州':[116.83,38.33],
        '临沂':[118.35,35.05],
        '宜昌':[111.3,30.7],
        '义乌':[120.06,29.32],
        '丽水':[119.92,28.45],
        '洛阳':[112.44,34.7],
        '秦皇岛':[119.57,39.95],
        '株洲':[113.16,27.83],
        '石家庄':[114.48,38.03],
        '莱芜':[117.67,36.19],
        '常德':[111.69,29.05],
        '保定':[115.48,38.85],
        '湘潭':[112.91,27.87],
        '金华':[119.64,29.12],
        '岳阳':[113.09,29.37],
        '长沙':[113,28.21],
        '衢州':[118.88,28.97],
        '廊坊':[116.7,39.53],
        '菏泽':[115.480656,35.23375],
        '合肥':[117.27,31.86],
        '武汉':[114.31,30.52]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var chinaOption = {
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#000622',
                    borderColor: '#13acf3'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series : [
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c5a425'
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#04fee4',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
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






















