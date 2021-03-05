/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

 /*
 * # Fomantic UI - 2.8.3
 * https://github.com/fomantic/Fomantic-UI
 * http://fomantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(p,h,v,b){p.isFunction=p.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},p.site=p.fn.site=function(e){var s,l,i=(new Date).getTime(),o=[],t=e,n="string"==typeof t,c=[].slice.call(arguments,1),u=p.isPlainObject(e)?p.extend(!0,{},p.site.settings,e):p.extend({},p.site.settings),a=u.namespace,d=u.error,r="module-"+a,f=p(v),m=this,g=f.data(r);return s={initialize:function(){s.instantiate()},instantiate:function(){s.verbose("Storing instance of site",s),g=s,f.data(r,s)},normalize:function(){s.fix.console(),s.fix.requestAnimationFrame()},fix:{console:function(){s.debug("Normalizing window.console"),console!==b&&console.log!==b||(s.verbose("Console not available, normalizing events"),s.disable.console()),void 0!==console.group&&void 0!==console.groupEnd&&void 0!==console.groupCollapsed||(s.verbose("Console group not available, normalizing events"),h.console.group=function(){},h.console.groupEnd=function(){},h.console.groupCollapsed=function(){}),void 0===console.markTimeline&&(s.verbose("Mark timeline not available, normalizing events"),h.console.markTimeline=function(){})},consoleClear:function(){s.debug("Disabling programmatic console clearing"),h.console.clear=function(){}},requestAnimationFrame:function(){s.debug("Normalizing requestAnimationFrame"),h.requestAnimationFrame===b&&(s.debug("RequestAnimationFrame not available, normalizing event"),h.requestAnimationFrame=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(e){return p.fn[e]!==b&&p.fn[e].settings!==b},enabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(e){var n=[];return e=e||u.modules,p.each(e,function(e,t){s.moduleExists(t)||n.push(t)}),n}},change:{setting:function(o,a,e,r){e="string"==typeof e?"all"===e?u.modules:[e]:e||u.modules,r=r===b||r,p.each(e,function(e,t){var n,i=!s.moduleExists(t)||(p.fn[t].settings.namespace||!1);s.moduleExists(t)&&(s.verbose("Changing default setting",o,a,t),p.fn[t].settings[o]=a,r&&i&&0<(n=p(":data(module-"+i+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",o,a)))})},settings:function(i,e,o){e="string"==typeof e?[e]:e||u.modules,o=o===b||o,p.each(e,function(e,t){var n;s.moduleExists(t)&&(s.verbose("Changing default setting",i,t),p.extend(!0,p.fn[t].settings,i),o&&a&&0<(n=p(":data(module-"+a+")")).length&&(s.verbose("Modifying existing settings",n),n[t]("setting",i)))})}},enable:{console:function(){s.console(!0)},debug:function(e,t){e=e||u.modules,s.debug("Enabling debug for modules",e),s.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Enabling verbose debug for modules",e),s.change.setting("verbose",!0,e,t)}},disable:{console:function(){s.console(!1)},debug:function(e,t){e=e||u.modules,s.debug("Disabling debug for modules",e),s.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||u.modules,s.debug("Disabling verbose debug for modules",e),s.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(g.cache.console===b)return void s.error(d.console);s.debug("Restoring console function"),h.console=g.cache.console}else s.debug("Disabling console function"),g.cache.console=h.console,h.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){s.verbose("Destroying previous site for",f),f.removeData(r)},cache:{},setting:function(e,t){if(p.isPlainObject(e))p.extend(!0,u,e);else{if(t===b)return u[e];u[e]=t}},internal:function(e,t){if(p.isPlainObject(e))p.extend(!0,s,e);else{if(t===b)return s[e];s[e]=t}},debug:function(){u.debug&&(u.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,u.name+":"),s.debug.apply(console,arguments)))},verbose:function(){u.verbose&&u.debug&&(u.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),s.verbose.apply(console,arguments)))},error:function(){s.error=Function.prototype.bind.call(console.error,console,u.name+":"),s.error.apply(console,arguments)},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(i||t),i=t,o.push({Element:m,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=u.name+":",n=0;i=!1,clearTimeout(s.performance.timer),p.each(o,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",(console.group!==b||console.table!==b)&&0<o.length&&(console.groupCollapsed(e),console.table?console.table(o):p.each(o,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),o=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||c,t=m||t,"string"==typeof i&&r!==b&&(i=i.split(/[\. ]/),o=i.length-1,p.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(p.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==b)return a=r[n],!1;if(!p.isPlainObject(r[t])||e==o)return r[t]!==b?a=r[t]:s.error(d.method,i),!1;r=r[t]}})),p.isFunction(a)?n=a.apply(t,e):a!==b&&(n=a),Array.isArray(l)?l.push(n):l!==b?l=[l,n]:n!==b&&(l=n),a}},n?(g===b&&s.initialize(),s.invoke(t)):(g!==b&&s.destroy(),s.initialize()),l!==b?l:this},p.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","calendar","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","slider","rating","shape","sidebar","state","sticky","tab","toast","transition","visibility","visit"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},p.extend(p.expr[":"],{data:p.expr.createPseudo?p.expr.createPseudo(function(t){return function(e){return!!p.data(e,t)}}):function(e,t,n){return!!p.data(e,n[3])}})}(jQuery,window,document),function(M,I,j,L){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.form=function(k){var T,S=M(this),D=S.selector||"",A=(new Date).getTime(),E=[],P=k,F=arguments[1],R="string"==typeof P,O=[].slice.call(arguments,1);return S.each(function(){var n,f,t,e,g,c,m,p,h,i,u,o,a,s,l,v,d=M(this),b=this,y=[],x=!1,r=!1,C=!1,w=["clean","clean"];(v={initialize:function(){v.get.settings(),R?(l===L&&v.instantiate(),v.invoke(P)):(l!==L&&l.invoke("destroy"),v.verbose("Initializing form validation",d,g),v.bindEvents(),v.set.defaults(),v.instantiate())},instantiate:function(){v.verbose("Storing instance of module",v),l=v,d.data(a,v)},destroy:function(){v.verbose("Destroying previous module",l),v.removeEvents(),d.removeData(a)},refresh:function(){v.verbose("Refreshing selector cache"),n=d.find(p.field),f=d.find(p.group),t=d.find(p.message),d.find(p.prompt),e=d.find(p.submit),d.find(p.clear),d.find(p.reset)},submit:function(){v.verbose("Submitting form",d),r=!0,d.submit()},attachEvents:function(e,t){t=t||"submit",M(e).on("click"+s,function(e){v[t](),e.preventDefault()})},bindEvents:function(){v.verbose("Attaching form events"),d.on("submit"+s,v.validate.form).on("blur"+s,p.field,v.event.field.blur).on("click"+s,p.submit,v.submit).on("click"+s,p.reset,v.reset).on("click"+s,p.clear,v.clear),g.keyboardShortcuts&&d.on("keydown"+s,p.field,v.event.field.keydown),n.each(function(e,t){var n=M(t),i=n.prop("type"),o=v.get.changeEvent(i,n);n.on(o+s,v.event.field.change)}),g.preventLeaving&&M(I).on("beforeunload"+s,v.event.beforeUnload),n.on("change click keyup keydown blur",function(e){M(this).triggerHandler(e.type+".dirty")}),n.on("change.dirty click.dirty keyup.dirty keydown.dirty blur.dirty",v.determine.isDirty),d.on("dirty"+s,function(e){g.onDirty.call()}),d.on("clean"+s,function(e){g.onClean.call()})},clear:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=o.find(p.prompt),r=n.closest(p.uiCalendar),s=n.data(m.defaultValue)||"",l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<r.length&&v.can.useElement("calendar");o.hasClass(h.error)&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),a.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("clear",!0)):l?n.prop("checked",!1):u?r.calendar("clear"):(v.verbose("Resetting field value",n,s),n.val(""))})},reset:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=n.closest(f),a=n.closest(p.uiCalendar),r=o.find(p.prompt),s=n.data(m.defaultValue),l=i.is(p.uiCheckbox),c=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),u=0<a.length&&v.can.useElement("calendar"),d=o.hasClass(h.error);s!==L&&(d&&(v.verbose("Resetting error on field",o),o.removeClass(h.error),r.remove()),c?(v.verbose("Resetting dropdown value",i,s),i.dropdown("restore defaults",!0)):l?(v.verbose("Resetting checkbox value",i,s),n.prop("checked",s)):u?a.calendar("set date",s):(v.verbose("Resetting field value",n,s),n.val(s)))}),v.determine.isDirty()},determine:{isValid:function(){var n=!0;return M.each(c,function(e,t){v.validate.field(t,e,!0)||(n=!1)}),n},isDirty:function(e){var o=!1;n.each(function(e,t){var n,i=M(t);n=0<i.filter(p.checkbox).length?v.is.checkboxDirty(i):v.is.fieldDirty(i),i.data(g.metadata.isDirty,n),o|=n}),o?v.set.dirty():v.set.clean(),e&&"dirty"===e.namespace&&(e.stopImmediatePropagation(),e.preventDefault())}},is:{bracketedRule:function(e){return e.type&&e.type.match(g.regExp.bracket)},shorthandFields:function(e){var t=e[Object.keys(e)[0]];return v.is.shorthandRules(t)},shorthandRules:function(e){return"string"==typeof e||Array.isArray(e)},empty:function(e){return!e||0===e.length||(e.is(p.checkbox)?!e.is(":checked"):v.is.blank(e))},blank:function(e){return""===M.trim(e.val())},valid:function(e){var n=!0;return e?(v.verbose("Checking if field is valid",e),v.validate.field(c[e],e,!1)):(v.verbose("Checking if form is valid"),M.each(c,function(e,t){v.is.valid(e)||(n=!1)}),n)},dirty:function(){return C},clean:function(){return!C},fieldDirty:function(e){var t=e.data(m.defaultValue);null==t&&(t="");var n=e.val();null==n&&(n="");var i=/^(true|false)$/i;return i.test(t)&&i.test(n)?!new RegExp("^"+t+"$","i").test(n):n!==t},checkboxDirty:function(e){return e.data(m.defaultValue)!==e.is(":checked")},justDirty:function(){return"dirty"===w[0]},justClean:function(){return"clean"===w[0]}},removeEvents:function(){d.off(s),n.off(s),e.off(s),n.off(s)},event:{field:{keydown:function(e){var t=M(this),n=e.which,i=t.is(p.input),o=t.is(p.checkbox),a=0<t.closest(p.uiDropdown).length,r=13;n==27&&(v.verbose("Escape key pressed blurring field"),t.blur()),e.ctrlKey||n!=r||!i||a||o||(x||(t.one("keyup"+s,v.event.field.keyup),v.submit(),v.debug("Enter pressed on input submitting form")),x=!0)},keyup:function(){x=!1},blur:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);n.hasClass(h.error)?(v.debug("Revalidating field",t,i),i&&v.validate.field(i)):"blur"==g.on&&i&&v.validate.field(i)},change:function(e){var t=M(this),n=t.closest(f),i=v.get.validation(t);i&&("change"==g.on||n.hasClass(h.error)&&g.revalidate)&&(clearTimeout(v.timer),v.timer=setTimeout(function(){v.debug("Revalidating field",t,v.get.validation(t)),v.validate.field(i)},g.delay))}},beforeUnload:function(e){if(v.is.dirty()&&!r)return(e=e||I.event)&&(e.returnValue=g.text.leavingMessage),g.text.leavingMessage}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!v.is.bracketedRule(e))&&(e.value!==L?e.value:e.type.match(g.regExp.bracket)[1]+"")},ruleName:function(e){return v.is.bracketedRule(e)?e.type.replace(e.type.match(g.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":v.get.inputEvent()},inputEvent:function(){return j.createElement("input").oninput!==L?"input":j.createElement("input").onpropertychange!==L?"propertychange":"keyup"},fieldsFromShorthand:function(e){var i={};return M.each(e,function(n,e){"string"==typeof e&&(e=[e]),i[n]={rules:[]},M.each(e,function(e,t){i[n].rules.push({type:t})})}),i},prompt:function(e,t){var n,i,o=v.get.ruleName(e),a=v.get.ancillaryValue(e),r=v.get.field(t.identifier),s=r.val(),l=M.isFunction(e.prompt)?e.prompt(s):e.prompt||g.prompt[o]||g.text.unspecifiedRule,c=-1!==l.search("{value}"),u=-1!==l.search("{name}");return c&&(l=l.replace("{value}",r.val())),u&&(i=1==(n=r.closest(p.group).find("label").eq(0)).length?n.text():r.prop("placeholder")||g.text.unspecifiedField,l=l.replace("{name}",i)),l=(l=l.replace("{identifier}",t.identifier)).replace("{ruleValue}",a),e.prompt||v.verbose("Using default validation prompt for type",l,o),l},settings:function(){if(M.isPlainObject(k)){var e=Object.keys(k);0<e.length&&(k[e[0]].identifier!==L&&k[e[0]].rules!==L)?(g=M.extend(!0,{},M.fn.form.settings,F),c=M.extend({},M.fn.form.settings.defaults,k),v.error(g.error.oldSyntax,b),v.verbose("Extending settings from legacy parameters",c,g)):(k.fields&&v.is.shorthandFields(k.fields)&&(k.fields=v.get.fieldsFromShorthand(k.fields)),g=M.extend(!0,{},M.fn.form.settings,k),c=M.extend({},M.fn.form.settings.defaults,g.fields),v.verbose("Extending settings",c,g))}else g=M.fn.form.settings,c=M.fn.form.settings.defaults,v.verbose("Using default form validation",c,g);o=g.namespace,m=g.metadata,p=g.selector,h=g.className,i=g.regExp,u=g.error,a="module-"+o,s="."+o,l=d.data(a),v.refresh()},field:function(e){var t;return v.verbose("Finding field with identifier",e),e=v.escape.string(e),0<(t=n.filter("#"+e)).length?t:0<(t=n.filter('[name="'+e+'"]')).length?t:0<(t=n.filter('[name="'+e+'[]"]')).length?t:0<(t=n.filter("[data-"+m.validate+'="'+e+'"]')).length?t:M("<input/>")},fields:function(e){var n=M();return M.each(e,function(e,t){n=n.add(v.get.field(t))}),n},validation:function(i){var o,a;return!!c&&(M.each(c,function(e,n){a=n.identifier||e,M.each(v.get.field(a),function(e,t){if(t==i[0])return n.identifier=a,o=n,!1})}),o||!1)},value:function(e){var t=[];return t.push(e),v.get.values.call(b,t)[e]},values:function(e){var t=Array.isArray(e)?v.get.fields(e):n,m={};return t.each(function(e,t){var n=M(t),i=n.closest(p.uiCalendar),o=n.prop("name"),a=n.val(),r=n.is(p.checkbox),s=n.is(p.radio),l=-1!==o.indexOf("[]"),c=0<i.length&&v.can.useElement("calendar"),u=!!r&&n.is(":checked");if(o)if(l)o=o.replace("[]",""),m[o]||(m[o]=[]),r?u?m[o].push(a||!0):m[o].push(!1):m[o].push(a);else if(s)m[o]!==L&&0!=m[o]||(m[o]=!!u&&(a||!0));else if(r)m[o]=!!u&&(a||!0);else if(c){var d=i.calendar("get date");if(null!==d){if("date"==g.dateHandling)m[o]=d;else if("input"==g.dateHandling)m[o]=i.calendar("get input date");else if("formatter"==g.dateHandling){var f=i.calendar("setting","type");switch(f){case"date":m[o]=g.formatter.date(d);break;case"datetime":m[o]=g.formatter.datetime(d);break;case"time":m[o]=g.formatter.time(d);break;case"month":m[o]=g.formatter.month(d);break;case"year":m[o]=g.formatter.year(d);break;default:v.debug("Wrong calendar mode",i,f),m[o]=""}}}else m[o]=""}else m[o]=a}),m},dirtyFields:function(){return n.filter(function(e,t){return M(t).data(m.isDirty)})}},has:{field:function(e){return v.verbose("Checking for existence of a field with identifier",e),"string"!=typeof(e=v.escape.string(e))&&v.error(u.identifier,e),0<n.filter("#"+e).length||(0<n.filter('[name="'+e+'"]').length||0<n.filter("[data-"+m.validate+'="'+e+'"]').length)}},can:{useElement:function(e){return M.fn[e]!==L||(v.error(u.noElement.replace("{element}",e)),!1)}},escape:{string:function(e){return(e=String(e)).replace(i.escape,"\\$&")}},add:{rule:function(e,t){v.add.field(e,t)},field:function(n,e){c[n]!==L&&c[n].rules!==L||(c[n]={rules:[]});var i={rules:[]};v.is.shorthandRules(e)?(e=Array.isArray(e)?e:[e],M.each(e,function(e,t){i.rules.push({type:t})})):i.rules=e.rules,M.each(i.rules,function(e,t){0==M.grep(c[n].rules,function(e){return e.type==t.type}).length&&c[n].rules.push(t)}),v.debug("Adding rules",i.rules,c)},fields:function(e){var t;t=e&&v.is.shorthandFields(e)?v.get.fieldsFromShorthand(e):e,c=M.extend({},c,t)},prompt:function(e,t,n){var i=v.get.field(e).closest(f),o=i.children(p.prompt),a=0!==o.length;t="string"==typeof t?[t]:t,v.verbose("Adding field error state",e),n||i.addClass(h.error),g.inline&&(a||(o=g.templates.prompt(t,h.label)).appendTo(i),o.html(t[0]),a?v.verbose("Inline errors are disabled, no inline error added",e):g.transition&&v.can.useElement("transition")&&d.transition("is supported")?(v.verbose("Displaying error with css transition",g.transition),o.transition(g.transition+" in",g.duration)):(v.verbose("Displaying error with fallback javascript animation"),o.fadeIn(g.duration)))},errors:function(e){v.debug("Adding form error messages",e),v.set.error(),t.html(g.templates.error(e))}},remove:{rule:function(n,e){var i=Array.isArray(e)?e:[e];if(c[n]!==L&&Array.isArray(c[n].rules))return e===L?(v.debug("Removed all rules"),void(c[n].rules=[])):void M.each(c[n].rules,function(e,t){t&&-1!==i.indexOf(t.type)&&(v.debug("Removed rule",t.type),c[n].rules.splice(e,1))})},field:function(e){var t=Array.isArray(e)?e:[e];M.each(t,function(e,t){v.remove.rule(t)})},rules:function(e,n){Array.isArray(e)?M.each(e,function(e,t){v.remove.rule(t,n)}):v.remove.rule(e,n)},fields:function(e){v.remove.field(e)},prompt:function(e){var t=v.get.field(e).closest(f),n=t.children(p.prompt);t.removeClass(h.error),g.inline&&n.is(":visible")&&(v.verbose("Removing prompt for field",e),g.transition&&v.can.useElement("transition")&&d.transition("is supported")?n.transition(g.transition+" out",g.duration,function(){n.remove()}):n.fadeOut(g.duration,function(){n.remove()}))}},set:{success:function(){d.removeClass(h.error).addClass(h.success)},defaults:function(){n.each(function(e,t){var n=M(t),i=n.parent(),o=0<n.filter(p.checkbox).length,a=i.is(p.uiDropdown)&&v.can.useElement("dropdown"),r=n.closest(p.uiCalendar),s=0<r.length&&v.can.useElement("calendar"),l=o?n.is(":checked"):n.val();a?i.dropdown("save defaults"):s&&r.calendar("refresh"),n.data(m.defaultValue,l),n.data(m.isDirty,!1)})},error:function(){d.removeClass(h.success).addClass(h.error)},value:function(e,t){var n={};return n[e]=t,v.set.values.call(b,n)},values:function(e){M.isEmptyObject(e)||M.each(e,function(e,t){var n,i=v.get.field(e),o=i.parent(),a=i.closest(p.uiCalendar),r=Array.isArray(t),s=o.is(p.uiCheckbox)&&v.can.useElement("checkbox"),l=o.is(p.uiDropdown)&&v.can.useElement("dropdown"),c=i.is(p.radio)&&s,u=0<a.length&&v.can.useElement("calendar");0<i.length&&(r&&s?(v.verbose("Selecting multiple",t,i),o.checkbox("uncheck"),M.each(t,function(e,t){n=i.filter('[value="'+t+'"]'),o=n.parent(),0<n.length&&o.checkbox("check")})):c?(v.verbose("Selecting radio value",t,i),i.filter('[value="'+t+'"]').parent(p.uiCheckbox).checkbox("check")):s?(v.verbose("Setting checkbox value",t,o),!0===t||1===t?o.checkbox("check"):o.checkbox("uncheck")):l?(v.verbose("Setting dropdown value",t,o),o.dropdown("set selected",t)):u?a.calendar("set date",t):(v.verbose("Setting field value",t,i),i.val(t)))})},dirty:function(){v.verbose("Setting state dirty"),C=!0,w[0]=w[1],w[1]="dirty",v.is.justClean()&&d.trigger("dirty")},clean:function(){v.verbose("Setting state clean"),C=!1,w[0]=w[1],w[1]="clean",v.is.justDirty()&&d.trigger("clean")},asClean:function(){v.set.defaults(),v.set.clean()},asDirty:function(){v.set.defaults(),v.set.dirty()}},validate:{form:function(e,t){var n=v.get.values();if(x)return!1;if(y=[],v.determine.isValid()){if(v.debug("Form has no validation errors, submitting"),v.set.success(),!0!==t)return g.onSuccess.call(b,e,n)}else if(v.debug("Form has errors"),v.set.error(),g.inline||v.add.errors(y),e&&d.data("moduleApi")!==L&&e.stopImmediatePropagation(),!0!==t)return g.onFailure.call(b,y,n)},field:function(i,e,o){o=o===L||o,"string"==typeof i&&(v.verbose("Validating field",i),i=c[e=i]);var a=i.identifier||e,t=v.get.field(a),n=!!i.depends&&v.get.field(i.depends),r=!0,s=[];i.identifier||(v.debug("Using field name as identifier",a),i.identifier=a);var l=!0;return M.each(t,function(){if(!M(this).prop("disabled"))return l=!1}),l?v.debug("Field is disabled. Skipping",a):i.optional&&v.is.blank(t)?v.debug("Field is optional and blank. Skipping",a):i.depends&&v.is.empty(n)?v.debug("Field depends on another value that is not present or empty. Skipping",n):i.rules!==L&&(t.closest(f).removeClass(h.error),M.each(i.rules,function(e,t){if(v.has.field(a)){var n=v.validate.rule(i,t,!0)||[];0<n.length&&(v.debug("Field is invalid",a,t.type),s.push(v.get.prompt(t,i)),r=!1,o&&M(n).closest(f).addClass(h.error))}})),r?(o&&(v.remove.prompt(a,s),g.onValid.call(t)),!0):(o&&(y=y.concat(s),v.add.prompt(a,s,!0),g.onInvalid.call(t,s)),!1)},rule:function(e,t,n){function i(e){var t=c?M(e).filter(":checked").val():M(e).val();return t=t===L||""===t||null===t?"":g.shouldTrim?M.trim(t+""):String(t+""),s.call(e,t,a,d)}var o=v.get.field(e.identifier),a=v.get.ancillaryValue(t),r=v.get.ruleName(t),s=g.rules[r],l=[],c=o.is(p.checkbox);if(M.isFunction(s))return c?i(o)||(l=o):M.each(o,function(e,t){i(t)||l.push(t)}),n?l:!(0<l.length);v.error(u.noRule,r)}},setting:function(e,t){if(M.isPlainObject(e))M.extend(!0,g,e);else{if(t===L)return g[e];g[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,v,e);else{if(t===L)return v[e];v[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,g.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),v.verbose.apply(console,arguments)))},error:function(){g.silent||(v.error=Function.prototype.bind.call(console.error,console,g.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var e=g.name+":",n=0;A=!1,clearTimeout(v.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),1<S.length&&(e+=" ("+S.length+")"),(console.group!==L||console.table!==L)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||O,t=b||t,"string"==typeof i&&r!==L&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==L)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==L&&(a=r[t]),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==L&&(n=a),Array.isArray(T)?T.push(n):T!==L?T=[T,n]:n!==L&&(T=n),a}}).initialize()}),T!==L?T:this},M.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,shouldTrim:!0,transition:"scale",duration:200,preventLeaving:!1,dateHandling:"date",onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},onDirty:function(){},onClean:function(){},metadata:{defaultValue:"default",validate:"validate",isDirty:"isDirty"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|:,=@]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field",leavingMessage:"There are unsaved changes on this page which will be discarded if you continue."},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} must contain "{ruleValue}"',containExactly:'{name} must contain exactly "{ruleValue}"',doesntContain:'{name} cannot contain  "{ruleValue}"',doesntContainExactly:'{name} cannot contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown",uiCalendar:".ui.calendar"},className:{error:"error",label:"ui basic red pointing prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",noElement:"This module requires ui {element}"},templates:{error:function(e){var n='<ul class="list">';return M.each(e,function(e,t){n+="<li>"+t+"</li>"}),M(n+="</ul>")},prompt:function(e,t){return M("<div/>").addClass(t).html(e[0])}},formatter:{date:function(e){return Intl.DateTimeFormat("en-GB").format(e)},datetime:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},time:function(e){return Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},month:function(e){return Intl.DateTimeFormat("en-GB",{month:"2-digit",year:"numeric"}).format(e)},year:function(e){return Intl.DateTimeFormat("en-GB",{year:"numeric"}).format(e)}},rules:{empty:function(e){return!(e===L||""===e||Array.isArray(e)&&0===e.length)},checked:function(){return 0<M(this).filter(":checked").length},email:function(e){return M.fn.form.settings.regExp.email.test(e)},url:function(e){return M.fn.form.settings.regExp.url.test(e)},regExp:function(e,t){if(t instanceof RegExp)return e.match(t);var n,i=t.match(M.fn.form.settings.regExp.flags);return i&&(t=2<=i.length?i[1]:t,n=3<=i.length?i[2]:""),e.match(new RegExp(t,n))},integer:function(e,t){var n,i,o,a=M.fn.form.settings.regExp.integer;return t&&-1===["",".."].indexOf(t)&&(-1==t.indexOf("..")?a.test(t)&&(n=i=t-0):(o=t.split("..",2),a.test(o[0])&&(n=o[0]-0),a.test(o[1])&&(i=o[1]-0))),a.test(e)&&(n===L||n<=e)&&(i===L||e<=i)},decimal:function(e){return M.fn.form.settings.regExp.decimal.test(e)},number:function(e){return M.fn.form.settings.regExp.number.test(e)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return(e="string"==typeof e?e.toLowerCase():e)!=(t="string"==typeof t?t.toLowerCase():t)},notExactly:function(e,t){return e!=t},contains:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t,"i"))},containsExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1!==e.search(new RegExp(t))},doesntContain:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t,"i"))},doesntContainExactly:function(e,t){return t=t.replace(M.fn.form.settings.regExp.escape,"\\$&"),-1===e.search(new RegExp(t))},minLength:function(e,t){return e!==L&&e.length>=t},length:function(e,t){return e!==L&&e.length>=t},exactLength:function(e,t){return e!==L&&e.length==t},maxLength:function(e,t){return e!==L&&e.length<=t},match:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==L&&e.toString()==i.toString()},different:function(e,t,n){var i,o;return 0<(o=n.find('[data-validate="'+t+'"]')).length?i=o.val():0<(o=n.find("#"+t)).length?i=o.val():0<(o=n.find('[name="'+t+'"]')).length?i=o.val():0<(o=n.find('[name="'+t+'[]"]')).length&&(i=o),i!==L&&e.toString()!==i.toString()},creditCard:function(n,e){var t,i,o={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},a={},r=!1,s="string"==typeof e&&e.split(",");if("string"==typeof n&&0!==n.length){if(n=n.replace(/[\-]/g,""),s&&(M.each(s,function(e,t){(i=o[t])&&(a={length:-1!==M.inArray(n.length,i.length),pattern:-1!==n.search(i.pattern)}).length&&a.pattern&&(r=!0)}),!r))return!1;if((t={number:-1!==M.inArray(n.length,o.unionPay.length),pattern:-1!==n.search(o.unionPay.pattern)}).number&&t.pattern)return!0;for(var l=n.length,c=0,u=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],d=0;l--;)d+=u[c][parseInt(n.charAt(l),10)],c^=1;return d%10==0&&0<d}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document),function(k,T,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},T=void 0!==T&&T.Math==Math?T:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.accordion=function(a){var v,r=k(this),b=(new Date).getTime(),y=[],x=a,C="string"==typeof x,w=[].slice.call(arguments,1);return r.each(function(){var e,c,u=k.isPlainObject(a)?k.extend(!0,{},k.fn.accordion.settings,a):k.extend({},k.fn.accordion.settings),d=u.className,t=u.namespace,f=u.selector,s=u.error,n="."+t,i="module-"+t,o=r.selector||"",m=k(this),g=m.find(f.title),p=m.find(f.content),l=this,h=m.data(i);c={initialize:function(){c.debug("Initializing",m),c.bind.events(),u.observeChanges&&c.observeChanges(),c.instantiate()},instantiate:function(){h=c,m.data(i,c)},destroy:function(){c.debug("Destroying previous instance",m),m.off(n).removeData(i)},refresh:function(){g=m.find(f.title),p=m.find(f.content)},observeChanges:function(){"MutationObserver"in T&&((e=new MutationObserver(function(e){c.debug("DOM tree modified, updating selector cache"),c.refresh()})).observe(l,{childList:!0,subtree:!0}),c.debug("Setting up mutation observer",e))},bind:{events:function(){c.debug("Binding delegated events"),m.on(u.on+n,f.trigger,c.event.click)}},event:{click:function(){c.toggle.call(this)}},toggle:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active),a=o&&!i,r=!o&&i;c.debug("Toggling visibility of content",t),a||r?u.collapsible?c.close.call(t):c.debug("Cannot close accordion content collapsing is disabled"):c.open.call(t)},open:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating);n.hasClass(d.active)||i?c.debug("Accordion already open, skipping",n):(c.debug("Opening accordion content",t),u.onOpening.call(n),u.onChanging.call(n),u.exclusive&&c.closeOthers.call(t),t.addClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0,onComplete:function(){n.children().removeClass(d.transition)}}):n.children().stop(!0,!0).animate({opacity:1},u.duration,c.resetOpacity)),n.slideDown(u.duration,u.easing,function(){n.removeClass(d.animating).addClass(d.active),c.reset.display.call(this),u.onOpen.call(this),u.onChange.call(this)}))},close:function(e){var t=e!==S?"number"==typeof e?g.eq(e):k(e).closest(f.title):k(this).closest(f.title),n=t.next(p),i=n.hasClass(d.animating),o=n.hasClass(d.active);!o&&!(!o&&i)||o&&i||(c.debug("Closing accordion content",n),u.onClosing.call(n),u.onChanging.call(n),t.removeClass(d.active),n.stop(!0,!0).addClass(d.animating),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?n.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):n.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),n.slideUp(u.duration,u.easing,function(){n.removeClass(d.animating).removeClass(d.active),c.reset.display.call(this),u.onClose.call(this),u.onChange.call(this)}))},closeOthers:function(e){var t,n,i,o=e!==S?g.eq(e):k(this).closest(f.title),a=o.parents(f.content).prev(f.title),r=o.closest(f.accordion),s=f.title+"."+d.active+":visible",l=f.content+"."+d.active+":visible";i=u.closeNested?(t=r.find(s).not(a)).next(p):(t=r.find(s).not(a),n=r.find(l).find(s).not(a),(t=t.not(n)).next(p)),0<t.length&&(c.debug("Exclusive enabled, closing other content",t),t.removeClass(d.active),i.removeClass(d.animating).stop(!0,!0),u.animateChildren&&(k.fn.transition!==S&&m.transition("is supported")?i.children().transition({animation:"fade out",useFailSafe:!0,debug:u.debug,verbose:u.verbose,duration:u.duration,skipInlineHidden:!0}):i.children().stop(!0,!0).animate({opacity:0},u.duration,c.resetOpacity)),i.slideUp(u.duration,u.easing,function(){k(this).removeClass(d.active),c.reset.display.call(this)}))},reset:{display:function(){c.verbose("Removing inline display from element",this),k(this).css("display",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")},opacity:function(){c.verbose("Removing inline opacity from element",this),k(this).css("opacity",""),""===k(this).attr("style")&&k(this).attr("style","").removeAttr("style")}},setting:function(e,t){if(c.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,u,e);else{if(t===S)return u[e];k.isPlainObject(u[e])?k.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(c.debug("Changing internal",e,t),t===S)return c[e];k.isPlainObject(e)?k.extend(!0,c,e):c[e]=t},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;b=!1,clearTimeout(c.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",o&&(e+=" '"+o+"'"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||w,t=l||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:c.error(s.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(v)?v.push(n):v!==S?v=[v,n]:n!==S&&(v=n),a}},C?(h===S&&c.initialize(),c.invoke(x)):(h!==S&&h.invoke("destroy"),c.initialize())}),v!==S?v:this},k.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onClosing:function(){},onChanging:function(){},onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating",transition:"transition"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},k.extend(k.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,void document),function(pe,e,k,T){"use strict";pe.isFunction=pe.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),pe.fn.calendar=function(o){var h,e=pe(this),a=e.selector||"",v=(new Date).getTime(),b=[],y=o,x="string"==typeof y,C=[].slice.call(arguments,1),w={5:{row:4,column:3},10:{row:3,column:2},15:{row:2,column:2},20:{row:3,column:1},30:{row:2,column:1}};return e.each(function(){var f,le,ce=pe.isPlainObject(o)?pe.extend(!0,{},pe.fn.calendar.settings,o):pe.extend({},pe.fn.calendar.settings),ue=ce.className,e=ce.namespace,r=ce.selector,de=ce.formatter,n=ce.parser,fe=ce.metadata,me=w[ce.minTimeGap],s=ce.error,t="."+e,i="module-"+e,l=pe(this),c=l.find(r.input),ge=l.find(r.popup),u=l.find(r.activator),d=this,m=l.data(i),g=!1,p=!1;le={initialize:function(){le.debug("Initializing calendar for",d,l),f=le.get.isTouch(),le.setup.config(),le.setup.popup(),le.setup.inline(),le.setup.input(),le.setup.date(),le.create.calendar(),le.bind.events(),le.instantiate()},instantiate:function(){le.verbose("Storing instance of calendar"),m=le,l.data(i,m)},destroy:function(){le.verbose("Destroying previous calendar for",d),l.removeData(i),le.unbind.events()},setup:{config:function(){null!==le.get.minDate()&&le.set.minDate(l.data(fe.minDate)),null!==le.get.maxDate()&&le.set.maxDate(l.data(fe.maxDate)),le.setting("type",le.get.type())},popup:function(){if(!ce.inline&&(u.length||(u=l.children().first()).length))if(pe.fn.popup!==T){if(!ge.length){var e=u.parent(),t=0!==e.closest(r.append).length?"appendTo":"prependTo";ge=pe("<div/>").addClass(ue.popup)[t](e)}ge.addClass(ue.calendar);var n=ce.onVisible,i=ce.onHidden;c.length||(ge.attr("tabindex","0"),n=function(){return le.focus(),ce.onVisible.apply(ge,arguments)},i=function(){return le.blur(),ce.onHidden.apply(ge,arguments)});var o=ce.on||(c.length?"focus":"click"),a=pe.extend({},ce.popupOptions,{popup:ge,on:o,hoverable:"hover"===o,onShow:function(){return le.set.focusDate(le.get.date()),le.set.mode(ce.startMode),ce.onShow.apply(ge,arguments)},onVisible:n,onHide:ce.onHide,onHidden:i});le.popup(a)}else le.error(s.popup)},inline:function(){u.length&&!ce.inline||(ge=pe("<div/>").addClass(ue.calendar).appendTo(l),c.length||ge.attr("tabindex","0"))},input:function(){ce.touchReadonly&&c.length&&f&&c.prop("readonly",!0)},date:function(){var e;ce.initialDate?e=n.date(ce.initialDate,ce):l.data(fe.date)!==T?e=n.date(l.data(fe.date),ce):c.length&&(e=n.date(c.val(),ce)),le.set.date(e,ce.formatInput,!1)}},create:{calendar:function(){var e,t,n,i,o,a,r,s=le.get.mode(),l=new Date,c=le.get.date(),u=le.get.focusDate(),d=u||c||ce.initialDate||l;d=le.helper.dateInRange(d),u||(u=d,le.set.focusDate(u,!1,!1));var f="year"===s,m="month"===s,g="day"===s,p="hour"===s,h="minute"===s,v="time"===ce.type,b=Math.max(ce.multiMonth,1),y=g?le.get.monthOffset():0,x=d.getMinutes(),C=d.getHours(),w=d.getDate(),k=d.getMonth()+y,T=d.getFullYear(),S=g?ce.showWeekNumbers?8:7:p?4:me.column,D=g||p?6:me.row,A=g?b:1,E=ge,P=E.hasClass("left")?"right center":"left center";for(E.empty(),1<A&&(r=pe("<div/>").addClass(ue.grid).appendTo(E)),i=0;i<A;i++){if(1<A)E=pe("<div/>").addClass(ue.column).appendTo(r);var F=k+i,R=(new Date(T,F,1).getDay()-ce.firstDayOfWeek%7+7)%7;if(!ce.constantHeight&&g){var O=new Date(T,F+1,0).getDate()+R;D=Math.ceil(O/7)}var M=f?10:m?1:0,I=g?1:0,j=p||h?1:0,L=p||h?w:1,q=new Date(T-M,F-I,L-j,C),V=new Date(T+M,F+I,L+j,C),z=f?new Date(10*Math.ceil(T/10)-9,0,0):m?new Date(T,0,0):g?new Date(T,F,0):new Date(T,F,w,-1),N=f?new Date(10*Math.ceil(T/10)+1,0,1):m?new Date(T+1,0,1):g?new Date(T,F+1,1):new Date(T,F,w+1),H=s;g&&ce.showWeekNumbers&&(H+=" andweek");var U=pe("<table/>").addClass(ue.table).addClass(H).appendTo(E),B=S;if(!v){var W=pe("<thead/>").appendTo(U);o=pe("<tr/>").appendTo(W),a=pe("<th/>").attr("colspan",""+S).appendTo(o);var Y=f||m?new Date(T,0,1):g?new Date(T,F,1):new Date(T,F,w,C,x),Q=pe("<span/>").addClass(ue.link).appendTo(a);Q.text(de.header(Y,s,ce));var X=m?ce.disableYear?"day":"year":g?ce.disableMonth?"year":"month":"day";if(Q.data(fe.mode,X),0===i){var $=pe("<span/>").addClass(ue.prev).appendTo(a);$.data(fe.focusDate,q),$.toggleClass(ue.disabledCell,!le.helper.isDateInRange(z,s)),pe("<i/>").addClass(ue.prevIcon).appendTo($)}if(i===A-1){var G=pe("<span/>").addClass(ue.next).appendTo(a);G.data(fe.focusDate,V),G.toggleClass(ue.disabledCell,!le.helper.isDateInRange(N,s)),pe("<i/>").addClass(ue.nextIcon).appendTo(G)}if(g)for(o=pe("<tr/>").appendTo(W),ce.showWeekNumbers&&((a=pe("<th/>").appendTo(o)).text(ce.text.weekNo),a.addClass(ue.weekCell),B--),e=0;e<B;e++)(a=pe("<th/>").appendTo(o)).text(de.dayColumnHeader((e+ce.firstDayOfWeek)%7,ce))}var K=pe("<tbody/>").appendTo(U);for(e=f?10*Math.ceil(T/10)-9:g?1-R:0,t=0;t<D;t++)for(o=pe("<tr/>").appendTo(K),g&&ce.showWeekNumbers&&((a=pe("<th/>").appendTo(o)).text(le.get.weekOfYear(T,F,e+1-ce.firstDayOfWeek)),a.addClass(ue.weekCell)),n=0;n<B;n++,e++){var J=f?new Date(e,F,1,C,x):m?new Date(T,e,1,C,x):g?new Date(T,F,e,C,x):p?new Date(T,F,w,e):new Date(T,F,w,C,e*ce.minTimeGap),Z=f?e:m?ce.text.monthsShort[e]:g?J.getDate():de.time(J,ce,!0);(a=pe("<td/>").addClass(ue.cell).appendTo(o)).text(Z),a.data(fe.date,J);var _=g&&J.getMonth()!==(F+12)%12,ee=!ce.selectAdjacentDays&&_||!le.helper.isDateInRange(J,s)||ce.isDisabled(J,s)||le.helper.isDisabled(J,s)||!le.helper.isEnabled(J,s);if(ee){var te=le.helper.findDayAsObject(J,s,ce.disabledDates);null!==te&&te[fe.message]&&(a.attr("data-tooltip",te[fe.message]),a.attr("data-position",P))}else{var ne=le.helper.findDayAsObject(J,s,ce.eventDates);null!==ne&&(a.addClass(ne[fe.class]||ce.eventClass),ne[fe.message]&&(a.attr("data-tooltip",ne[fe.message]),a.attr("data-position",P)))}var ie=le.helper.dateEqual(J,c,s),oe=le.helper.dateEqual(J,l,s);a.toggleClass(ue.adjacentCell,_),a.toggleClass(ue.disabledCell,ee),a.toggleClass(ue.activeCell,ie&&!_),p||h||a.toggleClass(ue.todayCell,!_&&oe);var ae={mode:s,adjacent:_,disabled:ee,active:ie,today:oe};de.cell(a,J,ae),le.helper.dateEqual(J,u,s)&&le.set.focusDate(J,!1,!1)}if(ce.today){var re=pe("<tr/>").appendTo(K),se=pe("<td/>").attr("colspan",""+S).addClass(ue.today).appendTo(re);se.text(de.today(ce)),se.data(fe.date,l)}le.update.focus(!1,U)}}},update:{focus:function(e,t){t=t||ge;var s=le.get.mode(),n=le.get.date(),l=le.get.focusDate(),c=le.get.startDate(),u=le.get.endDate(),d=(e?l:null)||n||(f?null:l);t.find("td").each(function(){var e=pe(this),t=e.data(fe.date);if(t){var n=e.hasClass(ue.disabledCell),i=e.hasClass(ue.activeCell),o=e.hasClass(ue.adjacentCell),a=le.helper.dateEqual(t,l,s),r=!!d&&(!!c&&le.helper.isDateInRange(t,s,c,d)||!!u&&le.helper.isDateInRange(t,s,d,u));e.toggleClass(ue.focusCell,a&&(!f||g)&&(!o||ce.selectAdjacentDays&&o)&&!n),le.helper.isTodayButton(e)||e.toggleClass(ue.rangeCell,r&&!i&&!n)}})}},refresh:function(){le.create.calendar()},bind:{events:function(){le.debug("Binding events"),ge.on("mousedown"+t,le.event.mousedown),ge.on("touchstart"+t,le.event.mousedown),ge.on("mouseup"+t,le.event.mouseup),ge.on("touchend"+t,le.event.mouseup),ge.on("mouseover"+t,le.event.mouseover),c.length?(c.on("input"+t,le.event.inputChange),c.on("focus"+t,le.event.inputFocus),c.on("blur"+t,le.event.inputBlur),c.on("click"+t,le.event.inputClick),c.on("keydown"+t,le.event.keydown)):ge.on("keydown"+t,le.event.keydown)}},unbind:{events:function(){le.debug("Unbinding events"),ge.off(t),c.length&&c.off(t)}},event:{mouseover:function(e){var t=pe(e.target).data(fe.date),n=1===e.buttons;t&&le.set.focusDate(t,!1,!0,n)},mousedown:function(e){c.length&&e.preventDefault(),g=0<=e.type.indexOf("touch");var t=pe(e.target).data(fe.date);t&&le.set.focusDate(t,!1,!0,!0)},mouseup:function(e){le.focus(),e.preventDefault(),e.stopPropagation(),g=!1;var t=pe(e.target);if(!t.hasClass("disabled")){var n=t.parent();(n.data(fe.date)||n.data(fe.focusDate)||n.data(fe.mode))&&(t=n);var i=t.data(fe.date),o=t.data(fe.focusDate),a=t.data(fe.mode);if(i&&!1!==ce.onSelect.call(d,i,le.get.mode())){var r=t.hasClass(ue.today);le.selectDate(i,r)}else o?le.set.focusDate(o):a&&le.set.mode(a)}},keydown:function(e){var t=e.which;if(27!==t&&9!==t||le.popup("hide"),le.popup("is visible"))if(37===t||38===t||39===t||40===t){var n="day"===(d=le.get.mode())?7:"hour"===d?4:"minute"===d?me.column:3,i=37===t?-1:38===t?-n:39==t?1:n;i*="minute"===d?ce.minTimeGap:1;var o=le.get.focusDate()||le.get.date()||new Date,a=o.getFullYear()+("year"===d?i:0),r=o.getMonth()+("month"===d?i:0),s=o.getDate()+("day"===d?i:0),l=o.getHours()+("hour"===d?i:0),c=o.getMinutes()+("minute"===d?i:0),u=new Date(a,r,s,l,c);"time"===ce.type&&(u=le.helper.mergeDateTime(o,u)),le.helper.isDateInRange(u,d)&&le.set.focusDate(u)}else if(13===t){var d=le.get.mode(),f=le.get.focusDate();f&&!ce.isDisabled(f,d)&&!le.helper.isDisabled(f,d)&&le.helper.isEnabled(f,d)&&le.selectDate(f),e.preventDefault(),e.stopPropagation()}38!==t&&40!==t||(e.preventDefault(),le.popup("show"))},inputChange:function(){var e=c.val(),t=n.date(e,ce);le.set.date(t,!1)},inputFocus:function(){ge.addClass(ue.active)},inputBlur:function(){if(ge.removeClass(ue.active),ce.formatInput){var e=le.get.date(),t=de.datetime(e,ce);c.val(t)}},inputClick:function(){le.popup("show")}},get:{weekOfYear:function(e,t,n){var i,o,a;return i=Date.UTC(e,t,n+3)/864e5,o=Math.floor(i/7),a=new Date(6048e5*o).getUTCFullYear(),o-Math.floor(Date.UTC(a,0,7)/6048e5)+1},date:function(){return le.helper.sanitiseDate(l.data(fe.date))||null},inputDate:function(){return c.val()},focusDate:function(){return l.data(fe.focusDate)||null},startDate:function(){var e=le.get.calendarModule(ce.startCalendar);return(e?e.get.date():l.data(fe.startDate))||null},endDate:function(){var e=le.get.calendarModule(ce.endCalendar);return(e?e.get.date():l.data(fe.endDate))||null},minDate:function(){return l.data(fe.minDate)||null},maxDate:function(){return l.data(fe.maxDate)||null},monthOffset:function(){return l.data(fe.monthOffset)||0},mode:function(){var e=l.data(fe.mode)||ce.startMode,t=le.get.validModes();return 0<=pe.inArray(e,t)?e:"time"===ce.type?"hour":"month"===ce.type?"month":"year"===ce.type?"year":"day"},type:function(){return l.data(fe.type)||ce.type},validModes:function(){var e=[];return"time"!==ce.type&&(ce.disableYear&&"year"!==ce.type||e.push("year"),(ce.disableMonth||"year"===ce.type)&&"month"!==ce.type||e.push("month"),0<=ce.type.indexOf("date")&&e.push("day")),0<=ce.type.indexOf("time")&&(e.push("hour"),ce.disableMinute||e.push("minute")),e},isTouch:function(){try{return k.createEvent("TouchEvent"),!0}catch(e){return!1}},calendarModule:function(e){return e?(e instanceof pe||(e=pe(e).first()),e.data(i)):null}},set:{date:function(e,t,n){t=!1!==t,n=!1!==n,e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var i=le.get.mode(),o=de.datetime(e,ce);if(n&&!1===ce.onBeforeChange.call(d,e,o,i))return!1;if(le.set.focusDate(e),ce.isDisabled(e,i))return!1;var a=le.get.endDate();a&&e&&a<e&&le.set.endDate(T),le.set.dataKeyValue(fe.date,e),t&&c.length&&c.val(o),n&&ce.onChange.call(d,e,o,i)},startDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.startCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.startDate,e,t)},endDate:function(e,t){e=le.helper.sanitiseDate(e);var n=le.get.calendarModule(ce.endCalendar);n&&n.set.date(e),le.set.dataKeyValue(fe.endDate,e,t)},focusDate:function(e,t,n,i){e=le.helper.sanitiseDate(e),e=le.helper.dateInRange(e);var o="day"===le.get.mode(),a=le.get.focusDate();if(o&&e&&a){var r=12*(e.getFullYear()-a.getFullYear())+e.getMonth()-a.getMonth();if(r){var s=le.get.monthOffset()-r;le.set.monthOffset(s,!1)}}var l=le.set.dataKeyValue(fe.focusDate,e,t);n=!1!==n&&l&&!1===t||p!=i,p=i,n&&le.update.focus(i)},minDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.maxDate&&ce.maxDate<=e?le.verbose("Unable to set minDate variable bigger that maxDate variable",e,ce.maxDate):(le.setting("minDate",e),le.set.dataKeyValue(fe.minDate,e))},maxDate:function(e){e=le.helper.sanitiseDate(e),null!==ce.minDate&&ce.minDate>=e?le.verbose("Unable to set maxDate variable lower that minDate variable",e,ce.minDate):(le.setting("maxDate",e),le.set.dataKeyValue(fe.maxDate,e))},monthOffset:function(e,t){var n=Math.max(ce.multiMonth,1);e=Math.max(1-n,Math.min(0,e)),le.set.dataKeyValue(fe.monthOffset,e,t)},mode:function(e,t){le.set.dataKeyValue(fe.mode,e,t)},dataKeyValue:function(e,t,n){var i=l.data(e),o=i===t||i<=t&&t<=i;return t?l.data(e,t):l.removeData(e),(n=!1!==n&&!o)&&le.refresh(),!o}},selectDate:function(e,t){le.verbose("New date selection",e);var n=le.get.mode();if(t||"minute"===n||ce.disableMinute&&"hour"===n||"date"===ce.type&&"day"===n||"month"===ce.type&&"month"===n||"year"===ce.type&&"year"===n){if(!(!1===le.set.date(e))&&ce.closable){le.popup("hide");var i=le.get.calendarModule(ce.endCalendar);i&&(i.popup("show"),i.focus())}}else{var o="year"===n?ce.disableMonth?"day":"month":"month"===n?"day":"day"===n?"hour":"minute";le.set.mode(o),"hour"===n||"day"===n&&le.get.date()?le.set.date(e):le.set.focusDate(e)}},changeDate:function(e){le.set.date(e)},clear:function(){le.set.date(T)},popup:function(){return u.popup.apply(u,arguments)},focus:function(){c.length?c.focus():ge.focus()},blur:function(){c.length?c.blur():ge.blur()},helper:{isDisabled:function(t,n){return"day"===n&&(-1!==ce.disabledDaysOfWeek.indexOf(t.getDay())||ce.disabledDates.some(function(e){return"string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date?le.helper.dateEqual(t,e,n):null!==e&&"object"==typeof e&&e[fe.date]?le.helper.dateEqual(t,le.helper.sanitiseDate(e[fe.date]),n):void 0}))},isEnabled:function(t,n){return"day"!==n||(0===ce.enabledDates.length||ce.enabledDates.some(function(e){return"string"==typeof e&&(e=le.helper.sanitiseDate(e)),e instanceof Date?le.helper.dateEqual(t,e,n):null!==e&&"object"==typeof e&&e[fe.date]?le.helper.dateEqual(t,le.helper.sanitiseDate(e[fe.date]),n):void 0}))},findDayAsObject:function(e,t,n){if("day"===t)for(var i,o=0,a=n.length;o<a;o++){if("string"==typeof(i=n[o])&&(i=le.helper.sanitiseDate(i)),i instanceof Date&&le.helper.dateEqual(e,i,t)){var r={};return r[fe.date]=i,r}if(null!==i&&"object"==typeof i&&i[fe.date]&&le.helper.dateEqual(e,le.helper.sanitiseDate(i[fe.date]),t))return i}return null},sanitiseDate:function(e){return e?(e instanceof Date||(e=n.date(""+e,ce)),!e||null===e||isNaN(e.getTime())?T:e):T},dateDiff:function(e,t,n){n=n||"day";var i="time"===ce.type,o="year"===n,a=o||"month"===n,r="minute"===n,s=r||"hour"===n;return e=new Date(i?2e3:e.getFullYear(),i?0:o?0:e.getMonth(),i?1:a?1:e.getDate(),s?e.getHours():0,r?ce.minTimeGap*Math.floor(e.getMinutes()/ce.minTimeGap):0),(t=new Date(i?2e3:t.getFullYear(),i?0:o?0:t.getMonth(),i?1:a?1:t.getDate(),s?t.getHours():0,r?ce.minTimeGap*Math.floor(t.getMinutes()/ce.minTimeGap):0)).getTime()-e.getTime()},dateEqual:function(e,t,n){return!!e&&!!t&&0===le.helper.dateDiff(e,t,n)},isDateInRange:function(e,t,n,i){if(!n&&!i){var o=le.get.startDate();n=o&&ce.minDate?new Date(Math.max(o,ce.minDate)):o||ce.minDate,i=ce.maxDate}return n=n&&new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),ce.minTimeGap*Math.ceil(n.getMinutes()/ce.minTimeGap)),!(!e||n&&0<le.helper.dateDiff(e,n,t)||i&&0<le.helper.dateDiff(i,e,t))},dateInRange:function(e,t,n){if(!t&&!n){var i=le.get.startDate();t=i&&ce.minDate?new Date(Math.max(i,ce.minDate)):i||ce.minDate,n=ce.maxDate}t=t&&new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),ce.minTimeGap*Math.ceil(t.getMinutes()/ce.minTimeGap));var o="time"===ce.type;return e?t&&0<le.helper.dateDiff(e,t,"minute")?o?le.helper.mergeDateTime(e,t):t:n&&0<le.helper.dateDiff(n,e,"minute")?o?le.helper.mergeDateTime(e,n):n:e:e},mergeDateTime:function(e,t){return e&&t?new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes()):t},isTodayButton:function(e){return e.text()===ce.text.today}},setting:function(e,t){if(le.debug("Changing setting",e,t),pe.isPlainObject(e))pe.extend(!0,ce,e);else{if(t===T)return ce[e];pe.isPlainObject(ce[e])?pe.extend(!0,ce[e],t):ce[e]=t}},internal:function(e,t){if(pe.isPlainObject(e))pe.extend(!0,le,e);else{if(t===T)return le[e];le[e]=t}},debug:function(){!ce.silent&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.debug=Function.prototype.bind.call(console.info,console,ce.name+":"),le.debug.apply(console,arguments)))},verbose:function(){!ce.silent&&ce.verbose&&ce.debug&&(ce.performance?le.performance.log(arguments):(le.verbose=Function.prototype.bind.call(console.info,console,ce.name+":"),le.verbose.apply(console,arguments)))},error:function(){ce.silent||(le.error=Function.prototype.bind.call(console.error,console,ce.name+":"),le.error.apply(console,arguments))},performance:{log:function(e){var t,n;ce.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(le.performance.timer),le.performance.timer=setTimeout(le.performance.display,500)},display:function(){var e=ce.name+":",n=0;v=!1,clearTimeout(le.performance.timer),pe.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",a&&(e+=" '"+a+"'"),(console.group!==T||console.table!==T)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):pe.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=m;return e=e||C,t=d||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,pe.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(pe.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!pe.isPlainObject(r[t])||e==o)return r[t]!==T?a=r[t]:le.error(s.method,i),!1;r=r[t]}})),pe.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),Array.isArray(h)?h.push(n):h!==T?h=[h,n]:n!==T&&(h=n),a}},x?(m===T&&le.initialize(),le.invoke(y)):(m!==T&&m.invoke("destroy"),le.initialize())}),h!==T?h:this},pe.fn.calendar.settings={name:"Calendar",namespace:"calendar",silent:!1,debug:!1,verbose:!1,performance:!1,type:"datetime",firstDayOfWeek:0,constantHeight:!0,today:!1,closable:!0,monthFirst:!0,touchReadonly:!0,inline:!1,on:null,initialDate:null,startMode:!1,minDate:null,maxDate:null,ampm:!0,disableYear:!1,disableMonth:!1,disableMinute:!1,formatInput:!0,startCalendar:null,endCalendar:null,multiMonth:1,minTimeGap:5,showWeekNumbers:null,disabledDates:[],disabledDaysOfWeek:[],enabledDates:[],eventDates:[],centuryBreak:60,currentCentury:2e3,selectAdjacentDays:!1,popupOptions:{position:"bottom left",lastResort:"bottom left",prefer:"opposite",hideOnScroll:!1},text:{days:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",now:"Now",am:"AM",pm:"PM",weekNo:"Week"},formatter:{header:function(e,t,n){return"year"===t?n.formatter.yearHeader(e,n):"month"===t?n.formatter.monthHeader(e,n):"day"===t?n.formatter.dayHeader(e,n):"hour"===t?n.formatter.hourHeader(e,n):n.formatter.minuteHeader(e,n)},yearHeader:function(e,t){var n=10*Math.ceil(e.getFullYear()/10);return n-9+" - "+(2+n)},monthHeader:function(e,t){return e.getFullYear()},dayHeader:function(e,t){return t.text.months[e.getMonth()]+" "+e.getFullYear()},hourHeader:function(e,t){return t.formatter.date(e,t)},minuteHeader:function(e,t){return t.formatter.date(e,t)},dayColumnHeader:function(e,t){return t.text.days[e]},datetime:function(e,t){if(!e)return"";var n="time"===t.type?"":t.formatter.date(e,t),i=t.type.indexOf("time")<0?"":t.formatter.time(e,t,!1);return n+("datetime"===t.type?" ":"")+i},date:function(e,t){if(!e)return"";var n=e.getDate(),i=t.text.months[e.getMonth()],o=e.getFullYear();return"year"===t.type?o:"month"===t.type?i+" "+o:(t.monthFirst?i+" "+n:n+" "+i)+", "+o},time:function(e,t,n){if(!e)return"";var i=e.getHours(),o=e.getMinutes(),a="";return t.ampm&&(a=" "+(i<12?t.text.am:t.text.pm),i=0===i?12:12<i?i-12:i),i+":"+(o<10?"0":"")+o+a},today:function(e){return"date"===e.type?e.text.today:e.text.now},cell:function(e,t,n){}},parser:{date:function(e,t){if(e instanceof Date)return e;if(!e)return null;if(0===(e=(""+e).trim().toLowerCase()).length)return null;e=t.monthFirst?e:e.replace(/[\/\-\.]/g,"/").replace(/([0-9]+)\/([0-9]+)/,"$2/$1");var n,i,o,a=new Date(e);if(!isNaN(a.getDate()))return a;var r,s,l,c=-1,u=-1,d=-1,f=-1,m=-1,g=T,p="time"===t.type,h=t.type.indexOf("time")<0,v=e.split(t.regExp.dateWords),b=e.split(t.regExp.dateNumbers);if(!h)for(g=0<=pe.inArray(t.text.am.toLowerCase(),v)||!(0<=pe.inArray(t.text.pm.toLowerCase(),v))&&T,n=0;n<b.length;n++)if(0<=(s=b[n]).indexOf(":")){if(u<0||c<0)for(l=s.split(":"),o=0;o<Math.min(2,l.length);o++)i=parseInt(l[o]),isNaN(i)&&(i=0),0===o?u=i%24:c=i%60;b.splice(n,1)}if(!p){for(n=0;n<v.length;n++)if(!((r=v[n]).length<=0)){for(i=0;i<t.text.months.length;i++)if(t.text.months[i].substring(0,r.length).toLowerCase()===r){f=i+1;break}if(0<=f)break}for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&i>=t.centuryBreak&&n===b.length-1){i<=99&&(i+=t.currentCentury-100),m=i,b.splice(n,1);break}if(f<0)for(n=0;n<b.length;n++)if(o=1<n||t.monthFirst?n:1===n?0:1,i=parseInt(b[o]),!isNaN(i)&&1<=i&&i<=12){f=i,b.splice(o,1);break}for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&1<=i&&i<=31){d=i,b.splice(n,1);break}if(m<0)for(n=b.length-1;0<=n;n--)if(i=parseInt(b[n]),!isNaN(i)){i<=99&&(i+=t.currentCentury),m=i,b.splice(n,1);break}}if(!h){if(u<0)for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&0<=i&&i<=23){u=i,b.splice(n,1);break}if(c<0)for(n=0;n<b.length;n++)if(i=parseInt(b[n]),!isNaN(i)&&0<=i&&i<=59){c=i,b.splice(n,1);break}}if(c<0&&u<0&&d<0&&f<0&&m<0)return null;c<0&&(c=0),u<0&&(u=0),d<0&&(d=1),f<0&&(f=1),m<0&&(m=(new Date).getFullYear()),g!==T&&(g?12===u&&(u=0):u<12&&(u+=12));var y=new Date(m,f-1,d,u,c);return y.getMonth()===f-1&&y.getFullYear()===m||(y=new Date(m,f,0,u,c)),isNaN(y.getTime())?null:y}},onBeforeChange:function(e,t,n){return!0},onChange:function(e,t,n){},onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},onSelect:function(e,t){},isDisabled:function(e,t){return!1},selector:{popup:".ui.popup",input:"input",activator:"input",append:".inline.field,.inline.fields"},regExp:{dateWords:/[^A-Za-z\u00C0-\u024F]+/g,dateNumbers:/[^\d:]+/g},error:{popup:"UI Popup, a required component is not included in this page",method:"The method you called is not defined."},className:{calendar:"calendar",active:"active",popup:"ui popup",grid:"ui equal width grid",column:"column",table:"ui celled center aligned unstackable table",prev:"prev link",next:"next link",prevIcon:"chevron left icon",nextIcon:"chevron right icon",link:"link",cell:"link",disabledCell:"disabled",weekCell:"disabled",adjacentCell:"adjacent",activeCell:"active",rangeCell:"range",focusCell:"focus",todayCell:"today",today:"today link"},metadata:{date:"date",focusDate:"focusDate",startDate:"startDate",endDate:"endDate",minDate:"minDate",maxDate:"maxDate",mode:"mode",type:"type",monthOffset:"monthOffset",message:"message",class:"class"},eventClass:"blue"}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.checkbox=function(u){var d,e=S(this),f=e.selector||"",x=(new Date).getTime(),C=[],w=u,k="string"==typeof w,T=[].slice.call(arguments,1);return e.each(function(){var e,m,g=S.extend(!0,{},S.fn.checkbox.settings,u),t=g.className,n=g.namespace,p=g.selector,s=g.error,i="."+n,o="module-"+n,h=S(this),a=S(this).children(p.label),v=S(this).children(p.input),b=v[0],r=!1,y=!1,l=h.data(o),c=this;m={initialize:function(){m.verbose("Initializing checkbox",g),m.create.label(),m.bind.events(),m.set.tabbable(),m.hide.input(),m.observeChanges(),m.instantiate(),m.setup()},instantiate:function(){m.verbose("Storing instance of module",m),l=m,h.data(o,m)},destroy:function(){m.verbose("Destroying module"),m.unbind.events(),m.show.input(),h.removeData(o)},fix:{reference:function(){h.is(p.input)&&(m.debug("Behavior called on <input> adjusting invoked element"),h=h.closest(p.checkbox),m.refresh())}},setup:function(){m.set.initialLoad(),m.is.indeterminate()?(m.debug("Initial value is indeterminate"),m.indeterminate()):m.is.checked()?(m.debug("Initial value is checked"),m.check()):(m.debug("Initial value is unchecked"),m.uncheck()),m.remove.initialLoad()},refresh:function(){a=h.children(p.label),v=h.children(p.input),b=v[0]},hide:{input:function(){m.verbose("Modifying <input> z-index to be unselectable"),v.addClass(t.hidden)}},show:{input:function(){m.verbose("Modifying <input> z-index to be selectable"),v.removeClass(t.hidden)}},observeChanges:function(){"MutationObserver"in D&&((e=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh()})).observe(c,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",e))},attachEvents:function(e,t){var n=S(e);t=S.isFunction(m[t])?m[t]:m.toggle,0<n.length?(m.debug("Attaching checkbox events to element",e,t),n.on("click"+i,t)):m.error(s.notFound)},preventDefaultOnInputTarget:function(){"undefined"!=typeof event&&null!==event&&S(event.target).is(p.input)&&(m.verbose("Preventing default check action after manual check action"),event.preventDefault())},event:{change:function(e){m.should.ignoreCallbacks()||g.onChange.call(b)},click:function(e){var t=S(e.target);t.is(p.input)?m.verbose("Using default check action on initialized checkbox"):t.is(p.link)?m.debug("Clicking link inside checkbox, skipping toggle"):(m.toggle(),v.focus(),e.preventDefault())},keydown:function(e){var t=e.which,n=13,i=32,o=27,a=37,r=38,s=39,l=40,c=m.get.radios(),u=c.index(h),d=c.length,f=!1;if(t==a||t==r?f=(0===u?d:u)-1:t!=s&&t!=l||(f=u===d-1?0:u+1),!m.should.ignoreCallbacks()&&!1!==f){if(!1===g.beforeUnchecked.apply(b))return m.verbose("Option not allowed to be unchecked, cancelling key navigation"),!1;if(!1===g.beforeChecked.apply(S(c[f]).children(p.input)[0]))return m.verbose("Next option should not allow check, cancelling key navigation"),!1}y=t==o?(m.verbose("Escape key pressed blurring field"),v.blur(),!0):!(e.ctrlKey||!(t==i||t==n&&g.enableEnterKey))&&(m.verbose("Enter/space key pressed, toggling checkbox"),m.toggle(),!0)},keyup:function(e){y&&e.preventDefault()}},check:function(){m.should.allowCheck()&&(m.debug("Checking checkbox",v),m.set.checked(),m.should.ignoreCallbacks()||(g.onChecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},uncheck:function(){m.should.allowUncheck()&&(m.debug("Unchecking checkbox"),m.set.unchecked(),m.should.ignoreCallbacks()||(g.onUnchecked.call(b),m.trigger.change()),m.preventDefaultOnInputTarget())},indeterminate:function(){m.should.allowIndeterminate()?m.debug("Checkbox is already indeterminate"):(m.debug("Making checkbox indeterminate"),m.set.indeterminate(),m.should.ignoreCallbacks()||(g.onIndeterminate.call(b),m.trigger.change()))},determinate:function(){m.should.allowDeterminate()?m.debug("Checkbox is already determinate"):(m.debug("Making checkbox determinate"),m.set.determinate(),m.should.ignoreCallbacks()||(g.onDeterminate.call(b),m.trigger.change()))},enable:function(){m.is.enabled()?m.debug("Checkbox is already enabled"):(m.debug("Enabling checkbox"),m.set.enabled(),m.should.ignoreCallbacks()||(g.onEnable.call(b),g.onEnabled.call(b),m.trigger.change()))},disable:function(){m.is.disabled()?m.debug("Checkbox is already disabled"):(m.debug("Disabling checkbox"),m.set.disabled(),m.should.ignoreCallbacks()||(g.onDisable.call(b),g.onDisabled.call(b),m.trigger.change()))},get:{radios:function(){var e=m.get.name();return S('input[name="'+e+'"]').closest(p.checkbox)},otherRadios:function(){return m.get.radios().not(h)},name:function(){return v.attr("name")}},is:{initialLoad:function(){return r},radio:function(){return v.hasClass(t.radio)||"radio"==v.attr("type")},indeterminate:function(){return v.prop("indeterminate")!==E&&v.prop("indeterminate")},checked:function(){return v.prop("checked")!==E&&v.prop("checked")},disabled:function(){return v.prop("disabled")!==E&&v.prop("disabled")},enabled:function(){return!m.is.disabled()},determinate:function(){return!m.is.indeterminate()},unchecked:function(){return!m.is.checked()}},should:{allowCheck:function(){return m.is.determinate()&&m.is.checked()&&!m.is.initialLoad()?(m.debug("Should not allow check, checkbox is already checked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeChecked.apply(b))||(m.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return m.is.determinate()&&m.is.unchecked()&&!m.is.initialLoad()?(m.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeUnchecked.apply(b))||(m.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return m.is.indeterminate()&&!m.is.initialLoad()?(m.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeIndeterminate.apply(b))||(m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return m.is.determinate()&&!m.is.initialLoad()?(m.debug("Should not allow determinate, checkbox is already determinate"),!1):!(!m.should.ignoreCallbacks()&&!1===g.beforeDeterminate.apply(b))||(m.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},ignoreCallbacks:function(){return r&&!g.fireOnInit}},can:{change:function(){return!(h.hasClass(t.disabled)||h.hasClass(t.readOnly)||v.prop("disabled")||v.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!m.is.radio()}},set:{initialLoad:function(){r=!0},checked:function(){m.verbose("Setting class to checked"),h.removeClass(t.indeterminate).addClass(t.checked),m.is.radio()&&m.uncheckOthers(),m.is.indeterminate()||!m.is.checked()?(m.verbose("Setting state to checked",b),v.prop("indeterminate",!1).prop("checked",!0)):m.debug("Input is already checked, skipping input property change")},unchecked:function(){m.verbose("Removing checked class"),h.removeClass(t.indeterminate).removeClass(t.checked),m.is.indeterminate()||!m.is.unchecked()?(m.debug("Setting state to unchecked"),v.prop("indeterminate",!1).prop("checked",!1)):m.debug("Input is already unchecked")},indeterminate:function(){m.verbose("Setting class to indeterminate"),h.addClass(t.indeterminate),m.is.indeterminate()?m.debug("Input is already indeterminate, skipping input property change"):(m.debug("Setting state to indeterminate"),v.prop("indeterminate",!0))},determinate:function(){m.verbose("Removing indeterminate class"),h.removeClass(t.indeterminate),m.is.determinate()?m.debug("Input is already determinate, skipping input property change"):(m.debug("Setting state to determinate"),v.prop("indeterminate",!1))},disabled:function(){m.verbose("Setting class to disabled"),h.addClass(t.disabled),m.is.disabled()?m.debug("Input is already disabled, skipping input property change"):(m.debug("Setting state to disabled"),v.prop("disabled","disabled"))},enabled:function(){m.verbose("Removing disabled class"),h.removeClass(t.disabled),m.is.enabled()?m.debug("Input is already enabled, skipping input property change"):(m.debug("Setting state to enabled"),v.prop("disabled",!1))},tabbable:function(){m.verbose("Adding tabindex to checkbox"),v.attr("tabindex")===E&&v.attr("tabindex",0)}},remove:{initialLoad:function(){r=!1}},trigger:{change:function(){var e=A.createEvent("HTMLEvents"),t=v[0];t&&(m.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},create:{label:function(){0<v.prevAll(p.label).length?(v.prev(p.label).detach().insertAfter(v),m.debug("Moving existing label",a)):m.has.label()||(a=S("<label>").insertAfter(v),m.debug("Creating label",a))}},has:{label:function(){return 0<a.length}},bind:{events:function(){m.verbose("Attaching checkbox events"),h.on("click"+i,m.event.click).on("change"+i,m.event.change).on("keydown"+i,p.input,m.event.keydown).on("keyup"+i,p.input,m.event.keyup)}},unbind:{events:function(){m.debug("Removing events"),h.off(i)}},uncheckOthers:function(){var e=m.get.otherRadios();m.debug("Unchecking other radios",e),e.removeClass(t.checked)},toggle:function(){m.can.change()?m.is.indeterminate()||m.is.unchecked()?(m.debug("Currently unchecked"),m.check()):m.is.checked()&&m.can.uncheck()&&(m.debug("Currently checked"),m.uncheck()):m.is.radio()||m.debug("Checkbox is read-only or disabled, ignoring toggle")},setting:function(e,t){if(m.debug("Changing setting",e,t),S.isPlainObject(e))S.extend(!0,g,e);else{if(t===E)return g[e];S.isPlainObject(g[e])?S.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,m,e);else{if(t===E)return m[e];m[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var e=g.name+":",n=0;x=!1,clearTimeout(m.performance.timer),S.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==E||console.table!==E)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):S.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||T,t=c||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E?a=r[t]:m.error(s.method,i),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(d)?d.push(n):d!==E?d=[d,n]:n!==E&&(d=n),a}},k?(l===E&&m.initialize(),m.invoke(w)):(l!==E&&l.invoke("destroy"),m.initialize())}),d!==E?d:this},S.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,enableEnterKey:!0,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(k,e,T,S){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.dimmer=function(p){var h,v=k(this),b=(new Date).getTime(),y=[],x=p,C="string"==typeof x,w=[].slice.call(arguments,1);return v.each(function(){var a,t,s,r=k.isPlainObject(p)?k.extend(!0,{},k.fn.dimmer.settings,p):k.extend({},k.fn.dimmer.settings),n=r.selector,e=r.namespace,i=r.className,l=r.error,o="."+e,c="module-"+e,u=v.selector||"",d="ontouchstart"in T.documentElement?"touchstart":"click",f=k(this),m=this,g=f.data(c);(s={preinitialize:function(){a=s.is.dimmer()?(t=f.parent(),f):(t=f,s.has.dimmer()?r.dimmerName?t.find(n.dimmer).filter("."+r.dimmerName):t.find(n.dimmer):s.create())},initialize:function(){s.debug("Initializing dimmer",r),s.bind.events(),s.set.dimmable(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,f.data(c,g)},destroy:function(){s.verbose("Destroying previous module",a),s.unbind.events(),s.remove.variation(),t.off(o)},bind:{events:function(){"hover"==r.on?t.on("mouseenter"+o,s.show).on("mouseleave"+o,s.hide):"click"==r.on&&t.on(d+o,s.toggle),s.is.page()&&(s.debug("Setting as a page dimmer",t),s.set.pageDimmer()),s.is.closable()&&(s.verbose("Adding dimmer close event",a),t.on(d+o,n.dimmer,s.event.click))}},unbind:{events:function(){f.removeData(c),t.off(o)}},event:{click:function(e){s.verbose("Determining if event occured on dimmer",e),0!==a.find(e.target).length&&!k(e.target).is(n.content)||(s.hide(),e.stopImmediatePropagation())}},addContent:function(e){var t=k(e);s.debug("Add content to dimmer",t),t.parent()[0]!==a[0]&&t.detach().appendTo(a)},create:function(){var e=k(r.template.dimmer(r));return r.dimmerName&&(s.debug("Creating named dimmer",r.dimmerName),e.addClass(r.dimmerName)),e.appendTo(t),e},show:function(e){e=k.isFunction(e)?e:function(){},s.debug("Showing dimmer",a,r),s.set.variation(),s.is.dimmed()&&!s.is.animating()||!s.is.enabled()?s.debug("Dimmer is already shown or disabled"):(s.animate.show(e),r.onShow.call(m),r.onChange.call(m))},hide:function(e){e=k.isFunction(e)?e:function(){},s.is.dimmed()||s.is.animating()?(s.debug("Hiding dimmer",a),s.animate.hide(e),r.onHide.call(m),r.onChange.call(m)):s.debug("Dimmer is not visible")},toggle:function(){s.verbose("Toggling dimmer visibility",a),s.is.dimmed()?s.is.closable()&&s.hide():s.show()},animate:{show:function(e){e=k.isFunction(e)?e:function(){},r.useCSS&&k.fn.transition!==S&&a.transition("is supported")?(r.useFlex?(s.debug("Using flex dimmer"),s.remove.legacy()):(s.debug("Using legacy non-flex dimmer"),s.set.legacy()),"auto"!==r.opacity&&s.set.opacity(),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" in",queue:!1,duration:s.get.duration(),useFailSafe:!0,onStart:function(){s.set.dimmed()},onComplete:function(){s.set.active(),e()}})):(s.verbose("Showing dimmer animation with javascript"),s.set.dimmed(),"auto"==r.opacity&&(r.opacity=.8),a.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(s.get.duration(),r.opacity,function(){a.removeAttr("style"),s.set.active(),e()}))},hide:function(e){e=k.isFunction(e)?e:function(){},r.useCSS&&k.fn.transition!==S&&a.transition("is supported")?(s.verbose("Hiding dimmer with css"),a.transition({displayType:r.useFlex?"flex":"block",animation:r.transition+" out",queue:!1,duration:s.get.duration(),useFailSafe:!0,onComplete:function(){s.remove.dimmed(),s.remove.variation(),s.remove.active(),e()}})):(s.verbose("Hiding dimmer with javascript"),a.stop().fadeOut(s.get.duration(),function(){s.remove.dimmed(),s.remove.active(),a.removeAttr("style"),e()}))}},get:{dimmer:function(){return a},duration:function(){return"object"==typeof r.duration?s.is.active()?r.duration.hide:r.duration.show:r.duration}},has:{dimmer:function(){return r.dimmerName?0<f.find(n.dimmer).filter("."+r.dimmerName).length:0<f.find(n.dimmer).length}},is:{active:function(){return a.hasClass(i.active)},animating:function(){return a.is(":animated")||a.hasClass(i.animating)},closable:function(){return"auto"==r.closable?"hover"!=r.on:r.closable},dimmer:function(){return f.hasClass(i.dimmer)},dimmable:function(){return f.hasClass(i.dimmable)},dimmed:function(){return t.hasClass(i.dimmed)},disabled:function(){return t.hasClass(i.disabled)},enabled:function(){return!s.is.disabled()},page:function(){return t.is("body")},pageDimmer:function(){return a.hasClass(i.pageDimmer)}},can:{show:function(){return!a.hasClass(i.disabled)}},set:{opacity:function(e){var t=a.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===r.opacity?0:r.opacity||e,t=i||o?(n[3]=e+")",n.join(",")):"rgba(0, 0, 0, "+e+")",s.debug("Setting opacity to",e),a.css("background-color",t)},legacy:function(){a.addClass(i.legacy)},active:function(){a.addClass(i.active)},dimmable:function(){t.addClass(i.dimmable)},dimmed:function(){t.addClass(i.dimmed)},pageDimmer:function(){a.addClass(i.pageDimmer)},disabled:function(){a.addClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.addClass(e)}},remove:{active:function(){a.removeClass(i.active)},legacy:function(){a.removeClass(i.legacy)},dimmed:function(){t.removeClass(i.dimmed)},disabled:function(){a.removeClass(i.disabled)},variation:function(e){(e=e||r.variation)&&a.removeClass(e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,r,e);else{if(t===S)return r[e];k.isPlainObject(r[e])?k.extend(!0,r[e],t):r[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!r.silent&&r.debug&&(r.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,r.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!r.silent&&r.verbose&&r.debug&&(r.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,r.name+":"),s.verbose.apply(console,arguments)))},error:function(){r.silent||(s.error=Function.prototype.bind.call(console.error,console,r.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;r.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=r.name+":",n=0;b=!1,clearTimeout(s.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",u&&(e+=" '"+u+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||w,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}}).preinitialize(),C?(g===S&&s.initialize(),s.invoke(x)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},k.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,useFlex:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},displayLoader:!1,loaderText:!1,loaderVariation:"",onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",legacy:"legacy",pageDimmer:"page",show:"show",loader:"ui loader"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(e){var t,n=k("<div/>").addClass("ui dimmer");return e.displayLoader&&(t=k("<div/>").addClass(e.className.loader).addClass(e.loaderVariation),e.loaderText&&(t.text(e.loaderText),t.addClass("text")),n.append(t)),n}}}}(jQuery,window,document),function(_,ee,te,ne){"use strict";_.isFunction=_.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},ee=void 0!==ee&&ee.Math==Math?ee:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),_.fn.dropdown=function(H){var U,B=_(this),W=_(te),Y=B.selector||"",Q="ontouchstart"in te.documentElement,X=Q?"touchstart":"click",$=(new Date).getTime(),G=[],K=H,J="string"==typeof K,Z=[].slice.call(arguments,1);return B.each(function(n){var c,e,t,i,o,a,r,s,p,g=_.isPlainObject(H)?_.extend(!0,{},_.fn.dropdown.settings,H):_.extend({},_.fn.dropdown.settings),h=g.className,u=g.message,l=g.fields,v=g.keys,b=g.metadata,d=g.namespace,f=g.regExp,y=g.selector,m=g.error,x=g.templates,C="."+d,w="module-"+d,k=_(this),T=_(g.context),S=k.find(y.text),D=k.find(y.search),A=k.find(y.sizer),E=k.find(y.input),P=k.find(y.icon),F=k.find(y.clearIcon),R=0<k.prev().find(y.text).length?k.prev().find(y.text):k.prev(),O=k.children(y.menu),M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_(),j=!1,L=!1,q=!1,V=!1,z=this,N=k.data(w);p={initialize:function(){p.debug("Initializing dropdown",g),p.is.alreadySetup()?p.setup.reference():(g.ignoreDiacritics&&!String.prototype.normalize&&(g.ignoreDiacritics=!1,p.error(m.noNormalize,z)),p.setup.layout(),g.values&&p.change.values(g.values),p.refreshData(),p.save.defaults(),p.restore.selected(),p.create.id(),p.bind.events(),p.observeChanges(),p.instantiate())},instantiate:function(){p.verbose("Storing instance of dropdown",p),N=p,k.data(w,p)},destroy:function(){p.verbose("Destroying previous dropdown",k),p.remove.tabbable(),p.remove.active(),O.transition("stop all"),O.removeClass(h.visible).addClass(h.hidden),k.off(C).removeData(w),O.off(C),W.off(o),p.disconnect.menuObserver(),p.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in ee&&(r=new MutationObserver(p.event.select.mutation),s=new MutationObserver(p.event.menu.mutation),p.debug("Setting up mutation observer",r,s),p.observe.select(),p.observe.menu())},disconnect:{menuObserver:function(){s&&s.disconnect()},selectObserver:function(){r&&r.disconnect()}},observe:{select:function(){p.has.input()&&r&&r.observe(k[0],{childList:!0,subtree:!0})},menu:function(){p.has.menu()&&s&&s.observe(O[0],{childList:!0,subtree:!0})}},create:{id:function(){a=(Math.random().toString(16)+"000000000").substr(2,8),o="."+a,p.verbose("Creating unique id for element",a)},userChoice:function(e){var n,i,o;return!!(e=e||p.get.userValues())&&(e=Array.isArray(e)?e:[e],_.each(e,function(e,t){!1===p.get.item(t)&&(o=g.templates.addition(p.add.variables(u.addResult,t)),i=_("<div />").html(o).attr("data-"+b.value,t).attr("data-"+b.text,t).addClass(h.addition).addClass(h.item),g.hideAdditions&&i.addClass(h.hidden),n=n===ne?i:n.add(i),p.verbose("Creating user choices for value",t,i))}),n)},userLabels:function(e){var t=p.get.userValues();t&&(p.debug("Adding user labels",t),_.each(t,function(e,t){p.verbose("Adding custom user value"),p.add.label(t,t)}))},menu:function(){O=_("<div />").addClass(h.menu).appendTo(k)},sizer:function(){A=_("<span />").addClass(h.sizer).insertAfter(D)}},search:function(e){e=e!==ne?e:p.get.query(),p.verbose("Searching for query",e),p.has.minCharacters(e)?p.filter(e):p.hide(null,!0)},select:{firstUnfiltered:function(){p.verbose("Selecting first non-filtered element"),p.remove.selectedItem(),M.not(y.unselectable).not(y.addition+y.hidden).eq(0).addClass(h.selected)},nextAvailable:function(e){var t=(e=e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),n=e.prevAll(y.item).not(y.unselectable).eq(0);0<t.length?(p.verbose("Moving selection to",t),t.addClass(h.selected)):(p.verbose("Moving selection to",n),n.addClass(h.selected))}},setup:{api:function(){var e={debug:g.debug,urlData:{value:p.get.value(),query:p.get.query()},on:!1};p.verbose("First request, initializing API"),k.api(e)},layout:function(){k.is("select")&&(p.setup.select(),p.setup.returnedObject()),p.has.menu()||p.create.menu(),p.is.selection()&&p.is.clearable()&&!p.has.clearItem()&&(p.verbose("Adding clear icon"),F=_("<i />").addClass("remove icon").insertBefore(S)),p.is.search()&&!p.has.search()&&(p.verbose("Adding search input"),D=_("<input />").addClass(h.search).prop("autocomplete","off").insertBefore(S)),p.is.multiple()&&p.is.searchSelection()&&!p.has.sizer()&&p.create.sizer(),g.allowTab&&p.set.tabbable()},select:function(){var e=p.get.selectValues();p.debug("Dropdown initialized on a select",e),k.is("select")&&(E=k),0<E.parent(y.dropdown).length?(p.debug("UI dropdown already exists. Creating dropdown menu only"),k=E.closest(y.dropdown),p.has.menu()||p.create.menu(),O=k.children(y.menu),p.setup.menu(e)):(p.debug("Creating entire dropdown from select"),k=_("<div />").attr("class",E.attr("class")).addClass(h.selection).addClass(h.dropdown).html(x.dropdown(e,l,g.preserveHTML,g.className)).insertBefore(E),E.hasClass(h.multiple)&&!1===E.prop("multiple")&&(p.error(m.missingMultiple),E.prop("multiple",!0)),E.is("[multiple]")&&p.set.multiple(),E.prop("disabled")&&(p.debug("Disabling dropdown"),k.addClass(h.disabled)),E.removeAttr("required").removeAttr("class").detach().prependTo(k)),p.refresh()},menu:function(e){O.html(x.menu(e,l,g.preserveHTML,g.className)),M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_()},reference:function(){p.debug("Dropdown behavior was called on select, replacing with closest dropdown"),k=k.parent(y.dropdown),N=k.data(w),z=k.get(0),p.refresh(),p.setup.returnedObject()},returnedObject:function(){var e=B.slice(0,n),t=B.slice(n+1);B=e.add(k).add(t)}},refresh:function(){p.refreshSelectors(),p.refreshData()},refreshItems:function(){M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_()},refreshSelectors:function(){p.verbose("Refreshing selector cache"),S=k.find(y.text),D=k.find(y.search),E=k.find(y.input),P=k.find(y.icon),R=0<k.prev().find(y.text).length?k.prev().find(y.text):k.prev(),O=k.children(y.menu),M=O.find(y.item),I=g.hideDividers?M.parent().children(y.divider):_()},refreshData:function(){p.verbose("Refreshing cached metadata"),M.removeData(b.text).removeData(b.value)},clearData:function(){p.verbose("Clearing metadata"),M.removeData(b.text).removeData(b.value),k.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText)},toggle:function(){p.verbose("Toggling menu visibility"),p.is.active()?p.hide():p.show()},show:function(e,t){if(e=_.isFunction(e)?e:function(){},!p.can.show()&&p.is.remote()&&(p.debug("No API results retrieved, searching before show"),p.queryRemote(p.get.query(),p.show)),p.can.show()&&!p.is.active()){if(p.debug("Showing dropdown"),!p.has.message()||p.has.maxSelections()||p.has.allResultsFiltered()||p.remove.message(),p.is.allFiltered())return!0;!1!==g.onShow.call(z)&&p.animate.show(function(){p.can.click()&&p.bind.intent(),p.has.search()&&!t&&p.focusSearch(),p.set.visible(),e.call(z)})}},hide:function(e,t){e=_.isFunction(e)?e:function(){},p.is.active()&&!p.is.animatingOutward()?(p.debug("Hiding dropdown"),!1!==g.onHide.call(z)&&p.animate.hide(function(){p.remove.visible(),p.is.focusedOnSearch()&&!0!==t&&D.blur(),e.call(z)})):p.can.click()&&p.unbind.intent()},hideOthers:function(){p.verbose("Finding other dropdowns to hide"),B.not(k).has(y.menu+"."+h.visible).dropdown("hide")},hideMenu:function(){p.verbose("Hiding menu  instantaneously"),p.remove.active(),p.remove.visible(),O.transition("hide")},hideSubMenus:function(){var e=O.children(y.item).find(y.menu);p.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){p.bind.keyboardEvents(),p.bind.inputEvents(),p.bind.mouseEvents()},keyboardEvents:function(){p.verbose("Binding keyboard events"),k.on("keydown"+C,p.event.keydown),p.has.search()&&k.on(p.get.inputEvent()+C,y.search,p.event.input),p.is.multiple()&&W.on("keydown"+o,p.event.document.keydown)},inputEvents:function(){p.verbose("Binding input change events"),k.on("change"+C,y.input,p.event.change)},mouseEvents:function(){p.verbose("Binding mouse events"),p.is.multiple()&&k.on(X+C,y.label,p.event.label.click).on(X+C,y.remove,p.event.remove.click),p.is.searchSelection()?(k.on("mousedown"+C,p.event.mousedown).on("mouseup"+C,p.event.mouseup).on("mousedown"+C,y.menu,p.event.menu.mousedown).on("mouseup"+C,y.menu,p.event.menu.mouseup).on(X+C,y.icon,p.event.icon.click).on(X+C,y.clearIcon,p.event.clearIcon.click).on("focus"+C,y.search,p.event.search.focus).on(X+C,y.search,p.event.search.focus).on("blur"+C,y.search,p.event.search.blur).on(X+C,y.text,p.event.text.focus),p.is.multiple()&&k.on(X+C,p.event.click)):("click"==g.on?k.on(X+C,y.icon,p.event.icon.click).on(X+C,p.event.test.toggle):"hover"==g.on?k.on("mouseenter"+C,p.delay.show).on("mouseleave"+C,p.delay.hide):k.on(g.on+C,p.toggle),k.on("mousedown"+C,p.event.mousedown).on("mouseup"+C,p.event.mouseup).on("focus"+C,p.event.focus).on(X+C,y.clearIcon,p.event.clearIcon.click),p.has.menuSearch()?k.on("blur"+C,y.search,p.event.search.blur):k.on("blur"+C,p.event.blur)),O.on((Q?"touchstart":"mouseenter")+C,y.item,p.event.item.mouseenter).on("mouseleave"+C,y.item,p.event.item.mouseleave).on("click"+C,y.item,p.event.item.click)},intent:function(){p.verbose("Binding hide intent event to document"),Q&&W.on("touchstart"+o,p.event.test.touch).on("touchmove"+o,p.event.test.touch),W.on(X+o,p.event.test.hide)}},unbind:{intent:function(){p.verbose("Removing hide intent event from document"),Q&&W.off("touchstart"+o).off("touchmove"+o),W.off(X+o)}},filter:function(e){function t(){p.is.multiple()&&p.filterActive(),(e||!e&&0==p.get.activeItem().length)&&p.select.firstUnfiltered(),p.has.allResultsFiltered()?g.onNoResults.call(z,n)?g.allowAdditions?g.hideAdditions&&(p.verbose("User addition with no menu, setting empty style"),p.set.empty(),p.hideMenu()):(p.verbose("All items filtered, showing message",n),p.add.message(u.noResults)):(p.verbose("All items filtered, hiding dropdown",n),p.hideMenu()):(p.remove.empty(),p.remove.message()),g.allowAdditions&&p.add.userSuggestion(p.escape.htmlEntities(e)),p.is.searchSelection()&&p.can.show()&&p.is.focusedOnSearch()&&p.show()}var n=e!==ne?e:p.get.query();g.useLabels&&p.has.maxSelections()||(g.apiSettings?p.can.useAPI()?p.queryRemote(n,function(){g.filterRemoteData&&p.filterItems(n);var e=E.val();Array.isArray(e)||(e=e&&""!==e?e.split(g.delimiter):[]),_.each(e,function(e,t){M.filter('[data-value="'+t+'"]').addClass(h.filtered)}),t()}):p.error(m.noAPI):(p.filterItems(n),t()))},queryRemote:function(e,n){var t={errorDuration:!1,cache:"local",throttle:g.throttle,urlData:{query:e},onError:function(){p.add.message(u.serverError),n()},onFailure:function(){p.add.message(u.serverError),n()},onSuccess:function(e){var t=e[l.remoteValues];Array.isArray(t)||(t=[]),p.remove.message(),p.setup.menu({values:t}),0!==t.length||g.allowAdditions||p.add.message(u.noResults),n()}};k.api("get request")||p.setup.api(),t=_.extend(!0,{},t,g.apiSettings),k.api("setting",t).api("query")},filterItems:function(e){var i=p.remove.diacritics(e!==ne?e:p.get.query()),o=null,t=p.escape.string(i),n=(g.ignoreSearchCase?"i":"")+"gm",a=new RegExp("^"+t,n);p.has.query()&&(o=[],p.verbose("Searching for matching values",i),M.each(function(){var e,t,n=_(this);if(n.hasClass(h.unfilterable))return o.push(this),!0;if("both"===g.match||"text"===g.match){if(-1!==(e=p.remove.diacritics(String(p.get.choiceText(n,!1)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,e))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,e))return o.push(this),!0}if("both"===g.match||"value"===g.match){if(-1!==(t=p.remove.diacritics(String(p.get.choiceValue(n,e)))).search(a))return o.push(this),!0;if("exact"===g.fullTextSearch&&p.exactSearch(i,t))return o.push(this),!0;if(!0===g.fullTextSearch&&p.fuzzySearch(i,t))return o.push(this),!0}})),p.debug("Showing only matched items",i),p.remove.filteredItem(),o&&M.not(o).addClass(h.filtered),p.has.query()?!0===g.hideDividers?I.addClass(h.hidden):"empty"===g.hideDividers&&I.removeClass(h.hidden).filter(function(){var e=_(this).nextUntil(y.item);return 0===(e.length?e:_(this)).nextUntil(y.divider).filter(y.item+":not(."+h.filtered+")").length}).addClass(h.hidden):I.removeClass(h.hidden)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=g.ignoreSearchCase?e.toLowerCase():e,t=g.ignoreSearchCase?t.toLowerCase():t,n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=g.ignoreSearchCase?e.toLowerCase():e,-1<(t=g.ignoreSearchCase?t.toLowerCase():t).indexOf(e)},filterActive:function(){g.useLabels&&M.filter("."+h.active).addClass(h.filtered)},focusSearch:function(e){p.has.search()&&!p.is.focusedOnSearch()&&(e?(k.off("focus"+C,y.search),D.focus(),k.on("focus"+C,y.search,p.event.search.focus)):D.focus())},blurSearch:function(){p.has.search()&&D.blur()},forceSelection:function(){var e=M.not(h.filtered).filter("."+h.selected).eq(0),t=M.not(h.filtered).filter("."+h.active).eq(0),n=0<e.length?e:t,i=0<n.length;g.allowAdditions||i&&!p.is.multiple()?(p.debug("Forcing partial selection to selected item",n),p.event.item.click.call(n,{},!0)):p.remove.searchTerm()},change:{values:function(e){g.allowAdditions||p.clear(),p.debug("Creating dropdown with specified values",e),p.setup.menu({values:e}),_.each(e,function(e,t){if(1==t.selected&&(p.debug("Setting initial selection to",t[l.value]),p.set.selected(t[l.value]),!p.is.multiple()))return!1}),p.has.selectInput()&&(p.disconnect.selectObserver(),E.html(""),E.append("<option disabled selected value></option>"),_.each(e,function(e,t){var n=g.templates.deQuote(t[l.value]),i=g.templates.escape(t[l.name]||"",g.preserveHTML);E.append('<option value="'+n+'">'+i+"</option>")}),p.observe.select())}},event:{change:function(){q||(p.debug("Input changed, updating selection"),p.set.selected())},focus:function(){g.showOnFocus&&!j&&p.is.hidden()&&!t&&p.show()},blur:function(e){t=te.activeElement===this,j||t||(p.remove.activeLabel(),p.hide())},mousedown:function(){p.is.searchSelection()?i=!0:j=!0},mouseup:function(){p.is.searchSelection()?i=!1:j=!1},click:function(e){_(e.target).is(k)&&(p.is.focusedOnSearch()?p.show():p.focusSearch())},search:{focus:function(e){j=!0,p.is.multiple()&&p.remove.activeLabel(),(g.showOnFocus||"focus"!==e.type&&"focusin"!==e.type)&&p.search()},blur:function(e){t=te.activeElement===this,p.is.searchSelection()&&!i&&(L||t||(g.forceSelection?p.forceSelection():g.allowAdditions||p.remove.searchTerm(),p.hide())),i=!1}},clearIcon:{click:function(e){p.clear(),p.is.searchSelection()&&p.remove.searchTerm(),p.hide(),e.stopPropagation()}},icon:{click:function(e){V=!0,p.has.search()?p.is.active()?p.blurSearch():g.showOnFocus?p.focusSearch():p.toggle():p.toggle()}},text:{focus:function(e){j=!0,p.focusSearch()}},input:function(e){(p.is.multiple()||p.is.searchSelection())&&p.set.filtered(),clearTimeout(p.timer),p.timer=setTimeout(p.search,g.delay.search)},label:{click:function(e){var t=_(this),n=k.find(y.label),i=n.filter("."+h.active),o=t.nextAll("."+h.active),a=t.prevAll("."+h.active),r=0<o.length?t.nextUntil(o).add(i).add(t):t.prevUntil(a).add(i).add(t);e.shiftKey?(i.removeClass(h.active),r.addClass(h.active)):e.ctrlKey?t.toggleClass(h.active):(i.removeClass(h.active),t.addClass(h.active)),g.onLabelSelect.apply(this,n.filter("."+h.active))}},remove:{click:function(){var e=_(this).parent();e.hasClass(h.active)?p.remove.activeLabels():p.remove.activeLabels(e)}},test:{toggle:function(e){var t=p.is.multiple()?p.show:p.toggle;p.is.bubbledLabelClick(e)||p.is.bubbledIconClick(e)||p.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){p.determine.eventOnElement(e,function(){"touchstart"==e.type?p.timer=setTimeout(function(){p.hide()},g.delay.touch):"touchmove"==e.type&&clearTimeout(p.timer)}),e.stopPropagation()},hide:function(e){p.determine.eventInModule(e,p.hide)&&z.id&&_(e.target).attr("for")===z.id&&e.preventDefault()}},select:{mutation:function(e){p.debug("<select> modified, recreating menu"),p.is.selectMutation(e)&&(p.disconnect.selectObserver(),p.refresh(),p.setup.select(),p.set.selected(),p.observe.select())}},menu:{mutation:function(e){var t=e[0],n=t.addedNodes?_(t.addedNodes[0]):_(!1),i=t.removedNodes?_(t.removedNodes[0]):_(!1),o=n.add(i),a=o.is(y.addition)||0<o.closest(y.addition).length,r=o.is(y.message)||0<o.closest(y.message).length;a||r?(p.debug("Updating item selector cache"),p.refreshItems()):(p.debug("Menu modified, updating selector cache"),p.refresh())},mousedown:function(){L=!0},mouseup:function(){L=!1}},item:{mouseenter:function(e){var t=_(e.target),n=_(this),i=n.children(y.menu),o=n.siblings(y.item).children(y.menu),a=0<i.length;0<i.find(t).length||!a||(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Showing sub-menu",i),_.each(o,function(){p.animate.hide(!1,_(this))}),p.animate.show(!1,i)},g.delay.show),e.preventDefault())},mouseleave:function(e){var t=_(this).children(y.menu);0<t.length&&(clearTimeout(p.itemTimer),p.itemTimer=setTimeout(function(){p.verbose("Hiding sub-menu",t),p.animate.hide(!1,t)},g.delay.hide))},click:function(e,t){var n=_(this),i=_(e?e.target:""),o=n.find(y.menu),a=p.get.choiceText(n),r=p.get.choiceValue(n,a),s=0<o.length,l=0<o.find(i).length;"input"!==te.activeElement.tagName.toLowerCase()&&_(te.activeElement).blur(),l||s&&!g.allowCategorySelection||(p.is.searchSelection()&&(g.allowAdditions&&p.remove.userAddition(),p.remove.searchTerm(),p.is.focusedOnSearch()||1==t||p.focusSearch(!0)),g.useLabels||(p.remove.filteredItem(),p.set.scrollPosition(n)),p.determine.selectAction.call(this,a,r))}},document:{keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n=k.find(y.label),i=n.filter("."+h.active),o=(i.data(b.value),n.index(i)),a=n.length,r=0<i.length,s=1<i.length,l=0===o,c=o+1==a,u=p.is.searchSelection(),d=p.is.focusedOnSearch(),f=p.is.focused(),m=d&&0===p.get.caretPosition(!1),g=m&&0!==p.get.caretPosition(!0);if(u&&!r&&!d)return;t==v.leftArrow?!f&&!m||r?r&&(e.shiftKey?p.verbose("Adding previous label to selection"):(p.verbose("Selecting previous label"),n.removeClass(h.active)),l&&!s?i.addClass(h.active):i.prev(y.siblingLabel).addClass(h.active).end(),e.preventDefault()):(p.verbose("Selecting previous label"),n.last().addClass(h.active)):t==v.rightArrow?(f&&!r&&n.first().addClass(h.active),r&&(e.shiftKey?p.verbose("Adding next label to selection"):(p.verbose("Selecting next label"),n.removeClass(h.active)),c?u?d?n.removeClass(h.active):p.focusSearch():s?i.next(y.siblingLabel).addClass(h.active):i.addClass(h.active):i.next(y.siblingLabel).addClass(h.active),e.preventDefault())):t==v.deleteKey||t==v.backspace?r?(p.verbose("Removing active labels"),c&&u&&!d&&p.focusSearch(),i.last().next(y.siblingLabel).addClass(h.active),p.remove.activeLabels(i),e.preventDefault()):!m||g||r||t!=v.backspace||(p.verbose("Removing last label on input backspace"),i=n.last().addClass(h.active),p.remove.activeLabels(i)):i.removeClass(h.active)}}},keydown:function(e){var t=e.which;if(p.is.inObject(t,v)){var n,i=M.not(y.unselectable).filter("."+h.selected).eq(0),o=O.children("."+h.active).eq(0),a=0<i.length?i:o,r=0<a.length?a.siblings(":not(."+h.filtered+")").addBack():O.children(":not(."+h.filtered+")"),s=a.children(y.menu),l=a.closest(y.menu),c=l.hasClass(h.visible)||l.hasClass(h.animating)||0<l.parent(y.menu).length,u=0<s.length,d=0<a.length,f=0<a.not(y.unselectable).length,m=t==v.delimiter&&g.allowAdditions&&p.is.multiple();if(g.allowAdditions&&g.hideAdditions&&(t==v.enter||m)&&f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&p.remove.searchTerm(),p.is.multiple()&&e.preventDefault()),p.is.visible()){if(t!=v.enter&&!m||(t==v.enter&&d&&u&&!g.allowCategorySelection?(p.verbose("Pressed enter on unselectable category, opening sub menu"),t=v.rightArrow):f&&(p.verbose("Selecting item from keyboard shortcut",a),p.event.item.click.call(a,e),p.is.searchSelection()&&(p.remove.searchTerm(),p.is.multiple()&&D.focus())),e.preventDefault()),d&&(t==v.leftArrow&&l[0]!==O[0]&&(p.verbose("Left key pressed, closing sub-menu"),p.animate.hide(!1,l),a.removeClass(h.selected),l.closest(y.item).addClass(h.selected),e.preventDefault()),t==v.rightArrow&&u&&(p.verbose("Right key pressed, opening sub-menu"),p.animate.show(!1,s),a.removeClass(h.selected),s.find(y.item).eq(0).addClass(h.selected),e.preventDefault())),t==v.upArrow){if(n=d&&c?a.prevAll(y.item+":not("+y.unselectable+")").eq(0):M.eq(0),r.index(n)<0)return p.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();p.verbose("Up key pressed, changing active item"),a.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}if(t==v.downArrow){if(0===(n=d&&c?n=a.nextAll(y.item+":not("+y.unselectable+")").eq(0):M.eq(0)).length)return p.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();p.verbose("Down key pressed, changing active item"),M.removeClass(h.selected),n.addClass(h.selected),p.set.scrollPosition(n),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),e.preventDefault()}t==v.pageUp&&(p.scrollPage("up"),e.preventDefault()),t==v.pageDown&&(p.scrollPage("down"),e.preventDefault()),t==v.escape&&(p.verbose("Escape key pressed, closing dropdown"),p.hide())}else m&&e.preventDefault(),t!=v.downArrow||p.is.visible()||(p.verbose("Down key pressed, showing dropdown"),p.show(),e.preventDefault())}else p.has.search()||p.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=te.createEvent("HTMLEvents"),t=E[0];t&&(p.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(e,t){c=!0,p.verbose("Determining action",g.action),_.isFunction(p.action[g.action])?(p.verbose("Triggering preset action",g.action,e,t),p.action[g.action].call(z,e,t,this)):_.isFunction(g.action)?(p.verbose("Triggering user action",g.action,e,t),g.action.call(z,e,t,this)):p.error(m.action,g.action),c=!1},eventInModule:function(e,t){var n=_(e.target),i=0<n.closest(te.documentElement).length,o=0<n.closest(k).length;return t=_.isFunction(t)?t:function(){},i&&!o?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(e,t){var n=_(e.target),i=n.closest(y.siblingLabel),o=te.body.contains(e.target),a=0===k.find(i).length||!(p.is.multiple()&&g.useLabels),r=0===n.closest(O).length;return t=_.isFunction(t)?t:function(){},o&&a&&r?(p.verbose("Triggering event",t),t(),!0):(p.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(e,t,n){t=t!==ne?t:e,p.can.activate(_(n))&&(p.set.selected(t,_(n)),p.is.multiple()||p.hideAndClear())},select:function(e,t,n){t=t!==ne?t:e,p.can.activate(_(n))&&(p.set.value(t,e,_(n)),p.is.multiple()||p.hideAndClear())},combo:function(e,t,n){t=t!==ne?t:e,p.set.selected(t,_(n)),p.hideAndClear()},hide:function(e,t,n){p.set.value(t,e,_(n)),p.hideAndClear()}},get:{id:function(){return a},defaultText:function(){return k.data(b.defaultText)},defaultValue:function(){return k.data(b.defaultValue)},placeholderText:function(){return"auto"!=g.placeholder&&"string"==typeof g.placeholder?g.placeholder:k.data(b.placeholderText)||""},text:function(){return S.text()},query:function(){return _.trim(D.val())},searchWidth:function(e){return e=e!==ne?e:D.val(),A.text(e),Math.ceil(A.width()+1)},selectionCount:function(){var e=p.get.values();return p.is.multiple()?Array.isArray(e)?e.length:0:""!==p.get.value()?1:0},transition:function(e){return"auto"==g.transition?p.is.upward(e)?"slide up":"slide down":g.transition},userValues:function(){var e=p.get.values();return!!e&&(e=Array.isArray(e)?e:[e],_.grep(e,function(e){return!1===p.get.item(e)}))},uniqueArray:function(n){return _.grep(n,function(e,t){return _.inArray(e,n)===t})},caretPosition:function(e){var t,n,i=D.get(0);return e&&"selectionEnd"in i?i.selectionEnd:!e&&"selectionStart"in i?i.selectionStart:te.selection?(i.focus(),n=(t=te.selection.createRange()).text.length,e?n:(t.moveStart("character",-i.value.length),t.text.length-n)):void 0},value:function(){var e=0<E.length?E.val():k.data(b.value),t=Array.isArray(e)&&1===e.length&&""===e[0];return e===ne||t?"":e},values:function(){var e=p.get.value();return""===e?"":!p.has.selectInput()&&p.is.multiple()?"string"==typeof e?p.escape.htmlEntities(e).split(g.delimiter):"":e},remoteValues:function(){var e=p.get.values(),i=!1;return e&&("string"==typeof e&&(e=[e]),_.each(e,function(e,t){var n=p.read.remoteData(t);p.verbose("Restoring value from session data",n,t),n&&((i=i||{})[t]=n)})),i},choiceText:function(e,t){if(t=t!==ne?t:g.preserveHTML,e)return 0<e.find(y.menu).length&&(p.verbose("Retrieving text of element with sub-menu"),(e=e.clone()).find(y.menu).remove(),e.find(y.menuIcon).remove()),e.data(b.text)!==ne?e.data(b.text):t?_.trim(e.html()):_.trim(e.text())},choiceValue:function(e,t){return t=t||p.get.choiceText(e),!!e&&(e.data(b.value)!==ne?String(e.data(b.value)):"string"==typeof t?_.trim(g.ignoreSearchCase?t.toLowerCase():t):String(t))},inputEvent:function(){var e=D[0];return!!e&&(e.oninput!==ne?"input":e.onpropertychange!==ne?"propertychange":"keyup")},selectValues:function(){var r={},s=[];return r.values=[],k.find("option").each(function(){var e=_(this),t=e.html(),n=e.attr("disabled"),i=e.attr("value")!==ne?e.attr("value"):t,o=e.data(b.text)!==ne?e.data(b.text):t,a=e.parent("optgroup");"auto"===g.placeholder&&""===i?r.placeholder=t:(a.length===s.length&&a[0]===s[0]||(r.values.push({type:"header",divider:g.headerDivider,name:a.attr("label")||""}),s=a),r.values.push({name:t,value:i,text:o,disabled:n}))}),g.placeholder&&"auto"!==g.placeholder&&(p.debug("Setting placeholder value to",g.placeholder),r.placeholder=g.placeholder),g.sortSelect?(!0===g.sortSelect?r.values.sort(function(e,t){return e.name.localeCompare(t.name)}):"natural"===g.sortSelect?r.values.sort(function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}):_.isFunction(g.sortSelect)&&r.values.sort(g.sortSelect),p.debug("Retrieved and sorted values from select",r)):p.debug("Retrieved values from select",r),r},activeItem:function(){return M.filter("."+h.active)},selectedItem:function(){var e=M.not(y.unselectable).filter("."+h.selected);return 0<e.length?e:M.eq(0)},itemWithAdditions:function(e){var t=p.get.item(e),n=p.create.userChoice(e);return n&&0<n.length&&(t=0<t.length?t.add(n):n),t},item:function(i,o){var e,a,r=!1;return i=i!==ne?i:p.get.values()!==ne?p.get.values():p.get.text(),e=(a=p.is.multiple()&&Array.isArray(i))?0<i.length:i!==ne&&null!==i,o=""===i||!1===i||!0===i||(o||!1),e&&M.each(function(){var e=_(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);if(null!==n&&n!==ne)if(a)-1!==_.inArray(p.escape.htmlEntities(String(n)),i)&&(r=r?r.add(e):e);else if(o){if(p.verbose("Ambiguous dropdown value using strict type check",e,i),n===i)return r=e,!0}else if(g.ignoreCase&&(n=n.toLowerCase(),i=i.toLowerCase()),p.escape.htmlEntities(String(n))===p.escape.htmlEntities(String(i)))return p.verbose("Found select item by value",n,i),r=e,!0}),r}},check:{maxSelections:function(e){return!g.maxSelections||((e=e!==ne?e:p.get.selectionCount())>=g.maxSelections?(p.debug("Maximum selection count reached"),g.useLabels&&(M.addClass(h.filtered),p.add.message(u.maxSelections)),!0):(p.verbose("No longer at maximum selection count"),p.remove.message(),p.remove.filteredItem(),p.is.searchSelection()&&p.filterItems(),!1))}},restore:{defaults:function(e){p.clear(e),p.restore.defaultText(),p.restore.defaultValue()},defaultText:function(){var e=p.get.defaultText();e===p.get.placeholderText?(p.debug("Restoring default placeholder text",e),p.set.placeholderText(e)):(p.debug("Restoring default text",e),p.set.text(e))},placeholderText:function(){p.set.placeholderText()},defaultValue:function(){var e=p.get.defaultValue();e!==ne&&(p.debug("Restoring default value",e),""!==e?(p.set.value(e),p.set.selected()):(p.remove.activeItem(),p.remove.selectedItem()))},labels:function(){g.allowAdditions&&(g.useLabels||(p.error(m.labels),g.useLabels=!0),p.debug("Restoring selected values"),p.create.userLabels()),p.check.maxSelections()},selected:function(){p.restore.values(),p.is.multiple()?(p.debug("Restoring previously selected values and labels"),p.restore.labels()):p.debug("Restoring previously selected values")},values:function(){p.set.initialLoad(),g.apiSettings&&g.saveRemoteData&&p.get.remoteValues()?p.restore.remoteValues():p.set.selected();var e=p.get.value();!e||""===e||Array.isArray(e)&&0===e.length?E.addClass(h.noselection):E.removeClass(h.noselection),p.remove.initialLoad()},remoteValues:function(){var e=p.get.remoteValues();p.debug("Recreating selected from session data",e),e&&(p.is.single()?_.each(e,function(e,t){p.set.text(t)}):_.each(e,function(e,t){p.add.label(e,t)}))}},read:{remoteData:function(e){var t;if(ee.Storage!==ne)return(t=sessionStorage.getItem(e))!==ne&&t;p.error(m.noStorage)}},save:{defaults:function(){p.save.defaultText(),p.save.placeholderText(),p.save.defaultValue()},defaultValue:function(){var e=p.get.value();p.verbose("Saving default value as",e),k.data(b.defaultValue,e)},defaultText:function(){var e=p.get.text();p.verbose("Saving default text as",e),k.data(b.defaultText,e)},placeholderText:function(){var e;!1!==g.placeholder&&S.hasClass(h.placeholder)&&(e=p.get.text(),p.verbose("Saving placeholder text as",e),k.data(b.placeholderText,e))},remoteData:function(e,t){ee.Storage!==ne?(p.verbose("Saving remote data to session storage",t,e),sessionStorage.setItem(t,e)):p.error(m.noStorage)}},clear:function(e){p.is.multiple()&&g.useLabels?p.remove.labels():(p.remove.activeItem(),p.remove.selectedItem(),p.remove.filteredItem()),p.set.placeholderText(),p.clearValue(e)},clearValue:function(e){p.set.value("",null,null,e)},scrollPage:function(e,t){var n,i,o=t||p.get.selectedItem(),a=o.closest(y.menu),r=a.outerHeight(),s=a.scrollTop(),l=M.eq(0).outerHeight(),c=Math.floor(r/l),u=(a.prop("scrollHeight"),"up"==e?s-l*c:s+l*c),d=M.not(y.unselectable);i="up"==e?d.index(o)-c:d.index(o)+c,0<(n=("up"==e?0<=i:i<d.length)?d.eq(i):"up"==e?d.first():d.last()).length&&(p.debug("Scrolling page",e,n),o.removeClass(h.selected),n.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(n),a.scrollTop(u))},set:{filtered:function(){var e=p.is.multiple(),t=p.is.searchSelection(),n=e&&t,i=t?p.get.query():"",o="string"==typeof i&&0<i.length,a=p.get.searchWidth(),r=""!==i;e&&o&&(p.verbose("Adjusting input width",a,g.glyphWidth),D.css("width",a)),o||n&&r?(p.verbose("Hiding placeholder text"),S.addClass(h.filtered)):e&&(!n||r)||(p.verbose("Showing placeholder text"),S.removeClass(h.filtered))},empty:function(){k.addClass(h.empty)},loading:function(){k.addClass(h.loading)},placeholderText:function(e){e=e||p.get.placeholderText(),p.debug("Setting placeholder text",e),p.set.text(e),S.addClass(h.placeholder)},tabbable:function(){p.is.searchSelection()?(p.debug("Added tabindex to searchable dropdown"),D.val("").attr("tabindex",0),O.attr("tabindex",-1)):(p.debug("Added tabindex to dropdown"),k.attr("tabindex")===ne&&(k.attr("tabindex",0),O.attr("tabindex",-1)))},initialLoad:function(){p.verbose("Setting initial load"),e=!0},activeItem:function(e){g.allowAdditions&&0<e.filter(y.addition).length?e.addClass(h.filtered):e.addClass(h.active)},partialSearch:function(e){var t=p.get.query().length;D.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,r,s;n=(e=e||p.get.selectedItem()).closest(y.menu),i=e&&0<e.length,t=t!==ne&&t,0===p.get.activeItem().length&&(t=!1),e&&0<n.length&&i&&(e.position().top,n.addClass(h.loading),o=(a=n.scrollTop())-n.offset().top+e.offset().top,t||(s=a+n.height()<o+5,r=o-5<a),p.debug("Scrolling to active item",o),(t||r||s)&&n.scrollTop(o),n.removeClass(h.loading))},text:function(e){"combo"===g.action?(p.debug("Changing combo button text",e,R),g.preserveHTML?R.html(e):R.text(e)):"activate"===g.action&&(e!==p.get.placeholderText()&&S.removeClass(h.placeholder),p.debug("Changing text",e,S),S.removeClass(h.filtered),g.preserveHTML?S.html(e):S.text(e))},selectedItem:function(e){var t=p.get.choiceValue(e),n=p.get.choiceText(e,!1),i=p.get.choiceText(e,!0);p.debug("Setting user selection to item",e),p.remove.activeItem(),p.set.partialSearch(n),p.set.activeItem(e),p.set.selected(t,e),p.set.text(i)},selectedLetter:function(e){var t,n=M.filter("."+h.selected),i=0<n.length&&p.has.firstLetter(n,e),o=!1;i&&(t=n.nextAll(M).eq(0),p.has.firstLetter(t,e)&&(o=t)),o||M.each(function(){if(p.has.firstLetter(_(this),e))return o=_(this),!1}),o&&(p.verbose("Scrolling to next value with letter",e),p.set.scrollPosition(o),n.removeClass(h.selected),o.addClass(h.selected),g.selectOnKeydown&&p.is.single()&&p.set.selectedItem(o))},direction:function(e){"auto"==g.direction?(e?p.is.upward(e)&&p.remove.upward(e):p.remove.upward(),p.can.openDownward(e)?p.remove.upward(e):p.set.upward(e),p.is.leftward(e)||p.can.openRightward(e)||p.set.leftward(e)):"upward"==g.direction&&p.set.upward(e)},upward:function(e){(e||k).addClass(h.upward)},leftward:function(e){(e||O).addClass(h.leftward)},value:function(e,t,n,i){e===ne||""===e||Array.isArray(e)&&0===e.length?E.addClass(h.noselection):E.removeClass(h.noselection);var o=p.escape.value(e),a=0<E.length,r=p.get.values(),s=e!==ne?String(e):e;if(a){if(!g.allowReselection&&s==r&&(p.verbose("Skipping value update already same value",e,r),!p.is.initialLoad()))return;p.is.single()&&p.has.selectInput()&&p.can.extendSelect()&&(p.debug("Adding user option",e),p.add.optionValue(e)),p.debug("Updating input value",o,r),q=!0,E.val(o),!1===g.fireOnInit&&p.is.initialLoad()?p.debug("Input native change event ignored on initial load"):!0!==i&&p.trigger.change(),q=!1}else p.verbose("Storing value in metadata",o,E),o!==r&&k.data(b.value,s);!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onChange):!0!==i&&g.onChange.call(z,e,t,n)},active:function(){k.addClass(h.active)},multiple:function(){k.addClass(h.multiple)},visible:function(){k.addClass(h.visible)},exactly:function(e,t){p.debug("Setting selected to exact values"),p.clear(),p.set.selected(e,t)},selected:function(e,s){var l=p.is.multiple();(s=g.allowAdditions?s||p.get.itemWithAdditions(e):s||p.get.item(e))&&(p.debug("Setting selected menu item to",s),p.is.multiple()&&p.remove.searchWidth(),p.is.single()?(p.remove.activeItem(),p.remove.selectedItem()):g.useLabels&&p.remove.selectedItem(),s.each(function(){var e=_(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t),i=e.hasClass(h.filtered),o=e.hasClass(h.active),a=e.hasClass(h.addition),r=l&&1==s.length;l?!o||a?(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),g.useLabels?(p.add.label(n,t,r),p.add.value(n,t,e),p.set.activeItem(e),p.filterActive(),p.select.nextAvailable(s)):(p.add.value(n,t,e),p.set.text(p.add.variables(u.count)),p.set.activeItem(e))):i||!g.useLabels&&!c||(p.debug("Selected active value, removing label"),p.remove.selected(n)):(g.apiSettings&&g.saveRemoteData&&p.save.remoteData(t,n),p.set.text(t),p.set.value(n,t,e),e.addClass(h.active).addClass(h.selected))}),p.remove.searchTerm())}},add:{label:function(e,t,n){var i,o=p.is.searchSelection()?D:S,a=p.escape.value(e);g.ignoreCase&&(a=a.toLowerCase()),i=_("<a />").addClass(h.label).attr("data-"+b.value,a).html(x.label(a,t,g.preserveHTML,g.className)),i=g.onLabelCreate.call(i,a,t),p.has.label(e)?p.debug("User selection already exists, skipping",a):(g.label.variation&&i.addClass(g.label.variation),!0===n?(p.debug("Animating in label",i),i.addClass(h.hidden).insertBefore(o).transition({animation:g.label.transition,debug:g.debug,verbose:g.verbose,duration:g.label.duration})):(p.debug("Adding selection label",i),i.insertBefore(o)))},message:function(e){var t=O.children(y.message),n=g.templates.message(p.add.variables(e));0<t.length?t.html(n):t=_("<div/>").html(n).addClass(h.message).appendTo(O)},optionValue:function(e){var t=p.escape.value(e);0<E.find('option[value="'+p.escape.string(t)+'"]').length||(p.disconnect.selectObserver(),p.is.single()&&(p.verbose("Removing previous user addition"),E.find("option."+h.addition).remove()),_("<option/>").prop("value",t).addClass(h.addition).html(e).appendTo(E),p.verbose("Adding user addition as an <option>",e),p.observe.select())},userSuggestion:function(e){var t,n=O.children(y.addition),i=p.get.item(e),o=i&&i.not(y.addition).length,a=0<n.length;g.useLabels&&p.has.maxSelections()||(""===e||o?n.remove():(a?(n.data(b.value,e).data(b.text,e).attr("data-"+b.value,e).attr("data-"+b.text,e).removeClass(h.filtered),g.hideAdditions||(t=g.templates.addition(p.add.variables(u.addResult,e)),n.html(t)),p.verbose("Replacing user suggestion with new value",n)):((n=p.create.userChoice(e)).prependTo(O),p.verbose("Adding item choice to menu corresponding with user choice addition",n)),g.hideAdditions&&!p.is.allFiltered()||n.addClass(h.selected).siblings().removeClass(h.selected),p.refreshItems()))},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),r=-1!==e.search("{term}");return p.verbose("Adding templated variables to message",e),o&&(n=p.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=p.get.selectionCount(),e=e.replace("{maxCount}",g.maxSelections)),r&&(i=t||p.get.query(),e=e.replace("{term}",i)),e},value:function(e,t,n){var i,o=p.get.values();p.has.value(e)?p.debug("Value already selected"):""!==e?(i=Array.isArray(o)?(i=o.concat([e]),p.get.uniqueArray(i)):[e],p.has.selectInput()?p.can.extendSelect()&&(p.debug("Adding value to select",e,i,E),p.add.optionValue(e)):(i=i.join(g.delimiter),p.debug("Setting hidden input to delimited value",i,E)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("Skipping onadd callback on initial load",g.onAdd):g.onAdd.call(z,e,t,n),p.set.value(i,t,n),p.check.maxSelections()):p.debug("Cannot select blank values from multiselect")}},remove:{active:function(){k.removeClass(h.active)},activeLabel:function(){k.find(y.label).removeClass(h.active)},empty:function(){k.removeClass(h.empty)},loading:function(){k.removeClass(h.loading)},initialLoad:function(){e=!1},upward:function(e){(e||k).removeClass(h.upward)},leftward:function(e){(e||O).removeClass(h.leftward)},visible:function(){k.removeClass(h.visible)},activeItem:function(){M.removeClass(h.active)},filteredItem:function(){g.useLabels&&p.has.maxSelections()||(g.useLabels&&p.is.multiple()?M.not("."+h.active).removeClass(h.filtered):M.removeClass(h.filtered),g.hideDividers&&I.removeClass(h.hidden),p.remove.empty())},optionValue:function(e){var t=p.escape.value(e),n=E.find('option[value="'+p.escape.string(t)+'"]');0<n.length&&n.hasClass(h.addition)&&(r&&(r.disconnect(),p.verbose("Temporarily disconnecting mutation observer")),n.remove(),p.verbose("Removing user addition as an <option>",t),r&&r.observe(E[0],{childList:!0,subtree:!0}))},message:function(){O.children(y.message).remove()},searchWidth:function(){D.css("width","")},searchTerm:function(){p.verbose("Cleared search term"),D.val(""),p.set.filtered()},userAddition:function(){M.filter(y.addition).remove()},selected:function(e,t){if(!(t=g.allowAdditions?t||p.get.itemWithAdditions(e):t||p.get.item(e)))return!1;t.each(function(){var e=_(this),t=p.get.choiceText(e),n=p.get.choiceValue(e,t);p.is.multiple()?g.useLabels?(p.remove.value(n,t,e),p.remove.label(n)):(p.remove.value(n,t,e),0===p.get.selectionCount()?p.set.placeholderText():p.set.text(p.add.variables(u.count))):p.remove.value(n,t,e),e.removeClass(h.filtered).removeClass(h.active),g.useLabels&&e.removeClass(h.selected)})},selectedItem:function(){M.removeClass(h.selected)},value:function(e,t,n){var i,o=p.get.values();e=p.escape.htmlEntities(e),p.has.selectInput()?(p.verbose("Input is <select> removing selected option",e),i=p.remove.arrayValue(e,o),p.remove.optionValue(e)):(p.verbose("Removing from delimited values",e),i=(i=p.remove.arrayValue(e,o)).join(g.delimiter)),!1===g.fireOnInit&&p.is.initialLoad()?p.verbose("No callback on initial load",g.onRemove):g.onRemove.call(z,e,t,n),p.set.value(i,t,n),p.check.maxSelections()},arrayValue:function(t,e){return Array.isArray(e)||(e=[e]),e=_.grep(e,function(e){return t!=e}),p.verbose("Removed value from delimited string",t,e),e},label:function(e,t){var n=k.find(y.label).filter("[data-"+b.value+'="'+p.escape.string(g.ignoreCase?e.toLowerCase():e)+'"]');p.verbose("Removing label",n),n.remove()},activeLabels:function(e){e=e||k.find(y.label).filter("."+h.active),p.verbose("Removing active label selections",e),p.remove.labels(e)},labels:function(e){e=e||k.find(y.label),p.verbose("Removing labels",e),e.each(function(){var e=_(this),t=e.data(b.value),n=t!==ne?String(t):t,i=p.is.userValue(n);!1!==g.onLabelRemove.call(e,t)?(p.remove.message(),i?(p.remove.value(n),p.remove.label(n)):p.remove.selected(n)):p.debug("Label remove callback cancelled removal")})},tabbable:function(){p.is.searchSelection()?(p.debug("Searchable dropdown initialized"),D.removeAttr("tabindex")):(p.debug("Simple selection dropdown initialized"),k.removeAttr("tabindex")),O.removeAttr("tabindex")},diacritics:function(e){return g.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},has:{menuSearch:function(){return p.has.search()&&0<D.closest(O).length},clearItem:function(){return 0<F.length},search:function(){return 0<D.length},sizer:function(){return 0<A.length},selectInput:function(){return E.is("select")},minCharacters:function(e){return g.minCharacters&&!V?(e=e!==ne?String(e):String(p.get.query())).length>=g.minCharacters:!(V=!1)},firstLetter:function(e,t){var n;return!(!e||0===e.length||"string"!=typeof t)&&(n=p.get.choiceText(e,!1),(t=t.toLowerCase())==String(n).charAt(0).toLowerCase())},input:function(){return 0<E.length},items:function(){return 0<M.length},menu:function(){return 0<O.length},message:function(){return 0!==O.children(y.message).length},label:function(e){var t=p.escape.value(e),n=k.find(y.label);return g.ignoreCase&&(t=t.toLowerCase()),0<n.filter("[data-"+b.value+'="'+p.escape.string(t)+'"]').length},maxSelections:function(){return g.maxSelections&&p.get.selectionCount()>=g.maxSelections},allResultsFiltered:function(){var e=M.not(y.addition);return e.filter(y.unselectable).length===e.length},userSuggestion:function(){return 0<O.children(y.addition).length},query:function(){return""!==p.get.query()},value:function(e){return g.ignoreCase?p.has.valueIgnoringCase(e):p.has.valueMatchingCase(e)},valueMatchingCase:function(e){var t=p.get.values();return!!(Array.isArray(t)?t&&-1!==_.inArray(e,t):t==e)},valueIgnoringCase:function(n){var e=p.get.values(),i=!1;return Array.isArray(e)||(e=[e]),_.each(e,function(e,t){if(String(n).toLowerCase()==String(t).toLowerCase())return!(i=!0)}),i}},is:{active:function(){return k.hasClass(h.active)},animatingInward:function(){return O.transition("is inward")},animatingOutward:function(){return O.transition("is outward")},bubbledLabelClick:function(e){return _(e.target).is("select, input")&&0<k.closest("label").length},bubbledIconClick:function(e){return 0<_(e.target).closest(P).length},alreadySetup:function(){return k.is("select")&&k.parent(y.dropdown).data(w)!==ne&&0===k.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):O.transition&&O.transition("is animating")},leftward:function(e){return(e||O).hasClass(h.leftward)},clearable:function(){return k.hasClass(h.clearable)||g.clearable},disabled:function(){return k.hasClass(h.disabled)},focused:function(){return te.activeElement===k[0]},focusedOnSearch:function(){return te.activeElement===D[0]},allFiltered:function(){return(p.is.multiple()||p.has.search())&&!(0==g.hideAdditions&&p.has.userSuggestion())&&!p.has.message()&&p.has.allResultsFiltered()},hidden:function(e){return!p.is.visible(e)},initialLoad:function(){return e},inObject:function(n,e){var i=!1;return _.each(e,function(e,t){if(t==n)return i=!0}),i},multiple:function(){return k.hasClass(h.multiple)},remote:function(){return g.apiSettings&&p.can.useAPI()},single:function(){return!p.is.multiple()},selectMutation:function(e){var n=!1;return _.each(e,function(e,t){if(_(t.target).is("select")||_(t.addedNodes).is("select"))return!(n=!0)}),n},search:function(){return k.hasClass(h.search)},searchSelection:function(){return p.has.search()&&1===D.parent(y.dropdown).length},selection:function(){return k.hasClass(h.selection)},userValue:function(e){return-1!==_.inArray(e,p.get.userValues())},upward:function(e){return(e||k).hasClass(h.upward)},visible:function(e){return e?e.hasClass(h.visible):O.hasClass(h.visible)},verticallyScrollableContext:function(){var e=T.get(0)!==ee&&T.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=T.get(0)!==ee&&T.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!g.useLabels||(!p.has.maxSelections()||!(!p.has.maxSelections()||!e.hasClass(h.active)))},openDownward:function(e){var t,n,i=e||O,o=!0;return i.addClass(h.loading),n={context:{offset:T.get(0)===ee?{top:0,left:0}:T.offset(),scrollTop:T.scrollTop(),height:T.outerHeight()},menu:{offset:i.offset(),height:i.outerHeight()}},p.is.verticallyScrollableContext()&&(n.menu.offset.top+=n.context.scrollTop),o=(t={above:n.context.scrollTop<=n.menu.offset.top-n.context.offset.top-n.menu.height,below:n.context.scrollTop+n.context.height>=n.menu.offset.top-n.context.offset.top+n.menu.height}).below?(p.verbose("Dropdown can fit in context downward",t),!0):t.below||t.above?(p.verbose("Dropdown cannot fit below, opening upward",t),!1):(p.verbose("Dropdown cannot fit in either direction, favoring downward",t),!0),i.removeClass(h.loading),o},openRightward:function(e){var t,n,i=e||O,o=!0;return i.addClass(h.loading),n={context:{offset:T.get(0)===ee?{top:0,left:0}:T.offset(),scrollLeft:T.scrollLeft(),width:T.outerWidth()},menu:{offset:i.offset(),width:i.outerWidth()}},p.is.horizontallyScrollableContext()&&(n.menu.offset.left+=n.context.scrollLeft),(t=n.menu.offset.left-n.context.offset.left+n.menu.width>=n.context.scrollLeft+n.context.width)&&(p.verbose("Dropdown cannot fit in context rightward",t),o=!1),i.removeClass(h.loading),o},click:function(){return Q||"click"==g.on},extendSelect:function(){return g.allowAdditions||g.apiSettings},show:function(){return!p.is.disabled()&&(p.has.items()||p.has.message())},useAPI:function(){return _.fn.api!==ne}},animate:{show:function(e,t){var n,i=t||O,o=t?function(){}:function(){p.hideSubMenus(),p.hideOthers(),p.set.active()};e=_.isFunction(e)?e:function(){},p.verbose("Doing menu show animation",i),p.set.direction(t),n=p.get.transition(t),p.is.selection()&&p.set.scrollPosition(p.get.selectedItem(),!0),(p.is.hidden(i)||p.is.animating(i))&&("none"==n?(o(),i.transition("show"),e.call(z)):_.fn.transition!==ne&&k.transition("is supported")?i.transition({animation:n+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0,onStart:o,onComplete:function(){e.call(z)}}):p.error(m.noTransition,n))},hide:function(e,t){var n=t||O,i=t?function(){}:function(){p.can.click()&&p.unbind.intent(),p.remove.active()},o=p.get.transition(t);e=_.isFunction(e)?e:function(){},(p.is.visible(n)||p.is.animating(n))&&(p.verbose("Doing menu hide animation",n),"none"==o?(i(),n.transition("hide"),e.call(z)):_.fn.transition!==ne&&k.transition("is supported")?n.transition({animation:o+" out",duration:g.duration,debug:g.debug,verbose:g.verbose,queue:!1,onStart:i,onComplete:function(){e.call(z)}}):p.error(m.transition))}},hideAndClear:function(){p.remove.searchTerm(),p.has.maxSelections()||(p.has.search()?p.hide(function(){p.remove.filteredItem()}):p.hide())},delay:{show:function(){p.verbose("Delaying show event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.show,g.delay.show)},hide:function(){p.verbose("Delaying hide event to ensure user intent"),clearTimeout(p.timer),p.timer=setTimeout(p.hide,g.delay.hide)}},escape:{value:function(e){var t=Array.isArray(e),n="string"==typeof e,i=!n&&!t,o=n&&-1!==e.search(f.quote),a=[];return i||!o?e:(p.debug("Encoding quote values for use in select",e),t?(_.each(e,function(e,t){a.push(t.replace(f.quote,"&quot;"))}),a):e.replace(f.quote,"&quot;"))},string:function(e){return(e=String(e)).replace(f.escape,"\\$&")},htmlEntities:function(e){var t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return t[e]}):e}},setting:function(e,t){if(p.debug("Changing setting",e,t),_.isPlainObject(e))_.extend(!0,g,e);else{if(t===ne)return g[e];_.isPlainObject(g[e])?_.extend(!0,g[e],t):g[e]=t}},internal:function(e,t){if(_.isPlainObject(e))_.extend(!0,p,e);else{if(t===ne)return p[e];p[e]=t}},debug:function(){!g.silent&&g.debug&&(g.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,g.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),p.verbose.apply(console,arguments)))},error:function(){g.silent||(p.error=Function.prototype.bind.call(console.error,console,g.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,n;g.performance&&(n=(t=(new Date).getTime())-($||t),$=t,G.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":n})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,500)},display:function(){var e=g.name+":",n=0;$=!1,clearTimeout(p.performance.timer),_.each(G,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",Y&&(e+=" '"+Y+"'"),(console.group!==ne||console.table!==ne)&&0<G.length&&(console.groupCollapsed(e),console.table?console.table(G):_.each(G,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),G=[]}},invoke:function(i,e,t){var o,a,n,r=N;return e=e||Z,t=z||t,"string"==typeof i&&r!==ne&&(i=i.split(/[\. ]/),o=i.length-1,_.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(_.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==ne)return a=r[n],!1;if(!_.isPlainObject(r[t])||e==o)return r[t]!==ne?a=r[t]:p.error(m.method,i),!1;r=r[t]}})),_.isFunction(a)?n=a.apply(t,e):a!==ne&&(n=a),Array.isArray(U)?U.push(n):U!==ne?U=[U,n]:n!==ne&&(U=n),a}},J?(N===ne&&p.initialize(),p.invoke(K)):(N!==ne&&N.invoke("destroy"),p.initialize())}),U!==ne?U:B},_.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",values:!1,clearable:!1,apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:ee,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,ignoreDiacritics:!1,hideDividers:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,ignoreCase:!1,ignoreSearchCase:!0,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,headerDivider:!0,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(e,t){return _(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text",type:"type",image:"image",imageClass:"imageClass",icon:"icon",iconClass:"iconClass",class:"class",divider:"divider"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",divider:".divider, .header",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered",clearIcon:"> .remove.icon"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",icon:"icon",image:"image",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible",clearable:"clearable",noselection:"noselection",delete:"delete",header:"header",divider:"divider",groupIcon:"",unfilterable:"unfilterable"}},_.fn.dropdown.settings.templates={deQuote:function(e){return String(e).replace(/"/g,"")},escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e},dropdown:function(e,t,n,i){var o=e.placeholder||!1,a="",r=_.fn.dropdown.settings.templates.escape;return a+='<i class="dropdown icon"></i>',a+=o?'<div class="default text">'+r(o,n)+"</div>":'<div class="text"></div>',a+='<div class="'+i.menu+'">',a+=_.fn.dropdown.settings.templates.menu(e,t,n,i),a+="</div>"},menu:function(e,s,l,c){var t=e[s.values]||[],u="",d=_.fn.dropdown.settings.templates.escape,f=_.fn.dropdown.settings.templates.deQuote;return _.each(t,function(e,t){var n=t[s.type]?t[s.type]:"item";if("item"===n){var i=t[s.text]?' data-text="'+f(t[s.text])+'"':"",o=t[s.disabled]?c.disabled+" ":"";u+='<div class="'+o+(t[s.class]?f(t[s.class]):c.item)+'" data-value="'+f(t[s.value])+'"'+i+">",t[s.image]&&(u+='<img class="'+(t[s.imageClass]?f(t[s.imageClass]):c.image)+'" src="'+f(t[s.image])+'">'),t[s.icon]&&(u+='<i class="'+f(t[s.icon])+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=d(t[s.name]||"",l),u+="</div>"}else if("header"===n){var a=d(t[s.name]||"",l),r=t[s.icon]?f(t[s.icon]):c.groupIcon;""===a&&""===r||(u+='<div class="'+(t[s.class]?f(t[s.class]):c.header)+'">',""!==r&&(u+='<i class="'+r+" "+(t[s.iconClass]?f(t[s.iconClass]):c.icon)+'"></i>'),u+=a,u+="</div>"),t[s.divider]&&(u+='<div class="'+c.divider+'"></div>')}}),u},label:function(e,t,n,i){return(0,_.fn.dropdown.settings.templates.escape)(t,n)+'<i class="'+i.delete+' icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(T,e,S){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.embed=function(p){var h,v=T(this),b=v.selector||"",y=(new Date).getTime(),x=[],C=p,w="string"==typeof C,k=[].slice.call(arguments,1);return v.each(function(){var s,i=T.isPlainObject(p)?T.extend(!0,{},T.fn.embed.settings,p):T.extend({},T.fn.embed.settings),e=i.selector,t=i.className,o=i.sources,l=i.error,a=i.metadata,n=i.namespace,r=i.templates,c="."+n,u="module-"+n,d=T(this),f=(d.find(e.placeholder),d.find(e.icon),d.find(e.embed)),m=this,g=d.data(u);s={initialize:function(){s.debug("Initializing embed"),s.determine.autoplay(),s.create(),s.bind.events(),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),g=s,d.data(u,s)},destroy:function(){s.verbose("Destroying previous instance of embed"),s.reset(),d.removeData(u).off(c)},refresh:function(){s.verbose("Refreshing selector cache"),d.find(e.placeholder),d.find(e.icon),f=d.find(e.embed)},bind:{events:function(){s.has.placeholder()&&(s.debug("Adding placeholder events"),d.on("click"+c,e.placeholder,s.createAndShow).on("click"+c,e.icon,s.createAndShow))}},create:function(){s.get.placeholder()?s.createPlaceholder():s.createAndShow()},createPlaceholder:function(e){var t=s.get.icon(),n=s.get.url();s.generate.embed(n);e=e||s.get.placeholder(),d.html(r.placeholder(e,t)),s.debug("Creating placeholder for embed",e,t)},createEmbed:function(e){s.refresh(),e=e||s.get.url(),f=T("<div/>").addClass(t.embed).html(s.generate.embed(e)).appendTo(d),i.onCreate.call(m,e),s.debug("Creating embed object",f)},changeEmbed:function(e){f.html(s.generate.embed(e))},createAndShow:function(){s.createEmbed(),s.show()},change:function(e,t,n){s.debug("Changing video to ",e,t,n),d.data(a.source,e).data(a.id,t),n?d.data(a.url,n):d.removeData(a.url),s.has.embed()?s.changeEmbed():s.create()},reset:function(){s.debug("Clearing embed and showing placeholder"),s.remove.data(),s.remove.active(),s.remove.embed(),s.showPlaceholder(),i.onReset.call(m)},show:function(){s.debug("Showing embed"),s.set.active(),i.onDisplay.call(m)},hide:function(){s.debug("Hiding embed"),s.showPlaceholder()},showPlaceholder:function(){s.debug("Showing placeholder image"),s.remove.active(),i.onPlaceholderDisplay.call(m)},get:{id:function(){return i.id||d.data(a.id)},placeholder:function(){return i.placeholder||d.data(a.placeholder)},icon:function(){return i.icon?i.icon:d.data(a.icon)!==S?d.data(a.icon):s.determine.icon()},source:function(e){return i.source?i.source:d.data(a.source)!==S?d.data(a.source):s.determine.source()},type:function(){var e=s.get.source();return o[e]!==S&&o[e].type},url:function(){return i.url?i.url:d.data(a.url)!==S?d.data(a.url):s.determine.url()}},determine:{autoplay:function(){s.should.autoplay()&&(i.autoplay=!0)},source:function(n){var i=!1;return(n=n||s.get.url())&&T.each(o,function(e,t){if(-1!==n.search(t.domain))return i=e,!1}),i},icon:function(){var e=s.get.source();return o[e]!==S&&o[e].icon},url:function(){var e,t=i.id||d.data(a.id),n=i.source||d.data(a.source);return(e=o[n]!==S&&o[n].url.replace("{id}",t))&&d.data(a.url,e),e}},set:{active:function(){d.addClass(t.active)}},remove:{data:function(){d.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url)},active:function(){d.removeClass(t.active)},embed:function(){f.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){s.debug("Generating embed html");var t,n,i=s.get.source();return(e=s.get.url(e))?(n=s.generate.parameters(i),t=r.iframe(e,n)):s.error(l.noURL,d),t},parameters:function(e,t){var n=o[e]&&o[e].parameters!==S?o[e].parameters(i):{};return(t=t||i.parameters)&&(n=T.extend({},n,t)),n=i.onEmbed(n),s.encode.parameters(n)}},has:{embed:function(){return 0<f.length},placeholder:function(){return i.placeholder||d.data(a.placeholder)}},should:{autoplay:function(){return"auto"===i.autoplay?i.placeholder||d.data(a.placeholder)!==S:i.autoplay}},is:{video:function(){return"video"==s.get.type()}},setting:function(e,t){if(s.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,i,e);else{if(t===S)return i[e];T.isPlainObject(i[e])?T.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,s,e);else{if(t===S)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;y=!1,clearTimeout(s.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),1<v.length&&(e+=" ("+v.length+")"),(console.group!==S||console.table!==S)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==S&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==S)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==S?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==S&&(n=a),Array.isArray(h)?h.push(n):h!==S?h=[h,n]:n!==S&&(h=n),a}},w?(g===S&&s.initialize(),s.invoke(C)):(g!==S&&g.invoke("destroy"),s.initialize())}),h!==S?h:this},T.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||S,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||S,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,void document),function(V,z,N,H){"use strict";V.isFunction=V.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},z=void 0!==z&&z.Math==Math?z:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),V.fn.modal=function(D){var A,e=V(this),E=V(z),P=V(N),F=V("body"),R=e.selector||"",O=(new Date).getTime(),M=[],I=D,j="string"==typeof I,L=[].slice.call(arguments,1),q=z.requestAnimationFrame||z.mozRequestAnimationFrame||z.webkitRequestAnimationFrame||z.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var o,a,e,i,n,r,s,t,l,c,u,d=V.isPlainObject(D)?V.extend(!0,{},V.fn.modal.settings,D):V.extend({},V.fn.modal.settings),f=d.selector,m=d.className,g=d.namespace,p=d.error,h="."+g,v="module-"+g,b=V(this),y=V(d.context),x=b.find(f.close),C=this,w=b.data(v),k=!1,T="",S="";u={initialize:function(){u.cache={},u.verbose("Initializing dimmer",y),u.create.id(),u.create.dimmer(),d.allowMultiple&&u.create.innerDimmer(),d.centered||b.addClass("top aligned"),u.refreshModals(),u.bind.events(),d.observeChanges&&u.observeChanges(),u.instantiate()},instantiate:function(){u.verbose("Storing instance of modal"),w=u,b.data(v,w)},create:{dimmer:function(){var e={debug:d.debug,dimmerName:"modals"},t=V.extend(!0,e,d.dimmerSettings);V.fn.dimmer!==H?(u.debug("Creating dimmer"),i=y.dimmer(t),d.detachable?(u.verbose("Modal is detachable, moving content into dimmer"),i.dimmer("add content",b)):u.set.undetached(),n=i.dimmer("get dimmer")):u.error(p.dimmer)},id:function(){l=(Math.random().toString(16)+"000000000").substr(2,8),t="."+l,u.verbose("Creating unique id for element",l)},innerDimmer:function(){0==b.find(f.dimmer).length&&b.prepend('<div class="ui inverted dimmer"></div>')}},destroy:function(){c&&c.disconnect(),u.verbose("Destroying previous modal"),b.removeData(v).off(h),E.off(t),n.off(t),x.off(h),y.dimmer("destroy")},observeChanges:function(){"MutationObserver"in z&&((c=new MutationObserver(function(e){u.debug("DOM tree modified, refreshing"),u.refresh()})).observe(C,{childList:!0,subtree:!0}),u.debug("Setting up mutation observer",c))},refresh:function(){u.remove.scrolling(),u.cacheSizes(),u.can.useFlex()||u.set.modalOffset(),u.set.screenHeight(),u.set.type()},refreshModals:function(){a=b.siblings(f.modal),o=a.add(b)},attachEvents:function(e,t){var n=V(e);t=V.isFunction(u[t])?u[t]:u.toggle,0<n.length?(u.debug("Attaching modal events to element",e,t),n.off(h).on("click"+h,t)):u.error(p.notFound,e)},bind:{events:function(){u.verbose("Attaching events"),b.on("click"+h,f.close,u.event.close).on("click"+h,f.approve,u.event.approve).on("click"+h,f.deny,u.event.deny),E.on("resize"+t,u.event.resize)},scrollLock:function(){i.get(0).addEventListener("touchmove",u.event.preventScroll,{passive:!1})}},unbind:{scrollLock:function(){i.get(0).removeEventListener("touchmove",u.event.preventScroll,{passive:!1})}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){k||!1===d.onApprove.call(C,V(this))?u.verbose("Approve callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},preventScroll:function(e){-1!==e.target.className.indexOf("dimmer")&&e.preventDefault()},deny:function(){k||!1===d.onDeny.call(C,V(this))?u.verbose("Deny callback returned false cancelling hide"):(k=!0,u.hide(function(){k=!1}))},close:function(){u.hide()},mousedown:function(e){var t=V(e.target),n=u.is.rtl();(r=0<t.closest(f.modal).length)&&u.verbose("Mouse down event registered inside the modal"),(s=u.is.scrolling()&&(!n&&V(z).outerWidth()-d.scrollbarWidth<=e.clientX||n&&d.scrollbarWidth>=e.clientX))&&u.verbose("Mouse down event registered inside the scrollbar")},mouseup:function(e){if(d.closable)if(r)u.debug("Dimmer clicked but mouse down was initially registered inside the modal");else if(s)u.debug("Dimmer clicked but mouse down was initially registered inside the scrollbar");else{var t=0<V(e.target).closest(f.modal).length,n=V.contains(N.documentElement,e.target);if(!t&&n&&u.is.active()&&b.hasClass(m.front)){if(u.debug("Dimmer clicked, hiding all modals"),d.allowMultiple){if(!u.hideAll())return}else if(!u.hide())return;u.remove.clickaway()}}else u.verbose("Dimmer clicked but closable setting is disabled")},debounce:function(e,t){clearTimeout(u.timer),u.timer=setTimeout(e,t)},keyboard:function(e){27==e.which&&(d.closable?(u.debug("Escape key pressed hiding modal"),b.hasClass(m.front)&&u.hide()):u.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){i.dimmer("is active")&&(u.is.animating()||u.is.active())&&q(u.refresh)}},toggle:function(){u.is.active()||u.is.animating()?u.hide():u.show()},show:function(e){e=V.isFunction(e)?e:function(){},u.refreshModals(),u.set.dimmerSettings(),u.set.dimmerStyles(),u.showModal(e)},hide:function(e){return e=V.isFunction(e)?e:function(){},u.refreshModals(),u.hideModal(e)},showModal:function(e){e=V.isFunction(e)?e:function(){},u.is.animating()||!u.is.active()?(u.showDimmer(),u.cacheSizes(),u.set.bodyMargin(),u.can.useFlex()?u.remove.legacy():(u.set.legacy(),u.set.modalOffset(),u.debug("Using non-flex legacy modal positioning.")),u.set.screenHeight(),u.set.type(),u.set.clickaway(),!d.allowMultiple&&u.others.active()?u.hideOthers(u.showModal):(k=!1,d.allowMultiple&&(u.others.active()&&a.filter("."+m.active).find(f.dimmer).addClass("active"),d.detachable&&b.detach().appendTo(n)),d.onShow.call(C),d.transition&&V.fn.transition!==H&&b.transition("is supported")?(u.debug("Showing modal with css animations"),b.transition({debug:d.debug,animation:d.transition+" in",queue:d.queue,duration:d.duration,useFailSafe:!0,onComplete:function(){d.onVisible.apply(C),d.keyboardShortcuts&&u.add.keyboardShortcuts(),u.save.focus(),u.set.active(),d.autofocus&&u.set.autofocus(),e()}})):u.error(p.noTransition))):u.debug("Modal is already visible")},hideModal:function(e,t,n){var i=a.filter("."+m.active).last();if(e=V.isFunction(e)?e:function(){},u.debug("Hiding modal"),!1===d.onHide.call(C,V(this)))return u.verbose("Hide callback returned false cancelling hide"),k=!1;(u.is.animating()||u.is.active())&&(d.transition&&V.fn.transition!==H&&b.transition("is supported")?(u.remove.active(),b.transition({debug:d.debug,animation:d.transition+" out",queue:d.queue,duration:d.duration,useFailSafe:!0,onStart:function(){u.others.active()||u.others.animating()||t||u.hideDimmer(),d.keyboardShortcuts&&!u.others.active()&&u.remove.keyboardShortcuts()},onComplete:function(){u.unbind.scrollLock(),d.allowMultiple&&(i.addClass(m.front),b.removeClass(m.front),n?o.find(f.dimmer).removeClass("active"):i.find(f.dimmer).removeClass("active")),d.onHidden.call(C),u.remove.dimmerStyles(),u.restore.focus(),e()}})):u.error(p.noTransition))},showDimmer:function(){i.dimmer("is animating")||!i.dimmer("is active")?(u.save.bodyMargin(),u.debug("Showing dimmer"),i.dimmer("show")):u.debug("Dimmer already visible")},hideDimmer:function(){i.dimmer("is animating")||i.dimmer("is active")?(u.unbind.scrollLock(),i.dimmer("hide",function(){u.restore.bodyMargin(),u.remove.clickaway(),u.remove.screenHeight()})):u.debug("Dimmer is not visible cannot hide")},hideAll:function(n){var e=o.filter("."+m.active+", ."+m.animating);if(n=V.isFunction(n)?n:function(){},0<e.length){u.debug("Hiding all visible modals");var i=!0;return V(e.get().reverse()).each(function(e,t){i=i&&V(t).modal("hide modal",n,!1,!0)}),i&&u.hideDimmer(),i}},hideOthers:function(e){var t=a.filter("."+m.active+", ."+m.animating);e=V.isFunction(e)?e:function(){},0<t.length&&(u.debug("Hiding other modals",a),t.modal("hide modal",e,!0))},others:{active:function(){return 0<a.filter("."+m.active).length},animating:function(){return 0<a.filter("."+m.animating).length}},add:{keyboardShortcuts:function(){u.verbose("Adding keyboard shortcuts"),P.on("keyup"+h,u.event.keyboard)}},save:{focus:function(){0<V(N.activeElement).closest(b).length||(e=V(N.activeElement).blur())},bodyMargin:function(){T=F.css("margin-"+(u.can.leftBodyScrollbar()?"left":"right"));var e=parseInt(T.replace(/[^\d.]/g,"")),t=z.innerWidth-N.documentElement.clientWidth;S=e+t}},restore:{focus:function(){e&&0<e.length&&d.restoreFocus&&e.focus()},bodyMargin:function(){var e=u.can.leftBodyScrollbar()?"left":"right";F.css("margin-"+e,T),F.find(f.bodyFixed.replace("right",e)).css("padding-"+e,T)}},remove:{active:function(){b.removeClass(m.active)},legacy:function(){b.removeClass(m.legacy)},clickaway:function(){d.detachable||b.off("mousedown"+t),n.off("mousedown"+t),n.off("mouseup"+t)},dimmerStyles:function(){n.removeClass(m.inverted),i.removeClass(m.blurring)},bodyStyle:function(){""===F.attr("style")&&(u.verbose("Removing style attribute"),F.removeAttr("style"))},screenHeight:function(){u.debug("Removing page height"),F.css("height","")},keyboardShortcuts:function(){u.verbose("Removing keyboard shortcuts"),P.off("keyup"+h)},scrolling:function(){i.removeClass(m.scrolling),b.removeClass(m.scrolling)}},cacheSizes:function(){b.addClass(m.loading);var e=b.prop("scrollHeight"),t=b.outerWidth(),n=b.outerHeight();u.cache.pageHeight!==H&&0===n||(V.extend(u.cache,{pageHeight:V(N).outerHeight(),width:t,height:n+d.offset,scrollHeight:e+d.offset,contextHeight:"body"==d.context?V(z).height():i.height()}),u.cache.topOffset=-u.cache.height/2),b.removeClass(m.loading),u.debug("Caching modal and container sizes",u.cache)},can:{leftBodyScrollbar:function(){return u.cache.leftBodyScrollbar===H&&(u.cache.leftBodyScrollbar=u.is.rtl()&&(u.is.iframe&&!u.is.firefox()||u.is.safari()||u.is.edge()||u.is.ie())),u.cache.leftBodyScrollbar},useFlex:function(){return d.useFlex&&d.detachable&&!u.is.ie()},fit:function(){var e=u.cache.contextHeight,t=u.cache.contextHeight/2,n=u.cache.topOffset,i=u.cache.scrollHeight,o=u.cache.height,a=d.padding;return o<i?t+n+i+a<e:o+2*a<e}},is:{active:function(){return b.hasClass(m.active)},ie:function(){if(u.cache.isIE===H){var e=!z.ActiveXObject&&"ActiveXObject"in z,t="ActiveXObject"in z;u.cache.isIE=e||t}return u.cache.isIE},animating:function(){return b.transition("is supported")?b.transition("is animating"):b.is(":visible")},scrolling:function(){return i.hasClass(m.scrolling)},modernBrowser:function(){return!(z.ActiveXObject||"ActiveXObject"in z)},rtl:function(){return u.cache.isRTL===H&&(u.cache.isRTL="rtl"===F.attr("dir")||"rtl"===F.css("direction")),u.cache.isRTL},safari:function(){return u.cache.isSafari===H&&(u.cache.isSafari=/constructor/i.test(z.HTMLElement)||!!z.ApplePaySession),u.cache.isSafari},edge:function(){return u.cache.isEdge===H&&(u.cache.isEdge=!!z.setImmediate&&!u.is.ie()),u.cache.isEdge},firefox:function(){return u.cache.isFirefox===H&&(u.cache.isFirefox=!!z.InstallTrigger),u.cache.isFirefox},iframe:function(){return!(self===top)}},set:{autofocus:function(){var e=b.find("[tabindex], :input").filter(":visible").filter(function(){return 0===V(this).closest(".disabled").length}),t=e.filter("[autofocus]"),n=0<t.length?t.first():e.first();0<n.length&&n.focus()},bodyMargin:function(){var e=u.can.leftBodyScrollbar()?"left":"right";(d.detachable||u.can.fit())&&F.css("margin-"+e,S+"px"),F.find(f.bodyFixed.replace("right",e)).css("padding-"+e,S+"px")},clickaway:function(){d.detachable||b.on("mousedown"+t,u.event.mousedown),n.on("mousedown"+t,u.event.mousedown),n.on("mouseup"+t,u.event.mouseup)},dimmerSettings:function(){if(V.fn.dimmer!==H){var e={debug:d.debug,dimmerName:"modals",closable:"auto",useFlex:u.can.useFlex(),duration:{show:d.duration,hide:d.duration}},t=V.extend(!0,e,d.dimmerSettings);d.inverted&&(t.variation=t.variation!==H?t.variation+" inverted":"inverted"),y.dimmer("setting",t)}else u.error(p.dimmer)},dimmerStyles:function(){d.inverted?n.addClass(m.inverted):n.removeClass(m.inverted),d.blurring?i.addClass(m.blurring):i.removeClass(m.blurring)},modalOffset:function(){if(d.detachable)b.css({marginTop:!b.hasClass("aligned")&&u.can.fit()?-u.cache.height/2:d.padding/2,marginLeft:-u.cache.width/2});else{var e=u.can.fit();b.css({top:!b.hasClass("aligned")&&e?V(N).scrollTop()+(u.cache.contextHeight-u.cache.height)/2:!e||b.hasClass("top")?V(N).scrollTop()+d.padding:V(N).scrollTop()+(u.cache.contextHeight-u.cache.height-d.padding),marginLeft:-u.cache.width/2})}u.verbose("Setting modal offset for legacy mode")},screenHeight:function(){u.can.fit()?F.css("height",""):b.hasClass("bottom")||(u.debug("Modal is taller than page content, resizing page height"),F.css("height",u.cache.height+2*d.padding))},active:function(){b.addClass(m.active+" "+m.front),a.filter("."+m.active).removeClass(m.front)},scrolling:function(){i.addClass(m.scrolling),b.addClass(m.scrolling),u.unbind.scrollLock()},legacy:function(){b.addClass(m.legacy)},type:function(){u.can.fit()?(u.verbose("Modal fits on screen"),u.others.active()||u.others.animating()||(u.remove.scrolling(),u.bind.scrollLock())):b.hasClass("bottom")?u.verbose("Bottom aligned modal not fitting on screen is unsupported for scrolling"):(u.verbose("Modal cannot fit on screen setting to scrolling"),u.set.scrolling())},undetached:function(){i.addClass(m.undetached)}},setting:function(e,t){if(u.debug("Changing setting",e,t),V.isPlainObject(e))V.extend(!0,d,e);else{if(t===H)return d[e];V.isPlainObject(d[e])?V.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(V.isPlainObject(e))V.extend(!0,u,e);else{if(t===H)return u[e];u[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,d.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),u.verbose.apply(console,arguments)))},error:function(){d.silent||(u.error=Function.prototype.bind.call(console.error,console,d.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(O||t),O=t,M.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:C,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=d.name+":",n=0;O=!1,clearTimeout(u.performance.timer),V.each(M,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",R&&(e+=" '"+R+"'"),(console.group!==H||console.table!==H)&&0<M.length&&(console.groupCollapsed(e),console.table?console.table(M):V.each(M,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),M=[]}},invoke:function(i,e,t){var o,a,n,r=w;return e=e||L,t=C||t,"string"==typeof i&&r!==H&&(i=i.split(/[\. ]/),o=i.length-1,V.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(V.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==H)return a=r[n],!1;if(!V.isPlainObject(r[t])||e==o)return r[t]!==H&&(a=r[t]),!1;r=r[t]}})),V.isFunction(a)?n=a.apply(t,e):a!==H&&(n=a),Array.isArray(A)?A.push(n):A!==H?A=[A,n]:n!==H&&(A=n),a}},j?(w===H&&u.initialize(),u.invoke(I)):(w!==H&&w.invoke("destroy"),u.initialize())}),A!==H?A:this},V.fn.modal.settings={name:"Modal",namespace:"modal",useFlex:"auto",offset:0,silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,restoreFocus:!0,inverted:!1,blurring:!1,centered:!0,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,transition:"scale",padding:50,scrollbarWidth:10,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal",dimmer:"> .ui.dimmer",bodyFixed:"> .ui.fixed.menu, > .ui.right.toast-container, > .ui.right.sidebar"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",inverted:"inverted",legacy:"legacy",loading:"loading",scrolling:"scrolling",undetached:"undetached",front:"front"}}}(jQuery,window,document),function(y,x,C){"use strict";y.isFunction=y.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=void 0!==x&&x.Math==Math?x:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),y.fn.nag=function(d){var f,e=y(this),m=e.selector||"",g=(new Date).getTime(),p=[],h=d,v="string"==typeof h,b=[].slice.call(arguments,1);return e.each(function(){var s,i=y.isPlainObject(d)?y.extend(!0,{},y.fn.nag.settings,d):y.extend({},y.fn.nag.settings),e=i.selector,l=i.error,t=i.namespace,n="."+t,o=t+"-module",a=y(this),r=i.context?y(i.context):y("body"),c=this,u=a.data(o);s={initialize:function(){s.verbose("Initializing element"),a.on("click"+n,e.close,s.dismiss).data(o,s),i.detachable&&a.parent()[0]!==r[0]&&a.detach().prependTo(r),0<i.displayTime&&setTimeout(s.hide,i.displayTime),s.show()},destroy:function(){s.verbose("Destroying instance"),a.removeData(o).off(n)},show:function(){s.should.show()&&!a.is(":visible")&&(s.debug("Showing nag",i.animation.show),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideDown(i.duration,i.easing))},hide:function(){s.debug("Showing nag",i.animation.hide),"fade"==i.animation.show?a.fadeIn(i.duration,i.easing):a.slideUp(i.duration,i.easing)},onHide:function(){s.debug("Removing nag",i.animation.hide),a.remove(),i.onHide&&i.onHide()},dismiss:function(e){i.storageMethod&&s.storage.set(i.key,i.value),s.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return i.persist?(s.debug("Persistent nag is set, can show nag"),!0):s.storage.get(i.key)!=i.value.toString()?(s.debug("Stored value is not set, can show nag",s.storage.get(i.key)),!0):(s.debug("Stored value is set, cannot show nag",s.storage.get(i.key)),!1)}},get:{storageOptions:function(){var e={};return i.expires&&(e.expires=i.expires),i.domain&&(e.domain=i.domain),i.path&&(e.path=i.path),e}},clear:function(){s.storage.remove(i.key)},storage:{set:function(e,t){var n=s.get.storageOptions();if("localstorage"==i.storageMethod&&x.localStorage!==C)x.localStorage.setItem(e,t),s.debug("Value stored using local storage",e,t);else if("sessionstorage"==i.storageMethod&&x.sessionStorage!==C)x.sessionStorage.setItem(e,t),s.debug("Value stored using session storage",e,t);else{if(y.cookie===C)return void s.error(l.noCookieStorage);y.cookie(e,t,n),s.debug("Value stored using cookie",e,t,n)}},get:function(e,t){var n;return"localstorage"==i.storageMethod&&x.localStorage!==C?n=x.localStorage.getItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?n=x.sessionStorage.getItem(e):y.cookie!==C?n=y.cookie(e):s.error(l.noCookieStorage),"undefined"!=n&&"null"!=n&&n!==C&&null!==n||(n=C),n},remove:function(e){var t=s.get.storageOptions();"localstorage"==i.storageMethod&&x.localStorage!==C?x.localStorage.removeItem(e):"sessionstorage"==i.storageMethod&&x.sessionStorage!==C?x.sessionStorage.removeItem(e):y.cookie!==C?y.removeCookie(e,t):s.error(l.noStorage)}},setting:function(e,t){if(s.debug("Changing setting",e,t),y.isPlainObject(e))y.extend(!0,i,e);else{if(t===C)return i[e];y.isPlainObject(i[e])?y.extend(!0,i[e],t):i[e]=t}},internal:function(e,t){if(y.isPlainObject(e))y.extend(!0,s,e);else{if(t===C)return s[e];s[e]=t}},debug:function(){!i.silent&&i.debug&&(i.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,i.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!i.silent&&i.verbose&&i.debug&&(i.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),s.verbose.apply(console,arguments)))},error:function(){i.silent||(s.error=Function.prototype.bind.call(console.error,console,i.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;i.performance&&(n=(t=(new Date).getTime())-(g||t),g=t,p.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:c,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=i.name+":",n=0;g=!1,clearTimeout(s.performance.timer),y.each(p,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",m&&(e+=" '"+m+"'"),(console.group!==C||console.table!==C)&&0<p.length&&(console.groupCollapsed(e),console.table?console.table(p):y.each(p,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),p=[]}},invoke:function(i,e,t){var o,a,n,r=u;return e=e||b,t=c||t,"string"==typeof i&&r!==C&&(i=i.split(/[\. ]/),o=i.length-1,y.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(y.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==C)return a=r[n],!1;if(!y.isPlainObject(r[t])||e==o)return r[t]!==C?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),y.isFunction(a)?n=a.apply(t,e):a!==C&&(n=a),Array.isArray(f)?f.push(n):f!==C?f=[f,n]:n!==C&&(f=n),a}},v?(u===C&&s.initialize(),s.invoke(h)):(u!==C&&u.invoke("destroy"),s.initialize())}),f!==C?f:this},y.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},y.extend(y.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,void document),function(L,q,V,z){"use strict";L.isFunction=L.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},q=void 0!==q&&q.Math==Math?q:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),L.fn.popup=function(T){var S,e=L(this),D=L(V),A=L(q),E=L("body"),P=e.selector||"",F="ontouchstart"in V.documentElement?"touchstart":"click",R=(new Date).getTime(),O=[],M=T,I="string"==typeof M,j=[].slice.call(arguments,1);return e.each(function(){var u,c,e,t,n,d,f=L.isPlainObject(T)?L.extend(!0,{},L.fn.popup.settings,T):L.extend({},L.fn.popup.settings),o=f.selector,m=f.className,g=f.error,p=f.metadata,i=f.namespace,a="."+f.namespace,r="module-"+i,h=L(this),s=L(f.context),l=L(f.scrollContext),v=L(f.boundary),b=f.target?L(f.target):h,y=0,x=!1,C=!1,w=this,k=h.data(r);d={initialize:function(){d.debug("Initializing",h),d.createID(),d.bind.events(),!d.exists()&&f.preserve&&d.create(),f.observeChanges&&d.observeChanges(),d.instantiate()},instantiate:function(){d.verbose("Storing instance",d),k=d,h.data(r,k)},observeChanges:function(){"MutationObserver"in q&&((e=new MutationObserver(d.event.documentChanged)).observe(V,{childList:!0,subtree:!0}),d.debug("Setting up mutation observer",e))},refresh:function(){f.popup?u=L(f.popup).eq(0):f.inline&&(u=b.nextAll(o.popup).eq(0),f.popup=u),f.popup?(u.addClass(m.loading),c=d.get.offsetParent(),u.removeClass(m.loading),f.movePopup&&d.has.popup()&&d.get.offsetParent(u)[0]!==c[0]&&(d.debug("Moving popup to the same offset parent as target"),u.detach().appendTo(c))):c=f.inline?d.get.offsetParent(b):d.has.popup()?d.get.offsetParent(u):E,c.is("html")&&c[0]!==E[0]&&(d.debug("Setting page as offset parent"),c=E),d.get.variation()&&d.set.variation()},reposition:function(){d.refresh(),d.set.position()},destroy:function(){d.debug("Destroying previous module"),e&&e.disconnect(),u&&!f.preserve&&d.removePopup(),clearTimeout(d.hideTimer),clearTimeout(d.showTimer),d.unbind.close(),d.unbind.events(),h.removeData(r)},event:{start:function(e){var t=L.isPlainObject(f.delay)?f.delay.show:f.delay;clearTimeout(d.hideTimer),(!C||C&&f.addTouchEvents)&&(d.showTimer=setTimeout(d.show,t))},end:function(){var e=L.isPlainObject(f.delay)?f.delay.hide:f.delay;clearTimeout(d.showTimer),d.hideTimer=setTimeout(d.hide,e)},touchstart:function(e){C=!0,f.addTouchEvents&&d.show()},resize:function(){d.is.visible()&&d.set.position()},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==w||0<L(e).find(w).length)&&(d.debug("Element removed from DOM, tearing down events"),d.destroy())})})},hideGracefully:function(e){var t=L(e.target),n=L.contains(V.documentElement,e.target),i=0<t.closest(o.popup).length;e&&!i&&n?(d.debug("Click occurred outside popup hiding popup"),d.hide()):d.debug("Click was inside popup, keeping popup open")}},create:function(){var e=d.get.html(),t=d.get.title(),n=d.get.content();e||n||t?(d.debug("Creating pop-up html"),e=e||f.templates.popup({title:t,content:n}),u=L("<div/>").addClass(m.popup).data(p.activator,h).html(e),f.inline?(d.verbose("Inserting popup element inline",u),u.insertAfter(h)):(d.verbose("Appending popup element to body",u),u.appendTo(s)),d.refresh(),d.set.variation(),f.hoverable&&d.bind.popup(),f.onCreate.call(u,w)):f.popup?(L(f.popup).data(p.activator,h),d.verbose("Used popup specified in settings"),d.refresh(),f.hoverable&&d.bind.popup()):0!==b.next(o.popup).length?(d.verbose("Pre-existing popup found"),f.inline=!0,f.popup=b.next(o.popup).data(p.activator,h),d.refresh(),f.hoverable&&d.bind.popup()):d.debug("No content specified skipping display",w)},createID:function(){n=(Math.random().toString(16)+"000000000").substr(2,8),t="."+n,d.verbose("Creating unique id for element",n)},toggle:function(){d.debug("Toggling pop-up"),d.is.hidden()?(d.debug("Popup is hidden, showing pop-up"),d.unbind.close(),d.show()):(d.debug("Popup is visible, hiding pop-up"),d.hide())},show:function(e){if(e=e||function(){},d.debug("Showing pop-up",f.transition),d.is.hidden()&&(!d.is.active()||!d.is.dropdown())){if(d.exists()||d.create(),!1===f.onShow.call(u,w))return void d.debug("onShow callback returned false, cancelling popup animation");f.preserve||f.popup||d.refresh(),u&&d.set.position()&&(d.save.conditions(),f.exclusive&&d.hideAll(),d.animate.show(e))}},hide:function(e){if(e=e||function(){},d.is.visible()||d.is.animating()){if(!1===f.onHide.call(u,w))return void d.debug("onHide callback returned false, cancelling popup animation");d.remove.visible(),d.unbind.close(),d.restore.conditions(),d.animate.hide(e)}},hideAll:function(){L(o.popup).filter("."+m.popupVisible).each(function(){L(this).data(p.activator).popup("hide")})},exists:function(){return!!u&&(f.inline||f.popup?d.has.popup():1<=u.closest(s).length)},removePopup:function(){d.has.popup()&&!f.popup&&(d.debug("Removing popup",u),u.remove(),u=z,f.onRemove.call(u,w))},save:{conditions:function(){d.cache={title:h.attr("title")},d.cache.title&&h.removeAttr("title"),d.verbose("Saving original attributes",d.cache.title)}},restore:{conditions:function(){return d.cache&&d.cache.title&&(h.attr("title",d.cache.title),d.verbose("Restoring original attributes",d.cache.title)),!0}},supports:{svg:function(){return"undefined"!=typeof SVGGraphicsElement}},animate:{show:function(e){e=L.isFunction(e)?e:function(){},f.transition&&L.fn.transition!==z&&h.transition("is supported")?(d.set.visible(),u.transition({animation:f.transition+" in",queue:!1,debug:f.debug,verbose:f.verbose,duration:f.duration,onComplete:function(){d.bind.close(),e.call(u,w),f.onVisible.call(u,w)}})):d.error(g.noTransition)},hide:function(e){e=L.isFunction(e)?e:function(){},d.debug("Hiding pop-up"),f.transition&&L.fn.transition!==z&&h.transition("is supported")?u.transition({animation:f.transition+" out",queue:!1,duration:f.duration,debug:f.debug,verbose:f.verbose,onComplete:function(){d.reset(),e.call(u,w),f.onHidden.call(u,w)}}):d.error(g.noTransition)}},change:{content:function(e){u.html(e)}},get:{html:function(){return h.removeData(p.html),h.data(p.html)||f.html},title:function(){return h.removeData(p.title),h.data(p.title)||f.title},content:function(){return h.removeData(p.content),h.data(p.content)||f.content||h.attr("title")},variation:function(){return h.removeData(p.variation),h.data(p.variation)||f.variation},popup:function(){return u},popupOffset:function(){return u.offset()},calculations:function(){var e,t=d.get.offsetParent(u),n=b[0],i=v[0]==q,o=f.inline||f.popup&&f.movePopup?b.position():b.offset(),a=i?{top:0,left:0}:v.offset(),r={},s=i?{top:A.scrollTop(),left:A.scrollLeft()}:{top:0,left:0};if(r={target:{element:b[0],width:b.outerWidth(),height:b.outerHeight(),top:o.top,left:o.left,margin:{}},popup:{width:u.outerWidth(),height:u.outerHeight()},parent:{width:c.outerWidth(),height:c.outerHeight()},screen:{top:a.top,left:a.left,scroll:{top:s.top,left:s.left},width:v.width(),height:v.height()}},t.get(0)!==c.get(0)){var l=t.offset();r.target.top-=l.top,r.target.left-=l.left,r.parent.width=t.outerWidth(),r.parent.height=t.outerHeight()}return f.setFluidWidth&&d.is.fluid()&&(r.container={width:u.parent().outerWidth()},r.popup.width=r.container.width),r.target.margin.top=f.inline?parseInt(q.getComputedStyle(n).getPropertyValue("margin-top"),10):0,r.target.margin.left=f.inline?d.is.rtl()?parseInt(q.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(q.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=r.screen,r.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},r},id:function(){return n},startEvent:function(){return"hover"==f.on?"mouseenter":"focus"==f.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==f.on?"mouseleave":"focus"==f.on&&"blur"},distanceFromBoundary:function(e,t){var n,i,o={};return n=(t=t||d.get.calculations()).popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},d.verbose("Distance from boundaries determined",e,o)),o},offsetParent:function(e){var t=(e!==z?e[0]:b[0]).parentNode,n=L(t);if(t)for(var i="none"===n.css("transform"),o="static"===n.css("position"),a=n.is("body");t&&!a&&o&&i;)t=t.parentNode,i="none"===(n=L(t)).css("transform"),o="static"===n.css("position"),a=n.is("body");return n&&0<n.length?n:L()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o="top"==n||"bottom"==n,a=!1,r=!1,s=!1;return x||(d.verbose("All available positions available"),x=d.get.positions()),d.debug("Recording last position tried",e),x[e]=!0,"opposite"===f.prefer&&(s=(s=[{top:"bottom",bottom:"top",left:"right",right:"left"}[n],i]).join(" "),a=!0===x[s],d.debug("Trying opposite strategy",s)),"adjacent"===f.prefer&&o&&(s=(s=[n,{left:"center",center:"right",right:"left"}[i]]).join(" "),r=!0===x[s],d.debug("Trying adjacent strategy",s)),(r||a)&&(d.debug("Using backup position",s),s={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"}[e]),s}},set:{position:function(e,t){if(0!==b.length&&0!==u.length){var n,i,o,a,r,s,l,c;if(t=t||d.get.calculations(),e=e||h.data(p.position)||f.position,n=h.data(p.offset)||f.offset,i=f.distanceAway,o=t.target,a=t.popup,r=t.parent,d.should.centerArrow(t)&&(d.verbose("Adjusting offset to center arrow on small target element"),"top left"!=e&&"bottom left"!=e||(n+=o.width/2,n-=f.arrowPixelsFromEdge),"top right"!=e&&"bottom right"!=e||(n-=o.width/2,n+=f.arrowPixelsFromEdge)),0===o.width&&0===o.height&&!d.is.svg(o.element))return d.debug("Popup target is hidden, no action taken"),!1;switch(f.inline&&(d.debug("Adding margin to calculation",o.margin),"left center"==e||"right center"==e?(n+=o.margin.top,i+=-o.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=o.margin.left,i-=o.margin.top):(n+=o.margin.left,i+=o.margin.top)),d.debug("Determining popup position from calculations",e,t),d.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),d.debug("RTL: Popup position updated",e)),y==f.maxSearchDepth&&"string"==typeof f.lastResort&&(e=f.lastResort),e){case"top left":s={top:"auto",bottom:r.height-o.top+i,left:o.left+n,right:"auto"};break;case"top center":s={bottom:r.height-o.top+i,left:o.left+o.width/2-a.width/2+n,top:"auto",right:"auto"};break;case"top right":s={bottom:r.height-o.top+i,right:r.width-o.left-o.width-n,top:"auto",left:"auto"};break;case"left center":s={top:o.top+o.height/2-a.height/2+n,right:r.width-o.left+i,left:"auto",bottom:"auto"};break;case"right center":s={top:o.top+o.height/2-a.height/2+n,left:o.left+o.width+i,bottom:"auto",right:"auto"};break;case"bottom left":s={top:o.top+o.height+i,left:o.left+n,bottom:"auto",right:"auto"};break;case"bottom center":s={top:o.top+o.height+i,left:o.left+o.width/2-a.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":s={top:o.top+o.height+i,right:r.width-o.left-o.width-n,left:"auto",bottom:"auto"}}if(s===z&&d.error(g.invalidPosition,e),d.debug("Calculated popup positioning values",s),u.css(s).removeClass(m.position).addClass(e).addClass(m.loading),l=d.get.popupOffset(),c=d.get.distanceFromBoundary(l,t),!f.forcePosition&&d.is.offstage(c,e)){if(d.debug("Position is outside viewport",e),y<f.maxSearchDepth)return y++,e=d.get.nextPosition(e),d.debug("Trying new position",e),!!u&&d.set.position(e,t);if(!f.lastResort)return d.debug("Popup could not find a position to display",u),d.error(g.cannotPlace,w),d.remove.attempts(),d.remove.loading(),d.reset(),f.onUnplaceable.call(u,w),!1;d.debug("No position found, showing with last position")}return d.debug("Position is on stage",e),d.remove.attempts(),d.remove.loading(),f.setFluidWidth&&d.is.fluid()&&d.set.fluidWidth(t),!0}d.error(g.notFound)},fluidWidth:function(e){e=e||d.get.calculations(),d.debug("Automatically setting element width to parent width",e.parent.width),u.css("width",e.container.width)},variation:function(e){(e=e||d.get.variation())&&d.has.popup()&&(d.verbose("Adding variation to popup",e),u.addClass(e))},visible:function(){h.addClass(m.visible)}},remove:{loading:function(){u.removeClass(m.loading)},variation:function(e){(e=e||d.get.variation())&&(d.verbose("Removing variation",e),u.removeClass(e))},visible:function(){h.removeClass(m.visible)},attempts:function(){d.verbose("Resetting all searched positions"),y=0,x=!1}},bind:{events:function(){d.debug("Binding popup events to module"),"click"==f.on&&h.on(F+a,d.toggle),"hover"==f.on&&h.on("touchstart"+a,d.event.touchstart),d.get.startEvent()&&h.on(d.get.startEvent()+a,d.event.start).on(d.get.endEvent()+a,d.event.end),f.target&&d.debug("Target set to element",b),A.on("resize"+t,d.event.resize)},popup:function(){d.verbose("Allowing hover events on popup to prevent closing"),u&&d.has.popup()&&u.on("mouseenter"+a,d.event.start).on("mouseleave"+a,d.event.end)},close:function(){(!0===f.hideOnScroll||"auto"==f.hideOnScroll&&"click"!=f.on)&&d.bind.closeOnScroll(),d.is.closable()?d.bind.clickaway():"hover"==f.on&&C&&d.bind.touchClose()},closeOnScroll:function(){d.verbose("Binding scroll close event to document"),l.one(d.get.scrollEvent()+t,d.event.hideGracefully)},touchClose:function(){d.verbose("Binding popup touchclose event to document"),D.on("touchstart"+t,function(e){d.verbose("Touched away from popup"),d.event.hideGracefully.call(w,e)})},clickaway:function(){d.verbose("Binding popup close event to document"),D.on(F+t,function(e){d.verbose("Clicked away from popup"),d.event.hideGracefully.call(w,e)})}},unbind:{events:function(){A.off(t),h.off(a)},close:function(){D.off(t),l.off(t)}},has:{popup:function(){return u&&0<u.length}},should:{centerArrow:function(e){return!d.is.basic()&&e.target.width<=2*f.arrowPixelsFromEdge}},is:{closable:function(){return"auto"==f.closable?"hover"!=f.on:f.closable},offstage:function(e,n){var i=[];return L.each(e,function(e,t){t<-f.jitter&&(d.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),0<i.length},svg:function(e){return d.supports.svg()&&e instanceof SVGGraphicsElement},basic:function(){return h.hasClass(m.basic)},active:function(){return h.hasClass(m.active)},animating:function(){return u!==z&&u.hasClass(m.animating)},fluid:function(){return u!==z&&u.hasClass(m.fluid)},visible:function(){return u!==z&&u.hasClass(m.popupVisible)},dropdown:function(){return h.hasClass(m.dropdown)},hidden:function(){return!d.is.visible()},rtl:function(){return"rtl"===h.attr("dir")||"rtl"===h.css("direction")}},reset:function(){d.remove.visible(),f.preserve?L.fn.transition!==z&&u.transition("remove transition"):d.removePopup()},setting:function(e,t){if(L.isPlainObject(e))L.extend(!0,f,e);else{if(t===z)return f[e];f[e]=t}},internal:function(e,t){if(L.isPlainObject(e))L.extend(!0,d,e);else{if(t===z)return d[e];d[e]=t}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n;f.performance&&(n=(t=(new Date).getTime())-(R||t),R=t,O.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,500)},display:function(){var e=f.name+":",n=0;R=!1,clearTimeout(d.performance.timer),L.each(O,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",P&&(e+=" '"+P+"'"),(console.group!==z||console.table!==z)&&0<O.length&&(console.groupCollapsed(e),console.table?console.table(O):L.each(O,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),O=[]}},invoke:function(i,e,t){var o,a,n,r=k;return e=e||j,t=w||t,"string"==typeof i&&r!==z&&(i=i.split(/[\. ]/),o=i.length-1,L.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(L.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==z)return a=r[n],!1;if(!L.isPlainObject(r[t])||e==o)return r[t]!==z&&(a=r[t]),!1;r=r[t]}})),L.isFunction(a)?n=a.apply(t,e):a!==z&&(n=a),Array.isArray(S)?S.push(n):S!==z?S=[S,n]:n!==z&&(S=n),a}},I?(k===z&&d.initialize(),d.invoke(M)):(k!==z&&k.invoke("destroy"),d.initialize())}),S!==z?S:this},L.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:q,addTouchEvents:!0,position:"top left",forcePosition:!1,variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:q,prefer:"opposite",lastResort:!1,arrowPixelsFromEdge:20,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",basic:"basic",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return t[e]}):e},popup:function(e){var t="",n=L.fn.popup.settings.templates.escape;return typeof e!==z&&(typeof e.title!==z&&e.title&&(e.title=n(e.title),t+='<div class="header">'+e.title+"</div>"),typeof e.content!==z&&e.content&&(e.content=n(e.content),t+='<div class="content">'+e.content+"</div>")),t}}}}(jQuery,window,document),function(T,e,S,D){"use strict";T.isFunction=T.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),T.fn.progress=function(h){var v,e=T(this),b=e.selector||"",y=(new Date).getTime(),x=[],C=h,w="string"==typeof C,k=[].slice.call(arguments,1);return e.each(function(){var c,s=T.isPlainObject(h)?T.extend(!0,{},T.fn.progress.settings,h):T.extend({},T.fn.progress.settings),n=s.className,t=s.metadata,e=s.namespace,i=s.selector,l=s.error,o="."+e,a="module-"+e,u=T(this),d=T(this).find(i.bar),r=T(this).find(i.progress),f=T(this).find(i.label),m=this,g=u.data(a),p=!1;c={helper:{sum:function(e){return Array.isArray(e)?e.reduce(function(e,t){return e+Number(t)},0):0},derivePrecision:function(e,t){for(var n=0,i=1,o=e/t;n<10&&!(1<(o*=i));)i=Math.pow(10,n++);return i},forceArray:function(e){return Array.isArray(e)?e:isNaN(e)?"string"==typeof e?e.split(","):[]:[e]}},initialize:function(){c.set.duration(),c.set.transitionEvent(),c.debug(m),c.read.metadata(),c.read.settings(),c.instantiate()},instantiate:function(){c.verbose("Storing instance of progress",c),g=c,u.data(a,c)},destroy:function(){c.verbose("Destroying previous progress for",u),clearInterval(g.interval),c.remove.state(),u.removeData(a),g=D},reset:function(){c.remove.nextValue(),c.update.progress(0)},complete:function(e){(c.percent===D||c.percent<100)&&(c.remove.progressPoll(),!0!==e&&c.set.percent(100))},read:{metadata:function(){var e={percent:c.helper.forceArray(u.data(t.percent)),total:u.data(t.total),value:c.helper.forceArray(u.data(t.value))};e.total&&(c.debug("Total value set from metadata",e.total),c.set.total(e.total)),0<e.value.length&&(c.debug("Current value set from metadata",e.value),c.set.value(e.value),c.set.progress(e.value)),0<e.percent.length&&(c.debug("Current percent value set from metadata",e.percent),c.set.percent(e.percent))},settings:function(){!1!==s.total&&(c.debug("Current total set in settings",s.total),c.set.total(s.total)),!1!==s.value&&(c.debug("Current value set in settings",s.value),c.set.value(s.value),c.set.progress(c.value)),!1!==s.percent&&(c.debug("Current percent set in settings",s.percent),c.set.percent(s.percent))}},bind:{transitionEnd:function(t){var e=c.get.transitionEnd();d.one(e+o,function(e){clearTimeout(c.failSafeTimer),t.call(this,e)}),c.failSafeTimer=setTimeout(function(){d.triggerHandler(e)},s.duration+s.failSafeDelay),c.verbose("Adding fail safe timer",c.timer)}},increment:function(e){var t,n;e=c.has.total()?(t=c.get.value(),e||1):(t=c.get.percent(),e||c.get.randomValue()),n=t+e,c.debug("Incrementing percentage by",t,n,e),n=c.get.normalizedValue(n),c.set.progress(n)},decrement:function(e){var t,n;c.get.total()?(n=(t=c.get.value())-(e=e||1),c.debug("Decrementing value by",e,t)):(n=(t=c.get.percent())-(e=e||c.get.randomValue()),c.debug("Decrementing percentage by",e,t)),n=c.get.normalizedValue(n),c.set.progress(n)},has:{progressPoll:function(){return c.progressPoll},total:function(){return!1!==c.get.total()}},get:{text:function(e,t){var n=t||0,i=c.get.value(n),o=c.total||0,a=p?c.get.displayPercent(n):c.get.percent(n),r=0<c.total?o-i:100-a;return e=(e=e||"").replace("{value}",i).replace("{total}",o).replace("{left}",r).replace("{percent}",a).replace("{bar}",s.text.bars[n]||""),c.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return c.debug("Value cannot decrement below 0"),0;if(c.has.total()){if(e>c.total)return c.debug("Value cannot increment above total",c.total),c.total}else if(100<e)return c.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==s.updateInterval?s.duration:s.updateInterval},randomValue:function(){return c.debug("Generating random increment percentage"),Math.floor(Math.random()*s.random.max+s.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=S.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==D)return n[e]},displayPercent:function(e){var t=T(d[e]),n=t.width(),i=u.width(),o=parseInt(t.css("min-width"),10)<n?n/i*100:c.percent;return 0<s.precision?Math.round(o*(10*s.precision))/(10*s.precision):Math.round(o)},percent:function(e){return c.percent&&c.percent[e||0]||0},value:function(e){return c.nextValue||c.value&&c.value[e||0]||0},total:function(){return c.total||!1}},create:{progressPoll:function(){c.progressPoll=setTimeout(function(){c.update.toNextValue(),c.remove.progressPoll()},c.get.updateInterval())}},is:{complete:function(){return c.is.success()||c.is.warning()||c.is.error()},success:function(){return u.hasClass(n.success)},warning:function(){return u.hasClass(n.warning)},error:function(){return u.hasClass(n.error)},active:function(){return u.hasClass(n.active)},visible:function(){return u.is(":visible")}},remove:{progressPoll:function(){c.verbose("Removing progress poll timer"),c.progressPoll&&(clearTimeout(c.progressPoll),delete c.progressPoll)},nextValue:function(){c.verbose("Removing progress value stored for next update"),delete c.nextValue},state:function(){c.verbose("Removing stored state"),delete c.total,delete c.percent,delete c.value},active:function(){c.verbose("Removing active state"),u.removeClass(n.active)},success:function(){c.verbose("Removing success state"),u.removeClass(n.success)},warning:function(){c.verbose("Removing warning state"),u.removeClass(n.warning)},error:function(){c.verbose("Removing error state"),u.removeClass(n.error)}},set:{barWidth:function(e){c.debug("set bar width with ",e),e=c.helper.forceArray(e);var o=-1,a=-1,r=c.helper.sum(e),s=d.length,l=1<s,t=e.map(function(e,t){var n=t===s-1&&0===r,i=T(d[t]);return 0===e&&l&&!n?i.css("display","none"):(l&&n&&i.css("background","transparent"),-1==o&&(o=t),a=t,i.css({display:"block",width:e+"%"})),parseFloat(e)});e.forEach(function(e,t){T(d[t]).css({borderTopLeftRadius:t==o?"":0,borderBottomLeftRadius:t==o?"":0,borderTopRightRadius:t==a?"":0,borderBottomRightRadius:t==a?"":0})}),u.attr("data-percent",t)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,c.verbose("Setting progress bar transition duration",e),d.css({"transition-duration":e})},percent:function(e){e=c.helper.forceArray(e).map(function(e){return"string"==typeof e?+e.replace("%",""):e});var t=c.has.total(),n=c.helper.sum(e),i=1<e.length&&t,o=c.helper.sum(c.helper.forceArray(c.value));if(i&&o>c.total)c.error(l.sumExceedsTotal,o,c.total);else if(!i&&100<n)c.error(l.tooHigh,n);else if(n<0)c.error(l.tooLow,n);else{var a=0<s.precision?s.precision:i?c.helper.derivePrecision(Math.min.apply(null,c.value),c.total):D,r=e.map(function(e){return 0<a?Math.round(e*(10*a))/(10*a):Math.round(e)});c.percent=r,t||(c.value=r.map(function(e){return 0<a?Math.round(e/100*c.total*(10*a))/(10*a):Math.round(e/100*c.total*10)/10}),s.limitValues&&(c.value=c.value.map(function(e){return 100<e?100:c.value<0?0:c.value}))),c.set.barWidth(e),c.set.labelInterval(),c.set.labels()}s.onChange.call(m,e,c.value,c.total)},labelInterval:function(){clearInterval(c.interval),c.bind.transitionEnd(function(){c.verbose("Bar finished animating, removing continuous label updates"),clearInterval(c.interval),p=!1,c.set.labels()}),p=!0,c.interval=setInterval(function(){T.contains(S.documentElement,m)||(clearInterval(c.interval),p=!1),c.set.labels()},s.framerate)},labels:function(){c.verbose("Setting both bar progress and outer label text"),c.set.barLabel(),c.set.state()},label:function(e){(e=e||"")&&(e=c.get.text(e),c.verbose("Setting label to text",e),f.text(e))},state:function(e){100===(e=e!==D?e:c.helper.sum(c.percent))?s.autoSuccess&&1===d.length&&!(c.is.warning()||c.is.error()||c.is.success())?(c.set.success(),c.debug("Automatically triggering success at 100%")):(c.verbose("Reached 100% removing active state"),c.remove.active(),c.remove.progressPoll()):0<e?(c.verbose("Adjusting active progress bar label",e),c.set.active()):(c.remove.active(),c.set.label(s.text.active))},barLabel:function(i){r.map(function(e,t){var n=T(t);i!==D?n.text(c.get.text(i,e)):"ratio"==s.label&&c.total?(c.verbose("Adding ratio to bar label"),n.text(c.get.text(s.text.ratio,e))):"percent"==s.label&&(c.verbose("Adding percentage to bar label"),n.text(c.get.text(s.text.percent,e)))})},active:function(e){e=e||s.text.active,c.debug("Setting active state"),s.showActivity&&!c.is.active()&&u.addClass(n.active),c.remove.warning(),c.remove.error(),c.remove.success(),(e=s.onLabelUpdate("active",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onActive.call(m,c.value,c.total)})},success:function(e,t){e=e||s.text.success||s.text.active,c.debug("Setting success state"),u.addClass(n.success),c.remove.active(),c.remove.warning(),c.remove.error(),c.complete(t),e=s.text.success?s.onLabelUpdate("success",e,c.value,c.total):s.onLabelUpdate("active",e,c.value,c.total),c.set.label(e),c.bind.transitionEnd(function(){s.onSuccess.call(m,c.total)})},warning:function(e,t){e=e||s.text.warning,c.debug("Setting warning state"),u.addClass(n.warning),c.remove.active(),c.remove.success(),c.remove.error(),c.complete(t),(e=s.onLabelUpdate("warning",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onWarning.call(m,c.value,c.total)})},error:function(e,t){e=e||s.text.error,c.debug("Setting error state"),u.addClass(n.error),c.remove.active(),c.remove.success(),c.remove.warning(),c.complete(t),(e=s.onLabelUpdate("error",e,c.value,c.total))&&c.set.label(e),c.bind.transitionEnd(function(){s.onError.call(m,c.value,c.total)})},transitionEvent:function(){c.get.transitionEnd()},total:function(e){c.total=e},value:function(e){c.value=c.helper.forceArray(e)},progress:function(e){c.has.progressPoll()?(c.debug("Updated within interval, setting next update to use new value",e),c.set.nextValue(e)):(c.debug("First update in progress update interval, immediately updating",e),c.update.progress(e),c.create.progressPoll())},nextValue:function(e){c.nextValue=e}},update:{toNextValue:function(){var e=c.nextValue;e&&(c.debug("Update interval complete using last updated value",e),c.update.progress(e),c.remove.nextValue())},progress:function(e){var n=c.has.total();n&&c.set.value(e);var t=c.helper.forceArray(e).map(function(e){var t;return!1===(e=c.get.numericValue(e))&&c.error(l.nonNumeric,e),e=c.get.normalizedValue(e),n?(t=e/c.total*100,c.debug("Calculating percent complete from total",t)):(t=e,c.debug("Setting value to exact percentage value",t)),t});c.set.percent(t)}},setting:function(e,t){if(c.debug("Changing setting",e,t),T.isPlainObject(e))T.extend(!0,s,e);else{if(t===D)return s[e];T.isPlainObject(s[e])?T.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(T.isPlainObject(e))T.extend(!0,c,e);else{if(t===D)return c[e];c[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,s.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),c.verbose.apply(console,arguments)))},error:function(){s.silent||(c.error=Function.prototype.bind.call(console.error,console,s.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(y||t),y=t,x.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:m,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=s.name+":",n=0;y=!1,clearTimeout(c.performance.timer),T.each(x,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",b&&(e+=" '"+b+"'"),(console.group!==D||console.table!==D)&&0<x.length&&(console.groupCollapsed(e),console.table?console.table(x):T.each(x,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),x=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||k,t=m||t,"string"==typeof i&&r!==D&&(i=i.split(/[\. ]/),o=i.length-1,T.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(T.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==D)return a=r[n],!1;if(!T.isPlainObject(r[t])||e==o)return r[t]!==D?a=r[t]:c.error(l.method,i),!1;r=r[t]}})),T.isFunction(a)?n=a.apply(t,e):a!==D&&(n=a),Array.isArray(v)?v.push(n):v!==D?v=[v,n]:n!==D&&(v=n),a}},w?(g===D&&c.initialize(),c.invoke(C)):(g!==D&&g.invoke("destroy"),c.initialize())}),v!==D?v:this},T.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%",sumExceedsTotal:"Sum of multple values exceed total"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}",bars:[""]},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(H,t,U,B){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),H.fn.slider=function(F){var R,e=H(this),O=H(t),M=e.selector||"",I=(new Date).getTime(),j=[],L=F,q="string"==typeof L,V=[].slice.call(arguments,1),z=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],N=0;return e.each(function(){var m,s,l,e,g,r,t,o,p,h,v,c,n,u,a,b,d=H.isPlainObject(F)?H.extend(!0,{},H.fn.slider.settings,F):H.extend({},H.fn.slider.settings),i=d.className,f=d.metadata,y=d.namespace,x=d.error,C=d.keys,w=d.interpretLabel,k=!1,T="."+y,S="module-"+y,D=H(this),A=this,E=D.data(S),P=1;b={initialize:function(){b.debug("Initializing slider",d),a=!0,t=N+=1,n=b.setup.testOutTouch(),b.setup.layout(),b.setup.labels(),b.is.disabled()||b.bind.events(),b.read.metadata(),b.read.settings(),a=!1,b.instantiate()},instantiate:function(){b.verbose("Storing instance of slider",b),E=b,D.data(S,b)},destroy:function(){b.verbose("Destroying previous slider for",D),clearInterval(E.interval),b.unbind.events(),b.unbind.slidingEvents(),D.removeData(S),E=B},setup:{layout:function(){D.attr("tabindex")===B&&D.attr("tabindex",0),0==D.find(".inner").length&&D.append("<div class='inner'><div class='track'></div><div class='track-fill'></div><div class='thumb'></div></div>"),c=b.get.precision(),s=D.find(".thumb:not(.second)"),m=s,b.is.range()&&(0==D.find(".thumb.second").length&&D.find(".inner").append("<div class='thumb second'></div>"),l=D.find(".thumb.second")),e=D.find(".track"),g=D.find(".track-fill"),v=s.width()/2},labels:function(){b.is.labeled()&&(0!=(r=D.find(".labels:not(.auto)")).length?b.setup.customLabel():b.setup.autoLabel(),d.showLabelTicks&&D.addClass(i.ticked))},testOutTouch:function(){try{return U.createEvent("TouchEvent"),!0}catch(e){return!1}},customLabel:function(){var n,e=r.find(".label"),i=e.length,o=b.get.min(),a=b.get.max();e.each(function(e){var t=H(this).attr("data-value");n=t?((t=a<t?a:t<o?o:t)-o)/(a-o):(e+1)/(i+1),b.update.labelPosition(n,H(this))})},autoLabel:function(){if(0!=b.get.step()){0!=(r=D.find(".labels")).length?r.empty():r=D.append('<ul class="auto labels"></ul>').find(".labels");for(var e=0,t=b.get.numLabels();e<=t;e++){var n=b.get.label(e),i=""!==n?e%b.get.gapRatio()?H('<li class="halftick label"></li>'):H('<li class="label">'+n+"</li>"):null,o=e/t;i&&(b.update.labelPosition(o,i),r.append(i))}}}},bind:{events:function(){b.bind.globalKeyboardEvents(),b.bind.keyboardEvents(),b.bind.mouseEvents(),b.is.touch()&&b.bind.touchEvents(),d.autoAdjustLabels&&b.bind.windowEvents()},keyboardEvents:function(){b.verbose("Binding keyboard events"),D.on("keydown"+T,b.event.keydown)},globalKeyboardEvents:function(){H(U).on("keydown"+T+t,b.event.activateFocus)},mouseEvents:function(){b.verbose("Binding mouse events"),D.find(".track, .thumb, .inner").on("mousedown"+T,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),D.on("mousedown"+T,b.event.down),D.on("mouseenter"+T,function(e){k=!0}),D.on("mouseleave"+T,function(e){k=!1})},touchEvents:function(){b.verbose("Binding touch events"),D.find(".track, .thumb, .inner").on("touchstart"+T,function(e){e.stopImmediatePropagation(),e.preventDefault(),b.event.down(e)}),D.on("touchstart"+T,b.event.down)},slidingEvents:function(){b.verbose("Binding page wide events while handle is being draged"),b.is.touch()?(H(U).on("touchmove"+T,b.event.move),H(U).on("touchend"+T,b.event.up)):(H(U).on("mousemove"+T,b.event.move),H(U).on("mouseup"+T,b.event.up))},windowEvents:function(){O.on("resize"+T,b.event.resize)}},unbind:{events:function(){D.find(".track, .thumb, .inner").off("mousedown"+T),D.find(".track, .thumb, .inner").off("touchstart"+T),D.off("mousedown"+T),D.off("mouseenter"+T),D.off("mouseleave"+T),D.off("touchstart"+T),D.off("keydown"+T),D.off("focusout"+T),H(U).off("keydown"+T+t,b.event.activateFocus),O.off("resize"+T)},slidingEvents:function(){b.is.touch()?(H(U).off("touchmove"+T),H(U).off("touchend"+T)):(H(U).off("mousemove"+T),H(U).off("mouseup"+T))}},event:{down:function(e){if(e.preventDefault(),b.is.range()){var t=b.determine.eventPos(e),n=b.determine.pos(t);m=d.preventCrossover&&b.is.range()&&b.thumbVal===b.secondThumbVal?(u=n,B):b.determine.closestThumb(n)}b.is.disabled()||b.bind.slidingEvents()},move:function(e){e.preventDefault();var t=b.determine.valueFromEvent(e);if(m===B){var n=b.determine.eventPos(e),i=b.determine.pos(n);m=i<u?s:l}if(0==b.get.step()||b.is.smooth()){var o=b.thumbVal,a=b.secondThumbVal,r=b.determine.smoothValueFromEvent(e);m.hasClass("second")?(d.preventCrossover&&b.is.range()&&(t=Math.max(o,t),r=Math.max(o,r)),a=t):(d.preventCrossover&&b.is.range()&&(t=Math.min(a,t),r=Math.min(a,r)),o=t),t=Math.abs(o-(a||0)),b.update.position(r),d.onMove.call(A,t,o,a)}else b.update.value(t,function(e,t,n){d.onMove.call(A,e,t,n)})},up:function(e){e.preventDefault();var t=b.determine.valueFromEvent(e);b.set.value(t),b.unbind.slidingEvents()},keydown:function(e,t){if(d.preventCrossover&&b.is.range()&&b.thumbVal===b.secondThumbVal&&(m=B),b.is.focused()&&H(U).trigger(e),t||b.is.focused()){var n=b.determine.keyMovement(e);if(0!=n)switch(e.preventDefault(),n){case 1:b.takeStep();break;case 2:b.takeStep(b.get.multiplier());break;case-1:b.backStep();break;case-2:b.backStep(b.get.multiplier())}}},activateFocus:function(e){!b.is.focused()&&b.is.hover()&&0!=b.determine.keyMovement(e)&&(e.preventDefault(),b.event.keydown(e,!0),D.focus())},resize:function(e){P!=b.get.gapRatio()&&(b.setup.labels(),P=b.get.gapRatio())}},resync:function(){b.verbose("Resyncing thumb position based on value"),b.is.range()&&b.update.position(b.secondThumbVal,l),b.update.position(b.thumbVal,s),b.setup.labels()},takeStep:function(e){e=e!=B?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Taking a step"),0<t)b.set.value(n+t*e);else if(0==t){var i=b.get.precision(),o=n+e/i;b.set.value(Math.round(o*i)/i)}},backStep:function(e){e=e!=B?e:1;var t=b.get.step(),n=b.get.currentThumbValue();if(b.verbose("Going back a step"),0<t)b.set.value(n-t*e);else if(0==t){var i=b.get.precision(),o=n-e/i;b.set.value(Math.round(o*i)/i)}},is:{range:function(){return D.hasClass(d.className.range)},hover:function(){return k},focused:function(){return D.is(":focus")},disabled:function(){return D.hasClass(d.className.disabled)},labeled:function(){return D.hasClass(d.className.labeled)},reversed:function(){return D.hasClass(d.className.reversed)},vertical:function(){return D.hasClass(d.className.vertical)},smooth:function(){return d.smooth||D.hasClass(d.className.smooth)},touch:function(){return n}},get:{trackOffset:function(){return b.is.vertical()?e.offset().top:e.offset().left},trackLength:function(){return b.is.vertical()?e.height():e.width()},trackLeft:function(){return b.is.vertical()?e.position().top:e.position().left},trackStartPos:function(){return b.is.reversed()?b.get.trackLeft()+b.get.trackLength():b.get.trackLeft()},trackEndPos:function(){return b.is.reversed()?b.get.trackLeft():b.get.trackLeft()+b.get.trackLength()},trackStartMargin:function(){return(b.is.vertical()?b.is.reversed()?D.css("padding-bottom"):D.css("padding-top"):b.is.reversed()?D.css("padding-right"):D.css("padding-left"))||"0px"},trackEndMargin:function(){return(b.is.vertical()?b.is.reversed()?D.css("padding-top"):D.css("padding-bottom"):b.is.reversed()?D.css("padding-left"):D.css("padding-right"))||"0px"},precision:function(){var e,t=b.get.step();if(0!=t){var n=String(t).split(".");e=2==n.length?n[1].length:0}else e=d.decimalPlaces;var i=Math.pow(10,e);return b.debug("Precision determined",i),i},min:function(){return d.min},max:function(){var e=b.get.step(),t=b.get.min(),n=0===e?0:Math.floor((d.max-t)/e);return 0==(0===e?0:(d.max-t)%e)?d.max:t+n*e},step:function(){return d.step},numLabels:function(){var e=Math.round((b.get.max()-b.get.min())/b.get.step());return b.debug("Determined that there should be "+e+" labels"),e},labelType:function(){return d.labelType},label:function(e){if(w)return w(e);switch(d.labelType){case d.labelTypes.number:return Math.round((e*b.get.step()+b.get.min())*c)/c;case d.labelTypes.letter:return z[e%26];default:return e}},value:function(){return o},currentThumbValue:function(){return m!==B&&m.hasClass("second")?b.secondThumbVal:b.thumbVal},thumbValue:function(e){switch(e){case"second":if(b.is.range())return b.secondThumbVal;b.error(x.notrange);break;case"first":default:return b.thumbVal}},multiplier:function(){return d.pageMultiplier},thumbPosition:function(e){switch(e){case"second":if(b.is.range())return h;b.error(x.notrange);break;case"first":default:return p}},gapRatio:function(){var e=1;if(d.autoAdjustLabels){var t=b.get.numLabels(),n=b.get.trackLength(),i=1;if(0<n)for(;n/t*i<d.labelDistance;)t%i||(e=i),i+=1}return e}},determine:{pos:function(e){return b.is.reversed()?b.get.trackStartPos()-e+b.get.trackOffset():e-b.get.trackOffset()-b.get.trackStartPos()},closestThumb:function(e){var t=parseFloat(b.determine.thumbPos(s)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(l)),o=Math.abs(e-i);return n===o&&b.get.thumbValue()===b.get.min()?l:n<=o?s:l},closestThumbPos:function(e){var t=parseFloat(b.determine.thumbPos(s)),n=Math.abs(e-t),i=parseFloat(b.determine.thumbPos(l));return n<=Math.abs(e-i)?t:i},thumbPos:function(e){return b.is.vertical()?b.is.reversed()?e.css("bottom"):e.css("top"):b.is.reversed()?e.css("right"):e.css("left")},positionFromValue:function(e){var t=b.get.min(),n=b.get.max(),i=(e=n<e?n:e<t?t:e,b.get.trackLength()),o=(e-t)/(n-t),a=Math.round(o*i);return b.verbose("Determined position: "+a+" from value: "+e),a},positionFromRatio:function(e){var t=b.get.trackLength(),n=b.get.step(),i=Math.round(e*t);return 0==n?i:Math.round(i/n)*n},valueFromEvent:function(e){var t=b.determine.eventPos(e),n=b.determine.pos(t);return t<b.get.trackOffset()?b.is.reversed()?b.get.max():b.get.min():t>b.get.trackOffset()+b.get.trackLength()?b.is.reversed()?b.get.min():b.get.max():b.determine.value(n)},smoothValueFromEvent:function(e){var t,n=b.get.min(),i=b.get.max(),o=b.get.trackLength(),a=b.determine.eventPos(e)-b.get.trackOffset();return t=(a=a<0?0:o<a?o:a)/o,b.is.reversed()&&(t=1-t),t*(i-n)+n},eventPos:function(e){if(b.is.touch()){var t=e.changedTouches?e:e.originalEvent,n=t.changedTouches[0]?t.changedTouches:t.touches,i=n[0].pageY,o=n[0].pageX;return b.is.vertical()?i:o}var a=e.pageY||e.originalEvent.pageY,r=e.pageX||e.originalEvent.pageX;return b.is.vertical()?a:r},value:function(e){var t=b.is.reversed()?b.get.trackEndPos():b.get.trackStartPos(),n=(e-t)/((b.is.reversed()?b.get.trackStartPos():b.get.trackEndPos())-t),i=b.get.max()-b.get.min(),o=b.get.step(),a=n*i,r=0==o?a:Math.round(a/o)*o;return b.verbose("Determined value based upon position: "+e+" as: "+a),a!=r&&b.verbose("Rounding value to closest step: "+r),r=Math.round(r*c)/c,b.verbose("Cutting off additional decimal places"),r+b.get.min()},keyMovement:function(e){var t=e.which,n=b.is.vertical()?b.is.reversed()?C.downArrow:C.upArrow:C.downArrow,i=b.is.vertical()?b.is.reversed()?C.upArrow:C.downArrow:C.upArrow,o=b.is.vertical()?C.leftArrow:b.is.reversed()?C.rightArrow:C.leftArrow,a=b.is.vertical()?C.rightArrow:b.is.reversed()?C.leftArrow:C.rightArrow;return t==n||t==o?-1:t==i||t==a?1:t==C.pageDown?-2:t==C.pageUp?2:0}},handleNewValuePosition:function(e){var t=b.get.min(),n=b.get.max();return e<=t?e=t:n<=e&&(e=n),b.determine.positionFromValue(e)},set:{value:function(e){b.update.value(e,function(e,t,n){a&&!d.fireOnInit||(d.onChange.call(A,e,t,n),d.onMove.call(A,e,t,n))})},rangeValue:function(e,t){if(b.is.range()){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),t<=n?t=n:i<=t&&(t=i),b.thumbVal=e,b.secondThumbVal=t,o=Math.abs(b.thumbVal-b.secondThumbVal),b.update.position(b.thumbVal,s),b.update.position(b.secondThumbVal,l),a&&!d.fireOnInit||(d.onChange.call(A,o,b.thumbVal,b.secondThumbVal),d.onMove.call(A,o,b.thumbVal,b.secondThumbVal))}else b.error(x.notrange)},position:function(e,t){var n=b.determine.value(e);switch(t){case"second":b.secondThumbVal=n,b.update.position(n,l);break;default:b.thumbVal=n,b.update.position(n,s)}o=Math.abs(b.thumbVal-(b.secondThumbVal||0)),b.set.value(o)}},update:{value:function(e,t){var n=b.get.min(),i=b.get.max();e<=n?e=n:i<=e&&(e=i),b.is.range()?(m===B&&(m=e<=b.get.currentThumbValue()?s:l),m.hasClass("second")?(d.preventCrossover&&b.is.range()&&(e=Math.max(b.thumbVal,e)),b.secondThumbVal=e):(d.preventCrossover&&b.is.range()&&(e=Math.min(b.secondThumbVal,e)),b.thumbVal=e),o=Math.abs(b.thumbVal-b.secondThumbVal)):(o=e,b.thumbVal=o),b.update.position(e),b.debug("Setting slider value to "+o),"function"==typeof t&&t(o,b.thumbVal,b.secondThumbVal)},position:function(e,t){var n=b.handleNewValuePosition(e),i=t!=B?t:m,o=b.thumbVal||b.get.min(),a=b.secondThumbVal||b.get.min();b.is.range()&&i.hasClass("second")?(h=n,a=e):(p=n,o=e);var r,s,l=b.get.min(),c=b.get.max(),u=100*(e-l)/(c-l),d=100*(Math.min(o,a)-l)/(c-l),f=100*(1-(Math.max(o,a)-l)/(c-l));r=b.is.vertical()?b.is.reversed()?(s={bottom:"calc("+u+"% - "+v+"px)",top:"auto"},{bottom:d+"%",top:f+"%"}):(s={top:"calc("+u+"% - "+v+"px)",bottom:"auto"},{top:d+"%",bottom:f+"%"}):b.is.reversed()?(s={right:"calc("+u+"% - "+v+"px)",left:"auto"},{right:d+"%",left:f+"%"}):(s={left:"calc("+u+"% - "+v+"px)",right:"auto"},{left:d+"%",right:f+"%"}),i.css(s),g.css(r),b.debug("Setting slider position to "+n)},labelPosition:function(e,t){var n=b.get.trackStartMargin(),i=b.get.trackEndMargin(),o=b.is.vertical()?b.is.reversed()?"bottom":"top":b.is.reversed()?"right":"left",a=b.is.reversed()&&!b.is.vertical()?" - ":" + ",r="(100% - "+n+" - "+i+") * "+e;t.css(o,"calc("+r+a+n+")")}},goto:{max:function(){b.set.value(b.get.max())},min:function(){b.set.value(b.get.min())}},read:{metadata:function(){var e={thumbVal:D.data(f.thumbVal),secondThumbVal:D.data(f.secondThumbVal)};e.thumbVal&&(b.is.range()&&e.secondThumbVal?(b.debug("Current value set from metadata",e.thumbVal,e.secondThumbVal),b.set.rangeValue(e.thumbVal,e.secondThumbVal)):(b.debug("Current value set from metadata",e.thumbVal),b.set.value(e.thumbVal)))},settings:function(){!1!==d.start&&(b.is.range()?(b.debug("Start position set from settings",d.start,d.end),b.set.rangeValue(d.start,d.end)):(b.debug("Start position set from settings",d.start),b.set.value(d.start)))}},setting:function(e,t){if(b.debug("Changing setting",e,t),H.isPlainObject(e))H.extend(!0,d,e);else{if(t===B)return d[e];H.isPlainObject(d[e])?H.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(H.isPlainObject(e))H.extend(!0,b,e);else{if(t===B)return b[e];b[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,d.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),b.verbose.apply(console,arguments)))},error:function(){d.silent||(b.error=Function.prototype.bind.call(console.error,console,d.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(I||t),I=t,j.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:A,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=d.name+":",n=0;I=!1,clearTimeout(b.performance.timer),H.each(j,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",M&&(e+=" '"+M+"'"),(console.group!==B||console.table!==B)&&0<j.length&&(console.groupCollapsed(e),console.table?console.table(j):H.each(j,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),j=[]}},invoke:function(i,e,t){var o,a,n,r=E;return e=e||V,t=A||t,"string"==typeof i&&r!==B&&(i=i.split(/[\. ]/),o=i.length-1,H.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(H.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==B)return a=r[n],!1;if(!H.isPlainObject(r[t])||e==o)return r[t]!==B?a=r[t]:b.error(x.method,i),!1;r=r[t]}})),H.isFunction(a)?n=a.apply(t,e):a!==B&&(n=a),H.isArray(R)?R.push(n):R!==B?R=[R,n]:n!==B&&(R=n),a}},q?(E===B&&b.initialize(),b.invoke(L)):(E!==B&&E.invoke("destroy"),b.initialize())}),R!==B?R:this},H.fn.slider.settings={silent:!1,debug:!1,verbose:!1,performance:!0,name:"Slider",namespace:"slider",error:{method:"The method you called is not defined.",notrange:"This slider is not a range slider"},metadata:{thumbVal:"thumbVal",secondThumbVal:"secondThumbVal"},min:0,max:20,step:1,start:0,end:20,labelType:"number",showLabelTicks:!1,smooth:!1,autoAdjustLabels:!0,labelDistance:100,preventCrossover:!0,fireOnInit:!1,decimalPlaces:2,pageMultiplier:2,selector:{},className:{reversed:"reversed",disabled:"disabled",labeled:"labeled",ticked:"ticked",vertical:"vertical",range:"range",smooth:"smooth"},keys:{pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},labelTypes:{number:"number",letter:"letter"},onChange:function(e,t,n){},onMove:function(e,t,n){}}}(jQuery,window,document),function(k,e,T){"use strict";k.isFunction=k.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),k.fn.rating=function(g){var p,h=k(this),v=h.selector||"",b=(new Date).getTime(),y=[],x=g,C="string"==typeof x,w=[].slice.call(arguments,1);return h.each(function(){var e,a,r=k.isPlainObject(g)?k.extend(!0,{},k.fn.rating.settings,g):k.extend({},k.fn.rating.settings),t=r.namespace,s=r.className,n=r.metadata,i=r.selector,l=r.cssVars,o="."+t,c="module-"+t,u=this,d=k(this).data(c),f=k(this),m=f.find(i.icon);a={initialize:function(){a.verbose("Initializing rating module",r),0===m.length&&a.setup.layout(),r.interactive&&!a.is.disabled()?a.enable():a.disable(),a.set.initialLoad(),a.set.rating(a.get.initialRating()),a.remove.initialLoad(),a.instantiate()},instantiate:function(){a.verbose("Instantiating module",r),d=a,f.data(c,a)},destroy:function(){a.verbose("Destroying previous instance",d),a.remove.events(),f.removeData(c)},refresh:function(){m=f.find(i.icon)},setup:{layout:function(){var e=a.get.maxRating(),t=a.get.icon(),n=k.fn.rating.settings.templates.icon(e,t);a.debug("Generating icon html dynamically"),f.html(n),a.refresh()}},event:{mouseenter:function(){var e=k(this);e.nextAll().removeClass(s.selected),f.addClass(s.selected),e.addClass(s.selected).prevAll().addClass(s.selected)},mouseleave:function(){f.removeClass(s.selected),m.removeClass(s.selected)},click:function(){var e=k(this),t=a.get.rating(),n=m.index(e)+1;("auto"==r.clearable?1===m.length:r.clearable)&&t==n?a.clearRating():a.set.rating(n)}},clearRating:function(){a.debug("Clearing current rating"),a.set.rating(0)},bind:{events:function(){a.verbose("Binding events"),f.on("mouseenter"+o,i.icon,a.event.mouseenter).on("mouseleave"+o,i.icon,a.event.mouseleave).on("click"+o,i.icon,a.event.click)}},remove:{events:function(){a.verbose("Removing events"),f.off(o)},initialLoad:function(){e=!1}},enable:function(){a.debug("Setting rating to interactive mode"),a.bind.events(),f.removeClass(s.disabled)},disable:function(){a.debug("Setting rating to read-only mode"),a.remove.events(),f.addClass(s.disabled)},is:{initialLoad:function(){return e},disabled:function(){return f.hasClass(s.disabled)}},get:{icon:function(){var e=f.data(n.icon);return e&&f.removeData(n.icon),e||r.icon},initialRating:function(){return f.data(n.rating)!==T?(f.removeData(n.rating),f.data(n.rating)):r.initialRating},maxRating:function(){return f.data(n.maxRating)!==T?(f.removeData(n.maxRating),f.data(n.maxRating)):r.maxRating},rating:function(){var e=m.filter("."+s.active).length;return a.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=Math.floor(0<=e-1?e-1:0),n=m.eq(t),i=e<=1?n:n.next(),o=e%1*100;f.removeClass(s.selected),m.removeClass(s.selected).removeClass(s.active).removeClass(s.partiallyActive),0<e&&(a.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(s.active),n.next()&&e%1!=0&&(i.addClass(s.partiallyActive).addClass(s.active),i.css(l.filledCustomPropName,o+"%"),"transparent"===i.css("backgroundColor")&&i.removeClass(s.partiallyActive).removeClass(s.active))),a.is.initialLoad()||r.onRate.call(u,e)},initialLoad:function(){e=!0}},setting:function(e,t){if(a.debug("Changing setting",e,t),k.isPlainObject(e))k.extend(!0,r,e);else{if(t===T)return r[e];k.isPlainObject(r[e])?k.extend(!0,r[e],t):r[e]=t}},internal:function(e,t){if(k.isPlainObject(e))k.extend(!0,a,e);else{if(t===T)return a[e];a[e]=t}},debug:function(){!r.silent&&r.debug&&(r.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,r.name+":"),a.debug.apply(console,arguments)))},verbose:function(){!r.silent&&r.verbose&&r.debug&&(r.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,r.name+":"),a.verbose.apply(console,arguments)))},error:function(){r.silent||(a.error=Function.prototype.bind.call(console.error,console,r.name+":"),a.error.apply(console,arguments))},performance:{log:function(e){var t,n;r.performance&&(n=(t=(new Date).getTime())-(b||t),b=t,y.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:u,"Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500)},display:function(){var e=r.name+":",n=0;b=!1,clearTimeout(a.performance.timer),k.each(y,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",v&&(e+=" '"+v+"'"),1<h.length&&(e+=" ("+h.length+")"),(console.group!==T||console.table!==T)&&0<y.length&&(console.groupCollapsed(e),console.table?console.table(y):k.each(y,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),y=[]}},invoke:function(i,e,t){var o,a,n,r=d;return e=e||w,t=u||t,"string"==typeof i&&r!==T&&(i=i.split(/[\. ]/),o=i.length-1,k.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(k.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==T)return a=r[n],!1;if(!k.isPlainObject(r[t])||e==o)return r[t]!==T&&(a=r[t]),!1;r=r[t]}})),k.isFunction(a)?n=a.apply(t,e):a!==T&&(n=a),Array.isArray(p)?p.push(n):p!==T?p=[p,n]:n!==T&&(p=n),a}},C?(d===T&&a.initialize(),a.invoke(x)):(d!==T&&d.invoke("destroy"),a.initialize())}),p!==T?p:this},k.fn.rating.settings={name:"Rating",namespace:"rating",icon:"star",silent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating",icon:"icon"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading",partiallyActive:"partial"},cssVars:{filledCustomPropName:"--full"},selector:{icon:".icon"},templates:{icon:function(e,t){for(var n=1,i="";n<=e;)i+='<i class="'+t+' icon"></i>',n++;return i}}}}(jQuery,window,void document),function(P,F,R,O){"use strict";P.isFunction=P.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},F=void 0!==F&&F.Math==Math?F:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),P.fn.search=function(x){var C,w=P(this),k=w.selector||"",T=(new Date).getTime(),S=[],D=x,A="string"==typeof D,E=[].slice.call(arguments,1);return P(this).each(function(){var f,u=P.isPlainObject(x)?P.extend(!0,{},P.fn.search.settings,x):P.extend({},P.fn.search.settings),m=u.className,c=u.metadata,i=u.regExp,a=u.fields,g=u.selector,d=u.error,e=u.namespace,o="."+e,t=e+"-module",p=P(this),h=p.find(g.prompt),n=p.find(g.searchButton),r=p.find(g.results),s=p.find(g.result),v=(p.find(g.category),this),l=p.data(t),b=!1,y=!1;f={initialize:function(){f.verbose("Initializing module"),f.get.settings(),f.determine.searchFields(),f.bind.events(),f.set.type(),f.create.results(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),l=f,p.data(t,f)},destroy:function(){f.verbose("Destroying instance"),p.off(o).removeData(t)},refresh:function(){f.debug("Refreshing selector cache"),h=p.find(g.prompt),n=p.find(g.searchButton),p.find(g.category),r=p.find(g.results),s=p.find(g.result)},refreshResults:function(){r=p.find(g.results),s=p.find(g.result)},bind:{events:function(){f.verbose("Binding events to search"),u.automatic&&(p.on(f.get.inputEvent()+o,g.prompt,f.event.input),h.attr("autocomplete","off")),p.on("focus"+o,g.prompt,f.event.focus).on("blur"+o,g.prompt,f.event.blur).on("keydown"+o,g.prompt,f.handleKeyboard).on("click"+o,g.searchButton,f.query).on("mousedown"+o,g.results,f.event.result.mousedown).on("mouseup"+o,g.results,f.event.result.mouseup).on("click"+o,g.result,f.event.result.click)}},determine:{searchFields:function(){x&&x.searchFields!==O&&(u.searchFields=x.searchFields)}},event:{input:function(){u.searchDelay?(clearTimeout(f.timer),f.timer=setTimeout(function(){f.is.focused()&&f.query()},u.searchDelay)):f.query()},focus:function(){f.set.focus(),u.searchOnFocus&&f.has.minimumCharacters()&&f.query(function(){f.can.show()&&f.showResults()})},blur:function(e){function t(){f.cancel.query(),f.remove.focus(),f.timer=setTimeout(f.hideResults,u.hideDelay)}var n=R.activeElement===this;n||(y=!1,f.resultsClicked?(f.debug("Determining if user action caused search to close"),p.one("click.close"+o,g.results,function(e){f.is.inMessage(e)||b?h.focus():(b=!1,f.is.animating()||f.is.hidden()||t())})):(f.debug("Input blurred without user action, closing results"),t()))},result:{mousedown:function(){f.resultsClicked=!0},mouseup:function(){f.resultsClicked=!1},click:function(e){f.debug("Search result selected");var t=P(this),n=t.find(g.title).eq(0),i=t.is("a[href]")?t:t.find("a[href]").eq(0),o=i.attr("href")||!1,a=i.attr("target")||!1,r=0<n.length&&n.text(),s=f.get.results(),l=t.data(c.result)||f.get.result(r,s);if(r&&f.set.value(r),P.isFunction(u.onSelect)&&!1===u.onSelect.call(v,l,s))return f.debug("Custom onSelect callback cancelled default select action"),void(b=!0);f.hideResults(),o&&(f.verbose("Opening search link found in result",i),"_blank"==a||e.ctrlKey?F.open(o):F.location.href=o)}}},handleKeyboard:function(e){var t,n=p.find(g.result),i=p.find(g.category),o=n.filter("."+m.active),a=n.index(o),r=n.length,s=0<o.length,l=e.which,c=13,u=38,d=40;if(l==27&&(f.verbose("Escape key pressed, blurring search field"),f.hideResults(),y=!0),f.is.visible())if(l==c){if(f.verbose("Enter key pressed, selecting active result"),0<n.filter("."+m.active).length)return f.event.result.click.call(n.filter("."+m.active),e),e.preventDefault(),!1}else l==u&&s?(f.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),e.preventDefault()):l==d&&(f.verbose("Down key pressed, changing active result"),t=r<=a+1?a:a+1,i.removeClass(m.active),n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active),e.preventDefault());else l==c&&(f.verbose("Enter key pressed, executing query"),f.query(),f.set.buttonPressed(),h.one("keyup",f.remove.buttonFocus))},setup:{api:function(t,n){var e={debug:u.debug,on:!1,cache:u.cache,action:"search",urlData:{query:t},onSuccess:function(e){f.parse.response.call(v,e,t),n()},onFailure:function(){f.displayMessage(d.serverError),n()},onAbort:function(e){},onError:f.error};P.extend(!0,e,u.apiSettings),f.verbose("Setting up API request",e),p.api(e)}},can:{useAPI:function(){return P.fn.api!==O},show:function(){return f.is.focused()&&!f.is.visible()&&!f.is.empty()},transition:function(){return u.transition&&P.fn.transition!==O&&p.transition("is supported")}},is:{animating:function(){return r.hasClass(m.animating)},hidden:function(){return r.hasClass(m.hidden)},inMessage:function(e){if(e.target){var t=P(e.target);return P.contains(R.documentElement,e.target)&&0<t.closest(g.message).length}},empty:function(){return""===r.html()},visible:function(){return 0<r.filter(":visible").length},focused:function(){return 0<h.filter(":focus").length}},get:{settings:function(){P.isPlainObject(x)&&x.searchFullText&&(u.fullTextSearch=x.searchFullText,f.error(u.error.oldSearchSyntax,v)),u.ignoreDiacritics&&!String.prototype.normalize&&(u.ignoreDiacritics=!1,f.error(d.noNormalize,v))},inputEvent:function(){var e=h[0];return e!==O&&e.oninput!==O?"input":e!==O&&e.onpropertychange!==O?"propertychange":"keyup"},value:function(){return h.val()},results:function(){return p.data(c.results)},result:function(n,e){var i=!1;return n=n!==O?n:f.get.value(),e=e!==O?e:f.get.results(),"category"===u.type?(f.debug("Finding result that matches",n),P.each(e,function(e,t){if(Array.isArray(t.results)&&(i=f.search.object(n,t.results)[0]))return!1})):(f.debug("Finding result in results object",n),i=f.search.object(n,e)[0]),i||!1}},select:{firstResult:function(){f.verbose("Selecting first result"),s.first().addClass(m.active)}},set:{focus:function(){p.addClass(m.focus)},loading:function(){p.addClass(m.loading)},value:function(e){f.verbose("Setting search input value",e),h.val(e)},type:function(e){e=e||u.type,"category"==u.type&&p.addClass(u.type)},buttonPressed:function(){n.addClass(m.pressed)}},remove:{loading:function(){p.removeClass(m.loading)},focus:function(){p.removeClass(m.focus)},buttonPressed:function(){n.removeClass(m.pressed)},diacritics:function(e){return u.ignoreDiacritics?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}},query:function(e){e=P.isFunction(e)?e:function(){};var t=f.get.value(),n=f.read.cache(t);e=e||function(){},f.has.minimumCharacters()?(n?(f.debug("Reading result from cache",t),f.save.results(n.results),f.addResults(n.html),f.inject.id(n.results),e()):(f.debug("Querying for",t),P.isPlainObject(u.source)||Array.isArray(u.source)?(f.search.local(t),e()):f.can.useAPI()?f.search.remote(t,e):(f.error(d.source),e())),u.onSearchQuery.call(v,t)):f.hideResults()},search:{local:function(e){var t,n=f.search.object(e,u.source);f.set.loading(),f.save.results(n),f.debug("Returned full local search results",n),0<u.maxResults&&(f.debug("Using specified max results",n),n=n.slice(0,u.maxResults)),"category"==u.type&&(n=f.create.categoryResults(n)),t=f.generateResults({results:n}),f.remove.loading(),f.addResults(t),f.inject.id(n),f.write.cache(e,{html:t,results:n})},remote:function(e,t){t=P.isFunction(t)?t:function(){},p.api("is loading")&&p.api("abort"),f.setup.api(e,t),p.api("query")},object:function(o,t,e){o=f.remove.diacritics(String(o));function a(e,t){var n=-1==P.inArray(t,r),i=-1==P.inArray(t,l),o=-1==P.inArray(t,s);n&&i&&o&&e.push(t)}var r=[],s=[],l=[],n=o.replace(i.escape,"\\$&"),c=new RegExp(i.beginsWith+n,"i");return t=t||u.source,e=e!==O?e:u.searchFields,Array.isArray(e)||(e=[e]),t===O||!1===t?(f.error(d.source),[]):(P.each(e,function(e,i){P.each(t,function(e,t){var n;"string"!=typeof t[i]&&"number"!=typeof t[i]||(-1!==(n="string"==typeof t[i]?f.remove.diacritics(t[i]):t[i].toString()).search(c)?a(r,t):"exact"===u.fullTextSearch&&f.exactSearch(o,n)?a(s,t):1==u.fullTextSearch&&f.fuzzySearch(o,n)&&a(l,t))})}),P.merge(s,l),P.merge(r,s),r)}},exactSearch:function(e,t){return e=e.toLowerCase(),-1<(t=t.toLowerCase()).indexOf(e)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n<i)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){if(Array.isArray(e)){var n={};n[a.results]=e,e=n}var i=f.generateResults(e);f.verbose("Parsing server response",e),e!==O&&t!==O&&e[a.results]!==O&&(f.addResults(i),f.inject.id(e[a.results]),f.write.cache(t,{html:i,results:e[a.results]}),f.save.results(e[a.results]))}},cancel:{query:function(){f.can.useAPI()&&p.api("abort")}},has:{minimumCharacters:function(){return f.get.value().length>=u.minCharacters},results:function(){return 0!==r.length&&""!=r.html()}},clear:{cache:function(e){var t=p.data(c.cache);e?e&&t&&t[e]&&(f.debug("Removing value from cache",e),delete t[e],p.data(c.cache,t)):(f.debug("Clearing cache",e),p.removeData(c.cache))}},read:{cache:function(e){var t=p.data(c.cache);return!!u.cache&&(f.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==O&&t[e])}},create:{categoryResults:function(e){var n={};return P.each(e,function(e,t){t.category&&(n[t.category]===O?(f.verbose("Creating new category of results",t.category),n[t.category]={name:t.category,results:[t]}):n[t.category].results.push(t))}),n},id:function(e,t){var n,i=e+1;return t!==O?(n=String.fromCharCode(97+t)+i,f.verbose("Creating category result id",n)):(n=i,f.verbose("Creating result id",n)),n},results:function(){0===r.length&&(r=P("<div />").addClass(m.results).appendTo(p))}},inject:{result:function(e,t,n){f.verbose("Injecting result into results");var i=n!==O?r.children().eq(n).children(g.results).first().children(g.result).eq(t):r.children(g.result).eq(t);f.verbose("Injecting results metadata",i),i.data(c.result,e)},id:function(e){f.debug("Injecting unique ids into results");var n=0,i=0;return"category"===u.type?P.each(e,function(e,t){0<t.results.length&&(i=0,P.each(t.results,function(e,t){t.id===O&&(t.id=f.create.id(i,n)),f.inject.result(t,i,n),i++}),n++)}):P.each(e,function(e,t){t.id===O&&(t.id=f.create.id(i)),f.inject.result(t,i),i++}),e}},save:{results:function(e){f.verbose("Saving current search results to metadata",e),p.data(c.results,e)}},write:{cache:function(e,t){var n=p.data(c.cache)!==O?p.data(c.cache):{};u.cache&&(f.verbose("Writing generated html to cache",e,t),n[e]=t,p.data(c.cache,n))}},addResults:function(e){if(P.isFunction(u.onResultsAdd)&&!1===u.onResultsAdd.call(r,e))return f.debug("onResultsAdd callback cancelled default action"),!1;e?(r.html(e),f.refreshResults(),u.selectFirstResult&&f.select.firstResult(),f.showResults()):f.hideResults(function(){r.empty()})},showResults:function(e){e=P.isFunction(e)?e:function(){},y||!f.is.visible()&&f.has.results()&&(f.can.transition()?(f.debug("Showing results with css animations"),r.transition({animation:u.transition+" in",debug:u.debug,verbose:u.verbose,duration:u.duration,onComplete:function(){e()},queue:!0})):(f.debug("Showing results with javascript"),r.stop().fadeIn(u.duration,u.easing)),u.onResultsOpen.call(r))},hideResults:function(e){e=P.isFunction(e)?e:function(){},f.is.visible()&&(f.can.transition()?(f.debug("Hiding results with css animations"),r.transition({animation:u.transition+" out",debug:u.debug,verbose:u.verbose,duration:u.duration,onComplete:function(){e()},queue:!0})):(f.debug("Hiding results with javascript"),r.stop().fadeOut(u.duration,u.easing)),u.onResultsClose.call(r))},generateResults:function(e){f.debug("Generating html from response",e);var t=u.templates[u.type],n=P.isPlainObject(e[a.results])&&!P.isEmptyObject(e[a.results]),i=Array.isArray(e[a.results])&&0<e[a.results].length,o="";return n||i?(0<u.maxResults&&(n?"standard"==u.type&&f.error(d.maxResults):e[a.results]=e[a.results].slice(0,u.maxResults)),P.isFunction(t)?o=t(e,a,u.preserveHTML):f.error(d.noTemplate,!1)):u.showNoResults&&(o=f.displayMessage(d.noResults,"empty",d.noResultsHeader)),u.onResults.call(v,e),o},displayMessage:function(e,t,n){return t=t||"standard",f.debug("Displaying message",e,t,n),f.addResults(u.templates.message(e,t,n)),u.templates.message(e,t,n)},setting:function(e,t){if(P.isPlainObject(e))P.extend(!0,u,e);else{if(t===O)return u[e];u[e]=t}},internal:function(e,t){if(P.isPlainObject(e))P.extend(!0,f,e);else{if(t===O)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(T||t),T=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:v,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;T=!1,clearTimeout(f.performance.timer),P.each(S,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",k&&(e+=" '"+k+"'"),1<w.length&&(e+=" ("+w.length+")"),(console.group!==O||console.table!==O)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):P.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=v||t,"string"==typeof i&&r!==O&&(i=i.split(/[\. ]/),o=i.length-1,P.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(P.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==O)return a=r[n],!1;if(!P.isPlainObject(r[t])||e==o)return r[t]!==O&&(a=r[t]),!1;r=r[t]}})),P.isFunction(a)?n=a.apply(t,e):a!==O&&(n=a),Array.isArray(C)?C.push(n):C!==O?C=[C,n]:n!==O&&(C=n),a}},A?(l===O&&f.initialize(),f.invoke(D)):(l!==O&&l.invoke("destroy"),f.initialize())}),C!==O?C:this},P.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchOnFocus:!0,searchFields:["id","title","description"],displayField:"",fullTextSearch:"exact",ignoreDiacritics:!1,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,preserveHTML:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResultsHeader:"No Results",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",oldSearchSyntax:"searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined.",noNormalize:'"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e},message:function(e,t,n){var i="";return e!==O&&t!==O&&(i+='<div class="message '+t+'">',n&&(i+='<div class="header">'+n+"</div>"),i+=' <div class="description">'+e+"</div>",i+="</div>"),i},category:function(e,n,i){var o="",a=P.fn.search.settings.templates.escape;return e[n.categoryResults]!==O&&(P.each(e[n.categoryResults],function(e,t){t[n.results]!==O&&0<t.results.length&&(o+='<div class="category">',t[n.categoryName]!==O&&(o+='<div class="name">'+a(t[n.categoryName],i)+"</div>"),o+='<div class="results">',P.each(t.results,function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==O&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==O&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==O&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==O&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),o+="</div>",o+="</div>")}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)},standard:function(e,n,i){var o="",a=P.fn.search.settings.templates.escape;return e[n.results]!==O&&(P.each(e[n.results],function(e,t){t[n.url]?o+='<a class="result" href="'+t[n.url].replace(/"/g,"")+'">':o+='<a class="result">',t[n.image]!==O&&(o+='<div class="image"> <img src="'+t[n.image].replace(/"/g,"")+'"></div>'),o+='<div class="content">',t[n.price]!==O&&(o+='<div class="price">'+a(t[n.price],i)+"</div>"),t[n.title]!==O&&(o+='<div class="title">'+a(t[n.title],i)+"</div>"),t[n.description]!==O&&(o+='<div class="description">'+a(t[n.description],i)+"</div>"),o+="</div>",o+="</a>"}),e[n.action]&&(!1===n.actionURL?o+='<div class="action">'+a(e[n.action][n.actionText],i)+"</div>":o+='<a href="'+e[n.action][n.actionURL].replace(/"/g,"")+'" class="action">'+a(e[n.action][n.actionText],i)+"</a>"),o)}}}}(jQuery,window,document),function(A,e,E,P){"use strict";A.isFunction=A.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),A.fn.shape=function(b){var y,x=A(this),C=(new Date).getTime(),w=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,0)};return x.each(function(){var i,o,r,t=x.selector||"",s=A.isPlainObject(b)?A.extend(!0,{},A.fn.shape.settings,b):A.extend({},A.fn.shape.settings),e=s.namespace,l=s.selector,n=s.error,c=s.className,a="."+e,u="module-"+e,d=A(this),f=d.find(">"+l.sides),m=f.find(">"+l.side),g=!1,p=this,h=d.data(u);if(r={initialize:function(){r.verbose("Initializing module for",p),r.set.defaultSide(),r.instantiate()},instantiate:function(){r.verbose("Storing instance of module",r),h=r,d.data(u,h)},destroy:function(){r.verbose("Destroying previous module for",p),d.removeData(u).off(a)},refresh:function(){r.verbose("Refreshing selector cache for",p),d=A(p),f=A(this).find(l.sides),m=A(this).find(l.side)},repaint:function(){r.verbose("Forcing repaint event");(f[0]||E.createElement("div")).offsetWidth},animate:function(e,t){r.verbose("Animating box with properties",e),t=t||function(e){r.verbose("Executing animation callback"),e!==P&&e.stopPropagation(),r.reset(),r.set.active()},s.beforeChange.call(o[0]),r.get.transitionEvent()?(r.verbose("Starting CSS animation"),d.addClass(c.animating),f.css(e).one(r.get.transitionEvent(),t),r.set.duration(s.duration),D(function(){d.addClass(c.animating),i.addClass(c.hidden)})):t()},queue:function(e){r.debug("Queueing animation of",e),f.one(r.get.transitionEvent(),function(){r.debug("Executing queued animation"),setTimeout(function(){d.shape(e)},0)})},reset:function(){r.verbose("Animating states reset"),d.removeClass(c.animating).attr("style","").removeAttr("style"),f.attr("style","").removeAttr("style"),m.attr("style","").removeAttr("style").removeClass(c.hidden),o.removeClass(c.animating).attr("style","").removeAttr("style")},is:{complete:function(){return m.filter("."+c.active)[0]==o[0]},animating:function(){return d.hasClass(c.animating)},hidden:function(){return 0<d.closest(":hidden").length}},set:{defaultSide:function(){i=m.filter("."+s.className.active),o=0<i.next(l.side).length?i.next(l.side):m.first(),g=!1,r.verbose("Active side set to",i),r.verbose("Next side set to",o)},duration:function(e){e="number"==typeof(e=e||s.duration)?e+"ms":e,r.verbose("Setting animation duration",e),!s.duration&&0!==s.duration||f.add(m).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=m.filter("."+s.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);d.css({width:t,height:n})},stageSize:function(){var e=d.clone().addClass(c.loading),t=e.find(">"+l.sides+">"+l.side),n=t.filter("."+s.className.active),i=g?t.eq(g):0<n.next(l.side).length?n.next(l.side):t.first(),o="next"===s.width?i.outerWidth(!0):"initial"===s.width?d.width():s.width,a="next"===s.height?i.outerHeight(!0):"initial"===s.height?d.height():s.height;n.removeClass(c.active),i.addClass(c.active),e.insertAfter(d),e.remove(),"auto"!==s.width&&(d.css("width",o+s.jitter),r.verbose("Specifying width during animation",o)),"auto"!==s.height&&(d.css("height",a+s.jitter),r.verbose("Specifying height during animation",a))},nextSide:function(e){g=e,o=m.filter(e),g=m.index(o),0===o.length&&(r.set.defaultSide(),r.error(n.side)),r.verbose("Next side manually set to",o)},active:function(){r.verbose("Setting new side to active",o),m.removeClass(c.active),o.addClass(c.active),s.onChange.call(o[0]),r.set.defaultSide()}},flip:{to:function(e,t){if(r.is.hidden())r.debug("Module not visible",o);else if(!r.is.complete()||r.is.animating()||s.allowRepeats){var n=r.get.transform[e]();r.is.animating()?r.queue("flip "+e):(r.debug("Flipping "+e,o),r.set.stageSize(),r.stage[t](),r.animate(n))}else r.debug("Side already visible",o)},up:function(){r.flip.to("up","above")},down:function(){r.flip.to("down","below")},left:function(){r.flip.to("left","left")},right:function(){r.flip.to("right","right")},over:function(){r.flip.to("over","behind")},back:function(){r.flip.to("back","behind")}},get:{transform:{up:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY("+(o.outerHeight(!0)-e)+"px) translateZ(-"+e+"px) rotateX(-90deg)"}},down:function(){var e=i.outerHeight(!0)/2;return{transform:"translateY(-"+e+"px) translateZ(-"+e+"px) rotateX(90deg)"}},left:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX("+(o.outerWidth(!0)-e)+"px) translateZ(-"+e+"px) rotateY(90deg)"}},right:function(){var e=i.outerWidth(!0)/2;return{transform:"translateX(-"+e+"px) translateZ(-"+e+"px) rotateY(-90deg)"}},over:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(180deg)"}},back:function(){return{transform:"translateX("+-(i.outerWidth(!0)-o.outerWidth(!0))/2+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=E.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==P)return n[e]},nextSide:function(){return 0<i.next(l.side).length?i.next(l.side):m.first()}},stage:{above:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as above",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px) translateY(-"+e.depth.active+"px)"})},below:function(){var e={origin:(i.outerHeight(!0)-o.outerHeight(!0))/2,depth:{active:o.outerHeight(!0)/2,next:i.outerHeight(!0)/2}};r.verbose("Setting the initial animation position as below",o,e),i.css({transform:"rotateX(0deg)"}),o.addClass(c.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px) translateY("+e.depth.active+"px)"})},left:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as left",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px) translateX(-"+n.depth.active+"px)"})},right:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as right",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px) translateX("+n.depth.active+"px)"})},behind:function(){var e=i.outerWidth(!0),t=o.outerWidth(!0),n={origin:(e-t)/2,depth:{active:t/2,next:e/2}};r.verbose("Setting the initial animation position as behind",o,n),i.css({transform:"rotateY(0deg)"}),o.addClass(c.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(e,t){if(r.debug("Changing setting",e,t),A.isPlainObject(e))A.extend(!0,s,e);else{if(t===P)return s[e];A.isPlainObject(s[e])?A.extend(!0,s[e],t):s[e]=t}},internal:function(e,t){if(A.isPlainObject(e))A.extend(!0,r,e);else{if(t===P)return r[e];r[e]=t}},debug:function(){!s.silent&&s.debug&&(s.performance?r.performance.log(arguments):(r.debug=Function.prototype.bind.call(console.info,console,s.name+":"),r.debug.apply(console,arguments)))},verbose:function(){!s.silent&&s.verbose&&s.debug&&(s.performance?r.performance.log(arguments):(r.verbose=Function.prototype.bind.call(console.info,console,s.name+":"),r.verbose.apply(console,arguments)))},error:function(){s.silent||(r.error=Function.prototype.bind.call(console.error,console,s.name+":"),r.error.apply(console,arguments))},performance:{log:function(e){var t,n;s.performance&&(n=(t=(new Date).getTime())-(C||t),C=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:p,"Execution Time":n})),clearTimeout(r.performance.timer),r.performance.timer=setTimeout(r.performance.display,500)},display:function(){var e=s.name+":",n=0;C=!1,clearTimeout(r.performance.timer),A.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",t&&(e+=" '"+t+"'"),1<x.length&&(e+=" ("+x.length+")"),(console.group!==P||console.table!==P)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):A.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=h;return e=e||S,t=p||t,"string"==typeof i&&r!==P&&(i=i.split(/[\. ]/),o=i.length-1,A.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(A.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==P)return a=r[n],!1;if(!A.isPlainObject(r[t])||e==o)return r[t]!==P&&(a=r[t]),!1;r=r[t]}})),A.isFunction(a)?n=a.apply(t,e):a!==P&&(n=a),Array.isArray(y)?y.push(n):y!==P?y=[y,n]:n!==P&&(y=n),a}},T){h===P&&r.initialize();var v=d.find("input");0<v.length?(v.blur(),setTimeout(function(){r.invoke(k)},150)):r.invoke(k)}else h!==P&&h.invoke("destroy"),r.initialize()}),y!==P?y:this},A.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(M,I,j,L){"use strict";M.isFunction=M.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},I=void 0!==I&&I.Math==Math?I:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),M.fn.sidebar=function(x){var C,e=M(this),w=M(I),k=M(j),T=M("html"),S=M("head"),D=e.selector||"",A=(new Date).getTime(),E=[],P=x,F="string"==typeof P,R=[].slice.call(arguments,1),O=I.requestAnimationFrame||I.mozRequestAnimationFrame||I.webkitRequestAnimationFrame||I.msRequestAnimationFrame||function(e){setTimeout(e,0)};return e.each(function(){var r,s,e,t,l,c,u=M.isPlainObject(x)?M.extend(!0,{},M.fn.sidebar.settings,x):M.extend({},M.fn.sidebar.settings),n=u.selector,a=u.className,i=u.namespace,o=u.regExp,d=u.error,f="."+i,m="module-"+i,g=M(this),p=M(u.context),h=g.children(n.sidebar),v=(p.children(n.fixed),p.children(n.pusher)),b=this,y=g.data(m);c={initialize:function(){c.debug("Initializing sidebar",x),c.create.id(),l=c.get.transitionEvent(),u.delaySetup?O(c.setup.layout):c.setup.layout(),O(function(){c.setup.cache()}),c.instantiate()},instantiate:function(){c.verbose("Storing instance of module",c),y=c,g.data(m,c)},create:{id:function(){e=(Math.random().toString(16)+"000000000").substr(2,8),s="."+e,c.verbose("Creating unique id for element",e)}},destroy:function(){c.verbose("Destroying previous module for",g),g.off(f).removeData(m),c.is.ios()&&c.remove.ios(),p.off(s),w.off(s),k.off(s)},event:{clickaway:function(e){if(u.closable){var t=0<v.find(e.target).length||v.is(e.target),n=p.is(e.target);t&&(c.verbose("User clicked on dimmed page"),c.hide()),n&&(c.verbose("User clicked on dimmable context (scaled out page)"),c.hide())}},touch:function(e){},containScroll:function(e){b.scrollTop<=0&&(b.scrollTop=1),b.scrollTop+b.offsetHeight>=b.scrollHeight&&(b.scrollTop=b.scrollHeight-b.offsetHeight-1)},scroll:function(e){0===M(e.target).closest(n.sidebar).length&&e.preventDefault()}},bind:{clickaway:function(){c.verbose("Adding clickaway events to context",p),p.on("click"+s,c.event.clickaway).on("touchend"+s,c.event.clickaway)},scrollLock:function(){u.scrollLock&&(c.debug("Disabling page scroll"),w.on("DOMMouseScroll"+s,c.event.scroll)),c.verbose("Adding events to contain sidebar scroll"),k.on("touchmove"+s,c.event.touch),g.on("scroll"+f,c.event.containScroll)}},unbind:{clickaway:function(){c.verbose("Removing clickaway events from context",p),p.off(s)},scrollLock:function(){c.verbose("Removing scroll lock from page"),k.off(s),w.off(s),g.off("scroll"+f)}},add:{inlineCSS:function(){var e,t=c.cache.width||g.outerWidth(),n=c.cache.height||g.outerHeight(),i=c.is.rtl(),o=c.get.direction(),a={left:t,right:-t,top:n,bottom:-n};i&&(c.verbose("RTL detected, flipping widths"),a.left=-t,a.right=t),e="<style>","left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" .ui.visible."+o+".sidebar ~ .fixed, .ui.visible."+o+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),c.is.ie()&&("left"===o||"right"===o?(c.debug("Adding CSS rules for animation distance",t),e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+a[o]+"px, 0, 0);           transform: translate3d("+a[o]+"px, 0, 0); }"):"top"!==o&&"bottom"!=o||(e+=" body.pushable > .ui.visible."+o+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+a[o]+"px, 0);           transform: translate3d(0, "+a[o]+"px, 0); }"),e+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, 0, 0);           transform: translate3d(0, 0, 0); }"),r=M(e+="</style>").appendTo(S),c.debug("Adding sizing css to head",r)}},refresh:function(){c.verbose("Refreshing selector cache"),p=M(u.context),h=p.children(n.sidebar),v=p.children(n.pusher),p.children(n.fixed),c.clear.cache()},refreshSidebars:function(){c.verbose("Refreshing other sidebars"),h=p.children(n.sidebar)},repaint:function(){c.verbose("Forcing repaint event"),b.style.display="none";b.offsetHeight;b.scrollTop=b.scrollTop,b.style.display=""},setup:{cache:function(){c.cache={width:g.outerWidth(),height:g.outerHeight()}},layout:function(){0===p.children(n.pusher).length&&(c.debug("Adding wrapper element for sidebar"),c.error(d.pusher),v=M('<div class="pusher" />'),p.children().not(n.omitted).not(h).wrapAll(v),c.refresh()),0!==g.nextAll(n.pusher).length&&g.nextAll(n.pusher)[0]===v[0]||(c.debug("Moved sidebar to correct parent element"),c.error(d.movedSidebar,b),g.detach().prependTo(p),c.refresh()),c.clear.cache(),c.set.pushable(),c.set.direction()}},attachEvents:function(e,t){var n=M(e);t=M.isFunction(c[t])?c[t]:c.toggle,0<n.length?(c.debug("Attaching sidebar events to element",e,t),n.on("click"+f,t)):c.error(d.notFound,e)},show:function(e){if(e=M.isFunction(e)?e:function(){},c.is.hidden()){if(c.refreshSidebars(),u.overlay&&(c.error(d.overlay),u.transition="overlay"),c.refresh(),c.othersActive())if(c.debug("Other sidebars currently visible"),u.exclusive){if("overlay"!=u.transition)return void c.hideOthers(c.show);c.hideOthers()}else u.transition="overlay";c.pushPage(function(){e.call(b),u.onShow.call(b)}),u.onChange.call(b),u.onVisible.call(b)}else c.debug("Sidebar is already visible")},hide:function(e){e=M.isFunction(e)?e:function(){},(c.is.visible()||c.is.animating())&&(c.debug("Hiding sidebar",e),c.refreshSidebars(),c.pullPage(function(){e.call(b),u.onHidden.call(b)}),u.onChange.call(b),u.onHide.call(b))},othersAnimating:function(){return 0<h.not(g).filter("."+a.animating).length},othersVisible:function(){return 0<h.not(g).filter("."+a.visible).length},othersActive:function(){return c.othersVisible()||c.othersAnimating()},hideOthers:function(e){var t=h.not(g).filter("."+a.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){++i==n&&e()})},toggle:function(){c.verbose("Determining toggled direction"),c.is.hidden()?c.show():c.hide()},pushPage:function(t){var e,n,i,o=c.get.transition(),a="overlay"===o||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},"scale down"==u.transition&&c.scrollToTop(),c.set.transition(o),c.repaint(),e=function(){c.bind.clickaway(),c.add.inlineCSS(),c.set.animating(),c.set.visible()},n=function(){c.set.dimmed()},i=function(e){e.target==a[0]&&(a.off(l+s,i),c.remove.animating(),c.bind.scrollLock(),t.call(b))},a.off(l+s),a.on(l+s,i),O(e),u.dimPage&&!c.othersVisible()&&O(n)},pullPage:function(t){var e,n,i=c.get.transition(),o="overlay"==i||c.othersActive()?g:v;t=M.isFunction(t)?t:function(){},c.verbose("Removing context push state",c.get.direction()),c.unbind.clickaway(),c.unbind.scrollLock(),e=function(){c.set.transition(i),c.set.animating(),c.remove.visible(),u.dimPage&&!c.othersVisible()&&v.removeClass(a.dimmed)},n=function(e){e.target==o[0]&&(o.off(l+s,n),c.remove.animating(),c.remove.transition(),c.remove.inlineCSS(),("scale down"==i||u.returnScroll&&c.is.mobile())&&c.scrollBack(),t.call(b))},o.off(l+s),o.on(l+s,n),O(e)},scrollToTop:function(){c.verbose("Scrolling to top of page to avoid animation issues"),t=M(I).scrollTop(),g.scrollTop(0),I.scrollTo(0,0)},scrollBack:function(){c.verbose("Scrolling back to original page position"),I.scrollTo(0,t)},clear:{cache:function(){c.verbose("Clearing cached dimensions"),c.cache={}}},set:{ios:function(){T.addClass(a.ios)},pushed:function(){p.addClass(a.pushed)},pushable:function(){p.addClass(a.pushable)},dimmed:function(){v.addClass(a.dimmed)},active:function(){g.addClass(a.active)},animating:function(){g.addClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.addClass(e)},direction:function(e){e=e||c.get.direction(),g.addClass(a[e])},visible:function(){g.addClass(a.visible)},overlay:function(){g.addClass(a.overlay)}},remove:{inlineCSS:function(){c.debug("Removing inline css styles",r),r&&0<r.length&&r.remove()},ios:function(){T.removeClass(a.ios)},pushed:function(){p.removeClass(a.pushed)},pushable:function(){p.removeClass(a.pushable)},active:function(){g.removeClass(a.active)},animating:function(){g.removeClass(a.animating)},transition:function(e){e=e||c.get.transition(),g.removeClass(e)},direction:function(e){e=e||c.get.direction(),g.removeClass(a[e])},visible:function(){g.removeClass(a.visible)},overlay:function(){g.removeClass(a.overlay)}},get:{direction:function(){return g.hasClass(a.top)?a.top:g.hasClass(a.right)?a.right:g.hasClass(a.bottom)?a.bottom:a.left},transition:function(){var e,t=c.get.direction();return e=c.is.mobile()?"auto"==u.mobileTransition?u.defaultTransition.mobile[t]:u.mobileTransition:"auto"==u.transition?u.defaultTransition.computer[t]:u.transition,c.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=j.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(t.style[e]!==L)return n[e]}},is:{ie:function(){return!I.ActiveXObject&&"ActiveXObject"in I||"ActiveXObject"in I},ios:function(){var e=navigator.userAgent,t=e.match(o.ios),n=e.match(o.mobileChrome);return!(!t||n)&&(c.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent;return e.match(o.mobile)?(c.verbose("Browser was found to be mobile",e),!0):(c.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!c.is.visible()},visible:function(){return g.hasClass(a.visible)},open:function(){return c.is.visible()},closed:function(){return c.is.hidden()},vertical:function(){return g.hasClass(a.top)},animating:function(){return p.hasClass(a.animating)},rtl:function(){return c.cache.rtl===L&&(c.cache.rtl="rtl"===g.attr("dir")||"rtl"===g.css("direction")),c.cache.rtl}},setting:function(e,t){if(c.debug("Changing setting",e,t),M.isPlainObject(e))M.extend(!0,u,e);else{if(t===L)return u[e];M.isPlainObject(u[e])?M.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(M.isPlainObject(e))M.extend(!0,c,e);else{if(t===L)return c[e];c[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?c.performance.log(arguments):(c.debug=Function.prototype.bind.call(console.info,console,u.name+":"),c.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?c.performance.log(arguments):(c.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),c.verbose.apply(console,arguments)))},error:function(){u.silent||(c.error=Function.prototype.bind.call(console.error,console,u.name+":"),c.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(A||t),A=t,E.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:b,"Execution Time":n})),clearTimeout(c.performance.timer),c.performance.timer=setTimeout(c.performance.display,500)},display:function(){var e=u.name+":",n=0;A=!1,clearTimeout(c.performance.timer),M.each(E,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",D&&(e+=" '"+D+"'"),(console.group!==L||console.table!==L)&&0<E.length&&(console.groupCollapsed(e),console.table?console.table(E):M.each(E,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),E=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||R,t=b||t,"string"==typeof i&&r!==L&&(i=i.split(/[\. ]/),o=i.length-1,M.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(M.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==L)return a=r[n],!1;if(!M.isPlainObject(r[t])||e==o)return r[t]!==L?a=r[t]:c.error(d.method,i),!1;r=r[t]}})),M.isFunction(a)?n=a.apply(t,e):a!==L&&(n=a),Array.isArray(C)?C.push(n):C!==L?C=[C,n]:n!==L&&(C=n),a}},F?(y===L&&c.initialize(),c.invoke(P)):(y!==L&&c.invoke("destroy"),c.initialize())}),C!==L?C:this},M.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(S,D,A,E){"use strict";S.isFunction=S.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},D=void 0!==D&&D.Math==Math?D:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),S.fn.sticky=function(v){var b,e=S(this),y=e.selector||"",x=(new Date).getTime(),C=[],w=v,k="string"==typeof w,T=[].slice.call(arguments,1);return e.each(function(){var t,i,e,n,d,f=S.isPlainObject(v)?S.extend(!0,{},S.fn.sticky.settings,v):S.extend({},S.fn.sticky.settings),o=f.className,a=f.namespace,r=f.error,s="."+a,l="module-"+a,c=S(this),u=S(D),m=S(f.scrollContext),g=c.data(l),p=D.requestAnimationFrame||D.mozRequestAnimationFrame||D.webkitRequestAnimationFrame||D.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this;d={initialize:function(){d.determineContainer(),d.determineContext(),d.verbose("Initializing sticky",f,t),d.save.positions(),d.checkErrors(),d.bind.events(),f.observeChanges&&d.observeChanges(),d.instantiate()},instantiate:function(){d.verbose("Storing instance of module",d),g=d,c.data(l,d)},destroy:function(){d.verbose("Destroying previous instance"),d.reset(),e&&e.disconnect(),n&&n.disconnect(),u.off("load"+s,d.event.load).off("resize"+s,d.event.resize),m.off("scrollchange"+s,d.event.scrollchange),c.removeData(l)},observeChanges:function(){"MutationObserver"in D&&(e=new MutationObserver(d.event.documentChanged),n=new MutationObserver(d.event.changed),e.observe(A,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),n.observe(i[0],{childList:!0,subtree:!0}),d.debug("Setting up mutation observer",n))},determineContainer:function(){t=f.container?S(f.container):c.offsetParent()},determineContext:function(){0!==(i=f.context?S(f.context):t).length||d.error(r.invalidContext,f.context,c)},checkErrors:function(){if(d.is.hidden()&&d.error(r.visible,c),d.cache.element.height>d.cache.context.height)return d.reset(),void d.error(r.elementSize,c)},bind:{events:function(){u.on("load"+s,d.event.load).on("resize"+s,d.event.resize),m.off("scroll"+s).on("scroll"+s,d.event.scroll).on("scrollchange"+s,d.event.scrollchange)}},event:{changed:function(e){clearTimeout(d.timer),d.timer=setTimeout(function(){d.verbose("DOM tree modified, updating sticky menu",e),d.refresh()},100)},documentChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<S(e).find(h).length)&&(d.debug("Element removed from DOM, tearing down events"),d.destroy())})})},load:function(){d.verbose("Page contents finished loading"),p(d.refresh)},resize:function(){d.verbose("Window resized"),p(d.refresh)},scroll:function(){p(function(){m.triggerHandler("scrollchange"+s,m.scrollTop())})},scrollchange:function(e,t){d.stick(t),f.onScroll.call(h)}},refresh:function(e){d.reset(),f.context||d.determineContext(),e&&d.determineContainer(),d.save.positions(),d.stick(),f.onReposition.call(h)},supports:{sticky:function(){var e=S("<div/>");return e.addClass(o.supported),e.css("position").match("sticky")}},save:{lastScroll:function(e){d.lastScroll=e},elementScroll:function(e){d.elementScroll=e},positions:function(){var e={height:m.height()},t={margin:{top:parseInt(c.css("margin-top"),10),bottom:parseInt(c.css("margin-bottom"),10)},offset:c.offset(),width:c.outerWidth(),height:c.outerHeight()},n={offset:i.offset(),height:i.outerHeight()};d.is.standardScroll()||(d.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=m.scrollTop(),e.left=m.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),d.cache={fits:t.height+f.offset<=e.height,sameHeight:t.height==n.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},d.set.containerSize(),d.stick(),d.debug("Caching element positions",d.cache)}},get:{direction:function(e){var t="down";return e=e||m.scrollTop(),d.lastScroll!==E&&(d.lastScroll<e?t="down":d.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||m.scrollTop(),d.lastScroll?e-d.lastScroll:0},currentElementScroll:function(){return d.elementScroll?d.elementScroll:d.is.top()?Math.abs(parseInt(c.css("top"),10))||0:Math.abs(parseInt(c.css("bottom"),10))||0},elementScroll:function(e){e=e||m.scrollTop();var t=d.cache.element,n=d.cache.scrollContext,i=d.get.scrollChange(e),o=t.height-n.height+f.offset,a=d.get.currentElementScroll(),r=a+i;return a=d.cache.fits||r<0?0:o<r?o:r}},remove:{lastScroll:function(){delete d.lastScroll},elementScroll:function(e){delete d.elementScroll},minimumSize:function(){t.css("min-height","")},offset:function(){c.css("margin-top","")}},set:{offset:function(){d.verbose("Setting offset on element",f.offset),c.css("margin-top",f.offset)},containerSize:function(){var e=t.get(0).tagName;"HTML"===e||"body"==e?d.determineContainer():Math.abs(t.outerHeight()-d.cache.context.height)>f.jitter&&(d.debug("Context has padding, specifying exact height for container",d.cache.context.height),t.css({height:d.cache.context.height}))},minimumSize:function(){var e=d.cache.element;t.css("min-height",e.height)},scroll:function(e){d.debug("Setting scroll on element",e),d.elementScroll!=e&&(d.is.top()&&c.css("bottom","").css("top",-e),d.is.bottom()&&c.css("top","").css("bottom",e))},size:function(){0!==d.cache.element.height&&0!==d.cache.element.width&&(h.style.setProperty("width",d.cache.element.width+"px","important"),h.style.setProperty("height",d.cache.element.height+"px","important"))}},is:{standardScroll:function(){return m[0]==D},top:function(){return c.hasClass(o.top)},bottom:function(){return c.hasClass(o.bottom)},initialPosition:function(){return!d.is.fixed()&&!d.is.bound()},hidden:function(){return!c.is(":visible")},bound:function(){return c.hasClass(o.bound)},fixed:function(){return c.hasClass(o.fixed)}},stick:function(e){var t=e||m.scrollTop(),n=d.cache,i=n.fits,o=n.sameHeight,a=n.element,r=n.scrollContext,s=n.context,l=d.is.bottom()&&f.pushing?f.bottomOffset:f.offset,c=(e={top:t+l,bottom:t+l+r.height},i?0:d.get.elementScroll(e.top)),u=!i;0===a.height||o||(d.is.initialPosition()?e.top>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):e.top>a.top&&(a.height+e.top-c>=s.bottom?(d.debug("Initial element position is bottom of container"),d.bindBottom()):(d.debug("Initial element position is fixed"),d.fixTop())):d.is.fixed()?d.is.top()?e.top<=a.top?(d.debug("Fixed element reached top of container"),d.setInitialPosition()):a.height+e.top-c>=s.bottom?(d.debug("Fixed element reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c)):d.is.bottom()&&(e.bottom-a.height<=a.top?(d.debug("Bottom fixed rail has reached top of container"),d.setInitialPosition()):e.bottom>=s.bottom?(d.debug("Bottom fixed rail has reached bottom of container"),d.bindBottom()):u&&(d.set.scroll(c),d.save.lastScroll(e.top),d.save.elementScroll(c))):d.is.bottom()&&(e.top<=a.top?(d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),d.setInitialPosition()):f.pushing?d.is.bound()&&e.bottom<=s.bottom&&(d.debug("Fixing bottom attached element to bottom of browser."),d.fixBottom()):d.is.bound()&&e.top<=s.bottom-a.height&&(d.debug("Fixing bottom attached element to top of browser."),d.fixTop())))},bindTop:function(){d.debug("Binding element to top of parent container"),d.remove.offset(),c.css({left:"",top:"",marginBottom:""}).removeClass(o.fixed).removeClass(o.bottom).addClass(o.bound).addClass(o.top),f.onTop.call(h),f.onUnstick.call(h)},bindBottom:function(){d.debug("Binding element to bottom of parent container"),d.remove.offset(),c.css({left:"",top:""}).removeClass(o.fixed).removeClass(o.top).addClass(o.bound).addClass(o.bottom),f.onBottom.call(h),f.onUnstick.call(h)},setInitialPosition:function(){d.debug("Returning to initial position"),d.unfix(),d.unbind()},fixTop:function(){d.debug("Fixing element to top of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.bottom).addClass(o.fixed).addClass(o.top),f.onStick.call(h)},fixBottom:function(){d.debug("Sticking element to bottom of page"),f.setSize&&d.set.size(),d.set.minimumSize(),d.set.offset(),c.css({left:d.cache.element.left,bottom:"",marginBottom:""}).removeClass(o.bound).removeClass(o.top).addClass(o.fixed).addClass(o.bottom),f.onStick.call(h)},unbind:function(){d.is.bound()&&(d.debug("Removing container bound position on element"),d.remove.offset(),c.removeClass(o.bound).removeClass(o.top).removeClass(o.bottom))},unfix:function(){d.is.fixed()&&(d.debug("Removing fixed position on element"),d.remove.minimumSize(),d.remove.offset(),c.removeClass(o.fixed).removeClass(o.top).removeClass(o.bottom),f.onUnstick.call(h))},reset:function(){d.debug("Resetting elements position"),d.unbind(),d.unfix(),d.resetCSS(),d.remove.offset(),d.remove.lastScroll()},resetCSS:function(){c.css({width:"",height:""}),t.css({height:""})},setting:function(e,t){if(S.isPlainObject(e))S.extend(!0,f,e);else{if(t===E)return f[e];f[e]=t}},internal:function(e,t){if(S.isPlainObject(e))S.extend(!0,d,e);else{if(t===E)return d[e];d[e]=t}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n;f.performance&&(n=(t=(new Date).getTime())-(x||t),x=t,C.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,0)},display:function(){var e=f.name+":",n=0;x=!1,clearTimeout(d.performance.timer),S.each(C,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",y&&(e+=" '"+y+"'"),(console.group!==E||console.table!==E)&&0<C.length&&(console.groupCollapsed(e),console.table?console.table(C):S.each(C,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),C=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||T,t=h||t,"string"==typeof i&&r!==E&&(i=i.split(/[\. ]/),o=i.length-1,S.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(S.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==E)return a=r[n],!1;if(!S.isPlainObject(r[t])||e==o)return r[t]!==E&&(a=r[t]),!1;r=r[t]}})),S.isFunction(a)?n=a.apply(t,e):a!==E&&(n=a),Array.isArray(b)?b.push(n):b!==E?b=[b,n]:n!==E&&(b=n),a}},k?(g===E&&d.initialize(),d.invoke(w)):(g!==E&&g.invoke("destroy"),d.initialize())}),b!==E?b:this},S.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:D,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(F,R,O,M){"use strict";F.isWindow=F.isWindow||function(e){return null!=e&&e===e.window},F.isFunction=F.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},R=void 0!==R&&R.Math==Math?R:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),F.fn.tab=function(c){var u,d=F.isFunction(this)?F(R):F(this),f=d.selector||"",m=(new Date).getTime(),g=[],D=c,A="string"==typeof D,E=[].slice.call(arguments,1),P=!1;return d.each(function(){var p,a,h,v,b,y,x=F.isPlainObject(c)?F.extend(!0,{},F.fn.tab.settings,c):F.extend({},F.fn.tab.settings),C=x.className,w=x.metadata,t=x.selector,k=x.error,n=x.regExp,e="."+x.namespace,i="module-"+x.namespace,T=F(this),o={},S=!0,r=0,s=this,l=T.data(i);b={initialize:function(){b.debug("Initializing tab menu item",T),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",x.context,a),x.auto&&b.set.auto(),b.bind.events(),x.history&&!P&&(b.initializeHistory(),P=!0),l===M&&null==b.determine.activeTab()&&(b.debug("No active tab detected, setting first tab active",b.get.initialPath()),b.changeTab(b.get.initialPath())),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),l=b,T.data(i,b)},destroy:function(){b.debug("Destroying tabs",T),T.removeData(i).off(e)},bind:{events:function(){F.isWindow(s)||(b.debug("Attaching tab activation events to element",T),T.on("click"+e,b.event.click))}},determineTabs:function(){var e;"parent"===x.context?(0<T.closest(t.ui).length?(e=T.closest(t.ui),b.verbose("Using closest UI element as parent",e)):e=T,p=e.parent(),b.verbose("Determined parent element for creating context",p)):x.context?(p=F(x.context),b.verbose("Using selector for tab context",x.context,p)):p=F("body"),x.childrenOnly?(a=p.children(t.tabs),b.debug("Searching tab context children for tabs",p,a)):(a=p.find(t.tabs),b.debug("Searching tab context for tabs",p,a))},fix:{callbacks:function(){F.isPlainObject(c)&&(c.onTabLoad||c.onTabInit)&&(c.onTabLoad&&(c.onLoad=c.onTabLoad,delete c.onTabLoad,b.error(k.legacyLoad,c.onLoad)),c.onTabInit&&(c.onFirstLoad=c.onTabInit,delete c.onTabInit,b.error(k.legacyInit,c.onFirstLoad)),x=F.extend(!0,{},F.fn.tab.settings,c))}},initializeHistory:function(){if(b.debug("Initializing page state"),F.address===M)return b.error(k.state),!1;if("state"==x.historyType){if(b.debug("Using HTML5 to manage state"),!1===x.path)return b.error(k.path),!1;F.address.history(!0).state(x.path)}F.address.bind("change",b.event.history.change)},event:{click:function(e){var t=F(this).data(w.tab);t!==M?(x.history?(b.verbose("Updating page state",e),F.address.value(t)):(b.verbose("Changing tab",e),b.changeTab(t)),e.preventDefault()):b.debug("No tab specified")},history:{change:function(e){var t=e.pathNames.join("/")||b.get.initialPath(),n=x.templates.determineTitle(t)||!1;b.performance.display(),b.debug("History change event",t,e),y=e,t!==M&&b.changeTab(t),n&&F.address.title(n)}}},refresh:function(){h&&(b.debug("Refreshing tab",h),b.changeTab(h))},cache:{read:function(e){return e!==M&&o[e]},add:function(e,t){e=e||h,b.debug("Adding cached content for",e),o[e]=t},remove:function(e){e=e||h,b.debug("Removing cached content for",e),delete o[e]}},escape:{string:function(e){return(e=String(e)).replace(n.escape,"\\$&")}},set:{auto:function(){var e="string"==typeof x.path?x.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",e),F.isPlainObject(x.apiSettings)?x.apiSettings.url=e:x.apiSettings={url:e}},loading:function(e){var t=b.get.tabElement(e);t.hasClass(C.loading)||(b.verbose("Setting loading state for",t),t.addClass(C.loading).siblings(a).removeClass(C.active+" "+C.loading),0<t.length&&x.onRequest.call(t[0],e))},state:function(e){F.address.value(e)}},changeTab:function(d){var f=R.history&&R.history.pushState&&x.ignoreFirstLoad&&S,m=x.auto||F.isPlainObject(x.apiSettings),g=m&&!f?b.utilities.pathToArray(d):b.get.defaultPathArray(d);d=b.utilities.arrayToPath(g),F.each(g,function(e,t){var n,i,o,a,r=g.slice(0,e+1),s=b.utilities.arrayToPath(r),l=b.is.tab(s),c=e+1==g.length,u=b.get.tabElement(s);if(b.verbose("Looking for tab",t),l){if(b.verbose("Tab was found",t),h=s,v=b.utilities.filterArray(g,r),c?a=!0:(i=g.slice(0,e+2),o=b.utilities.arrayToPath(i),(a=!b.is.tab(o))&&b.verbose("Tab parameters found",i)),a&&m)return f?(b.debug("Ignoring remote content on first tab load",s),S=!1,b.cache.add(d,u.html()),b.activate.all(s),x.onFirstLoad.call(u[0],s,v,y),x.onLoad.call(u[0],s,v,y)):(b.activate.navigation(s),b.fetch.content(s,d)),!1;b.debug("Opened local tab",s),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y)}else{if(-1!=d.search("/")||""===d)return b.error(k.missingTab,T,p,s),!1;if(d=b.escape.string(d),s=(n=F("#"+d+', a[name="'+d+'"]')).closest("[data-tab]").data(w.tab),u=b.get.tabElement(s),n&&0<n.length&&s)return b.debug("Anchor link used, opening parent tab",u,n),u.hasClass(C.active)||setTimeout(function(){b.scrollTo(n)},0),b.activate.all(s),b.cache.read(s)||(b.cache.add(s,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(u[0],s,v,y)),x.onLoad.call(u[0],s,v,y),!1}})},scrollTo:function(e){var t=!!(e&&0<e.length)&&e.offset().top;!1!==t&&(b.debug("Forcing scroll to an in-page link in a hidden tab",t,e),F(O).scrollTop(t))},update:{content:function(e,t,n){var i=b.get.tabElement(e),o=i[0];n=n!==M?n:x.evaluateScripts,"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&"string"!=typeof t?i.empty().append(F(t).clone(!0)):n?(b.debug("Updating HTML and evaluating inline scripts",e,t),i.html(t)):(b.debug("Updating HTML",e,t),o.innerHTML=t)}},fetch:{content:function(t,n){var e,i,o=b.get.tabElement(t),a={dataType:"html",encodeParameters:!1,on:"now",cache:x.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==x.cacheType&&b.cache.add(n,e),b.update.content(t,e),t==h?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),x.onFirstLoad.call(o[0],t,v,y),x.onLoad.call(o[0],t,v,y),x.loadOnce?b.cache.add(n,!0):"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&0<o.children().length?setTimeout(function(){var e=o.children().clone(!0);e=e.not("script"),b.cache.add(n,e)},0):b.cache.add(n,o.html())},urlData:{tab:n}},r=o.api("get request")||!1,s=r&&"pending"===r.state();n=n||t,i=b.cache.read(n),x.cache&&i?(b.activate.tab(t),b.debug("Adding cached content",n),x.loadOnce||("once"==x.evaluateScripts?b.update.content(t,i,!1):b.update.content(t,i)),x.onLoad.call(o[0],t,v,y)):s?(b.set.loading(t),b.debug("Content is already loading",n)):F.api!==M?(e=F.extend(!0,{},x.apiSettings,a),b.debug("Retrieving remote content",n,e),b.set.loading(t),o.api(e)):b.error(k.api)}},activate:{all:function(e){b.activate.tab(e),b.activate.navigation(e)},tab:function(e){var t=b.get.tabElement(e),n="siblings"==x.deactivate?t.siblings(a):a.not(t),i=t.hasClass(C.active);b.verbose("Showing tab content for",t),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading),0<t.length&&x.onVisible.call(t[0],e))},navigation:function(e){var t=b.get.navElement(e),n="siblings"==x.deactivate?t.siblings(d):d.not(t),i=t.hasClass(C.active);b.verbose("Activating tab navigation for",t,e),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading))}},deactivate:{all:function(){b.deactivate.navigation(),b.deactivate.tabs()},navigation:function(){d.removeClass(C.active)},tabs:function(){a.removeClass(C.active+" "+C.loading)}},is:{tab:function(e){return e!==M&&0<b.get.tabElement(e).length}},get:{initialPath:function(){return d.eq(0).data(w.tab)||a.eq(0).data(w.tab)},path:function(){return F.address.value()},defaultPathArray:function(e){return b.utilities.pathToArray(b.get.defaultPath(e))},defaultPath:function(e){var t=d.filter("[data-"+w.tab+'^="'+b.escape.string(e)+'/"]').eq(0).data(w.tab)||!1;if(t){if(b.debug("Found default tab",t),r<x.maxDepth)return r++,b.get.defaultPath(t);b.error(k.recursion)}else b.debug("No default tabs found for",e,a);return r=0,e},navElement:function(e){return e=e||h,d.filter("[data-"+w.tab+'="'+b.escape.string(e)+'"]')},tabElement:function(e){var t,n,i,o;return e=e||h,i=b.utilities.pathToArray(e),o=b.utilities.last(i),t=a.filter("[data-"+w.tab+'="'+b.escape.string(e)+'"]'),n=a.filter("[data-"+w.tab+'="'+b.escape.string(o)+'"]'),0<t.length?t:n},tab:function(){return h}},determine:{activeTab:function(){var i=null;return a.each(function(e,t){if(F(t).hasClass(C.active)){var n=F(this).data(w.tab);d.filter("[data-"+w.tab+'="'+b.escape.string(n)+'"]').hasClass(C.active)&&(i=n)}}),i}},utilities:{filterArray:function(e,t){return F.grep(e,function(e){return-1==F.inArray(e,t)})},last:function(e){return!!Array.isArray(e)&&e[e.length-1]},pathToArray:function(e){return e===M&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(e){return!!Array.isArray(e)&&e.join("/")}},setting:function(e,t){if(b.debug("Changing setting",e,t),F.isPlainObject(e))F.extend(!0,x,e);else{if(t===M)return x[e];F.isPlainObject(x[e])?F.extend(!0,x[e],t):x[e]=t}},internal:function(e,t){if(F.isPlainObject(e))F.extend(!0,b,e);else{if(t===M)return b[e];b[e]=t}},debug:function(){!x.silent&&x.debug&&(x.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,x.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),b.verbose.apply(console,arguments)))},error:function(){x.silent||(b.error=Function.prototype.bind.call(console.error,console,x.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n;x.performance&&(n=(t=(new Date).getTime())-(m||t),m=t,g.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:s,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var e=x.name+":",n=0;m=!1,clearTimeout(b.performance.timer),F.each(g,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",f&&(e+=" '"+f+"'"),(console.group!==M||console.table!==M)&&0<g.length&&(console.groupCollapsed(e),console.table?console.table(g):F.each(g,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),g=[]}},invoke:function(i,e,t){var o,a,n,r=l;return e=e||E,t=s||t,"string"==typeof i&&r!==M&&(i=i.split(/[\. ]/),o=i.length-1,F.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(F.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==M)return a=r[n],!1;if(!F.isPlainObject(r[t])||e==o)return r[t]!==M?a=r[t]:b.error(k.method,i),!1;r=r[t]}})),F.isFunction(a)?n=a.apply(t,e):a!==M&&(n=a),Array.isArray(u)?u.push(n):u!==M?u=[u,n]:n!==M&&(u=n),a}},A?(l===M&&b.initialize(),b.invoke(D)):(l!==M&&l.invoke("destroy"),b.initialize())}),u!==M?u:this},F.tab=function(){F(R).tab.apply(this,arguments)},F.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,loadOnce:!1,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s:=@]/g},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(P,e,F){"use strict";P.isFunction=P.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),P.fn.toast=function(C){var w,e=P(this),k=e.selector||"",T=(new Date).getTime(),S=[],D=C,A="string"==typeof D,E=[].slice.call(arguments,1);return e.each(function(){var i,o,a,r,s,l,c,u,d=P.isPlainObject(C)?P.extend(!0,{},P.fn.toast.settings,C):P.extend({},P.fn.toast.settings),f=d.className,e=d.selector,m=d.error,t=d.namespace,g=d.fields,n="."+t,p=t+"-module",h=P(this),v=d.context?P(d.context):P("body"),b=h.hasClass("toast")||h.hasClass("message")||h.hasClass("card"),y=this,x=b?h.data(p):F;u={initialize:function(){u.verbose("Initializing element"),u.has.container()||u.create.container(),(b||""!==d.message||""!==d.title||""!==u.get.iconClass()||d.showImage||u.has.configActions())&&("string"==typeof d.showProgress&&-1!==[f.top,f.bottom].indexOf(d.showProgress)||(d.showProgress=!1),u.create.toast(),d.closeOnClick&&(d.closeIcon||0<P(o).find(e.input).length||u.has.configActions())&&(d.closeOnClick=!1),d.closeOnClick||i.addClass(f.unclickable),u.bind.events()),u.instantiate(),i&&u.show()},instantiate:function(){u.verbose("Storing instance of toast"),x=u,h.data(p,x)},destroy:function(){i&&(u.debug("Removing toast",i),u.unbind.events(),i.remove(),l=o=i=F,d.onRemove.call(i,y),c=s=r=F),h.removeData(p)},show:function(e){e=e||function(){},u.debug("Showing toast"),!1!==d.onShow.call(i,y)?u.animate.show(e):u.debug("onShow callback returned false, cancelling toast animation")},close:function(e){e=e||function(){},u.remove.visible(),u.unbind.events(),u.animate.close(e)},create:{container:function(){u.verbose("Creating container"),v.append(P("<div/>",{class:d.position+" "+f.container}))},toast:function(){if(i=P("<div/>",{class:f.box}),b)o=d.cloneModule?h.clone().removeAttr("id"):h,c=o.find("> i"+u.helpers.toClass(f.close)),d.closeIcon=0<c.length;else{u.verbose("Creating toast"),o=P("<div/>");var e=P("<div/>",{class:f.content}),t=u.get.iconClass();""!==t&&o.append(P("<i/>",{class:t+" "+f.icon})),d.showImage&&o.append(P("<img>",{class:f.image+" "+d.classImage,src:d.showImage})),""!==d.title&&e.append(P("<div/>",{class:f.title,text:d.title})),e.append(P("<div/>",{html:u.helpers.escape(d.message,d.preserveHTML)})),o.addClass(d.class+" "+f.toast).append(e),o.css("opacity",d.opacity),d.closeIcon&&((c=P("<i/>",{class:f.close+" "+("string"==typeof d.closeIcon?d.closeIcon:"")})).hasClass(f.left)?o.prepend(c):o.append(c))}if(o.hasClass(f.compact)&&(d.compact=!0),o.hasClass("card")&&(d.compact=!1),a=o.find(".actions"),u.has.configActions()&&(0===a.length&&(a=P("<div/>",{class:f.actions+" "+(d.classActions||"")}).appendTo(o)),o.hasClass("card")&&!a.hasClass(f.attached)&&(a.addClass(f.extraContent),a.hasClass(f.vertical)&&(a.removeClass(f.vertical),u.error(m.verticalCard))),d.actions.forEach(function(e){var t=e[g.icon]?'<i class="'+u.helpers.deQuote(e[g.icon])+' icon"></i>':"",n=u.helpers.escape(e[g.text]||"",d.preserveHTML),i=u.helpers.deQuote(e[g.class]||""),o=e[g.click]&&P.isFunction(e[g.click])?e[g.click]:function(){};a.append(P("<button/>",{html:t+n,class:f.button+" "+i,click:function(){!1!==o.call(y,h)&&u.close()}}))})),a&&a.hasClass(f.vertical)&&o.addClass(f.vertical),0<a.length&&!a.hasClass(f.attached)&&(!a||a.hasClass(f.basic)&&!a.hasClass(f.left)||o.addClass(f.actions)),"auto"===d.displayTime&&(d.displayTime=Math.max(d.minDisplayTime,o.text().split(" ").length/d.wordsPerMinute*6e4)),i.append(o),0<a.length&&a.hasClass(f.attached)&&(a.addClass(f.buttons),a.detach(),o.addClass(f.attached),a.hasClass(f.vertical)?(o.wrap(P("<div/>",{class:f.vertical+" "+f.attached+" "+(d.compact?f.compact:"")})),a.hasClass(f.left)?o.addClass(f.left).parent().addClass(f.left).prepend(a):o.parent().append(a)):a.hasClass(f.top)?(i.prepend(a),o.addClass(f.bottom)):(i.append(a),o.addClass(f.top))),h!==o&&(y=(h=o)[0]),0<d.displayTime){var n=f.progressing+" "+(d.pauseOnHover?f.pausable:"");d.showProgress&&(r=P("<div/>",{class:f.progress+" "+(d.classProgress||d.class),"data-percent":""}),d.classProgress||(o.hasClass("toast")&&!o.hasClass(f.inverted)?r.addClass(f.inverted):r.removeClass(f.inverted)),s=P("<div/>",{class:"bar "+(d.progressUp?"up ":"down ")+n}),r.addClass(d.showProgress).append(s),r.hasClass(f.top)?i.prepend(r):i.append(r),s.css("animation-duration",d.displayTime/1e3+"s")),(l=P("<span/>",{class:"wait "+n})).css("animation-duration",d.displayTime/1e3+"s"),l.appendTo(o)}d.compact&&(i.addClass(f.compact),o.addClass(f.compact),r&&r.addClass(f.compact)),d.newestOnTop?i.prependTo(u.get.container()):i.appendTo(u.get.container())}},bind:{events:function(){u.debug("Binding events to toast"),(d.closeOnClick||d.closeIcon)&&(d.closeIcon?c:o).on("click"+n,u.event.click),l&&l.on("animationend"+n,u.close),i.on("click"+n,e.approve,u.event.approve).on("click"+n,e.deny,u.event.deny)}},unbind:{events:function(){u.debug("Unbinding events to toast"),(d.closeOnClick||d.closeIcon)&&(d.closeIcon?c:o).off("click"+n),l&&l.off("animationend"+n),i.off("click"+n)}},animate:{show:function(e){e=P.isFunction(e)?e:function(){},d.transition&&u.can.useElement("transition")&&h.transition("is supported")&&(u.set.visible(),i.transition({animation:d.transition.showMethod+" in",queue:!1,debug:d.debug,verbose:d.verbose,duration:d.transition.showDuration,onComplete:function(){e.call(i,y),d.onVisible.call(i,y)}}))},close:function(e){e=P.isFunction(e)?e:function(){},u.debug("Closing toast"),!1!==d.onHide.call(i,y)?d.transition&&P.fn.transition!==F&&h.transition("is supported")?i.transition({animation:d.transition.hideMethod+" out",queue:!1,duration:d.transition.hideDuration,debug:d.debug,verbose:d.verbose,interval:50,onBeforeHide:function(e){e=P.isFunction(e)?e:function(){},""!==d.transition.closeEasing?(i.css("opacity",0),i.wrap("<div/>").parent().slideUp(500,d.transition.closeEasing,function(){i&&(i.parent().remove(),e.call(i))})):e.call(i)},onComplete:function(){e.call(i,y),d.onHidden.call(i,y),u.destroy()}}):u.error(m.noTransition):u.debug("onHide callback returned false, cancelling toast animation")},pause:function(){l.css("animationPlayState","paused"),s&&s.css("animationPlayState","paused")},continue:function(){l.css("animationPlayState","running"),s&&s.css("animationPlayState","running")}},has:{container:function(){return u.verbose("Determining if there is already a container"),0<v.find(u.helpers.toClass(d.position)+e.container).length},toast:function(){return!!u.get.toast()},toasts:function(){return 0<u.get.toasts().length},configActions:function(){return Array.isArray(d.actions)&&0<d.actions.length}},get:{container:function(){return v.find(u.helpers.toClass(d.position)+e.container)[0]},toastBox:function(){return i||null},toast:function(){return o||null},toasts:function(){return P(u.get.container()).find(e.box)},iconClass:function(){return"string"==typeof d.showIcon?d.showIcon:d.showIcon&&d.icons[d.class]?d.icons[d.class]:""},remainingTime:function(){return l?l.css("opacity")*d.displayTime:0}},set:{visible:function(){o.addClass(f.visible)}},remove:{visible:function(){o.removeClass(f.visible)}},event:{click:function(e){0===P(e.target).closest("a").length&&(d.onClick.call(i,y),u.close())},approve:function(){!1!==d.onApprove.call(y,h)?u.close():u.verbose("Approve callback returned false cancelling close")},deny:function(){!1!==d.onDeny.call(y,h)?u.close():u.verbose("Deny callback returned false cancelling close")}},helpers:{toClass:function(e){var t=e.split(" "),n="";return t.forEach(function(e){n+="."+e}),n},deQuote:function(e){return String(e).replace(/"/g,"")},escape:function(e,t){if(t)return e;var n={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return/[&<>"'`]/.test(e)?(e=e.replace(/&(?![a-z0-9#]{1,6};)/,"&amp;")).replace(/[<>"'`]/g,function(e){return n[e]}):e}},can:{useElement:function(e){return P.fn[e]!==F||(u.error(m.noElement.replace("{element}",e)),!1)}},setting:function(e,t){if(u.debug("Changing setting",e,t),P.isPlainObject(e))P.extend(!0,d,e);else{if(t===F)return d[e];P.isPlainObject(d[e])?P.extend(!0,d[e],t):d[e]=t}},internal:function(e,t){if(P.isPlainObject(e))P.extend(!0,u,e);else{if(t===F)return u[e];u[e]=t}},debug:function(){!d.silent&&d.debug&&(d.performance?u.performance.log(arguments):(u.debug=Function.prototype.bind.call(console.info,console,d.name+":"),u.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?u.performance.log(arguments):(u.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),u.verbose.apply(console,arguments)))},error:function(){d.silent||(u.error=Function.prototype.bind.call(console.error,console,d.name+":"),u.error.apply(console,arguments))},performance:{log:function(e){var t,n;d.performance&&(n=(t=(new Date).getTime())-(T||t),T=t,S.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:y,"Execution Time":n})),clearTimeout(u.performance.timer),u.performance.timer=setTimeout(u.performance.display,500)},display:function(){var e=d.name+":",n=0;T=!1,clearTimeout(u.performance.timer),P.each(S,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",k&&(e+=" '"+k+"'"),(console.group!==F||console.table!==F)&&0<S.length&&(console.groupCollapsed(e),console.table?console.table(S):P.each(S,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),S=[]}},invoke:function(i,e,t){var o,a,n,r=x;return e=e||E,t=y||t,"string"==typeof i&&r!==F&&(i=i.split(/[\. ]/),o=i.length-1,P.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(P.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==F)return a=r[n],!1;if(!P.isPlainObject(r[t])||e==o)return r[t]!==F?a=r[t]:u.error(m.method,i),!1;r=r[t]}})),P.isFunction(a)?n=a.apply(t,e):a!==F&&(n=a),Array.isArray(w)?w.push(n):w!==F?w=[w,n]:n!==F&&(w=n),a}},A?(x===F&&u.initialize(),u.invoke(D)):(x!==F&&x.invoke("destroy"),u.initialize(),w=h)}),w!==F?w:this},P.fn.toast.settings={name:"Toast",namespace:"toast",silent:!1,debug:!1,verbose:!1,performance:!0,context:"body",position:"top right",class:"neutral",classProgress:!1,classActions:!1,classImage:"mini",title:"",message:"",displayTime:3e3,minDisplayTime:1e3,wordsPerMinute:120,showIcon:!1,newestOnTop:!1,showProgress:!1,pauseOnHover:!0,progressUp:!1,opacity:1,compact:!0,closeIcon:!1,closeOnClick:!0,cloneModule:!0,actions:!1,preserveHTML:!0,showImage:!1,transition:{showMethod:"scale",showDuration:500,hideMethod:"scale",hideDuration:500,closeEasing:"easeOutCubic"},error:{method:"The method you called is not defined.",noElement:"This module requires ui {element}",verticalCard:"Vertical but not attached actions are not supported for card layout"},className:{container:"ui toast-container",box:"floating toast-box",progress:"ui attached active progress",toast:"ui toast",icon:"centered icon",visible:"visible",content:"content",title:"ui header",actions:"actions",extraContent:"extra content",button:"ui button",buttons:"ui buttons",close:"close icon",image:"ui image",vertical:"vertical",attached:"attached",inverted:"inverted",compact:"compact",pausable:"pausable",progressing:"progressing",top:"top",bottom:"bottom",left:"left",basic:"basic",unclickable:"unclickable"},icons:{info:"info",success:"checkmark",warning:"warning",error:"times"},selector:{container:".ui.toast-container",box:".toast-box",toast:".ui.toast",input:'input:not([type="hidden"]), textarea, select, button, .ui.button, ui.dropdown',approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel"},fields:{class:"class",text:"text",icon:"icon",click:"click"},onShow:function(){},onVisible:function(){},onClick:function(){},onHide:function(){},onHidden:function(){},onRemove:function(){},onApprove:function(){},onDeny:function(){}},P.extend(P.easing,{easeOutBounce:function(e,t,n,i,o){return(t/=o)<1/2.75?i*(7.5625*t*t)+n:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeOutCubic:function(e){return--e*e*e+1}})}(jQuery,window,void document),function(C,e,w,k){"use strict";C.isFunction=C.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),C.fn.transition=function(){var c,r=C(this),g=r.selector||"",p=(new Date).getTime(),h=[],v=arguments,b=v[0],y=[].slice.call(arguments,1),x="string"==typeof b;return r.each(function(i){var u,s,t,d,n,o,e,a,f,m=C(this),l=this;(f={initialize:function(){u=f.get.settings.apply(l,v),d=u.className,t=u.error,n=u.metadata,a="."+u.namespace,e="module-"+u.namespace,s=m.data(e)||f,o=f.get.animationEndEvent(),!1===(x=x&&f.invoke(b))&&(f.verbose("Converted arguments into settings object",u),u.interval?f.delay(u.animate):f.animate(),f.instantiate())},instantiate:function(){f.verbose("Storing instance of module",f),s=f,m.data(e,s)},destroy:function(){f.verbose("Destroying previous module for",l),m.removeData(e)},refresh:function(){f.verbose("Refreshing display type on next animation"),delete f.displayType},forceRepaint:function(){f.verbose("Forcing element repaint");var e=m.parent(),t=m.next();0===t.length?m.detach().appendTo(e):m.detach().insertBefore(t)},repaint:function(){f.verbose("Repainting element");l.offsetWidth},delay:function(e){var t,n=f.get.animationDirection();n=n||(f.can.transition()?f.get.direction():"static"),e=e!==k?e:u.interval,t="auto"==u.reverse&&n==d.outward||1==u.reverse?(r.length-i)*u.interval:i*u.interval,f.debug("Delaying animation by",t),setTimeout(f.animate,t)},animate:function(e){if(u=e||u,!f.is.supported())return f.error(t.support),!1;if(f.debug("Preparing animation",u.animation),f.is.animating()){if(u.queue)return!u.allowRepeats&&f.has.direction()&&f.is.occurring()&&!0!==f.queuing?f.debug("Animation is currently occurring, preventing queueing same animation",u.animation):f.queue(u.animation),!1;if(!u.allowRepeats&&f.is.occurring())return f.debug("Animation is already occurring, will not execute repeated animation",u.animation),!1;f.debug("New animation started, completing previous early",u.animation),s.complete()}f.can.animate()?f.set.animating(u.animation):f.error(t.noAnimation,u.animation,l)},reset:function(){f.debug("Resetting animation to beginning conditions"),f.remove.animationCallbacks(),f.restore.conditions(),f.remove.animating()},queue:function(e){f.debug("Queueing animation of",e),f.queuing=!0,m.one(o+".queue"+a,function(){f.queuing=!1,f.repaint(),f.animate.apply(this,u)})},complete:function(e){e&&e.target===l&&e.stopPropagation(),f.debug("Animation complete",u.animation),f.remove.completeCallback(),f.remove.failSafe(),f.is.looping()||(f.is.outward()?(f.verbose("Animation is outward, hiding element"),f.restore.conditions(),f.hide()):f.is.inward()?(f.verbose("Animation is outward, showing element"),f.restore.conditions(),f.show()):(f.verbose("Static animation completed"),f.restore.conditions(),u.onComplete.call(l)))},force:{visible:function(){var e=m.attr("style"),t=f.get.userStyle(e),n=f.get.displayType(),i=t+"display: "+n+" !important;",o=m[0].style.display;return!n||"none"===o&&u.skipInlineHidden||m[0].tagName.match(/(script|link|style)/i)?(f.remove.transition(),!1):(f.verbose("Overriding default display to show element",n),m.attr("style",i),!0)},hidden:function(){var e=m.attr("style"),t=m.css("display"),n=e===k||""===e;"none"===t||f.is.hidden()?n&&m.removeAttr("style"):(f.verbose("Overriding default display to hide element"),m.css("display","none"))}},has:{direction:function(e){var n=!1;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t!==d.inward&&t!==d.outward||(n=!0)})),n},inlineDisplay:function(){var e=m.attr("style")||"";return Array.isArray(e.match(/display.*?;/,""))}},set:{animating:function(e){f.remove.completeCallback(),e=e||u.animation;var t=f.get.animationClass(e);f.save.animation(t),f.force.visible()&&(f.remove.hidden(),f.remove.direction(),f.start.animation(t))},duration:function(e,t){!(t="number"==typeof(t=t||u.duration)?t+"ms":t)&&0!==t||(f.verbose("Setting animation duration",t),m.css({"animation-duration":t}))},direction:function(e){(e=e||f.get.direction())==d.inward?f.set.inward():f.set.outward()},looping:function(){f.debug("Transition set to loop"),m.addClass(d.looping)},hidden:function(){m.addClass(d.transition).addClass(d.hidden)},inward:function(){f.debug("Setting direction to inward"),m.removeClass(d.outward).addClass(d.inward)},outward:function(){f.debug("Setting direction to outward"),m.removeClass(d.inward).addClass(d.outward)},visible:function(){m.addClass(d.transition).addClass(d.visible)}},start:{animation:function(e){e=e||f.get.animationClass(),f.debug("Starting tween",e),m.addClass(e).one(o+".complete"+a,f.complete),u.useFailSafe&&f.add.failSafe(),f.set.duration(u.duration),u.onStart.call(l)}},save:{animation:function(e){f.cache||(f.cache={}),f.cache.animation=e},displayType:function(e){"none"!==e&&m.data(n.displayType,e)},transitionExists:function(e,t){C.fn.transition.exists[e]=t,f.verbose("Saving existence of transition",e,t)}},restore:{conditions:function(){var e=f.get.currentAnimation();e&&(m.removeClass(e),f.verbose("Removing animation class",f.cache)),f.remove.duration()}},add:{failSafe:function(){var e=f.get.duration();f.timer=setTimeout(function(){m.triggerHandler(o)},e+u.failSafeDelay),f.verbose("Adding fail safe timer",f.timer)}},remove:{animating:function(){m.removeClass(d.animating)},animationCallbacks:function(){f.remove.queueCallback(),f.remove.completeCallback()},queueCallback:function(){m.off(".queue"+a)},completeCallback:function(){m.off(".complete"+a)},display:function(){m.css("display","")},direction:function(){m.removeClass(d.inward).removeClass(d.outward)},duration:function(){m.css("animation-duration","")},failSafe:function(){f.verbose("Removing fail safe timer",f.timer),f.timer&&clearTimeout(f.timer)},hidden:function(){m.removeClass(d.hidden)},visible:function(){m.removeClass(d.visible)},looping:function(){f.debug("Transitions are no longer looping"),f.is.looping()&&(f.reset(),m.removeClass(d.looping))},transition:function(){m.removeClass(d.transition).removeClass(d.visible).removeClass(d.hidden)}},get:{settings:function(e,t,n){return"object"==typeof e?C.extend(!0,{},C.fn.transition.settings,e):"function"==typeof n?C.extend({},C.fn.transition.settings,{animation:e,onComplete:n,duration:t}):"string"==typeof t||"number"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,duration:t}):"object"==typeof t?C.extend({},C.fn.transition.settings,t,{animation:e}):"function"==typeof t?C.extend({},C.fn.transition.settings,{animation:e,onComplete:t}):C.extend({},C.fn.transition.settings,{animation:e})},animationClass:function(e){var t=e||u.animation,n=f.can.transition()&&!f.has.direction()?f.get.direction()+" ":"";return d.animating+" "+d.transition+" "+n+t},currentAnimation:function(){return!(!f.cache||f.cache.animation===k)&&f.cache.animation},currentDirection:function(){return f.is.inward()?d.inward:d.outward},direction:function(){return f.is.hidden()||!f.is.visible()?d.inward:d.outward},animationDirection:function(e){var n;return"string"==typeof(e=e||u.animation)&&(e=e.split(" "),C.each(e,function(e,t){t===d.inward?n=d.inward:t===d.outward&&(n=d.outward)})),n||!1},duration:function(e){return!1===(e=e||u.duration)&&(e=m.css("animation-duration")||0),"string"==typeof e?-1<e.indexOf("ms")?parseFloat(e):1e3*parseFloat(e):e},displayType:function(e){if(e=e===k||e,u.displayType)return u.displayType;if(e&&m.data(n.displayType)===k){var t=m.css("display");""===t||"none"===t?f.can.transition(!0):f.save.displayType(t)}return m.data(n.displayType)},userStyle:function(e){return(e=e||m.attr("style")||"").replace(/display.*?;/,"")},transitionExists:function(e){return C.fn.transition.exists[e]},animationStartEvent:function(){var e,t=w.createElement("div"),n={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in n)if(t.style[e]!==k)return n[e];return!1},animationEndEvent:function(){var e,t=w.createElement("div"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(t.style[e]!==k)return n[e];return!1}},can:{transition:function(e){var t,n,i,o,a,r,s=u.animation,l=f.get.transitionExists(s),c=f.get.displayType(!1);if(l===k||e){if(f.verbose("Determining whether animation exists"),t=m.attr("class"),n=m.prop("tagName"),o=(i=C("<"+n+" />").addClass(t).insertAfter(m)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"),a=i.addClass(d.inward).css("animationName"),c||(c=i.attr("class",t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"),f.verbose("Determining final display state",c),f.save.displayType(c)),i.remove(),o!=a)f.debug("Direction exists for animation",s),r=!0;else{if("none"==o||!o)return void f.debug("No animation defined in css",s);f.debug("Static animation found",s,c),r=!1}f.save.transitionExists(s,r)}return l!==k?l:r},animate:function(){return f.can.transition()!==k}},is:{animating:function(){return m.hasClass(d.animating)},inward:function(){return m.hasClass(d.inward)},outward:function(){return m.hasClass(d.outward)},looping:function(){return m.hasClass(d.looping)},occurring:function(e){return e="."+(e=e||u.animation).replace(" ","."),0<m.filter(e).length},visible:function(){return m.is(":visible")},hidden:function(){return"hidden"===m.css("visibility")},supported:function(){return!1!==o}},hide:function(){f.verbose("Hiding element"),f.is.animating()&&f.reset(),l.blur(),f.remove.display(),f.remove.visible(),C.isFunction(u.onBeforeHide)?u.onBeforeHide.call(l,function(){f.hideNow()}):f.hideNow()},hideNow:function(){f.set.hidden(),f.force.hidden(),u.onHide.call(l),u.onComplete.call(l)},show:function(e){f.verbose("Showing element",e),f.force.visible()&&(f.remove.hidden(),f.set.visible(),u.onShow.call(l),u.onComplete.call(l))},toggle:function(){f.is.visible()?f.hide():f.show()},stop:function(){f.debug("Stopping current animation"),m.triggerHandler(o)},stopAll:function(){f.debug("Stopping all animation"),f.remove.queueCallback(),m.triggerHandler(o)},clear:{queue:function(){f.debug("Clearing animation queue"),f.remove.queueCallback()}},enable:function(){f.verbose("Starting animation"),m.removeClass(d.disabled)},disable:function(){f.debug("Stopping animation"),m.addClass(d.disabled)},setting:function(e,t){if(f.debug("Changing setting",e,t),C.isPlainObject(e))C.extend(!0,u,e);else{if(t===k)return u[e];C.isPlainObject(u[e])?C.extend(!0,u[e],t):u[e]=t}},internal:function(e,t){if(C.isPlainObject(e))C.extend(!0,f,e);else{if(t===k)return f[e];f[e]=t}},debug:function(){!u.silent&&u.debug&&(u.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,u.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),f.verbose.apply(console,arguments)))},error:function(){u.silent||(f.error=Function.prototype.bind.call(console.error,console,u.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n;u.performance&&(n=(t=(new Date).getTime())-(p||t),p=t,h.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:l,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var e=u.name+":",n=0;p=!1,clearTimeout(f.performance.timer),C.each(h,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",g&&(e+=" '"+g+"'"),1<r.length&&(e+=" ("+r.length+")"),(console.group!==k||console.table!==k)&&0<h.length&&(console.groupCollapsed(e),console.table?console.table(h):C.each(h,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),h=[]}},invoke:function(i,e,t){var o,a,n,r=s;return e=e||y,t=l||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,C.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(C.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!C.isPlainObject(r[t])||e==o)return r[t]!==k&&(a=r[t]),!1;r=r[t]}})),C.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(c)?c.push(n):c!==k?c=[c,n]:n!==k&&(c=n),a!==k&&a}}).initialize()}),c!==k?c:this},C.fn.transition.exists={},C.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,skipInlineHidden:!1,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(E,P,F){"use strict";E.isWindow=E.isWindow||function(e){return null!=e&&e===e.window},P=void 0!==P&&P.Math==Math?P:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.api=E.fn.api=function(x){var C,e=E.isFunction(this)?E(P):E(this),w=e.selector||"",k=(new Date).getTime(),T=[],S=x,D="string"==typeof S,A=[].slice.call(arguments,1);return e.each(function(){var a,r,n,e,s,l,c=E.isPlainObject(x)?E.extend(!0,{},E.fn.api.settings,x):E.extend({},E.fn.api.settings),t=c.namespace,i=c.metadata,o=c.selector,u=c.error,d=c.className,f="."+t,m="module-"+t,g=E(this),p=g.closest(o.form),h=c.stateContext?E(c.stateContext):g,v=this,b=h[0],y=g.data(m);l={initialize:function(){D||l.bind.events(),l.instantiate()},instantiate:function(){l.verbose("Storing instance of module",l),y=l,g.data(m,y)},destroy:function(){l.verbose("Destroying previous module for",v),g.removeData(m).off(f)},bind:{events:function(){var e=l.get.event();e?(l.verbose("Attaching API events to element",e),g.on(e+f,l.event.trigger)):"now"==c.on&&(l.debug("Querying API endpoint immediately"),l.query())}},decode:{json:function(e){if(e!==F&&"string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}},read:{cachedResponse:function(e){var t;if(P.Storage!==F)return t=sessionStorage.getItem(e),l.debug("Using cached response",e,t),t=l.decode.json(t);l.error(u.noStorage)}},write:{cachedResponse:function(e,t){t&&""===t?l.debug("Response empty, not caching",t):P.Storage!==F?(E.isPlainObject(t)&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t),l.verbose("Storing cached response for url",e,t)):l.error(u.noStorage)}},query:function(){if(l.is.disabled())l.debug("Element is disabled API request aborted");else{if(l.is.loading()){if(!c.interruptRequests)return void l.debug("Cancelling request, previous request is still pending");l.debug("Interrupting previous request"),l.abort()}if(c.defaultData&&E.extend(!0,c.urlData,l.get.defaultData()),c.serializeForm&&(c.data=l.add.formData(c.data)),!1===(r=l.get.settings()))return l.cancelled=!0,void l.error(u.beforeSend);if(l.cancelled=!1,(n=l.get.templatedURL())||l.is.mocked()){if((n=l.add.urlData(n))||l.is.mocked()){if(r.url=c.base+n,a=E.extend(!0,{},c,{type:c.method||c.type,data:e,url:c.base+n,beforeSend:c.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),l.debug("Querying URL",a.url),l.verbose("Using AJAX settings",a),"local"===c.cache&&l.read.cachedResponse(n))return l.debug("Response returned from local cache"),l.request=l.create.request(),void l.request.resolveWith(b,[l.read.cachedResponse(n)]);c.throttle?c.throttleFirstRequest||l.timer?(l.debug("Throttling request",c.throttle),clearTimeout(l.timer),l.timer=setTimeout(function(){l.timer&&delete l.timer,l.debug("Sending throttled request",e,a.method),l.send.request()},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request(),l.timer=setTimeout(function(){},c.throttle)):(l.debug("Sending request",e,a.method),l.send.request())}}else l.error(u.missingURL)}},should:{removeError:function(){return!0===c.hideError||"auto"===c.hideError&&!l.is.form()}},is:{disabled:function(){return 0<g.filter(o.disabled).length},expectingJSON:function(){return"json"===c.dataType||"jsonp"===c.dataType},form:function(){return g.is("form")||h.is("form")},mocked:function(){return c.mockResponse||c.mockResponseAsync||c.response||c.responseAsync},input:function(){return g.is("input")},loading:function(){return!!l.request&&"pending"==l.request.state()},abortedRequest:function(e){return e&&e.readyState!==F&&0===e.readyState?(l.verbose("XHR request determined to be aborted"),!0):(l.verbose("XHR request was not aborted"),!1)},validResponse:function(e){return l.is.expectingJSON()&&E.isFunction(c.successTest)?(l.debug("Checking JSON returned success",c.successTest,e),c.successTest(e)?(l.debug("Response passed success test",e),!0):(l.debug("Response failed success test",e),!1)):(l.verbose("Response is not JSON, skipping validation",c.successTest,e),!0)}},was:{cancelled:function(){return l.cancelled||!1},succesful:function(){return l.verbose('This behavior will be deleted due to typo. Use "was successful" instead.'),l.was.successful()},successful:function(){return l.request&&"resolved"==l.request.state()},failure:function(){return l.request&&"rejected"==l.request.state()},complete:function(){return l.request&&("resolved"==l.request.state()||"rejected"==l.request.state())}},add:{urlData:function(o,a){var e,t;return o&&(e=o.match(c.regExp.required),t=o.match(c.regExp.optional),a=a||c.urlData,e&&(l.debug("Looking for required URL variables",e),E.each(e,function(e,t){var n=-1!==t.indexOf("$")?t.substr(2,t.length-3):t.substr(1,t.length-2),i=E.isPlainObject(a)&&a[n]!==F?a[n]:g.data(n)!==F?g.data(n):h.data(n)!==F?h.data(n):a[n];if(i===F)return l.error(u.requiredParameter,n,o),o=!1;l.verbose("Found required variable",n,i),i=c.encodeParameters?l.get.urlEncodedValue(i):i,o=o.replace(t,i)})),t&&(l.debug("Looking for optional URL variables",e),E.each(t,function(e,t){var n=-1!==t.indexOf("$")?t.substr(3,t.length-4):t.substr(2,t.length-3),i=E.isPlainObject(a)&&a[n]!==F?a[n]:g.data(n)!==F?g.data(n):h.data(n)!==F?h.data(n):a[n];o=i!==F?(l.verbose("Optional variable Found",n,i),o.replace(t,i)):(l.verbose("Optional variable not found",n),-1!==o.indexOf("/"+t)?o.replace("/"+t,""):o.replace(t,""))}))),o},formData:function(e){var t=E.fn.serializeObject!==F,n=t?p.serializeObject():p.serialize();return e=e||c.data,e=E.isPlainObject(e)?t?(l.debug("Extending existing data with form data",e,n),E.extend(!0,{},e,n)):(l.error(u.missingSerialize),l.debug("Cant extend data. Replacing data with form data",e,n),n):(l.debug("Adding form data",n),n)}},send:{request:function(){l.set.loading(),l.request=l.create.request(),l.is.mocked()?l.mockedXHR=l.create.mockedXHR():l.xhr=l.create.xhr(),c.onRequest.call(b,l.request,l.xhr)}},event:{trigger:function(e){l.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o,r=!!E.isFunction(c.onResponse)&&(l.is.expectingJSON()&&!c.rawResponse?c.onResponse.call(i,E.extend(!0,{},e)):c.onResponse.call(i,e));a=0<a?a:0,r&&(l.debug("Modified API response in onResponse callback",c.onResponse,r,e),e=r),0<a&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.validResponse(e)?l.request.resolveWith(i,[e,n]):l.request.rejectWith(i,[n,"invalid"])},a)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-s,a=c.loadingDuration-o;0<(a=0<a?a:0)&&l.debug("Response completed early delaying state change by",a),setTimeout(function(){l.is.abortedRequest(e)?l.request.rejectWith(i,[e,"aborted",n]):l.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){l.debug("Successful API Response",e),"local"===c.cache&&n&&(l.write.cachedResponse(n,e),l.debug("Saving server response locally",l.cache)),c.onSuccess.call(b,e,g,t)},complete:function(e,t){var n,i;l.was.successful()?(i=e,n=t):(n=e,i=l.get.responseFromXHR(n)),l.remove.loading(),c.onComplete.call(b,i,g,n)},fail:function(e,t,n){var i=l.get.responseFromXHR(e),o=l.get.errorFromRequest(i,t,n);if("aborted"==t)return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),c.onAbort.call(b,t,g,e),!0;"invalid"==t?l.debug("JSON did not pass success test. A server-side error has most likely occurred",i):"error"==t&&e!==F&&(l.debug("XHR produced a server error",t,n),(e.status<200||300<=e.status)&&n!==F&&""!==n&&l.error(u.statusMessage+n,a.url),c.onError.call(b,o,g,e)),c.errorDuration&&"aborted"!==t&&(l.debug("Adding error state"),l.set.error(),l.should.removeError()&&setTimeout(l.remove.error,c.errorDuration)),l.debug("API Request failed",o,e),c.onFailure.call(b,i,g,e)}}},create:{request:function(){return E.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail)},mockedXHR:function(){var e,t,n,i=c.mockResponse||c.response,o=c.mockResponseAsync||c.responseAsync;return n=E.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail),i?(t=E.isFunction(i)?(l.debug("Using specified synchronous callback",i),i.call(b,r)):(l.debug("Using settings specified response",i),i),n.resolveWith(b,[t,!1,{responseText:t}])):E.isFunction(o)&&(e=function(e){l.debug("Async callback returned response",e),e?n.resolveWith(b,[e,!1,{responseText:e}]):n.rejectWith(b,[{responseText:e},!1,!1])},l.debug("Using specified async response callback",o),o.call(b,r,e)),n},xhr:function(){var e;return e=E.ajax(a).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail),l.verbose("Created server request",e,a),e}},set:{error:function(){l.verbose("Adding error state to element",h),h.addClass(d.error)},loading:function(){l.verbose("Adding loading state to element",h),h.addClass(d.loading),s=(new Date).getTime()}},remove:{error:function(){l.verbose("Removing error state from element",h),h.removeClass(d.error)},loading:function(){l.verbose("Removing loading state from element",h),h.removeClass(d.loading)}},get:{responseFromXHR:function(e){return!!E.isPlainObject(e)&&(l.is.expectingJSON()?l.decode.json(e.responseText):e.responseText)},errorFromRequest:function(e,t,n){return E.isPlainObject(e)&&e.error!==F?e.error:c.error[t]!==F?c.error[t]:n},request:function(){return l.request||!1},xhr:function(){return l.xhr||!1},settings:function(){var e;return(e=c.beforeSend.call(g,c))&&(e.success!==F&&(l.debug("Legacy success callback detected",e),l.error(u.legacyParameters,e.success),e.onSuccess=e.success),e.failure!==F&&(l.debug("Legacy failure callback detected",e),l.error(u.legacyParameters,e.failure),e.onFailure=e.failure),e.complete!==F&&(l.debug("Legacy complete callback detected",e),l.error(u.legacyParameters,e.complete),e.onComplete=e.complete)),e===F&&l.error(u.noReturnedValue),!1===e?e:e!==F?E.extend(!0,{},e):E.extend(!0,{},c)},urlEncodedValue:function(e){var t=P.decodeURIComponent(e),n=P.encodeURIComponent(e);return t!==e?(l.debug("URL value is already encoded, avoiding double encoding",e),e):(l.verbose("Encoding value using encodeURIComponent",e,n),n)},defaultData:function(){var e={};return E.isWindow(v)||(l.is.input()?e.value=g.val():l.is.form()||(e.text=g.text())),e},event:function(){return E.isWindow(v)||"now"==c.on?(l.debug("API called without element, no events attached"),!1):"auto"==c.on?g.is("input")?v.oninput!==F?"input":v.onpropertychange!==F?"propertychange":"keyup":g.is("form")?"submit":"click":c.on},templatedURL:function(e){if(e=e||g.data(i.action)||c.action||!1,n=g.data(i.url)||c.url||!1)return l.debug("Using specified url",n),n;if(e){if(l.debug("Looking up url for action",e,c.api),c.api[e]===F&&!l.is.mocked())return void l.error(u.missingAction,c.action,c.api);n=c.api[e]}else l.is.form()&&(n=g.attr("action")||h.attr("action")||!1,l.debug("No url or action specified, defaulting to form action",n));return n}},abort:function(){var e=l.get.xhr();e&&"resolved"!==e.state()&&(l.debug("Cancelling API request"),e.abort())},reset:function(){l.remove.error(),l.remove.loading()},setting:function(e,t){if(l.debug("Changing setting",e,t),E.isPlainObject(e))E.extend(!0,c,e);else{if(t===F)return c[e];E.isPlainObject(c[e])?E.extend(!0,c[e],t):c[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,l,e);else{if(t===F)return l[e];l[e]=t}},debug:function(){!c.silent&&c.debug&&(c.performance?l.performance.log(arguments):(l.debug=Function.prototype.bind.call(console.info,console,c.name+":"),l.debug.apply(console,arguments)))},verbose:function(){!c.silent&&c.verbose&&c.debug&&(c.performance?l.performance.log(arguments):(l.verbose=Function.prototype.bind.call(console.info,console,c.name+":"),l.verbose.apply(console,arguments)))},error:function(){c.silent||(l.error=Function.prototype.bind.call(console.error,console,c.name+":"),l.error.apply(console,arguments))},performance:{log:function(e){var t,n;c.performance&&(n=(t=(new Date).getTime())-(k||t),k=t,T.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(l.performance.timer),l.performance.timer=setTimeout(l.performance.display,500)},display:function(){var e=c.name+":",n=0;k=!1,clearTimeout(l.performance.timer),E.each(T,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",w&&(e+=" '"+w+"'"),(console.group!==F||console.table!==F)&&0<T.length&&(console.groupCollapsed(e),console.table?console.table(T):E.each(T,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),T=[]}},invoke:function(i,e,t){var o,a,n,r=y;return e=e||A,t=v||t,"string"==typeof i&&r!==F&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==F)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==F?a=r[t]:l.error(u.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==F&&(n=a),Array.isArray(C)?C.push(n):C!==F?C=[C,n]:n!==F&&(C=n),a}},D?(y===F&&l.initialize(),l.invoke(S)):(y!==F&&y.invoke("destroy"),l.initialize())}),C!==F?C:this},E.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,rawResponse:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,void document),function(w,e,k){"use strict";w.isFunction=w.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},e=void 0!==e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),w.fn.state=function(m){var g,p=w(this),h=p.selector||"",v=(new Date).getTime(),b=[],y=m,x="string"==typeof y,C=[].slice.call(arguments,1);return p.each(function(){var s,o=w.isPlainObject(m)?w.extend(!0,{},w.fn.state.settings,m):w.extend({},w.fn.state.settings),l=o.error,n=o.metadata,t=o.className,e=o.namespace,i=o.states,a=o.text,r="."+e,c=e+"-module",u=w(this),d=this,f=u.data(c);s={initialize:function(){s.verbose("Initializing module"),o.automatic&&s.add.defaults(),o.context&&""!==h?w(o.context).on(h,"mouseenter"+r,s.change.text).on(h,"mouseleave"+r,s.reset.text).on(h,"click"+r,s.toggle.state):u.on("mouseenter"+r,s.change.text).on("mouseleave"+r,s.reset.text).on("click"+r,s.toggle.state),s.instantiate()},instantiate:function(){s.verbose("Storing instance of module",s),f=s,u.data(c,s)},destroy:function(){s.verbose("Destroying previous module",f),u.off(r).removeData(c)},refresh:function(){s.verbose("Refreshing selector cache"),u=w(d)},add:{defaults:function(){var n=m&&w.isPlainObject(m.states)?m.states:{};w.each(o.defaults,function(e,t){s.is[e]!==k&&s.is[e]()&&(s.verbose("Adding default states",e,d),w.extend(o.states,t,n))})}},is:{active:function(){return u.hasClass(t.active)},loading:function(){return u.hasClass(t.loading)},inactive:function(){return!u.hasClass(t.active)},state:function(e){return t[e]!==k&&u.hasClass(t[e])},enabled:function(){return!u.is(o.filter.active)},disabled:function(){return u.is(o.filter.active)},textEnabled:function(){return!u.is(o.filter.text)},button:function(){return u.is(".button:not(a, .submit)")},input:function(){return u.is("input")},progress:function(){return u.is(".ui.progress")}},allow:function(e){s.debug("Now allowing state",e),i[e]=!0},disallow:function(e){s.debug("No longer allowing",e),i[e]=!1},allows:function(e){return i[e]||!1},enable:function(){u.removeClass(t.disabled)},disable:function(){u.addClass(t.disabled)},setState:function(e){s.allows(e)&&u.addClass(t[e])},removeState:function(e){s.allows(e)&&u.removeClass(t[e])},toggle:{state:function(){var e;if(s.allows("active")&&s.is.enabled()){if(s.refresh(),w.fn.api!==k)if(e=u.api("get request"),u.api("was cancelled"))s.debug("API Request cancelled by beforesend"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1};else if(e)return void s.listenTo(e);s.change.state()}}},listenTo:function(e){s.debug("API request detected, waiting for state signal",e),e&&(a.loading&&s.update.text(a.loading),w.when(e).then(function(){"resolved"==e.state()?(s.debug("API request succeeded"),o.activateTest=function(){return!0},o.deactivateTest=function(){return!0}):(s.debug("API request failed"),o.activateTest=function(){return!1},o.deactivateTest=function(){return!1}),s.change.state()}))},change:{state:function(){s.debug("Determining state change direction"),s.is.inactive()?s.activate():s.deactivate(),o.sync&&s.sync(),o.onChange.call(d)},text:function(){s.is.textEnabled()&&(s.is.disabled()?(s.verbose("Changing text to disabled text",a.hover),s.update.text(a.disabled)):s.is.active()?a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.deactivate&&(s.verbose("Changing text to deactivating text",a.deactivate),s.update.text(a.deactivate)):a.hover?(s.verbose("Changing text to hover text",a.hover),s.update.text(a.hover)):a.activate&&(s.verbose("Changing text to activating text",a.activate),s.update.text(a.activate)))}},activate:function(){o.activateTest.call(d)&&(s.debug("Setting state to active"),u.addClass(t.active),s.update.text(a.active),o.onActivate.call(d))},deactivate:function(){o.deactivateTest.call(d)&&(s.debug("Setting state to inactive"),u.removeClass(t.active),s.update.text(a.inactive),o.onDeactivate.call(d))},sync:function(){s.verbose("Syncing other buttons to current state"),s.is.active()?p.not(u).state("activate"):p.not(u).state("deactivate")},get:{text:function(){return o.selector.text?u.find(o.selector.text).text():u.html()},textFor:function(e){return a[e]||!1}},flash:{text:function(e,t,n){var i=s.get.text();s.debug("Flashing text message",e,t),e=e||o.text.flash,t=t||o.flashDuration,n=n||function(){},s.update.text(e),setTimeout(function(){s.update.text(i),n.call(d)},t)}},reset:{text:function(){var e=a.active||u.data(n.storedText),t=a.inactive||u.data(n.storedText);s.is.textEnabled()&&(s.is.active()&&e?(s.verbose("Resetting active text",e),s.update.text(e)):t&&(s.verbose("Resetting inactive text",e),s.update.text(t)))}},update:{text:function(e){var t=s.get.text();e&&e!==t?(s.debug("Updating text",e),o.selector.text?u.data(n.storedText,e).find(o.selector.text).text(e):u.data(n.storedText,e).html(e)):s.debug("Text is already set, ignoring update",e)}},setting:function(e,t){if(s.debug("Changing setting",e,t),w.isPlainObject(e))w.extend(!0,o,e);else{if(t===k)return o[e];w.isPlainObject(o[e])?w.extend(!0,o[e],t):o[e]=t}},internal:function(e,t){if(w.isPlainObject(e))w.extend(!0,s,e);else{if(t===k)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(v||t),v=t,b.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:d,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;v=!1,clearTimeout(s.performance.timer),w.each(b,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",h&&(e+=" '"+h+"'"),(console.group!==k||console.table!==k)&&0<b.length&&(console.groupCollapsed(e),console.table?console.table(b):w.each(b,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),b=[]}},invoke:function(i,e,t){var o,a,n,r=f;return e=e||C,t=d||t,"string"==typeof i&&r!==k&&(i=i.split(/[\. ]/),o=i.length-1,w.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(w.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==k)return a=r[n],!1;if(!w.isPlainObject(r[t])||e==o)return r[t]!==k?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),w.isFunction(a)?n=a.apply(t,e):a!==k&&(n=a),Array.isArray(g)?g.push(n):g!==k?g=[g,n]:n!==k&&(g=n),a}},x?(f===k&&s.initialize(),s.invoke(y)):(f!==k&&f.invoke("destroy"),s.initialize())}),g!==k?g:this},w.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function(){},onDeactivate:function(){},onChange:function(){},activateTest:function(){return!0},deactivateTest:function(){return!0},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}}}(jQuery,window,void document),function(E,P,F,R){"use strict";E.isFunction=E.isFunction||function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},P=void 0!==P&&P.Math==Math?P:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),E.fn.visibility=function(b){var y,e=E(this),x=e.selector||"",C=(new Date).getTime(),w=[],k=b,T="string"==typeof k,S=[].slice.call(arguments,1),D=e.length,A=0;return e.each(function(){var e,t,n,s,o=E.isPlainObject(b)?E.extend(!0,{},E.fn.visibility.settings,b):E.extend({},E.fn.visibility.settings),i=o.className,a=o.namespace,l=o.error,r=o.metadata,c="."+a,u="module-"+a,d=E(P),f=E(this),m=E(o.context),g=f.data(u),p=P.requestAnimationFrame||P.mozRequestAnimationFrame||P.webkitRequestAnimationFrame||P.msRequestAnimationFrame||function(e){setTimeout(e,0)},h=this,v=!1;s={initialize:function(){s.debug("Initializing",o),s.setup.cache(),s.should.trackChanges()&&("image"==o.type&&s.setup.image(),"fixed"==o.type&&s.setup.fixed(),o.observeChanges&&s.observeChanges(),s.bind.events()),s.save.position(),s.is.visible()||s.error(l.visible,f),o.initialCheck&&s.checkVisibility(),s.instantiate()},instantiate:function(){s.debug("Storing instance",s),f.data(u,s),g=s},destroy:function(){s.verbose("Destroying previous module"),n&&n.disconnect(),t&&t.disconnect(),d.off("load"+c,s.event.load).off("resize"+c,s.event.resize),m.off("scroll"+c,s.event.scroll).off("scrollchange"+c,s.event.scrollchange),"fixed"==o.type&&(s.resetFixed(),s.remove.placeholder()),f.off(c).removeData(u)},observeChanges:function(){"MutationObserver"in P&&(t=new MutationObserver(s.event.contextChanged),n=new MutationObserver(s.event.changed),t.observe(F,{childList:!0,subtree:!0}),n.observe(h,{childList:!0,subtree:!0}),s.debug("Setting up mutation observer",n))},bind:{events:function(){s.verbose("Binding visibility events to scroll and resize"),o.refreshOnLoad&&d.on("load"+c,s.event.load),d.on("resize"+c,s.event.resize),m.off("scroll"+c).on("scroll"+c,s.event.scroll).on("scrollchange"+c,s.event.scrollchange)}},event:{changed:function(e){s.verbose("DOM tree modified, updating visibility calculations"),s.timer=setTimeout(function(){s.verbose("DOM tree modified, updating sticky menu"),s.refresh()},100)},contextChanged:function(e){[].forEach.call(e,function(e){e.removedNodes&&[].forEach.call(e.removedNodes,function(e){(e==h||0<E(e).find(h).length)&&(s.debug("Element removed from DOM, tearing down events"),s.destroy())})})},resize:function(){s.debug("Window resized"),o.refreshOnResize&&p(s.refresh)},load:function(){s.debug("Page finished loading"),p(s.refresh)},scroll:function(){o.throttle?(clearTimeout(s.timer),s.timer=setTimeout(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])},o.throttle)):p(function(){m.triggerHandler("scrollchange"+c,[m.scrollTop()])})},scrollchange:function(e,t){s.checkVisibility(t)}},precache:function(e,t){e instanceof Array||(e=[e]);for(var n=e.length,i=0,o=[],a=F.createElement("img"),r=function(){++i>=e.length&&E.isFunction(t)&&t()};n--;)(a=F.createElement("img")).onload=r,a.onerror=r,a.src=e[n],o.push(a)},enableCallbacks:function(){s.debug("Allowing callbacks to occur"),v=!1},disableCallbacks:function(){s.debug("Disabling all callbacks temporarily"),v=!0},should:{trackChanges:function(){return T?(s.debug("One time query, no need to bind events"),!1):(s.debug("Callbacks being attached"),!0)}},setup:{cache:function(){s.cache={occurred:{},screen:{},element:{}}},image:function(){var e=f.data(r.src);e&&(s.verbose("Lazy loading image",e),o.once=!0,o.observeChanges=!1,o.onOnScreen=function(){s.debug("Image on screen",h),s.precache(e,function(){s.set.image(e,function(){++A==D&&o.onAllLoaded.call(this),o.onLoad.call(this)})})})},fixed:function(){s.debug("Setting up fixed"),o.once=!1,o.observeChanges=!1,o.initialCheck=!0,o.refreshOnLoad=!0,b.transition||(o.transition=!1),s.create.placeholder(),s.debug("Added placeholder",e),o.onTopPassed=function(){s.debug("Element passed, adding fixed position",f),s.show.placeholder(),s.set.fixed(),o.transition&&E.fn.transition!==R&&f.transition(o.transition,o.duration)},o.onTopPassedReverse=function(){s.debug("Element returned to position, removing fixed",f),s.hide.placeholder(),s.remove.fixed()}}},create:{placeholder:function(){s.verbose("Creating fixed position placeholder"),e=f.clone(!1).css("display","none").addClass(i.placeholder).insertAfter(f)}},show:{placeholder:function(){s.verbose("Showing placeholder"),e.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){s.verbose("Hiding placeholder"),e.css("display","none").css("visibility","")}},set:{fixed:function(){s.verbose("Setting element to fixed position"),f.addClass(i.fixed).css({position:"fixed",top:o.offset+"px",left:"auto",zIndex:o.zIndex}),o.onFixed.call(h)},image:function(e,t){if(f.attr("src",e),o.transition)if(E.fn.transition!==R){if(f.hasClass(i.visible))return void s.debug("Transition already occurred on this image, skipping animation");f.transition(o.transition,o.duration,t)}else f.fadeIn(o.duration,t);else f.show()}},is:{onScreen:function(){return s.get.elementCalculations().onScreen},offScreen:function(){return s.get.elementCalculations().offScreen},visible:function(){return!(!s.cache||!s.cache.element)&&!(0===s.cache.element.width&&0===s.cache.element.offset.top)},verticallyScrollableContext:function(){var e=m.get(0)!==P&&m.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=m.get(0)!==P&&m.css("overflow-x");return"auto"==e||"scroll"==e}},refresh:function(){s.debug("Refreshing constants (width/height)"),"fixed"==o.type&&s.resetFixed(),s.reset(),s.save.position(),o.checkOnRefresh&&s.checkVisibility(),o.onRefresh.call(h)},resetFixed:function(){s.remove.fixed(),s.remove.occurred()},reset:function(){s.verbose("Resetting all cached values"),E.isPlainObject(s.cache)&&(s.cache.screen={},s.cache.element={})},checkVisibility:function(e){s.verbose("Checking visibility of element",s.cache.element),!v&&s.is.visible()&&(s.save.scroll(e),s.save.calculations(),s.passed(),s.passingReverse(),s.topVisibleReverse(),s.bottomVisibleReverse(),s.topPassedReverse(),s.bottomPassedReverse(),s.onScreen(),s.offScreen(),s.passing(),s.topVisible(),s.bottomVisible(),s.topPassed(),s.bottomPassed(),o.onUpdate&&o.onUpdate.call(h,s.get.elementCalculations()))},passed:function(e,t){var n=s.get.elementCalculations();if(e&&t)o.onPassed[e]=t;else{if(e!==R)return s.get.pixelsPassed(e)>n.pixelsPassed;n.passing&&E.each(o.onPassed,function(e,t){n.bottomVisible||n.pixelsPassed>s.get.pixelsPassed(e)?s.execute(t,e):o.once||s.remove.occurred(t)})}},onScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOnScreen;if(e&&(s.debug("Adding callback for onScreen",e),o.onOnScreen=e),t.onScreen?s.execute(n,"onScreen"):o.once||s.remove.occurred("onScreen"),e!==R)return t.onOnScreen},offScreen:function(e){var t=s.get.elementCalculations(),n=e||o.onOffScreen;if(e&&(s.debug("Adding callback for offScreen",e),o.onOffScreen=e),t.offScreen?s.execute(n,"offScreen"):o.once||s.remove.occurred("offScreen"),e!==R)return t.onOffScreen},passing:function(e){var t=s.get.elementCalculations(),n=e||o.onPassing;if(e&&(s.debug("Adding callback for passing",e),o.onPassing=e),t.passing?s.execute(n,"passing"):o.once||s.remove.occurred("passing"),e!==R)return t.passing},topVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisible,i="topVisible";if(e&&(s.debug("Adding callback for top visible",e),o.onTopVisible=e),t.topVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===R)return t.topVisible},bottomVisible:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisible,i="bottomVisible";if(e&&(s.debug("Adding callback for bottom visible",e),o.onBottomVisible=e),t.bottomVisible?s.execute(n,i):o.once||s.remove.occurred(i),e===R)return t.bottomVisible},topPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassed;if(e&&(s.debug("Adding callback for top passed",e),o.onTopPassed=e),t.topPassed?s.execute(n,"topPassed"):o.once||s.remove.occurred("topPassed"),e===R)return t.topPassed},bottomPassed:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassed,i="bottomPassed";if(e&&(s.debug("Adding callback for bottom passed",e),o.onBottomPassed=e),t.bottomPassed?s.execute(n,i):o.once||s.remove.occurred(i),e===R)return t.bottomPassed},passingReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onPassingReverse,i="passingReverse";if(e&&(s.debug("Adding callback for passing reverse",e),o.onPassingReverse=e),t.passing?o.once||s.remove.occurred(i):s.get.occurred("passing")&&s.execute(n,i),e!==R)return!t.passing},topVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopVisibleReverse,i="topVisibleReverse";if(e&&(s.debug("Adding callback for top visible reverse",e),o.onTopVisibleReverse=e),t.topVisible?o.once||s.remove.occurred(i):s.get.occurred("topVisible")&&s.execute(n,i),e===R)return!t.topVisible},bottomVisibleReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomVisibleReverse,i="bottomVisibleReverse";if(e&&(s.debug("Adding callback for bottom visible reverse",e),o.onBottomVisibleReverse=e),t.bottomVisible?o.once||s.remove.occurred(i):s.get.occurred("bottomVisible")&&s.execute(n,i),e===R)return!t.bottomVisible},topPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onTopPassedReverse,i="topPassedReverse";if(e&&(s.debug("Adding callback for top passed reverse",e),o.onTopPassedReverse=e),t.topPassed?o.once||s.remove.occurred(i):s.get.occurred("topPassed")&&s.execute(n,i),e===R)return!t.onTopPassed},bottomPassedReverse:function(e){var t=s.get.elementCalculations(),n=e||o.onBottomPassedReverse,i="bottomPassedReverse";if(e&&(s.debug("Adding callback for bottom passed reverse",e),o.onBottomPassedReverse=e),t.bottomPassed?o.once||s.remove.occurred(i):s.get.occurred("bottomPassed")&&s.execute(n,i),e===R)return!t.bottomPassed},execute:function(e,t){var n=s.get.elementCalculations(),i=s.get.screenCalculations();(e=e||!1)&&(o.continuous?(s.debug("Callback being called continuously",t,n),e.call(h,n,i)):s.get.occurred(t)||(s.debug("Conditions met",t,n),e.call(h,n,i))),s.save.occurred(t)},remove:{fixed:function(){s.debug("Removing fixed position"),f.removeClass(i.fixed).css({position:"",top:"",left:"",zIndex:""}),o.onUnfixed.call(h)},placeholder:function(){s.debug("Removing placeholder content"),e&&e.remove()},occurred:function(e){if(e){var t=s.cache.occurred;t[e]!==R&&!0===t[e]&&(s.debug("Callback can now be called again",e),s.cache.occurred[e]=!1)}else s.cache.occurred={}}},save:{calculations:function(){s.verbose("Saving all calculations necessary to determine positioning"),s.save.direction(),s.save.screenCalculations(),s.save.elementCalculations()},occurred:function(e){e&&(s.cache.occurred[e]!==R&&!0===s.cache.occurred[e]||(s.verbose("Saving callback occurred",e),s.cache.occurred[e]=!0))},scroll:function(e){e=e+o.offset||m.scrollTop()+o.offset,s.cache.scroll=e},direction:function(){var e,t=s.get.scroll(),n=s.get.lastScroll();return e=n<t&&n?"down":t<n&&n?"up":"static",s.cache.direction=e,s.cache.direction},elementPosition:function(){var e=s.cache.element,t=s.get.screenSize();return s.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=f.offset(),e.width=f.outerWidth(),e.height=f.outerHeight(),s.is.verticallyScrollableContext()&&(e.offset.top+=m.scrollTop()-m.offset().top),s.is.horizontallyScrollableContext()&&(e.offset.left+=m.scrollLeft-m.offset().left),s.cache.element=e},elementCalculations:function(){var e=s.get.screenCalculations(),t=s.get.elementPosition();return o.includeMargin?(t.margin={},t.margin.top=parseInt(f.css("margin-top"),10),t.margin.bottom=parseInt(f.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topPassed=e.top>=t.top,t.bottomPassed=e.top>=t.bottom,t.topVisible=e.bottom>=t.top&&!t.topPassed,t.bottomVisible=e.bottom>=t.bottom&&!t.bottomPassed,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=(t.topVisible||t.passing)&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),s.cache.element=t,s.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=s.get.scroll();return s.save.direction(),s.cache.screen.top=e,s.cache.screen.bottom=e+s.cache.screen.height,s.cache.screen},screenSize:function(){s.verbose("Saving window position"),s.cache.screen={height:m.height()}},position:function(){s.save.screenSize(),s.save.elementPosition()}},get:{pixelsPassed:function(e){var t=s.get.elementCalculations();return-1<e.search("%")?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return s.cache.occurred!==R&&s.cache.occurred[e]||!1},direction:function(){return s.cache.direction===R&&s.save.direction(),s.cache.direction},elementPosition:function(){return s.cache.element===R&&s.save.elementPosition(),s.cache.element},elementCalculations:function(){return s.cache.element===R&&s.save.elementCalculations(),s.cache.element},screenCalculations:function(){return s.cache.screen===R&&s.save.screenCalculations(),s.cache.screen},screenSize:function(){return s.cache.screen===R&&s.save.screenSize(),s.cache.screen},scroll:function(){return s.cache.scroll===R&&s.save.scroll(),s.cache.scroll},lastScroll:function(){return s.cache.screen===R?(s.debug("First scroll event, no last scroll could be found"),!1):s.cache.screen.top}},setting:function(e,t){if(E.isPlainObject(e))E.extend(!0,o,e);else{if(t===R)return o[e];o[e]=t}},internal:function(e,t){if(E.isPlainObject(e))E.extend(!0,s,e);else{if(t===R)return s[e];s[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?s.performance.log(arguments):(s.debug=Function.prototype.bind.call(console.info,console,o.name+":"),s.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?s.performance.log(arguments):(s.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),s.verbose.apply(console,arguments)))},error:function(){o.silent||(s.error=Function.prototype.bind.call(console.error,console,o.name+":"),s.error.apply(console,arguments))},performance:{log:function(e){var t,n;o.performance&&(n=(t=(new Date).getTime())-(C||t),C=t,w.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":n})),clearTimeout(s.performance.timer),s.performance.timer=setTimeout(s.performance.display,500)},display:function(){var e=o.name+":",n=0;C=!1,clearTimeout(s.performance.timer),E.each(w,function(e,t){n+=t["Execution Time"]}),e+=" "+n+"ms",x&&(e+=" '"+x+"'"),(console.group!==R||console.table!==R)&&0<w.length&&(console.groupCollapsed(e),console.table?console.table(w):E.each(w,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),w=[]}},invoke:function(i,e,t){var o,a,n,r=g;return e=e||S,t=h||t,"string"==typeof i&&r!==R&&(i=i.split(/[\. ]/),o=i.length-1,E.each(i,function(e,t){var n=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(E.isPlainObject(r[n])&&e!=o)r=r[n];else{if(r[n]!==R)return a=r[n],!1;if(!E.isPlainObject(r[t])||e==o)return r[t]!==R?a=r[t]:s.error(l.method,i),!1;r=r[t]}})),E.isFunction(a)?n=a.apply(t,e):a!==R&&(n=a),Array.isArray(y)?y.push(n):y!==R?y=[y,n]:n!==R&&(y=n),a}},T?(g===R&&s.initialize(),g.save.scroll(),g.save.calculations(),s.invoke(k)):(g!==R&&g.invoke("destroy"),s.initialize())}),y!==R?y:this},E.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:P,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"constraint",visible:"visible"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);
/**
 * SimpleBar.js - v2.6.1
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 * 
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.SimpleBar=e()}(this,function(){"use strict";var t=function(t){return"object"==typeof t?null!==t:"function"==typeof t},e=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e},n=function(t){try{return!!t()}catch(t){return!0}},i=!n(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var s=o(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),c=s.document,a=t(c)&&t(c.createElement),l=function(t){return a?c.createElement(t):{}},u=!i&&!n(function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a}),h=Object.defineProperty,f={f:i?Object.defineProperty:function(n,i,r){if(e(n),i=function(e,n){if(!t(e))return e;var i,r;if(n&&"function"==typeof(i=e.toString)&&!t(r=i.call(e)))return r;if("function"==typeof(i=e.valueOf)&&!t(r=i.call(e)))return r;if(!n&&"function"==typeof(i=e.toString)&&!t(r=i.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(i,!0),e(r),u)try{return h(n,i,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(n[i]=r.value),n}},d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},p=i?function(t,e,n){return f.f(t,e,d(1,n))}:function(t,e,n){return t[e]=n,t},v={}.hasOwnProperty,b=function(t,e){return v.call(t,e)},y=0,m=Math.random(),g=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++y+m).toString(36))},E=o(function(t){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)}),S=(E.version,o(function(t){var e=g("src"),n=Function.toString,i=(""+n).split("toString");E.inspectSource=function(t){return n.call(t)},(t.exports=function(t,n,r,o){var c="function"==typeof r;c&&(b(r,"name")||p(r,"name",n)),t[n]!==r&&(c&&(b(r,e)||p(r,e,t[n]?""+t[n]:i.join(String(n)))),t===s?t[n]=r:o?t[n]?t[n]=r:p(t,n,r):(delete t[n],p(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||n.call(this)})})),_=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},w=o(function(t){var e=s["__core-js_shared__"]||(s["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:E.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),O=o(function(t){var e=w("wks"),n=s.Symbol,i="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=i&&n[t]||(i?n:g)("Symbol."+t))}).store=e}),k=function(t,e,i){var r=O(t),o=i(_,r,""[t]),s=o[0],c=o[1];n(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)})&&(S(String.prototype,t,s),p(RegExp.prototype,r,2==e?function(t,e){return c.call(t,this,e)}:function(t){return c.call(t,this)}))};k("replace",2,function(t,e,n){return[function(i,r){var o=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,o,r):n.call(String(o),i,r)},n]});var x=f.f,L=Function.prototype,M=/^\s*function ([^ (]*)/;"name"in L||i&&x(L,"name",{configurable:!0,get:function(){try{return(""+this).match(M)[1]}catch(t){return""}}}),k("match",1,function(t,e,n){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]});var A=O("unscopables"),T=Array.prototype;void 0==T[A]&&p(T,A,{});var z=function(t){T[A][t]=!0},C=function(t,e){return{value:e,done:!!t}},j={},D={}.toString,Y=function(t){return D.call(t).slice(8,-1)},N=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==Y(t)?t.split(""):Object(t)},X=function(t){return N(_(t))},R=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}},W=function(t,e,n){var i,r,o,c,a=t&W.F,l=t&W.G,u=t&W.S,h=t&W.P,f=t&W.B,d=l?s:u?s[e]||(s[e]={}):(s[e]||{}).prototype,v=l?E:E[e]||(E[e]={}),b=v.prototype||(v.prototype={});for(i in l&&(n=e),n)o=((r=!a&&d&&void 0!==d[i])?d:n)[i],c=f&&r?R(o,s):h&&"function"==typeof o?R(Function.call,o):o,d&&S(d,i,o,t&W.U),v[i]!=o&&p(v,i,c),h&&b[i]!=o&&(b[i]=o)};s.core=E,W.F=1,W.G=2,W.S=4,W.P=8,W.B=16,W.W=32,W.U=64,W.R=128;var P,B=W,V=Math.ceil,F=Math.floor,q=function(t){return isNaN(t=+t)?0:(t>0?F:V)(t)},H=Math.min,G=function(t){return t>0?H(q(t),9007199254740991):0},I=Math.max,U=Math.min,$=w("keys"),J=function(t){return $[t]||($[t]=g(t))},K=(P=!1,function(t,e,n){var i,r=X(t),o=G(r.length),s=function(t,e){return(t=q(t))<0?I(t+e,0):U(t,e)}(n,o);if(P&&e!=e){for(;o>s;)if((i=r[s++])!=i)return!0}else for(;o>s;s++)if((P||s in r)&&r[s]===e)return P||s||0;return!P&&-1}),Q=J("IE_PROTO"),Z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),tt=Object.keys||function(t){return function(t,e){var n,i=X(t),r=0,o=[];for(n in i)n!=Q&&b(i,n)&&o.push(n);for(;e.length>r;)b(i,n=e[r++])&&(~K(o,n)||o.push(n));return o}(t,Z)},et=i?Object.defineProperties:function(t,n){e(t);for(var i,r=tt(n),o=r.length,s=0;o>s;)f.f(t,i=r[s++],n[i]);return t},nt=s.document,it=nt&&nt.documentElement,rt=J("IE_PROTO"),ot=function(){},st=function(){var t,e=l("iframe"),n=Z.length;for(e.style.display="none",it.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),st=t.F;n--;)delete st.prototype[Z[n]];return st()},ct=Object.create||function(t,n){var i;return null!==t?(ot.prototype=e(t),i=new ot,ot.prototype=null,i[rt]=t):i=st(),void 0===n?i:et(i,n)},at=f.f,lt=O("toStringTag"),ut=function(t,e,n){t&&!b(t=n?t:t.prototype,lt)&&at(t,lt,{configurable:!0,value:e})},ht={};p(ht,O("iterator"),function(){return this});var ft=function(t,e,n){t.prototype=ct(ht,{next:d(1,n)}),ut(t,e+" Iterator")},dt=function(t){return Object(_(t))},pt=J("IE_PROTO"),vt=Object.prototype,bt=Object.getPrototypeOf||function(t){return t=dt(t),b(t,pt)?t[pt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?vt:null},yt=O("iterator"),mt=!([].keys&&"next"in[].keys()),gt=function(){return this},Et=function(t,e,n,i,r,o,s){ft(n,e,i);var c,a,l,u=function(t){if(!mt&&t in v)return v[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},h=e+" Iterator",f="values"==r,d=!1,v=t.prototype,b=v[yt]||v["@@iterator"]||r&&v[r],y=b||u(r),m=r?f?u("entries"):y:void 0,g="Array"==e&&v.entries||b;if(g&&(l=bt(g.call(new t)))!==Object.prototype&&l.next&&(ut(l,h,!0),"function"!=typeof l[yt]&&p(l,yt,gt)),f&&b&&"values"!==b.name&&(d=!0,y=function(){return b.call(this)}),(mt||d||!v[yt])&&p(v,yt,y),j[e]=y,j[h]=gt,r)if(c={values:f?y:u("values"),keys:o?y:u("keys"),entries:m},s)for(a in c)a in v||S(v,a,c[a]);else B(B.P+B.F*(mt||d),e,c);return c}(Array,"Array",function(t,e){this._t=X(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,C(1)):C(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");j.Arguments=j.Array,z("keys"),z("values"),z("entries");for(var St=O("iterator"),_t=O("toStringTag"),wt=j.Array,Ot={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},kt=tt(Ot),xt=0;xt<kt.length;xt++){var Lt,Mt=kt[xt],At=Ot[Mt],Tt=s[Mt],zt=Tt&&Tt.prototype;if(zt&&(zt[St]||p(zt,St,wt),zt[_t]||p(zt,_t,Mt),j[Mt]=wt,At))for(Lt in Et)zt[Lt]||S(zt,Lt,Et[Lt],!0)}var Ct=function(t,n,i,r){try{return r?n(e(i)[0],i[1]):n(i)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}},jt=O("iterator"),Dt=Array.prototype,Yt=function(t,e,n){e in t?f.f(t,e,d(0,n)):t[e]=n},Nt=O("toStringTag"),Xt="Arguments"==Y(function(){return arguments}()),Rt=O("iterator"),Wt=E.getIteratorMethod=function(t){if(void 0!=t)return t[Rt]||t["@@iterator"]||j[function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Nt))?n:Xt?Y(e):"Object"==(i=Y(e))&&"function"==typeof e.callee?"Arguments":i}(t)]},Pt=O("iterator"),Bt=!1;try{[7][Pt]().return=function(){Bt=!0}}catch(t){}B(B.S+B.F*!function(t,e){if(!e&&!Bt)return!1;var n=!1;try{var i=[7],r=i[Pt]();r.next=function(){return{done:n=!0}},i[Pt]=function(){return r},t(i)}catch(t){}return n}(function(t){}),"Array",{from:function(t){var e,n,i,r,o,s=dt(t),c="function"==typeof this?this:Array,a=arguments.length,l=a>1?arguments[1]:void 0,u=void 0!==l,h=0,f=Wt(s);if(u&&(l=R(l,a>2?arguments[2]:void 0,2)),void 0!=f&&(c!=Array||(void 0===(o=f)||j.Array!==o&&Dt[jt]!==o)))for(r=f.call(s),n=new c;!(i=r.next()).done;h++)Yt(n,h,u?Ct(r,l,[i.value,h],!0):i.value);else for(n=new c(e=G(s.length));e>h;h++)Yt(n,h,u?l(s[h],h):s[h]);return n.length=h,n}});var Vt={f:Object.getOwnPropertySymbols},Ft={f:{}.propertyIsEnumerable},qt=Object.assign,Ht=!qt||n(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=qt({},t)[n]||Object.keys(qt({},e)).join("")!=i})?function(t,e){for(var n=dt(t),i=arguments.length,r=1,o=Vt.f,s=Ft.f;i>r;)for(var c,a=N(arguments[r++]),l=o?tt(a).concat(o(a)):tt(a),u=l.length,h=0;u>h;)s.call(a,c=l[h++])&&(n[c]=a[c]);return n}:qt;function Gt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}B(B.S+B.F,"Object",{assign:Ht});var It=o(function(t,e){t.exports=function(){if("undefined"==typeof document)return 0;var t,e=document.body,n=document.createElement("div"),i=n.style;return i.position="absolute",i.top=i.left="-9999px",i.width=i.height="100px",i.overflow="scroll",e.appendChild(n),t=n.offsetWidth-n.clientWidth,e.removeChild(n),t}}),Ut="Expected a function",$t=NaN,Jt="[object Symbol]",Kt=/^\s+|\s+$/g,Qt=/^[-+]0x[0-9a-f]+$/i,Zt=/^0b[01]+$/i,te=/^0o[0-7]+$/i,ee=parseInt,ne="object"==typeof r&&r&&r.Object===Object&&r,ie="object"==typeof self&&self&&self.Object===Object&&self,re=ne||ie||Function("return this")(),oe=Object.prototype.toString,se=Math.max,ce=Math.min,ae=function(){return re.Date.now()};function le(t,e,n){var i,r,o,s,c,a,l=0,u=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError(Ut);function d(e){var n=i,o=r;return i=r=void 0,l=e,s=t.apply(o,n)}function p(t){var n=t-a;return void 0===a||n>=e||n<0||h&&t-l>=o}function v(){var t=ae();if(p(t))return b(t);c=setTimeout(v,function(t){var n=e-(t-a);return h?ce(n,o-(t-l)):n}(t))}function b(t){return c=void 0,f&&i?d(t):(i=r=void 0,s)}function y(){var t=ae(),n=p(t);if(i=arguments,r=this,a=t,n){if(void 0===c)return function(t){return l=t,c=setTimeout(v,e),u?d(t):s}(a);if(h)return c=setTimeout(v,e),d(a)}return void 0===c&&(c=setTimeout(v,e)),s}return e=he(e)||0,ue(n)&&(u=!!n.leading,o=(h="maxWait"in n)?se(he(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=a=r=c=void 0},y.flush=function(){return void 0===c?s:b(ae())},y}function ue(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function he(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&oe.call(t)==Jt}(t))return $t;if(ue(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ue(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Kt,"");var n=Zt.test(t);return n||te.test(t)?ee(t.slice(2),n?2:8):Qt.test(t)?$t:+t}var fe=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(Ut);return ue(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),le(t,e,{leading:i,maxWait:e,trailing:r})},de=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,i){return t[0]===e&&(n=i,!0)}),n}return function(){function e(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(e,n){var i=t(this.__entries__,e);~i?this.__entries__[i][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,i=t(n,e);~i&&n.splice(i,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n+=1){var r=i[n];t.call(e,r[1],r[0])}},Object.defineProperties(e.prototype,n),e}()}(),pe="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,ve="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),be="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(ve):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},ye=2,me=["top","right","bottom","left","width","height","size","weight"],ge="undefined"!=typeof MutationObserver,Ee=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,i=!1,r=0;function o(){n&&(n=!1,t()),i&&c()}function s(){be(o)}function c(){var t=Date.now();if(n){if(t-r<ye)return;i=!0}else n=!0,i=!1,setTimeout(s,e);r=t}return c}(this.refresh.bind(this),20)};Ee.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},Ee.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},Ee.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},Ee.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},Ee.prototype.connect_=function(){pe&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ge?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},Ee.prototype.disconnect_=function(){pe&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},Ee.prototype.onTransitionEnd_=function(t){var e=t.propertyName;void 0===e&&(e=""),me.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},Ee.getInstance=function(){return this.instance_||(this.instance_=new Ee),this.instance_},Ee.instance_=null;var Se=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n+=1){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},_e=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||ve},we=Ae(0,0,0,0);function Oe(t){return parseFloat(t)||0}function ke(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return e.reduce(function(e,n){return e+Oe(t["border-"+n+"-width"])},0)}function xe(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return we;var i=_e(t).getComputedStyle(t),r=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n+=1){var r=i[n],o=t["padding-"+r];e[r]=Oe(o)}return e}(i),o=r.left+r.right,s=r.top+r.bottom,c=Oe(i.width),a=Oe(i.height);if("border-box"===i.boxSizing&&(Math.round(c+o)!==e&&(c-=ke(i,"left","right")+o),Math.round(a+s)!==n&&(a-=ke(i,"top","bottom")+s)),!function(t){return t===_e(t).document.documentElement}(t)){var l=Math.round(c+o)-e,u=Math.round(a+s)-n;1!==Math.abs(l)&&(c-=l),1!==Math.abs(u)&&(a-=u)}return Ae(r.left,r.top,c,a)}var Le="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof _e(t).SVGGraphicsElement}:function(t){return t instanceof _e(t).SVGElement&&"function"==typeof t.getBBox};function Me(t){return pe?Le(t)?function(t){var e=t.getBBox();return Ae(0,0,e.width,e.height)}(t):xe(t):we}function Ae(t,e,n,i){return{x:t,y:e,width:n,height:i}}var Te=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ae(0,0,0,0),this.target=t};Te.prototype.isActive=function(){var t=Me(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},Te.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var ze=function(t,e){var n,i,r,o,s,c,a,l=(i=(n=e).x,r=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),Se(a,{x:i,y:r,width:o,height:s,top:r,right:i+o,bottom:s+r,left:i}),a);Se(this,{target:t,contentRect:l})},Ce=function(t,e,n){if(this.activeObservations_=[],this.observations_=new de,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n};Ce.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof _e(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Te(t)),this.controller_.addObserver(this),this.controller_.refresh())}},Ce.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof _e(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},Ce.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},Ce.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},Ce.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new ze(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},Ce.prototype.clearActive=function(){this.activeObservations_.splice(0)},Ce.prototype.hasActive=function(){return this.activeObservations_.length>0};var je="undefined"!=typeof WeakMap?new WeakMap:new de,De=function(t){if(!(this instanceof De))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=Ee.getInstance(),n=new Ce(t,e,this);je.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){De.prototype[t]=function(){return(e=je.get(this))[t].apply(e,arguments);var e}});var Ye=void 0!==ve.ResizeObserver?ve.ResizeObserver:De,Ne=function(){function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onScrollX=function(){i.scrollXTicking||(window.requestAnimationFrame(i.scrollX),i.scrollXTicking=!0)},this.onScrollY=function(){i.scrollYTicking||(window.requestAnimationFrame(i.scrollY),i.scrollYTicking=!0)},this.scrollX=function(){i.showScrollbar("x"),i.positionScrollbar("x"),i.scrollXTicking=!1},this.scrollY=function(){i.showScrollbar("y"),i.positionScrollbar("y"),i.scrollYTicking=!1},this.onMouseEnter=function(){i.showScrollbar("x"),i.showScrollbar("y")},this.onWindowResize=function(){i.hideNativeScrollbar()},this.hideScrollbars=function(){i.scrollbarX.classList.remove("visible"),i.scrollbarY.classList.remove("visible"),i.isVisible.x=!1,i.isVisible.y=!1,window.clearTimeout(i.flashTimeout)},this.onMouseDown=function(t){var e=i.scrollbarY.getBoundingClientRect();t.pageX>=e.x&&t.clientX<=e.x+e.width&&t.clientY>=e.y&&t.clientY<=e.y+e.height&&(t.preventDefault(),i.onDrag(t,"y"))},this.drag=function(t){var e,n,r;t.preventDefault(),"y"===i.currentAxis?(e=t.pageY,n=i.trackY,r=i.scrollContentEl):(e=t.pageX,n=i.trackX,r=i.contentEl);var o=(e-n.getBoundingClientRect()[i.offsetAttr[i.currentAxis]]-i.dragOffset[i.currentAxis])/n[i.sizeAttr[i.currentAxis]]*i.contentEl[i.scrollSizeAttr[i.currentAxis]];r[i.scrollOffsetAttr[i.currentAxis]]=o},this.onEndDrag=function(){document.removeEventListener("mousemove",i.drag),document.removeEventListener("mouseup",i.onEndDrag)},this.el=e,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isEnabled={x:!0,y:!0},this.isVisible={x:!1,y:!1},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.scrollbarWidth,this.options=Object.assign({},t.defaultOptions,n),this.isRtl="rtl"===this.options.direction,this.classNames=this.options.classNames,this.offsetSize=20,this.recalculate=fe(this.recalculate.bind(this),1e3),this.init()}var e,n,i;return e=t,i=[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){Array.from(e.addedNodes).forEach(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),Array.from(e.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements.bind(this)):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(t){return Array.from(t.attributes).reduce(function(t,e){var n=e.name.match(/data-simplebar-(.+)/);if(n){var i=n[1].replace(/\W+(.)/g,function(t,e){return e.toUpperCase()});switch(e.value){case"true":t[i]=!0;break;case"false":t[i]=!1;break;case void 0:t[i]=!0;break;default:t[i]=e.value}}return t},{})}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e){e.SimpleBar||new t(e,t.getElOptions(e))})}},{key:"defaultOptions",get:function(){return{autoHide:!0,forceVisible:!1,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:25,scrollbarMaxSize:0,direction:"ltr",timeout:1e3}}}],(n=[{key:"init",value:function(){this.el.SimpleBar=this,this.initDOM(),this.hideNativeScrollbar(),this.render(),this.initListeners()}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).filter(function(e){return e.classList.contains(t.classNames.scrollContent)}).length)this.trackX=this.el.querySelector(".".concat(this.classNames.track,".horizontal")),this.trackY=this.el.querySelector(".".concat(this.classNames.track,".vertical")),this.scrollContentEl=this.el.querySelector(".".concat(this.classNames.scrollContent)),this.contentEl=this.el.querySelector(".".concat(this.classNames.content));else{for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}if(!this.trackX||!this.trackY){var e=document.createElement("div"),n=document.createElement("div");e.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),this.options.autoHide||n.classList.add("visible"),e.appendChild(n),this.trackX=e.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=e.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild)}this.scrollbarX=this.trackX.querySelector(".".concat(this.classNames.scrollbar)),this.scrollbarY=this.trackY.querySelector(".".concat(this.classNames.scrollbar)),this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("mousedown",this.onMouseDown),this.contentEl.addEventListener("scroll",this.onScrollX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),window.addEventListener("resize",this.onWindowResize),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){(t.isChildNode(e.target)||e.addedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new Ye(this.recalculate),this.resizeObserver.observe(this.el)}},{key:"recalculate",value:function(){this.render()}},{key:"render",value:function(){this.contentSizeX=this.contentEl[this.scrollSizeAttr.x],this.contentSizeY=this.contentEl[this.scrollSizeAttr.y]-(this.scrollbarWidth||this.offsetSize),this.trackXSize=this.trackX[this.sizeAttr.x],this.trackYSize=this.trackY[this.sizeAttr.y],this.isEnabled.x=this.trackXSize<this.contentSizeX,this.isEnabled.y=this.trackYSize<this.contentSizeY,this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},{key:"resizeScrollbar",value:function(){var t,e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";if(this.isEnabled[i]||this.options.forceVisible){"x"===i?(t=this.scrollbarX,e=this.contentSizeX,n=this.trackXSize):(t=this.scrollbarY,e=this.contentSizeY,n=this.trackYSize);var r=n/e;this.handleSize=Math.max(~~(r*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(this.handleSize=Math.min(this.handleSize,this.options.scrollbarMaxSize)),"x"===i?t.style.width="".concat(this.handleSize,"px"):t.style.height="".concat(this.handleSize,"px")}}},{key:"positionScrollbar",value:function(){var t,e,n,i,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";"x"===r?(t=this.scrollbarX,e=this.contentEl[this.scrollOffsetAttr[r]],n=this.contentSizeX,i=this.trackXSize):(t=this.scrollbarY,e=this.scrollContentEl[this.scrollOffsetAttr[r]],n=this.contentSizeY,i=this.trackYSize);var o=e/(n-i),s=~~((i-this.handleSize)*o);(this.isEnabled[r]||this.options.forceVisible)&&(t.style.transform="x"===r?"translate3d(".concat(s,"px, 0, 0)"):"translate3d(0, ".concat(s,"px, 0)"))}},{key:"toggleTrackVisibility",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",e="y"===t?this.trackY:this.trackX,n="y"===t?this.scrollbarY:this.scrollbarX;this.isEnabled[t]||this.options.forceVisible?e.style.visibility="visible":e.style.visibility="hidden",this.options.forceVisible&&(this.isEnabled[t]?n.style.visibility="visible":n.style.visibility="hidden")}},{key:"hideNativeScrollbar",value:function(){this.scrollbarWidth=It(),this.scrollContentEl.style[this.isRtl?"paddingLeft":"paddingRight"]="".concat(this.scrollbarWidth||this.offsetSize,"px"),this.scrollContentEl.style.marginBottom="-".concat(2*this.scrollbarWidth||this.offsetSize,"px"),this.contentEl.style.paddingBottom="".concat(this.scrollbarWidth||this.offsetSize,"px"),0!==this.scrollbarWidth&&(this.contentEl.style[this.isRtl?"marginLeft":"marginRight"]="-".concat(this.scrollbarWidth,"px"))}},{key:"showScrollbar",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[e]||(t="x"===e?this.scrollbarX:this.scrollbarY,this.isEnabled[e]&&(t.classList.add("visible"),this.isVisible[e]=!0),this.options.autoHide&&(this.flashTimeout=window.setTimeout(this.hideScrollbars,this.options.timeout)))}},{key:"onDrag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var n="y"===e?this.scrollbarY:this.scrollbarX,i="y"===e?t.pageY:t.pageX;this.dragOffset[e]=i-n.getBoundingClientRect()[this.offsetAttr[e]],this.currentAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"getScrollElement",value:function(){return"y"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y")?this.scrollContentEl:this.contentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"removeListeners",value:function(){this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}}])&&Gt(e.prototype,n),i&&Gt(e,i),t}();return Ne.initHtmlApi(),Ne});

/*
 * @license jQuery Basictable | MIT | Jerry Low | https://www.github.com/jerrylow/basictable
 */

(function ($) {
  $.fn.basictable = function (options) {

    var setup = function (table, data) {
      var headings = [];

      if (data.tableWrap) {
        table.wrap('<div class="bt-wrapper"></div>');
      }

      // Table Header
      if (data.header) {
        var format = '';

        if (table.find('thead tr th').length) {
          format = 'thead th';
        } else if (table.find('tbody tr th').length) {
          format = 'tbody tr th';
        } else if (table.find('th').length) {
          format = 'tr:first th';
        } else {
          format = 'tr:first td';
        }

        $.each(table.find(format), function () {
          var $heading = $(this);
          var colspan = parseInt($heading.attr('colspan'), 10) || 1;
          var row = $heading.closest('tr').index();

          if (!headings[row]) {
            headings[row] = [];
          }

          for (var i = 0; i < colspan; i++) {
            headings[row].push($heading);
          }
        });
      }

      // Table Body
      $.each(table.find('tbody tr'), function () {
        setupRow($(this), headings, data);
      });

      // Table Footer
      $.each(table.find('tfoot tr'), function () {
        setupRow($(this), headings, data);
      });
    };

    var setupRow = function ($row, headings, data) {
      $row.children().each(function () {
        var $cell = $(this);

        if (($cell.html() === '' || $cell.html() === '&nbsp;') && (!data.showEmptyCells)) {
          $cell.addClass('bt-hide');
        } else {
          var cellIndex = $cell.index();

          var headingText = '';

          for (var j = 0; j < headings.length; j++) {
            if (j != 0) {
              headingText += ': ';
            }

            var $heading = headings[j][cellIndex];
            headingText += $heading.text();
          }

          $cell.attr('data-th', headingText);

          if (data.contentWrap && !$cell.children().hasClass('bt-content')) {
            $cell.wrapInner('<span class="bt-content" />');
          }
        }
      });
    };

    var unwrap = function (table) {
      $.each(table.find('td'), function () {
        var $cell = $(this);
        var content = $cell.children('.bt-content').html();
        $cell.html(content);
      });
    };

    var check = function (table, data) {
      // Only change when table is larger than parent if force
      // responsive is turned off.
      if (!data.forceResponsive) {
        if (table.removeClass('bt').outerWidth() > table.parent().width()) {
          start(table, data);
        } else {
          end(table, data);
        }
      } else {
        if ((data.breakpoint !== null && $(window).width() <= data.breakpoint) || (data.containerBreakpoint !== null && table.parent().width() <= data.containerBreakpoint)) {
          start(table, data);
        } else {
          end(table, data);
        }
      }
    };

    var start = function (table, data) {
      table.addClass('bt');

      if (!data.header) {
        table.addClass('bt--no-header');
      }

      if (data.tableWrap) {
        table.parent('.bt-wrapper').addClass('active');
      }
    };

    var end = function (table, data) {
      table.removeClass('bt bt--no-header');

      if (data.tableWrap) {
        table.parent('.bt-wrapper').removeClass('active');
      }
    };

    var destroy = function (table, data) {
      table.removeClass('bt bt--no-header');
      table.find('td').removeAttr('data-th');

      if (data.tableWrap) {
        table.unwrap();
      }

      if (data.contentWrap) {
        unwrap(table);
      }

      table.removeData('basictable');
    };

    var resize = function (table) {
      if (table.data('basictable')) {
        check(table, table.data('basictable'));
      }
    };

    // Get table.
    this.each(function () {
      var table = $(this);

      // If table has already executed.
      if (table.length === 0 || table.data('basictable')) {
        if (table.data('basictable')) {
          var data = table.data('basictable')
          // Destroy basic table.
          if (options === 'destroy') {
            destroy(table, data);
          } else if (options === 'restart') {
            destroy(table, data);
            table.data('basictable', data);
            setup(table, data);
            check(table, data);
          }
          // Start responsive mode.
          else if (options === 'start') {
            start(table, data);
          } else if (options === 'stop') {
            end(table, data);
          } else {
            check(table, data);
          }
        }
        return false;
      }

      // Extend Settings.
      var settings = $.extend({}, $.fn.basictable.defaults, options);

      var vars = {
        breakpoint: settings.breakpoint,
        containerBreakpoint: settings.containerBreakpoint,
        contentWrap: settings.contentWrap,
        forceResponsive: settings.forceResponsive,
        noResize: settings.noResize,
        tableWrap: settings.tableWrap,
        showEmptyCells: settings.showEmptyCells,
        header: settings.header
      };
      // Maintain the original functionality/defaults
      if (vars.breakpoint === null && vars.containerBreakpoint === null) {
        vars.breakpoint = 568;
      }

      // Initiate
      table.data('basictable', vars);

      setup(table, table.data('basictable'));

      if (!vars.noResize) {
        check(table, table.data('basictable'));

        $(window).bind('resize.basictable', function () {
          resize(table);
        });
      }
    });
  };

  $.fn.basictable.defaults = {
    breakpoint: null,
    containerBreakpoint: null,
    contentWrap: true,
    forceResponsive: true,
    noResize: false,
    tableWrap: false,
    showEmptyCells: false,
    header: true
  };
})(jQuery);

//     keymaster.js
//     (c) 2011-2013 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.

;(function(global){
    var k,
        _handlers = {},
        _mods = { 16: false, 18: false, 17: false, 91: false },
        _scope = 'all',
        // modifier keys
        _MODIFIERS = {
            '⇧': 16, shift: 16,
            '⌥': 18, alt: 18, option: 18,
            '⌃': 17, ctrl: 17, control: 17,
            '⌘': 91, command: 91
        },
        // special keys
        _MAP = {
            backspace: 8, tab: 9, clear: 12,
            enter: 13, 'return': 13,
            esc: 27, escape: 27, space: 32,
            left: 37, up: 38,
            right: 39, down: 40,
            del: 46, 'delete': 46,
            home: 36, end: 35,
            pageup: 33, pagedown: 34,
            ',': 188, '.': 190, '/': 191,
            '`': 192, '-': 189, '=': 187,
            ';': 186, '\'': 222,
            '[': 219, ']': 221, '\\': 220
        },
        code = function(x){
            return _MAP[x] || x.toUpperCase().charCodeAt(0);
        },
        _downKeys = [];

    for(k=1;k<20;k++) _MAP['f'+k] = 111+k;

    // IE doesn't support Array#indexOf, so have a simple replacement
    function index(array, item){
        var i = array.length;
        while(i--) if(array[i]===item) return i;
        return -1;
    }

    // for comparing mods before unassignment
    function compareArray(a1, a2) {
        if (a1.length != a2.length) return false;
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    }

    var modifierMap = {
        16:'shiftKey',
        18:'altKey',
        17:'ctrlKey',
        91:'metaKey'
    };
    function updateModifierKey(event) {
        for(k in _mods) _mods[k] = event[modifierMap[k]];
    };

    // handle keydown event
    function dispatch(event) {
        var key, handler, k, i, modifiersMatch, scope;
        key = event.keyCode;

        if (index(_downKeys, key) == -1) {
            _downKeys.push(key);
        }

        // if a modifier key, set the key.<modifierkeyname> property to true and return
        if(key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
        if(key in _mods) {
            _mods[key] = true;
            // 'assignKey' from inside this closure is exported to window.key
            for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = true;
            return;
        }
        updateModifierKey(event);

        // see if we need to ignore the keypress (filter() can can be overridden)
        // by default ignore key presses if a select, textarea, or input is focused
        if(!assignKey.filter.call(this, event)) return;

        // abort if no potentially matching shortcuts found
        if (!(key in _handlers)) return;

        scope = getScope();

        // for each potential shortcut
        for (i = 0; i < _handlers[key].length; i++) {
            handler = _handlers[key][i];

            // see if it's in the current scope
            if(handler.scope == scope || handler.scope == 'all'){
                // check if modifiers match if any
                modifiersMatch = handler.mods.length > 0;
                for(k in _mods)
                    if((!_mods[k] && index(handler.mods, +k) > -1) ||
                        (_mods[k] && index(handler.mods, +k) == -1)) modifiersMatch = false;
                // call the handler and stop the event if neccessary
                if((handler.mods.length == 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91]) || modifiersMatch){
                    if(handler.method(event, handler)===false){
                        if(event.preventDefault) event.preventDefault();
                        else event.returnValue = false;
                        if(event.stopPropagation) event.stopPropagation();
                        if(event.cancelBubble) event.cancelBubble = true;
                    }
                }
            }
        }
    };

    // unset modifier keys on keyup
    function clearModifier(event){
        var key = event.keyCode, k,
            i = index(_downKeys, key);

        // remove key from _downKeys
        if (i >= 0) {
            _downKeys.splice(i, 1);
        }

        if(key == 93 || key == 224) key = 91;
        if(key in _mods) {
            _mods[key] = false;
            for(k in _MODIFIERS) if(_MODIFIERS[k] == key) assignKey[k] = false;
        }
    };

    function resetModifiers() {
        for(k in _mods) _mods[k] = false;
        for(k in _MODIFIERS) assignKey[k] = false;
    };

    // parse and assign shortcut
    function assignKey(key, scope, method){
        var keys, mods;
        keys = getKeys(key);
        if (method === undefined) {
            method = scope;
            scope = 'all';
        }

        // for each shortcut
        for (var i = 0; i < keys.length; i++) {
            // set modifier keys if any
            mods = [];
            key = keys[i].split('+');
            if (key.length > 1){
                mods = getMods(key);
                key = [key[key.length-1]];
            }
            // convert to keycode and...
            key = key[0]
            key = code(key);
            // ...store handler
            if (!(key in _handlers)) _handlers[key] = [];
            _handlers[key].push({ shortcut: keys[i], scope: scope, method: method, key: keys[i], mods: mods });
        }
    };

    // unbind all handlers for given key in current scope
    function unbindKey(key, scope) {
        var multipleKeys, keys,
            mods = [],
            i, j, obj;

        multipleKeys = getKeys(key);

        for (j = 0; j < multipleKeys.length; j++) {
            keys = multipleKeys[j].split('+');

            if (keys.length > 1) {
                mods = getMods(keys);
            }

            key = keys[keys.length - 1];
            key = code(key);

            if (scope === undefined) {
                scope = getScope();
            }
            if (!_handlers[key]) {
                return;
            }
            for (i = 0; i < _handlers[key].length; i++) {
                obj = _handlers[key][i];
                // only clear handlers if correct scope and mods match
                if (obj.scope === scope && compareArray(obj.mods, mods)) {
                    _handlers[key][i] = {};
                }
            }
        }
    };

    // Returns true if the key with code 'keyCode' is currently down
    // Converts strings into key codes.
    function isPressed(keyCode) {
        if (typeof(keyCode)=='string') {
            keyCode = code(keyCode);
        }
        return index(_downKeys, keyCode) != -1;
    }

    function getPressedKeyCodes() {
        return _downKeys.slice(0);
    }

    function filter(event){
        var tagName = (event.target || event.srcElement).tagName;
        // ignore keypressed in any elements that support keyboard data input
        return !(tagName == 'INPUT' || tagName == 'SELECT' || tagName == 'TEXTAREA');
    }

    // initialize key.<modifier> to false
    for(k in _MODIFIERS) assignKey[k] = false;

    // set current scope (default 'all')
    function setScope(scope){ _scope = scope || 'all' };
    function getScope(){ return _scope || 'all' };

    // delete all handlers for a given scope
    function deleteScope(scope){
        var key, handlers, i;

        for (key in _handlers) {
            handlers = _handlers[key];
            for (i = 0; i < handlers.length; ) {
                if (handlers[i].scope === scope) handlers.splice(i, 1);
                else i++;
            }
        }
    };

    // abstract key logic for assign and unassign
    function getKeys(key) {
        var keys;
        key = key.replace(/\s/g, '');
        keys = key.split(',');
        if ((keys[keys.length - 1]) == '') {
            keys[keys.length - 2] += ',';
        }
        return keys;
    }

    // abstract mods logic for assign and unassign
    function getMods(key) {
        var mods = key.slice(0, key.length - 1);
        for (var mi = 0; mi < mods.length; mi++)
            mods[mi] = _MODIFIERS[mods[mi]];
        return mods;
    }

    // cross-browser events
    function addEvent(object, event, method) {
        if (object.addEventListener)
            object.addEventListener(event, method, false);
        else if(object.attachEvent)
            object.attachEvent('on'+event, function(){ method(window.event) });
    };

    // set the handlers globally on document
    addEvent(document, 'keydown', function(event) { dispatch(event) }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
    addEvent(document, 'keyup', clearModifier);

    // reset modifiers to false whenever the window is (re)focused.
    addEvent(window, 'focus', resetModifiers);

    // store previously defined key
    var previousKey = global.key;

    // restore previously defined key and return reference to our key object
    function noConflict() {
        var k = global.key;
        global.key = previousKey;
        return k;
    }

    // set window.key and window.key.set/get/deleteScope, and the default filter
    global.key = assignKey;
    global.key.setScope = setScope;
    global.key.getScope = getScope;
    global.key.deleteScope = deleteScope;
    global.key.filter = filter;
    global.key.isPressed = isPressed;
    global.key.getPressedKeyCodes = getPressedKeyCodes;
    global.key.noConflict = noConflict;
    global.key.unbind = unbindKey;

    if(typeof module !== 'undefined') module.exports = assignKey;

})(this);

/**
 * Fileuploader
 * Copyright (c) 2019 Innostudio.de
 * Website: https://innostudio.de/fileuploader/
 * Version: 2.2 (01-Apr-2019)
 * License: https://innostudio.de/fileuploader/documentation/#license
 */
(function($) {
    "use strict";
	
    $.fn.fileuploader = function(q) {
        return this.each(function(t, r) {
			var s = $(r), // input element
				p = null, // parent element
				o = null, // new input element
				l = null, // list element
				sl = [], // input elements !important for addMore option
				n = $.extend(true, {}, $.fn.fileuploader.defaults, q), // options
				f = {
					/**
					 * init
					 * initialize the plugin
					 *
					 * @void
					 */
					init: function() {
						// create and set the parent element
						if (!s.closest('.fileuploader').length)
							s.wrap('<div class="fileuploader"></div>');
						p = s.closest('.fileuploader');
						
						// add, merge and apply input attributes with the options
						// also define the defaults for some options
						f.set('attrOpts');
						
						// check if the plugin is supported in current browser
						if (!f.isSupported()) {
							n.onSupportError && $.isFunction(n.onSupportError) ? n.onSupportError(p, s) : null;
							return false;
						}
						
						// before render callback
						if (n.beforeRender && $.isFunction(n.beforeRender) && n.beforeRender(p, s) === false) {
							return false;
						}
						
						// redesign the new input
						f.redesign();
						
						// append files from options
                        if (n.files)
						  f.files.append(n.files);
						
						// after render callback
						f.rendered = true;
						n.afterRender && $.isFunction(n.afterRender) ? n.afterRender(l, p, o, s) : null;
						
						// bind events
						if (!f.disabled)
							f.bindUnbindEvents(true);
					},
					
					/**
					 * bindUnbindEvents
					 * bind or unbind events for input and new elements
					 *
					 * @param {bool} bind - bind the events?
					 * @void
					 */
					bindUnbindEvents: function(bind) {
						// unbind events
						if (bind)
							f.bindUnbindEvents(false);
						
						// bind all input events
						s[bind ? 'on' : 'off'](f._assets.getAllEvents(), f.onEvent);
						
						// bind click event for the new input
						if (n.changeInput && o!==s)
							o[bind ? 'on' : 'off']('click', f.clickHandler);
						
						// bind drag&drop events
                        if (n.dragDrop && n.dragDrop.container.length) {
                            n.dragDrop.container[bind ? 'on' : 'off']('drag dragstart dragend dragover dragenter dragleave drop', function(e) { e.preventDefault(); });
                            n.dragDrop.container[bind ? 'on' : 'off']('drop', f.dragDrop.onDrop);
                            n.dragDrop.container[bind ? 'on' : 'off']('dragover', f.dragDrop.onDragEnter);
                            n.dragDrop.container[bind ? 'on' : 'off']('dragleave', f.dragDrop.onDragLeave);
                        }
						
						// bind the paste from clipboard event
                        if (f.isUploadMode() && n.clipboardPaste)
                            $(window)[bind ? 'on' : 'off']('paste', f.clipboard.paste);
						
						// bind sorter events
						if (n.sorter && n.thumbnails && n.thumbnails._selectors.sorter)
							f.sorter[bind ? 'init': 'destroy']();
						
						// bind the form reset
						s.closest('form')[bind ? 'on' : 'off']('reset', f.reset);
					},
					
					/**
					 * redesign
					 * create the new input and hide the standard one
					 *
					 * @void
					 */
					redesign: function() {
						// set as default
						o = s;
						
						// add a class name with theme
						if (n.theme)
							p.addClass('fileuploader-theme-' + n.theme);
						
						// set new input html
						if (n.changeInput) {
							switch ((typeof n.changeInput + "").toLowerCase()) {
								case 'boolean':
									o = $('<div class="fileuploader-input">' +
										  	'<div class="fileuploader-input-caption"><span>' + f._assets.textParse(n.captions.feedback) + '</span></div>' + 
										  	'<div class="fileuploader-input-button"><span>' + f._assets.textParse(n.captions.button) + '</span></div>' + 
										  '</div>');
									break;
								case 'string':
									if (n.changeInput != ' ')
                                    	o = $(f._assets.textParse(n.changeInput, n));
									break;
								case 'object':
									o = $(n.changeInput);
									break;
								case 'function':
									o = $(n.changeInput(s, p, n, f._assets.textParse));
									break;
							}
							
                            // add the new input after standard input
							s.after(o);
                            
                            // hide the standard input
							s.css({
								position: "absolute",
								"z-index": "-9999",
								height: '0',
								width: '0',
								padding: '0',
								margin: '0',
								"line-height": '0',
								outline: '0',
								border: '0',
								opacity: '0'
							});
						}
						
						
						// create thumbnails list
						if (n.thumbnails)
							f.thumbnails.create();
						
						// set drag&drop container
						if (n.dragDrop) {
							n.dragDrop = typeof(n.dragDrop) != 'object' ? {container: null} : n.dragDrop;
							n.dragDrop.container = n.dragDrop.container ? $(n.dragDrop.container) : o;
						}
					},
					
					/**
					 * clickHandler
					 * click event for new input
					 *
                     * @param {Event} e - jQuery event
					 * @void
					 */
					clickHandler: function(e) {
						e.preventDefault();
                        
                        // clear clipboard pending
                        if (f.clipboard._timer) {
                            f.clipboard.clean();
                            return;
                        }
						
						// trigger input click
						s.click();
					},
					
					/**
					 * onEvent
					 * callbacks for each input event
					 *
                     * @param {Event} e - jQuery event
					 * @void
					 */
					onEvent: function(e) {
						switch(e.type) {
							case 'focus':
								p ? p.addClass('fileuploader-focused') : null;
								break;
							case 'blur':
								p ? p.removeClass('fileuploader-focused') : null;
								break;
							case 'change':
								f.onChange.call(this);
								break;
						}
						
						// listeners callback
						n.listeners && $.isFunction(n.listeners[e.type]) ? n.listeners[e.type].call(s, p) : null;
					},
					
					
					/**
					 * set
					 * set properties
					 *
                     * @param {String} type - property type
                     * @param {null|String} value - property value
					 * @void
					 */
					set: function(type, value) {
						switch(type) {
							case 'attrOpts':
								var d = ['limit', 'maxSize', 'fileMaxSize', 'extensions', 'changeInput', 'theme', 'addMore', 'listInput', 'files'];
								for (var k = 0; k < d.length; k++) {
									var j = 'data-fileuploader-' + d[k];
									if (f._assets.hasAttr(j)) {
										switch (d[k]) {
											case 'changeInput':
											case 'addMore':
											case 'listInput':
												n[d[k]] = (['true', 'false'].indexOf(s.attr(j)) > -1 ? s.attr(j) == 'true' : s.attr(j));
												break;
											case 'extensions':
												n[d[k]] = s.attr(j)
													.replace(/ /g, '')
													.split(',');
												break;
											case 'files':
												n[d[k]] = JSON.parse(s.attr(j));
												break;
											default:
												n[d[k]] = s.attr(j);
										}
									}
									s.removeAttr(j);
								}
								
								// set the plugin on disabled if the input has disabled attribute or limit is 0
								if (s.attr('disabled') != null || s.attr('readonly') != null || n.limit === 0)
									f.disabled = true;
								
								// set multiple attribute to the input
								if (!n.limit || (n.limit && n.limit >= 2)) {
									s.attr('multiple', 'multiple');
                                    // set brackets at the end of input name
									n.inputNameBrackets && s.attr('name').slice(-2) != '[]' ? s.attr('name', s.attr('name') + '[]') : null;
								}
								
								// set list input element
								if (n.listInput === true) {
									n.listInput = $('<input type="hidden" name="fileuploader-list-' + s.attr('name').replace('[]', '').split('[').pop().replace(']', '') + '">').insertBefore(s);
								}
								if (typeof n.listInput == "string" && $(n.listInput).length == 0) {
									n.listInput = $('<input type="hidden" name="' + n.listInput + '">').insertBefore(s);
								}
								
								// apply some defined options to plugin
								f.set('disabled', f.disabled);
								if (!n.fileMaxSize && n.maxSize)
									n.fileMaxSize = n.maxSize;
								break;
							// set and apply disable option to plugin
							case 'disabled':
								f.disabled = value;
								p[f.disabled ? 'addClass' : 'removeClass']('fileuploader-disabled');
								s[f.disabled ? 'attr' : 'removeAttr']('disabled', 'disabled');
								
								if (f.rendered)
									f.bindUnbindEvents(!value);
								break;
							// set new input feedback html
							case 'feedback':
                                if (!value)
                                    value = f._assets.textParse(f._itFl.length > 0 ? n.captions.feedback2 : n.captions.feedback, {length: f._itFl.length});
                                
                                $(!o.is(':file')) ? o.find('.fileuploader-input-caption span').html(value) : null;
                                break;
							// set file input value to empty
							case 'input':
                                var el = f._assets.copyAllAttributes($('<input type="file">'), s, true);
                                
                                f.bindUnbindEvents(false);
								s.after(s = el).remove();
                                f.bindUnbindEvents(true);
								break;
							// set previous input; only for addMore option
							case 'prevInput':
								if (sl.length > 0) {
									f.bindUnbindEvents(false);
									sl[value].remove();
									sl.splice(value, 1);
									s = sl[sl.length - 1];
									f.bindUnbindEvents(true);
								}
								break;
							// set next input; only for addMore option
							case 'nextInput':
								var el = f._assets.copyAllAttributes($('<input type="file">'), s);
                                
								f.bindUnbindEvents(false);
								if (sl.length > 0 && sl[sl.length - 1].get(0).files.length == 0) {
									s = sl[sl.length - 1];
								} else {
									sl.indexOf(s) == -1 ? sl.push(s) : null;
									sl.push(el);
									s.after(s = el);
								}
								f.bindUnbindEvents(true);
								break;
							// set list input with list of the files
							case 'listInput':
								if (n.listInput)
                                    n.listInput.val(f.files.list(true, null, false, value));
								break;
						}
					},
					
					/**
					 * onChange
					 * on input change event
					 *
                     * @param {Event} e - jQuery event
                     * @param {Array} fileList - FileList array, used only by drag&drop and clipboard paste
					 * @void
					 */
					onChange: function(e, fileList) {
						var files = s.get(0).files;
						
						// drag&drop or clipboard paste
						if (fileList) {
							if (fileList.length) {
                                files = fileList;
                            } else {
                                f.set('input', '');
                                f.files.clear();
                                return false;
							}
							
						}
                        
                        // clean clipboard timer
                        // made only for safety
                        if (f.clipboard._timer)
                            f.clipboard.clean();
						
						// reset the input if default mode
						if (f.isDefaultMode()) {
							f.reset();
							
							if (files.length == 0)
								return;
						}
						
						// beforeSelect callback
						if (n.beforeSelect && $.isFunction(n.beforeSelect) && n.beforeSelect(files, l, p, o, s) == false) {
                            return false;
                        }
						
						// files
                        var t = 0; // total processed files
						for (var i = 0; i < files.length; i++ ) {
							var file = files[i], // file
								item = f._itFl[f.files.add(file, 'choosed')], // item
								status = f.files.check(item, files, i == 0); // ["type", "message", "do not show the warning message", "do not check the next files"]
                            
                            // process the warnings
							if (status !== true) {
								f.files.remove(item, true);
								
								if (!status[2]) {
									if (f.isDefaultMode()) {
										f.set('input', '');
										f.reset();
										status[3] = true;
									}
                                    
									status[1] ? n.dialogs.alert(status[1], item, l, p, o, s) : null;
								}
								
								if (status[3]) {
									break;
								}
								
								continue;
							}
							
							// file is valid
							// create item html
							if (n.thumbnails)
								f.thumbnails.item(item);
								
							// create item ajax request
							if (f.isUploadMode())
								f.upload.prepare(item);
							
							// onSelect callback
							n.onSelect && $.isFunction(n.onSelect) ? n.onSelect(item, l, p, o, s) : null;
							
                            t++;
						}
						
                        // clear the input in uploadMode
                        if (f.isUploadMode() && t > 0)
                            f.set('input', '');
						
						// set feedback caption
						f.set('feedback', null);
						
						// set nextInput for addMore option
						if (f.isAddMoreMode() && t > 0) {
							f.set('nextInput');
						}
						
                        // set listInput value
						f.set('listInput', null);
                        
						// afterSelect callback
						n.afterSelect && $.isFunction(n.afterSelect) ? n.afterSelect(l, p, o, s) : null;
					},
                    
					/**
                     * @namespace thumbnails
                     */
					thumbnails: {
                        /**
                         * create
                         * create the thumbnails list
                         *
						 * @namespace thumbnails
                         * @void
                         */
						create: function() {
							// thumbnails.beforeShow callback
							n.thumbnails.beforeShow != null && $.isFunction(n.thumbnails.beforeShow) ? n.thumbnails.beforeShow(p, o, s) : null;
                            
							// create item's list element
							var box = $(f._assets.textParse(n.thumbnails.box)).appendTo(n.thumbnails.boxAppendTo ? n.thumbnails.boxAppendTo : p);
							l = !box.is(n.thumbnails._selectors.list) ? box.find(n.thumbnails._selectors.list) : box;
							
                            // bind item popup method to the selector
                            if (n.thumbnails._selectors.popup_open) {
                                l.on('click', n.thumbnails._selectors.popup_open, function(e) {
                                    e.preventDefault();
                                    
                                    var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    
                                    if (item && item.popup && item.html.hasClass('file-has-popup'))
                                        f.thumbnails.popup(item);
                                });
                            }
							// bind item upload start method to the selector
                            if (f.isUploadMode() && n.thumbnails._selectors.start) {
                                l.on('click', n.thumbnails._selectors.start, function(e) {
									e.preventDefault();
                                    
                                    if (f.locked)
                                        return false;

									var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    
                                    if (item)
                                        f.upload.send(item, true);
								});
                            }
							// bind item upload retry method to the selector
                            if (f.isUploadMode() && n.thumbnails._selectors.retry) {
                                l.on('click', n.thumbnails._selectors.retry, function(e) {
									e.preventDefault();
                                    
                                    if (f.locked)
                                        return false;

									var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    
                                    if (item)
                                        f.upload.retry(item);
								});
                            }
                            // bind item editor rotate method to the selector
                            if (n.thumbnails._selectors.rotate) {
                                l.on('click', n.thumbnails._selectors.rotate, function(e) {
									e.preventDefault();
                                    
                                    if (f.locked)
                                        return false;

									var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    
                                    if (item && item.editor) {
                                        item.editor.rotate();
                                        item.editor.save();
                                    }
								});
                            }
                            // bind item remove / upload.cancel method to the selector
							if (n.thumbnails._selectors.remove) {
								l.on('click', n.thumbnails._selectors.remove, function(e) {
									e.preventDefault();
                                    
                                    if (f.locked)
                                        return false;

									var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m),
										c = function(a) {
											f.files.remove(item);
										};
                                    
                                    if (item) {
                                        if (item.upload && item.upload.status != 'successful') {
                                            f.upload.cancel(item);
                                        } else {
                                            if (n.thumbnails.removeConfirmation) {
                                                n.dialogs.confirm(f._assets.textParse(n.captions.removeConfirmation, item), c);
                                            } else {
                                                c();
                                            }
                                        }
                                    }
								});
							}
						},
                        /**
                         * clear
                         * set the HTML content from items list to empty
                         *
						 * @namespace thumbnails
                         * @void
                         */
						clear: function() {
							if (l)
								l.html('');
						},
                        /**
                         * item
                         * create the item.html and append it to the list
                         *
						 * @namespace thumbnails
                         * @param {Object} item
                         * @param {HTML} replaceHtml
                         * @void
                         */
						item: function(item, replaceHtml) {
							item.icon = f.thumbnails.generateFileIcon(item.format, item.extension);
							item.image = '<div class="fileuploader-item-image"></div>';
							item.progressBar = f.isUploadMode() ? '<div class="fileuploader-progressbar"><div class="bar"></div></div>' : '';
							item.html = $(f._assets.textParse(item.appended && n.thumbnails.item2 ? n.thumbnails.item2 : n.thumbnails.item, item));
							item.progressBar = item.html.find('.fileuploader-progressbar');
                            
                            // add class with file extension and file format to item html
                            item.html.addClass('file-type-' + (item.format ? item.format : 'no') + ' file-ext-' + (item.extension ? item.extension : 'no') + '');
                            
							// add item html to list element
                            if (replaceHtml)
                                replaceHtml.replaceWith(item.html);
                            else
                                item.html[n.thumbnails.itemPrepend ? 'prependTo' : 'appendTo'](l);
                            
							// add popup option
							if (n.thumbnails.popup)
                                item.popup = {
                                    open: function() { f.thumbnails.popup(item); }
                                };
							
							// render the image thumbnail
                            f.thumbnails.renderThumbnail(item);
							item.renderThumbnail = function(src) {
                                if (src && item.popup && item.popup.close) {
                                    item.popup.close();
                                    item.popup = { open: item.popup.open };
                                }
                                f.thumbnails.renderThumbnail(item, true, src);
                            };
							
							// thumbnails.onItemShow callback
							n.thumbnails.onItemShow != null && $.isFunction(n.thumbnails.onItemShow) ? n.thumbnails.onItemShow(item, l, p, o, s) : null;
						},
						/**
                         * generateFileIcon
                         * generate a file icon with custom background color
                         *
						 * @namespace thumbnails
                         * @param {String} form - file format
						 * @param {String} extension - file extension
                         * @return {String} html element
                         */
						generateFileIcon: function(format, extension) {
                            var el = '<div style="${style}" class="fileuploader-item-icon' + '${class}"><i>' + (extension ? extension : '') + '</i></div>';
							
							// set generated color to icon background
                            var bgColor = f._assets.textToColor(extension);
							if (bgColor) {
								var isBgColorBright = f._assets.isBrightColor(bgColor);
								if (isBgColorBright)
									el = el.replace('${class}', ' is-bright-color');
								el = el.replace('${style}', 'background-color: ' + bgColor);
							}
							
                            return el.replace('${style}', '').replace('${class}', '');
						},
						/**
                         * renderThumbnail
                         * render image thumbnail and append to .fileuploader-item-image element
						 * it appends the generated icon if the file is not an image or not a valid image
                         *
						 * @namespace thumbnails
                         * @param {Object} item
						 * @param {bool} forceRender - skip the synchron functions and force the rendering
						 * @param {string} src - custom image source
                         * @void
                         */
						renderThumbnail: function(item, forceRender, src) {
							var m = item.html.find('.fileuploader-item-image'),
								readerSkip = item.data && item.data.readerSkip,
								setImageThumb = function(img) {
									var $img = $(img);
									
									// add $img to html
									m.removeClass('fileuploader-no-thumbnail fileuploader-loading').html($img);
									if (item.popup) item.html.addClass('file-has-popup');
									
									// add onImageLoaded callback
                                    if ($img.is('img'))
                                        $img.attr('draggable', 'false').on('load error', function(e) {
                                            if (e.type == 'error')
                                                setIconThumb(true);
                                            renderNextItem();
                                            n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null;
                                        });
									
									if ($img.is('canvas'))
										n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null;
								},
								setIconThumb = function(onImageError) {
									m.addClass('fileuploader-no-thumbnail');
									m.removeClass('fileuploader-loading').html(item.icon);
									if (item.popup) item.html.addClass('file-has-popup');
								
									if (onImageError)
										n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null;
								},
								renderNextItem = function() {
									var i = 0;
									
									if (item && f._pfrL.indexOf(item) > -1) {
										f._pfrL.splice(f._pfrL.indexOf(item), 1);
										while (i < f._pfrL.length) {
											if (f._itFl.indexOf(f._pfrL[i]) > -1) {
												setTimeout(function() {
												    f.thumbnails.renderThumbnail(f._pfrL[i], true);
                                                }, item.format == 'image' && item.size/1000000 > 1.8 ? 200 : 0);
												break;
											} else {
												f._pfrL.splice(i, 1);
											}
                                            i++;
										}
									}
								};
							
							// skip this function if there is no place for image
							if (!m.length) {
								renderNextItem();
								return;
							}
							
							// set item.image to jQuery element
							item.image = m.html('').addClass('fileuploader-loading');
							
							// create an image thumbnail only if file is an image and if FileReader is supported
							if ((['image', 'video', 'audio', 'astext'].indexOf(item.format) > -1 || item.data.thumbnail) && f.isFileReaderSupported() && !readerSkip && (item.appended || n.thumbnails.startImageRenderer || forceRender)) {
								// prevent popup before loading
								item.html.removeClass('file-has-popup');
								
								// check pending list
								if (n.thumbnails.synchronImages) {
									f._pfrL.indexOf(item) == -1 && !forceRender ? f._pfrL.push(item) : null;
									if (f._pfrL.length > 1 && !forceRender) {
										return;
									}
								}
								
								// create thumbnail
                                var load = function(data, fromReader) {
									var srcIsImg = data.nodeName && data.nodeName.toLocaleLowerCase() == 'img',
										src = !srcIsImg ? data : data.src;
									
                                    if (n.thumbnails.canvasImage) {
                                        var canvas = document.createElement('canvas'),
											img = srcIsImg ? data : new Image(),
                                            onload = function() {
												// resize canvas
                                                f.editor.resize(this, canvas, n.thumbnails.canvasImage.width ? n.thumbnails.canvasImage.width : m.width(), n.thumbnails.canvasImage.height ? n.thumbnails.canvasImage.height : m.height(), false, true);

                                                // check if canvas is not blank
                                                if (!f._assets.isBlankCanvas(canvas)) {
                                                    setImageThumb(canvas);
                                                } else {
                                                    setIconThumb();
                                                }

                                                // render the next pending item
                                                renderNextItem();
                                            },
                                            onerror = function(text) {
                                                setIconThumb(true);
                                                renderNextItem();
                                                img = null;
                                            };
                                        
                                        // do not create another image element
                                        if (item.format == 'image' && fromReader && item.reader.node)
                                            return onload.call(item.reader.node);
                                        
                                        // do not create an empty image element
                                        if(!src)
                                            return onerror();
										
										if (srcIsImg)
											return onload.call(data);
                                        
                                        // create image element
                                        img.onload = onload;
                                        img.onerror = onerror;
										if (item.data && item.data.readerCrossOrigin)
											img.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                        img.src = src;
                                    } else {
                                        setImageThumb(srcIsImg ? data : '<img src="'+ src +'">');
                                    }
                                };
								
                                // choose thumbnail source
                                if (typeof src == 'string' || typeof src == 'object')
                                    return load(src);
                                else
                                    return f.files.read(item, function() {
                                        if (item.reader.node && (item.reader.frame || item.reader.node.nodeName.toLowerCase() == 'img')) {
                                            load(item.reader.frame || item.reader.src, true);
                                        } else {
                                            setIconThumb(item.format == 'image');
                                            renderNextItem();
                                        }
                                    }, null, src, true);
							}
							
							setIconThumb();
						},
                        /**
                         * popup
                         * create and show a popup for an item
                         * appends the popup to parent element
						 * reset values for the editor
                         *
						 * @namespace thumbnails
                         * @param {Object} item
                         * @param {Boolean} isByAction - popup is called by prev/next buttons
                         * @void
                         */
                        popup: function(item, isByActions) {
                            if (f.locked || !n.thumbnails.popup || !n.thumbnails._selectors.popup)
                                return;
                            
                            var container = $(n.thumbnails.popup.container),
                                box = container.find('.fileuploader-popup'),
                                hasArrowsClass = 'fileuploader-popup-has-arrows',
                                renderPopup = function() {
                                    var template = item.popup.html || $(f._assets.textParse(n.thumbnails.popup.template, item)),
                                        popupIsNew = item.popup.html !== template,
                                        windowKeyEvent = function(e) {
                                            var key = e.which || e.keyCode;

                                            if (key == 27 && item.popup && item.popup.close)
                                                item.popup.close();

                                            if ((key == 37 || key == 39) && n.thumbnails.popup.arrows)
                                                item.popup.move(key == 37 ? 'prev' : 'next');
                                        };

                                    box.removeClass('loading');

                                    // remove all created popups
                                    if (box.children(n.thumbnails._selectors.popup).length) {
                                        $.each(f._itFl, function(i, a) {
                                            if (a != item && a.popup && a.popup.close) {
                                                a.popup.close(isByActions);
                                            }
                                        });
                                        box.find(n.thumbnails._selectors.popup).remove();
                                    }

                                    template.show().appendTo(box);
                                    item.popup.html = template;
                                    item.popup.move = function(to) {
                                        var itemIndex = f._itFl.indexOf(item),
                                            nextItem = null,
                                            itL = false;
										
										to = n.thumbnails.itemPrepend ? to == 'prev' ? 'next' : 'prev' : to;
										
                                        if (to == 'prev') {
                                            for (var i = itemIndex; i>=0; i--) {
                                                var a = f._itFl[i];

                                                if (a != item && a.popup && a.html.hasClass('file-has-popup')) {
                                                    nextItem = a;
                                                    break;
                                                }

                                                if (i == 0 && !nextItem && !itL && n.thumbnails.popup.loop) {
                                                    i = f._itFl.length;
                                                    itL = true;
                                                }
                                            }
                                        } else {
                                            for (var i = itemIndex; i<f._itFl.length; i++) {
                                                var a = f._itFl[i];

                                                if (a != item && a.popup && a.html.hasClass('file-has-popup')) {
                                                    nextItem = a;
                                                    break;
                                                }

                                                if (i+1 == f._itFl.length && !nextItem && !itL && n.thumbnails.popup.loop) {
                                                    i = -1;
                                                    itL = true;
                                                }
                                            }
                                        }

                                        if (nextItem)
                                            f.thumbnails.popup(nextItem, true);
                                    };
                                    item.popup.close = function(isByActions) {
                                        if (item.reader.node) {
                                            item.reader.node.pause ? item.reader.node.pause() : null;
                                        }

                                        $(window).off('keyup', windowKeyEvent);
                                        container.css({
                                            overflow: '',
                                            width: ''
                                        });

                                        // hide the cropper
                                        if (item.popup.editor && item.popup.editor.cropper)
                                            item.popup.editor.cropper.hide();
                                        
                                        // hide the zoomer
                                        if (item.popup.zoomer)
                                            item.popup.zoomer.hide();

                                        // thumbnails.popup.onHide callback
                                        item.popup.html && n.thumbnails.popup.onHide && $.isFunction(n.thumbnails.popup.onHide) ? n.thumbnails.popup.onHide(item, l, p, o, s) : (item.popup.html ? item.popup.html.remove() : null);

                                        if (!isByActions)
                                            box.fadeOut(400, function() {
                                                box.remove();
                                            });

                                        delete item.popup.close;
                                    };

                                    // append item.reader.node to popup
                                    // play video/audio
                                    if (item.reader.node) {
                                        if (popupIsNew)
                                            template.html(template.html().replace(/\$\{reader\.node\}/, '<div class="reader-node"></div>')).find('.reader-node').html(item.reader.node);
                                        item.reader.node.controls = true;
                                        item.reader.node.currentTime = 0;
                                        item.reader.node.play ? item.reader.node.play() : null;
                                    } else {
                                        if (popupIsNew)
                                            template.find('.fileuploader-popup-node').html('<div class="reader-node"><div class="fileuploader-popup-file-icon">' + item.icon + '</div></div>');
                                    }

                                    // bind Window functions
                                    $(window).on('keyup', windowKeyEvent);

                                    // freeze the container
                                    container.css({
                                        overflow: 'hidden',
                                        width: container.innerWidth()
                                    });
                                    
                                    // popup arrows
                                    item.popup.html.find('[data-action="prev"], [data-action="next"]').removeAttr('style');
                                    item.popup.html[f._itFl.length == 1 || !n.thumbnails.popup.arrows ? 'removeClass' : 'addClass'](hasArrowsClass);
                                    
                                    if (!n.thumbnails.popup.loop) {
                                        if (f._itFl.indexOf(item) == 0)
                                            item.popup.html.find('[data-action="prev"]').hide();
                                        if (f._itFl.indexOf(item) == f._itFl.length-1)
                                            item.popup.html.find('[data-action="next"]').hide();
                                    }
                                    
                                    // popup zoomer
                                    f.editor.zoom(item);

                                    // popup editor
                                    if (item.editor) {
                                        if (!item.popup.editor)
                                            item.popup.editor = {};
                                        
                                        // set saved rotation
                                        f.editor.rotate(item, item.popup.editor.rotation || item.editor.rotation || 0, true);

                                        // set saved crop
                                        if (item.popup.editor && item.popup.editor.cropper) {
                                            item.popup.editor.cropper.hide(true);
                                            setTimeout(function() {
                                                f.editor.crop(item, item.editor.crop ? $.extend({}, item.editor.crop) : item.popup.editor.cropper.setDefaultData());
                                            }, 100);
                                        }
                                    }
                                    
                                    // bind actions
                                    item.popup.html.on('click', '[data-action="prev"]', function(e) {
                                        item.popup.move('prev');
                                    }).on('click', '[data-action="next"]', function(e) {
                                        item.popup.move('next');
                                    }).on('click', '[data-action="crop"]', function(e) {
                                        if (item.editor)
                                            item.editor.cropper();
                                    }).on('click', '[data-action="rotate-cw"]', function(e) {
                                        if (item.editor)
                                            item.editor.rotate();
                                    }).on('click', '[data-action="zoom-in"]', function(e) {
                                        if (item.popup.zoomer)
                                            item.popup.zoomer.zoomIn();
                                    }).on('click', '[data-action="zoom-out"]', function(e) {
                                        if (item.popup.zoomer)
                                            item.popup.zoomer.zoomOut();
                                    });
                                    
                                    // thumbnails.popup.onShow callback
                                    n.thumbnails.popup.onShow && $.isFunction(n.thumbnails.popup.onShow) ? n.thumbnails.popup.onShow(item, l, p, o, s) : null;
                                };
                            
                            if (box.length == 0)
                                box = $('<div class="fileuploader-popup"></div>').appendTo(container);
                            
                            box.fadeIn(400).addClass('loading');
                            
                            if (['image/', 'video/', 'audio/', 'application/pdf', 'astext'].indexOf(item.type) > -1 && !item.popup.html) {
                                f.files.read(item, renderPopup);
                            } else {
                                renderPopup();
                            }
                        }
					},
					
					/**
                     * @namespace editor
                     */
					editor: {
						/**
                         * rotate
                         * rotate image action
						 * animate rotation in popup, only when popup is enabled
                         *
						 * @namespace editor
                         * @param {Object} item
                         * @param {Number} degrees - rotation degrees
                         * @param {Boolean} force - force rotation without animation to degrees
                         * @void
                         */
						rotate: function(item, degrees, force) {
							var inPopup = item.popup && item.popup.html && $('html').find(item.popup.html).length;
							
							if (!inPopup) {
								var rotation = item.editor.rotation || 0,
                                    deg = degrees ? degrees : rotation + 90;
                                
                                if (deg >= 360)
                                    deg = 0;
                                
                                if (item.popup.editor)
                                    item.popup.editor.rotation = deg;
								
								return item.editor.rotation = deg;
							} else if (item.reader.node) {
								// prevent animation issues
								if (item.popup.editor.isAnimating)
									return;
								item.popup.editor.isAnimating = true;
								
								var $popup = item.popup.html,
                                    $node = $popup.find('.fileuploader-popup-node'),
									$readerNode = $node.find('.reader-node'),
									$imageEl = $readerNode.find('> img'),
									rotation = item.popup.editor.rotation || 0,
									scale = item.popup.editor.scale || 1,
									animationObj = {
										rotation: rotation,
										scale: scale
									};
                                
								// hide cropper
								if (item.popup.editor.cropper)
									item.popup.editor.cropper.$template.hide();
                                
								// change values
								item.popup.editor.rotation = force ? degrees : rotation + 90;
								item.popup.editor.scale = ($readerNode.height() / $imageEl[[90,270].indexOf(item.popup.editor.rotation) > -1 ? 'width' : 'height']()).toFixed(3);
								if ($imageEl.height() * item.popup.editor.scale > $readerNode.width() && [90,270].indexOf(item.popup.editor.rotation) > -1)
									item.popup.editor.scale = $readerNode.height() / $imageEl.width();
								if (item.popup.editor.scale > 1)
									item.popup.editor.scale = 1;
								
								// animate
								$(animationObj).stop().animate({
									rotation: item.popup.editor.rotation,
									scale: item.popup.editor.scale
								}, {
									duration: force ? 2 : 300,
									easing: 'swing',
									step: function(now, fx) {
										var matrix = $imageEl.css('-webkit-transform') || $imageEl.css('-moz-transform') || $imageEl.css('transform') || 'none',
											rotation = 0,
											scale = 1,
											prop = fx.prop;
										
										// get css matrix
										if (matrix !== 'none') {
											var values = matrix.split('(')[1].split(')')[0].split(','),
												a = values[0],
												b = values[1];

											rotation = prop == 'rotation' ? now : Math.round(Math.atan2(b, a) * (180/Math.PI));
											scale = prop == 'scale' ? now : Math.round(Math.sqrt(a*a + b*b) * 10) / 10;
										}
										
										// set $imageEl css
										$imageEl.css({
											'-webkit-transform': 'rotate('+ rotation +'deg) scale('+ scale +')',
											'-moz-transform': 'rotate('+ rotation +'deg) scale('+ scale +')',
											'transform': 'rotate('+ rotation +'deg) scale('+ scale +')'
										});
									},
									always: function() {
										delete item.popup.editor.isAnimating;
										
										// re-draw the cropper if exists
										if (item.popup.editor.cropper && !force) {
											item.popup.editor.cropper.setDefaultData();
											item.popup.editor.cropper.init('rotation');
										}
									}
								}); 
								
								// check if rotation no greater than 360 degrees
								if (item.popup.editor.rotation >= 360)
									item.popup.editor.rotation = 0;
								
								// register as change
								if (item.popup.editor.rotation != item.editor.rotation)
									item.popup.editor.hasChanges = true;
							}
						},
						
						/**
                         * crop
                         * crop image action
						 * show cropping tools, only when popup is enabled
                         *
						 * @namespace editor
                         * @param {Object} item
                         * @param {Object} data - cropping data
                         * @void
                         */
						crop: function(item, data) {
							var inPopup = item.popup && item.popup.html && $('html').find(item.popup.html).length;
							
							if (!inPopup) {
								return item.editor.crop = data || item.editor.crop;
							} else if (item.reader.node) {
								if (!item.popup.editor.cropper) {
									var template = '<div class="fileuploader-cropper">' +
											'<div class="fileuploader-cropper-area">' +
												'<div class="point point-a"></div>' +
												'<div class="point point-b"></div>' +
												'<div class="point point-c"></div>' +
												'<div class="point point-d"></div>' +
												'<div class="point point-e"></div>' +
												'<div class="point point-f"></div>' +
												'<div class="point point-g"></div>' +
												'<div class="point point-h"></div>' +
												'<div class="area-move"></div>' +
												'<div class="area-image"></div>' +
                                                '<div class="area-info"></div>' +
											'</div>' +
										'</div>',
										$popup = item.popup.html,
										$imageEl = $popup.find('.fileuploader-popup-node .reader-node > img'),
										$template = $(template),
										$editor = $template.find('.fileuploader-cropper-area');
									
									// define popup cropper tool
									item.popup.editor.cropper = {
										$imageEl: $imageEl,
										$template: $template,
										$editor: $editor,
										isCropping: false,
										crop: data || null,
										init: function(data) {
											var cropper = item.popup.editor.cropper,
												position = cropper.$imageEl.position(),
												width = cropper.$imageEl[0].getBoundingClientRect().width,
												height = cropper.$imageEl[0].getBoundingClientRect().height,
												isInverted = item.popup.editor.rotation && [90,270].indexOf(item.popup.editor.rotation) > -1,
												scale = isInverted ? item.popup.editor.scale : 1;
											
											// unbind all events
											cropper.hide();
											
											// set default data
											if (!cropper.crop)
												cropper.setDefaultData();
											
											// hide if image not visible
											if (width == 0 || height == 0)
												return cropper.hide(true);

											// prevent duplicates
											if (!cropper.isCropping) {
												cropper.$imageEl.clone().appendTo(cropper.$template.find('.area-image'));
												cropper.$imageEl.parent().append($template);
											}

											// animate cropping tool
											cropper.$template.hide().css({
												left: position.left,
												top: position.top,
												width: width,
												height: height
											}).fadeIn(150);
											cropper.$editor.hide();
											clearTimeout(cropper._editorAnimationTimeout);
											cropper._editorAnimationTimeout = setTimeout(function() {
												delete cropper._editorAnimationTimeout;
												
												cropper.$editor.fadeIn(250);
												
												// update data with cf and scale
												if (item.editor.crop && $.isPlainObject(data)) {
													cropper.resize();
													cropper.crop.left = cropper.crop.left * cropper.crop.cfWidth * scale;
													cropper.crop.width = cropper.crop.width * cropper.crop.cfWidth * scale;
													cropper.crop.top = cropper.crop.top * cropper.crop.cfHeight * scale;
													cropper.crop.height = cropper.crop.height * cropper.crop.cfHeight * scale;
												}
                                                
                                                // maxWidth on open
                                                if (n.editor.cropper && (n.editor.cropper.maxWidth || n.editor.cropper.maxHeight)) {
                                                    if (n.editor.cropper.maxWidth)
                                                        cropper.crop.width = Math.min(n.editor.cropper.maxWidth * cropper.crop.cfWidth, cropper.crop.width);
                                                    if (n.editor.cropper.maxHeight)
                                                        cropper.crop.height = Math.min(n.editor.cropper.maxHeight * cropper.crop.cfHeight, cropper.crop.height);
                                                    
                                                    if ((!item.editor.crop || data == 'rotation') && data != 'resize') {
                                                        cropper.crop.left = (cropper.$template.width() - cropper.crop.width) / 2;
                                                        cropper.crop.top = (cropper.$template.height() - cropper.crop.height) / 2;
                                                    }
                                                }
												
												// ratio on open
												if ((!item.editor.crop || data == 'rotation') && (n.editor.cropper && n.editor.cropper.ratio && data != 'resize')) {
													var ratio = n.editor.cropper.ratio,
														ratioPx = f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio);

													if (ratioPx) {
														cropper.crop.width = Math.min(cropper.crop.width, ratioPx[0]);
														cropper.crop.left = (cropper.$template.width() - cropper.crop.width) / 2;
														cropper.crop.height = Math.min(cropper.crop.height, ratioPx[1]);
														cropper.crop.top = (cropper.$template.height() - cropper.crop.height) / 2;
													}
												}
                                                
												// draw editor
												cropper.drawPlaceHolder(cropper.crop);
											}, 400);

											// start and bind events
											if (n.editor.cropper && n.editor.cropper.showGrid)
												cropper.$editor.addClass('has-grid');
											cropper.$imageEl.attr('draggable', 'false');
											cropper.$template.on('mousedown touchstart', cropper.mousedown);
											$(window).on('resize', cropper.resize);

											// register as changed
											cropper.isCropping = true;
											item.popup.editor.hasChanges = true;
										},
										setDefaultData: function() {
											var cropper = item.popup.editor.cropper,
												$imageEl = cropper.$imageEl,
												width = $imageEl.width(),
												height = $imageEl.height(),
												isInverted = item.popup.editor.rotation && [90,270].indexOf(item.popup.editor.rotation) > -1,
												scale = item.popup.editor.scale || 1;
											
											// set default data
											cropper.crop = {
												left: 0,
												top: 0,
												width: isInverted ? height * scale : width,
												height: isInverted ? width * scale : height,
												cfWidth: width / item.reader.width,
												cfHeight: height / item.reader.height
											};
											
											return null;
										},
										hide: function(force) {
											var cropper = item.popup.editor.cropper;
											
											// hide editor on force
											if (force) {
												cropper.$template.hide();
												cropper.$editor.hide();
											}
											
											// stop and unbind events
											cropper.$imageEl.attr('draggable', '');
											cropper.$template.off('mousedown touchstart', cropper.mousedown);
											$(window).off('resize', cropper.resize);
										},
										resize: function(e) {
											var cropper = item.popup.editor.cropper,
												$imageEl = cropper.$imageEl;
											
											// only when image is visible
											if ($imageEl.width() > 0) {
												if (!e) {
													// re-write cf
													cropper.crop.cfWidth = $imageEl.width() / item.reader.width;
													cropper.crop.cfHeight = $imageEl.height() / item.reader.height;
												} else {
													// resize $editor
													cropper.$template.hide();
													clearTimeout(cropper._resizeTimeout);
													cropper._resizeTimeout = setTimeout(function() {
														delete cropper._resizeTimeout;
														var cfWidth = $imageEl.width() / item.reader.width,
															cfHeight = $imageEl.height() / item.reader.height;
														
														cropper.crop.left = cropper.crop.left / cropper.crop.cfWidth * cfWidth;
														cropper.crop.width = cropper.crop.width / cropper.crop.cfWidth * cfWidth;
														cropper.crop.top = cropper.crop.top / cropper.crop.cfHeight * cfHeight;
														cropper.crop.height = cropper.crop.height / cropper.crop.cfHeight * cfHeight;
														cropper.crop.cfWidth = cfWidth;
														cropper.crop.cfHeight = cfHeight;
														
														cropper.init('resize');
													}, 500);
												}
											}
										},
										drawPlaceHolder: function(css) {
											var cropper = item.popup.editor.cropper,
												rotation = item.popup.editor.rotation || 0,
												scale = item.popup.editor.scale || 1,
												translate = [0, 0];

											if (!css)
												return;
											
											// create new object
											css = $.extend({}, css);
											
											// edit width, height and translate values by rotation
											if (rotation)
												translate = [rotation == 180 || rotation == 270 ? -100 : 0, rotation == 90 || rotation == 180 ? -100 : 0];
                                            
											// draw cropping-area
											cropper.$editor.css(css);
                                            cropper.setAreaInfo();
											cropper.$editor.find('.area-image img').removeAttr('style').css({
												width: cropper.$imageEl.width(),
												height: cropper.$imageEl.height(),
												left: cropper.$editor.position().left * -1,
												top: cropper.$editor.position().top * -1,
												
												'-webkit-transform': 'rotate('+ rotation +'deg) scale('+ scale +') translateX('+ translate[0] +'%) translateY('+ translate[1] +'%)',
												'-moz-transform': 'rotate('+ rotation +'deg) scale('+ scale +') translateX('+ translate[0] +'%) translateY('+ translate[1] +'%)',
												'transform': 'rotate('+ rotation +'deg) scale('+ scale +') translateX('+ translate[0] +'%) translateY('+ translate[1] +'%)'
											});
										},
                                        setAreaInfo: function(type) {
                                            var cropper = item.popup.editor.cropper,
                                                scale = item.popup.editor.scale || 1;
                                            
                                            cropper.$editor.find('.area-info').html((cropper.isResizing || type == 'size' ? [
                                                'W: ' + Math.round(cropper.crop.width / cropper.crop.cfWidth / scale) + 'px',
                                                ' ',
                                                'H: ' + Math.round(cropper.crop.height / cropper.crop.cfHeight / scale) + 'px'] : [
                                                'X: ' + Math.round(cropper.crop.left / cropper.crop.cfWidth / scale) + 'px',
                                                ' ',
                                                'Y: ' + Math.round(cropper.crop.top / cropper.crop.cfHeight / scale) + 'px']).join(''));
                                        },
										mousedown: function(e) {
											var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
												$target = $(e.target),
												cropper = item.popup.editor.cropper,
												points = {
													x: (eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX) - cropper.$template.offset().left,
													y: (eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY) - cropper.$template.offset().top
												},
												callback = function() {
													// set current state
													cropper.pointData = {
														el: $target,
														x: points.x,
														y: points.y,
														xEditor: points.x - cropper.crop.left,
														yEditor: points.y - cropper.crop.top,
														left: cropper.crop.left,
														top: cropper.crop.top,
														width: cropper.crop.width,
														height: cropper.crop.height
													};
													
													// start cropping event
													if (cropper.isMoving || cropper.isResizing) {
                                                        cropper.setAreaInfo('size');
														cropper.$editor.addClass('moving');
														$('body').css({
															'-webkit-user-select': 'none',
															'-moz-user-select': 'none',
															'-ms-user-select': 'none',
															'user-select': 'none'
														});

														// bind window mousemove event
														$(document).on('mousemove touchmove', cropper.mousemove);
													}
												};
                                            
                                            if (item.popup.zoomer && item.popup.zoomer.hasSpacePressed)
                                                return;
                                            
                                            // determinate cropping type
                                            cropper.isMoving = $target.is('.area-move');
                                            cropper.isResizing = $target.is('.point');

											// mousedown event
											if (eventType == 'mousedown') {
												// bind cropping start event
												callback();
											}
                                            
											// touchstart event
											if (eventType == 'touchstart' && e.originalEvent.touches.length == 1) {
                                                if (cropper.isMoving || cropper.isResizing)
                                                    e.preventDefault();
												cropper.isTouchLongPress = true;

												// check if long press
												setTimeout(function() {
													if (!cropper.isTouchLongPress)
														return;
													delete cropper.isTouchLongPress;
													callback();
												}, n.thumbnails.touchDelay ? n.thumbnails.touchDelay : 0);
											}

											// bind window mouseup event
											$(document).on('mouseup touchend', cropper.mouseup);
										},
										mousemove: function(e) {
											var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
												$target = $(e.target),
												cropper = item.popup.editor.cropper,
												points = {
													x: (eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX) - cropper.$template.offset().left,
													y: (eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY) - cropper.$template.offset().top
												};
                                            
                                            if (e.originalEvent.touches && e.originalEvent.touches.length != 1)
                                                return cropper.mouseup(e);
                                            
											// move
											if (cropper.isMoving) {
												var left = points.x - cropper.pointData.xEditor,
													top = points.y - cropper.pointData.yEditor;

												// position
												if (left + cropper.crop.width > cropper.$template.width())
													left = cropper.$template.width() - cropper.crop.width;
												if (left < 0)
													left = 0;
												if (top + cropper.crop.height > cropper.$template.height())
													top = cropper.$template.height() - cropper.crop.height;
												if (top < 0)
													top = 0;

												// set position
												cropper.crop.left = left;
												cropper.crop.top = top;
											}

											// resize
											if (cropper.isResizing) {
												var point = cropper.pointData.el.attr('class').substr("point point-".length),
													lastWidth = cropper.crop.left + cropper.crop.width,
													lastHeight = cropper.crop.top + cropper.crop.height,
													minWidth = (n.editor.cropper && n.editor.cropper.minWidth || 0) * cropper.crop.cfWidth,
													minHeight = (n.editor.cropper && n.editor.cropper.minHeight || 0) * cropper.crop.cfHeight,
													maxWidth = (n.editor.cropper && n.editor.cropper.maxWidth) * cropper.crop.cfWidth,
													maxHeight = (n.editor.cropper && n.editor.cropper.maxHeight) * cropper.crop.cfHeight,
                                                    ratio = n.editor.cropper ? n.editor.cropper.ratio : null,
													ratioPx;

												// set minWidth if greater than image
												if (minWidth > cropper.$template.width())
													minWidth = cropper.$template.width();
												if (minHeight > cropper.$template.height())
													minHeight = cropper.$template.height();
                                                
												// set maxWidth if greater than image
												if (maxWidth > cropper.$template.width())
													maxWidth = cropper.$template.width();
												if (maxHeight > cropper.$template.height())
													maxHeight = cropper.$template.height();

												// points
												if ((point == 'a' || point == 'b' || point == 'c') && !ratioPx) {
													cropper.crop.top = points.y;
													if (cropper.crop.top < 0)
														cropper.crop.top = 0;

													cropper.crop.height = lastHeight - cropper.crop.top;
													if (cropper.crop.top > cropper.crop.top + cropper.crop.height) {
														cropper.crop.top = lastHeight;
														cropper.crop.height = 0;
													}

													// minHeight
													if (cropper.crop.height < minHeight) {
														cropper.crop.top = lastHeight - minHeight;
														cropper.crop.height = minHeight;
													}
													// maxHeight
													if (cropper.crop.height > maxHeight) {
														cropper.crop.top = lastHeight - maxHeight;
														cropper.crop.height = maxHeight;
													}
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.width = ratioPx[0];
														
														if (point == 'a' || point == 'b')
															cropper.crop.left = Math.max(0, cropper.pointData.left + ((cropper.pointData.width - cropper.crop.width) / (point == 'b' ? 2 : 1)));
														
														// check
														if (cropper.crop.left + cropper.crop.width > cropper.$template.width()) {
															var newWidth = cropper.$template.width() - cropper.crop.left;

															cropper.crop.width = newWidth;
															cropper.crop.height = newWidth / ratioPx[2] * ratioPx[3];
															cropper.crop.top = lastHeight - cropper.crop.height;
														}
													}
												}
												if ((point == 'e' || point == 'f' || point == 'g') && !ratioPx) {
													cropper.crop.height = points.y - cropper.crop.top;
													if (cropper.crop.height + cropper.crop.top > cropper.$template.height())
														cropper.crop.height = cropper.$template.height() - cropper.crop.top;

													// minHeight
													if (cropper.crop.height < minHeight)
														cropper.crop.height = minHeight;
                                                    // maxHeight
													if (cropper.crop.height > maxHeight)
														cropper.crop.height = maxHeight;
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.width = ratioPx[0];
														
														if (point == 'f' || point == 'g')
															cropper.crop.left = Math.max(0, cropper.pointData.left + ((cropper.pointData.width - cropper.crop.width) / (point == 'f' ? 2 : 1)));
														
														// check
														if (cropper.crop.left + cropper.crop.width > cropper.$template.width()) {
															var newWidth = cropper.$template.width() - cropper.crop.left;

															cropper.crop.width = newWidth;
															cropper.crop.height = newWidth / ratioPx[2] * ratioPx[3];
														}
													}
												}
												if ((point == 'c' || point == 'd' || point == 'e') && !ratioPx) {
													cropper.crop.width = points.x - cropper.crop.left;
													if (cropper.crop.width + cropper.crop.left > cropper.$template.width())
														cropper.crop.width = cropper.$template.width() - cropper.crop.left;

													// minWidth
													if (cropper.crop.width < minWidth)
														cropper.crop.width = minWidth;
                                                    // maxWidth
													if (cropper.crop.width > maxWidth)
														cropper.crop.width = maxWidth;
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.height = ratioPx[1];
														
														if (point == 'c' || point == 'd')
															cropper.crop.top = Math.max(0, cropper.pointData.top + ((cropper.pointData.height - cropper.crop.height) / (point == 'd' ? 2 : 1)));
														
														// check
														if (cropper.crop.top + cropper.crop.height > cropper.$template.height()) {
															var newHeight = cropper.$template.height() - cropper.crop.top;
															
															cropper.crop.height = newHeight;
															cropper.crop.width = newHeight / ratioPx[3] * ratioPx[2];
														}
													}
												}
												if ((point == 'a' || point == 'g' || point == 'h') && !ratioPx) {
													cropper.crop.left = points.x;
													if (cropper.crop.left > cropper.$template.width())
														cropper.crop.left = cropper.$template.width();
													if (cropper.crop.left < 0)
														cropper.crop.left = 0;

													cropper.crop.width = lastWidth - cropper.crop.left;
													if (cropper.crop.left > cropper.crop.left + cropper.crop.width) {
														cropper.crop.left = lastWidth;
														cropper.crop.width = 0;
													}

													// minWidth
													if (cropper.crop.width < minWidth) {
														cropper.crop.left = lastWidth - minWidth;
														cropper.crop.width = minWidth;
													}
                                                    // maxWidth
													if (cropper.crop.width > maxWidth) {
														cropper.crop.left = lastWidth - maxWidth;
														cropper.crop.width = maxWidth;
													}
													
													// ratio
													ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
													if (ratioPx) {
														cropper.crop.height = ratioPx[1];
														
														if (point == 'a' || point == 'h')
															cropper.crop.top = Math.max(0, cropper.pointData.top + ((cropper.pointData.height - cropper.crop.height) / (point == 'h' ? 2 : 1)));
														
														// check
														if (cropper.crop.top + cropper.crop.height > cropper.$template.height()) {
															var newHeight = cropper.$template.height() - cropper.crop.top;
															
															cropper.crop.height = newHeight;
															cropper.crop.width = newHeight / ratioPx[3] * ratioPx[2];
															cropper.crop.left = lastWidth - cropper.crop.width;
														}
													}
												}
											}

											// draw cropping-area
											cropper.drawPlaceHolder(cropper.crop);
										},
										mouseup: function(e) {
											var cropper = item.popup.editor.cropper;

											// check if empty area
											if (cropper.$editor.width() == 0 || cropper.$editor.height() == 0)
												cropper.init(cropper.setDefaultData());

											// clear
											delete cropper.isTouchLongPress;
											delete cropper.isMoving;
											delete cropper.isResizing;
											cropper.$editor.removeClass('moving show-info');
											$('body').css({
												'-webkit-user-select': '',
												'-moz-user-select': '',
												'-ms-user-select': '',
												'user-select': ''
											});

											// unbind window events
											$(document).off('mousemove touchmove', cropper.mousemove);
											$(document).off('mouseup touchend', cropper.mouseup);
										}
									};
									
									// init cropper tool
									item.popup.editor.cropper.init();
								} else {
									if (data)
										item.popup.editor.cropper.crop = data;
									item.popup.editor.cropper.init(data);
								}
							}	
						},
						
						/**
                         * resize
                         * resize a canvas image
                         *
						 * @namespace editor
                         * @param {HTML} img
                         * @param {HTML} canvas
                         * @param {Number} width - new width
                         * @param {Number} height - new height
                         * @param {Boolean} alpha - enable transparency on resize (!not available on smooth resize)
                         * @param {Boolean} fixedSize - fixed canvas size
                         * @void
                         */
						resize: function(img, canvas, width, height, alpha, fixedSize) {
							var context = canvas.getContext('2d'),
                                width = !width && height ? height * img.width / img.height : width,
                                height = !height && width ? width * img.height / img.width : height,
								ratio = img.width / img.height,
								optimalWidth =  ratio >= 1 ? width : height * ratio,
								optimalHeight = ratio < 1 ? height : width / ratio;
                            
							if (fixedSize && optimalWidth < width) {
								optimalHeight = optimalHeight * (width/optimalWidth);
								optimalWidth = width;
							}
							if (fixedSize && optimalHeight < height) {
								optimalWidth = optimalWidth * (height/optimalHeight);
								optimalHeight = height;
							}
							
							var steps = Math.min(Math.ceil(Math.log(img.width / optimalWidth) / Math.log(2)), 12);
							canvas.width = optimalWidth;
							canvas.height = optimalHeight;
                            
							// if image is smaller than canvas or there are no resizing steps
							if (img.width < canvas.width || img.height < canvas.height || steps < 2) {
								// set canvas size as image size if size is not fixed
								if (!fixedSize) {
									canvas.width = Math.min(img.width, canvas.width);
									canvas.height = Math.min(img.height, canvas.height);
								}
								
								// alight image to center
								var x = img.width < canvas.width ? (canvas.width - img.width)/2 : 0,
									y = img.height < canvas.height ? (canvas.height - img.height)/2 : 0;
								
								// draw image
								if (!alpha) {
									context.fillStyle = "#fff";
									context.fillRect(0, 0, canvas.width, canvas.height);
								}
								context.drawImage(img, x, y, Math.min(img.width, canvas.width), Math.min(img.height, canvas.height));
							} else {
								var oc = document.createElement('canvas'),
									octx = oc.getContext('2d'),
									factor = 2;
                                
								// smooth resize
								oc.width = img.width/factor;
								oc.height = img.height/factor;
								octx.fillStyle = "#fff";
								octx.fillRect(0, 0, oc.width, oc.height);
								octx.drawImage(img, 0, 0, oc.width, oc.height);
								while(steps > 2) {
									var factor2 = factor + 2,
										widthFactor = img.width/factor,
										heightFactor = img.height/factor;
									
									if (widthFactor > oc.width)
										widthFactor = oc.width;
									if (heightFactor > oc.height)
										heightFactor = oc.height;
									
									octx.drawImage(oc, 0, 0, widthFactor, heightFactor, 0, 0, img.width/factor2, img.height/factor2);
									factor = factor2;
									steps--;
								}
								
								// draw image
								var widthFactor = img.width/factor,
									heightFactor = img.height/factor;
								
								if (widthFactor > oc.width)
									widthFactor = oc.width;
								if (heightFactor > oc.height)
									heightFactor = oc.height;
                                
								context.drawImage(oc, 0, 0, widthFactor, heightFactor, 0, 0, optimalWidth, optimalHeight);
								
								oc = octx = null;
							}
							
							context = null;
						},
                        
                        zoom: function(item) {
                            var inPopup = item.popup && item.popup.html && $('html').find(item.popup.html).length;
                            
                            if (!inPopup)
                                return;
                            
                            if (!item.popup.zoomer) {
                                var $popup = item.popup.html,
                                    $node = $popup.find('.fileuploader-popup-node'),
                                    $readerNode = $node.find('.reader-node'),
                                    $imageEl = $readerNode.find('> img').attr('draggable', 'false').attr('ondragstart', 'return false;');
                                
                                item.popup.zoomer = {
                                    html: $popup.find('.fileuploader-popup-zoomer'),
                                    isActive: item.format == 'image' && item.reader.node && n.thumbnails.popup.zoomer,
                                    scale: 100,
                                    zoom: 100,

                                    init: function() {
                                        var zoomer = this;
                                        
                                        // disable plugin no images and IE
                                        if (!zoomer.isActive || f._assets.isIE() || f._assets.isMobile())
                                            return zoomer.html.hide() && $readerNode.addClass('has-node-centered');
                                        
                                        // init
                                        zoomer.hide();
                                        zoomer.resize();
                                        
                                        $(window).on('resize', zoomer.resize);
                                        $(window).on('keyup keydown', zoomer.keyPress);
                                        zoomer.html.find('input').on('input change', zoomer.range);
                                        $readerNode.on('mousedown touchstart', zoomer.mousedown);
                                        $node.on('mousewheel DOMMouseScroll', zoomer.scroll);
                                    },
                                    hide: function() {
                                        var zoomer = this;
                                        
                                        $(window).off('resize', zoomer.resize);
                                        $(window).off('keyup keydown', zoomer.keyPress);
                                        zoomer.html.find('input').off('input change', zoomer.range);
                                        $readerNode.off('mousedown', zoomer.mousedown);
                                        $node.off('mousewheel DOMMouseScroll', zoomer.scroll);
                                    },
                                    center: function(prevDimensions) {
                                        var zoomer = this,
                                            left = 0,
                                            top = 0;
                                        
                                        if (!prevDimensions) {
                                            left = Math.round(($node.width() - $readerNode.width()) / 2);
                                            top = Math.round(($node.height() - $readerNode.height()) / 2);
                                        } else {
                                            left = zoomer.left;
                                            top = zoomer.top;
                                            
                                            left -= (($node.width() / 2 - zoomer.left) * (($readerNode.width()/prevDimensions[0])-1));
                                            top -= (($node.height() / 2 - zoomer.top) * (($readerNode.height()/prevDimensions[1])-1));
                                            
                                            if ($readerNode.width() <= $node.width())
                                                left = Math.round(($node.width() - $readerNode.width()) / 2);
                                            if ($readerNode.height() <= $node.height())
                                                top = Math.round(($node.height() - $readerNode.height()) / 2);
                                            
                                            if ($readerNode.width() > $node.width()) {
                                                if (left > 0)
                                                    left = 0;
                                                else if (left + $readerNode.width() < $node.width())
                                                    left = $node.width() - $readerNode.width();
                                            }
                                            if ($readerNode.height() > $node.height()) {
                                                if (top > 0)
                                                    top = 0;
                                                else if (top + $readerNode.height() < $node.height())
                                                    top = $node.height() - $readerNode.height();
                                            }
                                            
                                            top = Math.min(top, 0);
                                        }
                                        
                                        // set styles
                                        $readerNode.css({
                                            left: (zoomer.left = left) + 'px',
                                            top: (zoomer.top = top) + 'px'
                                        });
                                    },
                                    resize: function() {
                                        var zoomer = item.popup.zoomer;
                                        
                                        $readerNode.removeAttr('style');
                                        zoomer.scale = zoomer.getImageScale();
                                        zoomer.updateView();
                                    },
                                    range: function(e) {
                                        var zoomer = item.popup.zoomer,
                                            $input = $(this),
                                            val = parseFloat($input.val());
                                        
                                        if (zoomer.scale >= 100) {
                                            e.preventDefault();
                                            $input.val(zoomer.scale);
                                            return;
                                        }
                                        
                                        if (val < zoomer.scale) {
                                            e.preventDefault();
                                            val = zoomer.scale;
                                            $input.val(val);
                                        }
                                        
                                        zoomer.updateView(val, true);
                                    },
                                    scroll: function(e) {
                                        var zoomer = item.popup.zoomer,
                                            delta = -100;
                                        
                                        if (e.originalEvent) {
                                            if (e.originalEvent.wheelDelta)
                                                delta = e.originalEvent.wheelDelta / -40;
                                            if (e.originalEvent.deltaY)
                                                delta = e.originalEvent.deltaY;
                                            if (e.originalEvent.detail)
                                                delta = e.originalEvent.detail;
                                        }
                                        
                                        zoomer[delta < 0 ? 'zoomIn' : 'zoomOut'](3);
                                    },
                                    keyPress: function(e) {
                                        var zoomer = item.popup.zoomer,
                                            type = e.type,
                                            key = e.keyCode || e.which;
                                        
                                        if (key != 32)
                                            return;
                                        
                                        zoomer.hasSpacePressed = type == 'keydown';
                                        
                                        if (zoomer.hasSpacePressed && zoomer.isZoomed())
                                            $readerNode.addClass('is-amoving');
                                        else
                                            $readerNode.removeClass('is-amoving');
                                    },
                                    mousedown: function(e) {
                                        var zoomer = item.popup.zoomer,
                                            $target = $(e.target),
                                            eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
                                            points = {
                                                x: eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX,
                                                y: eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY
                                            },
                                            callback = function() {
                                                // set current state
                                                zoomer.pointData = {
                                                    x: points.x,
                                                    y: points.y,
                                                    xTarget: points.x - zoomer.left,
                                                    yTarget: points.y - zoomer.top,
                                                };
                                                
                                                $('body').css({
                                                    '-webkit-user-select': 'none',
                                                    '-moz-user-select': 'none',
                                                    '-ms-user-select': 'none',
                                                    'user-select': 'none'
                                                });
                                                
                                                $readerNode.addClass('is-moving');

                                                // bind window mousemove event
                                                $(document).on('mousemove', zoomer.mousemove);
                                            };
                                        
                                        if (e.which != 1)
                                            return;
                                        
                                        if (zoomer.scale == 100 || zoomer.zoom == zoomer.scale)
                                            return;
                                        
                                        // check e.target
                                        if (!zoomer.hasSpacePressed && $target[0] != $imageEl[0] && !$target.is('.fileuploader-cropper'))
                                            return;

                                        // mousedown event
                                        if (eventType == 'mousedown') {
                                            callback();
                                        }

                                        // touchstart event
                                        if (eventType == 'touchstart') {
                                            zoomer.isTouchLongPress = true;

                                            // check if long press
                                            setTimeout(function() {
                                                if (!zoomer.isTouchLongPress)
                                                    return;
                                                delete zoomer.isTouchLongPress;
                                                callback();
                                            }, n.thumbnails.touchDelay ? n.thumbnails.touchDelay : 0);
                                        }

                                        // bind window mouseup event
                                        $(document).on('mouseup touchend', zoomer.mouseup);
                                    },
                                    mousemove: function(e) {
                                        var zoomer = item.popup.zoomer,
                                            eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
                                            points = {
                                                x: eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX,
                                                y: eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY
                                            },
                                            left = points.x - zoomer.pointData.xTarget,
                                            top = points.y - zoomer.pointData.yTarget;
                                        
                                        // fix the positon
                                        if (top > 0)
                                            top = 0;
                                        if (top < $node.height() - $readerNode.height())
                                            top = $node.height() - $readerNode.height();
                                        if ($readerNode.height() < $node.height()) {
                                            top = $node.height()/2 - $readerNode.height()/2;   
                                        }
                                        if ($readerNode.width() > $node.width()) {
                                            if (left > 0)
                                                left = 0;
                                            if (left < $node.width() - $readerNode.width())
                                                left = $node.width() - $readerNode.width();
                                        } else {
                                            left = $node.width()/2 - $readerNode.width()/2;
                                        }
                                        
                                        // set styles
                                        $readerNode.css({
                                            left: (zoomer.left = left) + 'px',
                                            top: (zoomer.top = top) + 'px'
                                        });
                                    },
                                    mouseup: function(e) {
                                        var zoomer = item.popup.zoomer;
                                        
                                        delete zoomer.pointData;
                                        $('body').css({
                                            '-webkit-user-select': '',
                                            '-moz-user-select': '',
                                            '-ms-user-select': '',
                                            'user-select': ''
                                        });
                                        
                                        $readerNode.removeClass('is-moving');
                                        
                                        $(document).off('mousemove', zoomer.mousemove);
                                        $(document).off('mouseup', zoomer.mouseup);
                                        
                                    },
                                    zoomIn: function(val) {
                                        var zoomer = item.popup.zoomer,
                                            step = val || 20;
                                        
                                        if (zoomer.zoom >= 100)
                                            return;
                                        
                                        zoomer.zoom = Math.min(100, zoomer.zoom + step);
                                        zoomer.updateView(zoomer.zoom);
                                    },
                                    zoomOut: function(val) {
                                        var zoomer = item.popup.zoomer,
                                            step = val || 20;
                                        
                                        if (zoomer.zoom <= zoomer.scale)
                                            return;
                                        
                                        zoomer.zoom = Math.max(zoomer.scale, zoomer.zoom - step);
                                        zoomer.updateView(zoomer.zoom);
                                    },
                                    updateView: function(val, input) {
                                        var zoomer = this,
                                            width = zoomer.getImageSize().width / 100 * val,
                                            height = zoomer.getImageSize().height / 100 * val,
                                            curWidth = $readerNode.width(),
                                            curHeight = $readerNode.height(),
                                            valueChanged = val && val != zoomer.scale;
                                        
                                        if (!zoomer.isActive)
                                            return zoomer.center();
                                        
                                        if (valueChanged)
                                            $readerNode.addClass('is-movable').css({
                                                width: width + 'px',
                                                height: height + 'px',
                                                maxWidth: 'none',
                                                maxHeight: 'none'
                                            });
                                        else
                                            $readerNode.removeClass('is-movable is-amoving').removeAttr('style');
                                        
                                        zoomer.zoom = val || zoomer.scale;
                                        zoomer.center(valueChanged ? [curWidth, curHeight, zoomer.left, zoomer.top] : null);
                                        
                                        zoomer.html.find('span').html(zoomer.zoom + '%');
                                        
                                        if (!input)
                                            zoomer.html.find('input').val(zoomer.zoom);
                                        
                                        if (val && item.popup.editor && item.popup.editor.cropper)
                                            item.popup.editor.cropper.resize(true);
                                    },
                                    isZoomed: function() {
                                        var zoomer = this;
                                        
                                        return zoomer.zoom > zoomer.scale;
                                    },
                                    getImageSize: function() {
                                        var zoomer = this;
                                        
                                        return {
                                            width: $imageEl.prop('naturalWidth'),
                                            height: $imageEl.prop('naturalHeight')
                                        };
                                    },
                                    getImageScale: function() {
                                        var zoomer = this;
                                        
                                        return Math.round(100 / ($imageEl.prop('naturalWidth') / $imageEl.width()));
                                    }
                                };
                            }
                            
                            item.popup.zoomer.init();
                        },
						
						/**
                         * save
                         * save edited image
						 * show cropping tools, only when popup is enabled
                         *
						 * @namespace editor
                         * @param {Object} item
                         * @void
                         */
						save: function(item, toBlob, mimeType, callback, preventThumbnailRender) {
							var inPopup = item.popup && item.popup.html && $('html').find(item.popup.html).length,
                                image = new Image(),
                                onload = function() {
									if (!item.reader.node)
										return;
									
                                    // update thumbnail
                                    var canvas = document.createElement('canvas'),
                                        ctx = canvas.getContext('2d'),
                                        image = this,
                                        rotationCf = [0, 180];

                                    // set canvas size and image
                                    canvas.width = item.reader.width;
                                    canvas.height = item.reader.height;
                                    ctx.drawImage(image, 0, 0, item.reader.width, item.reader.height);

                                    // rotate image
                                    if (typeof item.editor.rotation != 'undefined') {
                                        item.editor.rotation = item.editor.rotation || 0;

                                        canvas.width = rotationCf.indexOf(item.editor.rotation) > -1 ? item.reader.width : item.reader.height;
                                        canvas.height = rotationCf.indexOf(item.editor.rotation) > -1 ? item.reader.height : item.reader.width;

                                        var angle = item.editor.rotation*Math.PI/180,
                                            cw = canvas.width * 0.5,
                                            ch = canvas.height * 0.5;

                                        // clear context
                                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                                        // rotate context
                                        ctx.translate(cw, ch);
                                        ctx.rotate(angle);
                                        ctx.translate(-item.reader.width * 0.5, -item.reader.height * 0.5);

                                        // draw image and reset transform
                                        ctx.drawImage(image, 0, 0);
                                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                                    }

                                    // crop image
                                    if (item.editor.crop) {
                                        var cut = ctx.getImageData(item.editor.crop.left, item.editor.crop.top, item.editor.crop.width, item.editor.crop.height);

                                        canvas.width = item.editor.crop.width;
                                        canvas.height = item.editor.crop.height;

                                        // put image
                                        ctx.putImageData(cut, 0, 0);
                                    }

                                    // export image
                                    var type = mimeType || item.type || 'image/jpeg',
                                        quality = n.editor.quality || 90,
                                        exportDataURI = canvas.toDataURL(type, quality/100),
                                        nextStep = function(exportDataURI, img) {
                                            var data = !toBlob ? exportDataURI : f._assets.dataURItoBlob(exportDataURI, type);

                                            !preventThumbnailRender ? f.thumbnails.renderThumbnail(item, true, img || exportDataURI) : null;
                                            callback ? callback(data, item, l, p, o, s) : null;
                                            n.editor.onSave != null && typeof n.editor.onSave == "function" ? n.editor.onSave(data, item, l, p, o, s) : null;
                                            f.set('listInput', null);
                                        };

                                    // resize image if maxWidth
                                    if (n.editor.maxWidth || n.editor.maxHeight) {
                                        var img = new Image();

                                        img.src = exportDataURI;
                                        img.onload = function() {
                                            var canvas2 = document.createElement('canvas');

                                            // resize canvas
                                            f.editor.resize(img, canvas2, n.editor.maxWidth, n.editor.maxHeight, true, false);

                                            exportDataURI = canvas2.toDataURL(type, quality/100);
                                            nextStep(exportDataURI, img);
                                            canvas = ctx = canvas2 = null;
                                        };
                                    } else {
                                        nextStep(exportDataURI);
                                        canvas = ctx = null;
                                    }
                                };
							
							if (inPopup) {
								if (!item.popup.editor.hasChanges)
									return;
								
								var scale = item.popup.editor.scale || 1;
								
								item.editor.rotation = item.popup.editor.rotation || 0;
								if (item.popup.editor.cropper) {
									item.editor.crop = item.popup.editor.cropper.crop;
									
									item.editor.crop.width = item.editor.crop.width / item.popup.editor.cropper.crop.cfWidth / scale;
									item.editor.crop.left = item.editor.crop.left / item.popup.editor.cropper.crop.cfWidth / scale;
									item.editor.crop.height = item.editor.crop.height / item.popup.editor.cropper.crop.cfHeight / scale;
									item.editor.crop.top = item.editor.crop.top / item.popup.editor.cropper.crop.cfHeight / scale;
								}
							}
                            
                            if (f._assets.isMobile()) {
                                image.onload = onload;
                                image.src = item.reader.src;
                            } else if(item.reader.node) {
                                onload.call(item.reader.node);
                            } else {
								item.reader.read(function() {
									onload.call(item.reader.node);
								});
							}
						}
					},
					
					/**
                     * @namespace sorter
                     */
					sorter: {
						init: function() {
							p.on('mousedown touchstart', n.thumbnails._selectors.sorter, f.sorter.mousedown);
						},
						destroy: function() {
							p.off('mousedown touchstart', n.thumbnails._selectors.sorter, f.sorter.mousedown);
						},
						findItemAtPos: function(points) {
							var sort = f.sorter.sort,
								$list = sort.items.not(sort.item.html),
								$item = null;
							
							$list.each(function(i, el) {
								var $el = $(el);
								
								if (points.x > $el.offset().left && points.x < $el.offset().left + $el.outerWidth() &&
								  points.y > $el.offset().top && points.y < $el.offset().top + $el.outerHeight()) {
									$item = $el;
									return false;
								}
							});
							
							return $item;
						},
						mousedown: function(e) {
							var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
								$target = $(e.target),
								$item = $target.closest(n.thumbnails._selectors.item),
								item = f.files.find($item),
								points = {
									x: eventType == 'mousedown' || !$item.length ? e.pageX : e.originalEvent.touches[0].pageX,
									y: eventType == 'mousedown' || !$item.length ? e.pageY : e.originalEvent.touches[0].pageY
								},
								callback = function() {
									// set current state
									f.sorter.sort = {
										el: $target,
										item: item,
										items: l.find(n.thumbnails._selectors.item),
										x: points.x,
										y: points.y,
										xItem: points.x - $item.offset().left,
										yItem: points.y - $item.offset().top,
										left: $item.position().left,
										top: $item.position().top,
										width: $item.outerWidth(),
										height: $item.outerHeight(),
										placeholder: n.sorter.placeholder ? $(n.sorter.placeholder) : item.html.clone().addClass('fileuploader-sorter-placeholder').html('')
									};
									
									// disable user-select
									$('body').css({
										'-webkit-user-select': 'none',
										'-moz-user-select': 'none',
										'-ms-user-select': 'none',
										'user-select': 'none'
									});

									// bind window mousemove event
									$(document).on('mousemove touchmove', f.sorter.mousemove);
								};
							
							e.preventDefault();
                            
                            // off
                            if (f.sorter.sort)
                                f.sorter.mouseup();
							
							// prevent if there is no item
							if (!item)
								return;
							
							// prevent if target is selectorExclude
							if (n.sorter.selectorExclude && ($target.is(n.sorter.selectorExclude) || $target.closest(n.sorter.selectorExclude).length))
								return;
							
							// preventDefault();
							$(n.thumbnails._selectors.sorter).on('click drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel', function(e){ e.preventDefault(); });

							// mousedown event
							if (eventType == 'mousedown') {
								// bind cropping start event
								callback();
							}

							// touchstart event
							if (eventType == 'touchstart') {
								f.sorter.isTouchLongPress = true;

								// check if long press
								setTimeout(function() {
									if (!f.sorter.isTouchLongPress)
										return;
									
									delete f.sorter.isTouchLongPress;
									callback();
								}, n.thumbnails.touchDelay ? n.thumbnails.touchDelay : 0);
							}

							// bind window mouseup event
							$(document).on('mouseup touchend', f.sorter.mouseup);
						},
						mousemove: function(e) {
							var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
								sort = f.sorter.sort,
								item = sort.item,
                                $list = l.find(n.thumbnails._selectors.item),
								$container = $(n.sorter.scrollContainer || window),
                                scroll = {
                                    left: $(document).scrollLeft(),
                                    top: $(document).scrollTop(),
									containerLeft: $container.scrollLeft(),
									containerTop: $container.scrollTop()
                                },
								points = {
									x: eventType == 'mousedown' ? e.clientX : e.originalEvent.touches[0].clientX,
									y: eventType == 'mousedown' ? e.clientY : e.originalEvent.touches[0].clientY
								};
							
							e.preventDefault();
							
							// drag
							var left = points.x - sort.xItem,
								top = points.y - sort.yItem,
								leftContainer = points.x - ($container.prop('offsetLeft') || 0),
								topContainer = points.y - ($container.prop('offsetTop') || 0);
							
							// fix position
							if (left + sort.xItem > $container.width())
								left = $container.width() - sort.xItem;
							if (left + sort.xItem < 0)
								left = 0 - sort.xItem;
							if (top + sort.yItem  > $container.height())
								top = $container.height() - sort.yItem;
							if (top + sort.yItem < 0)
								top = 0 - sort.yItem;
							
							// scroll
							if (topContainer <= 0)
								$container.scrollTop(scroll.containerTop - 10);
							if (topContainer > $container.height())
								$container.scrollTop(scroll.containerTop + 10);
							if (leftContainer < 0)
								$container.scrollLeft(scroll.containerLeft - 10);
							if (leftContainer > $container.width())
								$container.scrollLeft(scroll.containerLeft + 10);
                            
							// set style
							item.html.addClass('sorting').css({
                                position: 'fixed',
								left: left,
								top: top,
								width: f.sorter.sort.width,
								height: f.sorter.sort.height
							});
							
							// position placeholder
							if (!l.find(sort.placeholder).length)
								item.html.after(sort.placeholder);
							sort.placeholder.css({
								width: f.sorter.sort.width,
								height: f.sorter.sort.height,
							});
							
							// set new position
							var $hoverEl = f.sorter.findItemAtPos({x: left + sort.xItem + scroll.left, y: top + sort.yItem + scroll.top});
							if ($hoverEl) {
                                // prevent drag issue
                                var directionX = sort.placeholder.offset().left != $hoverEl.offset().left,
                                    directionY = sort.placeholder.offset().top != $hoverEl.offset().top;
								if (f.sorter.sort.lastHover) {
									if (f.sorter.sort.lastHover.el == $hoverEl[0]) {
										if (directionY && f.sorter.sort.lastHover.direction == 'before' && points.y < f.sorter.sort.lastHover.y)
											return;
										if (directionY && f.sorter.sort.lastHover.direction == 'after' && points.y > f.sorter.sort.lastHover.y)
											return;
                                        
                                        if (directionX && f.sorter.sort.lastHover.direction == 'before' && points.x < f.sorter.sort.lastHover.x)
											return;
										if (directionX && f.sorter.sort.lastHover.direction == 'after' && points.x > f.sorter.sort.lastHover.x)
											return;
									}
								}
								
                                // insert element before/after in HTML
								var index = $list.index(item.html),
									hoverIndex = $list.index($hoverEl),
                                    direction = index > hoverIndex ? 'before' : 'after';
								
								$hoverEl[direction](sort.placeholder);
								$hoverEl[direction](item.html);
                                
                                // save last hover data
								f.sorter.sort.lastHover = {
									el: $hoverEl[0],
									x: points.x,
									y: points.y,
									direction: direction
								};
							}
						},
						mouseup: function() {
							var sort = f.sorter.sort,
								item = sort.item;
							
							// clear
							$('body').css({
								'-webkit-user-select': '',
								'-moz-user-select': '',
								'-ms-user-select': '',
								'user-select': ''
							});
                            
                            item.html.removeClass('sorting').css({
                                position: '',
                                left: '',
                                top: '',
                                width: '',
                                height: ''
                            });
							
							$(document).off('mousemove touchmove', f.sorter.mousemove);
							$(document).off('mouseup touchend', f.sorter.mouseup);
							
							sort.placeholder.remove();
                            delete f.sorter.sort;
							f.sorter.save();
						},
						save: function(isFromList) {
							var index = 0,
								list = [],
								cachedList = [],
								items = isFromList ? f._itFl : (n.thumbnails.itemPrepend) ? l.children().get().reverse() : l.children(),
								hasChanges;
							
							// set index for all files
							$.each(items, function(i, el) {
								var item = el.file ? el : f.files.find($(el));
								
								if (item) {
									// continue if not uploaded
                                    if (item.upload && !item.uploaded)
                                        return;
                                    
                                    // check for changes
									if (f.rendered && item.index != index && ((f._itSl && f._itSl.indexOf(item.id) != index) || true))
										hasChanges = true;
									
									item.index = index;
									list.push(item);
									cachedList.push(item.id);
									index++;
								}
							});
							
							// check for changes
							if (f._itSl && f._itSl.length != cachedList.length)
								hasChanges = true;
							f._itSl = cachedList;
							
							// replace list 
							if (hasChanges && list.length == f._itFl.length)
								f._itFl = list;
							
							// update listInput
							if (!isFromList)
								f.set('listInput', 'ignoreSorter');
							
							// onSort callback
							hasChanges && n.sorter.onSort != null && typeof n.sorter.onSort == "function" ? n.sorter.onSort(list, l, p, o, s) : null;
						}
					},
                    
                    /**
                     * @namespace upload
                     */
                    upload: {
						/**
                         * prepare
                         * prepare item ajax data and also item ajax methods
                         *
						 * @namespace upload
                         * @param {Object} item
						 * @param {bool} force_send - force ajax sending after prepare
                         * @void
                         */
                        prepare: function(item, force_send) {
							// create item upload object
                            item.upload = {
                                url: n.upload.url,
                                data: $.extend({}, n.upload.data),
                                formData: new FormData(),
                                type: n.upload.type || 'POST',
                                enctype: n.upload.enctype || 'multipart/form-data',
                                cache: false,
                                contentType: false,
                                processData: false,
								chunk: item.upload ? item.upload.chunk : null,
                                
								status: null,
                                send: function() {
                                    f.upload.send(item, true);
                                },
                                cancel: function(isFromRemove) {
                                    f.upload.cancel(item, isFromRemove);
                                }
                            };
							
                            // add file to formData
                            item.upload.formData.append(s.attr('name'), item.file, (item.name ? item.name : false));
                            
                            if (n.upload.start || force_send)
                                f.upload.send(item, force_send);
                        },
						/**
                         * send
                         * send item ajax
                         *
						 * @namespace upload
                         * @param {Object} item
						 * @param {bool} force_send - skip the synchron functions and force ajax sending
                         * @void
                         */
                        send: function(item, force_send) {
                            // skip if upload settings were not prepared
							// only made for safety
                            if (!item.upload)
                                return;
							
							var setItemUploadStatus = function(status) {
									if (item.html)
										item.html.removeClass('upload-pending upload-loading upload-cancelled upload-failed upload-success').addClass('upload-' + (status || item.upload.status));
								},
								loadNextItem = function() {
									var i = 0;
									
									if (f._pfuL.length > 0) {
										f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
										while (i < f._pfuL.length) {
											if (f._itFl.indexOf(f._pfuL[i]) > -1 && f._pfuL[i].upload && !f._pfuL[i].upload.$ajax) {
												f.upload.send(f._pfuL[i], true);
												break;
											} else {
												f._pfuL.splice(i, 1);
											}
											i++;
										}
									}
								};
							
							// synchron upload
                            if (n.upload.synchron && !item.upload.chunk) {
								// add pending status to item
								item.upload.status = 'pending';
								if (item.html)
									setItemUploadStatus();
								
                            	// check pending list
								if (force_send) {
									f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
								} else {
									f._pfuL.indexOf(item) == -1 ? f._pfuL.push(item) : null;
									if (f._pfuL.length > 1) {
										return;
									}
								}
                            }
                            
                            // chunk upload
							if (n.upload.chunk && item.file.slice) {
								var chunkSize = n.upload.chunk * 1e+6,
									chunks = Math.ceil(item.size/chunkSize, chunkSize);
								
								if (chunks > 1 && !item.upload.chunk)
									item.upload.chunk = {
										name: item.name,
										size: item.file.size,
										type: item.file.type,
										chunkSize: chunkSize,
										temp_name: item.name,
										
                                        loaded: 0,
										total: chunks,
										i: -1
									};
								
								if (item.upload.chunk) {
									item.upload.chunk.i++;
									delete item.upload.chunk.isFirst;
									delete item.upload.chunk.isLast;
									if (item.upload.chunk.i == 0)
										item.upload.chunk.isFirst = true;
									if (item.upload.chunk.i == item.upload.chunk.total - 1)
										item.upload.chunk.isLast = true;
									
									if (item.upload.chunk.i <= item.upload.chunk.total - 1) {
										var offset = item.upload.chunk.i * item.upload.chunk.chunkSize,
											filePart = item.file.slice(offset, offset + item.upload.chunk.chunkSize);
										
										item.upload.formData = new FormData();
										item.upload.formData.append(s.attr('name'), filePart);
										item.upload.data._chunkedd = JSON.stringify(item.upload.chunk);
									} else {
										delete item.upload.chunk;
									}
								}
							}
                            
                            // upload.beforeSend callback
							if (n.upload.beforeSend && $.isFunction(n.upload.beforeSend) && n.upload.beforeSend(item, l, p, o, s) === false) {
                                delete item.upload.chunk;
								setItemUploadStatus();
								loadNextItem();
								return;
							}
                            
							// add uploading class to parent element
							p.addClass('fileuploader-is-uploading');
							
                            // add loading status to item
							if (item.upload.$ajax)
								item.upload.$ajax.abort();
							delete item.upload.$ajax;
                            delete item.upload.send;
							item.upload.status = 'loading';
                            if (item.html) {
								if (n.thumbnails._selectors.start)
                                    item.html.find(n.thumbnails._selectors.start).remove();
                                setItemUploadStatus();
							}
							
                            // add upload data to formData
                            if (item.upload.data) {
                                for (var k in item.upload.data) {
									if (!item.upload.data.hasOwnProperty(k))
										continue;
                                    item.upload.formData.append(k, item.upload.data[k]);
                                }
                            }
                            
                            item.upload.data = item.upload.formData;
                            item.upload.xhr = function() {
                                var xhr = $.ajaxSettings.xhr(),
                                    xhrStartedAt = item.upload.chunk && item.upload.chunk.xhrStartedAt ? item.upload.chunk.xhrStartedAt : new Date();

                                if (xhr.upload) {
                                    xhr.upload.addEventListener("progress", function(e) {
										if (item.upload.$ajax) {
											item.upload.$ajax.total = item.upload.chunk ? item.upload.chunk.size : e.total;
											item.upload.$ajax.xhrStartedAt = xhrStartedAt;
										}
                                        f.upload.progressHandling(e, item, xhrStartedAt);
                                    }, false);
                                }
                                return xhr;
                            };
                            item.upload.complete = function(jqXHR, textStatus) {
								if (item.upload.chunk && !item.upload.chunk.isLast && textStatus == 'success')
									return f.upload.send(item);
                                loadNextItem();
                                
                                var g = true;
                                $.each(f._itFl, function(i, a) {
                                    if (a.upload && a.upload.$ajax)
                                        g = false;
                                });
                                if (g) {
                                    p.removeClass('fileuploader-is-uploading');
                                    n.upload.onComplete != null && typeof n.upload.onComplete == "function" ? n.upload.onComplete(l, p, o, s, jqXHR, textStatus) : null;
                                }
                            };
                            item.upload.success = function(data, textStatus, jqXHR) {
								if (item.upload.chunk && !item.upload.chunk.isLast) {
									try {
										var json = JSON.parse(data);
										
										item.upload.chunk.temp_name = json.fileuploader.temp_name;
									} catch (e) { }
									return;
								}
                                delete item.upload.chunk;
								f.upload.progressHandling(null, item, item.upload.$ajax.xhrStartedAt, true);
                                item.uploaded = true;
                                delete item.upload;
								item.upload = {status: 'successful', resend: function() { f.upload.retry(item); }};
                                
                                if (item.html)
                                    setItemUploadStatus();
								
                                n.upload.onSuccess != null && $.isFunction(n.upload.onSuccess) ? n.upload.onSuccess(data, item, l, p, o, s, textStatus, jqXHR) : null;
                                f.set('listInput', null);
                            };
                            item.upload.error = function(jqXHR, textStatus, errorThrown) {
								if (item.upload.chunk)
									item.upload.chunk.i = Math.max(-1, item.upload.chunk.i - 1);
                                item.uploaded = false;
								item.upload.status = item.upload.status == 'cancelled' ? item.upload.status : 'failed';
								item.upload.retry = function() { f.upload.retry(item); };
                                delete item.upload.$ajax;
								
                                if (item.html)
                                    setItemUploadStatus();
								
                                n.upload.onError != null && $.isFunction(n.upload.onError) ? n.upload.onError(item, l, p, o, s, jqXHR, textStatus, errorThrown) : null;
                            };
                            
                            // send
                            item.upload.$ajax = $.ajax(item.upload);
                        },
						/**
                         * cancel
                         * cancel item ajax request
                         *
						 * @namespace upload
                         * @param {Object} item
                         * @void
                         */
                        cancel: function(item, isFromRemove) {
                            if (item && item.upload) {
                                item.upload.status = 'cancelled';
                                delete item.upload.chunk;
                                item.upload.$ajax ? item.upload.$ajax.abort() : null;
								delete item.upload.$ajax;
                                !isFromRemove ? f.files.remove(item) : null;
                            }
                        },
						/**
                         * retry
                         * retry item ajax upload
                         *
						 * @namespace upload
                         * @param {Object} item
                         * @void
                         */
                        retry: function(item) { 
                            if (item && item.upload) {
                                if (item.html && n.thumbnails._selectors.retry)
                                    item.html.find(n.thumbnails._selectors.retry).remove();
								
                                f.upload.prepare(item, true);
                            }
                        },
						/**
                         * progressHandling
                         * item ajax progress function
                         *
						 * @namespace upload
                         * @param {Event} e - xhr event
						 * @param {Object} item
						 * @param {Date} xhrStartedAt - request started Date()
						 * @param {Boolean} isManual - check if function was manually called
                         * @void
                         */
                        progressHandling: function(e, item, xhrStartedAt, isManual) {
							if (!e && isManual && item.upload.$ajax)
								e = {total: item.upload.$ajax.total, loaded: item.upload.$ajax.total, lengthComputable: true};
							
                            if (e.lengthComputable) {
                                var loaded = e.loaded + (item.upload.chunk ? item.upload.chunk.loaded : 0),
                                    total = item.upload.chunk ? item.upload.chunk.size : e.total,
                                    percentage = Math.round(loaded * 100 / total),
									timeStarted = item.upload.chunk && item.upload.chunk.xhrStartedAt ? item.upload.chunk.xhrStartedAt : xhrStartedAt,
                                    secondsElapsed = (new Date().getTime() - timeStarted.getTime()) / 1000,
                                    bytesPerSecond = secondsElapsed ? loaded / secondsElapsed : 0,
                                    remainingBytes = Math.max(0, total - loaded),
                                    secondsRemaining = Math.max(0, secondsElapsed ? remainingBytes / bytesPerSecond : 0),
                                    data = {
                                        loaded: loaded,
                                        loadedInFormat: f._assets.bytesToText(loaded),
                                        total: total,
                                        totalInFormat: f._assets.bytesToText(total),
                                        percentage: percentage,
                                        secondsElapsed: secondsElapsed,
                                        secondsElapsedInFormat: f._assets.secondsToText(secondsElapsed, true),
                                        bytesPerSecond: bytesPerSecond,
                                        bytesPerSecondInFormat: f._assets.bytesToText(bytesPerSecond) + '/s',
                                        remainingBytes: remainingBytes,
                                        remainingBytesInFormat: f._assets.bytesToText(remainingBytes),
                                        secondsRemaining: secondsRemaining,
                                        secondsRemainingInFormat: f._assets.secondsToText(secondsRemaining, true)
                                    };
								
								if (item.upload.chunk) {
                                    if (item.upload.chunk.isFirst)
										item.upload.chunk.xhrStartedAt = xhrStartedAt;
									if (e.loaded == e.total && !item.upload.chunk.isLast)
										item.upload.chunk.loaded += Math.max(e.total, item.upload.chunk.total/item.upload.chunk.chunkSize);
								}
                                
								if (data.percentage > 99 && !isManual)
									data.percentage = 99;
								
								// upload.onProgress callback
                                n.upload.onProgress && $.isFunction(n.upload.onProgress) ? n.upload.onProgress(data, item, l, p, o, s) : null;
                            }
                        }
                    },
					
                    /**
                     * @namespace dragDrop
                     */
					dragDrop: {
						/**
                         * onDragEnter
                         * on dragging file on the drag container
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @void
                         */
						onDragEnter: function(e) {
                            clearTimeout(f.dragDrop._timer);
                            
							// add dragging class to parent element
                            n.dragDrop.container.addClass('fileuploader-dragging');
							
							// set feedback caption
                            f.set('feedback', f._assets.textParse(n.captions.drop));
                            
							// dragDrop.onDragEnter callback
                            n.dragDrop.onDragEnter != null && $.isFunction(n.dragDrop.onDragEnter) ? n.dragDrop.onDragEnter(e, l, p, o, s) : null;
                        },
						/**
                         * onDragLeave
                         * on dragging leave from the drag container
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @void
                         */
                        onDragLeave: function(e) {
                            clearTimeout(f.dragDrop._timer);
                            
                            f.dragDrop._timer = setTimeout(function(e) {
								// check if not the childNodes from dragging container are hovered
                                if (!f.dragDrop._dragLeaveCheck(e)) {
                                    return false;
                                }
								
								// remove dragging class from parent element
                                n.dragDrop.container.removeClass('fileuploader-dragging');
                                
								// set feedback caption
								f.set('feedback', null);
                                
								// dragDrop.onDragLeave callback
                                n.dragDrop.onDragLeave != null && $.isFunction(n.dragDrop.onDragLeave) ? n.dragDrop.onDragLeave(e, l, p, o, s) : null;
                            }, 100, e);
                        },
						/**
                         * onDrop
                         * on drop files
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @void
                         */
                        onDrop: function(e) {
                            clearTimeout(f.dragDrop._timer);
                            
							// remove dragging class from parent element
                            n.dragDrop.container.removeClass('fileuploader-dragging');
                            
							// set feedback caption 
							f.set('feedback', null);
							
							// check if event has dropped files and use them
                            if (e && e.originalEvent && e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length) {
								if (f.isUploadMode()) {
				                	f.onChange(e, e.originalEvent.dataTransfer.files);
								} else {
									s.prop('files', e.originalEvent.dataTransfer.files).trigger('change');
								}
                            }
                            
							// dragDrop.onDrop callback
                            n.dragDrop.onDrop != null && $.isFunction(n.dragDrop.onDrop) ? n.dragDrop.onDrop(e, l, p, o, s) : null;
                        },
						/**
                         * _dragLeaveCheck
                         * check by the living from drag container if not the childNodes are hovered
                         *
						 * @namespace dragDrop
                         * @param {Event} e - jQuery event
                         * @return {bool} return the leaving statement
                         */
                        _dragLeaveCheck: function(e) {
                            var related = $(e.currentTarget),
                                insideEls;
							
                            if (!related.is(n.dragDrop.container)) {
                                insideEls = n.dragDrop.container.find(related);

                                if (insideEls.length) {
                                    return false;
                                }
                            }
							
                            return true;
                        }
					},
                    
                    /**
                     * @namespace clipboard
                     */
                    clipboard: {
						/**
                         * paste
                         * on pasting a file from clipboard on page
                         *
						 * @namespace clipboard
                         * @param {Event} e - jQuery event
                         * @void
                         */
                        paste: function(e) {
                            // check if the input is into view and if clipboard is supported and if there are files in the clipboard
                            if (!f._assets.isIntoView(o) || !e.originalEvent.clipboardData || !e.originalEvent.clipboardData.items || !e.originalEvent.clipboardData.items.length)
                                return;
                            
                            var items = e.originalEvent.clipboardData.items;
							
							// extra clean
							f.clipboard.clean();
							
							for (var i = 0; i < items.length; i++) {
								if (items[i].type.indexOf("image") !== -1 || items[i].type.indexOf("text/uri-list") !== -1) {
									var blob = items[i].getAsFile(),
										ms = n.clipboardPaste > 1 ? n.clipboardPaste : 2000;
									
									if (blob) {
										// create clipboard file name
										blob._name = f._assets.generateFileName(blob.type.indexOf("/") != -1 ? blob.type.split("/")[1].toString().toLowerCase() : 'png', 'Clipboard ');

										// set clipboard timer
										f.set('feedback', f._assets.textParse(n.captions.paste, {ms: ms/1000}));
										f.clipboard._timer = setTimeout(function() {
											f.set('feedback', null);
											f.onChange(e, [blob]);
										}, ms-2);
									}
								}
							}
                        },
						/**
                         * clean
                         * clean the clipboard timer
                         *
						 * @namespace clipboard
                         * @void
                         */
                        clean: function() {
                            if (f.clipboard._timer) {
                                clearTimeout(f.clipboard._timer);
								delete f.clipboard._timer;
								
								// set feedback caption
                                f.set('feedback', null);
                            }
                        }
                    },
                    
                    /**
                     * @namespace files
                     */
					files: {
						/**
                         * add
                         * add a file to memory
                         *
						 * @namespace files
                         * @param {Object} file
						 * @param {String} prop - type of adding a file to memory
                         * @return {Number} index - index of the item in memory array
                         */
						add: function(file, prop) {
							var name = file._name || file.name,
								size = file.size,
								size2 = f._assets.bytesToText(size),
								type = file.type,
								format = type ? type.split('/', 1).toString().toLowerCase() : '',
								extension = name.indexOf('.') != -1 ? name.split('.').pop().toLowerCase() : '',
								title = name.substr(0, name.length - (name.indexOf('.') != -1 ? extension.length+1 : extension.length)),
								data = file.data || {},
								src = file.file || file,
								id = prop == 'updated' ? file.id : Date.now(),
								index,
								item,
                                data = {
                                    name: name,
                                    title: title,
                                    size: size,
                                    size2: size2,
                                    type: type,
                                    format: format,
                                    extension: extension,
                                    data: data,
                                    file: src,
                                    reader: {
                                        read: function(callback, type, force) { return f.files.read(item, callback, type, force); }
                                    },
                                    id: id,

                                    input: prop == 'choosed' ? s : null,
                                    html: null,
                                    choosed: prop == 'choosed',
                                    appended: prop == 'appended' || prop == 'updated',
                                    uploaded: prop == 'uploaded'
                                };
                            
                            if (prop != 'updated') {
				                f._itFl.push(data);
                                index = f._itFl.length - 1;
                                item = f._itFl[index];
                            } else {
                                index = f._itFl.indexOf(file);
                                f._itFl[index] = item = data;
                            }
							
							item.remove = function() {
								f.files.remove(item);
							};
							
							if (n.editor && format == 'image')
								item.editor = {
									rotate: function(deg) {
										f.editor.rotate(item, deg);
									},
									cropper: function(data) {
										f.editor.crop(item, data);
									},
									save: function(callback, toBlob, mimeType, preventThumbnailRender) {
										f.editor.save(item, toBlob, mimeType, callback, preventThumbnailRender);
									}
								};
							
							if (file.local)
								item.local = file.local;
							
							return index;
						},
                        /**
                         * read
                         * read choosed file and sends the information to callback
                         *
						 * @namespace files
                         * @param {Object} item
                         * @param {Function} callback
                         * @param {String} type - FileReader readAs type
                         * @param {Boolean} force - force a new file read and ignore the existing
                         * @param {Boolean} isThumb - is thumbnail
                         * @return {null}
                         */
                        read: function(item, callback, type, force, isThumb) {
                            if (f.isFileReaderSupported() && !item.data.readerSkip) {
                                var reader = new FileReader(),
                                    URL = window.URL || window.webkitURL,
                                    hasThumb = isThumb && item.data.thumbnail,
                                    useFile = typeof item.file != 'string',
                                    execute_callbacks = function() {
                                        var _callbacks = item.reader._callbacks || [];
										
										if (item.reader._timer) {
											clearTimeout(item.reader._timer);
											delete item.reader._timer;
										}
										
                                        delete item.reader._callbacks;
                                        delete item.reader._FileReader;
                                        
                                        for(var i = 0; i<_callbacks.length; i++) {
                                            $.isFunction(_callbacks[i]) ? _callbacks[i](item, l, p, o, s) : null;
                                        }
                                        
                                        n.onFileRead && $.isFunction(n.onFileRead) ? n.onFileRead(item, l, p, o, s) : null;
                                    };
								
                                if ((!item.reader.src && !item.reader._FileReader) || force)
                                    item.reader = {
                                        _FileReader: reader,
                                        _callbacks: [],
                                        read: item.reader.read
                                    };
                                
                                if (item.reader.src && !force)
                                    return callback && $.isFunction(callback) ? callback(item, l, p, o, s) : null;
                                
                                if (callback && item.reader._callbacks) {
                                    item.reader._callbacks.push(callback);
                                    
                                    if (item.reader._callbacks.length > 1)
                                        return;
                                }
                                
								if (item.format == 'astext') {
									reader.onload = function(e) {
										var node = document.createElement('div');
										
										item.reader.node = node;
          								item.reader.src = e.target.result;
										item.reader.length = e.target.result.length;
										
										node.innerHTML = item.reader.src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
										
										execute_callbacks();
									};
									reader.onerror = function() {
										execute_callbacks();
                                        item.reader = { read: item.reader.read };
									};
									if (useFile)
                                        reader.readAsText(item.file);
                                    else
                                        $.ajax({
											url : item.file,
											success : function(result){
												reader.onload({target: {result: result}});
											},
											error: function() {
												reader.onerror();
											}
										});
								} else if (item.format == 'image' || hasThumb) {
                                    var src;
                                    
                                    reader.onload = function(e) {
                                        var node = new Image(),
                                            loadNode = function() {
                                                if (item.data && item.data.readerCrossOrigin)
                                                    node.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                                node.src = e.target.result + ((item.data.readerForce || force) && !useFile && !hasThumb && e.target.result.indexOf('data:image') == -1 ? (e.target.result.indexOf('?') == -1 ? '?' : '&') + 'd=' + Date.now() : '');
                                                node.onload = function() {
                                                    // exif rotate image
                                                    if (item.reader.exifOrientation) {
                                                        var canvas = document.createElement('canvas'),
                                                            ctx = canvas.getContext('2d'),
                                                            image = node,
                                                            rotation = item.reader.exifOrientation,
                                                            rotationCf = [0, 180];

                                                        // set canvas size and image
                                                        canvas.width = image.naturalWidth;
                                                        canvas.height = image.naturalHeight;
                                                        ctx.drawImage(image, 0, 0);

                                                        // rotate image
                                                        canvas.width = rotationCf.indexOf(rotation) > -1 ? image.naturalWidth : image.naturalHeight;
                                                        canvas.height = rotationCf.indexOf(rotation) > -1 ? image.naturalHeight : image.naturalWidth;

                                                        var angle = rotation*Math.PI/180,
                                                            cw = canvas.width * 0.5,
                                                            ch = canvas.height * 0.5;

                                                        // clear context
                                                        ctx.clearRect(0, 0, canvas.width, canvas.height);

                                                        // rotate context
                                                        ctx.translate(cw, ch);
                                                        ctx.rotate(angle);
                                                        ctx.translate(-image.naturalWidth * 0.5, -image.naturalHeight * 0.5);

                                                        // draw image and reset transform
                                                        ctx.drawImage(image, 0, 0);
                                                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                                                        
                                                        node.src = canvas.toDataURL(item.type, 1);

                                                        delete item.reader.exifOrientation;
                                                        return;
                                                    }
                                                    
                                                    item.reader.node = node;
                                                    item.reader.src = node.src;
                                                    item.reader.width = node.width;
                                                    item.reader.height = node.height;
                                                    item.reader.ratio = f._assets.pxToRatio(item.reader.width, item.reader.height);
                                                    if (src)
                                                        URL.revokeObjectURL(src);
                                                    
                                                    execute_callbacks();
                                                    
                                                    if (hasThumb)
                                                        item.reader = { read: item.reader.read };
                                                };
                                                node.onerror = function() {
                                                    execute_callbacks();
                                                    item.reader = { read: item.reader.read };
                                                };
                                            };
                                        
                                        // exif rotation
                                        if (n.thumbnails.exif && item.choosed) {
                                            f._assets.getExifOrientation(item.file, function(orientation) {
                                                if (orientation)
                                                    item.reader.exifOrientation = orientation;
                                                
                                                loadNode();
                                            });
                                        } else {
                                            loadNode();
                                        }
                                    };
                                    reader.onerror = function() {
                                        execute_callbacks();
                                        item.reader = { read: item.reader.read };
                                    };
									
									if (!hasThumb && Math.round(item.size / 1e+6) > n.reader.maxSize)
										return reader.onerror();
                                    
                                    if (useFile) {
                                        if (n.thumbnails.useObjectUrl && n.thumbnails.canvasImage && URL)
                                            reader.onload({target: {result: src = URL.createObjectURL(item.file)}});
                                        else
                                            reader.readAsDataURL(item.file);
                                    } else {
                                        reader.onload({target: {result: (hasThumb ? item.data.thumbnail : item.file)}});
                                    }
                                } else if (item.format == 'video' || item.format == 'audio') {
                                    var node = document.createElement(item.format),
                                        canPlay = node.canPlayType(item.type),
                                        src;
                                    
                                    reader.onerror = function() {
                                        item.reader.node = null;
                                        execute_callbacks();
                                        item.reader = { read: item.reader.read };
                                    };
                                    
                                    if (URL && canPlay !== '') {
                                        if (isThumb && !n.thumbnails.videoThumbnail) {
                                            item.reader.node = node;
                                            execute_callbacks();
                                            item.reader = { read: item.reader.read };
                                            return;
                                        }
                                        src = useFile ? URL.createObjectURL(item.file) : item.file;
                                        node.onloadedmetadata = function() {
                                            item.reader.node = node;
                                            item.reader.src = node.src;
                                            item.reader.duration = node.duration;
                                            item.reader.duration2 = f._assets.secondsToText(node.duration);
                                            
                                            if (item.format == 'video') {
                                                item.reader.width = node.videoWidth;
                                                item.reader.height = node.videoHeight;
												item.reader.ratio = f._assets.pxToRatio(item.reader.width, item.reader.height);
                                            }
                                        };
                                        node.onerror = function() {
                                            execute_callbacks();
                                            item.reader = { read: item.reader.read };
                                        };
                                        node.onloadeddata = function() {
                                            if (item.format == 'video') {
                                                var canvas = document.createElement('canvas'),
                                                    context = canvas.getContext('2d');

                                                canvas.width = node.videoWidth;
                                                canvas.height = node.videoHeight;
                                                context.drawImage(node, 0, 0, canvas.width, canvas.height);
                                                item.reader.frame = !f._assets.isBlankCanvas(canvas) ? canvas.toDataURL() : null;

                                                canvas = context = null;
                                            }
                                            
                                            execute_callbacks();
                                        };
                                        
										// dirty fix
                                        setTimeout(function() {
											if (item.data && item.data.readerCrossOrigin)
												node.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                            node.src = src + '#t=1';
                                        }, 100);
                                    } else {
                                        reader.onerror();
                                    }
                                } else if(item.type == 'application/pdf' && n.thumbnails.pdf) {
									var node = document.createElement('iframe'),
										src = useFile ? URL.createObjectURL(item.file) : (n.thumbnails.pdf.urlPrefix || '') + item.file;
									
									if (n.thumbnails.pdf.viewer || f._assets.hasPlugin('pdf')) {
										node.onload = function() {
											item.reader.node = node;
											item.reader.src = node.src;
											node.style.display = '';
											execute_callbacks();
										};
										node.src = (n.thumbnails.pdf.viewer || '') + src;
										node.style.display = 'none';
										document.body.appendChild(node);
									} else {
										execute_callbacks();
									}
								} else {
                                    reader.onload = function(e) {
                                        item.reader.src = e.target.result;
                                        item.reader.length = e.target.result.length;
                                        
                                        execute_callbacks();
                                    };
									reader.onerror = function(e) {
										execute_callbacks();
										item.reader = { read: item.reader.read };
									};
                                    useFile ? reader[type || 'readAsBinaryString'](item.file) : execute_callbacks();
                                }
                                
                                item.reader._timer = setTimeout(reader.onerror, isThumb ? n.reader.thumbnailTimeout : n.reader.timeout);
                            } else {
                                if (callback)
                                    callback(item, l, p, o, s);
                            }
							
                            
                            return null;
                        },
						/**
                         * list
                         * generate a list of files
                         *
						 * @namespace files
                         * @param {bool} toJSON - generate a JSON list
						 * @param {String} customKey - use a custom item attribute by generating
						 * @param {Boolean} triggered - function was triggered from the API
						 * @param {String} additional - additional settings
                         * @return {String|Object}
                         */
						list: function(toJson, customKey, triggered, additional) {
							var files = [];
							
							// save sorter
							if (n.sorter && !triggered && (!additional || additional != 'ignoreSorter'))
								f.sorter.save(true);
							
							$.each(f._itFl, function(i, a) {
								var file = a;
								
								if (file.upload && !file.uploaded)
									return true;
								
								if (customKey || toJson)
									file = (file.choosed && !file.uploaded ? '0:/' : '') + (customKey && f.files.getItemAttr(a, customKey) !== null ? f.files.getItemAttr(file, customKey) : (file.local || file[typeof file.file == "string" ? "file" : "name"]));
								
								if (toJson) {
									file = {file: file};
									
									// editor properties
									// add only if file was cropped or rotated
									if (a.editor && (a.editor.crop || a.editor.rotation)) {
										file.editor = {};
										if (a.editor.rotation)
											file.editor.rotation = a.editor.rotation;
										if (a.editor.crop)
											file.editor.crop = a.editor.crop;
									}
									
									// sorting property
									if (typeof a.index !== 'undefined') {
										file.index = a.index;
									}
									
									// custom properties
									if (a.data && a.data.listProps) {
										for (var key in a.data.listProps) {
											file[key] = a.data.listProps[key];
										}
									}
								}
								
								files.push(file);
							});
                            
                            files = n.onListInput && $.isFunction(n.onListInput)? n.onListInput(files, f._itFl, n.listInput, l, p, o, s) : files;
							
							return !toJson ? files : JSON.stringify(files);
						},
						/**
                         * check
                         * check the files
                         *
						 * @namespace files
                         * @param {Object} item
						 * @param {Array} files
						 * @param {bool} fullCheck - check some parameters that should be checked only once
                         * @return {bool|Array} r
                         */
						check: function(item, files, fullCheck) {
							var r = ["warning", null, false, false];
							
							if (n.limit != null && fullCheck && files.length + f._itFl.length - 1 > n.limit) {
                                r[1] = f._assets.textParse(n.captions.errors.filesLimit);
                                r[3] = true;
                                return r;
							}
							if (n.maxSize != null && fullCheck) {
								var g = 0;
								$.each(f._itFl, function(i, a) {
                                    g += a.size;
								}); g -= item.size;
								$.each(files, function(i, a) {
									g += a.size;
								});

								if (g > Math.round(n.maxSize * 1e+6)) {
                                    r[1] = f._assets.textParse(n.captions.errors.filesSizeAll);
                                    r[3] = true;
                                    return r;
								}
							}
                            if (n.onFilesCheck != null && $.isFunction(n.onFilesCheck) && fullCheck) {
								var onFilesCheck = n.onFilesCheck(files, n, l, p, o, s);
								if (onFilesCheck === false) {
                                    r[3] = true;
									return r;
								}
							}
							if (n.extensions != null && $.inArray(item.extension, n.extensions) == -1 && !n.extensions.filter(function(val) { return item.type.length && (val.indexOf(item.type) > -1 || val.indexOf(item.format + '/*') > -1) }).length) {
								r[1] = f._assets.textParse(n.captions.errors.filesType, item);
								return r;
							}
							if (n.disallowedExtensions != null && ($.inArray(item.extension, n.disallowedExtensions) > -1 || n.disallowedExtensions.filter(function(val) { return !item.type.length || val.indexOf(item.type) > -1 || val.indexOf(item.format + '/*') > -1 }).length)) {
								r[1] = f._assets.textParse(n.captions.errors.filesType, item);
								return r;
							}
							if (n.fileMaxSize != null && item.size > n.fileMaxSize * 1e+6) {
								r[1] = f._assets.textParse(n.captions.errors.fileSize, item);
								return r;
							}
							if (item.size == 0 && item.type == "") {
								r[1] = f._assets.textParse(n.captions.errors.remoteFile, item);
								return r;
							}
							if (item.size == 4096 && item.type == "") {
								r[1] = f._assets.textParse(n.captions.errors.folderUpload, item);
								return r;
							}
							if (!n.skipFileNameCheck) {
								var g = false;
                                
								$.each(f._itFl, function(i, a) {
							  		if (a != item && a.choosed == true && a.file && a.name == item.name) {
										g = true;
                                        
                                        if (a.file.size == item.size && a.file.type == item.type && (item.file.lastModified && a.file.lastModified ? a.file.lastModified == item.file.lastModified : true) && files.length > 1) {
                                            r[2] = true;
                                        } else {
                                            r[1] = f._assets.textParse(n.captions.errors.fileName, item);
                                            r[2] = false;
                                        }
                                        
										return false;
									}
								});
								
								if (g) {
									return r;
								}
							}
							
							return true;
						},
						/**
                         * append
                         * check the files
                         *
						 * @namespace files
                         * @param {Array} files
                         * @return {bool|Object}
                         */
						append: function(files) {
							files = $.isArray(files) ? files : [files];
							
							if (files.length) {
								var item;
								for (var i = 0; i < files.length; i++) {
									if (!f._assets.keyCompare(files[i], ['name', 'file', 'size', 'type'])) {
										continue;
									}
									
									item = f._itFl[f.files.add(files[i], 'appended')];
									
									n.thumbnails ? f.thumbnails.item(item) : null;
								}
								
								// set feedback caption
								f.set('feedback', null);
								
								// set listInput value
								f.set('listInput', null);
								
								// afterSelect callback
								n.afterSelect && $.isFunction(n.afterSelect) ? n.afterSelect(l, p, o, s) : null;
								
								return files.length == 1 ? item : true;
							}
						},
                        /**
                         * update
                         * update an item using new information
                         *
						 * @namespace files
                         * @param {Object} item
                         * @param {Object} data
                         * @return void
                         */
                        update: function(item, data) {
                            if (f._itFl.indexOf(item) == -1 || (item.upload && item.upload.$ajax))
                                return;
                            
                            var oldItem = item,
                                index = f.files.add($.extend(item, data), 'updated'),
                                item = f._itFl[index];
                            
                            if (item.popup && item.popup.close)
                                item.popup.close();

                            if (n.thumbnails && oldItem.html)
                                f.thumbnails.item(item, oldItem.html);

                            f.set('listInput', null);
                        },
						/**
                         * find
                         * find an item in memory using html element
                         *
						 * @namespace files
                         * @param {jQuery Object} html
                         * @return {null,Object}
                         */
                        find: function(html) {
                            var item = null;
                            
                            $.each(f._itFl, function(i, a) {
                                if (a.html && a.html.is(html)) {
                                    item = a;
                                    return false;
                                }
                            });
                            
                            return item;
                        },
						/**
                         * remove
                         * remove an item from memory and html
                         *
						 * @namespace files
                         * @param {Object} item
                         * @param {bool} isFromCheck - if removing function was triggered by checking a file
                         * @return {null,Object}
                         */
						remove: function(item, isFromCheck) {
							// onRemove callback
							if (!isFromCheck && n.onRemove && $.isFunction(n.onRemove) && n.onRemove(item, l, p, o, s) === false)
								return;
							
							// thumbnails.onItemRemove callback
                            if (item.html)
                                n.thumbnails.onItemRemove && $.isFunction(n.thumbnails.onItemRemove) && !isFromCheck ? n.thumbnails.onItemRemove(item.html, l, p, o, s) : item.html.remove();
							
							// cancel file upload
							if (item.upload && item.upload.$ajax && item.upload.cancel)
								item.upload.cancel(true);
							
							// remove popup
							if (item.popup && item.popup.close)
								item.popup.close();
                            
                            // remove filereader
                            if (item.reader.src) {
                                item.reader.node = null;
                                URL.revokeObjectURL(item.reader.src);
                            }
							
							// check if any file is in the same input like item.input
							if (item.input) {
								var g = true;
								$.each(f._itFl, function(i, a) {
									if (item != a && (item.input == a.input || (isFromCheck && item.input.get(0).files.length > 1))) {
										g = false;
										return false;
									}
								});
								if (g) {
									if (f.isAddMoreMode() && sl.length > 1) {
										f.set('nextInput');
										sl.splice(sl.indexOf(item.input), 1);
										item.input.remove();
									} else {
										f.set('input', '');
									}
								}
							}
                            
							// remove data from memory
                            f._pfrL.indexOf(item) > -1 ? f._pfrL.splice(f._pfrL.indexOf(item), 1) : null;
                            f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
                            f._itFl.indexOf(item) > -1 ? f._itFl.splice(f._itFl.indexOf(item), 1) : null;
                            item = null;
							
							// reset the plugin if there are no any files in the memory
							f._itFl.length == 0 ? f.reset() : null;
                            
							// set feedback caption
							f.set('feedback', null);
							
							// set listInput value
							f.set('listInput', null);
						},
						/**
                         * getItemAttr
                         * get an attribute from item or item.data
                         *
						 * @namespace files
                         * @param {Object} item
						 * @param {String} attr - attribute key
                         * @return {null,String}
                         */
						getItemAttr: function(item, attr) {
							var result = null;
							
							if (item) {
								if (typeof item[attr] != "undefined") {
									result = item[attr];
								} else if (item.data && typeof item.data[attr] != "undefined") {
									result = item.data[attr];
								}
							}
							
							return result;
						},
						/**
                         * clear
                         * clear files from the memory
						 * delete also item.html and item.upload data
                         *
						 * @namespace files
                         * @param {bool} all - delete also appended files?
                         * @void
                         */
						clear: function(all) {
							var i = 0;
							while (i < f._itFl.length) {
								var a = f._itFl[i];
								
								if (!all && a.appended) {
									i++;
									continue;
								}
								
								if (a.html)
									a.html ? f._itFl[i].html.remove() : null;
								
								if (a.upload && a.upload.$ajax)
									f.upload.cancel(a);
								
								f._itFl.splice(i, 1);
							}
							
							// set feedback caption
							f.set('feedback', null);
                            
                            // set listInput value
                            f.set('listInput', null);
							
							// onEmpty callback
							f._itFl.length == 0 && n.onEmpty && $.isFunction(n.onEmpty) ? n.onEmpty(l, p, o, s) : null;
						}
					},
					
					/**
					 * reset
					 * reset the plugin
					 *
					 * @param {bool} all - remove also appended files?
					 * @void
					 */
					reset: function(all) {
						if (all) {
							if (f.clipboard._timer)
								f.clipboard.clean();
							
							$.each(sl, function(i, a) {
								if (i < sl.length)
									a.remove();
							});
							sl = [];
                            f.set('input', '');
						}
						
						f._itRl = [];
                        f._pfuL = [];
                        f._pfrL = [];
						f.files.clear(all);
					},
					/**
					 * destroy
					 * destroy the plugin
					 *
					 * @void
					 */
					destroy: function() {
						f.reset(true);
						f.bindUnbindEvents(false);
						s.removeAttr('style');
						p.before(s);
						delete s.get(0).FileUploader;
						p.remove();
						p = o = l = null;
					},
                    
                    /**
                     * @namespace _assets 
                     */
					_assets: {
                        bytesToText: function(bytes) {
                            if (bytes == 0) return '0 Byte';
                            var k = 1024,
								sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
								i = Math.floor(Math.log(bytes) / Math.log(k));
							
                            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
                        },
						escape: function(str) {
							return ('' + str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")	
						},
                        secondsToText: function(seconds, textFormat) {
                            seconds = parseInt(Math.round(seconds), 10);
                            
                            var hours   = Math.floor(seconds / 3600),
                                minutes = Math.floor((seconds - (hours * 3600)) / 60),
                                seconds = seconds - (hours * 3600) - (minutes * 60),
                                result = "";
                            
                            if (hours > 0 || !textFormat) {
                                result += (hours < 10 ? "0" : "") + hours + (textFormat ? "h " : ":");
                            }
                            if (minutes > 0 || !textFormat) {
                                result += (minutes < 10 && !textFormat ? "0" : "") + minutes + (textFormat ? "m " : ":");
                            }
                            
                            result += (seconds < 10 && !textFormat ? "0" : "") + seconds + (textFormat ? "s" : "");
                            
                            return result;
                        },
						pxToRatio: function(width, height) {
							var gcd = function(a, b) {
									return (b == 0) ? a : gcd (b, a%b);
								},
								r = gcd(width, height);
							
							return [width/r, height/r];
						},
						ratioToPx: function(width, height, ratio) {
							ratio = (ratio+'').split(':');
							
							if (ratio.length < 2)
								return null;
							
							var rWidth = height / ratio[1] * ratio[0],
								rHeight = width / ratio[0] * ratio[1];
							
							return [rWidth, rHeight, ratio[0], ratio[1]];
						},
                        hasAttr: function(attr, el) {
                            var el = !el ? s : el,
                                a = el.attr(attr);
							
                            if (!a || typeof a == 'undefined') {
                                return false;
                            } else {
                                return true;
                            }
                        },
						copyAllAttributes: function(newEl, oldEl) {
							$.each(oldEl.get(0).attributes, function() {
								if (this.name == 'required' || this.name == 'type') return;
								newEl.attr(this.name, this.value);
							});
                            
                            if (oldEl.get(0).FileUploader)
                                newEl.get(0).FileUploader = oldEl.get(0).FileUploader;
							
							return newEl;
						},
						getAllEvents: function(el) {
							var el = !el ? s : el,
								result = [];
							
							el = el.get ? el.get(0) : el;
							for (var key in el) {
								if (key.indexOf('on') === 0) {
									result.push(key.slice(2));
								}
							}
							
							if (result.indexOf('change') == -1)
								result.push('change');
							
							return result.join(' ');
						},
                        isIntoView: function(el) {
                            var windowTop = $(window).scrollTop(),
                                windowBottom = windowTop + window.innerHeight,
                                elTop = el.offset().top,
                                elBottom = elTop + el.outerHeight();

                            return ((windowTop < elTop) && (windowBottom > elBottom));
                        },
						isBlankCanvas: function(canvas) {
							var blank = document.createElement('canvas'),
								result = false;
							
							blank.width = canvas.width;
							blank.height = canvas.height;
                            try {
				                result = canvas.toDataURL() == blank.toDataURL();
                            } catch(e) {}
							blank = null;
							
							return result;
						},
                        generateFileName: function(extension, prefix) {
							var date = new Date(),
								addZero = function(x) {
									if (x < 10)
										x = "0" + x;

									return x;
								},
								prefix = prefix ? prefix : '',
								extension = extension ? '.' + extension : '';
							
							return prefix + date.getFullYear() + '-' + addZero(date.getMonth()+1) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + '-' + addZero(date.getMinutes()) + '-' + addZero(date.getSeconds()) + extension;
						},
                        arrayBufferToBase64: function(buffer) {
                            var binary = '',
                                bytes = new Uint8Array(buffer);
                            
                            for (var i = 0; i < bytes.byteLength; i++) {
                                binary += String.fromCharCode(bytes[i]);
                            }
                            
                            return window.btoa(binary);
                        },
						dataURItoBlob: function(dataURI, type) {
							var byteString = atob(dataURI.split(',')[1]),
								mimeType = dataURI.split(',')[0].split(':')[1].split(';')[0],
								arrayBuffer = new ArrayBuffer(byteString.length),
								_ia = new Uint8Array(arrayBuffer);
							
							for (var i = 0; i < byteString.length; i++) {
								_ia[i] = byteString.charCodeAt(i);
							}

							var dataView = new DataView(arrayBuffer),
								blob = new Blob([dataView.buffer], { type: type || mimeType });
                            
							return blob;
						},
                        getExifOrientation: function(file, callback) {
                            var reader = new FileReader(),
                                rotation = {
                                    1: 0,
                                    3: 180,
                                    6: 90,
                                    8: 270
                                };

                            reader.onload = function(e) {
                                var scanner = new DataView(e.target.result),
                                    val = 1;
                                
                                if (scanner.byteLength && scanner.getUint16(0, false) == 0xFFD8) {
                                    var length = scanner.byteLength,
                                        offset = 2;
                                    
                                    while (offset < length) {
                                        if (scanner.getUint16(offset + 2, false) <= 8)
                                            break;
                                        
                                        var uint16 = scanner.getUint16(offset, false);
                                        offset += 2;
                                        
                                        if (uint16 == 0xFFE1) {
                                            if (scanner.getUint32(offset += 2, false) != 0x45786966)
                                                break;

                                            var little = scanner.getUint16(offset += 6, false) == 0x4949,
                                                tags;
                                            
                                            offset += scanner.getUint32(offset + 4, little);
                                            tags = scanner.getUint16(offset, little);
                                            offset += 2;
                                            
                                            for (var i = 0; i < tags; i++) {
                                                if (scanner.getUint16(offset + (i * 12), little) == 0x0112) {
                                                    val = scanner.getUint16(offset + (i * 12) + 8, little);
                                                    length = 0;
                                                    break;
                                                }
                                            }
                                        } else if ((uint16 & 0xFF00) != 0xFF00) {
                                            break;
                                        } else {
                                            offset += scanner.getUint16(offset, false);
                                        }
                                    }
                                }
                                
                                callback ? callback(rotation[val] || 0) : null;
                            };
                            reader.onerror = function() {
                                callback ? callback('') : null;
                            };
                            reader.readAsArrayBuffer(file);
                        },
                        textParse: function(text, opts, noOptions) {
                            opts = noOptions ? (opts || {}) : $.extend({}, {
								limit: n.limit,
								maxSize: n.maxSize,
								fileMaxSize: n.fileMaxSize,
								extensions: n.extensions ? n.extensions.join(', ') : null,
								captions: n.captions
							}, opts);
							
                            switch (typeof(text)) {
                                case 'string':
									for (var key in opts) {
										if (['name', 'file', 'type', 'size'].indexOf(key) > -1)
											opts[key] = f._assets.escape(opts[key]);
									}
									
                                    text = text.replace(/\$\{(.*?)\}/g, function(match, a) {
                                        var a = a.replace(/ /g, ''),
                                            r = typeof opts[a] != "undefined" && opts[a] != null ? opts[a] : '';
                                        
                                        if (['reader.node'].indexOf(a) > -1)
                                            return match;
                                        
                                        if (a.indexOf('.') > -1 || a.indexOf('[]') > -1) {
                                            var x = a.substr(0, a.indexOf('.') > -1 ? a.indexOf('.') : a.indexOf('[') > -1 ? a.indexOf('[') : a.length),
                                                y = a.substring(x.length);
                                            
                                            if (opts[x]) {
                                                try {
                                                    r = eval('opts["' + x + '"]' + y);
                                                } catch(e) {
                                                    r = '';
                                                }
                                            }
                                        }
                                        
										r = $.isFunction(r) ? f._assets.textParse(r) : r;
                                        
                                        return r || '';
                                    });
                                    break;
                                case 'function':
                                    text = f._assets.textParse(text(opts, l, p, o, s, f._assets.textParse), opts, noOptions);
                                    break;
                            }
							
							opts = null;
							return text;
                        },
                        textToColor: function(str) {
                            if (!str || str.length == 0)
								return false;
							
                            for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
                            for (var i = 0, colour = '#'; i < 3; colour += ('00' + ((hash >> i++ * 2) & 0xFF)
                                    .toString(16))
                                .slice(-2));
                            return colour;
                        },
						isBrightColor: function(color) {
							var getRGB = function(b) {
									var a;
									if (b && b.constructor == Array && b.length == 3) return b;
									if (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])];
									if (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) return [parseFloat(a[1]) * 2.55, parseFloat(a[2]) * 2.55, parseFloat(a[3]) * 2.55];
									if (a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3],
										16)];
									if (a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)];
									return (typeof(colors) != "undefined") ? colors[$.trim(b).toLowerCase()] : null
								},
								luminance_get = function(color) {
									var rgb = getRGB(color);
									if (!rgb) return null;
									return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
								};
							
							return luminance_get(color) > 194;
						},
						keyCompare: function(obj, structure) {
							for(var i = 0; i<structure.length; i++) {
								if (!$.isPlainObject(obj) || !obj.hasOwnProperty(structure[i])) {
									throw new Error('Could not find valid *strict* attribute "'+ structure[i] +'" in ' + JSON.stringify(obj, null, 4));
								}
							}
							
							return true;
						},
						hasPlugin: function(name) {
							if (navigator.plugins && navigator.plugins.length)
								for (var key in navigator.plugins) {
									if (navigator.plugins[key].name.toLowerCase().indexOf(name) > -1)
										return true;
								}
							
							return false;
						},
                        isIE: function() {
                            return navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || navigator.userAgent.indexOf("Edge") > -1;
                        },
                        isMobile: function() {
                            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
                        }
                    },
					
					isSupported: function() {
						return s && s.get(0).files;
					},
					isFileReaderSupported: function() {
						return window.File && window.FileList && window.FileReader;
					},
					isDefaultMode: function() {
						return !n.upload && (!n.addMore || n.limit == 1);
					},
					isAddMoreMode: function() {
						return !n.upload && n.addMore && n.limit != 1;
					},
					isUploadMode: function() {
						return n.upload;
					},
					
					// fileuploader file list
                    _itFl: [],
					
					// fileuploader file upload pending list
					_pfuL: [],
					
					// fileuploader file render pending list
					_pfrL: [],
					
					// disabled
					disabled: false,
                    
                    // locked
                    locked: false,
					
					// rendered
					rendered: false
				};
			
			// set FileUploader property to the input
            if (n.enableApi) {
                s.get(0).FileUploader = {
                    open: function() {
                        s.trigger('click');
                    },
                    getOptions: function() {
                        return n;
                    },
                    getParentEl: function() {
                        return p;
                    },
                    getInputEl: function() {
                        return s;
                    },
                    getNewInputEl: function() {
                        return o;
                    },
                    getListEl: function() {
                        return l;
                    },
                    getListInputEl: function() {
                        return n.listInput;
                    },
                    getFiles: function() {
                        return f._itFl;
                    },
                    getChoosedFiles: function() {
                        return f._itFl.filter(function(a) {
                            return a.choosed;
                        });
                    },
                    getAppendedFiles: function() {
                        return f._itFl.filter(function(a) {
                            return a.appended;
                        });
                    },
                    getUploadedFiles: function() {
                        return f._itFl.filter(function(a) {
                            return a.uploaded;
                        });
                    },
                    getFileList: function(toJson, customKey) {
                        return f.files.list(toJson, customKey, true);
                    },
					updateFileList: function() {
						f.set('listInput', null);
						
						return true;
					},
                    setOption: function(option, value) {
                        n[option] = value;

                        return true;
                    },
                    findFile: function(html) {
                        return f.files.find(html);
                    },
                    add: function(data, type, name) {
                        if (!f.isUploadMode())
                            return false;
						
                        var blob;
						if (data instanceof Blob) {
							blob = data;
						} else {
							var dataURI = /data:[a-z]+\/[a-z]+\;base64\,/.test(data) ? data : 'data:' + type + ';base64,' + btoa(data);
							
							blob = f._assets.dataURItoBlob(dataURI, type);
						}
						blob._name = name || f._assets.generateFileName(blob.type.indexOf("/") != -1 ? blob.type.split("/")[1].toString().toLowerCase() : 'File ');
						
						f.onChange(null, [blob]);
                        
                        return true;
					},
                    append: function(files) {
                        return f.files.append(files);
                    },
                    update: function(item, data) {
                        return f.files.update(item, data);
                    },
                    remove: function(item) {
                        item = item.jquery ? f.files.find(item) : item;

                        if (f._itFl.indexOf(item) > -1) {
                            f.files.remove(item);
                            return true;
                        }

                        return false;
                    },
					uploadStart: function() {
						var choosedFiles = this.getChoosedFiles() || [];
						
						if (f.isUploadMode() && choosedFiles.length > 0 && !choosedFiles[0].uploaded) {
							for(var i = 0; i<choosedFiles.length; i++) {
								f.upload.send(choosedFiles[i]);
							}
						}
					},
                    reset: function() {
                        f.reset(true);
                        return true;
                    },
                    disable: function(lock) {
                        f.set('disabled', true);
                        if (lock)
                            f.locked = true;
                        return true;
                    },
                    enable: function() {
                        f.set('disabled', false);
                        f.locked = false;
                        return true;
                    },
                    destroy: function() {
                        f.destroy();
                        return true;
                    },
                    isEmpty: function() {
                        return f._itFl.length == 0; 
                    },
                    isDisabled: function() {
                        return f.disabled;
                    },
                    isRendered: function() {
                        return f.rendered;
                    },
                    assets: f._assets,
                    getPluginMode: function() {
                        if (f.isDefaultMode())
                            return 'default';

                        if (f.isAddMoreMode())
                            return 'addMore';

                        if (f.isUploadMode())
                            return 'upload';
                    }
                };
            }
            
            // initialize the plugin
			f.init();
            
			return this;
		});
    };
	
	$.fileuploader = {
        getInstance: function(input) {
            var $input = input.prop ? input : $(input);

            return $input.get(0).FileUploader;
        }
    };
	
	$.fn.fileuploader.defaults = {
        limit: null,
        maxSize: null,
        fileMaxSize: null,
        extensions: null,
        disallowedExtensions: null,
		changeInput: true,
		inputNameBrackets: true,
        theme: 'default',
        thumbnails: {
			box: '<div class="fileuploader-items">' +
                      '<ul class="fileuploader-items-list"></ul>' +
                  '</div>',
			boxAppendTo: null,
			item: '<li class="fileuploader-item file-has-popup">' +
                       '<div class="columns">' +
                           '<div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div>' +
                           '<div class="column-title">' +
                               '<div title="${name}">${name}</div>' +
                               '<span>${size2}</span>' +
                           '</div>' +
                           '<div class="column-actions">' +
                               '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a>' +
                           '</div>' +
                       '</div>' +
                       '<div class="progress-bar2">${progressBar}<span></span></div>' +
                   '</li>',
            item2: '<li class="fileuploader-item file-has-popup">' +
                        '<div class="columns">' +
                            '<div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div>' +
                            '<div class="column-title">' +
                                '<a href="${file}" target="_blank">' +
                                    '<div title="${name}">${name}</div>' +
                                    '<span>${size2}</span>' +
                                '</a>' +
                            '</div>' +
                            '<div class="column-actions">' +
                                '<a href="${file}" class="fileuploader-action fileuploader-action-download" title="${captions.download}" download><i></i></a>' +
                                '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a>' +
                            '</div>' +
                        '</div>' +
                    '</li>',
            popup: {
                container: 'body',
                loop: true,
                arrows: true,
                zoomer: true,
                template: function(data) { return '<div class="fileuploader-popup-preview">' +
                    '<a class="fileuploader-popup-move" data-action="prev"></a>' +
                    '<div class="fileuploader-popup-node ${format}">' +
                        '${reader.node}' +
                    '</div>' +
                    '<div class="fileuploader-popup-content">' +
                        '<div class="fileuploader-popup-footer">' +
                            '<ul class="fileuploader-popup-tools">' +
                                (data.format == 'image' && data.editor ? (data.editor.cropper ? '<li>' +
                                    '<a data-action="crop">' +
                                        '<i></i> ${captions.crop}' +
                                    '</a>' +
                                '</li>' : '') +
                                (data.editor.rotate ? '<li>' +
                                    '<a data-action="rotate-cw">' +
                                        '<i></i> ${captions.rotate}' +
                                    '</a>' +
                                '</li>' : '') : ''
                                ) +
                                (data.format == 'image' ?
                                '<li class="fileuploader-popup-zoomer">' +
                                    '<a data-action="zoom-out">&minus;</a>' +
                                    '<input type="range" min="0" max="100">' +
                                    '<a data-action="zoom-in">&plus;</a>' +
                                    '<span></span> ' +
                                '</li>' : ''
                                ) +
                                '<li>' +
									'<a data-action="remove">' +
                                        '<i></i> ${captions.remove}' +
                                    '</a>' +
                                '</li>' +
                            '</ul>' +
                        '</div>' +
                        '<div class="fileuploader-popup-header">' +
                            '<ul class="fileuploader-popup-meta">' +
                                '<li>' +
                                    '<span>${captions.name}:</span>' +
                                    '<h5>${name}</h5>' +
                                '</li>' +
                                '<li>' +
                                    '<span>${captions.type}:</span>' +
                                    '<h5>${extension.toUpperCase()}</h5>' +
                                '</li>' +
                                '<li>' +
                                    '<span>${captions.size}:</span>' +
                                    '<h5>${size2}</h5>' +
                                '</li>' +
                                (data.reader && data.reader.width ? '<li>' +
                                    '<span>${captions.dimensions}:</span>' +
                                    '<h5>${reader.width}x${reader.height}px</h5>' +
                                '</li>' : ''
                                ) +
                                (data.reader && data.reader.duration ? '<li>' +
                                    '<span>${captions.duration}:</span>' +
                                    '<h5>${reader.duration2}</h5>' +
                                '</li>' : ''
                                ) +
                            '</ul>' +
                            '<div class="fileuploader-popup-info"></div>' +
                            '<ul class="fileuploader-popup-buttons">' +
                                '<li><a class="fileuploader-popup-button" data-action="cancel">${captions.cancel}</a></li>' +
                                '<li><a class="fileuploader-popup-button button-success" data-action="save">${captions.confirm}</a></li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                    '<a class="fileuploader-popup-move" data-action="next"></a>' +
                '</div>'; },
                onShow: function(item) {
                    item.popup.html.on('click', '[data-action="remove"]', function(e) {
                        item.popup.close();
                        item.remove();
                    }).on('click', '[data-action="cancel"]', function(e) {
                        item.popup.close();
                    }).on('click', '[data-action="save"]', function(e) {
						if (item.editor)
                        	item.editor.save();
						if (item.popup.close)
							item.popup.close();
                    });
                },
                onHide: null
            },
			itemPrepend: false,
			removeConfirmation: true,
			startImageRenderer: true,
			synchronImages: true,
            useObjectUrl: false,
			canvasImage: true,
            videoThumbnail: true,
			pdf: true,
            exif: true,
            touchDelay: 0,
			_selectors: {
				list: '.fileuploader-items-list',
				item: '.fileuploader-item',
				start: '.fileuploader-action-start',
				retry: '.fileuploader-action-retry',
				remove: '.fileuploader-action-remove',
				sorter: '.fileuploader-action-sort',
				rotate: '.fileuploader-action-rotate',
                popup: '.fileuploader-popup-preview',
                popup_open: '.fileuploader-action-popup'
			},
        	beforeShow: null,
			onItemShow: null,
            onItemRemove: function(html) {
                html.children().animate({'opacity': 0}, 200, function() {
                    setTimeout(function() {
                        html.slideUp(200, function() {
                            html.remove();
                        });
                    }, 100);
                });
            },
			onImageLoaded: null
		},
		editor: false,
		sorter: false,
        reader: {
            thumbnailTimeout: 5000,
            timeout: 12000,
			maxSize: 20
        },
        files: null,
        upload: null,
        dragDrop: true,
        addMore: false,
        skipFileNameCheck: false,
        clipboardPaste: true,
        listInput: true,
        enableApi: false,
		listeners: null,
		onSupportError: null,
        beforeRender: null,
        afterRender: null,
        beforeSelect: null,
        onFilesCheck: null,
        onFileRead: null,
        onSelect: null,
		afterSelect: null,
        onListInput: null,
        onRemove: null,
        onEmpty: null,
        dialogs: {
            alert: function(text) {
                return alert(text);
            },
            confirm: function(text, callback) {
                confirm(text) ? callback() : null;
            }
        },
        captions: {
            button: function(options) { return 'Browse ' + (options.limit == 1 ? 'file' : 'files'); },
            feedback: function(options) { return 'Choose ' + (options.limit == 1 ? 'file' : 'files') + ' to upload'; },
            feedback2: function(options) { return options.length + ' ' + (options.length > 1 ? ' files were' : ' file was') + ' chosen'; },
			confirm: 'Confirm',
            cancel: 'Cancel',
			name: 'Name',
			type: 'Type',
			size: 'Size',
			dimensions: 'Dimensions',
			duration: 'Duration',
            crop: 'Crop',
            rotate: 'Rotate',
			sort: 'Sort',
            download: 'Download',
            remove: 'Remove',
            drop: 'Drop the files here to upload',
            paste: '<div class="fileuploader-pending-loader"></div> Pasting a file, click here to cancel.',
            removeConfirmation: 'Are you sure you want to remove this file?',
            errors: {
                filesLimit: 'Only ${limit} files are allowed to be uploaded.',
                filesType: 'Only ${extensions} files are allowed to be uploaded.',
                fileSize: '${name} is too large! Please choose a file up to ${fileMaxSize}MB.',
                filesSizeAll: 'Files that you chose are too large! Please upload files up to ${maxSize} MB.',
                fileName: 'File with the name ${name} is already selected.',
                remoteFile: 'Remote files are not allowed.',
                folderUpload: 'You are not allowed to upload folders.',
            }
        }
	}
})(jQuery);
/*!
 * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,r){"use strict";e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(5),a=r(7),s=r(4),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,a=r.distance,c=void 0===a?100:a,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.isCaseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=f&&(this.patternAlphabet=s(this.pattern))}return o(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,r=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>r)return i(e,this.pattern,n);var o=this.options,s=o.location,c=o.distance,h=o.threshold,l=o.findAllMatches,u=o.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}]),e}();e.exports=c},function(e,t,r){"use strict";var n=r(0),o=function e(t,r,o){if(r){var i=r.indexOf("."),a=r,s=null;-1!==i&&(a=r.slice(0,i),s=r.slice(i+1));var c=t[a];if(null!==c&&void 0!==c)if(s||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o};e.exports=function(e,t){return o(e,t,[])}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||(o=i-1,o-n+1>=t&&r.push([n,o]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}},function(e,t,r){"use strict";e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t}},function(e,t,r){"use strict";e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(r,"|")),o=e.match(n),i=!!o,a=[];if(i)for(var s=0,c=o.length;s<c;s+=1){var h=o[s];a.push([e.indexOf(h),h.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:a}}},function(e,t,r){"use strict";e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t,r){"use strict";var n=r(6),o=r(3);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),x=t.length,S=[],M=0;M<y;M+=1)S[M]=0;if(-1!==k){var b=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(b,m),-1!==(k=e.lastIndexOf(t,g+x))){var _=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=x+y,C=1<<x-1,I=0;I<x;I+=1){for(var O=0,F=A;O<F;){n(t,{errors:I,currentLocation:g+F,expectedLocation:g,distance:h})<=m?O=F:A=F,F=Math.floor((A-O)/2+O)}A=F;var P=Math.max(1,g-F+1),j=d?y:Math.min(g+F,y)+x,z=Array(j+2);z[j+1]=(1<<I)-1;for(var T=j;T>=P;T-=1){var E=T-1,K=r[e.charAt(E)];if(K&&(S[E]=1),z[T]=(z[T+1]<<1|1)&K,0!==I&&(z[T]|=(L[T+1]|L[T])<<1|1|L[T+1]),z[T]&C&&(w=n(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(n(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=z}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(S,p)}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),a=r(2),s=r(0),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,s=r.distance,c=void 0===s?100:s,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.caseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k,S=r.id,M=void 0===S?null:S,b=r.keys,_=void 0===b?[]:b,L=r.shouldSort,w=void 0===L||L,A=r.getFn,C=void 0===A?a:A,I=r.sortFn,O=void 0===I?function(e,t){return e.score-t.score}:I,F=r.tokenize,P=void 0!==F&&F,j=r.matchAllTokens,z=void 0!==j&&j,T=r.includeMatches,E=void 0!==T&&T,K=r.includeScore,$=void 0!==K&&K,J=r.verbose,N=void 0!==J&&J;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x,id:M,keys:_,includeMatches:E,includeScore:$,shouldSort:w,getFn:C,sortFn:O,verbose:N,tokenize:P,matchAllTokens:z},this.setCollection(t)}return o(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),r=t.tokenSearchers,n=t.fullSearcher,o=this._search(r,n),i=o.weights,a=o.results;return this._computeScore(i,a),this.options.shouldSort&&this._sort(a),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=r.length;c<h;c+=1)for(var l=r[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var r=e.key,n=e.arrayIndex,o=void 0===n?-1:n,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(void 0!==i&&null!==i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: "+(""===r?"-":r));var x=f.search(i);if(this._log('Full text: "'+i+'", score: '+x.score),this.options.tokenize){for(var S=i.split(this.options.tokenSeparator),M=[],b=0;b<l.length;b+=1){var _=l[b];this._log('\nPattern: "'+_.pattern+'"');for(var L=!1,w=0;w<S.length;w+=1){var A=S[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,M.push(C.score)):(I[A]=1,this.options.matchAllTokens||M.push(1)),this._log('Token: "'+A+'", score: '+I[A])}L&&(k+=1)}m=M[0];for(var O=M.length,F=1;F<O;F+=1)m+=M[F];m/=O,this._log("Token score average:",m)}var P=x.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var j=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: "+j),(y||x.isMatch)&&j){var z=v[c];z?z.output.push({key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}):(v[c]={item:a,output:[{key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var T=0,E=i.length;T<E;T+=1)this._analyze({key:r,arrayIndex:T,value:i[T],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var r=0,n=t.length;r<n;r+=1){for(var o=t[r].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=1===h?o[c].score:o[c].score||.001,u=l*h;1!==h?s=Math.min(s,u):(o[c].nScore=u,a*=u)}t[r].score=1===s?a:s,this._log(t[r])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this.options.verbose&&this._log("\n\nOutput:\n\n",JSON.stringify(e));var r=[];this.options.includeMatches&&r.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var n=0,o=e.length;n<o;n+=1){var i=e[n];if(this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),r.length){for(var a={item:i.item},s=0,c=r.length;s<c;s+=1)r[s](i,a);t.push(a)}else t.push(i.item)}return t}},{key:"_log",value:function(){if(this.options.verbose){var e;(e=console).log.apply(e,arguments)}}}]),e}();e.exports=c}])});
