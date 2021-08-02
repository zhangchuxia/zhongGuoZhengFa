let MonthBorrow={
    template:`<section class="module-month-borrow">
        <p class="title">本月借阅</p>
        <div class="floor entrust">
            <v-com-figure class="month-borrow-figure" :info="info.entrust.topNumber"></v-com-figure>
        </div>
        <div class="floor order">
            <v-com-figure class="month-borrow-figure" :info="info.order.topNumber"></v-com-figure>
        </div>
        <div class="floor hot">
        
        </div>
        
    </div>`,
    props:['info'],
    components:{
        vComFigure:ComFigure,//顶部数字显示
    }
    
}