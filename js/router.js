$(function(){

    //切换
    $("#bot1").click(function() {

        $(".body").load($(this).data("page"))
        $("#bot1").children("img").attr("src",$("#bot1").data("normal1"))
        $("#bot2").children("img").attr("src",$("#bot2").data("normal2"))
        $("#bot3").children("img").attr("src",$("#bot3").data("normal3"))
        $("#bot4").children("img").attr("src",$("#bot4").data("normal4"))
        $("#bot5").children("img").attr("src",$("#bot5").data("normal5"))

        $(this).children("img").attr("src",$(this).data("selected1"))

        $("#bof1").attr("style",$("#bof1").data("selectedfont1"))
        $("#bof2").attr("style",$("#bof2").data("normalfont2"))
        $("#bof3").attr("style",$("#bof3").data("normalfont3"))
        $("#bof4").attr("style",$("#bof4").data("normalfont4"))
        $("#bof5").attr("style",$("#bof5").data("normalfont5"))
    })
    $("#bot2").click(function() {

        $(".body").load($(this).data("page"))
        $("#bot1").children("img").attr("src",$("#bot1").data("normal1"))
        $("#bot2").children("img").attr("src",$("#bot2").data("normal2"))
        $("#bot3").children("img").attr("src",$("#bot3").data("normal3"))
        $("#bot4").children("img").attr("src",$("#bot4").data("normal4"))
        $("#bot5").children("img").attr("src",$("#bot5").data("normal5"))
        $(this).children("img").attr("src",$(this).data("selected2"))
        $("#bof1").attr("style",$("#bof1").data("normalfont1"))
        $("#bof2").attr("style",$("#bof2").data("selectedfont2"))
        $("#bof3").attr("style",$("#bof3").data("normalfont3"))
        $("#bof4").attr("style",$("#bof4").data("normalfont4"))
        $("#bof5").attr("style",$("#bof5").data("normalfont5"))
    })
    $("#bot3").click(function() {

        $(".body").load($(this).data("page"))
        $("#bot1").children("img").attr("src",$("#bot1").data("normal1"))
        $("#bot2").children("img").attr("src",$("#bot2").data("normal2"))
        $("#bot3").children("img").attr("src",$("#bot3").data("normal3"))
        $("#bot4").children("img").attr("src",$("#bot4").data("normal4"))
        $("#bot5").children("img").attr("src",$("#bot5").data("normal5"))
        $(this).children("img").attr("src",$(this).data("selected3"))

        $("#bof1").attr("style",$("#bof1").data("normalfont1"))
        $("#bof2").attr("style",$("#bof2").data("normalfont2"))
        $("#bof3").attr("style",$("#bof3").data("selectedfont3"))
        $("#bof4").attr("style",$("#bof4").data("normalfont4"))
        $("#bof5").attr("style",$("#bof5").data("normalfont5"))
    })
    $("#bot4").click(function() {

        $(".body").load($(this).data("page"))
        $("#bot1").children("img").attr("src",$("#bot1").data("normal1"))
        $("#bot2").children("img").attr("src",$("#bot2").data("normal2"))
        $("#bot3").children("img").attr("src",$("#bot3").data("normal3"))
        $("#bot4").children("img").attr("src",$("#bot4").data("normal4"))
        $("#bot5").children("img").attr("src",$("#bot5").data("normal5"))
        $(this).children("img").attr("src",$(this).data("selected4"))

        $("#bof1").attr("style",$("#bof1").data("normalfont1"))
        $("#bof2").attr("style",$("#bof2").data("normalfont2"))
        $("#bof3").attr("style",$("#bof3").data("normalfont3"))
        $("#bof4").attr("style",$("#bof4").data("selectedfont4"))
        $("#bof5").attr("style",$("#bof5").data("normalfont5"))
    })
    $("#bot5").click(function() {

        $(".body").load($(this).data("page"))
        $("#bot1").children("img").attr("src",$("#bot1").data("normal1"))
        $("#bot2").children("img").attr("src",$("#bot2").data("normal2"))
        $("#bot3").children("img").attr("src",$("#bot3").data("normal3"))
        $("#bot4").children("img").attr("src",$("#bot4").data("normal4"))
        $("#bot5").children("img").attr("src",$("#bot5").data("normal5"))
        $(this).children("img").attr("src",$(this).data("selected5"))

        $("#bof1").attr("style",$("#bof1").data("normalfont1"))
        $("#bof2").attr("style",$("#bof2").data("normalfont2"))
        $("#bof3").attr("style",$("#bof3").data("normalfont3"))
        $("#bof4").attr("style",$("#bof4").data("normalfont4"))
        $("#bof5").attr("style",$("#bof5").data("selectedfont5"))
    })

    $(".small").click(function() {

        window.history.go(-1);

    })
    $(".listening").click(function() {

        $(".body").load($(this).data("page"))

    })

})