(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d36e4"],{"5d76":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"SpotLight-container"},[t("MMD-color",{attrs:{title:"灯光颜色"},model:{value:e.config.color,callback:function(n){e.$set(e.config,"color",n)},expression:"config.color"}}),t("MMD-slider",{attrs:{title:"灯光强度",min:0,max:10,step:.01},model:{value:e.config.intensity,callback:function(n){e.$set(e.config,"intensity",n)},expression:"config.intensity"}}),t("MMD-number",{attrs:{title:"光照距离",min:0},model:{value:e.config.distance,callback:function(n){e.$set(e.config,"distance",n)},expression:"config.distance"}}),t("MMD-number",{attrs:{title:"强度衰退",min:0},model:{value:e.config.decay,callback:function(n){e.$set(e.config,"decay",n)},expression:"config.decay"}}),t("MMD-slider",{attrs:{title:"锥型衰减",min:0,max:1,step:.01},model:{value:e.config.penumbra,callback:function(n){e.$set(e.config,"penumbra",n)},expression:"config.penumbra"}}),t("MMD-slider",{attrs:{title:"光锥角度",min:1,max:90,step:.01},model:{value:e.config.angle,callback:function(n){e.$set(e.config,"angle",n)},expression:"config.angle"}})],1)},c=[],o={props:{config:{}},data:function(){return{}},computed:{currentObject:function(){return this.$store.getters.getCurrentObject}}},a=o,s=t("2877"),l=Object(s["a"])(a,i,c,!1,null,"6a9a3d79",null);n["default"]=l.exports}}]);