'use strict';

var MonthBorrow = {
    template: '<section class="module-month-borrow">\n        <p class="title">\u672C\u6708\u501F\u9605</p>\n        <div class="floor entrust">\n            <v-com-figure class="month-borrow-figure" :info="info.entrust.topNumber"></v-com-figure>\n        </div>\n        <div class="floor order">\n            <v-com-figure class="month-borrow-figure" :info="info.order.topNumber"></v-com-figure>\n        </div>\n        <div class="floor hot">\n        \n        </div>\n        \n    </div>',
    props: ['info'],
    components: {
        vComFigure: ComFigure //顶部数字显示
    }

};