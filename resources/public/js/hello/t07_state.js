// Compiled by ClojureScript 1.10.238 {}
goog.provide('hello.t07_state');
goog.require('cljs.core');
hello.t07_state.user = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"John",new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Doe",new cljs.core.Keyword(null,"age","age",-604307804),(31)], null);
cljs.core.update.call(null,hello.t07_state.user,new cljs.core.Keyword(null,"age","age",-604307804),cljs.core.inc);
hello.t07_state.user = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"John",new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Doe",new cljs.core.Keyword(null,"age","age",-604307804),(31)], null));
cljs.core.deref.call(null,hello.t07_state.user);
cljs.core.swap_BANG_.call(null,hello.t07_state.user,(function (p1__16861_SHARP_){
return cljs.core.update.call(null,p1__16861_SHARP_,new cljs.core.Keyword(null,"age","age",-604307804),cljs.core.inc);
}));
cljs.core.reset_BANG_.call(null,hello.t07_state.user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"John",new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Doe",new cljs.core.Keyword(null,"age","age",-604307804),(32)], null));
cljs.core.deref.call(null,hello.t07_state.user);
cljs.core.add_watch.call(null,hello.t07_state.user,new cljs.core.Keyword(null,"logger","logger",-220675947),(function (key,ref,old_state,new_state){
return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_state)].join(''));
}));

//# sourceMappingURL=t07_state.js.map
