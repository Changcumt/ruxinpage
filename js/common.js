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
animateInit()

var yaGaoImgEle = document.querySelector('.yagao-img .shadow')
var randomTime = Math.random()*2000+1000
var perTickTime = Math.ceil(randomTime/100)
var count = 0
function calcImageLoad (){
  if(count>100)return
  count++
  yaGaoImgEle.style.boxShadow = `${6*0.01*count}rem 0px 13px 0px  #99e3ff`
  yaGaoImgEle.style.width = `${6*0.01*count}rem`
  yaGaoImgEle.style.transform = `translateX(-${6*0.01*count}rem)`
  setTimeout(calcImageLoad,perTickTime)
}
calcImageLoad()
