/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-01-16; 8121) */

!function(c){if(c){function u(e){i&&i.warn&&i.warn("Simple Analytics: "+e)}function e(e,t){return e&&e.getAttribute("data-"+t)}var n,r,t="https:",a=t+"//",d=a+"<!--# echo var="http_host" default="" -->/v2/post",i=c.console,o="doNotTrack",h="pageviews",l="events",s=c.navigator,p=s.userAgent,f=c.location,m=c.document,v=f.hostname,g="Not sending requests ",y="localhost",w="pushState",E=c.dispatchEvent,T=Date.now(),b=0,q=m.querySelector('script[src="'+a+'<!--# echo var="http_host" default="" -->/app.js"]'),S=e(q,"mode"),x="true"===e(q,"skip-dnt"),D=e(q,"sa-global")||"sa";if(!x&&o in s&&"1"===s[o])return u(g+"when "+o+" is enabled");if(v===y||"file:"===f.protocol)return u(g+"from "+y);if(!p||-1<p.search(/(bot|spider|crawl)/gi))return u(g+"because bot detected");try{function M(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var B;try{B=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Q){}var O="(utm_)?",R={version:2,hostname:v,https:f.protocol===t,timezone:B,width:c.innerWidth,source:{source:M(O+"source|source|ref"),medium:M(O+"medium"),campaign:M(O+"campaign"),referrer:(m.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||undefined},pageviews:[]},$=0,k=null;c.addEventListener("visibilitychange",function(){m.hidden?k=Date.now():$+=Date.now()-k},!1);function A(e){return Math.round((Date.now()-(e||0))/1e3)}var C,H="sendBeacon",I=c.addEventListener,L=JSON.stringify,N=H in s&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(p);N&&I("unload",function(){var e=R[h][R[h].length-1];e.duration=A(T+$),$=0;var t=Math.max(0,b,z());t&&(e.scrolled=t),R.time=A(),s[H](d,L(R))},!1);var _="scroll",F=m.body,U=m.documentElement,z=function(){var e="Height",t=_+e,n="offset"+e,r="client"+e,a=Math.max(F[t],F[n],U[r],U[t],U[n]);return Math.min(100,5*Math.round(100*(U.scrollTop+U[r])/a/5))};I("load",function(){b=z(),I(_,function(){b<z()&&(b=z())})});function J(e,t,n){var r=R[h],a=r?r.length:0,i=a?r[a-1]:null;if(e===l){var o=""+t;if(i?i[l]?i[l].push(o):i[l]=[o]:N&&u("Couldn't save event '"+o+"'"),N)return;delete R[h],R[l]=[o]}else if(a&&(i.duration=A(T+$),i.scrolled=b),r.push(t),N)return T=Date.now(),$=0,void(b=c.setTimeout(z,500));var s=new XMLHttpRequest;s.open("POST",d,!0),n&&delete R.source,R.time=A(),s.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),s.send(L(R)),delete R[h],delete R[l]}function P(e){var t=f.pathname;if("hash"===S&&f.hash&&(t+=f.hash.split("?")[0]),C!==t){var n={path:C=t,added:A()};try{var r=c.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type);n.unique=!e&&!i&&(!m.referrer||m.referrer.split("/")[2]!==v)}catch(o){n.error=o.message}J(h,n,e)}}var W=c.history;if((W?W.pushState:null)&&Event&&E){W.pushState=(r=W[n=w],function(){var e=r.apply(this,arguments),t=new Event(n);return t.arguments=arguments,E(t),e}),I(w,function(){P(1)}),c.onpopstate=function(){P(1)}}"hash"===S&&"onhashchange"in c&&(c.onhashchange=function(){P(1)}),P();function X(e){J(l,e)}c[D]||(c[D]=X);var Z=c[D],j=Z&&Z.q?Z.q:[];for(var G in c[D]=X,j)J(l,j[G])}catch(Q){u(Q.message);var K=d+"image.gif";Q.message&&(K=K+"?error="+encodeURIComponent(Q.message)),(new Image).src=K}}}(window);