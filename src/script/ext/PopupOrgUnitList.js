Ext.ucf.popup_orgunit_list=function(){return{createOrgUnitListWindow:function(b,a){a=new Ext.FormPanel({frame:!0,width:300,height:"auto",layout:"form",defaults:{layout:"form",border:!1,collapsible:!1,bodyStyle:"padding:0px;margin:0px;"},data:"",items:[{xtype:"fieldset",title:"",autoHeight:!0,defaults:{width:300},defaultType:"container",frame:!0,layout:"form",items:[{autoEl:"div",cls:"orgTree",layout:"form",name:a,style:"padding: 2px;",id:a,allowBlank:!1}]}],buttons:[{text:_msg.VMSG_CLOSE,handler:function(){c.close()}}]});
var c=new Ext.Window({title:b,layout:"fit",modal:!0,width:350,height:450,plain:!0,autoDestory:!0,items:a});c.show(this);c.dd.constrainTo(Ext.getBody());return c},setTree:function(b,a){void 0==a&&(a=_vurl+"orgunit/tree");$("#"+b).orgTree({root:"/",folderEvent:"click",script:a,expandSpeed:0,collapseSpeed:0,multiFolder:!0,expandFirstDeep:!1,loadMessage:_msg.LOADING},function(a,b,d){})},setTree2:function(b,a){void 0==a&&(a=_vurl+"orgunit/tree");$("#"+b).orgTree({root:"/",folderEvent:"click",script:a,
expandSpeed:0,collapseSpeed:0,multiFolder:!0,expandFirstDeep:!1,loadMessage:_msg.LOADING,checkboxHidden:!0,anchor_type:"ORGUNIT_LINK",baseCSSClass:"jqueryUcfTree2"},function(a,b,d){})},setTreeForOneSelect:function(b,a,c){if(void 0==a||""==a)a=_vurl+"orgunit/tree";$("#"+b).orgTree({root:"/",folderEvent:"click",script:a,expandSpeed:0,collapseSpeed:0,multiFolder:!0,expandFirstDeep:!0,loadMessage:_msg.LOADING,checkboxHidden:!0,anchor_type:"ORGUNIT_LINK2",click_anchor_link_funcname:c,baseCSSClass:"jqueryUcfTree2"},
function(a,b,c){})},init:function(){}}}();