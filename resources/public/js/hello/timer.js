// Compiled by ClojureScript 1.10.238 {}
goog.provide('hello.timer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
hello.timer.clock = (function hello$timer$clock(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(new Date()).toLocaleTimeString("en-US")], null);
});
hello.timer.app = (function hello$timer$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(new Date()).toLocaleTimeString("en-US")], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello.timer.app], null),goog.dom.getElement("app-root"));

//# sourceMappingURL=timer.js.map
