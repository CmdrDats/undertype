// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19122__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19122__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32287_32295 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32288_32296 = null;
var count__32289_32297 = (0);
var i__32290_32298 = (0);
while(true){
if((i__32290_32298 < count__32289_32297)){
var k_32299 = cljs.core._nth.call(null,chunk__32288_32296,i__32290_32298);
e.setAttribute(cljs.core.name.call(null,k_32299),cljs.core.get.call(null,attrs,k_32299));

var G__32300 = seq__32287_32295;
var G__32301 = chunk__32288_32296;
var G__32302 = count__32289_32297;
var G__32303 = (i__32290_32298 + (1));
seq__32287_32295 = G__32300;
chunk__32288_32296 = G__32301;
count__32289_32297 = G__32302;
i__32290_32298 = G__32303;
continue;
} else {
var temp__4126__auto___32304 = cljs.core.seq.call(null,seq__32287_32295);
if(temp__4126__auto___32304){
var seq__32287_32305__$1 = temp__4126__auto___32304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32287_32305__$1)){
var c__18867__auto___32306 = cljs.core.chunk_first.call(null,seq__32287_32305__$1);
var G__32307 = cljs.core.chunk_rest.call(null,seq__32287_32305__$1);
var G__32308 = c__18867__auto___32306;
var G__32309 = cljs.core.count.call(null,c__18867__auto___32306);
var G__32310 = (0);
seq__32287_32295 = G__32307;
chunk__32288_32296 = G__32308;
count__32289_32297 = G__32309;
i__32290_32298 = G__32310;
continue;
} else {
var k_32311 = cljs.core.first.call(null,seq__32287_32305__$1);
e.setAttribute(cljs.core.name.call(null,k_32311),cljs.core.get.call(null,attrs,k_32311));

var G__32312 = cljs.core.next.call(null,seq__32287_32305__$1);
var G__32313 = null;
var G__32314 = (0);
var G__32315 = (0);
seq__32287_32295 = G__32312;
chunk__32288_32296 = G__32313;
count__32289_32297 = G__32314;
i__32290_32298 = G__32315;
continue;
}
} else {
}
}
break;
}

var seq__32291_32316 = cljs.core.seq.call(null,children);
var chunk__32292_32317 = null;
var count__32293_32318 = (0);
var i__32294_32319 = (0);
while(true){
if((i__32294_32319 < count__32293_32318)){
var ch_32320 = cljs.core._nth.call(null,chunk__32292_32317,i__32294_32319);
e.appendChild(ch_32320);

var G__32321 = seq__32291_32316;
var G__32322 = chunk__32292_32317;
var G__32323 = count__32293_32318;
var G__32324 = (i__32294_32319 + (1));
seq__32291_32316 = G__32321;
chunk__32292_32317 = G__32322;
count__32293_32318 = G__32323;
i__32294_32319 = G__32324;
continue;
} else {
var temp__4126__auto___32325 = cljs.core.seq.call(null,seq__32291_32316);
if(temp__4126__auto___32325){
var seq__32291_32326__$1 = temp__4126__auto___32325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32291_32326__$1)){
var c__18867__auto___32327 = cljs.core.chunk_first.call(null,seq__32291_32326__$1);
var G__32328 = cljs.core.chunk_rest.call(null,seq__32291_32326__$1);
var G__32329 = c__18867__auto___32327;
var G__32330 = cljs.core.count.call(null,c__18867__auto___32327);
var G__32331 = (0);
seq__32291_32316 = G__32328;
chunk__32292_32317 = G__32329;
count__32293_32318 = G__32330;
i__32294_32319 = G__32331;
continue;
} else {
var ch_32332 = cljs.core.first.call(null,seq__32291_32326__$1);
e.appendChild(ch_32332);

var G__32333 = cljs.core.next.call(null,seq__32291_32326__$1);
var G__32334 = null;
var G__32335 = (0);
var G__32336 = (0);
seq__32291_32316 = G__32333;
chunk__32292_32317 = G__32334;
count__32293_32318 = G__32335;
i__32294_32319 = G__32336;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32284){
var G__32285 = cljs.core.first.call(null,seq32284);
var seq32284__$1 = cljs.core.next.call(null,seq32284);
var G__32286 = cljs.core.first.call(null,seq32284__$1);
var seq32284__$2 = cljs.core.next.call(null,seq32284__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32285,G__32286,seq32284__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18981__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18977__auto__,prefer_table__18978__auto__,method_cache__18979__auto__,cached_hierarchy__18980__auto__,hierarchy__18981__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18977__auto__,prefer_table__18978__auto__,method_cache__18979__auto__,cached_hierarchy__18980__auto__,hierarchy__18981__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18981__auto__,method_table__18977__auto__,prefer_table__18978__auto__,method_cache__18979__auto__,cached_hierarchy__18980__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32337 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32337.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32337.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_32337.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32337);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32338,st_map){
var map__32342 = p__32338;
var map__32342__$1 = ((cljs.core.seq_QMARK_.call(null,map__32342))?cljs.core.apply.call(null,cljs.core.hash_map,map__32342):map__32342);
var container_el = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32342,map__32342__$1,container_el){
return (function (p__32343){
var vec__32344 = p__32343;
var k = cljs.core.nth.call(null,vec__32344,(0),null);
var v = cljs.core.nth.call(null,vec__32344,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32342,map__32342__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32345,dom_str){
var map__32347 = p__32345;
var map__32347__$1 = ((cljs.core.seq_QMARK_.call(null,map__32347))?cljs.core.apply.call(null,cljs.core.hash_map,map__32347):map__32347);
var c = map__32347__$1;
var content_area_el = cljs.core.get.call(null,map__32347__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32348){
var map__32350 = p__32348;
var map__32350__$1 = ((cljs.core.seq_QMARK_.call(null,map__32350))?cljs.core.apply.call(null,cljs.core.hash_map,map__32350):map__32350);
var content_area_el = cljs.core.get.call(null,map__32350__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__){
return (function (state_32392){
var state_val_32393 = (state_32392[(1)]);
if((state_val_32393 === (2))){
var inst_32377 = (state_32392[(7)]);
var inst_32386 = (state_32392[(2)]);
var inst_32387 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32388 = ["auto"];
var inst_32389 = cljs.core.PersistentHashMap.fromArrays(inst_32387,inst_32388);
var inst_32390 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32377,inst_32389);
var state_32392__$1 = (function (){var statearr_32394 = state_32392;
(statearr_32394[(8)] = inst_32386);

return statearr_32394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32392__$1,inst_32390);
} else {
if((state_val_32393 === (1))){
var inst_32377 = (state_32392[(7)]);
var inst_32377__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32378 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32379 = ["10px","10px","100%","68px","1.0"];
var inst_32380 = cljs.core.PersistentHashMap.fromArrays(inst_32378,inst_32379);
var inst_32381 = cljs.core.merge.call(null,inst_32380,style);
var inst_32382 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32377__$1,inst_32381);
var inst_32383 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32377__$1,msg);
var inst_32384 = cljs.core.async.timeout.call(null,(300));
var state_32392__$1 = (function (){var statearr_32395 = state_32392;
(statearr_32395[(9)] = inst_32383);

(statearr_32395[(7)] = inst_32377__$1);

(statearr_32395[(10)] = inst_32382);

return statearr_32395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32392__$1,(2),inst_32384);
} else {
return null;
}
}
});})(c__20705__auto__))
;
return ((function (switch__20684__auto__,c__20705__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto____0 = (function (){
var statearr_32399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32399[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto__);

(statearr_32399[(1)] = (1));

return statearr_32399;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto____1 = (function (state_32392){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_32392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e32400){if((e32400 instanceof Object)){
var ex__20688__auto__ = e32400;
var statearr_32401_32403 = state_32392;
(statearr_32401_32403[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32404 = state_32392;
state_32392 = G__32404;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto__ = function(state_32392){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto____1.call(this,state_32392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__))
})();
var state__20707__auto__ = (function (){var statearr_32402 = f__20706__auto__.call(null);
(statearr_32402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__))
);

return c__20705__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__32406 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__32406,(0),null);
var ln = cljs.core.nth.call(null,vec__32406,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32409 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32409,(0),null);
var file_line = cljs.core.nth.call(null,vec__32409,(1),null);
var file_column = cljs.core.nth.call(null,vec__32409,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32409,file_name,file_line,file_column){
return (function (p1__32407_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32407_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__32409,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18082__auto__ = file_line;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
var and__18070__auto__ = cause;
if(cljs.core.truth_(and__18070__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18070__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32411 = figwheel.client.heads_up.ensure_container.call(null);
var map__32411__$1 = ((cljs.core.seq_QMARK_.call(null,map__32411))?cljs.core.apply.call(null,cljs.core.hash_map,map__32411):map__32411);
var content_area_el = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__){
return (function (state_32458){
var state_val_32459 = (state_32458[(1)]);
if((state_val_32459 === (3))){
var inst_32441 = (state_32458[(7)]);
var inst_32455 = (state_32458[(2)]);
var inst_32456 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32441,"");
var state_32458__$1 = (function (){var statearr_32460 = state_32458;
(statearr_32460[(8)] = inst_32455);

return statearr_32460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32458__$1,inst_32456);
} else {
if((state_val_32459 === (2))){
var inst_32441 = (state_32458[(7)]);
var inst_32448 = (state_32458[(2)]);
var inst_32449 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32450 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32451 = cljs.core.PersistentHashMap.fromArrays(inst_32449,inst_32450);
var inst_32452 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32441,inst_32451);
var inst_32453 = cljs.core.async.timeout.call(null,(200));
var state_32458__$1 = (function (){var statearr_32461 = state_32458;
(statearr_32461[(9)] = inst_32448);

(statearr_32461[(10)] = inst_32452);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32458__$1,(3),inst_32453);
} else {
if((state_val_32459 === (1))){
var inst_32441 = (state_32458[(7)]);
var inst_32441__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32442 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32443 = ["0.0"];
var inst_32444 = cljs.core.PersistentHashMap.fromArrays(inst_32442,inst_32443);
var inst_32445 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32441__$1,inst_32444);
var inst_32446 = cljs.core.async.timeout.call(null,(300));
var state_32458__$1 = (function (){var statearr_32462 = state_32458;
(statearr_32462[(7)] = inst_32441__$1);

(statearr_32462[(11)] = inst_32445);

return statearr_32462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32458__$1,(2),inst_32446);
} else {
return null;
}
}
}
});})(c__20705__auto__))
;
return ((function (switch__20684__auto__,c__20705__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20685__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20685__auto____0 = (function (){
var statearr_32466 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32466[(0)] = figwheel$client$heads_up$clear_$_state_machine__20685__auto__);

(statearr_32466[(1)] = (1));

return statearr_32466;
});
var figwheel$client$heads_up$clear_$_state_machine__20685__auto____1 = (function (state_32458){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_32458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e32467){if((e32467 instanceof Object)){
var ex__20688__auto__ = e32467;
var statearr_32468_32470 = state_32458;
(statearr_32468_32470[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32471 = state_32458;
state_32458 = G__32471;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20685__auto__ = function(state_32458){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20685__auto____1.call(this,state_32458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20685__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20685__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__))
})();
var state__20707__auto__ = (function (){var statearr_32469 = f__20706__auto__.call(null);
(statearr_32469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_32469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__))
);

return c__20705__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__){
return (function (state_32503){
var state_val_32504 = (state_32503[(1)]);
if((state_val_32504 === (4))){
var inst_32501 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32503__$1,inst_32501);
} else {
if((state_val_32504 === (3))){
var inst_32498 = (state_32503[(2)]);
var inst_32499 = figwheel.client.heads_up.clear.call(null);
var state_32503__$1 = (function (){var statearr_32505 = state_32503;
(statearr_32505[(7)] = inst_32498);

return statearr_32505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,(4),inst_32499);
} else {
if((state_val_32504 === (2))){
var inst_32495 = (state_32503[(2)]);
var inst_32496 = cljs.core.async.timeout.call(null,(400));
var state_32503__$1 = (function (){var statearr_32506 = state_32503;
(statearr_32506[(8)] = inst_32495);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,(3),inst_32496);
} else {
if((state_val_32504 === (1))){
var inst_32493 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,(2),inst_32493);
} else {
return null;
}
}
}
}
});})(c__20705__auto__))
;
return ((function (switch__20684__auto__,c__20705__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto____0 = (function (){
var statearr_32510 = [null,null,null,null,null,null,null,null,null];
(statearr_32510[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto__);

(statearr_32510[(1)] = (1));

return statearr_32510;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto____1 = (function (state_32503){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_32503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e32511){if((e32511 instanceof Object)){
var ex__20688__auto__ = e32511;
var statearr_32512_32514 = state_32503;
(statearr_32512_32514[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32515 = state_32503;
state_32503 = G__32515;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto__ = function(state_32503){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto____1.call(this,state_32503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__))
})();
var state__20707__auto__ = (function (){var statearr_32513 = f__20706__auto__.call(null);
(statearr_32513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_32513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__))
);

return c__20705__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1430779898441