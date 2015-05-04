// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cemerick.pprng');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('math.seedrandom');

cemerick.pprng.IRandom = (function (){var obj30913 = {};
return obj30913;
})();

cemerick.pprng._seed = (function cemerick$pprng$_seed(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.cemerick$pprng$IRandom$_seed$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.cemerick$pprng$IRandom$_seed$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (cemerick.pprng._seed[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cemerick.pprng._seed["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-seed",this$);
}
}
})().call(null,this$);
}
});

cemerick.pprng._next_double = (function cemerick$pprng$_next_double(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.cemerick$pprng$IRandom$_next_double$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.cemerick$pprng$IRandom$_next_double$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (cemerick.pprng._next_double[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cemerick.pprng._next_double["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-next-double",this$);
}
}
})().call(null,this$);
}
});

cemerick.pprng._next_float = (function cemerick$pprng$_next_float(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.cemerick$pprng$IRandom$_next_float$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.cemerick$pprng$IRandom$_next_float$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (cemerick.pprng._next_float[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cemerick.pprng._next_float["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-next-float",this$);
}
}
})().call(null,this$);
}
});

cemerick.pprng._next_int = (function cemerick$pprng$_next_int(){
var G__30915 = arguments.length;
switch (G__30915) {
case 1:
return cemerick.pprng._next_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.pprng._next_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cemerick.pprng._next_int.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.cemerick$pprng$IRandom$_next_int$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.cemerick$pprng$IRandom$_next_int$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (cemerick.pprng._next_int[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cemerick.pprng._next_int["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-next-int",this$);
}
}
})().call(null,this$);
}
});

cemerick.pprng._next_int.cljs$core$IFn$_invoke$arity$2 = (function (this$,limit){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.cemerick$pprng$IRandom$_next_int$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.cemerick$pprng$IRandom$_next_int$arity$2(this$,limit);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (cemerick.pprng._next_int[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cemerick.pprng._next_int["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-next-int",this$);
}
}
})().call(null,this$,limit);
}
});

cemerick.pprng._next_int.cljs$lang$maxFixedArity = 2;

cemerick.pprng._next_long = (function cemerick$pprng$_next_long(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.cemerick$pprng$IRandom$_next_long$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.cemerick$pprng$IRandom$_next_long$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (cemerick.pprng._next_long[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cemerick.pprng._next_long["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-next-long",this$);
}
}
})().call(null,this$);
}
});

cemerick.pprng._next_boolean = (function cemerick$pprng$_next_boolean(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.cemerick$pprng$IRandom$_next_boolean$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.cemerick$pprng$IRandom$_next_boolean$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (cemerick.pprng._next_boolean[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (cemerick.pprng._next_boolean["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRandom.-next-boolean",this$);
}
}
})().call(null,this$);
}
});

cemerick.pprng.between = (function cemerick$pprng$between(random,low,high){
return (low + (random.call(null) * (high - low)));
});

/**
* @constructor
* @param {*} seed
* @param {*} random_double
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cemerick.pprng.SeededRandom = (function (seed,random_double,__meta,__extmap,__hash){
this.seed = seed;
this.random_double = random_double;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.pprng.SeededRandom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18677__auto__,k__18678__auto__){
var self__ = this;
var this__18677__auto____$1 = this;
return cljs.core._lookup.call(null,this__18677__auto____$1,k__18678__auto__,null);
});

cemerick.pprng.SeededRandom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18679__auto__,k30918,else__18680__auto__){
var self__ = this;
var this__18679__auto____$1 = this;
var G__30920 = (((k30918 instanceof cljs.core.Keyword))?k30918.fqn:null);
switch (G__30920) {
case "random-double":
return self__.random_double;

break;
case "seed":
return self__.seed;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30918,else__18680__auto__);

}
});

cemerick.pprng.SeededRandom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18691__auto__,writer__18692__auto__,opts__18693__auto__){
var self__ = this;
var this__18691__auto____$1 = this;
var pr_pair__18694__auto__ = ((function (this__18691__auto____$1){
return (function (keyval__18695__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18692__auto__,cljs.core.pr_writer,""," ","",opts__18693__auto__,keyval__18695__auto__);
});})(this__18691__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18692__auto__,pr_pair__18694__auto__,"#cemerick.pprng.SeededRandom{",", ","}",opts__18693__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seed","seed",68613327),self__.seed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"random-double","random-double",-922602767),self__.random_double],null))], null),self__.__extmap));
});

cemerick.pprng.SeededRandom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18675__auto__){
var self__ = this;
var this__18675__auto____$1 = this;
return self__.__meta;
});

cemerick.pprng.SeededRandom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18671__auto__){
var self__ = this;
var this__18671__auto____$1 = this;
return (new cemerick.pprng.SeededRandom(self__.seed,self__.random_double,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.pprng.SeededRandom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18681__auto__){
var self__ = this;
var this__18681__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.pprng.SeededRandom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18672__auto__){
var self__ = this;
var this__18672__auto____$1 = this;
var h__18498__auto__ = self__.__hash;
if(!((h__18498__auto__ == null))){
return h__18498__auto__;
} else {
var h__18498__auto____$1 = cljs.core.hash_imap.call(null,this__18672__auto____$1);
self__.__hash = h__18498__auto____$1;

return h__18498__auto____$1;
}
});

cemerick.pprng.SeededRandom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18673__auto__,other__18674__auto__){
var self__ = this;
var this__18673__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18070__auto__ = other__18674__auto__;
if(cljs.core.truth_(and__18070__auto__)){
var and__18070__auto____$1 = (this__18673__auto____$1.constructor === other__18674__auto__.constructor);
if(and__18070__auto____$1){
return cljs.core.equiv_map.call(null,this__18673__auto____$1,other__18674__auto__);
} else {
return and__18070__auto____$1;
}
} else {
return and__18070__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.pprng.SeededRandom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18686__auto__,k__18687__auto__){
var self__ = this;
var this__18686__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seed","seed",68613327),null,new cljs.core.Keyword(null,"random-double","random-double",-922602767),null], null), null),k__18687__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18686__auto____$1),self__.__meta),k__18687__auto__);
} else {
return (new cemerick.pprng.SeededRandom(self__.seed,self__.random_double,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18687__auto__)),null));
}
});

cemerick.pprng.SeededRandom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18684__auto__,k__18685__auto__,G__30917){
var self__ = this;
var this__18684__auto____$1 = this;
var pred__30921 = cljs.core.keyword_identical_QMARK_;
var expr__30922 = k__18685__auto__;
if(cljs.core.truth_(pred__30921.call(null,new cljs.core.Keyword(null,"seed","seed",68613327),expr__30922))){
return (new cemerick.pprng.SeededRandom(G__30917,self__.random_double,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30921.call(null,new cljs.core.Keyword(null,"random-double","random-double",-922602767),expr__30922))){
return (new cemerick.pprng.SeededRandom(self__.seed,G__30917,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.pprng.SeededRandom(self__.seed,self__.random_double,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18685__auto__,G__30917),null));
}
}
});

cemerick.pprng.SeededRandom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18689__auto__){
var self__ = this;
var this__18689__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seed","seed",68613327),self__.seed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"random-double","random-double",-922602767),self__.random_double],null))], null),self__.__extmap));
});

cemerick.pprng.SeededRandom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18676__auto__,G__30917){
var self__ = this;
var this__18676__auto____$1 = this;
return (new cemerick.pprng.SeededRandom(self__.seed,self__.random_double,G__30917,self__.__extmap,self__.__hash));
});

cemerick.pprng.SeededRandom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18682__auto__,entry__18683__auto__){
var self__ = this;
var this__18682__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18683__auto__)){
return cljs.core._assoc.call(null,this__18682__auto____$1,cljs.core._nth.call(null,entry__18683__auto__,(0)),cljs.core._nth.call(null,entry__18683__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18682__auto____$1,entry__18683__auto__);
}
});

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$ = true;

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$_seed$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.seed;
});

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$_next_double$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.random_double.call(null);
});

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$_next_float$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cemerick.pprng.between.call(null,self__.random_double,1.4E-45,3.4028235E38);
});

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$_next_int$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.long$.call(null,cemerick.pprng.between.call(null,self__.random_double,(-2147483648),(2147483647)));
});

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$_next_int$arity$2 = (function (this$,limit){
var self__ = this;
var this$__$1 = this;
return cljs.core.long$.call(null,cemerick.pprng.between.call(null,self__.random_double,(0),limit));
});

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$_next_long$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.long$.call(null,cemerick.pprng.between.call(null,self__.random_double,(-9007199254740992),(9007199254740992)));
});

cemerick.pprng.SeededRandom.prototype.cemerick$pprng$IRandom$_next_boolean$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (Math.floor.call(null,((2) * self__.random_double.call(null))) === (0));
});

cemerick.pprng.SeededRandom.cljs$lang$type = true;

cemerick.pprng.SeededRandom.cljs$lang$ctorPrSeq = (function (this__18711__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.pprng/SeededRandom");
});

cemerick.pprng.SeededRandom.cljs$lang$ctorPrWriter = (function (this__18711__auto__,writer__18712__auto__){
return cljs.core._write.call(null,writer__18712__auto__,"cemerick.pprng/SeededRandom");
});

cemerick.pprng.__GT_SeededRandom = (function cemerick$pprng$__GT_SeededRandom(seed,random_double){
return (new cemerick.pprng.SeededRandom(seed,random_double,null,null,null));
});

cemerick.pprng.map__GT_SeededRandom = (function cemerick$pprng$map__GT_SeededRandom(G__30919){
return (new cemerick.pprng.SeededRandom(new cljs.core.Keyword(null,"seed","seed",68613327).cljs$core$IFn$_invoke$arity$1(G__30919),new cljs.core.Keyword(null,"random-double","random-double",-922602767).cljs$core$IFn$_invoke$arity$1(G__30919),null,cljs.core.dissoc.call(null,G__30919,new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"random-double","random-double",-922602767)),null));
});

/**
 * Returns a new random number generator seeded with [seed] that satisfies the
 * `IRandom` protocol.
 */
cemerick.pprng.rng = (function cemerick$pprng$rng(){
var G__30926 = arguments.length;
switch (G__30926) {
case 0:
return cemerick.pprng.rng.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cemerick.pprng.rng.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cemerick.pprng.rng.cljs$core$IFn$_invoke$arity$0 = (function (){
return cemerick.pprng.rng.call(null,(new Date()).getTime());
});

cemerick.pprng.rng.cljs$core$IFn$_invoke$arity$1 = (function (seed){
Math.seedrandom.call(null,seed);

return (new cemerick.pprng.SeededRandom(seed,(function (){
Math.seedrandom.call(null,seed);

return Math.random;
})()
,null,null,null));
});

cemerick.pprng.rng.cljs$lang$maxFixedArity = 1;
/**
 * Returns the seed used to create the given RNG.
 */
cemerick.pprng.seed = (function cemerick$pprng$seed(rng){
return cemerick.pprng._seed.call(null,rng);
});
/**
 * Returns the next double value from the given RNG.
 */
cemerick.pprng.double$ = (function cemerick$pprng$double(rng){
return cemerick.pprng._next_double.call(null,rng);
});
/**
 * Returns the next float value from the given RNG.
 */
cemerick.pprng.float$ = (function cemerick$pprng$float(rng){
return cemerick.pprng._next_float.call(null,rng);
});
/**
 * Returns the next int value from the given RNG.  If supplied a [limit] argument, the range of the returned int will be [0,limit).
 */
cemerick.pprng.int$ = (function cemerick$pprng$int(){
var G__30929 = arguments.length;
switch (G__30929) {
case 1:
return cemerick.pprng.int$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cemerick.pprng.int$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cemerick.pprng.int$.cljs$core$IFn$_invoke$arity$1 = (function (rng){
return cemerick.pprng._next_int.call(null,rng);
});

cemerick.pprng.int$.cljs$core$IFn$_invoke$arity$2 = (function (rng,limit){
return cemerick.pprng._next_int.call(null,rng,limit);
});

cemerick.pprng.int$.cljs$lang$maxFixedArity = 2;
/**
 * Returns the next long value from the given RNG.
 */
cemerick.pprng.long$ = (function cemerick$pprng$long(rng){
return cemerick.pprng._next_long.call(null,rng);
});
/**
 * Returns the next boolean value from the given RNG.
 */
cemerick.pprng.boolean$ = (function cemerick$pprng$boolean(rng){
return cemerick.pprng._next_boolean.call(null,rng);
});

//# sourceMappingURL=pprng.js.map?rel=1430779896926