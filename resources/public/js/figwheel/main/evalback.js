// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.main.evalback');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl');
goog.require('goog.log');
if(typeof figwheel.main.evalback.handlers !== 'undefined'){
} else {
figwheel.main.evalback.handlers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

var empty_20098 = cljs.core.PersistentArrayMap.EMPTY;
figwheel.main.evalback.handle = ((function (empty_20098){
return (function figwheel$main$evalback$handle(uniq,val){
cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.main.evalback.handlers),uniq,cljs.core.identity).call(null,val);

return cljs.core.reset_BANG_.call(null,figwheel.main.evalback.handlers,empty_20098);
});})(empty_20098))
;

figwheel.main.evalback.eval_string = (function figwheel$main$evalback$eval_string(form_str,callback){
var uniq = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"handler-","handler-",-586447262,null)))].join('');
var msg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"eval-back",new cljs.core.Keyword(null,"form-string","form-string",732876249),["(figwheel.main.evalback/handle ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,uniq))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form_str),")"].join('')], null);
cljs.core.swap_BANG_.call(null,figwheel.main.evalback.handlers,cljs.core.assoc,uniq,callback);

return figwheel.repl.respond_to_connection.call(null,msg);
});
goog.exportSymbol('figwheel.main.evalback.eval_string', figwheel.main.evalback.eval_string);

figwheel.main.evalback.eval_cljs = (function figwheel$main$evalback$eval_cljs(form,callback){
return figwheel.main.evalback.eval_string.call(null,cljs.core.pr_str.call(null,form),callback);
});

//# sourceMappingURL=evalback.js.map
