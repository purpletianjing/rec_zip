webpackJsonp([1],[function(t,e,n){(function(t,e){"use strict";var r=n(171),i=n(198),o=n(199);n(202);var s=n(204),a=n(225),c=n(234);t.render(e.createElement("div",null,e.createElement("header",null,e.createElement(i,null,e.createElement(o,null))),e.createElement(r,null,e.createElement(s,null,e.createElement(a,{name:"logic"}),e.createElement(c,null),e.createElement(a,{name:"homework"})))),document.getElementById("dashboard-container"))}).call(e,n(13),n(159))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){(function(e){"use strict";var r=n(172),i=n(191),o=n(192),s=e.createClass({displayName:"Dashboard",mixins:[r.connect(o)],componentDidMount:function(){i.getStatus()},render:function(){return e.createElement("div",{className:"app-list container-fluid"},this.props.children)}});t.exports=s}).call(e,n(159))},function(t,e,n){var r=n(173);r.connect=n(186),r.connectFilter=n(188),r.ListenerMixin=n(187),r.listenTo=n(189),r.listenToMany=n(190),t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={version:{"reflux-core":"0.3.0"}};r.ActionMethods=n(174),r.ListenerMethods=n(175),r.PublisherMethods=n(184),r.StoreMethods=n(183),r.createAction=n(185),r.createStore=n(179);var i=n(178).staticJoinCreator;r.joinTrailing=r.all=i("last"),r.joinLeading=i("first"),r.joinStrict=i("strict"),r.joinConcat=i("all");var o=r.utils=n(176);r.EventEmitter=o.EventEmitter,r.Promise=o.Promise,r.createActions=function(){var t=function(t,e){Object.keys(t).forEach(function(n){var i=t[n];e[n]=r.createAction(i)})};return function(e){var n={};return e instanceof Array?e.forEach(function(e){o.isObject(e)?t(e,n):n[e]=r.createAction(e)}):t(e,n),n}}(),r.setEventEmitter=function(t){r.EventEmitter=o.EventEmitter=t},r.nextTick=function(t){o.nextTick=t},r.use=function(t){t(r)},r.__keep=n(180),Function.prototype.bind||console.error("Function.prototype.bind not available. ES5 shim required. https://github.com/spoike/refluxjs#es5"),e["default"]=r,t.exports=e["default"]},function(t,e){"use strict";t.exports={}},function(t,e,n){"use strict";var r=n(176),i=n(178).instanceJoinCreator,o=function(t){for(var e,n=0,r={};n<(t.children||[]).length;++n)e=t.children[n],t[e]&&(r[e]=t[e]);return r},s=function a(t){var e={};for(var n in t){var i=t[n],s=o(i),c=a(s);e[n]=i;for(var u in c){var l=c[u];e[n+r.capitalize(u)]=l}}return e};t.exports={hasListener:function(t){for(var e,n,r,i=0;i<(this.subscriptions||[]).length;++i)for(r=[].concat(this.subscriptions[i].listenable),e=0;e<r.length;e++)if(n=r[e],n===t||n.hasListener&&n.hasListener(t))return!0;return!1},listenToMany:function(t){var e=s(t);for(var n in e){var i=r.callbackName(n),o=this[i]?i:this[n]?n:void 0;o&&this.listenTo(e[n],o,this[i+"Default"]||this[o+"Default"]||o)}},validateListening:function(t){return t===this?"Listener is not able to listen to itself":r.isFunction(t.listen)?t.hasListener&&t.hasListener(this)?"Listener cannot listen to this listenable because of circular loop":void 0:t+" is missing a listen method"},listenTo:function(t,e,n){var i,o,s,a=this.subscriptions=this.subscriptions||[];return r.throwIf(this.validateListening(t)),this.fetchInitialState(t,n),i=t.listen(this[e]||e,this),o=function(){var t=a.indexOf(s);r.throwIf(-1===t,"Tried to remove listen already gone from subscriptions list!"),a.splice(t,1),i()},s={stop:o,listenable:t},a.push(s),s},stopListeningTo:function(t){for(var e,n=0,i=this.subscriptions||[];n<i.length;n++)if(e=i[n],e.listenable===t)return e.stop(),r.throwIf(-1!==i.indexOf(e),"Failed to remove listen from subscriptions list!"),!0;return!1},stopListeningToAll:function(){for(var t,e=this.subscriptions||[];t=e.length;)e[0].stop(),r.throwIf(e.length!==t-1,"Failed to remove listen from subscriptions list!")},fetchInitialState:function(t,e){e=e&&this[e]||e;var n=this;if(r.isFunction(e)&&r.isFunction(t.getInitialState)){var i=t.getInitialState();i&&r.isFunction(i.then)?i.then(function(){e.apply(n,arguments)}):e.call(this,i)}},joinTrailing:i("last"),joinLeading:i("first"),joinConcat:i("all"),joinStrict:i("strict")}},function(t,e,n){"use strict";function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function i(t,n){return n=n||"on",n+e.capitalize(t)}function o(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function s(t){if(!o(t))return t;for(var e,n,r=1,i=arguments.length;i>r;r++){e=arguments[r];for(n in e)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s)}else t[n]=e[n]}return t}function a(t){return"function"==typeof t}function c(t,e){for(var n={},r=0;r<t.length;r++)n[t[r]]=e[r];return n}function u(t){return"object"==typeof t&&"callee"in t&&"number"==typeof t.length}function l(t,e){if(t)throw Error(e||t)}Object.defineProperty(e,"__esModule",{value:!0}),e.capitalize=r,e.callbackName=i,e.isObject=o,e.extend=s,e.isFunction=a,e.object=c,e.isArguments=u,e.throwIf=l,e.EventEmitter=n(177),e.nextTick=function(t){setTimeout(t,0)}},function(t,e,n){"use strict";function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function i(){}var o="function"!=typeof Object.create?"~":!1;i.prototype._events=void 0,i.prototype.listeners=function(t,e){var n=o?o+t:t,r=this._events&&this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var i=0,s=r.length,a=new Array(s);s>i;i++)a[i]=r[i].fn;return a},i.prototype.emit=function(t,e,n,r,i,s){var a=o?o+t:t;if(!this._events||!this._events[a])return!1;var c,u,l=this._events[a],f=arguments.length;if("function"==typeof l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,n),!0;case 4:return l.fn.call(l.context,e,n,r),!0;case 5:return l.fn.call(l.context,e,n,r,i),!0;case 6:return l.fn.call(l.context,e,n,r,i,s),!0}for(u=1,c=new Array(f-1);f>u;u++)c[u-1]=arguments[u];l.fn.apply(l.context,c)}else{var h,p=l.length;for(u=0;p>u;u++)switch(l[u].once&&this.removeListener(t,l[u].fn,void 0,!0),f){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,e);break;case 3:l[u].fn.call(l[u].context,e,n);break;default:if(!c)for(h=1,c=new Array(f-1);f>h;h++)c[h-1]=arguments[h];l[u].fn.apply(l[u].context,c)}}return!0},i.prototype.on=function(t,e,n){var i=new r(e,n||this),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):this._events[s]=i,this},i.prototype.once=function(t,e,n){var i=new r(e,n||this,!0),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):this._events[s]=i,this},i.prototype.removeListener=function(t,e,n,r){var i=o?o+t:t;if(!this._events||!this._events[i])return this;var s=this._events[i],a=[];if(e)if(s.fn)(s.fn!==e||r&&!s.once||n&&s.context!==n)&&a.push(s);else for(var c=0,u=s.length;u>c;c++)(s[c].fn!==e||r&&!s[c].once||n&&s[c].context!==n)&&a.push(s[c]);return a.length?this._events[i]=1===a.length?a[0]:a:delete this._events[i],this},i.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[o?o+t:t]:this._events=o?{}:Object.create(null),this):this},i.prototype.off=i.prototype.removeListener,i.prototype.addListener=i.prototype.on,i.prototype.setMaxListeners=function(){return this},i.prefixed=o,t.exports=i},function(t,e,n){"use strict";function r(t,e,n){return function(){var r,i=n.subscriptions,o=i?i.indexOf(t):-1;for(c.throwIf(-1===o,"Tried to remove join already gone from subscriptions list!"),r=0;r<e.length;r++)e[r]();i.splice(o,1)}}function i(t){t.listenablesEmitted=new Array(t.numberOfListenables),t.args=new Array(t.numberOfListenables)}function o(t,e){return function(){var n=u.call(arguments);if(e.listenablesEmitted[t])switch(e.strategy){case"strict":throw new Error("Strict join failed because listener triggered twice.");case"last":e.args[t]=n;break;case"all":e.args[t].push(n)}else e.listenablesEmitted[t]=!0,e.args[t]="all"===e.strategy?[n]:n;s(e)}}function s(t){for(var e=0;e<t.numberOfListenables;e++)if(!t.listenablesEmitted[e])return;t.callback.apply(t.listener,t.args),i(t)}var a=n(179),c=n(176),u=Array.prototype.slice,l={strict:"joinStrict",first:"joinLeading",last:"joinTrailing",all:"joinConcat"};e.staticJoinCreator=function(t){return function(){var e=u.call(arguments);return a({init:function(){this[l[t]].apply(this,e.concat("triggerAsync"))}})}},e.instanceJoinCreator=function(t){return function(){c.throwIf(arguments.length<2,"Cannot create a join with less than 2 listenables!");var e,n,s=u.call(arguments),a=s.pop(),l=s.length,f={numberOfListenables:l,callback:this[a]||a,listener:this,strategy:t},h=[];for(e=0;l>e;e++)c.throwIf(this.validateListening(s[e]));for(e=0;l>e;e++)h.push(s[e].listen(o(e,f),this));return i(f),n={listenable:s},n.stop=r(n,h,this),this.subscriptions=(this.subscriptions||[]).concat(n),n}}},function(t,e,n){"use strict";var r=n(176),i=n(180),o=n(181),s=n(182),a={preEmit:1,shouldEmit:1};t.exports=function(t){function e(){var e,n=0;if(this.subscriptions=[],this.emitter=new r.EventEmitter,this.eventLabel="change",s(this,t),this.init&&r.isFunction(this.init)&&this.init(),this.listenables)for(e=[].concat(this.listenables);n<e.length;n++)this.listenToMany(e[n])}var c=n(183),u=n(184),l=n(175);t=t||{};for(var f in c)if(!a[f]&&(u[f]||l[f]))throw new Error("Cannot override API method "+f+" in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");for(var h in t)if(!a[h]&&(u[h]||l[h]))throw new Error("Cannot override API method "+h+" in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead.");t=o(t),r.extend(e.prototype,l,u,c,t);var p=new e;return i.createdStores.push(p),p}},function(t,e){"use strict";e.createdStores=[],e.createdActions=[],e.reset=function(){for(;e.createdStores.length;)e.createdStores.pop();for(;e.createdActions.length;)e.createdActions.pop()}},function(t,e,n){"use strict";var r=n(176);t.exports=function(t){var e={init:[],preEmit:[],shouldEmit:[]},n=function i(t){var n={};return t.mixins&&t.mixins.forEach(function(t){r.extend(n,i(t))}),r.extend(n,t),Object.keys(e).forEach(function(n){t.hasOwnProperty(n)&&e[n].push(t[n])}),n}(t);return e.init.length>1&&(n.init=function(){var t=arguments;e.init.forEach(function(e){e.apply(this,t)},this)}),e.preEmit.length>1&&(n.preEmit=function(){return e.preEmit.reduce(function(t,e){var n=e.apply(this,t);return void 0===n?t:[n]}.bind(this),arguments)}),e.shouldEmit.length>1&&(n.shouldEmit=function(){var t=arguments;return!e.shouldEmit.some(function(e){return!e.apply(this,t)},this)}),Object.keys(e).forEach(function(t){1===e[t].length&&(n[t]=e[t][0])}),n}},function(t,e){"use strict";t.exports=function(t,e){for(var n in e)if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var r=Object.getOwnPropertyDescriptor(e,n);if(!r.value||"function"!=typeof r.value||!e.hasOwnProperty(n))continue;t[n]=e[n].bind(t)}else{var i=e[n];if("function"!=typeof i||!e.hasOwnProperty(n))continue;t[n]=i.bind(t)}return t}},function(t,e){"use strict";t.exports={}},function(t,e,n){"use strict";var r=n(176);t.exports={preEmit:function(){},shouldEmit:function(){return!0},listen:function(t,e){e=e||this;var n=function(n){i||t.apply(e,n)},r=this,i=!1;return this.emitter.addListener(this.eventLabel,n),function(){i=!0,r.emitter.removeListener(r.eventLabel,n)}},trigger:function(){var t=arguments,e=this.preEmit.apply(this,t);t=void 0===e?t:r.isArguments(e)?e:[].concat(e),this.shouldEmit.apply(this,t)&&this.emitter.emit(this.eventLabel,t)},triggerAsync:function(){var t=arguments,e=this;r.nextTick(function(){e.trigger.apply(e,t)})},deferWith:function(t){var e=this.trigger,n=this,r=function(){e.apply(n,arguments)};this.trigger=function(){t.apply(n,[r].concat([].splice.call(arguments,0)))}}}},function(t,e,n){"use strict";var r=n(176),i=n(174),o=n(184),s=n(180),a={preEmit:1,shouldEmit:1},c=function u(t){t=t||{},r.isObject(t)||(t={actionName:t});for(var e in i)if(!a[e]&&o[e])throw new Error("Cannot override API method "+e+" in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead.");for(var n in t)if(!a[n]&&o[n])throw new Error("Cannot override API method "+n+" in action creation. Use another method name or override it on Reflux.PublisherMethods instead.");t.children=t.children||[],t.asyncResult&&(t.children=t.children.concat(["completed","failed"]));for(var c=0,l={};c<t.children.length;c++){var f=t.children[c];l[f]=u(f)}var h=r.extend({eventLabel:"action",emitter:new r.EventEmitter,_isAction:!0},o,i,t),p=function d(){var t=d.sync?"trigger":"triggerAsync";return d[t].apply(d,arguments)};return r.extend(p,l,h),s.createdActions.push(p),p};t.exports=c},function(t,e,n){var r=n(175),i=n(187),o=n(176);t.exports=function(t,e){return{getInitialState:function(){return o.isFunction(t.getInitialState)?void 0===e?t.getInitialState():o.object([e],[t.getInitialState()]):{}},componentDidMount:function(){o.extend(this,r);var n=this,i=void 0===e?this.setState:function(t){"undefined"!=typeof n.isMounted&&n.isMounted()!==!0||n.setState(o.object([e],[t]))};this.listenTo(t,i)},componentWillUnmount:i.componentWillUnmount}}},function(t,e,n){var r=n(176),i=n(175);t.exports=r.extend({componentWillUnmount:i.stopListeningToAll},i)},function(t,e,n){var r=n(175),i=n(187),o=n(176);t.exports=function(t,e,n){return n=o.isFunction(e)?e:n,{getInitialState:function(){if(o.isFunction(t.getInitialState)){if(o.isFunction(e))return n.call(this,t.getInitialState());var r=n.call(this,t.getInitialState());return"undefined"!=typeof r?o.object([e],[r]):{}}return{}},componentDidMount:function(){o.extend(this,r);var i=this,s=function(t){if(o.isFunction(e))i.setState(n.call(i,t));else{var r=n.call(i,t);i.setState(o.object([e],[r]))}};this.listenTo(t,s)},componentWillUnmount:i.componentWillUnmount}}},function(t,e,n){var r=n(175);t.exports=function(t,e,n){return{componentDidMount:function(){for(var i in r)if(this[i]!==r[i]){if(this[i])throw"Can't have other property '"+i+"' when using Reflux.listenTo!";this[i]=r[i]}this.listenTo(t,e,n)},componentWillUnmount:r.stopListeningToAll}}},function(t,e,n){var r=n(175);t.exports=function(t){return{componentDidMount:function(){for(var e in r)if(this[e]!==r[e]){if(this[e])throw"Can't have other property '"+e+"' when using Reflux.listenToMany!";this[e]=r[e]}this.listenToMany(t)},componentWillUnmount:r.stopListeningToAll}}},function(t,e,n){"use strict";var r=n(172),i=r.createActions(["getStatus","showPrompt","hidePrompt"]);t.exports=i},function(t,e,n){"use strict";var r=n(172),i=n(191),o=n(193),s=n(196),a=r.createStore({listenables:i,onGetStatus:function(){var t=this;o.get("/dashboard").set("Content-Type","application/json").use(s).end(function(e,n){var r;n.body.isOverTime&&(r="overTime",n.body.isLast&&(r="isFinished")),t.trigger({puzzleEnabled:!n.body.isPaperCommited,homeworkEnabled:n.body.isPaperCommited,isOverTime:n.body.isOverTime,isFinished:n.body.isFinished,status:r})})}});t.exports=a},function(t,e,n){function r(){}function i(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function o(t){return t===Object(t)}function s(t){if(!o(t))return t;var e=[];for(var n in t)null!=t[n]&&a(e,n,t[n]);return e.join("&")}function a(t,e,n){return Array.isArray(n)?n.forEach(function(n){a(t,e,n)}):void t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))}function c(t){for(var e,n,r={},i=t.split("&"),o=0,s=i.length;s>o;++o)n=i[o],e=n.split("="),r[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return r}function u(t){var e,n,r,i,o=t.split(/\r?\n/),s={};o.pop();for(var a=0,c=o.length;c>a;++a)n=o[a],e=n.indexOf(":"),r=n.slice(0,e).toLowerCase(),i=E(n.slice(e+1)),s[r]=i;return s}function l(t){return/[\/+]json\b/.test(t)}function f(t){return t.split(/ *; */).shift()}function h(t){return g(t.split(/ *; */),function(t,e){var n=e.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(t[r]=i),t},{})}function p(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function d(t,e){var n=this;b.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new p(n)}catch(r){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=r,t.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,n.callback(t)}if(n.emit("response",e),t)return n.callback(t,e);if(e.status>=200&&e.status<300)return n.callback(t,e);var i=new Error(e.statusText||"Unsuccessful HTTP response");i.original=t,i.response=e,i.status=e.status,n.callback(i,e)})}function m(t,e){return"function"==typeof e?new d("GET",t).end(e):1==arguments.length?new d("GET",t):new d(t,e)}function v(t,e){var n=m("DELETE",t);return e&&n.end(e),n}var y,b=n(194),g=n(195);y="undefined"!=typeof window?window:"undefined"!=typeof self?self:this,m.getXHR=function(){if(!(!y.XMLHttpRequest||y.location&&"file:"==y.location.protocol&&y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var E="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};m.serializeObject=s,m.parseString=c,m.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},m.serialize={"application/x-www-form-urlencoded":s,"application/json":JSON.stringify},m.parse={"application/x-www-form-urlencoded":c,"application/json":JSON.parse},p.prototype.get=function(t){return this.header[t.toLowerCase()]},p.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=f(e);var n=h(e);for(var r in n)this[r]=n[r]},p.prototype.parseBody=function(t){var e=m.parse[this.type];return e&&t&&(t.length||t instanceof Object)?e(t):null},p.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},p.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,r="cannot "+e+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=e,i.url=n,i},m.Response=p,b(d.prototype),d.prototype.use=function(t){return t(this),this},d.prototype.timeout=function(t){return this._timeout=t,this},d.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},d.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},d.prototype.set=function(t,e){if(o(t)){for(var n in t)this.set(n,t[n]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},d.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},d.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},d.prototype.type=function(t){return this.set("Content-Type",m.types[t]||t),this},d.prototype.parse=function(t){return this._parser=t,this},d.prototype.accept=function(t){return this.set("Accept",m.types[t]||t),this},d.prototype.auth=function(t,e){var n=btoa(t+":"+e);return this.set("Authorization","Basic "+n),this},d.prototype.query=function(t){return"string"!=typeof t&&(t=s(t)),t&&this._query.push(t),this},d.prototype.field=function(t,e){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e),this},d.prototype.attach=function(t,e,n){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e,n),this},d.prototype.send=function(t){var e=o(t),n=this.getHeader("Content-Type");if(e&&o(this._data))for(var r in t)this._data[r]=t[r];else"string"==typeof t?(n||this.type("form"),n=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||i(t)?this:(n||this.type("json"),this)},d.prototype.callback=function(t,e){var n=this._callback;this.clearTimeout(),n(t,e)},d.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},d.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},d.prototype.withCredentials=function(){return this._withCredentials=!0,this},d.prototype.end=function(t){var e=this,n=this.xhr=m.getXHR(),o=this._query.join("&"),s=this._timeout,a=this._formData||this._data;this._callback=t||r,n.onreadystatechange=function(){if(4==n.readyState){var t;try{t=n.status}catch(r){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var c=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.emit("progress",t)};this.hasListeners("progress")&&(n.onprogress=c);try{n.upload&&this.hasListeners("progress")&&(n.upload.onprogress=c)}catch(u){}if(s&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},s)),o&&(o=m.serializeObject(o),this.url+=~this.url.indexOf("?")?"&"+o:"?"+o),n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!i(a)){var f=this.getHeader("Content-Type"),h=this._parser||m.serialize[f?f.split(";")[0]:""];!h&&l(f)&&(h=m.serialize["application/json"]),h&&(a=h(a))}for(var p in this.header)null!=this.header[p]&&n.setRequestHeader(p,this.header[p]);return this.emit("request",this),n.send("undefined"!=typeof a?a:null),this},d.prototype.then=function(t,e){return this.end(function(n,r){n?e(n):t(r)})},m.Request=d,m.get=function(t,e,n){var r=m("GET",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},m.head=function(t,e,n){var r=m("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.del=v,m["delete"]=v,m.patch=function(t,e,n){var r=m("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.post=function(t,e,n){var r=m("POST",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.put=function(t,e,n){var r=m("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},t.exports=m},function(t,e){function n(t){return t?r(t):void 0}function r(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){r.off(t,n),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var r=0,i=n.length;i>r;++r)n[r].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){t.exports=function(t,e,n){for(var r=0,i=t.length,o=3==arguments.length?n:t[r++];i>r;)o=e.call(null,o,t[r],++r,t);return o}},function(t,e,n){(function(e){"use strict";function r(){var t=document.createElement("DIV");t.setAttribute("id","alert"),document.body.appendChild(t),o.render(e.createElement("div",{className:"alert alert-danger alert-dismissible text-center fade in",id:"alert",role:"alert"},e.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},e.createElement("span",{"aria-hidden":"true"},"×")),e.createElement("span",null,"哦!糟了!"),e.createElement("span",null,"看起来我们的服务器出了一些问题!")),document.getElementById("alert"))}var i=n(197),o=n(13),s=function(t){t.on("response",function(t){t.statusCode!==i.httpCode.INTERNAL_SERVER_ERROR&&t.status!==i.httpCode.INTERNAL_SERVER_ERROR||r()})};t.exports=s}).call(e,n(159))},function(t,e){"use strict";var n={httpCode:{OK:200,CREATED:201,ACCEPTED:202,NOT_FOUND:404,UNAUTHORIZED:401,BAD_REQUEST:400,PRECONDITION_FAILED:412,FORBIDDEN:403,INTERNAL_SERVER_ERROR:500},time:{MINUTE_PER_HOUR:60,SECONDS_PER_MINUTE:60,HOURS_PER_DAY:24,MILLISECOND_PER_SECONDS:1e3},homeworkQuizzesStatus:{LOCKED:1,ACTIVE:2,PROGRESS:3,SUCCESS:4,ERROR:5,LINE_UP:6},backConstant:{MOBILE_PHONE_LENGTH:11,PASSWORD_MIN_LENGTH:8,PASSWORD_MAX_LENGTH:16,SUCCESSFUL_STATUS:200,FAILING_STATUS:404,SERVER_ERROR:500}};t.exports=n},function(t,e,n){(function(e){"use strict";var n=e.createClass({displayName:"Navigation",render:function(){return e.createElement("nav",null,e.createElement("div",{className:"brand"},e.createElement("a",{href:"/"},e.createElement("strong",null,"思沃特训营"))),this.props.children)}});t.exports=n}).call(e,n(159))},function(t,e,n){(function(e){"use strict";var r=n(200),i=n(201),o=n(172),s=e.createClass({displayName:"GetAccount",mixins:[o.connect(i)],getInitialState:function(){return{isLoged:!1,account:""}},componentDidMount:function(){r.loadAccount()},render:function(){return e.createElement("div",{className:"header-right"},e.createElement("div",{className:this.state.isLoged?"hide":""},e.createElement("a",{href:"register.html#login",className:"col-md-6 col-sm-6"},"登录"),e.createElement("a",{href:"register.html#register",className:"col-md-6 col-sm-6"},"注册")),e.createElement("div",{className:this.state.isLoged?"dropdown":"hide"},e.createElement("div",{className:"dropdown-style",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},this.state.account,e.createElement("span",{className:"caret"})),e.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},e.createElement("li",null,e.createElement("a",{href:"user-center.html"},"个人中心")),e.createElement("li",null,e.createElement("a",{href:"dashboard.html"},"控制台")),e.createElement("li",{role:"separator",className:"divider"}),e.createElement("li",null,e.createElement("a",{href:"/logout"},"退出")))))}});t.exports=s}).call(e,n(159))},function(t,e,n){"use strict";var r=n(172),i=r.createActions(["loadAccount"]);t.exports=i},function(t,e,n){"use strict";var r=n(172),i=n(200),o=n(193),s=n(196),a=n(197),c=r.createStore({listenables:[i],onLoadAccount:function(){var t=this;o.get("/reuse/account").set("Content-Type","application/json").use(s).end(function(e,n){if(!e)if(n.body.status===a.httpCode.OK)t.trigger({account:n.body.account,isLoged:!0});else{if(n.body.status!==a.httpCode.ACCEPTED)return;t.trigger({account:"",isLoged:!1})}})}});t.exports=c},function(t,e){},,function(t,e,n){"use strict";var r=n(205)["default"],i=n(221)["default"];e.__esModule=!0;var o=n(159),s=i(o),a=n(222),c=i(a),u=n(223),l=i(u),f=s["default"].createClass({displayName:"Row",propTypes:{componentClass:l["default"]},getDefaultProps:function(){return{componentClass:"div"}},render:function(){var t=this.props.componentClass;return s["default"].createElement(t,r({},this.props,{className:c["default"](this.props.className,"row")}),this.props.children)}});e["default"]=f,t.exports=e["default"]},function(t,e,n){"use strict";var r=n(206)["default"];e["default"]=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e.__esModule=!0},function(t,e,n){t.exports={"default":n(207),__esModule:!0}},function(t,e,n){n(208),t.exports=n(211).Object.assign},function(t,e,n){var r=n(209);r(r.S+r.F,"Object",{assign:n(214)})},function(t,e,n){var r=n(210),i=n(211),o=n(212),s="prototype",a=function(t,e,n){var c,u,l,f=t&a.F,h=t&a.G,p=t&a.S,d=t&a.P,m=t&a.B,v=t&a.W,y=h?i:i[e]||(i[e]={}),b=h?r:p?r[e]:(r[e]||{})[s];h&&(n=e);for(c in n)u=!f&&b&&c in b,u&&c in y||(l=u?b[c]:n[c],y[c]=h&&"function"!=typeof b[c]?n[c]:m&&u?o(l,r):v&&b[c]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[s]=t[s],e}(l):d&&"function"==typeof l?o(Function.call,l):l,d&&((y[s]||(y[s]={}))[c]=l))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(213);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(215),i=n(216),o=n(218);t.exports=n(220)(function(){var t=Object.assign,e={},n={},r=Symbol(),i="abcdefghijklmnopqrst";return e[r]=7,i.split("").forEach(function(t){n[t]=t}),7!=t({},e)[r]||Object.keys(t({},n)).join("")!=i})?function(t,e){for(var n=i(t),s=arguments,a=s.length,c=1,u=r.getKeys,l=r.getSymbols,f=r.isEnum;a>c;)for(var h,p=o(s[c++]),d=l?u(p).concat(l(p)):u(p),m=d.length,v=0;m>v;)f.call(p,h=d[v++])&&(n[h]=p[h]);return n}:Object.assign},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){var r=n(217);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(219);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(t,e,n){var r,i;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===i)for(var s in r)o.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof t&&t.exports?t.exports=n:(r=[],i=function(){return n}.apply(e,r),!(void 0!==i&&(t.exports=i)))}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e,n){var r=a.errMsg(t,e,n,". Expected an Element `type`");if("function"!=typeof t[e]){if(s["default"].isValidElement(t[e]))return new Error(r+", not an actual Element");if("string"!=typeof t[e])return new Error(r+" such as a tag name or return value of React.createClass(...)")}}e.__esModule=!0;var o=n(159),s=r(o),a=n(224);e["default"]=a.createChainableTypeChecker(i),t.exports=e["default"]},function(t,e){"use strict";function n(t,e,n,r){return"Invalid prop '"+e+"' of value '"+t[e]+"'"+(" supplied to '"+n+"'"+r)}function r(t){function e(e,n,r,i){return i=i||"<<anonymous>>",null!=n[r]?t(n,r,i):e?new Error("Required prop '"+r+"' was not specified in '"+i+"'."):void 0}var n=e.bind(null,!1);return n.isRequired=e.bind(null,!0),n}e.__esModule=!0,e.errMsg=n,e.createChainableTypeChecker=r},function(t,e,n){(function(e){"use strict";var r=(n(226),n(172)),i=n(192),o=e.createClass({displayName:"DashboardIcon",mixins:[r.connect(i)],getInitialState:function(){return{puzzleEnabled:!0,homeworkEnabled:!1,isOverTime:!1,isFinished:""}},render:function(){var t=this.state.puzzleEnabled===!0?"start.html":"#",n=this.state.homeworkEnabled===!0?"homework.html":"#";n=this.state.isOverTime||this.state.isFinished?"deadline.html":n;var r=this.state.puzzleEnabled===!0?"enable":"disable",i=this.state.homeworkEnabled===!0?"enable":"disable",o={logic:{title:"逻辑题",href:t,isEnabled:r,name:"logic",glyphicon:"glyphicon-education"},homework:{title:"编程题",href:n,isEnabled:i,name:"homework",glyphicon:"glyphicon-road"}};return e.createElement("div",{className:"dashboard-icon"},e.createElement("a",{href:o[this.props.name].href,className:"icon-view"},e.createElement("div",{className:"icon-wrapper-"+o[this.props.name].isEnabled,name:o[this.props.name].name},e.createElement("div",{className:"icon-img",name:o[this.props.name].name},e.createElement("span",{className:"glyphicon "+o[this.props.name].glyphicon,"aria-hidden":"true"})),e.createElement("div",{className:"icon-name"},o[this.props.name].title))))}});t.exports=o}).call(e,n(159))},function(t,e,n){"use strict";var r=n(205)["default"],i=n(227)["default"],o=n(221)["default"];e.__esModule=!0;var s=n(159),a=o(s),c=n(222),u=o(c),l=n(231),f=o(l),h=n(223),p=o(h),d=a["default"].createClass({displayName:"Col",propTypes:{xs:a["default"].PropTypes.number,sm:a["default"].PropTypes.number,md:a["default"].PropTypes.number,lg:a["default"].PropTypes.number,xsHidden:a["default"].PropTypes.bool,smHidden:a["default"].PropTypes.bool,mdHidden:a["default"].PropTypes.bool,lgHidden:a["default"].PropTypes.bool,xsOffset:a["default"].PropTypes.number,smOffset:a["default"].PropTypes.number,mdOffset:a["default"].PropTypes.number,lgOffset:a["default"].PropTypes.number,xsPush:a["default"].PropTypes.number,smPush:a["default"].PropTypes.number,mdPush:a["default"].PropTypes.number,lgPush:a["default"].PropTypes.number,xsPull:a["default"].PropTypes.number,smPull:a["default"].PropTypes.number,mdPull:a["default"].PropTypes.number,lgPull:a["default"].PropTypes.number,componentClass:p["default"]},getDefaultProps:function(){return{componentClass:"div"}},render:function(){var t=this,e=this.props.componentClass,n={};return i(f["default"].SIZES).forEach(function(e){var r=f["default"].SIZES[e],i=r,o=r+"-";t.props[i]&&(n["col-"+o+t.props[i]]=!0),n["hidden-"+r]=t.props[r+"Hidden"],i=r+"Offset",o=r+"-offset-",t.props[i]>=0&&(n["col-"+o+t.props[i]]=!0),i=r+"Push",o=r+"-push-",t.props[i]>=0&&(n["col-"+o+t.props[i]]=!0),i=r+"Pull",o=r+"-pull-",t.props[i]>=0&&(n["col-"+o+t.props[i]]=!0)},this),a["default"].createElement(e,r({},this.props,{className:u["default"](this.props.className,n)}),this.props.children)}});e["default"]=d,t.exports=e["default"]},function(t,e,n){t.exports={"default":n(228),__esModule:!0}},function(t,e,n){n(229),t.exports=n(211).Object.keys},function(t,e,n){var r=n(216);n(230)("keys",function(t){return function(e){return t(r(e))}})},function(t,e,n){var r=n(209),i=n(211),o=n(220);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",s)}},function(t,e,n){"use strict";var r=n(206)["default"],i=n(232)["default"],o=n(227)["default"];e.__esModule=!0;var s=function(t){return r(i({values:function(){var t=this;return o(this).map(function(e){return t[e]})}}),t)},a={SIZES:{large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"},GRID_COLUMNS:12},c=s({LARGE:"large",MEDIUM:"medium",SMALL:"small",XSMALL:"xsmall"});e.Sizes=c;var u=s({SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info"});e.State=u;var l="default";e.DEFAULT=l;var f="primary";e.PRIMARY=f;var h="link";e.LINK=h;var p="inverse";e.INVERSE=p,e["default"]=a},function(t,e,n){t.exports={"default":n(233),__esModule:!0}},function(t,e,n){var r=n(215);t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){(function(e){"use strict";var n=e.createClass({displayName:"Arrow",render:function(){return e.createElement("div",{className:"dashboard-icon"},e.createElement("i",{className:"fa fa-arrow-circle-down fa-5x"}))}});t.exports=n}).call(e,n(159))}]);