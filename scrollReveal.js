//Scroll Effect
$(document).ready(function(){
  
  var windowsize = $(window).width();
  if($('.intro').length){
    $('.intro').fadeIn(2000);
  }
  else{
    $('#selected-projects-title').addClass('is-showing');
    $('#vt-01').addClass('is-showing');
    $('.client-project').addClass('is-showing');
    if (windowsize > 760) {
      $('#vt-02').addClass('is-showing');
      $('.news-project').addClass('is-showing');
    };
  };

  function scrollReveal($param) {
    var scrollTop = $(window).scrollTop();
    var sr=1.3;
    if(scrollTop > $param.offset().top - ($(window).height() / sr)) {
      setTimeout(function(){  
        $param.addClass('is-showing');
        $param.next().addClass('is-showing');
      }, 500); 
    };  
  };

  $(window).on("scroll", function() {

    if($('.projects-list').length){
      scrollReveal($('#selected-projects-title')); 
      for(let i = 1; i < 7; i++){
        let division;
        division = '#vt-0'+ i ;
        if($(division).length){    
          scrollReveal($(division)); 
        };
      };
    };
    if($('.more-projects').length){
      scrollReveal($('.more-projects'));   
    };
  });

});