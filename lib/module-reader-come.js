'use strict';

var ReaderCome = {
    template: ' <section class="module-reader-come">\n                <p class="title">\u672C\u5468\u5404\u7C7B\u578B\u8BFB\u8005\u5230\u9986</p>\n                <div class="chart" ref="readerChart"></div>\n            </section>',
    data: function data() {
        return {
            chart: null,
            list: [],
            rData: []
        };
    },

    props: ['info', 'uuid'],
    created: function created() {
        var _this = this;

        this.$nextTick(function () {
            _this.list = _this.info[1];
            _this.rData = _this.info[0];
            _this.chart = echarts.init(_this.$refs.readerChart);
            _this.render();
        });
    },

    methods: {
        render: function render() {
            if (this.chart !== null) this.chart.clear();
            this.chart.setOption(this.pie2);
        }
    },
    watch: {
        deep: true,
        uuid: {
            handler: function handler(config) {
                this.render();
            }
        }
    },
    computed: {
        pie2: function pie2() {
            var that = this,
                _series = [];
            var color = ["#2728ff", "rgb(93, 230, 107)", "#469bff", "rgb(246, 196, 0)", "rgb(246, 133, 0)"];
            //动态添加每条圆环
            for (var i = 0; i < this.list.length; i++) {
                var _data = [];
                for (var j = 0; j < i; j++) {
                    _data.push(0);
                }
                _data.push(this.list[i]);
                var item = {
                    type: "bar",
                    barWidth: getW(12, psdw),
                    data: _data,
                    coordinateSystem: "polar",
                    name: this.rData[i],
                    stack: "a",
                    roundCap: true,
                    itemStyle: {
                        color: color[i],
                        barBorderRadius: getW(5, psdw)
                    },
                    showBackground: true,
                    backgroundStyle: {
                        color: "#082979"
                    }
                };
                _series.push(item);
            }
            var option = {
                angleAxis: {
                    type: "value",
                    clockwise: false,
                    min: 0,
                    max: Math.max.apply(null, this.list) / 0.75, //设置圆环值的最大值
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                },
                radiusAxis: {
                    type: "category",
                    data: this.rData,
                    z: 100,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        margin: getW(-20, psdw),
                        fontSize: getW(16, psdw),
                        color: '#fff',
                        align: 'left',
                        formatter: function formatter(value, index) {
                            return value + ':' + that.list[index];
                        },
                        textStyle: {
                            /* color: function(value, index) {
                                 return color[index]
                             } */
                        },
                        interval: 0
                    }
                },
                polar: {
                    center: ["50%", "50%"],
                    radius: getW(220, psdw)
                },
                series: _series
            };
            return option;
        }
    }
};