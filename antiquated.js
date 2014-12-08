// load jQuery if not already
window.jQuery || document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>');

$(document).ready(function(){
  $('*').mouseover(function(e){
    e.css('border','1px solid blue');
    var info = '';
    info += e.attr('class'); 
    e.prepend('<span>'+info+'</span>');
  });
});