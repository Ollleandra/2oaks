$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
    function createFullPage() {
        if($(window).width() > 1024) {
            $("#fullpage").fullpage(
                {
                    verticalCentered: true,
                    navigation: true,
                    sectionSelector: 'section',
                    anchors: ['section0', 'what', 'project', 'contact', 'reviews']
                }
            );
        }
    }
    $(function() {
        createFullPage();
    });
    $(window).resize(function(e) {
        if( $(window).width() > 1024) {
            createFullPage();
        } else {
            $.fn.fullpage.destroy("all");
        }
    });
});

