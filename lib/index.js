'use strict';

new Vue({
    data: {
        header: {
            time: {
                date: '',
                day: '',
                time: ''
            },
            weather: {
                city: '北京市',
                type: '',
                temperature: ''
            }
        },
        type: '法渊阁', //有两个名字，不同的名字对应不同的数据，用的都是这套页面
        timer: null,
        page: {
            uuid1: '', //实时更新数据，每次更新数据了，重新赋值
            uuid2: '', //监听本周进馆比率
            uuid3: '' //监听读者到馆
        },
        //今日借阅数据
        todayBorrow: {
            topNumber: [{
                label: '借阅读者人数',
                num: 4526,
                unit: '人'
            }, {
                label: '图书借阅总册数',
                num: 3526,
                unit: '册'
            }, {
                label: '中文图书借阅总数',
                num: 2526,
                unit: '册'
            }, {
                label: '西文图书借阅总数',
                num: 1526,
                unit: '册'
            }],
            collegeRank: {
                title: '学院借阅排行',
                list: [{
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }]
            },
            personRank: {
                title: '个人借阅排行',
                list: [{
                    name: '张某娜娜',
                    num: 1756
                }, {
                    name: '张娜娜',
                    num: 556
                }, {
                    name: '张某娜娜',
                    num: 556
                }, {
                    name: '张某',
                    num: 456
                }, {
                    name: '张某娜娜',
                    num: 356
                }, {
                    name: '张某娜娜',
                    num: 356
                }]
            },
            readerRank: {
                title: '不同身份读者借阅排行',
                header: ['排名', '读者身份', '借阅次数'],
                list: [{
                    status: '大专',
                    num: 7865
                }, {
                    status: '本科',
                    num: 6865
                }, {
                    status: '博士后',
                    num: 5865
                }, {
                    status: '博士',
                    num: 4865
                }, {
                    status: '研究生',
                    num: 3865
                }, {
                    status: '高中',
                    num: 2869
                }, {
                    status: '初中',
                    num: 1856
                }, {
                    status: '其他',
                    num: 856
                }]
            }
        },
        //本周借阅
        weekBorrow: {
            topNumber: [{
                label: '借阅读者人数',
                num: 8526,
                unit: '人'
            }, {
                label: '图书借阅总册数',
                num: 6526,
                unit: '册'
            }, {
                label: '中文图书借阅总数',
                num: 7526,
                unit: '册'
            }, {
                label: '西文图书借阅总数',
                num: 4526,
                unit: '册'
            }],
            collegeRank: {
                title: '学院借阅排行',
                list: [{
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }, {
                    name: '机电学院机电学院机电学院',
                    num: 1452
                }]
            },
            personRank: {
                title: '个人借阅排行',
                list: [{
                    name: '张某娜娜',
                    num: 1456
                }, {
                    name: '张某娜娜',
                    num: 856
                }, {
                    name: '张某娜娜',
                    num: 456
                }, {
                    name: '张某娜娜',
                    num: 156
                }, {
                    name: '张某娜娜',
                    num: 56
                }, {
                    name: '张某娜娜',
                    num: 856
                }, {
                    name: '张某娜娜',
                    num: 456
                }, {
                    name: '张某娜娜',
                    num: 156
                }, {
                    name: '张某娜娜',
                    num: 456
                }, {
                    name: '张某娜娜',
                    num: 156
                }, {
                    name: '张某娜娜',
                    num: 456
                }, {
                    name: '张某娜娜',
                    num: 156
                }, {
                    name: '张某娜娜',
                    num: 456
                }, {
                    name: '张某娜娜',
                    num: 156
                }]
            }
        },
        //本月借阅
        monthBorrow: {
            //委托借阅
            entrust: {
                title: '委托借阅',
                //顶部两个数字
                topNumber: [{
                    num: 4526,
                    unit: '人次'
                }, {
                    num: 3526,
                    unit: '册次'
                }],
                //列表排序
                rank: {
                    header: ['排名', '书名', '作者', '借阅次数'],
                    list: [{
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }]
                }
            },
            //预约借阅
            order: {
                title: '预约借阅',
                //顶部两个数字
                topNumber: [{
                    num: 4526,
                    unit: '人次'
                }, {
                    num: 3526,
                    unit: '册次'
                }],
                //列表排序
                rank: {
                    header: ['排名', '书名', '作者', '借阅次数'],
                    list: [{
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }]
                }

            },
            //热门借阅
            hot: {
                title: '热门借阅',
                //列表排序
                rank: {
                    header: ['排名', '书名', '作者', '借阅次数'],
                    list: [{
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }, {
                        bookName: '三国志',
                        author: '克拉斯基美国洛夫斯基',
                        num: 1452
                    }]
                }

            }
        },
        //本周进馆比率
        comeRate: [{
            product: '武警浙江总队武警浙江总队武警浙江总队武警浙江总队',
            number: 94
        }, {
            product: '武警浙江总队武警浙江总队武警浙江总队武警浙江总队',
            number: 89
        }, {
            product: '武警浙江总队武警浙江总队武警浙江总队武警浙江总队',
            number: 88
        }, {
            product: '武警浙江总队武警浙江总队武警浙江总队武警浙江总队',
            number: 78
        }, {
            product: '武警浙江总队武警浙江总队武警浙江总队武警浙江总队',
            number: 75
        }, {
            product: '武警广东总队',
            number: 60
        }, {
            product: '武警云南总队',
            number: 56
        }, {
            product: '武警江西总队',
            number: 50
        }, {
            product: '武警陕西总队',
            number: 45
        }, {
            product: '武警宁夏总队',
            number: 40
        }, {
            product: '武警宁夏总队',
            number: 35
        }, {
            product: '武警宁夏总队',
            number: 33
        }, {
            product: '武警宁夏总队',
            number: 29
        }]
    },
    components: {
        vHeader: Header, //头部标题
        vTodayBorrow: TodayBorrow, //今日借阅
        vWeekBorrow: WeekBorrow, //本周借阅
        vMonthBorrow: MonthBorrow //本月借阅
    },
    created: function created() {
        this.getTime();
        this.weather();
    },

    methods: {
        //执行各模块动效定时器
        move: function move() {
            if (this.timer) clearTimeout(this.timer);
            this.page['uuid1'] = getUUID();
            this.page['uuid2'] = getUUID();
            this.page['uuid3'] = getUUID();
            ///全局所有的数字滚动
            document.querySelectorAll('.num').forEach(function (v, i) {
                new CountUp(v, 0, +v.getAttribute('num'), 0, 3).start();
            });
            this.timer = setTimeout(this.move, 5000);
        },
        getTime: function getTime() {
            var today = new Date(),
                yyyy = today.getFullYear(),
                MM = checkTime(today.getMonth() + 1),
                dd = checkTime(today.getDate()),
                hh = checkTime(today.getHours()),
                mm = checkTime(today.getMinutes()),
                ss = checkTime(today.getSeconds());
            var day = dates[today.getDay()];
            this.header.time.date = yyyy + '-' + MM + '-' + dd;
            this.header.time.day = day;
            this.header.time.time = hh + ':' + mm;
            requestAnimationFrame(this.getTime);
        },
        weather: function weather() {
            //天气
            var that = this;
            axios.get('//wthrcdn.etouch.cn/weather_mini', {
                params: {
                    city: that.header.weather.city
                }
            }).then(function (res) {
                var d = res.data.forecast[0],
                    high = d.high.split(' ')[1],
                    low = d.low.split(' ')[1];
                that.header.weather.type = d.type;
                that.header.weather.temperature = low + '~' + high;
            });
        }
    },
    mounted: function mounted() {
        this.move();
    }
}).$mount('#app');