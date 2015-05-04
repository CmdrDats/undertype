// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljsjs.react');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj30934 = {};
return obj30934;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.display_name[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.display_name["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj30936 = {};
return obj30936;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.init_state[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.init_state["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj30938 = {};
return obj30938;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.should_update[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.should_update["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj30940 = {};
return obj30940;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.will_mount[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.will_mount["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj30942 = {};
return obj30942;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.did_mount[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.did_mount["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj30944 = {};
return obj30944;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.will_unmount[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.will_unmount["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj30946 = {};
return obj30946;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.will_update[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.will_update["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj30948 = {};
return obj30948;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.did_update[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.did_update["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj30950 = {};
return obj30950;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.will_receive_props[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.will_receive_props["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj30952 = {};
return obj30952;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.render[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.render["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj30954 = {};
return obj30954;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.render_props[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.render_props["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj30956 = {};
return obj30956;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core.render_state[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core.render_state["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj30958 = {};
return obj30958;
})();


om.core.IOmSwap = (function (){var obj30960 = {};
return obj30960;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj30962 = {};
return obj30962;
})();

om.core._get_state = (function om$core$_get_state(){
var G__30964 = arguments.length;
switch (G__30964) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._get_state[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._get_state["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._get_state[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._get_state["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj30967 = {};
return obj30967;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__30969 = arguments.length;
switch (G__30969) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._get_render_state[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._get_render_state["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._get_render_state[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._get_render_state["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj30972 = {};
return obj30972;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__30974 = arguments.length;
switch (G__30974) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj30977 = {};
return obj30977;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._get_queue[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._get_queue["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj30979 = {};
return obj30979;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__18070__auto__ = x;
if(and__18070__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__18070__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__18718__auto__ = (((x == null))?null:x);
return (function (){var or__18082__auto__ = (om.core._value[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._value["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj30981 = {};
return obj30981;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__18070__auto__ = cursor;
if(and__18070__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__18070__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__18718__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18082__auto__ = (om.core._path[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._path["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__18070__auto__ = cursor;
if(and__18070__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__18070__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__18718__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18082__auto__ = (om.core._state[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._state["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj30983 = {};
return obj30983;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__30985 = arguments.length;
switch (G__30985) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((function (){var and__18070__auto__ = value;
if(and__18070__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__18070__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__18718__auto__ = (((value == null))?null:value);
return (function (){var or__18082__auto__ = (om.core._to_cursor[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._to_cursor["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__18070__auto__ = value;
if(and__18070__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__18070__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__18718__auto__ = (((value == null))?null:value);
return (function (){var or__18082__auto__ = (om.core._to_cursor[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._to_cursor["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj30988 = {};
return obj30988;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__18070__auto__ = cursor;
if(and__18070__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__18070__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__18718__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18082__auto__ = (om.core._derive[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._derive["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj30990 = {};
return obj30990;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__18070__auto__ = cursor;
if(and__18070__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__18070__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__18718__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18082__auto__ = (om.core._transact_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj30992 = {};
return obj30992;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__18070__auto__ = x;
if(and__18070__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__18070__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__18718__auto__ = (((x == null))?null:x);
return (function (){var or__18082__auto__ = (om.core._listen_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__18070__auto__ = x;
if(and__18070__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__18718__auto__ = (((x == null))?null:x);
return (function (){var or__18082__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__18070__auto__ = x;
if(and__18070__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__18070__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__18718__auto__ = (((x == null))?null:x);
return (function (){var or__18082__auto__ = (om.core._notify_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj30994 = {};
return obj30994;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._get_property[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._get_property["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj30996 = {};
return obj30996;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__18070__auto__ = cursor;
if(and__18070__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__18070__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__18718__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__18082__auto__ = (om.core._root_key[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._root_key["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj30998 = {};
return obj30998;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._adapt[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._adapt["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj31000 = {};
return obj31000;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__18070__auto__ = this$;
if(and__18070__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__18070__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__18718__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18082__auto__ = (om.core._get_deps[goog.typeOf(x__18718__auto__)]);
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (om.core._get_deps["_"]);
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__31002 = state;
if(G__31002){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31002.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__31002.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__31002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__31002);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__31004 = x;
if(G__31004){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31004.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__31004.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__31004);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__31004);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var G__31006 = arguments.length;
switch (G__31006) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__31007 = (x.props["__om_cursor"]);
var G__31007__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__31007,korks__$1):G__31007);
return G__31007__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__31010 = arguments.length;
switch (G__31010) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var G__31013 = arguments.length;
switch (G__31013) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__31016 = state;
(G__31016["__om_prev_state"] = (state["__om_state"]));

(G__31016["__om_state"] = pending_state);

(G__31016["__om_pending_state"] = null);

return G__31016;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__31018 = arguments.length;
switch (G__31018) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__18082__auto__ = props;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__18082__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__31021 = c;
if(G__31021){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31021.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__31021.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__31021);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__31021);
}
})()){
var state_31042 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__18082__auto__ = (state_31042["__om_prev_state"]);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return (state_31042["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__31022 = c;
if(G__31022){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31022.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__31022.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__31022);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__31022);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__31023 = cljs.core.seq.call(null,refs);
var chunk__31024 = null;
var count__31025 = (0);
var i__31026 = (0);
while(true){
if((i__31026 < count__31025)){
var ref = cljs.core._nth.call(null,chunk__31024,i__31026);
om.core.unobserve.call(null,this$,ref);

var G__31043 = seq__31023;
var G__31044 = chunk__31024;
var G__31045 = count__31025;
var G__31046 = (i__31026 + (1));
seq__31023 = G__31043;
chunk__31024 = G__31044;
count__31025 = G__31045;
i__31026 = G__31046;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__31023);
if(temp__4126__auto____$1){
var seq__31023__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31023__$1)){
var c__18867__auto__ = cljs.core.chunk_first.call(null,seq__31023__$1);
var G__31047 = cljs.core.chunk_rest.call(null,seq__31023__$1);
var G__31048 = c__18867__auto__;
var G__31049 = cljs.core.count.call(null,c__18867__auto__);
var G__31050 = (0);
seq__31023 = G__31047;
chunk__31024 = G__31048;
count__31025 = G__31049;
i__31026 = G__31050;
continue;
} else {
var ref = cljs.core.first.call(null,seq__31023__$1);
om.core.unobserve.call(null,this$,ref);

var G__31051 = cljs.core.next.call(null,seq__31023__$1);
var G__31052 = null;
var G__31053 = (0);
var G__31054 = (0);
seq__31023 = G__31051;
chunk__31024 = G__31052;
count__31025 = G__31053;
i__31026 = G__31054;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__31027 = c;
if(G__31027){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31027.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__31027.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__31027);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__31027);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__31028 = c;
if(G__31028){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31028.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__31028.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__31028);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__31028);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__18070__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__18070__auto__)){
var and__18070__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__18070__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__18070__auto____$1;
}
} else {
return and__18070__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__18070__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__18070__auto__){
return cljs.core.some.call(null,((function (and__18070__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__31020_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__31020_SHARP_);
});})(and__18070__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__18070__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_31029 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_31030 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_31031 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_31032 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_31033 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__31034 = c;
if(G__31034){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31034.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__31034.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__31034);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__31034);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__31035 = c;
if(G__31035){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31035.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__31035.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__31035);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__31035);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__31036 = c;
if(G__31036){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31036.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__31036.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__31036);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__31036);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_31033;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_31032;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_31031;

om.core._STAR_state_STAR_ = _STAR_state_STAR_31030;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_31029;
}}),(function (next_props,next_state){
var this$ = this;
var c_31055 = om.core.children.call(null,this$);
if((function (){var G__31037 = c_31055;
if(G__31037){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31037.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__31037.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__31037);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__31037);
}
})()){
var state_31056 = this$.state;
om.core.will_update.call(null,c_31055,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__18082__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__31038 = c;
if(G__31038){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31038.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__31038.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__31038);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__31038);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__18082__auto__ = id;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__31039 = c;
if(G__31039){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31039.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__31039.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__31039);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__31039);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__31040 = c;
if(G__31040){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31040.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__31040.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__31040);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__31040);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_31057 = om.core.children.call(null,this$);
if((function (){var G__31041 = c_31057;
if(G__31041){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31041.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__31041.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__31041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__31041);
}
})()){
om.core.will_mount.call(null,c_31057);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x31059 = obj;
x31059.om$core$IGetState$ = true;

x31059.om$core$IGetState$_get_state$arity$1 = ((function (x31059){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__18082__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return (state["__om_state"]);
}
});})(x31059))
;

x31059.om$core$IGetState$_get_state$arity$2 = ((function (x31059){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x31059))
;

x31059.om$core$IGetRenderState$ = true;

x31059.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x31059){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x31059))
;

x31059.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x31059){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x31059))
;

x31059.om$core$ISetState$ = true;

x31059.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x31059){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__18070__auto__ = !((app_state == null));
if(and__18070__auto__){
return render;
} else {
return and__18070__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x31059))
;

x31059.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x31059){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__18070__auto__ = !((app_state == null));
if(and__18070__auto__){
return render;
} else {
return and__18070__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x31059))
;

return x31059;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__18082__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__18082__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__31060 = c;
if(G__31060){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31060.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__31060.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__31060);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__31060);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_31069 = om.core.children.call(null,this$);
if((function (){var G__31061 = c_31069;
if(G__31061){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31061.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__31061.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__31061);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__31061);
}
})()){
om.core.will_mount.call(null,c_31069);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__31062 = c;
if(G__31062){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31062.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__31062.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__31062);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__31062);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__31063 = cljs.core.seq.call(null,refs);
var chunk__31064 = null;
var count__31065 = (0);
var i__31066 = (0);
while(true){
if((i__31066 < count__31065)){
var ref = cljs.core._nth.call(null,chunk__31064,i__31066);
om.core.unobserve.call(null,this$,ref);

var G__31070 = seq__31063;
var G__31071 = chunk__31064;
var G__31072 = count__31065;
var G__31073 = (i__31066 + (1));
seq__31063 = G__31070;
chunk__31064 = G__31071;
count__31065 = G__31072;
i__31066 = G__31073;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__31063);
if(temp__4126__auto____$1){
var seq__31063__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31063__$1)){
var c__18867__auto__ = cljs.core.chunk_first.call(null,seq__31063__$1);
var G__31074 = cljs.core.chunk_rest.call(null,seq__31063__$1);
var G__31075 = c__18867__auto__;
var G__31076 = cljs.core.count.call(null,c__18867__auto__);
var G__31077 = (0);
seq__31063 = G__31074;
chunk__31064 = G__31075;
count__31065 = G__31076;
i__31066 = G__31077;
continue;
} else {
var ref = cljs.core.first.call(null,seq__31063__$1);
om.core.unobserve.call(null,this$,ref);

var G__31078 = cljs.core.next.call(null,seq__31063__$1);
var G__31079 = null;
var G__31080 = (0);
var G__31081 = (0);
seq__31063 = G__31078;
chunk__31064 = G__31079;
count__31065 = G__31080;
i__31066 = G__31081;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_31082 = this$.props;
var c_31083 = om.core.children.call(null,this$);
if((function (){var G__31067 = c_31083;
if(G__31067){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31067.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__31067.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__31067);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__31067);
}
})()){
var state_31084 = this$.state;
om.core.will_update.call(null,c_31083,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__31068 = c;
if(G__31068){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31068.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__31068.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__31068);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__31068);
}
})()){
var state_31085 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__18082__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x31087 = cljs.core.clj__GT_js.call(null,methods$);
x31087.om$core$IGetState$ = true;

x31087.om$core$IGetState$_get_state$arity$1 = ((function (x31087){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__18082__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x31087))
;

x31087.om$core$IGetState$_get_state$arity$2 = ((function (x31087){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x31087))
;

x31087.om$core$IGetRenderState$ = true;

x31087.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x31087){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x31087))
;

x31087.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x31087){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x31087))
;

x31087.om$core$ISetState$ = true;

x31087.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x31087){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__18070__auto__ = !((gstate == null));
if(and__18070__auto__){
return render;
} else {
return and__18070__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x31087))
;

x31087.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x31087){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x31087))
;

return x31087;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__31089 = x;
if(G__31089){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31089.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__31089.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__31089);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__31089);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__31091){
var vec__31092 = p__31091;
var k = cljs.core.nth.call(null,vec__31092,(0),null);
var v = cljs.core.nth.call(null,vec__31092,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__31093 = null;
var G__31093__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__31093__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__31093 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__31093__2.call(this,self__,k);
case 3:
return G__31093__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31093.cljs$core$IFn$_invoke$arity$2 = G__31093__2;
G__31093.cljs$core$IFn$_invoke$arity$3 = G__31093__3;
return G__31093;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args31090){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31090)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__31095 = null;
var G__31095__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__31095__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__31095 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__31095__2.call(this,self__,k);
case 3:
return G__31095__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31095.cljs$core$IFn$_invoke$arity$2 = G__31095__2;
G__31095.cljs$core$IFn$_invoke$arity$3 = G__31095__3;
return G__31095;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args31094){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31094)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__18661__auto__,writer__18662__auto__,opt__18663__auto__){
return cljs.core._write.call(null,writer__18662__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x31097 = cljs.core.clone.call(null,val);
x31097.cljs$core$IEquiv$ = true;

x31097.cljs$core$IEquiv$_equiv$arity$2 = ((function (x31097){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x31097))
;

x31097.om$core$ITransact$ = true;

x31097.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x31097){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x31097))
;

x31097.om$core$ICursor$ = true;

x31097.om$core$ICursor$_path$arity$1 = ((function (x31097){
return (function (_){
var ___$1 = this;
return path;
});})(x31097))
;

x31097.om$core$ICursor$_state$arity$1 = ((function (x31097){
return (function (_){
var ___$1 = this;
return state;
});})(x31097))
;

x31097.cljs$core$IDeref$ = true;

x31097.cljs$core$IDeref$_deref$arity$1 = ((function (x31097){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x31097))
;

return x31097;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__31099 = arguments.length;
switch (G__31099) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if((function (){var G__31100 = val;
if(G__31100){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31100.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__31100.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__31100);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__31100);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__31101 = val;
if(G__31101){
var bit__18756__auto__ = (G__31101.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__18756__auto__) || (G__31101.cljs$core$ICloneable$)){
return true;
} else {
if((!G__31101.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__31101);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__31101);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__31104 = atom;
if(G__31104){
var bit__18756__auto__ = (G__31104.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__18756__auto__) || (G__31104.cljs$core$IDeref$)){
return true;
} else {
if((!G__31104.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__31104);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__31104);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x31106 = cljs.core.clone.call(null,x);
x31106.om$core$ITransact$ = true;

x31106.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x31106){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x31106))
;

x31106.om$core$ICursorDerive$ = true;

x31106.om$core$ICursorDerive$_derive$arity$4 = ((function (x31106){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x31106))
;

x31106.om$core$IAdapt$ = true;

x31106.om$core$IAdapt$_adapt$arity$2 = ((function (x31106){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x31106))
;

x31106.cljs$core$ICloneable$ = true;

x31106.cljs$core$ICloneable$_clone$arity$1 = ((function (x31106){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x31106))
;

return x31106;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__31113 = cursor;
if(G__31113){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31113.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__31113.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__31113);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__31113);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x31114 = cljs.core.clone.call(null,cursor);
x31114.om$core$ITransact$ = true;

x31114.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x31114,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x31114,path,storage))
;

x31114.om$core$IOmRef$ = true;

x31114.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x31114,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x31114,path,storage))
;

x31114.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x31114,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x31114,path,storage))
;

x31114.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x31114,path,storage){
return (function (_){
var ___$1 = this;
var seq__31115 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__31116 = null;
var count__31117 = (0);
var i__31118 = (0);
while(true){
if((i__31118 < count__31117)){
var c = cljs.core._nth.call(null,chunk__31116,i__31118);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__31119 = seq__31115;
var G__31120 = chunk__31116;
var G__31121 = count__31117;
var G__31122 = (i__31118 + (1));
seq__31115 = G__31119;
chunk__31116 = G__31120;
count__31117 = G__31121;
i__31118 = G__31122;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31115);
if(temp__4126__auto__){
var seq__31115__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31115__$1)){
var c__18867__auto__ = cljs.core.chunk_first.call(null,seq__31115__$1);
var G__31123 = cljs.core.chunk_rest.call(null,seq__31115__$1);
var G__31124 = c__18867__auto__;
var G__31125 = cljs.core.count.call(null,c__18867__auto__);
var G__31126 = (0);
seq__31115 = G__31123;
chunk__31116 = G__31124;
count__31117 = G__31125;
i__31118 = G__31126;
continue;
} else {
var c = cljs.core.first.call(null,seq__31115__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__31127 = cljs.core.next.call(null,seq__31115__$1);
var G__31128 = null;
var G__31129 = (0);
var G__31130 = (0);
seq__31115 = G__31127;
chunk__31116 = G__31128;
count__31117 = G__31129;
i__31118 = G__31130;
continue;
}
} else {
return null;
}
}
break;
}
});})(x31114,path,storage))
;

x31114.om$core$IOmRef$_get_deps$arity$1 = ((function (x31114,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x31114,path,storage))
;

x31114.om$core$ICursorDerive$ = true;

x31114.om$core$ICursorDerive$_derive$arity$4 = ((function (x31114,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x31114,path,storage))
;

return x31114;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__18082__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__18082__auto__ = state.om$render$T;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__31132 = arguments.length;
switch (G__31132) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__31133_31138 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__31134_31139 = null;
var count__31135_31140 = (0);
var i__31136_31141 = (0);
while(true){
if((i__31136_31141 < count__31135_31140)){
var f_31142 = cljs.core._nth.call(null,chunk__31134_31139,i__31136_31141);
f_31142.call(null);

var G__31143 = seq__31133_31138;
var G__31144 = chunk__31134_31139;
var G__31145 = count__31135_31140;
var G__31146 = (i__31136_31141 + (1));
seq__31133_31138 = G__31143;
chunk__31134_31139 = G__31144;
count__31135_31140 = G__31145;
i__31136_31141 = G__31146;
continue;
} else {
var temp__4126__auto___31147 = cljs.core.seq.call(null,seq__31133_31138);
if(temp__4126__auto___31147){
var seq__31133_31148__$1 = temp__4126__auto___31147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31133_31148__$1)){
var c__18867__auto___31149 = cljs.core.chunk_first.call(null,seq__31133_31148__$1);
var G__31150 = cljs.core.chunk_rest.call(null,seq__31133_31148__$1);
var G__31151 = c__18867__auto___31149;
var G__31152 = cljs.core.count.call(null,c__18867__auto___31149);
var G__31153 = (0);
seq__31133_31138 = G__31150;
chunk__31134_31139 = G__31151;
count__31135_31140 = G__31152;
i__31136_31141 = G__31153;
continue;
} else {
var f_31154 = cljs.core.first.call(null,seq__31133_31148__$1);
f_31154.call(null);

var G__31155 = cljs.core.next.call(null,seq__31133_31148__$1);
var G__31156 = null;
var G__31157 = (0);
var G__31158 = (0);
seq__31133_31138 = G__31155;
chunk__31134_31139 = G__31156;
count__31135_31140 = G__31157;
i__31136_31141 = G__31158;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__18082__auto__ = (function (){var G__31165 = x;
if(G__31165){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31165.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__31165.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__31165);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__31165);
}
})();
if(or__18082__auto__){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = (function (){var G__31167 = x;
if(G__31167){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto____$1 = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto____$1)){
return or__18082__auto____$1;
} else {
return G__31167.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__31167.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__31167);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__31167);
}
})();
if(or__18082__auto____$1){
return or__18082__auto____$1;
} else {
var G__31168 = x;
if(G__31168){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto____$2 = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto____$2)){
return or__18082__auto____$2;
} else {
return G__31168.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__31168.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__31168);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__31168);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var G__31170 = arguments.length;
switch (G__31170) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__18082__auto__ = descriptor;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__18082__auto____$1)){
return or__18082__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var G__31173 = arguments.length;
switch (G__31173) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var G__31176 = arguments.length;
switch (G__31176) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__31177 = m;
var map__31177__$1 = ((cljs.core.seq_QMARK_.call(null,map__31177))?cljs.core.apply.call(null,cljs.core.hash_map,map__31177):map__31177);
var opts = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__18082__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__31177,map__31177__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__31177,map__31177__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__31177,map__31177__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__31177,map__31177__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__18082__auto__ = rkey;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var G__31180 = arguments.length;
switch (G__31180) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var G__31183 = arguments.length;
switch (G__31183) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__31193 = state;
if(G__31193){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31193.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__31193.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__31193);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__31193);
}
})()){
} else {
var properties_31201 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_31202 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_31203 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x31194_31204 = state;
x31194_31204.om$core$IRenderQueue$ = true;

x31194_31204.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_31203);
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_31203),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_31203,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_31203,cljs.core.empty);
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$INotify$ = true;

x31194_31204.om$core$INotify$_listen_BANG_$arity$3 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_31202,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_31202,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$INotify$_notify_BANG_$arity$3 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__31195_31205 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_31202));
var chunk__31196_31206 = null;
var count__31197_31207 = (0);
var i__31198_31208 = (0);
while(true){
if((i__31198_31208 < count__31197_31207)){
var vec__31199_31209 = cljs.core._nth.call(null,chunk__31196_31206,i__31198_31208);
var __31210 = cljs.core.nth.call(null,vec__31199_31209,(0),null);
var f_31211 = cljs.core.nth.call(null,vec__31199_31209,(1),null);
f_31211.call(null,tx_data,root_cursor);

var G__31212 = seq__31195_31205;
var G__31213 = chunk__31196_31206;
var G__31214 = count__31197_31207;
var G__31215 = (i__31198_31208 + (1));
seq__31195_31205 = G__31212;
chunk__31196_31206 = G__31213;
count__31197_31207 = G__31214;
i__31198_31208 = G__31215;
continue;
} else {
var temp__4126__auto___31216 = cljs.core.seq.call(null,seq__31195_31205);
if(temp__4126__auto___31216){
var seq__31195_31217__$1 = temp__4126__auto___31216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31195_31217__$1)){
var c__18867__auto___31218 = cljs.core.chunk_first.call(null,seq__31195_31217__$1);
var G__31219 = cljs.core.chunk_rest.call(null,seq__31195_31217__$1);
var G__31220 = c__18867__auto___31218;
var G__31221 = cljs.core.count.call(null,c__18867__auto___31218);
var G__31222 = (0);
seq__31195_31205 = G__31219;
chunk__31196_31206 = G__31220;
count__31197_31207 = G__31221;
i__31198_31208 = G__31222;
continue;
} else {
var vec__31200_31223 = cljs.core.first.call(null,seq__31195_31217__$1);
var __31224 = cljs.core.nth.call(null,vec__31200_31223,(0),null);
var f_31225 = cljs.core.nth.call(null,vec__31200_31223,(1),null);
f_31225.call(null,tx_data,root_cursor);

var G__31226 = cljs.core.next.call(null,seq__31195_31217__$1);
var G__31227 = null;
var G__31228 = (0);
var G__31229 = (0);
seq__31195_31205 = G__31226;
chunk__31196_31206 = G__31227;
count__31197_31207 = G__31228;
i__31198_31208 = G__31229;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$IRootProperties$ = true;

x31194_31204.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_31201,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_31201,cljs.core.dissoc,id,k);
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_31201,cljs.core.dissoc,id);
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

x31194_31204.om$core$IRootProperties$_get_property$arity$3 = ((function (x31194_31204,properties_31201,listeners_31202,render_queue_31203){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_31201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x31194_31204,properties_31201,listeners_31202,render_queue_31203))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x31231 = cljs.core.clone.call(null,cursor);
x31231.om$core$IRootKey$ = true;

x31231.om$core$IRootKey$_root_key$arity$1 = ((function (x31231){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x31231))
;

x31231.om$core$IAdapt$ = true;

x31231.om$core$IAdapt$_adapt$arity$2 = ((function (x31231){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x31231))
;

x31231.cljs$core$ICloneable$ = true;

x31231.cljs$core$ICloneable$_clone$arity$1 = ((function (x31231){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x31231))
;

return x31231;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__31232){
var map__31295 = p__31232;
var map__31295__$1 = ((cljs.core.seq_QMARK_.call(null,map__31295))?cljs.core.apply.call(null,cljs.core.hash_map,map__31295):map__31295);
var options = map__31295__$1;
var raf = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__31357 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__31357,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__31357,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__31296 = value;
if(G__31296){
var bit__18756__auto__ = (G__31296.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__18756__auto__) || (G__31296.cljs$core$IAtom$)){
return true;
} else {
if((!G__31296.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__31296);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__31296);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__18082__auto__ = adapt;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_31358 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_31327 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_31328 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_31329 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_31330 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_31330;

om.core._STAR_state_STAR_ = _STAR_state_STAR_31329;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_31328;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_31327;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_31358);
} else {
}
}

var queue_31359 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_31359)){
} else {
var seq__31331_31360 = cljs.core.seq.call(null,queue_31359);
var chunk__31332_31361 = null;
var count__31333_31362 = (0);
var i__31334_31363 = (0);
while(true){
if((i__31334_31363 < count__31333_31362)){
var c_31364 = cljs.core._nth.call(null,chunk__31332_31361,i__31334_31363);
if(cljs.core.truth_(c_31364.isMounted())){
var temp__4126__auto___31365 = (c_31364.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___31365)){
var next_props_31366 = temp__4126__auto___31365;
(c_31364.props["__om_cursor"] = next_props_31366);

(c_31364.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__18082__auto__ = !((function (){var G__31336 = om.core.children.call(null,c_31364);
if(G__31336){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31336.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__31336.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__31336);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__31336);
}
})());
if(or__18082__auto__){
return or__18082__auto__;
} else {
return c_31364.shouldComponentUpdate(c_31364.props,c_31364.state);
}
})())){
c_31364.forceUpdate();
} else {
}
} else {
}

var G__31367 = seq__31331_31360;
var G__31368 = chunk__31332_31361;
var G__31369 = count__31333_31362;
var G__31370 = (i__31334_31363 + (1));
seq__31331_31360 = G__31367;
chunk__31332_31361 = G__31368;
count__31333_31362 = G__31369;
i__31334_31363 = G__31370;
continue;
} else {
var temp__4126__auto___31371 = cljs.core.seq.call(null,seq__31331_31360);
if(temp__4126__auto___31371){
var seq__31331_31372__$1 = temp__4126__auto___31371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31331_31372__$1)){
var c__18867__auto___31373 = cljs.core.chunk_first.call(null,seq__31331_31372__$1);
var G__31374 = cljs.core.chunk_rest.call(null,seq__31331_31372__$1);
var G__31375 = c__18867__auto___31373;
var G__31376 = cljs.core.count.call(null,c__18867__auto___31373);
var G__31377 = (0);
seq__31331_31360 = G__31374;
chunk__31332_31361 = G__31375;
count__31333_31362 = G__31376;
i__31334_31363 = G__31377;
continue;
} else {
var c_31378 = cljs.core.first.call(null,seq__31331_31372__$1);
if(cljs.core.truth_(c_31378.isMounted())){
var temp__4126__auto___31379__$1 = (c_31378.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___31379__$1)){
var next_props_31380 = temp__4126__auto___31379__$1;
(c_31378.props["__om_cursor"] = next_props_31380);

(c_31378.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__18082__auto__ = !((function (){var G__31338 = om.core.children.call(null,c_31378);
if(G__31338){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31338.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__31338.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__31338);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__31338);
}
})());
if(or__18082__auto__){
return or__18082__auto__;
} else {
return c_31378.shouldComponentUpdate(c_31378.props,c_31378.state);
}
})())){
c_31378.forceUpdate();
} else {
}
} else {
}

var G__31381 = cljs.core.next.call(null,seq__31331_31372__$1);
var G__31382 = null;
var G__31383 = (0);
var G__31384 = (0);
seq__31331_31360 = G__31381;
chunk__31332_31361 = G__31382;
count__31333_31362 = G__31383;
i__31334_31363 = G__31384;
continue;
}
} else {
}
}
break;
}
}

var _refs_31385 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_31385)){
} else {
var seq__31339_31386 = cljs.core.seq.call(null,_refs_31385);
var chunk__31340_31387 = null;
var count__31341_31388 = (0);
var i__31342_31389 = (0);
while(true){
if((i__31342_31389 < count__31341_31388)){
var vec__31343_31390 = cljs.core._nth.call(null,chunk__31340_31387,i__31342_31389);
var path_31391__$1 = cljs.core.nth.call(null,vec__31343_31390,(0),null);
var cs_31392 = cljs.core.nth.call(null,vec__31343_31390,(1),null);
var cs_31393__$1 = cljs.core.deref.call(null,cs_31392);
var seq__31344_31394 = cljs.core.seq.call(null,cs_31393__$1);
var chunk__31345_31395 = null;
var count__31346_31396 = (0);
var i__31347_31397 = (0);
while(true){
if((i__31347_31397 < count__31346_31396)){
var vec__31348_31398 = cljs.core._nth.call(null,chunk__31345_31395,i__31347_31397);
var id_31399 = cljs.core.nth.call(null,vec__31348_31398,(0),null);
var c_31400 = cljs.core.nth.call(null,vec__31348_31398,(1),null);
if(cljs.core.truth_(c_31400.shouldComponentUpdate(c_31400.props,c_31400.state))){
c_31400.forceUpdate();
} else {
}

var G__31401 = seq__31344_31394;
var G__31402 = chunk__31345_31395;
var G__31403 = count__31346_31396;
var G__31404 = (i__31347_31397 + (1));
seq__31344_31394 = G__31401;
chunk__31345_31395 = G__31402;
count__31346_31396 = G__31403;
i__31347_31397 = G__31404;
continue;
} else {
var temp__4126__auto___31405 = cljs.core.seq.call(null,seq__31344_31394);
if(temp__4126__auto___31405){
var seq__31344_31406__$1 = temp__4126__auto___31405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31344_31406__$1)){
var c__18867__auto___31407 = cljs.core.chunk_first.call(null,seq__31344_31406__$1);
var G__31408 = cljs.core.chunk_rest.call(null,seq__31344_31406__$1);
var G__31409 = c__18867__auto___31407;
var G__31410 = cljs.core.count.call(null,c__18867__auto___31407);
var G__31411 = (0);
seq__31344_31394 = G__31408;
chunk__31345_31395 = G__31409;
count__31346_31396 = G__31410;
i__31347_31397 = G__31411;
continue;
} else {
var vec__31349_31412 = cljs.core.first.call(null,seq__31344_31406__$1);
var id_31413 = cljs.core.nth.call(null,vec__31349_31412,(0),null);
var c_31414 = cljs.core.nth.call(null,vec__31349_31412,(1),null);
if(cljs.core.truth_(c_31414.shouldComponentUpdate(c_31414.props,c_31414.state))){
c_31414.forceUpdate();
} else {
}

var G__31415 = cljs.core.next.call(null,seq__31344_31406__$1);
var G__31416 = null;
var G__31417 = (0);
var G__31418 = (0);
seq__31344_31394 = G__31415;
chunk__31345_31395 = G__31416;
count__31346_31396 = G__31417;
i__31347_31397 = G__31418;
continue;
}
} else {
}
}
break;
}

var G__31419 = seq__31339_31386;
var G__31420 = chunk__31340_31387;
var G__31421 = count__31341_31388;
var G__31422 = (i__31342_31389 + (1));
seq__31339_31386 = G__31419;
chunk__31340_31387 = G__31420;
count__31341_31388 = G__31421;
i__31342_31389 = G__31422;
continue;
} else {
var temp__4126__auto___31423 = cljs.core.seq.call(null,seq__31339_31386);
if(temp__4126__auto___31423){
var seq__31339_31424__$1 = temp__4126__auto___31423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31339_31424__$1)){
var c__18867__auto___31425 = cljs.core.chunk_first.call(null,seq__31339_31424__$1);
var G__31426 = cljs.core.chunk_rest.call(null,seq__31339_31424__$1);
var G__31427 = c__18867__auto___31425;
var G__31428 = cljs.core.count.call(null,c__18867__auto___31425);
var G__31429 = (0);
seq__31339_31386 = G__31426;
chunk__31340_31387 = G__31427;
count__31341_31388 = G__31428;
i__31342_31389 = G__31429;
continue;
} else {
var vec__31350_31430 = cljs.core.first.call(null,seq__31339_31424__$1);
var path_31431__$1 = cljs.core.nth.call(null,vec__31350_31430,(0),null);
var cs_31432 = cljs.core.nth.call(null,vec__31350_31430,(1),null);
var cs_31433__$1 = cljs.core.deref.call(null,cs_31432);
var seq__31351_31434 = cljs.core.seq.call(null,cs_31433__$1);
var chunk__31352_31435 = null;
var count__31353_31436 = (0);
var i__31354_31437 = (0);
while(true){
if((i__31354_31437 < count__31353_31436)){
var vec__31355_31438 = cljs.core._nth.call(null,chunk__31352_31435,i__31354_31437);
var id_31439 = cljs.core.nth.call(null,vec__31355_31438,(0),null);
var c_31440 = cljs.core.nth.call(null,vec__31355_31438,(1),null);
if(cljs.core.truth_(c_31440.shouldComponentUpdate(c_31440.props,c_31440.state))){
c_31440.forceUpdate();
} else {
}

var G__31441 = seq__31351_31434;
var G__31442 = chunk__31352_31435;
var G__31443 = count__31353_31436;
var G__31444 = (i__31354_31437 + (1));
seq__31351_31434 = G__31441;
chunk__31352_31435 = G__31442;
count__31353_31436 = G__31443;
i__31354_31437 = G__31444;
continue;
} else {
var temp__4126__auto___31445__$1 = cljs.core.seq.call(null,seq__31351_31434);
if(temp__4126__auto___31445__$1){
var seq__31351_31446__$1 = temp__4126__auto___31445__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31351_31446__$1)){
var c__18867__auto___31447 = cljs.core.chunk_first.call(null,seq__31351_31446__$1);
var G__31448 = cljs.core.chunk_rest.call(null,seq__31351_31446__$1);
var G__31449 = c__18867__auto___31447;
var G__31450 = cljs.core.count.call(null,c__18867__auto___31447);
var G__31451 = (0);
seq__31351_31434 = G__31448;
chunk__31352_31435 = G__31449;
count__31353_31436 = G__31450;
i__31354_31437 = G__31451;
continue;
} else {
var vec__31356_31452 = cljs.core.first.call(null,seq__31351_31446__$1);
var id_31453 = cljs.core.nth.call(null,vec__31356_31452,(0),null);
var c_31454 = cljs.core.nth.call(null,vec__31356_31452,(1),null);
if(cljs.core.truth_(c_31454.shouldComponentUpdate(c_31454.props,c_31454.state))){
c_31454.forceUpdate();
} else {
}

var G__31455 = cljs.core.next.call(null,seq__31351_31446__$1);
var G__31456 = null;
var G__31457 = (0);
var G__31458 = (0);
seq__31351_31434 = G__31455;
chunk__31352_31435 = G__31456;
count__31353_31436 = G__31457;
i__31354_31437 = G__31458;
continue;
}
} else {
}
}
break;
}

var G__31459 = cljs.core.next.call(null,seq__31339_31424__$1);
var G__31460 = null;
var G__31461 = (0);
var G__31462 = (0);
seq__31339_31386 = G__31459;
chunk__31340_31387 = G__31460;
count__31341_31388 = G__31461;
i__31342_31389 = G__31462;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__31295,map__31295__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__31464 = x;
if(G__31464){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31464.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__31464.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__31464);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__31464);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__31466 = arguments.length;
switch (G__31466) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var G__31469 = arguments.length;
switch (G__31469) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__31472 = cursor;
if(G__31472){
var bit__18756__auto__ = null;
if(cljs.core.truth_((function (){var or__18082__auto__ = bit__18756__auto__;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return G__31472.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__31472.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__31472);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__31472);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var G__31474 = arguments.length;
switch (G__31474) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var G__31477 = arguments.length;
switch (G__31477) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var G__31480 = arguments.length;
switch (G__31480) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var G__31483 = arguments.length;
switch (G__31483) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var G__31486 = arguments.length;
switch (G__31486) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var G__31489 = arguments.length;
switch (G__31489) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map?rel=1430779897690