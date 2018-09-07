// Compiled by ClojureScript 1.10.238 {}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var G__15085 = arguments.length;
switch (G__15085) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,(cljs.core.truth_(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__5455__auto__ = cljs.core.first.call(null,extensions);
if(cljs.core.truth_(temp__5455__auto__)){
var extension = temp__5455__auto__;
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__5455__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__5455__auto__))
);
}catch (e15086){if((e15086 instanceof Error)){
var _ = e15086;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e15086;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_15089 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns_sym);

try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_15089;
}}catch (e15088){if((e15088 instanceof Error)){
var _ = e15088;
return null;
} else {
throw e15088;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var _STAR_forms = cljs.core.atom.call(null,forms);
var _STAR_results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__13115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_15183){
var state_val_15184 = (state_15183[(1)]);
if((state_val_15184 === (7))){
var inst_15134 = (state_15183[(2)]);
var inst_15135 = cljs.core.swap_BANG_.call(null,_STAR_forms,cljs.core.rest);
var state_15183__$1 = (function (){var statearr_15185 = state_15183;
(statearr_15185[(7)] = inst_15134);

(statearr_15185[(8)] = inst_15135);

return statearr_15185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15183__$1,(19),channel);
} else {
if((state_val_15184 === (20))){
var inst_15138 = (state_15183[(9)]);
var inst_15143 = inst_15138.cljs$lang$protocol_mask$partition0$;
var inst_15144 = (inst_15143 & (64));
var inst_15145 = inst_15138.cljs$core$ISeq$;
var inst_15146 = (cljs.core.PROTOCOL_SENTINEL === inst_15145);
var inst_15147 = ((inst_15144) || (inst_15146));
var state_15183__$1 = state_15183;
if(cljs.core.truth_(inst_15147)){
var statearr_15186_15234 = state_15183__$1;
(statearr_15186_15234[(1)] = (23));

} else {
var statearr_15187_15235 = state_15183__$1;
(statearr_15187_15235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (27))){
var inst_15138 = (state_15183[(9)]);
var state_15183__$1 = state_15183;
var statearr_15188_15236 = state_15183__$1;
(statearr_15188_15236[(2)] = inst_15138);

(statearr_15188_15236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (1))){
var state_15183__$1 = state_15183;
var statearr_15189_15237 = state_15183__$1;
(statearr_15189_15237[(2)] = null);

(statearr_15189_15237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (24))){
var state_15183__$1 = state_15183;
var statearr_15190_15238 = state_15183__$1;
(statearr_15190_15238[(2)] = false);

(statearr_15190_15238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (4))){
var state_15183__$1 = state_15183;
var statearr_15191_15239 = state_15183__$1;
(statearr_15191_15239[(2)] = null);

(statearr_15191_15239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (15))){
var inst_15118 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
var statearr_15192_15240 = state_15183__$1;
(statearr_15192_15240[(2)] = inst_15118);

(statearr_15192_15240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (21))){
var state_15183__$1 = state_15183;
var statearr_15193_15241 = state_15183__$1;
(statearr_15193_15241[(2)] = false);

(statearr_15193_15241[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (31))){
var inst_15170 = (state_15183[(2)]);
var inst_15171 = cljs.core.swap_BANG_.call(null,_STAR_results,cljs.core.conj,inst_15170);
var state_15183__$1 = (function (){var statearr_15194 = state_15183;
(statearr_15194[(10)] = inst_15171);

return statearr_15194;
})();
var statearr_15195_15242 = state_15183__$1;
(statearr_15195_15242[(2)] = null);

(statearr_15195_15242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (32))){
var inst_15163 = (state_15183[(11)]);
var inst_15165 = (state_15183[(2)]);
var inst_15166 = [inst_15165];
var inst_15167 = cljs.core.PersistentHashMap.fromArrays(inst_15163,inst_15166);
var state_15183__$1 = state_15183;
var statearr_15196_15243 = state_15183__$1;
(statearr_15196_15243[(2)] = inst_15167);

(statearr_15196_15243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (13))){
var inst_15106 = (state_15183[(12)]);
var inst_15114 = cljs.core.second.call(null,inst_15106);
var inst_15115 = cljs.core.reset_BANG_.call(null,_STAR_current_ns,inst_15114);
var state_15183__$1 = state_15183;
var statearr_15197_15244 = state_15183__$1;
(statearr_15197_15244[(2)] = inst_15115);

(statearr_15197_15244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (22))){
var inst_15154 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
if(cljs.core.truth_(inst_15154)){
var statearr_15198_15245 = state_15183__$1;
(statearr_15198_15245[(1)] = (26));

} else {
var statearr_15199_15246 = state_15183__$1;
(statearr_15199_15246[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (29))){
var inst_15160 = (state_15183[(13)]);
var inst_15163 = [new cljs.core.Keyword(null,"value","value",305978217)];
var state_15183__$1 = (function (){var statearr_15200 = state_15183;
(statearr_15200[(11)] = inst_15163);

return statearr_15200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15183__$1,(32),inst_15160);
} else {
if((state_val_15184 === (6))){
var inst_15175 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
var statearr_15201_15247 = state_15183__$1;
(statearr_15201_15247[(2)] = inst_15175);

(statearr_15201_15247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (28))){
var inst_15160 = (state_15183[(13)]);
var inst_15159 = (state_15183[(14)]);
var inst_15159__$1 = (state_15183[(2)]);
var inst_15160__$1 = cljs.core.get.call(null,inst_15159__$1,new cljs.core.Keyword(null,"value","value",305978217));
var inst_15161 = (inst_15160__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_15183__$1 = (function (){var statearr_15202 = state_15183;
(statearr_15202[(13)] = inst_15160__$1);

(statearr_15202[(14)] = inst_15159__$1);

return statearr_15202;
})();
if(cljs.core.truth_(inst_15161)){
var statearr_15203_15248 = state_15183__$1;
(statearr_15203_15248[(1)] = (29));

} else {
var statearr_15204_15249 = state_15183__$1;
(statearr_15204_15249[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (25))){
var inst_15151 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
var statearr_15205_15250 = state_15183__$1;
(statearr_15205_15250[(2)] = inst_15151);

(statearr_15205_15250[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (17))){
var inst_15106 = (state_15183[(12)]);
var inst_15104 = (state_15183[(15)]);
var inst_15107 = (state_15183[(16)]);
var inst_15129 = (function (){var current_ns = inst_15104;
var form = inst_15106;
var opts__$1 = inst_15107;
return ((function (current_ns,form,opts__$1,inst_15106,inst_15104,inst_15107,state_val_15184,c__13115__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__15090_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__15090_SHARP_);
});
;})(current_ns,form,opts__$1,inst_15106,inst_15104,inst_15107,state_val_15184,c__13115__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_15130 = cljs.js.eval.call(null,_STAR_state,inst_15106,inst_15107,inst_15129);
var state_15183__$1 = state_15183;
var statearr_15206_15251 = state_15183__$1;
(statearr_15206_15251[(2)] = inst_15130);

(statearr_15206_15251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (3))){
var inst_15177 = (state_15183[(2)]);
var inst_15178 = (function (){return ((function (inst_15177,state_val_15184,c__13115__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__15091_SHARP_){
var or__3922__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__15091_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__15091_SHARP_);
}
});
;})(inst_15177,state_val_15184,c__13115__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_15179 = cljs.core.deref.call(null,_STAR_results);
var inst_15180 = cljs.core.mapv.call(null,inst_15178,inst_15179);
var inst_15181 = cb.call(null,inst_15180);
var state_15183__$1 = (function (){var statearr_15207 = state_15183;
(statearr_15207[(17)] = inst_15177);

return statearr_15207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15183__$1,inst_15181);
} else {
if((state_val_15184 === (12))){
var inst_15106 = (state_15183[(12)]);
var inst_15121 = (state_15183[(2)]);
var inst_15122 = (inst_15106 instanceof Error);
var state_15183__$1 = (function (){var statearr_15208 = state_15183;
(statearr_15208[(18)] = inst_15121);

return statearr_15208;
})();
if(cljs.core.truth_(inst_15122)){
var statearr_15209_15252 = state_15183__$1;
(statearr_15209_15252[(1)] = (16));

} else {
var statearr_15210_15253 = state_15183__$1;
(statearr_15210_15253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (2))){
var inst_15093 = cljs.core.deref.call(null,_STAR_forms);
var inst_15094 = cljs.core.seq.call(null,inst_15093);
var state_15183__$1 = state_15183;
if(inst_15094){
var statearr_15211_15254 = state_15183__$1;
(statearr_15211_15254[(1)] = (4));

} else {
var statearr_15212_15255 = state_15183__$1;
(statearr_15212_15255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (23))){
var state_15183__$1 = state_15183;
var statearr_15213_15256 = state_15183__$1;
(statearr_15213_15256[(2)] = true);

(statearr_15213_15256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (19))){
var inst_15138 = (state_15183[(9)]);
var inst_15138__$1 = (state_15183[(2)]);
var inst_15140 = (inst_15138__$1 == null);
var inst_15141 = cljs.core.not.call(null,inst_15140);
var state_15183__$1 = (function (){var statearr_15214 = state_15183;
(statearr_15214[(9)] = inst_15138__$1);

return statearr_15214;
})();
if(inst_15141){
var statearr_15215_15257 = state_15183__$1;
(statearr_15215_15257[(1)] = (20));

} else {
var statearr_15216_15258 = state_15183__$1;
(statearr_15216_15258[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (11))){
var state_15183__$1 = state_15183;
var statearr_15217_15259 = state_15183__$1;
(statearr_15217_15259[(2)] = null);

(statearr_15217_15259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (9))){
var inst_15106 = (state_15183[(12)]);
var inst_15104 = (state_15183[(15)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15183,(8),Error,null,(7));
var inst_15104__$1 = cljs.core.deref.call(null,_STAR_current_ns);
var inst_15105 = cljs.core.deref.call(null,_STAR_forms);
var inst_15106__$1 = cljs.core.first.call(null,inst_15105);
var inst_15107 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_15104__$1);
var inst_15108 = cljs.core.list_QMARK_.call(null,inst_15106__$1);
var state_15183__$1 = (function (){var statearr_15218 = state_15183;
(statearr_15218[(12)] = inst_15106__$1);

(statearr_15218[(15)] = inst_15104__$1);

(statearr_15218[(16)] = inst_15107);

return statearr_15218;
})();
if(inst_15108){
var statearr_15219_15260 = state_15183__$1;
(statearr_15219_15260[(1)] = (10));

} else {
var statearr_15220_15261 = state_15183__$1;
(statearr_15220_15261[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (5))){
var state_15183__$1 = state_15183;
var statearr_15221_15262 = state_15183__$1;
(statearr_15221_15262[(2)] = null);

(statearr_15221_15262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (14))){
var state_15183__$1 = state_15183;
var statearr_15222_15263 = state_15183__$1;
(statearr_15222_15263[(2)] = null);

(statearr_15222_15263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (26))){
var inst_15138 = (state_15183[(9)]);
var inst_15156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15138);
var state_15183__$1 = state_15183;
var statearr_15223_15264 = state_15183__$1;
(statearr_15223_15264[(2)] = inst_15156);

(statearr_15223_15264[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (16))){
var inst_15106 = (state_15183[(12)]);
var inst_15124 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15125 = [inst_15106];
var inst_15126 = cljs.core.PersistentHashMap.fromArrays(inst_15124,inst_15125);
var inst_15127 = cljs.core.async.put_BANG_.call(null,channel,inst_15126);
var state_15183__$1 = state_15183;
var statearr_15224_15265 = state_15183__$1;
(statearr_15224_15265[(2)] = inst_15127);

(statearr_15224_15265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (30))){
var inst_15159 = (state_15183[(14)]);
var state_15183__$1 = state_15183;
var statearr_15225_15266 = state_15183__$1;
(statearr_15225_15266[(2)] = inst_15159);

(statearr_15225_15266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (10))){
var inst_15106 = (state_15183[(12)]);
var inst_15110 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_15111 = cljs.core.first.call(null,inst_15106);
var inst_15112 = cljs.core._EQ_.call(null,inst_15110,inst_15111);
var state_15183__$1 = state_15183;
if(inst_15112){
var statearr_15226_15267 = state_15183__$1;
(statearr_15226_15267[(1)] = (13));

} else {
var statearr_15227_15268 = state_15183__$1;
(statearr_15227_15268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (18))){
var inst_15132 = (state_15183[(2)]);
var state_15183__$1 = state_15183;
var statearr_15228_15269 = state_15183__$1;
(statearr_15228_15269[(2)] = inst_15132);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15183__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15184 === (8))){
var inst_15096 = (state_15183[(2)]);
var inst_15097 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15098 = [inst_15096];
var inst_15099 = cljs.core.PersistentHashMap.fromArrays(inst_15097,inst_15098);
var inst_15100 = cljs.core.async.put_BANG_.call(null,channel,inst_15099);
var state_15183__$1 = state_15183;
var statearr_15229_15270 = state_15183__$1;
(statearr_15229_15270[(2)] = inst_15100);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15183__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13115__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__13025__auto__,c__13115__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__13026__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__13026__auto____0 = (function (){
var statearr_15230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15230[(0)] = eval_soup$core$eval_forms_$_state_machine__13026__auto__);

(statearr_15230[(1)] = (1));

return statearr_15230;
});
var eval_soup$core$eval_forms_$_state_machine__13026__auto____1 = (function (state_15183){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_15183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e15231){if((e15231 instanceof Object)){
var ex__13029__auto__ = e15231;
var statearr_15232_15271 = state_15183;
(statearr_15232_15271[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15272 = state_15183;
state_15183 = G__15272;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__13026__auto__ = function(state_15183){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__13026__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__13026__auto____1.call(this,state_15183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__13026__auto____0;
eval_soup$core$eval_forms_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__13026__auto____1;
return eval_soup$core$eval_forms_$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__13117__auto__ = (function (){var statearr_15233 = f__13116__auto__.call(null);
(statearr_15233[(6)] = c__13115__auto__);

return statearr_15233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__13115__auto__;
});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null)),null,(1),null)),(2),null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null)),(new cljs.core.List(null,form,null,(1),null)),(2),null)),(3),null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(timeout,form){
if(((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form))))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,cljs.core.partial.call(null,eval_soup.core.add_timeout_checks,timeout),cljs.core.identity,form);
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1))))){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null),(new cljs.core.List(null,timeout,null,(1),null)),(2),null)),(new cljs.core.List(null,form__$1,null,(1),null)),(2),null)),(3),null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(timeout,forms,expanded_forms){
var iter__4292__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__15273(s__15274){
return (new cljs.core.LazySeq(null,(function (){
var s__15274__$1 = s__15274;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15274__$1);
if(temp__5457__auto__){
var s__15274__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15274__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__15274__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__15276 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__15275 = (0);
while(true){
if((i__15275 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__15275);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__15276,((((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null)))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__15277 = (i__15275 + (1));
i__15275 = G__15277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15276),eval_soup$core$add_timeouts_if_necessary_$_iter__15273.call(null,cljs.core.chunk_rest.call(null,s__15274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15276),null);
}
} else {
var i = cljs.core.first.call(null,s__15274__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,((((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null)))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__15273.call(null,cljs.core.rest.call(null,s__15274__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core._STAR_cljs_state !== 'undefined'){
} else {
eval_soup.core._STAR_cljs_state = cljs.js.empty_state.call(null);
}
/**
 * Evaluates each form, providing the results in a callback.
 *   If any of the forms are strings, it will read them first.
 */
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var G__15280 = arguments.length;
switch (G__15280) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__15281){
var map__15282 = p__15281;
var map__15282__$1 = ((((!((map__15282 == null)))?(((((map__15282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15282):map__15282);
var opts = map__15282__$1;
var _STAR_current_ns = cljs.core.get.call(null,map__15282__$1,new cljs.core.Keyword(null,"*current-ns","*current-ns",547476271),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var _STAR_state = cljs.core.get.call(null,map__15282__$1,new cljs.core.Keyword(null,"*state","*state",471581315),eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.call(null,map__15282__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108),eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.call(null,map__15282__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(4000));
var disable_timeout_QMARK_ = cljs.core.get.call(null,map__15282__$1,new cljs.core.Keyword(null,"disable-timeout?","disable-timeout?",-760039639),false);
var forms__$1 = cljs.core.mapv.call(null,((function (map__15282,map__15282__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__15278_SHARP_){
if(typeof p1__15278_SHARP_ === 'string'){
return eval_soup.core.str__GT_form.call(null,cljs.core.deref.call(null,_STAR_current_ns),p1__15278_SHARP_);
} else {
return p1__15278_SHARP_;
}
});})(map__15282,map__15282__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null))], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out."))))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(new cljs.core.List(null,cljs.core.deref.call(null,_STAR_current_ns),null,(1),null)),(2),null))], null)));
var timeout_cb = ((function (forms__$1,init_forms,map__15282,map__15282__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__15282,map__15282__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__15282,map__15282__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,(cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__15282,map__15282__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms.call(null,init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
