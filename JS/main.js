$(document).ready(function(){
    // Añade el efecto todos los links 
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 100, function(){
  
          window.location.hash = hash;
        });
      } 
    });
  });



  
