'use strict';

var ComHorBar = {
    template: ' <section class="com-hor-bar">\n                <p class="sub-title" v-text="info.title"></p>\n                <div class="bar-content" ref="content">\n                    <ul class="my-ul" ref="lis">\n                        <li v-for="(item,i) in info.list" :key="i">\n                            <span class="name"><i v-text="\'TOP.\'+(i+1)">}</i><em v-text="item.name"></em></span>\n                            <span class="bar"><em class="inner-bar" :index="i"></em></span>\n                            <span class="rate" v-text="item.num"></span>\n                        </li>\n                    </ul>\n                </div>\n            </section>',
    data: function data() {
        return {
            index: 0,
            num: 0,
            ph: 0,
            lis: null
        };
    },
    created: function created() {
        var that = this;
        this.$nextTick(function () {
            this.ph = this.$refs.content.offsetHeight;
            this.num = Math.ceil(this.info.list.length / 5);
            this.lis = this.$refs.lis.querySelectorAll('.inner-bar');
            TweenMax.set(this.lis, {
                width: function width(index) {
                    return that.info.list[index].num / (that.info.list[index].num + 100) * 100 + '%';
                }
            });
        });
    },

    methods: {
        move: function move() {
            var that = this;
            if (this.num === 1) {
                TweenMax.set(this.lis, {
                    width: function width(index) {
                        return '0%';
                    }
                });
                TweenMax.staggerTo(this.lis, 0.5, {
                    width: function width(index, target) {
                        var idx = +target.getAttribute('index');
                        return that.info.list[idx].num / (that.info.list[idx].num + 100) * 100 + '%';
                    }
                }, 0.1);
            } else {
                TweenMax.to(this.$refs.lis, 0.3, {
                    y: -('' + this.index * this.ph),
                    ease: Power0.easeIn
                });
                this.index++;
                if (this.index >= this.num) this.index = 0;
            }
        }
    },
    props: ['uuid', 'info', 'type'],
    watch: {
        uuid: {
            deep: true,
            handler: function handler() {
                this.$nextTick(function () {
                    this.move();
                });
            }
        }
    }
};