// Compiled by ClojureScript 1.10.238 {}
goog.provide('hello.t10_ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert("Click!");
})], null),"press"], null);
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#id.class1.class2","div#id.class1.class2",208140013)], null);
hello.t10_ui.button = (function hello$t10_ui$button(on_click,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),text], null);
});
hello.t10_ui.input_field = (function hello$t10_ui$input_field(p__17251){
var map__17252 = p__17251;
var map__17252__$1 = ((((!((map__17252 == null)))?(((((map__17252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17252):map__17252);
var label = cljs.core.get.call(null,map__17252__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.call(null,map__17252__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__17252__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.button,(function (){
return alert("hello!");
}),"alert"], null),goog.dom.getElement("button-target"));
hello.t10_ui.subscribe_form = (function hello$t10_ui$subscribe_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"email",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.identity], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.button,cljs.core.identity,"Subscribe"], null)], null);
});
hello.t10_ui.email = reagent.core.atom.call(null,"");
hello.t10_ui.ajax_subscribe_form = (function hello$t10_ui$ajax_subscribe_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form","div.form",-425204148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello.t10_ui.email),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17254_SHARP_){
return cljs.core.reset_BANG_.call(null,hello.t10_ui.email,p1__17254_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.button,(function (){
return alert(cljs.core.deref.call(null,hello.t10_ui.email));
}),"Subscribe"], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.ajax_subscribe_form], null),goog.dom.getElement("form-target"));
hello.t10_ui.ajax_subscribe_form_with_state = (function hello$t10_ui$ajax_subscribe_form_with_state(){
var email = reagent.core.atom.call(null,"");
return ((function (email){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form","div.form",-425204148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.input_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,email),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (email){
return (function (p1__17255_SHARP_){
return cljs.core.reset_BANG_.call(null,email,p1__17255_SHARP_.target.value);
});})(email))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.button,((function (email){
return (function (){
return alert(cljs.core.deref.call(null,email));
});})(email))
,"Subscribe"], null)], null);
});
;})(email))
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.t10_ui.ajax_subscribe_form_with_state], null),goog.dom.getElement("form-local-target"));

//# sourceMappingURL=t10_ui.js.map
