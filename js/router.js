$(function(){

    //切换
    $(".bottom1").click(function() {

        $(".body").load($(this).data("page1"))

    })

    $(".bottom3").click(function() {

        $(".body").load($(this).data("page3"))

    })

    $(".bottom4").click(function() {

        $(".body").load($(this).data("page4"))

    })
    $(".bottom5").click(function() {

        $(".body").load($(this).data("page5"))

    })

})