// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/IncidentAnalysis/setting/FeaturelayerSource.html":'\x3cdiv\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan class\x3d"label"\x3e${nls.selectLayers}: \x3c/span\x3e\r\n    \x3cdiv class\x3d"layerSelect" data-dojo-attach-point\x3d"selectLayers"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"footer"\x3e\r\n      \x3cdiv class\x3d"jimu-btn ok" data-dojo-attach-point\x3d"btnOk"\x3e${nls.ok}\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e${nls.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/Message dojo/text!./FeaturelayerSource.html dojo/_base/lang dojo/_base/array dojox/form/CheckedMultiSelect dojo/on dojo/Evented".split(" "),function(l,m,n,p,q,r,c,f,t,g,u){return l([m,n,p,u],{templateString:r,baseClass:"imt-featurelayer-source",postCreate:function(){this.inherited(arguments);this._initUI()},_initUI:function(){var a=this.map.itemInfo.itemData.operationalLayers,b=[];0===a.length&&
new q({message:this.nls.missingLayerInWebMap});this.weatherLayersSelect=(new t({name:"selectLayers",multiple:!0,style:"width:100%;"})).placeAt(this.selectLayers);for(var d=0;d<a.length;d++){var h=f.filter(b,function(e){return e.label===a[d].title});null!==h&&0!==h.length||this.weatherLayersSelect.addOption({label:a[d].title,value:a[d].title})}if(this.weatherTabAdditionalLayers){b=this.weatherTabAdditionalLayers.split(",");var k=[];f.forEach(b,c.hitch(this,function(e){k.push(c.trim(e))}));this.weatherLayersSelect.set("value",
k)}this.own(g(this.btnOk,"click",c.hitch(this,function(){var e=this._getSelectedLayers();this.emit("ok",e)})));this.own(g(this.btnCancel,"click",c.hitch(this,function(){this.emit("cancel")})))},_getSelectedLayers:function(){var a="";f.forEach(this.weatherLayersSelect.options,c.hitch(this,function(b){b.selected&&(0<a.length&&(a+=","),a+=b.value)}));return a}})});