// Javascript pageX output

jQuery(document).ready(function(){
    $('.tooltip').mouseover(function(){
        var title = $(this).attr('title');
        $('.tooltipContainer').css({'display': 'block', 'opacity' : 0}).animate({'opacity': 1}, 500).html(title);
        
    }).mousemove(function(e){
        var ttwidth = $('.tooltipContainer').outerWidth();
        var ttheight = $('.tooltipContainer').outerHeight();
        var xPos = e.pageX + 'px';
        var yPos = e.pageY-ttheight-5 + 'px';
        $('.tooltipContainer').css('left',xPos);
        $('.tooltipContainer').css('top',yPos);
    }).mouseout(function(){
        $('.tooltipContainer').css('display','none');
    });
    
});

