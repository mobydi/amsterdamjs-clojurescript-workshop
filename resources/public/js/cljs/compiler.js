// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__9078 = s;
var map__9078__$1 = ((((!((map__9078 == null)))?(((((map__9078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9078):map__9078);
var name = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__9078__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__9081 = info;
var map__9082 = G__9081;
var map__9082__$1 = ((((!((map__9082 == null)))?(((((map__9082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9082):map__9082);
var shadow = cljs.core.get.call(null,map__9082__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__9081__$1 = G__9081;
while(true){
var d__$2 = d__$1;
var map__9084 = G__9081__$1;
var map__9084__$1 = ((((!((map__9084 == null)))?(((((map__9084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9084):map__9084);
var shadow__$1 = cljs.core.get.call(null,map__9084__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__9086 = (d__$2 + (1));
var G__9087 = shadow__$1;
d__$1 = G__9086;
G__9081__$1 = G__9087;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__9088){
var map__9089 = p__9088;
var map__9089__$1 = ((((!((map__9089 == null)))?(((((map__9089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9089):map__9089);
var name_var = map__9089__$1;
var name = cljs.core.get.call(null,map__9089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__9089__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__9091 = info;
var map__9091__$1 = ((((!((map__9091 == null)))?(((((map__9091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9091):map__9091);
var ns = cljs.core.get.call(null,map__9091__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__9091__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__9094 = arguments.length;
switch (G__9094) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__9096 = cp;
switch (G__9096) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__9098_9102 = cljs.core.seq.call(null,s);
var chunk__9099_9103 = null;
var count__9100_9104 = (0);
var i__9101_9105 = (0);
while(true){
if((i__9101_9105 < count__9100_9104)){
var c_9106 = cljs.core._nth.call(null,chunk__9099_9103,i__9101_9105);
sb.append(cljs.compiler.escape_char.call(null,c_9106));


var G__9107 = seq__9098_9102;
var G__9108 = chunk__9099_9103;
var G__9109 = count__9100_9104;
var G__9110 = (i__9101_9105 + (1));
seq__9098_9102 = G__9107;
chunk__9099_9103 = G__9108;
count__9100_9104 = G__9109;
i__9101_9105 = G__9110;
continue;
} else {
var temp__5457__auto___9111 = cljs.core.seq.call(null,seq__9098_9102);
if(temp__5457__auto___9111){
var seq__9098_9112__$1 = temp__5457__auto___9111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9098_9112__$1)){
var c__4319__auto___9113 = cljs.core.chunk_first.call(null,seq__9098_9112__$1);
var G__9114 = cljs.core.chunk_rest.call(null,seq__9098_9112__$1);
var G__9115 = c__4319__auto___9113;
var G__9116 = cljs.core.count.call(null,c__4319__auto___9113);
var G__9117 = (0);
seq__9098_9102 = G__9114;
chunk__9099_9103 = G__9115;
count__9100_9104 = G__9116;
i__9101_9105 = G__9117;
continue;
} else {
var c_9118 = cljs.core.first.call(null,seq__9098_9112__$1);
sb.append(cljs.compiler.escape_char.call(null,c_9118));


var G__9119 = cljs.core.next.call(null,seq__9098_9112__$1);
var G__9120 = null;
var G__9121 = (0);
var G__9122 = (0);
seq__9098_9102 = G__9119;
chunk__9099_9103 = G__9120;
count__9100_9104 = G__9121;
i__9101_9105 = G__9122;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__7472__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__7472__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__9123_9128 = ast;
var map__9123_9129__$1 = ((((!((map__9123_9128 == null)))?(((((map__9123_9128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9123_9128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9123_9128):map__9123_9128);
var env_9130 = cljs.core.get.call(null,map__9123_9129__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_9130))){
var map__9125_9131 = env_9130;
var map__9125_9132__$1 = ((((!((map__9125_9131 == null)))?(((((map__9125_9131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9125_9131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9125_9131):map__9125_9131);
var line_9133 = cljs.core.get.call(null,map__9125_9132__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_9134 = cljs.core.get.call(null,map__9125_9132__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__9125_9131,map__9125_9132__$1,line_9133,column_9134,map__9123_9128,map__9123_9129__$1,env_9130,val__7472__auto__){
return (function (m){
var minfo = (function (){var G__9127 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__9127,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__9127;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_9133 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__9125_9131,map__9125_9132__$1,line_9133,column_9134,map__9123_9128,map__9123_9129__$1,env_9130,val__7472__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_9134)?(column_9134 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__9125_9131,map__9125_9132__$1,line_9133,column_9134,map__9123_9128,map__9123_9129__$1,env_9130,val__7472__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__9125_9131,map__9125_9132__$1,line_9133,column_9134,map__9123_9128,map__9123_9129__$1,env_9130,val__7472__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__9125_9131,map__9125_9132__$1,line_9133,column_9134,map__9123_9128,map__9123_9129__$1,env_9130,val__7472__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__9125_9131,map__9125_9132__$1,line_9133,column_9134,map__9123_9128,map__9123_9129__$1,env_9130,val__7472__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__7472__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___9141 = arguments.length;
var i__4500__auto___9142 = (0);
while(true){
if((i__4500__auto___9142 < len__4499__auto___9141)){
args__4502__auto__.push((arguments[i__4500__auto___9142]));

var G__9143 = (i__4500__auto___9142 + (1));
i__4500__auto___9142 = G__9143;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__9137_9144 = cljs.core.seq.call(null,xs);
var chunk__9138_9145 = null;
var count__9139_9146 = (0);
var i__9140_9147 = (0);
while(true){
if((i__9140_9147 < count__9139_9146)){
var x_9148 = cljs.core._nth.call(null,chunk__9138_9145,i__9140_9147);
if((x_9148 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_9148)){
cljs.compiler.emit.call(null,x_9148);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_9148)){
cljs.core.apply.call(null,cljs.compiler.emits,x_9148);
} else {
if(goog.isFunction(x_9148)){
x_9148.call(null);
} else {
var s_9149 = cljs.core.print_str.call(null,x_9148);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9137_9144,chunk__9138_9145,count__9139_9146,i__9140_9147,s_9149,x_9148){
return (function (p1__9135_SHARP_){
return (p1__9135_SHARP_ + cljs.core.count.call(null,s_9149));
});})(seq__9137_9144,chunk__9138_9145,count__9139_9146,i__9140_9147,s_9149,x_9148))
);
}

cljs.core.print.call(null,s_9149);

}
}
}
}


var G__9150 = seq__9137_9144;
var G__9151 = chunk__9138_9145;
var G__9152 = count__9139_9146;
var G__9153 = (i__9140_9147 + (1));
seq__9137_9144 = G__9150;
chunk__9138_9145 = G__9151;
count__9139_9146 = G__9152;
i__9140_9147 = G__9153;
continue;
} else {
var temp__5457__auto___9154 = cljs.core.seq.call(null,seq__9137_9144);
if(temp__5457__auto___9154){
var seq__9137_9155__$1 = temp__5457__auto___9154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9137_9155__$1)){
var c__4319__auto___9156 = cljs.core.chunk_first.call(null,seq__9137_9155__$1);
var G__9157 = cljs.core.chunk_rest.call(null,seq__9137_9155__$1);
var G__9158 = c__4319__auto___9156;
var G__9159 = cljs.core.count.call(null,c__4319__auto___9156);
var G__9160 = (0);
seq__9137_9144 = G__9157;
chunk__9138_9145 = G__9158;
count__9139_9146 = G__9159;
i__9140_9147 = G__9160;
continue;
} else {
var x_9161 = cljs.core.first.call(null,seq__9137_9155__$1);
if((x_9161 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_9161)){
cljs.compiler.emit.call(null,x_9161);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_9161)){
cljs.core.apply.call(null,cljs.compiler.emits,x_9161);
} else {
if(goog.isFunction(x_9161)){
x_9161.call(null);
} else {
var s_9162 = cljs.core.print_str.call(null,x_9161);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9137_9144,chunk__9138_9145,count__9139_9146,i__9140_9147,s_9162,x_9161,seq__9137_9155__$1,temp__5457__auto___9154){
return (function (p1__9135_SHARP_){
return (p1__9135_SHARP_ + cljs.core.count.call(null,s_9162));
});})(seq__9137_9144,chunk__9138_9145,count__9139_9146,i__9140_9147,s_9162,x_9161,seq__9137_9155__$1,temp__5457__auto___9154))
);
}

cljs.core.print.call(null,s_9162);

}
}
}
}


var G__9163 = cljs.core.next.call(null,seq__9137_9155__$1);
var G__9164 = null;
var G__9165 = (0);
var G__9166 = (0);
seq__9137_9144 = G__9163;
chunk__9138_9145 = G__9164;
count__9139_9146 = G__9165;
i__9140_9147 = G__9166;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq9136){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9136));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___9172 = arguments.length;
var i__4500__auto___9173 = (0);
while(true){
if((i__4500__auto___9173 < len__4499__auto___9172)){
args__4502__auto__.push((arguments[i__4500__auto___9173]));

var G__9174 = (i__4500__auto___9173 + (1));
i__4500__auto___9173 = G__9174;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_9168_9175 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_9168_9175;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__9169){
var map__9170 = p__9169;
var map__9170__$1 = ((((!((map__9170 == null)))?(((((map__9170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9170):map__9170);
var m = map__9170__$1;
var gen_line = cljs.core.get.call(null,map__9170__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9167){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9167));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9176_9178 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9177_9179 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9176_9178,_STAR_print_fn_STAR_9177_9179,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_9176_9178,_STAR_print_fn_STAR_9177_9179,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9177_9179;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9176_9178;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__9180 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__9180,(0),null);
var flags = cljs.core.nth.call(null,vec__9180,(1),null);
var pattern = cljs.core.nth.call(null,vec__9180,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__9184){
var map__9185 = p__9184;
var map__9185__$1 = ((((!((map__9185 == null)))?(((((map__9185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9185):map__9185);
var ast = map__9185__$1;
var info = cljs.core.get.call(null,map__9185__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__9185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__9185__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__9187 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__9187__$1 = ((((!((map__9187 == null)))?(((((map__9187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9187):map__9187);
var cenv = map__9187__$1;
var options = cljs.core.get.call(null,map__9187__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3922__auto__ = js_module_name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__9189 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__9189,cljs.analyzer.es5_allowed);
} else {
return G__9189;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__9190 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__9190,reserved);
} else {
return G__9190;
}
})();
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__9191_9192 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__9191_9193__$1 = (((G__9191_9192 instanceof cljs.core.Keyword))?G__9191_9192.fqn:null);
switch (G__9191_9193__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__9195){
var map__9196 = p__9195;
var map__9196__$1 = ((((!((map__9196 == null)))?(((((map__9196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9196):map__9196);
var arg = map__9196__$1;
var env = cljs.core.get.call(null,map__9196__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__9196__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__9196__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__9196__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__9198 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9198__$1 = ((((!((map__9198 == null)))?(((((map__9198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9198):map__9198);
var name = cljs.core.get.call(null,map__9198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__9200){
var map__9201 = p__9200;
var map__9201__$1 = ((((!((map__9201 == null)))?(((((map__9201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9201):map__9201);
var expr = cljs.core.get.call(null,map__9201__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__9201__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__9201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__9203_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9203_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9204){
var map__9205 = p__9204;
var map__9205__$1 = ((((!((map__9205 == null)))?(((((map__9205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9205):map__9205);
var env = cljs.core.get.call(null,map__9205__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__9205__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__9205__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__9207){
var map__9208 = p__9207;
var map__9208__$1 = ((((!((map__9208 == null)))?(((((map__9208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9208):map__9208);
var items = cljs.core.get.call(null,map__9208__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9208__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9210){
var map__9211 = p__9210;
var map__9211__$1 = ((((!((map__9211 == null)))?(((((map__9211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9211):map__9211);
var items = cljs.core.get.call(null,map__9211__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9211__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_9213 = cljs.core.count.call(null,items);
if((cnt_9213 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_9213,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__9214_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9214_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9215){
var map__9216 = p__9215;
var map__9216__$1 = ((((!((map__9216 == null)))?(((((map__9216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9216):map__9216);
var items = cljs.core.get.call(null,map__9216__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__9216__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__9218){
var map__9219 = p__9218;
var map__9219__$1 = ((((!((map__9219 == null)))?(((((map__9219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9219):map__9219);
var items = cljs.core.get.call(null,map__9219__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__9219__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__9219__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___9237 = cljs.core.seq.call(null,items);
if(temp__5457__auto___9237){
var items_9238__$1 = temp__5457__auto___9237;
var vec__9221_9239 = items_9238__$1;
var seq__9222_9240 = cljs.core.seq.call(null,vec__9221_9239);
var first__9223_9241 = cljs.core.first.call(null,seq__9222_9240);
var seq__9222_9242__$1 = cljs.core.next.call(null,seq__9222_9240);
var vec__9224_9243 = first__9223_9241;
var k_9244 = cljs.core.nth.call(null,vec__9224_9243,(0),null);
var v_9245 = cljs.core.nth.call(null,vec__9224_9243,(1),null);
var r_9246 = seq__9222_9242__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_9244),"\": ",v_9245);

var seq__9227_9247 = cljs.core.seq.call(null,r_9246);
var chunk__9228_9248 = null;
var count__9229_9249 = (0);
var i__9230_9250 = (0);
while(true){
if((i__9230_9250 < count__9229_9249)){
var vec__9231_9251 = cljs.core._nth.call(null,chunk__9228_9248,i__9230_9250);
var k_9252__$1 = cljs.core.nth.call(null,vec__9231_9251,(0),null);
var v_9253__$1 = cljs.core.nth.call(null,vec__9231_9251,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9252__$1),"\": ",v_9253__$1);


var G__9254 = seq__9227_9247;
var G__9255 = chunk__9228_9248;
var G__9256 = count__9229_9249;
var G__9257 = (i__9230_9250 + (1));
seq__9227_9247 = G__9254;
chunk__9228_9248 = G__9255;
count__9229_9249 = G__9256;
i__9230_9250 = G__9257;
continue;
} else {
var temp__5457__auto___9258__$1 = cljs.core.seq.call(null,seq__9227_9247);
if(temp__5457__auto___9258__$1){
var seq__9227_9259__$1 = temp__5457__auto___9258__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9227_9259__$1)){
var c__4319__auto___9260 = cljs.core.chunk_first.call(null,seq__9227_9259__$1);
var G__9261 = cljs.core.chunk_rest.call(null,seq__9227_9259__$1);
var G__9262 = c__4319__auto___9260;
var G__9263 = cljs.core.count.call(null,c__4319__auto___9260);
var G__9264 = (0);
seq__9227_9247 = G__9261;
chunk__9228_9248 = G__9262;
count__9229_9249 = G__9263;
i__9230_9250 = G__9264;
continue;
} else {
var vec__9234_9265 = cljs.core.first.call(null,seq__9227_9259__$1);
var k_9266__$1 = cljs.core.nth.call(null,vec__9234_9265,(0),null);
var v_9267__$1 = cljs.core.nth.call(null,vec__9234_9265,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_9266__$1),"\": ",v_9267__$1);


var G__9268 = cljs.core.next.call(null,seq__9227_9259__$1);
var G__9269 = null;
var G__9270 = (0);
var G__9271 = (0);
seq__9227_9247 = G__9268;
chunk__9228_9248 = G__9269;
count__9229_9249 = G__9270;
i__9230_9250 = G__9271;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__9272){
var map__9273 = p__9272;
var map__9273__$1 = ((((!((map__9273 == null)))?(((((map__9273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9273):map__9273);
var items = cljs.core.get.call(null,map__9273__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__9273__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__9273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__9273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__9275){
var map__9276 = p__9275;
var map__9276__$1 = ((((!((map__9276 == null)))?(((((map__9276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9276):map__9276);
var form = cljs.core.get.call(null,map__9276__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__9276__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__9278){
var map__9279 = p__9278;
var map__9279__$1 = ((((!((map__9279 == null)))?(((((map__9279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9279):map__9279);
var op = cljs.core.get.call(null,map__9279__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__9279__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__9279__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__3911__auto__){
var and__3911__auto____$1 = form;
if(cljs.core.truth_(and__3911__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__9281){
var map__9282 = p__9281;
var map__9282__$1 = ((((!((map__9282 == null)))?(((((map__9282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9282):map__9282);
var op = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (((form === false) || ((form == null)))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9284){
var map__9285 = p__9284;
var map__9285__$1 = ((((!((map__9285 == null)))?(((((map__9285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9285):map__9285);
var test = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__9285__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3922__auto__ = unchecked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__9287){
var map__9288 = p__9287;
var map__9288__$1 = ((((!((map__9288 == null)))?(((((map__9288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9288):map__9288);
var v = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__9290_9308 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__9291_9309 = null;
var count__9292_9310 = (0);
var i__9293_9311 = (0);
while(true){
if((i__9293_9311 < count__9292_9310)){
var vec__9294_9312 = cljs.core._nth.call(null,chunk__9291_9309,i__9293_9311);
var ts_9313 = cljs.core.nth.call(null,vec__9294_9312,(0),null);
var then_9314 = cljs.core.nth.call(null,vec__9294_9312,(1),null);
var seq__9297_9315 = cljs.core.seq.call(null,ts_9313);
var chunk__9298_9316 = null;
var count__9299_9317 = (0);
var i__9300_9318 = (0);
while(true){
if((i__9300_9318 < count__9299_9317)){
var test_9319 = cljs.core._nth.call(null,chunk__9298_9316,i__9300_9318);
cljs.compiler.emitln.call(null,"case ",test_9319,":");


var G__9320 = seq__9297_9315;
var G__9321 = chunk__9298_9316;
var G__9322 = count__9299_9317;
var G__9323 = (i__9300_9318 + (1));
seq__9297_9315 = G__9320;
chunk__9298_9316 = G__9321;
count__9299_9317 = G__9322;
i__9300_9318 = G__9323;
continue;
} else {
var temp__5457__auto___9324 = cljs.core.seq.call(null,seq__9297_9315);
if(temp__5457__auto___9324){
var seq__9297_9325__$1 = temp__5457__auto___9324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9297_9325__$1)){
var c__4319__auto___9326 = cljs.core.chunk_first.call(null,seq__9297_9325__$1);
var G__9327 = cljs.core.chunk_rest.call(null,seq__9297_9325__$1);
var G__9328 = c__4319__auto___9326;
var G__9329 = cljs.core.count.call(null,c__4319__auto___9326);
var G__9330 = (0);
seq__9297_9315 = G__9327;
chunk__9298_9316 = G__9328;
count__9299_9317 = G__9329;
i__9300_9318 = G__9330;
continue;
} else {
var test_9331 = cljs.core.first.call(null,seq__9297_9325__$1);
cljs.compiler.emitln.call(null,"case ",test_9331,":");


var G__9332 = cljs.core.next.call(null,seq__9297_9325__$1);
var G__9333 = null;
var G__9334 = (0);
var G__9335 = (0);
seq__9297_9315 = G__9332;
chunk__9298_9316 = G__9333;
count__9299_9317 = G__9334;
i__9300_9318 = G__9335;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9314);
} else {
cljs.compiler.emitln.call(null,then_9314);
}

cljs.compiler.emitln.call(null,"break;");


var G__9336 = seq__9290_9308;
var G__9337 = chunk__9291_9309;
var G__9338 = count__9292_9310;
var G__9339 = (i__9293_9311 + (1));
seq__9290_9308 = G__9336;
chunk__9291_9309 = G__9337;
count__9292_9310 = G__9338;
i__9293_9311 = G__9339;
continue;
} else {
var temp__5457__auto___9340 = cljs.core.seq.call(null,seq__9290_9308);
if(temp__5457__auto___9340){
var seq__9290_9341__$1 = temp__5457__auto___9340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9290_9341__$1)){
var c__4319__auto___9342 = cljs.core.chunk_first.call(null,seq__9290_9341__$1);
var G__9343 = cljs.core.chunk_rest.call(null,seq__9290_9341__$1);
var G__9344 = c__4319__auto___9342;
var G__9345 = cljs.core.count.call(null,c__4319__auto___9342);
var G__9346 = (0);
seq__9290_9308 = G__9343;
chunk__9291_9309 = G__9344;
count__9292_9310 = G__9345;
i__9293_9311 = G__9346;
continue;
} else {
var vec__9301_9347 = cljs.core.first.call(null,seq__9290_9341__$1);
var ts_9348 = cljs.core.nth.call(null,vec__9301_9347,(0),null);
var then_9349 = cljs.core.nth.call(null,vec__9301_9347,(1),null);
var seq__9304_9350 = cljs.core.seq.call(null,ts_9348);
var chunk__9305_9351 = null;
var count__9306_9352 = (0);
var i__9307_9353 = (0);
while(true){
if((i__9307_9353 < count__9306_9352)){
var test_9354 = cljs.core._nth.call(null,chunk__9305_9351,i__9307_9353);
cljs.compiler.emitln.call(null,"case ",test_9354,":");


var G__9355 = seq__9304_9350;
var G__9356 = chunk__9305_9351;
var G__9357 = count__9306_9352;
var G__9358 = (i__9307_9353 + (1));
seq__9304_9350 = G__9355;
chunk__9305_9351 = G__9356;
count__9306_9352 = G__9357;
i__9307_9353 = G__9358;
continue;
} else {
var temp__5457__auto___9359__$1 = cljs.core.seq.call(null,seq__9304_9350);
if(temp__5457__auto___9359__$1){
var seq__9304_9360__$1 = temp__5457__auto___9359__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9304_9360__$1)){
var c__4319__auto___9361 = cljs.core.chunk_first.call(null,seq__9304_9360__$1);
var G__9362 = cljs.core.chunk_rest.call(null,seq__9304_9360__$1);
var G__9363 = c__4319__auto___9361;
var G__9364 = cljs.core.count.call(null,c__4319__auto___9361);
var G__9365 = (0);
seq__9304_9350 = G__9362;
chunk__9305_9351 = G__9363;
count__9306_9352 = G__9364;
i__9307_9353 = G__9365;
continue;
} else {
var test_9366 = cljs.core.first.call(null,seq__9304_9360__$1);
cljs.compiler.emitln.call(null,"case ",test_9366,":");


var G__9367 = cljs.core.next.call(null,seq__9304_9360__$1);
var G__9368 = null;
var G__9369 = (0);
var G__9370 = (0);
seq__9304_9350 = G__9367;
chunk__9305_9351 = G__9368;
count__9306_9352 = G__9369;
i__9307_9353 = G__9370;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_9349);
} else {
cljs.compiler.emitln.call(null,then_9349);
}

cljs.compiler.emitln.call(null,"break;");


var G__9371 = cljs.core.next.call(null,seq__9290_9341__$1);
var G__9372 = null;
var G__9373 = (0);
var G__9374 = (0);
seq__9290_9308 = G__9371;
chunk__9291_9309 = G__9372;
count__9292_9310 = G__9373;
i__9293_9311 = G__9374;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__9375){
var map__9376 = p__9375;
var map__9376__$1 = ((((!((map__9376 == null)))?(((((map__9376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9376):map__9376);
var throw$ = cljs.core.get.call(null,map__9376__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__9376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__9379 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__9379,(0),null);
var rstr = cljs.core.nth.call(null,vec__9379,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__9379,fstr,rstr,ret_t,axstr){
return (function (p1__9378_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__9378_SHARP_);
});})(idx,vec__9379,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__9382 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9382),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__9382;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__9383_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__9383_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__9384 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__9385 = cljs.core.seq.call(null,vec__9384);
var first__9386 = cljs.core.first.call(null,seq__9385);
var seq__9385__$1 = cljs.core.next.call(null,seq__9385);
var p = first__9386;
var first__9386__$1 = cljs.core.first.call(null,seq__9385__$1);
var seq__9385__$2 = cljs.core.next.call(null,seq__9385__$1);
var ts = first__9386__$1;
var first__9386__$2 = cljs.core.first.call(null,seq__9385__$2);
var seq__9385__$3 = cljs.core.next.call(null,seq__9385__$2);
var n = first__9386__$2;
var xs = seq__9385__$3;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__9387 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__9388 = cljs.core.seq.call(null,vec__9387);
var first__9389 = cljs.core.first.call(null,seq__9388);
var seq__9388__$1 = cljs.core.next.call(null,seq__9388);
var p = first__9389;
var first__9389__$1 = cljs.core.first.call(null,seq__9388__$1);
var seq__9388__$2 = cljs.core.next.call(null,seq__9388__$1);
var ts = first__9389__$1;
var xs = seq__9388__$2;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__9392 = arguments.length;
switch (G__9392) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__9400 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__9390_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__9390_SHARP_);
} else {
return p1__9390_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__9401 = cljs.core.seq.call(null,vec__9400);
var first__9402 = cljs.core.first.call(null,seq__9401);
var seq__9401__$1 = cljs.core.next.call(null,seq__9401);
var x = first__9402;
var ys = seq__9401__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__9403 = cljs.core.seq.call(null,ys);
var chunk__9404 = null;
var count__9405 = (0);
var i__9406 = (0);
while(true){
if((i__9406 < count__9405)){
var next_line = cljs.core._nth.call(null,chunk__9404,i__9406);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__9412 = seq__9403;
var G__9413 = chunk__9404;
var G__9414 = count__9405;
var G__9415 = (i__9406 + (1));
seq__9403 = G__9412;
chunk__9404 = G__9413;
count__9405 = G__9414;
i__9406 = G__9415;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9403);
if(temp__5457__auto__){
var seq__9403__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9403__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9403__$1);
var G__9416 = cljs.core.chunk_rest.call(null,seq__9403__$1);
var G__9417 = c__4319__auto__;
var G__9418 = cljs.core.count.call(null,c__4319__auto__);
var G__9419 = (0);
seq__9403 = G__9416;
chunk__9404 = G__9417;
count__9405 = G__9418;
i__9406 = G__9419;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__9403__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__9420 = cljs.core.next.call(null,seq__9403__$1);
var G__9421 = null;
var G__9422 = (0);
var G__9423 = (0);
seq__9403 = G__9420;
chunk__9404 = G__9421;
count__9405 = G__9422;
i__9406 = G__9423;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__9407_9424 = cljs.core.seq.call(null,docs__$2);
var chunk__9408_9425 = null;
var count__9409_9426 = (0);
var i__9410_9427 = (0);
while(true){
if((i__9410_9427 < count__9409_9426)){
var e_9428 = cljs.core._nth.call(null,chunk__9408_9425,i__9410_9427);
if(cljs.core.truth_(e_9428)){
print_comment_lines.call(null,e_9428);
} else {
}


var G__9429 = seq__9407_9424;
var G__9430 = chunk__9408_9425;
var G__9431 = count__9409_9426;
var G__9432 = (i__9410_9427 + (1));
seq__9407_9424 = G__9429;
chunk__9408_9425 = G__9430;
count__9409_9426 = G__9431;
i__9410_9427 = G__9432;
continue;
} else {
var temp__5457__auto___9433 = cljs.core.seq.call(null,seq__9407_9424);
if(temp__5457__auto___9433){
var seq__9407_9434__$1 = temp__5457__auto___9433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9407_9434__$1)){
var c__4319__auto___9435 = cljs.core.chunk_first.call(null,seq__9407_9434__$1);
var G__9436 = cljs.core.chunk_rest.call(null,seq__9407_9434__$1);
var G__9437 = c__4319__auto___9435;
var G__9438 = cljs.core.count.call(null,c__4319__auto___9435);
var G__9439 = (0);
seq__9407_9424 = G__9436;
chunk__9408_9425 = G__9437;
count__9409_9426 = G__9438;
i__9410_9427 = G__9439;
continue;
} else {
var e_9440 = cljs.core.first.call(null,seq__9407_9434__$1);
if(cljs.core.truth_(e_9440)){
print_comment_lines.call(null,e_9440);
} else {
}


var G__9441 = cljs.core.next.call(null,seq__9407_9434__$1);
var G__9442 = null;
var G__9443 = (0);
var G__9444 = (0);
seq__9407_9424 = G__9441;
chunk__9408_9425 = G__9442;
count__9409_9426 = G__9443;
i__9410_9427 = G__9444;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3911__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__9446_SHARP_){
return goog.string.startsWith(p1__9446_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = opts;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3911__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__9447){
var map__9448 = p__9447;
var map__9448__$1 = ((((!((map__9448 == null)))?(((((map__9448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9448):map__9448);
var name = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__9448__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3922__auto__ = init;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3911__auto__){
return test;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__9450){
var map__9451 = p__9450;
var map__9451__$1 = ((((!((map__9451 == null)))?(((((map__9451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9451):map__9451);
var name = cljs.core.get.call(null,map__9451__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__9451__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__9451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__9453_9471 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__9454_9472 = null;
var count__9455_9473 = (0);
var i__9456_9474 = (0);
while(true){
if((i__9456_9474 < count__9455_9473)){
var vec__9457_9475 = cljs.core._nth.call(null,chunk__9454_9472,i__9456_9474);
var i_9476 = cljs.core.nth.call(null,vec__9457_9475,(0),null);
var param_9477 = cljs.core.nth.call(null,vec__9457_9475,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9477);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__9478 = seq__9453_9471;
var G__9479 = chunk__9454_9472;
var G__9480 = count__9455_9473;
var G__9481 = (i__9456_9474 + (1));
seq__9453_9471 = G__9478;
chunk__9454_9472 = G__9479;
count__9455_9473 = G__9480;
i__9456_9474 = G__9481;
continue;
} else {
var temp__5457__auto___9482 = cljs.core.seq.call(null,seq__9453_9471);
if(temp__5457__auto___9482){
var seq__9453_9483__$1 = temp__5457__auto___9482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9453_9483__$1)){
var c__4319__auto___9484 = cljs.core.chunk_first.call(null,seq__9453_9483__$1);
var G__9485 = cljs.core.chunk_rest.call(null,seq__9453_9483__$1);
var G__9486 = c__4319__auto___9484;
var G__9487 = cljs.core.count.call(null,c__4319__auto___9484);
var G__9488 = (0);
seq__9453_9471 = G__9485;
chunk__9454_9472 = G__9486;
count__9455_9473 = G__9487;
i__9456_9474 = G__9488;
continue;
} else {
var vec__9460_9489 = cljs.core.first.call(null,seq__9453_9483__$1);
var i_9490 = cljs.core.nth.call(null,vec__9460_9489,(0),null);
var param_9491 = cljs.core.nth.call(null,vec__9460_9489,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_9491);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__9492 = cljs.core.next.call(null,seq__9453_9483__$1);
var G__9493 = null;
var G__9494 = (0);
var G__9495 = (0);
seq__9453_9471 = G__9492;
chunk__9454_9472 = G__9493;
count__9455_9473 = G__9494;
i__9456_9474 = G__9495;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__9463_9496 = cljs.core.seq.call(null,params);
var chunk__9464_9497 = null;
var count__9465_9498 = (0);
var i__9466_9499 = (0);
while(true){
if((i__9466_9499 < count__9465_9498)){
var param_9500 = cljs.core._nth.call(null,chunk__9464_9497,i__9466_9499);
cljs.compiler.emit.call(null,param_9500);

if(cljs.core._EQ_.call(null,param_9500,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9501 = seq__9463_9496;
var G__9502 = chunk__9464_9497;
var G__9503 = count__9465_9498;
var G__9504 = (i__9466_9499 + (1));
seq__9463_9496 = G__9501;
chunk__9464_9497 = G__9502;
count__9465_9498 = G__9503;
i__9466_9499 = G__9504;
continue;
} else {
var temp__5457__auto___9505 = cljs.core.seq.call(null,seq__9463_9496);
if(temp__5457__auto___9505){
var seq__9463_9506__$1 = temp__5457__auto___9505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9463_9506__$1)){
var c__4319__auto___9507 = cljs.core.chunk_first.call(null,seq__9463_9506__$1);
var G__9508 = cljs.core.chunk_rest.call(null,seq__9463_9506__$1);
var G__9509 = c__4319__auto___9507;
var G__9510 = cljs.core.count.call(null,c__4319__auto___9507);
var G__9511 = (0);
seq__9463_9496 = G__9508;
chunk__9464_9497 = G__9509;
count__9465_9498 = G__9510;
i__9466_9499 = G__9511;
continue;
} else {
var param_9512 = cljs.core.first.call(null,seq__9463_9506__$1);
cljs.compiler.emit.call(null,param_9512);

if(cljs.core._EQ_.call(null,param_9512,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9513 = cljs.core.next.call(null,seq__9463_9506__$1);
var G__9514 = null;
var G__9515 = (0);
var G__9516 = (0);
seq__9463_9496 = G__9513;
chunk__9464_9497 = G__9514;
count__9465_9498 = G__9515;
i__9466_9499 = G__9516;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__9467_9517 = cljs.core.seq.call(null,params);
var chunk__9468_9518 = null;
var count__9469_9519 = (0);
var i__9470_9520 = (0);
while(true){
if((i__9470_9520 < count__9469_9519)){
var param_9521 = cljs.core._nth.call(null,chunk__9468_9518,i__9470_9520);
cljs.compiler.emit.call(null,param_9521);

if(cljs.core._EQ_.call(null,param_9521,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9522 = seq__9467_9517;
var G__9523 = chunk__9468_9518;
var G__9524 = count__9469_9519;
var G__9525 = (i__9470_9520 + (1));
seq__9467_9517 = G__9522;
chunk__9468_9518 = G__9523;
count__9469_9519 = G__9524;
i__9470_9520 = G__9525;
continue;
} else {
var temp__5457__auto___9526 = cljs.core.seq.call(null,seq__9467_9517);
if(temp__5457__auto___9526){
var seq__9467_9527__$1 = temp__5457__auto___9526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9467_9527__$1)){
var c__4319__auto___9528 = cljs.core.chunk_first.call(null,seq__9467_9527__$1);
var G__9529 = cljs.core.chunk_rest.call(null,seq__9467_9527__$1);
var G__9530 = c__4319__auto___9528;
var G__9531 = cljs.core.count.call(null,c__4319__auto___9528);
var G__9532 = (0);
seq__9467_9517 = G__9529;
chunk__9468_9518 = G__9530;
count__9469_9519 = G__9531;
i__9470_9520 = G__9532;
continue;
} else {
var param_9533 = cljs.core.first.call(null,seq__9467_9527__$1);
cljs.compiler.emit.call(null,param_9533);

if(cljs.core._EQ_.call(null,param_9533,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9534 = cljs.core.next.call(null,seq__9467_9527__$1);
var G__9535 = null;
var G__9536 = (0);
var G__9537 = (0);
seq__9467_9517 = G__9534;
chunk__9468_9518 = G__9535;
count__9469_9519 = G__9536;
i__9470_9520 = G__9537;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__9538 = cljs.core.seq.call(null,params);
var chunk__9539 = null;
var count__9540 = (0);
var i__9541 = (0);
while(true){
if((i__9541 < count__9540)){
var param = cljs.core._nth.call(null,chunk__9539,i__9541);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9542 = seq__9538;
var G__9543 = chunk__9539;
var G__9544 = count__9540;
var G__9545 = (i__9541 + (1));
seq__9538 = G__9542;
chunk__9539 = G__9543;
count__9540 = G__9544;
i__9541 = G__9545;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9538);
if(temp__5457__auto__){
var seq__9538__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9538__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9538__$1);
var G__9546 = cljs.core.chunk_rest.call(null,seq__9538__$1);
var G__9547 = c__4319__auto__;
var G__9548 = cljs.core.count.call(null,c__4319__auto__);
var G__9549 = (0);
seq__9538 = G__9546;
chunk__9539 = G__9547;
count__9540 = G__9548;
i__9541 = G__9549;
continue;
} else {
var param = cljs.core.first.call(null,seq__9538__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9550 = cljs.core.next.call(null,seq__9538__$1);
var G__9551 = null;
var G__9552 = (0);
var G__9553 = (0);
seq__9538 = G__9550;
chunk__9539 = G__9551;
count__9540 = G__9552;
i__9541 = G__9553;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9554){
var map__9555 = p__9554;
var map__9555__$1 = ((((!((map__9555 == null)))?(((((map__9555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9555):map__9555);
var type = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__9555__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9557){
var map__9558 = p__9557;
var map__9558__$1 = ((((!((map__9558 == null)))?(((((map__9558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9558):map__9558);
var f = map__9558__$1;
var type = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__9558__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_9568__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9569 = cljs.compiler.munge.call(null,name_9568__$1);
var delegate_name_9570 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_9569),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_9570," = function (");

var seq__9560_9571 = cljs.core.seq.call(null,params);
var chunk__9561_9572 = null;
var count__9562_9573 = (0);
var i__9563_9574 = (0);
while(true){
if((i__9563_9574 < count__9562_9573)){
var param_9575 = cljs.core._nth.call(null,chunk__9561_9572,i__9563_9574);
cljs.compiler.emit.call(null,param_9575);

if(cljs.core._EQ_.call(null,param_9575,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9576 = seq__9560_9571;
var G__9577 = chunk__9561_9572;
var G__9578 = count__9562_9573;
var G__9579 = (i__9563_9574 + (1));
seq__9560_9571 = G__9576;
chunk__9561_9572 = G__9577;
count__9562_9573 = G__9578;
i__9563_9574 = G__9579;
continue;
} else {
var temp__5457__auto___9580 = cljs.core.seq.call(null,seq__9560_9571);
if(temp__5457__auto___9580){
var seq__9560_9581__$1 = temp__5457__auto___9580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9560_9581__$1)){
var c__4319__auto___9582 = cljs.core.chunk_first.call(null,seq__9560_9581__$1);
var G__9583 = cljs.core.chunk_rest.call(null,seq__9560_9581__$1);
var G__9584 = c__4319__auto___9582;
var G__9585 = cljs.core.count.call(null,c__4319__auto___9582);
var G__9586 = (0);
seq__9560_9571 = G__9583;
chunk__9561_9572 = G__9584;
count__9562_9573 = G__9585;
i__9563_9574 = G__9586;
continue;
} else {
var param_9587 = cljs.core.first.call(null,seq__9560_9581__$1);
cljs.compiler.emit.call(null,param_9587);

if(cljs.core._EQ_.call(null,param_9587,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9588 = cljs.core.next.call(null,seq__9560_9581__$1);
var G__9589 = null;
var G__9590 = (0);
var G__9591 = (0);
seq__9560_9571 = G__9588;
chunk__9561_9572 = G__9589;
count__9562_9573 = G__9590;
i__9563_9574 = G__9591;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_9569," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_9592 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_9592,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_9570,".call(this,");

var seq__9564_9593 = cljs.core.seq.call(null,params);
var chunk__9565_9594 = null;
var count__9566_9595 = (0);
var i__9567_9596 = (0);
while(true){
if((i__9567_9596 < count__9566_9595)){
var param_9597 = cljs.core._nth.call(null,chunk__9565_9594,i__9567_9596);
cljs.compiler.emit.call(null,param_9597);

if(cljs.core._EQ_.call(null,param_9597,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9598 = seq__9564_9593;
var G__9599 = chunk__9565_9594;
var G__9600 = count__9566_9595;
var G__9601 = (i__9567_9596 + (1));
seq__9564_9593 = G__9598;
chunk__9565_9594 = G__9599;
count__9566_9595 = G__9600;
i__9567_9596 = G__9601;
continue;
} else {
var temp__5457__auto___9602 = cljs.core.seq.call(null,seq__9564_9593);
if(temp__5457__auto___9602){
var seq__9564_9603__$1 = temp__5457__auto___9602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9564_9603__$1)){
var c__4319__auto___9604 = cljs.core.chunk_first.call(null,seq__9564_9603__$1);
var G__9605 = cljs.core.chunk_rest.call(null,seq__9564_9603__$1);
var G__9606 = c__4319__auto___9604;
var G__9607 = cljs.core.count.call(null,c__4319__auto___9604);
var G__9608 = (0);
seq__9564_9593 = G__9605;
chunk__9565_9594 = G__9606;
count__9566_9595 = G__9607;
i__9567_9596 = G__9608;
continue;
} else {
var param_9609 = cljs.core.first.call(null,seq__9564_9603__$1);
cljs.compiler.emit.call(null,param_9609);

if(cljs.core._EQ_.call(null,param_9609,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__9610 = cljs.core.next.call(null,seq__9564_9603__$1);
var G__9611 = null;
var G__9612 = (0);
var G__9613 = (0);
seq__9564_9593 = G__9610;
chunk__9565_9594 = G__9611;
count__9566_9595 = G__9612;
i__9567_9596 = G__9613;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_9569,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_9569,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_9568__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_9569,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_9570,";");

cljs.compiler.emitln.call(null,"return ",mname_9569,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__9617){
var map__9618 = p__9617;
var map__9618__$1 = ((((!((map__9618 == null)))?(((((map__9618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9618):map__9618);
var name = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__9618__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9614_SHARP_){
var and__3911__auto__ = p1__9614_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9614_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_9653__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_9654 = cljs.compiler.munge.call(null,name_9653__$1);
var maxparams_9655 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_9656 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_9653__$1,mname_9654,maxparams_9655,loop_locals,map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_9654),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_9653__$1,mname_9654,maxparams_9655,loop_locals,map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_9657 = cljs.core.sort_by.call(null,((function (name_9653__$1,mname_9654,maxparams_9655,mmap_9656,loop_locals,map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9615_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__9615_SHARP_)));
});})(name_9653__$1,mname_9654,maxparams_9655,mmap_9656,loop_locals,map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_9656));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_9654," = null;");

var seq__9620_9658 = cljs.core.seq.call(null,ms_9657);
var chunk__9621_9659 = null;
var count__9622_9660 = (0);
var i__9623_9661 = (0);
while(true){
if((i__9623_9661 < count__9622_9660)){
var vec__9624_9662 = cljs.core._nth.call(null,chunk__9621_9659,i__9623_9661);
var n_9663 = cljs.core.nth.call(null,vec__9624_9662,(0),null);
var meth_9664 = cljs.core.nth.call(null,vec__9624_9662,(1),null);
cljs.compiler.emits.call(null,"var ",n_9663," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9664))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9664);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9664);
}

cljs.compiler.emitln.call(null,";");


var G__9665 = seq__9620_9658;
var G__9666 = chunk__9621_9659;
var G__9667 = count__9622_9660;
var G__9668 = (i__9623_9661 + (1));
seq__9620_9658 = G__9665;
chunk__9621_9659 = G__9666;
count__9622_9660 = G__9667;
i__9623_9661 = G__9668;
continue;
} else {
var temp__5457__auto___9669 = cljs.core.seq.call(null,seq__9620_9658);
if(temp__5457__auto___9669){
var seq__9620_9670__$1 = temp__5457__auto___9669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9620_9670__$1)){
var c__4319__auto___9671 = cljs.core.chunk_first.call(null,seq__9620_9670__$1);
var G__9672 = cljs.core.chunk_rest.call(null,seq__9620_9670__$1);
var G__9673 = c__4319__auto___9671;
var G__9674 = cljs.core.count.call(null,c__4319__auto___9671);
var G__9675 = (0);
seq__9620_9658 = G__9672;
chunk__9621_9659 = G__9673;
count__9622_9660 = G__9674;
i__9623_9661 = G__9675;
continue;
} else {
var vec__9627_9676 = cljs.core.first.call(null,seq__9620_9670__$1);
var n_9677 = cljs.core.nth.call(null,vec__9627_9676,(0),null);
var meth_9678 = cljs.core.nth.call(null,vec__9627_9676,(1),null);
cljs.compiler.emits.call(null,"var ",n_9677," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9678))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_9678);
} else {
cljs.compiler.emit_fn_method.call(null,meth_9678);
}

cljs.compiler.emitln.call(null,";");


var G__9679 = cljs.core.next.call(null,seq__9620_9670__$1);
var G__9680 = null;
var G__9681 = (0);
var G__9682 = (0);
seq__9620_9658 = G__9679;
chunk__9621_9659 = G__9680;
count__9622_9660 = G__9681;
i__9623_9661 = G__9682;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_9654," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_9655),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_9655)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_9655));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__9630_9683 = cljs.core.seq.call(null,ms_9657);
var chunk__9631_9684 = null;
var count__9632_9685 = (0);
var i__9633_9686 = (0);
while(true){
if((i__9633_9686 < count__9632_9685)){
var vec__9634_9687 = cljs.core._nth.call(null,chunk__9631_9684,i__9633_9686);
var n_9688 = cljs.core.nth.call(null,vec__9634_9687,(0),null);
var meth_9689 = cljs.core.nth.call(null,vec__9634_9687,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9689))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9690 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9690," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9691 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9690," = new cljs.core.IndexedSeq(",a_9691,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9688,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9655)),(((cljs.core.count.call(null,maxparams_9655) > (1)))?", ":null),restarg_9690,");");
} else {
var pcnt_9692 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9689));
cljs.compiler.emitln.call(null,"case ",pcnt_9692,":");

cljs.compiler.emitln.call(null,"return ",n_9688,".call(this",(((pcnt_9692 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9692,maxparams_9655)),null,(1),null)),(2),null))),");");
}


var G__9693 = seq__9630_9683;
var G__9694 = chunk__9631_9684;
var G__9695 = count__9632_9685;
var G__9696 = (i__9633_9686 + (1));
seq__9630_9683 = G__9693;
chunk__9631_9684 = G__9694;
count__9632_9685 = G__9695;
i__9633_9686 = G__9696;
continue;
} else {
var temp__5457__auto___9697 = cljs.core.seq.call(null,seq__9630_9683);
if(temp__5457__auto___9697){
var seq__9630_9698__$1 = temp__5457__auto___9697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9630_9698__$1)){
var c__4319__auto___9699 = cljs.core.chunk_first.call(null,seq__9630_9698__$1);
var G__9700 = cljs.core.chunk_rest.call(null,seq__9630_9698__$1);
var G__9701 = c__4319__auto___9699;
var G__9702 = cljs.core.count.call(null,c__4319__auto___9699);
var G__9703 = (0);
seq__9630_9683 = G__9700;
chunk__9631_9684 = G__9701;
count__9632_9685 = G__9702;
i__9633_9686 = G__9703;
continue;
} else {
var vec__9637_9704 = cljs.core.first.call(null,seq__9630_9698__$1);
var n_9705 = cljs.core.nth.call(null,vec__9637_9704,(0),null);
var meth_9706 = cljs.core.nth.call(null,vec__9637_9704,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9706))){
cljs.compiler.emitln.call(null,"default:");

var restarg_9707 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_9707," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_9708 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_9707," = new cljs.core.IndexedSeq(",a_9708,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_9705,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_9655)),(((cljs.core.count.call(null,maxparams_9655) > (1)))?", ":null),restarg_9707,");");
} else {
var pcnt_9709 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9706));
cljs.compiler.emitln.call(null,"case ",pcnt_9709,":");

cljs.compiler.emitln.call(null,"return ",n_9705,".call(this",(((pcnt_9709 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_9709,maxparams_9655)),null,(1),null)),(2),null))),");");
}


var G__9710 = cljs.core.next.call(null,seq__9630_9698__$1);
var G__9711 = null;
var G__9712 = (0);
var G__9713 = (0);
seq__9630_9683 = G__9710;
chunk__9631_9684 = G__9711;
count__9632_9685 = G__9712;
i__9633_9686 = G__9713;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_9654,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_9654,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_9653__$1,mname_9654,maxparams_9655,mmap_9656,ms_9657,loop_locals,map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9616_SHARP_){
var vec__9640 = p1__9616_SHARP_;
var n = cljs.core.nth.call(null,vec__9640,(0),null);
var m = cljs.core.nth.call(null,vec__9640,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_9653__$1,mname_9654,maxparams_9655,mmap_9656,ms_9657,loop_locals,map__9618,map__9618__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_9657),".cljs$lang$applyTo;");
} else {
}

var seq__9643_9714 = cljs.core.seq.call(null,ms_9657);
var chunk__9644_9715 = null;
var count__9645_9716 = (0);
var i__9646_9717 = (0);
while(true){
if((i__9646_9717 < count__9645_9716)){
var vec__9647_9718 = cljs.core._nth.call(null,chunk__9644_9715,i__9646_9717);
var n_9719 = cljs.core.nth.call(null,vec__9647_9718,(0),null);
var meth_9720 = cljs.core.nth.call(null,vec__9647_9718,(1),null);
var c_9721 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9720));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9720))){
cljs.compiler.emitln.call(null,mname_9654,".cljs$core$IFn$_invoke$arity$variadic = ",n_9719,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9654,".cljs$core$IFn$_invoke$arity$",c_9721," = ",n_9719,";");
}


var G__9722 = seq__9643_9714;
var G__9723 = chunk__9644_9715;
var G__9724 = count__9645_9716;
var G__9725 = (i__9646_9717 + (1));
seq__9643_9714 = G__9722;
chunk__9644_9715 = G__9723;
count__9645_9716 = G__9724;
i__9646_9717 = G__9725;
continue;
} else {
var temp__5457__auto___9726 = cljs.core.seq.call(null,seq__9643_9714);
if(temp__5457__auto___9726){
var seq__9643_9727__$1 = temp__5457__auto___9726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9643_9727__$1)){
var c__4319__auto___9728 = cljs.core.chunk_first.call(null,seq__9643_9727__$1);
var G__9729 = cljs.core.chunk_rest.call(null,seq__9643_9727__$1);
var G__9730 = c__4319__auto___9728;
var G__9731 = cljs.core.count.call(null,c__4319__auto___9728);
var G__9732 = (0);
seq__9643_9714 = G__9729;
chunk__9644_9715 = G__9730;
count__9645_9716 = G__9731;
i__9646_9717 = G__9732;
continue;
} else {
var vec__9650_9733 = cljs.core.first.call(null,seq__9643_9727__$1);
var n_9734 = cljs.core.nth.call(null,vec__9650_9733,(0),null);
var meth_9735 = cljs.core.nth.call(null,vec__9650_9733,(1),null);
var c_9736 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9735));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9735))){
cljs.compiler.emitln.call(null,mname_9654,".cljs$core$IFn$_invoke$arity$variadic = ",n_9734,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_9654,".cljs$core$IFn$_invoke$arity$",c_9736," = ",n_9734,";");
}


var G__9737 = cljs.core.next.call(null,seq__9643_9727__$1);
var G__9738 = null;
var G__9739 = (0);
var G__9740 = (0);
seq__9643_9714 = G__9737;
chunk__9644_9715 = G__9738;
count__9645_9716 = G__9739;
i__9646_9717 = G__9740;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_9654,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__9741){
var map__9742 = p__9741;
var map__9742__$1 = ((((!((map__9742 == null)))?(((((map__9742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9742):map__9742);
var statements = cljs.core.get.call(null,map__9742__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__9742__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__9742__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__9744_9748 = cljs.core.seq.call(null,statements);
var chunk__9745_9749 = null;
var count__9746_9750 = (0);
var i__9747_9751 = (0);
while(true){
if((i__9747_9751 < count__9746_9750)){
var s_9752 = cljs.core._nth.call(null,chunk__9745_9749,i__9747_9751);
cljs.compiler.emitln.call(null,s_9752);


var G__9753 = seq__9744_9748;
var G__9754 = chunk__9745_9749;
var G__9755 = count__9746_9750;
var G__9756 = (i__9747_9751 + (1));
seq__9744_9748 = G__9753;
chunk__9745_9749 = G__9754;
count__9746_9750 = G__9755;
i__9747_9751 = G__9756;
continue;
} else {
var temp__5457__auto___9757 = cljs.core.seq.call(null,seq__9744_9748);
if(temp__5457__auto___9757){
var seq__9744_9758__$1 = temp__5457__auto___9757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9744_9758__$1)){
var c__4319__auto___9759 = cljs.core.chunk_first.call(null,seq__9744_9758__$1);
var G__9760 = cljs.core.chunk_rest.call(null,seq__9744_9758__$1);
var G__9761 = c__4319__auto___9759;
var G__9762 = cljs.core.count.call(null,c__4319__auto___9759);
var G__9763 = (0);
seq__9744_9748 = G__9760;
chunk__9745_9749 = G__9761;
count__9746_9750 = G__9762;
i__9747_9751 = G__9763;
continue;
} else {
var s_9764 = cljs.core.first.call(null,seq__9744_9758__$1);
cljs.compiler.emitln.call(null,s_9764);


var G__9765 = cljs.core.next.call(null,seq__9744_9758__$1);
var G__9766 = null;
var G__9767 = (0);
var G__9768 = (0);
seq__9744_9748 = G__9765;
chunk__9745_9749 = G__9766;
count__9746_9750 = G__9767;
i__9747_9751 = G__9768;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__9769){
var map__9770 = p__9769;
var map__9770__$1 = ((((!((map__9770 == null)))?(((((map__9770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9770):map__9770);
var env = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__9772,is_loop){
var map__9773 = p__9772;
var map__9773__$1 = ((((!((map__9773 == null)))?(((((map__9773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9773):map__9773);
var bindings = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_9775_9784 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_9775_9784,context,map__9773,map__9773__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_9775_9784,context,map__9773,map__9773__$1,bindings,expr,env))
,bindings):null));

try{var seq__9776_9785 = cljs.core.seq.call(null,bindings);
var chunk__9777_9786 = null;
var count__9778_9787 = (0);
var i__9779_9788 = (0);
while(true){
if((i__9779_9788 < count__9778_9787)){
var map__9780_9789 = cljs.core._nth.call(null,chunk__9777_9786,i__9779_9788);
var map__9780_9790__$1 = ((((!((map__9780_9789 == null)))?(((((map__9780_9789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9780_9789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9780_9789):map__9780_9789);
var binding_9791 = map__9780_9790__$1;
var init_9792 = cljs.core.get.call(null,map__9780_9790__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_9791);

cljs.compiler.emitln.call(null," = ",init_9792,";");


var G__9793 = seq__9776_9785;
var G__9794 = chunk__9777_9786;
var G__9795 = count__9778_9787;
var G__9796 = (i__9779_9788 + (1));
seq__9776_9785 = G__9793;
chunk__9777_9786 = G__9794;
count__9778_9787 = G__9795;
i__9779_9788 = G__9796;
continue;
} else {
var temp__5457__auto___9797 = cljs.core.seq.call(null,seq__9776_9785);
if(temp__5457__auto___9797){
var seq__9776_9798__$1 = temp__5457__auto___9797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9776_9798__$1)){
var c__4319__auto___9799 = cljs.core.chunk_first.call(null,seq__9776_9798__$1);
var G__9800 = cljs.core.chunk_rest.call(null,seq__9776_9798__$1);
var G__9801 = c__4319__auto___9799;
var G__9802 = cljs.core.count.call(null,c__4319__auto___9799);
var G__9803 = (0);
seq__9776_9785 = G__9800;
chunk__9777_9786 = G__9801;
count__9778_9787 = G__9802;
i__9779_9788 = G__9803;
continue;
} else {
var map__9782_9804 = cljs.core.first.call(null,seq__9776_9798__$1);
var map__9782_9805__$1 = ((((!((map__9782_9804 == null)))?(((((map__9782_9804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9782_9804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9782_9804):map__9782_9804);
var binding_9806 = map__9782_9805__$1;
var init_9807 = cljs.core.get.call(null,map__9782_9805__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_9806);

cljs.compiler.emitln.call(null," = ",init_9807,";");


var G__9808 = cljs.core.next.call(null,seq__9776_9798__$1);
var G__9809 = null;
var G__9810 = (0);
var G__9811 = (0);
seq__9776_9785 = G__9808;
chunk__9777_9786 = G__9809;
count__9778_9787 = G__9810;
i__9779_9788 = G__9811;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_9775_9784;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__9812){
var map__9813 = p__9812;
var map__9813__$1 = ((((!((map__9813 == null)))?(((((map__9813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9813):map__9813);
var frame = cljs.core.get.call(null,map__9813__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__9813__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__9813__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___9815 = cljs.core.count.call(null,exprs);
var i_9816 = (0);
while(true){
if((i_9816 < n__4376__auto___9815)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_9816)," = ",exprs.call(null,i_9816),";");

var G__9817 = (i_9816 + (1));
i_9816 = G__9817;
continue;
} else {
}
break;
}

var n__4376__auto___9818 = cljs.core.count.call(null,exprs);
var i_9819 = (0);
while(true){
if((i_9819 < n__4376__auto___9818)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_9819))," = ",temps.call(null,i_9819),";");

var G__9820 = (i_9819 + (1));
i_9819 = G__9820;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__9821){
var map__9822 = p__9821;
var map__9822__$1 = ((((!((map__9822 == null)))?(((((map__9822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9822):map__9822);
var bindings = cljs.core.get.call(null,map__9822__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__9822__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__9822__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__9824_9832 = cljs.core.seq.call(null,bindings);
var chunk__9825_9833 = null;
var count__9826_9834 = (0);
var i__9827_9835 = (0);
while(true){
if((i__9827_9835 < count__9826_9834)){
var map__9828_9836 = cljs.core._nth.call(null,chunk__9825_9833,i__9827_9835);
var map__9828_9837__$1 = ((((!((map__9828_9836 == null)))?(((((map__9828_9836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9828_9836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9828_9836):map__9828_9836);
var binding_9838 = map__9828_9837__$1;
var init_9839 = cljs.core.get.call(null,map__9828_9837__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_9838)," = ",init_9839,";");


var G__9840 = seq__9824_9832;
var G__9841 = chunk__9825_9833;
var G__9842 = count__9826_9834;
var G__9843 = (i__9827_9835 + (1));
seq__9824_9832 = G__9840;
chunk__9825_9833 = G__9841;
count__9826_9834 = G__9842;
i__9827_9835 = G__9843;
continue;
} else {
var temp__5457__auto___9844 = cljs.core.seq.call(null,seq__9824_9832);
if(temp__5457__auto___9844){
var seq__9824_9845__$1 = temp__5457__auto___9844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9824_9845__$1)){
var c__4319__auto___9846 = cljs.core.chunk_first.call(null,seq__9824_9845__$1);
var G__9847 = cljs.core.chunk_rest.call(null,seq__9824_9845__$1);
var G__9848 = c__4319__auto___9846;
var G__9849 = cljs.core.count.call(null,c__4319__auto___9846);
var G__9850 = (0);
seq__9824_9832 = G__9847;
chunk__9825_9833 = G__9848;
count__9826_9834 = G__9849;
i__9827_9835 = G__9850;
continue;
} else {
var map__9830_9851 = cljs.core.first.call(null,seq__9824_9845__$1);
var map__9830_9852__$1 = ((((!((map__9830_9851 == null)))?(((((map__9830_9851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9830_9851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9830_9851):map__9830_9851);
var binding_9853 = map__9830_9852__$1;
var init_9854 = cljs.core.get.call(null,map__9830_9852__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_9853)," = ",init_9854,";");


var G__9855 = cljs.core.next.call(null,seq__9824_9845__$1);
var G__9856 = null;
var G__9857 = (0);
var G__9858 = (0);
seq__9824_9832 = G__9855;
chunk__9825_9833 = G__9856;
count__9826_9834 = G__9857;
i__9827_9835 = G__9858;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__9861){
var map__9862 = p__9861;
var map__9862__$1 = ((((!((map__9862 == null)))?(((((map__9862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9862):map__9862);
var expr = map__9862__$1;
var f = cljs.core.get.call(null,map__9862__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__9862__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__9862__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3911__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3911__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3911__auto__ = protocol;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = tag;
if(cljs.core.truth_(and__3911__auto____$1)){
var or__3922__auto__ = (function (){var and__3911__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto____$2){
var and__3911__auto____$3 = protocol;
if(cljs.core.truth_(and__3911__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto____$2 = (function (){var or__3922__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3911__auto____$2)){
var or__3922__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3911__auto____$3){
var and__3911__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3911__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3911__auto____$4;
}
} else {
return and__3911__auto____$3;
}
}
} else {
return and__3911__auto____$2;
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3922__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__9864 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (arity > mfa);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env){
return (function (p1__9859_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__9859_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env){
return (function (p1__9860_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__9860_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9862,map__9862__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__9864,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__9864,(1),null);
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_9867 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_9867,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_9868 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_9868,args)),(((mfa_9868 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_9868,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = js_QMARK_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_9869 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_9869," ? ",f__$1,fprop_9869,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_9869," ? ",f__$1,fprop_9869,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__9870){
var map__9871 = p__9870;
var map__9871__$1 = ((((!((map__9871 == null)))?(((((map__9871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9871):map__9871);
var ctor = cljs.core.get.call(null,map__9871__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__9871__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__9871__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__9873){
var map__9874 = p__9873;
var map__9874__$1 = ((((!((map__9874 == null)))?(((((map__9874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9874):map__9874);
var target = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__9874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__9876 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__9876__$1 = ((((!((map__9876 == null)))?(((((map__9876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9876):map__9876);
var options = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__9876__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__9877 = options;
var map__9877__$1 = ((((!((map__9877 == null)))?(((((map__9877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9877):map__9877);
var target = cljs.core.get.call(null,map__9877__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__9877__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__9878 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__9883 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__9883__$1 = ((((!((map__9883 == null)))?(((((map__9883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9883):map__9883);
var node_libs = cljs.core.get.call(null,map__9883__$1,true);
var libs_to_load = cljs.core.get.call(null,map__9883__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__9878,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__9878,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__9885_9901 = cljs.core.seq.call(null,libs_to_load);
var chunk__9886_9902 = null;
var count__9887_9903 = (0);
var i__9888_9904 = (0);
while(true){
if((i__9888_9904 < count__9887_9903)){
var lib_9905 = cljs.core._nth.call(null,chunk__9886_9902,i__9888_9904);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_9905)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9905),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9905),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9905),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9905),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9905),"');");

}
}
}


var G__9906 = seq__9885_9901;
var G__9907 = chunk__9886_9902;
var G__9908 = count__9887_9903;
var G__9909 = (i__9888_9904 + (1));
seq__9885_9901 = G__9906;
chunk__9886_9902 = G__9907;
count__9887_9903 = G__9908;
i__9888_9904 = G__9909;
continue;
} else {
var temp__5457__auto___9910 = cljs.core.seq.call(null,seq__9885_9901);
if(temp__5457__auto___9910){
var seq__9885_9911__$1 = temp__5457__auto___9910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9885_9911__$1)){
var c__4319__auto___9912 = cljs.core.chunk_first.call(null,seq__9885_9911__$1);
var G__9913 = cljs.core.chunk_rest.call(null,seq__9885_9911__$1);
var G__9914 = c__4319__auto___9912;
var G__9915 = cljs.core.count.call(null,c__4319__auto___9912);
var G__9916 = (0);
seq__9885_9901 = G__9913;
chunk__9886_9902 = G__9914;
count__9887_9903 = G__9915;
i__9888_9904 = G__9916;
continue;
} else {
var lib_9917 = cljs.core.first.call(null,seq__9885_9911__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_9917)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9917),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9917),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_9917),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9917),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_9917),"');");

}
}
}


var G__9918 = cljs.core.next.call(null,seq__9885_9911__$1);
var G__9919 = null;
var G__9920 = (0);
var G__9921 = (0);
seq__9885_9901 = G__9918;
chunk__9886_9902 = G__9919;
count__9887_9903 = G__9920;
i__9888_9904 = G__9921;
continue;
}
} else {
}
}
break;
}

var seq__9889_9922 = cljs.core.seq.call(null,node_libs);
var chunk__9890_9923 = null;
var count__9891_9924 = (0);
var i__9892_9925 = (0);
while(true){
if((i__9892_9925 < count__9891_9924)){
var lib_9926 = cljs.core._nth.call(null,chunk__9890_9923,i__9892_9925);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_9926)," = require('",lib_9926,"');");


var G__9927 = seq__9889_9922;
var G__9928 = chunk__9890_9923;
var G__9929 = count__9891_9924;
var G__9930 = (i__9892_9925 + (1));
seq__9889_9922 = G__9927;
chunk__9890_9923 = G__9928;
count__9891_9924 = G__9929;
i__9892_9925 = G__9930;
continue;
} else {
var temp__5457__auto___9931 = cljs.core.seq.call(null,seq__9889_9922);
if(temp__5457__auto___9931){
var seq__9889_9932__$1 = temp__5457__auto___9931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9889_9932__$1)){
var c__4319__auto___9933 = cljs.core.chunk_first.call(null,seq__9889_9932__$1);
var G__9934 = cljs.core.chunk_rest.call(null,seq__9889_9932__$1);
var G__9935 = c__4319__auto___9933;
var G__9936 = cljs.core.count.call(null,c__4319__auto___9933);
var G__9937 = (0);
seq__9889_9922 = G__9934;
chunk__9890_9923 = G__9935;
count__9891_9924 = G__9936;
i__9892_9925 = G__9937;
continue;
} else {
var lib_9938 = cljs.core.first.call(null,seq__9889_9932__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_9938)," = require('",lib_9938,"');");


var G__9939 = cljs.core.next.call(null,seq__9889_9932__$1);
var G__9940 = null;
var G__9941 = (0);
var G__9942 = (0);
seq__9889_9922 = G__9939;
chunk__9890_9923 = G__9940;
count__9891_9924 = G__9941;
i__9892_9925 = G__9942;
continue;
}
} else {
}
}
break;
}

var seq__9893_9943 = cljs.core.seq.call(null,global_exports_libs);
var chunk__9894_9944 = null;
var count__9895_9945 = (0);
var i__9896_9946 = (0);
while(true){
if((i__9896_9946 < count__9895_9945)){
var lib_9947 = cljs.core._nth.call(null,chunk__9894_9944,i__9896_9946);
var map__9897_9948 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_9947));
var map__9897_9949__$1 = ((((!((map__9897_9948 == null)))?(((((map__9897_9948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9897_9948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9897_9948):map__9897_9948);
var global_exports_9950 = cljs.core.get.call(null,map__9897_9949__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_9947)," = goog.global.",cljs.core.get.call(null,global_exports_9950,cljs.core.symbol.call(null,lib_9947)),";");


var G__9951 = seq__9893_9943;
var G__9952 = chunk__9894_9944;
var G__9953 = count__9895_9945;
var G__9954 = (i__9896_9946 + (1));
seq__9893_9943 = G__9951;
chunk__9894_9944 = G__9952;
count__9895_9945 = G__9953;
i__9896_9946 = G__9954;
continue;
} else {
var temp__5457__auto___9955 = cljs.core.seq.call(null,seq__9893_9943);
if(temp__5457__auto___9955){
var seq__9893_9956__$1 = temp__5457__auto___9955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9893_9956__$1)){
var c__4319__auto___9957 = cljs.core.chunk_first.call(null,seq__9893_9956__$1);
var G__9958 = cljs.core.chunk_rest.call(null,seq__9893_9956__$1);
var G__9959 = c__4319__auto___9957;
var G__9960 = cljs.core.count.call(null,c__4319__auto___9957);
var G__9961 = (0);
seq__9893_9943 = G__9958;
chunk__9894_9944 = G__9959;
count__9895_9945 = G__9960;
i__9896_9946 = G__9961;
continue;
} else {
var lib_9962 = cljs.core.first.call(null,seq__9893_9956__$1);
var map__9899_9963 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_9962));
var map__9899_9964__$1 = ((((!((map__9899_9963 == null)))?(((((map__9899_9963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9899_9963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9899_9963):map__9899_9963);
var global_exports_9965 = cljs.core.get.call(null,map__9899_9964__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_9962)," = goog.global.",cljs.core.get.call(null,global_exports_9965,cljs.core.symbol.call(null,lib_9962)),";");


var G__9966 = cljs.core.next.call(null,seq__9893_9956__$1);
var G__9967 = null;
var G__9968 = (0);
var G__9969 = (0);
seq__9893_9943 = G__9966;
chunk__9894_9944 = G__9967;
count__9895_9945 = G__9968;
i__9896_9946 = G__9969;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__9970){
var map__9971 = p__9970;
var map__9971__$1 = ((((!((map__9971 == null)))?(((((map__9971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9971):map__9971);
var name = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__9971__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__9973){
var map__9974 = p__9973;
var map__9974__$1 = ((((!((map__9974 == null)))?(((((map__9974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9974):map__9974);
var name = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__9976){
var map__9977 = p__9976;
var map__9977__$1 = ((((!((map__9977 == null)))?(((((map__9977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9977):map__9977);
var t = cljs.core.get.call(null,map__9977__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__9977__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__9977__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__9977__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__9977__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__9979_9997 = cljs.core.seq.call(null,protocols);
var chunk__9980_9998 = null;
var count__9981_9999 = (0);
var i__9982_10000 = (0);
while(true){
if((i__9982_10000 < count__9981_9999)){
var protocol_10001 = cljs.core._nth.call(null,chunk__9980_9998,i__9982_10000);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10001)].join('')),"}");


var G__10002 = seq__9979_9997;
var G__10003 = chunk__9980_9998;
var G__10004 = count__9981_9999;
var G__10005 = (i__9982_10000 + (1));
seq__9979_9997 = G__10002;
chunk__9980_9998 = G__10003;
count__9981_9999 = G__10004;
i__9982_10000 = G__10005;
continue;
} else {
var temp__5457__auto___10006 = cljs.core.seq.call(null,seq__9979_9997);
if(temp__5457__auto___10006){
var seq__9979_10007__$1 = temp__5457__auto___10006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9979_10007__$1)){
var c__4319__auto___10008 = cljs.core.chunk_first.call(null,seq__9979_10007__$1);
var G__10009 = cljs.core.chunk_rest.call(null,seq__9979_10007__$1);
var G__10010 = c__4319__auto___10008;
var G__10011 = cljs.core.count.call(null,c__4319__auto___10008);
var G__10012 = (0);
seq__9979_9997 = G__10009;
chunk__9980_9998 = G__10010;
count__9981_9999 = G__10011;
i__9982_10000 = G__10012;
continue;
} else {
var protocol_10013 = cljs.core.first.call(null,seq__9979_10007__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10013)].join('')),"}");


var G__10014 = cljs.core.next.call(null,seq__9979_10007__$1);
var G__10015 = null;
var G__10016 = (0);
var G__10017 = (0);
seq__9979_9997 = G__10014;
chunk__9980_9998 = G__10015;
count__9981_9999 = G__10016;
i__9982_10000 = G__10017;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__9983_10018 = cljs.core.seq.call(null,fields__$1);
var chunk__9984_10019 = null;
var count__9985_10020 = (0);
var i__9986_10021 = (0);
while(true){
if((i__9986_10021 < count__9985_10020)){
var fld_10022 = cljs.core._nth.call(null,chunk__9984_10019,i__9986_10021);
cljs.compiler.emitln.call(null,"this.",fld_10022," = ",fld_10022,";");


var G__10023 = seq__9983_10018;
var G__10024 = chunk__9984_10019;
var G__10025 = count__9985_10020;
var G__10026 = (i__9986_10021 + (1));
seq__9983_10018 = G__10023;
chunk__9984_10019 = G__10024;
count__9985_10020 = G__10025;
i__9986_10021 = G__10026;
continue;
} else {
var temp__5457__auto___10027 = cljs.core.seq.call(null,seq__9983_10018);
if(temp__5457__auto___10027){
var seq__9983_10028__$1 = temp__5457__auto___10027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9983_10028__$1)){
var c__4319__auto___10029 = cljs.core.chunk_first.call(null,seq__9983_10028__$1);
var G__10030 = cljs.core.chunk_rest.call(null,seq__9983_10028__$1);
var G__10031 = c__4319__auto___10029;
var G__10032 = cljs.core.count.call(null,c__4319__auto___10029);
var G__10033 = (0);
seq__9983_10018 = G__10030;
chunk__9984_10019 = G__10031;
count__9985_10020 = G__10032;
i__9986_10021 = G__10033;
continue;
} else {
var fld_10034 = cljs.core.first.call(null,seq__9983_10028__$1);
cljs.compiler.emitln.call(null,"this.",fld_10034," = ",fld_10034,";");


var G__10035 = cljs.core.next.call(null,seq__9983_10028__$1);
var G__10036 = null;
var G__10037 = (0);
var G__10038 = (0);
seq__9983_10018 = G__10035;
chunk__9984_10019 = G__10036;
count__9985_10020 = G__10037;
i__9986_10021 = G__10038;
continue;
}
} else {
}
}
break;
}

var seq__9987_10039 = cljs.core.seq.call(null,pmasks);
var chunk__9988_10040 = null;
var count__9989_10041 = (0);
var i__9990_10042 = (0);
while(true){
if((i__9990_10042 < count__9989_10041)){
var vec__9991_10043 = cljs.core._nth.call(null,chunk__9988_10040,i__9990_10042);
var pno_10044 = cljs.core.nth.call(null,vec__9991_10043,(0),null);
var pmask_10045 = cljs.core.nth.call(null,vec__9991_10043,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10044,"$ = ",pmask_10045,";");


var G__10046 = seq__9987_10039;
var G__10047 = chunk__9988_10040;
var G__10048 = count__9989_10041;
var G__10049 = (i__9990_10042 + (1));
seq__9987_10039 = G__10046;
chunk__9988_10040 = G__10047;
count__9989_10041 = G__10048;
i__9990_10042 = G__10049;
continue;
} else {
var temp__5457__auto___10050 = cljs.core.seq.call(null,seq__9987_10039);
if(temp__5457__auto___10050){
var seq__9987_10051__$1 = temp__5457__auto___10050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9987_10051__$1)){
var c__4319__auto___10052 = cljs.core.chunk_first.call(null,seq__9987_10051__$1);
var G__10053 = cljs.core.chunk_rest.call(null,seq__9987_10051__$1);
var G__10054 = c__4319__auto___10052;
var G__10055 = cljs.core.count.call(null,c__4319__auto___10052);
var G__10056 = (0);
seq__9987_10039 = G__10053;
chunk__9988_10040 = G__10054;
count__9989_10041 = G__10055;
i__9990_10042 = G__10056;
continue;
} else {
var vec__9994_10057 = cljs.core.first.call(null,seq__9987_10051__$1);
var pno_10058 = cljs.core.nth.call(null,vec__9994_10057,(0),null);
var pmask_10059 = cljs.core.nth.call(null,vec__9994_10057,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10058,"$ = ",pmask_10059,";");


var G__10060 = cljs.core.next.call(null,seq__9987_10051__$1);
var G__10061 = null;
var G__10062 = (0);
var G__10063 = (0);
seq__9987_10039 = G__10060;
chunk__9988_10040 = G__10061;
count__9989_10041 = G__10062;
i__9990_10042 = G__10063;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__10064){
var map__10065 = p__10064;
var map__10065__$1 = ((((!((map__10065 == null)))?(((((map__10065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10065):map__10065);
var t = cljs.core.get.call(null,map__10065__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__10065__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__10065__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__10065__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__10065__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__10067_10085 = cljs.core.seq.call(null,protocols);
var chunk__10068_10086 = null;
var count__10069_10087 = (0);
var i__10070_10088 = (0);
while(true){
if((i__10070_10088 < count__10069_10087)){
var protocol_10089 = cljs.core._nth.call(null,chunk__10068_10086,i__10070_10088);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10089)].join('')),"}");


var G__10090 = seq__10067_10085;
var G__10091 = chunk__10068_10086;
var G__10092 = count__10069_10087;
var G__10093 = (i__10070_10088 + (1));
seq__10067_10085 = G__10090;
chunk__10068_10086 = G__10091;
count__10069_10087 = G__10092;
i__10070_10088 = G__10093;
continue;
} else {
var temp__5457__auto___10094 = cljs.core.seq.call(null,seq__10067_10085);
if(temp__5457__auto___10094){
var seq__10067_10095__$1 = temp__5457__auto___10094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10067_10095__$1)){
var c__4319__auto___10096 = cljs.core.chunk_first.call(null,seq__10067_10095__$1);
var G__10097 = cljs.core.chunk_rest.call(null,seq__10067_10095__$1);
var G__10098 = c__4319__auto___10096;
var G__10099 = cljs.core.count.call(null,c__4319__auto___10096);
var G__10100 = (0);
seq__10067_10085 = G__10097;
chunk__10068_10086 = G__10098;
count__10069_10087 = G__10099;
i__10070_10088 = G__10100;
continue;
} else {
var protocol_10101 = cljs.core.first.call(null,seq__10067_10095__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10101)].join('')),"}");


var G__10102 = cljs.core.next.call(null,seq__10067_10095__$1);
var G__10103 = null;
var G__10104 = (0);
var G__10105 = (0);
seq__10067_10085 = G__10102;
chunk__10068_10086 = G__10103;
count__10069_10087 = G__10104;
i__10070_10088 = G__10105;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__10071_10106 = cljs.core.seq.call(null,fields__$1);
var chunk__10072_10107 = null;
var count__10073_10108 = (0);
var i__10074_10109 = (0);
while(true){
if((i__10074_10109 < count__10073_10108)){
var fld_10110 = cljs.core._nth.call(null,chunk__10072_10107,i__10074_10109);
cljs.compiler.emitln.call(null,"this.",fld_10110," = ",fld_10110,";");


var G__10111 = seq__10071_10106;
var G__10112 = chunk__10072_10107;
var G__10113 = count__10073_10108;
var G__10114 = (i__10074_10109 + (1));
seq__10071_10106 = G__10111;
chunk__10072_10107 = G__10112;
count__10073_10108 = G__10113;
i__10074_10109 = G__10114;
continue;
} else {
var temp__5457__auto___10115 = cljs.core.seq.call(null,seq__10071_10106);
if(temp__5457__auto___10115){
var seq__10071_10116__$1 = temp__5457__auto___10115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10071_10116__$1)){
var c__4319__auto___10117 = cljs.core.chunk_first.call(null,seq__10071_10116__$1);
var G__10118 = cljs.core.chunk_rest.call(null,seq__10071_10116__$1);
var G__10119 = c__4319__auto___10117;
var G__10120 = cljs.core.count.call(null,c__4319__auto___10117);
var G__10121 = (0);
seq__10071_10106 = G__10118;
chunk__10072_10107 = G__10119;
count__10073_10108 = G__10120;
i__10074_10109 = G__10121;
continue;
} else {
var fld_10122 = cljs.core.first.call(null,seq__10071_10116__$1);
cljs.compiler.emitln.call(null,"this.",fld_10122," = ",fld_10122,";");


var G__10123 = cljs.core.next.call(null,seq__10071_10116__$1);
var G__10124 = null;
var G__10125 = (0);
var G__10126 = (0);
seq__10071_10106 = G__10123;
chunk__10072_10107 = G__10124;
count__10073_10108 = G__10125;
i__10074_10109 = G__10126;
continue;
}
} else {
}
}
break;
}

var seq__10075_10127 = cljs.core.seq.call(null,pmasks);
var chunk__10076_10128 = null;
var count__10077_10129 = (0);
var i__10078_10130 = (0);
while(true){
if((i__10078_10130 < count__10077_10129)){
var vec__10079_10131 = cljs.core._nth.call(null,chunk__10076_10128,i__10078_10130);
var pno_10132 = cljs.core.nth.call(null,vec__10079_10131,(0),null);
var pmask_10133 = cljs.core.nth.call(null,vec__10079_10131,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10132,"$ = ",pmask_10133,";");


var G__10134 = seq__10075_10127;
var G__10135 = chunk__10076_10128;
var G__10136 = count__10077_10129;
var G__10137 = (i__10078_10130 + (1));
seq__10075_10127 = G__10134;
chunk__10076_10128 = G__10135;
count__10077_10129 = G__10136;
i__10078_10130 = G__10137;
continue;
} else {
var temp__5457__auto___10138 = cljs.core.seq.call(null,seq__10075_10127);
if(temp__5457__auto___10138){
var seq__10075_10139__$1 = temp__5457__auto___10138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10075_10139__$1)){
var c__4319__auto___10140 = cljs.core.chunk_first.call(null,seq__10075_10139__$1);
var G__10141 = cljs.core.chunk_rest.call(null,seq__10075_10139__$1);
var G__10142 = c__4319__auto___10140;
var G__10143 = cljs.core.count.call(null,c__4319__auto___10140);
var G__10144 = (0);
seq__10075_10127 = G__10141;
chunk__10076_10128 = G__10142;
count__10077_10129 = G__10143;
i__10078_10130 = G__10144;
continue;
} else {
var vec__10082_10145 = cljs.core.first.call(null,seq__10075_10139__$1);
var pno_10146 = cljs.core.nth.call(null,vec__10082_10145,(0),null);
var pmask_10147 = cljs.core.nth.call(null,vec__10082_10145,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_10146,"$ = ",pmask_10147,";");


var G__10148 = cljs.core.next.call(null,seq__10075_10139__$1);
var G__10149 = null;
var G__10150 = (0);
var G__10151 = (0);
seq__10075_10127 = G__10148;
chunk__10076_10128 = G__10149;
count__10077_10129 = G__10150;
i__10078_10130 = G__10151;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__10152){
var map__10153 = p__10152;
var map__10153__$1 = ((((!((map__10153 == null)))?(((((map__10153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10153):map__10153);
var target = cljs.core.get.call(null,map__10153__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__10153__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__10153__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__10153__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__10153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__10155){
var map__10156 = p__10155;
var map__10156__$1 = ((((!((map__10156 == null)))?(((((map__10156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10156):map__10156);
var op = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__9070__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9070__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__10161 = cljs.core.seq.call(null,table);
var chunk__10162 = null;
var count__10163 = (0);
var i__10164 = (0);
while(true){
if((i__10164 < count__10163)){
var vec__10165 = cljs.core._nth.call(null,chunk__10162,i__10164);
var sym = cljs.core.nth.call(null,vec__10165,(0),null);
var value = cljs.core.nth.call(null,vec__10165,(1),null);
var ns_10171 = cljs.core.namespace.call(null,sym);
var name_10172 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__10173 = seq__10161;
var G__10174 = chunk__10162;
var G__10175 = count__10163;
var G__10176 = (i__10164 + (1));
seq__10161 = G__10173;
chunk__10162 = G__10174;
count__10163 = G__10175;
i__10164 = G__10176;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10161);
if(temp__5457__auto__){
var seq__10161__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10161__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__10161__$1);
var G__10177 = cljs.core.chunk_rest.call(null,seq__10161__$1);
var G__10178 = c__4319__auto__;
var G__10179 = cljs.core.count.call(null,c__4319__auto__);
var G__10180 = (0);
seq__10161 = G__10177;
chunk__10162 = G__10178;
count__10163 = G__10179;
i__10164 = G__10180;
continue;
} else {
var vec__10168 = cljs.core.first.call(null,seq__10161__$1);
var sym = cljs.core.nth.call(null,vec__10168,(0),null);
var value = cljs.core.nth.call(null,vec__10168,(1),null);
var ns_10181 = cljs.core.namespace.call(null,sym);
var name_10182 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__10183 = cljs.core.next.call(null,seq__10161__$1);
var G__10184 = null;
var G__10185 = (0);
var G__10186 = (0);
seq__10161 = G__10183;
chunk__10162 = G__10184;
count__10163 = G__10185;
i__10164 = G__10186;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__10188 = arguments.length;
switch (G__10188) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_10193 = cljs.core.first.call(null,ks);
var vec__10189_10194 = cljs.core.conj.call(null,prefix,k_10193);
var top_10195 = cljs.core.nth.call(null,vec__10189_10194,(0),null);
var prefix_SINGLEQUOTE__10196 = vec__10189_10194;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_10193)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__10196) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_10195)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_10195))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__10196)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_10195);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__10196)),";");
}
} else {
}

var m_10197 = cljs.core.get.call(null,externs,k_10193);
if(cljs.core.empty_QMARK_.call(null,m_10197)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__10196,m_10197,top_level,known_externs);
}

var G__10198 = cljs.core.next.call(null,ks);
ks = G__10198;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
