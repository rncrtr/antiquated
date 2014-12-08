// load jQuery if not already
window.jQuery || document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"><\/script>');

$(document).ready(function(){
  $(document).on('click',function(e){
    if(e.shiftKey==true){
      $('#atq').remove();
      console.log(e);
      var target = e.target || e.srcElement;
      var elt = $(target);
      $(target).css({'border-left': '2px solid #0094FF','border-top': '2px solid #0094FF','border-right': '2px solid #0094FF'})
      //console.log(elt);
      var elid = $(target)[0].id;
      var elc = $(target)[0].className;
      var eln = $(target)[0].name;
      var elw = $(target)[0].offsetWidth;
      var elh = $(target)[0].offsetHeight;
      var eltop = $(target).offset().top;
      var elleft = $(target).offset().left;
      var elbot = eltop+elh-2;
      console.log('id: '+elid + ' | class: ' + elc +' | name: '+ eln);
      $(target).css('border','1px solid #0094FF');
      var atq = '';
      atq += '<div class="atq-close" style="float: right; cursor: pointer;" onclick="$(\'#atq\').remove()">X</div>';
      atq += '<div> <b>id:</b> #'+elid+'</div>'; 
      atq += '<div> <b>class:</b> .' + elc+ '</div>';
      atq += '<div> <b>name:</b> '+ eln+'</div>';
      atq += '<div> <b>width:</b> '+ elw+'</div>';
      atq += '<div> <b>height:</b> '+ elh+'</div>';
      atq += '<div> <b>x:</b> '+ eltop+'</div>';
      atq += '<div> <b>y:</b> '+ elleft+'</div>';
      $(target).parent().before('<div id="atq" style="top: '+elbot+'px; left: '+elleft+'px; padding: 10px; background: #FFF; color: #00137F; position: fixed; z-index: 999; width: 200px; border-left: 2px solid #0094FF; border-bottom: 2px solid #0094FF; border-right: 2px solid #0094FF;">'+atq+'</div>');
    }
  });
});