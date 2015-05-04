// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t33302 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33302 = (function (f,fn_handler,meta33303){
this.f = f;
this.fn_handler = fn_handler;
this.meta33303 = meta33303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33302.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t33302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t33302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33304){
var self__ = this;
var _33304__$1 = this;
return self__.meta33303;
});

cljs.core.async.t33302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33304,meta33303__$1){
var self__ = this;
var _33304__$1 = this;
return (new cljs.core.async.t33302(self__.f,self__.fn_handler,meta33303__$1));
});

cljs.core.async.t33302.cljs$lang$type = true;

cljs.core.async.t33302.cljs$lang$ctorStr = "cljs.core.async/t33302";

cljs.core.async.t33302.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t33302");
});

cljs.core.async.__GT_t33302 = (function cljs$core$async$fn_handler_$___GT_t33302(f__$1,fn_handler__$1,meta33303){
return (new cljs.core.async.t33302(f__$1,fn_handler__$1,meta33303));
});

}

return (new cljs.core.async.t33302(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__33306 = buff;
if(G__33306){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__33306.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__33306.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33306);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33306);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__33308 = arguments.length;
switch (G__33308) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__33311 = arguments.length;
switch (G__33311) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33313 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33313);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33313,ret){
return (function (){
return fn1.call(null,val_33313);
});})(val_33313,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__33315 = arguments.length;
switch (G__33315) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
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
var n__18967__auto___33317 = n;
var x_33318 = (0);
while(true){
if((x_33318 < n__18967__auto___33317)){
(a[x_33318] = (0));

var G__33319 = (x_33318 + (1));
x_33318 = G__33319;
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

var G__33320 = (i + (1));
i = G__33320;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t33324 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33324 = (function (flag,alt_flag,meta33325){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33325 = meta33325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33324.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t33324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t33324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33326){
var self__ = this;
var _33326__$1 = this;
return self__.meta33325;
});})(flag))
;

cljs.core.async.t33324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33326,meta33325__$1){
var self__ = this;
var _33326__$1 = this;
return (new cljs.core.async.t33324(self__.flag,self__.alt_flag,meta33325__$1));
});})(flag))
;

cljs.core.async.t33324.cljs$lang$type = true;

cljs.core.async.t33324.cljs$lang$ctorStr = "cljs.core.async/t33324";

cljs.core.async.t33324.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t33324");
});})(flag))
;

cljs.core.async.__GT_t33324 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t33324(flag__$1,alt_flag__$1,meta33325){
return (new cljs.core.async.t33324(flag__$1,alt_flag__$1,meta33325));
});})(flag))
;

}

return (new cljs.core.async.t33324(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t33330 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33330 = (function (cb,flag,alt_handler,meta33331){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33331 = meta33331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33330.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t33330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t33330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33332){
var self__ = this;
var _33332__$1 = this;
return self__.meta33331;
});

cljs.core.async.t33330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33332,meta33331__$1){
var self__ = this;
var _33332__$1 = this;
return (new cljs.core.async.t33330(self__.cb,self__.flag,self__.alt_handler,meta33331__$1));
});

cljs.core.async.t33330.cljs$lang$type = true;

cljs.core.async.t33330.cljs$lang$ctorStr = "cljs.core.async/t33330";

cljs.core.async.t33330.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t33330");
});

cljs.core.async.__GT_t33330 = (function cljs$core$async$alt_handler_$___GT_t33330(cb__$1,flag__$1,alt_handler__$1,meta33331){
return (new cljs.core.async.t33330(cb__$1,flag__$1,alt_handler__$1,meta33331));
});

}

return (new cljs.core.async.t33330(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33333_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33333_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33334_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33334_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18082__auto__ = wport;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33335 = (i + (1));
i = G__33335;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18082__auto__ = ret;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18070__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18070__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18070__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19122__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19122__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33338){
var map__33339 = p__33338;
var map__33339__$1 = ((cljs.core.seq_QMARK_.call(null,map__33339))?cljs.core.apply.call(null,cljs.core.hash_map,map__33339):map__33339);
var opts = map__33339__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33336){
var G__33337 = cljs.core.first.call(null,seq33336);
var seq33336__$1 = cljs.core.next.call(null,seq33336);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33337,seq33336__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__33341 = arguments.length;
switch (G__33341) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20705__auto___33390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___33390){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___33390){
return (function (state_33365){
var state_val_33366 = (state_33365[(1)]);
if((state_val_33366 === (7))){
var inst_33361 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33367_33391 = state_33365__$1;
(statearr_33367_33391[(2)] = inst_33361);

(statearr_33367_33391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (1))){
var state_33365__$1 = state_33365;
var statearr_33368_33392 = state_33365__$1;
(statearr_33368_33392[(2)] = null);

(statearr_33368_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (4))){
var inst_33344 = (state_33365[(7)]);
var inst_33344__$1 = (state_33365[(2)]);
var inst_33345 = (inst_33344__$1 == null);
var state_33365__$1 = (function (){var statearr_33369 = state_33365;
(statearr_33369[(7)] = inst_33344__$1);

return statearr_33369;
})();
if(cljs.core.truth_(inst_33345)){
var statearr_33370_33393 = state_33365__$1;
(statearr_33370_33393[(1)] = (5));

} else {
var statearr_33371_33394 = state_33365__$1;
(statearr_33371_33394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (13))){
var state_33365__$1 = state_33365;
var statearr_33372_33395 = state_33365__$1;
(statearr_33372_33395[(2)] = null);

(statearr_33372_33395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (6))){
var inst_33344 = (state_33365[(7)]);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33365__$1,(11),to,inst_33344);
} else {
if((state_val_33366 === (3))){
var inst_33363 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33365__$1,inst_33363);
} else {
if((state_val_33366 === (12))){
var state_33365__$1 = state_33365;
var statearr_33373_33396 = state_33365__$1;
(statearr_33373_33396[(2)] = null);

(statearr_33373_33396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (2))){
var state_33365__$1 = state_33365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33365__$1,(4),from);
} else {
if((state_val_33366 === (11))){
var inst_33354 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
if(cljs.core.truth_(inst_33354)){
var statearr_33374_33397 = state_33365__$1;
(statearr_33374_33397[(1)] = (12));

} else {
var statearr_33375_33398 = state_33365__$1;
(statearr_33375_33398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (9))){
var state_33365__$1 = state_33365;
var statearr_33376_33399 = state_33365__$1;
(statearr_33376_33399[(2)] = null);

(statearr_33376_33399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (5))){
var state_33365__$1 = state_33365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33377_33400 = state_33365__$1;
(statearr_33377_33400[(1)] = (8));

} else {
var statearr_33378_33401 = state_33365__$1;
(statearr_33378_33401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (14))){
var inst_33359 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33379_33402 = state_33365__$1;
(statearr_33379_33402[(2)] = inst_33359);

(statearr_33379_33402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (10))){
var inst_33351 = (state_33365[(2)]);
var state_33365__$1 = state_33365;
var statearr_33380_33403 = state_33365__$1;
(statearr_33380_33403[(2)] = inst_33351);

(statearr_33380_33403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33366 === (8))){
var inst_33348 = cljs.core.async.close_BANG_.call(null,to);
var state_33365__$1 = state_33365;
var statearr_33381_33404 = state_33365__$1;
(statearr_33381_33404[(2)] = inst_33348);

(statearr_33381_33404[(1)] = (10));


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
});})(c__20705__auto___33390))
;
return ((function (switch__20684__auto__,c__20705__auto___33390){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_33385 = [null,null,null,null,null,null,null,null];
(statearr_33385[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_33385[(1)] = (1));

return statearr_33385;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_33365){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33386){if((e33386 instanceof Object)){
var ex__20688__auto__ = e33386;
var statearr_33387_33405 = state_33365;
(statearr_33387_33405[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33406 = state_33365;
state_33365 = G__33406;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_33365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_33365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___33390))
})();
var state__20707__auto__ = (function (){var statearr_33388 = f__20706__auto__.call(null);
(statearr_33388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___33390);

return statearr_33388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___33390))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33590){
var vec__33591 = p__33590;
var v = cljs.core.nth.call(null,vec__33591,(0),null);
var p = cljs.core.nth.call(null,vec__33591,(1),null);
var job = vec__33591;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20705__auto___33773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___33773,res,vec__33591,v,p,job,jobs,results){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___33773,res,vec__33591,v,p,job,jobs,results){
return (function (state_33596){
var state_val_33597 = (state_33596[(1)]);
if((state_val_33597 === (2))){
var inst_33593 = (state_33596[(2)]);
var inst_33594 = cljs.core.async.close_BANG_.call(null,res);
var state_33596__$1 = (function (){var statearr_33598 = state_33596;
(statearr_33598[(7)] = inst_33593);

return statearr_33598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33596__$1,inst_33594);
} else {
if((state_val_33597 === (1))){
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33596__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20705__auto___33773,res,vec__33591,v,p,job,jobs,results))
;
return ((function (switch__20684__auto__,c__20705__auto___33773,res,vec__33591,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0 = (function (){
var statearr_33602 = [null,null,null,null,null,null,null,null];
(statearr_33602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__);

(statearr_33602[(1)] = (1));

return statearr_33602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1 = (function (state_33596){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33603){if((e33603 instanceof Object)){
var ex__20688__auto__ = e33603;
var statearr_33604_33774 = state_33596;
(statearr_33604_33774[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33775 = state_33596;
state_33596 = G__33775;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = function(state_33596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1.call(this,state_33596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___33773,res,vec__33591,v,p,job,jobs,results))
})();
var state__20707__auto__ = (function (){var statearr_33605 = f__20706__auto__.call(null);
(statearr_33605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___33773);

return statearr_33605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___33773,res,vec__33591,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33606){
var vec__33607 = p__33606;
var v = cljs.core.nth.call(null,vec__33607,(0),null);
var p = cljs.core.nth.call(null,vec__33607,(1),null);
var job = vec__33607;
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
var n__18967__auto___33776 = n;
var __33777 = (0);
while(true){
if((__33777 < n__18967__auto___33776)){
var G__33608_33778 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33608_33778) {
case "async":
var c__20705__auto___33780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33777,c__20705__auto___33780,G__33608_33778,n__18967__auto___33776,jobs,results,process,async){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (__33777,c__20705__auto___33780,G__33608_33778,n__18967__auto___33776,jobs,results,process,async){
return (function (state_33621){
var state_val_33622 = (state_33621[(1)]);
if((state_val_33622 === (7))){
var inst_33617 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
var statearr_33623_33781 = state_33621__$1;
(statearr_33623_33781[(2)] = inst_33617);

(statearr_33623_33781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (6))){
var state_33621__$1 = state_33621;
var statearr_33624_33782 = state_33621__$1;
(statearr_33624_33782[(2)] = null);

(statearr_33624_33782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (5))){
var state_33621__$1 = state_33621;
var statearr_33625_33783 = state_33621__$1;
(statearr_33625_33783[(2)] = null);

(statearr_33625_33783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (4))){
var inst_33611 = (state_33621[(2)]);
var inst_33612 = async.call(null,inst_33611);
var state_33621__$1 = state_33621;
if(cljs.core.truth_(inst_33612)){
var statearr_33626_33784 = state_33621__$1;
(statearr_33626_33784[(1)] = (5));

} else {
var statearr_33627_33785 = state_33621__$1;
(statearr_33627_33785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33622 === (3))){
var inst_33619 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33621__$1,inst_33619);
} else {
if((state_val_33622 === (2))){
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33621__$1,(4),jobs);
} else {
if((state_val_33622 === (1))){
var state_33621__$1 = state_33621;
var statearr_33628_33786 = state_33621__$1;
(statearr_33628_33786[(2)] = null);

(statearr_33628_33786[(1)] = (2));


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
});})(__33777,c__20705__auto___33780,G__33608_33778,n__18967__auto___33776,jobs,results,process,async))
;
return ((function (__33777,switch__20684__auto__,c__20705__auto___33780,G__33608_33778,n__18967__auto___33776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0 = (function (){
var statearr_33632 = [null,null,null,null,null,null,null];
(statearr_33632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__);

(statearr_33632[(1)] = (1));

return statearr_33632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1 = (function (state_33621){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33633){if((e33633 instanceof Object)){
var ex__20688__auto__ = e33633;
var statearr_33634_33787 = state_33621;
(statearr_33634_33787[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33788 = state_33621;
state_33621 = G__33788;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = function(state_33621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1.call(this,state_33621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__;
})()
;})(__33777,switch__20684__auto__,c__20705__auto___33780,G__33608_33778,n__18967__auto___33776,jobs,results,process,async))
})();
var state__20707__auto__ = (function (){var statearr_33635 = f__20706__auto__.call(null);
(statearr_33635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___33780);

return statearr_33635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(__33777,c__20705__auto___33780,G__33608_33778,n__18967__auto___33776,jobs,results,process,async))
);


break;
case "compute":
var c__20705__auto___33789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33777,c__20705__auto___33789,G__33608_33778,n__18967__auto___33776,jobs,results,process,async){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (__33777,c__20705__auto___33789,G__33608_33778,n__18967__auto___33776,jobs,results,process,async){
return (function (state_33648){
var state_val_33649 = (state_33648[(1)]);
if((state_val_33649 === (7))){
var inst_33644 = (state_33648[(2)]);
var state_33648__$1 = state_33648;
var statearr_33650_33790 = state_33648__$1;
(statearr_33650_33790[(2)] = inst_33644);

(statearr_33650_33790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (6))){
var state_33648__$1 = state_33648;
var statearr_33651_33791 = state_33648__$1;
(statearr_33651_33791[(2)] = null);

(statearr_33651_33791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (5))){
var state_33648__$1 = state_33648;
var statearr_33652_33792 = state_33648__$1;
(statearr_33652_33792[(2)] = null);

(statearr_33652_33792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (4))){
var inst_33638 = (state_33648[(2)]);
var inst_33639 = process.call(null,inst_33638);
var state_33648__$1 = state_33648;
if(cljs.core.truth_(inst_33639)){
var statearr_33653_33793 = state_33648__$1;
(statearr_33653_33793[(1)] = (5));

} else {
var statearr_33654_33794 = state_33648__$1;
(statearr_33654_33794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33649 === (3))){
var inst_33646 = (state_33648[(2)]);
var state_33648__$1 = state_33648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33648__$1,inst_33646);
} else {
if((state_val_33649 === (2))){
var state_33648__$1 = state_33648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33648__$1,(4),jobs);
} else {
if((state_val_33649 === (1))){
var state_33648__$1 = state_33648;
var statearr_33655_33795 = state_33648__$1;
(statearr_33655_33795[(2)] = null);

(statearr_33655_33795[(1)] = (2));


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
});})(__33777,c__20705__auto___33789,G__33608_33778,n__18967__auto___33776,jobs,results,process,async))
;
return ((function (__33777,switch__20684__auto__,c__20705__auto___33789,G__33608_33778,n__18967__auto___33776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0 = (function (){
var statearr_33659 = [null,null,null,null,null,null,null];
(statearr_33659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__);

(statearr_33659[(1)] = (1));

return statearr_33659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1 = (function (state_33648){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33660){if((e33660 instanceof Object)){
var ex__20688__auto__ = e33660;
var statearr_33661_33796 = state_33648;
(statearr_33661_33796[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33797 = state_33648;
state_33648 = G__33797;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = function(state_33648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1.call(this,state_33648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__;
})()
;})(__33777,switch__20684__auto__,c__20705__auto___33789,G__33608_33778,n__18967__auto___33776,jobs,results,process,async))
})();
var state__20707__auto__ = (function (){var statearr_33662 = f__20706__auto__.call(null);
(statearr_33662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___33789);

return statearr_33662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(__33777,c__20705__auto___33789,G__33608_33778,n__18967__auto___33776,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33798 = (__33777 + (1));
__33777 = G__33798;
continue;
} else {
}
break;
}

var c__20705__auto___33799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___33799,jobs,results,process,async){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___33799,jobs,results,process,async){
return (function (state_33684){
var state_val_33685 = (state_33684[(1)]);
if((state_val_33685 === (9))){
var inst_33677 = (state_33684[(2)]);
var state_33684__$1 = (function (){var statearr_33686 = state_33684;
(statearr_33686[(7)] = inst_33677);

return statearr_33686;
})();
var statearr_33687_33800 = state_33684__$1;
(statearr_33687_33800[(2)] = null);

(statearr_33687_33800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (8))){
var inst_33670 = (state_33684[(8)]);
var inst_33675 = (state_33684[(2)]);
var state_33684__$1 = (function (){var statearr_33688 = state_33684;
(statearr_33688[(9)] = inst_33675);

return statearr_33688;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33684__$1,(9),results,inst_33670);
} else {
if((state_val_33685 === (7))){
var inst_33680 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33689_33801 = state_33684__$1;
(statearr_33689_33801[(2)] = inst_33680);

(statearr_33689_33801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (6))){
var inst_33665 = (state_33684[(10)]);
var inst_33670 = (state_33684[(8)]);
var inst_33670__$1 = cljs.core.async.chan.call(null,(1));
var inst_33671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33672 = [inst_33665,inst_33670__$1];
var inst_33673 = (new cljs.core.PersistentVector(null,2,(5),inst_33671,inst_33672,null));
var state_33684__$1 = (function (){var statearr_33690 = state_33684;
(statearr_33690[(8)] = inst_33670__$1);

return statearr_33690;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33684__$1,(8),jobs,inst_33673);
} else {
if((state_val_33685 === (5))){
var inst_33668 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33684__$1 = state_33684;
var statearr_33691_33802 = state_33684__$1;
(statearr_33691_33802[(2)] = inst_33668);

(statearr_33691_33802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (4))){
var inst_33665 = (state_33684[(10)]);
var inst_33665__$1 = (state_33684[(2)]);
var inst_33666 = (inst_33665__$1 == null);
var state_33684__$1 = (function (){var statearr_33692 = state_33684;
(statearr_33692[(10)] = inst_33665__$1);

return statearr_33692;
})();
if(cljs.core.truth_(inst_33666)){
var statearr_33693_33803 = state_33684__$1;
(statearr_33693_33803[(1)] = (5));

} else {
var statearr_33694_33804 = state_33684__$1;
(statearr_33694_33804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (3))){
var inst_33682 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33684__$1,inst_33682);
} else {
if((state_val_33685 === (2))){
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33684__$1,(4),from);
} else {
if((state_val_33685 === (1))){
var state_33684__$1 = state_33684;
var statearr_33695_33805 = state_33684__$1;
(statearr_33695_33805[(2)] = null);

(statearr_33695_33805[(1)] = (2));


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
});})(c__20705__auto___33799,jobs,results,process,async))
;
return ((function (switch__20684__auto__,c__20705__auto___33799,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0 = (function (){
var statearr_33699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__);

(statearr_33699[(1)] = (1));

return statearr_33699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1 = (function (state_33684){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33700){if((e33700 instanceof Object)){
var ex__20688__auto__ = e33700;
var statearr_33701_33806 = state_33684;
(statearr_33701_33806[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33807 = state_33684;
state_33684 = G__33807;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = function(state_33684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1.call(this,state_33684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___33799,jobs,results,process,async))
})();
var state__20707__auto__ = (function (){var statearr_33702 = f__20706__auto__.call(null);
(statearr_33702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___33799);

return statearr_33702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___33799,jobs,results,process,async))
);


var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__,jobs,results,process,async){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__,jobs,results,process,async){
return (function (state_33740){
var state_val_33741 = (state_33740[(1)]);
if((state_val_33741 === (7))){
var inst_33736 = (state_33740[(2)]);
var state_33740__$1 = state_33740;
var statearr_33742_33808 = state_33740__$1;
(statearr_33742_33808[(2)] = inst_33736);

(statearr_33742_33808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (20))){
var state_33740__$1 = state_33740;
var statearr_33743_33809 = state_33740__$1;
(statearr_33743_33809[(2)] = null);

(statearr_33743_33809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (1))){
var state_33740__$1 = state_33740;
var statearr_33744_33810 = state_33740__$1;
(statearr_33744_33810[(2)] = null);

(statearr_33744_33810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (4))){
var inst_33705 = (state_33740[(7)]);
var inst_33705__$1 = (state_33740[(2)]);
var inst_33706 = (inst_33705__$1 == null);
var state_33740__$1 = (function (){var statearr_33745 = state_33740;
(statearr_33745[(7)] = inst_33705__$1);

return statearr_33745;
})();
if(cljs.core.truth_(inst_33706)){
var statearr_33746_33811 = state_33740__$1;
(statearr_33746_33811[(1)] = (5));

} else {
var statearr_33747_33812 = state_33740__$1;
(statearr_33747_33812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (15))){
var inst_33718 = (state_33740[(8)]);
var state_33740__$1 = state_33740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33740__$1,(18),to,inst_33718);
} else {
if((state_val_33741 === (21))){
var inst_33731 = (state_33740[(2)]);
var state_33740__$1 = state_33740;
var statearr_33748_33813 = state_33740__$1;
(statearr_33748_33813[(2)] = inst_33731);

(statearr_33748_33813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (13))){
var inst_33733 = (state_33740[(2)]);
var state_33740__$1 = (function (){var statearr_33749 = state_33740;
(statearr_33749[(9)] = inst_33733);

return statearr_33749;
})();
var statearr_33750_33814 = state_33740__$1;
(statearr_33750_33814[(2)] = null);

(statearr_33750_33814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (6))){
var inst_33705 = (state_33740[(7)]);
var state_33740__$1 = state_33740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33740__$1,(11),inst_33705);
} else {
if((state_val_33741 === (17))){
var inst_33726 = (state_33740[(2)]);
var state_33740__$1 = state_33740;
if(cljs.core.truth_(inst_33726)){
var statearr_33751_33815 = state_33740__$1;
(statearr_33751_33815[(1)] = (19));

} else {
var statearr_33752_33816 = state_33740__$1;
(statearr_33752_33816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (3))){
var inst_33738 = (state_33740[(2)]);
var state_33740__$1 = state_33740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33740__$1,inst_33738);
} else {
if((state_val_33741 === (12))){
var inst_33715 = (state_33740[(10)]);
var state_33740__$1 = state_33740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33740__$1,(14),inst_33715);
} else {
if((state_val_33741 === (2))){
var state_33740__$1 = state_33740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33740__$1,(4),results);
} else {
if((state_val_33741 === (19))){
var state_33740__$1 = state_33740;
var statearr_33753_33817 = state_33740__$1;
(statearr_33753_33817[(2)] = null);

(statearr_33753_33817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (11))){
var inst_33715 = (state_33740[(2)]);
var state_33740__$1 = (function (){var statearr_33754 = state_33740;
(statearr_33754[(10)] = inst_33715);

return statearr_33754;
})();
var statearr_33755_33818 = state_33740__$1;
(statearr_33755_33818[(2)] = null);

(statearr_33755_33818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (9))){
var state_33740__$1 = state_33740;
var statearr_33756_33819 = state_33740__$1;
(statearr_33756_33819[(2)] = null);

(statearr_33756_33819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (5))){
var state_33740__$1 = state_33740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33757_33820 = state_33740__$1;
(statearr_33757_33820[(1)] = (8));

} else {
var statearr_33758_33821 = state_33740__$1;
(statearr_33758_33821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (14))){
var inst_33720 = (state_33740[(11)]);
var inst_33718 = (state_33740[(8)]);
var inst_33718__$1 = (state_33740[(2)]);
var inst_33719 = (inst_33718__$1 == null);
var inst_33720__$1 = cljs.core.not.call(null,inst_33719);
var state_33740__$1 = (function (){var statearr_33759 = state_33740;
(statearr_33759[(11)] = inst_33720__$1);

(statearr_33759[(8)] = inst_33718__$1);

return statearr_33759;
})();
if(inst_33720__$1){
var statearr_33760_33822 = state_33740__$1;
(statearr_33760_33822[(1)] = (15));

} else {
var statearr_33761_33823 = state_33740__$1;
(statearr_33761_33823[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (16))){
var inst_33720 = (state_33740[(11)]);
var state_33740__$1 = state_33740;
var statearr_33762_33824 = state_33740__$1;
(statearr_33762_33824[(2)] = inst_33720);

(statearr_33762_33824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (10))){
var inst_33712 = (state_33740[(2)]);
var state_33740__$1 = state_33740;
var statearr_33763_33825 = state_33740__$1;
(statearr_33763_33825[(2)] = inst_33712);

(statearr_33763_33825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (18))){
var inst_33723 = (state_33740[(2)]);
var state_33740__$1 = state_33740;
var statearr_33764_33826 = state_33740__$1;
(statearr_33764_33826[(2)] = inst_33723);

(statearr_33764_33826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33741 === (8))){
var inst_33709 = cljs.core.async.close_BANG_.call(null,to);
var state_33740__$1 = state_33740;
var statearr_33765_33827 = state_33740__$1;
(statearr_33765_33827[(2)] = inst_33709);

(statearr_33765_33827[(1)] = (10));


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
});})(c__20705__auto__,jobs,results,process,async))
;
return ((function (switch__20684__auto__,c__20705__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0 = (function (){
var statearr_33769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__);

(statearr_33769[(1)] = (1));

return statearr_33769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1 = (function (state_33740){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33770){if((e33770 instanceof Object)){
var ex__20688__auto__ = e33770;
var statearr_33771_33828 = state_33740;
(statearr_33771_33828[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33829 = state_33740;
state_33740 = G__33829;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__ = function(state_33740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1.call(this,state_33740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__,jobs,results,process,async))
})();
var state__20707__auto__ = (function (){var statearr_33772 = f__20706__auto__.call(null);
(statearr_33772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_33772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__,jobs,results,process,async))
);

return c__20705__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__33831 = arguments.length;
switch (G__33831) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__33834 = arguments.length;
switch (G__33834) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__33837 = arguments.length;
switch (G__33837) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20705__auto___33889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___33889,tc,fc){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___33889,tc,fc){
return (function (state_33863){
var state_val_33864 = (state_33863[(1)]);
if((state_val_33864 === (7))){
var inst_33859 = (state_33863[(2)]);
var state_33863__$1 = state_33863;
var statearr_33865_33890 = state_33863__$1;
(statearr_33865_33890[(2)] = inst_33859);

(statearr_33865_33890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (1))){
var state_33863__$1 = state_33863;
var statearr_33866_33891 = state_33863__$1;
(statearr_33866_33891[(2)] = null);

(statearr_33866_33891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (4))){
var inst_33840 = (state_33863[(7)]);
var inst_33840__$1 = (state_33863[(2)]);
var inst_33841 = (inst_33840__$1 == null);
var state_33863__$1 = (function (){var statearr_33867 = state_33863;
(statearr_33867[(7)] = inst_33840__$1);

return statearr_33867;
})();
if(cljs.core.truth_(inst_33841)){
var statearr_33868_33892 = state_33863__$1;
(statearr_33868_33892[(1)] = (5));

} else {
var statearr_33869_33893 = state_33863__$1;
(statearr_33869_33893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (13))){
var state_33863__$1 = state_33863;
var statearr_33870_33894 = state_33863__$1;
(statearr_33870_33894[(2)] = null);

(statearr_33870_33894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (6))){
var inst_33840 = (state_33863[(7)]);
var inst_33846 = p.call(null,inst_33840);
var state_33863__$1 = state_33863;
if(cljs.core.truth_(inst_33846)){
var statearr_33871_33895 = state_33863__$1;
(statearr_33871_33895[(1)] = (9));

} else {
var statearr_33872_33896 = state_33863__$1;
(statearr_33872_33896[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (3))){
var inst_33861 = (state_33863[(2)]);
var state_33863__$1 = state_33863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33863__$1,inst_33861);
} else {
if((state_val_33864 === (12))){
var state_33863__$1 = state_33863;
var statearr_33873_33897 = state_33863__$1;
(statearr_33873_33897[(2)] = null);

(statearr_33873_33897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (2))){
var state_33863__$1 = state_33863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33863__$1,(4),ch);
} else {
if((state_val_33864 === (11))){
var inst_33840 = (state_33863[(7)]);
var inst_33850 = (state_33863[(2)]);
var state_33863__$1 = state_33863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33863__$1,(8),inst_33850,inst_33840);
} else {
if((state_val_33864 === (9))){
var state_33863__$1 = state_33863;
var statearr_33874_33898 = state_33863__$1;
(statearr_33874_33898[(2)] = tc);

(statearr_33874_33898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (5))){
var inst_33843 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33844 = cljs.core.async.close_BANG_.call(null,fc);
var state_33863__$1 = (function (){var statearr_33875 = state_33863;
(statearr_33875[(8)] = inst_33843);

return statearr_33875;
})();
var statearr_33876_33899 = state_33863__$1;
(statearr_33876_33899[(2)] = inst_33844);

(statearr_33876_33899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (14))){
var inst_33857 = (state_33863[(2)]);
var state_33863__$1 = state_33863;
var statearr_33877_33900 = state_33863__$1;
(statearr_33877_33900[(2)] = inst_33857);

(statearr_33877_33900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (10))){
var state_33863__$1 = state_33863;
var statearr_33878_33901 = state_33863__$1;
(statearr_33878_33901[(2)] = fc);

(statearr_33878_33901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33864 === (8))){
var inst_33852 = (state_33863[(2)]);
var state_33863__$1 = state_33863;
if(cljs.core.truth_(inst_33852)){
var statearr_33879_33902 = state_33863__$1;
(statearr_33879_33902[(1)] = (12));

} else {
var statearr_33880_33903 = state_33863__$1;
(statearr_33880_33903[(1)] = (13));

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
});})(c__20705__auto___33889,tc,fc))
;
return ((function (switch__20684__auto__,c__20705__auto___33889,tc,fc){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_33884 = [null,null,null,null,null,null,null,null,null];
(statearr_33884[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_33884[(1)] = (1));

return statearr_33884;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_33863){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33885){if((e33885 instanceof Object)){
var ex__20688__auto__ = e33885;
var statearr_33886_33904 = state_33863;
(statearr_33886_33904[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33905 = state_33863;
state_33863 = G__33905;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_33863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_33863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___33889,tc,fc))
})();
var state__20707__auto__ = (function (){var statearr_33887 = f__20706__auto__.call(null);
(statearr_33887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___33889);

return statearr_33887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___33889,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__){
return (function (state_33952){
var state_val_33953 = (state_33952[(1)]);
if((state_val_33953 === (7))){
var inst_33948 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33954_33970 = state_33952__$1;
(statearr_33954_33970[(2)] = inst_33948);

(statearr_33954_33970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (6))){
var inst_33938 = (state_33952[(7)]);
var inst_33941 = (state_33952[(8)]);
var inst_33945 = f.call(null,inst_33938,inst_33941);
var inst_33938__$1 = inst_33945;
var state_33952__$1 = (function (){var statearr_33955 = state_33952;
(statearr_33955[(7)] = inst_33938__$1);

return statearr_33955;
})();
var statearr_33956_33971 = state_33952__$1;
(statearr_33956_33971[(2)] = null);

(statearr_33956_33971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (5))){
var inst_33938 = (state_33952[(7)]);
var state_33952__$1 = state_33952;
var statearr_33957_33972 = state_33952__$1;
(statearr_33957_33972[(2)] = inst_33938);

(statearr_33957_33972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (4))){
var inst_33941 = (state_33952[(8)]);
var inst_33941__$1 = (state_33952[(2)]);
var inst_33942 = (inst_33941__$1 == null);
var state_33952__$1 = (function (){var statearr_33958 = state_33952;
(statearr_33958[(8)] = inst_33941__$1);

return statearr_33958;
})();
if(cljs.core.truth_(inst_33942)){
var statearr_33959_33973 = state_33952__$1;
(statearr_33959_33973[(1)] = (5));

} else {
var statearr_33960_33974 = state_33952__$1;
(statearr_33960_33974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (3))){
var inst_33950 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33952__$1,inst_33950);
} else {
if((state_val_33953 === (2))){
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33952__$1,(4),ch);
} else {
if((state_val_33953 === (1))){
var inst_33938 = init;
var state_33952__$1 = (function (){var statearr_33961 = state_33952;
(statearr_33961[(7)] = inst_33938);

return statearr_33961;
})();
var statearr_33962_33975 = state_33952__$1;
(statearr_33962_33975[(2)] = null);

(statearr_33962_33975[(1)] = (2));


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
});})(c__20705__auto__))
;
return ((function (switch__20684__auto__,c__20705__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20685__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20685__auto____0 = (function (){
var statearr_33966 = [null,null,null,null,null,null,null,null,null];
(statearr_33966[(0)] = cljs$core$async$reduce_$_state_machine__20685__auto__);

(statearr_33966[(1)] = (1));

return statearr_33966;
});
var cljs$core$async$reduce_$_state_machine__20685__auto____1 = (function (state_33952){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33967){if((e33967 instanceof Object)){
var ex__20688__auto__ = e33967;
var statearr_33968_33976 = state_33952;
(statearr_33968_33976[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33977 = state_33952;
state_33952 = G__33977;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20685__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20685__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20685__auto____0;
cljs$core$async$reduce_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20685__auto____1;
return cljs$core$async$reduce_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__))
})();
var state__20707__auto__ = (function (){var statearr_33969 = f__20706__auto__.call(null);
(statearr_33969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__))
);

return c__20705__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__33979 = arguments.length;
switch (G__33979) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__){
return (function (state_34004){
var state_val_34005 = (state_34004[(1)]);
if((state_val_34005 === (7))){
var inst_33986 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
var statearr_34006_34030 = state_34004__$1;
(statearr_34006_34030[(2)] = inst_33986);

(statearr_34006_34030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (1))){
var inst_33980 = cljs.core.seq.call(null,coll);
var inst_33981 = inst_33980;
var state_34004__$1 = (function (){var statearr_34007 = state_34004;
(statearr_34007[(7)] = inst_33981);

return statearr_34007;
})();
var statearr_34008_34031 = state_34004__$1;
(statearr_34008_34031[(2)] = null);

(statearr_34008_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (4))){
var inst_33981 = (state_34004[(7)]);
var inst_33984 = cljs.core.first.call(null,inst_33981);
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34004__$1,(7),ch,inst_33984);
} else {
if((state_val_34005 === (13))){
var inst_33998 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
var statearr_34009_34032 = state_34004__$1;
(statearr_34009_34032[(2)] = inst_33998);

(statearr_34009_34032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (6))){
var inst_33989 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
if(cljs.core.truth_(inst_33989)){
var statearr_34010_34033 = state_34004__$1;
(statearr_34010_34033[(1)] = (8));

} else {
var statearr_34011_34034 = state_34004__$1;
(statearr_34011_34034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (3))){
var inst_34002 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34004__$1,inst_34002);
} else {
if((state_val_34005 === (12))){
var state_34004__$1 = state_34004;
var statearr_34012_34035 = state_34004__$1;
(statearr_34012_34035[(2)] = null);

(statearr_34012_34035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (2))){
var inst_33981 = (state_34004[(7)]);
var state_34004__$1 = state_34004;
if(cljs.core.truth_(inst_33981)){
var statearr_34013_34036 = state_34004__$1;
(statearr_34013_34036[(1)] = (4));

} else {
var statearr_34014_34037 = state_34004__$1;
(statearr_34014_34037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (11))){
var inst_33995 = cljs.core.async.close_BANG_.call(null,ch);
var state_34004__$1 = state_34004;
var statearr_34015_34038 = state_34004__$1;
(statearr_34015_34038[(2)] = inst_33995);

(statearr_34015_34038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (9))){
var state_34004__$1 = state_34004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34016_34039 = state_34004__$1;
(statearr_34016_34039[(1)] = (11));

} else {
var statearr_34017_34040 = state_34004__$1;
(statearr_34017_34040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (5))){
var inst_33981 = (state_34004[(7)]);
var state_34004__$1 = state_34004;
var statearr_34018_34041 = state_34004__$1;
(statearr_34018_34041[(2)] = inst_33981);

(statearr_34018_34041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (10))){
var inst_34000 = (state_34004[(2)]);
var state_34004__$1 = state_34004;
var statearr_34019_34042 = state_34004__$1;
(statearr_34019_34042[(2)] = inst_34000);

(statearr_34019_34042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34005 === (8))){
var inst_33981 = (state_34004[(7)]);
var inst_33991 = cljs.core.next.call(null,inst_33981);
var inst_33981__$1 = inst_33991;
var state_34004__$1 = (function (){var statearr_34020 = state_34004;
(statearr_34020[(7)] = inst_33981__$1);

return statearr_34020;
})();
var statearr_34021_34043 = state_34004__$1;
(statearr_34021_34043[(2)] = null);

(statearr_34021_34043[(1)] = (2));


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
});})(c__20705__auto__))
;
return ((function (switch__20684__auto__,c__20705__auto__){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_34025 = [null,null,null,null,null,null,null,null];
(statearr_34025[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_34025[(1)] = (1));

return statearr_34025;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_34004){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_34004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e34026){if((e34026 instanceof Object)){
var ex__20688__auto__ = e34026;
var statearr_34027_34044 = state_34004;
(statearr_34027_34044[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_34004;
state_34004 = G__34045;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_34004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_34004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__))
})();
var state__20707__auto__ = (function (){var statearr_34028 = f__20706__auto__.call(null);
(statearr_34028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_34028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__))
);

return c__20705__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj34047 = {};
return obj34047;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18070__auto__ = _;
if(and__18070__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18070__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18718__auto__ = (((_ == null))?null:_);
return (function (){var or__18082__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj34049 = {};
return obj34049;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t34271 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34271 = (function (cs,ch,mult,meta34272){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34272 = meta34272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34271.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t34271.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t34271.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t34271.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t34271.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t34271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34273){
var self__ = this;
var _34273__$1 = this;
return self__.meta34272;
});})(cs))
;

cljs.core.async.t34271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34273,meta34272__$1){
var self__ = this;
var _34273__$1 = this;
return (new cljs.core.async.t34271(self__.cs,self__.ch,self__.mult,meta34272__$1));
});})(cs))
;

cljs.core.async.t34271.cljs$lang$type = true;

cljs.core.async.t34271.cljs$lang$ctorStr = "cljs.core.async/t34271";

cljs.core.async.t34271.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t34271");
});})(cs))
;

cljs.core.async.__GT_t34271 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t34271(cs__$1,ch__$1,mult__$1,meta34272){
return (new cljs.core.async.t34271(cs__$1,ch__$1,mult__$1,meta34272));
});})(cs))
;

}

return (new cljs.core.async.t34271(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20705__auto___34492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___34492,cs,m,dchan,dctr,done){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___34492,cs,m,dchan,dctr,done){
return (function (state_34404){
var state_val_34405 = (state_34404[(1)]);
if((state_val_34405 === (7))){
var inst_34400 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34406_34493 = state_34404__$1;
(statearr_34406_34493[(2)] = inst_34400);

(statearr_34406_34493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (20))){
var inst_34305 = (state_34404[(7)]);
var inst_34315 = cljs.core.first.call(null,inst_34305);
var inst_34316 = cljs.core.nth.call(null,inst_34315,(0),null);
var inst_34317 = cljs.core.nth.call(null,inst_34315,(1),null);
var state_34404__$1 = (function (){var statearr_34407 = state_34404;
(statearr_34407[(8)] = inst_34316);

return statearr_34407;
})();
if(cljs.core.truth_(inst_34317)){
var statearr_34408_34494 = state_34404__$1;
(statearr_34408_34494[(1)] = (22));

} else {
var statearr_34409_34495 = state_34404__$1;
(statearr_34409_34495[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (27))){
var inst_34345 = (state_34404[(9)]);
var inst_34347 = (state_34404[(10)]);
var inst_34352 = (state_34404[(11)]);
var inst_34276 = (state_34404[(12)]);
var inst_34352__$1 = cljs.core._nth.call(null,inst_34345,inst_34347);
var inst_34353 = cljs.core.async.put_BANG_.call(null,inst_34352__$1,inst_34276,done);
var state_34404__$1 = (function (){var statearr_34410 = state_34404;
(statearr_34410[(11)] = inst_34352__$1);

return statearr_34410;
})();
if(cljs.core.truth_(inst_34353)){
var statearr_34411_34496 = state_34404__$1;
(statearr_34411_34496[(1)] = (30));

} else {
var statearr_34412_34497 = state_34404__$1;
(statearr_34412_34497[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (1))){
var state_34404__$1 = state_34404;
var statearr_34413_34498 = state_34404__$1;
(statearr_34413_34498[(2)] = null);

(statearr_34413_34498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (24))){
var inst_34305 = (state_34404[(7)]);
var inst_34322 = (state_34404[(2)]);
var inst_34323 = cljs.core.next.call(null,inst_34305);
var inst_34285 = inst_34323;
var inst_34286 = null;
var inst_34287 = (0);
var inst_34288 = (0);
var state_34404__$1 = (function (){var statearr_34414 = state_34404;
(statearr_34414[(13)] = inst_34286);

(statearr_34414[(14)] = inst_34287);

(statearr_34414[(15)] = inst_34288);

(statearr_34414[(16)] = inst_34285);

(statearr_34414[(17)] = inst_34322);

return statearr_34414;
})();
var statearr_34415_34499 = state_34404__$1;
(statearr_34415_34499[(2)] = null);

(statearr_34415_34499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (39))){
var state_34404__$1 = state_34404;
var statearr_34419_34500 = state_34404__$1;
(statearr_34419_34500[(2)] = null);

(statearr_34419_34500[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (4))){
var inst_34276 = (state_34404[(12)]);
var inst_34276__$1 = (state_34404[(2)]);
var inst_34277 = (inst_34276__$1 == null);
var state_34404__$1 = (function (){var statearr_34420 = state_34404;
(statearr_34420[(12)] = inst_34276__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34277)){
var statearr_34421_34501 = state_34404__$1;
(statearr_34421_34501[(1)] = (5));

} else {
var statearr_34422_34502 = state_34404__$1;
(statearr_34422_34502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (15))){
var inst_34286 = (state_34404[(13)]);
var inst_34287 = (state_34404[(14)]);
var inst_34288 = (state_34404[(15)]);
var inst_34285 = (state_34404[(16)]);
var inst_34301 = (state_34404[(2)]);
var inst_34302 = (inst_34288 + (1));
var tmp34416 = inst_34286;
var tmp34417 = inst_34287;
var tmp34418 = inst_34285;
var inst_34285__$1 = tmp34418;
var inst_34286__$1 = tmp34416;
var inst_34287__$1 = tmp34417;
var inst_34288__$1 = inst_34302;
var state_34404__$1 = (function (){var statearr_34423 = state_34404;
(statearr_34423[(18)] = inst_34301);

(statearr_34423[(13)] = inst_34286__$1);

(statearr_34423[(14)] = inst_34287__$1);

(statearr_34423[(15)] = inst_34288__$1);

(statearr_34423[(16)] = inst_34285__$1);

return statearr_34423;
})();
var statearr_34424_34503 = state_34404__$1;
(statearr_34424_34503[(2)] = null);

(statearr_34424_34503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (21))){
var inst_34326 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34428_34504 = state_34404__$1;
(statearr_34428_34504[(2)] = inst_34326);

(statearr_34428_34504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (31))){
var inst_34352 = (state_34404[(11)]);
var inst_34356 = done.call(null,null);
var inst_34357 = cljs.core.async.untap_STAR_.call(null,m,inst_34352);
var state_34404__$1 = (function (){var statearr_34429 = state_34404;
(statearr_34429[(19)] = inst_34356);

return statearr_34429;
})();
var statearr_34430_34505 = state_34404__$1;
(statearr_34430_34505[(2)] = inst_34357);

(statearr_34430_34505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (32))){
var inst_34345 = (state_34404[(9)]);
var inst_34344 = (state_34404[(20)]);
var inst_34346 = (state_34404[(21)]);
var inst_34347 = (state_34404[(10)]);
var inst_34359 = (state_34404[(2)]);
var inst_34360 = (inst_34347 + (1));
var tmp34425 = inst_34345;
var tmp34426 = inst_34344;
var tmp34427 = inst_34346;
var inst_34344__$1 = tmp34426;
var inst_34345__$1 = tmp34425;
var inst_34346__$1 = tmp34427;
var inst_34347__$1 = inst_34360;
var state_34404__$1 = (function (){var statearr_34431 = state_34404;
(statearr_34431[(9)] = inst_34345__$1);

(statearr_34431[(22)] = inst_34359);

(statearr_34431[(20)] = inst_34344__$1);

(statearr_34431[(21)] = inst_34346__$1);

(statearr_34431[(10)] = inst_34347__$1);

return statearr_34431;
})();
var statearr_34432_34506 = state_34404__$1;
(statearr_34432_34506[(2)] = null);

(statearr_34432_34506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (40))){
var inst_34372 = (state_34404[(23)]);
var inst_34376 = done.call(null,null);
var inst_34377 = cljs.core.async.untap_STAR_.call(null,m,inst_34372);
var state_34404__$1 = (function (){var statearr_34433 = state_34404;
(statearr_34433[(24)] = inst_34376);

return statearr_34433;
})();
var statearr_34434_34507 = state_34404__$1;
(statearr_34434_34507[(2)] = inst_34377);

(statearr_34434_34507[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (33))){
var inst_34363 = (state_34404[(25)]);
var inst_34365 = cljs.core.chunked_seq_QMARK_.call(null,inst_34363);
var state_34404__$1 = state_34404;
if(inst_34365){
var statearr_34435_34508 = state_34404__$1;
(statearr_34435_34508[(1)] = (36));

} else {
var statearr_34436_34509 = state_34404__$1;
(statearr_34436_34509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (13))){
var inst_34295 = (state_34404[(26)]);
var inst_34298 = cljs.core.async.close_BANG_.call(null,inst_34295);
var state_34404__$1 = state_34404;
var statearr_34437_34510 = state_34404__$1;
(statearr_34437_34510[(2)] = inst_34298);

(statearr_34437_34510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (22))){
var inst_34316 = (state_34404[(8)]);
var inst_34319 = cljs.core.async.close_BANG_.call(null,inst_34316);
var state_34404__$1 = state_34404;
var statearr_34438_34511 = state_34404__$1;
(statearr_34438_34511[(2)] = inst_34319);

(statearr_34438_34511[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (36))){
var inst_34363 = (state_34404[(25)]);
var inst_34367 = cljs.core.chunk_first.call(null,inst_34363);
var inst_34368 = cljs.core.chunk_rest.call(null,inst_34363);
var inst_34369 = cljs.core.count.call(null,inst_34367);
var inst_34344 = inst_34368;
var inst_34345 = inst_34367;
var inst_34346 = inst_34369;
var inst_34347 = (0);
var state_34404__$1 = (function (){var statearr_34439 = state_34404;
(statearr_34439[(9)] = inst_34345);

(statearr_34439[(20)] = inst_34344);

(statearr_34439[(21)] = inst_34346);

(statearr_34439[(10)] = inst_34347);

return statearr_34439;
})();
var statearr_34440_34512 = state_34404__$1;
(statearr_34440_34512[(2)] = null);

(statearr_34440_34512[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (41))){
var inst_34363 = (state_34404[(25)]);
var inst_34379 = (state_34404[(2)]);
var inst_34380 = cljs.core.next.call(null,inst_34363);
var inst_34344 = inst_34380;
var inst_34345 = null;
var inst_34346 = (0);
var inst_34347 = (0);
var state_34404__$1 = (function (){var statearr_34441 = state_34404;
(statearr_34441[(9)] = inst_34345);

(statearr_34441[(20)] = inst_34344);

(statearr_34441[(21)] = inst_34346);

(statearr_34441[(10)] = inst_34347);

(statearr_34441[(27)] = inst_34379);

return statearr_34441;
})();
var statearr_34442_34513 = state_34404__$1;
(statearr_34442_34513[(2)] = null);

(statearr_34442_34513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (43))){
var state_34404__$1 = state_34404;
var statearr_34443_34514 = state_34404__$1;
(statearr_34443_34514[(2)] = null);

(statearr_34443_34514[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (29))){
var inst_34388 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34444_34515 = state_34404__$1;
(statearr_34444_34515[(2)] = inst_34388);

(statearr_34444_34515[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (44))){
var inst_34397 = (state_34404[(2)]);
var state_34404__$1 = (function (){var statearr_34445 = state_34404;
(statearr_34445[(28)] = inst_34397);

return statearr_34445;
})();
var statearr_34446_34516 = state_34404__$1;
(statearr_34446_34516[(2)] = null);

(statearr_34446_34516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (6))){
var inst_34336 = (state_34404[(29)]);
var inst_34335 = cljs.core.deref.call(null,cs);
var inst_34336__$1 = cljs.core.keys.call(null,inst_34335);
var inst_34337 = cljs.core.count.call(null,inst_34336__$1);
var inst_34338 = cljs.core.reset_BANG_.call(null,dctr,inst_34337);
var inst_34343 = cljs.core.seq.call(null,inst_34336__$1);
var inst_34344 = inst_34343;
var inst_34345 = null;
var inst_34346 = (0);
var inst_34347 = (0);
var state_34404__$1 = (function (){var statearr_34447 = state_34404;
(statearr_34447[(9)] = inst_34345);

(statearr_34447[(20)] = inst_34344);

(statearr_34447[(21)] = inst_34346);

(statearr_34447[(29)] = inst_34336__$1);

(statearr_34447[(10)] = inst_34347);

(statearr_34447[(30)] = inst_34338);

return statearr_34447;
})();
var statearr_34448_34517 = state_34404__$1;
(statearr_34448_34517[(2)] = null);

(statearr_34448_34517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (28))){
var inst_34344 = (state_34404[(20)]);
var inst_34363 = (state_34404[(25)]);
var inst_34363__$1 = cljs.core.seq.call(null,inst_34344);
var state_34404__$1 = (function (){var statearr_34449 = state_34404;
(statearr_34449[(25)] = inst_34363__$1);

return statearr_34449;
})();
if(inst_34363__$1){
var statearr_34450_34518 = state_34404__$1;
(statearr_34450_34518[(1)] = (33));

} else {
var statearr_34451_34519 = state_34404__$1;
(statearr_34451_34519[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (25))){
var inst_34346 = (state_34404[(21)]);
var inst_34347 = (state_34404[(10)]);
var inst_34349 = (inst_34347 < inst_34346);
var inst_34350 = inst_34349;
var state_34404__$1 = state_34404;
if(cljs.core.truth_(inst_34350)){
var statearr_34452_34520 = state_34404__$1;
(statearr_34452_34520[(1)] = (27));

} else {
var statearr_34453_34521 = state_34404__$1;
(statearr_34453_34521[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (34))){
var state_34404__$1 = state_34404;
var statearr_34454_34522 = state_34404__$1;
(statearr_34454_34522[(2)] = null);

(statearr_34454_34522[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (17))){
var state_34404__$1 = state_34404;
var statearr_34455_34523 = state_34404__$1;
(statearr_34455_34523[(2)] = null);

(statearr_34455_34523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (3))){
var inst_34402 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34404__$1,inst_34402);
} else {
if((state_val_34405 === (12))){
var inst_34331 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34456_34524 = state_34404__$1;
(statearr_34456_34524[(2)] = inst_34331);

(statearr_34456_34524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (2))){
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34404__$1,(4),ch);
} else {
if((state_val_34405 === (23))){
var state_34404__$1 = state_34404;
var statearr_34457_34525 = state_34404__$1;
(statearr_34457_34525[(2)] = null);

(statearr_34457_34525[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (35))){
var inst_34386 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34458_34526 = state_34404__$1;
(statearr_34458_34526[(2)] = inst_34386);

(statearr_34458_34526[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (19))){
var inst_34305 = (state_34404[(7)]);
var inst_34309 = cljs.core.chunk_first.call(null,inst_34305);
var inst_34310 = cljs.core.chunk_rest.call(null,inst_34305);
var inst_34311 = cljs.core.count.call(null,inst_34309);
var inst_34285 = inst_34310;
var inst_34286 = inst_34309;
var inst_34287 = inst_34311;
var inst_34288 = (0);
var state_34404__$1 = (function (){var statearr_34459 = state_34404;
(statearr_34459[(13)] = inst_34286);

(statearr_34459[(14)] = inst_34287);

(statearr_34459[(15)] = inst_34288);

(statearr_34459[(16)] = inst_34285);

return statearr_34459;
})();
var statearr_34460_34527 = state_34404__$1;
(statearr_34460_34527[(2)] = null);

(statearr_34460_34527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (11))){
var inst_34305 = (state_34404[(7)]);
var inst_34285 = (state_34404[(16)]);
var inst_34305__$1 = cljs.core.seq.call(null,inst_34285);
var state_34404__$1 = (function (){var statearr_34461 = state_34404;
(statearr_34461[(7)] = inst_34305__$1);

return statearr_34461;
})();
if(inst_34305__$1){
var statearr_34462_34528 = state_34404__$1;
(statearr_34462_34528[(1)] = (16));

} else {
var statearr_34463_34529 = state_34404__$1;
(statearr_34463_34529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (9))){
var inst_34333 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34464_34530 = state_34404__$1;
(statearr_34464_34530[(2)] = inst_34333);

(statearr_34464_34530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (5))){
var inst_34283 = cljs.core.deref.call(null,cs);
var inst_34284 = cljs.core.seq.call(null,inst_34283);
var inst_34285 = inst_34284;
var inst_34286 = null;
var inst_34287 = (0);
var inst_34288 = (0);
var state_34404__$1 = (function (){var statearr_34465 = state_34404;
(statearr_34465[(13)] = inst_34286);

(statearr_34465[(14)] = inst_34287);

(statearr_34465[(15)] = inst_34288);

(statearr_34465[(16)] = inst_34285);

return statearr_34465;
})();
var statearr_34466_34531 = state_34404__$1;
(statearr_34466_34531[(2)] = null);

(statearr_34466_34531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (14))){
var state_34404__$1 = state_34404;
var statearr_34467_34532 = state_34404__$1;
(statearr_34467_34532[(2)] = null);

(statearr_34467_34532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (45))){
var inst_34394 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34468_34533 = state_34404__$1;
(statearr_34468_34533[(2)] = inst_34394);

(statearr_34468_34533[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (26))){
var inst_34336 = (state_34404[(29)]);
var inst_34390 = (state_34404[(2)]);
var inst_34391 = cljs.core.seq.call(null,inst_34336);
var state_34404__$1 = (function (){var statearr_34469 = state_34404;
(statearr_34469[(31)] = inst_34390);

return statearr_34469;
})();
if(inst_34391){
var statearr_34470_34534 = state_34404__$1;
(statearr_34470_34534[(1)] = (42));

} else {
var statearr_34471_34535 = state_34404__$1;
(statearr_34471_34535[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (16))){
var inst_34305 = (state_34404[(7)]);
var inst_34307 = cljs.core.chunked_seq_QMARK_.call(null,inst_34305);
var state_34404__$1 = state_34404;
if(inst_34307){
var statearr_34472_34536 = state_34404__$1;
(statearr_34472_34536[(1)] = (19));

} else {
var statearr_34473_34537 = state_34404__$1;
(statearr_34473_34537[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (38))){
var inst_34383 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34474_34538 = state_34404__$1;
(statearr_34474_34538[(2)] = inst_34383);

(statearr_34474_34538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (30))){
var state_34404__$1 = state_34404;
var statearr_34475_34539 = state_34404__$1;
(statearr_34475_34539[(2)] = null);

(statearr_34475_34539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (10))){
var inst_34286 = (state_34404[(13)]);
var inst_34288 = (state_34404[(15)]);
var inst_34294 = cljs.core._nth.call(null,inst_34286,inst_34288);
var inst_34295 = cljs.core.nth.call(null,inst_34294,(0),null);
var inst_34296 = cljs.core.nth.call(null,inst_34294,(1),null);
var state_34404__$1 = (function (){var statearr_34476 = state_34404;
(statearr_34476[(26)] = inst_34295);

return statearr_34476;
})();
if(cljs.core.truth_(inst_34296)){
var statearr_34477_34540 = state_34404__$1;
(statearr_34477_34540[(1)] = (13));

} else {
var statearr_34478_34541 = state_34404__$1;
(statearr_34478_34541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (18))){
var inst_34329 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34479_34542 = state_34404__$1;
(statearr_34479_34542[(2)] = inst_34329);

(statearr_34479_34542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (42))){
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34404__$1,(45),dchan);
} else {
if((state_val_34405 === (37))){
var inst_34372 = (state_34404[(23)]);
var inst_34276 = (state_34404[(12)]);
var inst_34363 = (state_34404[(25)]);
var inst_34372__$1 = cljs.core.first.call(null,inst_34363);
var inst_34373 = cljs.core.async.put_BANG_.call(null,inst_34372__$1,inst_34276,done);
var state_34404__$1 = (function (){var statearr_34480 = state_34404;
(statearr_34480[(23)] = inst_34372__$1);

return statearr_34480;
})();
if(cljs.core.truth_(inst_34373)){
var statearr_34481_34543 = state_34404__$1;
(statearr_34481_34543[(1)] = (39));

} else {
var statearr_34482_34544 = state_34404__$1;
(statearr_34482_34544[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (8))){
var inst_34287 = (state_34404[(14)]);
var inst_34288 = (state_34404[(15)]);
var inst_34290 = (inst_34288 < inst_34287);
var inst_34291 = inst_34290;
var state_34404__$1 = state_34404;
if(cljs.core.truth_(inst_34291)){
var statearr_34483_34545 = state_34404__$1;
(statearr_34483_34545[(1)] = (10));

} else {
var statearr_34484_34546 = state_34404__$1;
(statearr_34484_34546[(1)] = (11));

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
});})(c__20705__auto___34492,cs,m,dchan,dctr,done))
;
return ((function (switch__20684__auto__,c__20705__auto___34492,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20685__auto__ = null;
var cljs$core$async$mult_$_state_machine__20685__auto____0 = (function (){
var statearr_34488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34488[(0)] = cljs$core$async$mult_$_state_machine__20685__auto__);

(statearr_34488[(1)] = (1));

return statearr_34488;
});
var cljs$core$async$mult_$_state_machine__20685__auto____1 = (function (state_34404){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_34404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e34489){if((e34489 instanceof Object)){
var ex__20688__auto__ = e34489;
var statearr_34490_34547 = state_34404;
(statearr_34490_34547[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34548 = state_34404;
state_34404 = G__34548;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20685__auto__ = function(state_34404){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20685__auto____1.call(this,state_34404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20685__auto____0;
cljs$core$async$mult_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20685__auto____1;
return cljs$core$async$mult_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___34492,cs,m,dchan,dctr,done))
})();
var state__20707__auto__ = (function (){var statearr_34491 = f__20706__auto__.call(null);
(statearr_34491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___34492);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___34492,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__34550 = arguments.length;
switch (G__34550) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj34553 = {};
return obj34553;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18070__auto__ = m;
if(and__18070__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18718__auto__ = (((m == null))?null:m);
return (function (){var or__18082__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19122__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19122__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34558){
var map__34559 = p__34558;
var map__34559__$1 = ((cljs.core.seq_QMARK_.call(null,map__34559))?cljs.core.apply.call(null,cljs.core.hash_map,map__34559):map__34559);
var opts = map__34559__$1;
var statearr_34560_34563 = state;
(statearr_34560_34563[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__34559,map__34559__$1,opts){
return (function (val){
var statearr_34561_34564 = state;
(statearr_34561_34564[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34559,map__34559__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_34562_34565 = state;
(statearr_34562_34565[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34554){
var G__34555 = cljs.core.first.call(null,seq34554);
var seq34554__$1 = cljs.core.next.call(null,seq34554);
var G__34556 = cljs.core.first.call(null,seq34554__$1);
var seq34554__$2 = cljs.core.next.call(null,seq34554__$1);
var G__34557 = cljs.core.first.call(null,seq34554__$2);
var seq34554__$3 = cljs.core.next.call(null,seq34554__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34555,G__34556,G__34557,seq34554__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t34685 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34685 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34686){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34686 = meta34686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34685.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t34685.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34687){
var self__ = this;
var _34687__$1 = this;
return self__.meta34686;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34687,meta34686__$1){
var self__ = this;
var _34687__$1 = this;
return (new cljs.core.async.t34685(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34686__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34685.cljs$lang$type = true;

cljs.core.async.t34685.cljs$lang$ctorStr = "cljs.core.async/t34685";

cljs.core.async.t34685.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t34685");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t34685 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t34685(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34686){
return (new cljs.core.async.t34685(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34686));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t34685(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20705__auto___34804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___34804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___34804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34757){
var state_val_34758 = (state_34757[(1)]);
if((state_val_34758 === (7))){
var inst_34701 = (state_34757[(7)]);
var inst_34706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34701);
var state_34757__$1 = state_34757;
var statearr_34759_34805 = state_34757__$1;
(statearr_34759_34805[(2)] = inst_34706);

(statearr_34759_34805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (20))){
var inst_34716 = (state_34757[(8)]);
var state_34757__$1 = state_34757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34757__$1,(23),out,inst_34716);
} else {
if((state_val_34758 === (1))){
var inst_34691 = (state_34757[(9)]);
var inst_34691__$1 = calc_state.call(null);
var inst_34692 = cljs.core.seq_QMARK_.call(null,inst_34691__$1);
var state_34757__$1 = (function (){var statearr_34760 = state_34757;
(statearr_34760[(9)] = inst_34691__$1);

return statearr_34760;
})();
if(inst_34692){
var statearr_34761_34806 = state_34757__$1;
(statearr_34761_34806[(1)] = (2));

} else {
var statearr_34762_34807 = state_34757__$1;
(statearr_34762_34807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (24))){
var inst_34709 = (state_34757[(10)]);
var inst_34701 = inst_34709;
var state_34757__$1 = (function (){var statearr_34763 = state_34757;
(statearr_34763[(7)] = inst_34701);

return statearr_34763;
})();
var statearr_34764_34808 = state_34757__$1;
(statearr_34764_34808[(2)] = null);

(statearr_34764_34808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (4))){
var inst_34691 = (state_34757[(9)]);
var inst_34697 = (state_34757[(2)]);
var inst_34698 = cljs.core.get.call(null,inst_34697,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34699 = cljs.core.get.call(null,inst_34697,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34700 = cljs.core.get.call(null,inst_34697,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34701 = inst_34691;
var state_34757__$1 = (function (){var statearr_34765 = state_34757;
(statearr_34765[(11)] = inst_34698);

(statearr_34765[(12)] = inst_34700);

(statearr_34765[(13)] = inst_34699);

(statearr_34765[(7)] = inst_34701);

return statearr_34765;
})();
var statearr_34766_34809 = state_34757__$1;
(statearr_34766_34809[(2)] = null);

(statearr_34766_34809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (15))){
var state_34757__$1 = state_34757;
var statearr_34767_34810 = state_34757__$1;
(statearr_34767_34810[(2)] = null);

(statearr_34767_34810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (21))){
var inst_34709 = (state_34757[(10)]);
var inst_34701 = inst_34709;
var state_34757__$1 = (function (){var statearr_34768 = state_34757;
(statearr_34768[(7)] = inst_34701);

return statearr_34768;
})();
var statearr_34769_34811 = state_34757__$1;
(statearr_34769_34811[(2)] = null);

(statearr_34769_34811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (13))){
var inst_34753 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34770_34812 = state_34757__$1;
(statearr_34770_34812[(2)] = inst_34753);

(statearr_34770_34812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (22))){
var inst_34751 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34771_34813 = state_34757__$1;
(statearr_34771_34813[(2)] = inst_34751);

(statearr_34771_34813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (6))){
var inst_34755 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34757__$1,inst_34755);
} else {
if((state_val_34758 === (25))){
var state_34757__$1 = state_34757;
var statearr_34772_34814 = state_34757__$1;
(statearr_34772_34814[(2)] = null);

(statearr_34772_34814[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (17))){
var inst_34731 = (state_34757[(14)]);
var state_34757__$1 = state_34757;
var statearr_34773_34815 = state_34757__$1;
(statearr_34773_34815[(2)] = inst_34731);

(statearr_34773_34815[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (3))){
var inst_34691 = (state_34757[(9)]);
var state_34757__$1 = state_34757;
var statearr_34774_34816 = state_34757__$1;
(statearr_34774_34816[(2)] = inst_34691);

(statearr_34774_34816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (12))){
var inst_34712 = (state_34757[(15)]);
var inst_34717 = (state_34757[(16)]);
var inst_34731 = (state_34757[(14)]);
var inst_34731__$1 = inst_34712.call(null,inst_34717);
var state_34757__$1 = (function (){var statearr_34775 = state_34757;
(statearr_34775[(14)] = inst_34731__$1);

return statearr_34775;
})();
if(cljs.core.truth_(inst_34731__$1)){
var statearr_34776_34817 = state_34757__$1;
(statearr_34776_34817[(1)] = (17));

} else {
var statearr_34777_34818 = state_34757__$1;
(statearr_34777_34818[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (2))){
var inst_34691 = (state_34757[(9)]);
var inst_34694 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34691);
var state_34757__$1 = state_34757;
var statearr_34778_34819 = state_34757__$1;
(statearr_34778_34819[(2)] = inst_34694);

(statearr_34778_34819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (23))){
var inst_34742 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
if(cljs.core.truth_(inst_34742)){
var statearr_34779_34820 = state_34757__$1;
(statearr_34779_34820[(1)] = (24));

} else {
var statearr_34780_34821 = state_34757__$1;
(statearr_34780_34821[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (19))){
var inst_34739 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
if(cljs.core.truth_(inst_34739)){
var statearr_34781_34822 = state_34757__$1;
(statearr_34781_34822[(1)] = (20));

} else {
var statearr_34782_34823 = state_34757__$1;
(statearr_34782_34823[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (11))){
var inst_34716 = (state_34757[(8)]);
var inst_34722 = (inst_34716 == null);
var state_34757__$1 = state_34757;
if(cljs.core.truth_(inst_34722)){
var statearr_34783_34824 = state_34757__$1;
(statearr_34783_34824[(1)] = (14));

} else {
var statearr_34784_34825 = state_34757__$1;
(statearr_34784_34825[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (9))){
var inst_34709 = (state_34757[(10)]);
var inst_34709__$1 = (state_34757[(2)]);
var inst_34710 = cljs.core.get.call(null,inst_34709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34711 = cljs.core.get.call(null,inst_34709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34712 = cljs.core.get.call(null,inst_34709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_34757__$1 = (function (){var statearr_34785 = state_34757;
(statearr_34785[(17)] = inst_34711);

(statearr_34785[(15)] = inst_34712);

(statearr_34785[(10)] = inst_34709__$1);

return statearr_34785;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34757__$1,(10),inst_34710);
} else {
if((state_val_34758 === (5))){
var inst_34701 = (state_34757[(7)]);
var inst_34704 = cljs.core.seq_QMARK_.call(null,inst_34701);
var state_34757__$1 = state_34757;
if(inst_34704){
var statearr_34786_34826 = state_34757__$1;
(statearr_34786_34826[(1)] = (7));

} else {
var statearr_34787_34827 = state_34757__$1;
(statearr_34787_34827[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (14))){
var inst_34717 = (state_34757[(16)]);
var inst_34724 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34717);
var state_34757__$1 = state_34757;
var statearr_34788_34828 = state_34757__$1;
(statearr_34788_34828[(2)] = inst_34724);

(statearr_34788_34828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (26))){
var inst_34747 = (state_34757[(2)]);
var state_34757__$1 = state_34757;
var statearr_34789_34829 = state_34757__$1;
(statearr_34789_34829[(2)] = inst_34747);

(statearr_34789_34829[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (16))){
var inst_34727 = (state_34757[(2)]);
var inst_34728 = calc_state.call(null);
var inst_34701 = inst_34728;
var state_34757__$1 = (function (){var statearr_34790 = state_34757;
(statearr_34790[(18)] = inst_34727);

(statearr_34790[(7)] = inst_34701);

return statearr_34790;
})();
var statearr_34791_34830 = state_34757__$1;
(statearr_34791_34830[(2)] = null);

(statearr_34791_34830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (10))){
var inst_34716 = (state_34757[(8)]);
var inst_34717 = (state_34757[(16)]);
var inst_34715 = (state_34757[(2)]);
var inst_34716__$1 = cljs.core.nth.call(null,inst_34715,(0),null);
var inst_34717__$1 = cljs.core.nth.call(null,inst_34715,(1),null);
var inst_34718 = (inst_34716__$1 == null);
var inst_34719 = cljs.core._EQ_.call(null,inst_34717__$1,change);
var inst_34720 = (inst_34718) || (inst_34719);
var state_34757__$1 = (function (){var statearr_34792 = state_34757;
(statearr_34792[(8)] = inst_34716__$1);

(statearr_34792[(16)] = inst_34717__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34720)){
var statearr_34793_34831 = state_34757__$1;
(statearr_34793_34831[(1)] = (11));

} else {
var statearr_34794_34832 = state_34757__$1;
(statearr_34794_34832[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (18))){
var inst_34711 = (state_34757[(17)]);
var inst_34712 = (state_34757[(15)]);
var inst_34717 = (state_34757[(16)]);
var inst_34734 = cljs.core.empty_QMARK_.call(null,inst_34712);
var inst_34735 = inst_34711.call(null,inst_34717);
var inst_34736 = cljs.core.not.call(null,inst_34735);
var inst_34737 = (inst_34734) && (inst_34736);
var state_34757__$1 = state_34757;
var statearr_34795_34833 = state_34757__$1;
(statearr_34795_34833[(2)] = inst_34737);

(statearr_34795_34833[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34758 === (8))){
var inst_34701 = (state_34757[(7)]);
var state_34757__$1 = state_34757;
var statearr_34796_34834 = state_34757__$1;
(statearr_34796_34834[(2)] = inst_34701);

(statearr_34796_34834[(1)] = (9));


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
});})(c__20705__auto___34804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20684__auto__,c__20705__auto___34804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20685__auto__ = null;
var cljs$core$async$mix_$_state_machine__20685__auto____0 = (function (){
var statearr_34800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34800[(0)] = cljs$core$async$mix_$_state_machine__20685__auto__);

(statearr_34800[(1)] = (1));

return statearr_34800;
});
var cljs$core$async$mix_$_state_machine__20685__auto____1 = (function (state_34757){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_34757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e34801){if((e34801 instanceof Object)){
var ex__20688__auto__ = e34801;
var statearr_34802_34835 = state_34757;
(statearr_34802_34835[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34836 = state_34757;
state_34757 = G__34836;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20685__auto__ = function(state_34757){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20685__auto____1.call(this,state_34757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20685__auto____0;
cljs$core$async$mix_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20685__auto____1;
return cljs$core$async$mix_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___34804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20707__auto__ = (function (){var statearr_34803 = f__20706__auto__.call(null);
(statearr_34803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___34804);

return statearr_34803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___34804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj34838 = {};
return obj34838;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18070__auto__ = p;
if(and__18070__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18070__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18718__auto__ = (((p == null))?null:p);
return (function (){var or__18082__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18070__auto__ = p;
if(and__18070__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18070__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18718__auto__ = (((p == null))?null:p);
return (function (){var or__18082__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__34840 = arguments.length;
switch (G__34840) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18070__auto__ = p;
if(and__18070__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18070__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18718__auto__ = (((p == null))?null:p);
return (function (){var or__18082__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18070__auto__ = p;
if(and__18070__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18718__auto__ = (((p == null))?null:p);
return (function (){var or__18082__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__34844 = arguments.length;
switch (G__34844) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18082__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18082__auto__,mults){
return (function (p1__34842_SHARP_){
if(cljs.core.truth_(p1__34842_SHARP_.call(null,topic))){
return p1__34842_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34842_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18082__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t34845 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34845 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta34846){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta34846 = meta34846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34845.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t34845.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t34845.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t34845.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t34845.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t34845.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t34845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34847){
var self__ = this;
var _34847__$1 = this;
return self__.meta34846;
});})(mults,ensure_mult))
;

cljs.core.async.t34845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34847,meta34846__$1){
var self__ = this;
var _34847__$1 = this;
return (new cljs.core.async.t34845(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta34846__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t34845.cljs$lang$type = true;

cljs.core.async.t34845.cljs$lang$ctorStr = "cljs.core.async/t34845";

cljs.core.async.t34845.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t34845");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t34845 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t34845(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta34846){
return (new cljs.core.async.t34845(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta34846));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t34845(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20705__auto___34968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___34968,mults,ensure_mult,p){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___34968,mults,ensure_mult,p){
return (function (state_34919){
var state_val_34920 = (state_34919[(1)]);
if((state_val_34920 === (7))){
var inst_34915 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34921_34969 = state_34919__$1;
(statearr_34921_34969[(2)] = inst_34915);

(statearr_34921_34969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (20))){
var state_34919__$1 = state_34919;
var statearr_34922_34970 = state_34919__$1;
(statearr_34922_34970[(2)] = null);

(statearr_34922_34970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (1))){
var state_34919__$1 = state_34919;
var statearr_34923_34971 = state_34919__$1;
(statearr_34923_34971[(2)] = null);

(statearr_34923_34971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (24))){
var inst_34898 = (state_34919[(7)]);
var inst_34907 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34898);
var state_34919__$1 = state_34919;
var statearr_34924_34972 = state_34919__$1;
(statearr_34924_34972[(2)] = inst_34907);

(statearr_34924_34972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (4))){
var inst_34850 = (state_34919[(8)]);
var inst_34850__$1 = (state_34919[(2)]);
var inst_34851 = (inst_34850__$1 == null);
var state_34919__$1 = (function (){var statearr_34925 = state_34919;
(statearr_34925[(8)] = inst_34850__$1);

return statearr_34925;
})();
if(cljs.core.truth_(inst_34851)){
var statearr_34926_34973 = state_34919__$1;
(statearr_34926_34973[(1)] = (5));

} else {
var statearr_34927_34974 = state_34919__$1;
(statearr_34927_34974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (15))){
var inst_34892 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34928_34975 = state_34919__$1;
(statearr_34928_34975[(2)] = inst_34892);

(statearr_34928_34975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (21))){
var inst_34912 = (state_34919[(2)]);
var state_34919__$1 = (function (){var statearr_34929 = state_34919;
(statearr_34929[(9)] = inst_34912);

return statearr_34929;
})();
var statearr_34930_34976 = state_34919__$1;
(statearr_34930_34976[(2)] = null);

(statearr_34930_34976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (13))){
var inst_34874 = (state_34919[(10)]);
var inst_34876 = cljs.core.chunked_seq_QMARK_.call(null,inst_34874);
var state_34919__$1 = state_34919;
if(inst_34876){
var statearr_34931_34977 = state_34919__$1;
(statearr_34931_34977[(1)] = (16));

} else {
var statearr_34932_34978 = state_34919__$1;
(statearr_34932_34978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (22))){
var inst_34904 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
if(cljs.core.truth_(inst_34904)){
var statearr_34933_34979 = state_34919__$1;
(statearr_34933_34979[(1)] = (23));

} else {
var statearr_34934_34980 = state_34919__$1;
(statearr_34934_34980[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (6))){
var inst_34898 = (state_34919[(7)]);
var inst_34900 = (state_34919[(11)]);
var inst_34850 = (state_34919[(8)]);
var inst_34898__$1 = topic_fn.call(null,inst_34850);
var inst_34899 = cljs.core.deref.call(null,mults);
var inst_34900__$1 = cljs.core.get.call(null,inst_34899,inst_34898__$1);
var state_34919__$1 = (function (){var statearr_34935 = state_34919;
(statearr_34935[(7)] = inst_34898__$1);

(statearr_34935[(11)] = inst_34900__$1);

return statearr_34935;
})();
if(cljs.core.truth_(inst_34900__$1)){
var statearr_34936_34981 = state_34919__$1;
(statearr_34936_34981[(1)] = (19));

} else {
var statearr_34937_34982 = state_34919__$1;
(statearr_34937_34982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (25))){
var inst_34909 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34938_34983 = state_34919__$1;
(statearr_34938_34983[(2)] = inst_34909);

(statearr_34938_34983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (17))){
var inst_34874 = (state_34919[(10)]);
var inst_34883 = cljs.core.first.call(null,inst_34874);
var inst_34884 = cljs.core.async.muxch_STAR_.call(null,inst_34883);
var inst_34885 = cljs.core.async.close_BANG_.call(null,inst_34884);
var inst_34886 = cljs.core.next.call(null,inst_34874);
var inst_34860 = inst_34886;
var inst_34861 = null;
var inst_34862 = (0);
var inst_34863 = (0);
var state_34919__$1 = (function (){var statearr_34939 = state_34919;
(statearr_34939[(12)] = inst_34863);

(statearr_34939[(13)] = inst_34885);

(statearr_34939[(14)] = inst_34862);

(statearr_34939[(15)] = inst_34861);

(statearr_34939[(16)] = inst_34860);

return statearr_34939;
})();
var statearr_34940_34984 = state_34919__$1;
(statearr_34940_34984[(2)] = null);

(statearr_34940_34984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (3))){
var inst_34917 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34919__$1,inst_34917);
} else {
if((state_val_34920 === (12))){
var inst_34894 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34941_34985 = state_34919__$1;
(statearr_34941_34985[(2)] = inst_34894);

(statearr_34941_34985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (2))){
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34919__$1,(4),ch);
} else {
if((state_val_34920 === (23))){
var state_34919__$1 = state_34919;
var statearr_34942_34986 = state_34919__$1;
(statearr_34942_34986[(2)] = null);

(statearr_34942_34986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (19))){
var inst_34900 = (state_34919[(11)]);
var inst_34850 = (state_34919[(8)]);
var inst_34902 = cljs.core.async.muxch_STAR_.call(null,inst_34900);
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34919__$1,(22),inst_34902,inst_34850);
} else {
if((state_val_34920 === (11))){
var inst_34874 = (state_34919[(10)]);
var inst_34860 = (state_34919[(16)]);
var inst_34874__$1 = cljs.core.seq.call(null,inst_34860);
var state_34919__$1 = (function (){var statearr_34943 = state_34919;
(statearr_34943[(10)] = inst_34874__$1);

return statearr_34943;
})();
if(inst_34874__$1){
var statearr_34944_34987 = state_34919__$1;
(statearr_34944_34987[(1)] = (13));

} else {
var statearr_34945_34988 = state_34919__$1;
(statearr_34945_34988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (9))){
var inst_34896 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34946_34989 = state_34919__$1;
(statearr_34946_34989[(2)] = inst_34896);

(statearr_34946_34989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (5))){
var inst_34857 = cljs.core.deref.call(null,mults);
var inst_34858 = cljs.core.vals.call(null,inst_34857);
var inst_34859 = cljs.core.seq.call(null,inst_34858);
var inst_34860 = inst_34859;
var inst_34861 = null;
var inst_34862 = (0);
var inst_34863 = (0);
var state_34919__$1 = (function (){var statearr_34947 = state_34919;
(statearr_34947[(12)] = inst_34863);

(statearr_34947[(14)] = inst_34862);

(statearr_34947[(15)] = inst_34861);

(statearr_34947[(16)] = inst_34860);

return statearr_34947;
})();
var statearr_34948_34990 = state_34919__$1;
(statearr_34948_34990[(2)] = null);

(statearr_34948_34990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (14))){
var state_34919__$1 = state_34919;
var statearr_34952_34991 = state_34919__$1;
(statearr_34952_34991[(2)] = null);

(statearr_34952_34991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (16))){
var inst_34874 = (state_34919[(10)]);
var inst_34878 = cljs.core.chunk_first.call(null,inst_34874);
var inst_34879 = cljs.core.chunk_rest.call(null,inst_34874);
var inst_34880 = cljs.core.count.call(null,inst_34878);
var inst_34860 = inst_34879;
var inst_34861 = inst_34878;
var inst_34862 = inst_34880;
var inst_34863 = (0);
var state_34919__$1 = (function (){var statearr_34953 = state_34919;
(statearr_34953[(12)] = inst_34863);

(statearr_34953[(14)] = inst_34862);

(statearr_34953[(15)] = inst_34861);

(statearr_34953[(16)] = inst_34860);

return statearr_34953;
})();
var statearr_34954_34992 = state_34919__$1;
(statearr_34954_34992[(2)] = null);

(statearr_34954_34992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (10))){
var inst_34863 = (state_34919[(12)]);
var inst_34862 = (state_34919[(14)]);
var inst_34861 = (state_34919[(15)]);
var inst_34860 = (state_34919[(16)]);
var inst_34868 = cljs.core._nth.call(null,inst_34861,inst_34863);
var inst_34869 = cljs.core.async.muxch_STAR_.call(null,inst_34868);
var inst_34870 = cljs.core.async.close_BANG_.call(null,inst_34869);
var inst_34871 = (inst_34863 + (1));
var tmp34949 = inst_34862;
var tmp34950 = inst_34861;
var tmp34951 = inst_34860;
var inst_34860__$1 = tmp34951;
var inst_34861__$1 = tmp34950;
var inst_34862__$1 = tmp34949;
var inst_34863__$1 = inst_34871;
var state_34919__$1 = (function (){var statearr_34955 = state_34919;
(statearr_34955[(12)] = inst_34863__$1);

(statearr_34955[(14)] = inst_34862__$1);

(statearr_34955[(17)] = inst_34870);

(statearr_34955[(15)] = inst_34861__$1);

(statearr_34955[(16)] = inst_34860__$1);

return statearr_34955;
})();
var statearr_34956_34993 = state_34919__$1;
(statearr_34956_34993[(2)] = null);

(statearr_34956_34993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (18))){
var inst_34889 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34957_34994 = state_34919__$1;
(statearr_34957_34994[(2)] = inst_34889);

(statearr_34957_34994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (8))){
var inst_34863 = (state_34919[(12)]);
var inst_34862 = (state_34919[(14)]);
var inst_34865 = (inst_34863 < inst_34862);
var inst_34866 = inst_34865;
var state_34919__$1 = state_34919;
if(cljs.core.truth_(inst_34866)){
var statearr_34958_34995 = state_34919__$1;
(statearr_34958_34995[(1)] = (10));

} else {
var statearr_34959_34996 = state_34919__$1;
(statearr_34959_34996[(1)] = (11));

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
});})(c__20705__auto___34968,mults,ensure_mult,p))
;
return ((function (switch__20684__auto__,c__20705__auto___34968,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_34963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34963[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_34963[(1)] = (1));

return statearr_34963;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_34919){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_34919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e34964){if((e34964 instanceof Object)){
var ex__20688__auto__ = e34964;
var statearr_34965_34997 = state_34919;
(statearr_34965_34997[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34998 = state_34919;
state_34919 = G__34998;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_34919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_34919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___34968,mults,ensure_mult,p))
})();
var state__20707__auto__ = (function (){var statearr_34966 = f__20706__auto__.call(null);
(statearr_34966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___34968);

return statearr_34966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___34968,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__35000 = arguments.length;
switch (G__35000) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__35003 = arguments.length;
switch (G__35003) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__35006 = arguments.length;
switch (G__35006) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__20705__auto___35076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___35076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___35076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35045){
var state_val_35046 = (state_35045[(1)]);
if((state_val_35046 === (7))){
var state_35045__$1 = state_35045;
var statearr_35047_35077 = state_35045__$1;
(statearr_35047_35077[(2)] = null);

(statearr_35047_35077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (1))){
var state_35045__$1 = state_35045;
var statearr_35048_35078 = state_35045__$1;
(statearr_35048_35078[(2)] = null);

(statearr_35048_35078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (4))){
var inst_35009 = (state_35045[(7)]);
var inst_35011 = (inst_35009 < cnt);
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_35011)){
var statearr_35049_35079 = state_35045__$1;
(statearr_35049_35079[(1)] = (6));

} else {
var statearr_35050_35080 = state_35045__$1;
(statearr_35050_35080[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (15))){
var inst_35041 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35051_35081 = state_35045__$1;
(statearr_35051_35081[(2)] = inst_35041);

(statearr_35051_35081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (13))){
var inst_35034 = cljs.core.async.close_BANG_.call(null,out);
var state_35045__$1 = state_35045;
var statearr_35052_35082 = state_35045__$1;
(statearr_35052_35082[(2)] = inst_35034);

(statearr_35052_35082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (6))){
var state_35045__$1 = state_35045;
var statearr_35053_35083 = state_35045__$1;
(statearr_35053_35083[(2)] = null);

(statearr_35053_35083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (3))){
var inst_35043 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35045__$1,inst_35043);
} else {
if((state_val_35046 === (12))){
var inst_35031 = (state_35045[(8)]);
var inst_35031__$1 = (state_35045[(2)]);
var inst_35032 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35031__$1);
var state_35045__$1 = (function (){var statearr_35054 = state_35045;
(statearr_35054[(8)] = inst_35031__$1);

return statearr_35054;
})();
if(cljs.core.truth_(inst_35032)){
var statearr_35055_35084 = state_35045__$1;
(statearr_35055_35084[(1)] = (13));

} else {
var statearr_35056_35085 = state_35045__$1;
(statearr_35056_35085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (2))){
var inst_35008 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35009 = (0);
var state_35045__$1 = (function (){var statearr_35057 = state_35045;
(statearr_35057[(9)] = inst_35008);

(statearr_35057[(7)] = inst_35009);

return statearr_35057;
})();
var statearr_35058_35086 = state_35045__$1;
(statearr_35058_35086[(2)] = null);

(statearr_35058_35086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (11))){
var inst_35009 = (state_35045[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35045,(10),Object,null,(9));
var inst_35018 = chs__$1.call(null,inst_35009);
var inst_35019 = done.call(null,inst_35009);
var inst_35020 = cljs.core.async.take_BANG_.call(null,inst_35018,inst_35019);
var state_35045__$1 = state_35045;
var statearr_35059_35087 = state_35045__$1;
(statearr_35059_35087[(2)] = inst_35020);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (9))){
var inst_35009 = (state_35045[(7)]);
var inst_35022 = (state_35045[(2)]);
var inst_35023 = (inst_35009 + (1));
var inst_35009__$1 = inst_35023;
var state_35045__$1 = (function (){var statearr_35060 = state_35045;
(statearr_35060[(7)] = inst_35009__$1);

(statearr_35060[(10)] = inst_35022);

return statearr_35060;
})();
var statearr_35061_35088 = state_35045__$1;
(statearr_35061_35088[(2)] = null);

(statearr_35061_35088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (5))){
var inst_35029 = (state_35045[(2)]);
var state_35045__$1 = (function (){var statearr_35062 = state_35045;
(statearr_35062[(11)] = inst_35029);

return statearr_35062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35045__$1,(12),dchan);
} else {
if((state_val_35046 === (14))){
var inst_35031 = (state_35045[(8)]);
var inst_35036 = cljs.core.apply.call(null,f,inst_35031);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35045__$1,(16),out,inst_35036);
} else {
if((state_val_35046 === (16))){
var inst_35038 = (state_35045[(2)]);
var state_35045__$1 = (function (){var statearr_35063 = state_35045;
(statearr_35063[(12)] = inst_35038);

return statearr_35063;
})();
var statearr_35064_35089 = state_35045__$1;
(statearr_35064_35089[(2)] = null);

(statearr_35064_35089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (10))){
var inst_35013 = (state_35045[(2)]);
var inst_35014 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35045__$1 = (function (){var statearr_35065 = state_35045;
(statearr_35065[(13)] = inst_35013);

return statearr_35065;
})();
var statearr_35066_35090 = state_35045__$1;
(statearr_35066_35090[(2)] = inst_35014);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (8))){
var inst_35027 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35067_35091 = state_35045__$1;
(statearr_35067_35091[(2)] = inst_35027);

(statearr_35067_35091[(1)] = (5));


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
});})(c__20705__auto___35076,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20684__auto__,c__20705__auto___35076,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_35071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35071[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_35071[(1)] = (1));

return statearr_35071;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_35045){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35072){if((e35072 instanceof Object)){
var ex__20688__auto__ = e35072;
var statearr_35073_35092 = state_35045;
(statearr_35073_35092[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35093 = state_35045;
state_35045 = G__35093;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_35045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_35045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___35076,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20707__auto__ = (function (){var statearr_35074 = f__20706__auto__.call(null);
(statearr_35074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___35076);

return statearr_35074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___35076,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__35096 = arguments.length;
switch (G__35096) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20705__auto___35151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___35151,out){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___35151,out){
return (function (state_35126){
var state_val_35127 = (state_35126[(1)]);
if((state_val_35127 === (7))){
var inst_35106 = (state_35126[(7)]);
var inst_35105 = (state_35126[(8)]);
var inst_35105__$1 = (state_35126[(2)]);
var inst_35106__$1 = cljs.core.nth.call(null,inst_35105__$1,(0),null);
var inst_35107 = cljs.core.nth.call(null,inst_35105__$1,(1),null);
var inst_35108 = (inst_35106__$1 == null);
var state_35126__$1 = (function (){var statearr_35128 = state_35126;
(statearr_35128[(9)] = inst_35107);

(statearr_35128[(7)] = inst_35106__$1);

(statearr_35128[(8)] = inst_35105__$1);

return statearr_35128;
})();
if(cljs.core.truth_(inst_35108)){
var statearr_35129_35152 = state_35126__$1;
(statearr_35129_35152[(1)] = (8));

} else {
var statearr_35130_35153 = state_35126__$1;
(statearr_35130_35153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (1))){
var inst_35097 = cljs.core.vec.call(null,chs);
var inst_35098 = inst_35097;
var state_35126__$1 = (function (){var statearr_35131 = state_35126;
(statearr_35131[(10)] = inst_35098);

return statearr_35131;
})();
var statearr_35132_35154 = state_35126__$1;
(statearr_35132_35154[(2)] = null);

(statearr_35132_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (4))){
var inst_35098 = (state_35126[(10)]);
var state_35126__$1 = state_35126;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35126__$1,(7),inst_35098);
} else {
if((state_val_35127 === (6))){
var inst_35122 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35133_35155 = state_35126__$1;
(statearr_35133_35155[(2)] = inst_35122);

(statearr_35133_35155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (3))){
var inst_35124 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35126__$1,inst_35124);
} else {
if((state_val_35127 === (2))){
var inst_35098 = (state_35126[(10)]);
var inst_35100 = cljs.core.count.call(null,inst_35098);
var inst_35101 = (inst_35100 > (0));
var state_35126__$1 = state_35126;
if(cljs.core.truth_(inst_35101)){
var statearr_35135_35156 = state_35126__$1;
(statearr_35135_35156[(1)] = (4));

} else {
var statearr_35136_35157 = state_35126__$1;
(statearr_35136_35157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (11))){
var inst_35098 = (state_35126[(10)]);
var inst_35115 = (state_35126[(2)]);
var tmp35134 = inst_35098;
var inst_35098__$1 = tmp35134;
var state_35126__$1 = (function (){var statearr_35137 = state_35126;
(statearr_35137[(11)] = inst_35115);

(statearr_35137[(10)] = inst_35098__$1);

return statearr_35137;
})();
var statearr_35138_35158 = state_35126__$1;
(statearr_35138_35158[(2)] = null);

(statearr_35138_35158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (9))){
var inst_35106 = (state_35126[(7)]);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35126__$1,(11),out,inst_35106);
} else {
if((state_val_35127 === (5))){
var inst_35120 = cljs.core.async.close_BANG_.call(null,out);
var state_35126__$1 = state_35126;
var statearr_35139_35159 = state_35126__$1;
(statearr_35139_35159[(2)] = inst_35120);

(statearr_35139_35159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (10))){
var inst_35118 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35140_35160 = state_35126__$1;
(statearr_35140_35160[(2)] = inst_35118);

(statearr_35140_35160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (8))){
var inst_35107 = (state_35126[(9)]);
var inst_35098 = (state_35126[(10)]);
var inst_35106 = (state_35126[(7)]);
var inst_35105 = (state_35126[(8)]);
var inst_35110 = (function (){var c = inst_35107;
var v = inst_35106;
var vec__35103 = inst_35105;
var cs = inst_35098;
return ((function (c,v,vec__35103,cs,inst_35107,inst_35098,inst_35106,inst_35105,state_val_35127,c__20705__auto___35151,out){
return (function (p1__35094_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35094_SHARP_);
});
;})(c,v,vec__35103,cs,inst_35107,inst_35098,inst_35106,inst_35105,state_val_35127,c__20705__auto___35151,out))
})();
var inst_35111 = cljs.core.filterv.call(null,inst_35110,inst_35098);
var inst_35098__$1 = inst_35111;
var state_35126__$1 = (function (){var statearr_35141 = state_35126;
(statearr_35141[(10)] = inst_35098__$1);

return statearr_35141;
})();
var statearr_35142_35161 = state_35126__$1;
(statearr_35142_35161[(2)] = null);

(statearr_35142_35161[(1)] = (2));


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
});})(c__20705__auto___35151,out))
;
return ((function (switch__20684__auto__,c__20705__auto___35151,out){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_35146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35146[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_35146[(1)] = (1));

return statearr_35146;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_35126){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35147){if((e35147 instanceof Object)){
var ex__20688__auto__ = e35147;
var statearr_35148_35162 = state_35126;
(statearr_35148_35162[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35163 = state_35126;
state_35126 = G__35163;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_35126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_35126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___35151,out))
})();
var state__20707__auto__ = (function (){var statearr_35149 = f__20706__auto__.call(null);
(statearr_35149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___35151);

return statearr_35149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___35151,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__35165 = arguments.length;
switch (G__35165) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20705__auto___35213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___35213,out){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___35213,out){
return (function (state_35189){
var state_val_35190 = (state_35189[(1)]);
if((state_val_35190 === (7))){
var inst_35171 = (state_35189[(7)]);
var inst_35171__$1 = (state_35189[(2)]);
var inst_35172 = (inst_35171__$1 == null);
var inst_35173 = cljs.core.not.call(null,inst_35172);
var state_35189__$1 = (function (){var statearr_35191 = state_35189;
(statearr_35191[(7)] = inst_35171__$1);

return statearr_35191;
})();
if(inst_35173){
var statearr_35192_35214 = state_35189__$1;
(statearr_35192_35214[(1)] = (8));

} else {
var statearr_35193_35215 = state_35189__$1;
(statearr_35193_35215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (1))){
var inst_35166 = (0);
var state_35189__$1 = (function (){var statearr_35194 = state_35189;
(statearr_35194[(8)] = inst_35166);

return statearr_35194;
})();
var statearr_35195_35216 = state_35189__$1;
(statearr_35195_35216[(2)] = null);

(statearr_35195_35216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (4))){
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35189__$1,(7),ch);
} else {
if((state_val_35190 === (6))){
var inst_35184 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35196_35217 = state_35189__$1;
(statearr_35196_35217[(2)] = inst_35184);

(statearr_35196_35217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (3))){
var inst_35186 = (state_35189[(2)]);
var inst_35187 = cljs.core.async.close_BANG_.call(null,out);
var state_35189__$1 = (function (){var statearr_35197 = state_35189;
(statearr_35197[(9)] = inst_35186);

return statearr_35197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35189__$1,inst_35187);
} else {
if((state_val_35190 === (2))){
var inst_35166 = (state_35189[(8)]);
var inst_35168 = (inst_35166 < n);
var state_35189__$1 = state_35189;
if(cljs.core.truth_(inst_35168)){
var statearr_35198_35218 = state_35189__$1;
(statearr_35198_35218[(1)] = (4));

} else {
var statearr_35199_35219 = state_35189__$1;
(statearr_35199_35219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (11))){
var inst_35166 = (state_35189[(8)]);
var inst_35176 = (state_35189[(2)]);
var inst_35177 = (inst_35166 + (1));
var inst_35166__$1 = inst_35177;
var state_35189__$1 = (function (){var statearr_35200 = state_35189;
(statearr_35200[(8)] = inst_35166__$1);

(statearr_35200[(10)] = inst_35176);

return statearr_35200;
})();
var statearr_35201_35220 = state_35189__$1;
(statearr_35201_35220[(2)] = null);

(statearr_35201_35220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (9))){
var state_35189__$1 = state_35189;
var statearr_35202_35221 = state_35189__$1;
(statearr_35202_35221[(2)] = null);

(statearr_35202_35221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (5))){
var state_35189__$1 = state_35189;
var statearr_35203_35222 = state_35189__$1;
(statearr_35203_35222[(2)] = null);

(statearr_35203_35222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (10))){
var inst_35181 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35204_35223 = state_35189__$1;
(statearr_35204_35223[(2)] = inst_35181);

(statearr_35204_35223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (8))){
var inst_35171 = (state_35189[(7)]);
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35189__$1,(11),out,inst_35171);
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
});})(c__20705__auto___35213,out))
;
return ((function (switch__20684__auto__,c__20705__auto___35213,out){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_35208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35208[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_35208[(1)] = (1));

return statearr_35208;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_35189){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35209){if((e35209 instanceof Object)){
var ex__20688__auto__ = e35209;
var statearr_35210_35224 = state_35189;
(statearr_35210_35224[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35225 = state_35189;
state_35189 = G__35225;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_35189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_35189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___35213,out))
})();
var state__20707__auto__ = (function (){var statearr_35211 = f__20706__auto__.call(null);
(statearr_35211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___35213);

return statearr_35211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___35213,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t35233 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35233 = (function (ch,f,map_LT_,meta35234){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35234 = meta35234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35233.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t35233.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t35236 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35236 = (function (fn1,_,meta35234,map_LT_,f,ch,meta35237){
this.fn1 = fn1;
this._ = _;
this.meta35234 = meta35234;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35237 = meta35237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35236.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t35236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35226_SHARP_){
return f1.call(null,(((p1__35226_SHARP_ == null))?null:self__.f.call(null,p1__35226_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35238){
var self__ = this;
var _35238__$1 = this;
return self__.meta35237;
});})(___$1))
;

cljs.core.async.t35236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35238,meta35237__$1){
var self__ = this;
var _35238__$1 = this;
return (new cljs.core.async.t35236(self__.fn1,self__._,self__.meta35234,self__.map_LT_,self__.f,self__.ch,meta35237__$1));
});})(___$1))
;

cljs.core.async.t35236.cljs$lang$type = true;

cljs.core.async.t35236.cljs$lang$ctorStr = "cljs.core.async/t35236";

cljs.core.async.t35236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t35236");
});})(___$1))
;

cljs.core.async.__GT_t35236 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t35236(fn1__$1,___$2,meta35234__$1,map_LT___$1,f__$1,ch__$1,meta35237){
return (new cljs.core.async.t35236(fn1__$1,___$2,meta35234__$1,map_LT___$1,f__$1,ch__$1,meta35237));
});})(___$1))
;

}

return (new cljs.core.async.t35236(fn1,___$1,self__.meta35234,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18070__auto__ = ret;
if(cljs.core.truth_(and__18070__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18070__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t35233.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35235){
var self__ = this;
var _35235__$1 = this;
return self__.meta35234;
});

cljs.core.async.t35233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35235,meta35234__$1){
var self__ = this;
var _35235__$1 = this;
return (new cljs.core.async.t35233(self__.ch,self__.f,self__.map_LT_,meta35234__$1));
});

cljs.core.async.t35233.cljs$lang$type = true;

cljs.core.async.t35233.cljs$lang$ctorStr = "cljs.core.async/t35233";

cljs.core.async.t35233.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t35233");
});

cljs.core.async.__GT_t35233 = (function cljs$core$async$map_LT__$___GT_t35233(ch__$1,f__$1,map_LT___$1,meta35234){
return (new cljs.core.async.t35233(ch__$1,f__$1,map_LT___$1,meta35234));
});

}

return (new cljs.core.async.t35233(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t35242 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35242 = (function (ch,f,map_GT_,meta35243){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35243 = meta35243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t35242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35242.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35244){
var self__ = this;
var _35244__$1 = this;
return self__.meta35243;
});

cljs.core.async.t35242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35244,meta35243__$1){
var self__ = this;
var _35244__$1 = this;
return (new cljs.core.async.t35242(self__.ch,self__.f,self__.map_GT_,meta35243__$1));
});

cljs.core.async.t35242.cljs$lang$type = true;

cljs.core.async.t35242.cljs$lang$ctorStr = "cljs.core.async/t35242";

cljs.core.async.t35242.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t35242");
});

cljs.core.async.__GT_t35242 = (function cljs$core$async$map_GT__$___GT_t35242(ch__$1,f__$1,map_GT___$1,meta35243){
return (new cljs.core.async.t35242(ch__$1,f__$1,map_GT___$1,meta35243));
});

}

return (new cljs.core.async.t35242(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t35248 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35248 = (function (ch,p,filter_GT_,meta35249){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35249 = meta35249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35248.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t35248.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35248.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35250){
var self__ = this;
var _35250__$1 = this;
return self__.meta35249;
});

cljs.core.async.t35248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35250,meta35249__$1){
var self__ = this;
var _35250__$1 = this;
return (new cljs.core.async.t35248(self__.ch,self__.p,self__.filter_GT_,meta35249__$1));
});

cljs.core.async.t35248.cljs$lang$type = true;

cljs.core.async.t35248.cljs$lang$ctorStr = "cljs.core.async/t35248";

cljs.core.async.t35248.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"cljs.core.async/t35248");
});

cljs.core.async.__GT_t35248 = (function cljs$core$async$filter_GT__$___GT_t35248(ch__$1,p__$1,filter_GT___$1,meta35249){
return (new cljs.core.async.t35248(ch__$1,p__$1,filter_GT___$1,meta35249));
});

}

return (new cljs.core.async.t35248(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__35252 = arguments.length;
switch (G__35252) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20705__auto___35295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___35295,out){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___35295,out){
return (function (state_35273){
var state_val_35274 = (state_35273[(1)]);
if((state_val_35274 === (7))){
var inst_35269 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35275_35296 = state_35273__$1;
(statearr_35275_35296[(2)] = inst_35269);

(statearr_35275_35296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (1))){
var state_35273__$1 = state_35273;
var statearr_35276_35297 = state_35273__$1;
(statearr_35276_35297[(2)] = null);

(statearr_35276_35297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (4))){
var inst_35255 = (state_35273[(7)]);
var inst_35255__$1 = (state_35273[(2)]);
var inst_35256 = (inst_35255__$1 == null);
var state_35273__$1 = (function (){var statearr_35277 = state_35273;
(statearr_35277[(7)] = inst_35255__$1);

return statearr_35277;
})();
if(cljs.core.truth_(inst_35256)){
var statearr_35278_35298 = state_35273__$1;
(statearr_35278_35298[(1)] = (5));

} else {
var statearr_35279_35299 = state_35273__$1;
(statearr_35279_35299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (6))){
var inst_35255 = (state_35273[(7)]);
var inst_35260 = p.call(null,inst_35255);
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35260)){
var statearr_35280_35300 = state_35273__$1;
(statearr_35280_35300[(1)] = (8));

} else {
var statearr_35281_35301 = state_35273__$1;
(statearr_35281_35301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (3))){
var inst_35271 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35273__$1,inst_35271);
} else {
if((state_val_35274 === (2))){
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35273__$1,(4),ch);
} else {
if((state_val_35274 === (11))){
var inst_35263 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35282_35302 = state_35273__$1;
(statearr_35282_35302[(2)] = inst_35263);

(statearr_35282_35302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (9))){
var state_35273__$1 = state_35273;
var statearr_35283_35303 = state_35273__$1;
(statearr_35283_35303[(2)] = null);

(statearr_35283_35303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (5))){
var inst_35258 = cljs.core.async.close_BANG_.call(null,out);
var state_35273__$1 = state_35273;
var statearr_35284_35304 = state_35273__$1;
(statearr_35284_35304[(2)] = inst_35258);

(statearr_35284_35304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (10))){
var inst_35266 = (state_35273[(2)]);
var state_35273__$1 = (function (){var statearr_35285 = state_35273;
(statearr_35285[(8)] = inst_35266);

return statearr_35285;
})();
var statearr_35286_35305 = state_35273__$1;
(statearr_35286_35305[(2)] = null);

(statearr_35286_35305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (8))){
var inst_35255 = (state_35273[(7)]);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35273__$1,(11),out,inst_35255);
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
});})(c__20705__auto___35295,out))
;
return ((function (switch__20684__auto__,c__20705__auto___35295,out){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null,null,null];
(statearr_35290[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_35273){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__20688__auto__ = e35291;
var statearr_35292_35306 = state_35273;
(statearr_35292_35306[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35307 = state_35273;
state_35273 = G__35307;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_35273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_35273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___35295,out))
})();
var state__20707__auto__ = (function (){var statearr_35293 = f__20706__auto__.call(null);
(statearr_35293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___35295);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___35295,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__35309 = arguments.length;
switch (G__35309) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__){
return (function (state_35476){
var state_val_35477 = (state_35476[(1)]);
if((state_val_35477 === (7))){
var inst_35472 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35478_35519 = state_35476__$1;
(statearr_35478_35519[(2)] = inst_35472);

(statearr_35478_35519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (20))){
var inst_35442 = (state_35476[(7)]);
var inst_35453 = (state_35476[(2)]);
var inst_35454 = cljs.core.next.call(null,inst_35442);
var inst_35428 = inst_35454;
var inst_35429 = null;
var inst_35430 = (0);
var inst_35431 = (0);
var state_35476__$1 = (function (){var statearr_35479 = state_35476;
(statearr_35479[(8)] = inst_35428);

(statearr_35479[(9)] = inst_35431);

(statearr_35479[(10)] = inst_35430);

(statearr_35479[(11)] = inst_35429);

(statearr_35479[(12)] = inst_35453);

return statearr_35479;
})();
var statearr_35480_35520 = state_35476__$1;
(statearr_35480_35520[(2)] = null);

(statearr_35480_35520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (1))){
var state_35476__$1 = state_35476;
var statearr_35481_35521 = state_35476__$1;
(statearr_35481_35521[(2)] = null);

(statearr_35481_35521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (4))){
var inst_35417 = (state_35476[(13)]);
var inst_35417__$1 = (state_35476[(2)]);
var inst_35418 = (inst_35417__$1 == null);
var state_35476__$1 = (function (){var statearr_35482 = state_35476;
(statearr_35482[(13)] = inst_35417__$1);

return statearr_35482;
})();
if(cljs.core.truth_(inst_35418)){
var statearr_35483_35522 = state_35476__$1;
(statearr_35483_35522[(1)] = (5));

} else {
var statearr_35484_35523 = state_35476__$1;
(statearr_35484_35523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (15))){
var state_35476__$1 = state_35476;
var statearr_35488_35524 = state_35476__$1;
(statearr_35488_35524[(2)] = null);

(statearr_35488_35524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (21))){
var state_35476__$1 = state_35476;
var statearr_35489_35525 = state_35476__$1;
(statearr_35489_35525[(2)] = null);

(statearr_35489_35525[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (13))){
var inst_35428 = (state_35476[(8)]);
var inst_35431 = (state_35476[(9)]);
var inst_35430 = (state_35476[(10)]);
var inst_35429 = (state_35476[(11)]);
var inst_35438 = (state_35476[(2)]);
var inst_35439 = (inst_35431 + (1));
var tmp35485 = inst_35428;
var tmp35486 = inst_35430;
var tmp35487 = inst_35429;
var inst_35428__$1 = tmp35485;
var inst_35429__$1 = tmp35487;
var inst_35430__$1 = tmp35486;
var inst_35431__$1 = inst_35439;
var state_35476__$1 = (function (){var statearr_35490 = state_35476;
(statearr_35490[(8)] = inst_35428__$1);

(statearr_35490[(9)] = inst_35431__$1);

(statearr_35490[(10)] = inst_35430__$1);

(statearr_35490[(11)] = inst_35429__$1);

(statearr_35490[(14)] = inst_35438);

return statearr_35490;
})();
var statearr_35491_35526 = state_35476__$1;
(statearr_35491_35526[(2)] = null);

(statearr_35491_35526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (22))){
var state_35476__$1 = state_35476;
var statearr_35492_35527 = state_35476__$1;
(statearr_35492_35527[(2)] = null);

(statearr_35492_35527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (6))){
var inst_35417 = (state_35476[(13)]);
var inst_35426 = f.call(null,inst_35417);
var inst_35427 = cljs.core.seq.call(null,inst_35426);
var inst_35428 = inst_35427;
var inst_35429 = null;
var inst_35430 = (0);
var inst_35431 = (0);
var state_35476__$1 = (function (){var statearr_35493 = state_35476;
(statearr_35493[(8)] = inst_35428);

(statearr_35493[(9)] = inst_35431);

(statearr_35493[(10)] = inst_35430);

(statearr_35493[(11)] = inst_35429);

return statearr_35493;
})();
var statearr_35494_35528 = state_35476__$1;
(statearr_35494_35528[(2)] = null);

(statearr_35494_35528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (17))){
var inst_35442 = (state_35476[(7)]);
var inst_35446 = cljs.core.chunk_first.call(null,inst_35442);
var inst_35447 = cljs.core.chunk_rest.call(null,inst_35442);
var inst_35448 = cljs.core.count.call(null,inst_35446);
var inst_35428 = inst_35447;
var inst_35429 = inst_35446;
var inst_35430 = inst_35448;
var inst_35431 = (0);
var state_35476__$1 = (function (){var statearr_35495 = state_35476;
(statearr_35495[(8)] = inst_35428);

(statearr_35495[(9)] = inst_35431);

(statearr_35495[(10)] = inst_35430);

(statearr_35495[(11)] = inst_35429);

return statearr_35495;
})();
var statearr_35496_35529 = state_35476__$1;
(statearr_35496_35529[(2)] = null);

(statearr_35496_35529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (3))){
var inst_35474 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35476__$1,inst_35474);
} else {
if((state_val_35477 === (12))){
var inst_35462 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35497_35530 = state_35476__$1;
(statearr_35497_35530[(2)] = inst_35462);

(statearr_35497_35530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (2))){
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35476__$1,(4),in$);
} else {
if((state_val_35477 === (23))){
var inst_35470 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35498_35531 = state_35476__$1;
(statearr_35498_35531[(2)] = inst_35470);

(statearr_35498_35531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (19))){
var inst_35457 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35499_35532 = state_35476__$1;
(statearr_35499_35532[(2)] = inst_35457);

(statearr_35499_35532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (11))){
var inst_35428 = (state_35476[(8)]);
var inst_35442 = (state_35476[(7)]);
var inst_35442__$1 = cljs.core.seq.call(null,inst_35428);
var state_35476__$1 = (function (){var statearr_35500 = state_35476;
(statearr_35500[(7)] = inst_35442__$1);

return statearr_35500;
})();
if(inst_35442__$1){
var statearr_35501_35533 = state_35476__$1;
(statearr_35501_35533[(1)] = (14));

} else {
var statearr_35502_35534 = state_35476__$1;
(statearr_35502_35534[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (9))){
var inst_35464 = (state_35476[(2)]);
var inst_35465 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35476__$1 = (function (){var statearr_35503 = state_35476;
(statearr_35503[(15)] = inst_35464);

return statearr_35503;
})();
if(cljs.core.truth_(inst_35465)){
var statearr_35504_35535 = state_35476__$1;
(statearr_35504_35535[(1)] = (21));

} else {
var statearr_35505_35536 = state_35476__$1;
(statearr_35505_35536[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (5))){
var inst_35420 = cljs.core.async.close_BANG_.call(null,out);
var state_35476__$1 = state_35476;
var statearr_35506_35537 = state_35476__$1;
(statearr_35506_35537[(2)] = inst_35420);

(statearr_35506_35537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (14))){
var inst_35442 = (state_35476[(7)]);
var inst_35444 = cljs.core.chunked_seq_QMARK_.call(null,inst_35442);
var state_35476__$1 = state_35476;
if(inst_35444){
var statearr_35507_35538 = state_35476__$1;
(statearr_35507_35538[(1)] = (17));

} else {
var statearr_35508_35539 = state_35476__$1;
(statearr_35508_35539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (16))){
var inst_35460 = (state_35476[(2)]);
var state_35476__$1 = state_35476;
var statearr_35509_35540 = state_35476__$1;
(statearr_35509_35540[(2)] = inst_35460);

(statearr_35509_35540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35477 === (10))){
var inst_35431 = (state_35476[(9)]);
var inst_35429 = (state_35476[(11)]);
var inst_35436 = cljs.core._nth.call(null,inst_35429,inst_35431);
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35476__$1,(13),out,inst_35436);
} else {
if((state_val_35477 === (18))){
var inst_35442 = (state_35476[(7)]);
var inst_35451 = cljs.core.first.call(null,inst_35442);
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35476__$1,(20),out,inst_35451);
} else {
if((state_val_35477 === (8))){
var inst_35431 = (state_35476[(9)]);
var inst_35430 = (state_35476[(10)]);
var inst_35433 = (inst_35431 < inst_35430);
var inst_35434 = inst_35433;
var state_35476__$1 = state_35476;
if(cljs.core.truth_(inst_35434)){
var statearr_35510_35541 = state_35476__$1;
(statearr_35510_35541[(1)] = (10));

} else {
var statearr_35511_35542 = state_35476__$1;
(statearr_35511_35542[(1)] = (11));

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
});})(c__20705__auto__))
;
return ((function (switch__20684__auto__,c__20705__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20685__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20685__auto____0 = (function (){
var statearr_35515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35515[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20685__auto__);

(statearr_35515[(1)] = (1));

return statearr_35515;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20685__auto____1 = (function (state_35476){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35516){if((e35516 instanceof Object)){
var ex__20688__auto__ = e35516;
var statearr_35517_35543 = state_35476;
(statearr_35517_35543[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35544 = state_35476;
state_35476 = G__35544;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20685__auto__ = function(state_35476){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20685__auto____1.call(this,state_35476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20685__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20685__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__))
})();
var state__20707__auto__ = (function (){var statearr_35518 = f__20706__auto__.call(null);
(statearr_35518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_35518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__))
);

return c__20705__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__35546 = arguments.length;
switch (G__35546) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__35549 = arguments.length;
switch (G__35549) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__35552 = arguments.length;
switch (G__35552) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20705__auto___35602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___35602,out){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___35602,out){
return (function (state_35576){
var state_val_35577 = (state_35576[(1)]);
if((state_val_35577 === (7))){
var inst_35571 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35578_35603 = state_35576__$1;
(statearr_35578_35603[(2)] = inst_35571);

(statearr_35578_35603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (1))){
var inst_35553 = null;
var state_35576__$1 = (function (){var statearr_35579 = state_35576;
(statearr_35579[(7)] = inst_35553);

return statearr_35579;
})();
var statearr_35580_35604 = state_35576__$1;
(statearr_35580_35604[(2)] = null);

(statearr_35580_35604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (4))){
var inst_35556 = (state_35576[(8)]);
var inst_35556__$1 = (state_35576[(2)]);
var inst_35557 = (inst_35556__$1 == null);
var inst_35558 = cljs.core.not.call(null,inst_35557);
var state_35576__$1 = (function (){var statearr_35581 = state_35576;
(statearr_35581[(8)] = inst_35556__$1);

return statearr_35581;
})();
if(inst_35558){
var statearr_35582_35605 = state_35576__$1;
(statearr_35582_35605[(1)] = (5));

} else {
var statearr_35583_35606 = state_35576__$1;
(statearr_35583_35606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (6))){
var state_35576__$1 = state_35576;
var statearr_35584_35607 = state_35576__$1;
(statearr_35584_35607[(2)] = null);

(statearr_35584_35607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (3))){
var inst_35573 = (state_35576[(2)]);
var inst_35574 = cljs.core.async.close_BANG_.call(null,out);
var state_35576__$1 = (function (){var statearr_35585 = state_35576;
(statearr_35585[(9)] = inst_35573);

return statearr_35585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35576__$1,inst_35574);
} else {
if((state_val_35577 === (2))){
var state_35576__$1 = state_35576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35576__$1,(4),ch);
} else {
if((state_val_35577 === (11))){
var inst_35556 = (state_35576[(8)]);
var inst_35565 = (state_35576[(2)]);
var inst_35553 = inst_35556;
var state_35576__$1 = (function (){var statearr_35586 = state_35576;
(statearr_35586[(7)] = inst_35553);

(statearr_35586[(10)] = inst_35565);

return statearr_35586;
})();
var statearr_35587_35608 = state_35576__$1;
(statearr_35587_35608[(2)] = null);

(statearr_35587_35608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (9))){
var inst_35556 = (state_35576[(8)]);
var state_35576__$1 = state_35576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35576__$1,(11),out,inst_35556);
} else {
if((state_val_35577 === (5))){
var inst_35556 = (state_35576[(8)]);
var inst_35553 = (state_35576[(7)]);
var inst_35560 = cljs.core._EQ_.call(null,inst_35556,inst_35553);
var state_35576__$1 = state_35576;
if(inst_35560){
var statearr_35589_35609 = state_35576__$1;
(statearr_35589_35609[(1)] = (8));

} else {
var statearr_35590_35610 = state_35576__$1;
(statearr_35590_35610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (10))){
var inst_35568 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35591_35611 = state_35576__$1;
(statearr_35591_35611[(2)] = inst_35568);

(statearr_35591_35611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (8))){
var inst_35553 = (state_35576[(7)]);
var tmp35588 = inst_35553;
var inst_35553__$1 = tmp35588;
var state_35576__$1 = (function (){var statearr_35592 = state_35576;
(statearr_35592[(7)] = inst_35553__$1);

return statearr_35592;
})();
var statearr_35593_35612 = state_35576__$1;
(statearr_35593_35612[(2)] = null);

(statearr_35593_35612[(1)] = (2));


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
});})(c__20705__auto___35602,out))
;
return ((function (switch__20684__auto__,c__20705__auto___35602,out){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_35597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35597[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_35597[(1)] = (1));

return statearr_35597;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_35576){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35598){if((e35598 instanceof Object)){
var ex__20688__auto__ = e35598;
var statearr_35599_35613 = state_35576;
(statearr_35599_35613[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35614 = state_35576;
state_35576 = G__35614;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_35576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_35576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___35602,out))
})();
var state__20707__auto__ = (function (){var statearr_35600 = f__20706__auto__.call(null);
(statearr_35600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___35602);

return statearr_35600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___35602,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__35616 = arguments.length;
switch (G__35616) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20705__auto___35685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___35685,out){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___35685,out){
return (function (state_35654){
var state_val_35655 = (state_35654[(1)]);
if((state_val_35655 === (7))){
var inst_35650 = (state_35654[(2)]);
var state_35654__$1 = state_35654;
var statearr_35656_35686 = state_35654__$1;
(statearr_35656_35686[(2)] = inst_35650);

(statearr_35656_35686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (1))){
var inst_35617 = (new Array(n));
var inst_35618 = inst_35617;
var inst_35619 = (0);
var state_35654__$1 = (function (){var statearr_35657 = state_35654;
(statearr_35657[(7)] = inst_35618);

(statearr_35657[(8)] = inst_35619);

return statearr_35657;
})();
var statearr_35658_35687 = state_35654__$1;
(statearr_35658_35687[(2)] = null);

(statearr_35658_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (4))){
var inst_35622 = (state_35654[(9)]);
var inst_35622__$1 = (state_35654[(2)]);
var inst_35623 = (inst_35622__$1 == null);
var inst_35624 = cljs.core.not.call(null,inst_35623);
var state_35654__$1 = (function (){var statearr_35659 = state_35654;
(statearr_35659[(9)] = inst_35622__$1);

return statearr_35659;
})();
if(inst_35624){
var statearr_35660_35688 = state_35654__$1;
(statearr_35660_35688[(1)] = (5));

} else {
var statearr_35661_35689 = state_35654__$1;
(statearr_35661_35689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (15))){
var inst_35644 = (state_35654[(2)]);
var state_35654__$1 = state_35654;
var statearr_35662_35690 = state_35654__$1;
(statearr_35662_35690[(2)] = inst_35644);

(statearr_35662_35690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (13))){
var state_35654__$1 = state_35654;
var statearr_35663_35691 = state_35654__$1;
(statearr_35663_35691[(2)] = null);

(statearr_35663_35691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (6))){
var inst_35619 = (state_35654[(8)]);
var inst_35640 = (inst_35619 > (0));
var state_35654__$1 = state_35654;
if(cljs.core.truth_(inst_35640)){
var statearr_35664_35692 = state_35654__$1;
(statearr_35664_35692[(1)] = (12));

} else {
var statearr_35665_35693 = state_35654__$1;
(statearr_35665_35693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (3))){
var inst_35652 = (state_35654[(2)]);
var state_35654__$1 = state_35654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35654__$1,inst_35652);
} else {
if((state_val_35655 === (12))){
var inst_35618 = (state_35654[(7)]);
var inst_35642 = cljs.core.vec.call(null,inst_35618);
var state_35654__$1 = state_35654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35654__$1,(15),out,inst_35642);
} else {
if((state_val_35655 === (2))){
var state_35654__$1 = state_35654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35654__$1,(4),ch);
} else {
if((state_val_35655 === (11))){
var inst_35634 = (state_35654[(2)]);
var inst_35635 = (new Array(n));
var inst_35618 = inst_35635;
var inst_35619 = (0);
var state_35654__$1 = (function (){var statearr_35666 = state_35654;
(statearr_35666[(10)] = inst_35634);

(statearr_35666[(7)] = inst_35618);

(statearr_35666[(8)] = inst_35619);

return statearr_35666;
})();
var statearr_35667_35694 = state_35654__$1;
(statearr_35667_35694[(2)] = null);

(statearr_35667_35694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (9))){
var inst_35618 = (state_35654[(7)]);
var inst_35632 = cljs.core.vec.call(null,inst_35618);
var state_35654__$1 = state_35654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35654__$1,(11),out,inst_35632);
} else {
if((state_val_35655 === (5))){
var inst_35627 = (state_35654[(11)]);
var inst_35618 = (state_35654[(7)]);
var inst_35619 = (state_35654[(8)]);
var inst_35622 = (state_35654[(9)]);
var inst_35626 = (inst_35618[inst_35619] = inst_35622);
var inst_35627__$1 = (inst_35619 + (1));
var inst_35628 = (inst_35627__$1 < n);
var state_35654__$1 = (function (){var statearr_35668 = state_35654;
(statearr_35668[(11)] = inst_35627__$1);

(statearr_35668[(12)] = inst_35626);

return statearr_35668;
})();
if(cljs.core.truth_(inst_35628)){
var statearr_35669_35695 = state_35654__$1;
(statearr_35669_35695[(1)] = (8));

} else {
var statearr_35670_35696 = state_35654__$1;
(statearr_35670_35696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (14))){
var inst_35647 = (state_35654[(2)]);
var inst_35648 = cljs.core.async.close_BANG_.call(null,out);
var state_35654__$1 = (function (){var statearr_35672 = state_35654;
(statearr_35672[(13)] = inst_35647);

return statearr_35672;
})();
var statearr_35673_35697 = state_35654__$1;
(statearr_35673_35697[(2)] = inst_35648);

(statearr_35673_35697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (10))){
var inst_35638 = (state_35654[(2)]);
var state_35654__$1 = state_35654;
var statearr_35674_35698 = state_35654__$1;
(statearr_35674_35698[(2)] = inst_35638);

(statearr_35674_35698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35655 === (8))){
var inst_35627 = (state_35654[(11)]);
var inst_35618 = (state_35654[(7)]);
var tmp35671 = inst_35618;
var inst_35618__$1 = tmp35671;
var inst_35619 = inst_35627;
var state_35654__$1 = (function (){var statearr_35675 = state_35654;
(statearr_35675[(7)] = inst_35618__$1);

(statearr_35675[(8)] = inst_35619);

return statearr_35675;
})();
var statearr_35676_35699 = state_35654__$1;
(statearr_35676_35699[(2)] = null);

(statearr_35676_35699[(1)] = (2));


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
});})(c__20705__auto___35685,out))
;
return ((function (switch__20684__auto__,c__20705__auto___35685,out){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_35680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35680[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_35680[(1)] = (1));

return statearr_35680;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_35654){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35681){if((e35681 instanceof Object)){
var ex__20688__auto__ = e35681;
var statearr_35682_35700 = state_35654;
(statearr_35682_35700[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35701 = state_35654;
state_35654 = G__35701;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_35654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_35654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___35685,out))
})();
var state__20707__auto__ = (function (){var statearr_35683 = f__20706__auto__.call(null);
(statearr_35683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___35685);

return statearr_35683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___35685,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__35703 = arguments.length;
switch (G__35703) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20705__auto___35776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___35776,out){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___35776,out){
return (function (state_35745){
var state_val_35746 = (state_35745[(1)]);
if((state_val_35746 === (7))){
var inst_35741 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35747_35777 = state_35745__$1;
(statearr_35747_35777[(2)] = inst_35741);

(statearr_35747_35777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (1))){
var inst_35704 = [];
var inst_35705 = inst_35704;
var inst_35706 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35745__$1 = (function (){var statearr_35748 = state_35745;
(statearr_35748[(7)] = inst_35706);

(statearr_35748[(8)] = inst_35705);

return statearr_35748;
})();
var statearr_35749_35778 = state_35745__$1;
(statearr_35749_35778[(2)] = null);

(statearr_35749_35778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (4))){
var inst_35709 = (state_35745[(9)]);
var inst_35709__$1 = (state_35745[(2)]);
var inst_35710 = (inst_35709__$1 == null);
var inst_35711 = cljs.core.not.call(null,inst_35710);
var state_35745__$1 = (function (){var statearr_35750 = state_35745;
(statearr_35750[(9)] = inst_35709__$1);

return statearr_35750;
})();
if(inst_35711){
var statearr_35751_35779 = state_35745__$1;
(statearr_35751_35779[(1)] = (5));

} else {
var statearr_35752_35780 = state_35745__$1;
(statearr_35752_35780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (15))){
var inst_35735 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35753_35781 = state_35745__$1;
(statearr_35753_35781[(2)] = inst_35735);

(statearr_35753_35781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (13))){
var state_35745__$1 = state_35745;
var statearr_35754_35782 = state_35745__$1;
(statearr_35754_35782[(2)] = null);

(statearr_35754_35782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (6))){
var inst_35705 = (state_35745[(8)]);
var inst_35730 = inst_35705.length;
var inst_35731 = (inst_35730 > (0));
var state_35745__$1 = state_35745;
if(cljs.core.truth_(inst_35731)){
var statearr_35755_35783 = state_35745__$1;
(statearr_35755_35783[(1)] = (12));

} else {
var statearr_35756_35784 = state_35745__$1;
(statearr_35756_35784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (3))){
var inst_35743 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35745__$1,inst_35743);
} else {
if((state_val_35746 === (12))){
var inst_35705 = (state_35745[(8)]);
var inst_35733 = cljs.core.vec.call(null,inst_35705);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35745__$1,(15),out,inst_35733);
} else {
if((state_val_35746 === (2))){
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35745__$1,(4),ch);
} else {
if((state_val_35746 === (11))){
var inst_35713 = (state_35745[(10)]);
var inst_35709 = (state_35745[(9)]);
var inst_35723 = (state_35745[(2)]);
var inst_35724 = [];
var inst_35725 = inst_35724.push(inst_35709);
var inst_35705 = inst_35724;
var inst_35706 = inst_35713;
var state_35745__$1 = (function (){var statearr_35757 = state_35745;
(statearr_35757[(7)] = inst_35706);

(statearr_35757[(11)] = inst_35723);

(statearr_35757[(8)] = inst_35705);

(statearr_35757[(12)] = inst_35725);

return statearr_35757;
})();
var statearr_35758_35785 = state_35745__$1;
(statearr_35758_35785[(2)] = null);

(statearr_35758_35785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (9))){
var inst_35705 = (state_35745[(8)]);
var inst_35721 = cljs.core.vec.call(null,inst_35705);
var state_35745__$1 = state_35745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35745__$1,(11),out,inst_35721);
} else {
if((state_val_35746 === (5))){
var inst_35706 = (state_35745[(7)]);
var inst_35713 = (state_35745[(10)]);
var inst_35709 = (state_35745[(9)]);
var inst_35713__$1 = f.call(null,inst_35709);
var inst_35714 = cljs.core._EQ_.call(null,inst_35713__$1,inst_35706);
var inst_35715 = cljs.core.keyword_identical_QMARK_.call(null,inst_35706,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35716 = (inst_35714) || (inst_35715);
var state_35745__$1 = (function (){var statearr_35759 = state_35745;
(statearr_35759[(10)] = inst_35713__$1);

return statearr_35759;
})();
if(cljs.core.truth_(inst_35716)){
var statearr_35760_35786 = state_35745__$1;
(statearr_35760_35786[(1)] = (8));

} else {
var statearr_35761_35787 = state_35745__$1;
(statearr_35761_35787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (14))){
var inst_35738 = (state_35745[(2)]);
var inst_35739 = cljs.core.async.close_BANG_.call(null,out);
var state_35745__$1 = (function (){var statearr_35763 = state_35745;
(statearr_35763[(13)] = inst_35738);

return statearr_35763;
})();
var statearr_35764_35788 = state_35745__$1;
(statearr_35764_35788[(2)] = inst_35739);

(statearr_35764_35788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (10))){
var inst_35728 = (state_35745[(2)]);
var state_35745__$1 = state_35745;
var statearr_35765_35789 = state_35745__$1;
(statearr_35765_35789[(2)] = inst_35728);

(statearr_35765_35789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35746 === (8))){
var inst_35713 = (state_35745[(10)]);
var inst_35705 = (state_35745[(8)]);
var inst_35709 = (state_35745[(9)]);
var inst_35718 = inst_35705.push(inst_35709);
var tmp35762 = inst_35705;
var inst_35705__$1 = tmp35762;
var inst_35706 = inst_35713;
var state_35745__$1 = (function (){var statearr_35766 = state_35745;
(statearr_35766[(7)] = inst_35706);

(statearr_35766[(8)] = inst_35705__$1);

(statearr_35766[(14)] = inst_35718);

return statearr_35766;
})();
var statearr_35767_35790 = state_35745__$1;
(statearr_35767_35790[(2)] = null);

(statearr_35767_35790[(1)] = (2));


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
});})(c__20705__auto___35776,out))
;
return ((function (switch__20684__auto__,c__20705__auto___35776,out){
return (function() {
var cljs$core$async$state_machine__20685__auto__ = null;
var cljs$core$async$state_machine__20685__auto____0 = (function (){
var statearr_35771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35771[(0)] = cljs$core$async$state_machine__20685__auto__);

(statearr_35771[(1)] = (1));

return statearr_35771;
});
var cljs$core$async$state_machine__20685__auto____1 = (function (state_35745){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_35745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e35772){if((e35772 instanceof Object)){
var ex__20688__auto__ = e35772;
var statearr_35773_35791 = state_35745;
(statearr_35773_35791[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35792 = state_35745;
state_35745 = G__35792;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
cljs$core$async$state_machine__20685__auto__ = function(state_35745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20685__auto____1.call(this,state_35745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20685__auto____0;
cljs$core$async$state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20685__auto____1;
return cljs$core$async$state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___35776,out))
})();
var state__20707__auto__ = (function (){var statearr_35774 = f__20706__auto__.call(null);
(statearr_35774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___35776);

return statearr_35774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___35776,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1430779900401