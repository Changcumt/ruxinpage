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

var images = [
  './images/loading/bg.png',
  './images/loading/yagao.png',
  './images/loading/text.png',
  './images/loading/yagao-img.png',
  './images/loading/master.png',
  './images/loading/more.png',
  './images/screen1/bg.png',
  './images/screen1/more.png',
  './images/screen1/ca.png',
  './images/screen1/cha.png',
  './images/screen1/chazi.png',
  './images/screen1/yanzi.png',
  './images/screen2/bg.png',
  './images/screen2/rule-btn.png',
  './images/screen2/buy-btn.png',
  './images/screen1/more.png'
]
var imgCount = 0
var yaGaoImgEle = document.querySelector('.yagao-img .shadow')
function calcImageLoad (){
  imgCount++
  var progress = Math.ceil(imgCount/images.length*100)
  yaGaoImgEle.style.boxShadow = `${6*0.01*progress}rem 0px 13px 0px  #99e3ff`
  yaGaoImgEle.style.width = `${6*0.01*progress}rem`
  yaGaoImgEle.style.transform = `translateX(-${6*0.01*progress}rem)`

  if(imgCount === images.length){
    animateInit()
  }
}

images.forEach(img=>{
  var imgObj = new Image()
  imgObj.src = img
  imgObj.onload = calcImageLoad
})
