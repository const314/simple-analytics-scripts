/* Simple Analytics - Privacy friend analytics (docs.simpleanalytics.com/script) 2020-01-16 */

!function(e){if(e){function t(e){c&&c.warn&&c.warn("Simple Analytics: "+e)}function n(e,t){return e&&e.getAttribute("data-"+t)}var r,a,s="https:",i=s+"//",o=i+"<!--# echo var="http_host" default="" -->/v2/",c=e.console,u="doNotTrack",h="pageviews",p="events",d=e.navigator,l=d.userAgent,f=e.location,m=e.document,g=f.hostname,v="Not sending requests ",w="localhost",y="pushState",S=e.dispatchEvent,b=m.querySelector('script[src="'+i+'<!--# echo var="http_host" default="" -->/light.js"]'),E=n(b,"mode"),T="true"===n(b,"skip-dnt");n(b,"sa-global");if(!T&&u in d&&"1"===d[u])return t(v+"when "+u+" is enabled");if(g===w||"file:"===f.protocol)return t(v+"from "+w);if(!l||-1<l.search(/(bot|spider|crawl)/gi))return t(v+"because bot detected");try{function q(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var R;try{R=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(L){}function $(e){return Math.round((Date.now()-(e||0))/1e3)}var A,I="(utm_)?",N={version:2,hostname:g,https:f.protocol===s,timezone:R,width:e.innerWidth,source:{source:q(I+"source|source|ref"),medium:q(I+"medium"),campaign:q(I+"campaign"),referrer:(m.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||undefined},pageviews:[]},O="sendBeacon",k=e.addEventListener,x=JSON.stringify,C=O in d&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(l);C&&k("unload",function(){N[h][N[h].length-1];N.time=$(),d[O](o+"post",x(N))},!1);function D(e){var t=f.pathname;if("hash"===E&&f.hash&&(t+=f.hash.split("?")[0]),A!==t){var n={path:A=t,added:$()};!function(e,t,n){var r=N[h],a=r.length,s=a?r[a-1]:null;if(e===h)r.push(t);else if(s)return s[p]?s[p].push(t):s[p]=[t];if(!C){var i=new XMLHttpRequest;i.open("POST",o+e,!0),n&&delete N.source,N.time=$(),i.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),i.send(x(N))}}(h,n,e)}}var F=e.history;if((F?F.pushState:null)&&Event&&S){F.pushState=(a=F[r=y],function(){var e=a.apply(this,arguments),t=new Event(r);return t.arguments=arguments,S(t),e}),k(y,function(){D(1)}),e.onpopstate=function(){D(1)}}"hash"===E&&"onhashchange"in e&&(e.onhashchange=function(){D(1)}),D()}catch(L){t(L.message);var H=o+"image.gif";L.message&&(H=H+"?error="+encodeURIComponent(L.message)),(new Image).src=H}}}(window);