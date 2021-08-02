let ComeStat = {
    template: ` <section class="module-come-stat" ref="comeStat">
                <p class="title">进馆统计</p>
                <div class="content">
                    <div class="floor1">
                        <div>
                            <p class="come-title">当日到馆</p>
                            <div class="come-number">
                                <div class="number">
                                    <span>人数</span>
                                    <span :num="info.today.personNum" class="num">1452</span>
                                </div>
                                <div class="number">
                                    <span>人次</span>
                                    <span :num="info.today.personTime" class="num"></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="come-title">当年到馆</p>
                            <div class="come-number">
                                <div class="number">
                                    <span>人数</span>
                                    <span :num="info.year.personNum" class="num"></span>
                                </div>
                                <div class="number">
                                    <span>人次</span>
                                    <span :num="info.year.personNum" class="num"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="floor2">
                        <span>当前在馆人数</span>
                        <ul>
                            <li v-for="(item,i) in curr" :key="i" v-text="item"></li>
                        </ul>
                        <span>人</span>
                    </div>
                    <div class="chart" ref='comeChart'></div>
                </div>
            </section>`,
    data() {
        return {
            chart: null,
            curr:[]
        }
    },
    created() {
        this.curr=this.info.current.toString().split('')
        this.$nextTick(function() {
            this.chart = echarts.init(this.$refs.comeChart);
            this.move(); 
        });
    },
    methods: {
        move() {
            this.chart.clear();
            this.chart.setOption(this.option);
            this.$refs.comeStat.querySelectorAll('.num').forEach((v,i)=>{
                new CountUp(v, 0, +v.getAttribute('num'), 0, 3).start();
            })
            
        }
    },
    props: ['uuid','info'],
    watch: {
        uuid: {
            deep: true,
            handler() {
                this.$nextTick(function() {
                    this.move();
                });
            }
        }
    },
    computed: {
        option() {
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
                    show:true,
                    backgroundColor:'rgba(8,16,80,0.6)',
                    borderColor:'transparent'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: true,
                        interval:0,
                        length:8,
                        lineStyle:{
                            // color:'#fff'
                        }
                       
                    },
                    axisLine: {
                        show: true,
                        lineStyle:{
                            color:'#4152a4'
                        }
                    },
                    axisLabel: {
                        interval: 5,
                        textStyle: {
                            color: '#fff',
                            fontSize: getW(16, psdw),
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                    show: true,
                    axisLine: {
                        show: true,
                        show: true,
                        lineStyle:{
                            color:'#4152a4'
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: getW(16, psdw),
                        }
                    },
                },
                dataset: {
                    source: this.info.list
                },
                series: [{
                        type: 'line',
                        seriesLayoutBy: 'row',
                        symbolSize:0,
                        smooth:true,
                        label:{
                            show:false,
                            position:'top',
                            fontSize:getW(20,psdw)
                        },
                        areaStyle :{
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
                    },
                   
                ]
            }
        },
    }
}
