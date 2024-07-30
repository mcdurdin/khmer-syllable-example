(function(){var f;if(!(!((f=keyman==null?void 0:keyman.ui)===null||f===void 0)&&f.name))try{if(i=keyman,r=i.util,h=i.debug,r.isTouchDevice())throw"";v=function(){function s(){var e=this;this.name="float",this.KeyboardSelector=null,this.outerDiv=null,this.innerDiv=null,this.oskButton=null,this.kbdIcon=null,this.selecting=!1,this.updateList=!0,this.updateTimer=0,this.floatRight=!1,this.initialized=!1,this.initTimer=0,this.toggleOSK=function(){i.activatingUI(!0);var o=i.osk;return o&&o.show&&(o.isEnabled()?o.hide():o.show(!0)),window.event&&(window.event.returnValue=!1),i.focusLastActiveElement(),i.activatingUI(!1),!1},this.initialize=function(){if(e.initTimer&&(window.clearTimeout(e.initTimer),e.initTimer=null),!i.initialized){e.initTimer=window.setTimeout(e.initialize,50);return}if(!(e.initialized||r.isTouchDevice())){var o=r.getOption("resources")+"ui/float/";e.outerDiv=r.createElement("div"),e.innerDiv=r.createElement("div"),e.kbdIcon=r.createElement("img"),e.outerDiv.innerHTML="<a href='http://keyman.com/web/' target='KeymanWebHelp'><img src='"+o+"kmicon.gif' border='0' style='padding: 0px 2px 0 1px; margin:0px;' title='KeymanWeb' alt='KeymanWeb' /></a>";var t=e.outerDiv.style;t.backgroundColor="white",t.border="solid 1px black",t.position="absolute",t.height="18px",t.font="bold 8pt sans-serif",t.display="none",t.textAlign="left",t.overflow="hidden",r.attachDOMEvent(e.outerDiv,"mousedown",e._SelectorMouseDown),r.attachDOMEvent(e.outerDiv,"mouseover",e._SelectorMouseOver),r.attachDOMEvent(e.outerDiv,"mouseout",e._SelectorMouseOut),e.registerEvents(),e.kbdIcon.src=o+"kbdicon.gif",e.kbdIcon.title="Display visual keyboard",e.oskButtonState(!1);var n=r.createElement("div");e.oskButton=n,n.onclick=e.toggleOSK,n.appendChild(e.kbdIcon),e.innerDiv.appendChild(n),e.outerDiv.appendChild(e.innerDiv),document.body.appendChild(e.outerDiv),e.KeyboardSelector=r.createElement("select"),t=e.KeyboardSelector.style,t.font="8pt sans-serif",t.backgroundColor="#f3e5de",t.border="solid 1px #7B9EBD",t.height="16px",t.margin="1px 2px 0px 2px",t.left="20px",t.top="0px",t.position="absolute",t.maxWidth="150px",r.attachDOMEvent(e.KeyboardSelector,"change",e.SelectKeyboardChange),r.attachDOMEvent(e.KeyboardSelector,"blur",e.SelectBlur),e.innerDiv.appendChild(e.KeyboardSelector);var a=r.getOption("ui"),l="(System keyboard)";a&&typeof a=="object"&&(typeof a.position=="string"&&a.position=="right"&&(e.floatRight=!0),typeof a.default=="string"&&(l=a.default));var d=r.createElement("option");d.value="-",d.innerHTML=l,e.KeyboardSelector.appendChild(d),d=null,e.initialized=!0,e.updateKeyboardList()}},this._UnloadUserInterface=function(){e.KeyboardSelector=e.innerDiv=e.outerDiv=e.kbdIcon=null},this.updateKeyboardList=function(){if(e.updateList){e.initialized||e.initialize();for(var o=e.KeyboardSelector.getElementsByTagName("OPTION"),t=o.length;t>1;t--)e.KeyboardSelector.removeChild(o[t-1]);for(var n=i.getKeyboards(),a=0;a<n.length;a++){var l=r.createElement("option");if(l.value=n[a].InternalName+":"+n[a].LanguageCode,l.innerHTML=n[a].Name.replace(/\s?keyboard/i,""),n[a].LanguageName){var d=n[a].LanguageName;d=d.split(",")[0],n[a].Name.search(d)==-1&&(l.innerHTML=d+" ("+l.innerHTML+")")}e.KeyboardSelector.appendChild(l),l=null}}e.updateList=!1;var u=i.getSavedKeyboard().split(":");u.length<2&&(u[1]=""),e.updateMenu(u[0],u[1]),i.getLastActiveElement()&&(e.HideInterface(),e.ShowInterface())},this.updateMenu=function(o,t){var n=0;if(!!e.initialized){var a=o;if(t!=""&&(a+=":"+t),o=="")e.KeyboardSelector.selectedIndex=0;else{var l=e.KeyboardSelector.getElementsByTagName("option");for(n=0;n<l.length;n++){var d=l[n].value;if(t==""&&(d=d.split(":")[0]),d==a){e.KeyboardSelector.selectedIndex=n;break}}}}},this.oskButtonState=function(o){var t=e.kbdIcon.style;t.width="24px",t.height="13px",t.top="1px",t.verticalAlign="bottom",t.padding="2px 2px 1px 2px",t.position="absolute",t.border=o?"inset 1px #808080":"none",t.background=o?"#f7e7de":"white",t.display="block",e.initialized&&(e.oskButton.style.display="block")},this._SelectorMouseDown=function(o){i.activatingUI&&i.activatingUI(1)},this._SelectorMouseOver=function(o){i.activatingUI&&i.activatingUI(1)},this._SelectorMouseOut=function(o){i.activatingUI&&i.activatingUI(0)},this.SelectKeyboardChange=function(o){if(i.activatingUI(!0),e.KeyboardSelector.value!="-"){var t=e.KeyboardSelector.selectedIndex,n=e.KeyboardSelector.options[t].value.split(":");i.setActiveKeyboard(n[0],n[1])}else i.setActiveKeyboard("");i.focusLastActiveElement(),i.activatingUI(!1),e.selecting=!0},this.SelectBlur=function(o){e.selecting||i.focusLastActiveElement(),e.selecting=!1},this.ShowInterface=function(o,t){if(!!e.initialized){var n=e.outerDiv.style;o&&t&&(n.left=o+"px",n.top=t+"px"),n.display="block",e.kbdIcon.style.left=e.KeyboardSelector.offsetWidth+24+"px",e.addButtonOSK(),e.updateMenu(i.getActiveKeyboard(),i.getActiveLanguage())}},this.HideInterface=function(){!e.initialized||(e.outerDiv.style.display="none")},this.addButtonOSK=function(){if(e.oskButton!=null)if(i.isCJK()||e.KeyboardSelector.selectedIndex==0)e.oskButton.style.display="none",e.outerDiv.style.width=e.KeyboardSelector.offsetWidth+30+"px";else{e.oskButton.style.display="block";var o=i.osk;o?e.oskButtonState(o.isEnabled()):e.oskButtonState(!1),e.outerDiv.style.width=e.KeyboardSelector.offsetWidth+56+"px"}},this._Resize=function(o){if(e.outerDiv.style.display=="block"){var t=i.getLastActiveElement();e.floatRight?e.ShowInterface(r.getAbsoluteX(t)+t.offsetWidth+1,r.getAbsoluteY(t)+1):e.ShowInterface(r.getAbsoluteX(t)+1,r.getAbsoluteY(t)+t.offsetHeight+1)}return!0}}return s.prototype.shutdown=function(){var e=this.outerDiv;e&&e.parentNode.removeChild(e),this._UnloadUserInterface(),window.removeEventListener&&window.removeEventListener("resize",this._Resize,!1)},s.prototype.registerEvents=function(){var e=this;i.addEventListener("keyboardregistered",function(t){e.updateList=!0,e.updateTimer&&clearTimeout(e.updateTimer),e.updateTimer=window.setTimeout(e.updateKeyboardList,200)}),i.addEventListener("keyboardloaded",function(t){var n=i.getSavedKeyboard().split(":");n.length>1&&e.updateMenu(n[0],n[1])}),i.addEventListener("keyboardchange",function(t){e.updateMenu(t.internalName,t.languageCode),e.addButtonOSK()});var o=i.osk;!o||(o.addEventListener("show",function(t){return e.addButtonOSK(),t}),o.addEventListener("hide",function(t){e.initialized&&e.oskButtonState(!1)}))},s}(),c=i.ui=new v,i.addEventListener("controlfocused",function(s){return(s.activeControl==null||s.activeControl._kmwAttachment)&&(c.floatRight?c.ShowInterface(r.getAbsoluteX(s.target)+s.target.offsetWidth+1,r.getAbsoluteY(s.target)+1):c.ShowInterface(r.getAbsoluteX(s.target),r.getAbsoluteY(s.target)-parseInt(r.getStyleValue(c.outerDiv,"height"),10)-2)),!0}),i.addEventListener("controlblurred",function(s){return s.event&&(s.isActivating||c.HideInterface()),!0}),window.addEventListener&&window.addEventListener("resize",c._Resize,!1),c.initialize()}catch(s){}var i,r,h,v,c;})();
//# sourceMappingURL=kmwuifloat.js.map
