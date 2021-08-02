let TodayBorrow={
    template:`<section class="module-today-borrow">
        <p class="title">今日借阅</p>
        <v-com-figure class="today-borrow-figure" :info="info.topNumber"></v-com-figure>
        <div class="floor top"></div>
        <div class="floor com-bar-box middle">
            <v-com-hor-bar class="com-bar" :info="info.personRank" :uuid="uuid""></v-com-hor-bar>
        </div>
        <div class="floor bottom"></div>
        
    </div>`,
    props:['info','uuid'],
    components:{
        vComFigure:ComFigure,//顶部数字显示
        vComHorBar:ComHorBar,//水平柱形图
    }
    
}