<template>
  <div>
        <meta charset="utf-8">
            <title>站酷移动版</title>       
        <meta charset="utf-8" content="text/html" http-equiv="content-type">
        <meta http-equiv="Cache-Control" content="max-age=3600">
        <meta name="MobileOptimized" content="240">
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

        <link href="static/css/style.css" rel="stylesheet" type="text/css">
         
   
		<header class="header">
		  <div class="search_header header-searchbox flex" style="display: none;">
		    <div class="bg-fff pos-r search-box"> <span class="pos-r  search-cancel" style="display: none;"></span>
		      <form onsubmit="return false;">
		        <input name="world" id="searchKeyword" type="search" class="input-search" placeholder="搜索" onkeydown="doKeyDown();">
		      </form>
		    </div>
		    <a href="javascript:void(0);" class="pl-10 c-fff search-cancel-btn">取消</a>
		  </div>
		  <div class="header-con" style="display: block;">
		    
		        <!-- 左上角导航 -->
		          <a class="l pos-r iconpic iconpic-side-nomal navBtn">
		        <span></span>
		      </a>
		      
		    
		    
		      <!-- logo -->
		      <a href="/" class="pos-a logo_link">
		        <img class="logo" src="http://static.zcool.cn/v3.5.170720.4/zcool/client/image/logo.png">
		      </a>
		      <!-- 搜索图标 -->
		      
		      <span class="pos-a block search-a">
		        <img src="http://static.zcool.cn/v3.5.170720.4/zcool/client/image/icon-search2.png">
		      </span>
		      
		      <!-- 站内信或者小人儿 -->
		        
		          <!--未登录状态--> 
		            <span class="private-lette block pos-a" onclick="location.href='/tologin.do'">
		              <img src="http://static.zcool.cn/v3.5.170720.4/zcool/client/image/icon-login.png">
		            </span>
		        
		        
		    </div>
		</header>
		 <div class="uchome-tab cl">
		    
		<router-link to="/" style="width:33%">首页推荐</router-link>
		     <router-link to="/list" style="width:34%">
		        作品
		        <i class="iconpic iconpic-arrow-down va-m"></i>
		     </router-link>
		     
		    <router-link to="/show" style="width:33%">文章</router-link>
		</div>
</div>
</template>