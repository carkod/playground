function URLfix (selector) {
   //change navigation URL dynamically for different root
    var serverURL = window.location.protocol + '//' + window.location.host + '/stock-analysis/';
    $('#sidenav').find('a').attr('href', function(i,el){return serverURL+el});
    
    //add active class for navigation
    var matchURL = $('#sidenav').find('a').filter(function(){
    return $(this).prop('href').indexOf(location.pathname) != -1;
}).parent().addClass('active');
   

 }