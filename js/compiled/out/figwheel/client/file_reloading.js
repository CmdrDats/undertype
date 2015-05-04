// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__32591_SHARP_,p2__32592_SHARP_){
var and__18070__auto__ = p1__32591_SHARP_;
if(cljs.core.truth_(and__18070__auto__)){
return p2__32592_SHARP_;
} else {
return and__18070__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18082__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18082__auto__){
return or__18082__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18082__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18082__auto__){
return or__18082__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18082__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18981__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18981__auto__,method_table__18977__auto__,prefer_table__18978__auto__,method_cache__18979__auto__,cached_hierarchy__18980__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__32593){
var map__32594 = p__32593;
var map__32594__$1 = ((cljs.core.seq_QMARK_.call(null,map__32594))?cljs.core.apply.call(null,cljs.core.hash_map,map__32594):map__32594);
var file = cljs.core.get.call(null,map__32594__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__32595){
var map__32596 = p__32595;
var map__32596__$1 = ((cljs.core.seq_QMARK_.call(null,map__32596))?cljs.core.apply.call(null,cljs.core.hash_map,map__32596):map__32596);
var namespace = cljs.core.get.call(null,map__32596__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18981__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18981__auto__,method_table__18977__auto__,prefer_table__18978__auto__,method_cache__18979__auto__,cached_hierarchy__18980__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e32597){if((e32597 instanceof Error)){
var e = e32597;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32597;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__32599 = arguments.length;
switch (G__32599) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32601,callback){
var map__32603 = p__32601;
var map__32603__$1 = ((cljs.core.seq_QMARK_.call(null,map__32603))?cljs.core.apply.call(null,cljs.core.hash_map,map__32603):map__32603);
var file_msg = map__32603__$1;
var request_url = cljs.core.get.call(null,map__32603__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32603,map__32603__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32603,map__32603__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32604){
var map__32606 = p__32604;
var map__32606__$1 = ((cljs.core.seq_QMARK_.call(null,map__32606))?cljs.core.apply.call(null,cljs.core.hash_map,map__32606):map__32606);
var file_msg = map__32606__$1;
var meta_data = cljs.core.get.call(null,map__32606__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__32606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18082__auto__ = meta_data;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18070__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18070__auto__){
var or__18082__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
var or__18082__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18082__auto____$1)){
return or__18082__auto____$1;
} else {
var and__18070__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18070__auto____$1){
var or__18082__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18082__auto____$2){
return or__18082__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18070__auto____$1;
}
}
}
} else {
return and__18070__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32607,callback){
var map__32609 = p__32607;
var map__32609__$1 = ((cljs.core.seq_QMARK_.call(null,map__32609))?cljs.core.apply.call(null,cljs.core.hash_map,map__32609):map__32609);
var file_msg = map__32609__$1;
var namespace = cljs.core.get.call(null,map__32609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__32609__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20705__auto___32696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto___32696,out){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto___32696,out){
return (function (state_32678){
var state_val_32679 = (state_32678[(1)]);
if((state_val_32679 === (7))){
var inst_32662 = (state_32678[(7)]);
var inst_32668 = (state_32678[(2)]);
var inst_32669 = cljs.core.async.put_BANG_.call(null,out,inst_32668);
var inst_32658 = inst_32662;
var state_32678__$1 = (function (){var statearr_32680 = state_32678;
(statearr_32680[(8)] = inst_32669);

(statearr_32680[(9)] = inst_32658);

return statearr_32680;
})();
var statearr_32681_32697 = state_32678__$1;
(statearr_32681_32697[(2)] = null);

(statearr_32681_32697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (6))){
var inst_32674 = (state_32678[(2)]);
var state_32678__$1 = state_32678;
var statearr_32682_32698 = state_32678__$1;
(statearr_32682_32698[(2)] = inst_32674);

(statearr_32682_32698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (5))){
var inst_32672 = cljs.core.async.close_BANG_.call(null,out);
var state_32678__$1 = state_32678;
var statearr_32683_32699 = state_32678__$1;
(statearr_32683_32699[(2)] = inst_32672);

(statearr_32683_32699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (4))){
var inst_32661 = (state_32678[(10)]);
var inst_32666 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32661);
var state_32678__$1 = state_32678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32678__$1,(7),inst_32666);
} else {
if((state_val_32679 === (3))){
var inst_32676 = (state_32678[(2)]);
var state_32678__$1 = state_32678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32678__$1,inst_32676);
} else {
if((state_val_32679 === (2))){
var inst_32658 = (state_32678[(9)]);
var inst_32661 = (state_32678[(10)]);
var inst_32661__$1 = cljs.core.nth.call(null,inst_32658,(0),null);
var inst_32662 = cljs.core.nthnext.call(null,inst_32658,(1));
var inst_32663 = (inst_32661__$1 == null);
var inst_32664 = cljs.core.not.call(null,inst_32663);
var state_32678__$1 = (function (){var statearr_32684 = state_32678;
(statearr_32684[(10)] = inst_32661__$1);

(statearr_32684[(7)] = inst_32662);

return statearr_32684;
})();
if(inst_32664){
var statearr_32685_32700 = state_32678__$1;
(statearr_32685_32700[(1)] = (4));

} else {
var statearr_32686_32701 = state_32678__$1;
(statearr_32686_32701[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (1))){
var inst_32656 = cljs.core.nth.call(null,files,(0),null);
var inst_32657 = cljs.core.nthnext.call(null,files,(1));
var inst_32658 = files;
var state_32678__$1 = (function (){var statearr_32687 = state_32678;
(statearr_32687[(11)] = inst_32657);

(statearr_32687[(12)] = inst_32656);

(statearr_32687[(9)] = inst_32658);

return statearr_32687;
})();
var statearr_32688_32702 = state_32678__$1;
(statearr_32688_32702[(2)] = null);

(statearr_32688_32702[(1)] = (2));


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
});})(c__20705__auto___32696,out))
;
return ((function (switch__20684__auto__,c__20705__auto___32696,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto____0 = (function (){
var statearr_32692 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32692[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto__);

(statearr_32692[(1)] = (1));

return statearr_32692;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto____1 = (function (state_32678){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_32678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e32693){if((e32693 instanceof Object)){
var ex__20688__auto__ = e32693;
var statearr_32694_32703 = state_32678;
(statearr_32694_32703[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32704 = state_32678;
state_32678 = G__32704;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto__ = function(state_32678){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto____1.call(this,state_32678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto___32696,out))
})();
var state__20707__auto__ = (function (){var statearr_32695 = f__20706__auto__.call(null);
(statearr_32695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto___32696);

return statearr_32695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto___32696,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__32705,p__32706){
var map__32709 = p__32705;
var map__32709__$1 = ((cljs.core.seq_QMARK_.call(null,map__32709))?cljs.core.apply.call(null,cljs.core.hash_map,map__32709):map__32709);
var opts = map__32709__$1;
var url_rewriter = cljs.core.get.call(null,map__32709__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__32710 = p__32706;
var map__32710__$1 = ((cljs.core.seq_QMARK_.call(null,map__32710))?cljs.core.apply.call(null,cljs.core.hash_map,map__32710):map__32710);
var file_msg = map__32710__$1;
var file = cljs.core.get.call(null,map__32710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32711){
var map__32714 = p__32711;
var map__32714__$1 = ((cljs.core.seq_QMARK_.call(null,map__32714))?cljs.core.apply.call(null,cljs.core.hash_map,map__32714):map__32714);
var file = cljs.core.get.call(null,map__32714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__32714__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18070__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18070__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18070__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e32715){var e = e32715;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32720,p__32721){
var map__32922 = p__32720;
var map__32922__$1 = ((cljs.core.seq_QMARK_.call(null,map__32922))?cljs.core.apply.call(null,cljs.core.hash_map,map__32922):map__32922);
var opts = map__32922__$1;
var load_unchanged_files = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__32922__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__32923 = p__32721;
var map__32923__$1 = ((cljs.core.seq_QMARK_.call(null,map__32923))?cljs.core.apply.call(null,cljs.core.hash_map,map__32923):map__32923);
var msg = map__32923__$1;
var files = cljs.core.get.call(null,map__32923__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (state_33047){
var state_val_33048 = (state_33047[(1)]);
if((state_val_33048 === (7))){
var inst_32935 = (state_33047[(7)]);
var inst_32936 = (state_33047[(8)]);
var inst_32937 = (state_33047[(9)]);
var inst_32934 = (state_33047[(10)]);
var inst_32942 = cljs.core._nth.call(null,inst_32935,inst_32937);
var inst_32943 = figwheel.client.file_reloading.eval_body.call(null,inst_32942);
var inst_32944 = (inst_32937 + (1));
var tmp33049 = inst_32935;
var tmp33050 = inst_32936;
var tmp33051 = inst_32934;
var inst_32934__$1 = tmp33051;
var inst_32935__$1 = tmp33049;
var inst_32936__$1 = tmp33050;
var inst_32937__$1 = inst_32944;
var state_33047__$1 = (function (){var statearr_33052 = state_33047;
(statearr_33052[(11)] = inst_32943);

(statearr_33052[(7)] = inst_32935__$1);

(statearr_33052[(8)] = inst_32936__$1);

(statearr_33052[(9)] = inst_32937__$1);

(statearr_33052[(10)] = inst_32934__$1);

return statearr_33052;
})();
var statearr_33053_33122 = state_33047__$1;
(statearr_33053_33122[(2)] = null);

(statearr_33053_33122[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (20))){
var inst_32986 = (state_33047[(12)]);
var inst_32979 = (state_33047[(13)]);
var inst_32984 = (state_33047[(14)]);
var inst_32980 = (state_33047[(15)]);
var inst_32983 = (state_33047[(16)]);
var inst_32989 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32991 = (function (){var files_not_loaded = inst_32986;
var res = inst_32984;
var res_SINGLEQUOTE_ = inst_32983;
var files_SINGLEQUOTE_ = inst_32980;
var all_files = inst_32979;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32986,inst_32979,inst_32984,inst_32980,inst_32983,inst_32989,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (p__32990){
var map__33054 = p__32990;
var map__33054__$1 = ((cljs.core.seq_QMARK_.call(null,map__33054))?cljs.core.apply.call(null,cljs.core.hash_map,map__33054):map__33054);
var file = cljs.core.get.call(null,map__33054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__33054__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32986,inst_32979,inst_32984,inst_32980,inst_32983,inst_32989,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var inst_32992 = cljs.core.map.call(null,inst_32991,inst_32984);
var inst_32993 = cljs.core.pr_str.call(null,inst_32992);
var inst_32994 = figwheel.client.utils.log.call(null,inst_32993);
var inst_32995 = (function (){var files_not_loaded = inst_32986;
var res = inst_32984;
var res_SINGLEQUOTE_ = inst_32983;
var files_SINGLEQUOTE_ = inst_32980;
var all_files = inst_32979;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32986,inst_32979,inst_32984,inst_32980,inst_32983,inst_32989,inst_32991,inst_32992,inst_32993,inst_32994,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32986,inst_32979,inst_32984,inst_32980,inst_32983,inst_32989,inst_32991,inst_32992,inst_32993,inst_32994,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var inst_32996 = setTimeout(inst_32995,(10));
var state_33047__$1 = (function (){var statearr_33055 = state_33047;
(statearr_33055[(17)] = inst_32989);

(statearr_33055[(18)] = inst_32994);

return statearr_33055;
})();
var statearr_33056_33123 = state_33047__$1;
(statearr_33056_33123[(2)] = inst_32996);

(statearr_33056_33123[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (27))){
var inst_33006 = (state_33047[(19)]);
var state_33047__$1 = state_33047;
var statearr_33057_33124 = state_33047__$1;
(statearr_33057_33124[(2)] = inst_33006);

(statearr_33057_33124[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (1))){
var inst_32926 = (state_33047[(20)]);
var inst_32924 = before_jsload.call(null,files);
var inst_32925 = (function (){return ((function (inst_32926,inst_32924,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (p1__32716_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32716_SHARP_);
});
;})(inst_32926,inst_32924,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var inst_32926__$1 = cljs.core.filter.call(null,inst_32925,files);
var inst_32927 = cljs.core.not_empty.call(null,inst_32926__$1);
var state_33047__$1 = (function (){var statearr_33058 = state_33047;
(statearr_33058[(21)] = inst_32924);

(statearr_33058[(20)] = inst_32926__$1);

return statearr_33058;
})();
if(cljs.core.truth_(inst_32927)){
var statearr_33059_33125 = state_33047__$1;
(statearr_33059_33125[(1)] = (2));

} else {
var statearr_33060_33126 = state_33047__$1;
(statearr_33060_33126[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (24))){
var state_33047__$1 = state_33047;
var statearr_33061_33127 = state_33047__$1;
(statearr_33061_33127[(2)] = null);

(statearr_33061_33127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (4))){
var inst_32971 = (state_33047[(2)]);
var inst_32972 = (function (){return ((function (inst_32971,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (p1__32717_SHARP_){
var and__18070__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32717_SHARP_);
if(cljs.core.truth_(and__18070__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32717_SHARP_));
} else {
return and__18070__auto__;
}
});
;})(inst_32971,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var inst_32973 = cljs.core.filter.call(null,inst_32972,files);
var state_33047__$1 = (function (){var statearr_33062 = state_33047;
(statearr_33062[(22)] = inst_32973);

(statearr_33062[(23)] = inst_32971);

return statearr_33062;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33063_33128 = state_33047__$1;
(statearr_33063_33128[(1)] = (16));

} else {
var statearr_33064_33129 = state_33047__$1;
(statearr_33064_33129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (15))){
var inst_32961 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33065_33130 = state_33047__$1;
(statearr_33065_33130[(2)] = inst_32961);

(statearr_33065_33130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (21))){
var state_33047__$1 = state_33047;
var statearr_33066_33131 = state_33047__$1;
(statearr_33066_33131[(2)] = null);

(statearr_33066_33131[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (31))){
var inst_33014 = (state_33047[(24)]);
var inst_33024 = (state_33047[(2)]);
var inst_33025 = cljs.core.not_empty.call(null,inst_33014);
var state_33047__$1 = (function (){var statearr_33067 = state_33047;
(statearr_33067[(25)] = inst_33024);

return statearr_33067;
})();
if(cljs.core.truth_(inst_33025)){
var statearr_33068_33132 = state_33047__$1;
(statearr_33068_33132[(1)] = (32));

} else {
var statearr_33069_33133 = state_33047__$1;
(statearr_33069_33133[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (32))){
var inst_33014 = (state_33047[(24)]);
var inst_33027 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33014);
var inst_33028 = cljs.core.pr_str.call(null,inst_33027);
var inst_33029 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33028)].join('');
var inst_33030 = figwheel.client.utils.log.call(null,inst_33029);
var state_33047__$1 = state_33047;
var statearr_33070_33134 = state_33047__$1;
(statearr_33070_33134[(2)] = inst_33030);

(statearr_33070_33134[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (33))){
var state_33047__$1 = state_33047;
var statearr_33071_33135 = state_33047__$1;
(statearr_33071_33135[(2)] = null);

(statearr_33071_33135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (13))){
var inst_32947 = (state_33047[(26)]);
var inst_32951 = cljs.core.chunk_first.call(null,inst_32947);
var inst_32952 = cljs.core.chunk_rest.call(null,inst_32947);
var inst_32953 = cljs.core.count.call(null,inst_32951);
var inst_32934 = inst_32952;
var inst_32935 = inst_32951;
var inst_32936 = inst_32953;
var inst_32937 = (0);
var state_33047__$1 = (function (){var statearr_33072 = state_33047;
(statearr_33072[(7)] = inst_32935);

(statearr_33072[(8)] = inst_32936);

(statearr_33072[(9)] = inst_32937);

(statearr_33072[(10)] = inst_32934);

return statearr_33072;
})();
var statearr_33073_33136 = state_33047__$1;
(statearr_33073_33136[(2)] = null);

(statearr_33073_33136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (22))){
var inst_32986 = (state_33047[(12)]);
var inst_32999 = (state_33047[(2)]);
var inst_33000 = cljs.core.not_empty.call(null,inst_32986);
var state_33047__$1 = (function (){var statearr_33074 = state_33047;
(statearr_33074[(27)] = inst_32999);

return statearr_33074;
})();
if(cljs.core.truth_(inst_33000)){
var statearr_33075_33137 = state_33047__$1;
(statearr_33075_33137[(1)] = (23));

} else {
var statearr_33076_33138 = state_33047__$1;
(statearr_33076_33138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (36))){
var state_33047__$1 = state_33047;
var statearr_33077_33139 = state_33047__$1;
(statearr_33077_33139[(2)] = null);

(statearr_33077_33139[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (29))){
var inst_33015 = (state_33047[(28)]);
var inst_33018 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33015);
var inst_33019 = cljs.core.pr_str.call(null,inst_33018);
var inst_33020 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33019)].join('');
var inst_33021 = figwheel.client.utils.log.call(null,inst_33020);
var state_33047__$1 = state_33047;
var statearr_33078_33140 = state_33047__$1;
(statearr_33078_33140[(2)] = inst_33021);

(statearr_33078_33140[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (6))){
var inst_32968 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33079_33141 = state_33047__$1;
(statearr_33079_33141[(2)] = inst_32968);

(statearr_33079_33141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (28))){
var inst_33015 = (state_33047[(28)]);
var inst_33012 = (state_33047[(2)]);
var inst_33013 = cljs.core.get.call(null,inst_33012,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33014 = cljs.core.get.call(null,inst_33012,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33015__$1 = cljs.core.get.call(null,inst_33012,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33016 = cljs.core.not_empty.call(null,inst_33015__$1);
var state_33047__$1 = (function (){var statearr_33080 = state_33047;
(statearr_33080[(28)] = inst_33015__$1);

(statearr_33080[(29)] = inst_33013);

(statearr_33080[(24)] = inst_33014);

return statearr_33080;
})();
if(cljs.core.truth_(inst_33016)){
var statearr_33081_33142 = state_33047__$1;
(statearr_33081_33142[(1)] = (29));

} else {
var statearr_33082_33143 = state_33047__$1;
(statearr_33082_33143[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (25))){
var inst_33045 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33047__$1,inst_33045);
} else {
if((state_val_33048 === (34))){
var inst_33013 = (state_33047[(29)]);
var inst_33033 = (state_33047[(2)]);
var inst_33034 = cljs.core.not_empty.call(null,inst_33013);
var state_33047__$1 = (function (){var statearr_33083 = state_33047;
(statearr_33083[(30)] = inst_33033);

return statearr_33083;
})();
if(cljs.core.truth_(inst_33034)){
var statearr_33084_33144 = state_33047__$1;
(statearr_33084_33144[(1)] = (35));

} else {
var statearr_33085_33145 = state_33047__$1;
(statearr_33085_33145[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (17))){
var inst_32973 = (state_33047[(22)]);
var state_33047__$1 = state_33047;
var statearr_33086_33146 = state_33047__$1;
(statearr_33086_33146[(2)] = inst_32973);

(statearr_33086_33146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (3))){
var state_33047__$1 = state_33047;
var statearr_33087_33147 = state_33047__$1;
(statearr_33087_33147[(2)] = null);

(statearr_33087_33147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (12))){
var inst_32964 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33088_33148 = state_33047__$1;
(statearr_33088_33148[(2)] = inst_32964);

(statearr_33088_33148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (2))){
var inst_32926 = (state_33047[(20)]);
var inst_32933 = cljs.core.seq.call(null,inst_32926);
var inst_32934 = inst_32933;
var inst_32935 = null;
var inst_32936 = (0);
var inst_32937 = (0);
var state_33047__$1 = (function (){var statearr_33089 = state_33047;
(statearr_33089[(7)] = inst_32935);

(statearr_33089[(8)] = inst_32936);

(statearr_33089[(9)] = inst_32937);

(statearr_33089[(10)] = inst_32934);

return statearr_33089;
})();
var statearr_33090_33149 = state_33047__$1;
(statearr_33090_33149[(2)] = null);

(statearr_33090_33149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (23))){
var inst_33006 = (state_33047[(19)]);
var inst_32986 = (state_33047[(12)]);
var inst_32979 = (state_33047[(13)]);
var inst_32984 = (state_33047[(14)]);
var inst_32980 = (state_33047[(15)]);
var inst_32983 = (state_33047[(16)]);
var inst_33002 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33005 = (function (){var files_not_loaded = inst_32986;
var res = inst_32984;
var res_SINGLEQUOTE_ = inst_32983;
var files_SINGLEQUOTE_ = inst_32980;
var all_files = inst_32979;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33006,inst_32986,inst_32979,inst_32984,inst_32980,inst_32983,inst_33002,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (p__33004){
var map__33091 = p__33004;
var map__33091__$1 = ((cljs.core.seq_QMARK_.call(null,map__33091))?cljs.core.apply.call(null,cljs.core.hash_map,map__33091):map__33091);
var meta_data = cljs.core.get.call(null,map__33091__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33006,inst_32986,inst_32979,inst_32984,inst_32980,inst_32983,inst_33002,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var inst_33006__$1 = cljs.core.group_by.call(null,inst_33005,inst_32986);
var inst_33007 = cljs.core.seq_QMARK_.call(null,inst_33006__$1);
var state_33047__$1 = (function (){var statearr_33092 = state_33047;
(statearr_33092[(19)] = inst_33006__$1);

(statearr_33092[(31)] = inst_33002);

return statearr_33092;
})();
if(inst_33007){
var statearr_33093_33150 = state_33047__$1;
(statearr_33093_33150[(1)] = (26));

} else {
var statearr_33094_33151 = state_33047__$1;
(statearr_33094_33151[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (35))){
var inst_33013 = (state_33047[(29)]);
var inst_33036 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33013);
var inst_33037 = cljs.core.pr_str.call(null,inst_33036);
var inst_33038 = [cljs.core.str("not required: "),cljs.core.str(inst_33037)].join('');
var inst_33039 = figwheel.client.utils.log.call(null,inst_33038);
var state_33047__$1 = state_33047;
var statearr_33095_33152 = state_33047__$1;
(statearr_33095_33152[(2)] = inst_33039);

(statearr_33095_33152[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (19))){
var inst_32979 = (state_33047[(13)]);
var inst_32984 = (state_33047[(14)]);
var inst_32980 = (state_33047[(15)]);
var inst_32983 = (state_33047[(16)]);
var inst_32983__$1 = (state_33047[(2)]);
var inst_32984__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32983__$1);
var inst_32985 = (function (){var res = inst_32984__$1;
var res_SINGLEQUOTE_ = inst_32983__$1;
var files_SINGLEQUOTE_ = inst_32980;
var all_files = inst_32979;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32979,inst_32984,inst_32980,inst_32983,inst_32983__$1,inst_32984__$1,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (p1__32719_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32719_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32979,inst_32984,inst_32980,inst_32983,inst_32983__$1,inst_32984__$1,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var inst_32986 = cljs.core.filter.call(null,inst_32985,inst_32983__$1);
var inst_32987 = cljs.core.not_empty.call(null,inst_32984__$1);
var state_33047__$1 = (function (){var statearr_33096 = state_33047;
(statearr_33096[(12)] = inst_32986);

(statearr_33096[(14)] = inst_32984__$1);

(statearr_33096[(16)] = inst_32983__$1);

return statearr_33096;
})();
if(cljs.core.truth_(inst_32987)){
var statearr_33097_33153 = state_33047__$1;
(statearr_33097_33153[(1)] = (20));

} else {
var statearr_33098_33154 = state_33047__$1;
(statearr_33098_33154[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (11))){
var state_33047__$1 = state_33047;
var statearr_33099_33155 = state_33047__$1;
(statearr_33099_33155[(2)] = null);

(statearr_33099_33155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (9))){
var inst_32966 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33100_33156 = state_33047__$1;
(statearr_33100_33156[(2)] = inst_32966);

(statearr_33100_33156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (5))){
var inst_32936 = (state_33047[(8)]);
var inst_32937 = (state_33047[(9)]);
var inst_32939 = (inst_32937 < inst_32936);
var inst_32940 = inst_32939;
var state_33047__$1 = state_33047;
if(cljs.core.truth_(inst_32940)){
var statearr_33101_33157 = state_33047__$1;
(statearr_33101_33157[(1)] = (7));

} else {
var statearr_33102_33158 = state_33047__$1;
(statearr_33102_33158[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (14))){
var inst_32947 = (state_33047[(26)]);
var inst_32956 = cljs.core.first.call(null,inst_32947);
var inst_32957 = figwheel.client.file_reloading.eval_body.call(null,inst_32956);
var inst_32958 = cljs.core.next.call(null,inst_32947);
var inst_32934 = inst_32958;
var inst_32935 = null;
var inst_32936 = (0);
var inst_32937 = (0);
var state_33047__$1 = (function (){var statearr_33103 = state_33047;
(statearr_33103[(32)] = inst_32957);

(statearr_33103[(7)] = inst_32935);

(statearr_33103[(8)] = inst_32936);

(statearr_33103[(9)] = inst_32937);

(statearr_33103[(10)] = inst_32934);

return statearr_33103;
})();
var statearr_33104_33159 = state_33047__$1;
(statearr_33104_33159[(2)] = null);

(statearr_33104_33159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (26))){
var inst_33006 = (state_33047[(19)]);
var inst_33009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33006);
var state_33047__$1 = state_33047;
var statearr_33105_33160 = state_33047__$1;
(statearr_33105_33160[(2)] = inst_33009);

(statearr_33105_33160[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (16))){
var inst_32973 = (state_33047[(22)]);
var inst_32975 = (function (){var all_files = inst_32973;
return ((function (all_files,inst_32973,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function (p1__32718_SHARP_){
return cljs.core.update_in.call(null,p1__32718_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32973,state_val_33048,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var inst_32976 = cljs.core.map.call(null,inst_32975,inst_32973);
var state_33047__$1 = state_33047;
var statearr_33106_33161 = state_33047__$1;
(statearr_33106_33161[(2)] = inst_32976);

(statearr_33106_33161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (30))){
var state_33047__$1 = state_33047;
var statearr_33107_33162 = state_33047__$1;
(statearr_33107_33162[(2)] = null);

(statearr_33107_33162[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (10))){
var inst_32947 = (state_33047[(26)]);
var inst_32949 = cljs.core.chunked_seq_QMARK_.call(null,inst_32947);
var state_33047__$1 = state_33047;
if(inst_32949){
var statearr_33108_33163 = state_33047__$1;
(statearr_33108_33163[(1)] = (13));

} else {
var statearr_33109_33164 = state_33047__$1;
(statearr_33109_33164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (18))){
var inst_32979 = (state_33047[(13)]);
var inst_32980 = (state_33047[(15)]);
var inst_32979__$1 = (state_33047[(2)]);
var inst_32980__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32979__$1);
var inst_32981 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32980__$1);
var state_33047__$1 = (function (){var statearr_33110 = state_33047;
(statearr_33110[(13)] = inst_32979__$1);

(statearr_33110[(15)] = inst_32980__$1);

return statearr_33110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33047__$1,(19),inst_32981);
} else {
if((state_val_33048 === (37))){
var inst_33042 = (state_33047[(2)]);
var state_33047__$1 = state_33047;
var statearr_33111_33165 = state_33047__$1;
(statearr_33111_33165[(2)] = inst_33042);

(statearr_33111_33165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33048 === (8))){
var inst_32947 = (state_33047[(26)]);
var inst_32934 = (state_33047[(10)]);
var inst_32947__$1 = cljs.core.seq.call(null,inst_32934);
var state_33047__$1 = (function (){var statearr_33112 = state_33047;
(statearr_33112[(26)] = inst_32947__$1);

return statearr_33112;
})();
if(inst_32947__$1){
var statearr_33113_33166 = state_33047__$1;
(statearr_33113_33166[(1)] = (10));

} else {
var statearr_33114_33167 = state_33047__$1;
(statearr_33114_33167[(1)] = (11));

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
});})(c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
;
return ((function (switch__20684__auto__,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto____0 = (function (){
var statearr_33118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33118[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto__);

(statearr_33118[(1)] = (1));

return statearr_33118;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto____1 = (function (state_33047){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33119){if((e33119 instanceof Object)){
var ex__20688__auto__ = e33119;
var statearr_33120_33168 = state_33047;
(statearr_33120_33168[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33169 = state_33047;
state_33047 = G__33169;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto__ = function(state_33047){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto____1.call(this,state_33047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
})();
var state__20707__auto__ = (function (){var statearr_33121 = f__20706__auto__.call(null);
(statearr_33121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_33121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__,map__32922,map__32922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32923,map__32923__$1,msg,files))
);

return c__20705__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33172,link){
var map__33174 = p__33172;
var map__33174__$1 = ((cljs.core.seq_QMARK_.call(null,map__33174))?cljs.core.apply.call(null,cljs.core.hash_map,map__33174):map__33174);
var file = cljs.core.get.call(null,map__33174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__33174,map__33174__$1,file){
return (function (p1__33170_SHARP_,p2__33171_SHARP_){
if(cljs.core._EQ_.call(null,p1__33170_SHARP_,p2__33171_SHARP_)){
return p1__33170_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__33174,map__33174__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33178){
var map__33179 = p__33178;
var map__33179__$1 = ((cljs.core.seq_QMARK_.call(null,map__33179))?cljs.core.apply.call(null,cljs.core.hash_map,map__33179):map__33179);
var current_url_length = cljs.core.get.call(null,map__33179__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__33179__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33175_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33175_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__33181 = arguments.length;
switch (G__33181) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33183){
var map__33185 = p__33183;
var map__33185__$1 = ((cljs.core.seq_QMARK_.call(null,map__33185))?cljs.core.apply.call(null,cljs.core.hash_map,map__33185):map__33185);
var f_data = map__33185__$1;
var request_url = cljs.core.get.call(null,map__33185__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__33185__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18082__auto__ = request_url;
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33186,files_msg){
var map__33208 = p__33186;
var map__33208__$1 = ((cljs.core.seq_QMARK_.call(null,map__33208))?cljs.core.apply.call(null,cljs.core.hash_map,map__33208):map__33208);
var opts = map__33208__$1;
var on_cssload = cljs.core.get.call(null,map__33208__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33209_33229 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33210_33230 = null;
var count__33211_33231 = (0);
var i__33212_33232 = (0);
while(true){
if((i__33212_33232 < count__33211_33231)){
var f_33233 = cljs.core._nth.call(null,chunk__33210_33230,i__33212_33232);
figwheel.client.file_reloading.reload_css_file.call(null,f_33233);

var G__33234 = seq__33209_33229;
var G__33235 = chunk__33210_33230;
var G__33236 = count__33211_33231;
var G__33237 = (i__33212_33232 + (1));
seq__33209_33229 = G__33234;
chunk__33210_33230 = G__33235;
count__33211_33231 = G__33236;
i__33212_33232 = G__33237;
continue;
} else {
var temp__4126__auto___33238 = cljs.core.seq.call(null,seq__33209_33229);
if(temp__4126__auto___33238){
var seq__33209_33239__$1 = temp__4126__auto___33238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33209_33239__$1)){
var c__18867__auto___33240 = cljs.core.chunk_first.call(null,seq__33209_33239__$1);
var G__33241 = cljs.core.chunk_rest.call(null,seq__33209_33239__$1);
var G__33242 = c__18867__auto___33240;
var G__33243 = cljs.core.count.call(null,c__18867__auto___33240);
var G__33244 = (0);
seq__33209_33229 = G__33241;
chunk__33210_33230 = G__33242;
count__33211_33231 = G__33243;
i__33212_33232 = G__33244;
continue;
} else {
var f_33245 = cljs.core.first.call(null,seq__33209_33239__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33245);

var G__33246 = cljs.core.next.call(null,seq__33209_33239__$1);
var G__33247 = null;
var G__33248 = (0);
var G__33249 = (0);
seq__33209_33229 = G__33246;
chunk__33210_33230 = G__33247;
count__33211_33231 = G__33248;
i__33212_33232 = G__33249;
continue;
}
} else {
}
}
break;
}

var c__20705__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20705__auto__,map__33208,map__33208__$1,opts,on_cssload){
return (function (){
var f__20706__auto__ = (function (){var switch__20684__auto__ = ((function (c__20705__auto__,map__33208,map__33208__$1,opts,on_cssload){
return (function (state_33219){
var state_val_33220 = (state_33219[(1)]);
if((state_val_33220 === (2))){
var inst_33215 = (state_33219[(2)]);
var inst_33216 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_33217 = on_cssload.call(null,inst_33216);
var state_33219__$1 = (function (){var statearr_33221 = state_33219;
(statearr_33221[(7)] = inst_33215);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33219__$1,inst_33217);
} else {
if((state_val_33220 === (1))){
var inst_33213 = cljs.core.async.timeout.call(null,(100));
var state_33219__$1 = state_33219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33219__$1,(2),inst_33213);
} else {
return null;
}
}
});})(c__20705__auto__,map__33208,map__33208__$1,opts,on_cssload))
;
return ((function (switch__20684__auto__,c__20705__auto__,map__33208,map__33208__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto____0 = (function (){
var statearr_33225 = [null,null,null,null,null,null,null,null];
(statearr_33225[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto__);

(statearr_33225[(1)] = (1));

return statearr_33225;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto____1 = (function (state_33219){
while(true){
var ret_value__20686__auto__ = (function (){try{while(true){
var result__20687__auto__ = switch__20684__auto__.call(null,state_33219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20687__auto__;
}
break;
}
}catch (e33226){if((e33226 instanceof Object)){
var ex__20688__auto__ = e33226;
var statearr_33227_33250 = state_33219;
(statearr_33227_33250[(5)] = ex__20688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33251 = state_33219;
state_33219 = G__33251;
continue;
} else {
return ret_value__20686__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto__ = function(state_33219){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto____1.call(this,state_33219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20685__auto__;
})()
;})(switch__20684__auto__,c__20705__auto__,map__33208,map__33208__$1,opts,on_cssload))
})();
var state__20707__auto__ = (function (){var statearr_33228 = f__20706__auto__.call(null);
(statearr_33228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20705__auto__);

return statearr_33228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20707__auto__);
});})(c__20705__auto__,map__33208,map__33208__$1,opts,on_cssload))
);

return c__20705__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1430779898769