$(document).ready(function(){
  // Allowed Environments. Not recommended for production, but I can't stop you. #evilYou
  var allowed_env = ['localhost','localdev.com'];
  // background color 
  var atqcolor = '#0094FF'; 
  
  if($.inArray(window.location.hostname,allowed_env)!=-1){
    $('*').mouseover(function(e){
      if(e.shiftKey==true){
        e.preventDefault();
        e.stopPropagation();

        /* Cleanup any previous inspectors/highlights, we don't want another Smith in the Matrix incident now do we? */
        $('.atq_highlight').removeClass('atq_highlight');
        $('#atq').remove();

        /* TARGET Acquired Captain. */ 
        var target = e.target || e.srcElement;
        var elt = $(target);
        
        /* Stalk the target a little */ 
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

        /* Stalk the target's family tree */ 
        var elparent = $(target).parent();
        elparent = elparent.attr('id') || '' + elparent.attr('class') || '';
        elparent = elparent.split(' ');
        for (var i = elparent.length - 1; i >= 0; i--) {
          elparent[i] = '.'+elparent[i];
        };
        elparent = elparent.join(' ');
        var elgparent = $(target).parent().parent();
        elgparent = '#'+elgparent.attr('id') || '.' + elgparent.attr('class') || '';
        elgparent = elgparent.replace('#undefined','');
        elgparent = elgparent.replace('.undefined','');
        var elggparent = $(target).parent().parent().parent();
        elggparent = '#'+elggparent.attr('id') || '.' + elggparent.attr('class') || ''; 
        elggparent = elggparent.replace('#undefined','');
        elggparent = elggparent.replace('.undefined',''); 
        var elw = $(target)[0].offsetWidth;
        var elh = $(target)[0].offsetHeight;
        var elbgimg = $(target).css('background-image') || 'none';
        elbgimg = elbgimg.replace('url("http://','');
        elbgimg = elbgimg.replace('")','');
        elbgimg = elbgimg.replace('url(http://','');
        elbgimg = elbgimg.replace(')','');
        elbgimg = elbgimg.replace(window.location.host,'');
        var elbg = $(target).css('background-color').toUpperCase() || 'none';
        var elclr = $(target).css('color').toUpperCase() || '';
        var elmargin = $(target).css('margin');
        var elpad = $(target).css('padding');
        var elb = $(target).css('border');
        var ellh = $(target).css('line-height') || '';
        var ells = $(target).css('letter-spacing') || 0;
        
        var eltop = $(target).offset().top;
        var elleft = $(target).offset().left;
        var elbot = eltop+elh+15;
        
        /* Now we actually build the inspector display, includes the */ 
        var styles = '';
        styles += '<style type="text/css" class="atq_styles">';
          styles += ".atq_highlight{border: 2px solid "+atqcolor+"}";
          styles += "#atq table,#atq tbody,#atq tr,#atq td{font-size: 12px !important; padding: 0px !important; line-height: 18px !important; vertical-align: top !important; border-top: 0px !important; border: 0px}";
          styles += "#atq{font-family: sans-serif !important; padding: 10px; background: "+atqcolor+"; text-align: left; color: #FFF; border-radius: 5px; position: fixed; z-index: 999; width: 300px; top: "+elbot+"px; left: "+elleft+"px}";
          styles += '#atq .atq_title{margin: 0px; padding: 0px; color: #FFF; margin-top: 10px; margin-bottom: 10px; font-size: 16px}';
          styles += '#atq .atq-close{margin: 0px; padding: 0px; float: right; cursor: pointer; font-weight: bold}';
          styles += ".atq.triangle-border:before { content:''; position:absolute; bottom:-20px; left:40px; border-width: 20px 20px 0; border-style:solid; border-color: "+atqcolor+" transparent; display: block; width:0}";
          styles += ".atq.triangle-border:after { content:''; position:absolute; bottom:-13px; left:47px; border-width:13px 13px 0; border-style:solid; border-color:"+atqcolor+" transparent; display:block; width:0}";
          styles += ".atq.triangle-border.top:before {top:-20px; bottom:auto; left:auto; right:260px; border-width:0 20px 20px}";
          styles += "#atq.triangle-border.top:after {top:-13px; bottom:auto; left:auto; right:267px; border-width:0 13px 13px}";
          styles += "#atq.triangle-border.top-right:before {top:-20px; bottom:auto; left:auto; right:40px; border-width:0 20px 20px}";
          styles += "#atq.triangle-border.top-right:after {top:-13px; bottom:auto; left:auto; right:47px; border-width:0 13px 13px}";
        styles += "</style>";
        $('.atq_styles').remove();
        $('head').prepend(styles);
        $(target).addClass('atq_highlight');
        var atq = '';
        atq += '<div class="atq-close" onclick="$(\'.atq_highlight\').removeClass(\'atq_highlight\'); $(\'#atq\').remove();">X</div>';
        atq += '<h3 class="atq_title"><em>Antiquated Inspector</em></h3>';
        atq += '<table width="100%">';
        atq += '<tr><td style="width: 85px">parent: </td><td><b>'+elggparent+' '+elgparent+' '+elparent+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">id/class: </td><td><b>'+elid+' '+elc+'</b></td></tr>';
        atq += '<tr><td style="width: 85px">tag/name: </td><td><b>&lt;'+eltag.toLowerCase()+'&gt; '+eln+'</b></td></tr>';  
        // divider
        atq += '<tr><td colspan="2"><div style="width: 100%; border-bottom: 1px solid #ccc; margin-top: -10px; margin-bottom: 10px;">&nbsp;</div><table><tr><td>';

        /////////
        atq += '<table width="100%">';
          atq += '<tr><td style="width: 93px">margin: </td><td style="width: 145px"><b>'+elmargin+'</b></td></tr>';
          atq += '<tr><td style="width: 93px">padding: </td><td style="width: 145px"><b>'+elpad+'</b><br /></td></tr>';
          atq += '<tr><td style="width: 93px;">border: </td><td style="width: 145px"><b>'+sanitize(elb)+'</b></td></tr>';
          atq += '<tr><td style="width: 93px;">line-height: </td><td><b>'+parseInt(ellh,10)+'px</b></td></tr>';
          atq += '<tr><td style="width: 93px;">letter-spacing: </td><td><b>'+parseInt(ells,10)+'px</b></td></tr>';
        atq += '</table>';
        atq += '</td><td>';
        atq += '<table width="100%">';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">width: </td><td style="padding-left: 10px;"><b>'+elw+'px</b><br /></td></tr>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">height: </td><td style="padding-left: 10px;"><b></b></td></tr>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;"></td><td style="padding-left: 10px;"><b>'+elh+'px</b></td></tr>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">x: </td><td style="padding-left: 10px;"><b>'+parseInt(eltop,10)+'px</b></td></tr>';
        atq += '<tr><td style="width: 30px; padding-left: 10px;">y: </td><td style="padding-left: 10px;"><b>'+parseInt(elleft,10)+'px</b></td></tr>';
        atq += '</table>';
        //////////
        atq += '</td></table></td></tr>';
        // divider
        atq += '<tr><td colspan="2"><div style="width: 100%; border-bottom: 1px solid #ccc; margin-top: -10px; margin-bottom: 10px;">&nbsp;</div><table>';
            atq += '<tr><td style="width: 85px">color: </td><td><span style="background: '+rgb2hex(elclr)+' !important; width: 22px;">&nbsp;&nbsp;&nbsp;</span>&nbsp;<b>'+sanitize(elclr).toUpperCase()+'</b></td>';
            atq += '<td style="padding-left: 20px">bg&nbsp;color: </td><td><span style="background-color: '+sanitize(elbg)+' !important; margin-top: 2px; margin-left: 20px; width: 22px;">&nbsp;&nbsp;&nbsp;</span>&nbsp;<b>'+sanitize(elbg).toUpperCase()+'</b></td>';
          atq += '</table></td></tr>';
          atq += '<tr><td style="width: 85px">bg&nbsp;image: </td><td><b><a style="color: #FFF; text-decoration: underline;" href="'+elbgimg+'" target="_blank">'+elbgimg+'</a></b></td></tr>';
          atq += '<tr><td colspan="2" style="text-align: right;"><a style="color: #FFF; font-weight: bold;" href="http://antiquated.in" target="_blank"><em>antiquated.in</em></a></td></tr>';
        atq += '</table>';
        /* Add the inspector to the target */ 
        $(target).parent().before('<div id="atq" class="atq triangle-border top">'+atq+'</div>');

        var winh = $(window).height();
        var winw = $(window).width();
        var half_winh = winh/2;
        var half_winw = winw/2;
        
        // if the target is huge, we just point to the top and stay on the interior for visibility
        if(elh > half_winh){
          $('#atq').css('top',eltop+40);
          $('#atq').css('left','45%');
        }

        // flip to top of element, if below half way, so we can still see it for lower elements
        var atqh = $('#atq').height();
        if(eltop > half_winh){
          $('#atq').removeClass('top');
          $('#atq').css('top',eltop-atqh-40);
          $('#atq').css('margin-left',50);
        }
        var atqw = $('#atq').width();
        // flip to other side if too far to the right
        if(elleft > half_winw){
          console.log(elleft+' ? '+half_winw);
          $('#atq').css('left',elleft-atqw);
          
        }

      }
    });
  }

  $('*').keyup(function(e) {
    if (e.keyCode == 27) { 
      removeBorders();
    }   // esc key pressed
  });

  $('#atq').blur(function(e) {
    removeBorders();
  });
 
  function removeBorders(){
    $('.atq_highlight').removeClass('atq_highlight');
    $('#atq').remove();
  }

  function sanitize(santext){
    if(santext.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)){
      if(santext && santext.length === 4){
        santext = "#" + ("0" + parseInt(santext[1],10).toString(16)).slice(-2) + ("0" + parseInt(santext[2],10).toString(16)).slice(-2) + ("0" + parseInt(santext[3],10).toString(16)).slice(-2)
      }else{ 
        santext = old_color;
      }
    }
    return santext;
  }

  function rgb2hex(rgb){
    var old_color = rgb;
    rgb = rgb.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : old_color;
  }
});
