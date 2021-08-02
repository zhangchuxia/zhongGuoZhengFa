let ComFigure={
    template:`<div class="com-figure">
        <div class="figure-item" v-for="(item,i) in info" :key="i">
            <p class="name" v-text="item.label" v-if="item.label"></p>
            <p class="number-box">
                <span class="num" :num="item.num"></span>
                <small v-text="item.unit"></small>
            </p>
        </div>
    </div>`,
    props:['info']
}