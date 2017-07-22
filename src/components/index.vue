<template>
  <div id="app">
    <div class="containBox" id="containBox">
<div class="containBox_opbg" style="height: 549px; display: none;"></div>
<img src="http://c.cnzz.com/wapstat.php?siteid=1253968111&amp;r=http%3A%2F%2Fm.zcool.com.cn%2Farticles%2F&amp;rnd=487602539" width="0" height="0" style="display: none">

    <div id="banner-index" class="banner mt-10">
        <div class="bd tabcon">
            <div class="tempWrap" style="overflow:hidden; position:relative;">
              
                 <div class="swiper-container">
                      <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <img src="http://img.zcool.cn/community/focus/a6d4597177dd000001786d30d4dd.jpg">
                          </div>
                          <div class="swiper-slide">
                            <img src="http://img.zcool.cn/community/focus/d73c597177b6000001786dca3a1f.jpg">
                          </div>
                          <div class="swiper-slide">
                            <img src="http://img.zcool.cn/community/focus/f6d359717720000001786d43c82d.jpg">
                          </div>

                          <div class="swiper-slide">
                             <img src="http://img.zcool.cn/community/focus/9d79597176f7000001786de391e6.jpg">
                          </div>
                          <div class="swiper-slide">
                            <img src="http://img.zcool.cn/community/focus/a314596ec0da000001786d9a5aaf.jpg">
                          </div>
                          <div class="swiper-slide">
                            <img src="http://img.zcool.cn/community/focus/bae3596ec0b7000001786d0a8d2a.jpg">
                          </div>
                      </div>
                      <!-- 如果需要分页器 -->
                      <div class="swiper-pagination"></div>
                  
      
                </div>
             </div>
        </div>
       <!--  <div class="hd dots cl"><ul><li class="">1</li><li class="">2</li><li class="">3</li><li class="">4</li><li class="">5</li><li class="on">6</li></ul></div> -->
    </div>

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

<div class="line"></div>
<div class="mask-search" style="display: none;"></div>
</div>
  </div>
</template>
 
<script>
  // 在这引入
  import mySwiper from "../../static/js/swiper.min.js";

  export default {
    data:function(){
      return {
        msg:""
      }
    },
    mounted:function(){
          console.log("OK");
           var mySwiper = new Swiper ('.swiper-container', {
               autoplay : 3000,

              // 如果需要分页器
              pagination: '.swiper-pagination',
              
            });
           // console.log(this.$http);
           var url="../../static/php/data.json"
           this.$http.get(url).then(function(res){
                console.log(res.body);
                this.msg=res.body;
           }.bind(this))

     }
  } 
</script>
<style>
   @import "../../static/css/swiper.min.css";


</style>
