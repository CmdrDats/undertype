// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32530_32542 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32531_32543 = null;
var count__32532_32544 = (0);
var i__32533_32545 = (0);
while(true){
if((i__32533_32545 < count__32532_32544)){
var f_32546 = cljs.core._nth.call(null,chunk__32531_32543,i__32533_32545);
cljs.core.println.call(null,"  ",f_32546);

var G__32547 = seq__32530_32542;
var G__32548 = chunk__32531_32543;
var G__32549 = count__32532_32544;
var G__32550 = (i__32533_32545 + (1));
seq__32530_32542 = G__32547;
chunk__32531_32543 = G__32548;
count__32532_32544 = G__32549;
i__32533_32545 = G__32550;
continue;
} else {
var temp__4126__auto___32551 = cljs.core.seq.call(null,seq__32530_32542);
if(temp__4126__auto___32551){
var seq__32530_32552__$1 = temp__4126__auto___32551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32530_32552__$1)){
var c__18867__auto___32553 = cljs.core.chunk_first.call(null,seq__32530_32552__$1);
var G__32554 = cljs.core.chunk_rest.call(null,seq__32530_32552__$1);
var G__32555 = c__18867__auto___32553;
var G__32556 = cljs.core.count.call(null,c__18867__auto___32553);
var G__32557 = (0);
seq__32530_32542 = G__32554;
chunk__32531_32543 = G__32555;
count__32532_32544 = G__32556;
i__32533_32545 = G__32557;
continue;
} else {
var f_32558 = cljs.core.first.call(null,seq__32530_32552__$1);
cljs.core.println.call(null,"  ",f_32558);

var G__32559 = cljs.core.next.call(null,seq__32530_32552__$1);
var G__32560 = null;
var G__32561 = (0);
var G__32562 = (0);
seq__32530_32542 = G__32559;
chunk__32531_32543 = G__32560;
count__32532_32544 = G__32561;
i__32533_32545 = G__32562;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18082__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18082__auto__)){
return or__18082__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32535 = null;
var count__32536 = (0);
var i__32537 = (0);
while(true){
if((i__32537 < count__32536)){
var vec__32538 = cljs.core._nth.call(null,chunk__32535,i__32537);
var name = cljs.core.nth.call(null,vec__32538,(0),null);
var map__32539 = cljs.core.nth.call(null,vec__32538,(1),null);
var map__32539__$1 = ((cljs.core.seq_QMARK_.call(null,map__32539))?cljs.core.apply.call(null,cljs.core.hash_map,map__32539):map__32539);
var arglists = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__32539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32563 = seq__32534;
var G__32564 = chunk__32535;
var G__32565 = count__32536;
var G__32566 = (i__32537 + (1));
seq__32534 = G__32563;
chunk__32535 = G__32564;
count__32536 = G__32565;
i__32537 = G__32566;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32534);
if(temp__4126__auto__){
var seq__32534__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32534__$1)){
var c__18867__auto__ = cljs.core.chunk_first.call(null,seq__32534__$1);
var G__32567 = cljs.core.chunk_rest.call(null,seq__32534__$1);
var G__32568 = c__18867__auto__;
var G__32569 = cljs.core.count.call(null,c__18867__auto__);
var G__32570 = (0);
seq__32534 = G__32567;
chunk__32535 = G__32568;
count__32536 = G__32569;
i__32537 = G__32570;
continue;
} else {
var vec__32540 = cljs.core.first.call(null,seq__32534__$1);
var name = cljs.core.nth.call(null,vec__32540,(0),null);
var map__32541 = cljs.core.nth.call(null,vec__32540,(1),null);
var map__32541__$1 = ((cljs.core.seq_QMARK_.call(null,map__32541))?cljs.core.apply.call(null,cljs.core.hash_map,map__32541):map__32541);
var arglists = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32571 = cljs.core.next.call(null,seq__32534__$1);
var G__32572 = null;
var G__32573 = (0);
var G__32574 = (0);
seq__32534 = G__32571;
chunk__32535 = G__32572;
count__32536 = G__32573;
i__32537 = G__32574;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1430779898481