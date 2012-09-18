/*
 * SnowPlow - The world's most powerful web analytics platform
 *
 * @description JavaScript tracking client for SnowPlow
 * @version 0.6
 * @author Alex Dean, Simon Andersson, Anthon Pang
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _snaq=_snaq||[];var SnowPlow=function(){var a=window;return{expireDateTime:null,plugins:{},hasLoaded:false,registeredOnLoadHandlers:[],documentAlias:document,windowAlias:a,navigatorAlias:navigator,screenAlias:screen,encodeWrapper:a.encodeURIComponent,decodeWrapper:a.decodeURIComponent,urldecode:unescape,asyncTracker:null,}}();SnowPlow.isDefined=function(a){return typeof a!=="undefined"};SnowPlow.isFunction=function(a){return typeof a==="function"};SnowPlow.isObject=function(a){return typeof a==="object"};SnowPlow.isString=function(a){return typeof a==="string"||a instanceof String};SnowPlow.encodeUtf8=function(a){return SnowPlow.urldecode(SnowPlow.encodeWrapper(a))};SnowPlow.urlFixup=function(e,a,b){function d(i,h){var l=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),k=l.exec(i),j=new RegExp("(?:^|&)"+h+"=([^&]*)"),g=k?j.exec(k[1]):0;return g?SnowPlow.decodeWrapper(g[1]):""}function c(f){var h=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),g=h.exec(f);
return g?g[1]:f}if(e==="translate.googleusercontent.com"){if(b===""){b=a}a=d(a,"u");e=c(a)}else{if(e==="cc.bingj.com"||e==="webcache.googleusercontent.com"||e.slice(0,5)==="74.6."){a=SnowPlow.documentAlias.links[0].href;e=c(a)}}return[e,a,b]};SnowPlow.getReferrer=function(){var a="";try{a=SnowPlow.windowAlias.top.document.referrer}catch(c){if(SnowPlow.windowAlias.parent){try{a=SnowPlow.windowAlias.parent.document.referrer}catch(b){a=""}}}if(a===""){a=SnowPlow.documentAlias.referrer}return a};SnowPlow.domainFixup=function(b){var a=b.length;if(b.charAt(--a)==="."){b=b.slice(0,a)}if(b.slice(0,2)==="*."){b=b.slice(1)}return b};SnowPlow.addEventListener=function(d,c,b,a){if(d.addEventListener){d.addEventListener(c,b,a);return true}if(d.attachEvent){return d.attachEvent("on"+c,b)}d["on"+c]=b};SnowPlow.getCookie=function(c){var a=new RegExp("(^|;)[ ]*"+c+"=([^;]*)"),b=a.exec(SnowPlow.documentAlias.cookie);return b?SnowPlow.decodeWrapper(b[2]):0};SnowPlow.setCookie=function(g,d,c,f,b,e){var a;if(c){a=new Date();
a.setTime(a.getTime()+c)}SnowPlow.documentAlias.cookie=g+"="+SnowPlow.encodeWrapper(d)+(c?";expires="+a.toGMTString():"")+";path="+(f||"/")+(b?";domain="+b:"")+(e?";secure":"")};SnowPlow.executePluginMethod=function(b,e){var a="",d,c;for(d in SnowPlow.plugins){if(Object.prototype.hasOwnProperty.call(SnowPlow.plugins,d)){c=SnowPlow.plugins[d][b];if(SnowPlow.isFunction(c)){a+=c(e)}}}return a};SnowPlow.sha1=function sha1(r){var c=function(j,i){return(j<<i)|(j>>>(32-i))},s=function(y){var x="",w,j;for(w=7;w>=0;w--){j=(y>>>(w*4))&15;x+=j.toString(16)}return x},f,u,t,b=[],l=1732584193,h=4023233417,g=2562383102,e=271733878,d=3285377520,q,p,o,n,m,v,a,k=[];r=SnowPlow.encodeUtf8(r);a=r.length;for(u=0;u<a-3;u+=4){t=r.charCodeAt(u)<<24|r.charCodeAt(u+1)<<16|r.charCodeAt(u+2)<<8|r.charCodeAt(u+3);k.push(t)}switch(a&3){case 0:u=2147483648;break;case 1:u=r.charCodeAt(a-1)<<24|8388608;break;case 2:u=r.charCodeAt(a-2)<<24|r.charCodeAt(a-1)<<16|32768;break;case 3:u=r.charCodeAt(a-3)<<24|r.charCodeAt(a-2)<<16|r.charCodeAt(a-1)<<8|128;
break}k.push(u);while((k.length&15)!==14){k.push(0)}k.push(a>>>29);k.push((a<<3)&4294967295);for(f=0;f<k.length;f+=16){for(u=0;u<16;u++){b[u]=k[f+u]}for(u=16;u<=79;u++){b[u]=c(b[u-3]^b[u-8]^b[u-14]^b[u-16],1)}q=l;p=h;o=g;n=e;m=d;for(u=0;u<=19;u++){v=(c(q,5)+((p&o)|(~p&n))+m+b[u]+1518500249)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=20;u<=39;u++){v=(c(q,5)+(p^o^n)+m+b[u]+1859775393)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=40;u<=59;u++){v=(c(q,5)+((p&o)|(p&n)|(o&n))+m+b[u]+2400959708)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=60;u<=79;u++){v=(c(q,5)+(p^o^n)+m+b[u]+3395469782)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}l=(l+q)&4294967295;h=(h+p)&4294967295;g=(g+o)&4294967295;e=(e+n)&4294967295;d=(d+m)&4294967295}v=s(l)+s(h)+s(g)+s(e)+s(d);return v.toLowerCase()};SnowPlow.Tracker=function Tracker(H){var K=SnowPlow.urlFixup(SnowPlow.documentAlias.domain,SnowPlow.windowAlias.location.href,SnowPlow.getReferrer()),t=SnowPlow.domainFixup(K[0]),s=K[1],ab=K[2],f="GET",a=n(H),ar="",aj,aq=SnowPlow.documentAlias.title,C="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",ac=[t],j=[],ad=[],ag=[],w=500,e,F,I,ae="_sp_",p,Z,g,N,at=63072000000,z=1800000,v=15768000000,l=SnowPlow.navigatorAlias.userLanguage||SnowPlow.navigatorAlias.language,ao=SnowPlow.documentAlias.location.protocol==="https",M={},S=false,q=false,u,am,P,ai=SnowPlow.sha1,X,E,Q;
function U(){return{transaction:{},items:[]}}function ak(au){var av;if(I){av=new RegExp("#.*");return au.replace(av,"")}return au}function o(au){var aw=new RegExp("^([a-z]+):"),av=aw.exec(au);return av?av[1]:null}function B(aw,au){var ax=o(au),av;if(ax){return au}if(au.slice(0,1)==="/"){return o(aw)+"://"+getHostName(aw)+au}aw=ak(aw);if((av=aw.indexOf("?"))>=0){aw=aw.slice(0,av)}if((av=aw.lastIndexOf("/"))!==aw.length-1){aw=aw.slice(0,av+1)}return aw+au}function R(ax){var av,au,aw;for(av=0;av<ac.length;av++){au=domainFixup(ac[av].toLowerCase());if(ax===au){return true}if(au.slice(0,1)==="."){if(ax===au.slice(1)){return true}aw=ax.length-au.length;if((aw>0)&&(ax.slice(aw)===au)){return true}}}return false}function b(au){var av=new Image(1,1);av.onload=function(){};av.src=a+"?"+au}function al(aw,av){var au=new Date();if(!g){b(aw);SnowPlow.expireDateTime=au.getTime()+av}}function k(au){return ae+au+"."+ar+"."+X}function V(){var au=k("testcookie");if(!SnowPlow.isDefined(SnowPlow.navigatorAlias.cookieEnabled)){SnowPlow.setCookie(au,"1");
return SnowPlow.getCookie(au)==="1"?"1":"0"}return SnowPlow.navigatorAlias.cookieEnabled?"1":"0"}function D(){X=ai((p||t)+(Z||"/")).slice(0,4)}function m(){var au=new Date();u=au.getTime()}function h(ay,av,au,ax,aw){SnowPlow.setCookie(k("id"),ay+"."+av+"."+au+"."+ax+"."+aw,at,Z,p,ao)}function i(){var av=new Date(),au=Math.round(av.getTime()/1000),ax=SnowPlow.getCookie(k("id")),aw;if(ax){aw=ax.split(".");aw.unshift("0")}else{if(!E){E=ai((SnowPlow.navigatorAlias.userAgent||"")+(SnowPlow.navigatorAlias.platform||"")+JSON2.stringify(M)+au).slice(0,16)}aw=["1",E,au,0,au,""]}return aw}function L(av,aM){var aK,au=new Date(),aA=Math.round(au.getTime()/1000),aO,aL,ax,aG,aI,az,ay,aJ,aw=1024,aP,aC,aF=k("id"),aB=k("ses"),aH=i(),aE=SnowPlow.getCookie(aB),aN=aj||s,aD;if(g){SnowPlow.setCookie(aF,"",-1,Z,p);SnowPlow.setCookie(aB,"",-1,Z,p);return""}aO=aH[0];aL=aH[1];aG=aH[2];ax=aH[3];aI=aH[4];az=aH[5];if(!aE){ax++;az=aI}av+="&tid="+String(Math.random()).slice(2,8)+"&uid="+aL+"&vid="+ax+(ar.length?"&said="+SnowPlow.encodeWrapper(ar):"")+"&lang="+l+(ab.length?"&refr="+SnowPlow.encodeWrapper(ak(ab)):"");
for(aK in M){if(Object.prototype.hasOwnProperty.call(M,aK)){aD=(aK==="res"||aK==="cookie")?"&":"&f_";av+=aD+aK+"="+M[aK]}}av+="&url="+SnowPlow.encodeWrapper(ak(window.location));h(aL,aG,ax,aA,az);SnowPlow.setCookie(aB,"*",z,Z,p,ao);av+=SnowPlow.executePluginMethod(aM);return av}function Y(au){return("https:"==document.location.protocol?"https":"http")+"://"+au+"/ice.png"}function n(au){return Y(au+".cloudfront.net")}function an(au){var av=au||"";return{add:function(aw,ax){if(ax!==undefined&&ax!==""){av+="&"+aw+"="+SnowPlow.encodeWrapper(ax)}},build:function(){return av}}}function W(aw,az,au,ay,ax){var av="ev_ca="+SnowPlow.encodeWrapper(aw)+"&ev_ac="+SnowPlow.encodeWrapper(az);if(String(au).length){av+="&ev_la="+SnowPlow.encodeWrapper(au)}if(String(ay).length){av+="&ev_pr="+SnowPlow.encodeWrapper(ay)}if(String(ax).length){av+="&ev_va="+SnowPlow.encodeWrapper(ax)}av=L(av,"event");al(av,w)}function G(ay,au,aw,av){var ax="ad_ba="+SnowPlow.encodeWrapper(ay);if(String(au).length){ax+="&ad_ca="+SnowPlow.encodeWrapper(au)
}if(String(aw).length){ax+="&ad_ad="+SnowPlow.encodeWrapper(aw)}if(String(av).length){ax+="&ad_uid="+SnowPlow.encodeWrapper(av)}ax=L(ax,configCustomData,"adimp");al(ax,w)}function aa(ay,ax,aE,az,au,aC,av,aw){var aD=an();aD.add("tr_id",ay);aD.add("tr_af",ax);aD.add("tr_tt",aE);aD.add("tr_tx",az);aD.add("tr_sh",au);aD.add("tr_ci",aC);aD.add("tr_st",av);aD.add("tr_co",aw);var aA=aD.build();var aB=L(aA,"ecommerceTransaction");al(aB,w)}function d(aw,aB,au,av,aA,ay){var aC=an();aC.add("ti_id",aw);aC.add("ti_sk",aB);aC.add("ti_na",au);aC.add("ti_ca",av);aC.add("ti_pr",aA);aC.add("ti_qu",ay);var ax=aC.build();var az=L(ax,"ecommerceTransactionItem");al(az,w)}function c(ax){function ay(aA){if(!SnowPlow.isString(aA)){aA=aA.text||"";var az=SnowPlow.documentAlias.getElementsByTagName("title");if(az&&SnowPlow.isDefined(az[0])){aA=az[0].text}}return aA}var au=new Date(),aw=L("page="+SnowPlow.encodeWrapper(ay(ax||aq)),"log");al(aw,w);if(e&&F&&!q){q=true;addEventListener(SnowPlow.documentAlias,"click",m);
addEventListener(SnowPlow.documentAlias,"mouseup",m);addEventListener(SnowPlow.documentAlias,"mousedown",m);addEventListener(SnowPlow.documentAlias,"mousemove",m);addEventListener(SnowPlow.documentAlias,"mousewheel",m);addEventListener(SnowPlow.windowAlias,"DOMMouseScroll",m);addEventListener(SnowPlow.windowAlias,"scroll",m);addEventListener(SnowPlow.documentAlias,"keypress",m);addEventListener(SnowPlow.documentAlias,"keydown",m);addEventListener(SnowPlow.documentAlias,"keyup",m);addEventListener(SnowPlow.windowAlias,"resize",m);addEventListener(SnowPlow.windowAlias,"focus",m);addEventListener(SnowPlow.windowAlias,"blur",m);u=au.getTime();setTimeout(function av(){var az=new Date(),aA;if((u+F)>az.getTime()){if(e<az.getTime()){aA=L("ping=1","ping");al(aA,w)}setTimeout(av,F)}},F)}}function A(av,au){var aw=L(au+"="+SnowPlow.encodeWrapper(ak(av)),"link");al(aw,w)}function af(av,au){if(av!==""){return av+au.charAt(0).toUpperCase()+au.slice(1)}return au}function J(az){var ay,au,ax=["","webkit","ms","moz"],aw;
if(!N){for(au=0;au<ax.length;au++){aw=ax[au];if(Object.prototype.hasOwnProperty.call(SnowPlow.documentAlias,af(aw,"hidden"))){if(SnowPlow.documentAlias[af(aw,"visibilityState")]==="prerender"){ay=true}break}}}if(ay){addEventListener(SnowPlow.documentAlias,aw+"visibilitychange",function av(){SnowPlow.documentAlias.removeEventListener(aw+"visibilitychange",av,false);az()});return}az()}function T(aw,av){var ax,au="(^| )(piwik[_-]"+av;if(aw){for(ax=0;ax<aw.length;ax++){au+="|"+aw[ax]}}au+=")( |$)";return new RegExp(au)}function ap(ax,au,ay){if(!ay){return"link"}var aw=T(ad,"download"),av=T(ag,"link"),az=new RegExp("\\.("+C+")([?&#]|$)","i");return av.test(ax)?"link":(aw.test(ax)||az.test(au)?"download":0)}function r(az){var ax,av,au;while((ax=az.parentNode)!==null&&SnowPlow.isDefined(ax)&&((av=az.tagName.toUpperCase())!=="A"&&av!=="AREA")){az=ax}if(SnowPlow.isDefined(az.href)){var aA=az.hostname||getHostName(az.href),aB=aA.toLowerCase(),aw=az.href.replace(aA,aB),ay=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");
if(!ay.test(aw)){au=ap(az.className,aw,R(aB));if(au){aw=urldecode(aw);A(aw,au)}}}}function x(au){var av,aw;au=au||SnowPlow.windowAlias.event;av=au.which||au.button;aw=au.target||au.srcElement;if(au.type==="click"){if(aw){r(aw)}}else{if(au.type==="mousedown"){if((av===1||av===2)&&aw){am=av;P=aw}else{am=P=null}}else{if(au.type==="mouseup"){if(av===am&&aw===P){r(aw)}am=P=null}}}}function ah(av,au){if(au){addEventListener(av,"mouseup",x,false);addEventListener(av,"mousedown",x,false)}else{addEventListener(av,"click",x,false)}}function O(av){if(!S){S=true;var aw,au=T(j,"ignore"),ax=SnowPlow.documentAlias.links;if(ax){for(aw=0;aw<ax.length;aw++){if(!au.test(ax[aw].className)){ah(ax[aw],av)}}}}}function y(){var au,av,aw={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(SnowPlow.navigatorAlias.mimeTypes&&SnowPlow.navigatorAlias.mimeTypes.length){for(au in aw){if(Object.prototype.hasOwnProperty.call(aw,au)){av=SnowPlow.navigatorAlias.mimeTypes[aw[au]];
M[au]=(av&&av.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&SnowPlow.isDefined(SnowPlow.navigatorAlias.javaEnabled)&&SnowPlow.navigatorAlias.javaEnabled()){M.java="1"}if(SnowPlow.isFunction(SnowPlow.windowAlias.GearsFactory)){M.gears="1"}M.res=SnowPlow.screenAlias.width+"x"+SnowPlow.screenAlias.height;M.cookie=V()}y();D();Q=U();return{getVisitorId:function(){return(i())[1]},getVisitorInfo:function(){return i()},setSiteId:function(au){ar=au},setLinkTrackingTimer:function(au){w=au},setDownloadExtensions:function(au){C=au},addDownloadExtensions:function(au){C+="|"+au},setDomains:function(au){ac=isString(au)?[au]:au;ac.push(t)},setIgnoreClasses:function(au){j=isString(au)?[au]:au},setReferrerUrl:function(au){ab=au},setCustomUrl:function(au){aj=B(s,au)},setDocumentTitle:function(au){aq=au},setDownloadClasses:function(au){ad=isString(au)?[au]:au},setLinkClasses:function(au){ag=isString(au)?[au]:au},discardHashTag:function(au){I=au},setCookieNamePrefix:function(au){ae=au
},setCookieDomain:function(au){p=domainFixup(au);D()},setCookiePath:function(au){Z=au;D()},setVisitorCookieTimeout:function(au){at=au*1000},setSessionCookieTimeout:function(au){z=au*1000},setReferralCookieTimeout:function(au){v=au*1000},setDoNotTrack:function(av){var au=SnowPlow.navigatorAlias.doNotTrack||SnowPlow.navigatorAlias.msDoNotTrack;g=av&&(au==="yes"||au==="1")},addListener:function(av,au){ah(av,au)},enableLinkTracking:function(au){if(SnowPlow.hasLoaded){O(au)}else{SnowPlow.registeredOnLoadHandlers.push(function(){O(au)})}},setHeartBeatTimer:function(aw,av){var au=new Date();e=au.getTime()+aw*1000;F=av*1000},killFrame:function(){if(SnowPlow.windowAlias.location!==SnowPlow.windowAlias.top.location){SnowPlow.windowAlias.top.location=SnowPlow.windowAlias.location}},redirectFile:function(au){if(SnowPlow.windowAlias.location.protocol==="file:"){SnowPlow.windowAlias.location=au}},setCountPreRendered:function(au){N=au},trackLink:function(av,au){J(function(){A(av,au)})},trackPageView:function(au){J(function(){c(au)
})},setAccount:function(au){a=n(au)},setCollectorUrl:function(au){a=Y(au)},trackEvent:function(av,ay,au,ax,aw){W(av,ay,au,ax,aw)},trackImpression:function(ax,au,aw,av){G(ax,au,aw,av)},addTrans:function(au,ax,ay,aw,av,aB,az,aA){Q.transaction={orderId:au,affiliation:ax,total:ay,tax:aw,shipping:av,city:aB,state:az,country:aA}},addItem:function(au,az,av,ax,aw,ay){Q.items.push({orderId:au,sku:az,name:av,category:ax,price:aw,quantity:ay})},trackTrans:function(){aa(Q.transaction.orderId,Q.transaction.affiliation,Q.transaction.total,Q.transaction.tax,Q.transaction.shipping,Q.transaction.city,Q.transaction.state,Q.transaction.country);Q.items.forEach(function(au){d(au.orderId,au.sku,au.name,au.category,au.price,au.quantity)});Q=U()}}};SnowPlow.snowplow=(function(){function b(){var g,j,h;for(g=0;g<arguments.length;g+=1){h=arguments[g];j=h.shift();if(SnowPlow.isString(j)){SnowPlow.asyncTracker[j].apply(SnowPlow.asyncTracker,h)}else{j.apply(SnowPlow.asyncTracker,h)}}}function f(){var g;SnowPlow.executePluginMethod("unload");
if(SnowPlow.expireDateTime){do{g=new Date()}while(g.getTimeAlias()<SnowPlow.expireDateTime)}}function d(){var g;if(!SnowPlow.hasLoaded){SnowPlow.hasLoaded=true;SnowPlow.executePluginMethod("load");for(g=0;g<SnowPlow.registeredOnLoadHandlers.length;g++){SnowPlow.registeredOnLoadHandlers[g]()}}return true}function e(){var h;if(SnowPlow.documentAlias.addEventListener){SnowPlow.addEventListener(SnowPlow.documentAlias,"DOMContentLoaded",function g(){SnowPlow.documentAlias.removeEventListener("DOMContentLoaded",g,false);d()})}else{if(SnowPlow.documentAlias.attachEvent){SnowPlow.documentAlias.attachEvent("onreadystatechange",function g(){if(SnowPlow.documentAlias.readyState==="complete"){SnowPlow.documentAlias.detachEvent("onreadystatechange",g);d()}});if(SnowPlow.documentAlias.documentElement.doScroll&&SnowPlow.windowAlias===SnowPlow.windowAlias.top){(function g(){if(!SnowPlow.hasLoaded){try{SnowPlow.documentAlias.documentElement.doScroll("left")}catch(i){setTimeout(g,0);return}d()}}())}}}if((new RegExp("WebKit")).test(SnowPlow.navigatorAlias.userAgent)){h=setInterval(function(){if(SnowPlow.hasLoaded||/loaded|complete/.test(SnowPlow.documentAlias.readyState)){clearInterval(h);
d()}},10)}SnowPlow.addEventListener(SnowPlow.windowAlias,"load",d,false)}function a(){return{push:b}}SnowPlow.addEventListener(SnowPlow.windowAlias,"beforeunload",f,false);e();Date.prototype.getTimeAlias=Date.prototype.getTime;SnowPlow.asyncTracker=new SnowPlow.Tracker();for(var c=0;c<_snaq.length;c++){b(_snaq[c])}_snaq=new a();return{addPlugin:function(g,h){SnowPlow.plugins[g]=h},getTracker:function(g){return new SnowPlow.Tracker(g)},getAsyncTracker:function(){return SnowPlow.asyncTracker}}}());