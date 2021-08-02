let WeekBorrow={
    template:`<section class="module-week-borrow">
        <p class="title">本周借阅</p>
        <v-com-figure class="today-borrow-figure" :info="info.topNumber"></v-com-figure>
        <div class="floor top"></div>
        <div class="floor com-bar-box bottom">
            <v-com-hor-bar class="com-bar" :info="info.personRank" :uuid="uuid"></v-com-hor-bar>
        </div>
        
    </div>`,
    props:['info','uuid'],
    components:{
        vComFigure:ComFigure,//顶部数字显示
        vComHorBar:ComHorBar,//水平柱形图
    }
    
}