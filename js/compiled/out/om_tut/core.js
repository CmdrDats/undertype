// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('cemerick.pprng');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
om_tut.core.calculate_cursor = (function om_tut$core$calculate_cursor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(window.innerWidth / (2)),(window.innerHeight - (200))], null);
});
if(typeof om_tut.core.app_state !== 'undefined'){
} else {
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"rand-seed","rand-seed",-1775140458),Math.random.call(null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null),new cljs.core.Keyword(null,"page-size","page-size",223836073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(1200)], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),om_tut.core.calculate_cursor.call(null),new cljs.core.Keyword(null,"tab-stop","tab-stop",-907370296),(10),new cljs.core.Keyword(null,"text-visible","text-visible",1197040832),false,new cljs.core.Keyword(null,"text","text",-1790561697),""], null));
}
om_tut.core.rgen = cemerick.pprng.rng.call(null,(12648430));
if(typeof om_tut.core.letter_profiles !== 'undefined'){
} else {
om_tut.core.letter_profiles = cljs.core.vec.call(null,cljs.core.map.call(null,(function (_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cemerick.pprng.int$.call(null,om_tut.core.rgen,(10)) - (5)),(cemerick.pprng.int$.call(null,om_tut.core.rgen,(3)) - (1)),(cemerick.pprng.double$.call(null,om_tut.core.rgen) / (7)),(cemerick.pprng.int$.call(null,om_tut.core.rgen,(2)) - (1)),((cemerick.pprng.double$.call(null,om_tut.core.rgen) / (4)) + 0.5)], null);
}),cljs.core.range.call(null,(100))));
}
om_tut.core.create_letter = (function om_tut$core$create_letter(l,pos){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,pos,cljs.core.rand_nth.call(null,om_tut.core.letter_profiles)], null);
});
om_tut.core.letter = (function om_tut$core$letter(p__30592){
var vec__30596 = p__30592;
var text = cljs.core.nth.call(null,vec__30596,(0),null);
var vec__30597 = cljs.core.nth.call(null,vec__30596,(1),null);
var x = cljs.core.nth.call(null,vec__30597,(0),null);
var y = cljs.core.nth.call(null,vec__30597,(1),null);
var vec__30598 = cljs.core.nth.call(null,vec__30596,(2),null);
var stop = cljs.core.nth.call(null,vec__30598,(0),null);
var sleft = cljs.core.nth.call(null,vec__30598,(1),null);
var sopacity = cljs.core.nth.call(null,vec__30598,(2),null);
var ltop = cljs.core.nth.call(null,vec__30598,(3),null);
var lopacity = cljs.core.nth.call(null,vec__30598,(4),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"style": {"opacity": sopacity, "left": (x + sleft), "top": (y + stop)}, "className": "letter shadow"},text),React.DOM.span({"style": {"opacity": lopacity, "left": x, "top": (y + ltop)}, "className": "letter"},text)], null);
});
om_tut.core.block_view = (function om_tut$core$block_view(block,owner){
if(typeof om_tut.core.t30602 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30602 = (function (owner,block,block_view,meta30603){
this.owner = owner;
this.block = block;
this.block_view = block_view;
this.meta30603 = meta30603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30602.prototype.om$core$IRender$ = true;

om_tut.core.t30602.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.span,{"className": "block"},cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,om_tut.core.letter,self__.block)));
});

om_tut.core.t30602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30604){
var self__ = this;
var _30604__$1 = this;
return self__.meta30603;
});

om_tut.core.t30602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30604,meta30603__$1){
var self__ = this;
var _30604__$1 = this;
return (new om_tut.core.t30602(self__.owner,self__.block,self__.block_view,meta30603__$1));
});

om_tut.core.t30602.cljs$lang$type = true;

om_tut.core.t30602.cljs$lang$ctorStr = "om-tut.core/t30602";

om_tut.core.t30602.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"om-tut.core/t30602");
});

om_tut.core.__GT_t30602 = (function om_tut$core$block_view_$___GT_t30602(owner__$1,block__$1,block_view__$1,meta30603){
return (new om_tut.core.t30602(owner__$1,block__$1,block_view__$1,meta30603));
});

}

return (new om_tut.core.t30602(owner,block,om_tut$core$block_view,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.page_view = (function om_tut$core$page_view(data,owner){
if(typeof om_tut.core.t30611 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30611 = (function (owner,data,page_view,meta30612){
this.owner = owner;
this.data = data;
this.page_view = page_view;
this.meta30612 = meta30612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30611.prototype.om$core$IRender$ = true;

om_tut.core.t30611.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__30614 = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(self__.data);
var cx = cljs.core.nth.call(null,vec__30614,(0),null);
var cy = cljs.core.nth.call(null,vec__30614,(1),null);
var vec__30615 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(self__.data);
var x = cljs.core.nth.call(null,vec__30615,(0),null);
var y = cljs.core.nth.call(null,vec__30615,(1),null);
var vec__30616 = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(self__.data);
var w = cljs.core.nth.call(null,vec__30616,(0),null);
var h = cljs.core.nth.call(null,vec__30616,(1),null);
return cljs.core.apply.call(null,om.dom.div,{"style": {"height": h, "width": w, "left": (cx - x), "top": (cy - y)}, "id": "page", "className": "page"},om.core.build_all.call(null,om_tut.core.block_view,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

om_tut.core.t30611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30613){
var self__ = this;
var _30613__$1 = this;
return self__.meta30612;
});

om_tut.core.t30611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30613,meta30612__$1){
var self__ = this;
var _30613__$1 = this;
return (new om_tut.core.t30611(self__.owner,self__.data,self__.page_view,meta30612__$1));
});

om_tut.core.t30611.cljs$lang$type = true;

om_tut.core.t30611.cljs$lang$ctorStr = "om-tut.core/t30611";

om_tut.core.t30611.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"om-tut.core/t30611");
});

om_tut.core.__GT_t30611 = (function om_tut$core$page_view_$___GT_t30611(owner__$1,data__$1,page_view__$1,meta30612){
return (new om_tut.core.t30611(owner__$1,data__$1,page_view__$1,meta30612));
});

}

return (new om_tut.core.t30611(owner,data,om_tut$core$page_view,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.copy_all = (function om_tut$core$copy_all(data){
return alert(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(data));
});
om_tut.core.copy_button = (function om_tut$core$copy_button(data,owner){
if(typeof om_tut.core.t30620 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30620 = (function (owner,data,copy_button,meta30621){
this.owner = owner;
this.data = data;
this.copy_button = copy_button;
this.meta30621 = meta30621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30620.prototype.om$core$IRender$ = true;

om_tut.core.t30620.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var v = new cljs.core.Keyword(null,"text-visible","text-visible",1197040832).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div(null,(cljs.core.truth_(v)?om.dom.textarea.call(null,{"style": {"height": (cljs.core.second.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(self__.data)) - (50)), "width": "100%"}},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)):null),React.DOM.button({"style": {"left": (10), "top": (cljs.core.second.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(self__.data)) + (40))}, "onClick": ((function (v,this$__$1){
return (function() { 
var G__30623__delegate = function (e,_){
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"text-visible","text-visible",1197040832),cljs.core.not);

return e.target.blur();
};
var G__30623 = function (e,var_args){
var _ = null;
if (arguments.length > 1) {
var G__30624__i = 0, G__30624__a = new Array(arguments.length -  1);
while (G__30624__i < G__30624__a.length) {G__30624__a[G__30624__i] = arguments[G__30624__i + 1]; ++G__30624__i;}
  _ = new cljs.core.IndexedSeq(G__30624__a,0);
} 
return G__30623__delegate.call(this,e,_);};
G__30623.cljs$lang$maxFixedArity = 1;
G__30623.cljs$lang$applyTo = (function (arglist__30625){
var e = cljs.core.first(arglist__30625);
var _ = cljs.core.rest(arglist__30625);
return G__30623__delegate(e,_);
});
G__30623.cljs$core$IFn$_invoke$arity$variadic = G__30623__delegate;
return G__30623;
})()
;})(v,this$__$1))
, "className": "copybutton"},"Copy"));
});

om_tut.core.t30620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30622){
var self__ = this;
var _30622__$1 = this;
return self__.meta30621;
});

om_tut.core.t30620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30622,meta30621__$1){
var self__ = this;
var _30622__$1 = this;
return (new om_tut.core.t30620(self__.owner,self__.data,self__.copy_button,meta30621__$1));
});

om_tut.core.t30620.cljs$lang$type = true;

om_tut.core.t30620.cljs$lang$ctorStr = "om-tut.core/t30620";

om_tut.core.t30620.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"om-tut.core/t30620");
});

om_tut.core.__GT_t30620 = (function om_tut$core$copy_button_$___GT_t30620(owner__$1,data__$1,copy_button__$1,meta30621){
return (new om_tut.core.t30620(owner__$1,data__$1,copy_button__$1,meta30621));
});

}

return (new om_tut.core.t30620(owner,data,om_tut$core$copy_button,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,(function (data,owner){
if(typeof om_tut.core.t30626 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tut.core.t30626 = (function (owner,data,meta30627){
this.owner = owner;
this.data = data;
this.meta30627 = meta30627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_tut.core.t30626.prototype.om$core$IRenderState$ = true;

om_tut.core.t30626.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var vec__30629 = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(self__.data);
var cx = cljs.core.nth.call(null,vec__30629,(0),null);
var cy = cljs.core.nth.call(null,vec__30629,(1),null);
var vec__30630 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(self__.data);
var px = cljs.core.nth.call(null,vec__30630,(0),null);
var py = cljs.core.nth.call(null,vec__30630,(1),null);
return React.DOM.div(null,React.DOM.div({"className": "logo"},"Undertype/"),React.DOM.div({"style": {"top": (cy - (50))}, "className": "roller"}),React.DOM.div({"style": {"left": (cx - (2)), "top": (cy + (0))}, "id": "cursor", "className": "cursor"}),React.DOM.div({"style": {"left": (new cljs.core.Keyword(null,"tab-stop","tab-stop",-907370296).cljs$core$IFn$_invoke$arity$1(self__.data) + (cx - px)), "top": (cy + (35))}, "id": "tabstop", "className": "tabstop"},"^"),React.DOM.div({"style": {"top": (cy + (30))}, "className": "cover"}),om.core.build.call(null,om_tut.core.copy_button,self__.data),om.core.build.call(null,om_tut.core.page_view,self__.data));
});

om_tut.core.t30626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30628){
var self__ = this;
var _30628__$1 = this;
return self__.meta30627;
});

om_tut.core.t30626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30628,meta30627__$1){
var self__ = this;
var _30628__$1 = this;
return (new om_tut.core.t30626(self__.owner,self__.data,meta30627__$1));
});

om_tut.core.t30626.cljs$lang$type = true;

om_tut.core.t30626.cljs$lang$ctorStr = "om-tut.core/t30626";

om_tut.core.t30626.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"om-tut.core/t30626");
});

om_tut.core.__GT_t30626 = (function om_tut$core$__GT_t30626(owner__$1,data__$1,meta30627){
return (new om_tut.core.t30626(owner__$1,data__$1,meta30627));
});

}

return (new om_tut.core.t30626(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
om_tut.core.on_js_reload = (function om_tut$core$on_js_reload(){
return null;
});
om_tut.core.snd = (function om_tut$core$snd(n){
return (new buzz.sound([cljs.core.str("sounds/"),cljs.core.str(n)].join(''),{"formats": ["wav"]}));
});
om_tut.core.sounds = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.map.call(null,(function (p1__30631_SHARP_){
return om_tut.core.snd.call(null,[cljs.core.str("key-"),cljs.core.str(goog.string.format("%02d",(p1__30631_SHARP_ + (1))))].join(''));
}),cljs.core.range.call(null,(22))),new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tut.core.snd.call(null,"typewriter-return-1")], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.map.call(null,(function (p1__30632_SHARP_){
return om_tut.core.snd.call(null,[cljs.core.str("space-0"),cljs.core.str((p1__30632_SHARP_ + (1)))].join(''));
}),cljs.core.range.call(null,(5))),new cljs.core.Keyword(null,"backspace","backspace",-696007848),cljs.core.map.call(null,(function (p1__30633_SHARP_){
return om_tut.core.snd.call(null,[cljs.core.str("space-0"),cljs.core.str((p1__30633_SHARP_ + (1)))].join(''));
}),cljs.core.range.call(null,(5))),new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tut.core.snd.call(null,"typewriter-forward-1")], null),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tut.core.snd.call(null,"tab")], null),new cljs.core.Keyword(null,"ding","ding",858052816),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tut.core.snd.call(null,"ding")], null)], null);
om_tut.core.play_sound = (function om_tut$core$play_sound(type){
var s = cljs.core.rand_nth.call(null,cljs.core.get.call(null,om_tut.core.sounds,type));
s.stop();

return s.play();
});
om_tut.core.play_key = (function om_tut$core$play_key(keycode){
var G__30635 = keycode;
switch (G__30635) {
case (13):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"return","return",-1891502105));

break;
case (32):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"space","space",348133475));

break;
case (8):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"backspace","backspace",-696007848));

break;
case (9):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"tab","tab",-559583621));

break;
case (38):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"forward","forward",-557345303));

break;
case (40):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"forward","forward",-557345303));

break;
case (37):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"forward","forward",-557345303));

break;
case (39):
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"forward","forward",-557345303));

break;
default:
return om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"key","key",-1516042587));

}
});
om_tut.core.bound = (function om_tut$core$bound(low,x,high){
var x__18394__auto__ = low;
var y__18395__auto__ = (function (){var x__18401__auto__ = high;
var y__18402__auto__ = x;
return ((x__18401__auto__ < y__18402__auto__) ? x__18401__auto__ : y__18402__auto__);
})();
return ((x__18394__auto__ > y__18395__auto__) ? x__18394__auto__ : y__18395__auto__);
});
om_tut.core.move = (function om_tut$core$move(state,dx,dy){
var vec__30639 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var x = cljs.core.nth.call(null,vec__30639,(0),null);
var y = cljs.core.nth.call(null,vec__30639,(1),null);
var vec__30640 = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(state);
var px = cljs.core.nth.call(null,vec__30640,(0),null);
var py = cljs.core.nth.call(null,vec__30640,(1),null);
if(((x > (0))) && (((x / px) < 0.8)) && ((((x + dx) / px) > 0.8))){
om_tut.core.play_sound.call(null,new cljs.core.Keyword(null,"ding","ding",858052816));
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tut.core.bound.call(null,(0),(x + dx),px),om_tut.core.bound.call(null,(0),(y + dy),py)], null));
});
om_tut.core.add_letter = (function om_tut$core$add_letter(p__30641,l){
var map__30644 = p__30641;
var map__30644__$1 = ((cljs.core.seq_QMARK_.call(null,map__30644))?cljs.core.apply.call(null,cljs.core.hash_map,map__30644):map__30644);
var state = map__30644__$1;
var vec__30645 = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__30645,(0),null);
var y = cljs.core.nth.call(null,vec__30645,(1),null);
var text = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var letter = om_tut.core.create_letter.call(null,l,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (12)),y], null));
return cljs.core.update_in.call(null,(((cljs.core.count.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state))) > (250)))?cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [letter], null)):cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),(cljs.core.count.call(null,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(state)) - (1))], null),cljs.core.conj,letter)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),cljs.core.str,l);
});
om_tut.core.keypress_listener = (function om_tut$core$keypress_listener(e){
om_tut.core.play_key.call(null,e.keyCode);

cljs.core.swap_BANG_.call(null,om_tut.core.app_state,om_tut.core.move,(12),(0));

var G__30648 = e.keyCode;
switch (G__30648) {
case (13):
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,((function (G__30648){
return (function (p1__30646_SHARP_){
return cljs.core.update.call(null,om_tut.core.move.call(null,p1__30646_SHARP_,(new cljs.core.Keyword(null,"tab-stop","tab-stop",-907370296).cljs$core$IFn$_invoke$arity$1(p1__30646_SHARP_) - cljs.core.first.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__30646_SHARP_))),(20)),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str,goog.string.format([cljs.core.str("\r\n%"),cljs.core.str(Math.floor.call(null,(new cljs.core.Keyword(null,"tab-stop","tab-stop",-907370296).cljs$core$IFn$_invoke$arity$1(p1__30646_SHARP_) / (12)))),cljs.core.str("s")].join(''),""));
});})(G__30648))
);

break;
default:
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,om_tut.core.add_letter,String.fromCharCode(e.keyCode));

}
});
om_tut.core.set_tabstop = (function om_tut$core$set_tabstop(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"tab-stop","tab-stop",-907370296),cljs.core.first.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state)));
});
om_tut.core.backspace = (function om_tut$core$backspace(p__30651){
var map__30654 = p__30651;
var map__30654__$1 = ((cljs.core.seq_QMARK_.call(null,map__30654))?cljs.core.apply.call(null,cljs.core.hash_map,map__30654):map__30654);
var s = map__30654__$1;
var tab_stop = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"tab-stop","tab-stop",-907370296));
var position = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__30655 = position;
var x = cljs.core.nth.call(null,vec__30655,(0),null);
var y = cljs.core.nth.call(null,vec__30655,(1),null);
if(((x - (12)) < tab_stop)){
return cljs.core.update.call(null,om_tut.core.set_tabstop.call(null,om_tut.core.move.call(null,s,((12) * (-4)),(0))),new cljs.core.Keyword(null,"text","text",-1790561697),((function (vec__30655,x,y,map__30654,map__30654__$1,s,tab_stop,position){
return (function (p1__30650_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(4),p1__30650_SHARP_));
});})(vec__30655,x,y,map__30654,map__30654__$1,s,tab_stop,position))
);
} else {
return om_tut.core.move.call(null,s,(-12),(0));
}
});
om_tut.core.keydown_listener = (function om_tut$core$keydown_listener(e){
var keycode = e.keyCode;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(39),null,(40),null,(9),null,(38),null,(37),null,(8),null], null), null).call(null,keycode))){
e.preventDefault();

om_tut.core.play_key.call(null,keycode);
} else {
}

var G__30658 = keycode;
switch (G__30658) {
case (8):
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,om_tut.core.backspace);

break;
case (38):
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,om_tut.core.move,(0),(-20));

break;
case (40):
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,om_tut.core.move,(0),(20));

break;
case (37):
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,om_tut.core.move,(-12),(0));

break;
case (39):
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,om_tut.core.move,(12),(0));

break;
case (9):
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,((function (G__30658,keycode){
return (function (p1__30656_SHARP_){
return cljs.core.update.call(null,om_tut.core.set_tabstop.call(null,om_tut.core.move.call(null,p1__30656_SHARP_,((12) * (4)),(0))),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str,"    ");
});})(G__30658,keycode))
);

break;
default:
return null;

}
});
om_tut.core.resized = (function om_tut$core$resized(){
return cljs.core.swap_BANG_.call(null,om_tut.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null),om_tut.core.calculate_cursor.call(null));
});
om_tut.core.register_stuff = (function om_tut$core$register_stuff(){
window.onresize = (function (){
return om_tut.core.resized.call(null);
});

document.addEventListener("keypress",(function (p1__30660_SHARP_){
return om_tut.core.keypress_listener.call(null,p1__30660_SHARP_);
}),false);

document.addEventListener("keydown",(function (p1__30661_SHARP_){
return om_tut.core.keydown_listener.call(null,p1__30661_SHARP_);
}),false);

return "Registered";
});
if(typeof om_tut.core.s !== 'undefined'){
} else {
om_tut.core.s = om_tut.core.register_stuff.call(null);
}

//# sourceMappingURL=core.js.map?rel=1430779896402