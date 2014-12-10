// load jQuery if not already
window.jQuery || document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"><\/script>');

$(document).ready(function(){
  var env = window.location.hostname;
  var allowed_env = ['localhost','localdev.com','he-web-staging.herokuapp.com']; // local dev url
  var atqcolor = '#0094FF'; // atq background color code
  if($.inArray(env,allowed_env)!=-1){
    $('*').mousedown(function(e){
      if(e.shiftKey==true){
        $('.atq_highlight').removeClass('atq_highlight');
        e.preventDefault();
        e.stopPropagation();
        $('#atq').remove();
        var target = e.target || e.srcElement;
        var elt = $(target);
        var eltag = $(target)[0].tagName;
        var elid = ($(target)[0].id) || '';
        if(elid!=''){elid = '#'+elid;}
        var elc = $(target).attr('class') || '';
        elc = elc.split(' ');
        var remove_item = function (arr, value) {
          var b = '';
          for (b in arr) {
            if (arr[b] === value) {
                arr.splice(b, 1);
                break;
            }
          }
          return arr;
        }
        remove_item(elc,'atq_highlight');
        for (var i = elc.length - 1; i >= 0; i--) {
          elc[i] = '.'+elc[i];
        };
        elc = elc.join(' ');
        var eln = $(target)[0].name || '';
        var elparent = $(target).parent();
        elparent = elparent.attr('id') || '' + elparent.attr('class') || '';
        elparent = elparent.split(' ');
        for (var i = elparent.length - 1; i >= 0; i--) {
          elparent[i] = '.'+elparent[i];
        };
        elparent = elparent.join(' ');
        var elgparent = $(target).parent().parent();
        elgparent = elgparent.attr('id') || '.' + elgparent.attr('class') || '';    
        var elw = $(target)[0].offsetWidth;
        var elh = $(target)[0].offsetHeight;
        var elbgimg = $(target).css('background-image') || 'none';
        elbgimg = elbgimg.replace('url("http://','');
        elbgimg = elbgimg.replace('")','');
        elbgimg = elbgimg.replace('url(http://','');
        elbgimg = elbgimg.replace(')','');
        elbgimg = elbgimg.split('/');
        var elbgimg_index = elbgimg.length - 1;
        elbgimg = elbgimg[elbgimg_index];
        var elbg = $(target).css('background-color').toUpperCase() || 'none';
        var elclr = $(target).css('color').toUpperCase() || '';
        var elmargin = $(target).css('margin');
        var elpad = $(target).css('padding');
        var ellh = $(target).css('line-height') || '';
        var ells = $(target).css('letter-spacing') || 0;
        var eltop = $(target).offset().top;
        var elleft = $(target).offset().left;
        var elbot = eltop+elh+2;
        //console.log('id: '+elid + ' | class: ' + elc +' | name: '+ eln);
        $('head').append('<style type="text/css">.atq_highlight{border: 2px solid '+atqcolor+';}table,tr,td{font-size: 12px; padding: 0px; line-height: 18px; border:0px solid red;}</style>');
        $(target).addClass('atq_highlight');
        var atq = '';
        atq += '<div class="atq-close" style="float: right; cursor: pointer; font-weight: bold;" onclick="$(\'.atq_highlight\').removeClass(\'atq_highlight\'); $(\'#atq\').remove();">X</div>';
        atq += '<h3 style="color: #FFF; margin-top: -10px;"><em>Antiquated CSS Inspector</em></h3>';
        atq += '<table>';
        atq += '<tr><td style="width: 85px">grandparent: </td><td><b>'+elgparent+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">parent: </td><td><b>'+elparent+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">class: </td><td><b>'+elc+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">id: </td><td><b>'+elid+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">name: </td><td><b>'+eln+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">tag: </td><td><b>'+eltag+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">color: </td><td><span style="border: 1px solid black; background: '+rgb2hex(elclr)+' !important; width: 22px;">&nbsp;&nbsp;&nbsp;</span>&nbsp;<b>'+rgb2hex(elclr).toUpperCase()+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">bg&nbsp;color: </td><td><span style="border: 1px solid black; background-color: '+rgb2hex(elbg)+' !important; margin-top: 2px; width: 22px;">&nbsp;&nbsp;&nbsp;</span>&nbsp;<b>'+rgb2hex(elbg).toUpperCase()+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">bg&nbsp;image: </td><td><b>'+elbgimg+'</b></td></tr>';
        atq += '<tr><td colspan="2"><table><tr><td>';
        atq += '<table>';
        atq += '<tr><td style="width: 93px">margin: </td><td style="width: 145px"><b>'+elmargin+'</b></td></tr>';
        atq += '<tr><td style="width: 93px">padding: </td><td style="width: 145px"><b>'+elpad+'</b><br /></td></tr>';
        atq += '<tr><td style="width: 93px;">line-height: </td><td><b>'+parseInt(ellh,10)+'px</b></td></tr>';
        atq += '<tr><td style="width: 93px;">letter-spacing: </td><td><b>'+parseInt(ells,10)+'px</b></td></tr>';
        
        atq += '</table>';
        atq += '</td><td>';
        atq += '<table>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">height: </td><td style="padding-left: 10px;"><b>'+elh+'px</b></td></tr>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">width: </td><td style="padding-left: 10px;"><b>'+elw+'px</b><br /></td></tr>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">x: </td><td style="padding-left: 10px;"><b>'+parseInt(eltop,10)+'px</b></td></tr>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">y: </td><td style="padding-left: 10px;"><b>'+parseInt(elleft,10)+'px</b></td></tr>';
        atq += '</table>';
        atq += '</td></table></td></tr>';
        atq += '</table>';
        $(target).parent().before('<div id="atq" style="top: '+elbot+'px; left: '+elleft+'px; padding: 10px; background: '+atqcolor+'; text-align: left; color: #FFF; position: fixed; z-index: 999; width: 300px; border: 2px solid '+atqcolor+';">'+atq+'</div>');
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
