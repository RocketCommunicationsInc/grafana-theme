/*! For license information please see module.js.LICENSE.txt */
define(["@emotion/react","@grafana/data","react"],((e,o,r)=>(()=>{"use strict";var t=[e=>{e.exports=r},o=>{o.exports=e},,e=>{e.exports=o}],a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var r in o)n.o(o,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{n.r(c),n.d(c,{plugin:()=>Ya});var e=n(3),o=n(0),r=n.n(o),t=n(1),a="40%",l="#101923",i="#172635",d="#142435",s="#1c3f5e",u="#1b2d3e",f="#172635",b="#1c3851",g="#1c3f5e",p="#4dacff",m="#92cbff",h="#ffffff",v="#d4d8dd",y="#a4abb6",x="#080c11",k="#4dacff",S="#92cbff",C="#ffffff",w="#000000",I="#ff3838",T="#4dacff",U="#92cbff",D="#2b659b",O="#ff3838",F="#ff3838",H="#ffb302",j="#fce83a",N="#56f000",E="#64d9ff",R="#a4abb6",M=" 0px 4px 4px 1px rgba(0, 0, 0, 0.45)",A="25%",B="35%",z="40%",W="45%",P="50%",L="#000000",_="#ffffff",Y="#cbdee9",V="#98bdd3",$="#649cbd",G="#2f7aa7",q="#005a8f",J="#004872",K="#1c3f5e",Q="#1b2d3e",X="#172635",Z="#080c11",ee="#daeeff",oe="#cee9fc",re="#b7dcff",te="#92cbff",ae="#4dacff",ne="#3a87cf",ce="#2b659b",le="#1c3851",ie="#142435",de="#101923",se="#f5f6f9",ue="#eaeef4",fe="#e0e5eb",be="#d4d8dd",ge="#bbc1c9",pe="#a4abb6",me="#7b8089",he="#51555b",ve="#3c3e42",ye="#292a2d",xe="#ff5f60",ke="#ff3838",Se="#ff2a04",Ce="#c8102e",we="#8b1703",Ie="#661102",Te="#ffcc57",Ue="#ffb302",De="#ffaf3d",Oe="#ff8c00",Fe="#975f0e",He="#664618",je="#fded61",Ne="#fce83a",Ee="#fad800",Re="#c7ab00",Me="#917d01",Ae="#645600",Be="#99f666",ze="#56f000",We="#00e200",Pe="#00ad23",Le="#007a33",_e="#005a00",Ye="#5ce2ff",Ve="#64d9ff",$e="#2dccff",Ge="#20a9d5",qe="#35798e",Je="#285766",Ke="#502b85",Qe="#0033a0",Xe="#d0f4f4",Ze="#a1e9eb",eo="#70dde0",oo="#3ed2d6",ro="#00c7cb",to="#009fa3",ao="#00777a",no="#035051",co="#032828",lo="#e4e2f7",io="#c9c5ed",so="#aea8e5",uo="#938bdb",fo="#786dd3",bo="#6058a8",go="#48417f",po="#302c54",mo="#18152b",ho="#edcef3",vo="#da9ce7",yo="#c76ada",xo="#b534ce",ko="#a200c1",So="#81009a",Co="#610074",wo="#41004d",Io="#200227",To="#f8ddd1",Uo="#f0baa3",Do="#ea9875",Oo="#e27545",Fo="#da5309",Ho="#af420a",jo="#833209",No="#572108",Eo="#2b1105",Ro=0,Mo="1px",Ao="2px",Bo="4px",zo="3px",Wo="50%",Po="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Lo="0.875rem",_o="1rem",Yo="1.25rem",Vo="1.5rem",$o="1.75rem",Go="2rem",qo="2.5rem",Jo="3.5rem",Ko="4.375rem",Qo="300",Xo="400",Zo="500",er="700",or="0.75rem",rr="0.875rem",tr="1rem",ar="1.125rem",nr="1.25rem",cr="1.5rem",lr="1.75rem",ir="2.125rem",dr="3rem",sr="3.75rem",ur="0.005em",fr="0.0025em",br="0em",gr="0.0015em",pr="-0.005em",mr="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",hr="400",vr="calc(24 / 16)",yr="1rem",xr="0.005em",kr="none",Sr="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Cr="400",wr="calc(20 / 14)",Ir="0.875rem",Tr="0.005em",Ur="none",Dr="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Or="400",Fr="calc(16 / 12)",Hr="0.75rem",jr="0.005em",Nr="none",Er="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Rr="400",Mr="calc(40 / 34)",Ar="2.125rem",Br="0.0025em",zr="none",Wr="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Pr="400",Lr="calc(28 / 24)",_r="1.5rem",Yr="0em",Vr="none",$r="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Gr="500",qr="calc(24 / 20)",Jr="1.25rem",Kr="0.0015em",Qr="none",Xr="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Zr="300",et="calc(24 / 20)",ot="1.25rem",rt="0.0015em",tt="none",at="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",nt="400",ct="calc(24 / 18)",lt="1.125rem",it="0em",dt="none",st="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",ut="300",ft="calc(24 / 18)",bt="1.125rem",gt="0em",pt="none",mt="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",ht="300",vt="calc(70 / 60)",yt="3.75rem",xt="-0.005em",kt="none",St="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Ct="400",wt="calc(56 / 48)",It="3rem",Tt="0em",Ut="none",Dt="'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",Ot="500",Ft="calc(32 / 28)",Ht="1.75rem",jt="0em",Nt="none",Et="#fce83a",Rt="#c8102e",Mt="#0033a0",At="#502b85",Bt="#007a33",zt="#4dacff",Wt="#92cbff",Pt="#172635",Lt="#ffffff",_t="inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5)",Yt="inset 1px 3px 3px 0px rgba(0, 0, 0, 0.5)",Vt="inset 0px 0px 5px 0px rgb(86, 240, 0)",$t="inset 0px 0px 5px 0px rgb(255, 56, 56)",Gt="inset 0px 0px 5px 0px rgb(164, 171, 182)",qt="#4dacff",Jt="#92cbff",Kt="#172635",Qt="#ffffff",Xt="inset 3px 3px 3px 0px rgba(0, 0, 0, 0.25)",Zt="inset 1px 3px 3px 0px rgba(0, 0, 0, 0.5)",ea="inset 0px 0px 5px 0px rgb(0, 226, 0)",oa="inset 0px 0px 5px 0px rgb(255, 42, 4)",ra="inset 0px 0px 5px 0px rgb(123, 128, 137)",ta="#eaeef4",aa="#f5f6f9",na="#98bdd3",ca="#cee9fc",la="#ffffff",ia="#f5f6f9",da="#daeeff",sa="#cee9fc",ua="#005a8f",fa="#004872",ba="#292a2d",ga="#51555b",pa="#7b8089",ma="#ffffff",ha="#005a8f",va="#004872",ya="#c8102e",xa="#005a8f",ka="#004872",Sa="#2f7aa7",Ca="#c8102e",wa=" 0px 4px 4px 1px rgba(0, 0, 0, 0.35)",Ia=function(e){var r=function(e){var o="light"===(null==e?void 0:e.mode),r={"gsb-icon-color-fill-default":zt,"gsb-icon-color-fill-hover":Wt,"gsb-color-background":Pt,"gsb-color-text":Lt,"scrollbar-shadow-inner-vertical":_t,"scrollbar-shadow-inner-horizontal":Yt,"tag-shadow-inner-pass":Vt,"tag-shadow-inner-fail":$t,"tag-shadow-inner-unknown":Gt,"color-background-base-default":l,"color-background-base-header":i,"color-background-base-hover":d,"color-background-base-selected":s,"color-background-surface-default":u,"color-background-surface-header":f,"color-background-surface-hover":b,"color-background-surface-selected":g,"color-background-interactive-default":p,"color-background-interactive-hover":m,"color-text-primary":h,"color-text-secondary":v,"color-text-placeholder":y,"color-text-inverse":x,"color-text-interactive-default":k,"color-text-interactive-hover":S,"color-text-error":I,"color-border-interactive-default":T,"color-border-interactive-hover":U,"color-border-interactive-muted":D,"color-border-error":O,"shadow-overlay":M};return o&&(r["gsb-icon-color-fill-default"]=qt,r["gsb-icon-color-fill-hover"]=Jt,r["gsb-color-background"]=Kt,r["gsb-color-text"]=Qt,r["scrollbar-shadow-inner-vertical"]=Xt,r["scrollbar-shadow-inner-horizontal"]=Zt,r["tag-shadow-inner-pass"]=ea,r["tag-shadow-inner-fail"]=oa,r["tag-shadow-inner-unknown"]=ra,r["color-background-base-default"]=ta,r["color-background-base-header"]=aa,r["color-background-base-hover"]=na,r["color-background-base-selected"]=ca,r["color-background-surface-default"]=la,r["color-background-surface-header"]=ia,r["color-background-surface-hover"]=da,r["color-background-surface-selected"]=sa,r["color-background-interactive-default"]=ua,r["color-background-interactive-hover"]=fa,r["color-text-primary"]=ba,r["color-text-secondary"]=ga,r["color-text-placeholder"]=pa,r["color-text-inverse"]=ma,r["color-text-interactive-default"]=ha,r["color-text-interactive-hover"]=va,r["color-text-error"]=ya,r["color-border-interactive-default"]=xa,r["color-border-interactive-hover"]=ka,r["color-border-interactive-muted"]=Sa,r["color-border-error"]=Ca,r["shadow-overlay"]=wa),{border:{width:{none:Ro,xs:Mo,sm:Ao,lg:Bo}},color:{background:{base:{default:r["color-background-base-default"],header:r["color-background-base-header"],hover:r["color-background-base-hover"],selected:r["color-background-base-selected"]},surface:{default:r["color-background-surface-default"],header:r["color-background-surface-header"],hover:r["color-background-surface-hover"],selected:r["color-background-surface-selected"]},interactive:{default:r["color-background-interactive-default"],hover:r["color-background-interactive-hover"]}},text:{primary:r["color-text-primary"],secondary:r["color-text-secondary"],placeholder:r["color-text-placeholder"],inverse:r["color-text-inverse"],interactive:{default:r["color-text-interactive-default"],hover:r["color-text-interactive-hover"]},white:C,black:w,error:I},border:{error:r["color-border-error"],interactive:{default:r["color-border-interactive-default"],hover:r["color-border-interactive-hover"],muted:r["color-border-interactive-muted"]}},status:{critical:F,serious:H,caution:j,normal:N,standby:E,off:R},classification:{topsecretsci:Et,topsecret:Et,secret:Rt,confidential:Mt,cui:At,unclassified:Bt}},opacity:{25:A,35:B,40:z,45:W,50:P,disabled:a},palette:{neutral:{1e3:L,"000":_},darkblue:{100:Y,200:V,300:$,400:G,500:q,600:J,700:K,800:Q,900:X,950:Z},brightblue:{100:ee,200:oe,300:re,400:te,500:ae,600:ne,700:ce,800:le,850:ie,900:de},grey:{100:se,200:ue,250:fe,300:be,400:ge,500:pe,600:me,700:he,800:ve,900:ye},red:{400:xe,500:ke,600:Se,700:Ce,800:we,900:Ie},orange:{400:Te,500:Ue,600:De,700:Oe,800:Fe,900:He},yellow:{400:je,500:Ne,600:Ee,700:Re,800:Me,900:Ae},green:{400:Be,500:ze,600:We,700:Pe,800:Le,900:_e},cyan:{400:Ye,500:Ve,600:$e,700:Ge,800:qe,900:Je},violet:{800:Ke},blue:{800:Qe},teal:{100:Xe,200:Ze,300:eo,400:oo,500:ro,600:to,700:ao,800:no,900:co},purple:{100:lo,200:io,300:so,400:uo,500:fo,600:bo,700:go,800:po,900:mo},pink:{100:ho,200:vo,300:yo,400:xo,500:ko,600:So,700:Co,800:wo,900:Io},hotorange:{100:To,200:Uo,300:Do,400:Oo,500:Fo,600:Ho,700:jo,800:No,900:Eo}},radius:{base:zo,circle:Wo},shadow:{base:r["shadow-overlay"]},spacing:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return e.map((function(e){return"".concat(.25*e,"rem")})).slice(0,4).join().replace(/[,]/g," ")},typography:{fontFamily:Po,body1:{fontFamily:mr,fontSize:yr,fontWeight:hr,lineHeight:vr,letterSpacing:xr,textDecoration:kr},body2:{fontFamily:Sr,fontSize:Ir,fontWeight:Cr,lineHeight:wr,letterSpacing:Tr,textDecoration:Ur},body3:{fontFamily:Dr,fontSize:Hr,fontWeight:Or,lineHeight:Fr,letterSpacing:jr,textDecoration:Nr},display1:{fontFamily:mt,fontSize:yt,fontWeight:ht,lineHeight:vt,letterSpacing:xt,textDecoration:kt},display2:{fontFamily:St,fontSize:It,fontWeight:Ct,lineHeight:wt,letterSpacing:Tt,textDecoration:Ut},h1:{fontFamily:Er,fontSize:Ar,fontWeight:Rr,lineHeight:Mr,letterSpacing:Br,textDecoration:zr},h2:{fontFamily:Wr,fontSize:_r,fontWeight:Pr,lineHeight:Lr,letterSpacing:Yr,textDecoration:Vr},h3:{fontFamily:$r,fontSize:Jr,fontWeight:Gr,lineHeight:qr,letterSpacing:Kr,textDecoration:Qr},h4:{fontFamily:Xr,fontSize:ot,fontWeight:Zr,lineHeight:et,letterSpacing:rt,textDecoration:tt},h5:{fontFamily:at,fontSize:lt,fontWeight:nt,lineHeight:ct,letterSpacing:it,textDecoration:dt},h6:{fontFamily:st,fontSize:bt,fontWeight:ut,lineHeight:ft,letterSpacing:gt,textDecoration:pt},monospace:{fontFamily:Dt,fontSize:Ht,fontWeight:Ot,lineHeight:Ft,letterSpacing:jt,textDecoration:Nt},lineHeight:{"2xs":Lo,xs:_o,sm:Yo,base:Vo,lg:$o,xl:Go,"2xl":qo,"3xl":Jo,"4xl":Ko},fontWeight:{light:Qo,regular:Xo,medium:Zo,bold:er},fontSize:{xs:or,sm:rr,base:tr,lg:ar,xl:nr,"2xl":cr,"3xl":lr,"4xl":ir,"5xl":dr,"6xl":sr},letterSpacing:{"2xl":ur,xl:fr,base:br,lg:gr,sm:pr}}}}(e);return(0,o.useEffect)((function(){var o=null==e?void 0:e.mode;if(o){if("light"===o)return document.body.classList.remove("dark-theme"),void document.body.classList.add("light-theme");document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")}}),[e]),r};function Ta(e,o){if(o.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+o.length+" present")}function Ua(e){return Ua="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ua(e)}function Da(e){Ta(1,arguments);var o=Object.prototype.toString.call(e);return e instanceof Date||"object"===Ua(e)&&"[object Date]"===o?new Date(e.getTime()):"number"==typeof e||"[object Number]"===o?new Date(e):new Date(NaN)}function Oa(e){Ta(1,arguments);var o=Da(e),r=new Date(0);return r.setFullYear(o.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Fa(e){var o=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return o.setUTCFullYear(e.getFullYear()),e.getTime()-o.getTime()}function Ha(e){Ta(1,arguments);var o=Da(e);return o.setHours(0,0,0,0),o}var ja,Na,Ea=864e5;function Ra(e,o){Ta(2,arguments);var r=Ha(e),t=Ha(o),a=r.getTime()-Fa(r),n=t.getTime()-Fa(t);return Math.round((a-n)/Ea)}function Ma(e){Ta(1,arguments);var o=Da(e),r=Ra(o,Oa(o)),t=r+1;return t}function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Aa.apply(this,arguments)}function Ba(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,n=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(n.push(t.value),!o||n.length!==o);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return n}(e,o)||function(e,o){if(!e)return;if("string"==typeof e)return za(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return za(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function za(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=e[r];return t}var Wa=function(e){var a=Ba((0,o.useState)(e.defaultTheme),1)[0],n=Ia({mode:a}),c=Ba((0,o.useState)(new Date(Date.now())),2),l=c[0],i=c[1],d=Ba((0,o.useState)(Ma(new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()))),2),s=d[0],u=d[1],f=Ba((0,o.useState)(l.toUTCString().slice(17,-3)),2),b=f[0],g=f[1];function p(){var e=new Date(Date.now()),o=e.toUTCString(),r=Ma(new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),t=o.slice(17,-3);g(t),i(new Date(Date.now())),u(r)}return(0,o.useEffect)((function(){var e=setInterval(p,1e3);return function(){clearInterval(e)}}),[]),r().createElement("div",{className:"rux-clock"},r().createElement("div",{className:"date-container"},r().createElement("div",{className:"j-day"},s),ja||(ja=r().createElement("div",{className:"date-label"},"Date"))),r().createElement("div",{className:"time-container"},r().createElement("div",{className:"time"},b," UTC"),Na||(Na=r().createElement("div",{className:"time-label"},"Time"))),r().createElement(t.Global,{styles:{".rux-clock":{color:n.color.text.primary,backgroundColor:n.color.background.base.default,display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",margin:n.spacing(2),".date-container":Aa({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},n.typography.monospace,{".date-label":Aa({background:n.color.background.surface.default},n.typography.body2,{width:"fill-available",textAlign:"center",display:"flex",justifyContent:"center",padding:n.spacing(0,3,0,3),lineHeight:n.typography.body3.lineHeight,height:n.spacing(6),alignItems:"center"}),".j-day":{display:"flex",alignItems:"center",whiteSpace:"nowrap",overflowY:"hidden",textOverflow:"ellipsis",height:n.spacing(10),padding:n.spacing(0,3),border:"1px solid ".concat(n.color.background.surface.default)}}),".time-container":Aa({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},n.typography.monospace,{".time-label":Aa({background:n.color.background.surface.default},n.typography.body2,{width:"fill-available",textAlign:"center",display:"flex",justifyContent:"center",padding:n.spacing(0,3,0,3),lineHeight:n.typography.body3.lineHeight,height:n.spacing(6),alignItems:"center"}),".time":{display:"flex",alignItems:"center",whiteSpace:"nowrap",overflowY:"hidden",textOverflow:"ellipsis",height:n.spacing(10),padding:n.spacing(0,3),border:"1px solid ".concat(n.color.background.surface.default)}})}}}))};function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Pa.apply(this,arguments)}function La(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,n=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(n.push(t.value),!o||n.length!==o);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return n}(e,o)||function(e,o){if(!e)return;if("string"==typeof e)return _a(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _a(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _a(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=e[r];return t}var Ya=new e.PanelPlugin((function(e){var a=e.options,n=La((0,o.useState)(a.defaultTheme),2),c=n[0],l=n[1],i=Ia({mode:c}),d=function(e){l("dark"===e?"dark":"light")};(0,o.useEffect)((function(){d(a.defaultTheme)}),[a.defaultTheme]);return r().createElement("div",{className:"astro-panel-container astro-panel-container--".concat(a.format)},a.classification?r().createElement("div",{className:"class-banner class-"+a.classification},{unclassified:"UNCLASSIFIED",cui:"CUI",controlled:"CONTROLLED",confidential:"CONFIDENTIAL",topSecret:"TOP SECRET",secret:"SECRET",topSecretSCI:"TOP SECRET//SCI"}[a.classification]):null,a.clock?r().createElement(Wa,{defaultTheme:a.defaultTheme}):null,!0===a.hideTheme?null:r().createElement("div",null,r().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem"}},r().createElement("div",{className:"astro-btn",onClick:function(){d("dark"===c?"light":"dark")},style:{height:"28px",padding:"0.25rem 4rem"}},"dark"===c?"Light Theme":"Dark Theme"))),r().createElement(t.Global,{styles:{".sidemenu":{backgroundColor:i.color.background.base.default,color:i.color.text.primary},".btn":{backgroundColor:i.color.background.interactive.default,borderRadius:i.radius.base,backgroundImage:"none",color:i.color.text.black},'button[aria-label="Open navigation menu"]':{backgroundColor:i.color.background.surface.default,":hover":{backgroundColor:i.color.background.surface.hover}},"svg:not(:root)":{fill:i.color.background.interactive.default},".css-1uf1299::before":{backgroundImage:"none",backgroundColor:i.color.background.interactive.default},"#TimePickerContent":{background:i.color.background.surface.default,color:i.color.text.primary,button:{background:i.color.background.interactive.default,color:i.color.text.inverse,borderRadius:i.radius.base,"&:hover":{background:i.color.background.interactive.hover,cursor:"pointer"},svg:{fill:"black"}}},'button[role="menuitemradio"]':{background:i.color.background.surface.default,color:i.color.text.interactive.default,"&:hover":{background:i.color.background.interactive.hover,color:i.color.text.inverse}},'button[aria-checked="true"]':{background:i.color.background.surface.selected},'ul[role="menu"]':{background:i.color.background.base.default,color:i.color.text.interactive.default,border:"1px solid ".concat(i.palette.brightblue[700])},'ul[role="menu"] > li[role="menuitem"] a':{background:i.color.background.surface.header,color:i.color.text.interactive.default,"&:hover":{color:i.color.text.interactive.hover,background:i.color.background.base.hover}},'ul[role="menu"] > li[role="menuitem"] > div > button':{background:i.color.background.surface.header,color:i.color.text.interactive.default,"&:hover":{color:i.color.text.interactive.hover,background:i.color.background.base.hover}},'li[role="menuitem"] a':{background:i.color.background.base.default,color:i.color.text.interactive.default,"&:hover":{color:i.color.text.interactive.hover,background:i.color.background.base.hover}},'div[data-testid="dropdown-child-divider"]':{borderBottom:"1px solid #51555b"},header:{backgroundColor:i.color.background.base.default,color:i.color.text.primary},".panel-container":{backgroundColor:i.color.background.surface.default,color:i.color.text.primary},".panel-title":{backgroundColor:i.color.background.surface.header,color:i.color.text.primary,h2:Pa({},i.typography.h4)},".dashboard-row":{color:i.color.text.primary},".dashboard-row__title":{color:i.color.text.primary},"nav a":{color:i.color.text.primary},".page-toolbar":{backgroundColor:i.color.background.base.default,color:i.color.text.primary,width:"100%"},".panel-info-corner--info .panel-info-corner-inner":{backgroundColor:i.color.background.surface.default,borderLeft:"32px solid ".concat(i.color.background.surface.header)},".panel-info-corner .fa":{color:i.color.text.interactive.default},".grafana-portal-container":{background:i.color.background.surface.default,color:i.color.text.primary,border:"1px solid ".concat(i.color.border.interactive)},".css-7dcs73":{background:i.color.background.base.default,border:"1px solid ".concat(i.color.border.interactive.muted),color:i.color.text.primary},'.css-7dcs73[data-popper-placement*="top"] .tooltip-arrow::before':{borderColor:"".concat(i.color.border.interactive.muted," transparent transparent")},'.css-7dcs73[data-popper-placement*="top"] .tooltip-arrow::after':{borderColor:"".concat(i.color.border.interactive.muted," transparent transparent")},".toolbar-button":{background:i.color.background.surface.default,color:i.color.text.primary},".dashboard-settings":{backgroundColor:i.color.background.base.default,color:i.color.text.primary},".dashboard-settings__aside":{backgroundColor:i.color.background.base.default,color:i.color.text.primary},".dashboard-settings__aside + div":{backgroundColor:i.color.background.surface.default,color:i.color.text.primary},'div[data-popper-reference-hidden="false"]':{background:i.color.background.surface.default},'div[data-popper-reference-hidden="false"] > :first-child':{background:i.color.background.surface.header},'form div textarea[class^="css-"]':Pa({},i.typography.body1,{background:i.color.background.base.default,border:"1px solid ".concat(i.color.border.interactive.muted),":hover":{outline:"none",borderColor:i.color.border.interactive.hover}}),body:{background:i.color.background.base.default},'input[class$="-input-input"]':Pa({border:"1px solid ".concat(i.color.border.interactive.muted),borderRadius:i.radius.base},i.typography.body1,{color:i.color.text.primary,backgroundColor:i.color.background.base.default,":hover":{border:"1px solid ".concat(i.color.border.interactive.hover),outline:"none"}}),'div[class*="-input-wrapper"]':Pa({border:"1px solid ".concat(i.color.border.interactive.muted),borderRadius:i.radius.base},i.typography.body1,{color:i.color.text.primary,backgroundColor:i.color.background.base.default,":hover":{border:"1px solid ".concat(i.color.border.interactive.hover),outline:"none"}}),'div[class$="layoutChildrenWrapper"] button':Pa({backgroundColor:i.color.background.interactive.default,borderRadius:i.radius.base,color:i.color.text.inverse},i.typography.body1,{":hover":{borderColor:"transparent",backgroundColor:i.color.background.interactive.hover,color:i.color.text.inverse},svg:{fill:i.color.text.black}}),"div[role=row]":{color:i.color.text.primary,borderColor:i.color.background.base.default,":hover":{background:i.color.background.surface.hover}},"div[role=row] > div[role=cell]":{borderTop:"1px solid ".concat(i.color.background.base.default)},"div[role=cell]":{color:i.color.text.primary,borderColor:i.color.background.base.default,borderBottomWidth:"1px",":hover":{background:i.color.background.surface.hover}},"div[role=columnheader]":{borderColor:i.color.background.base.default,background:i.color.background.surface.default,borderBottom:"1px solid ".concat(i.color.border.interactive.muted),button:Pa({},i.typography.h4,{color:i.color.text.primary})},".astro-btn":Pa({height:"28px",width:"80px",border:"none",display:"flex",position:"relative",margin:i.spacing(0),padding:i.spacing(2,4),borderRadius:i.radius.base,color:i.color.text.inverse},i.typography.body1,{whiteSpace:"nowrap",overflow:"hidden",justifyContent:"center",alignItems:"center",cursor:"pointer",userSelect:"none",backgroundColor:i.color.background.interactive.default,":hover":{borderColor:"transparent",backgroundColor:i.color.background.interactive.hover}}),".astro-panel-container":{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"},".astro-panel-container--left":{alignItems:"flex-start"},".astro-panel-container--center":{alignItems:"center"},".astro-panel-container--right":{alignItems:"flex-end"},".class-banner":{height:"24px",width:"100%",overflow:"hidden",textAlign:"center",color:i.color.text.primary,fontWeight:i.typography.fontWeight.bold,display:"flex",alignItems:"center",justifyContent:"center"},".class-unclassified":{background:i.color.classification.unclassified,color:i.color.text.white},".class-cui":{background:i.color.classification.cui,color:i.color.text.white},".class-controlled":{background:i.color.classification.cui,color:i.color.text.white},".class-confidential":{background:i.color.classification.confidential,color:i.color.text.white},".class-secret":{background:i.color.classification.secret,color:i.color.text.white},".class-topSecret":{background:i.color.classification.topsecret,color:i.color.text.black},".class-topSecretSCI":{background:i.color.classification.topsecretsci,color:i.color.text.black},".track-horizontal":{".thumb-horizontal":{background:i.color.border.interactive.muted,borderRadius:"8px",border:"1px solid transparent",backgroundClip:"padding-box",":hover":{backgroundColor:i.color.background.interactive.default}}},".track-vertical":{".thumb-vertical":{background:i.color.border.interactive.muted,borderRadius:"8px",backgroundClip:"padding-box",border:"1px solid transparent",":hover":{backgroundColor:i.color.background.interactive.default}}}}}))})).setPanelOptions((function(e){return e.addRadio({path:"defaultTheme",name:"Default Theme",defaultValue:"dark",settings:{options:[{value:"dark",label:"Dark"},{value:"light",label:"Light"}]}}),e.addBooleanSwitch({name:"Hide Theme Picker",path:"hideTheme",defaultValue:!1}),e.addRadio({path:"classification",name:"Classification",defaultValue:"unclassified",settings:{options:[{value:"unclassified",label:"Unclassified"},{value:"cui",label:"CUI"},{value:"controlled",label:"Controlled"},{value:"confidential",label:"Confidential"},{value:"secret",label:"Secret"},{value:"topSecret",label:"Top Secret"},{value:"topSecretSCI",label:"Top Secret//SCI"},{value:void 0,label:"None"}]}}),e.addBooleanSwitch({name:"Include Clock",path:"clock",defaultValue:!1}),e.addRadio({path:"format",name:"Format Astro Content",defaultValue:"center",settings:{options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}]}}),e}))})(),c})()));
//# sourceMappingURL=module.js.map