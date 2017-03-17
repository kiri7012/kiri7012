/* 
* @Author: 0-0
* @Date:   2017-02-06 11:20:02
* @Last Modified by:   0-0
* @Last Modified time: 2017-02-07 18:38:26
*/

'use strict';
$(function(){
	function resize(){
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth < 768 ;
		$('#main_ad > .carousel-inner > .item').each(function(i,item){
			var $item = $(item);
			var imgSrc = 
			isSmallScreen ? $item.data('image-xs'):$item.data('image-lg');
		$item.css('backgroundImage','url("'+imgSrc+'")');
		if(isSmallScreen){
			$item.html('<img src="'+imgSrc+'" alt="" />')
		}else{
			$item.empty();
		}
		})
	}
	$(window).on('resize',resize).trigger('resize');

	/*
	nav底部滚动1
	 */
	/*悬停文字*/
	$('[data-toggle="tooltip"]').tooltip();
	/*悬停文字*/

	
	var $ulContainer = $('.nav-tabs');
	var width = 40 ;
	$ulContainer.children().each(function(i,ele){
		width += ele.clientWidth ;
	})
	//判断当前ul的宽是否超出屏幕
	//，若果超出就显示横向滚动条
	if(width > $(window).width()){
		$ulContainer.css('width',width).parent()
		.css('overflow-x','scroll');
	}
	
	$('#news > .container .nav-pills a').on('click',function(){
		var $this = $(this);
		var text = $this.data('title');
		$('.news-title').text(text);
	});

	var $carousels = $('.carousel');
	var startX,endX;
	
	$carousels.on('touchstart',function(e){
		//console.log(e.originalEvent.touches[0].clientX);
		startX = e.originalEvent.touches[0].clientX;
	})
	$carousels.on('touchmove',function(e){
		endX = e.originalEvent.touches[0].clientX;
		//console.log(e.originalEvent.touches[0].clientX)
	})
	$carousels.on('touchend',function(e)
	{
		var distance  = Math.abs(startX - endX) ;

		if(distance>50){
			$carousels.carousel(startX - endX > 0?'next':'prev')
		}
	})
	
})







///*
//		
//	 
//	1.获取手指滑动方向；
//	---touch start/end
//	2.根据或得到的方向，选择上一张或者下一张；
//	  通过carousel原生方法实现
//	 */
//	//获取界面上的轮播图组件
//	var $carousels = $('.carousel');
//	//注册滑动事件
//	var startX,endX;
//	var offSet = 50 ;
//	$carousels.on('touchstart',function(e){
//		//手指触摸开始时记录手指所在x坐标
//		startX = e.originalEvent.touches[0].clientX;
//		//
//		//
//		//console.log(startX);
//	})
//	
//	$carousels.on('touchmove',function(e){
//		endX =  e.originalEvent.touches[0].clientX;
//	})
//   //结束触摸一瞬间记录手指x坐标
//		
//	$carousels.on('touchend',function(e){
//		//比大小
//		//控制精度，获取每次运动距离，
//		var distance = Math.abs(startX - endX);
//		if(distance > offSet){
//			//有方向变化
//			var $this = $(this);
//			$this.carousel(startX-endX > 0 ? 'next':'prev');
//
//		}
//	})




/**var $ulContainer = $('.nav-tabs');
	var width = 40 ; 
	$ulContainer.children().each(function(i,ele){
		width += ele.clientWidth;
	});
	//此时width为所有li宽度中和
	$ulContainer.css('width',width); **/