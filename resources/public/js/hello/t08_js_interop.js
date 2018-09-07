// Compiled by ClojureScript 1.10.238 {}
goog.provide('hello.t08_js_interop');
goog.require('cljs.core');
setTimeout((function (){
return console.log("Hello!");
}),(1000));
localStorage.setItem("key","value");
localStorage.getItem("key");
({"a": (1), "b": (2)});
[(1),(2),(3)];
hello.t08_js_interop.obj = ({});
hello.t08_js_interop.obj.key = ({"value": "my-value"});
hello.t08_js_interop.obj.key;
hello.t08_js_interop.obj.key.value;
hello.t08_js_interop.obj.key.value = "new-value";
cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null));
cljs.core.js__GT_clj.call(null,({"a": (1), "b": [(2)]}));

//# sourceMappingURL=t08_js_interop.js.map
