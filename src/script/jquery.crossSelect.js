(function(a){a.fn.crossSelect=function(v){function z(){var c=0;n='<ul class="jqxs_optionsList">';l='<ul class="jqxs_chosenList">';var g;a(h).children("option").each(function(){g="";!0===a(this).attr("selected")?g+='<li class="jqxs_selected"':g+="<li";g+=' style="line-height: '+1.25*b.font+"px; height:"+1.25*b.font+"px;font-size: "+b.font+"px;width:"+p+'px">';g+=a(this).text()+"<span>"+c+"</span></li>";n+=g;!0===a(this).attr("selected")&&(l+=g);c++});l+="</ul>";n+="</ul>"}function A(){var d="";a("option",
h).each(function(){d+=a(this).text()+"<br />"});a(c).append('<span class="jqxs_ruler" style="font-size:'+b.font+'px">'+d+"</span>");p=a("span",c).width();a("span",c).remove()}function B(){function e(){a(this).hasClass("jqxs_focused")?(a(this).removeClass("jqxs_focused"),0===a(this).parent().children(".jqxs_focused").length&&(d(q),d(r))):(b.clicksAccumulate?a(this).parent().hasClass("jqxs_optionsList")?a("li",k).removeClass("jqxs_focused"):a("li",m).removeClass("jqxs_focused"):(a("li",m).removeClass("jqxs_focused"),
a("li",k).removeClass("jqxs_focused")),a(this).addClass("jqxs_focused"),a(this).parent().hasClass("jqxs_optionsList")?(u(q),d(r)):(u(r),d(q)))}function g(){var c=a("span",this).text();c=a(y).children("option")[c];!1===a(c).attr("selected")&&(a(c).attr("selected","selected"),a(this).removeClass("jqxs_focused"),b.clickSelects?a(this).clone().appendTo(k).click(l):b.dblclick?a(this).clone().appendTo(k).click(e).dblclick(l):a(this).clone().appendTo(k).click(e),a(this).addClass("jqxs_selected"))}function f(){var b=
a("span",this).text(),c=a(y).children("option")[b];!0===a(c).attr("selected")&&(a(c).attr("selected",""),a(a(m).children("li")[b]).removeClass("jqxs_selected"),a(this).remove())}function n(){a(this).each(g);t("sel")}function l(){a(this).each(f);t("rem")}function p(){a(".jqxs_focused",m).each(g);t("sel")}function v(){a(".jqxs_focused",k).each(f);t("rem")}function t(b){switch(b){case "sel":d(q);u(w);0===a("li:not(.jqxs_selected)",m).size()&&d(x);break;case "rem":d(r),u(x),0===a("li",k).size()&&d(w)}}
var y=h,m=a(".jqxs_optionsList",c),k=a(".jqxs_chosenList",c),q=a(".jqxs_selectButton",c),r=a(".jqxs_removeButton",c),x=a(".jqxs_selectAllButton",c),w=a(".jqxs_removeAllButton",c);b.clickSelects?(a("li",m).click(n),a("li",k).click(l)):(a("li",c).click(e),a(q).click(p),a(r).click(v));b.dblclick&&(a("li",m).dblclick(n),a("li",k).dblclick(l));a(x).click(function(){a("li",m).each(g);d(r);t("sel")});a(w).click(function(){a("li",k).each(f);d(q);t("rem")})}function u(b){a(b).addClass("jqxs_active").attr("disabled",
"")}function d(b){a(b).removeClass("jqxs_active").attr("disabled","disabled")}var b=a.extend({},jQuery.fn.crossSelect.defaults,v),h,c,p,e=[],n,l,f;return this.each(function(){if(!0===a(this).attr("multiple")){h=a(this).hide().wrap('<div class="jqxs"></div>');c=a(h).parent();A();switch(b.vertical){case "expand":e.height=1.25*a(h).children("option").size()*b.font;break;case "scroll":e.height=1.25*b.font*Math.min(a(h).children("option").size(),b.rows)}switch(b.horizontal){case "expand":e.width=Math.max(p+
10,b.listWidth);break;case "scroll":e.width=b.listWidth;p>b.listWidth&&(e.height+=24);break;case "hide":e.width=b.listWidth}z();f='<div class="jqxs_buttons">';b.clickSelects||(f+='<input type="button" value="'+b.select_txt+'" class="jqxs_selectButton" disabled="disabled"></input><input type="button" value="'+b.remove_txt+'" class="jqxs_removeButton" disabled="disabled"></input>');f+='<input type="button" value="'+b.selectAll_txt+'" class="jqxs_selectAllButton"';0===a("option:not([selected=true])",
h).size()&&(f+=' disabled="disabled"');f+='></input><input type="button" value="'+b.removeAll_txt+'" class="jqxs_removeAllButton"';a("option",h);0===a("option[selected=true]",h).size()&&(f+=' disabled="disabled"');f+="></input></div>";a(c).append(n+f+l+'<div style="clear:left;"></div>');a("ul",c).css({height:e.height,width:e.width});"hide"===b.horizontal&&a("ul",c).css({"overflow-x":"hidden"});B()}})}})(jQuery);
jQuery.fn.crossSelect.defaults={vertical:"scroll",horizontal:"hide",listWidth:150,font:12,rows:8,dblclick:!0,clickSelects:!1,clicksAccumulate:!1,select_txt:"select",remove_txt:"remove",selectAll_txt:"select all",removeAll_txt:"remove all"};