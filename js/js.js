/**
 * Created by Administrator on 2017/07/18.
 */
$(function(){
    $(".header").mouseenter(function(){
        $(this).removeClass("on")
    })

    //头部导航栏鼠标滑入
    $(".header-main a").mouseenter(function(){
        $(".intoobj").stop()
        $(".intoobj").slideDown(500)
    })
    /*$(".header-main a").mousemove(function(){
        $(".intoobj").show()
    })*/
    $(".header-main a").mouseleave(function(){
        $(".intoobj").stop()
        $(".intoobj").slideUp(500)
    })

})