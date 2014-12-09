// load jQuery if not already
window.jQuery || document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"><\/script>');

$(document).ready(function(){
  var env = window.location.hostname;
  var allowed_env = ['localhost','localdev.com','he-web-staging.herokuapp.com']; // local dev url
  var atqcolor = '#0094FF'; // atq background color code
  // console.log(env);
  // console.log(allowed_env);
  // console.log($.inArray(env,allowed_env));
  if($.inArray(env,allowed_env)!=-1){
    $(document).on('click',function(e){
      if(e.shiftKey==true){
        e.preventDefault();
        $('#atq').remove();
        var target = e.target || e.srcElement;
        var elt = $(target);
        var eltag = $(target)[0].tagName;
        var elid = ('#'+$(target)[0].id) || '';
        var elc = ('.'+$(target)[0].className) || '';
        var eln = $(target)[0].name;
        var elw = $(target)[0].offsetWidth;
        var elh = $(target)[0].offsetHeight;
        var elbgimg = $(target).css('background-image') || 'none';
        elbgimg = elbgimg.replace('url("','');
        elbgimg = elbgimg.replace('")','');
        elbgimg = elbgimg.replace('url(','');
        elbgimg = elbgimg.replace(')','');
        // var URLsplit = elbgimg.split('/');
        // var host = URLsplit[0] + "//" + URLsplit[2] + "/";
        // elbgimg = elbgimg.replace(host, '/');

        var elbg = $(target).css('background-color').toUpperCase() || 'none';
        var elclr = $(target).css('color').toUpperCase() || '';
        var ellh = $(target).css('line-height') || '';
        var ells = $(target).css('letter-spacing') || '';
        var eltop = $(target).offset().top;
        var elleft = $(target).offset().left;
        var elbot = eltop+elh+2;
        //console.log('id: '+elid + ' | class: ' + elc +' | name: '+ eln);
        $('head').append('<style type="text/css">.atq_highlight{border: 2px solid '+atqcolor+';}</style>');
        $(target).addClass('atq_highlight');
        var atq = '';
        atq += '<div class="atq-close" style="float: right; cursor: pointer; font-weight: bold;" onclick="$(\'.atq_highlight\').removeClass(\'atq_highlight\'); $(\'#atq\').remove();">X</div>';
        atq += '<h3 style="color: #FFF; margin-top: -10px;">Antiquated CSS Inspector</h3>';
        atq += '<table>';
        atq += '<tr><td style="width: 80px">tag: </td><td><b>'+eltag+'</b></td></tr>';
        atq += '<tr><td style="width: 80px">id: </td><td><b>'+elid+'</b></td></tr>'; 
        atq += '<tr><td style="width: 80px">class: </td><td><b>'+elc+'</b></td></tr>';
        atq += '<tr><td style="width: 80px">name: </td><td><b>'+eln+'</b></td></tr>';
        atq += '<tr><td style="width: 80px">color: </td><td><b>'+rgb2hex(elclr)+'</b>&nbsp;<span style="border: 1px solid black; color: '+rgb2hex(elclr)+' !important; width: 22px;">&nbsp;&nbsp;&nbsp;</span></td></tr>';
        atq += '<tr><td style="width: 80px">bg&nbsp;color: </td><td><b>'+rgb2hex(elbg)+'</b>&nbsp;<span style="border: 1px solid black; background-color: '+rgb2hex(elbg)+' !important; width: 22px;">&nbsp;&nbsp;&nbsp;</span></td></tr>';
        atq += '<tr><td colspan="2" style="width: 80px">bg&nbsp;image: <b>'+elbgimg+'</b></td></tr>';
        
        atq += '<tr><td style="width: 80px">height: </td><td><b>'+elh+'px</b></td></tr>';
        atq += '<tr><td style="width: 80px">width: </td><td><b>'+elw+'px</b></td></tr>';

        atq += '<tr><td style="width: 80px">x: </td><td><b>'+eltop+'px</b></td></tr>';
        atq += '<tr><td style="width: 80px">y: </td><td><b>'+elleft+'px</b></td></tr>';
        atq += '</table>';
        $(target).parent().before('<div id="atq" style="top: '+elbot+'px; left: '+elleft+'px; padding: 10px; background: '+atqcolor+'; color: #FFF; position: fixed; z-index: 999; width: 300px; border: 2px solid '+atqcolor+';">'+atq+'</div>');
      }
    });
  }

  $(document).on('keyup',function(e) {
    if (e.keyCode == 27) { 
      removeBorders();
    }   // esc
  });

  $('#atq').on('blur',function(e) {
    removeBorders();
  });
 
  function removeBorders(){
    $('.atq_highlight').removeClass('atq_highlight');
    $('#atq').remove();
  }

  function rgb2hex(rgb){
    var old_color = rgb;
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : old_color;
  }

});
