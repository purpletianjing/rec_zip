webpackJsonp([2],{0:function(t,e,n){(function(t,e){"use strict";n(235);var i=n(237);t.render(e.createElement(i,null),document.getElementById("info"))}).call(e,n(13),n(159))},172:function(t,e,n){var i=n(173);i.connect=n(186),i.connectFilter=n(188),i.ListenerMixin=n(187),i.listenTo=n(189),i.listenToMany=n(190),t.exports=i},173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={version:{"reflux-core":"0.3.0"}};i.ActionMethods=n(174),i.ListenerMethods=n(175),i.PublisherMethods=n(184),i.StoreMethods=n(183),i.createAction=n(185),i.createStore=n(179);var r=n(178).staticJoinCreator;i.joinTrailing=i.all=r("last"),i.joinLeading=r("first"),i.joinStrict=r("strict"),i.joinConcat=r("all");var s=i.utils=n(176);i.EventEmitter=s.EventEmitter,i.Promise=s.Promise,i.createActions=function(){var t=function(t,e){Object.keys(t).forEach(function(n){var r=t[n];e[n]=i.createAction(r)})};return function(e){var n={};return e instanceof Array?e.forEach(function(e){s.isObject(e)?t(e,n):n[e]=i.createAction(e)}):t(e,n),n}}(),i.setEventEmitter=function(t){i.EventEmitter=s.EventEmitter=t},i.nextTick=function(t){s.nextTick=t},i.use=function(t){t(i)},i.__keep=n(180),Function.prototype.bind||console.error("Function.prototype.bind not available. ES5 shim required. https://github.com/spoike/refluxjs#es5"),e["default"]=i,t.exports=e["default"]},174:function(t,e){"use strict";t.exports={}},175:function(t,e,n){"use strict";var i=n(176),r=n(178).instanceJoinCreator,s=function(t){for(var e,n=0,i={};n<(t.children||[]).length;++n)e=t.children[n],t[e]&&(i[e]=t[e]);return i},o=function a(t){var e={};for(var n in t){var r=t[n],o=s(r),c=a(o);e[n]=r;for(var u in c){var l=c[u];e[n+i.capitalize(u)]=l}}return e};t.exports={hasListener:function(t){for(var e,n,i,r=0;r<(this.subscriptions||[]).length;++r)for(i=[].concat(this.subscriptions[r].listenable),e=0;e<i.length;e++)if(n=i[e],n===t||n.hasListener&&n.hasListener(t))return!0;return!1},listenToMany:function(t){var e=o(t);for(var n in e){var r=i.callbackName(n),s=this[r]?r:this[n]?n:void 0;s&&this.listenTo(e[n],s,this[r+"Default"]||this[s+"Default"]||s)}},validateListening:function(t){return t===this?"Listener is not able to listen to itself":i.isFunction(t.listen)?t.hasListener&&t.hasListener(this)?"Listener cannot listen to this listenable because of circular loop":void 0:t+" is missing a listen method"},listenTo:function(t,e,n){var r,s,o,a=this.subscriptions=this.subscriptions||[];return i.throwIf(this.validateListening(t)),this.fetchInitialState(t,n),r=t.listen(this[e]||e,this),s=function(){var t=a.indexOf(o);i.throwIf(-1===t,"Tried to remove listen already gone from subscriptions list!"),a.splice(t,1),r()},o={stop:s,listenable:t},a.push(o),o},stopListeningTo:function(t){for(var e,n=0,r=this.subscriptions||[];n<r.length;n++)if(e=r[n],e.listenable===t)return e.stop(),i.throwIf(-1!==r.indexOf(e),"Failed to remove listen from subscriptions list!"),!0;return!1},stopListeningToAll:function(){for(var t,e=this.subscriptions||[];t=e.length;)e[0].stop(),i.throwIf(e.length!==t-1,"Failed to remove listen from subscriptions list!")},fetchInitialState:function(t,e){e=e&&this[e]||e;var n=this;if(i.isFunction(e)&&i.isFunction(t.getInitialState)){var r=t.getInitialState();r&&i.isFunction(r.then)?r.then(function(){e.apply(n,arguments)}):e.call(this,r)}},joinTrailing:r("last"),joinLeading:r("first"),joinConcat:r("all"),joinStrict:r("strict")}},176:function(t,e,n){"use strict";function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function r(t,n){return n=n||"on",n+e.capitalize(t)}function s(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function o(t){if(!s(t))return t;for(var e,n,i=1,r=arguments.length;r>i;i++){e=arguments[i];for(n in e)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o)}else t[n]=e[n]}return t}function a(t){return"function"==typeof t}function c(t,e){for(var n={},i=0;i<t.length;i++)n[t[i]]=e[i];return n}function u(t){return"object"==typeof t&&"callee"in t&&"number"==typeof t.length}function l(t,e){if(t)throw Error(e||t)}Object.defineProperty(e,"__esModule",{value:!0}),e.capitalize=i,e.callbackName=r,e.isObject=s,e.extend=o,e.isFunction=a,e.object=c,e.isArguments=u,e.throwIf=l,e.EventEmitter=n(177),e.nextTick=function(t){setTimeout(t,0)}},177:function(t,e,n){"use strict";function i(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function r(){}var s="function"!=typeof Object.create?"~":!1;r.prototype._events=void 0,r.prototype.listeners=function(t,e){var n=s?s+t:t,i=this._events&&this._events[n];if(e)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var r=0,o=i.length,a=new Array(o);o>r;r++)a[r]=i[r].fn;return a},r.prototype.emit=function(t,e,n,i,r,o){var a=s?s+t:t;if(!this._events||!this._events[a])return!1;var c,u,l=this._events[a],h=arguments.length;if("function"==typeof l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),h){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,n),!0;case 4:return l.fn.call(l.context,e,n,i),!0;case 5:return l.fn.call(l.context,e,n,i,r),!0;case 6:return l.fn.call(l.context,e,n,i,r,o),!0}for(u=1,c=new Array(h-1);h>u;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var f,p=l.length;for(u=0;p>u;u++)switch(l[u].once&&this.removeListener(t,l[u].fn,void 0,!0),h){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,e);break;case 3:l[u].fn.call(l[u].context,e,n);break;default:if(!c)for(f=1,c=new Array(h-1);h>f;f++)c[f-1]=arguments[f];l[u].fn.apply(l[u].context,c)}}return!0},r.prototype.on=function(t,e,n){var r=new i(e,n||this),o=s?s+t:t;return this._events||(this._events=s?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.once=function(t,e,n){var r=new i(e,n||this,!0),o=s?s+t:t;return this._events||(this._events=s?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.removeListener=function(t,e,n,i){var r=s?s+t:t;if(!this._events||!this._events[r])return this;var o=this._events[r],a=[];if(e)if(o.fn)(o.fn!==e||i&&!o.once||n&&o.context!==n)&&a.push(o);else for(var c=0,u=o.length;u>c;c++)(o[c].fn!==e||i&&!o[c].once||n&&o[c].context!==n)&&a.push(o[c]);return a.length?this._events[r]=1===a.length?a[0]:a:delete this._events[r],this},r.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[s?s+t:t]:this._events=s?{}:Object.create(null),this):this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.prefixed=s,t.exports=r},178:function(t,e,n){"use strict";function i(t,e,n){return function(){var i,r=n.subscriptions,s=r?r.indexOf(t):-1;for(c.throwIf(-1===s,"Tried to remove join already gone from subscriptions list!"),i=0;i<e.length;i++)e[i]();r.splice(s,1)}}function r(t){t.listenablesEmitted=new Array(t.numberOfListenables),t.args=new Array(t.numberOfListenables)}function s(t,e){return function(){var n=u.call(arguments);if(e.listenablesEmitted[t])switch(e.strategy){case"strict":throw new Error("Strict join failed because listener triggered twice.");case"last":e.args[t]=n;break;case"all":e.args[t].push(n)}else e.listenablesEmitted[t]=!0,e.args[t]="all"===e.strategy?[n]:n;o(e)}}function o(t){for(var e=0;e<t.numberOfListenables;e++)if(!t.listenablesEmitted[e])return;t.callback.apply(t.listener,t.args),r(t)}var a=n(179),c=n(176),u=Array.prototype.slice,l={strict:"joinStrict",first:"joinLeading",last:"joinTrailing",all:"joinConcat"};e.staticJoinCreator=function(t){return function(){var e=u.call(arguments);return a({init:function(){this[l[t]].apply(this,e.concat("triggerAsync"))}})}},e.instanceJoinCreator=function(t){return function(){c.throwIf(arguments.length<2,"Cannot create a join with less than 2 listenables!");var e,n,o=u.call(arguments),a=o.pop(),l=o.length,h={numberOfListenables:l,callback:this[a]||a,listener:this,strategy:t},f=[];for(e=0;l>e;e++)c.throwIf(this.validateListening(o[e]));for(e=0;l>e;e++)f.push(o[e].listen(s(e,h),this));return r(h),n={listenable:o},n.stop=i(n,f,this),this.subscriptions=(this.subscriptions||[]).concat(n),n}}},179:function(t,e,n){"use strict";var i=n(176),r=n(180),s=n(181),o=n(182),a={preEmit:1,shouldEmit:1};t.exports=function(t){function e(){var e,n=0;if(this.subscriptions=[],this.emitter=new i.EventEmitter,this.eventLabel="change",o(this,t),this.init&&i.isFunction(this.init)&&this.init(),this.listenables)for(e=[].concat(this.listenables);n<e.length;n++)this.listenToMany(e[n])}var c=n(183),u=n(184),l=n(175);t=t||{};for(var h in c)if(!a[h]&&(u[h]||l[h]))throw new Error("Cannot override API method "+h+" in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");for(var f in t)if(!a[f]&&(u[f]||l[f]))throw new Error("Cannot override API method "+f+" in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");t=s(t),i.extend(e.prototype,l,u,c,t);var p=new e;return r.createdStores.push(p),p}},180:function(t,e){"use strict";e.createdStores=[],e.createdActions=[],e.reset=function(){for(;e.createdStores.length;)e.createdStores.pop();for(;e.createdActions.length;)e.createdActions.pop()}},181:function(t,e,n){"use strict";var i=n(176);t.exports=function(t){var e={init:[],preEmit:[],shouldEmit:[]},n=function r(t){var n={};return t.mixins&&t.mixins.forEach(function(t){i.extend(n,r(t))}),i.extend(n,t),Object.keys(e).forEach(function(n){t.hasOwnProperty(n)&&e[n].push(t[n])}),n}(t);return e.init.length>1&&(n.init=function(){var t=arguments;e.init.forEach(function(e){e.apply(this,t)},this)}),e.preEmit.length>1&&(n.preEmit=function(){return e.preEmit.reduce(function(t,e){var n=e.apply(this,t);return void 0===n?t:[n]}.bind(this),arguments)}),e.shouldEmit.length>1&&(n.shouldEmit=function(){var t=arguments;return!e.shouldEmit.some(function(e){return!e.apply(this,t)},this)}),Object.keys(e).forEach(function(t){1===e[t].length&&(n[t]=e[t][0])}),n}},182:function(t,e){"use strict";t.exports=function(t,e){for(var n in e)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var i=Object.getOwnPropertyDescriptor(e,n);if(!i.value||"function"!=typeof i.value||!e.hasOwnProperty(n))continue;t[n]=e[n].bind(t)}else{var r=e[n];if("function"!=typeof r||!e.hasOwnProperty(n))continue;t[n]=r.bind(t)}return t}},183:function(t,e){"use strict";t.exports={}},184:function(t,e,n){"use strict";var i=n(176);t.exports={preEmit:function(){},shouldEmit:function(){return!0},listen:function(t,e){e=e||this;var n=function(n){r||t.apply(e,n)},i=this,r=!1;return this.emitter.addListener(this.eventLabel,n),function(){r=!0,i.emitter.removeListener(i.eventLabel,n)}},trigger:function(){var t=arguments,e=this.preEmit.apply(this,t);t=void 0===e?t:i.isArguments(e)?e:[].concat(e),this.shouldEmit.apply(this,t)&&this.emitter.emit(this.eventLabel,t)},triggerAsync:function(){var t=arguments,e=this;i.nextTick(function(){e.trigger.apply(e,t)})},deferWith:function(t){var e=this.trigger,n=this,i=function(){e.apply(n,arguments)};this.trigger=function(){t.apply(n,[i].concat([].splice.call(arguments,0)))}}}},185:function(t,e,n){"use strict";var i=n(176),r=n(174),s=n(184),o=n(180),a={preEmit:1,shouldEmit:1},c=function u(t){t=t||{},i.isObject(t)||(t={actionName:t});for(var e in r)if(!a[e]&&s[e])throw new Error("Cannot override API method "+e+" in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");for(var n in t)if(!a[n]&&s[n])throw new Error("Cannot override API method "+n+" in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");t.children=t.children||[],t.asyncResult&&(t.children=t.children.concat(["completed","failed"]));for(var c=0,l={};c<t.children.length;c++){var h=t.children[c];l[h]=u(h)}var f=i.extend({eventLabel:"action",emitter:new i.EventEmitter,_isAction:!0},s,r,t),p=function d(){var t=d.sync?"trigger":"triggerAsync";return d[t].apply(d,arguments)};return i.extend(p,l,f),o.createdActions.push(p),p};t.exports=c},186:function(t,e,n){var i=n(175),r=n(187),s=n(176);t.exports=function(t,e){return{getInitialState:function(){return s.isFunction(t.getInitialState)?void 0===e?t.getInitialState():s.object([e],[t.getInitialState()]):{}},componentDidMount:function(){s.extend(this,i);var n=this,r=void 0===e?this.setState:function(t){"undefined"!=typeof n.isMounted&&n.isMounted()!==!0||n.setState(s.object([e],[t]))};this.listenTo(t,r)},componentWillUnmount:r.componentWillUnmount}}},187:function(t,e,n){var i=n(176),r=n(175);t.exports=i.extend({componentWillUnmount:r.stopListeningToAll},r)},188:function(t,e,n){var i=n(175),r=n(187),s=n(176);t.exports=function(t,e,n){return n=s.isFunction(e)?e:n,{getInitialState:function(){if(s.isFunction(t.getInitialState)){if(s.isFunction(e))return n.call(this,t.getInitialState());var i=n.call(this,t.getInitialState());return"undefined"!=typeof i?s.object([e],[i]):{}}return{}},componentDidMount:function(){s.extend(this,i);var r=this,o=function(t){if(s.isFunction(e))r.setState(n.call(r,t));else{var i=n.call(r,t);r.setState(s.object([e],[i]))}};this.listenTo(t,o)},componentWillUnmount:r.componentWillUnmount}}},189:function(t,e,n){var i=n(175);t.exports=function(t,e,n){return{componentDidMount:function(){for(var r in i)if(this[r]!==i[r]){if(this[r])throw"Can't have other property '"+r+"' when using Reflux.listenTo!";this[r]=i[r]}this.listenTo(t,e,n)},componentWillUnmount:i.stopListeningToAll}}},190:function(t,e,n){var i=n(175);t.exports=function(t){return{componentDidMount:function(){for(var e in i)if(this[e]!==i[e]){if(this[e])throw"Can't have other property '"+e+"' when using Reflux.listenToMany!";this[e]=i[e]}this.listenToMany(t)},componentWillUnmount:i.stopListeningToAll}}},191:function(t,e,n){"use strict";var i=n(172),r=i.createActions(["getStatus","showPrompt","hidePrompt"]);t.exports=r},192:function(t,e,n){"use strict";var i=n(172),r=n(191),s=n(193),o=n(196),a=i.createStore({listenables:r,onGetStatus:function(){var t=this;s.get("/dashboard").set("Content-Type","application/json").use(o).end(function(e,n){var i;n.body.isOverTime&&(i="overTime",n.body.isLast&&(i="isFinished")),t.trigger({puzzleEnabled:!n.body.isPaperCommited,homeworkEnabled:n.body.isPaperCommited,isOverTime:n.body.isOverTime,isFinished:n.body.isFinished,status:i})})}});t.exports=a},193:function(t,e,n){function i(){}function r(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function s(t){return t===Object(t)}function o(t){if(!s(t))return t;var e=[];for(var n in t)null!=t[n]&&a(e,n,t[n]);return e.join("&")}function a(t,e,n){return Array.isArray(n)?n.forEach(function(n){a(t,e,n)}):void t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))}function c(t){for(var e,n,i={},r=t.split("&"),s=0,o=r.length;o>s;++s)n=r[s],e=n.split("="),i[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return i}function u(t){var e,n,i,r,s=t.split(/\r?\n/),o={};s.pop();for(var a=0,c=s.length;c>a;++a)n=s[a],e=n.indexOf(":"),i=n.slice(0,e).toLowerCase(),r=g(n.slice(e+1)),o[i]=r;return o}function l(t){return/[\/+]json\b/.test(t)}function h(t){return t.split(/ *; */).shift()}function f(t){return E(t.split(/ *; */),function(t,e){var n=e.split(/ *= */),i=n.shift(),r=n.shift();return i&&r&&(t[i]=r),t},{})}function p(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function d(t,e){var n=this;b.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new p(n)}catch(i){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=i,t.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,n.callback(t)}if(n.emit("response",e),t)return n.callback(t,e);if(e.status>=200&&e.status<300)return n.callback(t,e);var r=new Error(e.statusText||"Unsuccessful HTTP response");r.original=t,r.response=e,r.status=e.status,n.callback(r,e)})}function v(t,e){return"function"==typeof e?new d("GET",t).end(e):1==arguments.length?new d("GET",t):new d(t,e)}function m(t,e){var n=v("DELETE",t);return e&&n.end(e),n}var y,b=n(194),E=n(195);y="undefined"!=typeof window?window:"undefined"!=typeof self?self:this,v.getXHR=function(){if(!(!y.XMLHttpRequest||y.location&&"file:"==y.location.protocol&&y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var g="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};v.serializeObject=o,v.parseString=c,v.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},v.serialize={"application/x-www-form-urlencoded":o,"application/json":JSON.stringify},v.parse={"application/x-www-form-urlencoded":c,"application/json":JSON.parse},p.prototype.get=function(t){return this.header[t.toLowerCase()]},p.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=h(e);var n=f(e);for(var i in n)this[i]=n[i]},p.prototype.parseBody=function(t){var e=v.parse[this.type];return e&&t&&(t.length||t instanceof Object)?e(t):null},p.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},p.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,i="cannot "+e+" "+n+" ("+this.status+")",r=new Error(i);return r.status=this.status,r.method=e,r.url=n,r},v.Response=p,b(d.prototype),d.prototype.use=function(t){return t(this),this},d.prototype.timeout=function(t){return this._timeout=t,this},d.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},d.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},d.prototype.set=function(t,e){if(s(t)){for(var n in t)this.set(n,t[n]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},d.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},d.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},d.prototype.type=function(t){return this.set("Content-Type",v.types[t]||t),this},d.prototype.parse=function(t){return this._parser=t,this},d.prototype.accept=function(t){return this.set("Accept",v.types[t]||t),this},d.prototype.auth=function(t,e){var n=btoa(t+":"+e);return this.set("Authorization","Basic "+n),this},d.prototype.query=function(t){return"string"!=typeof t&&(t=o(t)),t&&this._query.push(t),this},d.prototype.field=function(t,e){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e),this},d.prototype.attach=function(t,e,n){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e,n),this},d.prototype.send=function(t){var e=s(t),n=this.getHeader("Content-Type");if(e&&s(this._data))for(var i in t)this._data[i]=t[i];else"string"==typeof t?(n||this.type("form"),n=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||r(t)?this:(n||this.type("json"),this)},d.prototype.callback=function(t,e){var n=this._callback;this.clearTimeout(),n(t,e)},d.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},d.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},d.prototype.withCredentials=function(){return this._withCredentials=!0,this},d.prototype.end=function(t){var e=this,n=this.xhr=v.getXHR(),s=this._query.join("&"),o=this._timeout,a=this._formData||this._data;this._callback=t||i,n.onreadystatechange=function(){if(4==n.readyState){var t;try{t=n.status}catch(i){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var c=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.emit("progress",t)};this.hasListeners("progress")&&(n.onprogress=c);try{n.upload&&this.hasListeners("progress")&&(n.upload.onprogress=c)}catch(u){}if(o&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},o)),s&&(s=v.serializeObject(s),this.url+=~this.url.indexOf("?")?"&"+s:"?"+s),n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!r(a)){var h=this.getHeader("Content-Type"),f=this._parser||v.serialize[h?h.split(";")[0]:""];!f&&l(h)&&(f=v.serialize["application/json"]),f&&(a=f(a))}for(var p in this.header)null!=this.header[p]&&n.setRequestHeader(p,this.header[p]);return this.emit("request",this),n.send("undefined"!=typeof a?a:null),this},d.prototype.then=function(t,e){return this.end(function(n,i){n?e(n):t(i)})},v.Request=d,v.get=function(t,e,n){var i=v("GET",t);return"function"==typeof e&&(n=e,e=null),e&&i.query(e),n&&i.end(n),i},v.head=function(t,e,n){var i=v("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},v.del=m,v["delete"]=m,v.patch=function(t,e,n){var i=v("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},v.post=function(t,e,n){var i=v("POST",t);return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},v.put=function(t,e,n){var i=v("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},t.exports=v},194:function(t,e){function n(t){return t?i(t):void 0}function i(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){i.off(t,n),e.apply(this,arguments)}var i=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var i,r=0;r<n.length;r++)if(i=n[r],i===e||i.fn===e){n.splice(r,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var i=0,r=n.length;r>i;++i)n[i].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},195:function(t,e){t.exports=function(t,e,n){for(var i=0,r=t.length,s=3==arguments.length?n:t[i++];r>i;)s=e.call(null,s,t[i],++i,t);return s}},196:function(t,e,n){(function(e){"use strict";function i(){var t=document.createElement("DIV");t.setAttribute("id","alert"),document.body.appendChild(t),s.render(e.createElement("div",{className:"alert alert-danger alert-dismissible text-center fade in",id:"alert",role:"alert"},e.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},e.createElement("span",{"aria-hidden":"true"},"×")),e.createElement("span",null,"哦!糟了!"),e.createElement("span",null,"看起来我们的服务器出了一些问题!")),document.getElementById("alert"))}var r=n(197),s=n(13),o=function(t){t.on("response",function(t){t.statusCode!==r.httpCode.INTERNAL_SERVER_ERROR&&t.status!==r.httpCode.INTERNAL_SERVER_ERROR||i()})};t.exports=o}).call(e,n(159))},197:function(t,e){"use strict";var n={httpCode:{OK:200,CREATED:201,ACCEPTED:202,NOT_FOUND:404,UNAUTHORIZED:401,BAD_REQUEST:400,PRECONDITION_FAILED:412,FORBIDDEN:403,INTERNAL_SERVER_ERROR:500},time:{MINUTE_PER_HOUR:60,SECONDS_PER_MINUTE:60,HOURS_PER_DAY:24,MILLISECOND_PER_SECONDS:1e3},homeworkQuizzesStatus:{LOCKED:1,ACTIVE:2,PROGRESS:3,SUCCESS:4,ERROR:5,LINE_UP:6},backConstant:{MOBILE_PHONE_LENGTH:11,PASSWORD_MIN_LENGTH:8,PASSWORD_MAX_LENGTH:16,SUCCESSFUL_STATUS:200,FAILING_STATUS:404,SERVER_ERROR:500}};t.exports=n},235:function(t,e){},237:function(t,e,n){(function(e){"use strict";var i=n(191),r=n(192),s=n(172),o=e.createClass({displayName:"Info",mixins:[s.connect(r)],getInitialState:function(){return{status:""}},componentDidMount:function(){i.getStatus()},render:function(){return e.createElement("div",{className:"dialog"},"overTime"===this.state.status?e.createElement("div",null,e.createElement("h1",null,"很抱歉,您已经无法答题了!"),e.createElement("span",null,"当一道编程题超过七天还没有通过的话,我们会认为您没有通过.")):e.createElement("div",null,e.createElement("h1",null,"恭喜您,您已经做完所有题目了!"),e.createElement("span",null,"我们会在之后的几个工作日之内通知您,请注意留意您的邮箱.")),e.createElement("p",null,e.createElement("a",{href:"dashboard.html"},"点击返回")))}});t.exports=o}).call(e,n(159))}});