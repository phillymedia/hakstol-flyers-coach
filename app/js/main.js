
$(document).ready(function(){
    require("./gallery");
    $(".left-pullquote").append('<svg alignment="true" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>')


    if(Number($(".backgroundImage").css("height").replace("px","")) == $(window).height()) {
        $(".backgroundImage").css("height", $(window).height() - $(".header").height())
    }

    $("video.lazyLoadVideo source").each(function() {
      var sourceFile = $(this).attr("data-src");
      $(this).attr("src", sourceFile);
      var video = this.parentElement;
      video.load();
      video.play();
    });

});

$(window).resize(function(){
    $(".backgroundImage").css("height", "")
    if(Number($(".backgroundImage").css("height").replace("px","")) == $(window).height()) {
        console.log($(".backgroundImage").css("height"), $(window).height())
        $(".backgroundImage").css("height", $(window).height() - $(".header").height())
    }
})
