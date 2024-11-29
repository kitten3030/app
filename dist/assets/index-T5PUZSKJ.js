(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qa(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const It={},br=[],Fe=()=>{},Lg=()=>!1,Yi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ya=e=>e.startsWith("onUpdate:"),Ut=Object.assign,Xa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Fg=Object.prototype.hasOwnProperty,yt=(e,t)=>Fg.call(e,t),nt=Array.isArray,Rr=e=>Xi(e)==="[object Map]",Xh=e=>Xi(e)==="[object Set]",at=e=>typeof e=="function",Dt=e=>typeof e=="string",Vn=e=>typeof e=="symbol",Ct=e=>e!==null&&typeof e=="object",Jh=e=>(Ct(e)||at(e))&&at(e.then)&&at(e.catch),Zh=Object.prototype.toString,Xi=e=>Zh.call(e),Ug=e=>Xi(e).slice(8,-1),tf=e=>Xi(e)==="[object Object]",Ja=e=>Dt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hs=Qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Bg=/-(\w)/g,wn=Ji(e=>e.replace(Bg,(t,n)=>n?n.toUpperCase():"")),$g=/\B([A-Z])/g,rr=Ji(e=>e.replace($g,"-$1").toLowerCase()),ef=Ji(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bo=Ji(e=>e?`on${ef(e)}`:""),yn=(e,t)=>!Object.is(e,t),_i=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},nf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},da=e=>{const t=parseFloat(e);return isNaN(t)?e:t},jg=e=>{const t=Dt(e)?Number(e):NaN;return isNaN(t)?e:t};let Qc;const Zi=()=>Qc||(Qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function to(e){if(nt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Dt(r)?Kg(r):to(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Dt(e)||Ct(e))return e}const qg=/;(?![^(]*\))/g,zg=/:([^]+)/,Hg=/\/\*[^]*?\*\//g;function Kg(e){const t={};return e.replace(Hg,"").split(qg).forEach(n=>{if(n){const r=n.split(zg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Za(e){let t="";if(Dt(e))t=e;else if(nt(e))for(let n=0;n<e.length;n++){const r=Za(e[n]);r&&(t+=r+" ")}else if(Ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Gg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wg=Qa(Gg);function rf(e){return!!e||e===""}const sf=e=>!!(e&&e.__v_isRef===!0),pa=e=>Dt(e)?e:e==null?"":nt(e)||Ct(e)&&(e.toString===Zh||!at(e.toString))?sf(e)?pa(e.value):JSON.stringify(e,of,2):String(e),of=(e,t)=>sf(t)?of(e,t.value):Rr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[$o(r,i)+" =>"]=s,n),{})}:Xh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>$o(n))}:Vn(t)?$o(t):Ct(t)&&!nt(t)&&!tf(t)?String(t):t,$o=(e,t="")=>{var n;return Vn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let me;class Qg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=me,!t&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=me;try{return me=this,t()}finally{me=n}}}on(){me=this}off(){me=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yg(){return me}let At;const jo=new WeakSet;class af{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,me&&me.active&&me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jo.has(this)&&(jo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yc(this),uf(this);const t=At,n=Ve;At=this,Ve=!0;try{return this.fn()}finally{hf(this),At=t,Ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)nl(t);this.deps=this.depsTail=void 0,Yc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ga(this)&&this.run()}get dirty(){return ga(this)}}let lf=0,fs,ds;function cf(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=fs,fs=e}function tl(){lf++}function el(){if(--lf>0)return;if(ds){let t=ds;for(ds=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fs;){let t=fs;for(fs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function uf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function hf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),nl(r),Xg(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ga(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ff(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ff(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ws))return;e.globalVersion=ws;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ga(e)){e.flags&=-3;return}const n=At,r=Ve;At=e,Ve=!0;try{uf(e);const s=e.fn(e._value);(t.version===0||yn(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{At=n,Ve=r,hf(e),e.flags&=-3}}function nl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)nl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xg(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ve=!0;const df=[];function Dn(){df.push(Ve),Ve=!1}function xn(){const e=df.pop();Ve=e===void 0?!0:e}function Yc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=At;At=void 0;try{t()}finally{At=n}}}let ws=0;class Jg{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!At||!Ve||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new Jg(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,pf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=r)}return n}trigger(t){this.version++,ws++,this.notify(t)}notify(t){tl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{el()}}}function pf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)pf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ma=new WeakMap,Yn=Symbol(""),_a=Symbol(""),As=Symbol("");function Zt(e,t,n){if(Ve&&At){let r=ma.get(e);r||ma.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new rl),s.map=r,s.key=n),s.track()}}function Ze(e,t,n,r,s,i){const a=ma.get(e);if(!a){ws++;return}const l=c=>{c&&c.trigger()};if(tl(),t==="clear")a.forEach(l);else{const c=nt(e),h=c&&Ja(n);if(c&&n==="length"){const d=Number(r);a.forEach((g,T)=>{(T==="length"||T===As||!Vn(T)&&T>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(As)),t){case"add":c?h&&l(a.get("length")):(l(a.get(Yn)),Rr(e)&&l(a.get(_a)));break;case"delete":c||(l(a.get(Yn)),Rr(e)&&l(a.get(_a)));break;case"set":Rr(e)&&l(a.get(Yn));break}}el()}function mr(e){const t=_t(e);return t===e?t:(Zt(t,"iterate",As),Ae(e)?t:t.map(te))}function eo(e){return Zt(e=_t(e),"iterate",As),e}const Zg={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,te)},concat(...e){return mr(this).concat(...e.map(t=>nt(t)?mr(t):t))},entries(){return qo(this,"entries",e=>(e[1]=te(e[1]),e))},every(e,t){return Ye(this,"every",e,t,void 0,arguments)},filter(e,t){return Ye(this,"filter",e,t,n=>n.map(te),arguments)},find(e,t){return Ye(this,"find",e,t,te,arguments)},findIndex(e,t){return Ye(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ye(this,"findLast",e,t,te,arguments)},findLastIndex(e,t){return Ye(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ye(this,"forEach",e,t,void 0,arguments)},includes(...e){return zo(this,"includes",e)},indexOf(...e){return zo(this,"indexOf",e)},join(e){return mr(this).join(e)},lastIndexOf(...e){return zo(this,"lastIndexOf",e)},map(e,t){return Ye(this,"map",e,t,void 0,arguments)},pop(){return ss(this,"pop")},push(...e){return ss(this,"push",e)},reduce(e,...t){return Xc(this,"reduce",e,t)},reduceRight(e,...t){return Xc(this,"reduceRight",e,t)},shift(){return ss(this,"shift")},some(e,t){return Ye(this,"some",e,t,void 0,arguments)},splice(...e){return ss(this,"splice",e)},toReversed(){return mr(this).toReversed()},toSorted(e){return mr(this).toSorted(e)},toSpliced(...e){return mr(this).toSpliced(...e)},unshift(...e){return ss(this,"unshift",e)},values(){return qo(this,"values",te)}};function qo(e,t,n){const r=eo(e),s=r[t]();return r!==e&&!Ae(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const tm=Array.prototype;function Ye(e,t,n,r,s,i){const a=eo(e),l=a!==e&&!Ae(e),c=a[t];if(c!==tm[t]){const g=c.apply(e,i);return l?te(g):g}let h=n;a!==e&&(l?h=function(g,T){return n.call(this,te(g),T,e)}:n.length>2&&(h=function(g,T){return n.call(this,g,T,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Xc(e,t,n,r){const s=eo(e);let i=n;return s!==e&&(Ae(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,te(l),c,e)}),s[t](i,...r)}function zo(e,t,n){const r=_t(e);Zt(r,"iterate",As);const s=r[t](...n);return(s===-1||s===!1)&&al(n[0])?(n[0]=_t(n[0]),r[t](...n)):s}function ss(e,t,n=[]){Dn(),tl();const r=_t(e)[t].apply(e,n);return el(),xn(),r}const em=Qa("__proto__,__v_isRef,__isVue"),gf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vn));function nm(e){Vn(e)||(e=String(e));const t=_t(this);return Zt(t,"has",e),t.hasOwnProperty(e)}class mf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?fm:Tf:i?vf:yf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=nt(t);if(!s){let c;if(a&&(c=Zg[n]))return c;if(n==="hasOwnProperty")return nm}const l=Reflect.get(t,n,re(t)?t:r);return(Vn(n)?gf.has(n):em(n))||(s||Zt(t,"get",n),i)?l:re(l)?a&&Ja(n)?l:l.value:Ct(l)?s?Ef(l):il(l):l}}class _f extends mf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Zn(i);if(!Ae(r)&&!Zn(r)&&(i=_t(i),r=_t(r)),!nt(t)&&re(i)&&!re(r))return c?!1:(i.value=r,!0)}const a=nt(t)&&Ja(n)?Number(n)<t.length:yt(t,n),l=Reflect.set(t,n,r,re(t)?t:s);return t===_t(s)&&(a?yn(r,i)&&Ze(t,"set",n,r):Ze(t,"add",n,r)),l}deleteProperty(t,n){const r=yt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ze(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Vn(n)||!gf.has(n))&&Zt(t,"has",n),r}ownKeys(t){return Zt(t,"iterate",nt(t)?"length":Yn),Reflect.ownKeys(t)}}class rm extends mf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const sm=new _f,im=new rm,om=new _f(!0);const ya=e=>e,oi=e=>Reflect.getPrototypeOf(e);function am(e,t,n){return function(...r){const s=this.__v_raw,i=_t(s),a=Rr(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?ya:t?va:te;return!t&&Zt(i,"iterate",c?_a:Yn),{next(){const{value:g,done:T}=h.next();return T?{value:g,done:T}:{value:l?[d(g[0]),d(g[1])]:d(g),done:T}},[Symbol.iterator](){return this}}}}function ai(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function lm(e,t){const n={get(s){const i=this.__v_raw,a=_t(i),l=_t(s);e||(yn(s,l)&&Zt(a,"get",s),Zt(a,"get",l));const{has:c}=oi(a),h=t?ya:e?va:te;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Zt(_t(s),"iterate",Yn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=_t(i),l=_t(s);return e||(yn(s,l)&&Zt(a,"has",s),Zt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=_t(l),h=t?ya:e?va:te;return!e&&Zt(c,"iterate",Yn),l.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return Ut(n,e?{add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear")}:{add(s){!t&&!Ae(s)&&!Zn(s)&&(s=_t(s));const i=_t(this);return oi(i).has.call(i,s)||(i.add(s),Ze(i,"add",s,s)),this},set(s,i){!t&&!Ae(i)&&!Zn(i)&&(i=_t(i));const a=_t(this),{has:l,get:c}=oi(a);let h=l.call(a,s);h||(s=_t(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?yn(i,d)&&Ze(a,"set",s,i):Ze(a,"add",s,i),this},delete(s){const i=_t(this),{has:a,get:l}=oi(i);let c=a.call(i,s);c||(s=_t(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&Ze(i,"delete",s,void 0),h},clear(){const s=_t(this),i=s.size!==0,a=s.clear();return i&&Ze(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=am(s,e,t)}),n}function sl(e,t){const n=lm(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(yt(n,s)&&s in r?n:r,s,i)}const cm={get:sl(!1,!1)},um={get:sl(!1,!0)},hm={get:sl(!0,!1)};const yf=new WeakMap,vf=new WeakMap,Tf=new WeakMap,fm=new WeakMap;function dm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pm(e){return e.__v_skip||!Object.isExtensible(e)?0:dm(Ug(e))}function il(e){return Zn(e)?e:ol(e,!1,sm,cm,yf)}function gm(e){return ol(e,!1,om,um,vf)}function Ef(e){return ol(e,!0,im,hm,Tf)}function ol(e,t,n,r,s){if(!Ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=pm(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function Cr(e){return Zn(e)?Cr(e.__v_raw):!!(e&&e.__v_isReactive)}function Zn(e){return!!(e&&e.__v_isReadonly)}function Ae(e){return!!(e&&e.__v_isShallow)}function al(e){return e?!!e.__v_raw:!1}function _t(e){const t=e&&e.__v_raw;return t?_t(t):e}function mm(e){return!yt(e,"__v_skip")&&Object.isExtensible(e)&&nf(e,"__v_skip",!0),e}const te=e=>Ct(e)?il(e):e,va=e=>Ct(e)?Ef(e):e;function re(e){return e?e.__v_isRef===!0:!1}function _r(e){return _m(e,!1)}function _m(e,t){return re(e)?e:new ym(e,t)}class ym{constructor(t,n){this.dep=new rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:_t(t),this._value=n?t:te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ae(t)||Zn(t);t=r?t:_t(t),yn(t,n)&&(this._rawValue=t,this._value=r?t:te(t),this.dep.trigger())}}function vm(e){return re(e)?e.value:e}const Tm={get:(e,t,n)=>t==="__v_raw"?e:vm(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return re(s)&&!re(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function If(e){return Cr(e)?e:new Proxy(e,Tm)}class Em{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ws-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return cf(this,!0),!0}get value(){const t=this.dep.track();return ff(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Im(e,t,n=!1){let r,s;return at(e)?r=e:(r=e.get,s=e.set),new Em(r,s,n)}const li={},Ci=new WeakMap;let Hn;function wm(e,t=!1,n=Hn){if(n){let r=Ci.get(n);r||Ci.set(n,r=[]),r.push(e)}}function Am(e,t,n=It){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=M=>s?M:Ae(M)||s===!1||s===0?tn(M,1):tn(M);let d,g,T,R,V=!1,O=!1;if(re(e)?(g=()=>e.value,V=Ae(e)):Cr(e)?(g=()=>h(e),V=!0):nt(e)?(O=!0,V=e.some(M=>Cr(M)||Ae(M)),g=()=>e.map(M=>{if(re(M))return M.value;if(Cr(M))return h(M);if(at(M))return c?c(M,2):M()})):at(e)?t?g=c?()=>c(e,2):e:g=()=>{if(T){Dn();try{T()}finally{xn()}}const M=Hn;Hn=d;try{return c?c(e,3,[R]):e(R)}finally{Hn=M}}:g=Fe,t&&s){const M=g,Z=s===!0?1/0:s;g=()=>tn(M(),Z)}const N=Yg(),G=()=>{d.stop(),N&&N.active&&Xa(N.effects,d)};if(i&&t){const M=t;t=(...Z)=>{M(...Z),G()}}let $=O?new Array(e.length).fill(li):li;const z=M=>{if(!(!(d.flags&1)||!d.dirty&&!M))if(t){const Z=d.run();if(s||V||(O?Z.some((rt,w)=>yn(rt,$[w])):yn(Z,$))){T&&T();const rt=Hn;Hn=d;try{const w=[Z,$===li?void 0:O&&$[0]===li?[]:$,R];c?c(t,3,w):t(...w),$=Z}finally{Hn=rt}}}else d.run()};return l&&l(z),d=new af(g),d.scheduler=a?()=>a(z,!1):z,R=M=>wm(M,!1,d),T=d.onStop=()=>{const M=Ci.get(d);if(M){if(c)c(M,4);else for(const Z of M)Z();Ci.delete(d)}},t?r?z(!0):$=d.run():a?a(z.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function tn(e,t=1/0,n){if(t<=0||!Ct(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,re(e))tn(e.value,t,n);else if(nt(e))for(let r=0;r<e.length;r++)tn(e[r],t,n);else if(Xh(e)||Rr(e))e.forEach(r=>{tn(r,t,n)});else if(tf(e)){for(const r in e)tn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fs(e,t,n,r){try{return r?e(...r):e()}catch(s){no(s,t,n)}}function xe(e,t,n,r){if(at(e)){const s=Fs(e,t,n,r);return s&&Jh(s)&&s.catch(i=>{no(i,t,n)}),s}if(nt(e)){const s=[];for(let i=0;i<e.length;i++)s.push(xe(e[i],t,n,r));return s}}function no(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||It;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,c,h)===!1)return}l=l.parent}if(i){Dn(),Fs(i,null,10,[e,c,h]),xn();return}}bm(e,n,s,r,a)}function bm(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const le=[];let Me=-1;const Sr=[];let pn=null,yr=0;const wf=Promise.resolve();let Si=null;function Rm(e){const t=Si||wf;return e?t.then(this?e.bind(this):e):t}function Cm(e){let t=Me+1,n=le.length;for(;t<n;){const r=t+n>>>1,s=le[r],i=bs(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function ll(e){if(!(e.flags&1)){const t=bs(e),n=le[le.length-1];!n||!(e.flags&2)&&t>=bs(n)?le.push(e):le.splice(Cm(t),0,e),e.flags|=1,Af()}}function Af(){Si||(Si=wf.then(Rf))}function Sm(e){nt(e)?Sr.push(...e):pn&&e.id===-1?pn.splice(yr+1,0,e):e.flags&1||(Sr.push(e),e.flags|=1),Af()}function Jc(e,t,n=Me+1){for(;n<le.length;n++){const r=le[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;le.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function bf(e){if(Sr.length){const t=[...new Set(Sr)].sort((n,r)=>bs(n)-bs(r));if(Sr.length=0,pn){pn.push(...t);return}for(pn=t,yr=0;yr<pn.length;yr++){const n=pn[yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pn=null,yr=0}}const bs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Rf(e){try{for(Me=0;Me<le.length;Me++){const t=le[Me];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Fs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Me<le.length;Me++){const t=le[Me];t&&(t.flags&=-2)}Me=-1,le.length=0,bf(),Si=null,(le.length||Sr.length)&&Rf()}}let _e=null,Cf=null;function Pi(e){const t=_e;return _e=e,Cf=e&&e.type.__scopeId||null,t}function Sf(e,t=_e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&lu(-1);const i=Pi(t);let a;try{a=e(...s)}finally{Pi(i),r._d&&lu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Pm(e,t){if(_e===null)return e;const n=ao(_e),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=It]=t[s];i&&(at(i)&&(i={mounted:i,updated:i}),i.deep&&tn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function $n(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Dn(),xe(c,n,8,[e.el,l,e,t]),xn())}}const Vm=Symbol("_vte"),Pf=e=>e.__isTeleport,gn=Symbol("_leaveCb"),ci=Symbol("_enterCb");function Dm(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cl(()=>{e.isMounted=!0}),Lf(()=>{e.isUnmounting=!0}),e}const Ee=[Function,Array],Vf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ee,onEnter:Ee,onAfterEnter:Ee,onEnterCancelled:Ee,onBeforeLeave:Ee,onLeave:Ee,onAfterLeave:Ee,onLeaveCancelled:Ee,onBeforeAppear:Ee,onAppear:Ee,onAfterAppear:Ee,onAppearCancelled:Ee},Df=e=>{const t=e.subTree;return t.component?Df(t.component):t},xm={name:"BaseTransition",props:Vf,setup(e,{slots:t}){const n=P_(),r=Dm();return()=>{const s=t.default&&kf(t.default(),!0);if(!s||!s.length)return;const i=xf(s),a=_t(e),{mode:l}=a;if(r.isLeaving)return Ho(i);const c=Zc(i);if(!c)return Ho(i);let h=Ta(c,a,r,n,g=>h=g);c.type!==he&&Rs(c,h);let d=n.subTree&&Zc(n.subTree);if(d&&d.type!==he&&!Gn(c,d)&&Df(n).type!==he){let g=Ta(d,a,r,n);if(Rs(d,g),l==="out-in"&&c.type!==he)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},Ho(i);l==="in-out"&&c.type!==he?g.delayLeave=(T,R,V)=>{const O=Nf(r,d);O[String(d.key)]=d,T[gn]=()=>{R(),T[gn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{V(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function xf(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==he){t=n;break}}return t}const Nm=xm;function Nf(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ta(e,t,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:T,onLeave:R,onAfterLeave:V,onLeaveCancelled:O,onBeforeAppear:N,onAppear:G,onAfterAppear:$,onAppearCancelled:z}=t,M=String(e.key),Z=Nf(n,e),rt=(_,I)=>{_&&xe(_,r,9,I)},w=(_,I)=>{const A=I[1];rt(_,I),nt(_)?_.every(E=>E.length<=1)&&A():_.length<=1&&A()},m={mode:a,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=N||c;else return;_[gn]&&_[gn](!0);const A=Z[M];A&&Gn(e,A)&&A.el[gn]&&A.el[gn](),rt(I,[_])},enter(_){let I=h,A=d,E=g;if(!n.isMounted)if(i)I=G||h,A=$||d,E=z||g;else return;let y=!1;const wt=_[ci]=se=>{y||(y=!0,se?rt(E,[_]):rt(A,[_]),m.delayedLeave&&m.delayedLeave(),_[ci]=void 0)};I?w(I,[_,wt]):wt()},leave(_,I){const A=String(e.key);if(_[ci]&&_[ci](!0),n.isUnmounting)return I();rt(T,[_]);let E=!1;const y=_[gn]=wt=>{E||(E=!0,I(),wt?rt(O,[_]):rt(V,[_]),_[gn]=void 0,Z[A]===e&&delete Z[A])};Z[A]=e,R?w(R,[_,y]):y()},clone(_){const I=Ta(_,t,n,r,s);return s&&s(I),I}};return m}function Ho(e){if(ro(e))return e=An(e),e.children=null,e}function Zc(e){if(!ro(e))return Pf(e.type)&&e.children?xf(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&at(n.default))return n.default()}}function Rs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Rs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function kf(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Ie?(a.patchFlag&128&&s++,r=r.concat(kf(a.children,t,l))):(t||a.type!==he)&&r.push(l!=null?An(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Of(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Vi(e,t,n,r,s=!1){if(nt(e)){e.forEach((V,O)=>Vi(V,t&&(nt(t)?t[O]:t),n,r,s));return}if(ps(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Vi(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ao(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===It?l.refs={}:l.refs,g=l.setupState,T=_t(g),R=g===It?()=>!1:V=>yt(T,V);if(h!=null&&h!==c&&(Dt(h)?(d[h]=null,R(h)&&(g[h]=null)):re(h)&&(h.value=null)),at(c))Fs(c,l,12,[a,d]);else{const V=Dt(c),O=re(c);if(V||O){const N=()=>{if(e.f){const G=V?R(c)?g[c]:d[c]:c.value;s?nt(G)&&Xa(G,i):nt(G)?G.includes(i)||G.push(i):V?(d[c]=[i],R(c)&&(g[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else V?(d[c]=a,R(c)&&(g[c]=a)):O&&(c.value=a,e.k&&(d[e.k]=a))};a?(N.id=-1,ge(N,n)):N()}}}Zi().requestIdleCallback;Zi().cancelIdleCallback;const ps=e=>!!e.type.__asyncLoader,ro=e=>e.type.__isKeepAlive;function km(e,t){Mf(e,"a",t)}function Om(e,t){Mf(e,"da",t)}function Mf(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(so(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ro(s.parent.vnode)&&Mm(r,t,n,s),s=s.parent}}function Mm(e,t,n,r){const s=so(t,e,r,!0);gs(()=>{Xa(r[t],s)},n)}function so(e,t,n=ne,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Dn();const l=Us(n),c=xe(t,n,e,a);return l(),xn(),c});return r?s.unshift(i):s.push(i),i}}const an=e=>(t,n=ne)=>{(!Ss||e==="sp")&&so(e,(...r)=>t(...r),n)},Lm=an("bm"),cl=an("m"),Fm=an("bu"),Um=an("u"),Lf=an("bum"),gs=an("um"),Bm=an("sp"),$m=an("rtg"),jm=an("rtc");function qm(e,t=ne){so("ec",e,t)}const zm=Symbol.for("v-ndc");function tu(e,t,n,r){let s;const i=n,a=nt(e);if(a||Dt(e)){const l=a&&Cr(e);let c=!1;l&&(c=!Ae(e),e=eo(e)),s=new Array(e.length);for(let h=0,d=e.length;h<d;h++)s[h]=t(c?te(e[h]):e[h],h,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Ct(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=t(e[d],d,c,i)}}else s=[];return s}const Ea=e=>e?rd(e)?ao(e):Ea(e.parent):null,ms=Ut(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ea(e.parent),$root:e=>Ea(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ul(e),$forceUpdate:e=>e.f||(e.f=()=>{ll(e.update)}),$nextTick:e=>e.n||(e.n=Rm.bind(e.proxy)),$watch:e=>f_.bind(e)}),Ko=(e,t)=>e!==It&&!e.__isScriptSetup&&yt(e,t),Hm={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const R=a[t];if(R!==void 0)switch(R){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ko(r,t))return a[t]=1,r[t];if(s!==It&&yt(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&yt(h,t))return a[t]=3,i[t];if(n!==It&&yt(n,t))return a[t]=4,n[t];Ia&&(a[t]=0)}}const d=ms[t];let g,T;if(d)return t==="$attrs"&&Zt(e.attrs,"get",""),d(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(n!==It&&yt(n,t))return a[t]=4,n[t];if(T=c.config.globalProperties,yt(T,t))return T[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ko(s,t)?(s[t]=n,!0):r!==It&&yt(r,t)?(r[t]=n,!0):yt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==It&&yt(e,a)||Ko(t,a)||(l=i[0])&&yt(l,a)||yt(r,a)||yt(ms,a)||yt(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:yt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function eu(e){return nt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ia=!0;function Km(e){const t=ul(e),n=e.proxy,r=e.ctx;Ia=!1,t.beforeCreate&&nu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:g,mounted:T,beforeUpdate:R,updated:V,activated:O,deactivated:N,beforeDestroy:G,beforeUnmount:$,destroyed:z,unmounted:M,render:Z,renderTracked:rt,renderTriggered:w,errorCaptured:m,serverPrefetch:_,expose:I,inheritAttrs:A,components:E,directives:y,filters:wt}=t;if(h&&Gm(h,r,null),a)for(const Tt in a){const dt=a[Tt];at(dt)&&(r[Tt]=dt.bind(n))}if(s){const Tt=s.call(n,n);Ct(Tt)&&(e.data=il(Tt))}if(Ia=!0,i)for(const Tt in i){const dt=i[Tt],Re=at(dt)?dt.bind(n,n):at(dt.get)?dt.get.bind(n,n):Fe,Nn=!at(dt)&&at(dt.set)?dt.set.bind(n):Fe,Ke=O_({get:Re,set:Nn});Object.defineProperty(r,Tt,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Ot=>Ke.value=Ot})}if(l)for(const Tt in l)Ff(l[Tt],r,n,Tt);if(c){const Tt=at(c)?c.call(n):c;Reflect.ownKeys(Tt).forEach(dt=>{Zm(dt,Tt[dt])})}d&&nu(d,e,"c");function xt(Tt,dt){nt(dt)?dt.forEach(Re=>Tt(Re.bind(n))):dt&&Tt(dt.bind(n))}if(xt(Lm,g),xt(cl,T),xt(Fm,R),xt(Um,V),xt(km,O),xt(Om,N),xt(qm,m),xt(jm,rt),xt($m,w),xt(Lf,$),xt(gs,M),xt(Bm,_),nt(I))if(I.length){const Tt=e.exposed||(e.exposed={});I.forEach(dt=>{Object.defineProperty(Tt,dt,{get:()=>n[dt],set:Re=>n[dt]=Re})})}else e.exposed||(e.exposed={});Z&&e.render===Fe&&(e.render=Z),A!=null&&(e.inheritAttrs=A),E&&(e.components=E),y&&(e.directives=y),_&&Of(e)}function Gm(e,t,n=Fe){nt(e)&&(e=wa(e));for(const r in e){const s=e[r];let i;Ct(s)?"default"in s?i=yi(s.from||r,s.default,!0):i=yi(s.from||r):i=yi(s),re(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function nu(e,t,n){xe(nt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ff(e,t,n,r){let s=r.includes(".")?Jf(n,r):()=>n[r];if(Dt(e)){const i=t[e];at(i)&&Wo(s,i)}else if(at(e))Wo(s,e.bind(n));else if(Ct(e))if(nt(e))e.forEach(i=>Ff(i,t,n,r));else{const i=at(e.handler)?e.handler.bind(n):t[e.handler];at(i)&&Wo(s,i,e)}}function ul(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>Di(c,h,a,!0)),Di(c,t,a)),Ct(t)&&i.set(t,c),c}function Di(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Di(e,i,n,!0),s&&s.forEach(a=>Di(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=Wm[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Wm={data:ru,props:su,emits:su,methods:os,computed:os,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:os,directives:os,watch:Ym,provide:ru,inject:Qm};function ru(e,t){return t?e?function(){return Ut(at(e)?e.call(this,this):e,at(t)?t.call(this,this):t)}:t:e}function Qm(e,t){return os(wa(e),wa(t))}function wa(e){if(nt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function os(e,t){return e?Ut(Object.create(null),e,t):t}function su(e,t){return e?nt(e)&&nt(t)?[...new Set([...e,...t])]:Ut(Object.create(null),eu(e),eu(t??{})):t}function Ym(e,t){if(!e)return t;if(!t)return e;const n=Ut(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function Uf(){return{app:null,config:{isNativeTag:Lg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xm=0;function Jm(e,t){return function(r,s=null){at(r)||(r=Ut({},r)),s!=null&&!Ct(s)&&(s=null);const i=Uf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Xm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:L_,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&at(d.install)?(a.add(d),d.install(h,...g)):at(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,T){if(!c){const R=h._ceVNode||ce(r,s);return R.appContext=i,T===!0?T="svg":T===!1&&(T=void 0),g&&t?t(R,d):e(R,d,T),c=!0,h._container=d,d.__vue_app__=h,ao(R.component)}},onUnmount(d){l.push(d)},unmount(){c&&(xe(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=Pr;Pr=h;try{return d()}finally{Pr=g}}};return h}}let Pr=null;function Zm(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function yi(e,t,n=!1){const r=ne||_e;if(r||Pr){const s=Pr?Pr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&at(t)?t.call(r&&r.proxy):t}}const Bf={},$f=()=>Object.create(Bf),jf=e=>Object.getPrototypeOf(e)===Bf;function t_(e,t,n,r=!1){const s={},i=$f();e.propsDefaults=Object.create(null),qf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:gm(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function e_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=_t(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let T=d[g];if(io(e.emitsOptions,T))continue;const R=t[T];if(c)if(yt(i,T))R!==i[T]&&(i[T]=R,h=!0);else{const V=wn(T);s[V]=Aa(c,l,V,R,e,!1)}else R!==i[T]&&(i[T]=R,h=!0)}}}else{qf(e,t,s,i)&&(h=!0);let d;for(const g in l)(!t||!yt(t,g)&&((d=rr(g))===g||!yt(t,d)))&&(c?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=Aa(c,l,g,void 0,e,!0)):delete s[g]);if(i!==l)for(const g in i)(!t||!yt(t,g))&&(delete i[g],h=!0)}h&&Ze(e.attrs,"set","")}function qf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(hs(c))continue;const h=t[c];let d;s&&yt(s,d=wn(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:io(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=_t(n),h=l||It;for(let d=0;d<i.length;d++){const g=i[d];n[g]=Aa(s,c,g,h[g],e,!yt(h,g))}}return a}function Aa(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=yt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&at(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Us(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===rr(n))&&(r=!0))}return r}const n_=new WeakMap;function zf(e,t,n=!1){const r=n?n_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!at(e)){const d=g=>{c=!0;const[T,R]=zf(g,t,!0);Ut(a,T),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Ct(e)&&r.set(e,br),br;if(nt(i))for(let d=0;d<i.length;d++){const g=wn(i[d]);iu(g)&&(a[g]=It)}else if(i)for(const d in i){const g=wn(d);if(iu(g)){const T=i[d],R=a[g]=nt(T)||at(T)?{type:T}:Ut({},T),V=R.type;let O=!1,N=!0;if(nt(V))for(let G=0;G<V.length;++G){const $=V[G],z=at($)&&$.name;if(z==="Boolean"){O=!0;break}else z==="String"&&(N=!1)}else O=at(V)&&V.name==="Boolean";R[0]=O,R[1]=N,(O||yt(R,"default"))&&l.push(g)}}const h=[a,l];return Ct(e)&&r.set(e,h),h}function iu(e){return e[0]!=="$"&&!hs(e)}const Hf=e=>e[0]==="_"||e==="$stable",hl=e=>nt(e)?e.map(Le):[Le(e)],r_=(e,t,n)=>{if(t._n)return t;const r=Sf((...s)=>hl(t(...s)),n);return r._c=!1,r},Kf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Hf(s))continue;const i=e[s];if(at(i))t[s]=r_(s,i,r);else if(i!=null){const a=hl(i);t[s]=()=>a}}},Gf=(e,t)=>{const n=hl(t);e.slots.default=()=>n},Wf=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},s_=(e,t,n)=>{const r=e.slots=$f();if(e.vnode.shapeFlag&32){const s=t._;s?(Wf(r,t,n),n&&nf(r,"_",s,!0)):Kf(t,r)}else t&&Gf(e,t)},i_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=It;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Wf(s,t,n):(i=!t.$stable,Kf(t,s)),a=t}else t&&(Gf(e,t),a={default:1});if(i)for(const l in s)!Hf(l)&&a[l]==null&&delete s[l]},ge=v_;function o_(e){return a_(e)}function a_(e,t){const n=Zi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:g,nextSibling:T,setScopeId:R=Fe,insertStaticContent:V}=e,O=(v,b,P,F=null,k=null,L=null,H=void 0,j=null,B=!!b.dynamicChildren)=>{if(v===b)return;v&&!Gn(v,b)&&(F=Ge(v),Ot(v,k,L,!0),v=null),b.patchFlag===-2&&(B=!1,b.dynamicChildren=null);const{type:U,ref:tt,shapeFlag:K}=b;switch(U){case oo:N(v,b,P,F);break;case he:G(v,b,P,F);break;case Yo:v==null&&$(b,P,F,H);break;case Ie:E(v,b,P,F,k,L,H,j,B);break;default:K&1?Z(v,b,P,F,k,L,H,j,B):K&6?y(v,b,P,F,k,L,H,j,B):(K&64||K&128)&&U.process(v,b,P,F,k,L,H,j,B,ke)}tt!=null&&k&&Vi(tt,v&&v.ref,L,b||v,!b)},N=(v,b,P,F)=>{if(v==null)r(b.el=l(b.children),P,F);else{const k=b.el=v.el;b.children!==v.children&&h(k,b.children)}},G=(v,b,P,F)=>{v==null?r(b.el=c(b.children||""),P,F):b.el=v.el},$=(v,b,P,F)=>{[v.el,v.anchor]=V(v.children,b,P,F,v.el,v.anchor)},z=({el:v,anchor:b},P,F)=>{let k;for(;v&&v!==b;)k=T(v),r(v,P,F),v=k;r(b,P,F)},M=({el:v,anchor:b})=>{let P;for(;v&&v!==b;)P=T(v),s(v),v=P;s(b)},Z=(v,b,P,F,k,L,H,j,B)=>{b.type==="svg"?H="svg":b.type==="math"&&(H="mathml"),v==null?rt(b,P,F,k,L,H,j,B):_(v,b,k,L,H,j,B)},rt=(v,b,P,F,k,L,H,j)=>{let B,U;const{props:tt,shapeFlag:K,transition:X,dirs:Y}=v;if(B=v.el=a(v.type,L,tt&&tt.is,tt),K&8?d(B,v.children):K&16&&m(v.children,B,null,F,k,Go(v,L),H,j),Y&&$n(v,null,F,"created"),w(B,v,v.scopeId,H,F),tt){for(const mt in tt)mt!=="value"&&!hs(mt)&&i(B,mt,null,tt[mt],L,F);"value"in tt&&i(B,"value",null,tt.value,L),(U=tt.onVnodeBeforeMount)&&Oe(U,F,v)}Y&&$n(v,null,F,"beforeMount");const et=l_(k,X);et&&X.beforeEnter(B),r(B,b,P),((U=tt&&tt.onVnodeMounted)||et||Y)&&ge(()=>{U&&Oe(U,F,v),et&&X.enter(B),Y&&$n(v,null,F,"mounted")},k)},w=(v,b,P,F,k)=>{if(P&&R(v,P),F)for(let L=0;L<F.length;L++)R(v,F[L]);if(k){let L=k.subTree;if(b===L||td(L.type)&&(L.ssContent===b||L.ssFallback===b)){const H=k.vnode;w(v,H,H.scopeId,H.slotScopeIds,k.parent)}}},m=(v,b,P,F,k,L,H,j,B=0)=>{for(let U=B;U<v.length;U++){const tt=v[U]=j?mn(v[U]):Le(v[U]);O(null,tt,b,P,F,k,L,H,j)}},_=(v,b,P,F,k,L,H)=>{const j=b.el=v.el;let{patchFlag:B,dynamicChildren:U,dirs:tt}=b;B|=v.patchFlag&16;const K=v.props||It,X=b.props||It;let Y;if(P&&jn(P,!1),(Y=X.onVnodeBeforeUpdate)&&Oe(Y,P,b,v),tt&&$n(b,v,P,"beforeUpdate"),P&&jn(P,!0),(K.innerHTML&&X.innerHTML==null||K.textContent&&X.textContent==null)&&d(j,""),U?I(v.dynamicChildren,U,j,P,F,Go(b,k),L):H||dt(v,b,j,null,P,F,Go(b,k),L,!1),B>0){if(B&16)A(j,K,X,P,k);else if(B&2&&K.class!==X.class&&i(j,"class",null,X.class,k),B&4&&i(j,"style",K.style,X.style,k),B&8){const et=b.dynamicProps;for(let mt=0;mt<et.length;mt++){const pt=et[mt],Gt=K[pt],Bt=X[pt];(Bt!==Gt||pt==="value")&&i(j,pt,Gt,Bt,k,P)}}B&1&&v.children!==b.children&&d(j,b.children)}else!H&&U==null&&A(j,K,X,P,k);((Y=X.onVnodeUpdated)||tt)&&ge(()=>{Y&&Oe(Y,P,b,v),tt&&$n(b,v,P,"updated")},F)},I=(v,b,P,F,k,L,H)=>{for(let j=0;j<b.length;j++){const B=v[j],U=b[j],tt=B.el&&(B.type===Ie||!Gn(B,U)||B.shapeFlag&70)?g(B.el):P;O(B,U,tt,null,F,k,L,H,!0)}},A=(v,b,P,F,k)=>{if(b!==P){if(b!==It)for(const L in b)!hs(L)&&!(L in P)&&i(v,L,b[L],null,k,F);for(const L in P){if(hs(L))continue;const H=P[L],j=b[L];H!==j&&L!=="value"&&i(v,L,j,H,k,F)}"value"in P&&i(v,"value",b.value,P.value,k)}},E=(v,b,P,F,k,L,H,j,B)=>{const U=b.el=v?v.el:l(""),tt=b.anchor=v?v.anchor:l("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:Y}=b;Y&&(j=j?j.concat(Y):Y),v==null?(r(U,P,F),r(tt,P,F),m(b.children||[],P,tt,k,L,H,j,B)):K>0&&K&64&&X&&v.dynamicChildren?(I(v.dynamicChildren,X,P,k,L,H,j),(b.key!=null||k&&b===k.subTree)&&Qf(v,b,!0)):dt(v,b,P,tt,k,L,H,j,B)},y=(v,b,P,F,k,L,H,j,B)=>{b.slotScopeIds=j,v==null?b.shapeFlag&512?k.ctx.activate(b,P,F,H,B):wt(b,P,F,k,L,H,B):se(v,b,B)},wt=(v,b,P,F,k,L,H)=>{const j=v.component=S_(v,F,k);if(ro(v)&&(j.ctx.renderer=ke),V_(j,!1,H),j.asyncDep){if(k&&k.registerDep(j,xt,H),!v.el){const B=j.subTree=ce(he);G(null,B,b,P)}}else xt(j,v,b,P,k,L,H)},se=(v,b,P)=>{const F=b.component=v.component;if(__(v,b,P))if(F.asyncDep&&!F.asyncResolved){Tt(F,b,P);return}else F.next=b,F.update();else b.el=v.el,F.vnode=b},xt=(v,b,P,F,k,L,H)=>{const j=()=>{if(v.isMounted){let{next:K,bu:X,u:Y,parent:et,vnode:mt}=v;{const Wt=Yf(v);if(Wt){K&&(K.el=mt.el,Tt(v,K,H)),Wt.asyncDep.then(()=>{v.isUnmounted||j()});return}}let pt=K,Gt;jn(v,!1),K?(K.el=mt.el,Tt(v,K,H)):K=mt,X&&_i(X),(Gt=K.props&&K.props.onVnodeBeforeUpdate)&&Oe(Gt,et,K,mt),jn(v,!0);const Bt=Qo(v),jt=v.subTree;v.subTree=Bt,O(jt,Bt,g(jt.el),Ge(jt),v,k,L),K.el=Bt.el,pt===null&&y_(v,Bt.el),Y&&ge(Y,k),(Gt=K.props&&K.props.onVnodeUpdated)&&ge(()=>Oe(Gt,et,K,mt),k)}else{let K;const{el:X,props:Y}=b,{bm:et,m:mt,parent:pt,root:Gt,type:Bt}=v,jt=ps(b);if(jn(v,!1),et&&_i(et),!jt&&(K=Y&&Y.onVnodeBeforeMount)&&Oe(K,pt,b),jn(v,!0),X&&cr){const Wt=()=>{v.subTree=Qo(v),cr(X,v.subTree,v,k,null)};jt&&Bt.__asyncHydrate?Bt.__asyncHydrate(X,v,Wt):Wt()}else{Gt.ce&&Gt.ce._injectChildStyle(Bt);const Wt=v.subTree=Qo(v);O(null,Wt,P,F,v,k,L),b.el=Wt.el}if(mt&&ge(mt,k),!jt&&(K=Y&&Y.onVnodeMounted)){const Wt=b;ge(()=>Oe(K,pt,Wt),k)}(b.shapeFlag&256||pt&&ps(pt.vnode)&&pt.vnode.shapeFlag&256)&&v.a&&ge(v.a,k),v.isMounted=!0,b=P=F=null}};v.scope.on();const B=v.effect=new af(j);v.scope.off();const U=v.update=B.run.bind(B),tt=v.job=B.runIfDirty.bind(B);tt.i=v,tt.id=v.uid,B.scheduler=()=>ll(tt),jn(v,!0),U()},Tt=(v,b,P)=>{b.component=v;const F=v.vnode.props;v.vnode=b,v.next=null,e_(v,b.props,F,P),i_(v,b.children,P),Dn(),Jc(v),xn()},dt=(v,b,P,F,k,L,H,j,B=!1)=>{const U=v&&v.children,tt=v?v.shapeFlag:0,K=b.children,{patchFlag:X,shapeFlag:Y}=b;if(X>0){if(X&128){Nn(U,K,P,F,k,L,H,j,B);return}else if(X&256){Re(U,K,P,F,k,L,H,j,B);return}}Y&8?(tt&16&&On(U,k,L),K!==U&&d(P,K)):tt&16?Y&16?Nn(U,K,P,F,k,L,H,j,B):On(U,k,L,!0):(tt&8&&d(P,""),Y&16&&m(K,P,F,k,L,H,j,B))},Re=(v,b,P,F,k,L,H,j,B)=>{v=v||br,b=b||br;const U=v.length,tt=b.length,K=Math.min(U,tt);let X;for(X=0;X<K;X++){const Y=b[X]=B?mn(b[X]):Le(b[X]);O(v[X],Y,P,null,k,L,H,j,B)}U>tt?On(v,k,L,!0,!1,K):m(b,P,F,k,L,H,j,B,K)},Nn=(v,b,P,F,k,L,H,j,B)=>{let U=0;const tt=b.length;let K=v.length-1,X=tt-1;for(;U<=K&&U<=X;){const Y=v[U],et=b[U]=B?mn(b[U]):Le(b[U]);if(Gn(Y,et))O(Y,et,P,null,k,L,H,j,B);else break;U++}for(;U<=K&&U<=X;){const Y=v[K],et=b[X]=B?mn(b[X]):Le(b[X]);if(Gn(Y,et))O(Y,et,P,null,k,L,H,j,B);else break;K--,X--}if(U>K){if(U<=X){const Y=X+1,et=Y<tt?b[Y].el:F;for(;U<=X;)O(null,b[U]=B?mn(b[U]):Le(b[U]),P,et,k,L,H,j,B),U++}}else if(U>X)for(;U<=K;)Ot(v[U],k,L,!0),U++;else{const Y=U,et=U,mt=new Map;for(U=et;U<=X;U++){const ie=b[U]=B?mn(b[U]):Le(b[U]);ie.key!=null&&mt.set(ie.key,U)}let pt,Gt=0;const Bt=X-et+1;let jt=!1,Wt=0;const cn=new Array(Bt);for(U=0;U<Bt;U++)cn[U]=0;for(U=Y;U<=K;U++){const ie=v[U];if(Gt>=Bt){Ot(ie,k,L,!0);continue}let Te;if(ie.key!=null)Te=mt.get(ie.key);else for(pt=et;pt<=X;pt++)if(cn[pt-et]===0&&Gn(ie,b[pt])){Te=pt;break}Te===void 0?Ot(ie,k,L,!0):(cn[Te-et]=U+1,Te>=Wt?Wt=Te:jt=!0,O(ie,b[Te],P,null,k,L,H,j,B),Gt++)}const ur=jt?c_(cn):br;for(pt=ur.length-1,U=Bt-1;U>=0;U--){const ie=et+U,Te=b[ie],hr=ie+1<tt?b[ie+1].el:F;cn[U]===0?O(null,Te,P,hr,k,L,H,j,B):jt&&(pt<0||U!==ur[pt]?Ke(Te,P,hr,2):pt--)}}},Ke=(v,b,P,F,k=null)=>{const{el:L,type:H,transition:j,children:B,shapeFlag:U}=v;if(U&6){Ke(v.component.subTree,b,P,F);return}if(U&128){v.suspense.move(b,P,F);return}if(U&64){H.move(v,b,P,ke);return}if(H===Ie){r(L,b,P);for(let K=0;K<B.length;K++)Ke(B[K],b,P,F);r(v.anchor,b,P);return}if(H===Yo){z(v,b,P);return}if(F!==2&&U&1&&j)if(F===0)j.beforeEnter(L),r(L,b,P),ge(()=>j.enter(L),k);else{const{leave:K,delayLeave:X,afterLeave:Y}=j,et=()=>r(L,b,P),mt=()=>{K(L,()=>{et(),Y&&Y()})};X?X(L,et,mt):mt()}else r(L,b,P)},Ot=(v,b,P,F=!1,k=!1)=>{const{type:L,props:H,ref:j,children:B,dynamicChildren:U,shapeFlag:tt,patchFlag:K,dirs:X,cacheIndex:Y}=v;if(K===-2&&(k=!1),j!=null&&Vi(j,null,P,v,!0),Y!=null&&(b.renderCache[Y]=void 0),tt&256){b.ctx.deactivate(v);return}const et=tt&1&&X,mt=!ps(v);let pt;if(mt&&(pt=H&&H.onVnodeBeforeUnmount)&&Oe(pt,b,v),tt&6)kn(v.component,P,F);else{if(tt&128){v.suspense.unmount(P,F);return}et&&$n(v,null,b,"beforeUnmount"),tt&64?v.type.remove(v,b,P,ke,F):U&&!U.hasOnce&&(L!==Ie||K>0&&K&64)?On(U,b,P,!1,!0):(L===Ie&&K&384||!k&&tt&16)&&On(B,b,P),F&&Mt(v)}(mt&&(pt=H&&H.onVnodeUnmounted)||et)&&ge(()=>{pt&&Oe(pt,b,v),et&&$n(v,null,b,"unmounted")},P)},Mt=v=>{const{type:b,el:P,anchor:F,transition:k}=v;if(b===Ie){bo(P,F);return}if(b===Yo){M(v);return}const L=()=>{s(P),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(v.shapeFlag&1&&k&&!k.persisted){const{leave:H,delayLeave:j}=k,B=()=>H(P,L);j?j(v.el,L,B):B()}else L()},bo=(v,b)=>{let P;for(;v!==b;)P=T(v),s(v),v=P;s(b)},kn=(v,b,P)=>{const{bum:F,scope:k,job:L,subTree:H,um:j,m:B,a:U}=v;ou(B),ou(U),F&&_i(F),k.stop(),L&&(L.flags|=8,Ot(H,v,b,P)),j&&ge(j,b),ge(()=>{v.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},On=(v,b,P,F=!1,k=!1,L=0)=>{for(let H=L;H<v.length;H++)Ot(v[H],b,P,F,k)},Ge=v=>{if(v.shapeFlag&6)return Ge(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const b=T(v.anchor||v.el),P=b&&b[Vm];return P?T(P):b};let Hr=!1;const zs=(v,b,P)=>{v==null?b._vnode&&Ot(b._vnode,null,null,!0):O(b._vnode||null,v,b,null,null,null,P),b._vnode=v,Hr||(Hr=!0,Jc(),bf(),Hr=!1)},ke={p:O,um:Ot,m:Ke,r:Mt,mt:wt,mc:m,pc:dt,pbc:I,n:Ge,o:e};let Mn,cr;return{render:zs,hydrate:Mn,createApp:Jm(zs,Mn)}}function Go({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function l_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Qf(e,t,n=!1){const r=e.children,s=t.children;if(nt(r)&&nt(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=mn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Qf(a,l)),l.type===oo&&(l.el=a.el)}}function c_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Yf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yf(t)}function ou(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const u_=Symbol.for("v-scx"),h_=()=>yi(u_);function Wo(e,t,n){return Xf(e,t,n)}function Xf(e,t,n=It){const{immediate:r,deep:s,flush:i,once:a}=n,l=Ut({},n),c=t&&r||!t&&i!=="post";let h;if(Ss){if(i==="sync"){const R=h_();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!c){const R=()=>{};return R.stop=Fe,R.resume=Fe,R.pause=Fe,R}}const d=ne;l.call=(R,V,O)=>xe(R,d,V,O);let g=!1;i==="post"?l.scheduler=R=>{ge(R,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(R,V)=>{V?R():ll(R)}),l.augmentJob=R=>{t&&(R.flags|=4),g&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const T=Am(e,t,l);return Ss&&(h?h.push(T):c&&T()),T}function f_(e,t,n){const r=this.proxy,s=Dt(e)?e.includes(".")?Jf(r,e):()=>r[e]:e.bind(r,r);let i;at(t)?i=t:(i=t.handler,n=t);const a=Us(this),l=Xf(s,i.bind(r),n);return a(),l}function Jf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const d_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${wn(t)}Modifiers`]||e[`${rr(t)}Modifiers`];function p_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||It;let s=n;const i=t.startsWith("update:"),a=i&&d_(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Dt(d)?d.trim():d)),a.number&&(s=n.map(da)));let l,c=r[l=Bo(t)]||r[l=Bo(wn(t))];!c&&i&&(c=r[l=Bo(rr(t))]),c&&xe(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,xe(h,e,6,s)}}function Zf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!at(e)){const c=h=>{const d=Zf(h,t,!0);d&&(l=!0,Ut(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Ct(e)&&r.set(e,null),null):(nt(i)?i.forEach(c=>a[c]=null):Ut(a,i),Ct(e)&&r.set(e,a),a)}function io(e,t){return!e||!Yi(t)?!1:(t=t.slice(2).replace(/Once$/,""),yt(e,t[0].toLowerCase()+t.slice(1))||yt(e,rr(t))||yt(e,t))}function Qo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:g,data:T,setupState:R,ctx:V,inheritAttrs:O}=e,N=Pi(e);let G,$;try{if(n.shapeFlag&4){const M=s||r,Z=M;G=Le(h.call(Z,M,d,g,R,T,V)),$=l}else{const M=t;G=Le(M.length>1?M(g,{attrs:l,slots:a,emit:c}):M(g,null)),$=t.props?l:g_(l)}}catch(M){_s.length=0,no(M,e,1),G=ce(he)}let z=G;if($&&O!==!1){const M=Object.keys($),{shapeFlag:Z}=z;M.length&&Z&7&&(i&&M.some(Ya)&&($=m_($,i)),z=An(z,$,!1,!0))}return n.dirs&&(z=An(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&Rs(z,n.transition),G=z,Pi(N),G}const g_=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yi(n))&&((t||(t={}))[n]=e[n]);return t},m_=(e,t)=>{const n={};for(const r in e)(!Ya(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function __(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?au(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const T=d[g];if(a[T]!==r[T]&&!io(h,T))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?au(r,a,h):!0:!!a;return!1}function au(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!io(n,i))return!0}return!1}function y_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const td=e=>e.__isSuspense;function v_(e,t){t&&t.pendingBranch?nt(e)?t.effects.push(...e):t.effects.push(e):Sm(e)}const Ie=Symbol.for("v-fgt"),oo=Symbol.for("v-txt"),he=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),_s=[];let ye=null;function en(e=!1){_s.push(ye=e?null:[])}function T_(){_s.pop(),ye=_s[_s.length-1]||null}let Cs=1;function lu(e,t=!1){Cs+=e,e<0&&ye&&t&&(ye.hasOnce=!0)}function ed(e){return e.dynamicChildren=Cs>0?ye||br:null,T_(),Cs>0&&ye&&ye.push(e),e}function vr(e,t,n,r,s,i){return ed(lt(e,t,n,r,s,i,!0))}function fl(e,t,n,r,s){return ed(ce(e,t,n,r,s,!0))}function xi(e){return e?e.__v_isVNode===!0:!1}function Gn(e,t){return e.type===t.type&&e.key===t.key}const nd=({key:e})=>e??null,vi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Dt(e)||re(e)||at(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function lt(e,t=null,n=null,r=0,s=null,i=e===Ie?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nd(t),ref:t&&vi(t),scopeId:Cf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return l?(dl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Dt(n)?8:16),Cs>0&&!a&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const ce=E_;function E_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===zm)&&(e=he),xi(e)){const l=An(e,t,!0);return n&&dl(l,n),Cs>0&&!i&&ye&&(l.shapeFlag&6?ye[ye.indexOf(e)]=l:ye.push(l)),l.patchFlag=-2,l}if(k_(e)&&(e=e.__vccOpts),t){t=I_(t);let{class:l,style:c}=t;l&&!Dt(l)&&(t.class=Za(l)),Ct(c)&&(al(c)&&!nt(c)&&(c=Ut({},c)),t.style=to(c))}const a=Dt(e)?1:td(e)?128:Pf(e)?64:Ct(e)?4:at(e)?2:0;return lt(e,t,n,r,s,a,i,!0)}function I_(e){return e?al(e)||jf(e)?Ut({},e):e:null}function An(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?b_(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&nd(h),ref:t&&t.ref?n&&i?nt(i)?i.concat(vi(t)):[i,vi(t)]:vi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Rs(d,c.clone(d)),d}function w_(e=" ",t=0){return ce(oo,null,e,t)}function A_(e="",t=!1){return t?(en(),fl(he,null,e)):ce(he,null,e)}function Le(e){return e==null||typeof e=="boolean"?ce(he):nt(e)?ce(Ie,null,e.slice()):xi(e)?mn(e):ce(oo,null,String(e))}function mn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:An(e)}function dl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(nt(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),dl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!jf(t)?t._ctx=_e:s===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else at(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[w_(t)]):n=8);e.children=t,e.shapeFlag|=n}function b_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Za([t.class,r.class]));else if(s==="style")t.style=to([t.style,r.style]);else if(Yi(s)){const i=t[s],a=r[s];a&&i!==a&&!(nt(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Oe(e,t,n,r=null){xe(e,t,7,[n,r])}const R_=Uf();let C_=0;function S_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||R_,i={uid:C_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(r,s),emitsOptions:Zf(r,s),emit:null,emitted:null,propsDefaults:It,inheritAttrs:r.inheritAttrs,ctx:It,data:It,props:It,attrs:It,slots:It,refs:It,setupState:It,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=p_.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const P_=()=>ne||_e;let Ni,ba;{const e=Zi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ni=t("__VUE_INSTANCE_SETTERS__",n=>ne=n),ba=t("__VUE_SSR_SETTERS__",n=>Ss=n)}const Us=e=>{const t=ne;return Ni(e),e.scope.on(),()=>{e.scope.off(),Ni(t)}},cu=()=>{ne&&ne.scope.off(),Ni(null)};function rd(e){return e.vnode.shapeFlag&4}let Ss=!1;function V_(e,t=!1,n=!1){t&&ba(t);const{props:r,children:s}=e.vnode,i=rd(e);t_(e,r,i,t),s_(e,s,n);const a=i?D_(e,t):void 0;return t&&ba(!1),a}function D_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hm);const{setup:r}=n;if(r){Dn();const s=e.setupContext=r.length>1?N_(e):null,i=Us(e),a=Fs(r,e,0,[e.props,s]),l=Jh(a);if(xn(),i(),(l||e.sp)&&!ps(e)&&Of(e),l){if(a.then(cu,cu),t)return a.then(c=>{uu(e,c,t)}).catch(c=>{no(c,e,0)});e.asyncDep=a}else uu(e,a,t)}else sd(e,t)}function uu(e,t,n){at(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ct(t)&&(e.setupState=If(t)),sd(e,n)}let hu;function sd(e,t,n){const r=e.type;if(!e.render){if(!t&&hu&&!r.render){const s=r.template||ul(e).template;if(s){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,h=Ut(Ut({isCustomElement:i,delimiters:l},a),c);r.render=hu(s,h)}}e.render=r.render||Fe}{const s=Us(e);Dn();try{Km(e)}finally{xn(),s()}}}const x_={get(e,t){return Zt(e,"get",""),e[t]}};function N_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,x_),slots:e.slots,emit:e.emit,expose:t}}function ao(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(If(mm(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ms)return ms[n](e)},has(t,n){return n in t||n in ms}})):e.proxy}function k_(e){return at(e)&&"__vccOpts"in e}const O_=(e,t)=>Im(e,t,Ss);function M_(e,t,n){const r=arguments.length;return r===2?Ct(t)&&!nt(t)?xi(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xi(n)&&(n=[n]),ce(e,t,n))}const L_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ra;const fu=typeof window<"u"&&window.trustedTypes;if(fu)try{Ra=fu.createPolicy("vue",{createHTML:e=>e})}catch{}const id=Ra?e=>Ra.createHTML(e):e=>e,F_="http://www.w3.org/2000/svg",U_="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,du=Je&&Je.createElement("template"),B_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Je.createElementNS(F_,e):t==="mathml"?Je.createElementNS(U_,e):n?Je.createElement(e,{is:n}):Je.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{du.innerHTML=id(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=du.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},dn="transition",is="animation",Ps=Symbol("_vtc"),od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$_=Ut({},Vf,od),j_=e=>(e.displayName="Transition",e.props=$_,e),q_=j_((e,{slots:t})=>M_(Nm,z_(e),t)),qn=(e,t=[])=>{nt(e)?e.forEach(n=>n(...t)):e&&e(...t)},pu=e=>e?nt(e)?e.some(t=>t.length>1):e.length>1:!1;function z_(e){const t={};for(const E in e)E in od||(t[E]=e[E]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:T=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=e,V=H_(s),O=V&&V[0],N=V&&V[1],{onBeforeEnter:G,onEnter:$,onEnterCancelled:z,onLeave:M,onLeaveCancelled:Z,onBeforeAppear:rt=G,onAppear:w=$,onAppearCancelled:m=z}=t,_=(E,y,wt,se)=>{E._enterCancelled=se,zn(E,y?d:l),zn(E,y?h:a),wt&&wt()},I=(E,y)=>{E._isLeaving=!1,zn(E,g),zn(E,R),zn(E,T),y&&y()},A=E=>(y,wt)=>{const se=E?w:$,xt=()=>_(y,E,wt);qn(se,[y,xt]),gu(()=>{zn(y,E?c:i),Xe(y,E?d:l),pu(se)||mu(y,r,O,xt)})};return Ut(t,{onBeforeEnter(E){qn(G,[E]),Xe(E,i),Xe(E,a)},onBeforeAppear(E){qn(rt,[E]),Xe(E,c),Xe(E,h)},onEnter:A(!1),onAppear:A(!0),onLeave(E,y){E._isLeaving=!0;const wt=()=>I(E,y);Xe(E,g),E._enterCancelled?(Xe(E,T),vu()):(vu(),Xe(E,T)),gu(()=>{E._isLeaving&&(zn(E,g),Xe(E,R),pu(M)||mu(E,r,N,wt))}),qn(M,[E,wt])},onEnterCancelled(E){_(E,!1,void 0,!0),qn(z,[E])},onAppearCancelled(E){_(E,!0,void 0,!0),qn(m,[E])},onLeaveCancelled(E){I(E),qn(Z,[E])}})}function H_(e){if(e==null)return null;if(Ct(e))return[Xo(e.enter),Xo(e.leave)];{const t=Xo(e);return[t,t]}}function Xo(e){return jg(e)}function Xe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ps]||(e[Ps]=new Set)).add(t)}function zn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Ps];n&&(n.delete(t),n.size||(e[Ps]=void 0))}function gu(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let K_=0;function mu(e,t,n,r){const s=e._endId=++K_,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=G_(e,t);if(!a)return r();const h=a+"end";let d=0;const g=()=>{e.removeEventListener(h,T),i()},T=R=>{R.target===e&&++d>=c&&g()};setTimeout(()=>{d<c&&g()},l+1),e.addEventListener(h,T)}function G_(e,t){const n=window.getComputedStyle(e),r=V=>(n[V]||"").split(", "),s=r(`${dn}Delay`),i=r(`${dn}Duration`),a=_u(s,i),l=r(`${is}Delay`),c=r(`${is}Duration`),h=_u(l,c);let d=null,g=0,T=0;t===dn?a>0&&(d=dn,g=a,T=i.length):t===is?h>0&&(d=is,g=h,T=c.length):(g=Math.max(a,h),d=g>0?a>h?dn:is:null,T=d?d===dn?i.length:c.length:0);const R=d===dn&&/\b(transform|all)(,|$)/.test(r(`${dn}Property`).toString());return{type:d,timeout:g,propCount:T,hasTransform:R}}function _u(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>yu(n)+yu(e[r])))}function yu(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function vu(){return document.body.offsetHeight}function W_(e,t,n){const r=e[Ps];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Tu=Symbol("_vod"),Q_=Symbol("_vsh"),Y_=Symbol(""),X_=/(^|;)\s*display\s*:/;function J_(e,t,n){const r=e.style,s=Dt(n);let i=!1;if(n&&!s){if(t)if(Dt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ti(r,l,"")}else for(const a in t)n[a]==null&&Ti(r,a,"");for(const a in n)a==="display"&&(i=!0),Ti(r,a,n[a])}else if(s){if(t!==n){const a=r[Y_];a&&(n+=";"+a),r.cssText=n,i=X_.test(n)}}else t&&e.removeAttribute("style");Tu in e&&(e[Tu]=i?r.display:"",e[Q_]&&(r.display="none"))}const Eu=/\s*!important$/;function Ti(e,t,n){if(nt(n))n.forEach(r=>Ti(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Z_(e,t);Eu.test(n)?e.setProperty(rr(r),n.replace(Eu,""),"important"):e[r]=n}}const Iu=["Webkit","Moz","ms"],Jo={};function Z_(e,t){const n=Jo[t];if(n)return n;let r=wn(t);if(r!=="filter"&&r in e)return Jo[t]=r;r=ef(r);for(let s=0;s<Iu.length;s++){const i=Iu[s]+r;if(i in e)return Jo[t]=i}return t}const wu="http://www.w3.org/1999/xlink";function Au(e,t,n,r,s,i=Wg(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(wu,t.slice(6,t.length)):e.setAttributeNS(wu,t,n):n==null||i&&!rf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Vn(n)?String(n):n)}function bu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?id(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=rf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Tr(e,t,n,r){e.addEventListener(t,n,r)}function ty(e,t,n,r){e.removeEventListener(t,n,r)}const Ru=Symbol("_vei");function ey(e,t,n,r,s=null){const i=e[Ru]||(e[Ru]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=ny(t);if(r){const h=i[t]=iy(r,s);Tr(e,l,h,c)}else a&&(ty(e,l,a,c),i[t]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function ny(e){let t;if(Cu.test(e)){t={};let r;for(;r=e.match(Cu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rr(e.slice(2)),t]}let Zo=0;const ry=Promise.resolve(),sy=()=>Zo||(ry.then(()=>Zo=0),Zo=Date.now());function iy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(oy(r,n.value),t,5,[r])};return n.value=e,n.attached=sy(),n}function oy(e,t){if(nt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Su=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ay=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?W_(e,r,a):t==="style"?J_(e,n,r):Yi(t)?Ya(t)||ey(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ly(e,t,r,a))?(bu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Au(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Dt(r))?bu(e,wn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Au(e,t,r,a))};function ly(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Su(t)&&at(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Su(t)&&Dt(n)?!1:t in e}const Pu=e=>{const t=e.props["onUpdate:modelValue"]||!1;return nt(t)?n=>_i(t,n):t};function cy(e){e.target.composing=!0}function Vu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ta=Symbol("_assign"),uy={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ta]=Pu(s);const i=r||s.props&&s.props.type==="number";Tr(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=da(l)),e[ta](l)}),n&&Tr(e,"change",()=>{e.value=e.value.trim()}),t||(Tr(e,"compositionstart",cy),Tr(e,"compositionend",Vu),Tr(e,"change",Vu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(e[ta]=Pu(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?da(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},hy=Ut({patchProp:ay},B_);let Du;function fy(){return Du||(Du=o_(hy))}const dy=(...e)=>{const t=fy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=gy(r);if(!s)return;const i=t._component;!at(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,py(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function py(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function gy(e){return Dt(e)?document.querySelector(e):e}const pl=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},my=Object.assign({inheritAttrs:!1},{__name:"CurrentLoading",props:{show:{type:Boolean,default:!1},position:{type:String,default:"absolute"},colorCode:{type:String,default:"rgba(255, 255, 255, 1)"}},setup(e){return(t,n)=>(en(),fl(q_,{name:"Out"},{default:Sf(()=>[e.show?(en(),vr("div",{key:0,class:"currentLoading",style:to({position:e.position,"background-color":e.colorCode})},n[0]||(n[0]=[lt("div",{class:"lds-spinner"},[lt("div"),lt("div"),lt("div"),lt("div"),lt("div"),lt("div"),lt("div"),lt("div"),lt("div"),lt("div"),lt("div"),lt("div")],-1)]),4)):A_("",!0)]),_:1}))}}),xu=pl(my,[["__scopeId","data-v-4897d4aa"]]);var Nu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},_y=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let T=(l&15)<<2|h>>6,R=h&63;c||(R=64,a||(T=64)),r.push(n[d],n[g],n[T],n[R])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ad(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_y(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const g=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new yy;const T=i<<2|l>>4;if(r.push(T),h!==64){const R=l<<4&240|h>>2;if(r.push(R),g!==64){const V=h<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vy=function(e){const t=ad(e);return ld.encodeByteArray(t,!0)},ki=function(e){return vy(e).replace(/\./g,"")},Ty=function(e){try{return ld.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=()=>Ey().__FIREBASE_DEFAULTS__,wy=()=>{if(typeof process>"u"||typeof Nu>"u")return;const e=Nu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ay=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ty(e[1]);return t&&JSON.parse(t)},gl=()=>{try{return Iy()||wy()||Ay()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},by=e=>{var t,n;return(n=(t=gl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},cd=e=>{const t=by(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ud=()=>{var e;return(e=gl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ki(JSON.stringify(n)),ki(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sy(){var e;const t=(e=gl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Py(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Vy(){return!Sy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fd(){try{return typeof indexedDB=="object"}catch{return!1}}function dd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Dy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="FirebaseError";class ln extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=xy,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Ny(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ln(s,l,r)}}function Ny(e,t){return e.replace(ky,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ky=/\{\$([^}]+)}/g;function Oi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(ku(i)&&ku(a)){if(!Oi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ku(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=1e3,My=2,Ly=4*60*60*1e3,Fy=.5;function Ou(e,t=Oy,n=My){const r=t*Math.pow(n,e),s=Math.round(Fy*r*(Math.random()-.5)*2);return Math.min(Ly,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){return e&&e._delegate?e._delegate:e}class je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ry;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($y(t))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kn){return this.instances.has(t)}getOptions(t=Kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:By(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kn){return this.component?this.component.multipleInstances?t:Kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function By(e){return e===Kn?void 0:e}function $y(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ft||(ft={}));const qy={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},zy=ft.INFO,Hy={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},Ky=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Hy[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ml{constructor(t){this.name=t,this._logLevel=zy,this._logHandler=Ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...t),this._logHandler(this,ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...t),this._logHandler(this,ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...t),this._logHandler(this,ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...t),this._logHandler(this,ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...t),this._logHandler(this,ft.ERROR,...t)}}const Gy=(e,t)=>t.some(n=>e instanceof n);let Mu,Lu;function Wy(){return Mu||(Mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qy(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pd=new WeakMap,Ca=new WeakMap,gd=new WeakMap,ea=new WeakMap,_l=new WeakMap;function Yy(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(vn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&pd.set(n,e)}).catch(()=>{}),_l.set(t,e),t}function Xy(e){if(Ca.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ca.set(e,t)}let Sa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ca.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jy(e){Sa=e(Sa)}function Zy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(na(this),t,...n);return gd.set(r,t.sort?t.sort():[t]),vn(r)}:Qy().includes(e)?function(...t){return e.apply(na(this),t),vn(pd.get(this))}:function(...t){return vn(e.apply(na(this),t))}}function tv(e){return typeof e=="function"?Zy(e):(e instanceof IDBTransaction&&Xy(e),Gy(e,Wy())?new Proxy(e,Sa):e)}function vn(e){if(e instanceof IDBRequest)return Yy(e);if(ea.has(e))return ea.get(e);const t=tv(e);return t!==e&&(ea.set(e,t),_l.set(t,e)),t}const na=e=>_l.get(e);function md(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=vn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(vn(a.result),c.oldVersion,c.newVersion,vn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const ev=["get","getKey","getAll","getAllKeys","count"],nv=["put","add","delete","clear"],ra=new Map;function Fu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ra.get(t))return ra.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=nv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ev.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ra.set(t,i),i}Jy(e=>({...e,get:(t,n,r)=>Fu(t,n)||e.get(t,n,r),has:(t,n)=>!!Fu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pa="@firebase/app",Uu="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new ml("@firebase/app"),iv="@firebase/app-compat",ov="@firebase/analytics-compat",av="@firebase/analytics",lv="@firebase/app-check-compat",cv="@firebase/app-check",uv="@firebase/auth",hv="@firebase/auth-compat",fv="@firebase/database",dv="@firebase/data-connect",pv="@firebase/database-compat",gv="@firebase/functions",mv="@firebase/functions-compat",_v="@firebase/installations",yv="@firebase/installations-compat",vv="@firebase/messaging",Tv="@firebase/messaging-compat",Ev="@firebase/performance",Iv="@firebase/performance-compat",wv="@firebase/remote-config",Av="@firebase/remote-config-compat",bv="@firebase/storage",Rv="@firebase/storage-compat",Cv="@firebase/firestore",Sv="@firebase/vertexai",Pv="@firebase/firestore-compat",Vv="firebase",Dv="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="[DEFAULT]",xv={[Pa]:"fire-core",[iv]:"fire-core-compat",[av]:"fire-analytics",[ov]:"fire-analytics-compat",[cv]:"fire-app-check",[lv]:"fire-app-check-compat",[uv]:"fire-auth",[hv]:"fire-auth-compat",[fv]:"fire-rtdb",[dv]:"fire-data-connect",[pv]:"fire-rtdb-compat",[gv]:"fire-fn",[mv]:"fire-fn-compat",[_v]:"fire-iid",[yv]:"fire-iid-compat",[vv]:"fire-fcm",[Tv]:"fire-fcm-compat",[Ev]:"fire-perf",[Iv]:"fire-perf-compat",[wv]:"fire-rc",[Av]:"fire-rc-compat",[bv]:"fire-gcs",[Rv]:"fire-gcs-compat",[Cv]:"fire-fst",[Pv]:"fire-fst-compat",[Sv]:"fire-vertex","fire-js":"fire-js",[Vv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Map,Nv=new Map,Da=new Map;function Bu(e,t){try{e.container.addComponent(t)}catch(n){nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rn(e){const t=e.name;if(Da.has(t))return nn.debug(`There were multiple attempts to register component ${t}.`),!1;Da.set(t,e);for(const n of Mi.values())Bu(n,e);for(const n of Nv.values())Bu(n,e);return!0}function Ur(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new lo("app","Firebase",kv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=Dv;function yd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Va,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(n||(n=ud()),!n)throw Tn.create("no-options");const i=Mi.get(s);if(i){if(Oi(n,i.options)&&Oi(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const a=new jy(s);for(const c of Da.values())a.addComponent(c);const l=new Ov(n,r,a);return Mi.set(s,l),l}function yl(e=Va){const t=Mi.get(e);if(!t&&e===Va&&ud())return yd();if(!t)throw Tn.create("no-app",{appName:e});return t}function be(e,t,n){var r;let s=(r=xv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nn.warn(l.join(" "));return}rn(new je(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="firebase-heartbeat-database",Lv=1,Vs="firebase-heartbeat-store";let sa=null;function vd(){return sa||(sa=md(Mv,Lv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Tn.create("idb-open",{originalErrorMessage:e.message})})),sa}async function Fv(e){try{const n=(await vd()).transaction(Vs),r=await n.objectStore(Vs).get(Td(e));return await n.done,r}catch(t){if(t instanceof ln)nn.warn(t.message);else{const n=Tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});nn.warn(n.message)}}}async function $u(e,t){try{const r=(await vd()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(t,Td(e)),await r.done}catch(n){if(n instanceof ln)nn.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(r.message)}}}function Td(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=1024,Bv=30*24*60*60*1e3;class $v{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ju();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Bv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ju(),{heartbeatsToSend:r,unsentEntries:s}=jv(this._heartbeatsCache.heartbeats),i=ki(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return nn.warn(n),""}}}function ju(){return new Date().toISOString().substring(0,10)}function jv(e,t=Uv){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),qu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fd()?dd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $u(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qu(e){return ki(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(e){rn(new je("platform-logger",t=>new rv(t),"PRIVATE")),rn(new je("heartbeat",t=>new $v(t),"PRIVATE")),be(Pa,Uu,e),be(Pa,Uu,"esm2017"),be("fire-js","")}zv("");var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,Ed;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(I,A,E){for(var y=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)y[wt-2]=arguments[wt];return m.prototype[A].apply(I,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)I[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],A=w.g[2];var E=w.g[3],y=m+(E^_&(A^E))+I[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=E+(A^m&(_^A))+I[1]+3905402710&4294967295,E=m+(y<<12&4294967295|y>>>20),y=A+(_^E&(m^_))+I[2]+606105819&4294967295,A=E+(y<<17&4294967295|y>>>15),y=_+(m^A&(E^m))+I[3]+3250441966&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(E^_&(A^E))+I[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=E+(A^m&(_^A))+I[5]+1200080426&4294967295,E=m+(y<<12&4294967295|y>>>20),y=A+(_^E&(m^_))+I[6]+2821735955&4294967295,A=E+(y<<17&4294967295|y>>>15),y=_+(m^A&(E^m))+I[7]+4249261313&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(E^_&(A^E))+I[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=E+(A^m&(_^A))+I[9]+2336552879&4294967295,E=m+(y<<12&4294967295|y>>>20),y=A+(_^E&(m^_))+I[10]+4294925233&4294967295,A=E+(y<<17&4294967295|y>>>15),y=_+(m^A&(E^m))+I[11]+2304563134&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(E^_&(A^E))+I[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=E+(A^m&(_^A))+I[13]+4254626195&4294967295,E=m+(y<<12&4294967295|y>>>20),y=A+(_^E&(m^_))+I[14]+2792965006&4294967295,A=E+(y<<17&4294967295|y>>>15),y=_+(m^A&(E^m))+I[15]+1236535329&4294967295,_=A+(y<<22&4294967295|y>>>10),y=m+(A^E&(_^A))+I[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^A&(m^_))+I[6]+3225465664&4294967295,E=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(E^m))+I[11]+643717713&4294967295,A=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(A^E))+I[0]+3921069994&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^E&(_^A))+I[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^A&(m^_))+I[10]+38016083&4294967295,E=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(E^m))+I[15]+3634488961&4294967295,A=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(A^E))+I[4]+3889429448&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^E&(_^A))+I[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^A&(m^_))+I[14]+3275163606&4294967295,E=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(E^m))+I[3]+4107603335&4294967295,A=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(A^E))+I[8]+1163531501&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(A^E&(_^A))+I[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^A&(m^_))+I[2]+4243563512&4294967295,E=m+(y<<9&4294967295|y>>>23),y=A+(m^_&(E^m))+I[7]+1735328473&4294967295,A=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(A^E))+I[12]+2368359562&4294967295,_=A+(y<<20&4294967295|y>>>12),y=m+(_^A^E)+I[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^A)+I[8]+2272392833&4294967295,E=m+(y<<11&4294967295|y>>>21),y=A+(E^m^_)+I[11]+1839030562&4294967295,A=E+(y<<16&4294967295|y>>>16),y=_+(A^E^m)+I[14]+4259657740&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^E)+I[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^A)+I[4]+1272893353&4294967295,E=m+(y<<11&4294967295|y>>>21),y=A+(E^m^_)+I[7]+4139469664&4294967295,A=E+(y<<16&4294967295|y>>>16),y=_+(A^E^m)+I[10]+3200236656&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^E)+I[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^A)+I[0]+3936430074&4294967295,E=m+(y<<11&4294967295|y>>>21),y=A+(E^m^_)+I[3]+3572445317&4294967295,A=E+(y<<16&4294967295|y>>>16),y=_+(A^E^m)+I[6]+76029189&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(_^A^E)+I[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^A)+I[12]+3873151461&4294967295,E=m+(y<<11&4294967295|y>>>21),y=A+(E^m^_)+I[15]+530742520&4294967295,A=E+(y<<16&4294967295|y>>>16),y=_+(A^E^m)+I[2]+3299628645&4294967295,_=A+(y<<23&4294967295|y>>>9),y=m+(A^(_|~E))+I[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~A))+I[7]+1126891415&4294967295,E=m+(y<<10&4294967295|y>>>22),y=A+(m^(E|~_))+I[14]+2878612391&4294967295,A=E+(y<<15&4294967295|y>>>17),y=_+(E^(A|~m))+I[5]+4237533241&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~E))+I[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~A))+I[3]+2399980690&4294967295,E=m+(y<<10&4294967295|y>>>22),y=A+(m^(E|~_))+I[10]+4293915773&4294967295,A=E+(y<<15&4294967295|y>>>17),y=_+(E^(A|~m))+I[1]+2240044497&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~E))+I[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~A))+I[15]+4264355552&4294967295,E=m+(y<<10&4294967295|y>>>22),y=A+(m^(E|~_))+I[6]+2734768916&4294967295,A=E+(y<<15&4294967295|y>>>17),y=_+(E^(A|~m))+I[13]+1309151649&4294967295,_=A+(y<<21&4294967295|y>>>11),y=m+(A^(_|~E))+I[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~A))+I[11]+3174756917&4294967295,E=m+(y<<10&4294967295|y>>>22),y=A+(m^(E|~_))+I[2]+718787259&4294967295,A=E+(y<<15&4294967295|y>>>17),y=_+(E^(A|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+E&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,I=this.B,A=this.h,E=0;E<m;){if(A==0)for(;E<=_;)s(this,w,E),E+=this.blockSize;if(typeof w=="string"){for(;E<m;)if(I[A++]=w.charCodeAt(E++),A==this.blockSize){s(this,I),A=0;break}}else for(;E<m;)if(I[A++]=w[E++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var I=0;32>I;I+=8)w[_++]=this.g[m]>>>I&255;return w};function i(w,m){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],I=!0,A=w.length-1;0<=A;A--){var E=w[A]|0;I&&E==m||(_[A]=E,I=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return N(h(-w));for(var m=[],_=1,I=0;w>=_;I++)m[I]=w/_|0,_*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return N(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),I=g,A=0;A<w.length;A+=8){var E=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+E),m);8>E?(E=h(Math.pow(m,E)),I=I.j(E).add(h(y))):(I=I.j(_),I=I.add(h(y)))}return I}var g=c(0),T=c(1),R=c(16777216);e=a.prototype,e.m=function(){if(O(this))return-N(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var I=this.i(_);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},e.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(V(this))return"0";if(O(this))return"-"+N(this).toString(w);for(var m=h(Math.pow(w,6)),_=this,I="";;){var A=M(_,m).g;_=G(_,A.j(m));var E=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,V(_))return E+I;for(;6>E.length;)E="0"+E;I=E+I}},e.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function V(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function O(w){return w.h==-1}e.l=function(w){return w=G(this,w),O(w)?-1:V(w)?0:1};function N(w){for(var m=w.g.length,_=[],I=0;I<m;I++)_[I]=~w.g[I];return new a(_,~w.h).add(T)}e.abs=function(){return O(this)?N(this):this},e.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],I=0,A=0;A<=m;A++){var E=I+(this.i(A)&65535)+(w.i(A)&65535),y=(E>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=y>>>16,E&=65535,y&=65535,_[A]=y<<16|E}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(w,m){return w.add(N(m))}e.j=function(w){if(V(this)||V(w))return g;if(O(this))return O(w)?N(this).j(N(w)):N(N(this).j(w));if(O(w))return N(this.j(N(w)));if(0>this.l(R)&&0>w.l(R))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],I=0;I<2*m;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var E=this.i(I)>>>16,y=this.i(I)&65535,wt=w.i(A)>>>16,se=w.i(A)&65535;_[2*I+2*A]+=y*se,$(_,2*I+2*A),_[2*I+2*A+1]+=E*se,$(_,2*I+2*A+1),_[2*I+2*A+1]+=y*wt,$(_,2*I+2*A+1),_[2*I+2*A+2]+=E*wt,$(_,2*I+2*A+2)}for(I=0;I<m;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=m;I<2*m;I++)_[I]=0;return new a(_,0)};function $(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function z(w,m){this.g=w,this.h=m}function M(w,m){if(V(m))throw Error("division by zero");if(V(w))return new z(g,g);if(O(w))return m=M(N(w),m),new z(N(m.g),N(m.h));if(O(m))return m=M(w,N(m)),new z(N(m.g),m.h);if(30<w.g.length){if(O(w)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=m;0>=I.l(w);)_=Z(_),I=Z(I);var A=rt(_,1),E=rt(I,1);for(I=rt(I,2),_=rt(_,2);!V(I);){var y=E.add(I);0>=y.l(w)&&(A=A.add(_),E=y),I=rt(I,1),_=rt(_,1)}return m=G(w,A.j(m)),new z(A,m)}for(A=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),E=h(_),y=E.j(m);O(y)||0<y.l(w);)_-=I,E=h(_),y=E.j(m);V(E)&&(E=T),A=A.add(E),w=G(w,y)}return new z(A,w)}e.A=function(w){return M(this,w).h},e.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],I=0;I<m;I++)_[I]=this.i(I)&w.i(I);return new a(_,this.h&w.h)},e.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],I=0;I<m;I++)_[I]=this.i(I)|w.i(I);return new a(_,this.h|w.h)},e.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],I=0;I<m;I++)_[I]=this.i(I)^w.i(I);return new a(_,this.h^w.h)};function Z(w){for(var m=w.g.length+1,_=[],I=0;I<m;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(_,w.h)}function rt(w,m){var _=m>>5;m%=32;for(var I=w.g.length-_,A=[],E=0;E<I;E++)A[E]=0<m?w.i(E+_)>>>m|w.i(E+_+1)<<32-m:w.i(E+_);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ed=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Xn=a}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});var ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Id,as,wd,Ei,xa,Ad,bd,Rd;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ui=="object"&&ui];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var C=o[p];if(!(C in f))break t;f=f[C]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,C={next:function(){if(!p&&f<o.length){var S=f++;return{value:u(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function T(o,u,f){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,T.apply(null,arguments)}function R(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,C,S){for(var q=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)q[Et-2]=arguments[Et];return u.prototype[C].apply(p,q)}}function O(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function N(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(c(p)){const C=o.length||0,S=p.length||0;o.length=C+S;for(let q=0;q<S;q++)o[C+q]=p[q]}else o.push(p)}}class G{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function M(o){return M[" "](o),o}M[" "]=function(){};var Z=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function rt(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let f,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(f in p)o[f]=p[f];for(let S=0;S<_.length;S++)f=_[S],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function E(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Re;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class wt{constructor(){this.h=this.g=null}add(u,f){const p=se.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var se=new G(()=>new xt,o=>o.reset());class xt{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Tt,dt=!1,Re=new wt,Nn=()=>{const o=l.Promise.resolve(void 0);Tt=()=>{o.then(Ke)}};var Ke=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(f){E(f)}var u=se;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}dt=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Mt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var bo=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function kn(o,u){if(Mt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Z){t:{try{M(u.nodeName);var C=!0;break t}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:On[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&kn.aa.h.call(this)}}V(kn,Mt);var On={2:"touch",3:"pen",4:"mouse"};kn.prototype.h=function(){kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),Hr=0;function zs(o,u,f,p,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=C,this.key=++Hr,this.da=this.fa=!1}function ke(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Mn(o){this.src=o,this.g={},this.h=0}Mn.prototype.add=function(o,u,f,p,C){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var q=v(o,u,p,C);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new zs(u,this.src,S,!!p,C),u.fa=f,o.push(u)),u};function cr(o,u){var f=u.type;if(f in o.g){var p=o.g[f],C=Array.prototype.indexOf.call(p,u,void 0),S;(S=0<=C)&&Array.prototype.splice.call(p,C,1),S&&(ke(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function v(o,u,f,p){for(var C=0;C<o.length;++C){var S=o[C];if(!S.da&&S.listener==u&&S.capture==!!f&&S.ha==p)return C}return-1}var b="closure_lm_"+(1e6*Math.random()|0),P={};function F(o,u,f,p,C){if(Array.isArray(u)){for(var S=0;S<u.length;S++)F(o,u[S],f,p,C);return null}return f=X(f),o&&o[Ge]?o.K(u,f,h(p)?!!p.capture:!!p,C):k(o,u,f,!1,p,C)}function k(o,u,f,p,C,S){if(!u)throw Error("Invalid event type");var q=h(C)?!!C.capture:!!C,Et=tt(o);if(Et||(o[b]=Et=new Mn(o)),f=Et.add(u,f,p,q,S),f.proxy)return f;if(p=L(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)bo||(C=q),C===void 0&&(C=!1),o.addEventListener(u.toString(),p,C);else if(o.attachEvent)o.attachEvent(B(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function L(){function o(f){return u.call(o.src,o.listener,f)}const u=U;return o}function H(o,u,f,p,C){if(Array.isArray(u))for(var S=0;S<u.length;S++)H(o,u[S],f,p,C);else p=h(p)?!!p.capture:!!p,f=X(f),o&&o[Ge]?(o=o.i,u=String(u).toString(),u in o.g&&(S=o.g[u],f=v(S,f,p,C),-1<f&&(ke(S[f]),Array.prototype.splice.call(S,f,1),S.length==0&&(delete o.g[u],o.h--)))):o&&(o=tt(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,f,p,C)),(f=-1<o?u[o]:null)&&j(f))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ge])cr(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(B(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=tt(u))?(cr(f,o),f.h==0&&(f.src=null,u[b]=null)):ke(o)}}}function B(o){return o in P?P[o]:P[o]="on"+o}function U(o,u){if(o.da)o=!0;else{u=new kn(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&j(o),o=f.call(p,u)}return o}function tt(o){return o=o[b],o instanceof Mn?o:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function X(o){return typeof o=="function"?o:(o[K]||(o[K]=function(u){return o.handleEvent(u)}),o[K])}function Y(){Ot.call(this),this.i=new Mn(this),this.M=this,this.F=null}V(Y,Ot),Y.prototype[Ge]=!0,Y.prototype.removeEventListener=function(o,u,f,p){H(this,o,u,f,p)};function et(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Mt(u,o);else if(u instanceof Mt)u.target=u.target||o;else{var C=u;u=new Mt(p,o),I(u,C)}if(C=!0,f)for(var S=f.length-1;0<=S;S--){var q=u.g=f[S];C=mt(q,p,!0,u)&&C}if(q=u.g=o,C=mt(q,p,!0,u)&&C,C=mt(q,p,!1,u)&&C,f)for(S=0;S<f.length;S++)q=u.g=f[S],C=mt(q,p,!1,u)&&C}Y.prototype.N=function(){if(Y.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)ke(f[p]);delete o.g[u],o.h--}}this.F=null},Y.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},Y.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function mt(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,S=0;S<u.length;++S){var q=u[S];if(q&&!q.da&&q.capture==f){var Et=q.listener,qt=q.ha||q.src;q.fa&&cr(o.i,q),C=Et.call(qt,p)!==!1&&C}}return C&&!p.defaultPrevented}function pt(o,u,f){if(typeof o=="function")f&&(o=T(o,f));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Gt(o){o.g=pt(()=>{o.g=null,o.i&&(o.i=!1,Gt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Bt extends Ot{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Gt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(o){Ot.call(this),this.h=o,this.g={}}V(jt,Ot);var Wt=[];function cn(o){rt(o.g,function(u,f){this.g.hasOwnProperty(f)&&j(u)},o),o.g={}}jt.prototype.N=function(){jt.aa.N.call(this),cn(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ur=l.JSON.stringify,ie=l.JSON.parse,Te=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function hr(){}hr.prototype.h=null;function sc(o){return o.h||(o.h=o.i())}function ic(){}var Kr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ro(){Mt.call(this,"d")}V(Ro,Mt);function Co(){Mt.call(this,"c")}V(Co,Mt);var Ln={},oc=null;function Hs(){return oc=oc||new Y}Ln.La="serverreachability";function ac(o){Mt.call(this,Ln.La,o)}V(ac,Mt);function Gr(o){const u=Hs();et(u,new ac(u))}Ln.STAT_EVENT="statevent";function lc(o,u){Mt.call(this,Ln.STAT_EVENT,o),this.stat=u}V(lc,Mt);function oe(o){const u=Hs();et(u,new lc(u,o))}Ln.Ma="timingevent";function cc(o,u){Mt.call(this,Ln.Ma,o),this.size=u}V(cc,Mt);function Wr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Qr(){this.g=!0}Qr.prototype.xa=function(){this.g=!1};function pg(o,u,f,p,C,S){o.info(function(){if(o.g)if(S)for(var q="",Et=S.split("&"),qt=0;qt<Et.length;qt++){var gt=Et[qt].split("=");if(1<gt.length){var Qt=gt[0];gt=gt[1];var Yt=Qt.split("_");q=2<=Yt.length&&Yt[1]=="type"?q+(Qt+"="+gt+"&"):q+(Qt+"=redacted&")}}else q=null;else q=S;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+u+`
`+f+`
`+q})}function gg(o,u,f,p,C,S,q){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+u+`
`+f+`
`+S+" "+q})}function fr(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+_g(o,f)+(p?" "+p:"")})}function mg(o,u){o.info(function(){return"TIMEOUT: "+u})}Qr.prototype.info=function(){};function _g(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var S=C[0];if(S!="noop"&&S!="stop"&&S!="close")for(var q=1;q<C.length;q++)C[q]=""}}}}return ur(f)}catch{return u}}var Ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},So;function Gs(){}V(Gs,hr),Gs.prototype.g=function(){return new XMLHttpRequest},Gs.prototype.i=function(){return{}},So=new Gs;function un(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hc}function hc(){this.i=null,this.g="",this.h=!1}var fc={},Po={};function Vo(o,u,f){o.L=1,o.v=Xs(We(u)),o.m=f,o.P=!0,dc(o,null)}function dc(o,u){o.F=Date.now(),Ws(o),o.A=We(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Cc(f.i,"t",p),o.C=0,f=o.j.J,o.h=new hc,o.g=Hc(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Bt(T(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Wt[0]=C.toString()),C=Wt);for(var S=0;S<C.length;S++){var q=F(f,C[S],p||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Gr(),pg(o.i,o.u,o.A,o.l,o.R,o.m)}un.prototype.ca=function(o){o=o.target;const u=this.M;u&&Qe(o)==3?u.j():this.Y(o)},un.prototype.Y=function(o){try{if(o==this.g)t:{const Yt=Qe(this.g);var u=this.g.Ba();const gr=this.g.Z();if(!(3>Yt)&&(Yt!=3||this.g&&(this.h.h||this.g.oa()||kc(this.g)))){this.J||Yt!=4||u==7||(u==8||0>=gr?Gr(3):Gr(2)),Do(this);var f=this.g.Z();this.X=f;e:if(pc(this)){var p=kc(this.g);o="";var C=p.length,S=Qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Yr(this);var q="";break e}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(S&&u==C-1)});p.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,gg(this.i,this.u,this.A,this.l,this.R,Yt,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Et,qt=this.g;if((Et=qt.g?qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Et)){var gt=Et;break e}}gt=null}if(f=gt)fr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,f);else{this.o=!1,this.s=3,oe(12),Fn(this),Yr(this);break t}}if(this.P){f=!0;let Ce;for(;!this.J&&this.C<q.length;)if(Ce=yg(this,q),Ce==Po){Yt==4&&(this.s=4,oe(14),f=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==fc){this.s=4,oe(15),fr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else fr(this.i,this.l,Ce,null),xo(this,Ce);if(pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Yt!=4||q.length!=0||this.h.h||(this.s=1,oe(16),f=!1),this.o=this.o&&f,!f)fr(this.i,this.l,q,"[Invalid Chunked Response]"),Fn(this),Yr(this);else if(0<q.length&&!this.W){this.W=!0;var Qt=this.j;Qt.g==this&&Qt.ba&&!Qt.M&&(Qt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Fo(Qt),Qt.M=!0,oe(11))}}else fr(this.i,this.l,q,null),xo(this,q);Yt==4&&Fn(this),this.o&&!this.J&&(Yt==4?$c(this.j,this):(this.o=!1,Ws(this)))}else Og(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Fn(this),Yr(this)}}}catch{}finally{}};function pc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function yg(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?Po:(f=Number(u.substring(f,p)),isNaN(f)?fc:(p+=1,p+f>u.length?Po:(u=u.slice(p,p+f),o.C=p+f,u)))}un.prototype.cancel=function(){this.J=!0,Fn(this)};function Ws(o){o.S=Date.now()+o.I,gc(o,o.I)}function gc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wr(T(o.ba,o),u)}function Do(o){o.B&&(l.clearTimeout(o.B),o.B=null)}un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(mg(this.i,this.A),this.L!=2&&(Gr(),oe(17)),Fn(this),this.s=2,Yr(this)):gc(this,this.S-o)};function Yr(o){o.j.G==0||o.J||$c(o.j,o)}function Fn(o){Do(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,cn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function xo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||No(f.h,o))){if(!o.K&&No(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ri(f),ei(f);else break t;Lo(f),oe(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Wr(T(f.Za,f),6e3));if(1>=yc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Bn(f,11)}else if((o.K||f.g==o)&&ri(f),!$(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let gt=C[u];if(f.T=gt[0],gt=gt[1],f.G==2)if(gt[0]=="c"){f.K=gt[1],f.ia=gt[2];const Qt=gt[3];Qt!=null&&(f.la=Qt,f.j.info("VER="+f.la));const Yt=gt[4];Yt!=null&&(f.Aa=Yt,f.j.info("SVER="+f.Aa));const gr=gt[5];gr!=null&&typeof gr=="number"&&0<gr&&(p=1.5*gr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Ce=o.g;if(Ce){const ii=Ce.g?Ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var S=p.h;S.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ko(S,S.h),S.h=null))}if(p.D){const Uo=Ce.g?Ce.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(p.ya=Uo,bt(p.I,p.D,Uo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var q=o;if(p.qa=zc(p,p.J?p.ia:null,p.W),q.K){vc(p.h,q);var Et=q,qt=p.L;qt&&(Et.I=qt),Et.B&&(Do(Et),Ws(Et)),p.g=q}else Uc(p);0<f.i.length&&ni(f)}else gt[0]!="stop"&&gt[0]!="close"||Bn(f,7);else f.G==3&&(gt[0]=="stop"||gt[0]=="close"?gt[0]=="stop"?Bn(f,7):Mo(f):gt[0]!="noop"&&f.l&&f.l.ta(gt),f.v=0)}}Gr(4)}catch{}}var vg=class{constructor(o,u){this.g=o,this.map=u}};function mc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _c(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function yc(o){return o.h?1:o.g?o.g.size:0}function No(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ko(o,u){o.g?o.g.add(u):o.h=u}function vc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}mc.prototype.cancel=function(){if(this.i=Tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return O(o.i)}function Tg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function Eg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function Ec(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Eg(o),p=Tg(o),C=p.length,S=0;S<C;S++)u.call(void 0,p[S],f&&f[S],o)}var Ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ig(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),C=null;if(0<=p){var S=o[f].substring(0,p);C=o[f].substring(p+1)}else S=o[f];u(S,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Un(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Un){this.h=o.h,Qs(this,o.j),this.o=o.o,this.g=o.g,Ys(this,o.s),this.l=o.l;var u=o.i,f=new Zr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),wc(this,f),this.m=o.m}else o&&(u=String(o).match(Ic))?(this.h=!1,Qs(this,u[1]||"",!0),this.o=Xr(u[2]||""),this.g=Xr(u[3]||"",!0),Ys(this,u[4]),this.l=Xr(u[5]||"",!0),wc(this,u[6]||"",!0),this.m=Xr(u[7]||"")):(this.h=!1,this.i=new Zr(null,this.h))}Un.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Jr(u,Ac,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Jr(u,Ac,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Jr(f,f.charAt(0)=="/"?bg:Ag,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Jr(f,Cg)),o.join("")};function We(o){return new Un(o)}function Qs(o,u,f){o.j=f?Xr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ys(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function wc(o,u,f){u instanceof Zr?(o.i=u,Sg(o.i,o.h)):(f||(u=Jr(u,Rg)),o.i=new Zr(u,o.h))}function bt(o,u,f){o.i.set(u,f)}function Xs(o){return bt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Xr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jr(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,wg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function wg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ac=/[#\/\?@]/g,Ag=/[#\?:]/g,bg=/[#\?]/g,Rg=/[#\?@]/g,Cg=/#/g;function Zr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&Ig(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=Zr.prototype,e.add=function(o,u){hn(this),this.i=null,o=dr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function bc(o,u){hn(o),u=dr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Rc(o,u){return hn(o),u=dr(o,u),o.g.has(u)}e.forEach=function(o,u){hn(this),this.g.forEach(function(f,p){f.forEach(function(C){o.call(u,C,p,this)},this)},this)},e.na=function(){hn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const C=o[p];for(let S=0;S<C.length;S++)f.push(u[p])}return f},e.V=function(o){hn(this);let u=[];if(typeof o=="string")Rc(this,o)&&(u=u.concat(this.g.get(dr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},e.set=function(o,u){return hn(this),this.i=null,o=dr(this,o),Rc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Cc(o,u,f){bc(o,u),0<f.length&&(o.i=null,o.g.set(dr(o,u),O(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const S=encodeURIComponent(String(p)),q=this.V(p);for(p=0;p<q.length;p++){var C=S;q[p]!==""&&(C+="="+encodeURIComponent(String(q[p]))),o.push(C)}}return this.i=o.join("&")};function dr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Sg(o,u){u&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(f,p){var C=p.toLowerCase();p!=C&&(bc(this,p),Cc(this,C,f))},o)),o.j=u}function Pg(o,u){const f=new Qr;if(l.Image){const p=new Image;p.onload=R(fn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=R(fn,f,"TestLoadImage: error",!1,u,p),p.onabort=R(fn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(fn,f,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Vg(o,u){const f=new Qr,p=new AbortController,C=setTimeout(()=>{p.abort(),fn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(C),S.ok?fn(f,"TestPingServer: ok",!0,u):fn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),fn(f,"TestPingServer: error",!1,u)})}function fn(o,u,f,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(f)}catch{}}function Dg(){this.g=new Te}function xg(o,u,f){const p=f||"";try{Ec(o,function(C,S){let q=C;h(C)&&(q=ur(C)),u.push(p+S+"="+encodeURIComponent(q))})}catch(C){throw u.push(p+"type="+encodeURIComponent("_badmap")),C}}function Js(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Js,hr),Js.prototype.g=function(){return new Zs(this.l,this.j)},Js.prototype.i=function(o){return function(){return o}}({});function Zs(o,u){Y.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Zs,Y),e=Zs.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,es(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ts(this):es(this),this.readyState==3&&Sc(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,ts(this))},e.Qa=function(o){this.g&&(this.response=o,ts(this))},e.ga=function(){this.g&&ts(this)};function ts(o){o.readyState=4,o.l=null,o.j=null,o.v=null,es(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Pc(o){let u="";return rt(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Oo(o,u,f){t:{for(p in f){var p=!1;break t}p=!0}p||(f=Pc(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):bt(o,u,f))}function Pt(o){Y.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Pt,Y);var Ng=/^https?$/i,kg=["POST","PUT"];e=Pt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():So.g(),this.v=this.o?sc(this.o):sc(So),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){Vc(this,S);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)f.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())f.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(kg,u,void 0))||p||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,q]of f)this.g.setRequestHeader(S,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nc(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Vc(this,S)}};function Vc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Dc(o),ti(o)}function Dc(o){o.A||(o.A=!0,et(o,"complete"),et(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,et(this,"complete"),et(this,"abort"),ti(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),Pt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?xc(this):this.bb())},e.bb=function(){xc(this)};function xc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Qe(o)!=4||o.Z()!=2)){if(o.u&&Qe(o)==4)pt(o.Ea,0,o);else if(et(o,"readystatechange"),Qe(o)==4){o.h=!1;try{const q=o.Z();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var p;if(p=q===0){var C=String(o.D).match(Ic)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!Ng.test(C?C.toLowerCase():"")}f=p}if(f)et(o,"complete"),et(o,"success");else{o.m=6;try{var S=2<Qe(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Dc(o)}}finally{ti(o)}}}}function ti(o,u){if(o.g){Nc(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||et(o,"ready");try{f.onreadystatechange=p}catch{}}}function Nc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Qe(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Qe(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ie(u)}};function kc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Og(o){const u={};o=(o.g&&2<=Qe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if($(o[p]))continue;var f=A(o[p]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=u[C]||[];u[C]=S,S.push(f)}w(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Oc(o){this.Aa=0,this.i=[],this.j=new Qr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ns("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ns("baseRetryDelayMs",5e3,o),this.cb=ns("retryDelaySeedMs",1e4,o),this.Wa=ns("forwardChannelMaxRetries",2,o),this.wa=ns("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new mc(o&&o.concurrentRequestLimit),this.Da=new Dg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Oc.prototype,e.la=8,e.G=1,e.connect=function(o,u,f,p){oe(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=zc(this,null,this.W),ni(this)};function Mo(o){if(Mc(o),o.G==3){var u=o.U++,f=We(o.I);if(bt(f,"SID",o.K),bt(f,"RID",u),bt(f,"TYPE","terminate"),rs(o,f),u=new un(o,o.j,u),u.L=2,u.v=Xs(We(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Hc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ws(u)}qc(o)}function ei(o){o.g&&(Fo(o),o.g.cancel(),o.g=null)}function Mc(o){ei(o),o.u&&(l.clearTimeout(o.u),o.u=null),ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ni(o){if(!_c(o.h)&&!o.s){o.s=!0;var u=o.Ga;Tt||Nn(),dt||(Tt(),dt=!0),Re.add(u,o),o.B=0}}function Mg(o,u){return yc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wr(T(o.Ga,o,u),jc(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new un(this,this.j,o);let S=this.o;if(this.S&&(S?(S=m(S),I(S,this.S)):S=this.S),this.m!==null||this.O||(C.H=S,S=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=Fc(this,C,u),f=We(this.I),bt(f,"RID",o),bt(f,"CVER",22),this.D&&bt(f,"X-HTTP-Session-Id",this.D),rs(this,f),S&&(this.O?u="headers="+encodeURIComponent(String(Pc(S)))+"&"+u:this.m&&Oo(f,this.m,S)),ko(this.h,C),this.Ua&&bt(f,"TYPE","init"),this.P?(bt(f,"$req",u),bt(f,"SID","null"),C.T=!0,Vo(C,f,null)):Vo(C,f,u),this.G=2}}else this.G==3&&(o?Lc(this,o):this.i.length==0||_c(this.h)||Lc(this))};function Lc(o,u){var f;u?f=u.l:f=o.U++;const p=We(o.I);bt(p,"SID",o.K),bt(p,"RID",f),bt(p,"AID",o.T),rs(o,p),o.m&&o.o&&Oo(p,o.m,o.o),f=new un(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Fc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ko(o.h,f),Vo(f,p,u)}function rs(o,u){o.H&&rt(o.H,function(f,p){bt(u,p,f)}),o.l&&Ec({},function(f,p){bt(u,p,f)})}function Fc(o,u,f){f=Math.min(o.i.length,f);var p=o.l?T(o.l.Na,o.l,o):null;t:{var C=o.i;let S=-1;for(;;){const q=["count="+f];S==-1?0<f?(S=C[0].g,q.push("ofs="+S)):S=0:q.push("ofs="+S);let Et=!0;for(let qt=0;qt<f;qt++){let gt=C[qt].g;const Qt=C[qt].map;if(gt-=S,0>gt)S=Math.max(0,C[qt].g-100),Et=!1;else try{xg(Qt,q,"req"+gt+"_")}catch{p&&p(Qt)}}if(Et){p=q.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,p}function Uc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Tt||Nn(),dt||(Tt(),dt=!0),Re.add(u,o),o.v=0}}function Lo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wr(T(o.Fa,o),jc(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Bc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wr(T(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),ei(this),Bc(this))};function Fo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Bc(o){o.g=new un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=We(o.qa);bt(u,"RID","rpc"),bt(u,"SID",o.K),bt(u,"AID",o.T),bt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&bt(u,"TO",o.ja),bt(u,"TYPE","xmlhttp"),rs(o,u),o.m&&o.o&&Oo(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Xs(We(u)),f.m=null,f.P=!0,dc(f,o)}e.Za=function(){this.C!=null&&(this.C=null,ei(this),Lo(this),oe(19))};function ri(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function $c(o,u){var f=null;if(o.g==u){ri(o),Fo(o),o.g=null;var p=2}else if(No(o.h,u))f=u.D,vc(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;p=Hs(),et(p,new cc(p,f)),ni(o)}else Uc(o);else if(C=u.s,C==3||C==0&&0<u.X||!(p==1&&Mg(o,u)||p==2&&Lo(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:Bn(o,5);break;case 4:Bn(o,10);break;case 3:Bn(o,6);break;default:Bn(o,2)}}}function jc(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Bn(o,u){if(o.j.info("Error code "+u),u==2){var f=T(o.fb,o),p=o.Xa;const C=!p;p=new Un(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qs(p,"https"),Xs(p),C?Pg(p.toString(),f):Vg(p.toString(),f)}else oe(2);o.G=0,o.l&&o.l.sa(u),qc(o),Mc(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function qc(o){if(o.G=0,o.ka=[],o.l){const u=Tc(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function zc(o,u,f){var p=f instanceof Un?We(f):new Un(f);if(p.g!="")u&&(p.g=u+"."+p.g),Ys(p,p.s);else{var C=l.location;p=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var S=new Un(null);p&&Qs(S,p),u&&(S.g=u),C&&Ys(S,C),f&&(S.l=f),p=S}return f=o.D,u=o.ya,f&&u&&bt(p,f,u),bt(p,"VER",o.la),rs(o,p),p}function Hc(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Pt(new Js({eb:f})):new Pt(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kc(){}e=Kc.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function si(){}si.prototype.g=function(o,u){return new pe(o,u)};function pe(o,u){Y.call(this),this.g=new Oc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new pr(this)}V(pe,Y),pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pe.prototype.close=function(){Mo(this.g)},pe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=ur(o),o=f);u.i.push(new vg(u.Ya++,o)),u.G==3&&ni(u)},pe.prototype.N=function(){this.g.l=null,delete this.j,Mo(this.g),delete this.g,pe.aa.N.call(this)};function Gc(o){Ro.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Gc,Ro);function Wc(){Co.call(this),this.status=1}V(Wc,Co);function pr(o){this.g=o}V(pr,Kc),pr.prototype.ua=function(){et(this.g,"a")},pr.prototype.ta=function(o){et(this.g,new Gc(o))},pr.prototype.sa=function(o){et(this.g,new Wc)},pr.prototype.ra=function(){et(this.g,"b")},si.prototype.createWebChannel=si.prototype.g,pe.prototype.send=pe.prototype.o,pe.prototype.open=pe.prototype.m,pe.prototype.close=pe.prototype.close,Rd=function(){return new si},bd=function(){return Hs()},Ad=Ln,xa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,Ei=Ks,uc.COMPLETE="complete",wd=uc,ic.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",Y.prototype.listen=Y.prototype.K,as=ic,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,Id=Pt}).apply(typeof ui<"u"?ui:typeof self<"u"?self:typeof window<"u"?window:{});const Hu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new ml("@firebase/firestore");function Er(){return tr.logLevel}function W(e,...t){if(tr.logLevel<=ft.DEBUG){const n=t.map(vl);tr.debug(`Firestore (${Br}): ${e}`,...n)}}function sn(e,...t){if(tr.logLevel<=ft.ERROR){const n=t.map(vl);tr.error(`Firestore (${Br}): ${e}`,...n)}}function Dr(e,...t){if(tr.logLevel<=ft.WARN){const n=t.map(vl);tr.warn(`Firestore (${Br}): ${e}`,...n)}}function vl(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e="Unexpected state"){const t=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+e;throw sn(t),new Error(t)}function vt(e,t){e||st()}function ot(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends ln{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Jt.UNAUTHENTICATED))}shutdown(){}}class Kv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gv{constructor(t){this.t=t,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){vt(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string"),new Cd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string"),new Jt(t)}}class Wv{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Qv{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Wv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){vt(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(vt(typeof n.token=="string"),this.R=n.token,new Yv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Jv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function ut(e,t){return e<t?-1:e>t?1:0}function xr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{static now(){return Lt.fromMillis(Date.now())}static fromDate(t){return Lt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Lt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ut(this.nanoseconds,t.nanoseconds):ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{static fromTimestamp(t){return new it(t)}static min(){return new it(new Lt(0,0))}static max(){return new it(new Lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,n,r){n===void 0?n=0:n>t.length&&st(),r===void 0?r=t.length-n:r>t.length-n&&st(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ds.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ds?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Rt extends Ds{construct(t,n,r){return new Rt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Q(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Rt(n)}static emptyPath(){return new Rt([])}}const Zv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Ds{construct(t,n,r){return new Ht(t,n,r)}static isValidIdentifier(t){return Zv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ht(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Q(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Q(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.path=t}static fromPath(t){return new J(Rt.fromString(t))}static fromName(t){return new J(Rt.fromString(t).popFirst(5))}static empty(){return new J(Rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Rt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new J(new Rt(t.slice()))}}function tT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=it.fromTimestamp(r===1e9?new Lt(n+1,0):new Lt(n,r));return new bn(s,J.empty(),t)}function eT(e){return new bn(e.readTime,e.key,-1)}class bn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new bn(it.min(),J.empty(),-1)}static max(){return new bn(it.max(),J.empty(),-1)}}function nT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=J.comparator(e.documentKey,t.documentKey),n!==0?n:ut(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==rT)throw e;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&st(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):D.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):D.reject(n)}static resolve(t){return new D((n,r)=>{n(t)})}static reject(t){return new D((n,r)=>{r(t)})}static waitFor(t){return new D((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=D.resolve(!1);for(const r of t)n=n.next(s=>s?D.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new D((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new D((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function iT(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}co.oe=-1;function uo(e){return e==null}function Li(e){return e===0&&1/e==-1/0}function oT(e){return typeof e=="number"&&Number.isInteger(e)&&!Li(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ku(t)),t=lT(e.get(n),t);return Ku(t)}function lT(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Ku(e){return e+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function sr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Pd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n){this.comparator=t,this.root=n||zt.EMPTY}insert(t,n){return new St(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,zt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hi(this.root,t,this.comparator,!1)}getReverseIterator(){return new hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hi(this.root,t,this.comparator,!0)}}class hi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class zt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??zt.RED,this.left=s??zt.EMPTY,this.right=i??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new zt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return zt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw st();const t=this.left.check();if(t!==this.right.check())throw st();return t+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw st()}get value(){throw st()}get color(){throw st()}get left(){throw st()}get right(){throw st()}copy(t,n,r,s,i){return this}insert(t,n,r){return new zt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wu(this.data.getIterator())}getIteratorFrom(t){return new Wu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ft(this.comparator);return n.data=t,n}}class Wu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.fields=t,t.sort(Ht.comparator)}static empty(){return new Se([])}unionWith(t){let n=new Ft(Ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Se(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return xr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vd("Invalid base64 string: "+i):i}}(t);return new Kt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Kt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const cT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(e){if(vt(!!e),typeof e=="string"){let t=0;const n=cT.exec(e);if(vt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vt(e.seconds),nanos:Vt(e.nanos)}}function Vt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Cn(e){return typeof e=="string"?Kt.fromBase64String(e):Kt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ho(e){const t=e.mapValue.fields.__previous_value__;return Tl(t)?ho(t):t}function xs(e){const t=Rn(e.mapValue.fields.__local_write_time__.timestampValue);return new Lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(t,n,r,s,i,a,l,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ns{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ns&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tl(e)?4:fT(e)?9007199254740991:hT(e)?10:11:st()}function qe(e,t){if(e===t)return!0;const n=Sn(e);if(n!==Sn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Rn(s.timestampValue),l=Rn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Cn(s.bytesValue).isEqual(Cn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Vt(s.geoPointValue.latitude)===Vt(i.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Vt(s.integerValue)===Vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Vt(s.doubleValue),l=Vt(i.doubleValue);return a===l?Li(a)===Li(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return xr(e.arrayValue.values||[],t.arrayValue.values||[],qe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gu(a)!==Gu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!qe(a[c],l[c])))return!1;return!0}(e,t);default:return st()}}function ks(e,t){return(e.values||[]).find(n=>qe(n,t))!==void 0}function Nr(e,t){if(e===t)return 0;const n=Sn(e),r=Sn(t);if(n!==r)return ut(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ut(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Vt(i.integerValue||i.doubleValue),c=Vt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Qu(e.timestampValue,t.timestampValue);case 4:return Qu(xs(e),xs(t));case 5:return ut(e.stringValue,t.stringValue);case 6:return function(i,a){const l=Cn(i),c=Cn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ut(l[h],c[h]);if(d!==0)return d}return ut(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=ut(Vt(i.latitude),Vt(a.latitude));return l!==0?l:ut(Vt(i.longitude),Vt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Yu(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,h,d;const g=i.fields||{},T=a.fields||{},R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,V=(c=T.value)===null||c===void 0?void 0:c.arrayValue,O=ut(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Yu(R,V)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===fi.mapValue&&a===fi.mapValue)return 0;if(i===fi.mapValue)return 1;if(a===fi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const T=ut(c[g],d[g]);if(T!==0)return T;const R=Nr(l[c[g]],h[d[g]]);if(R!==0)return R}return ut(c.length,d.length)}(e.mapValue,t.mapValue);default:throw st()}}function Qu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ut(e,t);const n=Rn(e),r=Rn(t),s=ut(n.seconds,r.seconds);return s!==0?s:ut(n.nanos,r.nanos)}function Yu(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Nr(n[s],r[s]);if(i)return i}return ut(n.length,r.length)}function kr(e){return Na(e)}function Na(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Rn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Cn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return J.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Na(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Na(n.fields[a])}`;return s+"}"}(e.mapValue):st()}function Ii(e){switch(Sn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ho(e);return t?16+Ii(t):16;case 5:return 2*e.stringValue.length;case 6:return Cn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ii(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return sr(r.fields,(i,a)=>{s+=i.length+Ii(a)}),s}(e.mapValue);default:throw st()}}function Xu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ka(e){return!!e&&"integerValue"in e}function El(e){return!!e&&"arrayValue"in e}function Ju(e){return!!e&&"nullValue"in e}function Zu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function wi(e){return!!e&&"mapValue"in e}function hT(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ys(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return sr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ys(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ys(e.arrayValue.values[n]);return t}return Object.assign({},e)}function fT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.value=t}static empty(){return new we({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!wi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ys(n)}setAll(t){let n=Ht.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=ys(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());wi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return qe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];wi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){sr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new we(ys(this.value))}}function Dd(e){const t=[];return sr(e.fields,(n,r)=>{const s=new Ht([n]);if(wi(r)){const i=Dd(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Se(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ee(t,0,it.min(),it.min(),it.min(),we.empty(),0)}static newFoundDocument(t,n,r,s){return new ee(t,1,n,it.min(),r,s,0)}static newNoDocument(t,n){return new ee(t,2,n,it.min(),it.min(),we.empty(),0)}static newUnknownDocument(t,n){return new ee(t,3,n,it.min(),it.min(),we.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(it.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=it.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ee&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n){this.position=t,this.inclusive=n}}function th(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),n.key):r=Nr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function eh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!qe(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,n="asc"){this.field=t,this.dir=n}}function dT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{}class kt extends xd{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new gT(t,n,r):n==="array-contains"?new yT(t,r):n==="in"?new vT(t,r):n==="not-in"?new TT(t,r):n==="array-contains-any"?new ET(t,r):new kt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new mT(t,r):new _T(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Nr(n,this.value)):n!==null&&Sn(this.value)===Sn(n)&&this.matchesComparison(Nr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return st()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends xd{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Ne(t,n)}matches(t){return Nd(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Nd(e){return e.op==="and"}function kd(e){return pT(e)&&Nd(e)}function pT(e){for(const t of e.filters)if(t instanceof Ne)return!1;return!0}function Oa(e){if(e instanceof kt)return e.field.canonicalString()+e.op.toString()+kr(e.value);if(kd(e))return e.filters.map(t=>Oa(t)).join(",");{const t=e.filters.map(n=>Oa(n)).join(",");return`${e.op}(${t})`}}function Od(e,t){return e instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.field.isEqual(s.field)&&qe(r.value,s.value)}(e,t):e instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Od(a,s.filters[l]),!0):!1}(e,t):void st()}function Md(e){return e instanceof kt?function(n){return`${n.field.canonicalString()} ${n.op} ${kr(n.value)}`}(e):e instanceof Ne?function(n){return n.op.toString()+" {"+n.getFilters().map(Md).join(" ,")+"}"}(e):"Filter"}class gT extends kt{constructor(t,n,r){super(t,n,r),this.key=J.fromName(r.referenceValue)}matches(t){const n=J.comparator(t.key,this.key);return this.matchesComparison(n)}}class mT extends kt{constructor(t,n){super(t,"in",n),this.keys=Ld("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class _T extends kt{constructor(t,n){super(t,"not-in",n),this.keys=Ld("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ld(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class yT extends kt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return El(n)&&ks(n.arrayValue,this.value)}}class vT extends kt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ks(this.value.arrayValue,n)}}class TT extends kt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ks(this.value.arrayValue,n)}}class ET extends kt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!El(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ks(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function nh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new IT(e,t,n,r,s,i,a)}function Il(e){const t=ot(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Oa(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>kr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>kr(r)).join(",")),t.ue=n}return t.ue}function wl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!dT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Od(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eh(e.startAt,t.startAt)&&eh(e.endAt,t.endAt)}function Ma(e){return J.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wT(e,t,n,r,s,i,a,l){return new qr(e,t,n,r,s,i,a,l)}function Al(e){return new qr(e)}function rh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Fd(e){return e.collectionGroup!==null}function vs(e){const t=ot(e);if(t.ce===null){t.ce=[];const n=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ft(Ht.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.ce.push(new Os(i,r))}),n.has(Ht.keyField().canonicalString())||t.ce.push(new Os(Ht.keyField(),r))}return t.ce}function Ue(e){const t=ot(e);return t.le||(t.le=AT(t,vs(e))),t.le}function AT(e,t){if(e.limitType==="F")return nh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Os(s.field,i)});const n=e.endAt?new Fi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fi(e.startAt.position,e.startAt.inclusive):null;return nh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function La(e,t){const n=e.filters.concat([t]);return new qr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Fa(e,t,n){return new qr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function fo(e,t){return wl(Ue(e),Ue(t))&&e.limitType===t.limitType}function Ud(e){return`${Il(Ue(e))}|lt:${e.limitType}`}function Ir(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Md(s)).join(", ")}]`),uo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>kr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>kr(s)).join(",")),`Target(${r})`}(Ue(e))}; limitType=${e.limitType})`}function po(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of vs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=th(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,vs(r),s)||r.endAt&&!function(a,l,c){const h=th(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,vs(r),s))}(e,t)}function bT(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Bd(e){return(t,n)=>{let r=!1;for(const s of vs(e)){const i=RT(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RT(e,t,n){const r=e.field.isKeyField()?J.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Nr(c,h):st()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return st()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){sr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Pd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new St(J.comparator);function on(){return CT}const $d=new St(J.comparator);function ls(...e){let t=$d;for(const n of e)t=t.insert(n.key,n);return t}function jd(e){let t=$d;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Wn(){return Ts()}function qd(){return Ts()}function Ts(){return new ir(e=>e.toString(),(e,t)=>e.isEqual(t))}const ST=new St(J.comparator),PT=new Ft(J.comparator);function ct(...e){let t=PT;for(const n of e)t=t.add(n);return t}const VT=new Ft(ut);function DT(){return VT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(t)?"-0":t}}function zd(e){return{integerValue:""+e}}function xT(e,t){return oT(t)?zd(t):bl(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this._=void 0}}function NT(e,t,n){return e instanceof Ui?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tl(i)&&(i=ho(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,t):e instanceof Ms?Kd(e,t):e instanceof Ls?Gd(e,t):function(s,i){const a=Hd(s,i),l=sh(a)+sh(s.Pe);return ka(a)&&ka(s.Pe)?zd(l):bl(s.serializer,l)}(e,t)}function kT(e,t,n){return e instanceof Ms?Kd(e,t):e instanceof Ls?Gd(e,t):n}function Hd(e,t){return e instanceof Bi?function(r){return ka(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ui extends go{}class Ms extends go{constructor(t){super(),this.elements=t}}function Kd(e,t){const n=Wd(t);for(const r of e.elements)n.some(s=>qe(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ls extends go{constructor(t){super(),this.elements=t}}function Gd(e,t){let n=Wd(t);for(const r of e.elements)n=n.filter(s=>!qe(s,r));return{arrayValue:{values:n}}}class Bi extends go{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function sh(e){return Vt(e.integerValue||e.doubleValue)}function Wd(e){return El(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function OT(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ms&&s instanceof Ms||r instanceof Ls&&s instanceof Ls?xr(r.elements,s.elements,qe):r instanceof Bi&&s instanceof Bi?qe(r.Pe,s.Pe):r instanceof Ui&&s instanceof Ui}(e.transform,t.transform)}class MT{constructor(t,n){this.version=t,this.transformResults=n}}class De{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new De}static exists(t){return new De(void 0,t)}static updateTime(t){return new De(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ai(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class mo{}function Qd(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Rl(e.key,De.none()):new Bs(e.key,e.data,De.none());{const n=e.data,r=we.empty();let s=new Ft(Ht.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new or(e.key,r,new Se(s.toArray()),De.none())}}function LT(e,t,n){e instanceof Bs?function(s,i,a){const l=s.value.clone(),c=oh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof or?function(s,i,a){if(!Ai(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=oh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Yd(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Es(e,t,n,r){return e instanceof Bs?function(i,a,l,c){if(!Ai(i.precondition,a))return l;const h=i.value.clone(),d=ah(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof or?function(i,a,l,c){if(!Ai(i.precondition,a))return l;const h=ah(i.fieldTransforms,c,a),d=a.data;return d.setAll(Yd(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(e,t,n,r):function(i,a,l){return Ai(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function FT(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Hd(r.transform,s||null);i!=null&&(n===null&&(n=we.empty()),n.set(r.field,i))}return n||null}function ih(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xr(r,s,(i,a)=>OT(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Bs extends mo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends mo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yd(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function oh(e,t,n){const r=new Map;vt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,kT(a,l,n[s]))}return r}function ah(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,NT(i,a,t))}return r}class Rl extends mo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UT extends mo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&LT(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Es(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Es(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=qd();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Qd(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(it.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ct())}isEqual(t){return this.batchId===t.batchId&&xr(this.mutations,t.mutations,(n,r)=>ih(n,r))&&xr(this.baseMutations,t.baseMutations,(n,r)=>ih(n,r))}}class Cl{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){vt(t.mutations.length===r.length);let s=function(){return ST}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Cl(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,ht;function qT(e){switch(e){default:return st();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Xd(e){if(e===void 0)return sn("GRPC error has no .code"),x.UNKNOWN;switch(e){case Nt.OK:return x.OK;case Nt.CANCELLED:return x.CANCELLED;case Nt.UNKNOWN:return x.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return x.INTERNAL;case Nt.UNAVAILABLE:return x.UNAVAILABLE;case Nt.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Nt.NOT_FOUND:return x.NOT_FOUND;case Nt.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Nt.ABORTED:return x.ABORTED;case Nt.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Nt.DATA_LOSS:return x.DATA_LOSS;default:return st()}}(ht=Nt||(Nt={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new Xn([4294967295,4294967295],0);function lh(e){const t=zT().encode(e),n=new Ed;return n.update(t),new Uint8Array(n.digest())}function ch(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Xn([n,r],0),new Xn([s,i],0)]}class Sl{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new cs(`Invalid padding: ${n}`);if(r<0)throw new cs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new cs(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new cs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ie=Xn.fromNumber(this.Te)}Ee(t,n,r){let s=t.add(n.multiply(Xn.fromNumber(r)));return s.compare(HT)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=lh(t),[r,s]=ch(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Sl(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Te===0)return;const n=lh(t),[r,s]=ch(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,$s.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new _o(it.min(),s,new St(ut),on(),ct())}}class $s{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new $s(r,n,ct(),ct(),ct())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,n,r,s){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Jd{constructor(t,n){this.targetId=t,this.me=n}}class Zd{constructor(t,n,r=Kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class uh{constructor(){this.fe=0,this.ge=hh(),this.pe=Kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=ct(),n=ct(),r=ct();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:st()}}),new $s(this.pe,this.ye,t,n,r)}Ce(){this.we=!1,this.ge=hh()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,vt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class KT{constructor(t){this.Le=t,this.Be=new Map,this.ke=on(),this.qe=di(),this.Qe=di(),this.Ke=new St(ut)}$e(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(n,t.Ve):this.We(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.We(n,t.key,t.Ve)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(t.resumeToken));break;default:st()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.me.count,s=this.Ye(n);if(s){const i=s.target;if(Ma(i))if(r===0){const a=new J(i.path);this.We(n,a,ee.newNoDocument(a,it.min()))}else vt(r===1);else{const a=this.Ze(n);if(a!==r){const l=this.Xe(t),c=l?this.et(l,t,a):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Cn(r).toUint8Array()}catch(c){if(c instanceof Vd)return Dr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Sl(a,s,i)}catch(c){return Dr(c instanceof cs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(t,n,r){return n.me.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Ye(a);if(l){if(i.current&&Ma(l.target)){const c=new J(l.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,ee.newNoDocument(c,t))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=ct();this.Qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new _o(t,n,this.Ke,this.ke,r);return this.ke=on(),this.qe=di(),this.Qe=di(),this.Ke=new St(ut),s}Ue(t,n){if(!this.je(t))return;const r=this.ot(t,n.key)?2:0;this.ze(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.ot(t,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(t)),this.Qe=this.Qe.insert(n,this._t(n).add(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let n=this.Be.get(t);return n||(n=new uh,this.Be.set(t,n)),n}_t(t){let n=this.Qe.get(t);return n||(n=new Ft(ut),this.Qe=this.Qe.insert(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Ft(ut),this.qe=this.qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||W("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new uh),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}ot(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function di(){return new St(J.comparator)}function hh(){return new St(J.comparator)}const GT={asc:"ASCENDING",desc:"DESCENDING"},WT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QT={and:"AND",or:"OR"};class YT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ua(e,t){return e.useProto3Json||uo(t)?t:{value:t}}function $i(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tp(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function XT(e,t){return $i(e,t.toTimestamp())}function Be(e){return vt(!!e),it.fromTimestamp(function(n){const r=Rn(n);return new Lt(r.seconds,r.nanos)}(e))}function Pl(e,t){return Ba(e,t).canonicalString()}function Ba(e,t){const n=function(s){return new Rt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function ep(e){const t=Rt.fromString(e);return vt(op(t)),t}function $a(e,t){return Pl(e.databaseId,t.path)}function ia(e,t){const n=ep(t);if(n.get(1)!==e.databaseId.projectId)throw new Q(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Q(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new J(rp(n))}function np(e,t){return Pl(e.databaseId,t)}function JT(e){const t=ep(e);return t.length===4?Rt.emptyPath():rp(t)}function ja(e){return new Rt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rp(e){return vt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function fh(e,t,n){return{name:$a(e,t),fields:n.value.mapValue.fields}}function ZT(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:st()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(vt(d===void 0||typeof d=="string"),Kt.fromBase64String(d||"")):(vt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Kt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?x.UNKNOWN:Xd(h.code);return new Q(d,h.message||"")}(a);n=new Zd(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ia(e,r.document.name),i=Be(r.document.updateTime),a=r.document.createTime?Be(r.document.createTime):it.min(),l=new we({mapValue:{fields:r.document.fields}}),c=ee.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new bi(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ia(e,r.document),i=r.readTime?Be(r.readTime):it.min(),a=ee.newNoDocument(s,i),l=r.removedTargetIds||[];n=new bi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ia(e,r.document),i=r.removedTargetIds||[];n=new bi([],i,s,null)}else{if(!("filter"in t))return st();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new jT(s,i),l=r.targetId;n=new Jd(l,a)}}return n}function tE(e,t){let n;if(t instanceof Bs)n={update:fh(e,t.key,t.value)};else if(t instanceof Rl)n={delete:$a(e,t.key)};else if(t instanceof or)n={update:fh(e,t.key,t.data),updateMask:cE(t.fieldMask)};else{if(!(t instanceof UT))return st();n={verify:$a(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ms)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ls)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw st()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:XT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:st()}(e,t.precondition)),n}function eE(e,t){return e&&e.length>0?(vt(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?Be(s.updateTime):Be(i);return a.isEqual(it.min())&&(a=Be(i)),new MT(a,s.transformResults||[])}(n,t))):[]}function nE(e,t){return{documents:[np(e,t.path)]}}function rE(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=np(e,s);const i=function(h){if(h.length!==0)return ip(Ne.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(T){return{field:wr(T.field),direction:oE(T.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Ua(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ct:n,parent:s}}function sE(e){let t=JT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){vt(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(g){const T=sp(g);return T instanceof Ne&&kd(T)?T.getFilters():[T]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(T=>function(V){return new Os(Ar(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(n.orderBy));let l=null;n.limit&&(l=function(g){let T;return T=typeof g=="object"?g.value:g,uo(T)?null:T}(n.limit));let c=null;n.startAt&&(c=function(g){const T=!!g.before,R=g.values||[];return new Fi(R,T)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const T=!g.before,R=g.values||[];return new Fi(R,T)}(n.endAt)),wT(t,s,a,i,l,"F",c,h)}function iE(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return st()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function sp(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ar(n.unaryFilter.field);return kt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ar(n.unaryFilter.field);return kt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(n.unaryFilter.field);return kt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ar(n.unaryFilter.field);return kt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return st()}}(e):e.fieldFilter!==void 0?function(n){return kt.create(Ar(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return st()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ne.create(n.compositeFilter.filters.map(r=>sp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return st()}}(n.compositeFilter.op))}(e):st()}function oE(e){return GT[e]}function aE(e){return WT[e]}function lE(e){return QT[e]}function wr(e){return{fieldPath:e.canonicalString()}}function Ar(e){return Ht.fromServerFormat(e.fieldPath)}function ip(e){return e instanceof kt?function(n){if(n.op==="=="){if(Zu(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NAN"}};if(Ju(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zu(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NOT_NAN"}};if(Ju(n.value))return{unaryFilter:{field:wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(n.field),op:aE(n.op),value:n.value}}}(e):e instanceof Ne?function(n){const r=n.getFilters().map(s=>ip(s));return r.length===1?r[0]:{compositeFilter:{op:lE(n.op),filters:r}}}(e):st()}function cE(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function op(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n,r,s,i=it.min(),a=it.min(),l=Kt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new _n(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t){this.ht=t}}function hE(e){const t=sE({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Fa(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.ln=new dE}addToCollectionParentIndex(t,n){return this.ln.add(n),D.resolve()}getCollectionParents(t,n){return D.resolve(this.ln.getEntries(n))}addFieldIndex(t,n){return D.resolve()}deleteFieldIndex(t,n){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,n){return D.resolve()}getDocumentsMatchingTarget(t,n){return D.resolve(null)}getIndexType(t,n){return D.resolve(0)}getFieldIndexes(t,n){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,n){return D.resolve(bn.min())}getMinOffsetFromCollectionGroup(t,n){return D.resolve(bn.min())}updateCollectionGroup(t,n,r){return D.resolve()}updateIndexEntries(t,n){return D.resolve()}}class dE{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Ft(Rt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ft(Rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ue{static withCacheSize(t){return new ue(t,ue.DEFAULT_COLLECTION_PERCENTILE,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue.DEFAULT_COLLECTION_PERCENTILE=10,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ue.DEFAULT=new ue(41943040,ue.DEFAULT_COLLECTION_PERCENTILE,ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ue.DISABLED=new ue(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Or(0)}static Qn(){return new Or(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph([e,t],[n,r]){const s=ut(e,n);return s===0?ut(t,r):s}class pE{constructor(t){this.Gn=t,this.buffer=new Ft(ph),this.zn=0}jn(){return++this.zn}Hn(t){const n=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ph(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class gE{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){W("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){jr(n)?W("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await $r(n)}await this.Yn(3e5)})}}class mE{constructor(t,n){this.Zn=t,this.params=n}calculateTargetCount(t,n){return this.Zn.Xn(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return D.resolve(co.oe);const r=new pE(n);return this.Zn.forEachTarget(t,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.Zn.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Zn.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(dh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dh):this.tr(t,n))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(t,r,n))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(h=Date.now(),Er()<=ft.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function _E(e,t){return new mE(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(){this.changes=new ir(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ee.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Es(r.mutation,s,Se.empty(),Lt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ct()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ct()){const s=Wn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=ls();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Wn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ct()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=on();const a=Ts(),l=function(){return Ts()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof or)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Es(d.mutation,h,d.mutation.getFieldMask(),Lt.now())):a.set(h.key,Se.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var g;return l.set(h,new vE(d,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Ts();let s=new St((a,l)=>a-l),i=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Se.empty();d=l.applyToLocalView(h,d),r.set(c,d);const g=(s.get(l.batchId)||ct()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,g=qd();d.forEach(T=>{if(!i.has(T)){const R=Qd(n.get(T),r.get(T));R!==null&&g.set(T,R),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Fd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):D.resolve(Wn());let l=-1,c=i;return a.next(h=>D.forEach(h,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(t,d).next(T=>{c=c.insert(d,T)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,ct())).next(d=>({batchId:l,changes:jd(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new J(n)).next(r=>{let s=ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=ls();return this.indexManager.getCollectionParents(t,i).next(l=>D.forEach(l,c=>{const h=function(g,T){return new qr(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((g,T)=>{a=a.insert(g,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ee.newInvalidDocument(d)))});let l=ls();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Es(d.mutation,h,Se.empty(),Lt.now()),po(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,n){return D.resolve(this.Tr.get(n))}saveBundleMetadata(t,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Be(s.createTime)}}(n)),D.resolve()}getNamedQuery(t,n){return D.resolve(this.Ir.get(n))}saveNamedQuery(t,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:hE(s.bundledQuery),readTime:Be(s.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.overlays=new St(J.comparator),this.Er=new Map}getOverlay(t,n){return D.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Wn();return D.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Tt(t,n,i)}),D.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),D.resolve()}getOverlaysForCollection(t,n,r){const s=Wn(),i=n.length+1,a=new J(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new St((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Wn(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Wn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return D.resolve(l)}Tt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new $T(n,r));let i=this.Er.get(n);i===void 0&&(i=ct(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.dr=new Ft($t.Ar),this.Rr=new Ft($t.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,n){const r=new $t(t,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gr(new $t(t,n))}pr(t,n){t.forEach(r=>this.removeReference(r,n))}yr(t){const n=new J(new Rt([])),r=new $t(n,t),s=new $t(n,t+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const n=new J(new Rt([])),r=new $t(n,t),s=new $t(n,t+1);let i=ct();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new $t(t,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class $t{constructor(t,n){this.key=t,this.br=n}static Ar(t,n){return J.comparator(t.key,n.key)||ut(t.br,n.br)}static Vr(t,n){return ut(t.br,n.br)||J.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Ft($t.Ar)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new BT(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new $t(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,n){return D.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new $t(n,0),s=new $t(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Ft(ut);return n.forEach(s=>{const i=new $t(s,0),a=new $t(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],l=>{r=r.add(l.br)})}),D.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new $t(new J(i),0);let l=new Ft(ut);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.br)),!0)},a),D.resolve(this.Mr(l))}Mr(t){const n=[];return t.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){vt(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return D.forEach(n.mutations,s=>{const i=new $t(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=r})}Ln(t){}containsKey(t,n){const r=new $t(n,0),s=this.vr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Or(t,n){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const n=this.Fr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t){this.Nr=t,this.docs=function(){return new St(J.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():ee.newInvalidDocument(n))}getEntries(t,n){let r=on();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ee.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=on();const a=n.path,l=new J(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||nT(eT(d),r)<=0||(s.has(d.key)||po(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(t,n,r,s){st()}Lr(t,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new RE(this)}getSize(t){return D.resolve(this.size)}}class RE extends yE{constructor(t){super(),this.hr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(t,s)):this.hr.removeEntry(r)}),D.waitFor(n)}getFromCache(t,n){return this.hr.getEntry(t,n)}getAllFromCache(t,n){return this.hr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(t){this.persistence=t,this.Br=new ir(n=>Il(n),wl),this.lastRemoteSnapshotVersion=it.min(),this.highestTargetId=0,this.kr=0,this.qr=new Vl,this.targetCount=0,this.Qr=Or.qn()}forEachTarget(t,n){return this.Br.forEach((r,s)=>n(s)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),D.resolve()}Un(t){this.Br.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Qr=new Or(n),this.highestTargetId=n),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,n){return this.Un(n),this.targetCount+=1,D.resolve()}updateTargetData(t,n){return this.Un(n),D.resolve()}removeTargetData(t,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,n){const r=this.Br.get(n)||null;return D.resolve(r)}addMatchingKeys(t,n,r){return this.qr.mr(n,r),D.resolve()}removeMatchingKeys(t,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.qr.yr(n),D.resolve()}getMatchingKeysForTargetId(t,n){const r=this.qr.Sr(n);return D.resolve(r)}containsKey(t,n){return D.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t,n){this.Kr={},this.overlays={},this.$r=new co(0),this.Ur=!1,this.Ur=!0,this.Wr=new wE,this.referenceDelegate=t(this),this.Gr=new CE(this),this.indexManager=new fE,this.remoteDocumentCache=function(s){return new bE(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new uE(n),this.jr=new EE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new IE,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Kr[t.toKey()];return r||(r=new AE(n,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,n,r){W("MemoryPersistence","Starting transaction:",t);const s=new SE(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(t,n){return D.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,n)))}}class SE extends sT{constructor(t){super(),this.currentSequenceNumber=t}}class Dl{constructor(t){this.persistence=t,this.Zr=new Vl,this.Xr=null}static ei(t){return new Dl(t)}get ti(){if(this.Xr)return this.Xr;throw st()}addReference(t,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),D.resolve()}removeReference(t,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,n){return this.ti.add(n.toString()),D.resolve()}removeTarget(t,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Hr(){this.Xr=new Set}Jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.ti,r=>{const s=J.fromPath(r);return this.ni(t,s).next(i=>{i||n.removeEntry(s,it.min())})}).next(()=>(this.Xr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ni(t,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(t){return 0}ni(t,n){return D.or([()=>D.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Yr(t,n)])}}class ji{constructor(t,n){this.persistence=t,this.ri=new ir(r=>aT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=_E(this,n)}static ei(t,n){return new ji(t,n)}Hr(){}Jr(t){return D.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}Xn(t){const n=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}nr(t){let n=0;return this.er(t,r=>{n++}).next(()=>n)}er(t,n){return D.forEach(this.ri,(r,s)=>this.ir(t,r,s).next(i=>i?D.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(t,a=>this.ir(t,a,n).next(l=>{l||(r++,i.removeEntry(a,it.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.ri.set(n,t.currentSequenceNumber),D.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.ri.set(r,t.currentSequenceNumber),D.resolve()}removeReference(t,n,r){return this.ri.set(r,t.currentSequenceNumber),D.resolve()}updateLimboDocument(t,n){return this.ri.set(n,t.currentSequenceNumber),D.resolve()}zr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ii(t.data.value)),n}ir(t,n,r){return D.or([()=>this.persistence.Yr(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.ri.get(n);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(t,n){let r=ct(),s=ct();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xl(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Vy()?8:iT(Cy())>0?6:4}()}initialize(t,n){this.Zi=t,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.Xi(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new PE;return this.ts(t,n,a).next(l=>{if(i.result=l,this.Hi)return this.ns(t,n,a,l.size)})}).next(()=>i.result)}ns(t,n,r,s){return r.documentReadCount<this.Ji?(Er()<=ft.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ir(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),D.resolve()):(Er()<=ft.DEBUG&&W("QueryEngine","Query:",Ir(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Er()<=ft.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ir(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ue(n))):D.resolve())}Xi(t,n){if(rh(n))return D.resolve(null);let r=Ue(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fa(n,null,"F"),r=Ue(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=ct(...i);return this.Zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,a,c.readTime)?this.Xi(t,Fa(n,null,"F")):this.os(t,h,n,c)}))})))}es(t,n,r,s){return rh(n)||s.isEqual(it.min())?D.resolve(null):this.Zi.getDocuments(t,r).next(i=>{const a=this.rs(n,i);return this.ss(n,a,r,s)?D.resolve(null):(Er()<=ft.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ir(n)),this.os(t,a,n,tT(s,-1)).next(l=>l))})}rs(t,n){let r=new Ft(Bd(t));return n.forEach((s,i)=>{po(t,i)&&(r=r.add(i))}),r}ss(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(t,n,r){return Er()<=ft.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ir(n)),this.Zi.getDocumentsMatchingQuery(t,n,bn.min(),r)}os(t,n,r,s){return this.Zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t,n,r,s){this.persistence=t,this._s=n,this.serializer=s,this.us=new St(ut),this.cs=new ir(i=>Il(i),wl),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new TE(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.us))}}function xE(e,t,n,r){return new DE(e,t,n,r)}async function lp(e,t){const n=ot(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ct();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:l}))})})}function NE(e,t){const n=ot(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const g=h.batch,T=g.keys();let R=D.resolve();return T.forEach(V=>{R=R.next(()=>d.getEntry(c,V)).next(O=>{const N=h.docVersions.get(V);vt(N!==null),O.version.compareTo(N)<0&&(g.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ct();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function cp(e){const t=ot(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Gr.getLastRemoteSnapshotVersion(n))}function kE(e,t){const n=ot(e),r=t.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];t.targetChanges.forEach((d,g)=>{const T=s.get(g);if(!T)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,g).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,g)));let R=T.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(Kt.EMPTY_BYTE_STRING,it.min()).withLastLimboFreeSnapshotVersion(it.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(g,R),function(O,N,G){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(T,R,d)&&l.push(n.Gr.updateTargetData(i,R))});let c=on(),h=ct();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(OE(i,a,t.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(it.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(g=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function OE(e,t,n){let r=ct(),s=ct();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=on();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(it.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:a,Es:s}})}function ME(e,t){const n=ot(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function LE(e,t){const n=ot(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,t).next(i=>i?(s=i,D.resolve(s)):n.Gr.allocateTargetId(r).next(a=>(s=new _n(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(t,r.targetId)),r})}async function qa(e,t,n){const r=ot(e),s=r.us.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!jr(a))throw a;W("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.us=r.us.remove(t),r.cs.delete(s.target)}function gh(e,t,n){const r=ot(e);let s=it.min(),i=ct();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const g=ot(c),T=g.cs.get(d);return T!==void 0?D.resolve(g.us.get(T)):g.Gr.getTargetData(h,d)}(r,a,Ue(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(a,t,n?s:it.min(),n?i:ct())).next(l=>(FE(r,bT(t),l),{documents:l,ds:i})))}function FE(e,t,n){let r=e.ls.get(t)||it.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ls.set(t,r)}class mh{constructor(){this.activeTargetIds=DT()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class UE{constructor(){this._o=new mh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,n,r){this.ao[t]=n}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new mh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi=null;function oa(){return pi===null?pi=function(){return 268435456+Math.round(2147483648*Math.random())}():pi++,"0x"+pi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class qE extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,a){const l=oa(),c=this.No(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,a),this.Bo(n,c,h,s).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Dr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,a,l){return this.Oo(n,r,s,i,a)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Br}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}No(n,r){const s=$E[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,n,r,s){const i=oa();return new Promise((a,l)=>{const c=new Id;c.setWithCredentials(!0),c.listenOnce(wd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ei.NO_ERROR:const d=c.getResponseJson();W(Xt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case Ei.TIMEOUT:W(Xt,`RPC '${t}' ${i} timed out`),l(new Q(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ei.HTTP_ERROR:const g=c.getStatus();if(W(Xt,`RPC '${t}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const R=T==null?void 0:T.error;if(R&&R.status&&R.message){const V=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(G)>=0?G:x.UNKNOWN}(R.status);l(new Q(V,R.message))}else l(new Q(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Q(x.UNAVAILABLE,"Connection failed."));break;default:st()}}finally{W(Xt,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);W(Xt,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(t,n,r){const s=oa(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Rd(),l=bd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");W(Xt,`Creating RPC '${t}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);let T=!1,R=!1;const V=new jE({Eo:N=>{R?W(Xt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(T||(W(Xt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),T=!0),W(Xt,`RPC '${t}' stream ${s} sending:`,N),g.send(N))},Ao:()=>g.close()}),O=(N,G,$)=>{N.listen(G,z=>{try{$(z)}catch(M){setTimeout(()=>{throw M},0)}})};return O(g,as.EventType.OPEN,()=>{R||(W(Xt,`RPC '${t}' stream ${s} transport opened.`),V.So())}),O(g,as.EventType.CLOSE,()=>{R||(R=!0,W(Xt,`RPC '${t}' stream ${s} transport closed`),V.Do())}),O(g,as.EventType.ERROR,N=>{R||(R=!0,Dr(Xt,`RPC '${t}' stream ${s} transport errored:`,N),V.Do(new Q(x.UNAVAILABLE,"The operation could not be completed")))}),O(g,as.EventType.MESSAGE,N=>{var G;if(!R){const $=N.data[0];vt(!!$);const z=$,M=(z==null?void 0:z.error)||((G=z[0])===null||G===void 0?void 0:G.error);if(M){W(Xt,`RPC '${t}' stream ${s} received error:`,M);const Z=M.status;let rt=function(_){const I=Nt[_];if(I!==void 0)return Xd(I)}(Z),w=M.message;rt===void 0&&(rt=x.INTERNAL,w="Unknown error status: "+Z+" with message "+M.message),R=!0,V.Do(new Q(rt,w)),g.close()}else W(Xt,`RPC '${t}' stream ${s} received:`,$),V.vo($)}}),O(l,Ad.STAT_EVENT,N=>{N.stat===xa.PROXY?W(Xt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===xa.NOPROXY&&W(Xt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function aa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e){return new YT(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,n,r=1e3,s=1.5,i=6e4){this.li=t,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,n,r,s,i,a,l,c){this.li=t,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new up(t,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(sn(n.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(n)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{t(()=>{const s=new Q(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(t,n){const r=this.T_(this.Xo);this.stream=this.d_(t,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return W("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return n=>{this.li.enqueueAndForget(()=>this.Xo===t?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zE extends hp{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}d_(t,n){return this.connection.qo("Listen",t,n)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const n=ZT(this.serializer,t),r=function(i){if(!("targetChange"in i))return it.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?it.min():a.readTime?Be(a.readTime):it.min()}(t);return this.listener.R_(n,r)}V_(t){const n={};n.database=ja(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Ma(c)?{documents:nE(i,c)}:{query:rE(i,c).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=tp(i,a.resumeToken);const h=Ua(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(it.min())>0){l.readTime=$i(i,a.snapshotVersion.toTimestamp());const h=Ua(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=iE(this.serializer,t);r&&(n.labels=r),this.c_(n)}m_(t){const n={};n.database=ja(this.serializer),n.removeTarget=t,this.c_(n)}}class HE extends hp{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,n){return this.connection.qo("Write",t,n)}A_(t){return vt(!!t.streamToken),this.lastStreamToken=t.streamToken,vt(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){vt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const n=eE(t.writeResults,t.commitTime),r=Be(t.commitTime);return this.listener.y_(r,n)}w_(){const t={};t.database=ja(this.serializer),this.c_(t)}g_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>tE(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new Q(x.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(t,Ba(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(x.UNKNOWN,i.toString())})}ko(t,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(t,Ba(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(x.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class GE{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(sn(n),this.C_=!1):W("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{ar(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ot(c);h.k_.add(4),await js(h),h.K_.set("Unknown"),h.k_.delete(4),await vo(h)}(this))})}),this.K_=new GE(r,s)}}async function vo(e){if(ar(e))for(const t of e.q_)await t(!0)}async function js(e){for(const t of e.q_)await t(!1)}function fp(e,t){const n=ot(e);n.B_.has(t.targetId)||(n.B_.set(t.targetId,t),Ml(n)?Ol(n):zr(n).s_()&&kl(n,t))}function Nl(e,t){const n=ot(e),r=zr(n);n.B_.delete(t),r.s_()&&dp(n,t),n.B_.size===0&&(r.s_()?r.a_():ar(n)&&n.K_.set("Unknown"))}function kl(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(it.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}zr(e).V_(t)}function dp(e,t){e.U_.xe(t),zr(e).m_(t)}function Ol(e){e.U_=new KT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.B_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),zr(e).start(),e.K_.F_()}function Ml(e){return ar(e)&&!zr(e).i_()&&e.B_.size>0}function ar(e){return ot(e).k_.size===0}function pp(e){e.U_=void 0}async function QE(e){e.K_.set("Online")}async function YE(e){e.B_.forEach((t,n)=>{kl(e,t)})}async function XE(e,t){pp(e),Ml(e)?(e.K_.O_(t),Ol(e)):e.K_.set("Unknown")}async function JE(e,t,n){if(e.K_.set("Online"),t instanceof Zd&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.B_.delete(l),s.U_.removeTarget(l))}(e,t)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await qi(e,r)}else if(t instanceof bi?e.U_.$e(t):t instanceof Jd?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(it.min()))try{const r=await cp(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.U_.it(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(Kt.EMPTY_BYTE_STRING,d.snapshotVersion)),dp(i,c);const g=new _n(d.target,c,h,d.sequenceNumber);kl(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await qi(e,r)}}async function qi(e,t,n){if(!jr(t))throw t;e.k_.add(1),await js(e),e.K_.set("Offline"),n||(n=()=>cp(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await vo(e)})}function gp(e,t){return t().catch(n=>qi(e,n,t))}async function To(e){const t=ot(e),n=Pn(t);let r=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;ZE(t);)try{const s=await ME(t.localStore,r);if(s===null){t.L_.length===0&&n.a_();break}r=s.batchId,tI(t,s)}catch(s){await qi(t,s)}mp(t)&&_p(t)}function ZE(e){return ar(e)&&e.L_.length<10}function tI(e,t){e.L_.push(t);const n=Pn(e);n.s_()&&n.f_&&n.g_(t.mutations)}function mp(e){return ar(e)&&!Pn(e).i_()&&e.L_.length>0}function _p(e){Pn(e).start()}async function eI(e){Pn(e).w_()}async function nI(e){const t=Pn(e);for(const n of e.L_)t.g_(n.mutations)}async function rI(e,t,n){const r=e.L_.shift(),s=Cl.from(r,t,n);await gp(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await To(e)}async function sI(e,t){t&&Pn(e).f_&&await async function(r,s){if(function(a){return qT(a)&&a!==x.ABORTED}(s.code)){const i=r.L_.shift();Pn(r).__(),await gp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await To(r)}}(e,t),mp(e)&&_p(e)}async function yh(e,t){const n=ot(e);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ar(n);n.k_.add(3),await js(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.k_.delete(3),await vo(n)}async function iI(e,t){const n=ot(e);t?(n.k_.delete(2),await vo(n)):t||(n.k_.add(2),await js(n),n.K_.set("Unknown"))}function zr(e){return e.W_||(e.W_=function(n,r,s){const i=ot(n);return i.b_(),new zE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Ro:QE.bind(null,e),mo:YE.bind(null,e),po:XE.bind(null,e),R_:JE.bind(null,e)}),e.q_.push(async t=>{t?(e.W_.__(),Ml(e)?Ol(e):e.K_.set("Unknown")):(await e.W_.stop(),pp(e))})),e.W_}function Pn(e){return e.G_||(e.G_=function(n,r,s){const i=ot(n);return i.b_(),new HE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Ro:()=>Promise.resolve(),mo:eI.bind(null,e),po:sI.bind(null,e),p_:nI.bind(null,e),y_:rI.bind(null,e)}),e.q_.push(async t=>{t?(e.G_.__(),await To(e)):(await e.G_.stop(),e.L_.length>0&&(W("RemoteStore",`Stopping write stream with ${e.L_.length} pending writes`),e.L_=[]))})),e.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Ll(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fl(e,t){if(sn("AsyncQueue",`${t}: ${e}`),jr(e))return new Q(x.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{static emptySet(t){return new Vr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ls(),this.sortedSet=new St(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Vr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Vr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.z_=new St(J.comparator)}track(t){const n=t.doc.key,r=this.z_.get(n);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(n,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(n):t.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):st():this.z_=this.z_.insert(n,t)}j_(){const t=[];return this.z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Mr{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Mr(t,n,Vr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class aI{constructor(){this.queries=Th(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ot(n),i=s.queries;s.queries=Th(),i.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new Q(x.ABORTED,"Firestore shutting down"))}}function Th(){return new ir(e=>Ud(e),fo)}async function lI(e,t){const n=ot(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Y_()&&t.Z_()&&(r=2):(i=new oI,r=t.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Fl(a,`Initialization of query '${Ir(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.J_.push(t),t.ea(n.onlineState),i.H_&&t.ta(i.H_)&&Ul(n)}async function cI(e,t){const n=ot(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.J_.indexOf(t);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=t.Z_()?0:1:!i.Y_()&&t.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uI(e,t){const n=ot(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.J_)l.ta(s)&&(r=!0);a.H_=s}}r&&Ul(n)}function hI(e,t,n){const r=ot(e),s=r.queries.get(t);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(t)}function Ul(e){e.X_.forEach(t=>{t.next()})}var za,Eh;(Eh=za||(za={})).na="default",Eh.Cache="cache";class fI{constructor(t,n,r){this.query=t,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Mr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ia?this.oa(t)&&(this.ra.next(t),n=!0):this._a(t,this.onlineState)&&(this.aa(t),n=!0),this.sa=t,n}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),n=!0),n}_a(t,n){if(!t.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(t){t=Mr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==za.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t){this.key=t}}class vp{constructor(t){this.key=t}}class dI{constructor(t,n){this.query=t,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ct(),this.mutatedKeys=ct(),this.Va=Bd(t),this.ma=new Vr(this.Va)}get fa(){return this.da}ga(t,n){const r=n?n.pa:new vh,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const T=s.get(d),R=po(this.query,g)?g:null,V=!!T&&this.mutatedKeys.has(T.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;T&&R?T.data.isEqual(R.data)?V!==O&&(r.track({type:3,doc:R}),N=!0):this.ya(T,R)||(r.track({type:2,doc:R}),N=!0,(c&&this.Va(R,c)>0||h&&this.Va(R,h)<0)&&(l=!0)):!T&&R?(r.track({type:0,doc:R}),N=!0):T&&!R&&(r.track({type:1,doc:T}),N=!0,(c||h)&&(l=!0)),N&&(R?(a=a.add(R),i=O?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:a,pa:r,ss:l,mutatedKeys:i}}ya(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const a=t.pa.j_();a.sort((d,g)=>function(R,V){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return st()}};return O(R)-O(V)}(d.type,g.type)||this.Va(d.doc,g.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,a.length!==0||h?{snapshot:new Mr(this.query,t.ma,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new vh,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(n=>this.da=this.da.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=ct(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return t.forEach(r=>{this.Ra.has(r)||n.push(new vp(r))}),this.Ra.forEach(r=>{t.has(r)||n.push(new yp(r))}),n}va(t){this.da=t.ds,this.Ra=ct();const n=this.ga(t.documents);return this.applyChanges(n,!0)}Ca(){return Mr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class pI{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class gI{constructor(t){this.key=t,this.Fa=!1}}class mI{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new ir(l=>Ud(l),fo),this.Oa=new Map,this.Na=new Set,this.La=new St(J.comparator),this.Ba=new Map,this.ka=new Vl,this.qa={},this.Qa=new Map,this.Ka=Or.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function _I(e,t,n=!0){const r=bp(e);let s;const i=r.xa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Tp(r,t,n,!0),s}async function yI(e,t){const n=bp(e);await Tp(n,t,!0,!1)}async function Tp(e,t,n,r){const s=await LE(e.localStore,Ue(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await vI(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&fp(e.remoteStore,s),l}async function vI(e,t,n,r,s){e.Ua=(g,T,R)=>async function(O,N,G,$){let z=N.view.ga(G);z.ss&&(z=await gh(O.localStore,N.query,!1).then(({documents:w})=>N.view.ga(w,z)));const M=$&&$.targetChanges.get(N.targetId),Z=$&&$.targetMismatches.get(N.targetId)!=null,rt=N.view.applyChanges(z,O.isPrimaryClient,M,Z);return wh(O,N.targetId,rt.ba),rt.snapshot}(e,g,T,R);const i=await gh(e.localStore,t,!0),a=new dI(t,i.ds),l=a.ga(i.documents),c=$s.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);wh(e,n,h.ba);const d=new pI(t,n,a);return e.xa.set(t,d),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),h.snapshot}async function TI(e,t,n){const r=ot(e),s=r.xa.get(t),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!fo(a,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nl(r.remoteStore,s.targetId),Ha(r,s.targetId)}).catch($r)):(Ha(r,s.targetId),await qa(r.localStore,s.targetId,!0))}async function EI(e,t){const n=ot(e),r=n.xa.get(t),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nl(n.remoteStore,r.targetId))}async function II(e,t,n){const r=PI(e);try{const s=await function(a,l){const c=ot(a),h=Lt.now(),d=l.reduce((R,V)=>R.add(V.key),ct());let g,T;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let V=on(),O=ct();return c.hs.getEntries(R,d).next(N=>{V=N,V.forEach((G,$)=>{$.isValidDocument()||(O=O.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,V)).next(N=>{g=N;const G=[];for(const $ of l){const z=FT($,g.get($.key).overlayedDocument);z!=null&&G.push(new or($.key,z,Dd(z.value.mapValue),De.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,G,l)}).next(N=>{T=N;const G=N.applyToLocalDocumentSet(g,O);return c.documentOverlayCache.saveOverlays(R,N.batchId,G)})}).then(()=>({batchId:T.batchId,changes:jd(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.qa[a.currentUser.toKey()];h||(h=new St(ut)),h=h.insert(l,c),a.qa[a.currentUser.toKey()]=h}(r,s.batchId,n),await qs(r,s.changes),await To(r.remoteStore)}catch(s){const i=Fl(s,"Failed to persist write");n.reject(i)}}async function Ep(e,t){const n=ot(e);try{const r=await kE(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ba.get(i);a&&(vt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?vt(a.Fa):s.removedDocuments.size>0&&(vt(a.Fa),a.Fa=!1))}),await qs(n,r,t)}catch(r){await $r(r)}}function Ih(e,t,n){const r=ot(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,a)=>{const l=a.view.ea(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ot(a);c.onlineState=l;let h=!1;c.queries.forEach((d,g)=>{for(const T of g.J_)T.ea(l)&&(h=!0)}),h&&Ul(c)}(r.eventManager,t),s.length&&r.Ma.R_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function wI(e,t,n){const r=ot(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ba.get(t),i=s&&s.key;if(i){let a=new St(J.comparator);a=a.insert(i,ee.newNoDocument(i,it.min()));const l=ct().add(i),c=new _o(it.min(),new Map,new St(ut),a,l);await Ep(r,c),r.La=r.La.remove(i),r.Ba.delete(t),Bl(r)}else await qa(r.localStore,t,!1).then(()=>Ha(r,t,n)).catch($r)}async function AI(e,t){const n=ot(e),r=t.batch.batchId;try{const s=await NE(n.localStore,t);wp(n,r,null),Ip(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qs(n,s)}catch(s){await $r(s)}}async function bI(e,t,n){const r=ot(e);try{const s=await function(a,l){const c=ot(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(vt(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,t);wp(r,t,n),Ip(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await qs(r,s)}catch(s){await $r(s)}}function Ip(e,t){(e.Qa.get(t)||[]).forEach(n=>{n.resolve()}),e.Qa.delete(t)}function wp(e,t,n){const r=ot(e);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.qa[r.currentUser.toKey()]=s}}function Ha(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Oa.get(t))e.xa.delete(r),n&&e.Ma.Wa(r,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(r=>{e.ka.containsKey(r)||Ap(e,r)})}function Ap(e,t){e.Na.delete(t.path.canonicalString());const n=e.La.get(t);n!==null&&(Nl(e.remoteStore,n),e.La=e.La.remove(t),e.Ba.delete(n),Bl(e))}function wh(e,t,n){for(const r of n)r instanceof yp?(e.ka.addReference(r.key,t),RI(e,r)):r instanceof vp?(W("SyncEngine","Document no longer in limbo: "+r.key),e.ka.removeReference(r.key,t),e.ka.containsKey(r.key)||Ap(e,r.key)):st()}function RI(e,t){const n=t.key,r=n.path.canonicalString();e.La.get(n)||e.Na.has(r)||(W("SyncEngine","New document in limbo: "+n),e.Na.add(r),Bl(e))}function Bl(e){for(;e.Na.size>0&&e.La.size<e.maxConcurrentLimboResolutions;){const t=e.Na.values().next().value;e.Na.delete(t);const n=new J(Rt.fromString(t)),r=e.Ka.next();e.Ba.set(r,new gI(n)),e.La=e.La.insert(n,r),fp(e.remoteStore,new _n(Ue(Al(n.path)),r,"TargetPurposeLimboResolution",co.oe))}}async function qs(e,t,n){const r=ot(e),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=xl.zi(c.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(c,h){const d=ot(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(h,T=>D.forEach(T.Wi,R=>d.persistence.referenceDelegate.addReference(g,T.targetId,R)).next(()=>D.forEach(T.Gi,R=>d.persistence.referenceDelegate.removeReference(g,T.targetId,R)))))}catch(g){if(!jr(g))throw g;W("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const T=g.targetId;if(!g.fromCache){const R=d.us.get(T),V=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(V);d.us=d.us.insert(T,O)}}}(r.localStore,i))}async function CI(e,t){const n=ot(e);if(!n.currentUser.isEqual(t)){W("SyncEngine","User change. New user:",t.toKey());const r=await lp(n.localStore,t);n.currentUser=t,function(i,a){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new Q(x.CANCELLED,a))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await qs(n,r.Ts)}}function SI(e,t){const n=ot(e),r=n.Ba.get(t);if(r&&r.Fa)return ct().add(r.key);{let s=ct();const i=n.Oa.get(t);if(!i)return s;for(const a of i){const l=n.xa.get(a);s=s.unionWith(l.view.fa)}return s}}function bp(e){const t=ot(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ep.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=SI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wI.bind(null,t),t.Ma.R_=uI.bind(null,t.eventManager),t.Ma.Wa=hI.bind(null,t.eventManager),t}function PI(e){const t=ot(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=AI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bI.bind(null,t),t}class zi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=yo(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,n){return null}Ya(t,n){return null}Ha(t){return xE(this.persistence,new VE,t.initialUser,this.serializer)}ja(t){return new ap(Dl.ei,this.serializer)}za(t){return new UE}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zi.provider={build:()=>new zi};class VI extends zi{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,n){vt(this.persistence.referenceDelegate instanceof ji);const r=this.persistence.referenceDelegate.garbageCollector;return new gE(r,t.asyncQueue,n)}ja(t){const n=this.cacheSizeBytes!==void 0?ue.withCacheSize(this.cacheSizeBytes):ue.DEFAULT;return new ap(r=>ji.ei(r,n),this.serializer)}}class Ka{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ih(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CI.bind(null,this.syncEngine),await iI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new aI}()}createDatastore(t){const n=yo(t.databaseInfo.databaseId),r=function(i){return new qE(i)}(t.databaseInfo);return function(i,a,l,c){return new KE(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new WE(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>Ih(this.syncEngine,n,0),function(){return _h.p()?new _h:new BE}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,d){const g=new mI(s,i,a,l,c,h);return d&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=ot(s);W("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await js(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ka.provider={build:()=>new Ka};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):sn("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Jt.UNAUTHENTICATED,this.clientId=Sd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{W("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(W("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Fl(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function la(e,t){e.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ah(e,t){e.asyncQueue.verifyOperationInProgress();const n=await NI(e);W("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>yh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>yh(t.remoteStore,s)),e._onlineComponents=t}async function NI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await la(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Dr("Error using user provided cache. Falling back to memory cache: "+n),await la(e,new zi)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await la(e,new VI(void 0));return e._offlineComponents}async function Rp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Ah(e,e._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Ah(e,new Ka))),e._onlineComponents}function kI(e){return Rp(e).then(t=>t.syncEngine)}async function bh(e){const t=await Rp(e),n=t.eventManager;return n.onListen=_I.bind(null,t.syncEngine),n.onUnlisten=TI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=yI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=EI.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(e,t,n){if(!n)throw new Q(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function OI(e,t,n,r){if(t===!0&&r===!0)throw new Q(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ch(e){if(!J.isDocumentKey(e))throw new Q(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Sh(e){if(J.isDocumentKey(e))throw new Q(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Eo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":st()}function En(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Q(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eo(e);throw new Q(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Q(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Q(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}OI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cp((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Io{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ph({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Q(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ph(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hv;switch(r.type){case"firstParty":return new Qv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Rh.get(n);r&&(W("ComponentProvider","Removing Datastore"),Rh.delete(n),r.terminate())}(this),Promise.resolve()}}function MI(e,t,n,r={}){var s;const i=(e=En(e,Io))._getSettings(),a=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Jt.MOCK_USER;else{l=hd(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Q(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Jt(h)}e._authCredentials=new Kv(new Cd(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new lr(this.firestore,t,this._query)}}class fe{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fe(this.firestore,t,this._key)}}class In extends lr{constructor(t,n,r){super(t,n,Al(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fe(this.firestore,null,new J(t))}withConverter(t){return new In(this.firestore,t,this._path)}}function gi(e,t,...n){if(e=$e(e),Sp("collection","path",t),e instanceof Io){const r=Rt.fromString(t,...n);return Sh(r),new In(e,null,r)}{if(!(e instanceof fe||e instanceof In))throw new Q(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rt.fromString(t,...n));return Sh(r),new In(e.firestore,null,r)}}function Ga(e,t,...n){if(e=$e(e),arguments.length===1&&(t=Sd.newId()),Sp("doc","path",t),e instanceof Io){const r=Rt.fromString(t,...n);return Ch(r),new fe(e,null,new J(r))}{if(!(e instanceof fe||e instanceof In))throw new Q(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rt.fromString(t,...n));return Ch(r),new fe(e.firestore,e instanceof In?e.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new up(this,"async_queue_retry"),this.fu=()=>{const r=aa();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const n=aa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const n=aa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Jn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!jr(t))throw t;W("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const n=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw sn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(t,n,r){this.pu(),this.mu.indexOf(t)>-1&&(n=0);const s=Ll.createAndSchedule(this,t,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&st()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}function Dh(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Lr extends Io{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Vh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Vh(t),this._firestoreClient=void 0,await t}}}function LI(e,t){const n=typeof e=="object"?e:yl(),r=typeof e=="string"?e:"(default)",s=Ur(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cd("firestore");i&&MI(s,...i)}return s}function Pp(e){if(e._terminated)throw new Q(x.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||FI(e),e._firestoreClient}function FI(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,h,d){return new uT(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Cp(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new xI(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fr(Kt.fromBase64String(t))}catch(n){throw new Q(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Fr(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Q(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Q(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Q(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ut(this._lat,t._lat)||ut(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=/^__.*__$/;class BI{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new or(t,this.data,this.fieldMask,n,this.fieldTransforms):new Bs(t,this.data,n,this.fieldTransforms)}}function Dp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw st()}}class zl{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new zl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.xu({path:r,Nu:!1});return s.Lu(t),s}Bu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Hi(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(Dp(this.Mu)&&UI.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class $I{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||yo(t)}$u(t,n,r,s=!1){return new zl({Mu:t,methodName:n,Ku:r,path:Ht.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hl(e){const t=e._freezeSettings(),n=yo(e._databaseId);return new $I(e._databaseId,!!t.ignoreUndefinedProperties,n)}function xp(e,t,n,r,s,i={}){const a=e.$u(i.merge||i.mergeFields?2:0,t,n,s);Op("Data must be an object, but it was:",a,r);const l=Np(r,a);let c,h;if(i.merge)c=new Se(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const T=qI(t,g,n);if(!a.contains(T))throw new Q(x.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);HI(d,T)||d.push(T)}c=new Se(d),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new BI(new we(l),c,h)}function jI(e,t,n,r=!1){return Kl(n,e.$u(r?4:3,t))}function Kl(e,t){if(kp(e=$e(e)))return Op("Unsupported field value:",t,e),Np(e,t);if(e instanceof Vp)return function(r,s){if(!Dp(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Kl(l,s.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Lt.fromDate(r);return{timestampValue:$i(s.serializer,i)}}if(r instanceof Lt){const i=new Lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$i(s.serializer,i)}}if(r instanceof jl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fr)return{bytesValue:tp(s.serializer,r._byteString)};if(r instanceof fe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ql)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return bl(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Eo(r)}`)}(e,t)}function Np(e,t){const n={};return Pd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sr(e,(r,s)=>{const i=Kl(s,t.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Lt||e instanceof jl||e instanceof Fr||e instanceof fe||e instanceof Vp||e instanceof ql)}function Op(e,t,n){if(!kp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Eo(n);throw r==="an object"?t.qu(e+" a custom object"):t.qu(e+" "+r)}}function qI(e,t,n){if((t=$e(t))instanceof $l)return t._internalPath;if(typeof t=="string")return Mp(e,t);throw Hi("Field path arguments must be of type string or ",e,!1,void 0,n)}const zI=new RegExp("[~\\*/\\[\\]]");function Mp(e,t,n){if(t.search(zI)>=0)throw Hi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new $l(...t.split("."))._internalPath}catch{throw Hi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hi(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Q(x.INVALID_ARGUMENT,l+e+c)}function HI(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new KI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Gl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KI extends Lp{data(){return super.data()}}function Gl(e,t){return typeof t=="string"?Mp(e,t):t instanceof $l?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Q(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wl{}class Fp extends Wl{}function xh(e,t,...n){let r=[];t instanceof Wl&&r.push(t),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof Yl).length,l=i.filter(c=>c instanceof Ql).length;if(a>1||a>0&&l>0)throw new Q(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Ql extends Fp{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Ql(t,n,r)}_apply(t){const n=this._parse(t);return Up(t._query,n),new lr(t.firestore,t.converter,La(t._query,n))}_parse(t){const n=Hl(t.firestore);return function(i,a,l,c,h,d,g){let T;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Oh(g,d);const R=[];for(const V of g)R.push(kh(c,i,V));T={arrayValue:{values:R}}}else T=kh(c,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Oh(g,d),T=jI(l,a,g,d==="in"||d==="not-in");return kt.create(h,d,T)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Yl extends Wl{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Yl(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ne.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Up(a,c),a=La(a,c)}(t._query,n),new lr(t.firestore,t.converter,La(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xl extends Fp{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Xl(t,n)}_apply(t){const n=function(s,i,a){if(s.startAt!==null)throw new Q(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Os(i,a)}(t._query,this._field,this._direction);return new lr(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new qr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Nh(e,t="asc"){const n=t,r=Gl("orderBy",e);return Xl._create(r,n)}function kh(e,t,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new Q(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fd(t)&&n.indexOf("/")!==-1)throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Rt.fromString(n));if(!J.isDocumentKey(r))throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xu(e,new J(r))}if(n instanceof fe)return Xu(e,n._key);throw new Q(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eo(n)}.`)}function Oh(e,t){if(!Array.isArray(e)||e.length===0)throw new Q(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Up(e,t){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new Q(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Q(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class WI{convertValue(t,n="none"){switch(Sn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Cn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw st()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return sr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Vt(a.doubleValue));return new ql(i)}convertGeoPoint(t){return new jl(Vt(t.latitude),Vt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ho(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xs(t));default:return null}}convertTimestamp(t){const n=Rn(t);return new Lt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Rt.fromString(t);vt(op(r));const s=new Ns(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $p extends Lp{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Gl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ri extends $p{data(t={}){return super.data(t)}}class QI{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ri(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Ri(s._firestore,s._userDataWriter,l.doc.key,l.doc,new us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ri(s._firestore,s._userDataWriter,l.doc.key,l.doc,new us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:YI(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YI(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return st()}}class jp extends WI{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new fe(this.firestore,null,n)}}function XI(e,t,n){e=En(e,fe);const r=En(e.firestore,Lr),s=Bp(e.converter,t);return Jl(r,[xp(Hl(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,De.none())])}function JI(e){return Jl(En(e.firestore,Lr),[new Rl(e._key,De.none())])}function Mh(e,t){const n=En(e.firestore,Lr),r=Ga(e),s=Bp(e.converter,t);return Jl(n,[xp(Hl(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function Lh(e,...t){var n,r,s;e=$e(e);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Dh(t[a])||(i=t[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Dh(t[a])){const g=t[a];t[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),t[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,d;if(e instanceof fe)h=En(e.firestore,Lr),d=Al(e._key.path),c={next:g=>{t[a]&&t[a](ZI(h,e,g))},error:t[a+1],complete:t[a+2]};else{const g=En(e,lr);h=En(g.firestore,Lr),d=g._query;const T=new jp(h);c={next:R=>{t[a]&&t[a](new QI(h,T,g,R))},error:t[a+1],complete:t[a+2]},GI(e._query)}return function(T,R,V,O){const N=new DI(O),G=new fI(R,N,V);return T.asyncQueue.enqueueAndForget(async()=>lI(await bh(T),G)),()=>{N.eu(),T.asyncQueue.enqueueAndForget(async()=>cI(await bh(T),G))}}(Pp(h),d,l,c)}function Jl(e,t){return function(r,s){const i=new Jn;return r.asyncQueue.enqueueAndForget(async()=>II(await kI(r),s,i)),i.promise}(Pp(e),t)}function ZI(e,t,n){const r=n.docs.get(t._key),s=new jp(e);return new $p(e,s,t._key,r,new us(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Br=s})(_d),rn(new je("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Lr(new Gv(r.getProvider("auth-internal")),new Xv(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),be(Hu,"4.7.5",t),be(Hu,"4.7.5","esm2017")})();var tw="firebase",ew="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be(tw,ew,"app");const qp="@firebase/installations",Zl="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=1e4,Hp=`w:${Zl}`,Kp="FIS_v2",nw="https://firebaseinstallations.googleapis.com/v1",rw=60*60*1e3,sw="installations",iw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},er=new lo(sw,iw,ow);function Gp(e){return e instanceof ln&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp({projectId:e}){return`${nw}/projects/${e}/installations`}function Qp(e){return{token:e.token,requestStatus:2,expiresIn:lw(e.expiresIn),creationTime:Date.now()}}async function Yp(e,t){const r=(await t.json()).error;return er.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function aw(e,{refreshToken:t}){const n=Xp(e);return n.append("Authorization",cw(t)),n}async function Jp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function lw(e){return Number(e.replace("s","000"))}function cw(e){return`${Kp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Wp(e),s=Xp(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Kp,appId:e.appId,sdkVersion:Hp},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Jp(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Qp(h.authToken)}}else throw await Yp("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=/^[cdef][\w-]{21}$/,Wa="";function dw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=pw(e);return fw.test(n)?n:Wa}catch{return Wa}}function pw(e){return hw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;function eg(e,t){const n=wo(e);ng(n,t),gw(n,t)}function ng(e,t){const n=tg.get(e);if(n)for(const r of n)r(t)}function gw(e,t){const n=mw();n&&n.postMessage({key:e,fid:t}),_w()}let Qn=null;function mw(){return!Qn&&"BroadcastChannel"in self&&(Qn=new BroadcastChannel("[Firebase] FID Change"),Qn.onmessage=e=>{ng(e.data.key,e.data.fid)}),Qn}function _w(){tg.size===0&&Qn&&(Qn.close(),Qn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="firebase-installations-database",vw=1,nr="firebase-installations-store";let ca=null;function tc(){return ca||(ca=md(yw,vw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nr)}}})),ca}async function Ki(e,t){const n=wo(e),s=(await tc()).transaction(nr,"readwrite"),i=s.objectStore(nr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&eg(e,t.fid),t}async function rg(e){const t=wo(e),r=(await tc()).transaction(nr,"readwrite");await r.objectStore(nr).delete(t),await r.done}async function Ao(e,t){const n=wo(e),s=(await tc()).transaction(nr,"readwrite"),i=s.objectStore(nr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&eg(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e){let t;const n=await Ao(e.appConfig,r=>{const s=Tw(r),i=Ew(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Wa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Tw(e){const t=e||{fid:dw(),registrationStatus:0};return sg(t)}function Ew(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(er.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Iw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ww(e)}:{installationEntry:t}}async function Iw(e,t){try{const n=await uw(e,t);return Ki(e.appConfig,n)}catch(n){throw Gp(n)&&n.customData.serverCode===409?await rg(e.appConfig):await Ki(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ww(e){let t=await Fh(e.appConfig);for(;t.registrationStatus===1;)await Zp(100),t=await Fh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ec(e);return r||n}return t}function Fh(e){return Ao(e,t=>{if(!t)throw er.create("installation-not-found");return sg(t)})}function sg(e){return Aw(e)?{fid:e.fid,registrationStatus:0}:e}function Aw(e){return e.registrationStatus===1&&e.registrationTime+zp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw({appConfig:e,heartbeatServiceProvider:t},n){const r=Rw(e,n),s=aw(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Hp,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Jp(()=>fetch(r,l));if(c.ok){const h=await c.json();return Qp(h)}else throw await Yp("Generate Auth Token",c)}function Rw(e,{fid:t}){return`${Wp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(e,t=!1){let n;const r=await Ao(e.appConfig,i=>{if(!ig(i))throw er.create("not-registered");const a=i.authToken;if(!t&&Pw(a))return i;if(a.requestStatus===1)return n=Cw(e,t),i;{if(!navigator.onLine)throw er.create("app-offline");const l=Dw(i);return n=Sw(e,l),l}});return n?await n:r.authToken}async function Cw(e,t){let n=await Uh(e.appConfig);for(;n.authToken.requestStatus===1;)await Zp(100),n=await Uh(e.appConfig);const r=n.authToken;return r.requestStatus===0?nc(e,t):r}function Uh(e){return Ao(e,t=>{if(!ig(t))throw er.create("not-registered");const n=t.authToken;return xw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Sw(e,t){try{const n=await bw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ki(e.appConfig,r),n}catch(n){if(Gp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ki(e.appConfig,r)}throw n}}function ig(e){return e!==void 0&&e.registrationStatus===2}function Pw(e){return e.requestStatus===2&&!Vw(e)}function Vw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+rw}function Dw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function xw(e){return e.requestStatus===1&&e.requestTime+zp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(e){const t=e,{installationEntry:n,registrationPromise:r}=await ec(t);return r?r.catch(console.error):nc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(e,t=!1){const n=e;return await Ow(n),(await nc(n,t)).token}async function Ow(e){const{registrationPromise:t}=await ec(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(e){if(!e||!e.options)throw ua("App Configuration");if(!e.name)throw ua("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ua(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ua(e){return er.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="installations",Lw="installations-internal",Fw=e=>{const t=e.getProvider("app").getImmediate(),n=Mw(t),r=Ur(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Uw=e=>{const t=e.getProvider("app").getImmediate(),n=Ur(t,og).getImmediate();return{getId:()=>Nw(n),getToken:s=>kw(n,s)}};function Bw(){rn(new je(og,Fw,"PUBLIC")),rn(new je(Lw,Uw,"PRIVATE"))}Bw();be(qp,Zl);be(qp,Zl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="analytics",$w="firebase_id",jw="origin",qw=60*1e3,zw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new ml("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ve=new lo("analytics","Analytics",Hw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(e){if(!e.startsWith(rc)){const t=ve.create("invalid-gtag-resource",{gtagURL:e});return de.warn(t.message),""}return e}function ag(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Gw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ww(e,t){const n=Gw("firebase-js-sdk-policy",{createScriptURL:Kw}),r=document.createElement("script"),s=`${rc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Qw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Yw(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const c=(await ag(n)).find(h=>h.measurementId===s);c&&await t[c.appId]}}catch(l){de.error(l)}e("config",s,i)}async function Xw(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await ag(n);for(const c of a){const h=l.find(g=>g.measurementId===c),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){de.error(i)}}function Jw(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await Xw(e,t,n,l,c)}else if(i==="config"){const[l,c]=a;await Yw(e,t,n,r,l,c)}else if(i==="consent"){const[l,c]=a;e("consent",l,c)}else if(i==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){de.error(l)}}return s}function Zw(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Jw(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function tA(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(rc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=30,nA=1e3;class rA{constructor(t={},n=nA){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const lg=new rA;function sA(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function iA(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:sA(r)},i=zw.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw ve.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function oA(e,t=lg,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ve.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ve.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new cA;return setTimeout(async()=>{l.abort()},qw),cg({appId:r,apiKey:s,measurementId:i},a,l,t)}async function cg(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=lg){var i;const{appId:a,measurementId:l}=e;try{await aA(r,t)}catch(c){if(l)return de.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await iA(e);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!lA(h)){if(s.deleteThrottleMetadata(a),l)return de.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ou(n,s.intervalMillis,eA):Ou(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,g),de.debug(`Calling attemptFetch again in ${d} millis`),cg(e,g,r,s)}}function aA(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ve.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function lA(e){if(!(e instanceof ln)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class cA{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function uA(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(){if(fd())try{await dd()}catch(e){return de.warn(ve.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return de.warn(ve.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fA(e,t,n,r,s,i,a){var l;const c=oA(e);c.then(R=>{n[R.measurementId]=R.appId,e.options.measurementId&&R.measurementId!==e.options.measurementId&&de.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>de.error(R)),t.push(c);const h=hA().then(R=>{if(R)return r.getId()}),[d,g]=await Promise.all([c,h]);tA(i)||Ww(i,d.measurementId),s("js",new Date);const T=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return T[jw]="firebase",T.update=!0,g!=null&&(T[$w]=g),s("config",d.measurementId,T),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(t){this.app=t}_delete(){return delete Is[this.app.options.appId],Promise.resolve()}}let Is={},Bh=[];const $h={};let ha="dataLayer",pA="gtag",jh,ug,qh=!1;function gA(){const e=[];if(Py()&&e.push("This is a browser extension environment."),Dy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ve.create("invalid-analytics-context",{errorInfo:t});de.warn(n.message)}}function mA(e,t,n){gA();const r=e.options.appId;if(!r)throw ve.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)de.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ve.create("no-api-key");if(Is[r]!=null)throw ve.create("already-exists",{id:r});if(!qh){Qw(ha);const{wrappedGtag:i,gtagCore:a}=Zw(Is,Bh,$h,ha,pA);ug=i,jh=a,qh=!0}return Is[r]=fA(e,Bh,$h,t,jh,ha,n),new dA(e)}function _A(e=yl()){e=$e(e);const t=Ur(e,Gi);return t.isInitialized()?t.getImmediate():yA(e)}function yA(e,t={}){const n=Ur(e,Gi);if(n.isInitialized()){const s=n.getImmediate();if(Oi(t,n.getOptions()))return s;throw ve.create("already-initialized")}return n.initialize({options:t})}function vA(e,t,n,r){e=$e(e),uA(ug,Is[e.app.options.appId],t,n,r).catch(s=>de.error(s))}const zh="@firebase/analytics",Hh="0.10.10";function TA(){rn(new je(Gi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return mA(r,s,n)},"PUBLIC")),rn(new je("analytics-internal",e,"PRIVATE")),be(zh,Hh),be(zh,Hh,"esm2017");function e(t){try{const n=t.getProvider(Gi).getImmediate();return{logEvent:(r,s,i)=>vA(n,r,s,i)}}catch(n){throw ve.create("interop-component-reg-failed",{reason:n})}}}TA();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="firebasestorage.googleapis.com",EA="storageBucket",IA=2*60*1e3,wA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends ln{constructor(t,n,r=0){super(fa(t),`Firebase Storage: ${n} (${fa(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return fa(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function fa(e){return"storage/"+e}function AA(){const e="An unknown error occurred, please check the error payload for server response.";return new He(ze.UNKNOWN,e)}function bA(){return new He(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RA(){return new He(ze.CANCELED,"User canceled the upload/download.")}function CA(e){return new He(ze.INVALID_URL,"Invalid URL '"+e+"'.")}function SA(e){return new He(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Kh(e){return new He(ze.INVALID_ARGUMENT,e)}function fg(){return new He(ze.APP_DELETED,"The Firebase app was deleted.")}function PA(e){return new He(ze.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Pe.makeFromUrl(t,n)}catch{return new Pe(t,"")}if(r.path==="")return r;throw SA(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function h(M){M.path_=decodeURIComponent(M.path)}const d="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",R=new RegExp(`^https?://${g}/${d}/b/${s}/o${T}`,"i"),V={bucket:1,path:3},O=n===hg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",G=new RegExp(`^https?://${O}/${s}/${N}`,"i"),z=[{regex:l,indices:c,postModify:i},{regex:R,indices:V,postModify:h},{regex:G,indices:{bucket:1,path:2},postModify:h}];for(let M=0;M<z.length;M++){const Z=z[M],rt=Z.regex.exec(t);if(rt){const w=rt[Z.indices.bucket];let m=rt[Z.indices.path];m||(m=""),r=new Pe(w,m),Z.postModify(r);break}}if(r==null)throw CA(t);return r}}class VA{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(e,t,n){let r=1,s=null,i=null,a=!1,l=0;function c(){return l===2}let h=!1;function d(...N){h||(h=!0,t.apply(null,N))}function g(N){s=setTimeout(()=>{s=null,e(R,c())},N)}function T(){i&&clearTimeout(i)}function R(N,...G){if(h){T();return}if(N){T(),d.call(null,N,...G);return}if(c()||a){T(),d.call(null,N,...G);return}r<64&&(r*=2);let z;l===1?(l=2,z=0):z=(r+Math.random())*1e3,g(z)}let V=!1;function O(N){V||(V=!0,T(),!h&&(s!==null?(N||(l=2),clearTimeout(s),g(0)):N||(l=1)))}return g(0),i=setTimeout(()=>{a=!0,O(!0)},n),O}function xA(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(e){return e!==void 0}function Gh(e,t,n,r){if(r<t)throw Kh(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Kh(`Invalid value for '${e}'. Expected ${n} or less.`)}function kA(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Wi;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Wi||(Wi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(t,n,r,s,i,a,l,c,h,d,g,T=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=g,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,V)=>{this.resolve_=R,this.reject_=V,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new mi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Wi.NO_ERROR,c=i.getStatus();if(!l||OA(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Wi.ABORT;r(!1,new mi(!1,null,d));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new mi(h,i))})},n=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());NA(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=AA();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(s.canceled){const c=this.appDelete_?fg():RA();a(c)}else{const c=bA();a(c)}};this.canceled_?n(!1,new mi(!1,null,!0)):this.backoffId_=DA(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&xA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mi{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function LA(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function FA(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function UA(e,t){t&&(e["X-Firebase-GMPID"]=t)}function BA(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function $A(e,t,n,r,s,i,a=!0){const l=kA(e.urlParams),c=e.url+l,h=Object.assign({},e.headers);return UA(h,t),LA(h,n),FA(h,i),BA(h,r),new MA(c,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qA(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n){this._service=t,n instanceof Pe?this._location=n:this._location=Pe.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Qi(t,n)}get root(){const t=new Pe(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qA(this._location.path)}get storage(){return this._service}get parent(){const t=jA(this._location.path);if(t===null)return null;const n=new Pe(this._location.bucket,t);return new Qi(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw PA(t)}}function Wh(e,t){const n=t==null?void 0:t[EA];return n==null?null:Pe.makeFromBucketSpec(n,e)}function zA(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:hd(s,e.app.options.projectId))}class HA{constructor(t,n,r,s,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=hg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IA,this._maxUploadRetryTime=wA,this._requests=new Set,s!=null?this._bucket=Pe.makeFromBucketSpec(s,this._host):this._bucket=Wh(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Pe.makeFromBucketSpec(this._url,t):this._bucket=Wh(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Gh("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Gh("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Qi(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new VA(fg());{const a=$A(t,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const Qh="@firebase/storage",Yh="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="storage";function KA(e=yl(),t){e=$e(e);const r=Ur(e,dg).getImmediate({identifier:t}),s=cd("storage");return s&&GA(r,...s),r}function GA(e,t,n,r={}){zA(e,t,n,r)}function WA(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new HA(n,r,s,t,_d)}function QA(){rn(new je(dg,WA,"PUBLIC").setMultipleInstances(!0)),be(Qh,Yh,""),be(Qh,Yh,"esm2017")}QA();const YA={class:"view"},XA={class:"box"},JA={class:"messageBox"},ZA={class:"flexBox-v gap-8"},t0={class:"flexBox-h"},e0={class:"flexBox-v gap-4"},n0={class:"flexBox-h"},r0=["onUpdate:modelValue"],s0={class:"flexBox-h gap-4"},i0=["onClick"],o0=["onClick"],a0={class:"subscriptionBox"},l0={class:"flexBox-v gap-8"},c0={class:"button"},u0={class:"flexBox-v gap-4"},h0={class:"item"},f0={class:"data"},d0="BEjW9fGjflroMLSonoLkExR73VCagyqOBvrDC_wMQY33CTFeyg-hF21B6KYW8rv2tOR3lYGfEjizCFJHzBjtgzE",p0={__name:"HelloWorld",setup(e){const n=yd({apiKey:"AIzaSyANJTede-DQuCmu_8kPraYlRecLDbRTdT4",authDomain:"notification-db317.firebaseapp.com",projectId:"notification-db317",storageBucket:"notification-db317.firebasestorage.app",messagingSenderId:"1069303497200",appId:"1:1069303497200:web:5e06f0f7bcffdf84f09d35",measurementId:"G-HBE8784GYN"});_A(n);const r=LI(n);KA();const s=_r(!0),i=_r(null),a=_r([]),l=async()=>{await Mh(gi(r,"messages"),{text:i.value.value,date:Date.now()}),i.value.value=""},c=$=>{XI(Ga(r,"messages",$.id),{text:$.text,date:$.date})},h=$=>{JI(Ga(r,"messages",$.id))},d=_r(!1),g=_r(!0),T=_r([]);"Notification"in window||console.log("不支援推送通知");const V=($=>{const z="=".repeat((4-$.length%4)%4),M=($+z).replace(/\-/g,"+").replace(/_/g,"/"),Z=window.atob(M),rt=new Uint8Array(Z.length);for(let w=0;w<Z.length;++w)rt[w]=Z.charCodeAt(w);return rt})(d0),O=async()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js").then($=>$.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:V})).then(async $=>{console.log("上傳使用者註冊身份",$);const z=JSON.stringify($),M=JSON.parse(z);M.date=Date.now(),T.value.some(Z=>Z.endpoint===$.endpoint)||await Mh(gi(r,"subscriptions"),M)}).catch($=>{console.log("訂閱用戶失敗: ",$)})},N=()=>{Notification.requestPermission().then($=>{console.log("請求通知權限成功",$),O()})},G=async()=>{const $={body:"感謝您發送此推播訊息",icon:"./images/logo-192x192.png",badge:"./images/badge-72x72.png",data:{url:"https://web.dev/push-notifications-overview/",link:"https://web.dev/push-notifications-overview/"}};Notification.permission=="granted"&&navigator.serviceWorker.getRegistration().then(z=>{z.showNotification("Hello",$)})};return cl(async()=>{Notification.permission==="granted"?(console.log("已開啟通知權限"),d.value=!0):["default","denied"].includes(Notification.permission)&&console.log("未開啟通知權限");const $=xh(gi(r,"messages"),Nh("date")),z=Lh($,async rt=>{a.value=rt.docs.map(w=>({id:w.id,...w.data()})),s.value=!1});gs(z);const M=xh(gi(r,"subscriptions"),Nh("date")),Z=Lh(M,async rt=>{T.value=rt.docs.map(w=>({id:w.id,...w.data()})),g.value=!1});gs(Z)}),gs(async()=>{}),($,z)=>(en(),vr("div",YA,[z[3]||(z[3]=lt("div",{class:"componentsName"},"NotificationView",-1)),lt("div",XA,[z[1]||(z[1]=lt("div",{class:"setupTitle"},"Firestore Database 資料庫測試",-1)),lt("div",JA,[lt("div",ZA,[lt("div",t0,[lt("input",{ref_key:"newMessageRef",ref:i,placeholder:"新訊息 ...",type:"text"},null,512),lt("button",{onClick:l},"增加")]),lt("div",e0,[(en(!0),vr(Ie,null,tu(a.value,M=>(en(),vr("div",n0,[Pm(lt("input",{"onUpdate:modelValue":Z=>M.text=Z,type:"text"},null,8,r0),[[uy,M.text]]),lt("div",s0,[lt("button",{onClick:Z=>c(M)},"更新",8,i0),lt("button",{onClick:Z=>h(M)},"刪除",8,o0)])]))),256))])]),ce(xu,{show:s.value,colorCode:"#202b38"},null,8,["show"])]),z[2]||(z[2]=lt("div",{class:"setupTitle"},"推播通知",-1)),lt("div",a0,[lt("div",l0,[lt("div",c0,[lt("button",{onClick:z[0]||(z[0]=M=>d.value?G():N())},pa(`${d.value?"發送":"接收"}推播通知`),1)]),lt("div",u0,[(en(!0),vr(Ie,null,tu(T.value,M=>(en(),vr("div",h0,[lt("div",f0,[lt("pre",null,pa(M),1)])]))),256))])]),ce(xu,{show:g.value,colorCode:"#202b38"},null,8,["show"])])])]))}},g0=pl(p0,[["__scopeId","data-v-7219df05"]]),m0={__name:"App",setup(e){return(t,n)=>(en(),fl(g0))}},_0=pl(m0,[["__scopeId","data-v-4018de49"]]);dy(_0).mount("#app");
