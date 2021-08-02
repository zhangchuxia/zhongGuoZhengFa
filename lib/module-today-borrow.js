'use strict';

var TodayBorrow = {
    template: '<section class="module-today-borrow">\n        <p class="title">\u4ECA\u65E5\u501F\u9605</p>\n        <v-com-figure class="today-borrow-figure" :info="info.topNumber"></v-com-figure>\n        <div class="floor top"></div>\n        <div class="floor com-bar-box middle">\n            <v-com-hor-bar class="com-bar" :info="info.personRank" :uuid="uuid""></v-com-hor-bar>\n        </div>\n        <div class="floor bottom"></div>\n        \n    </div>',
    props: ['info', 'uuid'],
    components: {
        vComFigure: ComFigure, //顶部数字显示
        vComHorBar: ComHorBar //水平柱形图
    }

};