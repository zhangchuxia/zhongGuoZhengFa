let ComHorBar = {
    template: ` <section class="com-hor-bar">
                <p class="sub-title" v-text="info.title"></p>
                <div class="bar-content" ref="content">
                    <ul class="my-ul" ref="lis">
                        <li v-for="(item,i) in info.list" :key="i">
                            <span class="name"><i v-text="'TOP.'+(i+1)">}</i><em v-text="item.name"></em></span>
                            <span class="bar"><em class="inner-bar" :index="i"></em></span>
                            <span class="rate" v-text="item.num"></span>
                        </li>
                    </ul>
                </div>
            </section>`,
    data() {
        return {
            index: 0,
            num: 0,
            ph: 0,
            lis:null
        }
    },
    created() {
        let that = this;
        this.$nextTick(function() {
            this.ph = this.$refs.content.offsetHeight;
            this.num = Math.ceil(this.info.list.length / 5);
            this.lis = this.$refs.lis.querySelectorAll('.inner-bar');
            TweenMax.set(this.lis,{
                width: function(index) {
                    return that.info.list[index].num / (that.info.list[index].num + 100) * 100 +'%'
                }
            })
            
        });
    },
    methods: {
        move() {
            let that=this;
            if (this.num === 1) {
                TweenMax.set(this.lis, {
                    width: function(index) {
                        return '0%'
                    }
                })
                TweenMax.staggerTo(this.lis,0.5,{
                    width: function(index,target) {
                        let idx=+target.getAttribute('index')
                        return that.info.list[idx].num / (that.info.list[idx].num + 100) * 100 +'%'
                    }
                },0.1)
                
            } else {
                TweenMax.to(this.$refs.lis, 0.3, {
                    y: -`${this.index*this.ph}`,
                    ease: Power0.easeIn
                })
                this.index++;
                if (this.index >= this.num) this.index = 0;
            }

        }
    },
    props: ['uuid', 'info','type'],
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
}
