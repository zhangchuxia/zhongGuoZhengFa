'use strict';

var ComFigure = {
    template: '<div class="com-figure">\n        <div class="figure-item" v-for="(item,i) in info" :key="i">\n            <p class="name" v-text="item.label" v-if="item.label"></p>\n            <p class="number-box">\n                <span class="num" :num="item.num"></span>\n                <small v-text="item.unit"></small>\n            </p>\n        </div>\n    </div>',
    props: ['info']
};