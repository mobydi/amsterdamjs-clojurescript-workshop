// Compiled by ClojureScript 1.10.238 {}
goog.provide('hello.t06_transforming_collections');
goog.require('cljs.core');
cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
cljs.core.filter.call(null,cljs.core.odd_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
cljs.core.reduce.call(null,cljs.core._PLUS_,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
cljs.core.range.call(null,(5),(10));
cljs.core.repeat.call(null,(10),(1));
cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),(new cljs.core.List(null,(3),null,(1),null)),(2),null)),(3),null)));
cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null)], null));
cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(4)], null));

//# sourceMappingURL=t06_transforming_collections.js.map
