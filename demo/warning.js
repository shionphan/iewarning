(function(window, undefined) {
  var fn = function(cb) {
    //Detect IE Version
    var device = {};
    var ua = navigator.userAgent;
    //IE Version
    if(ua.indexOf('MSIE') > -1){
      var iev = ua.match(/(MSIE)\s([\d_]+)/);
    }
    if(ua.indexOf("rv") > -1){
      var iev = ua.match(/(rv:)([\d_]+)/);
    }

    //Alert IE Name
    if (iev){
      device.os = 'IE';
      device.osVersion = iev[2];
    }

    //If ie11+ , return
    if(device.osVersion >= 11 || !iev)
      return

    var configObj = {};
    if(typeof(cb) == 'function') {
      configObj = cb();
    }
    //accessor method
    var LOC = function(key) {
      return configObj['localizations'][key];
    };

    var imgPath   = configObj['imgPath'];
    var msg1      = LOC('msg1');
    var msg2      = LOC('msg2');
    var msg2s      = LOC('msg2s');
    var msg3      = LOC('msg3');
    var vsg       = LOC('vsg');
    var br1       = LOC('br1');
    var br2       = LOC('br2');
    var br3       = LOC('br3');
    var br4       = LOC('br4');
    var br5       = LOC('br5');
    var br6       = LOC('br6');
    var url1      = LOC('url1');
    var url2      = LOC('url2');
    var url3      = LOC('url3');
    var url4      = LOC('url4');
    var url5      = LOC('url5');
    var url6      = LOC('url6');
    var nme1      = LOC('nme1');
    var nme2      = LOC('nme2');
    var nme3      = LOC('nme3');
    var nme4      = LOC('nme4');
    var nme5      = LOC('nme5');
    var nme6      = LOC('nme6');


  // oldschool from gcode
  var _body = document.getElementsByTagName('body')[0];
  var _d = document.createElement('div');
  var _l = document.createElement('div');
  var _h = document.createElement('h1');
  var _p1 = document.createElement('p');
  var _p2 = document.createElement('p');
  var _ul = document.createElement('ul');
  var _li1 = document.createElement('li');
  var _li2 = document.createElement('li');
  var _li3 = document.createElement('li');
  var _li4 = document.createElement('li');
  var _li5 = document.createElement('li');
  var _li6 = document.createElement('li');
  var _ico1 = document.createElement('span');
  var _ico2 = document.createElement('span');
  var _ico3 = document.createElement('span');
  var _ico4 = document.createElement('span');
  var _ico5 = document.createElement('span');
  var _ico6 = document.createElement('span');
  var _lit1 = document.createElement('em');
  var _lit2 = document.createElement('em');
  var _lit3 = document.createElement('em');
  var _lit4 = document.createElement('em');
  var _lit5 = document.createElement('em');
  var _lit6 = document.createElement('em');
  var _nm1 = document.createElement('i');
  var _nm2 = document.createElement('i');
  var _nm3 = document.createElement('i');
  var _nm4 = document.createElement('i');
  var _nm5 = document.createElement('i');
  var _nm6 = document.createElement('i');

  _body.appendChild(_l);
  _body.appendChild(_d);
  _d.appendChild(_h);
  _d.appendChild(_p1);
  _d.appendChild(_p2);
  _d.appendChild(_ul);
  _ul.appendChild(_li1);
  _ul.appendChild(_li2);
  _ul.appendChild(_li3);
  _ul.appendChild(_li4);
  _ul.appendChild(_li5);
  _ul.appendChild(_li6);
  _li1.appendChild(_ico1);
  _li2.appendChild(_ico2);
  _li3.appendChild(_ico3);
  _li4.appendChild(_ico4);
  _li5.appendChild(_ico5);
  _li6.appendChild(_ico6);
  _li1.appendChild(_lit1);
  _li2.appendChild(_lit2);
  _li3.appendChild(_lit3);
  _li4.appendChild(_lit4);
  _li5.appendChild(_lit5);
  _li6.appendChild(_lit6);
  _d.setAttribute('id','_d');
  _l.setAttribute('id','_l');
  _h.setAttribute('id','_h');
  _p1.setAttribute('id','_p1');
  _p2.setAttribute('id','_p2');
  _ul.setAttribute('id','_ul');
  _li1.setAttribute('id','_li1');
  _li2.setAttribute('id','_li2');
  _li3.setAttribute('id','_li3');
  _li4.setAttribute('id','_li4');
  _li5.setAttribute('id','_li5');
  _li6.setAttribute('id','_li6');
  _ico1.setAttribute('id','_ico1');
  _ico2.setAttribute('id','_ico2');
  _ico3.setAttribute('id','_ico3');
  _ico4.setAttribute('id','_ico4');
  _ico5.setAttribute('id','_ico5');
  _ico6.setAttribute('id','_ico6');
  _lit1.setAttribute('id','_lit1');
  _lit2.setAttribute('id','_lit2');
  _lit3.setAttribute('id','_lit3');
  _lit4.setAttribute('id','_lit4');
  _lit5.setAttribute('id','_lit5');
  _lit6.setAttribute('id','_lit6');
  var _width = document.documentElement.clientWidth;
  var _height = document.documentElement.clientHeight;
  var _dl = document.getElementById('_l');
  _dl.style.zIndex = "99999";
  _dl.style.width =  "100%";
  _dl.style.height = "100%";
  _dl.style.background = "url('"+imgPath+"bg-trans.png')";
  if(device.osVersion == 6){
    _dl.style.position = "absolute";
  }
  else{
    _dl.style.position = "fixed";
  }
  if(device.osVersion < 9){
    _p1.appendChild(document.createTextNode(msg2));
  }
  if(device.osVersion >=9){
    _p1.appendChild(document.createTextNode(msg2s));
  }
  _h.appendChild(document.createTextNode(msg1));
  _h.appendChild(document.createTextNode(device.os + device.osVersion));

  _dl.style.top = "0px";
  _dl.style.left = "0px";
  //_dl.style.filter = "alpha(opacity=50)";
  var _dd = document.getElementById('_d');
  _ddw = 800;
  _ddh = 300;
  _dd.style.zIndex = "100000";
  _dd.style.width = _ddw+"px";
  _dd.style.height = _ddh+"px";
  if(device.osVersion == 6){
    _dd.style.position = "absolute";
  }
  else{
    _dd.style.position = "fixed";
  }
  _dd.style.top = "50%";
  _dd.style.left = "50%";
  _dd.style.marginTop = -((_ddh+40)/2)+"px";
  _dd.style.marginLeft = -((_ddw+40)/2)+"px";
  _dd.style.padding = "20px";
  _dd.style.background = "#dff0d8";
  _dd.style.border = "1px solid #d6e9c6";
  _dd.style.fontFamily = "'Lucida Grande','Microsoft Yahei','Lucida Sans Unicode',Arial,Verdana,sans-serif";
  _dd.style.listStyleType = "none";
  _dd.style.color = "#3c763d";
  _dd.style.fontSize = "14px";
  _dd.style.boxShadow = "0 0 25px #ccc";
  var _hd = document.getElementById('_h');
  _hd.style.display = "block";
  _hd.style.fontSize = "1.5em";
  _hd.style.textAlign = "left";
  _hd.style.margin = "0 auto 0.5em auto";
  _hd.style.color = "#333";
  _hd.style.fontFamily = "Helvetica,'Microsoft Yahei',Arial,sans-serif";
  _hd.style.fontWeight = "bold";
  var _p1d = document.getElementById('_p1');
  _p1d.style.marginBottom = "1em";
  _p1d.style.fontSize = "1.2em";
  _p2.appendChild(document.createTextNode(msg3));
  var _p2d = document.getElementById('_p2');
  _p2d.style.marginBottom = "1em";
  var _uld = document.getElementById('_ul');
  _uld.style.listStyleImage = "none";
  _uld.style.listStylePosition = "outside";
  _uld.style.listStyleType = "none";
  _uld.style.margin = "0 px auto";
  _uld.style.padding = "0px";
  _uld.style.width = "800px";
  _uld.style.height = "170px";
  _uld.style.overflow = "hidden";
  var _li1d = document.getElementById('_li1');
  var _li2d = document.getElementById('_li2');
  var _li3d = document.getElementById('_li3');
  var _li4d = document.getElementById('_li4');
  var _li5d = document.getElementById('_li5');
  var _li6d = document.getElementById('_li6');
  var _li1ds = _li1d.style;
  var _li2ds = _li2d.style;
  var _li3ds = _li3d.style;
  var _li4ds = _li4d.style;
  var _li5ds = _li5d.style;
  var _li6ds = _li6d.style;
  _li1ds.cursor = _li2ds.cursor = _li3ds.cursor = _li4ds.cursor = _li5ds.cursor = _li6ds.cursor = "pointer";
  _li1d.onclick = function() {window.location = url1; };
   _li2d.onclick = function() {window.location = url2; };
   _li3d.onclick = function() {window.location = url3; };
   _li4d.onclick = function() {window.location = url4; };
   _li5d.onclick = function() {window.location = url5; };
   _li5d.onclick = function() {window.location = url6; };

  _li1ds.listStyle = _li2ds.listStyle = _li3ds.listStyle = _li4ds.listStyle = _li5ds.listStyle = _li6ds.listStyle = "none";
  _li1ds.display = _li2ds.display = _li3ds.display = _li4ds.display = _li5ds.display = _li6ds.display = "inline";
  //_li1ds.float = _li2ds.float = _li3ds.float = _li4ds.float = _li5ds.float = _li6ds.float = "left";
  _li1ds.width = _li2ds.width = _li3ds.width = _li4ds.width = _li5ds.width = _li6ds.width = "122px";
  _li1ds.height = _li2ds.height = _li3ds.height = _li4ds.height = _li5ds.height = _li6ds.height = "180px";
  _li1ds.overflow = _li2ds.overflow = _li3ds.overflow = _li4ds.overflow = _li5ds.overflow = _li6ds.overflow = "hidden";
  _li1ds.margin = _li2ds.margin = _li3ds.margin = _li4ds.margin = _li5ds.margin = _li6ds.margin = "0 10px 0 0";
  _li1ds.padding = _li2ds.padding = _li3ds.padding = _li4ds.padding = _li5ds.padding = _li6ds.padding = "0";
  var _ico1d = document.getElementById('_ico1');
  var _ico2d = document.getElementById('_ico2');
  var _ico3d = document.getElementById('_ico3');
  var _ico4d = document.getElementById('_ico4');
  var _ico5d = document.getElementById('_ico5');
  var _ico6d = document.getElementById('_ico6');
  var _ico1ds = _ico1d.style;
  var _ico2ds = _ico2d.style;
  var _ico3ds = _ico3d.style;
  var _ico4ds = _ico4d.style;
  var _ico5ds = _ico5d.style;
  var _ico6ds = _ico6d.style;
  _ico1ds.position = _ico2ds.position = _ico3ds.position = _ico4ds.position = _ico5ds.position = _ico6ds.position = "relative";
  _ico1ds.display = _ico2ds.display = _ico3ds.display = _ico4ds.display = _ico5ds.display = _ico6ds.display = "inline-block";
  _ico1ds.width = _ico2ds.width = _ico3ds.width = _ico4ds.width = _ico5ds.width = _ico6ds.width = "122px";
  _ico1ds.height = _ico2ds.height = _ico3ds.height = _ico4ds.height = _ico5ds.height = _ico6ds.height = "180px";
  _ico1ds.background = "transparent url('"+imgPath+"browsehappy-sprite.png') no-repeat scroll left top";
  _ico2ds.background = "transparent url('"+imgPath+"browsehappy-sprite.png') no-repeat scroll -128px top";
  _ico3ds.background = "transparent url('"+imgPath+"browsehappy-sprite.png') no-repeat scroll -252px top";
  _ico4ds.background = "transparent url('"+imgPath+"browsehappy-sprite.png') no-repeat scroll -376px top";
  _ico5ds.background = "transparent url('"+imgPath+"browsehappy-sprite.png') no-repeat scroll -500px top";
  _ico6ds.background = "transparent url('"+imgPath+"browsehappy-sprite.png') no-repeat scroll -624px top";

  _lit1.appendChild(document.createTextNode(nme1));
  _lit1.appendChild(document.createElement("<br />"));
  _lit1.appendChild(document.createTextNode(vsg));
  _lit1.appendChild(document.createTextNode(br1));

  _lit2.appendChild(document.createTextNode(nme2));
  _lit2.appendChild(document.createElement("<br />"));
  _lit2.appendChild(document.createTextNode(vsg));
  _lit2.appendChild(document.createTextNode(br2));

  _lit3.appendChild(document.createTextNode(nme3));
  _lit3.appendChild(document.createElement("<br />"));
  _lit3.appendChild(document.createTextNode(vsg));
  _lit3.appendChild(document.createTextNode(br3));

  _lit4.appendChild(document.createTextNode(nme4));
  _lit4.appendChild(document.createElement("<br />"));
  _lit4.appendChild(document.createTextNode(vsg));
  _lit4.appendChild(document.createTextNode(br4));

  _lit5.appendChild(document.createTextNode(nme5));
  _lit5.appendChild(document.createElement("<br />"));
  _lit5.appendChild(document.createTextNode(vsg));
  _lit5.appendChild(document.createTextNode(br5));

  _lit6.appendChild(document.createTextNode(nme6));
  _lit6.appendChild(document.createElement("<br />"));
  _lit6.appendChild(document.createTextNode(vsg));
  _lit6.appendChild(document.createTextNode(br6));

  _ico1.appendChild(_lit1);
  _ico1.appendChild(_lit1);
  _ico2.appendChild(_lit2);
  _ico3.appendChild(_lit3);
  _ico4.appendChild(_lit4);
  _ico5.appendChild(_lit5);
  _ico6.appendChild(_lit6);

  var _lit1d = document.getElementById('_lit1');
  var _lit2d = document.getElementById('_lit2');
  var _lit3d = document.getElementById('_lit3');
  var _lit4d = document.getElementById('_lit4');
  var _lit5d = document.getElementById('_lit5');
  var _lit6d = document.getElementById('_lit6');

  var _lit1ds = _lit1d.style;
  var _lit2ds = _lit2d.style;
  var _lit3ds = _lit3d.style;
  var _lit4ds = _lit4d.style;
  var _lit5ds = _lit5d.style;
  var _lit6ds = _lit6d.style;

  _lit1ds.position = _lit2ds.position = _lit3ds.position = _lit4ds.position = _lit5ds.position = _lit6ds.position = "absolute";
  _lit1ds.display = _lit2ds.display = _lit3ds.display = _lit4ds.display = _lit5ds.display = _lit6ds.display = "inline-block";
  _lit1ds.bottom = _lit2ds.bottom = _lit3ds.bottom = _lit4ds.bottom = _lit5ds.bottom = _lit6ds.bottom = "0";
  _lit1ds.width = _lit2ds.width = _lit3ds.width = _lit4ds.width = _lit5ds.width = _lit6ds.width = "122px";
  _lit1ds.color = _lit2ds.color = _lit3ds.color = _lit4ds.color = _lit5ds.color = _lit6ds.color = "#808080";
  _lit1ds.fontSize = _lit2ds.fontSize = _lit3ds.fontSize = _lit4ds.fontSize = _lit5ds.fontSize = _lit6ds.fontSize = "1em";
  _lit1ds.fontStyle = _lit2ds.fontStyle = _lit3ds.fontStyle = _lit4ds.fontStyle = _lit5ds.fontStyle = _lit6ds.fontStyle = "normal";
  _lit1ds.height = _lit2ds.height = _lit3ds.height = _lit4ds.height = _lit5ds.height = _lit6ds.height = "48px";
  _lit1ds.lineHeight = _lit2ds.lineHeight = _lit3ds.lineHeight = _lit4ds.lineHeight = _lit5ds.lineHeight = _lit6ds.lineHeight = "20px";
  _lit1ds.margin = _lit2ds.margin = _lit3ds.margin = _lit4ds.margin = _lit5ds.margin = _lit6ds.margin = "1px auto";
  _lit1ds.textAlign = _lit2ds.textAlign = _lit3ds.textAlign = _lit4ds.textAlign = _lit5ds.textAlign = _lit6ds.textAlign = "center";
  };
  
    
  //safely set it into global namespace.
  if(window.ieWarning === undefined || !ieWarning) {
    window.ieWarning = fn;
  }
  
  
})(window);
