<template>
   <div id="user-works" class="pd-10">
    <ul>
      <!-- {"img":"./img/1.jpg","describe":"怪物大理2——满世界都是温暖的...","auth":"在浮岛上的日子","top":"7984","down":"392"}, -->
        <li class="cl item" v-for="(val,index) in msg" :key="index">
      
            <div class="picbox">
              <img :src="val.img">
            </div>
            <div class="textbox">
              
                  <h2>{{val.describe}}</h2>
                
            </div>
            <p class="time">
              {{val.auth}}
            </p>
            <p class="toolbar">
              <span><i class="iconpic iconpic-view"></i> <span>{{val.top}}</span></span>
              <span style="margin-left:20px"><i class="iconpic iconpic-zan"></i> <span>{{val.down}}</span></span>
            </p>
        </li> 
    </ul>

    <a class="view-more" id="indexPaging" href="javascript:;" onclick="getMoreWapIndex()">查看更多</a>
    <div class="loadingbar vm" style="display:none;"><img src="http://static.zcool.cn/v3.5.170720.4/zcool/client/image/loading.gif">&nbsp;&nbsp;<span>正在加载</span></div>
</div>

</template>


	<script>
	export default {
		data:function(){
         return {
           msg:""
           }
       },
		mounted:function(){
           var url="../../static/php/data.json"
           this.$http.get(url).then(function(res){
                console.log(res.body);
                this.msg=res.body;
           }.bind(this))

     }
}
	</script>

