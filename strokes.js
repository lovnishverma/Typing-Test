var _0x1d6e07 = _0x231a92(this, function () {
  var _0x4d635b;
  try {
    var _0x39b689 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4d635b = _0x39b689();
  } catch (_0x37b10a) {
    _0x4d635b = window;
  }
  var _0xcf8198 = _0x4d635b.console = _0x4d635b.console || {};
  var _0x6226c7 = ["log", "warn", 'info', "error", 'exception', "table", "trace"];
  for (var _0x15edc7 = 0; _0x15edc7 < _0x6226c7.length; _0x15edc7++) {
    var _0x3f2092 = _0x231a92.constructor.prototype.bind(_0x231a92);
    var _0x8a0283 = _0x6226c7[_0x15edc7];
    var _0x5bf76b = _0xcf8198[_0x8a0283] || _0x3f2092;
    _0x3f2092.__proto__ = _0x231a92.bind(_0x231a92);
    _0x3f2092.toString = _0x5bf76b.toString.bind(_0x5bf76b);
    _0xcf8198[_0x8a0283] = _0x3f2092;
  }
});
function favTutorial() {
  var _0x372c59 = {
    eraft: "words",
    xLWKc: "mistakes",
    wbNAK: "percentage",
    bzgiv: "leftmistakes",
    oTVqd: "netspeed"
  };
  _0x372c59.vWoBJ = "qualify";
  _0x372c59.ySdat = function (_0x16f05b, _0x4a0788) {
    return _0x16f05b < _0x4a0788;
  };
  _0x372c59.CPxPk = function (_0x265a9a, _0x13fa24) {
    return _0x265a9a == _0x13fa24;
  };
  _0x372c59.YbhHN = "5|2|1|4|0|3";
  _0x372c59.qXqwq = "firstButton";
  _0x372c59.Eimjk = 'misTake';
  _0x372c59.AbLpj = "errorstrokescontainer";
  _0x372c59.wnbHS = 'none';
  _0x372c59.LodIc = "secondButton";
  _0x372c59.wyKkK = "errorStrokes";
  _0x372c59.PUOvc = "mistakescontainer";
  _0x372c59.yCBJW = function (_0x6159b1, _0x2dbc81) {
    return _0x6159b1 == _0x2dbc81;
  };
  _0x372c59.lFihT = "errorstrokes";
  _0x372c59.RLgft = function (_0x3d3c67, _0x6fe9b3) {
    return _0x3d3c67 !== _0x6fe9b3;
  };
  _0x372c59.BnklS = "CBeMB";
  _0x372c59.Lobrx = "5|4|1|0|2|3";
  var _0x309d2a = ["words", "mistakes", "percentage", "leftmistakes", "penalty", "leftwords", "netspeed", _0x372c59.vWoBJ];
  for (var _0x34dd43 = 0; _0x34dd43 < _0x309d2a.length; _0x34dd43++) {
    document.getElementById(_0x309d2a[_0x34dd43]).innerHTML = '';
  }
  var _0x5b8c92 = document.getElementsByName("select");
  for (_0x34dd43 = 0; _0x372c59.ySdat(_0x34dd43, _0x5b8c92.length); _0x34dd43++) {
    if (_0x5b8c92[_0x34dd43].checked) {
      var _0x37cc77 = _0x5b8c92[_0x34dd43].value;
    }
  }
  if (_0x372c59.CPxPk(_0x37cc77, "mistakes")) {
    var _0x33da40 = _0x372c59.YbhHN.split('|');
    var _0x380421 = 0;
    while (true) {
      switch (_0x33da40[_0x380421++]) {
        case '0':
          document.getElementById(_0x372c59.qXqwq).style.display = 'block';
          continue;
        case '1':
          document.getElementById(_0x372c59.Eimjk).style.display = 'block';
          continue;
        case '2':
          document.getElementById(_0x372c59.AbLpj).style.display = _0x372c59.wnbHS;
          continue;
        case '3':
          document.getElementById(_0x372c59.LodIc).style.display = _0x372c59.wnbHS;
          continue;
        case '4':
          document.getElementById(_0x372c59.wyKkK).style.display = "none";
          continue;
        case '5':
          document.getElementById(_0x372c59.PUOvc).style.display = "none";
          continue;
      }
      break;
    }
  } else {
    if (_0x372c59.yCBJW(_0x37cc77, _0x372c59.lFihT)) {
      if (_0x372c59.RLgft(_0x372c59.BnklS, _0x372c59.BnklS)) {
        var _0x5c9107 = _0x1487a8 ? function () {
          if (_0x55a7c0) {
            var _0x1e3795 = _0x45e673.apply(_0x5d9cdd, arguments);
            _0x4c37c5 = null;
            return _0x1e3795;
          }
        } : function () {};
        _0x466f68 = false;
        return _0x5c9107;
      } else {
        var _0x1dad04 = _0x372c59.Lobrx.split('|');
        var _0x45a77d = 0;
        while (true) {
          switch (_0x1dad04[_0x45a77d++]) {
            case '0':
              document.getElementById(_0x372c59.wyKkK).style.display = "block";
              continue;
            case '1':
              document.getElementById("misTake").style.display = _0x372c59.wnbHS;
              continue;
            case '2':
              document.getElementById(_0x372c59.qXqwq).style.display = 'none';
              continue;
            case '3':
              document.getElementById(_0x372c59.LodIc).style.display = 'block';
              continue;
            case '4':
              document.getElementById(_0x372c59.AbLpj).style.display = _0x372c59.wnbHS;
              continue;
            case '5':
              document.getElementById("mistakescontainer").style.display = _0x372c59.wnbHS;
              continue;
          }
          break;
        }
      }
    }
  }
}
function compare2() {
  if (document.getElementById("inputfield3").value.length && document.getElementById("inputfield1").value.length != 0) {
    document.getElementById("mistakescontainer").style.display = 'none';
    document.getElementById("errorstrokescontainer").style.display = 'grid';
    var _0xfd69a3 = parseInt(document.getElementById("inputfield1").value);
    var _0x4f7255 = parseInt(document.getElementById("inputfield3").value);
    if (_0xfd69a3 > _0x4f7255) {
      document.getElementById("totalstrokes").innerHTML = _0xfd69a3;
      document.getElementById("totalerrorstrokes").innerHTML = _0x4f7255;
      document.getElementById("totalstrokeswords").innerHTML = Math.round(_0xfd69a3 / 5);
      document.getElementById("totalstrokeswordsbottom").innerHTML = _0xfd69a3 + '/5';
      document.getElementById("totalerrorstrokesmistakes").innerHTML = Math.round(_0x4f7255 / 5);
      document.getElementById("totalerrorstrokesmistakesbottom").innerHTML = _0x4f7255 + '/5';
      document.getElementById("totalerrorstrokesmistakesexempted").innerHTML = Math.round(0.05 * (_0xfd69a3 / 5));
      document.getElementById("totalerrorstrokesmistakesexemptedbottom").innerHTML = "5% of " + Math.round(_0xfd69a3 / 5);
      if (_0x4f7255 / 5 < 0.05 * (_0xfd69a3 / 5)) {
        var _0x85ba50 = 0;
        document.getElementById("leftmistakesstrokes").innerHTML = '0';
        document.getElementById("leftmistakesstrokesbottom").innerHTML = "No Penalty";
      } else {
        var _0x85ba50 = Math.round(_0x4f7255 / 5 - 0.05 * (_0xfd69a3 / 5));
        document.getElementById("leftmistakesstrokes").innerHTML = Math.round(_0x4f7255 / 5 - 0.05 * (_0xfd69a3 / 5));
        document.getElementById("leftmistakesstrokesbottom").innerHTML = Math.round((_0x4f7255 / 5).toFixed(1)) + " - " + Math.round(0.05 * (_0xfd69a3 / 5));
      }
      var _0x187929 = ((_0xfd69a3 / 5 - _0x4f7255 / 5) / (_0xfd69a3 / 5) * 100).toFixed(1);
      if (_0x187929 > 0) {
        document.getElementById("accuracy2").innerHTML = _0x187929;
        document.getElementById("accuracy2bottom").innerHTML = '((' + Math.round(_0xfd69a3 / 5) + " - " + Math.round(_0x4f7255 / 5) + ") &#247; " + Math.round(_0xfd69a3 / 5) + ") x " + "100";
      }
      document.getElementById("penaltystrokes").innerHTML = _0x85ba50 * 2;
      document.getElementById("penaltystrokesbottom").innerHTML = _0x85ba50 + " x 2";
      document.getElementById("totalleftstrokes").innerHTML = Math.round(_0xfd69a3 / 5) - _0x85ba50 * 2;
      document.getElementById("totalleftstrokesbottom").innerHTML = Math.round(_0xfd69a3 / 5) + " - " + _0x85ba50 * 2;
      var _0x4b62c8 = (_0xfd69a3 / 5 - _0x85ba50 * 2).toFixed(0) / 10;
      document.getElementById("netspeedstrokes").innerHTML = _0x4b62c8;
      document.getElementById("netspeedstrokes2").innerHTML = _0x4b62c8;
      document.getElementById("netspeedstrokesbottom").innerHTML = Math.round(_0xfd69a3 / 5) - _0x85ba50 * 2 + "/10";
      if (_0x4b62c8 >= 29.5 && _0x4b62c8 < 30) {
        document.getElementById("qualify2").innerHTML = "50/50 Chance";
        document.getElementById("qualify2").setAttribute("style", "color:green;font-weight:bold;");
      } else {
        if (_0x4b62c8 >= 30) {
          document.getElementById("qualify2").innerHTML = "QUALIFIED";
          document.getElementById("qualify2").setAttribute("style", "color:green;font-weight:bold;");
        } else {
          document.getElementById("qualify2").innerHTML = "NOT QUALIFIED";
          document.getElementById('qualify2').setAttribute("style", "color:red;font-weight:bold;white-space: nowrap; ");
        }
      }
    } else {
      document.getElementById('leftwords').innerHTML = "Not Applicable";
      var _0x3a8b70 = ['words', "mistakes", "percentage", "leftmistakes", 'penalty', "netspeed", "qualify"];
      for (var _0x4a45f3 = 0; _0x4a45f3 < _0x3a8b70.length; _0x4a45f3++) {
        document.getElementById(_0x3a8b70[_0x4a45f3]).innerHTML = '';
      }
    }
  }
}
function compare() {
  if (document.getElementById("inputfield2").value.length && document.getElementById("inputfield1").value.length != 0) {
    document.getElementById("mistakescontainer").style.display = "grid";
    document.getElementById("errorstrokescontainer").style.display = "none";
    var _0x39e6b0 = parseInt(document.getElementById("inputfield1").value);
    var _0x380ccd = parseInt(document.getElementById("inputfield2").value);
    var _0x333a62 = Math.round(_0x39e6b0 / 5);
    var _0x508506 = Math.round(0.05 * _0x333a62);
    if (_0x380ccd < _0x508506) {
      var _0xf4d70b = 0;
      document.getElementById("leftmistakes").innerHTML = '0';
      document.getElementById("leftmistakesbottom").innerHTML = "No Penalty";
    } else {
      var _0xf4d70b = (_0x380ccd - _0x508506).toFixed(1);
      document.getElementById("leftmistakes").innerHTML = Math.round(_0xf4d70b);
      document.getElementById("leftmistakesbottom").innerHTML = _0x380ccd + '-' + _0x508506;
    }
    var _0x69291f = _0xf4d70b * 2;
    var _0x33f717 = _0x333a62 - _0x69291f;
    var _0x297b80 = (_0x33f717 / 10).toFixed(1);
    var _0x49091c = ((_0x333a62 - _0x380ccd) / _0x333a62 * 100).toFixed(1);
    if (_0x49091c > 0) {
      document.getElementById("accuracy1").innerHTML = _0x49091c;
      document.getElementById("accuracy1bottom").innerHTML = '((' + Math.round(_0x333a62) + " - " + Math.round(_0x380ccd) + ") &#247; " + Math.round(_0x333a62) + ") x " + "100";
    }
    document.getElementById("words").innerHTML = _0x333a62;
    document.getElementById("wordsfromstrokes").innerHTML = _0x39e6b0 + '/5';
    document.getElementById("mistakespercentage").innerHTML = "5% of " + _0x333a62;
    document.getElementById("strokes").innerHTML = _0x39e6b0;
    document.getElementById("mistakes").innerHTML = _0x380ccd;
    document.getElementById("percentage").innerHTML = _0x508506;
    if (_0x69291f < _0x333a62) {
      document.getElementById("penaltybottom").innerHTML = Math.round(_0xf4d70b) + " x 2";
      document.getElementById('penalty').innerHTML = _0x69291f;
      document.getElementById('leftwords').innerHTML = _0x33f717;
      document.getElementById("leftwordsbottom").innerHTML = _0x333a62 + '-' + _0x69291f;
      document.getElementById("netspeed").innerHTML = _0x297b80;
      document.getElementById("netspeedmain").innerHTML = _0x297b80;
      document.getElementById("netspeedmainbottom").innerHTML = _0x33f717 + "/10";
      if (_0x297b80 >= 29.5 && _0x297b80 < 30) {
        document.getElementById('qualify').innerHTML = "50/50 Chance";
        document.getElementById("qualify").setAttribute('style', "color:green;font-weight:bold;");
      } else {
        if (_0x297b80 >= 30) {
          document.getElementById('qualify').innerHTML = 'QUALIFIED';
          document.getElementById('qualify').setAttribute('style', "color:green;font-weight:bold;");
        } else {
          document.getElementById("qualify").innerHTML = "NOT QUALIFIED";
          document.getElementById("qualify").setAttribute('style', "color:red;font-weight:bold;white-space: nowrap; ");
        }
      }
    } else {
      document.getElementById('leftwords').innerHTML = '0';
      document.getElementById('penalty').innerHTML = _0x69291f;
      document.getElementById('leftwords').innerHTML = "Error";
      document.getElementById("leftwordsbottom").innerHTML = "Error";
    }
  }
}
;
