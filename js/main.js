$(document).ready(function(){
    $('#fullpage').fullpage({
        verticalCentered: true,
        navigation:true,
        sectionSelector: 'section,.section',
        // resize: false,
        anchors: ['firstScreen', 'what', 'project', 'contact', 'reviews', 'footer']
    });
});