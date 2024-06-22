(()=>{"use strict";var n,e,t,o,i,r,c,a,l,d,s,u,p,m,h={208:(n,e,t)=>{t.d(e,{A:()=>N});var o=t(601),i=t.n(o),r=t(314),c=t.n(r),a=t(417),l=t.n(a),d=new URL(t(586),t.b),s=new URL(t(81),t.b),u=new URL(t(328),t.b),p=new URL(t(785),t.b),m=new URL(t(298),t.b),h=new URL(t(138),t.b),f=new URL(t(362),t.b),g=new URL(t(198),t.b),C=new URL(t(142),t.b),x=new URL(t(674),t.b),y=c()(i()),b=l()(d),v=l()(s),k=l()(u),w=l()(p),T=l()(m),I=l()(h),S=l()(f),q=l()(g),j=l()(C),E=l()(x);y.push([n.id,`:root {\n    --blue1: #000814;\n    /* --blue2: #001d3d; */\n    --blue2: #0f172a;\n    --blue3: #003566;\n    --yellow1: #ffc300;\n    --yellow2: #ffd60a;\n  }\n\n*{\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n}\n\nbody {\n    background-color: var(--blue2);\n    max-width: 100vw;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    min-height: 100vh;\n    align-items: center;\n    max-width: 100vw;\n}\n\n#menuBar {\n    position: sticky;\n    top: 0;\n    height: 45px;\n    width: 100vw;\n    max-width: 100vw;\n    /* min-width: 500px; */\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: right;\n    /* background-color: var(--blue2); */\n}\n\n#menuIconContainer {\n    width: 20%;\n    height: 100%;\n    background-color: brown;\n}\n\n#menuButtonContainer {\n    width: 170px;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: var(--blue3);\n    justify-content: right;\n    border-radius: 0px 0px 0px 5px;\n}\n\n.menuButton {\n    background-color: pink;\n    width: 30px;\n    height: 30px;\n    margin-right: 20px;\n}\n\n#gitButtonContainer {\n    background: url(${b});\n    background-repeat: no-repeat;\n    background-size: 30px 30px;\n    background-color: cornflowerblue;\n    border-radius: 5px;\n    /* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a> */\n    /* Icon by riajulislam */\n}\n\n#gitButtonContainer:hover {\n    background-color: rgb(154, 183, 238);\n    cursor: pointer;\n}\n\n#linkedinButtonContainer {\n    background: url(${v});\n    background-repeat: no-repeat;\n    background-size: 30px 30px;\n    background-color: cornflowerblue;\n    border-radius: 5px;\n    /* <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a> */\n    /* Icon by riajulislam */\n}\n\n#linkedinButtonContainer:hover {\n    background-color: rgb(154, 183, 238);\n    cursor: pointer;\n}\n\n#CVButtonContainer {\n    background: url(${k});\n    background-repeat: no-repeat;\n    background-size: 30px 30px;\n    background-color: cornflowerblue;\n    border-radius: 5px;\n    /* <a href="https://www.flaticon.com/free-icons/curriculum-vitae" title="curriculum vitae icons">Curriculum vitae icons created by edt.im - Flaticon</a> */\n    /* Icon By edt.im */\n}\n\n#CVButtonContainer:hover {\n    background-color: rgb(154, 183, 238);\n    cursor: pointer;\n}\n\n#flexContainer {\n    height: 100vh;\n    width: 100%;\n    max-width: 100vw;\n    background-color: blue;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    align-items: stretch;\n    justify-content: center;\n}\n\n#topSection {\n    height: 40em;\n    width: 100%;\n    max-width: 100vw;\n    background-color: var(--blue2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.padding {\n    width: 260px;\n    height: 100%;\n    /* background-color: aquamarine; */\n}\n\n#topCenterContainer {\n    display: flex;\n    height: 100%;\n    width: 1250px;\n    max-width: 1250px;\n    align-items: center;\n    justify-content: center;\n}\n\n#profileBlurbContainer {\n    /* background-color: #ffc300; */\n    width: 900px;\n    height: 600px;\n    margin-right: 30px;\n    padding-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: start;\n}\n\n#profileBlurbTitle {\n    width: 80%;\n    height: auto;\n    /* background-color: brown; */\n    margin-bottom: 20px;\n}\n\nh1 {\n    font-size: 4rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-weight: lighter;\n    color: antiquewhite;\n}\n\np {\n    font-size: 1.1rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: antiquewhite;\n}\n\n#profileBlurb {\n    margin-top: 30px;\n    width: 70%;\n    height: auto;\n    /* background-color: chocolate; */\n    margin-bottom: 20px;\n}\n\n#profilePicContainer {\n    /* background-color: #ffc300; */\n    width: 400px;\n    height: 600px;\n    margin-left: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    justify-content: center;\n}\n\n#profilePic {\n    background-color: wheat;\n    border-radius: 50%;\n    width: 350px;\n    height: 350px;\n    margin-bottom: 50px;\n    background: url(${w});\n    background-repeat: no-repeat;\n    background-size: 400px 400px;\n    filter: drop-shadow(-20px 20px 10px #000814);\n}\n\n#skillsContainer {\n    /* background-color: green; */\n    width: 100%;\n    height: 200px; \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#skillsTextContainer {\n    width: 100%;\n    height: 30px;\n}\n\n#skillsIconsContainer {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n}\n\n.skillsIconsOuter {\n    width: 60px;\n    height: 120px;\n    margin-right: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.skillsIconsInner {\n    width: 60px;\n    height: 60px;\n    background-color: white;\n    border-radius: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n}\n\n#skillsIconsInner3 {\n    background-color: none;\n    border-radius: 0px;\n}\n\n#skillsIconsInnerIcon1 {\n    height: 40px;\n    width: 40px;\n    background: url(${T});\n    background-repeat: no-repeat;\n    background-size: 40px 40px;\n}\n\n#skillsIconsInnerIcon2 {\n    height: 35px;\n    width: 35px;\n    background: url(${I});\n    background-repeat: no-repeat;\n    background-size: 35px 35px;\n}\n\n#skillsIconsInnerIcon3 {\n    height: 60px;\n    width: 60px;\n    background: url(${S});\n    background-repeat: no-repeat;\n    background-size: 60px 60px;\n}\n\n#skillsIconsInnerIcon4 {\n    height: 40px;\n    width: 40px;\n    background: url(${q});\n    background-repeat: no-repeat;\n    background-size: 40px 40px;\n}\n\n#skillsIconsInnerIcon5 {\n    height: 60px;\n    width: 60px;\n    background: url(${j});\n    background-repeat: no-repeat;\n    background-size: 60px 60px;\n}\n\n#midSection {\n    height: 18em;\n    width: 100%;\n    max-width: 100vw;\n    background-color: var(--blue1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#projectTitleContainer {\n    height: 3em;\n    width: 100%;\n    display: flex;\n    align-items: right;\n    justify-content: left;\n}\n\n#projectTitleleftpad {\n    width: 240px;\n    height: 100%;\n}\n\n#projectTitleTextContainer {\n    height: 3em;\n    width: 1250px;\n    margin-top: 15px;\n}\n\n#projectTitleText {\n    font-size: 1.5rem; \n}\n\n#projectTitleRightPad {\n    width: 240px;\n    height: 100%;\n}\n\n#projectPreviewContainer {\n    height: 16em;\n    width: 100%;\n    max-width: 100vw;\n    background-color: var(--blue1);\n    display: flex;\n    align-items: center;\n    justify-content: center; \n}\n\n.projectContainer {\n    background-color: #ffc300;\n    width: 400px;\n    height: 200px;\n    margin-left: 50px;\n    margin-right: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: end;\n}\n\n.descriptionContainer {\n    width: 100%;\n    height: 140px;\n    background-color: rgba(0, 0, 0, .8);\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 1rem;\n    color: antiquewhite;\n    /* padding: 10px; */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.projectPlaceholder {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 1.5rem;\n    font-weight: bolder;\n    color: black;\n    margin-bottom: 90px;\n}\n\n .descriptionText {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 0.8rem;\n    margin-left: 15px;\n    margin-right: 15px;\n    margin-top: 10px;\n }\n\n .projectButtonContainer {\n    height: 2rem;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: right;\n }\n\n #descriptionOneContainer {\n    display: none;\n }\n\n .projectButton {\n    background-color: #ffc300;\n    width: 120px;\n    height: 100%;\n    margin: 5px;\n    border-radius: 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n }\n\n .projectButtonText {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 0.8rem;\n    font-weight: bold;\n    color: #0f172a;\n }\n\n #descriptionTwoContainer {\n    display: none;\n }\n\n #descriptionThreeContainer {\n    display: none;\n }\n\n #projectOneContainer:hover > #descriptionOneContainer {\n    /* display: block; */\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    justify-content: end;\n }\n\n /* #projectTwoContainer:hover > #descriptionTwoContainer {\n    display: block;\n }\n\n #projectThreeContainer:hover > #descriptionThreeContainer {\n    display: block;\n } */\n\n #projectOneContainer {\n    background: url(${E});\n    background-repeat: no-repeat;\n    background-size: 400px 200px;\n }\n\n#botSection {\n    height: 30em;\n    width: 100%;\n    max-width: 100vw;\n    background-color: var(--blue2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#botContent {\n    display: flex;\n    height: 100%;\n    width: 1250px;\n    max-width: 1250px;\n    align-items: center;\n    justify-content: center;\n    padding-top: 30px;\n}\n\n#positionsContainer {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 700px;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1;\n}\n\n#positionsTitle {\n    width: 100%;\n    height: 100px;\n    /* background-color: pink; */\n    margin-bottom: 20px;  \n}\n\nh2 {\n    font-size: 1.5rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: antiquewhite;\n    font-weight: lighter;\n}\n\n.positions {\n    width: 100%;\n    height: 300px;\n    /* background-color: aquamarine; */\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.positionHeaderContainer {\n    width: 100%;\n    height: 40px;\n    /* background-color: rgb(255, 127, 234); */\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: antiquewhite;\n    font-weight: lighter;\n}\n\n.positionBodyContainer {\n    width: 100%;\n    flex-grow: 1;\n    /* background-color: rgb(136, 127, 255); */\n    font-size: 0.8rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: antiquewhite;\n    font-weight: lighter;\n}\n\n.positionDateContainer {\n    width: 100%;\n    height: 40px;\n    /* background-color: rgb(236, 255, 127); */\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: antiquewhite;\n    font-weight: lighter;\n}\n\n#contactContainer {\n    width: 300px;\n    height: 100%;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n.contactItem {\n    width: 60%;\n    height: 40px;\n    margin-bottom: 10px;\n    margin-top: 30px;\n    /* background-color: brown; */\n    font-size: 1.0rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: antiquewhite;\n    font-weight: lighter;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.contactItem:hover {\n    background-color: var(--blue3);\n    cursor: pointer;\n}\n\n#footerSection {\n    height: 10em;\n    width: 100%;\n    max-width: 100vw;\n    background-color: var(--blue1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n`,""]);const N=y},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(c[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},c=[],a=0;a<n.length;a++){var l=n[a],d=o.base?l[0]+o.base:l[0],s=r[d]||0,u="".concat(d," ").concat(s);r[d]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=i(m,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var c=0;c<r.length;c++){var a=t(r[c]);e[a].references--}for(var l=o(n,i),d=0;d<r.length;d++){var s=t(r[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},785:(n,e,t)=>{n.exports=t.p+"7168f2f914ee044432cc.jpg"},138:(n,e,t)=>{n.exports=t.p+"7654ce00c5ac2e76e015.png"},328:(n,e,t)=>{n.exports=t.p+"381a0159ce2090206acc.png"},586:(n,e,t)=>{n.exports=t.p+"05f6c17b8cd04c28456f.png"},298:(n,e,t)=>{n.exports=t.p+"bc58d250598f9407dbb1.png"},362:(n,e,t)=>{n.exports=t.p+"3dfb665e058d08c99f28.png"},198:(n,e,t)=>{n.exports=t.p+"baeaf4e503df195a6018.png"},81:(n,e,t)=>{n.exports=t.p+"3a391871f7b8ca16e386.png"},142:(n,e,t)=>{n.exports=t.p+"007e99f68b718e476aba.png"},674:(n,e,t)=>{n.exports=t.p+"2ececfb37b730526bf44.png"}},f={};function g(n){var e=f[n];if(void 0!==e)return e.exports;var t=f[n]={id:n,exports:{}};return h[n](t,t.exports,g),t.exports}g.m=h,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(72),e=g.n(n),t=g(825),o=g.n(t),i=g(659),r=g.n(i),c=g(56),a=g.n(c),l=g(540),d=g.n(l),s=g(113),u=g.n(s),p=g(208),(m={}).styleTagTransform=u(),m.setAttributes=a(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals,function(){const n=document.createElement("div");n.id="menuBar",document.querySelector(".content").appendChild(n);const e=document.createElement("div");e.id="menuButtonContainer",document.querySelector("#menuBar").appendChild(e);const t=document.createElement("div");t.id="gitButtonContainer",t.className="menuButton",document.querySelector("#menuButtonContainer").appendChild(t);const o=document.createElement("div");o.id="linkedinButtonContainer",o.className="menuButton",document.querySelector("#menuButtonContainer").appendChild(o);const i=document.createElement("div");i.id="CVButtonContainer",i.className="menuButton",document.querySelector("#menuButtonContainer").appendChild(i);const r=document.createElement("div");r.id="flexContainer",document.querySelector("#content").appendChild(r);const c=document.createElement("div");c.id="topSection",document.querySelector("#flexContainer").appendChild(c);const a=document.createElement("div");a.id="leftPadding",a.className="padding",document.querySelector("#topSection").appendChild(a);const l=document.createElement("div");l.id="topCenterContainer",document.querySelector("#topSection").appendChild(l);const d=document.createElement("div");d.id="profileBlurbContainer",document.querySelector("#topCenterContainer").appendChild(d);const s=document.createElement("div");s.id="profileBlurbTitle",document.querySelector("#profileBlurbContainer").appendChild(s);const u=document.createElement("H1");u.id="profileBlurbTitleText",u.innerHTML="Hi! my name is James...",document.querySelector("#profileBlurbTitle").appendChild(u);const p=document.createElement("div");p.id="profileBlurb",document.querySelector("#profileBlurbContainer").appendChild(p);const m=document.createElement("p");m.id="profileBlurbText",m.innerHTML="I'm an aspiring web developer based in Carmarthenshire, \n                    South Wales. After more than ten years working in CAD/CAM programming \n                    and production automation in the extrusion die industry, I am now beginning \n                    a new journey in web development. ",document.querySelector("#profileBlurb").appendChild(m);const h=document.createElement("div");h.id="skillsContainer",document.querySelector("#profileBlurbContainer").appendChild(h);const f=document.createElement("div");f.id="skillsTextContainer",document.querySelector("#skillsContainer").appendChild(f);const g=document.createElement("p");g.id="skillsText",g.innerHTML="I have experience in:",document.querySelector("#skillsTextContainer").appendChild(g);const C=document.createElement("div");C.id="skillsIconsContainer",document.querySelector("#skillsContainer").appendChild(C);const x=document.createElement("div");x.id="skillsIconsOuter1",x.className="skillsIconsOuter",document.querySelector("#skillsIconsContainer").appendChild(x);const y=document.createElement("div");y.id="skillsIconsInner1",y.className="skillsIconsInner",document.querySelector("#skillsIconsOuter1").appendChild(y);const b=document.createElement("div");b.id="skillsIconsInnerIcon1",b.className="skillsIconsInnerIcon",document.querySelector("#skillsIconsInner1").appendChild(b);const v=document.createElement("div");v.id="skillsTag1",v.className="skillsTag",document.querySelector("#skillsIconsOuter1").appendChild(v);const k=document.createElement("p");k.id="skillsText1",k.innerHTML="HTML5",document.querySelector("#skillsTag1").appendChild(k);const w=document.createElement("div");w.id="skillsIconsOuter2",w.className="skillsIconsOuter",document.querySelector("#skillsIconsContainer").appendChild(w);const T=document.createElement("div");T.id="skillsIconsInner2",T.className="skillsIconsInner",document.querySelector("#skillsIconsOuter2").appendChild(T);const I=document.createElement("div");I.id="skillsIconsInnerIcon2",I.className="skillsIconsInnerIcon",document.querySelector("#skillsIconsInner2").appendChild(I);const S=document.createElement("div");S.id="skillsTag2",S.className="skillsTag",document.querySelector("#skillsIconsOuter2").appendChild(S);const q=document.createElement("p");q.id="skillsText2",q.innerHTML="CSS3",document.querySelector("#skillsTag2").appendChild(q);const j=document.createElement("div");j.id="skillsIconsOuter3",j.className="skillsIconsOuter",document.querySelector("#skillsIconsContainer").appendChild(j);const E=document.createElement("div");E.id="skillsIconsInner3",E.className="skillsIconsInner",document.querySelector("#skillsIconsOuter3").appendChild(E);const N=document.createElement("div");N.id="skillsIconsInnerIcon3",N.className="skillsIconsInnerIcon",document.querySelector("#skillsIconsInner3").appendChild(N);const B=document.createElement("div");B.id="skillsTag3",B.className="skillsTag",document.querySelector("#skillsIconsOuter3").appendChild(B);const L=document.createElement("p");L.id="skillsText3",L.innerHTML="JavaScript",document.querySelector("#skillsTag3").appendChild(L);const M=document.createElement("div");M.id="skillsIconsOuter4",M.className="skillsIconsOuter",document.querySelector("#skillsIconsContainer").appendChild(M);const O=document.createElement("div");O.id="skillsIconsInner4",O.className="skillsIconsInner",document.querySelector("#skillsIconsOuter4").appendChild(O);const P=document.createElement("div");P.id="skillsIconsInnerIcon4",P.className="skillsIconsInnerIcon",document.querySelector("#skillsIconsInner4").appendChild(P);const H=document.createElement("div");H.id="skillsTag4",H.className="skillsTag",document.querySelector("#skillsIconsOuter4").appendChild(H);const z=document.createElement("p");z.id="skillsText4",z.innerHTML="React.js",document.querySelector("#skillsTag4").appendChild(z);const A=document.createElement("div");A.id="skillsIconsOuter5",A.className="skillsIconsOuter",document.querySelector("#skillsIconsContainer").appendChild(A);const V=document.createElement("div");V.id="skillsIconsInner5",V.className="skillsIconsInner",document.querySelector("#skillsIconsOuter5").appendChild(V);const G=document.createElement("div");G.id="skillsIconsInnerIcon5",G.className="skillsIconsInnerIcon",document.querySelector("#skillsIconsInner5").appendChild(G);const R=document.createElement("div");R.id="skillsTag5",R.className="skillsTag",document.querySelector("#skillsIconsOuter5").appendChild(R);const U=document.createElement("p");U.id="skillsText5",U.innerHTML="Node.js",document.querySelector("#skillsTag5").appendChild(U);const $=document.createElement("div");$.id="profilePicContainer",document.querySelector("#topCenterContainer").appendChild($);const D=document.createElement("div");D.id="profilePic",document.querySelector("#profilePicContainer").appendChild(D);const F=document.createElement("div");F.id="rightPadding",F.className="padding",document.querySelector("#topSection").appendChild(F);const _=document.createElement("div");_.id="midSection",document.querySelector("#flexContainer").appendChild(_);const W=document.createElement("div");W.id="projectTitleContainer",W.className="projectTitleContainer",document.querySelector("#midSection").appendChild(W);const J=document.createElement("div");J.id="projectTitleleftpad",J.className="padding",document.querySelector("#projectTitleContainer").appendChild(J);const Q=document.createElement("div");Q.id="projectTitleTextContainer",Q.className="projectTitleTextContainer",document.querySelector("#projectTitleContainer").appendChild(Q);const K=document.createElement("p");K.id="projectTitleText",K.innerHTML="Projects:",document.querySelector("#projectTitleTextContainer").appendChild(K);const X=document.createElement("div");X.id="projectTitleRightPad",X.className="padding",document.querySelector("#projectTitleContainer").appendChild(X);const Y=document.createElement("div");Y.id="projectPreviewContainer",Y.className="projectPreviewContainer",document.querySelector("#midSection").appendChild(Y);const Z=document.createElement("div");Z.id="projectOneContainer",Z.className="projectContainer",document.querySelector("#projectPreviewContainer").appendChild(Z);const nn=document.createElement("div");nn.id="descriptionOneContainer",nn.className="descriptionContainer",document.querySelector("#projectOneContainer").appendChild(nn);const en=document.createElement("p");en.id="descriptionOneText",en.className="descriptionText",en.innerHTML="WPMS (Works Progress Management System) - This is a system to track the \n                        production of the components of an extrusion die as they move across the \n                        factory floor. This project is the third version of WPMS and is primarily \n                        a re-design of the UI.  ",document.querySelector("#descriptionOneContainer").appendChild(en);const tn=document.createElement("div");tn.id="projectOneButtonContainer",tn.className="projectButtonContainer",document.querySelector("#descriptionOneContainer").appendChild(tn);const on=document.createElement("div");on.id="projectOneButton",on.className="projectButton",document.querySelector("#projectOneButtonContainer").appendChild(on);const rn=document.createElement("p");rn.id="projectOneButtonText",rn.className="projectButtonText",rn.innerHTML="See Project ->",document.querySelector("#projectOneButton").appendChild(rn);const cn=document.createElement("div");cn.id="projectTwoContainer",cn.className="projectContainer",document.querySelector("#projectPreviewContainer").appendChild(cn);const an=document.createElement("p");an.id="projectTwoPlaceholder",an.className="projectPlaceholder",an.innerHTML="Coming Soon",document.querySelector("#projectTwoContainer").appendChild(an);const ln=document.createElement("div");ln.id="descriptionTwoContainer",ln.className="descriptionContainer",document.querySelector("#projectTwoContainer").appendChild(ln);const dn=document.createElement("div");dn.id="projectThreeContainer",dn.className="projectContainer",document.querySelector("#projectPreviewContainer").appendChild(dn);const sn=document.createElement("p");sn.id="projectThreePlaceholder",sn.className="projectPlaceholder",sn.innerHTML="Coming Soon",document.querySelector("#projectThreeContainer").appendChild(sn);const un=document.createElement("div");un.id="descriptionThreeContainer",un.className="descriptionContainer",document.querySelector("#projectThreeContainer").appendChild(un);const pn=document.createElement("div");pn.id="botSection",document.querySelector("#flexContainer").appendChild(pn);const mn=document.createElement("div");mn.id="botLeftPadding",mn.className="padding",document.querySelector("#botSection").appendChild(mn);const hn=document.createElement("div");hn.id="botContent",document.querySelector("#botSection").appendChild(hn);const fn=document.createElement("div");fn.id="positionsContainer",document.querySelector("#botContent").appendChild(fn);const gn=document.createElement("div");gn.id="positionsTitle",document.querySelector("#positionsContainer").appendChild(gn);const Cn=document.createElement("H2");Cn.id="positionsTitleText",Cn.innerHTML="Previous Positions:",document.querySelector("#positionsTitle").appendChild(Cn);const xn=document.createElement("div");xn.id="positionsOne",xn.className="positions",document.querySelector("#positionsContainer").appendChild(xn);const yn=document.createElement("div");yn.id="positionsHeaderContainerOne",yn.className="positionHeaderContainer",yn.innerHTML="CAD/CAM Programmer & IT Manager - Alutool Preform Ltd",document.querySelector("#positionsOne").appendChild(yn);const bn=document.createElement("div");bn.id="positionsDateContainerOne",bn.className="positionDateContainer",bn.innerHTML="2019 - 2024",document.querySelector("#positionsOne").appendChild(bn);const vn=document.createElement("div");vn.id="positionsBodyContainerOne",vn.className="positionBodyContainer",vn.innerHTML="In this role, I was responsible for creating CAD/CAM output, including \n                            developing new solid-modelling methods, and production automation procedures. \n                            I was also responsible for producing internal production tools, such as WPMS shown above.",document.querySelector("#positionsOne").appendChild(vn);const kn=document.createElement("div");kn.id="positionsTwo",kn.className="positions",document.querySelector("#positionsContainer").appendChild(kn);const wn=document.createElement("div");wn.id="positionsHeaderContainerTwo",wn.className="positionHeaderContainer",wn.innerHTML="CAD/CAM Programmer - Extrusion Form Tools Ltd",document.querySelector("#positionsTwo").appendChild(wn);const Tn=document.createElement("div");Tn.id="positionsDateContainerTwo",Tn.className="positionDateContainer",Tn.innerHTML="2013 - 2019",document.querySelector("#positionsTwo").appendChild(Tn);const In=document.createElement("div");In.id="positionsBodyContainerTwo",In.className="positionBodyContainer",In.innerHTML="In this role, I was responsible for creating CAM output for CNC mills \n                            and wire-EDM, as well as developing production automation processes and \n                            CAM macros. I was also responsible for using CMM to ensure production quality. ",document.querySelector("#positionsTwo").appendChild(In);const Sn=document.createElement("div");Sn.id="contactContainer",document.querySelector("#botContent").appendChild(Sn);const qn=document.createElement("div");qn.id="contactGitContainer",qn.className="contactItem",qn.innerHTML="Find me on GitHub",document.querySelector("#contactContainer").appendChild(qn);const jn=document.createElement("div");jn.id="contactLinkedContainer",jn.className="contactItem",jn.innerHTML="Find me on LinkedIn",document.querySelector("#contactContainer").appendChild(jn);const En=document.createElement("div");En.id="contactCVContainer",En.className="contactItem",En.innerHTML="See my full CV here",document.querySelector("#contactContainer").appendChild(En);const Nn=document.createElement("div");Nn.id="botRightPadding",Nn.className="padding",document.querySelector("#botSection").appendChild(Nn);const Bn=document.createElement("div");Bn.id="footerSection",document.querySelector("#flexContainer").appendChild(Bn)}(),document.querySelector("#gitButtonContainer").addEventListener("click",(function(){location.href="https://github.com/jetmdl"}),!1),document.querySelector("#contactGitContainer").addEventListener("click",(function(){location.href="https://github.com/jetmdl"}),!1),document.querySelector("#linkedinButtonContainer").addEventListener("click",(function(){location.href="https://www.linkedin.com/in/james-tarrant-3925b02a5/"}),!1),document.querySelector("#contactLinkedContainer").addEventListener("click",(function(){location.href="https://www.linkedin.com/in/james-tarrant-3925b02a5/"}),!1),document.querySelector("#CVButtonContainer").addEventListener("click",(function(){window.open("./2024_CV_Generic.pdf")}),!1),document.querySelector("#contactCVContainer").addEventListener("click",(function(){window.open("./2024_CV_Generic.pdf")}),!1)})();