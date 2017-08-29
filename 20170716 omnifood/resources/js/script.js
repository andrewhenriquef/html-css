$(document).ready(function() {
    
    /* This function create sticky nav when scrolling down*/
    /* this 'direction' identify if the user scrolling up or down */
    $('.js--section-features').waypoint(function(direction){ 
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '70px;'
    });
});