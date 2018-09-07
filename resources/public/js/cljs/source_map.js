// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__8456){
var vec__8457 = p__8456;
var i = cljs.core.nth.call(null,vec__8457,(0),null);
var v = cljs.core.nth.call(null,vec__8457,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__8460 = seg;
var gcol = cljs.core.nth.call(null,vec__8460,(0),null);
var source = cljs.core.nth.call(null,vec__8460,(1),null);
var line = cljs.core.nth.call(null,vec__8460,(2),null);
var col = cljs.core.nth.call(null,vec__8460,(3),null);
var name = cljs.core.nth.call(null,vec__8460,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__8463 = seg;
var gcol = cljs.core.nth.call(null,vec__8463,(0),null);
var source = cljs.core.nth.call(null,vec__8463,(1),null);
var line = cljs.core.nth.call(null,vec__8463,(2),null);
var col = cljs.core.nth.call(null,vec__8463,(3),null);
var name = cljs.core.nth.call(null,vec__8463,(4),null);
var vec__8466 = relseg;
var rgcol = cljs.core.nth.call(null,vec__8466,(0),null);
var rsource = cljs.core.nth.call(null,vec__8466,(1),null);
var rline = cljs.core.nth.call(null,vec__8466,(2),null);
var rcol = cljs.core.nth.call(null,vec__8466,(3),null);
var rname = cljs.core.nth.call(null,vec__8466,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3922__auto__ = source;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3922__auto__ = col;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__8469 = segmap;
var map__8469__$1 = ((((!((map__8469 == null)))?(((((map__8469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8469):map__8469);
var gcol = cljs.core.get.call(null,map__8469__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__8469__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__8469__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__8469__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__8469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__8469,map__8469__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__8469,map__8469__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__8469,map__8469__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__8469,map__8469__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__8469,map__8469__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__8469,map__8469__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__8472 = arguments.length;
switch (G__8472) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__8473 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__8477 = cljs.core.next.call(null,segs__$1);
var G__8478 = nrelseg;
var G__8479 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__8477;
relseg__$1 = G__8478;
result__$1 = G__8479;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__8473,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__8473,(1),null);
var G__8480 = (gline + (1));
var G__8481 = cljs.core.next.call(null,lines__$1);
var G__8482 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__8483 = result__$1;
gline = G__8480;
lines__$1 = G__8481;
relseg = G__8482;
result = G__8483;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__8485 = segmap;
var map__8485__$1 = ((((!((map__8485 == null)))?(((((map__8485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8485):map__8485);
var gcol = cljs.core.get.call(null,map__8485__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__8485__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__8485__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__8485__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__8485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__8485,map__8485__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__8485,map__8485__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__8484_SHARP_){
return cljs.core.conj.call(null,p1__8484_SHARP_,d__$1);
});})(map__8485,map__8485__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__8485,map__8485__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__8488 = arguments.length;
switch (G__8488) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__8489 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__8493 = cljs.core.next.call(null,segs__$1);
var G__8494 = nrelseg;
var G__8495 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__8493;
relseg__$1 = G__8494;
result__$1 = G__8495;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__8489,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__8489,(1),null);
var G__8496 = (gline + (1));
var G__8497 = cljs.core.next.call(null,lines__$1);
var G__8498 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__8499 = result__$1;
gline = G__8496;
lines__$1 = G__8497;
relseg = G__8498;
result = G__8499;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__8500){
var vec__8501 = p__8500;
var _ = cljs.core.nth.call(null,vec__8501,(0),null);
var source = cljs.core.nth.call(null,vec__8501,(1),null);
var line = cljs.core.nth.call(null,vec__8501,(2),null);
var col = cljs.core.nth.call(null,vec__8501,(3),null);
var name = cljs.core.nth.call(null,vec__8501,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__8504){
var vec__8505 = p__8504;
var gcol = cljs.core.nth.call(null,vec__8505,(0),null);
var sidx = cljs.core.nth.call(null,vec__8505,(1),null);
var line = cljs.core.nth.call(null,vec__8505,(2),null);
var col = cljs.core.nth.call(null,vec__8505,(3),null);
var name = cljs.core.nth.call(null,vec__8505,(4),null);
var seg = vec__8505;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__8505,gcol,sidx,line,col,name,seg,relseg){
return (function (p__8508){
var vec__8509 = p__8508;
var _ = cljs.core.nth.call(null,vec__8509,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8509,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__8509,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__8509,(3),null);
var lname = cljs.core.nth.call(null,vec__8509,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__8505,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__8515 = cljs.core.seq.call(null,infos);
var chunk__8516 = null;
var count__8517 = (0);
var i__8518 = (0);
while(true){
if((i__8518 < count__8517)){
var info = cljs.core._nth.call(null,chunk__8516,i__8518);
var segv_8597 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_8598 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_8599 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_8598 > (lc_8599 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__8515,chunk__8516,count__8517,i__8518,segv_8597,gline_8598,lc_8599,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_8598 - (lc_8599 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8597], null));
});})(seq__8515,chunk__8516,count__8517,i__8518,segv_8597,gline_8598,lc_8599,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__8515,chunk__8516,count__8517,i__8518,segv_8597,gline_8598,lc_8599,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8598], null),cljs.core.conj,segv_8597);
});})(seq__8515,chunk__8516,count__8517,i__8518,segv_8597,gline_8598,lc_8599,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__8600 = seq__8515;
var G__8601 = chunk__8516;
var G__8602 = count__8517;
var G__8603 = (i__8518 + (1));
seq__8515 = G__8600;
chunk__8516 = G__8601;
count__8517 = G__8602;
i__8518 = G__8603;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8515);
if(temp__5457__auto__){
var seq__8515__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8515__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__8515__$1);
var G__8604 = cljs.core.chunk_rest.call(null,seq__8515__$1);
var G__8605 = c__4319__auto__;
var G__8606 = cljs.core.count.call(null,c__4319__auto__);
var G__8607 = (0);
seq__8515 = G__8604;
chunk__8516 = G__8605;
count__8517 = G__8606;
i__8518 = G__8607;
continue;
} else {
var info = cljs.core.first.call(null,seq__8515__$1);
var segv_8608 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_8609 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_8610 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_8609 > (lc_8610 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__8515,chunk__8516,count__8517,i__8518,segv_8608,gline_8609,lc_8610,info,seq__8515__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_8609 - (lc_8610 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8608], null));
});})(seq__8515,chunk__8516,count__8517,i__8518,segv_8608,gline_8609,lc_8610,info,seq__8515__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__8515,chunk__8516,count__8517,i__8518,segv_8608,gline_8609,lc_8610,info,seq__8515__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8609], null),cljs.core.conj,segv_8608);
});})(seq__8515,chunk__8516,count__8517,i__8518,segv_8608,gline_8609,lc_8610,info,seq__8515__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__8611 = cljs.core.next.call(null,seq__8515__$1);
var G__8612 = null;
var G__8613 = (0);
var G__8614 = (0);
seq__8515 = G__8611;
chunk__8516 = G__8612;
count__8517 = G__8613;
i__8518 = G__8614;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__8519_8615 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__8520_8616 = null;
var count__8521_8617 = (0);
var i__8522_8618 = (0);
while(true){
if((i__8522_8618 < count__8521_8617)){
var vec__8523_8619 = cljs.core._nth.call(null,chunk__8520_8616,i__8522_8618);
var source_idx_8620 = cljs.core.nth.call(null,vec__8523_8619,(0),null);
var vec__8526_8621 = cljs.core.nth.call(null,vec__8523_8619,(1),null);
var __8622 = cljs.core.nth.call(null,vec__8526_8621,(0),null);
var lines_8623__$1 = cljs.core.nth.call(null,vec__8526_8621,(1),null);
var seq__8529_8624 = cljs.core.seq.call(null,lines_8623__$1);
var chunk__8530_8625 = null;
var count__8531_8626 = (0);
var i__8532_8627 = (0);
while(true){
if((i__8532_8627 < count__8531_8626)){
var vec__8533_8628 = cljs.core._nth.call(null,chunk__8530_8625,i__8532_8627);
var line_8629 = cljs.core.nth.call(null,vec__8533_8628,(0),null);
var cols_8630 = cljs.core.nth.call(null,vec__8533_8628,(1),null);
var seq__8536_8631 = cljs.core.seq.call(null,cols_8630);
var chunk__8537_8632 = null;
var count__8538_8633 = (0);
var i__8539_8634 = (0);
while(true){
if((i__8539_8634 < count__8538_8633)){
var vec__8540_8635 = cljs.core._nth.call(null,chunk__8537_8632,i__8539_8634);
var col_8636 = cljs.core.nth.call(null,vec__8540_8635,(0),null);
var infos_8637 = cljs.core.nth.call(null,vec__8540_8635,(1),null);
encode_cols.call(null,infos_8637,source_idx_8620,line_8629,col_8636);


var G__8638 = seq__8536_8631;
var G__8639 = chunk__8537_8632;
var G__8640 = count__8538_8633;
var G__8641 = (i__8539_8634 + (1));
seq__8536_8631 = G__8638;
chunk__8537_8632 = G__8639;
count__8538_8633 = G__8640;
i__8539_8634 = G__8641;
continue;
} else {
var temp__5457__auto___8642 = cljs.core.seq.call(null,seq__8536_8631);
if(temp__5457__auto___8642){
var seq__8536_8643__$1 = temp__5457__auto___8642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8536_8643__$1)){
var c__4319__auto___8644 = cljs.core.chunk_first.call(null,seq__8536_8643__$1);
var G__8645 = cljs.core.chunk_rest.call(null,seq__8536_8643__$1);
var G__8646 = c__4319__auto___8644;
var G__8647 = cljs.core.count.call(null,c__4319__auto___8644);
var G__8648 = (0);
seq__8536_8631 = G__8645;
chunk__8537_8632 = G__8646;
count__8538_8633 = G__8647;
i__8539_8634 = G__8648;
continue;
} else {
var vec__8543_8649 = cljs.core.first.call(null,seq__8536_8643__$1);
var col_8650 = cljs.core.nth.call(null,vec__8543_8649,(0),null);
var infos_8651 = cljs.core.nth.call(null,vec__8543_8649,(1),null);
encode_cols.call(null,infos_8651,source_idx_8620,line_8629,col_8650);


var G__8652 = cljs.core.next.call(null,seq__8536_8643__$1);
var G__8653 = null;
var G__8654 = (0);
var G__8655 = (0);
seq__8536_8631 = G__8652;
chunk__8537_8632 = G__8653;
count__8538_8633 = G__8654;
i__8539_8634 = G__8655;
continue;
}
} else {
}
}
break;
}


var G__8656 = seq__8529_8624;
var G__8657 = chunk__8530_8625;
var G__8658 = count__8531_8626;
var G__8659 = (i__8532_8627 + (1));
seq__8529_8624 = G__8656;
chunk__8530_8625 = G__8657;
count__8531_8626 = G__8658;
i__8532_8627 = G__8659;
continue;
} else {
var temp__5457__auto___8660 = cljs.core.seq.call(null,seq__8529_8624);
if(temp__5457__auto___8660){
var seq__8529_8661__$1 = temp__5457__auto___8660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8529_8661__$1)){
var c__4319__auto___8662 = cljs.core.chunk_first.call(null,seq__8529_8661__$1);
var G__8663 = cljs.core.chunk_rest.call(null,seq__8529_8661__$1);
var G__8664 = c__4319__auto___8662;
var G__8665 = cljs.core.count.call(null,c__4319__auto___8662);
var G__8666 = (0);
seq__8529_8624 = G__8663;
chunk__8530_8625 = G__8664;
count__8531_8626 = G__8665;
i__8532_8627 = G__8666;
continue;
} else {
var vec__8546_8667 = cljs.core.first.call(null,seq__8529_8661__$1);
var line_8668 = cljs.core.nth.call(null,vec__8546_8667,(0),null);
var cols_8669 = cljs.core.nth.call(null,vec__8546_8667,(1),null);
var seq__8549_8670 = cljs.core.seq.call(null,cols_8669);
var chunk__8550_8671 = null;
var count__8551_8672 = (0);
var i__8552_8673 = (0);
while(true){
if((i__8552_8673 < count__8551_8672)){
var vec__8553_8674 = cljs.core._nth.call(null,chunk__8550_8671,i__8552_8673);
var col_8675 = cljs.core.nth.call(null,vec__8553_8674,(0),null);
var infos_8676 = cljs.core.nth.call(null,vec__8553_8674,(1),null);
encode_cols.call(null,infos_8676,source_idx_8620,line_8668,col_8675);


var G__8677 = seq__8549_8670;
var G__8678 = chunk__8550_8671;
var G__8679 = count__8551_8672;
var G__8680 = (i__8552_8673 + (1));
seq__8549_8670 = G__8677;
chunk__8550_8671 = G__8678;
count__8551_8672 = G__8679;
i__8552_8673 = G__8680;
continue;
} else {
var temp__5457__auto___8681__$1 = cljs.core.seq.call(null,seq__8549_8670);
if(temp__5457__auto___8681__$1){
var seq__8549_8682__$1 = temp__5457__auto___8681__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8549_8682__$1)){
var c__4319__auto___8683 = cljs.core.chunk_first.call(null,seq__8549_8682__$1);
var G__8684 = cljs.core.chunk_rest.call(null,seq__8549_8682__$1);
var G__8685 = c__4319__auto___8683;
var G__8686 = cljs.core.count.call(null,c__4319__auto___8683);
var G__8687 = (0);
seq__8549_8670 = G__8684;
chunk__8550_8671 = G__8685;
count__8551_8672 = G__8686;
i__8552_8673 = G__8687;
continue;
} else {
var vec__8556_8688 = cljs.core.first.call(null,seq__8549_8682__$1);
var col_8689 = cljs.core.nth.call(null,vec__8556_8688,(0),null);
var infos_8690 = cljs.core.nth.call(null,vec__8556_8688,(1),null);
encode_cols.call(null,infos_8690,source_idx_8620,line_8668,col_8689);


var G__8691 = cljs.core.next.call(null,seq__8549_8682__$1);
var G__8692 = null;
var G__8693 = (0);
var G__8694 = (0);
seq__8549_8670 = G__8691;
chunk__8550_8671 = G__8692;
count__8551_8672 = G__8693;
i__8552_8673 = G__8694;
continue;
}
} else {
}
}
break;
}


var G__8695 = cljs.core.next.call(null,seq__8529_8661__$1);
var G__8696 = null;
var G__8697 = (0);
var G__8698 = (0);
seq__8529_8624 = G__8695;
chunk__8530_8625 = G__8696;
count__8531_8626 = G__8697;
i__8532_8627 = G__8698;
continue;
}
} else {
}
}
break;
}


var G__8699 = seq__8519_8615;
var G__8700 = chunk__8520_8616;
var G__8701 = count__8521_8617;
var G__8702 = (i__8522_8618 + (1));
seq__8519_8615 = G__8699;
chunk__8520_8616 = G__8700;
count__8521_8617 = G__8701;
i__8522_8618 = G__8702;
continue;
} else {
var temp__5457__auto___8703 = cljs.core.seq.call(null,seq__8519_8615);
if(temp__5457__auto___8703){
var seq__8519_8704__$1 = temp__5457__auto___8703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8519_8704__$1)){
var c__4319__auto___8705 = cljs.core.chunk_first.call(null,seq__8519_8704__$1);
var G__8706 = cljs.core.chunk_rest.call(null,seq__8519_8704__$1);
var G__8707 = c__4319__auto___8705;
var G__8708 = cljs.core.count.call(null,c__4319__auto___8705);
var G__8709 = (0);
seq__8519_8615 = G__8706;
chunk__8520_8616 = G__8707;
count__8521_8617 = G__8708;
i__8522_8618 = G__8709;
continue;
} else {
var vec__8559_8710 = cljs.core.first.call(null,seq__8519_8704__$1);
var source_idx_8711 = cljs.core.nth.call(null,vec__8559_8710,(0),null);
var vec__8562_8712 = cljs.core.nth.call(null,vec__8559_8710,(1),null);
var __8713 = cljs.core.nth.call(null,vec__8562_8712,(0),null);
var lines_8714__$1 = cljs.core.nth.call(null,vec__8562_8712,(1),null);
var seq__8565_8715 = cljs.core.seq.call(null,lines_8714__$1);
var chunk__8566_8716 = null;
var count__8567_8717 = (0);
var i__8568_8718 = (0);
while(true){
if((i__8568_8718 < count__8567_8717)){
var vec__8569_8719 = cljs.core._nth.call(null,chunk__8566_8716,i__8568_8718);
var line_8720 = cljs.core.nth.call(null,vec__8569_8719,(0),null);
var cols_8721 = cljs.core.nth.call(null,vec__8569_8719,(1),null);
var seq__8572_8722 = cljs.core.seq.call(null,cols_8721);
var chunk__8573_8723 = null;
var count__8574_8724 = (0);
var i__8575_8725 = (0);
while(true){
if((i__8575_8725 < count__8574_8724)){
var vec__8576_8726 = cljs.core._nth.call(null,chunk__8573_8723,i__8575_8725);
var col_8727 = cljs.core.nth.call(null,vec__8576_8726,(0),null);
var infos_8728 = cljs.core.nth.call(null,vec__8576_8726,(1),null);
encode_cols.call(null,infos_8728,source_idx_8711,line_8720,col_8727);


var G__8729 = seq__8572_8722;
var G__8730 = chunk__8573_8723;
var G__8731 = count__8574_8724;
var G__8732 = (i__8575_8725 + (1));
seq__8572_8722 = G__8729;
chunk__8573_8723 = G__8730;
count__8574_8724 = G__8731;
i__8575_8725 = G__8732;
continue;
} else {
var temp__5457__auto___8733__$1 = cljs.core.seq.call(null,seq__8572_8722);
if(temp__5457__auto___8733__$1){
var seq__8572_8734__$1 = temp__5457__auto___8733__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8572_8734__$1)){
var c__4319__auto___8735 = cljs.core.chunk_first.call(null,seq__8572_8734__$1);
var G__8736 = cljs.core.chunk_rest.call(null,seq__8572_8734__$1);
var G__8737 = c__4319__auto___8735;
var G__8738 = cljs.core.count.call(null,c__4319__auto___8735);
var G__8739 = (0);
seq__8572_8722 = G__8736;
chunk__8573_8723 = G__8737;
count__8574_8724 = G__8738;
i__8575_8725 = G__8739;
continue;
} else {
var vec__8579_8740 = cljs.core.first.call(null,seq__8572_8734__$1);
var col_8741 = cljs.core.nth.call(null,vec__8579_8740,(0),null);
var infos_8742 = cljs.core.nth.call(null,vec__8579_8740,(1),null);
encode_cols.call(null,infos_8742,source_idx_8711,line_8720,col_8741);


var G__8743 = cljs.core.next.call(null,seq__8572_8734__$1);
var G__8744 = null;
var G__8745 = (0);
var G__8746 = (0);
seq__8572_8722 = G__8743;
chunk__8573_8723 = G__8744;
count__8574_8724 = G__8745;
i__8575_8725 = G__8746;
continue;
}
} else {
}
}
break;
}


var G__8747 = seq__8565_8715;
var G__8748 = chunk__8566_8716;
var G__8749 = count__8567_8717;
var G__8750 = (i__8568_8718 + (1));
seq__8565_8715 = G__8747;
chunk__8566_8716 = G__8748;
count__8567_8717 = G__8749;
i__8568_8718 = G__8750;
continue;
} else {
var temp__5457__auto___8751__$1 = cljs.core.seq.call(null,seq__8565_8715);
if(temp__5457__auto___8751__$1){
var seq__8565_8752__$1 = temp__5457__auto___8751__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8565_8752__$1)){
var c__4319__auto___8753 = cljs.core.chunk_first.call(null,seq__8565_8752__$1);
var G__8754 = cljs.core.chunk_rest.call(null,seq__8565_8752__$1);
var G__8755 = c__4319__auto___8753;
var G__8756 = cljs.core.count.call(null,c__4319__auto___8753);
var G__8757 = (0);
seq__8565_8715 = G__8754;
chunk__8566_8716 = G__8755;
count__8567_8717 = G__8756;
i__8568_8718 = G__8757;
continue;
} else {
var vec__8582_8758 = cljs.core.first.call(null,seq__8565_8752__$1);
var line_8759 = cljs.core.nth.call(null,vec__8582_8758,(0),null);
var cols_8760 = cljs.core.nth.call(null,vec__8582_8758,(1),null);
var seq__8585_8761 = cljs.core.seq.call(null,cols_8760);
var chunk__8586_8762 = null;
var count__8587_8763 = (0);
var i__8588_8764 = (0);
while(true){
if((i__8588_8764 < count__8587_8763)){
var vec__8589_8765 = cljs.core._nth.call(null,chunk__8586_8762,i__8588_8764);
var col_8766 = cljs.core.nth.call(null,vec__8589_8765,(0),null);
var infos_8767 = cljs.core.nth.call(null,vec__8589_8765,(1),null);
encode_cols.call(null,infos_8767,source_idx_8711,line_8759,col_8766);


var G__8768 = seq__8585_8761;
var G__8769 = chunk__8586_8762;
var G__8770 = count__8587_8763;
var G__8771 = (i__8588_8764 + (1));
seq__8585_8761 = G__8768;
chunk__8586_8762 = G__8769;
count__8587_8763 = G__8770;
i__8588_8764 = G__8771;
continue;
} else {
var temp__5457__auto___8772__$2 = cljs.core.seq.call(null,seq__8585_8761);
if(temp__5457__auto___8772__$2){
var seq__8585_8773__$1 = temp__5457__auto___8772__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8585_8773__$1)){
var c__4319__auto___8774 = cljs.core.chunk_first.call(null,seq__8585_8773__$1);
var G__8775 = cljs.core.chunk_rest.call(null,seq__8585_8773__$1);
var G__8776 = c__4319__auto___8774;
var G__8777 = cljs.core.count.call(null,c__4319__auto___8774);
var G__8778 = (0);
seq__8585_8761 = G__8775;
chunk__8586_8762 = G__8776;
count__8587_8763 = G__8777;
i__8588_8764 = G__8778;
continue;
} else {
var vec__8592_8779 = cljs.core.first.call(null,seq__8585_8773__$1);
var col_8780 = cljs.core.nth.call(null,vec__8592_8779,(0),null);
var infos_8781 = cljs.core.nth.call(null,vec__8592_8779,(1),null);
encode_cols.call(null,infos_8781,source_idx_8711,line_8759,col_8780);


var G__8782 = cljs.core.next.call(null,seq__8585_8773__$1);
var G__8783 = null;
var G__8784 = (0);
var G__8785 = (0);
seq__8585_8761 = G__8782;
chunk__8586_8762 = G__8783;
count__8587_8763 = G__8784;
i__8588_8764 = G__8785;
continue;
}
} else {
}
}
break;
}


var G__8786 = cljs.core.next.call(null,seq__8565_8752__$1);
var G__8787 = null;
var G__8788 = (0);
var G__8789 = (0);
seq__8565_8715 = G__8786;
chunk__8566_8716 = G__8787;
count__8567_8717 = G__8788;
i__8568_8718 = G__8789;
continue;
}
} else {
}
}
break;
}


var G__8790 = cljs.core.next.call(null,seq__8519_8704__$1);
var G__8791 = null;
var G__8792 = (0);
var G__8793 = (0);
seq__8519_8615 = G__8790;
chunk__8520_8616 = G__8791;
count__8521_8617 = G__8792;
i__8522_8618 = G__8793;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8595 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8512_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8512_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8513_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__8513_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8514_SHARP_){
return clojure.string.join.call(null,",",p1__8514_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__8596 = G__8595;
goog.object.set(G__8596,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__8596;
} else {
return G__8595;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__8794 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__8794,(0),null);
var col_map = cljs.core.nth.call(null,vec__8794,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__8797 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__8797,(0),null);
var infos = cljs.core.nth.call(null,vec__8797,(1),null);
var G__8803 = cljs.core.next.call(null,col_map_seq);
var G__8804 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8797,col,infos,vec__8794,line,col_map){
return (function (v,p__8800){
var map__8801 = p__8800;
var map__8801__$1 = ((((!((map__8801 == null)))?(((((map__8801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8801):map__8801);
var gline = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8797,col,infos,vec__8794,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__8803;
new_cols = G__8804;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__8805 = cljs.core.next.call(null,line_map_seq);
var G__8806 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__8805;
new_lines = G__8806;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__8807_8869 = cljs.core.seq.call(null,reverse_map);
var chunk__8808_8870 = null;
var count__8809_8871 = (0);
var i__8810_8872 = (0);
while(true){
if((i__8810_8872 < count__8809_8871)){
var vec__8811_8873 = cljs.core._nth.call(null,chunk__8808_8870,i__8810_8872);
var line_8874 = cljs.core.nth.call(null,vec__8811_8873,(0),null);
var columns_8875 = cljs.core.nth.call(null,vec__8811_8873,(1),null);
var seq__8814_8876 = cljs.core.seq.call(null,columns_8875);
var chunk__8815_8877 = null;
var count__8816_8878 = (0);
var i__8817_8879 = (0);
while(true){
if((i__8817_8879 < count__8816_8878)){
var vec__8818_8880 = cljs.core._nth.call(null,chunk__8815_8877,i__8817_8879);
var column_8881 = cljs.core.nth.call(null,vec__8818_8880,(0),null);
var column_info_8882 = cljs.core.nth.call(null,vec__8818_8880,(1),null);
var seq__8821_8883 = cljs.core.seq.call(null,column_info_8882);
var chunk__8822_8884 = null;
var count__8823_8885 = (0);
var i__8824_8886 = (0);
while(true){
if((i__8824_8886 < count__8823_8885)){
var map__8825_8887 = cljs.core._nth.call(null,chunk__8822_8884,i__8824_8886);
var map__8825_8888__$1 = ((((!((map__8825_8887 == null)))?(((((map__8825_8887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8825_8887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8825_8887):map__8825_8887);
var gline_8889 = cljs.core.get.call(null,map__8825_8888__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8890 = cljs.core.get.call(null,map__8825_8888__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8891 = cljs.core.get.call(null,map__8825_8888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8889], null),cljs.core.fnil.call(null,((function (seq__8821_8883,chunk__8822_8884,count__8823_8885,i__8824_8886,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8825_8887,map__8825_8888__$1,gline_8889,gcol_8890,name_8891,vec__8818_8880,column_8881,column_info_8882,vec__8811_8873,line_8874,columns_8875,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8890], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8874,new cljs.core.Keyword(null,"col","col",-1959363084),column_8881,new cljs.core.Keyword(null,"name","name",1843675177),name_8891], null));
});})(seq__8821_8883,chunk__8822_8884,count__8823_8885,i__8824_8886,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8825_8887,map__8825_8888__$1,gline_8889,gcol_8890,name_8891,vec__8818_8880,column_8881,column_info_8882,vec__8811_8873,line_8874,columns_8875,inverted))
,cljs.core.sorted_map.call(null)));


var G__8892 = seq__8821_8883;
var G__8893 = chunk__8822_8884;
var G__8894 = count__8823_8885;
var G__8895 = (i__8824_8886 + (1));
seq__8821_8883 = G__8892;
chunk__8822_8884 = G__8893;
count__8823_8885 = G__8894;
i__8824_8886 = G__8895;
continue;
} else {
var temp__5457__auto___8896 = cljs.core.seq.call(null,seq__8821_8883);
if(temp__5457__auto___8896){
var seq__8821_8897__$1 = temp__5457__auto___8896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8821_8897__$1)){
var c__4319__auto___8898 = cljs.core.chunk_first.call(null,seq__8821_8897__$1);
var G__8899 = cljs.core.chunk_rest.call(null,seq__8821_8897__$1);
var G__8900 = c__4319__auto___8898;
var G__8901 = cljs.core.count.call(null,c__4319__auto___8898);
var G__8902 = (0);
seq__8821_8883 = G__8899;
chunk__8822_8884 = G__8900;
count__8823_8885 = G__8901;
i__8824_8886 = G__8902;
continue;
} else {
var map__8827_8903 = cljs.core.first.call(null,seq__8821_8897__$1);
var map__8827_8904__$1 = ((((!((map__8827_8903 == null)))?(((((map__8827_8903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8827_8903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8827_8903):map__8827_8903);
var gline_8905 = cljs.core.get.call(null,map__8827_8904__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8906 = cljs.core.get.call(null,map__8827_8904__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8907 = cljs.core.get.call(null,map__8827_8904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8905], null),cljs.core.fnil.call(null,((function (seq__8821_8883,chunk__8822_8884,count__8823_8885,i__8824_8886,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8827_8903,map__8827_8904__$1,gline_8905,gcol_8906,name_8907,seq__8821_8897__$1,temp__5457__auto___8896,vec__8818_8880,column_8881,column_info_8882,vec__8811_8873,line_8874,columns_8875,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8906], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8874,new cljs.core.Keyword(null,"col","col",-1959363084),column_8881,new cljs.core.Keyword(null,"name","name",1843675177),name_8907], null));
});})(seq__8821_8883,chunk__8822_8884,count__8823_8885,i__8824_8886,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8827_8903,map__8827_8904__$1,gline_8905,gcol_8906,name_8907,seq__8821_8897__$1,temp__5457__auto___8896,vec__8818_8880,column_8881,column_info_8882,vec__8811_8873,line_8874,columns_8875,inverted))
,cljs.core.sorted_map.call(null)));


var G__8908 = cljs.core.next.call(null,seq__8821_8897__$1);
var G__8909 = null;
var G__8910 = (0);
var G__8911 = (0);
seq__8821_8883 = G__8908;
chunk__8822_8884 = G__8909;
count__8823_8885 = G__8910;
i__8824_8886 = G__8911;
continue;
}
} else {
}
}
break;
}


var G__8912 = seq__8814_8876;
var G__8913 = chunk__8815_8877;
var G__8914 = count__8816_8878;
var G__8915 = (i__8817_8879 + (1));
seq__8814_8876 = G__8912;
chunk__8815_8877 = G__8913;
count__8816_8878 = G__8914;
i__8817_8879 = G__8915;
continue;
} else {
var temp__5457__auto___8916 = cljs.core.seq.call(null,seq__8814_8876);
if(temp__5457__auto___8916){
var seq__8814_8917__$1 = temp__5457__auto___8916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8814_8917__$1)){
var c__4319__auto___8918 = cljs.core.chunk_first.call(null,seq__8814_8917__$1);
var G__8919 = cljs.core.chunk_rest.call(null,seq__8814_8917__$1);
var G__8920 = c__4319__auto___8918;
var G__8921 = cljs.core.count.call(null,c__4319__auto___8918);
var G__8922 = (0);
seq__8814_8876 = G__8919;
chunk__8815_8877 = G__8920;
count__8816_8878 = G__8921;
i__8817_8879 = G__8922;
continue;
} else {
var vec__8829_8923 = cljs.core.first.call(null,seq__8814_8917__$1);
var column_8924 = cljs.core.nth.call(null,vec__8829_8923,(0),null);
var column_info_8925 = cljs.core.nth.call(null,vec__8829_8923,(1),null);
var seq__8832_8926 = cljs.core.seq.call(null,column_info_8925);
var chunk__8833_8927 = null;
var count__8834_8928 = (0);
var i__8835_8929 = (0);
while(true){
if((i__8835_8929 < count__8834_8928)){
var map__8836_8930 = cljs.core._nth.call(null,chunk__8833_8927,i__8835_8929);
var map__8836_8931__$1 = ((((!((map__8836_8930 == null)))?(((((map__8836_8930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8836_8930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8836_8930):map__8836_8930);
var gline_8932 = cljs.core.get.call(null,map__8836_8931__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8933 = cljs.core.get.call(null,map__8836_8931__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8934 = cljs.core.get.call(null,map__8836_8931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8932], null),cljs.core.fnil.call(null,((function (seq__8832_8926,chunk__8833_8927,count__8834_8928,i__8835_8929,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8836_8930,map__8836_8931__$1,gline_8932,gcol_8933,name_8934,vec__8829_8923,column_8924,column_info_8925,seq__8814_8917__$1,temp__5457__auto___8916,vec__8811_8873,line_8874,columns_8875,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8933], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8874,new cljs.core.Keyword(null,"col","col",-1959363084),column_8924,new cljs.core.Keyword(null,"name","name",1843675177),name_8934], null));
});})(seq__8832_8926,chunk__8833_8927,count__8834_8928,i__8835_8929,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8836_8930,map__8836_8931__$1,gline_8932,gcol_8933,name_8934,vec__8829_8923,column_8924,column_info_8925,seq__8814_8917__$1,temp__5457__auto___8916,vec__8811_8873,line_8874,columns_8875,inverted))
,cljs.core.sorted_map.call(null)));


var G__8935 = seq__8832_8926;
var G__8936 = chunk__8833_8927;
var G__8937 = count__8834_8928;
var G__8938 = (i__8835_8929 + (1));
seq__8832_8926 = G__8935;
chunk__8833_8927 = G__8936;
count__8834_8928 = G__8937;
i__8835_8929 = G__8938;
continue;
} else {
var temp__5457__auto___8939__$1 = cljs.core.seq.call(null,seq__8832_8926);
if(temp__5457__auto___8939__$1){
var seq__8832_8940__$1 = temp__5457__auto___8939__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8832_8940__$1)){
var c__4319__auto___8941 = cljs.core.chunk_first.call(null,seq__8832_8940__$1);
var G__8942 = cljs.core.chunk_rest.call(null,seq__8832_8940__$1);
var G__8943 = c__4319__auto___8941;
var G__8944 = cljs.core.count.call(null,c__4319__auto___8941);
var G__8945 = (0);
seq__8832_8926 = G__8942;
chunk__8833_8927 = G__8943;
count__8834_8928 = G__8944;
i__8835_8929 = G__8945;
continue;
} else {
var map__8838_8946 = cljs.core.first.call(null,seq__8832_8940__$1);
var map__8838_8947__$1 = ((((!((map__8838_8946 == null)))?(((((map__8838_8946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8838_8946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8838_8946):map__8838_8946);
var gline_8948 = cljs.core.get.call(null,map__8838_8947__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8949 = cljs.core.get.call(null,map__8838_8947__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8950 = cljs.core.get.call(null,map__8838_8947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8948], null),cljs.core.fnil.call(null,((function (seq__8832_8926,chunk__8833_8927,count__8834_8928,i__8835_8929,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8838_8946,map__8838_8947__$1,gline_8948,gcol_8949,name_8950,seq__8832_8940__$1,temp__5457__auto___8939__$1,vec__8829_8923,column_8924,column_info_8925,seq__8814_8917__$1,temp__5457__auto___8916,vec__8811_8873,line_8874,columns_8875,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8949], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8874,new cljs.core.Keyword(null,"col","col",-1959363084),column_8924,new cljs.core.Keyword(null,"name","name",1843675177),name_8950], null));
});})(seq__8832_8926,chunk__8833_8927,count__8834_8928,i__8835_8929,seq__8814_8876,chunk__8815_8877,count__8816_8878,i__8817_8879,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8838_8946,map__8838_8947__$1,gline_8948,gcol_8949,name_8950,seq__8832_8940__$1,temp__5457__auto___8939__$1,vec__8829_8923,column_8924,column_info_8925,seq__8814_8917__$1,temp__5457__auto___8916,vec__8811_8873,line_8874,columns_8875,inverted))
,cljs.core.sorted_map.call(null)));


var G__8951 = cljs.core.next.call(null,seq__8832_8940__$1);
var G__8952 = null;
var G__8953 = (0);
var G__8954 = (0);
seq__8832_8926 = G__8951;
chunk__8833_8927 = G__8952;
count__8834_8928 = G__8953;
i__8835_8929 = G__8954;
continue;
}
} else {
}
}
break;
}


var G__8955 = cljs.core.next.call(null,seq__8814_8917__$1);
var G__8956 = null;
var G__8957 = (0);
var G__8958 = (0);
seq__8814_8876 = G__8955;
chunk__8815_8877 = G__8956;
count__8816_8878 = G__8957;
i__8817_8879 = G__8958;
continue;
}
} else {
}
}
break;
}


var G__8959 = seq__8807_8869;
var G__8960 = chunk__8808_8870;
var G__8961 = count__8809_8871;
var G__8962 = (i__8810_8872 + (1));
seq__8807_8869 = G__8959;
chunk__8808_8870 = G__8960;
count__8809_8871 = G__8961;
i__8810_8872 = G__8962;
continue;
} else {
var temp__5457__auto___8963 = cljs.core.seq.call(null,seq__8807_8869);
if(temp__5457__auto___8963){
var seq__8807_8964__$1 = temp__5457__auto___8963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8807_8964__$1)){
var c__4319__auto___8965 = cljs.core.chunk_first.call(null,seq__8807_8964__$1);
var G__8966 = cljs.core.chunk_rest.call(null,seq__8807_8964__$1);
var G__8967 = c__4319__auto___8965;
var G__8968 = cljs.core.count.call(null,c__4319__auto___8965);
var G__8969 = (0);
seq__8807_8869 = G__8966;
chunk__8808_8870 = G__8967;
count__8809_8871 = G__8968;
i__8810_8872 = G__8969;
continue;
} else {
var vec__8840_8970 = cljs.core.first.call(null,seq__8807_8964__$1);
var line_8971 = cljs.core.nth.call(null,vec__8840_8970,(0),null);
var columns_8972 = cljs.core.nth.call(null,vec__8840_8970,(1),null);
var seq__8843_8973 = cljs.core.seq.call(null,columns_8972);
var chunk__8844_8974 = null;
var count__8845_8975 = (0);
var i__8846_8976 = (0);
while(true){
if((i__8846_8976 < count__8845_8975)){
var vec__8847_8977 = cljs.core._nth.call(null,chunk__8844_8974,i__8846_8976);
var column_8978 = cljs.core.nth.call(null,vec__8847_8977,(0),null);
var column_info_8979 = cljs.core.nth.call(null,vec__8847_8977,(1),null);
var seq__8850_8980 = cljs.core.seq.call(null,column_info_8979);
var chunk__8851_8981 = null;
var count__8852_8982 = (0);
var i__8853_8983 = (0);
while(true){
if((i__8853_8983 < count__8852_8982)){
var map__8854_8984 = cljs.core._nth.call(null,chunk__8851_8981,i__8853_8983);
var map__8854_8985__$1 = ((((!((map__8854_8984 == null)))?(((((map__8854_8984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8854_8984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8854_8984):map__8854_8984);
var gline_8986 = cljs.core.get.call(null,map__8854_8985__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_8987 = cljs.core.get.call(null,map__8854_8985__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_8988 = cljs.core.get.call(null,map__8854_8985__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8986], null),cljs.core.fnil.call(null,((function (seq__8850_8980,chunk__8851_8981,count__8852_8982,i__8853_8983,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8854_8984,map__8854_8985__$1,gline_8986,gcol_8987,name_8988,vec__8847_8977,column_8978,column_info_8979,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_8987], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8971,new cljs.core.Keyword(null,"col","col",-1959363084),column_8978,new cljs.core.Keyword(null,"name","name",1843675177),name_8988], null));
});})(seq__8850_8980,chunk__8851_8981,count__8852_8982,i__8853_8983,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8854_8984,map__8854_8985__$1,gline_8986,gcol_8987,name_8988,vec__8847_8977,column_8978,column_info_8979,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted))
,cljs.core.sorted_map.call(null)));


var G__8989 = seq__8850_8980;
var G__8990 = chunk__8851_8981;
var G__8991 = count__8852_8982;
var G__8992 = (i__8853_8983 + (1));
seq__8850_8980 = G__8989;
chunk__8851_8981 = G__8990;
count__8852_8982 = G__8991;
i__8853_8983 = G__8992;
continue;
} else {
var temp__5457__auto___8993__$1 = cljs.core.seq.call(null,seq__8850_8980);
if(temp__5457__auto___8993__$1){
var seq__8850_8994__$1 = temp__5457__auto___8993__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8850_8994__$1)){
var c__4319__auto___8995 = cljs.core.chunk_first.call(null,seq__8850_8994__$1);
var G__8996 = cljs.core.chunk_rest.call(null,seq__8850_8994__$1);
var G__8997 = c__4319__auto___8995;
var G__8998 = cljs.core.count.call(null,c__4319__auto___8995);
var G__8999 = (0);
seq__8850_8980 = G__8996;
chunk__8851_8981 = G__8997;
count__8852_8982 = G__8998;
i__8853_8983 = G__8999;
continue;
} else {
var map__8856_9000 = cljs.core.first.call(null,seq__8850_8994__$1);
var map__8856_9001__$1 = ((((!((map__8856_9000 == null)))?(((((map__8856_9000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8856_9000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8856_9000):map__8856_9000);
var gline_9002 = cljs.core.get.call(null,map__8856_9001__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9003 = cljs.core.get.call(null,map__8856_9001__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9004 = cljs.core.get.call(null,map__8856_9001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9002], null),cljs.core.fnil.call(null,((function (seq__8850_8980,chunk__8851_8981,count__8852_8982,i__8853_8983,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8856_9000,map__8856_9001__$1,gline_9002,gcol_9003,name_9004,seq__8850_8994__$1,temp__5457__auto___8993__$1,vec__8847_8977,column_8978,column_info_8979,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9003], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8971,new cljs.core.Keyword(null,"col","col",-1959363084),column_8978,new cljs.core.Keyword(null,"name","name",1843675177),name_9004], null));
});})(seq__8850_8980,chunk__8851_8981,count__8852_8982,i__8853_8983,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8856_9000,map__8856_9001__$1,gline_9002,gcol_9003,name_9004,seq__8850_8994__$1,temp__5457__auto___8993__$1,vec__8847_8977,column_8978,column_info_8979,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted))
,cljs.core.sorted_map.call(null)));


var G__9005 = cljs.core.next.call(null,seq__8850_8994__$1);
var G__9006 = null;
var G__9007 = (0);
var G__9008 = (0);
seq__8850_8980 = G__9005;
chunk__8851_8981 = G__9006;
count__8852_8982 = G__9007;
i__8853_8983 = G__9008;
continue;
}
} else {
}
}
break;
}


var G__9009 = seq__8843_8973;
var G__9010 = chunk__8844_8974;
var G__9011 = count__8845_8975;
var G__9012 = (i__8846_8976 + (1));
seq__8843_8973 = G__9009;
chunk__8844_8974 = G__9010;
count__8845_8975 = G__9011;
i__8846_8976 = G__9012;
continue;
} else {
var temp__5457__auto___9013__$1 = cljs.core.seq.call(null,seq__8843_8973);
if(temp__5457__auto___9013__$1){
var seq__8843_9014__$1 = temp__5457__auto___9013__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8843_9014__$1)){
var c__4319__auto___9015 = cljs.core.chunk_first.call(null,seq__8843_9014__$1);
var G__9016 = cljs.core.chunk_rest.call(null,seq__8843_9014__$1);
var G__9017 = c__4319__auto___9015;
var G__9018 = cljs.core.count.call(null,c__4319__auto___9015);
var G__9019 = (0);
seq__8843_8973 = G__9016;
chunk__8844_8974 = G__9017;
count__8845_8975 = G__9018;
i__8846_8976 = G__9019;
continue;
} else {
var vec__8858_9020 = cljs.core.first.call(null,seq__8843_9014__$1);
var column_9021 = cljs.core.nth.call(null,vec__8858_9020,(0),null);
var column_info_9022 = cljs.core.nth.call(null,vec__8858_9020,(1),null);
var seq__8861_9023 = cljs.core.seq.call(null,column_info_9022);
var chunk__8862_9024 = null;
var count__8863_9025 = (0);
var i__8864_9026 = (0);
while(true){
if((i__8864_9026 < count__8863_9025)){
var map__8865_9027 = cljs.core._nth.call(null,chunk__8862_9024,i__8864_9026);
var map__8865_9028__$1 = ((((!((map__8865_9027 == null)))?(((((map__8865_9027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8865_9027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8865_9027):map__8865_9027);
var gline_9029 = cljs.core.get.call(null,map__8865_9028__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9030 = cljs.core.get.call(null,map__8865_9028__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9031 = cljs.core.get.call(null,map__8865_9028__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9029], null),cljs.core.fnil.call(null,((function (seq__8861_9023,chunk__8862_9024,count__8863_9025,i__8864_9026,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8865_9027,map__8865_9028__$1,gline_9029,gcol_9030,name_9031,vec__8858_9020,column_9021,column_info_9022,seq__8843_9014__$1,temp__5457__auto___9013__$1,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9030], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8971,new cljs.core.Keyword(null,"col","col",-1959363084),column_9021,new cljs.core.Keyword(null,"name","name",1843675177),name_9031], null));
});})(seq__8861_9023,chunk__8862_9024,count__8863_9025,i__8864_9026,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8865_9027,map__8865_9028__$1,gline_9029,gcol_9030,name_9031,vec__8858_9020,column_9021,column_info_9022,seq__8843_9014__$1,temp__5457__auto___9013__$1,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted))
,cljs.core.sorted_map.call(null)));


var G__9032 = seq__8861_9023;
var G__9033 = chunk__8862_9024;
var G__9034 = count__8863_9025;
var G__9035 = (i__8864_9026 + (1));
seq__8861_9023 = G__9032;
chunk__8862_9024 = G__9033;
count__8863_9025 = G__9034;
i__8864_9026 = G__9035;
continue;
} else {
var temp__5457__auto___9036__$2 = cljs.core.seq.call(null,seq__8861_9023);
if(temp__5457__auto___9036__$2){
var seq__8861_9037__$1 = temp__5457__auto___9036__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8861_9037__$1)){
var c__4319__auto___9038 = cljs.core.chunk_first.call(null,seq__8861_9037__$1);
var G__9039 = cljs.core.chunk_rest.call(null,seq__8861_9037__$1);
var G__9040 = c__4319__auto___9038;
var G__9041 = cljs.core.count.call(null,c__4319__auto___9038);
var G__9042 = (0);
seq__8861_9023 = G__9039;
chunk__8862_9024 = G__9040;
count__8863_9025 = G__9041;
i__8864_9026 = G__9042;
continue;
} else {
var map__8867_9043 = cljs.core.first.call(null,seq__8861_9037__$1);
var map__8867_9044__$1 = ((((!((map__8867_9043 == null)))?(((((map__8867_9043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8867_9043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8867_9043):map__8867_9043);
var gline_9045 = cljs.core.get.call(null,map__8867_9044__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9046 = cljs.core.get.call(null,map__8867_9044__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9047 = cljs.core.get.call(null,map__8867_9044__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9045], null),cljs.core.fnil.call(null,((function (seq__8861_9023,chunk__8862_9024,count__8863_9025,i__8864_9026,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8867_9043,map__8867_9044__$1,gline_9045,gcol_9046,name_9047,seq__8861_9037__$1,temp__5457__auto___9036__$2,vec__8858_9020,column_9021,column_info_9022,seq__8843_9014__$1,temp__5457__auto___9013__$1,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9046], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_8971,new cljs.core.Keyword(null,"col","col",-1959363084),column_9021,new cljs.core.Keyword(null,"name","name",1843675177),name_9047], null));
});})(seq__8861_9023,chunk__8862_9024,count__8863_9025,i__8864_9026,seq__8843_8973,chunk__8844_8974,count__8845_8975,i__8846_8976,seq__8807_8869,chunk__8808_8870,count__8809_8871,i__8810_8872,map__8867_9043,map__8867_9044__$1,gline_9045,gcol_9046,name_9047,seq__8861_9037__$1,temp__5457__auto___9036__$2,vec__8858_9020,column_9021,column_info_9022,seq__8843_9014__$1,temp__5457__auto___9013__$1,vec__8840_8970,line_8971,columns_8972,seq__8807_8964__$1,temp__5457__auto___8963,inverted))
,cljs.core.sorted_map.call(null)));


var G__9048 = cljs.core.next.call(null,seq__8861_9037__$1);
var G__9049 = null;
var G__9050 = (0);
var G__9051 = (0);
seq__8861_9023 = G__9048;
chunk__8862_9024 = G__9049;
count__8863_9025 = G__9050;
i__8864_9026 = G__9051;
continue;
}
} else {
}
}
break;
}


var G__9052 = cljs.core.next.call(null,seq__8843_9014__$1);
var G__9053 = null;
var G__9054 = (0);
var G__9055 = (0);
seq__8843_8973 = G__9052;
chunk__8844_8974 = G__9053;
count__8845_8975 = G__9054;
i__8846_8976 = G__9055;
continue;
}
} else {
}
}
break;
}


var G__9056 = cljs.core.next.call(null,seq__8807_8964__$1);
var G__9057 = null;
var G__9058 = (0);
var G__9059 = (0);
seq__8807_8869 = G__9056;
chunk__8808_8870 = G__9057;
count__8809_8871 = G__9058;
i__8810_8872 = G__9059;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
