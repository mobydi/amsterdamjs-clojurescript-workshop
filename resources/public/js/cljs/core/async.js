// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13175 = arguments.length;
switch (G__13175) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13176 = (function (f,blockable,meta13177){
this.f = f;
this.blockable = blockable;
this.meta13177 = meta13177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13178,meta13177__$1){
var self__ = this;
var _13178__$1 = this;
return (new cljs.core.async.t_cljs$core$async13176(self__.f,self__.blockable,meta13177__$1));
});

cljs.core.async.t_cljs$core$async13176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13178){
var self__ = this;
var _13178__$1 = this;
return self__.meta13177;
});

cljs.core.async.t_cljs$core$async13176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13177","meta13177",470690809,null)], null);
});

cljs.core.async.t_cljs$core$async13176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13176";

cljs.core.async.t_cljs$core$async13176.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async13176");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13176.
 */
cljs.core.async.__GT_t_cljs$core$async13176 = (function cljs$core$async$__GT_t_cljs$core$async13176(f__$1,blockable__$1,meta13177){
return (new cljs.core.async.t_cljs$core$async13176(f__$1,blockable__$1,meta13177));
});

}

return (new cljs.core.async.t_cljs$core$async13176(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13182 = arguments.length;
switch (G__13182) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13185 = arguments.length;
switch (G__13185) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13188 = arguments.length;
switch (G__13188) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13190 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13190);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13190,ret){
return (function (){
return fn1.call(null,val_13190);
});})(val_13190,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13192 = arguments.length;
switch (G__13192) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___13194 = n;
var x_13195 = (0);
while(true){
if((x_13195 < n__4376__auto___13194)){
(a[x_13195] = (0));

var G__13196 = (x_13195 + (1));
x_13195 = G__13196;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13197 = (i + (1));
i = G__13197;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13198 = (function (flag,meta13199){
this.flag = flag;
this.meta13199 = meta13199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13200,meta13199__$1){
var self__ = this;
var _13200__$1 = this;
return (new cljs.core.async.t_cljs$core$async13198(self__.flag,meta13199__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13200){
var self__ = this;
var _13200__$1 = this;
return self__.meta13199;
});})(flag))
;

cljs.core.async.t_cljs$core$async13198.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13198.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13199","meta13199",1410153431,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13198";

cljs.core.async.t_cljs$core$async13198.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async13198");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13198.
 */
cljs.core.async.__GT_t_cljs$core$async13198 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13198(flag__$1,meta13199){
return (new cljs.core.async.t_cljs$core$async13198(flag__$1,meta13199));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13198(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13201 = (function (flag,cb,meta13202){
this.flag = flag;
this.cb = cb;
this.meta13202 = meta13202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13203,meta13202__$1){
var self__ = this;
var _13203__$1 = this;
return (new cljs.core.async.t_cljs$core$async13201(self__.flag,self__.cb,meta13202__$1));
});

cljs.core.async.t_cljs$core$async13201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13203){
var self__ = this;
var _13203__$1 = this;
return self__.meta13202;
});

cljs.core.async.t_cljs$core$async13201.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13202","meta13202",-575393684,null)], null);
});

cljs.core.async.t_cljs$core$async13201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13201";

cljs.core.async.t_cljs$core$async13201.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async13201");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13201.
 */
cljs.core.async.__GT_t_cljs$core$async13201 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13201(flag__$1,cb__$1,meta13202){
return (new cljs.core.async.t_cljs$core$async13201(flag__$1,cb__$1,meta13202));
});

}

return (new cljs.core.async.t_cljs$core$async13201(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13204_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13204_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13205_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13205_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13206 = (i + (1));
i = G__13206;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___13212 = arguments.length;
var i__4500__auto___13213 = (0);
while(true){
if((i__4500__auto___13213 < len__4499__auto___13212)){
args__4502__auto__.push((arguments[i__4500__auto___13213]));

var G__13214 = (i__4500__auto___13213 + (1));
i__4500__auto___13213 = G__13214;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13209){
var map__13210 = p__13209;
var map__13210__$1 = ((((!((map__13210 == null)))?(((((map__13210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13210):map__13210);
var opts = map__13210__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13207){
var G__13208 = cljs.core.first.call(null,seq13207);
var seq13207__$1 = cljs.core.next.call(null,seq13207);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13208,seq13207__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13216 = arguments.length;
switch (G__13216) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13115__auto___13262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___13262){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___13262){
return (function (state_13240){
var state_val_13241 = (state_13240[(1)]);
if((state_val_13241 === (7))){
var inst_13236 = (state_13240[(2)]);
var state_13240__$1 = state_13240;
var statearr_13242_13263 = state_13240__$1;
(statearr_13242_13263[(2)] = inst_13236);

(statearr_13242_13263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (1))){
var state_13240__$1 = state_13240;
var statearr_13243_13264 = state_13240__$1;
(statearr_13243_13264[(2)] = null);

(statearr_13243_13264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (4))){
var inst_13219 = (state_13240[(7)]);
var inst_13219__$1 = (state_13240[(2)]);
var inst_13220 = (inst_13219__$1 == null);
var state_13240__$1 = (function (){var statearr_13244 = state_13240;
(statearr_13244[(7)] = inst_13219__$1);

return statearr_13244;
})();
if(cljs.core.truth_(inst_13220)){
var statearr_13245_13265 = state_13240__$1;
(statearr_13245_13265[(1)] = (5));

} else {
var statearr_13246_13266 = state_13240__$1;
(statearr_13246_13266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (13))){
var state_13240__$1 = state_13240;
var statearr_13247_13267 = state_13240__$1;
(statearr_13247_13267[(2)] = null);

(statearr_13247_13267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (6))){
var inst_13219 = (state_13240[(7)]);
var state_13240__$1 = state_13240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13240__$1,(11),to,inst_13219);
} else {
if((state_val_13241 === (3))){
var inst_13238 = (state_13240[(2)]);
var state_13240__$1 = state_13240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13240__$1,inst_13238);
} else {
if((state_val_13241 === (12))){
var state_13240__$1 = state_13240;
var statearr_13248_13268 = state_13240__$1;
(statearr_13248_13268[(2)] = null);

(statearr_13248_13268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (2))){
var state_13240__$1 = state_13240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13240__$1,(4),from);
} else {
if((state_val_13241 === (11))){
var inst_13229 = (state_13240[(2)]);
var state_13240__$1 = state_13240;
if(cljs.core.truth_(inst_13229)){
var statearr_13249_13269 = state_13240__$1;
(statearr_13249_13269[(1)] = (12));

} else {
var statearr_13250_13270 = state_13240__$1;
(statearr_13250_13270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (9))){
var state_13240__$1 = state_13240;
var statearr_13251_13271 = state_13240__$1;
(statearr_13251_13271[(2)] = null);

(statearr_13251_13271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (5))){
var state_13240__$1 = state_13240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13252_13272 = state_13240__$1;
(statearr_13252_13272[(1)] = (8));

} else {
var statearr_13253_13273 = state_13240__$1;
(statearr_13253_13273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (14))){
var inst_13234 = (state_13240[(2)]);
var state_13240__$1 = state_13240;
var statearr_13254_13274 = state_13240__$1;
(statearr_13254_13274[(2)] = inst_13234);

(statearr_13254_13274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (10))){
var inst_13226 = (state_13240[(2)]);
var state_13240__$1 = state_13240;
var statearr_13255_13275 = state_13240__$1;
(statearr_13255_13275[(2)] = inst_13226);

(statearr_13255_13275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13241 === (8))){
var inst_13223 = cljs.core.async.close_BANG_.call(null,to);
var state_13240__$1 = state_13240;
var statearr_13256_13276 = state_13240__$1;
(statearr_13256_13276[(2)] = inst_13223);

(statearr_13256_13276[(1)] = (10));


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
});})(c__13115__auto___13262))
;
return ((function (switch__13025__auto__,c__13115__auto___13262){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_13257 = [null,null,null,null,null,null,null,null];
(statearr_13257[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_13257[(1)] = (1));

return statearr_13257;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_13240){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13258){if((e13258 instanceof Object)){
var ex__13029__auto__ = e13258;
var statearr_13259_13277 = state_13240;
(statearr_13259_13277[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13278 = state_13240;
state_13240 = G__13278;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_13240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_13240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___13262))
})();
var state__13117__auto__ = (function (){var statearr_13260 = f__13116__auto__.call(null);
(statearr_13260[(6)] = c__13115__auto___13262);

return statearr_13260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___13262))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13279){
var vec__13280 = p__13279;
var v = cljs.core.nth.call(null,vec__13280,(0),null);
var p = cljs.core.nth.call(null,vec__13280,(1),null);
var job = vec__13280;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13115__auto___13451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___13451,res,vec__13280,v,p,job,jobs,results){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___13451,res,vec__13280,v,p,job,jobs,results){
return (function (state_13287){
var state_val_13288 = (state_13287[(1)]);
if((state_val_13288 === (1))){
var state_13287__$1 = state_13287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13287__$1,(2),res,v);
} else {
if((state_val_13288 === (2))){
var inst_13284 = (state_13287[(2)]);
var inst_13285 = cljs.core.async.close_BANG_.call(null,res);
var state_13287__$1 = (function (){var statearr_13289 = state_13287;
(statearr_13289[(7)] = inst_13284);

return statearr_13289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13287__$1,inst_13285);
} else {
return null;
}
}
});})(c__13115__auto___13451,res,vec__13280,v,p,job,jobs,results))
;
return ((function (switch__13025__auto__,c__13115__auto___13451,res,vec__13280,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0 = (function (){
var statearr_13290 = [null,null,null,null,null,null,null,null];
(statearr_13290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__);

(statearr_13290[(1)] = (1));

return statearr_13290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1 = (function (state_13287){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13291){if((e13291 instanceof Object)){
var ex__13029__auto__ = e13291;
var statearr_13292_13452 = state_13287;
(statearr_13292_13452[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13453 = state_13287;
state_13287 = G__13453;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = function(state_13287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1.call(this,state_13287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___13451,res,vec__13280,v,p,job,jobs,results))
})();
var state__13117__auto__ = (function (){var statearr_13293 = f__13116__auto__.call(null);
(statearr_13293[(6)] = c__13115__auto___13451);

return statearr_13293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___13451,res,vec__13280,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13294){
var vec__13295 = p__13294;
var v = cljs.core.nth.call(null,vec__13295,(0),null);
var p = cljs.core.nth.call(null,vec__13295,(1),null);
var job = vec__13295;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___13454 = n;
var __13455 = (0);
while(true){
if((__13455 < n__4376__auto___13454)){
var G__13298_13456 = type;
var G__13298_13457__$1 = (((G__13298_13456 instanceof cljs.core.Keyword))?G__13298_13456.fqn:null);
switch (G__13298_13457__$1) {
case "compute":
var c__13115__auto___13459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13455,c__13115__auto___13459,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (__13455,c__13115__auto___13459,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async){
return (function (state_13311){
var state_val_13312 = (state_13311[(1)]);
if((state_val_13312 === (1))){
var state_13311__$1 = state_13311;
var statearr_13313_13460 = state_13311__$1;
(statearr_13313_13460[(2)] = null);

(statearr_13313_13460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (2))){
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13311__$1,(4),jobs);
} else {
if((state_val_13312 === (3))){
var inst_13309 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13311__$1,inst_13309);
} else {
if((state_val_13312 === (4))){
var inst_13301 = (state_13311[(2)]);
var inst_13302 = process.call(null,inst_13301);
var state_13311__$1 = state_13311;
if(cljs.core.truth_(inst_13302)){
var statearr_13314_13461 = state_13311__$1;
(statearr_13314_13461[(1)] = (5));

} else {
var statearr_13315_13462 = state_13311__$1;
(statearr_13315_13462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (5))){
var state_13311__$1 = state_13311;
var statearr_13316_13463 = state_13311__$1;
(statearr_13316_13463[(2)] = null);

(statearr_13316_13463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (6))){
var state_13311__$1 = state_13311;
var statearr_13317_13464 = state_13311__$1;
(statearr_13317_13464[(2)] = null);

(statearr_13317_13464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (7))){
var inst_13307 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
var statearr_13318_13465 = state_13311__$1;
(statearr_13318_13465[(2)] = inst_13307);

(statearr_13318_13465[(1)] = (3));


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
});})(__13455,c__13115__auto___13459,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async))
;
return ((function (__13455,switch__13025__auto__,c__13115__auto___13459,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0 = (function (){
var statearr_13319 = [null,null,null,null,null,null,null];
(statearr_13319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__);

(statearr_13319[(1)] = (1));

return statearr_13319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1 = (function (state_13311){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13320){if((e13320 instanceof Object)){
var ex__13029__auto__ = e13320;
var statearr_13321_13466 = state_13311;
(statearr_13321_13466[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13467 = state_13311;
state_13311 = G__13467;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = function(state_13311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1.call(this,state_13311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__;
})()
;})(__13455,switch__13025__auto__,c__13115__auto___13459,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async))
})();
var state__13117__auto__ = (function (){var statearr_13322 = f__13116__auto__.call(null);
(statearr_13322[(6)] = c__13115__auto___13459);

return statearr_13322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(__13455,c__13115__auto___13459,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async))
);


break;
case "async":
var c__13115__auto___13468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13455,c__13115__auto___13468,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (__13455,c__13115__auto___13468,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async){
return (function (state_13335){
var state_val_13336 = (state_13335[(1)]);
if((state_val_13336 === (1))){
var state_13335__$1 = state_13335;
var statearr_13337_13469 = state_13335__$1;
(statearr_13337_13469[(2)] = null);

(statearr_13337_13469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13336 === (2))){
var state_13335__$1 = state_13335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13335__$1,(4),jobs);
} else {
if((state_val_13336 === (3))){
var inst_13333 = (state_13335[(2)]);
var state_13335__$1 = state_13335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13335__$1,inst_13333);
} else {
if((state_val_13336 === (4))){
var inst_13325 = (state_13335[(2)]);
var inst_13326 = async.call(null,inst_13325);
var state_13335__$1 = state_13335;
if(cljs.core.truth_(inst_13326)){
var statearr_13338_13470 = state_13335__$1;
(statearr_13338_13470[(1)] = (5));

} else {
var statearr_13339_13471 = state_13335__$1;
(statearr_13339_13471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13336 === (5))){
var state_13335__$1 = state_13335;
var statearr_13340_13472 = state_13335__$1;
(statearr_13340_13472[(2)] = null);

(statearr_13340_13472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13336 === (6))){
var state_13335__$1 = state_13335;
var statearr_13341_13473 = state_13335__$1;
(statearr_13341_13473[(2)] = null);

(statearr_13341_13473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13336 === (7))){
var inst_13331 = (state_13335[(2)]);
var state_13335__$1 = state_13335;
var statearr_13342_13474 = state_13335__$1;
(statearr_13342_13474[(2)] = inst_13331);

(statearr_13342_13474[(1)] = (3));


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
});})(__13455,c__13115__auto___13468,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async))
;
return ((function (__13455,switch__13025__auto__,c__13115__auto___13468,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0 = (function (){
var statearr_13343 = [null,null,null,null,null,null,null];
(statearr_13343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__);

(statearr_13343[(1)] = (1));

return statearr_13343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1 = (function (state_13335){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13344){if((e13344 instanceof Object)){
var ex__13029__auto__ = e13344;
var statearr_13345_13475 = state_13335;
(statearr_13345_13475[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13476 = state_13335;
state_13335 = G__13476;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = function(state_13335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1.call(this,state_13335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__;
})()
;})(__13455,switch__13025__auto__,c__13115__auto___13468,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async))
})();
var state__13117__auto__ = (function (){var statearr_13346 = f__13116__auto__.call(null);
(statearr_13346[(6)] = c__13115__auto___13468);

return statearr_13346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(__13455,c__13115__auto___13468,G__13298_13456,G__13298_13457__$1,n__4376__auto___13454,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13298_13457__$1)].join('')));

}

var G__13477 = (__13455 + (1));
__13455 = G__13477;
continue;
} else {
}
break;
}

var c__13115__auto___13478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___13478,jobs,results,process,async){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___13478,jobs,results,process,async){
return (function (state_13368){
var state_val_13369 = (state_13368[(1)]);
if((state_val_13369 === (1))){
var state_13368__$1 = state_13368;
var statearr_13370_13479 = state_13368__$1;
(statearr_13370_13479[(2)] = null);

(statearr_13370_13479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (2))){
var state_13368__$1 = state_13368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13368__$1,(4),from);
} else {
if((state_val_13369 === (3))){
var inst_13366 = (state_13368[(2)]);
var state_13368__$1 = state_13368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13368__$1,inst_13366);
} else {
if((state_val_13369 === (4))){
var inst_13349 = (state_13368[(7)]);
var inst_13349__$1 = (state_13368[(2)]);
var inst_13350 = (inst_13349__$1 == null);
var state_13368__$1 = (function (){var statearr_13371 = state_13368;
(statearr_13371[(7)] = inst_13349__$1);

return statearr_13371;
})();
if(cljs.core.truth_(inst_13350)){
var statearr_13372_13480 = state_13368__$1;
(statearr_13372_13480[(1)] = (5));

} else {
var statearr_13373_13481 = state_13368__$1;
(statearr_13373_13481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (5))){
var inst_13352 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13368__$1 = state_13368;
var statearr_13374_13482 = state_13368__$1;
(statearr_13374_13482[(2)] = inst_13352);

(statearr_13374_13482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (6))){
var inst_13349 = (state_13368[(7)]);
var inst_13354 = (state_13368[(8)]);
var inst_13354__$1 = cljs.core.async.chan.call(null,(1));
var inst_13355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13356 = [inst_13349,inst_13354__$1];
var inst_13357 = (new cljs.core.PersistentVector(null,2,(5),inst_13355,inst_13356,null));
var state_13368__$1 = (function (){var statearr_13375 = state_13368;
(statearr_13375[(8)] = inst_13354__$1);

return statearr_13375;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13368__$1,(8),jobs,inst_13357);
} else {
if((state_val_13369 === (7))){
var inst_13364 = (state_13368[(2)]);
var state_13368__$1 = state_13368;
var statearr_13376_13483 = state_13368__$1;
(statearr_13376_13483[(2)] = inst_13364);

(statearr_13376_13483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13369 === (8))){
var inst_13354 = (state_13368[(8)]);
var inst_13359 = (state_13368[(2)]);
var state_13368__$1 = (function (){var statearr_13377 = state_13368;
(statearr_13377[(9)] = inst_13359);

return statearr_13377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13368__$1,(9),results,inst_13354);
} else {
if((state_val_13369 === (9))){
var inst_13361 = (state_13368[(2)]);
var state_13368__$1 = (function (){var statearr_13378 = state_13368;
(statearr_13378[(10)] = inst_13361);

return statearr_13378;
})();
var statearr_13379_13484 = state_13368__$1;
(statearr_13379_13484[(2)] = null);

(statearr_13379_13484[(1)] = (2));


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
});})(c__13115__auto___13478,jobs,results,process,async))
;
return ((function (switch__13025__auto__,c__13115__auto___13478,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0 = (function (){
var statearr_13380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__);

(statearr_13380[(1)] = (1));

return statearr_13380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1 = (function (state_13368){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13381){if((e13381 instanceof Object)){
var ex__13029__auto__ = e13381;
var statearr_13382_13485 = state_13368;
(statearr_13382_13485[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13486 = state_13368;
state_13368 = G__13486;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = function(state_13368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1.call(this,state_13368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___13478,jobs,results,process,async))
})();
var state__13117__auto__ = (function (){var statearr_13383 = f__13116__auto__.call(null);
(statearr_13383[(6)] = c__13115__auto___13478);

return statearr_13383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___13478,jobs,results,process,async))
);


var c__13115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto__,jobs,results,process,async){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto__,jobs,results,process,async){
return (function (state_13421){
var state_val_13422 = (state_13421[(1)]);
if((state_val_13422 === (7))){
var inst_13417 = (state_13421[(2)]);
var state_13421__$1 = state_13421;
var statearr_13423_13487 = state_13421__$1;
(statearr_13423_13487[(2)] = inst_13417);

(statearr_13423_13487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (20))){
var state_13421__$1 = state_13421;
var statearr_13424_13488 = state_13421__$1;
(statearr_13424_13488[(2)] = null);

(statearr_13424_13488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (1))){
var state_13421__$1 = state_13421;
var statearr_13425_13489 = state_13421__$1;
(statearr_13425_13489[(2)] = null);

(statearr_13425_13489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (4))){
var inst_13386 = (state_13421[(7)]);
var inst_13386__$1 = (state_13421[(2)]);
var inst_13387 = (inst_13386__$1 == null);
var state_13421__$1 = (function (){var statearr_13426 = state_13421;
(statearr_13426[(7)] = inst_13386__$1);

return statearr_13426;
})();
if(cljs.core.truth_(inst_13387)){
var statearr_13427_13490 = state_13421__$1;
(statearr_13427_13490[(1)] = (5));

} else {
var statearr_13428_13491 = state_13421__$1;
(statearr_13428_13491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (15))){
var inst_13399 = (state_13421[(8)]);
var state_13421__$1 = state_13421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13421__$1,(18),to,inst_13399);
} else {
if((state_val_13422 === (21))){
var inst_13412 = (state_13421[(2)]);
var state_13421__$1 = state_13421;
var statearr_13429_13492 = state_13421__$1;
(statearr_13429_13492[(2)] = inst_13412);

(statearr_13429_13492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (13))){
var inst_13414 = (state_13421[(2)]);
var state_13421__$1 = (function (){var statearr_13430 = state_13421;
(statearr_13430[(9)] = inst_13414);

return statearr_13430;
})();
var statearr_13431_13493 = state_13421__$1;
(statearr_13431_13493[(2)] = null);

(statearr_13431_13493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (6))){
var inst_13386 = (state_13421[(7)]);
var state_13421__$1 = state_13421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13421__$1,(11),inst_13386);
} else {
if((state_val_13422 === (17))){
var inst_13407 = (state_13421[(2)]);
var state_13421__$1 = state_13421;
if(cljs.core.truth_(inst_13407)){
var statearr_13432_13494 = state_13421__$1;
(statearr_13432_13494[(1)] = (19));

} else {
var statearr_13433_13495 = state_13421__$1;
(statearr_13433_13495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (3))){
var inst_13419 = (state_13421[(2)]);
var state_13421__$1 = state_13421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13421__$1,inst_13419);
} else {
if((state_val_13422 === (12))){
var inst_13396 = (state_13421[(10)]);
var state_13421__$1 = state_13421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13421__$1,(14),inst_13396);
} else {
if((state_val_13422 === (2))){
var state_13421__$1 = state_13421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13421__$1,(4),results);
} else {
if((state_val_13422 === (19))){
var state_13421__$1 = state_13421;
var statearr_13434_13496 = state_13421__$1;
(statearr_13434_13496[(2)] = null);

(statearr_13434_13496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (11))){
var inst_13396 = (state_13421[(2)]);
var state_13421__$1 = (function (){var statearr_13435 = state_13421;
(statearr_13435[(10)] = inst_13396);

return statearr_13435;
})();
var statearr_13436_13497 = state_13421__$1;
(statearr_13436_13497[(2)] = null);

(statearr_13436_13497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (9))){
var state_13421__$1 = state_13421;
var statearr_13437_13498 = state_13421__$1;
(statearr_13437_13498[(2)] = null);

(statearr_13437_13498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (5))){
var state_13421__$1 = state_13421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13438_13499 = state_13421__$1;
(statearr_13438_13499[(1)] = (8));

} else {
var statearr_13439_13500 = state_13421__$1;
(statearr_13439_13500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (14))){
var inst_13399 = (state_13421[(8)]);
var inst_13401 = (state_13421[(11)]);
var inst_13399__$1 = (state_13421[(2)]);
var inst_13400 = (inst_13399__$1 == null);
var inst_13401__$1 = cljs.core.not.call(null,inst_13400);
var state_13421__$1 = (function (){var statearr_13440 = state_13421;
(statearr_13440[(8)] = inst_13399__$1);

(statearr_13440[(11)] = inst_13401__$1);

return statearr_13440;
})();
if(inst_13401__$1){
var statearr_13441_13501 = state_13421__$1;
(statearr_13441_13501[(1)] = (15));

} else {
var statearr_13442_13502 = state_13421__$1;
(statearr_13442_13502[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (16))){
var inst_13401 = (state_13421[(11)]);
var state_13421__$1 = state_13421;
var statearr_13443_13503 = state_13421__$1;
(statearr_13443_13503[(2)] = inst_13401);

(statearr_13443_13503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (10))){
var inst_13393 = (state_13421[(2)]);
var state_13421__$1 = state_13421;
var statearr_13444_13504 = state_13421__$1;
(statearr_13444_13504[(2)] = inst_13393);

(statearr_13444_13504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (18))){
var inst_13404 = (state_13421[(2)]);
var state_13421__$1 = state_13421;
var statearr_13445_13505 = state_13421__$1;
(statearr_13445_13505[(2)] = inst_13404);

(statearr_13445_13505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13422 === (8))){
var inst_13390 = cljs.core.async.close_BANG_.call(null,to);
var state_13421__$1 = state_13421;
var statearr_13446_13506 = state_13421__$1;
(statearr_13446_13506[(2)] = inst_13390);

(statearr_13446_13506[(1)] = (10));


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
});})(c__13115__auto__,jobs,results,process,async))
;
return ((function (switch__13025__auto__,c__13115__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0 = (function (){
var statearr_13447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__);

(statearr_13447[(1)] = (1));

return statearr_13447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1 = (function (state_13421){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13448){if((e13448 instanceof Object)){
var ex__13029__auto__ = e13448;
var statearr_13449_13507 = state_13421;
(statearr_13449_13507[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13508 = state_13421;
state_13421 = G__13508;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__ = function(state_13421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1.call(this,state_13421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto__,jobs,results,process,async))
})();
var state__13117__auto__ = (function (){var statearr_13450 = f__13116__auto__.call(null);
(statearr_13450[(6)] = c__13115__auto__);

return statearr_13450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto__,jobs,results,process,async))
);

return c__13115__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13510 = arguments.length;
switch (G__13510) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13513 = arguments.length;
switch (G__13513) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13516 = arguments.length;
switch (G__13516) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13115__auto___13565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___13565,tc,fc){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___13565,tc,fc){
return (function (state_13542){
var state_val_13543 = (state_13542[(1)]);
if((state_val_13543 === (7))){
var inst_13538 = (state_13542[(2)]);
var state_13542__$1 = state_13542;
var statearr_13544_13566 = state_13542__$1;
(statearr_13544_13566[(2)] = inst_13538);

(statearr_13544_13566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (1))){
var state_13542__$1 = state_13542;
var statearr_13545_13567 = state_13542__$1;
(statearr_13545_13567[(2)] = null);

(statearr_13545_13567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (4))){
var inst_13519 = (state_13542[(7)]);
var inst_13519__$1 = (state_13542[(2)]);
var inst_13520 = (inst_13519__$1 == null);
var state_13542__$1 = (function (){var statearr_13546 = state_13542;
(statearr_13546[(7)] = inst_13519__$1);

return statearr_13546;
})();
if(cljs.core.truth_(inst_13520)){
var statearr_13547_13568 = state_13542__$1;
(statearr_13547_13568[(1)] = (5));

} else {
var statearr_13548_13569 = state_13542__$1;
(statearr_13548_13569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (13))){
var state_13542__$1 = state_13542;
var statearr_13549_13570 = state_13542__$1;
(statearr_13549_13570[(2)] = null);

(statearr_13549_13570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (6))){
var inst_13519 = (state_13542[(7)]);
var inst_13525 = p.call(null,inst_13519);
var state_13542__$1 = state_13542;
if(cljs.core.truth_(inst_13525)){
var statearr_13550_13571 = state_13542__$1;
(statearr_13550_13571[(1)] = (9));

} else {
var statearr_13551_13572 = state_13542__$1;
(statearr_13551_13572[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (3))){
var inst_13540 = (state_13542[(2)]);
var state_13542__$1 = state_13542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13542__$1,inst_13540);
} else {
if((state_val_13543 === (12))){
var state_13542__$1 = state_13542;
var statearr_13552_13573 = state_13542__$1;
(statearr_13552_13573[(2)] = null);

(statearr_13552_13573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (2))){
var state_13542__$1 = state_13542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13542__$1,(4),ch);
} else {
if((state_val_13543 === (11))){
var inst_13519 = (state_13542[(7)]);
var inst_13529 = (state_13542[(2)]);
var state_13542__$1 = state_13542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13542__$1,(8),inst_13529,inst_13519);
} else {
if((state_val_13543 === (9))){
var state_13542__$1 = state_13542;
var statearr_13553_13574 = state_13542__$1;
(statearr_13553_13574[(2)] = tc);

(statearr_13553_13574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (5))){
var inst_13522 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13523 = cljs.core.async.close_BANG_.call(null,fc);
var state_13542__$1 = (function (){var statearr_13554 = state_13542;
(statearr_13554[(8)] = inst_13522);

return statearr_13554;
})();
var statearr_13555_13575 = state_13542__$1;
(statearr_13555_13575[(2)] = inst_13523);

(statearr_13555_13575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (14))){
var inst_13536 = (state_13542[(2)]);
var state_13542__$1 = state_13542;
var statearr_13556_13576 = state_13542__$1;
(statearr_13556_13576[(2)] = inst_13536);

(statearr_13556_13576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (10))){
var state_13542__$1 = state_13542;
var statearr_13557_13577 = state_13542__$1;
(statearr_13557_13577[(2)] = fc);

(statearr_13557_13577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13543 === (8))){
var inst_13531 = (state_13542[(2)]);
var state_13542__$1 = state_13542;
if(cljs.core.truth_(inst_13531)){
var statearr_13558_13578 = state_13542__$1;
(statearr_13558_13578[(1)] = (12));

} else {
var statearr_13559_13579 = state_13542__$1;
(statearr_13559_13579[(1)] = (13));

}

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
});})(c__13115__auto___13565,tc,fc))
;
return ((function (switch__13025__auto__,c__13115__auto___13565,tc,fc){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_13560 = [null,null,null,null,null,null,null,null,null];
(statearr_13560[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_13560[(1)] = (1));

return statearr_13560;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_13542){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13561){if((e13561 instanceof Object)){
var ex__13029__auto__ = e13561;
var statearr_13562_13580 = state_13542;
(statearr_13562_13580[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13581 = state_13542;
state_13542 = G__13581;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_13542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_13542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___13565,tc,fc))
})();
var state__13117__auto__ = (function (){var statearr_13563 = f__13116__auto__.call(null);
(statearr_13563[(6)] = c__13115__auto___13565);

return statearr_13563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___13565,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto__){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto__){
return (function (state_13602){
var state_val_13603 = (state_13602[(1)]);
if((state_val_13603 === (7))){
var inst_13598 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13604_13622 = state_13602__$1;
(statearr_13604_13622[(2)] = inst_13598);

(statearr_13604_13622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (1))){
var inst_13582 = init;
var state_13602__$1 = (function (){var statearr_13605 = state_13602;
(statearr_13605[(7)] = inst_13582);

return statearr_13605;
})();
var statearr_13606_13623 = state_13602__$1;
(statearr_13606_13623[(2)] = null);

(statearr_13606_13623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (4))){
var inst_13585 = (state_13602[(8)]);
var inst_13585__$1 = (state_13602[(2)]);
var inst_13586 = (inst_13585__$1 == null);
var state_13602__$1 = (function (){var statearr_13607 = state_13602;
(statearr_13607[(8)] = inst_13585__$1);

return statearr_13607;
})();
if(cljs.core.truth_(inst_13586)){
var statearr_13608_13624 = state_13602__$1;
(statearr_13608_13624[(1)] = (5));

} else {
var statearr_13609_13625 = state_13602__$1;
(statearr_13609_13625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (6))){
var inst_13582 = (state_13602[(7)]);
var inst_13589 = (state_13602[(9)]);
var inst_13585 = (state_13602[(8)]);
var inst_13589__$1 = f.call(null,inst_13582,inst_13585);
var inst_13590 = cljs.core.reduced_QMARK_.call(null,inst_13589__$1);
var state_13602__$1 = (function (){var statearr_13610 = state_13602;
(statearr_13610[(9)] = inst_13589__$1);

return statearr_13610;
})();
if(inst_13590){
var statearr_13611_13626 = state_13602__$1;
(statearr_13611_13626[(1)] = (8));

} else {
var statearr_13612_13627 = state_13602__$1;
(statearr_13612_13627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (3))){
var inst_13600 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13602__$1,inst_13600);
} else {
if((state_val_13603 === (2))){
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13602__$1,(4),ch);
} else {
if((state_val_13603 === (9))){
var inst_13589 = (state_13602[(9)]);
var inst_13582 = inst_13589;
var state_13602__$1 = (function (){var statearr_13613 = state_13602;
(statearr_13613[(7)] = inst_13582);

return statearr_13613;
})();
var statearr_13614_13628 = state_13602__$1;
(statearr_13614_13628[(2)] = null);

(statearr_13614_13628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (5))){
var inst_13582 = (state_13602[(7)]);
var state_13602__$1 = state_13602;
var statearr_13615_13629 = state_13602__$1;
(statearr_13615_13629[(2)] = inst_13582);

(statearr_13615_13629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (10))){
var inst_13596 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13616_13630 = state_13602__$1;
(statearr_13616_13630[(2)] = inst_13596);

(statearr_13616_13630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (8))){
var inst_13589 = (state_13602[(9)]);
var inst_13592 = cljs.core.deref.call(null,inst_13589);
var state_13602__$1 = state_13602;
var statearr_13617_13631 = state_13602__$1;
(statearr_13617_13631[(2)] = inst_13592);

(statearr_13617_13631[(1)] = (10));


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
});})(c__13115__auto__))
;
return ((function (switch__13025__auto__,c__13115__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13026__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13026__auto____0 = (function (){
var statearr_13618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13618[(0)] = cljs$core$async$reduce_$_state_machine__13026__auto__);

(statearr_13618[(1)] = (1));

return statearr_13618;
});
var cljs$core$async$reduce_$_state_machine__13026__auto____1 = (function (state_13602){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13619){if((e13619 instanceof Object)){
var ex__13029__auto__ = e13619;
var statearr_13620_13632 = state_13602;
(statearr_13620_13632[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13633 = state_13602;
state_13602 = G__13633;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13026__auto__ = function(state_13602){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13026__auto____1.call(this,state_13602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13026__auto____0;
cljs$core$async$reduce_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13026__auto____1;
return cljs$core$async$reduce_$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto__))
})();
var state__13117__auto__ = (function (){var statearr_13621 = f__13116__auto__.call(null);
(statearr_13621[(6)] = c__13115__auto__);

return statearr_13621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto__))
);

return c__13115__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto__,f__$1){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto__,f__$1){
return (function (state_13639){
var state_val_13640 = (state_13639[(1)]);
if((state_val_13640 === (1))){
var inst_13634 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13639__$1,(2),inst_13634);
} else {
if((state_val_13640 === (2))){
var inst_13636 = (state_13639[(2)]);
var inst_13637 = f__$1.call(null,inst_13636);
var state_13639__$1 = state_13639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13639__$1,inst_13637);
} else {
return null;
}
}
});})(c__13115__auto__,f__$1))
;
return ((function (switch__13025__auto__,c__13115__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13026__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13026__auto____0 = (function (){
var statearr_13641 = [null,null,null,null,null,null,null];
(statearr_13641[(0)] = cljs$core$async$transduce_$_state_machine__13026__auto__);

(statearr_13641[(1)] = (1));

return statearr_13641;
});
var cljs$core$async$transduce_$_state_machine__13026__auto____1 = (function (state_13639){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13642){if((e13642 instanceof Object)){
var ex__13029__auto__ = e13642;
var statearr_13643_13645 = state_13639;
(statearr_13643_13645[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13646 = state_13639;
state_13639 = G__13646;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13026__auto__ = function(state_13639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13026__auto____1.call(this,state_13639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13026__auto____0;
cljs$core$async$transduce_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13026__auto____1;
return cljs$core$async$transduce_$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto__,f__$1))
})();
var state__13117__auto__ = (function (){var statearr_13644 = f__13116__auto__.call(null);
(statearr_13644[(6)] = c__13115__auto__);

return statearr_13644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto__,f__$1))
);

return c__13115__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13648 = arguments.length;
switch (G__13648) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto__){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto__){
return (function (state_13673){
var state_val_13674 = (state_13673[(1)]);
if((state_val_13674 === (7))){
var inst_13655 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13675_13696 = state_13673__$1;
(statearr_13675_13696[(2)] = inst_13655);

(statearr_13675_13696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (1))){
var inst_13649 = cljs.core.seq.call(null,coll);
var inst_13650 = inst_13649;
var state_13673__$1 = (function (){var statearr_13676 = state_13673;
(statearr_13676[(7)] = inst_13650);

return statearr_13676;
})();
var statearr_13677_13697 = state_13673__$1;
(statearr_13677_13697[(2)] = null);

(statearr_13677_13697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (4))){
var inst_13650 = (state_13673[(7)]);
var inst_13653 = cljs.core.first.call(null,inst_13650);
var state_13673__$1 = state_13673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13673__$1,(7),ch,inst_13653);
} else {
if((state_val_13674 === (13))){
var inst_13667 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13678_13698 = state_13673__$1;
(statearr_13678_13698[(2)] = inst_13667);

(statearr_13678_13698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (6))){
var inst_13658 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
if(cljs.core.truth_(inst_13658)){
var statearr_13679_13699 = state_13673__$1;
(statearr_13679_13699[(1)] = (8));

} else {
var statearr_13680_13700 = state_13673__$1;
(statearr_13680_13700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (3))){
var inst_13671 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13673__$1,inst_13671);
} else {
if((state_val_13674 === (12))){
var state_13673__$1 = state_13673;
var statearr_13681_13701 = state_13673__$1;
(statearr_13681_13701[(2)] = null);

(statearr_13681_13701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (2))){
var inst_13650 = (state_13673[(7)]);
var state_13673__$1 = state_13673;
if(cljs.core.truth_(inst_13650)){
var statearr_13682_13702 = state_13673__$1;
(statearr_13682_13702[(1)] = (4));

} else {
var statearr_13683_13703 = state_13673__$1;
(statearr_13683_13703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (11))){
var inst_13664 = cljs.core.async.close_BANG_.call(null,ch);
var state_13673__$1 = state_13673;
var statearr_13684_13704 = state_13673__$1;
(statearr_13684_13704[(2)] = inst_13664);

(statearr_13684_13704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (9))){
var state_13673__$1 = state_13673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13685_13705 = state_13673__$1;
(statearr_13685_13705[(1)] = (11));

} else {
var statearr_13686_13706 = state_13673__$1;
(statearr_13686_13706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (5))){
var inst_13650 = (state_13673[(7)]);
var state_13673__$1 = state_13673;
var statearr_13687_13707 = state_13673__$1;
(statearr_13687_13707[(2)] = inst_13650);

(statearr_13687_13707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (10))){
var inst_13669 = (state_13673[(2)]);
var state_13673__$1 = state_13673;
var statearr_13688_13708 = state_13673__$1;
(statearr_13688_13708[(2)] = inst_13669);

(statearr_13688_13708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13674 === (8))){
var inst_13650 = (state_13673[(7)]);
var inst_13660 = cljs.core.next.call(null,inst_13650);
var inst_13650__$1 = inst_13660;
var state_13673__$1 = (function (){var statearr_13689 = state_13673;
(statearr_13689[(7)] = inst_13650__$1);

return statearr_13689;
})();
var statearr_13690_13709 = state_13673__$1;
(statearr_13690_13709[(2)] = null);

(statearr_13690_13709[(1)] = (2));


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
});})(c__13115__auto__))
;
return ((function (switch__13025__auto__,c__13115__auto__){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_13691 = [null,null,null,null,null,null,null,null];
(statearr_13691[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_13691[(1)] = (1));

return statearr_13691;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_13673){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13692){if((e13692 instanceof Object)){
var ex__13029__auto__ = e13692;
var statearr_13693_13710 = state_13673;
(statearr_13693_13710[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13711 = state_13673;
state_13673 = G__13711;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_13673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_13673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto__))
})();
var state__13117__auto__ = (function (){var statearr_13694 = f__13116__auto__.call(null);
(statearr_13694[(6)] = c__13115__auto__);

return statearr_13694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto__))
);

return c__13115__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13712 = (function (ch,cs,meta13713){
this.ch = ch;
this.cs = cs;
this.meta13713 = meta13713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13714,meta13713__$1){
var self__ = this;
var _13714__$1 = this;
return (new cljs.core.async.t_cljs$core$async13712(self__.ch,self__.cs,meta13713__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13714){
var self__ = this;
var _13714__$1 = this;
return self__.meta13713;
});})(cs))
;

cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13712.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13712.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13713","meta13713",-203550388,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13712";

cljs.core.async.t_cljs$core$async13712.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async13712");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13712.
 */
cljs.core.async.__GT_t_cljs$core$async13712 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13712(ch__$1,cs__$1,meta13713){
return (new cljs.core.async.t_cljs$core$async13712(ch__$1,cs__$1,meta13713));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13712(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13115__auto___13934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___13934,cs,m,dchan,dctr,done){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___13934,cs,m,dchan,dctr,done){
return (function (state_13849){
var state_val_13850 = (state_13849[(1)]);
if((state_val_13850 === (7))){
var inst_13845 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13851_13935 = state_13849__$1;
(statearr_13851_13935[(2)] = inst_13845);

(statearr_13851_13935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (20))){
var inst_13748 = (state_13849[(7)]);
var inst_13760 = cljs.core.first.call(null,inst_13748);
var inst_13761 = cljs.core.nth.call(null,inst_13760,(0),null);
var inst_13762 = cljs.core.nth.call(null,inst_13760,(1),null);
var state_13849__$1 = (function (){var statearr_13852 = state_13849;
(statearr_13852[(8)] = inst_13761);

return statearr_13852;
})();
if(cljs.core.truth_(inst_13762)){
var statearr_13853_13936 = state_13849__$1;
(statearr_13853_13936[(1)] = (22));

} else {
var statearr_13854_13937 = state_13849__$1;
(statearr_13854_13937[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (27))){
var inst_13717 = (state_13849[(9)]);
var inst_13797 = (state_13849[(10)]);
var inst_13790 = (state_13849[(11)]);
var inst_13792 = (state_13849[(12)]);
var inst_13797__$1 = cljs.core._nth.call(null,inst_13790,inst_13792);
var inst_13798 = cljs.core.async.put_BANG_.call(null,inst_13797__$1,inst_13717,done);
var state_13849__$1 = (function (){var statearr_13855 = state_13849;
(statearr_13855[(10)] = inst_13797__$1);

return statearr_13855;
})();
if(cljs.core.truth_(inst_13798)){
var statearr_13856_13938 = state_13849__$1;
(statearr_13856_13938[(1)] = (30));

} else {
var statearr_13857_13939 = state_13849__$1;
(statearr_13857_13939[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (1))){
var state_13849__$1 = state_13849;
var statearr_13858_13940 = state_13849__$1;
(statearr_13858_13940[(2)] = null);

(statearr_13858_13940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (24))){
var inst_13748 = (state_13849[(7)]);
var inst_13767 = (state_13849[(2)]);
var inst_13768 = cljs.core.next.call(null,inst_13748);
var inst_13726 = inst_13768;
var inst_13727 = null;
var inst_13728 = (0);
var inst_13729 = (0);
var state_13849__$1 = (function (){var statearr_13859 = state_13849;
(statearr_13859[(13)] = inst_13767);

(statearr_13859[(14)] = inst_13727);

(statearr_13859[(15)] = inst_13729);

(statearr_13859[(16)] = inst_13728);

(statearr_13859[(17)] = inst_13726);

return statearr_13859;
})();
var statearr_13860_13941 = state_13849__$1;
(statearr_13860_13941[(2)] = null);

(statearr_13860_13941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (39))){
var state_13849__$1 = state_13849;
var statearr_13864_13942 = state_13849__$1;
(statearr_13864_13942[(2)] = null);

(statearr_13864_13942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (4))){
var inst_13717 = (state_13849[(9)]);
var inst_13717__$1 = (state_13849[(2)]);
var inst_13718 = (inst_13717__$1 == null);
var state_13849__$1 = (function (){var statearr_13865 = state_13849;
(statearr_13865[(9)] = inst_13717__$1);

return statearr_13865;
})();
if(cljs.core.truth_(inst_13718)){
var statearr_13866_13943 = state_13849__$1;
(statearr_13866_13943[(1)] = (5));

} else {
var statearr_13867_13944 = state_13849__$1;
(statearr_13867_13944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (15))){
var inst_13727 = (state_13849[(14)]);
var inst_13729 = (state_13849[(15)]);
var inst_13728 = (state_13849[(16)]);
var inst_13726 = (state_13849[(17)]);
var inst_13744 = (state_13849[(2)]);
var inst_13745 = (inst_13729 + (1));
var tmp13861 = inst_13727;
var tmp13862 = inst_13728;
var tmp13863 = inst_13726;
var inst_13726__$1 = tmp13863;
var inst_13727__$1 = tmp13861;
var inst_13728__$1 = tmp13862;
var inst_13729__$1 = inst_13745;
var state_13849__$1 = (function (){var statearr_13868 = state_13849;
(statearr_13868[(18)] = inst_13744);

(statearr_13868[(14)] = inst_13727__$1);

(statearr_13868[(15)] = inst_13729__$1);

(statearr_13868[(16)] = inst_13728__$1);

(statearr_13868[(17)] = inst_13726__$1);

return statearr_13868;
})();
var statearr_13869_13945 = state_13849__$1;
(statearr_13869_13945[(2)] = null);

(statearr_13869_13945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (21))){
var inst_13771 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13873_13946 = state_13849__$1;
(statearr_13873_13946[(2)] = inst_13771);

(statearr_13873_13946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (31))){
var inst_13797 = (state_13849[(10)]);
var inst_13801 = done.call(null,null);
var inst_13802 = cljs.core.async.untap_STAR_.call(null,m,inst_13797);
var state_13849__$1 = (function (){var statearr_13874 = state_13849;
(statearr_13874[(19)] = inst_13801);

return statearr_13874;
})();
var statearr_13875_13947 = state_13849__$1;
(statearr_13875_13947[(2)] = inst_13802);

(statearr_13875_13947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (32))){
var inst_13789 = (state_13849[(20)]);
var inst_13790 = (state_13849[(11)]);
var inst_13792 = (state_13849[(12)]);
var inst_13791 = (state_13849[(21)]);
var inst_13804 = (state_13849[(2)]);
var inst_13805 = (inst_13792 + (1));
var tmp13870 = inst_13789;
var tmp13871 = inst_13790;
var tmp13872 = inst_13791;
var inst_13789__$1 = tmp13870;
var inst_13790__$1 = tmp13871;
var inst_13791__$1 = tmp13872;
var inst_13792__$1 = inst_13805;
var state_13849__$1 = (function (){var statearr_13876 = state_13849;
(statearr_13876[(20)] = inst_13789__$1);

(statearr_13876[(22)] = inst_13804);

(statearr_13876[(11)] = inst_13790__$1);

(statearr_13876[(12)] = inst_13792__$1);

(statearr_13876[(21)] = inst_13791__$1);

return statearr_13876;
})();
var statearr_13877_13948 = state_13849__$1;
(statearr_13877_13948[(2)] = null);

(statearr_13877_13948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (40))){
var inst_13817 = (state_13849[(23)]);
var inst_13821 = done.call(null,null);
var inst_13822 = cljs.core.async.untap_STAR_.call(null,m,inst_13817);
var state_13849__$1 = (function (){var statearr_13878 = state_13849;
(statearr_13878[(24)] = inst_13821);

return statearr_13878;
})();
var statearr_13879_13949 = state_13849__$1;
(statearr_13879_13949[(2)] = inst_13822);

(statearr_13879_13949[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (33))){
var inst_13808 = (state_13849[(25)]);
var inst_13810 = cljs.core.chunked_seq_QMARK_.call(null,inst_13808);
var state_13849__$1 = state_13849;
if(inst_13810){
var statearr_13880_13950 = state_13849__$1;
(statearr_13880_13950[(1)] = (36));

} else {
var statearr_13881_13951 = state_13849__$1;
(statearr_13881_13951[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (13))){
var inst_13738 = (state_13849[(26)]);
var inst_13741 = cljs.core.async.close_BANG_.call(null,inst_13738);
var state_13849__$1 = state_13849;
var statearr_13882_13952 = state_13849__$1;
(statearr_13882_13952[(2)] = inst_13741);

(statearr_13882_13952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (22))){
var inst_13761 = (state_13849[(8)]);
var inst_13764 = cljs.core.async.close_BANG_.call(null,inst_13761);
var state_13849__$1 = state_13849;
var statearr_13883_13953 = state_13849__$1;
(statearr_13883_13953[(2)] = inst_13764);

(statearr_13883_13953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (36))){
var inst_13808 = (state_13849[(25)]);
var inst_13812 = cljs.core.chunk_first.call(null,inst_13808);
var inst_13813 = cljs.core.chunk_rest.call(null,inst_13808);
var inst_13814 = cljs.core.count.call(null,inst_13812);
var inst_13789 = inst_13813;
var inst_13790 = inst_13812;
var inst_13791 = inst_13814;
var inst_13792 = (0);
var state_13849__$1 = (function (){var statearr_13884 = state_13849;
(statearr_13884[(20)] = inst_13789);

(statearr_13884[(11)] = inst_13790);

(statearr_13884[(12)] = inst_13792);

(statearr_13884[(21)] = inst_13791);

return statearr_13884;
})();
var statearr_13885_13954 = state_13849__$1;
(statearr_13885_13954[(2)] = null);

(statearr_13885_13954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (41))){
var inst_13808 = (state_13849[(25)]);
var inst_13824 = (state_13849[(2)]);
var inst_13825 = cljs.core.next.call(null,inst_13808);
var inst_13789 = inst_13825;
var inst_13790 = null;
var inst_13791 = (0);
var inst_13792 = (0);
var state_13849__$1 = (function (){var statearr_13886 = state_13849;
(statearr_13886[(20)] = inst_13789);

(statearr_13886[(27)] = inst_13824);

(statearr_13886[(11)] = inst_13790);

(statearr_13886[(12)] = inst_13792);

(statearr_13886[(21)] = inst_13791);

return statearr_13886;
})();
var statearr_13887_13955 = state_13849__$1;
(statearr_13887_13955[(2)] = null);

(statearr_13887_13955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (43))){
var state_13849__$1 = state_13849;
var statearr_13888_13956 = state_13849__$1;
(statearr_13888_13956[(2)] = null);

(statearr_13888_13956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (29))){
var inst_13833 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13889_13957 = state_13849__$1;
(statearr_13889_13957[(2)] = inst_13833);

(statearr_13889_13957[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (44))){
var inst_13842 = (state_13849[(2)]);
var state_13849__$1 = (function (){var statearr_13890 = state_13849;
(statearr_13890[(28)] = inst_13842);

return statearr_13890;
})();
var statearr_13891_13958 = state_13849__$1;
(statearr_13891_13958[(2)] = null);

(statearr_13891_13958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (6))){
var inst_13781 = (state_13849[(29)]);
var inst_13780 = cljs.core.deref.call(null,cs);
var inst_13781__$1 = cljs.core.keys.call(null,inst_13780);
var inst_13782 = cljs.core.count.call(null,inst_13781__$1);
var inst_13783 = cljs.core.reset_BANG_.call(null,dctr,inst_13782);
var inst_13788 = cljs.core.seq.call(null,inst_13781__$1);
var inst_13789 = inst_13788;
var inst_13790 = null;
var inst_13791 = (0);
var inst_13792 = (0);
var state_13849__$1 = (function (){var statearr_13892 = state_13849;
(statearr_13892[(29)] = inst_13781__$1);

(statearr_13892[(20)] = inst_13789);

(statearr_13892[(30)] = inst_13783);

(statearr_13892[(11)] = inst_13790);

(statearr_13892[(12)] = inst_13792);

(statearr_13892[(21)] = inst_13791);

return statearr_13892;
})();
var statearr_13893_13959 = state_13849__$1;
(statearr_13893_13959[(2)] = null);

(statearr_13893_13959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (28))){
var inst_13789 = (state_13849[(20)]);
var inst_13808 = (state_13849[(25)]);
var inst_13808__$1 = cljs.core.seq.call(null,inst_13789);
var state_13849__$1 = (function (){var statearr_13894 = state_13849;
(statearr_13894[(25)] = inst_13808__$1);

return statearr_13894;
})();
if(inst_13808__$1){
var statearr_13895_13960 = state_13849__$1;
(statearr_13895_13960[(1)] = (33));

} else {
var statearr_13896_13961 = state_13849__$1;
(statearr_13896_13961[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (25))){
var inst_13792 = (state_13849[(12)]);
var inst_13791 = (state_13849[(21)]);
var inst_13794 = (inst_13792 < inst_13791);
var inst_13795 = inst_13794;
var state_13849__$1 = state_13849;
if(cljs.core.truth_(inst_13795)){
var statearr_13897_13962 = state_13849__$1;
(statearr_13897_13962[(1)] = (27));

} else {
var statearr_13898_13963 = state_13849__$1;
(statearr_13898_13963[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (34))){
var state_13849__$1 = state_13849;
var statearr_13899_13964 = state_13849__$1;
(statearr_13899_13964[(2)] = null);

(statearr_13899_13964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (17))){
var state_13849__$1 = state_13849;
var statearr_13900_13965 = state_13849__$1;
(statearr_13900_13965[(2)] = null);

(statearr_13900_13965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (3))){
var inst_13847 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13849__$1,inst_13847);
} else {
if((state_val_13850 === (12))){
var inst_13776 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13901_13966 = state_13849__$1;
(statearr_13901_13966[(2)] = inst_13776);

(statearr_13901_13966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (2))){
var state_13849__$1 = state_13849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13849__$1,(4),ch);
} else {
if((state_val_13850 === (23))){
var state_13849__$1 = state_13849;
var statearr_13902_13967 = state_13849__$1;
(statearr_13902_13967[(2)] = null);

(statearr_13902_13967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (35))){
var inst_13831 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13903_13968 = state_13849__$1;
(statearr_13903_13968[(2)] = inst_13831);

(statearr_13903_13968[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (19))){
var inst_13748 = (state_13849[(7)]);
var inst_13752 = cljs.core.chunk_first.call(null,inst_13748);
var inst_13753 = cljs.core.chunk_rest.call(null,inst_13748);
var inst_13754 = cljs.core.count.call(null,inst_13752);
var inst_13726 = inst_13753;
var inst_13727 = inst_13752;
var inst_13728 = inst_13754;
var inst_13729 = (0);
var state_13849__$1 = (function (){var statearr_13904 = state_13849;
(statearr_13904[(14)] = inst_13727);

(statearr_13904[(15)] = inst_13729);

(statearr_13904[(16)] = inst_13728);

(statearr_13904[(17)] = inst_13726);

return statearr_13904;
})();
var statearr_13905_13969 = state_13849__$1;
(statearr_13905_13969[(2)] = null);

(statearr_13905_13969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (11))){
var inst_13748 = (state_13849[(7)]);
var inst_13726 = (state_13849[(17)]);
var inst_13748__$1 = cljs.core.seq.call(null,inst_13726);
var state_13849__$1 = (function (){var statearr_13906 = state_13849;
(statearr_13906[(7)] = inst_13748__$1);

return statearr_13906;
})();
if(inst_13748__$1){
var statearr_13907_13970 = state_13849__$1;
(statearr_13907_13970[(1)] = (16));

} else {
var statearr_13908_13971 = state_13849__$1;
(statearr_13908_13971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (9))){
var inst_13778 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13909_13972 = state_13849__$1;
(statearr_13909_13972[(2)] = inst_13778);

(statearr_13909_13972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (5))){
var inst_13724 = cljs.core.deref.call(null,cs);
var inst_13725 = cljs.core.seq.call(null,inst_13724);
var inst_13726 = inst_13725;
var inst_13727 = null;
var inst_13728 = (0);
var inst_13729 = (0);
var state_13849__$1 = (function (){var statearr_13910 = state_13849;
(statearr_13910[(14)] = inst_13727);

(statearr_13910[(15)] = inst_13729);

(statearr_13910[(16)] = inst_13728);

(statearr_13910[(17)] = inst_13726);

return statearr_13910;
})();
var statearr_13911_13973 = state_13849__$1;
(statearr_13911_13973[(2)] = null);

(statearr_13911_13973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (14))){
var state_13849__$1 = state_13849;
var statearr_13912_13974 = state_13849__$1;
(statearr_13912_13974[(2)] = null);

(statearr_13912_13974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (45))){
var inst_13839 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13913_13975 = state_13849__$1;
(statearr_13913_13975[(2)] = inst_13839);

(statearr_13913_13975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (26))){
var inst_13781 = (state_13849[(29)]);
var inst_13835 = (state_13849[(2)]);
var inst_13836 = cljs.core.seq.call(null,inst_13781);
var state_13849__$1 = (function (){var statearr_13914 = state_13849;
(statearr_13914[(31)] = inst_13835);

return statearr_13914;
})();
if(inst_13836){
var statearr_13915_13976 = state_13849__$1;
(statearr_13915_13976[(1)] = (42));

} else {
var statearr_13916_13977 = state_13849__$1;
(statearr_13916_13977[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (16))){
var inst_13748 = (state_13849[(7)]);
var inst_13750 = cljs.core.chunked_seq_QMARK_.call(null,inst_13748);
var state_13849__$1 = state_13849;
if(inst_13750){
var statearr_13917_13978 = state_13849__$1;
(statearr_13917_13978[(1)] = (19));

} else {
var statearr_13918_13979 = state_13849__$1;
(statearr_13918_13979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (38))){
var inst_13828 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13919_13980 = state_13849__$1;
(statearr_13919_13980[(2)] = inst_13828);

(statearr_13919_13980[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (30))){
var state_13849__$1 = state_13849;
var statearr_13920_13981 = state_13849__$1;
(statearr_13920_13981[(2)] = null);

(statearr_13920_13981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (10))){
var inst_13727 = (state_13849[(14)]);
var inst_13729 = (state_13849[(15)]);
var inst_13737 = cljs.core._nth.call(null,inst_13727,inst_13729);
var inst_13738 = cljs.core.nth.call(null,inst_13737,(0),null);
var inst_13739 = cljs.core.nth.call(null,inst_13737,(1),null);
var state_13849__$1 = (function (){var statearr_13921 = state_13849;
(statearr_13921[(26)] = inst_13738);

return statearr_13921;
})();
if(cljs.core.truth_(inst_13739)){
var statearr_13922_13982 = state_13849__$1;
(statearr_13922_13982[(1)] = (13));

} else {
var statearr_13923_13983 = state_13849__$1;
(statearr_13923_13983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (18))){
var inst_13774 = (state_13849[(2)]);
var state_13849__$1 = state_13849;
var statearr_13924_13984 = state_13849__$1;
(statearr_13924_13984[(2)] = inst_13774);

(statearr_13924_13984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (42))){
var state_13849__$1 = state_13849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13849__$1,(45),dchan);
} else {
if((state_val_13850 === (37))){
var inst_13717 = (state_13849[(9)]);
var inst_13817 = (state_13849[(23)]);
var inst_13808 = (state_13849[(25)]);
var inst_13817__$1 = cljs.core.first.call(null,inst_13808);
var inst_13818 = cljs.core.async.put_BANG_.call(null,inst_13817__$1,inst_13717,done);
var state_13849__$1 = (function (){var statearr_13925 = state_13849;
(statearr_13925[(23)] = inst_13817__$1);

return statearr_13925;
})();
if(cljs.core.truth_(inst_13818)){
var statearr_13926_13985 = state_13849__$1;
(statearr_13926_13985[(1)] = (39));

} else {
var statearr_13927_13986 = state_13849__$1;
(statearr_13927_13986[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13850 === (8))){
var inst_13729 = (state_13849[(15)]);
var inst_13728 = (state_13849[(16)]);
var inst_13731 = (inst_13729 < inst_13728);
var inst_13732 = inst_13731;
var state_13849__$1 = state_13849;
if(cljs.core.truth_(inst_13732)){
var statearr_13928_13987 = state_13849__$1;
(statearr_13928_13987[(1)] = (10));

} else {
var statearr_13929_13988 = state_13849__$1;
(statearr_13929_13988[(1)] = (11));

}

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
});})(c__13115__auto___13934,cs,m,dchan,dctr,done))
;
return ((function (switch__13025__auto__,c__13115__auto___13934,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13026__auto__ = null;
var cljs$core$async$mult_$_state_machine__13026__auto____0 = (function (){
var statearr_13930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13930[(0)] = cljs$core$async$mult_$_state_machine__13026__auto__);

(statearr_13930[(1)] = (1));

return statearr_13930;
});
var cljs$core$async$mult_$_state_machine__13026__auto____1 = (function (state_13849){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_13849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e13931){if((e13931 instanceof Object)){
var ex__13029__auto__ = e13931;
var statearr_13932_13989 = state_13849;
(statearr_13932_13989[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13990 = state_13849;
state_13849 = G__13990;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13026__auto__ = function(state_13849){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13026__auto____1.call(this,state_13849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13026__auto____0;
cljs$core$async$mult_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13026__auto____1;
return cljs$core$async$mult_$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___13934,cs,m,dchan,dctr,done))
})();
var state__13117__auto__ = (function (){var statearr_13933 = f__13116__auto__.call(null);
(statearr_13933[(6)] = c__13115__auto___13934);

return statearr_13933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___13934,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13992 = arguments.length;
switch (G__13992) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14004 = arguments.length;
var i__4500__auto___14005 = (0);
while(true){
if((i__4500__auto___14005 < len__4499__auto___14004)){
args__4502__auto__.push((arguments[i__4500__auto___14005]));

var G__14006 = (i__4500__auto___14005 + (1));
i__4500__auto___14005 = G__14006;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13998){
var map__13999 = p__13998;
var map__13999__$1 = ((((!((map__13999 == null)))?(((((map__13999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13999):map__13999);
var opts = map__13999__$1;
var statearr_14001_14007 = state;
(statearr_14001_14007[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__13999,map__13999__$1,opts){
return (function (val){
var statearr_14002_14008 = state;
(statearr_14002_14008[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13999,map__13999__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_14003_14009 = state;
(statearr_14003_14009[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13994){
var G__13995 = cljs.core.first.call(null,seq13994);
var seq13994__$1 = cljs.core.next.call(null,seq13994);
var G__13996 = cljs.core.first.call(null,seq13994__$1);
var seq13994__$2 = cljs.core.next.call(null,seq13994__$1);
var G__13997 = cljs.core.first.call(null,seq13994__$2);
var seq13994__$3 = cljs.core.next.call(null,seq13994__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13995,G__13996,G__13997,seq13994__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14010 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14011){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14011 = meta14011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14012,meta14011__$1){
var self__ = this;
var _14012__$1 = this;
return (new cljs.core.async.t_cljs$core$async14010(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14011__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14012){
var self__ = this;
var _14012__$1 = this;
return self__.meta14011;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14011","meta14011",1953781388,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14010";

cljs.core.async.t_cljs$core$async14010.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14010");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14010.
 */
cljs.core.async.__GT_t_cljs$core$async14010 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14010(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14011){
return (new cljs.core.async.t_cljs$core$async14010(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14011));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14010(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13115__auto___14174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14114){
var state_val_14115 = (state_14114[(1)]);
if((state_val_14115 === (7))){
var inst_14029 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
var statearr_14116_14175 = state_14114__$1;
(statearr_14116_14175[(2)] = inst_14029);

(statearr_14116_14175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (20))){
var inst_14041 = (state_14114[(7)]);
var state_14114__$1 = state_14114;
var statearr_14117_14176 = state_14114__$1;
(statearr_14117_14176[(2)] = inst_14041);

(statearr_14117_14176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (27))){
var state_14114__$1 = state_14114;
var statearr_14118_14177 = state_14114__$1;
(statearr_14118_14177[(2)] = null);

(statearr_14118_14177[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (1))){
var inst_14016 = (state_14114[(8)]);
var inst_14016__$1 = calc_state.call(null);
var inst_14018 = (inst_14016__$1 == null);
var inst_14019 = cljs.core.not.call(null,inst_14018);
var state_14114__$1 = (function (){var statearr_14119 = state_14114;
(statearr_14119[(8)] = inst_14016__$1);

return statearr_14119;
})();
if(inst_14019){
var statearr_14120_14178 = state_14114__$1;
(statearr_14120_14178[(1)] = (2));

} else {
var statearr_14121_14179 = state_14114__$1;
(statearr_14121_14179[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (24))){
var inst_14088 = (state_14114[(9)]);
var inst_14065 = (state_14114[(10)]);
var inst_14074 = (state_14114[(11)]);
var inst_14088__$1 = inst_14065.call(null,inst_14074);
var state_14114__$1 = (function (){var statearr_14122 = state_14114;
(statearr_14122[(9)] = inst_14088__$1);

return statearr_14122;
})();
if(cljs.core.truth_(inst_14088__$1)){
var statearr_14123_14180 = state_14114__$1;
(statearr_14123_14180[(1)] = (29));

} else {
var statearr_14124_14181 = state_14114__$1;
(statearr_14124_14181[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (4))){
var inst_14032 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
if(cljs.core.truth_(inst_14032)){
var statearr_14125_14182 = state_14114__$1;
(statearr_14125_14182[(1)] = (8));

} else {
var statearr_14126_14183 = state_14114__$1;
(statearr_14126_14183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (15))){
var inst_14059 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
if(cljs.core.truth_(inst_14059)){
var statearr_14127_14184 = state_14114__$1;
(statearr_14127_14184[(1)] = (19));

} else {
var statearr_14128_14185 = state_14114__$1;
(statearr_14128_14185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (21))){
var inst_14064 = (state_14114[(12)]);
var inst_14064__$1 = (state_14114[(2)]);
var inst_14065 = cljs.core.get.call(null,inst_14064__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14066 = cljs.core.get.call(null,inst_14064__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14067 = cljs.core.get.call(null,inst_14064__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14114__$1 = (function (){var statearr_14129 = state_14114;
(statearr_14129[(13)] = inst_14066);

(statearr_14129[(10)] = inst_14065);

(statearr_14129[(12)] = inst_14064__$1);

return statearr_14129;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14114__$1,(22),inst_14067);
} else {
if((state_val_14115 === (31))){
var inst_14096 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
if(cljs.core.truth_(inst_14096)){
var statearr_14130_14186 = state_14114__$1;
(statearr_14130_14186[(1)] = (32));

} else {
var statearr_14131_14187 = state_14114__$1;
(statearr_14131_14187[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (32))){
var inst_14073 = (state_14114[(14)]);
var state_14114__$1 = state_14114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14114__$1,(35),out,inst_14073);
} else {
if((state_val_14115 === (33))){
var inst_14064 = (state_14114[(12)]);
var inst_14041 = inst_14064;
var state_14114__$1 = (function (){var statearr_14132 = state_14114;
(statearr_14132[(7)] = inst_14041);

return statearr_14132;
})();
var statearr_14133_14188 = state_14114__$1;
(statearr_14133_14188[(2)] = null);

(statearr_14133_14188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (13))){
var inst_14041 = (state_14114[(7)]);
var inst_14048 = inst_14041.cljs$lang$protocol_mask$partition0$;
var inst_14049 = (inst_14048 & (64));
var inst_14050 = inst_14041.cljs$core$ISeq$;
var inst_14051 = (cljs.core.PROTOCOL_SENTINEL === inst_14050);
var inst_14052 = ((inst_14049) || (inst_14051));
var state_14114__$1 = state_14114;
if(cljs.core.truth_(inst_14052)){
var statearr_14134_14189 = state_14114__$1;
(statearr_14134_14189[(1)] = (16));

} else {
var statearr_14135_14190 = state_14114__$1;
(statearr_14135_14190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (22))){
var inst_14074 = (state_14114[(11)]);
var inst_14073 = (state_14114[(14)]);
var inst_14072 = (state_14114[(2)]);
var inst_14073__$1 = cljs.core.nth.call(null,inst_14072,(0),null);
var inst_14074__$1 = cljs.core.nth.call(null,inst_14072,(1),null);
var inst_14075 = (inst_14073__$1 == null);
var inst_14076 = cljs.core._EQ_.call(null,inst_14074__$1,change);
var inst_14077 = ((inst_14075) || (inst_14076));
var state_14114__$1 = (function (){var statearr_14136 = state_14114;
(statearr_14136[(11)] = inst_14074__$1);

(statearr_14136[(14)] = inst_14073__$1);

return statearr_14136;
})();
if(cljs.core.truth_(inst_14077)){
var statearr_14137_14191 = state_14114__$1;
(statearr_14137_14191[(1)] = (23));

} else {
var statearr_14138_14192 = state_14114__$1;
(statearr_14138_14192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (36))){
var inst_14064 = (state_14114[(12)]);
var inst_14041 = inst_14064;
var state_14114__$1 = (function (){var statearr_14139 = state_14114;
(statearr_14139[(7)] = inst_14041);

return statearr_14139;
})();
var statearr_14140_14193 = state_14114__$1;
(statearr_14140_14193[(2)] = null);

(statearr_14140_14193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (29))){
var inst_14088 = (state_14114[(9)]);
var state_14114__$1 = state_14114;
var statearr_14141_14194 = state_14114__$1;
(statearr_14141_14194[(2)] = inst_14088);

(statearr_14141_14194[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (6))){
var state_14114__$1 = state_14114;
var statearr_14142_14195 = state_14114__$1;
(statearr_14142_14195[(2)] = false);

(statearr_14142_14195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (28))){
var inst_14084 = (state_14114[(2)]);
var inst_14085 = calc_state.call(null);
var inst_14041 = inst_14085;
var state_14114__$1 = (function (){var statearr_14143 = state_14114;
(statearr_14143[(7)] = inst_14041);

(statearr_14143[(15)] = inst_14084);

return statearr_14143;
})();
var statearr_14144_14196 = state_14114__$1;
(statearr_14144_14196[(2)] = null);

(statearr_14144_14196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (25))){
var inst_14110 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
var statearr_14145_14197 = state_14114__$1;
(statearr_14145_14197[(2)] = inst_14110);

(statearr_14145_14197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (34))){
var inst_14108 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
var statearr_14146_14198 = state_14114__$1;
(statearr_14146_14198[(2)] = inst_14108);

(statearr_14146_14198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (17))){
var state_14114__$1 = state_14114;
var statearr_14147_14199 = state_14114__$1;
(statearr_14147_14199[(2)] = false);

(statearr_14147_14199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (3))){
var state_14114__$1 = state_14114;
var statearr_14148_14200 = state_14114__$1;
(statearr_14148_14200[(2)] = false);

(statearr_14148_14200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (12))){
var inst_14112 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14114__$1,inst_14112);
} else {
if((state_val_14115 === (2))){
var inst_14016 = (state_14114[(8)]);
var inst_14021 = inst_14016.cljs$lang$protocol_mask$partition0$;
var inst_14022 = (inst_14021 & (64));
var inst_14023 = inst_14016.cljs$core$ISeq$;
var inst_14024 = (cljs.core.PROTOCOL_SENTINEL === inst_14023);
var inst_14025 = ((inst_14022) || (inst_14024));
var state_14114__$1 = state_14114;
if(cljs.core.truth_(inst_14025)){
var statearr_14149_14201 = state_14114__$1;
(statearr_14149_14201[(1)] = (5));

} else {
var statearr_14150_14202 = state_14114__$1;
(statearr_14150_14202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (23))){
var inst_14073 = (state_14114[(14)]);
var inst_14079 = (inst_14073 == null);
var state_14114__$1 = state_14114;
if(cljs.core.truth_(inst_14079)){
var statearr_14151_14203 = state_14114__$1;
(statearr_14151_14203[(1)] = (26));

} else {
var statearr_14152_14204 = state_14114__$1;
(statearr_14152_14204[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (35))){
var inst_14099 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
if(cljs.core.truth_(inst_14099)){
var statearr_14153_14205 = state_14114__$1;
(statearr_14153_14205[(1)] = (36));

} else {
var statearr_14154_14206 = state_14114__$1;
(statearr_14154_14206[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (19))){
var inst_14041 = (state_14114[(7)]);
var inst_14061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14041);
var state_14114__$1 = state_14114;
var statearr_14155_14207 = state_14114__$1;
(statearr_14155_14207[(2)] = inst_14061);

(statearr_14155_14207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (11))){
var inst_14041 = (state_14114[(7)]);
var inst_14045 = (inst_14041 == null);
var inst_14046 = cljs.core.not.call(null,inst_14045);
var state_14114__$1 = state_14114;
if(inst_14046){
var statearr_14156_14208 = state_14114__$1;
(statearr_14156_14208[(1)] = (13));

} else {
var statearr_14157_14209 = state_14114__$1;
(statearr_14157_14209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (9))){
var inst_14016 = (state_14114[(8)]);
var state_14114__$1 = state_14114;
var statearr_14158_14210 = state_14114__$1;
(statearr_14158_14210[(2)] = inst_14016);

(statearr_14158_14210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (5))){
var state_14114__$1 = state_14114;
var statearr_14159_14211 = state_14114__$1;
(statearr_14159_14211[(2)] = true);

(statearr_14159_14211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (14))){
var state_14114__$1 = state_14114;
var statearr_14160_14212 = state_14114__$1;
(statearr_14160_14212[(2)] = false);

(statearr_14160_14212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (26))){
var inst_14074 = (state_14114[(11)]);
var inst_14081 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14074);
var state_14114__$1 = state_14114;
var statearr_14161_14213 = state_14114__$1;
(statearr_14161_14213[(2)] = inst_14081);

(statearr_14161_14213[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (16))){
var state_14114__$1 = state_14114;
var statearr_14162_14214 = state_14114__$1;
(statearr_14162_14214[(2)] = true);

(statearr_14162_14214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (38))){
var inst_14104 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
var statearr_14163_14215 = state_14114__$1;
(statearr_14163_14215[(2)] = inst_14104);

(statearr_14163_14215[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (30))){
var inst_14066 = (state_14114[(13)]);
var inst_14065 = (state_14114[(10)]);
var inst_14074 = (state_14114[(11)]);
var inst_14091 = cljs.core.empty_QMARK_.call(null,inst_14065);
var inst_14092 = inst_14066.call(null,inst_14074);
var inst_14093 = cljs.core.not.call(null,inst_14092);
var inst_14094 = ((inst_14091) && (inst_14093));
var state_14114__$1 = state_14114;
var statearr_14164_14216 = state_14114__$1;
(statearr_14164_14216[(2)] = inst_14094);

(statearr_14164_14216[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (10))){
var inst_14016 = (state_14114[(8)]);
var inst_14037 = (state_14114[(2)]);
var inst_14038 = cljs.core.get.call(null,inst_14037,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14039 = cljs.core.get.call(null,inst_14037,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14040 = cljs.core.get.call(null,inst_14037,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14041 = inst_14016;
var state_14114__$1 = (function (){var statearr_14165 = state_14114;
(statearr_14165[(16)] = inst_14038);

(statearr_14165[(7)] = inst_14041);

(statearr_14165[(17)] = inst_14040);

(statearr_14165[(18)] = inst_14039);

return statearr_14165;
})();
var statearr_14166_14217 = state_14114__$1;
(statearr_14166_14217[(2)] = null);

(statearr_14166_14217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (18))){
var inst_14056 = (state_14114[(2)]);
var state_14114__$1 = state_14114;
var statearr_14167_14218 = state_14114__$1;
(statearr_14167_14218[(2)] = inst_14056);

(statearr_14167_14218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (37))){
var state_14114__$1 = state_14114;
var statearr_14168_14219 = state_14114__$1;
(statearr_14168_14219[(2)] = null);

(statearr_14168_14219[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14115 === (8))){
var inst_14016 = (state_14114[(8)]);
var inst_14034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14016);
var state_14114__$1 = state_14114;
var statearr_14169_14220 = state_14114__$1;
(statearr_14169_14220[(2)] = inst_14034);

(statearr_14169_14220[(1)] = (10));


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
}
}
}
}
}
}
});})(c__13115__auto___14174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13025__auto__,c__13115__auto___14174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13026__auto__ = null;
var cljs$core$async$mix_$_state_machine__13026__auto____0 = (function (){
var statearr_14170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14170[(0)] = cljs$core$async$mix_$_state_machine__13026__auto__);

(statearr_14170[(1)] = (1));

return statearr_14170;
});
var cljs$core$async$mix_$_state_machine__13026__auto____1 = (function (state_14114){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14171){if((e14171 instanceof Object)){
var ex__13029__auto__ = e14171;
var statearr_14172_14221 = state_14114;
(statearr_14172_14221[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14222 = state_14114;
state_14114 = G__14222;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13026__auto__ = function(state_14114){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13026__auto____1.call(this,state_14114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13026__auto____0;
cljs$core$async$mix_$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13026__auto____1;
return cljs$core$async$mix_$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13117__auto__ = (function (){var statearr_14173 = f__13116__auto__.call(null);
(statearr_14173[(6)] = c__13115__auto___14174);

return statearr_14173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14224 = arguments.length;
switch (G__14224) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14228 = arguments.length;
switch (G__14228) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__14226_SHARP_){
if(cljs.core.truth_(p1__14226_SHARP_.call(null,topic))){
return p1__14226_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14226_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14229 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14230){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14230 = meta14230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14231,meta14230__$1){
var self__ = this;
var _14231__$1 = this;
return (new cljs.core.async.t_cljs$core$async14229(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14230__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14231){
var self__ = this;
var _14231__$1 = this;
return self__.meta14230;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14230","meta14230",1322462745,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14229";

cljs.core.async.t_cljs$core$async14229.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14229");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14229.
 */
cljs.core.async.__GT_t_cljs$core$async14229 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14230){
return (new cljs.core.async.t_cljs$core$async14229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14230));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14229(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13115__auto___14349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14349,mults,ensure_mult,p){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14349,mults,ensure_mult,p){
return (function (state_14303){
var state_val_14304 = (state_14303[(1)]);
if((state_val_14304 === (7))){
var inst_14299 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
var statearr_14305_14350 = state_14303__$1;
(statearr_14305_14350[(2)] = inst_14299);

(statearr_14305_14350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (20))){
var state_14303__$1 = state_14303;
var statearr_14306_14351 = state_14303__$1;
(statearr_14306_14351[(2)] = null);

(statearr_14306_14351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (1))){
var state_14303__$1 = state_14303;
var statearr_14307_14352 = state_14303__$1;
(statearr_14307_14352[(2)] = null);

(statearr_14307_14352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (24))){
var inst_14282 = (state_14303[(7)]);
var inst_14291 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14282);
var state_14303__$1 = state_14303;
var statearr_14308_14353 = state_14303__$1;
(statearr_14308_14353[(2)] = inst_14291);

(statearr_14308_14353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (4))){
var inst_14234 = (state_14303[(8)]);
var inst_14234__$1 = (state_14303[(2)]);
var inst_14235 = (inst_14234__$1 == null);
var state_14303__$1 = (function (){var statearr_14309 = state_14303;
(statearr_14309[(8)] = inst_14234__$1);

return statearr_14309;
})();
if(cljs.core.truth_(inst_14235)){
var statearr_14310_14354 = state_14303__$1;
(statearr_14310_14354[(1)] = (5));

} else {
var statearr_14311_14355 = state_14303__$1;
(statearr_14311_14355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (15))){
var inst_14276 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
var statearr_14312_14356 = state_14303__$1;
(statearr_14312_14356[(2)] = inst_14276);

(statearr_14312_14356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (21))){
var inst_14296 = (state_14303[(2)]);
var state_14303__$1 = (function (){var statearr_14313 = state_14303;
(statearr_14313[(9)] = inst_14296);

return statearr_14313;
})();
var statearr_14314_14357 = state_14303__$1;
(statearr_14314_14357[(2)] = null);

(statearr_14314_14357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (13))){
var inst_14258 = (state_14303[(10)]);
var inst_14260 = cljs.core.chunked_seq_QMARK_.call(null,inst_14258);
var state_14303__$1 = state_14303;
if(inst_14260){
var statearr_14315_14358 = state_14303__$1;
(statearr_14315_14358[(1)] = (16));

} else {
var statearr_14316_14359 = state_14303__$1;
(statearr_14316_14359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (22))){
var inst_14288 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
if(cljs.core.truth_(inst_14288)){
var statearr_14317_14360 = state_14303__$1;
(statearr_14317_14360[(1)] = (23));

} else {
var statearr_14318_14361 = state_14303__$1;
(statearr_14318_14361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (6))){
var inst_14282 = (state_14303[(7)]);
var inst_14284 = (state_14303[(11)]);
var inst_14234 = (state_14303[(8)]);
var inst_14282__$1 = topic_fn.call(null,inst_14234);
var inst_14283 = cljs.core.deref.call(null,mults);
var inst_14284__$1 = cljs.core.get.call(null,inst_14283,inst_14282__$1);
var state_14303__$1 = (function (){var statearr_14319 = state_14303;
(statearr_14319[(7)] = inst_14282__$1);

(statearr_14319[(11)] = inst_14284__$1);

return statearr_14319;
})();
if(cljs.core.truth_(inst_14284__$1)){
var statearr_14320_14362 = state_14303__$1;
(statearr_14320_14362[(1)] = (19));

} else {
var statearr_14321_14363 = state_14303__$1;
(statearr_14321_14363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (25))){
var inst_14293 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
var statearr_14322_14364 = state_14303__$1;
(statearr_14322_14364[(2)] = inst_14293);

(statearr_14322_14364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (17))){
var inst_14258 = (state_14303[(10)]);
var inst_14267 = cljs.core.first.call(null,inst_14258);
var inst_14268 = cljs.core.async.muxch_STAR_.call(null,inst_14267);
var inst_14269 = cljs.core.async.close_BANG_.call(null,inst_14268);
var inst_14270 = cljs.core.next.call(null,inst_14258);
var inst_14244 = inst_14270;
var inst_14245 = null;
var inst_14246 = (0);
var inst_14247 = (0);
var state_14303__$1 = (function (){var statearr_14323 = state_14303;
(statearr_14323[(12)] = inst_14244);

(statearr_14323[(13)] = inst_14245);

(statearr_14323[(14)] = inst_14246);

(statearr_14323[(15)] = inst_14247);

(statearr_14323[(16)] = inst_14269);

return statearr_14323;
})();
var statearr_14324_14365 = state_14303__$1;
(statearr_14324_14365[(2)] = null);

(statearr_14324_14365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (3))){
var inst_14301 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14303__$1,inst_14301);
} else {
if((state_val_14304 === (12))){
var inst_14278 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
var statearr_14325_14366 = state_14303__$1;
(statearr_14325_14366[(2)] = inst_14278);

(statearr_14325_14366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (2))){
var state_14303__$1 = state_14303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14303__$1,(4),ch);
} else {
if((state_val_14304 === (23))){
var state_14303__$1 = state_14303;
var statearr_14326_14367 = state_14303__$1;
(statearr_14326_14367[(2)] = null);

(statearr_14326_14367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (19))){
var inst_14284 = (state_14303[(11)]);
var inst_14234 = (state_14303[(8)]);
var inst_14286 = cljs.core.async.muxch_STAR_.call(null,inst_14284);
var state_14303__$1 = state_14303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14303__$1,(22),inst_14286,inst_14234);
} else {
if((state_val_14304 === (11))){
var inst_14258 = (state_14303[(10)]);
var inst_14244 = (state_14303[(12)]);
var inst_14258__$1 = cljs.core.seq.call(null,inst_14244);
var state_14303__$1 = (function (){var statearr_14327 = state_14303;
(statearr_14327[(10)] = inst_14258__$1);

return statearr_14327;
})();
if(inst_14258__$1){
var statearr_14328_14368 = state_14303__$1;
(statearr_14328_14368[(1)] = (13));

} else {
var statearr_14329_14369 = state_14303__$1;
(statearr_14329_14369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (9))){
var inst_14280 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
var statearr_14330_14370 = state_14303__$1;
(statearr_14330_14370[(2)] = inst_14280);

(statearr_14330_14370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (5))){
var inst_14241 = cljs.core.deref.call(null,mults);
var inst_14242 = cljs.core.vals.call(null,inst_14241);
var inst_14243 = cljs.core.seq.call(null,inst_14242);
var inst_14244 = inst_14243;
var inst_14245 = null;
var inst_14246 = (0);
var inst_14247 = (0);
var state_14303__$1 = (function (){var statearr_14331 = state_14303;
(statearr_14331[(12)] = inst_14244);

(statearr_14331[(13)] = inst_14245);

(statearr_14331[(14)] = inst_14246);

(statearr_14331[(15)] = inst_14247);

return statearr_14331;
})();
var statearr_14332_14371 = state_14303__$1;
(statearr_14332_14371[(2)] = null);

(statearr_14332_14371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (14))){
var state_14303__$1 = state_14303;
var statearr_14336_14372 = state_14303__$1;
(statearr_14336_14372[(2)] = null);

(statearr_14336_14372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (16))){
var inst_14258 = (state_14303[(10)]);
var inst_14262 = cljs.core.chunk_first.call(null,inst_14258);
var inst_14263 = cljs.core.chunk_rest.call(null,inst_14258);
var inst_14264 = cljs.core.count.call(null,inst_14262);
var inst_14244 = inst_14263;
var inst_14245 = inst_14262;
var inst_14246 = inst_14264;
var inst_14247 = (0);
var state_14303__$1 = (function (){var statearr_14337 = state_14303;
(statearr_14337[(12)] = inst_14244);

(statearr_14337[(13)] = inst_14245);

(statearr_14337[(14)] = inst_14246);

(statearr_14337[(15)] = inst_14247);

return statearr_14337;
})();
var statearr_14338_14373 = state_14303__$1;
(statearr_14338_14373[(2)] = null);

(statearr_14338_14373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (10))){
var inst_14244 = (state_14303[(12)]);
var inst_14245 = (state_14303[(13)]);
var inst_14246 = (state_14303[(14)]);
var inst_14247 = (state_14303[(15)]);
var inst_14252 = cljs.core._nth.call(null,inst_14245,inst_14247);
var inst_14253 = cljs.core.async.muxch_STAR_.call(null,inst_14252);
var inst_14254 = cljs.core.async.close_BANG_.call(null,inst_14253);
var inst_14255 = (inst_14247 + (1));
var tmp14333 = inst_14244;
var tmp14334 = inst_14245;
var tmp14335 = inst_14246;
var inst_14244__$1 = tmp14333;
var inst_14245__$1 = tmp14334;
var inst_14246__$1 = tmp14335;
var inst_14247__$1 = inst_14255;
var state_14303__$1 = (function (){var statearr_14339 = state_14303;
(statearr_14339[(12)] = inst_14244__$1);

(statearr_14339[(13)] = inst_14245__$1);

(statearr_14339[(14)] = inst_14246__$1);

(statearr_14339[(15)] = inst_14247__$1);

(statearr_14339[(17)] = inst_14254);

return statearr_14339;
})();
var statearr_14340_14374 = state_14303__$1;
(statearr_14340_14374[(2)] = null);

(statearr_14340_14374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (18))){
var inst_14273 = (state_14303[(2)]);
var state_14303__$1 = state_14303;
var statearr_14341_14375 = state_14303__$1;
(statearr_14341_14375[(2)] = inst_14273);

(statearr_14341_14375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14304 === (8))){
var inst_14246 = (state_14303[(14)]);
var inst_14247 = (state_14303[(15)]);
var inst_14249 = (inst_14247 < inst_14246);
var inst_14250 = inst_14249;
var state_14303__$1 = state_14303;
if(cljs.core.truth_(inst_14250)){
var statearr_14342_14376 = state_14303__$1;
(statearr_14342_14376[(1)] = (10));

} else {
var statearr_14343_14377 = state_14303__$1;
(statearr_14343_14377[(1)] = (11));

}

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
});})(c__13115__auto___14349,mults,ensure_mult,p))
;
return ((function (switch__13025__auto__,c__13115__auto___14349,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_14344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14344[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_14344[(1)] = (1));

return statearr_14344;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14303){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14345){if((e14345 instanceof Object)){
var ex__13029__auto__ = e14345;
var statearr_14346_14378 = state_14303;
(statearr_14346_14378[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14379 = state_14303;
state_14303 = G__14379;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14349,mults,ensure_mult,p))
})();
var state__13117__auto__ = (function (){var statearr_14347 = f__13116__auto__.call(null);
(statearr_14347[(6)] = c__13115__auto___14349);

return statearr_14347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14349,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14381 = arguments.length;
switch (G__14381) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14384 = arguments.length;
switch (G__14384) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14387 = arguments.length;
switch (G__14387) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__13115__auto___14454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14454,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14454,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14426){
var state_val_14427 = (state_14426[(1)]);
if((state_val_14427 === (7))){
var state_14426__$1 = state_14426;
var statearr_14428_14455 = state_14426__$1;
(statearr_14428_14455[(2)] = null);

(statearr_14428_14455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (1))){
var state_14426__$1 = state_14426;
var statearr_14429_14456 = state_14426__$1;
(statearr_14429_14456[(2)] = null);

(statearr_14429_14456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (4))){
var inst_14390 = (state_14426[(7)]);
var inst_14392 = (inst_14390 < cnt);
var state_14426__$1 = state_14426;
if(cljs.core.truth_(inst_14392)){
var statearr_14430_14457 = state_14426__$1;
(statearr_14430_14457[(1)] = (6));

} else {
var statearr_14431_14458 = state_14426__$1;
(statearr_14431_14458[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (15))){
var inst_14422 = (state_14426[(2)]);
var state_14426__$1 = state_14426;
var statearr_14432_14459 = state_14426__$1;
(statearr_14432_14459[(2)] = inst_14422);

(statearr_14432_14459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (13))){
var inst_14415 = cljs.core.async.close_BANG_.call(null,out);
var state_14426__$1 = state_14426;
var statearr_14433_14460 = state_14426__$1;
(statearr_14433_14460[(2)] = inst_14415);

(statearr_14433_14460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (6))){
var state_14426__$1 = state_14426;
var statearr_14434_14461 = state_14426__$1;
(statearr_14434_14461[(2)] = null);

(statearr_14434_14461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (3))){
var inst_14424 = (state_14426[(2)]);
var state_14426__$1 = state_14426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14426__$1,inst_14424);
} else {
if((state_val_14427 === (12))){
var inst_14412 = (state_14426[(8)]);
var inst_14412__$1 = (state_14426[(2)]);
var inst_14413 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14412__$1);
var state_14426__$1 = (function (){var statearr_14435 = state_14426;
(statearr_14435[(8)] = inst_14412__$1);

return statearr_14435;
})();
if(cljs.core.truth_(inst_14413)){
var statearr_14436_14462 = state_14426__$1;
(statearr_14436_14462[(1)] = (13));

} else {
var statearr_14437_14463 = state_14426__$1;
(statearr_14437_14463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (2))){
var inst_14389 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14390 = (0);
var state_14426__$1 = (function (){var statearr_14438 = state_14426;
(statearr_14438[(7)] = inst_14390);

(statearr_14438[(9)] = inst_14389);

return statearr_14438;
})();
var statearr_14439_14464 = state_14426__$1;
(statearr_14439_14464[(2)] = null);

(statearr_14439_14464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (11))){
var inst_14390 = (state_14426[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14426,(10),Object,null,(9));
var inst_14399 = chs__$1.call(null,inst_14390);
var inst_14400 = done.call(null,inst_14390);
var inst_14401 = cljs.core.async.take_BANG_.call(null,inst_14399,inst_14400);
var state_14426__$1 = state_14426;
var statearr_14440_14465 = state_14426__$1;
(statearr_14440_14465[(2)] = inst_14401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (9))){
var inst_14390 = (state_14426[(7)]);
var inst_14403 = (state_14426[(2)]);
var inst_14404 = (inst_14390 + (1));
var inst_14390__$1 = inst_14404;
var state_14426__$1 = (function (){var statearr_14441 = state_14426;
(statearr_14441[(7)] = inst_14390__$1);

(statearr_14441[(10)] = inst_14403);

return statearr_14441;
})();
var statearr_14442_14466 = state_14426__$1;
(statearr_14442_14466[(2)] = null);

(statearr_14442_14466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (5))){
var inst_14410 = (state_14426[(2)]);
var state_14426__$1 = (function (){var statearr_14443 = state_14426;
(statearr_14443[(11)] = inst_14410);

return statearr_14443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14426__$1,(12),dchan);
} else {
if((state_val_14427 === (14))){
var inst_14412 = (state_14426[(8)]);
var inst_14417 = cljs.core.apply.call(null,f,inst_14412);
var state_14426__$1 = state_14426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14426__$1,(16),out,inst_14417);
} else {
if((state_val_14427 === (16))){
var inst_14419 = (state_14426[(2)]);
var state_14426__$1 = (function (){var statearr_14444 = state_14426;
(statearr_14444[(12)] = inst_14419);

return statearr_14444;
})();
var statearr_14445_14467 = state_14426__$1;
(statearr_14445_14467[(2)] = null);

(statearr_14445_14467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (10))){
var inst_14394 = (state_14426[(2)]);
var inst_14395 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14426__$1 = (function (){var statearr_14446 = state_14426;
(statearr_14446[(13)] = inst_14394);

return statearr_14446;
})();
var statearr_14447_14468 = state_14426__$1;
(statearr_14447_14468[(2)] = inst_14395);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14427 === (8))){
var inst_14408 = (state_14426[(2)]);
var state_14426__$1 = state_14426;
var statearr_14448_14469 = state_14426__$1;
(statearr_14448_14469[(2)] = inst_14408);

(statearr_14448_14469[(1)] = (5));


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
});})(c__13115__auto___14454,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13025__auto__,c__13115__auto___14454,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_14449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14449[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_14449[(1)] = (1));

return statearr_14449;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14426){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14450){if((e14450 instanceof Object)){
var ex__13029__auto__ = e14450;
var statearr_14451_14470 = state_14426;
(statearr_14451_14470[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14471 = state_14426;
state_14426 = G__14471;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14454,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13117__auto__ = (function (){var statearr_14452 = f__13116__auto__.call(null);
(statearr_14452[(6)] = c__13115__auto___14454);

return statearr_14452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14454,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14474 = arguments.length;
switch (G__14474) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13115__auto___14528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14528,out){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14528,out){
return (function (state_14506){
var state_val_14507 = (state_14506[(1)]);
if((state_val_14507 === (7))){
var inst_14486 = (state_14506[(7)]);
var inst_14485 = (state_14506[(8)]);
var inst_14485__$1 = (state_14506[(2)]);
var inst_14486__$1 = cljs.core.nth.call(null,inst_14485__$1,(0),null);
var inst_14487 = cljs.core.nth.call(null,inst_14485__$1,(1),null);
var inst_14488 = (inst_14486__$1 == null);
var state_14506__$1 = (function (){var statearr_14508 = state_14506;
(statearr_14508[(9)] = inst_14487);

(statearr_14508[(7)] = inst_14486__$1);

(statearr_14508[(8)] = inst_14485__$1);

return statearr_14508;
})();
if(cljs.core.truth_(inst_14488)){
var statearr_14509_14529 = state_14506__$1;
(statearr_14509_14529[(1)] = (8));

} else {
var statearr_14510_14530 = state_14506__$1;
(statearr_14510_14530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (1))){
var inst_14475 = cljs.core.vec.call(null,chs);
var inst_14476 = inst_14475;
var state_14506__$1 = (function (){var statearr_14511 = state_14506;
(statearr_14511[(10)] = inst_14476);

return statearr_14511;
})();
var statearr_14512_14531 = state_14506__$1;
(statearr_14512_14531[(2)] = null);

(statearr_14512_14531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (4))){
var inst_14476 = (state_14506[(10)]);
var state_14506__$1 = state_14506;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14506__$1,(7),inst_14476);
} else {
if((state_val_14507 === (6))){
var inst_14502 = (state_14506[(2)]);
var state_14506__$1 = state_14506;
var statearr_14513_14532 = state_14506__$1;
(statearr_14513_14532[(2)] = inst_14502);

(statearr_14513_14532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (3))){
var inst_14504 = (state_14506[(2)]);
var state_14506__$1 = state_14506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14506__$1,inst_14504);
} else {
if((state_val_14507 === (2))){
var inst_14476 = (state_14506[(10)]);
var inst_14478 = cljs.core.count.call(null,inst_14476);
var inst_14479 = (inst_14478 > (0));
var state_14506__$1 = state_14506;
if(cljs.core.truth_(inst_14479)){
var statearr_14515_14533 = state_14506__$1;
(statearr_14515_14533[(1)] = (4));

} else {
var statearr_14516_14534 = state_14506__$1;
(statearr_14516_14534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (11))){
var inst_14476 = (state_14506[(10)]);
var inst_14495 = (state_14506[(2)]);
var tmp14514 = inst_14476;
var inst_14476__$1 = tmp14514;
var state_14506__$1 = (function (){var statearr_14517 = state_14506;
(statearr_14517[(10)] = inst_14476__$1);

(statearr_14517[(11)] = inst_14495);

return statearr_14517;
})();
var statearr_14518_14535 = state_14506__$1;
(statearr_14518_14535[(2)] = null);

(statearr_14518_14535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (9))){
var inst_14486 = (state_14506[(7)]);
var state_14506__$1 = state_14506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14506__$1,(11),out,inst_14486);
} else {
if((state_val_14507 === (5))){
var inst_14500 = cljs.core.async.close_BANG_.call(null,out);
var state_14506__$1 = state_14506;
var statearr_14519_14536 = state_14506__$1;
(statearr_14519_14536[(2)] = inst_14500);

(statearr_14519_14536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (10))){
var inst_14498 = (state_14506[(2)]);
var state_14506__$1 = state_14506;
var statearr_14520_14537 = state_14506__$1;
(statearr_14520_14537[(2)] = inst_14498);

(statearr_14520_14537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (8))){
var inst_14487 = (state_14506[(9)]);
var inst_14476 = (state_14506[(10)]);
var inst_14486 = (state_14506[(7)]);
var inst_14485 = (state_14506[(8)]);
var inst_14490 = (function (){var cs = inst_14476;
var vec__14481 = inst_14485;
var v = inst_14486;
var c = inst_14487;
return ((function (cs,vec__14481,v,c,inst_14487,inst_14476,inst_14486,inst_14485,state_val_14507,c__13115__auto___14528,out){
return (function (p1__14472_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14472_SHARP_);
});
;})(cs,vec__14481,v,c,inst_14487,inst_14476,inst_14486,inst_14485,state_val_14507,c__13115__auto___14528,out))
})();
var inst_14491 = cljs.core.filterv.call(null,inst_14490,inst_14476);
var inst_14476__$1 = inst_14491;
var state_14506__$1 = (function (){var statearr_14521 = state_14506;
(statearr_14521[(10)] = inst_14476__$1);

return statearr_14521;
})();
var statearr_14522_14538 = state_14506__$1;
(statearr_14522_14538[(2)] = null);

(statearr_14522_14538[(1)] = (2));


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
});})(c__13115__auto___14528,out))
;
return ((function (switch__13025__auto__,c__13115__auto___14528,out){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_14523 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14523[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_14523[(1)] = (1));

return statearr_14523;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14506){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14524){if((e14524 instanceof Object)){
var ex__13029__auto__ = e14524;
var statearr_14525_14539 = state_14506;
(statearr_14525_14539[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14540 = state_14506;
state_14506 = G__14540;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14528,out))
})();
var state__13117__auto__ = (function (){var statearr_14526 = f__13116__auto__.call(null);
(statearr_14526[(6)] = c__13115__auto___14528);

return statearr_14526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14528,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14542 = arguments.length;
switch (G__14542) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13115__auto___14587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14587,out){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14587,out){
return (function (state_14566){
var state_val_14567 = (state_14566[(1)]);
if((state_val_14567 === (7))){
var inst_14548 = (state_14566[(7)]);
var inst_14548__$1 = (state_14566[(2)]);
var inst_14549 = (inst_14548__$1 == null);
var inst_14550 = cljs.core.not.call(null,inst_14549);
var state_14566__$1 = (function (){var statearr_14568 = state_14566;
(statearr_14568[(7)] = inst_14548__$1);

return statearr_14568;
})();
if(inst_14550){
var statearr_14569_14588 = state_14566__$1;
(statearr_14569_14588[(1)] = (8));

} else {
var statearr_14570_14589 = state_14566__$1;
(statearr_14570_14589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (1))){
var inst_14543 = (0);
var state_14566__$1 = (function (){var statearr_14571 = state_14566;
(statearr_14571[(8)] = inst_14543);

return statearr_14571;
})();
var statearr_14572_14590 = state_14566__$1;
(statearr_14572_14590[(2)] = null);

(statearr_14572_14590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (4))){
var state_14566__$1 = state_14566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14566__$1,(7),ch);
} else {
if((state_val_14567 === (6))){
var inst_14561 = (state_14566[(2)]);
var state_14566__$1 = state_14566;
var statearr_14573_14591 = state_14566__$1;
(statearr_14573_14591[(2)] = inst_14561);

(statearr_14573_14591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (3))){
var inst_14563 = (state_14566[(2)]);
var inst_14564 = cljs.core.async.close_BANG_.call(null,out);
var state_14566__$1 = (function (){var statearr_14574 = state_14566;
(statearr_14574[(9)] = inst_14563);

return statearr_14574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14566__$1,inst_14564);
} else {
if((state_val_14567 === (2))){
var inst_14543 = (state_14566[(8)]);
var inst_14545 = (inst_14543 < n);
var state_14566__$1 = state_14566;
if(cljs.core.truth_(inst_14545)){
var statearr_14575_14592 = state_14566__$1;
(statearr_14575_14592[(1)] = (4));

} else {
var statearr_14576_14593 = state_14566__$1;
(statearr_14576_14593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (11))){
var inst_14543 = (state_14566[(8)]);
var inst_14553 = (state_14566[(2)]);
var inst_14554 = (inst_14543 + (1));
var inst_14543__$1 = inst_14554;
var state_14566__$1 = (function (){var statearr_14577 = state_14566;
(statearr_14577[(8)] = inst_14543__$1);

(statearr_14577[(10)] = inst_14553);

return statearr_14577;
})();
var statearr_14578_14594 = state_14566__$1;
(statearr_14578_14594[(2)] = null);

(statearr_14578_14594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (9))){
var state_14566__$1 = state_14566;
var statearr_14579_14595 = state_14566__$1;
(statearr_14579_14595[(2)] = null);

(statearr_14579_14595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (5))){
var state_14566__$1 = state_14566;
var statearr_14580_14596 = state_14566__$1;
(statearr_14580_14596[(2)] = null);

(statearr_14580_14596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (10))){
var inst_14558 = (state_14566[(2)]);
var state_14566__$1 = state_14566;
var statearr_14581_14597 = state_14566__$1;
(statearr_14581_14597[(2)] = inst_14558);

(statearr_14581_14597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14567 === (8))){
var inst_14548 = (state_14566[(7)]);
var state_14566__$1 = state_14566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14566__$1,(11),out,inst_14548);
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
});})(c__13115__auto___14587,out))
;
return ((function (switch__13025__auto__,c__13115__auto___14587,out){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_14582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14582[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_14582[(1)] = (1));

return statearr_14582;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14566){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object)){
var ex__13029__auto__ = e14583;
var statearr_14584_14598 = state_14566;
(statearr_14584_14598[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14599 = state_14566;
state_14566 = G__14599;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14587,out))
})();
var state__13117__auto__ = (function (){var statearr_14585 = f__13116__auto__.call(null);
(statearr_14585[(6)] = c__13115__auto___14587);

return statearr_14585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14587,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14601 = (function (f,ch,meta14602){
this.f = f;
this.ch = ch;
this.meta14602 = meta14602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14603,meta14602__$1){
var self__ = this;
var _14603__$1 = this;
return (new cljs.core.async.t_cljs$core$async14601(self__.f,self__.ch,meta14602__$1));
});

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14603){
var self__ = this;
var _14603__$1 = this;
return self__.meta14602;
});

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14604 = (function (f,ch,meta14602,_,fn1,meta14605){
this.f = f;
this.ch = ch;
this.meta14602 = meta14602;
this._ = _;
this.fn1 = fn1;
this.meta14605 = meta14605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14606,meta14605__$1){
var self__ = this;
var _14606__$1 = this;
return (new cljs.core.async.t_cljs$core$async14604(self__.f,self__.ch,self__.meta14602,self__._,self__.fn1,meta14605__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14606){
var self__ = this;
var _14606__$1 = this;
return self__.meta14605;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14600_SHARP_){
return f1.call(null,(((p1__14600_SHARP_ == null))?null:self__.f.call(null,p1__14600_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14604.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14602","meta14602",365415701,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14601","cljs.core.async/t_cljs$core$async14601",-1148068983,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14605","meta14605",-2113623426,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14604";

cljs.core.async.t_cljs$core$async14604.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14604");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14604.
 */
cljs.core.async.__GT_t_cljs$core$async14604 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14604(f__$1,ch__$1,meta14602__$1,___$2,fn1__$1,meta14605){
return (new cljs.core.async.t_cljs$core$async14604(f__$1,ch__$1,meta14602__$1,___$2,fn1__$1,meta14605));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14604(self__.f,self__.ch,self__.meta14602,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14602","meta14602",365415701,null)], null);
});

cljs.core.async.t_cljs$core$async14601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14601";

cljs.core.async.t_cljs$core$async14601.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14601");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14601.
 */
cljs.core.async.__GT_t_cljs$core$async14601 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14601(f__$1,ch__$1,meta14602){
return (new cljs.core.async.t_cljs$core$async14601(f__$1,ch__$1,meta14602));
});

}

return (new cljs.core.async.t_cljs$core$async14601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14607 = (function (f,ch,meta14608){
this.f = f;
this.ch = ch;
this.meta14608 = meta14608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14609,meta14608__$1){
var self__ = this;
var _14609__$1 = this;
return (new cljs.core.async.t_cljs$core$async14607(self__.f,self__.ch,meta14608__$1));
});

cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14609){
var self__ = this;
var _14609__$1 = this;
return self__.meta14608;
});

cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14608","meta14608",896095472,null)], null);
});

cljs.core.async.t_cljs$core$async14607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14607";

cljs.core.async.t_cljs$core$async14607.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14607");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14607.
 */
cljs.core.async.__GT_t_cljs$core$async14607 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14607(f__$1,ch__$1,meta14608){
return (new cljs.core.async.t_cljs$core$async14607(f__$1,ch__$1,meta14608));
});

}

return (new cljs.core.async.t_cljs$core$async14607(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14610 = (function (p,ch,meta14611){
this.p = p;
this.ch = ch;
this.meta14611 = meta14611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14612,meta14611__$1){
var self__ = this;
var _14612__$1 = this;
return (new cljs.core.async.t_cljs$core$async14610(self__.p,self__.ch,meta14611__$1));
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14612){
var self__ = this;
var _14612__$1 = this;
return self__.meta14611;
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14611","meta14611",1866533012,null)], null);
});

cljs.core.async.t_cljs$core$async14610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14610";

cljs.core.async.t_cljs$core$async14610.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async14610");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14610.
 */
cljs.core.async.__GT_t_cljs$core$async14610 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14610(p__$1,ch__$1,meta14611){
return (new cljs.core.async.t_cljs$core$async14610(p__$1,ch__$1,meta14611));
});

}

return (new cljs.core.async.t_cljs$core$async14610(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14614 = arguments.length;
switch (G__14614) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13115__auto___14654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14654,out){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14654,out){
return (function (state_14635){
var state_val_14636 = (state_14635[(1)]);
if((state_val_14636 === (7))){
var inst_14631 = (state_14635[(2)]);
var state_14635__$1 = state_14635;
var statearr_14637_14655 = state_14635__$1;
(statearr_14637_14655[(2)] = inst_14631);

(statearr_14637_14655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (1))){
var state_14635__$1 = state_14635;
var statearr_14638_14656 = state_14635__$1;
(statearr_14638_14656[(2)] = null);

(statearr_14638_14656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (4))){
var inst_14617 = (state_14635[(7)]);
var inst_14617__$1 = (state_14635[(2)]);
var inst_14618 = (inst_14617__$1 == null);
var state_14635__$1 = (function (){var statearr_14639 = state_14635;
(statearr_14639[(7)] = inst_14617__$1);

return statearr_14639;
})();
if(cljs.core.truth_(inst_14618)){
var statearr_14640_14657 = state_14635__$1;
(statearr_14640_14657[(1)] = (5));

} else {
var statearr_14641_14658 = state_14635__$1;
(statearr_14641_14658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (6))){
var inst_14617 = (state_14635[(7)]);
var inst_14622 = p.call(null,inst_14617);
var state_14635__$1 = state_14635;
if(cljs.core.truth_(inst_14622)){
var statearr_14642_14659 = state_14635__$1;
(statearr_14642_14659[(1)] = (8));

} else {
var statearr_14643_14660 = state_14635__$1;
(statearr_14643_14660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (3))){
var inst_14633 = (state_14635[(2)]);
var state_14635__$1 = state_14635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14635__$1,inst_14633);
} else {
if((state_val_14636 === (2))){
var state_14635__$1 = state_14635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14635__$1,(4),ch);
} else {
if((state_val_14636 === (11))){
var inst_14625 = (state_14635[(2)]);
var state_14635__$1 = state_14635;
var statearr_14644_14661 = state_14635__$1;
(statearr_14644_14661[(2)] = inst_14625);

(statearr_14644_14661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (9))){
var state_14635__$1 = state_14635;
var statearr_14645_14662 = state_14635__$1;
(statearr_14645_14662[(2)] = null);

(statearr_14645_14662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (5))){
var inst_14620 = cljs.core.async.close_BANG_.call(null,out);
var state_14635__$1 = state_14635;
var statearr_14646_14663 = state_14635__$1;
(statearr_14646_14663[(2)] = inst_14620);

(statearr_14646_14663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (10))){
var inst_14628 = (state_14635[(2)]);
var state_14635__$1 = (function (){var statearr_14647 = state_14635;
(statearr_14647[(8)] = inst_14628);

return statearr_14647;
})();
var statearr_14648_14664 = state_14635__$1;
(statearr_14648_14664[(2)] = null);

(statearr_14648_14664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14636 === (8))){
var inst_14617 = (state_14635[(7)]);
var state_14635__$1 = state_14635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14635__$1,(11),out,inst_14617);
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
});})(c__13115__auto___14654,out))
;
return ((function (switch__13025__auto__,c__13115__auto___14654,out){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_14649 = [null,null,null,null,null,null,null,null,null];
(statearr_14649[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_14649[(1)] = (1));

return statearr_14649;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14635){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14650){if((e14650 instanceof Object)){
var ex__13029__auto__ = e14650;
var statearr_14651_14665 = state_14635;
(statearr_14651_14665[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14666 = state_14635;
state_14635 = G__14666;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14654,out))
})();
var state__13117__auto__ = (function (){var statearr_14652 = f__13116__auto__.call(null);
(statearr_14652[(6)] = c__13115__auto___14654);

return statearr_14652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14654,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14668 = arguments.length;
switch (G__14668) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto__){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto__){
return (function (state_14731){
var state_val_14732 = (state_14731[(1)]);
if((state_val_14732 === (7))){
var inst_14727 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14733_14771 = state_14731__$1;
(statearr_14733_14771[(2)] = inst_14727);

(statearr_14733_14771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (20))){
var inst_14697 = (state_14731[(7)]);
var inst_14708 = (state_14731[(2)]);
var inst_14709 = cljs.core.next.call(null,inst_14697);
var inst_14683 = inst_14709;
var inst_14684 = null;
var inst_14685 = (0);
var inst_14686 = (0);
var state_14731__$1 = (function (){var statearr_14734 = state_14731;
(statearr_14734[(8)] = inst_14683);

(statearr_14734[(9)] = inst_14684);

(statearr_14734[(10)] = inst_14685);

(statearr_14734[(11)] = inst_14686);

(statearr_14734[(12)] = inst_14708);

return statearr_14734;
})();
var statearr_14735_14772 = state_14731__$1;
(statearr_14735_14772[(2)] = null);

(statearr_14735_14772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (1))){
var state_14731__$1 = state_14731;
var statearr_14736_14773 = state_14731__$1;
(statearr_14736_14773[(2)] = null);

(statearr_14736_14773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (4))){
var inst_14672 = (state_14731[(13)]);
var inst_14672__$1 = (state_14731[(2)]);
var inst_14673 = (inst_14672__$1 == null);
var state_14731__$1 = (function (){var statearr_14737 = state_14731;
(statearr_14737[(13)] = inst_14672__$1);

return statearr_14737;
})();
if(cljs.core.truth_(inst_14673)){
var statearr_14738_14774 = state_14731__$1;
(statearr_14738_14774[(1)] = (5));

} else {
var statearr_14739_14775 = state_14731__$1;
(statearr_14739_14775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (15))){
var state_14731__$1 = state_14731;
var statearr_14743_14776 = state_14731__$1;
(statearr_14743_14776[(2)] = null);

(statearr_14743_14776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (21))){
var state_14731__$1 = state_14731;
var statearr_14744_14777 = state_14731__$1;
(statearr_14744_14777[(2)] = null);

(statearr_14744_14777[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (13))){
var inst_14683 = (state_14731[(8)]);
var inst_14684 = (state_14731[(9)]);
var inst_14685 = (state_14731[(10)]);
var inst_14686 = (state_14731[(11)]);
var inst_14693 = (state_14731[(2)]);
var inst_14694 = (inst_14686 + (1));
var tmp14740 = inst_14683;
var tmp14741 = inst_14684;
var tmp14742 = inst_14685;
var inst_14683__$1 = tmp14740;
var inst_14684__$1 = tmp14741;
var inst_14685__$1 = tmp14742;
var inst_14686__$1 = inst_14694;
var state_14731__$1 = (function (){var statearr_14745 = state_14731;
(statearr_14745[(8)] = inst_14683__$1);

(statearr_14745[(9)] = inst_14684__$1);

(statearr_14745[(14)] = inst_14693);

(statearr_14745[(10)] = inst_14685__$1);

(statearr_14745[(11)] = inst_14686__$1);

return statearr_14745;
})();
var statearr_14746_14778 = state_14731__$1;
(statearr_14746_14778[(2)] = null);

(statearr_14746_14778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (22))){
var state_14731__$1 = state_14731;
var statearr_14747_14779 = state_14731__$1;
(statearr_14747_14779[(2)] = null);

(statearr_14747_14779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (6))){
var inst_14672 = (state_14731[(13)]);
var inst_14681 = f.call(null,inst_14672);
var inst_14682 = cljs.core.seq.call(null,inst_14681);
var inst_14683 = inst_14682;
var inst_14684 = null;
var inst_14685 = (0);
var inst_14686 = (0);
var state_14731__$1 = (function (){var statearr_14748 = state_14731;
(statearr_14748[(8)] = inst_14683);

(statearr_14748[(9)] = inst_14684);

(statearr_14748[(10)] = inst_14685);

(statearr_14748[(11)] = inst_14686);

return statearr_14748;
})();
var statearr_14749_14780 = state_14731__$1;
(statearr_14749_14780[(2)] = null);

(statearr_14749_14780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (17))){
var inst_14697 = (state_14731[(7)]);
var inst_14701 = cljs.core.chunk_first.call(null,inst_14697);
var inst_14702 = cljs.core.chunk_rest.call(null,inst_14697);
var inst_14703 = cljs.core.count.call(null,inst_14701);
var inst_14683 = inst_14702;
var inst_14684 = inst_14701;
var inst_14685 = inst_14703;
var inst_14686 = (0);
var state_14731__$1 = (function (){var statearr_14750 = state_14731;
(statearr_14750[(8)] = inst_14683);

(statearr_14750[(9)] = inst_14684);

(statearr_14750[(10)] = inst_14685);

(statearr_14750[(11)] = inst_14686);

return statearr_14750;
})();
var statearr_14751_14781 = state_14731__$1;
(statearr_14751_14781[(2)] = null);

(statearr_14751_14781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (3))){
var inst_14729 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14731__$1,inst_14729);
} else {
if((state_val_14732 === (12))){
var inst_14717 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14752_14782 = state_14731__$1;
(statearr_14752_14782[(2)] = inst_14717);

(statearr_14752_14782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (2))){
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14731__$1,(4),in$);
} else {
if((state_val_14732 === (23))){
var inst_14725 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14753_14783 = state_14731__$1;
(statearr_14753_14783[(2)] = inst_14725);

(statearr_14753_14783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (19))){
var inst_14712 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14754_14784 = state_14731__$1;
(statearr_14754_14784[(2)] = inst_14712);

(statearr_14754_14784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (11))){
var inst_14697 = (state_14731[(7)]);
var inst_14683 = (state_14731[(8)]);
var inst_14697__$1 = cljs.core.seq.call(null,inst_14683);
var state_14731__$1 = (function (){var statearr_14755 = state_14731;
(statearr_14755[(7)] = inst_14697__$1);

return statearr_14755;
})();
if(inst_14697__$1){
var statearr_14756_14785 = state_14731__$1;
(statearr_14756_14785[(1)] = (14));

} else {
var statearr_14757_14786 = state_14731__$1;
(statearr_14757_14786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (9))){
var inst_14719 = (state_14731[(2)]);
var inst_14720 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14731__$1 = (function (){var statearr_14758 = state_14731;
(statearr_14758[(15)] = inst_14719);

return statearr_14758;
})();
if(cljs.core.truth_(inst_14720)){
var statearr_14759_14787 = state_14731__$1;
(statearr_14759_14787[(1)] = (21));

} else {
var statearr_14760_14788 = state_14731__$1;
(statearr_14760_14788[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (5))){
var inst_14675 = cljs.core.async.close_BANG_.call(null,out);
var state_14731__$1 = state_14731;
var statearr_14761_14789 = state_14731__$1;
(statearr_14761_14789[(2)] = inst_14675);

(statearr_14761_14789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (14))){
var inst_14697 = (state_14731[(7)]);
var inst_14699 = cljs.core.chunked_seq_QMARK_.call(null,inst_14697);
var state_14731__$1 = state_14731;
if(inst_14699){
var statearr_14762_14790 = state_14731__$1;
(statearr_14762_14790[(1)] = (17));

} else {
var statearr_14763_14791 = state_14731__$1;
(statearr_14763_14791[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (16))){
var inst_14715 = (state_14731[(2)]);
var state_14731__$1 = state_14731;
var statearr_14764_14792 = state_14731__$1;
(statearr_14764_14792[(2)] = inst_14715);

(statearr_14764_14792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14732 === (10))){
var inst_14684 = (state_14731[(9)]);
var inst_14686 = (state_14731[(11)]);
var inst_14691 = cljs.core._nth.call(null,inst_14684,inst_14686);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14731__$1,(13),out,inst_14691);
} else {
if((state_val_14732 === (18))){
var inst_14697 = (state_14731[(7)]);
var inst_14706 = cljs.core.first.call(null,inst_14697);
var state_14731__$1 = state_14731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14731__$1,(20),out,inst_14706);
} else {
if((state_val_14732 === (8))){
var inst_14685 = (state_14731[(10)]);
var inst_14686 = (state_14731[(11)]);
var inst_14688 = (inst_14686 < inst_14685);
var inst_14689 = inst_14688;
var state_14731__$1 = state_14731;
if(cljs.core.truth_(inst_14689)){
var statearr_14765_14793 = state_14731__$1;
(statearr_14765_14793[(1)] = (10));

} else {
var statearr_14766_14794 = state_14731__$1;
(statearr_14766_14794[(1)] = (11));

}

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
});})(c__13115__auto__))
;
return ((function (switch__13025__auto__,c__13115__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13026__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13026__auto____0 = (function (){
var statearr_14767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14767[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13026__auto__);

(statearr_14767[(1)] = (1));

return statearr_14767;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13026__auto____1 = (function (state_14731){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14768){if((e14768 instanceof Object)){
var ex__13029__auto__ = e14768;
var statearr_14769_14795 = state_14731;
(statearr_14769_14795[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14796 = state_14731;
state_14731 = G__14796;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13026__auto__ = function(state_14731){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13026__auto____1.call(this,state_14731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13026__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13026__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto__))
})();
var state__13117__auto__ = (function (){var statearr_14770 = f__13116__auto__.call(null);
(statearr_14770[(6)] = c__13115__auto__);

return statearr_14770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto__))
);

return c__13115__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14798 = arguments.length;
switch (G__14798) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14801 = arguments.length;
switch (G__14801) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14804 = arguments.length;
switch (G__14804) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13115__auto___14851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14851,out){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14851,out){
return (function (state_14828){
var state_val_14829 = (state_14828[(1)]);
if((state_val_14829 === (7))){
var inst_14823 = (state_14828[(2)]);
var state_14828__$1 = state_14828;
var statearr_14830_14852 = state_14828__$1;
(statearr_14830_14852[(2)] = inst_14823);

(statearr_14830_14852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14829 === (1))){
var inst_14805 = null;
var state_14828__$1 = (function (){var statearr_14831 = state_14828;
(statearr_14831[(7)] = inst_14805);

return statearr_14831;
})();
var statearr_14832_14853 = state_14828__$1;
(statearr_14832_14853[(2)] = null);

(statearr_14832_14853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14829 === (4))){
var inst_14808 = (state_14828[(8)]);
var inst_14808__$1 = (state_14828[(2)]);
var inst_14809 = (inst_14808__$1 == null);
var inst_14810 = cljs.core.not.call(null,inst_14809);
var state_14828__$1 = (function (){var statearr_14833 = state_14828;
(statearr_14833[(8)] = inst_14808__$1);

return statearr_14833;
})();
if(inst_14810){
var statearr_14834_14854 = state_14828__$1;
(statearr_14834_14854[(1)] = (5));

} else {
var statearr_14835_14855 = state_14828__$1;
(statearr_14835_14855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14829 === (6))){
var state_14828__$1 = state_14828;
var statearr_14836_14856 = state_14828__$1;
(statearr_14836_14856[(2)] = null);

(statearr_14836_14856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14829 === (3))){
var inst_14825 = (state_14828[(2)]);
var inst_14826 = cljs.core.async.close_BANG_.call(null,out);
var state_14828__$1 = (function (){var statearr_14837 = state_14828;
(statearr_14837[(9)] = inst_14825);

return statearr_14837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14828__$1,inst_14826);
} else {
if((state_val_14829 === (2))){
var state_14828__$1 = state_14828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14828__$1,(4),ch);
} else {
if((state_val_14829 === (11))){
var inst_14808 = (state_14828[(8)]);
var inst_14817 = (state_14828[(2)]);
var inst_14805 = inst_14808;
var state_14828__$1 = (function (){var statearr_14838 = state_14828;
(statearr_14838[(7)] = inst_14805);

(statearr_14838[(10)] = inst_14817);

return statearr_14838;
})();
var statearr_14839_14857 = state_14828__$1;
(statearr_14839_14857[(2)] = null);

(statearr_14839_14857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14829 === (9))){
var inst_14808 = (state_14828[(8)]);
var state_14828__$1 = state_14828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14828__$1,(11),out,inst_14808);
} else {
if((state_val_14829 === (5))){
var inst_14805 = (state_14828[(7)]);
var inst_14808 = (state_14828[(8)]);
var inst_14812 = cljs.core._EQ_.call(null,inst_14808,inst_14805);
var state_14828__$1 = state_14828;
if(inst_14812){
var statearr_14841_14858 = state_14828__$1;
(statearr_14841_14858[(1)] = (8));

} else {
var statearr_14842_14859 = state_14828__$1;
(statearr_14842_14859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14829 === (10))){
var inst_14820 = (state_14828[(2)]);
var state_14828__$1 = state_14828;
var statearr_14843_14860 = state_14828__$1;
(statearr_14843_14860[(2)] = inst_14820);

(statearr_14843_14860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14829 === (8))){
var inst_14805 = (state_14828[(7)]);
var tmp14840 = inst_14805;
var inst_14805__$1 = tmp14840;
var state_14828__$1 = (function (){var statearr_14844 = state_14828;
(statearr_14844[(7)] = inst_14805__$1);

return statearr_14844;
})();
var statearr_14845_14861 = state_14828__$1;
(statearr_14845_14861[(2)] = null);

(statearr_14845_14861[(1)] = (2));


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
});})(c__13115__auto___14851,out))
;
return ((function (switch__13025__auto__,c__13115__auto___14851,out){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_14846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14846[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_14846[(1)] = (1));

return statearr_14846;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14828){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14847){if((e14847 instanceof Object)){
var ex__13029__auto__ = e14847;
var statearr_14848_14862 = state_14828;
(statearr_14848_14862[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14863 = state_14828;
state_14828 = G__14863;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14851,out))
})();
var state__13117__auto__ = (function (){var statearr_14849 = f__13116__auto__.call(null);
(statearr_14849[(6)] = c__13115__auto___14851);

return statearr_14849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14851,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14865 = arguments.length;
switch (G__14865) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13115__auto___14931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___14931,out){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___14931,out){
return (function (state_14903){
var state_val_14904 = (state_14903[(1)]);
if((state_val_14904 === (7))){
var inst_14899 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
var statearr_14905_14932 = state_14903__$1;
(statearr_14905_14932[(2)] = inst_14899);

(statearr_14905_14932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (1))){
var inst_14866 = (new Array(n));
var inst_14867 = inst_14866;
var inst_14868 = (0);
var state_14903__$1 = (function (){var statearr_14906 = state_14903;
(statearr_14906[(7)] = inst_14867);

(statearr_14906[(8)] = inst_14868);

return statearr_14906;
})();
var statearr_14907_14933 = state_14903__$1;
(statearr_14907_14933[(2)] = null);

(statearr_14907_14933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (4))){
var inst_14871 = (state_14903[(9)]);
var inst_14871__$1 = (state_14903[(2)]);
var inst_14872 = (inst_14871__$1 == null);
var inst_14873 = cljs.core.not.call(null,inst_14872);
var state_14903__$1 = (function (){var statearr_14908 = state_14903;
(statearr_14908[(9)] = inst_14871__$1);

return statearr_14908;
})();
if(inst_14873){
var statearr_14909_14934 = state_14903__$1;
(statearr_14909_14934[(1)] = (5));

} else {
var statearr_14910_14935 = state_14903__$1;
(statearr_14910_14935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (15))){
var inst_14893 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
var statearr_14911_14936 = state_14903__$1;
(statearr_14911_14936[(2)] = inst_14893);

(statearr_14911_14936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (13))){
var state_14903__$1 = state_14903;
var statearr_14912_14937 = state_14903__$1;
(statearr_14912_14937[(2)] = null);

(statearr_14912_14937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (6))){
var inst_14868 = (state_14903[(8)]);
var inst_14889 = (inst_14868 > (0));
var state_14903__$1 = state_14903;
if(cljs.core.truth_(inst_14889)){
var statearr_14913_14938 = state_14903__$1;
(statearr_14913_14938[(1)] = (12));

} else {
var statearr_14914_14939 = state_14903__$1;
(statearr_14914_14939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (3))){
var inst_14901 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14903__$1,inst_14901);
} else {
if((state_val_14904 === (12))){
var inst_14867 = (state_14903[(7)]);
var inst_14891 = cljs.core.vec.call(null,inst_14867);
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14903__$1,(15),out,inst_14891);
} else {
if((state_val_14904 === (2))){
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14903__$1,(4),ch);
} else {
if((state_val_14904 === (11))){
var inst_14883 = (state_14903[(2)]);
var inst_14884 = (new Array(n));
var inst_14867 = inst_14884;
var inst_14868 = (0);
var state_14903__$1 = (function (){var statearr_14915 = state_14903;
(statearr_14915[(10)] = inst_14883);

(statearr_14915[(7)] = inst_14867);

(statearr_14915[(8)] = inst_14868);

return statearr_14915;
})();
var statearr_14916_14940 = state_14903__$1;
(statearr_14916_14940[(2)] = null);

(statearr_14916_14940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (9))){
var inst_14867 = (state_14903[(7)]);
var inst_14881 = cljs.core.vec.call(null,inst_14867);
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14903__$1,(11),out,inst_14881);
} else {
if((state_val_14904 === (5))){
var inst_14867 = (state_14903[(7)]);
var inst_14868 = (state_14903[(8)]);
var inst_14871 = (state_14903[(9)]);
var inst_14876 = (state_14903[(11)]);
var inst_14875 = (inst_14867[inst_14868] = inst_14871);
var inst_14876__$1 = (inst_14868 + (1));
var inst_14877 = (inst_14876__$1 < n);
var state_14903__$1 = (function (){var statearr_14917 = state_14903;
(statearr_14917[(12)] = inst_14875);

(statearr_14917[(11)] = inst_14876__$1);

return statearr_14917;
})();
if(cljs.core.truth_(inst_14877)){
var statearr_14918_14941 = state_14903__$1;
(statearr_14918_14941[(1)] = (8));

} else {
var statearr_14919_14942 = state_14903__$1;
(statearr_14919_14942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (14))){
var inst_14896 = (state_14903[(2)]);
var inst_14897 = cljs.core.async.close_BANG_.call(null,out);
var state_14903__$1 = (function (){var statearr_14921 = state_14903;
(statearr_14921[(13)] = inst_14896);

return statearr_14921;
})();
var statearr_14922_14943 = state_14903__$1;
(statearr_14922_14943[(2)] = inst_14897);

(statearr_14922_14943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (10))){
var inst_14887 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
var statearr_14923_14944 = state_14903__$1;
(statearr_14923_14944[(2)] = inst_14887);

(statearr_14923_14944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (8))){
var inst_14867 = (state_14903[(7)]);
var inst_14876 = (state_14903[(11)]);
var tmp14920 = inst_14867;
var inst_14867__$1 = tmp14920;
var inst_14868 = inst_14876;
var state_14903__$1 = (function (){var statearr_14924 = state_14903;
(statearr_14924[(7)] = inst_14867__$1);

(statearr_14924[(8)] = inst_14868);

return statearr_14924;
})();
var statearr_14925_14945 = state_14903__$1;
(statearr_14925_14945[(2)] = null);

(statearr_14925_14945[(1)] = (2));


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
});})(c__13115__auto___14931,out))
;
return ((function (switch__13025__auto__,c__13115__auto___14931,out){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_14926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14926[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_14926[(1)] = (1));

return statearr_14926;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14903){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e14927){if((e14927 instanceof Object)){
var ex__13029__auto__ = e14927;
var statearr_14928_14946 = state_14903;
(statearr_14928_14946[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14947 = state_14903;
state_14903 = G__14947;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___14931,out))
})();
var state__13117__auto__ = (function (){var statearr_14929 = f__13116__auto__.call(null);
(statearr_14929[(6)] = c__13115__auto___14931);

return statearr_14929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___14931,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14949 = arguments.length;
switch (G__14949) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13115__auto___15019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13115__auto___15019,out){
return (function (){
var f__13116__auto__ = (function (){var switch__13025__auto__ = ((function (c__13115__auto___15019,out){
return (function (state_14991){
var state_val_14992 = (state_14991[(1)]);
if((state_val_14992 === (7))){
var inst_14987 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_14993_15020 = state_14991__$1;
(statearr_14993_15020[(2)] = inst_14987);

(statearr_14993_15020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (1))){
var inst_14950 = [];
var inst_14951 = inst_14950;
var inst_14952 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14991__$1 = (function (){var statearr_14994 = state_14991;
(statearr_14994[(7)] = inst_14951);

(statearr_14994[(8)] = inst_14952);

return statearr_14994;
})();
var statearr_14995_15021 = state_14991__$1;
(statearr_14995_15021[(2)] = null);

(statearr_14995_15021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (4))){
var inst_14955 = (state_14991[(9)]);
var inst_14955__$1 = (state_14991[(2)]);
var inst_14956 = (inst_14955__$1 == null);
var inst_14957 = cljs.core.not.call(null,inst_14956);
var state_14991__$1 = (function (){var statearr_14996 = state_14991;
(statearr_14996[(9)] = inst_14955__$1);

return statearr_14996;
})();
if(inst_14957){
var statearr_14997_15022 = state_14991__$1;
(statearr_14997_15022[(1)] = (5));

} else {
var statearr_14998_15023 = state_14991__$1;
(statearr_14998_15023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (15))){
var inst_14981 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_14999_15024 = state_14991__$1;
(statearr_14999_15024[(2)] = inst_14981);

(statearr_14999_15024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (13))){
var state_14991__$1 = state_14991;
var statearr_15000_15025 = state_14991__$1;
(statearr_15000_15025[(2)] = null);

(statearr_15000_15025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (6))){
var inst_14951 = (state_14991[(7)]);
var inst_14976 = inst_14951.length;
var inst_14977 = (inst_14976 > (0));
var state_14991__$1 = state_14991;
if(cljs.core.truth_(inst_14977)){
var statearr_15001_15026 = state_14991__$1;
(statearr_15001_15026[(1)] = (12));

} else {
var statearr_15002_15027 = state_14991__$1;
(statearr_15002_15027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (3))){
var inst_14989 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14991__$1,inst_14989);
} else {
if((state_val_14992 === (12))){
var inst_14951 = (state_14991[(7)]);
var inst_14979 = cljs.core.vec.call(null,inst_14951);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14991__$1,(15),out,inst_14979);
} else {
if((state_val_14992 === (2))){
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14991__$1,(4),ch);
} else {
if((state_val_14992 === (11))){
var inst_14955 = (state_14991[(9)]);
var inst_14959 = (state_14991[(10)]);
var inst_14969 = (state_14991[(2)]);
var inst_14970 = [];
var inst_14971 = inst_14970.push(inst_14955);
var inst_14951 = inst_14970;
var inst_14952 = inst_14959;
var state_14991__$1 = (function (){var statearr_15003 = state_14991;
(statearr_15003[(7)] = inst_14951);

(statearr_15003[(11)] = inst_14969);

(statearr_15003[(12)] = inst_14971);

(statearr_15003[(8)] = inst_14952);

return statearr_15003;
})();
var statearr_15004_15028 = state_14991__$1;
(statearr_15004_15028[(2)] = null);

(statearr_15004_15028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (9))){
var inst_14951 = (state_14991[(7)]);
var inst_14967 = cljs.core.vec.call(null,inst_14951);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14991__$1,(11),out,inst_14967);
} else {
if((state_val_14992 === (5))){
var inst_14955 = (state_14991[(9)]);
var inst_14952 = (state_14991[(8)]);
var inst_14959 = (state_14991[(10)]);
var inst_14959__$1 = f.call(null,inst_14955);
var inst_14960 = cljs.core._EQ_.call(null,inst_14959__$1,inst_14952);
var inst_14961 = cljs.core.keyword_identical_QMARK_.call(null,inst_14952,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14962 = ((inst_14960) || (inst_14961));
var state_14991__$1 = (function (){var statearr_15005 = state_14991;
(statearr_15005[(10)] = inst_14959__$1);

return statearr_15005;
})();
if(cljs.core.truth_(inst_14962)){
var statearr_15006_15029 = state_14991__$1;
(statearr_15006_15029[(1)] = (8));

} else {
var statearr_15007_15030 = state_14991__$1;
(statearr_15007_15030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (14))){
var inst_14984 = (state_14991[(2)]);
var inst_14985 = cljs.core.async.close_BANG_.call(null,out);
var state_14991__$1 = (function (){var statearr_15009 = state_14991;
(statearr_15009[(13)] = inst_14984);

return statearr_15009;
})();
var statearr_15010_15031 = state_14991__$1;
(statearr_15010_15031[(2)] = inst_14985);

(statearr_15010_15031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (10))){
var inst_14974 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_15011_15032 = state_14991__$1;
(statearr_15011_15032[(2)] = inst_14974);

(statearr_15011_15032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14992 === (8))){
var inst_14951 = (state_14991[(7)]);
var inst_14955 = (state_14991[(9)]);
var inst_14959 = (state_14991[(10)]);
var inst_14964 = inst_14951.push(inst_14955);
var tmp15008 = inst_14951;
var inst_14951__$1 = tmp15008;
var inst_14952 = inst_14959;
var state_14991__$1 = (function (){var statearr_15012 = state_14991;
(statearr_15012[(7)] = inst_14951__$1);

(statearr_15012[(14)] = inst_14964);

(statearr_15012[(8)] = inst_14952);

return statearr_15012;
})();
var statearr_15013_15033 = state_14991__$1;
(statearr_15013_15033[(2)] = null);

(statearr_15013_15033[(1)] = (2));


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
});})(c__13115__auto___15019,out))
;
return ((function (switch__13025__auto__,c__13115__auto___15019,out){
return (function() {
var cljs$core$async$state_machine__13026__auto__ = null;
var cljs$core$async$state_machine__13026__auto____0 = (function (){
var statearr_15014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15014[(0)] = cljs$core$async$state_machine__13026__auto__);

(statearr_15014[(1)] = (1));

return statearr_15014;
});
var cljs$core$async$state_machine__13026__auto____1 = (function (state_14991){
while(true){
var ret_value__13027__auto__ = (function (){try{while(true){
var result__13028__auto__ = switch__13025__auto__.call(null,state_14991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13028__auto__;
}
break;
}
}catch (e15015){if((e15015 instanceof Object)){
var ex__13029__auto__ = e15015;
var statearr_15016_15034 = state_14991;
(statearr_15016_15034[(5)] = ex__13029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15035 = state_14991;
state_14991 = G__15035;
continue;
} else {
return ret_value__13027__auto__;
}
break;
}
});
cljs$core$async$state_machine__13026__auto__ = function(state_14991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13026__auto____1.call(this,state_14991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13026__auto____0;
cljs$core$async$state_machine__13026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13026__auto____1;
return cljs$core$async$state_machine__13026__auto__;
})()
;})(switch__13025__auto__,c__13115__auto___15019,out))
})();
var state__13117__auto__ = (function (){var statearr_15017 = f__13116__auto__.call(null);
(statearr_15017[(6)] = c__13115__auto___15019);

return statearr_15017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13117__auto__);
});})(c__13115__auto___15019,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
