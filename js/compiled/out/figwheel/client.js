// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31493__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31494__i = 0, G__31494__a = new Array(arguments.length -  0);
while (G__31494__i < G__31494__a.length) {G__31494__a[G__31494__i] = arguments[G__31494__i + 0]; ++G__31494__i;}
  args = new cljs.core.IndexedSeq(G__31494__a,0);
} 
return G__31493__delegate.call(this,args);};
G__31493.cljs$lang$maxFixedArity = 0;
G__31493.cljs$lang$applyTo = (function (arglist__31495){
var args = cljs.core.seq(arglist__31495);
return G__31493__delegate(args);
});
G__31493.cljs$core$IFn$_invoke$arity$variadic = G__31493__delegate;
return G__31493;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31496){
var map__31498 = p__31496;
var map__31498__$1 = ((cljs.core.seq_QMARK_.call(null,map__31498))?cljs.core.apply.call(null,cljs.core.hash_map,map__31498):map__31498);
var class$ = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18082__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18070__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18070__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18070__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20705__auto___31627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___31627,ch){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___31627,ch){
return (function (state_31601){
var state_val_31602 = (state_31601[(1)]);
if((state_val_31602 === (7))){
var inst_31597 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31603_31628 = state_31601__$1;
(statearr_31603_31628[(2)] = inst_31597);

(statearr_31603_31628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (1))){
var state_31601__$1 = state_31601;
var statearr_31604_31629 = state_31601__$1;
(statearr_31604_31629[(2)] = null);

(statearr_31604_31629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (4))){
var inst_31565 = (state_31601[(7)]);
var inst_31565__$1 = (state_31601[(2)]);
var state_31601__$1 = (function (){var statearr_31605 = state_31601;
(statearr_31605[(7)] = inst_31565__$1);

return statearr_31605;
})();
if(cljs.core.truth_(inst_31565__$1)){
var statearr_31606_31630 = state_31601__$1;
(statearr_31606_31630[(1)] = (5));

} else {
var statearr_31607_31631 = state_31601__$1;
(statearr_31607_31631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (13))){
var state_31601__$1 = state_31601;
var statearr_31608_31632 = state_31601__$1;
(statearr_31608_31632[(2)] = null);

(statearr_31608_31632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (6))){
var state_31601__$1 = state_31601;
var statearr_31609_31633 = state_31601__$1;
(statearr_31609_31633[(2)] = null);

(statearr_31609_31633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (3))){
var inst_31599 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31601__$1,inst_31599);
} else {
if((state_val_31602 === (12))){
var inst_31572 = (state_31601[(8)]);
var inst_31585 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31572);
var inst_31586 = cljs.core.first.call(null,inst_31585);
var inst_31587 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31586);
var inst_31588 = console.warn("Figwheel: Not loading code with warnings - ",inst_31587);
var state_31601__$1 = state_31601;
var statearr_31610_31634 = state_31601__$1;
(statearr_31610_31634[(2)] = inst_31588);

(statearr_31610_31634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (2))){
var state_31601__$1 = state_31601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31601__$1,(4),ch);
} else {
if((state_val_31602 === (11))){
var inst_31581 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31611_31635 = state_31601__$1;
(statearr_31611_31635[(2)] = inst_31581);

(statearr_31611_31635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (9))){
var inst_31571 = (state_31601[(9)]);
var inst_31583 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31571,opts);
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31583)){
var statearr_31612_31636 = state_31601__$1;
(statearr_31612_31636[(1)] = (12));

} else {
var statearr_31613_31637 = state_31601__$1;
(statearr_31613_31637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (5))){
var inst_31565 = (state_31601[(7)]);
var inst_31571 = (state_31601[(9)]);
var inst_31567 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31568 = (new cljs.core.PersistentArrayMap(null,2,inst_31567,null));
var inst_31569 = (new cljs.core.PersistentHashSet(null,inst_31568,null));
var inst_31570 = figwheel.client.focus_msgs.call(null,inst_31569,inst_31565);
var inst_31571__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31570);
var inst_31572 = cljs.core.first.call(null,inst_31570);
var inst_31573 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31571__$1,opts);
var state_31601__$1 = (function (){var statearr_31614 = state_31601;
(statearr_31614[(8)] = inst_31572);

(statearr_31614[(9)] = inst_31571__$1);

return statearr_31614;
})();
if(cljs.core.truth_(inst_31573)){
var statearr_31615_31638 = state_31601__$1;
(statearr_31615_31638[(1)] = (8));

} else {
var statearr_31616_31639 = state_31601__$1;
(statearr_31616_31639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (14))){
var inst_31591 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31617_31640 = state_31601__$1;
(statearr_31617_31640[(2)] = inst_31591);

(statearr_31617_31640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (10))){
var inst_31593 = (state_31601[(2)]);
var state_31601__$1 = (function (){var statearr_31618 = state_31601;
(statearr_31618[(10)] = inst_31593);

return statearr_31618;
})();
var statearr_31619_31641 = state_31601__$1;
(statearr_31619_31641[(2)] = null);

(statearr_31619_31641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31602 === (8))){
var inst_31572 = (state_31601[(8)]);
var inst_31575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31576 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31572);
var inst_31577 = cljs.core.async.timeout.call(null,(1000));
var inst_31578 = [inst_31576,inst_31577];
var inst_31579 = (new cljs.core.PersistentVector(null,2,(5),inst_31575,inst_31578,null));
var state_31601__$1 = state_31601;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31601__$1,(11),inst_31579);
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
});})(c__20705__auto___31627,ch))
;
return ((function (switch__20684__auto__,c__20705__auto___31627,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20685__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20685__auto____0 = (function (){
var statearr_31623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31623[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20685__auto__);

(statearr_31623[(1)] = (1));

return statearr_31623;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20685__auto____1 = (function (state_31601){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_31601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e31624){if((e31624 instanceof Object)){
var ex__20688__auto__ = e31624;
var statearr_31625_31642 = state_31601;
(statearr_31625_31642[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31643 = state_31601;
state_31601 = G__31643;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20685__auto__ = function(state_31601){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20685__auto____1.call(this,state_31601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20685__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20685__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___31627,ch))
})();
var state__20707__auto__ = (function (){var statearr_31626 = f__20706__auto__.call(null);
(statearr_31626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___31627);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___31627,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31644_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31644_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_31651 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31651){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_31649 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31650 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31649,_STAR_print_newline_STAR_31650,base_path_31651){
return (function() { 
var G__31652__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31653__i = 0, G__31653__a = new Array(arguments.length -  0);
while (G__31653__i < G__31653__a.length) {G__31653__a[G__31653__i] = arguments[G__31653__i + 0]; ++G__31653__i;}
  args = new cljs.core.IndexedSeq(G__31653__a,0);
} 
return G__31652__delegate.call(this,args);};
G__31652.cljs$lang$maxFixedArity = 0;
G__31652.cljs$lang$applyTo = (function (arglist__31654){
var args = cljs.core.seq(arglist__31654);
return G__31652__delegate(args);
});
G__31652.cljs$core$IFn$_invoke$arity$variadic = G__31652__delegate;
return G__31652;
})()
;})(_STAR_print_fn_STAR_31649,_STAR_print_newline_STAR_31650,base_path_31651))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31650;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31649;
}}catch (e31648){if((e31648 instanceof Error)){
var e = e31648;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31651], null));
} else {
var e = e31648;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31651))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31655){
var map__31660 = p__31655;
var map__31660__$1 = ((cljs.core.seq_QMARK_.call(null,map__31660))?cljs.core.apply.call(null,cljs.core.hash_map,map__31660):map__31660);
var opts = map__31660__$1;
var build_id = cljs.core.get.call(null,map__31660__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31660,map__31660__$1,opts,build_id){
return (function (p__31661){
var vec__31662 = p__31661;
var map__31663 = cljs.core.nth.call(null,vec__31662,(0),null);
var map__31663__$1 = ((cljs.core.seq_QMARK_.call(null,map__31663))?cljs.core.apply.call(null,cljs.core.hash_map,map__31663):map__31663);
var msg = map__31663__$1;
var msg_name = cljs.core.get.call(null,map__31663__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31662,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__31662,map__31663,map__31663__$1,msg,msg_name,_,map__31660,map__31660__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31662,map__31663,map__31663__$1,msg,msg_name,_,map__31660,map__31660__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31660,map__31660__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31667){
var vec__31668 = p__31667;
var map__31669 = cljs.core.nth.call(null,vec__31668,(0),null);
var map__31669__$1 = ((cljs.core.seq_QMARK_.call(null,map__31669))?cljs.core.apply.call(null,cljs.core.hash_map,map__31669):map__31669);
var msg = map__31669__$1;
var msg_name = cljs.core.get.call(null,map__31669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31668,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31670){
var map__31678 = p__31670;
var map__31678__$1 = ((cljs.core.seq_QMARK_.call(null,map__31678))?cljs.core.apply.call(null,cljs.core.hash_map,map__31678):map__31678);
var on_compile_fail = cljs.core.get.call(null,map__31678__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__31678__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__31678,map__31678__$1,on_compile_fail,on_compile_warning){
return (function (p__31679){
var vec__31680 = p__31679;
var map__31681 = cljs.core.nth.call(null,vec__31680,(0),null);
var map__31681__$1 = ((cljs.core.seq_QMARK_.call(null,map__31681))?cljs.core.apply.call(null,cljs.core.hash_map,map__31681):map__31681);
var msg = map__31681__$1;
var msg_name = cljs.core.get.call(null,map__31681__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31680,(1));
var pred__31682 = cljs.core._EQ_;
var expr__31683 = msg_name;
if(cljs.core.truth_(pred__31682.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31683))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31682.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31683))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31678,map__31678__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__,msg_hist,msg_names,msg){
return (function (state_31884){
var state_val_31885 = (state_31884[(1)]);
if((state_val_31885 === (7))){
var inst_31818 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31886_31927 = state_31884__$1;
(statearr_31886_31927[(2)] = inst_31818);

(statearr_31886_31927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (20))){
var inst_31846 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31846)){
var statearr_31887_31928 = state_31884__$1;
(statearr_31887_31928[(1)] = (22));

} else {
var statearr_31888_31929 = state_31884__$1;
(statearr_31888_31929[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (27))){
var inst_31858 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31859 = figwheel.client.heads_up.display_warning.call(null,inst_31858);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(30),inst_31859);
} else {
if((state_val_31885 === (1))){
var inst_31806 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31806)){
var statearr_31889_31930 = state_31884__$1;
(statearr_31889_31930[(1)] = (2));

} else {
var statearr_31890_31931 = state_31884__$1;
(statearr_31890_31931[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (24))){
var inst_31874 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31891_31932 = state_31884__$1;
(statearr_31891_31932[(2)] = inst_31874);

(statearr_31891_31932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (4))){
var inst_31882 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31884__$1,inst_31882);
} else {
if((state_val_31885 === (15))){
var inst_31834 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31835 = figwheel.client.format_messages.call(null,inst_31834);
var inst_31836 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31837 = figwheel.client.heads_up.display_error.call(null,inst_31835,inst_31836);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(18),inst_31837);
} else {
if((state_val_31885 === (21))){
var inst_31876 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31892_31933 = state_31884__$1;
(statearr_31892_31933[(2)] = inst_31876);

(statearr_31892_31933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (31))){
var inst_31865 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(34),inst_31865);
} else {
if((state_val_31885 === (32))){
var state_31884__$1 = state_31884;
var statearr_31893_31934 = state_31884__$1;
(statearr_31893_31934[(2)] = null);

(statearr_31893_31934[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (33))){
var inst_31870 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31894_31935 = state_31884__$1;
(statearr_31894_31935[(2)] = inst_31870);

(statearr_31894_31935[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (13))){
var inst_31824 = (state_31884[(2)]);
var inst_31825 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31826 = figwheel.client.format_messages.call(null,inst_31825);
var inst_31827 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31828 = figwheel.client.heads_up.display_error.call(null,inst_31826,inst_31827);
var state_31884__$1 = (function (){var statearr_31895 = state_31884;
(statearr_31895[(7)] = inst_31824);

return statearr_31895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(14),inst_31828);
} else {
if((state_val_31885 === (22))){
var inst_31848 = figwheel.client.heads_up.clear.call(null);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(25),inst_31848);
} else {
if((state_val_31885 === (29))){
var inst_31872 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31896_31936 = state_31884__$1;
(statearr_31896_31936[(2)] = inst_31872);

(statearr_31896_31936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (6))){
var inst_31814 = figwheel.client.heads_up.clear.call(null);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(9),inst_31814);
} else {
if((state_val_31885 === (28))){
var inst_31863 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31863)){
var statearr_31897_31937 = state_31884__$1;
(statearr_31897_31937[(1)] = (31));

} else {
var statearr_31898_31938 = state_31884__$1;
(statearr_31898_31938[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (25))){
var inst_31850 = (state_31884[(2)]);
var inst_31851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31852 = figwheel.client.heads_up.display_warning.call(null,inst_31851);
var state_31884__$1 = (function (){var statearr_31899 = state_31884;
(statearr_31899[(8)] = inst_31850);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(26),inst_31852);
} else {
if((state_val_31885 === (34))){
var inst_31867 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31900_31939 = state_31884__$1;
(statearr_31900_31939[(2)] = inst_31867);

(statearr_31900_31939[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (17))){
var inst_31878 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31901_31940 = state_31884__$1;
(statearr_31901_31940[(2)] = inst_31878);

(statearr_31901_31940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (3))){
var inst_31820 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31820)){
var statearr_31902_31941 = state_31884__$1;
(statearr_31902_31941[(1)] = (10));

} else {
var statearr_31903_31942 = state_31884__$1;
(statearr_31903_31942[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (12))){
var inst_31880 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31904_31943 = state_31884__$1;
(statearr_31904_31943[(2)] = inst_31880);

(statearr_31904_31943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (2))){
var inst_31808 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31808)){
var statearr_31905_31944 = state_31884__$1;
(statearr_31905_31944[(1)] = (5));

} else {
var statearr_31906_31945 = state_31884__$1;
(statearr_31906_31945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (23))){
var inst_31856 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31856)){
var statearr_31907_31946 = state_31884__$1;
(statearr_31907_31946[(1)] = (27));

} else {
var statearr_31908_31947 = state_31884__$1;
(statearr_31908_31947[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (19))){
var inst_31843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31844 = figwheel.client.heads_up.append_message.call(null,inst_31843);
var state_31884__$1 = state_31884;
var statearr_31909_31948 = state_31884__$1;
(statearr_31909_31948[(2)] = inst_31844);

(statearr_31909_31948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (11))){
var inst_31832 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31832)){
var statearr_31910_31949 = state_31884__$1;
(statearr_31910_31949[(1)] = (15));

} else {
var statearr_31911_31950 = state_31884__$1;
(statearr_31911_31950[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (9))){
var inst_31816 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31912_31951 = state_31884__$1;
(statearr_31912_31951[(2)] = inst_31816);

(statearr_31912_31951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (5))){
var inst_31810 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(8),inst_31810);
} else {
if((state_val_31885 === (14))){
var inst_31830 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31913_31952 = state_31884__$1;
(statearr_31913_31952[(2)] = inst_31830);

(statearr_31913_31952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (26))){
var inst_31854 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31914_31953 = state_31884__$1;
(statearr_31914_31953[(2)] = inst_31854);

(statearr_31914_31953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (16))){
var inst_31841 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31841)){
var statearr_31915_31954 = state_31884__$1;
(statearr_31915_31954[(1)] = (19));

} else {
var statearr_31916_31955 = state_31884__$1;
(statearr_31916_31955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (30))){
var inst_31861 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31917_31956 = state_31884__$1;
(statearr_31917_31956[(2)] = inst_31861);

(statearr_31917_31956[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (10))){
var inst_31822 = figwheel.client.heads_up.clear.call(null);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(13),inst_31822);
} else {
if((state_val_31885 === (18))){
var inst_31839 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31918_31957 = state_31884__$1;
(statearr_31918_31957[(2)] = inst_31839);

(statearr_31918_31957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (8))){
var inst_31812 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31919_31958 = state_31884__$1;
(statearr_31919_31958[(2)] = inst_31812);

(statearr_31919_31958[(1)] = (7));


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
});})(c__20705__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20684__auto__,c__20705__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto____0 = (function (){
var statearr_31923 = [null,null,null,null,null,null,null,null,null];
(statearr_31923[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto__);

(statearr_31923[(1)] = (1));

return statearr_31923;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto____1 = (function (state_31884){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_31884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e31924){if((e31924 instanceof Object)){
var ex__20688__auto__ = e31924;
var statearr_31925_31959 = state_31884;
(statearr_31925_31959[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31960 = state_31884;
state_31884 = G__31960;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto__ = function(state_31884){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto____1.call(this,state_31884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__,msg_hist,msg_names,msg))
})();
var state__20707__auto__ = (function (){var statearr_31926 = f__20706__auto__.call(null);
(statearr_31926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_31926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__,msg_hist,msg_names,msg))
);

return c__20705__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20705__auto___32023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___32023,ch){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___32023,ch){
return (function (state_32006){
var state_val_32007 = (state_32006[(1)]);
if((state_val_32007 === (8))){
var inst_31998 = (state_32006[(2)]);
var state_32006__$1 = (function (){var statearr_32008 = state_32006;
(statearr_32008[(7)] = inst_31998);

return statearr_32008;
})();
var statearr_32009_32024 = state_32006__$1;
(statearr_32009_32024[(2)] = null);

(statearr_32009_32024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32007 === (7))){
var inst_32002 = (state_32006[(2)]);
var state_32006__$1 = state_32006;
var statearr_32010_32025 = state_32006__$1;
(statearr_32010_32025[(2)] = inst_32002);

(statearr_32010_32025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32007 === (6))){
var state_32006__$1 = state_32006;
var statearr_32011_32026 = state_32006__$1;
(statearr_32011_32026[(2)] = null);

(statearr_32011_32026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32007 === (5))){
var inst_31994 = (state_32006[(8)]);
var inst_31996 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31994);
var state_32006__$1 = state_32006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32006__$1,(8),inst_31996);
} else {
if((state_val_32007 === (4))){
var inst_31994 = (state_32006[(8)]);
var inst_31994__$1 = (state_32006[(2)]);
var state_32006__$1 = (function (){var statearr_32012 = state_32006;
(statearr_32012[(8)] = inst_31994__$1);

return statearr_32012;
})();
if(cljs.core.truth_(inst_31994__$1)){
var statearr_32013_32027 = state_32006__$1;
(statearr_32013_32027[(1)] = (5));

} else {
var statearr_32014_32028 = state_32006__$1;
(statearr_32014_32028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32007 === (3))){
var inst_32004 = (state_32006[(2)]);
var state_32006__$1 = state_32006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32006__$1,inst_32004);
} else {
if((state_val_32007 === (2))){
var state_32006__$1 = state_32006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32006__$1,(4),ch);
} else {
if((state_val_32007 === (1))){
var state_32006__$1 = state_32006;
var statearr_32015_32029 = state_32006__$1;
(statearr_32015_32029[(2)] = null);

(statearr_32015_32029[(1)] = (2));


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
});})(c__20705__auto___32023,ch))
;
return ((function (switch__20684__auto__,c__20705__auto___32023,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20685__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20685__auto____0 = (function (){
var statearr_32019 = [null,null,null,null,null,null,null,null,null];
(statearr_32019[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20685__auto__);

(statearr_32019[(1)] = (1));

return statearr_32019;
});
var figwheel$client$heads_up_plugin_$_state_machine__20685__auto____1 = (function (state_32006){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_32006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e32020){if((e32020 instanceof Object)){
var ex__20688__auto__ = e32020;
var statearr_32021_32030 = state_32006;
(statearr_32021_32030[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32031 = state_32006;
state_32006 = G__32031;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20685__auto__ = function(state_32006){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20685__auto____1.call(this,state_32006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20685__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20685__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___32023,ch))
})();
var state__20707__auto__ = (function (){var statearr_32022 = f__20706__auto__.call(null);
(statearr_32022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___32023);

return statearr_32022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___32023,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__){
return (function (state_32052){
var state_val_32053 = (state_32052[(1)]);
if((state_val_32053 === (2))){
var inst_32049 = (state_32052[(2)]);
var inst_32050 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32052__$1 = (function (){var statearr_32054 = state_32052;
(statearr_32054[(7)] = inst_32049);

return statearr_32054;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32052__$1,inst_32050);
} else {
if((state_val_32053 === (1))){
var inst_32047 = cljs.core.async.timeout.call(null,(3000));
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32052__$1,(2),inst_32047);
} else {
return null;
}
}
});})(c__20705__auto__))
;
return ((function (switch__20684__auto__,c__20705__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20685__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20685__auto____0 = (function (){
var statearr_32058 = [null,null,null,null,null,null,null,null];
(statearr_32058[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20685__auto__);

(statearr_32058[(1)] = (1));

return statearr_32058;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20685__auto____1 = (function (state_32052){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_32052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e32059){if((e32059 instanceof Object)){
var ex__20688__auto__ = e32059;
var statearr_32060_32062 = state_32052;
(statearr_32060_32062[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32063 = state_32052;
state_32052 = G__32063;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20685__auto__ = function(state_32052){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20685__auto____1.call(this,state_32052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20685__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20685__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__))
})();
var state__20707__auto__ = (function (){var statearr_32061 = f__20706__auto__.call(null);
(statearr_32061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_32061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__))
);

return c__20705__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18070__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18070__auto__)){
return ("CustomEvent" in window);
} else {
return and__18070__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj32067 = {"detail":url};
return obj32067;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32068){
var map__32074 = p__32068;
var map__32074__$1 = ((cljs.core.seq_QMARK_.call(null,map__32074))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var ed = map__32074__$1;
var cause = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32075_32079 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32076_32080 = null;
var count__32077_32081 = (0);
var i__32078_32082 = (0);
while(true){
if((i__32078_32082 < count__32077_32081)){
var msg_32083 = cljs.core._nth.call(null,chunk__32076_32080,i__32078_32082);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32083);

var G__32084 = seq__32075_32079;
var G__32085 = chunk__32076_32080;
var G__32086 = count__32077_32081;
var G__32087 = (i__32078_32082 + (1));
seq__32075_32079 = G__32084;
chunk__32076_32080 = G__32085;
count__32077_32081 = G__32086;
i__32078_32082 = G__32087;
continue;
} else {
var temp__4126__auto___32088 = cljs.core.seq.call(null,seq__32075_32079);
if(temp__4126__auto___32088){
var seq__32075_32089__$1 = temp__4126__auto___32088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32075_32089__$1)){
var c__18867__auto___32090 = cljs.core.chunk_first.call(null,seq__32075_32089__$1);
var G__32091 = cljs.core.chunk_rest.call(null,seq__32075_32089__$1);
var G__32092 = c__18867__auto___32090;
var G__32093 = cljs.core.count.call(null,c__18867__auto___32090);
var G__32094 = (0);
seq__32075_32079 = G__32091;
chunk__32076_32080 = G__32092;
count__32077_32081 = G__32093;
i__32078_32082 = G__32094;
continue;
} else {
var msg_32095 = cljs.core.first.call(null,seq__32075_32089__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32095);

var G__32096 = cljs.core.next.call(null,seq__32075_32089__$1);
var G__32097 = null;
var G__32098 = (0);
var G__32099 = (0);
seq__32075_32079 = G__32096;
chunk__32076_32080 = G__32097;
count__32077_32081 = G__32098;
i__32078_32082 = G__32099;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32100){
var map__32102 = p__32100;
var map__32102__$1 = ((cljs.core.seq_QMARK_.call(null,map__32102))?cljs.core.apply.call(null,cljs.core.hash_map,map__32102):map__32102);
var w = map__32102__$1;
var message = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18070__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18070__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18070__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32109 = cljs.core.seq.call(null,plugins);
var chunk__32110 = null;
var count__32111 = (0);
var i__32112 = (0);
while(true){
if((i__32112 < count__32111)){
var vec__32113 = cljs.core._nth.call(null,chunk__32110,i__32112);
var k = cljs.core.nth.call(null,vec__32113,(0),null);
var plugin = cljs.core.nth.call(null,vec__32113,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32115 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32109,chunk__32110,count__32111,i__32112,pl_32115,vec__32113,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32115.call(null,msg_hist);
});})(seq__32109,chunk__32110,count__32111,i__32112,pl_32115,vec__32113,k,plugin))
);
} else {
}

var G__32116 = seq__32109;
var G__32117 = chunk__32110;
var G__32118 = count__32111;
var G__32119 = (i__32112 + (1));
seq__32109 = G__32116;
chunk__32110 = G__32117;
count__32111 = G__32118;
i__32112 = G__32119;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32109);
if(temp__4126__auto__){
var seq__32109__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32109__$1)){
var c__18867__auto__ = cljs.core.chunk_first.call(null,seq__32109__$1);
var G__32120 = cljs.core.chunk_rest.call(null,seq__32109__$1);
var G__32121 = c__18867__auto__;
var G__32122 = cljs.core.count.call(null,c__18867__auto__);
var G__32123 = (0);
seq__32109 = G__32120;
chunk__32110 = G__32121;
count__32111 = G__32122;
i__32112 = G__32123;
continue;
} else {
var vec__32114 = cljs.core.first.call(null,seq__32109__$1);
var k = cljs.core.nth.call(null,vec__32114,(0),null);
var plugin = cljs.core.nth.call(null,vec__32114,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32124 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32109,chunk__32110,count__32111,i__32112,pl_32124,vec__32114,k,plugin,seq__32109__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32124.call(null,msg_hist);
});})(seq__32109,chunk__32110,count__32111,i__32112,pl_32124,vec__32114,k,plugin,seq__32109__$1,temp__4126__auto__))
);
} else {
}

var G__32125 = cljs.core.next.call(null,seq__32109__$1);
var G__32126 = null;
var G__32127 = (0);
var G__32128 = (0);
seq__32109 = G__32125;
chunk__32110 = G__32126;
count__32111 = G__32127;
i__32112 = G__32128;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__32130 = arguments.length;
switch (G__32130) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19122__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19122__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32133){
var map__32134 = p__32133;
var map__32134__$1 = ((cljs.core.seq_QMARK_.call(null,map__32134))?cljs.core.apply.call(null,cljs.core.hash_map,map__32134):map__32134);
var opts = map__32134__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32132){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32132));
});

//# sourceMappingURL=client.js.map?rel=1430779898081