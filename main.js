$('.gnb a').mouseenter(function(){
    let bar=$(this).position().left;
    //position(): 요소의 위치정보(top,left)를 반복한다.
    console.log(bar)
    let widnum=$(this).width();
    // $('.bar').animate({옵션},시간)
    $('.bar').animate({
        'left':bar + "px",
        'width':widnum + "px",
    },200)
})

$('.animate').scrolla({
    // default
    mobile: false, // disable animation on mobiles
    once: false, // only once animation play on scroll
    animateCssVersion: 4 // used animate.css version (3 or 4)
});



let open=$('.menuOpen .open')
let menuWrap=$('.menuWrap')
let close=$('.menuWrap .close')

open.click(function(){
    menuWrap.addClass('on')
})

close.click(function(){
    menuWrap.removeClass('on')
})
//menuOpen

//path의 총 길이를 구하는법

let path=document.querySelector(".path1")
let pathHeight=path.getTotalLength()
console.log(pathHeight)



$(window).scroll(function(){
    //$(this) -> $(window)
    let scrollTop = $(this).scrollTop();
    //offset().top : 전체 문서의 top에서 service영역의 top까지의 거리
    let offsets = $('.service').offset().top;
    if(scrollTop>offsets){
        $('body').addClass("on")
    }else{
        $('body').removeClass("on")
    }
})