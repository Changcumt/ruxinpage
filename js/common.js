// 监听点击事件
// 显示活动规则
$('.screen2 .rule-btn').click(function(){
  $('.screen2 .rule-float-box').css('display','flex')
})
// 隐藏活动规则
$('.screen2 .close-btn').click(function(){
  $('.screen2 .rule-float-box').hide()
})
// 我要购买
$('.screen2 .buy-btn').click(function(){
  // todo 
  console.log('点击了我要购买按钮')
})


// 初始化swiper
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'vertical',
})      

// 加载完图片显示星星动画
Pace.on('done', function() {
 animateInit()
})