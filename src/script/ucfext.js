var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(b,e,a){b instanceof String&&(b=String(b));for(var c=b.length,d=0;d<c;d++){var g=b[d];if(e.call(a,g,d,b))return{i:d,v:g}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,e,a){b!=Array.prototype&&b!=Object.prototype&&(b[e]=a.value)};
$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(b,e,a,c){if(e){a=$jscomp.global;b=b.split(".");for(c=0;c<b.length-1;c++){var d=b[c];d in a||(a[d]={});a=a[d]}b=b[b.length-1];c=a[b];e=e(c);e!=c&&null!=e&&$jscomp.defineProperty(a,b,{configurable:!0,writable:!0,value:e})}};
$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,a){return $jscomp.findInternal(this,b,a).v}},"es6","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var b=0;return function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+b++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.asyncIterator;b||(b=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.arrayIterator=function(b){var e=0;return $jscomp.iteratorPrototype(function(){return e<b.length?{done:!1,value:b[e++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.iteratorFromArray=function(b,e){$jscomp.initSymbolIterator();b instanceof String&&(b+="");var a=0,c={next:function(){if(a<b.length){var d=a++;return{value:e(d,b[d]),done:!1}}c.next=function(){return{done:!0,value:void 0}};return c.next()}};c[Symbol.iterator]=function(){return c};return c};
$jscomp.polyfill("Array.prototype.keys",function(b){return b?b:function(){return $jscomp.iteratorFromArray(this,function(b){return b})}},"es6","es3");
Ext.ucf=function(){var b,e=[];return{showMessgeBox:function(a,c,d,b){b=b||Ext.Msg.OK;Ext.Msg.show({title:a,icon:Ext.MessageBox.INFO,msg:c,buttons:b,fn:function(a){"ok"!=a&&"yes"!=a||"function"!==typeof d||d()}})},initShowOrHideSections:function(){$(document).on("click",".section_area_title",function(){var a=$(this).attr("section_show_hide_area_id");a=$("#"+a);"none"==$(a).css("display")?Ext.ucf.showSection(this):Ext.ucf.hideSection(this)});$(document).find(".section_area_title").each(function(){var a=
$(this).attr("section_show_hide_area_id");$("#"+a);"show"!=$(this).attr("init_display")?Ext.ucf.hideSection(this):Ext.ucf.showSection(this)})},showSection:function(a){var c=$(a);a=$(c).attr("section_show_hide_area_id");c=$(c).find("img.section_arrow_img");a=$("#"+a);$(a).show("fast");$(c).attr("src","/images/section_area_down.png")},hideSection:function(a){var c=$(a);a=$(c).attr("section_show_hide_area_id");c=$(c).find("img.section_arrow_img");a=$("#"+a);$(a).hide("fast");$(c).attr("src","/images/section_area_right.png")},
appendLeftMenuChangeDelagate:function(a){e.push(a)},changeLeftMenu:function(){var a=jQuery(document.getElementById("mainArea"));a&&(a.hasClass("on")?(a.removeClass("on").addClass("off"),leftmenu_class="off"):(a.removeClass("off").addClass("on"),leftmenu_class="on"),Ext.Ajax.request({url:_vurl+"leftmenustatusset",method:"POST",params:{leftmenu_class:leftmenu_class}}),e&&Ext.each(e,function(a){a()}))},setNewMainBgType:function(a,c,d){var b=d.length;for(i=1;i<=b;i++){var e="BgType"+d[i-1];if(a.hasClass(e)){c=
"BgType"+d[(0<c?i==b?1:i+1:0>c?1==i?b:i-1:i)-1];a.removeClass(e).addClass(c);break}}},flowMsg:function(a,c){b||(b=Ext.DomHelper.insertFirst(document.body,{id:"msg-div"},!0));b.alignTo(document,"t-t");var d=String.format.apply(String,Array.prototype.slice.call(arguments,1));Ext.DomHelper.append(b,{html:['<div class="msg"><div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div><div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>',a,"</h3>",d,'</div></div></div><div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div></div>'].join("")},
!0).slideIn("t").pause(3).ghost("t",{remove:!0})},nvl:function(a){return a?a.toString():""},getFormValues:function(a){a=a.getValues(!0);return Ext.urlDecode(a.replace(/\+/g,"%20"))},htmlEscape:function(a){a=Ext.ucf.nvl(a).replace(/(\n|\r|\t)/g,"");var c={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"," ":" ","\u3000":"\u3000"};return a.replace(/<|>|&|'|"|\u3000|\s/g,function(a){return c[a]})},htmlEncode:function(a){return Ext.util.Format.htmlEncode(Ext.ucf.nvl(a)).replace(/\r\n/g,"<br />").replace(/(\n|\r)/g,
"<br />")},getNumberFormat:function(a){a+="";for(var c=a.indexOf(",",0);-1!=c;)a=a.substring(0,c)+a.substring(c+1,a.length),c=a.indexOf(",",0);var d=a.lastIndexOf(".");-1==d?(c="",a+=""):(c=a.substring(d,a.length)+"",a=a.substring(0,d)+"");Blanks=a.length%3;if(0!=Blanks)for(d=0;3-Blanks>d;d++)a=" "+a;FigureInteger=a.substring(0,3);d=2;"-"==a.charAt(2)&&(FigureInteger+=a.substring(3,6),d=4);for(;a.length>d;d++)0==d%3&&(FigureInteger=FigureInteger+","+a.substring(d,d+3));for(;" "==FigureInteger.charAt(0);)FigureInteger=
FigureInteger.substring(1,FigureInteger.length);return CommaNumber=FigureInteger+c},toJson:function(a){var c=[];Ext.each(a,function(a,b){b={};for(var d in a.fields.keys){var g=a.fields.keys[d],e=a.get(g);b[g]=e}c.push(b)});return c},getInnerText:function(a){return a&&a.firstChild?a.firstChild.nodeValue||"":""},setValidationCheckMessageHtml:function(a,c){var d=Ext.DomQuery,b=Ext.ucf.getInnerText(d.selectNode("ReturnCode",a));"0"==b?c&&c(a):"100"==b?Ext.ucf.setValidationMessages(d.jsSelect("ErrorInfo/Message",
a)):b&&""!=b&&Ext.MessageBox.alert(_msg.VMSG_MSG_ERROR,_msg.VMSG_MSG_SYSTEMERROR_OCCURED+" CODE="+b)},setValidationMessages:function(a){for(var c=Ext.DomQuery,d=0;d<a.length;d++){var b=a[d],e=Ext.ucf.getInnerText(b);b=Ext.ucf.getInnerText(c.selectNode("@validate",b));""!=b&&Ext.ucf.appendValidationMessage(b,e)}},getValidationMessages:function(a){for(var c=Ext.DomQuery,b="",e=0;e<a.length;e++){var f=a[e],h=Ext.ucf.getInnerText(f);""!=Ext.ucf.getInnerText(c.selectNode("@validate",f))&&(b+=h)}return b},
appendValidationMessage:function(a,c){var b=Ext.get("VC_"+a);b?b.dom.innerHTML+='<br/><span class="text_validate">'+c+"</span>":(a=Ext.getCmp(a))&&a.markInvalid&&a.markInvalid(c)},clearValidationMessage:function(a){var c=Ext.get("VC_"+a);c&&(c.dom.innerHTML="");(a=Ext.getCmp(a))&&a.clearInvalid&&a.clearInvalid("")},getErrorMessages:function(a){for(var c="",b=0;b<a.length;b++){var e=Ext.ucf.getInnerText(a[b]);c+=e+"<br/>"}return c},checkElements:function(a,c){if(a=document.getElementsByName(a))for(i=
0;i<a.length;i++){var b=a[i];b.checked=b.value==c?!0:!1}},getElementValue:function(a){a=document.getElementsByName(a);var c="";if(a&&0<a.length){var b="text";for(i=0;i<a.length;i++)if(a[i].type){b=a[i].type;break}var e=0;for(i=0;i<a.length;i++)switch(b){case "checkbox":case "radio":a[i].checked&&(c=c+(0<e?",":"")+(a[i].value?a[i].value:""),e++);break;default:c=c+(0<e?",":"")+(a[i].value?a[i].value:""),e++}}return c},replaceAll:function(a,b,d){return a.split(b).join(d)},dispUpdateMsg:function(a,b){var c=
Ext.DomQuery;"0"==a?Ext.ucf.flowMsg(_msg.SUCCESS,_msg.UPDATED,a):(b=Ext.ucf.getErrorMessages(c.jsSelect("ErrorInfo/Message",b)),Ext.ucf.flowMsg(_msg.FAILED,b,a))},dispUpdateMsgByReturnCode:function(a,b){var c=Ext.DomQuery;"0"==a?Ext.ucf.flowMsg(_msg.SUCCESS,_msg.UPDATED,a):"100"==a?(b=Ext.ucf.getValidationMessages(c.jsSelect("ErrorInfo/Message",b)),Ext.ucf.flowMsg(_msg.FAILED,b,a)):a&&""!=a&&Ext.ucf.flowMsg(_msg.VMSG_MSG_ERROR,"CODE={0}:"+_msg.VMSG_MSG_UPDATE_FAILED,a)},dispErrMsg:function(a){var b=
Ext.DomQuery,d=Ext.ucf.getInnerText(b.selectNode("ReturnCode",a));a=Ext.ucf.getErrorMessages(b.jsSelect("ErrorInfo/Message",a));d&&Ext.ucf.flowMsg(_msg.VMSG_MSG_ERROR,a,d)},dispSysErrMsg:function(a){a&&""!=a&&Ext.ucf.flowMsg(_msg.VMSG_MSG_ERROR,"CODE={0}:"+_msg.VMSG_MSG_SYSTEMERROR_OCCURED,a)},getHiddenHtml:function(a,b,d){return'<input type="hidden" name="'+a+"_"+b+'" value="'+escape(d)+'" >'},getTargetFieldValueList:function(a,b){for(var c=[],e=0,f;f=a[e];e++)c.push(f.get(b));return c.join(",")},
getUniqueIDList:function(a){return Ext.ucf.getTargetFieldValueList(a,"unique_id")},preSubmit:function(a){(a?new Ext.LoadMask(a,{msg:_msg.VMSG_MSG_ACCESSING}):new Ext.LoadMask(Ext.getBody(),{msg:_msg.VMSG_MSG_ACCESSING})).show()},delegateCheckValidation:function(a){},checkValidation:function(a,b,d,e,f){if(e&&""!=e){var c=function(b){var c="";if(void 0!=b.responseXML){var d=Ext.DomQuery;b=b.responseXML;c=Ext.ucf.getInnerText(d.selectNode("ReturnCode",b));"0"==c?(a.preVCMessage="",a.clearInvalid()):
"100"==c&&(c=Ext.ucf.getValidationMessages(d.jsSelect("ErrorInfo/Message",b)),a.preVCMessage=c,a.markInvalid(c))}else Ext.ucf.dispSysErrMsg(c)};b={UNIQUE_ID:b,RegistType:d,FieldID:a.name,FieldValue:a.getValue(),FieldDispName:a.fieldLabel};f&&($.extend(f,b),b=f);Ext.Ajax.request({url:e,method:"POST",params:b,success:c,failure:c})}},checkValidationByAutoCmd:function(a,b){return null},executeQuery:function(a,b,d,e){var c=function(a){void 0!=a.responseText&&""!=a.responseText?(a=jQuery.parseJSON(a.responseText),
"function"==typeof d&&d(a)):console.log(a)};"post"==(e||"POST").toLowerCase()?Ext.Ajax.request({url:a,method:"POST",params:b,success:c,failure:c}):Ext.Ajax.request({url:a,method:"GET",success:c,failure:c})},search:function(a,b,d,e,f){1==a?(a=function(a){void 0!=a.responseText&&""!=a.responseText?(a=jQuery.parseJSON(a.responseText),0==a.code?b.load({params:d(a.data),waitMsg:_msg.LOADING}):b.load({params:d(),waitMsg:_msg.LOADING}),b.baseParams=d()):Ext.ucf.dispSysErrMsg()},Ext.Ajax.request({url:e,method:"POST",
params:d(),success:a,failure:a})):(b.load({params:d(),waitMsg:_msg.LOADING}),b.baseParams=d())},searchLimitComboBox:function(a,b,d){d=d||{};var c=d.cookie_key||"F361D891",e=d.cookie_expire||365,h=d.cookie_path||location.pathname.split("/",3).join("/");a=a||[20,50,100];d=getCookie(c)||a[0];a=new Ext.form.ComboBox({mode:"local",store:a||[20,50,100],width:50,value:parseInt(d),forceSelection:!0,autoSelect:!1,triggerAction:"all",lastQuery:"",listeners:b||{}});a.addListener("select",function(a,b,d){setCookie(c,
a.value,e,h)});return a},resetComponents:function(a){if(a)for(var b=0;b<a.length;b++){var d=Ext.getCmp(a[b].id);d.reset();d.preValue&&(d.preValue=d.getValue())}},decodeUnicode:function(a){var b=Ext.ucf.decodeSurrogatePairs(Ext.ucf.fromCodePointString(a));b=Ext.ucf.fromCharCodeArray(b);return void 0==b?a:b},fromCodePointString:function(a){a=(" "+a).split(/[^0-9a-f]+(?:0[x])?/i);for(var b=[],d=0;d<a.length;d++){var e=parseInt(a[d],16);isNaN(e)||b.push(e)}return b},decodeSurrogatePairs:function(a){for(var b=
[],d=0,e=0;e<a.length;e++){var f=a[e];if(55296==(f&63488))if(f&1024){if(!d)return null;b.push(((d&1023)<<10|f&1023)+65536);d=0}else{if(d)return null;d=f}else{if(d)return null;b.push(f);d=0}}return b},fromCharCodeArray:function(a){return String.fromCharCode.apply(null,a)},dispUsePasswordCharacterList:function(){var a=new Ext.Panel({frame:!0,layout:"table",layoutConfig:{columns:1,tableAttrs:{style:{width:"100%"}}},defaults:{border:!1,collapsible:!1},items:[{xtype:"displayfield",value:'<font color="black">'+
_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_TYPE1+"</font>"},{xtype:"displayfield",value:'<font color="black">'+_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_TYPE2+"</font>"},{xtype:"displayfield",value:'<font color="black">'+_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_TYPE3+"</font>"},{xtype:"displayfield",value:'<font color="black">'+_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_TYPE4+"</font>"},{xtype:"displayfield",value:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">'+_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_TYPE5+
"</font>"},{xtype:"displayfield",value:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">'+_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_TYPE6+"</font>"},{xtype:"displayfield",value:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">'+_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_TYPE7+"</font>"}]});a=new Ext.Window({title:_msg.VMSG_INFO_PASSWORD_AVAILABLE_CHAR_LIST,layout:"fit",width:500,height:200,plain:!0,autoDestory:!0,items:a});a.show();a.dd.constrainTo(Ext.getBody())},
exportToCsv:function(a,b){var c=function(a){void 0!=a.responseText&&""!=a.responseText?(a=jQuery.parseJSON(a.responseText),0==a.code?Ext.ucf.downloadFile(a.data_key,6E5,f):f&&f.hide()):(Ext.ucf.dispSysErrMsg(),f&&f.hide())};void 0==a&&(a={});var e=_vurl+"asynccsvexport";if(b&&""!=b){var f=new Ext.LoadMask(Ext.get(b),{msg:_msg.VMSG_EXPORTING});f.show()}Ext.Ajax.request({url:e,method:"POST",params:a,success:c,failure:c})},downloadFile:function(a,b,d){var c=_vurl+"file/check",e=_vurl+"file/download?data_key="+
escape(a),h=function(a,b){b.stop();a&&a.hide()},k=(new Date).getTime();$.timer(1E3,function(f){var g=function(a){if(void 0!=a.responseText&&""!=a.responseText){var c=jQuery.parseJSON(a.responseText).code;"0"==c?(location.href=e,h(d,f)):"404"==c?(a=Math.floor((new Date).getTime()-k),0<=b&&a>b&&(Ext.ucf.flowMsg(_msg.FAILED,_msg.MSG_FAILED_FILE_EXPORT),h(d,f))):(h(d,f),Ext.ucf.dispSysErrMsg())}else h(d,f),Ext.ucf.dispSysErrMsg(c)};Ext.Ajax.request({url:c,method:"POST",params:{data_key:a},success:g,failure:g})})},
SubnetMaskList:[["",_msg.VMSG_SUBNETMASK],["/32","255.255.255.255 / 32"],["/31","255.255.255.254 / 31"],["/30","255.255.255.252 / 30"],["/29","255.255.255.248 / 29"],["/28","255.255.255.240 / 28"],["/27","255.255.255.224 / 27"],["/26","255.255.255.192 / 26"],["/25","255.255.255.128 / 25"],["/24","255.255.255.000 / 24"],["/23","255.255.254.000 / 23"],["/22","255.255.252.000 / 22"],["/21","255.255.248.000 / 21"],["/20","255.255.240.000 / 20"],["/19","255.255.224.000 / 19"],["/18","255.255.192.000 / 18"],
["/17","255.255.128.000 / 17"],["/16","255.255.000.000 / 16"],["/15","255.254.000.000 / 15"],["/14","255.252.000.000 / 14"],["/13","255.248.000.000 / 13"],["/12","255.240.000.000 / 12"],["/11","255.224.000.000 / 11"],["/10","255.192.000.000 / 10"],["/9","255.128.000.000 / 9"],["/8","255.000.000.000 / 8"],["/0","000.000.000.000 / 0"]],FileEncodingList:[["SJIS",_msg.VALUE_FILEENCODING_SJIS],["EUC",_msg.VALUE_FILEENCODING_EUC],["UTF8",_msg.VALUE_FILEENCODING_UTF8]],TimeZoneList:[["Pacific/Midway",_msg.TIMEZONE_PACIFIC_MIDWAY],
["Pacific/Niue",_msg.TIMEZONE_PACIFIC_NIUE],["Pacific/Pago_Pago",_msg.TIMEZONE_PACIFIC_PAGO_PAGO],["Pacific/Honolulu",_msg.TIMEZONE_PACIFIC_HONOLULU],["Pacific/Rarotonga",_msg.TIMEZONE_PACIFIC_RAROTONGA],["Pacific/Tahiti",_msg.TIMEZONE_PACIFIC_TAHITI],["Pacific/Marquesas",_msg.TIMEZONE_PACIFIC_MARQUESAS],["America/Anchorage",_msg.TIMEZONE_AMERICA_ANCHORAGE],["Pacific/Gambier",_msg.TIMEZONE_PACIFIC_GAMBIER],["America/Los_Angeles",_msg.TIMEZONE_AMERICA_LOS_ANGELES],["America/Tijuana",_msg.TIMEZONE_AMERICA_TIJUANA],
["America/Vancouver",_msg.TIMEZONE_AMERICA_VANCOUVER],["America/Whitehorse",_msg.TIMEZONE_AMERICA_WHITEHORSE],["Pacific/Pitcairn",_msg.TIMEZONE_PACIFIC_PITCAIRN],["America/Dawson_Creek",_msg.TIMEZONE_AMERICA_DAWSON_CREEK],["America/Denver",_msg.TIMEZONE_AMERICA_DENVER],["America/Edmonton",_msg.TIMEZONE_AMERICA_EDMONTON],["America/Hermosillo",_msg.TIMEZONE_AMERICA_HERMOSILLO],["America/Mazatlan",_msg.TIMEZONE_AMERICA_MAZATLAN],["America/Phoenix",_msg.TIMEZONE_AMERICA_PHOENIX],["America/Yellowknife",
_msg.TIMEZONE_AMERICA_YELLOWKNIFE],["America/Belize",_msg.TIMEZONE_AMERICA_BELIZE],["America/Chicago",_msg.TIMEZONE_AMERICA_CHICAGO],["America/Costa_Rica",_msg.TIMEZONE_AMERICA_COSTA_RICA],["America/El_Salvador",_msg.TIMEZONE_AMERICA_EL_SALVADOR],["America/Guatemala",_msg.TIMEZONE_AMERICA_GUATEMALA],["America/Managua",_msg.TIMEZONE_AMERICA_MANAGUA],["America/Mexico_City",_msg.TIMEZONE_AMERICA_MEXICO_CITY],["America/Regina",_msg.TIMEZONE_AMERICA_REGINA],["America/Tegucigalpa",_msg.TIMEZONE_AMERICA_TEGUCIGALPA],
["America/Winnipeg",_msg.TIMEZONE_AMERICA_WINNIPEG],["Pacific/Easter",_msg.TIMEZONE_PACIFIC_EASTER],["Pacific/Galapagos",_msg.TIMEZONE_PACIFIC_GALAPAGOS],["America/Bogota",_msg.TIMEZONE_AMERICA_BOGOTA],["America/Cayman",_msg.TIMEZONE_AMERICA_CAYMAN],["America/Grand_Turk",_msg.TIMEZONE_AMERICA_GRAND_TURK],["America/Guayaquil",_msg.TIMEZONE_AMERICA_GUAYAQUIL],["America/Havana",_msg.TIMEZONE_AMERICA_HAVANA],["America/Iqaluit",_msg.TIMEZONE_AMERICA_IQALUIT],["America/Jamaica",_msg.TIMEZONE_AMERICA_JAMAICA],
["America/Lima",_msg.TIMEZONE_AMERICA_LIMA],["America/Montreal",_msg.TIMEZONE_AMERICA_MONTREAL],["America/Nassau",_msg.TIMEZONE_AMERICA_NASSAU],["America/New_York",_msg.TIMEZONE_AMERICA_NEW_YORK],["America/Panama",_msg.TIMEZONE_AMERICA_PANAMA],["America/Port-au-Prince",_msg.TIMEZONE_AMERICA_PORT_MAU_MPRINCE],["America/Rio_Branco",_msg.TIMEZONE_AMERICA_RIO_BRANCO],["America/Toronto",_msg.TIMEZONE_AMERICA_TORONTO],["America/Caracas",_msg.TIMEZONE_AMERICA_CARACAS],["America/Antigua",_msg.TIMEZONE_AMERICA_ANTIGUA],
["America/Asuncion",_msg.TIMEZONE_AMERICA_ASUNCION],["America/Barbados",_msg.TIMEZONE_AMERICA_BARBADOS],["America/Boa_Vista",_msg.TIMEZONE_AMERICA_BOA_VISTA],["America/Campo_Grande",_msg.TIMEZONE_AMERICA_CAMPO_GRANDE],["America/Cuiaba",_msg.TIMEZONE_AMERICA_CUIABA],["America/Curacao",_msg.TIMEZONE_AMERICA_CURACAO],["America/Guyana",_msg.TIMEZONE_AMERICA_GUYANA],["America/Halifax",_msg.TIMEZONE_AMERICA_HALIFAX],["America/Manaus",_msg.TIMEZONE_AMERICA_MANAUS],["America/Martinique",_msg.TIMEZONE_AMERICA_MARTINIQUE],
["America/Port_of_Spain",_msg.TIMEZONE_AMERICA_PORT_OF_SPAIN],["America/Porto_Velho",_msg.TIMEZONE_AMERICA_PORTO_VELHO],["America/Puerto_Rico",_msg.TIMEZONE_AMERICA_PUERTO_RICO],["America/Santiago",_msg.TIMEZONE_AMERICA_SANTIAGO],["America/Santo_Domingo",_msg.TIMEZONE_AMERICA_SANTO_DOMINGO],["America/Thule",_msg.TIMEZONE_AMERICA_THULE],["Antarctica/Palmer",_msg.TIMEZONE_ANTARCTICA_PALMER],["Atlantic/Bermuda",_msg.TIMEZONE_ATLANTIC_BERMUDA],["America/St_Johns",_msg.TIMEZONE_AMERICA_ST_JOHNS],["America/Araguaina",
_msg.TIMEZONE_AMERICA_ARAGUAINA],["America/Bahia",_msg.TIMEZONE_AMERICA_BAHIA],["America/Belem",_msg.TIMEZONE_AMERICA_BELEM],["America/Cayenne",_msg.TIMEZONE_AMERICA_CAYENNE],["America/Fortaleza",_msg.TIMEZONE_AMERICA_FORTALEZA],["America/Godthab",_msg.TIMEZONE_AMERICA_GODTHAB],["America/Maceio",_msg.TIMEZONE_AMERICA_MACEIO],["America/Miquelon",_msg.TIMEZONE_AMERICA_MIQUELON],["America/Montevideo",_msg.TIMEZONE_AMERICA_MONTEVIDEO],["America/Paramaribo",_msg.TIMEZONE_AMERICA_PARAMARIBO],["America/Recife",
_msg.TIMEZONE_AMERICA_RECIFE],["America/Sao_Paulo",_msg.TIMEZONE_AMERICA_SAO_PAULO],["Antarctica/Rothera",_msg.TIMEZONE_ANTARCTICA_ROTHERA],["Atlantic/Stanley",_msg.TIMEZONE_ATLANTIC_STANLEY],["America/Noronha",_msg.TIMEZONE_AMERICA_NORONHA],["Atlantic/South_Georgia",_msg.TIMEZONE_ATLANTIC_SOUTH_GEORGIA],["America/Scoresbysund",_msg.TIMEZONE_AMERICA_SCORESBYSUND],["Atlantic/Azores",_msg.TIMEZONE_ATLANTIC_AZORES],["Atlantic/Cape_Verde",_msg.TIMEZONE_ATLANTIC_CAPE_VERDE],["Africa/Abidjan",_msg.TIMEZONE_AFRICA_ABIDJAN],
["Africa/Accra",_msg.TIMEZONE_AFRICA_ACCRA],["Africa/Bamako",_msg.TIMEZONE_AFRICA_BAMAKO],["Africa/Banjul",_msg.TIMEZONE_AFRICA_BANJUL],["Africa/Bissau",_msg.TIMEZONE_AFRICA_BISSAU],["Africa/Casablanca",_msg.TIMEZONE_AFRICA_CASABLANCA],["Africa/Conakry",_msg.TIMEZONE_AFRICA_CONAKRY],["Africa/Dakar",_msg.TIMEZONE_AFRICA_DAKAR],["Africa/El_Aaiun",_msg.TIMEZONE_AFRICA_EL_AAIUN],["Africa/Freetown",_msg.TIMEZONE_AFRICA_FREETOWN],["Africa/Lome",_msg.TIMEZONE_AFRICA_LOME],["Africa/Monrovia",_msg.TIMEZONE_AFRICA_MONROVIA],
["Africa/Nouakchott",_msg.TIMEZONE_AFRICA_NOUAKCHOTT],["Africa/Ouagadougou",_msg.TIMEZONE_AFRICA_OUAGADOUGOU],["Africa/Sao_Tome",_msg.TIMEZONE_AFRICA_SAO_TOME],["America/Danmarkshavn",_msg.TIMEZONE_AMERICA_DANMARKSHAVN],["Atlantic/Canary",_msg.TIMEZONE_ATLANTIC_CANARY],["Atlantic/Faroe",_msg.TIMEZONE_ATLANTIC_FAROE],["Atlantic/Reykjavik",_msg.TIMEZONE_ATLANTIC_REYKJAVIK],["Atlantic/St_Helena",_msg.TIMEZONE_ATLANTIC_ST_HELENA],["Etc/UTC",_msg.TIMEZONE_ETC_UTC],["Europe/Lisbon",_msg.TIMEZONE_EUROPE_LISBON],
["Africa/Algiers",_msg.TIMEZONE_AFRICA_ALGIERS],["Africa/Bangui",_msg.TIMEZONE_AFRICA_BANGUI],["Africa/Brazzaville",_msg.TIMEZONE_AFRICA_BRAZZAVILLE],["Africa/Ceuta",_msg.TIMEZONE_AFRICA_CEUTA],["Africa/Douala",_msg.TIMEZONE_AFRICA_DOUALA],["Africa/Kinshasa",_msg.TIMEZONE_AFRICA_KINSHASA],["Africa/Lagos",_msg.TIMEZONE_AFRICA_LAGOS],["Africa/Libreville",_msg.TIMEZONE_AFRICA_LIBREVILLE],["Africa/Luanda",_msg.TIMEZONE_AFRICA_LUANDA],["Africa/Malabo",_msg.TIMEZONE_AFRICA_MALABO],["Africa/Ndjamena",_msg.TIMEZONE_AFRICA_NDJAMENA],
["Africa/Niamey",_msg.TIMEZONE_AFRICA_NIAMEY],["Africa/Porto-Novo",_msg.TIMEZONE_AFRICA_PORTO_MNOVO],["Africa/Tunis",_msg.TIMEZONE_AFRICA_TUNIS],["Africa/Windhoek",_msg.TIMEZONE_AFRICA_WINDHOEK],["Europe/Amsterdam",_msg.TIMEZONE_EUROPE_AMSTERDAM],["Europe/Andorra",_msg.TIMEZONE_EUROPE_ANDORRA],["Europe/Belgrade",_msg.TIMEZONE_EUROPE_BELGRADE],["Europe/Berlin",_msg.TIMEZONE_EUROPE_BERLIN],["Europe/Brussels",_msg.TIMEZONE_EUROPE_BRUSSELS],["Europe/Budapest",_msg.TIMEZONE_EUROPE_BUDAPEST],["Europe/Copenhagen",
_msg.TIMEZONE_EUROPE_COPENHAGEN],["Europe/Gibraltar",_msg.TIMEZONE_EUROPE_GIBRALTAR],["Europe/Luxembourg",_msg.TIMEZONE_EUROPE_LUXEMBOURG],["Europe/Madrid",_msg.TIMEZONE_EUROPE_MADRID],["Europe/Malta",_msg.TIMEZONE_EUROPE_MALTA],["Europe/Monaco",_msg.TIMEZONE_EUROPE_MONACO],["Europe/Oslo",_msg.TIMEZONE_EUROPE_OSLO],["Europe/Paris",_msg.TIMEZONE_EUROPE_PARIS],["Europe/Prague",_msg.TIMEZONE_EUROPE_PRAGUE],["Europe/Rome",_msg.TIMEZONE_EUROPE_ROME],["Europe/Stockholm",_msg.TIMEZONE_EUROPE_STOCKHOLM],
["Europe/Tirane",_msg.TIMEZONE_EUROPE_TIRANE],["Europe/Vienna",_msg.TIMEZONE_EUROPE_VIENNA],["Europe/Zurich",_msg.TIMEZONE_EUROPE_ZURICH],["Africa/Blantyre",_msg.TIMEZONE_AFRICA_BLANTYRE],["Africa/Bujumbura",_msg.TIMEZONE_AFRICA_BUJUMBURA],["Africa/Cairo",_msg.TIMEZONE_AFRICA_CAIRO],["Africa/Gaborone",_msg.TIMEZONE_AFRICA_GABORONE],["Africa/Harare",_msg.TIMEZONE_AFRICA_HARARE],["Africa/Johannesburg",_msg.TIMEZONE_AFRICA_JOHANNESBURG],["Africa/Kigali",_msg.TIMEZONE_AFRICA_KIGALI],["Africa/Lubumbashi",
_msg.TIMEZONE_AFRICA_LUBUMBASHI],["Africa/Lusaka",_msg.TIMEZONE_AFRICA_LUSAKA],["Africa/Maputo",_msg.TIMEZONE_AFRICA_MAPUTO],["Africa/Maseru",_msg.TIMEZONE_AFRICA_MASERU],["Africa/Mbabane",_msg.TIMEZONE_AFRICA_MBABANE],["Africa/Tripoli",_msg.TIMEZONE_AFRICA_TRIPOLI],["Asia/Amman",_msg.TIMEZONE_ASIA_AMMAN],["Asia/Beirut",_msg.TIMEZONE_ASIA_BEIRUT],["Asia/Damascus",_msg.TIMEZONE_ASIA_DAMASCUS],["Asia/Gaza",_msg.TIMEZONE_ASIA_GAZA],["Asia/Jerusalem",_msg.TIMEZONE_ASIA_JERUSALEM],["Asia/Nicosia",_msg.TIMEZONE_ASIA_NICOSIA],
["Europe/Athens",_msg.TIMEZONE_EUROPE_ATHENS],["Europe/Bucharest",_msg.TIMEZONE_EUROPE_BUCHAREST],["Europe/Chisinau",_msg.TIMEZONE_EUROPE_CHISINAU],["Europe/Helsinki",_msg.TIMEZONE_EUROPE_HELSINKI],["Europe/Istanbul",_msg.TIMEZONE_EUROPE_ISTANBUL],["Europe/Riga",_msg.TIMEZONE_EUROPE_RIGA],["Europe/Sofia",_msg.TIMEZONE_EUROPE_SOFIA],["Europe/Tallinn",_msg.TIMEZONE_EUROPE_TALLINN],["Europe/Vilnius",_msg.TIMEZONE_EUROPE_VILNIUS],["Africa/Addis_Ababa",_msg.TIMEZONE_AFRICA_ADDIS_ABABA],["Africa/Asmara",
_msg.TIMEZONE_AFRICA_ASMARA],["Africa/Dar_es_Salaam",_msg.TIMEZONE_AFRICA_DAR_ES_SALAAM],["Africa/Djibouti",_msg.TIMEZONE_AFRICA_DJIBOUTI],["Africa/Kampala",_msg.TIMEZONE_AFRICA_KAMPALA],["Africa/Khartoum",_msg.TIMEZONE_AFRICA_KHARTOUM],["Africa/Mogadishu",_msg.TIMEZONE_AFRICA_MOGADISHU],["Africa/Nairobi",_msg.TIMEZONE_AFRICA_NAIROBI],["Antarctica/Syowa",_msg.TIMEZONE_ANTARCTICA_SYOWA],["Asia/Aden",_msg.TIMEZONE_ASIA_ADEN],["Asia/Baghdad",_msg.TIMEZONE_ASIA_BAGHDAD],["Asia/Bahrain",_msg.TIMEZONE_ASIA_BAHRAIN],
["Asia/Kuwait",_msg.TIMEZONE_ASIA_KUWAIT],["Asia/Qatar",_msg.TIMEZONE_ASIA_QATAR],["Asia/Riyadh",_msg.TIMEZONE_ASIA_RIYADH],["Europe/Kaliningrad",_msg.TIMEZONE_EUROPE_KALININGRAD],["Europe/Minsk",_msg.TIMEZONE_EUROPE_MINSK],["Indian/Antananarivo",_msg.TIMEZONE_INDIAN_ANTANANARIVO],["Indian/Comoro",_msg.TIMEZONE_INDIAN_COMORO],["Indian/Mayotte",_msg.TIMEZONE_INDIAN_MAYOTTE],["Asia/Tehran",_msg.TIMEZONE_ASIA_TEHRAN],["Asia/Baku",_msg.TIMEZONE_ASIA_BAKU],["Asia/Dubai",_msg.TIMEZONE_ASIA_DUBAI],["Asia/Muscat",
_msg.TIMEZONE_ASIA_MUSCAT],["Asia/Tbilisi",_msg.TIMEZONE_ASIA_TBILISI],["Europe/Moscow",_msg.TIMEZONE_EUROPE_MOSCOW],["Europe/Samara",_msg.TIMEZONE_EUROPE_SAMARA],["Indian/Mahe",_msg.TIMEZONE_INDIAN_MAHE],["Indian/Mauritius",_msg.TIMEZONE_INDIAN_MAURITIUS],["Indian/Reunion",_msg.TIMEZONE_INDIAN_REUNION],["Antarctica/Mawson",_msg.TIMEZONE_ANTARCTICA_MAWSON],["Asia/Aqtau",_msg.TIMEZONE_ASIA_AQTAU],["Asia/Aqtobe",_msg.TIMEZONE_ASIA_AQTOBE],["Asia/Ashgabat",_msg.TIMEZONE_ASIA_ASHGABAT],["Asia/Dushanbe",
_msg.TIMEZONE_ASIA_DUSHANBE],["Asia/Karachi",_msg.TIMEZONE_ASIA_KARACHI],["Asia/Tashkent",_msg.TIMEZONE_ASIA_TASHKENT],["Indian/Kerguelen",_msg.TIMEZONE_INDIAN_KERGUELEN],["Indian/Maldives",_msg.TIMEZONE_INDIAN_MALDIVES],["Asia/Colombo",_msg.TIMEZONE_ASIA_COLOMBO],["Asia/Katmandu",_msg.TIMEZONE_ASIA_KATMANDU],["Antarctica/Vostok",_msg.TIMEZONE_ANTARCTICA_VOSTOK],["Asia/Almaty",_msg.TIMEZONE_ASIA_ALMATY],["Asia/Bishkek",_msg.TIMEZONE_ASIA_BISHKEK],["Asia/Dhaka",_msg.TIMEZONE_ASIA_DHAKA],["Asia/Thimphu",
_msg.TIMEZONE_ASIA_THIMPHU],["Asia/Yekaterinburg",_msg.TIMEZONE_ASIA_YEKATERINBURG],["Indian/Chagos",_msg.TIMEZONE_INDIAN_CHAGOS],["Asia/Rangoon",_msg.TIMEZONE_ASIA_RANGOON],["Indian/Cocos",_msg.TIMEZONE_INDIAN_COCOS],["Antarctica/Davis",_msg.TIMEZONE_ANTARCTICA_DAVIS],["Asia/Bangkok",_msg.TIMEZONE_ASIA_BANGKOK],["Asia/Hovd",_msg.TIMEZONE_ASIA_HOVD],["Asia/Jakarta",_msg.TIMEZONE_ASIA_JAKARTA],["Asia/Omsk",_msg.TIMEZONE_ASIA_OMSK],["Asia/Phnom_Penh",_msg.TIMEZONE_ASIA_PHNOM_PENH],["Asia/Vientiane",
_msg.TIMEZONE_ASIA_VIENTIANE],["Indian/Christmas",_msg.TIMEZONE_INDIAN_CHRISTMAS],["Antarctica/Casey",_msg.TIMEZONE_ANTARCTICA_CASEY],["Asia/Brunei",_msg.TIMEZONE_ASIA_BRUNEI],["Asia/Choibalsan",_msg.TIMEZONE_ASIA_CHOIBALSAN],["Asia/Hong_Kong",_msg.TIMEZONE_ASIA_HONG_KONG],["Asia/Krasnoyarsk",_msg.TIMEZONE_ASIA_KRASNOYARSK],["Asia/Kuala_Lumpur",_msg.TIMEZONE_ASIA_KUALA_LUMPUR],["Asia/Macau",_msg.TIMEZONE_ASIA_MACAU],["Asia/Makassar",_msg.TIMEZONE_ASIA_MAKASSAR],["Asia/Manila",_msg.TIMEZONE_ASIA_MANILA],
["Asia/Shanghai",_msg.TIMEZONE_ASIA_SHANGHAI],["Asia/Singapore",_msg.TIMEZONE_ASIA_SINGAPORE],["Asia/Taipei",_msg.TIMEZONE_ASIA_TAIPEI],["Asia/Ulaanbaatar",_msg.TIMEZONE_ASIA_ULAANBAATAR],["Australia/Perth",_msg.TIMEZONE_AUSTRALIA_PERTH],["Asia/Dili",_msg.TIMEZONE_ASIA_DILI],["Asia/Irkutsk",_msg.TIMEZONE_ASIA_IRKUTSK],["Asia/Jayapura",_msg.TIMEZONE_ASIA_JAYAPURA],["Asia/Pyongyang",_msg.TIMEZONE_ASIA_PYONGYANG],["Asia/Seoul",_msg.TIMEZONE_ASIA_SEOUL],["Asia/Tokyo",_msg.TIMEZONE_ASIA_TOKYO],["Pacific/Palau",
_msg.TIMEZONE_PACIFIC_PALAU],["Australia/Adelaide",_msg.TIMEZONE_AUSTRALIA_ADELAIDE],["Australia/Darwin",_msg.TIMEZONE_AUSTRALIA_DARWIN],["Antarctica/DumontDUrville",_msg.TIMEZONE_ANTARCTICA_DUMONTDURVILLE],["Asia/Yakutsk",_msg.TIMEZONE_ASIA_YAKUTSK],["Australia/Brisbane",_msg.TIMEZONE_AUSTRALIA_BRISBANE],["Australia/Hobart",_msg.TIMEZONE_AUSTRALIA_HOBART],["Australia/Sydney",_msg.TIMEZONE_AUSTRALIA_SYDNEY],["Pacific/Guam",_msg.TIMEZONE_PACIFIC_GUAM],["Pacific/Port_Moresby",_msg.TIMEZONE_PACIFIC_PORT_MORESBY],
["Pacific/Saipan",_msg.TIMEZONE_PACIFIC_SAIPAN],["Asia/Vladivostok",_msg.TIMEZONE_ASIA_VLADIVOSTOK],["Pacific/Efate",_msg.TIMEZONE_PACIFIC_EFATE],["Pacific/Guadalcanal",_msg.TIMEZONE_PACIFIC_GUADALCANAL],["Pacific/Kosrae",_msg.TIMEZONE_PACIFIC_KOSRAE],["Pacific/Noumea",_msg.TIMEZONE_PACIFIC_NOUMEA],["Pacific/Norfolk",_msg.TIMEZONE_PACIFIC_NORFOLK],["Asia/Kamchatka",_msg.TIMEZONE_ASIA_KAMCHATKA],["Asia/Magadan",_msg.TIMEZONE_ASIA_MAGADAN],["Pacific/Auckland",_msg.TIMEZONE_PACIFIC_AUCKLAND],["Pacific/Fiji",
_msg.TIMEZONE_PACIFIC_FIJI],["Pacific/Funafuti",_msg.TIMEZONE_PACIFIC_FUNAFUTI],["Pacific/Kwajalein",_msg.TIMEZONE_PACIFIC_KWAJALEIN],["Pacific/Majuro",_msg.TIMEZONE_PACIFIC_MAJURO],["Pacific/Nauru",_msg.TIMEZONE_PACIFIC_NAURU],["Pacific/Tarawa",_msg.TIMEZONE_PACIFIC_TARAWA],["Pacific/Wake",_msg.TIMEZONE_PACIFIC_WAKE],["Pacific/Wallis",_msg.TIMEZONE_PACIFIC_WALLIS],["Pacific/Apia",_msg.TIMEZONE_PACIFIC_APIA],["Pacific/Enderbury",_msg.TIMEZONE_PACIFIC_ENDERBURY],["Pacific/Fakaofo",_msg.TIMEZONE_PACIFIC_FAKAOFO],
["Pacific/Tongatapu",_msg.TIMEZONE_PACIFIC_TONGATAPU],["Pacific/Kiritimati",_msg.TIMEZONE_PACIFIC_KIRITIMATI]],TimeZoneList_old:[["-12",_msg.TIMEZONE_M_12],["-11",_msg.TIMEZONE_M_11],["-10",_msg.TIMEZONE_M_10],["-9",_msg.TIMEZONE_M_9],["-8",_msg.TIMEZONE_M_8],["-7",_msg.TIMEZONE_M_7],["-6",_msg.TIMEZONE_M_6],["-5",_msg.TIMEZONE_M_5],["-4",_msg.TIMEZONE_M_4],["-3",_msg.TIMEZONE_M_3],["-2",_msg.TIMEZONE_M_2],["-1",_msg.TIMEZONE_M_1],["0",_msg.TIMEZONE_0],["+1",_msg.TIMEZONE_P_1],["+2",_msg.TIMEZONE_P_2],
["+3",_msg.TIMEZONE_P_3],["+4",_msg.TIMEZONE_P_4],["+5",_msg.TIMEZONE_P_5],["+6",_msg.TIMEZONE_P_6],["+7",_msg.TIMEZONE_P_7],["+8",_msg.TIMEZONE_P_8],["+9",_msg.TIMEZONE_P_9],["+10",_msg.TIMEZONE_P_10],["+11",_msg.TIMEZONE_P_11],["+12",_msg.TIMEZONE_P_12],["+13",_msg.TIMEZONE_P_13],["+14",_msg.TIMEZONE_P_14]],init:function(){Ext.Ajax.timeout=6E5;var a=Ext.get("lib-bar");a&&a.show();Ext.apply(Ext.form.VTypes,{autocmd:function(a,b){return Ext.ucf.checkValidationByAutoCmd(b,b.autoCmd)}});"function"!==
typeof String.prototype.endsWith&&(String.prototype.endsWith=function(a){return-1!==this.indexOf(a,this.length-a.length)})}}}();
SateraitoUI={mask:null,clearMessage:function(){"undefined"!=typeof SateraitoUI.mask&&null!=SateraitoUI.mask&&SateraitoUI.mask.hide()},showLoadingMessage:function(b){"undefined"==typeof b&&(b=_msg.LOADING);null!=Ext.get("contentsArea")&&(SateraitoUI.mask=new Ext.LoadMask(Ext.get("contentsArea"),{msg:b}),SateraitoUI.mask.show())},showTimerMessage:function(b,e){SateraitoUI.showLoadingMessage(b)},changeEnabledComponents:function(b){for(var e="approve_button reject_button approve_button2 reject_button2 update_button update_button2 looked_button btn_submit_new_component btn_submit_cancel_new_component select_follow select_favorite post_to_calendar".split(" "),
a=0;a<e.length;a++){var c=Ext.getCmp(e[a]);c&&(b?c.enable():c.disable())}}};
AppsUser={isAccessToken:!1,accessToken:"",userListLoadingStatus:"0",userList:[],viewerUserInfo:null,getTokenString:function(b){return AppsUser.isAccessToken?"{0}token={1}".format(b||"&",AppsUser.accessToken):""},getAccessToken:function(b){""!=AppsUser.accessToken?"function"===typeof b&&b(AppsUser.accessToken):AppsUser.requestToken(function(e){AppsUser.accessToken=e.token;"function"===typeof b&&b(AppsUser.accessToken)})},requestOneTimeToken:function(b,e,a,c){"undefined"==typeof aRenew&&(aRenew=!1);
AppsUser._requestToken(a,aRenew)},requestToken:function(b,e){"undefined"==typeof e&&(e=!1);AppsUser._requestToken(b,e)},_requestToken:function(b,e,a){ExecuteRequest.get({baseUrl:_vurl,methodUrl:"createtoken",callback:b})},getUser:function(b){var e=null;$.each(AppsUser.userList,function(a,c){if(c.user_email==b)return e=c,!1});return e},getUserName:function(b){var e=AppsUser.getUser(b);return e&&(e.family_name||e.given_name)?e.family_name+e.given_name:b}};
ExecuteRequest={post:function(b){var e=b.baseUrl,a=b.methodUrl,c=b.postData;if("undefined"==typeof e||"undefined"==typeof a||"undefined"==typeof c)console.log("** ExecuteRequest error aBaseUrl="+e+" aMethodUrl="+a+" aPostData="+c);else{var d=b.callback,g=b.enableRetry;"undefined"==typeof g&&(g=!1);var f=b.silentMode;"undefined"==typeof f&&(f=!1);b=b.busyMsg;"undefined"==typeof b&&(b="");ExecuteRequest.requestPost(e+a,g,f,b,c,d)}},requestPost:function(b,e,a,c,d,g,f){"undefined"==typeof f&&(f=1);a||
(""==c?SateraitoUI.showLoadingMessage():SateraitoUI.showLoadingMessage(c));Ext.Ajax.request({url:b,method:"POST",params:d,success:function(b,c){a||SateraitoUI.clearMessage();b=Ext.decode(b.responseText);"function"==typeof g&&g(b)},failure:function(){a||SateraitoUI.clearMessage();e?5>f?function(){ExecuteRequest.postOid(b,e,a,c,d,g,f+1)}.defer(MyUtil.getWaitMillisec(f)):(401==response.rc?SateraitoUI.showLoadingMessage(_msg.ERROR_TIMEOUT):SateraitoUI.showTimerMessage(_msg.ERROR_WHILE_LOADING,10),g({status:"error",
error_code:"unknown_error"})):g({status:"error",error_code:"unknown_error"})}})},get:function(b){var e=b.baseUrl,a=b.methodUrl;if("undefined"==typeof e||"undefined"==typeof a)Sateraito.Util.console("** SimpleRequest error aBaseUrl="+e+" aMethodUrl="+a);else{var c=b.callback,d=b.silentMode;"undefined"==typeof d&&(d=!1);var g=b.callbackWhenError;"undefined"==typeof g&&(g=!1);b=b.randomWait;"undefined"==typeof b&&(b=!1);b?function(){ExecuteRequest.requestGet(e+a,c,1,d,g)}.defer(Math.ceil(100*Math.random())):
ExecuteRequest.requestGet(e+a,c,1,d,g)}},requestGet:function(b,e,a,c,d){"undefined"==typeof a&&(a=1);"undefined"==typeof c&&(c=!1);"undefined"==typeof d&&(d=!1);c||SateraitoUI.showLoadingMessage();Ext.Ajax.request({url:b,success:function(a,b){c||SateraitoUI.clearMessage();a=Ext.decode(a.responseText);"function"==typeof e&&e(a)},failure:function(){c||SateraitoUI.clearMessage();Sateraito.Util.console("retrying "+a);a<Sateraito.EventController.MAX_RETRY?function(){ExecuteRequest.requestOid(b,e,a+1,c,
d)}.defer(MyUtil.getWaitMillisec(a)):(401==response.rc?SateraitoUI.showLoadingMessage(_msg.ERROR_TIMEOUT):SateraitoUI.showTimerMessage(_msg.ERROR_WHILE_LOADING,10),d&&e({status:"ng",error_code:"unknown_error"}))}})}};