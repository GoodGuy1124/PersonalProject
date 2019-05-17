<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/22.jpg" /></div>
        <div class="swiper-slide"><img src="../assets/2.jpg" /></div>
        <div class="swiper-slide"><img src="../assets/4.jpg" /></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
</template>
  
<script>
import Swiper from 'swiper'
  // swiper options example:
 export default {
  	data() {
			return {
           
			}
		},
	
		mounted () {
              var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })  
			
		}

 
  }
</script>
<style>
    @import '../../node_modules/swiper/dist/css/swiper.css';
    .swiper-container {
    
    height: 400px;
} 
</style>