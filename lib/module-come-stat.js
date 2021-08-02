'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComeStat = {
    template: ' <section class="module-come-stat" ref="comeStat">\n                <p class="title">\u8FDB\u9986\u7EDF\u8BA1</p>\n                <div class="content">\n                    <div class="floor1">\n                        <div>\n                            <p class="come-title">\u5F53\u65E5\u5230\u9986</p>\n                            <div class="come-number">\n                                <div class="number">\n                                    <span>\u4EBA\u6570</span>\n                                    <span :num="info.today.personNum" class="num">1452</span>\n                                </div>\n                                <div class="number">\n                                    <span>\u4EBA\u6B21</span>\n                                    <span :num="info.today.personTime" class="num"></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <p class="come-title">\u5F53\u5E74\u5230\u9986</p>\n                            <div class="come-number">\n                                <div class="number">\n                                    <span>\u4EBA\u6570</span>\n                                    <span :num="info.year.personNum" class="num"></span>\n                                </div>\n                                <div class="number">\n                                    <span>\u4EBA\u6B21</span>\n                                    <span :num="info.year.personNum" class="num"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="floor2">\n                        <span>\u5F53\u524D\u5728\u9986\u4EBA\u6570</span>\n                        <ul>\n                            <li v-for="(item,i) in curr" :key="i" v-text="item"></li>\n                        </ul>\n                        <span>\u4EBA</span>\n                    </div>\n                    <div class="chart" ref=\'comeChart\'></div>\n                </div>\n            </section>',
    data: function data() {
        return {
            chart: null,
            curr: []
        };
    },
    created: function created() {
        this.curr = this.info.current.toString().split('');
        this.$nextTick(function () {
            this.chart = echarts.init(this.$refs.comeChart);
            this.move();
        });
    },

    methods: {
        move: function move() {
            this.chart.clear();
            this.chart.setOption(this.option);
            this.$refs.comeStat.querySelectorAll('.num').forEach(function (v, i) {
                new CountUp(v, 0, +v.getAttribute('num'), 0, 3).start();
            });
        }
    },
    props: ['uuid', 'info'],
    watch: {
        uuid: {
            deep: true,
            handler: function handler() {
                this.$nextTick(function () {
                    this.move();
                });
            }
        }
    },
    computed: {
        option: function option() {
            var _axisLine;

            return {
                color: '#e8f700',
                title: {
                    show: true,
                    text: '在馆人数趋势',
                    left: 0,
                    textStyle: {
                        color: '#fff',
                        fontSize: getW(20, psdw)
                    }
                },
                grid: {
                    left: getW(20, psdw),
                    right: getW(25, psdw),
                    bottom: getW(20, psdw),
                    top: getW(65, psdw),
                    containLabel: true,
                    show: true,
                    backgroundColor: 'rgba(8,16,80,0.6)',
                    borderColor: 'transparent'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: true,
                        interval: 0,
                        length: 8,
                        lineStyle: {
                            // color:'#fff'
                        }

                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#4152a4'
                        }
                    },
                    axisLabel: {
                        interval: 5,
                        textStyle: {
                            color: '#fff',
                            fontSize: getW(16, psdw)
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    show: true,
                    axisLine: (_axisLine = {
                        show: true
                    }, _defineProperty(_axisLine, 'show', true), _defineProperty(_axisLine, 'lineStyle', {
                        color: '#4152a4'
                    }), _axisLine),
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: getW(16, psdw)
                        }
                    }
                },
                dataset: {
                    source: this.info.list
                },
                series: [{
                    type: 'line',
                    seriesLayoutBy: 'row',
                    symbolSize: 0,
                    smooth: true,
                    label: {
                        show: false,
                        position: 'top',
                        fontSize: getW(20, psdw)
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(232,247,0,0.3)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(232,247,0,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }]
            };
        }
    }
};