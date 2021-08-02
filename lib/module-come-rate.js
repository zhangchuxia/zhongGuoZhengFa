'use strict';

var ComeRate = {
    template: ' <section class="module-come-rate">\n                <p class="title">\u672C\u5468\u5404\u5B66\u9662\u8FDB\u9986\u6BD4\u7387</p>\n                <div class="content" ref="content">\n                    <ul class="my-ul" ref="lis">\n                        <li v-for="(item,i) in info" :key="i">\n                            <span class="name"><i>TOP.{{i+1}}</i><em v-text="item.product"></em></span>\n                            <span class="bar"><em class="inner-bar"></em></span>\n                            <span class="rate" v-text="item.number+\'%\'"></span>\n                        </li>\n                    </ul>\n                </div>\n            </section>',
    data: function data() {
        return {
            index: 0,
            num: 0,
            ph: 0
        };
    },
    created: function created() {
        var that = this;
        this.$nextTick(function () {
            this.ph = this.$refs.content.offsetHeight;
            this.num = Math.ceil(this.info.length / 5);
            var lis = this.$refs.lis.querySelectorAll('.inner-bar');
            TweenMax.set(lis, {
                width: function width(index) {
                    return that.info[index].number + '%';
                }
            });
        });
    },

    methods: {
        move: function move() {
            TweenMax.to('.my-ul', 0.3, {
                y: -('' + this.index * this.ph),
                ease: Power0.easeIn
            });
            this.index++;
            if (this.index >= this.num) this.index = 0;
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
    }
};