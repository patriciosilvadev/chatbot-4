var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var g=a[e];if(b.call(c,g,e,a))return{i:e,v:g}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");
GroupNode=Ext.extend(Ext.tree.TreeNode,{constructor:function(a){a=Ext.apply({leaf:!1,expandable:!0,isChildUserNodeAppended:!1,isChildGroupNodeAppended:!1,listeners:{expand:function(a){a.attributes.isChildUserNodeAppended||(a.appendGroupNode([{}],a.attributes.group_id),a.attributes.isChildUserNodeAppended=!0)},click:function(a,b){var c=a.attributes.group_id;GadgetPrefs.setDefaultGroupId(c);GroupDataBulkDownload.dynamicLtMode?2==AppsGroup.getGroupMemberLoadingStatus(c)?SharedContact.refreshGridByGroupId(c):
AppsGroup.requestGroupMembersFromLT(c,function(a){AppsGroup.setGroupMemberData(a,c);SharedContact.refreshGridByGroupId(c)}):SharedContact.refreshGridByGroupId(c)}}},a);GroupNode.superclass.constructor.call(this,a);if(!GroupDataBulkDownload.dynamicLtMode){var b=a.maxLevel-1;a=AppsGroup.getChildGroupIds(a.group_id);var c=this;0<b&&$.each(a,function(){if(!AppsGroup.isHiddenGroup(this)){var a=AppsGroup.getGroupName(this);c.appendChild(new GroupNode({text:a,group_id:this,maxLevel:b}))}})}},appendGroupNode:function(a,
b){var c=a.attributes.maxLevel-1;b=AppsGroup.getChildGroupIds(b);0<c&&$.each(b,function(){if(!AppsGroup.isHiddenGroup(this)){var b=AppsGroup.getGroupName(this);a.appendChild(new GroupNode({text:b,group_id:this,maxLevel:c}))}});a.attributes.isChildGroupNodeAppended=!0}});Ext.ucf.group=function(){return{DatO365SyncFlag:[["",""],["ACTIVE",_msg.IN_TARGET]],init:function(){}}}();
jQuery&&function(a){a.extend(a.fn,{orgTree:function(b,c,d){b||(b={});void 0==b.root&&(b.root="/");void 0==b.script&&(b.script="");void 0==b.folderEvent&&(b.folderEvent="click");void 0==b.expandSpeed&&(b.expandSpeed=500);void 0==b.collapseSpeed&&(b.collapseSpeed=500);void 0==b.expandEasing&&(b.expandEasing=null);void 0==b.collapseEasing&&(b.collapseEasing=null);void 0==b.multiFolder&&(b.multiFolder=!0);void 0==b.expandFirstDeep&&(b.expandFirstDeep=!1);void 0==b.checkboxHandler&&(b.checkboxHandler=
void 0);void 0==b.loadMessage&&(b.loadMessage=_msg.LOADING);void 0==b.checkboxHidden&&(b.checkboxHidden=!1);void 0==b.anchor_type&&(b.anchor_type="");void 0==b.baseCSSClass&&(b.baseCSSClass="jqueryUcfTree");a(this).each(function(){function e(c,h){a(c).addClass("wait");a(".jqueryUcfTree.start").remove();var k=function(f){f=jQuery.parseJSON(f.responseText);0!=(f&&f.code?f.code:"")?""==f.msg?Ext.ucf.dispSysErrMsg():Ext.ucf.flowMsg("{{lang.VMSG_MSG_ERROR}}",f.msg):(a(c).find(".start").html(""),a(c).removeClass("wait").append(f.html?
f.html:""),b.root==h?a(c).find("UL:hidden").show():a(c).find("UL:hidden").slideDown({duration:b.expandSpeed,easing:b.expandEasing}),a(c).hasClass("already")||a(c).addClass("already"),b.checkboxHandler&&a(c).find("UL LI INPUT").each(function(){a(this).click(function(){b.checkboxHandler(this)})}),b.expandFirstDeep&&b.root==h&&a(c).find("UL LI").each(function(){e(a(this),a(this).find("A.folder,A.expand").attr("rel"));a(this).removeClass("collapsed").addClass("expanded")}),d&&d(),g(c))};Ext.Ajax.request({url:b.script,
method:"POST",params:{key:h,checkbox_hidden_flag:b.checkboxHidden?"HIDDEN":"",anchor_type:b.anchor_type,baseCSSClass:b.baseCSSClass},success:k,failure:k})}function g(d){a(d).find("LI A.folder,LI A.expand").bind(b.folderEvent,function(){a(this).parent().hasClass("collapsed")?(b.multiFolder||(a(this).parent().parent().find("UL").slideUp({duration:b.collapseSpeed,easing:b.collapseEasing}),a(this).parent().parent().find("LI.category").removeClass("expanded").addClass("collapsed")),"on"!=a(this).attr("lowest_level")&&
(a(this).parent().hasClass("already")?b.root==a(this).attr("rel")?a(this).parent().find("UL:hidden").show():a(this).parent().find("UL:hidden").slideDown({duration:b.expandSpeed,easing:b.expandEasing}):(a(this).parent().find("UL").remove(),e(a(this).parent(),escape(a(this).attr("rel")))),a(this).parent().removeClass("collapsed").addClass("expanded"))):(a(this).parent().find("UL").slideUp({duration:b.collapseSpeed,easing:b.collapseEasing}),a(this).parent().removeClass("expanded").addClass("collapsed"));
c(a(this).attr("rel"),a(this).attr("rel2"),a(this).attr("lowest_level"));return!1});"click"!=b.folderEvent.toLowerCase&&a(d).find("LI A.folder,LI A.expand").bind("click",function(){return!1})}a(this).html('<ul class="jqueryUcfTree start"><li class="wait">'+b.loadMessage+"<li></ul>");e(a(this),escape(b.root))})}})}(jQuery);