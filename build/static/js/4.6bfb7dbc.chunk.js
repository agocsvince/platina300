(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(0),s=t.n(r),c=t(156),i=t(153),u=t(155),l=t(149),o=t(150),d=t(151),p=t(152);t(146);u.a.use([l.a,o.a,d.a,p.a]);a.default=function(e){var a=Object(r.useState)([]),t=Object(n.a)(a,2),u=t[0],l=t[1];return Object(r.useEffect)(function(){fetch("https://api-eu-central-1.graphcms.com/v2/ckwq5z05y2e8n01xmgomm92ka/master?query=query%20MyQuery%20%7B%0A%20%20sliders%20%7B%0A%20%20%20%20pictures%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%09url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=MyQuery").then(function(e){return e.json()}).then(function(e){return l(e.data.sliders[0].pictures)})},[]),s.a.createElement(c.a,{slidesPerView:1.5,spaceBetween:30,centeredSlides:!0,loop:!0,lazy:!0,watchSlidesProgress:!0,preloadImages:!1,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0},u.map(function(e){return s.a.createElement(i.a,{className:"swiper-slide",key:e.id},s.a.createElement("div",{style:{backgroundImage:"url("+e.url+")"}}))}))}}}]);
//# sourceMappingURL=4.6bfb7dbc.chunk.js.map