(function(){var W;if(!(!((W=keyman==null?void 0:keyman.ui)===null||W===void 0)&&W.name))try{if(o=keyman,a=o.util,a.isTouchDevice())throw"";E=function(){function c(){var e=this;this.name="button",this.init=!1,this.initTimer=null,this.keyboardSelector=null,this.KeymanWeb_DefaultKeyboardHelp='<span style="font-size:7.5pt">KeymanWeb is not running.  Choose a keyboard from the list</span>',this._KeymanWeb_KbdList=null,this._KMWSel=null,this._IsHelpVisible=!1,this._DefaultKeyboardID="",this.updateTimer=0,this.updateList=!0,this._insertedElem=null,this._SelectKeyboard=function(t){var n="";if(typeof t=="object"){var i=null;typeof t.target!="undefined"&&t.target?i=t.target:typeof t.srcElement!="undefined"&&t.srcElement&&(i=t.srcElement),i&&(n=i.id)}var l=/^KMWSel_(.*)\$(.*)$/,r=l.exec(n),d="",s="";if(r!==null){s=r[1].split("$")[0],d=n.split("$")[1],e._KMWSel!=null&&(e._KMWSel.className="");var m=document.getElementById(n);m&&(m.className="selected"),e._KMWSel=m,o.setActiveKeyboard(s,d)}else s=null;o.focusLastActiveElement();var f=o.osk;return f&&f.isEnabled()&&f.show(!0),e._ShowKeyboardButton(s),!1},this._SelectorMouseDown=function(t){var n=o.getLastActiveElement();n?o.focusLastActiveElement():e._FocusFirstInput(),o.activatingUI&&o.activatingUI(1)},this._SelectorMouseUp=function(t){var n=o.getLastActiveElement();n?o.focusLastActiveElement():e._FocusFirstInput()},this._SelectorMouseOver=function(t){e._ShowSelected(),o.activatingUI&&o.activatingUI(1),document.getElementById("kmwico_li").className="sfhover",e._ShowKeyboardButton()},this._SelectorMouseOut=function(t){o.activatingUI&&o.activatingUI(0),document.getElementById("kmwico_li").className="sfunhover"},this._ShowKeymanWebKeyboard=function(){var t=document.getElementById("KMW_Keyboard"),n=o.osk;return t.className!="kmw_disabled"&&n&&n.show&&(n.isEnabled()?n.hide():n.show(!0)),window.event&&(window.event.returnValue=!1),o.focusLastActiveElement(),!1},this.initialize=function(){if(e.initTimer&&(window.clearTimeout(e.initTimer),e.initTimer=null),!o.initialized){e.initTimer=window.setTimeout(e.initialize,50);return}if(!(e.init||a.isTouchDevice())){e.init=!0,a.addStyleSheet(e._Appearance),e._KeymanWeb_KbdList=a.createElement("ul"),e._KeymanWeb_KbdList.id="KeymanWeb_KbdList";var t=document.getElementById("KeymanWebControl");if(!t){for(var n=document.getElementsByTagName("div"),i=0;i<n.length;i++)if(n[i].className=="KeymanWebControl"){t=n[i];break}}!t&&document.body!=null&&(t=document.createElement("DIV"),t.id="KeymanWebControl",document.body.insertBefore(t,document.body.firstChild),e._insertedElem=t);var l=a.getOption("resources")+"ui/button/";if(t){var r=document.createElement("DIV"),d=r.style;d.clear="both",t.parentNode.insertBefore(r,t.nextSibling);var s=a.createElement("img"),m=a.createElement("ul"),f=a.createElement("li");s.id="kmwico_a",s.src=l+"kmw_button.gif",s.onclick=function(){return!1},f.appendChild(s),f.id="kmwico_li",m.appendChild(f),m.id="kmwico",m.style.display="block",t.appendChild(m)}else return;if(!o.iOS){var K=a.createElement("li"),u=a.createElement("a"),w=a.createElement("img");w.src=l+"kbdicon.gif",u.appendChild(w);var C=document.createTextNode(" Hide Keyboard"),k=document.createTextNode(" Show Keyboard"),v=a.createElement("span");v.id="KMW_KbdVisibleMsg",v.appendChild(C),u.appendChild(v);var g=a.createElement("span");g.id="KMW_KbdHiddenMsg",g.appendChild(k),u.appendChild(g),u.onmousedown=e._ShowKeymanWebKeyboard,u.href="#",u.id="KMW_Keyboard",K.id="KMW_ButtonUI_KbdIcon",K.appendChild(u),e._KMWSel=u,e._KeymanWeb_KbdList.appendChild(K)}var y=a.createElement("li");y.id="KMW_ButtonUI_KbdList";var p=a.createElement("a");p.appendChild(document.createTextNode("(System keyboard)")),p.onclick=e._SelectKeyboard,p.href="#",p.id="KMWSel_$",p.className="selected",y.appendChild(p),e._KMWSel=p,e._KeymanWeb_KbdList.appendChild(y),e.updateKeyboardList(),document.getElementById("kmwico_li").appendChild(e._KeymanWeb_KbdList);var b=document.getElementById("kmwico_li");a.attachDOMEvent(b,"mousedown",e._SelectorMouseDown),a.attachDOMEvent(b,"mouseover",e._SelectorMouseOver),a.attachDOMEvent(b,"mouseout",e._SelectorMouseOut),a.attachDOMEvent(b,"mouseup",e._SelectorMouseUp),e.registerEvents(),o.focusLastActiveElement()}},this.updateKeyboardList=function(){if(e.updateList=!1,!!e.init){for(var t=e._KeymanWeb_KbdList.childNodes.length;t>2;t--)e._KeymanWeb_KbdList.removeChild(e._KeymanWeb_KbdList.childNodes[t-1]);var n=o.getKeyboards();if(n.length>0)for(var i=0;i<n.length;i++)e.registerKeyboard(n[i].InternalName,n[i].LanguageName,n[i].Name,n[i].LanguageCode)}},this._Appearance="\n#kmwico, #kmwkbd {\n  vertical-align: middle;\n}\n\n#KeymanWebControl {\n  float:left;\n}\n\n#KeymanWebControl * {\n  letter-spacing: 0px !important;\n  line-height: 1li !important;\n  white-space: nowrap !important;\n}\n\n#KeymanWebControl #kmwico img {\n  vertical-align: top;\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\n#KeymanWebControl #kmwico, #kmwico ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n#KeymanWebControl #kmwico_a {\n  display: block;\n  /* border: none !important; */\n  width: 22px; height: 23px;                                 /* sizes needed for kmw_button.gif */\n}\n\n#KeymanWebControl #kmwico li {\n  text-align: left;\n}\n\n#KeymanWebControl #kmwico li ul {\n  display: block;\n  position: absolute;\n  left: -5999px;\n  border: solid 2px #ad4a28;\n  background: white;\n  border-radius: 4px;\n  box-shadow: 4px 4px 2px #666;\n  z-index: 10011; /* above the osk */\n}\n\n#KeymanWebControl #kmwico li.sfunhover ul {\n  display: none; left: -5999px;\n}\n\n#KeymanWebControl #kmwico li:hover ul, #kmwico li.sfhover ul {\n  display: block;\n  left: auto;\n}\n\n#KeymanWebControl #kmwico ul li {\n  float: none;\n  padding: 0 !important;\n  margin: 0 !important;\n  width: 136px !important;\n}\n\n#KeymanWebControl #KMW_LanguageName {\n  font-weight: bold;\n}\n\n#KeymanWebControl #kmwico ul li a, #kmwico ul li a:visited {\n  display: block;\n  padding: 2px 4px !important;\n  border: none !important;\n  /* width: auto; */\n  color: #404040;\n  font-family: Tahoma,Verdana,Arial,sans-serif;\n  font-size: 8pt;\n  text-decoration: none;\n}\n\n#KeymanWebControl #kmwico ul li a.selected {\n  font-weight: bold;\n  color: black;\n}\n\n#KeymanWebControl #kmwico ul li a:hover {\n  color: white;\n  background-color: #ad4a28;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_disabled, #KeymanWebControl #kmwico ul li a.kmw_disabled:hover {\n  color: #c0c0c0; cursor: default;\n  background-color: white;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_show span#KMW_KbdHiddenMsg, #KeymanWebControl #kmwico ul li a.kmw_disabled span#KMW_KbdVisibleMsg {\n  display: none;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_show span#KMW_KbdVisibleMsg {\n  display: inline;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_hide span#KMW_KbdHiddenMsg {\n  display: inline;\n}\n\n#KeymanWebControl #kmwico ul li a.kmw_hide span#KMW_KbdVisibleMsg {\n  display: none;\n}\n\n#KeymanWebControl #kmwico ul li#KMW_ButtonUI_KbdIcon {\n  border-bottom: solid 1px #ad4a28;\n}\n"}return c.prototype._ShowSelected=function(){for(var e=o.getActiveKeyboard(),t=o.getActiveLanguage(),n=this._KeymanWeb_KbdList.childNodes,i=/^KMWSel_(.*)\$(.*)$/,l=1;l<n.length;l++)n[l].childNodes[0].className="";var r;for(r=2;r<n.length;r++){var d=i.exec(n[r].childNodes[0].id);if(d&&d[1]==e&&d[2]==t)break}r>=n.length&&(r=1),n[r].childNodes[0].className="selected"},c.prototype._FocusFirstInput=function(){var e=null,t=null,n=document.getElementsByTagName("input"),i=document.getElementsByTagName("textarea"),l;for(l=0;l<n.length&&n[l].type!="text";l++);l<n.length&&(e=n[l]),i.length>0&&(t=i[0]),!(!e&&!t)&&(e&&!t?e.focus():t&&!e?t.focus():e.offsetTop<t.offsetTop?e.focus():e.offsetTop>t.offsetTop?t.focus():e.offsetLeft<t.offsetLeft?e.focus():t.focus())},c.prototype._ShowKeyboardButton=function(e){var t=o.getActiveKeyboard(),n=document.getElementById("KMW_Keyboard");if(arguments.length>0&&(t=e),n)if(t==""||o.isCJK())n.className="kmw_disabled";else{var i=o.osk;n.className=i&&i.isEnabled()?"kmw_show":"kmw_hide"}},c.prototype.registerEvents=function(){var e=this,t=o.osk;!t||(t.addEventListener("show",function(n){var i=o.getLastActiveElement();return i&&(n.userLocated||(n.x=a.getAbsoluteX(i),n.y=a.getAbsoluteY(i)+i.offsetHeight)),e._ShowKeyboardButton(),n}),t.addEventListener("hide",function(n){if(arguments.length>0&&n.hiddenByUser){var i=document.getElementById("KMW_Keyboard");i&&(i.className="kmw_hide")}}))},c.prototype.shutdown=function(){var e=this._insertedElem;e&&e.parentNode.removeChild(e)},c.prototype.registerKeyboard=function(e,t,n,i){var l=a.createElement("li"),r=a.createElement("a"),d=n.replace(/\s?keyboard/i,"");if(t){var s=t.split(",")[0];n.search(s)==-1&&(d=s+" ("+d+")")}d.length>26&&(d=d.substr(0,24)+"\u2026"),r.appendChild(document.createTextNode(d)),r.onclick=this._SelectKeyboard,r.href="#",r.id="KMWSel_"+e+"$"+i,l.appendChild(r),this._KeymanWeb_KbdList.appendChild(l)},c}(),h=o.ui=new E,o.addEventListener("keyboardregistered",function(c){h.updateList=!0,h.updateTimer&&clearTimeout(h.updateTimer),h.updateTimer=window.setTimeout(h.updateKeyboardList,20)}),h.initialize()}catch(c){}var o,a,E,h;})();
//# sourceMappingURL=kmwuibutton.js.map
