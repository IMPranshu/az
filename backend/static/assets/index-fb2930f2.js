import{bz as Z,bA as e,bB as ue,bC as Ie,bD as Be,r as c,bE as xe,bF as Oe,bG as Qe,bH as Fe,bI as Ge,bJ as $e,bK as qe,bL as De,bM as Ue,bN as He,bO as ze,bP as de,bQ as We}from"./vendor-6b183ce4.js";import{D as fe,S as v,P as Ke,T as Ve,a as Je,B as ve,b as Xe,c as Ye,d as he,L as Ze,e as et,f as tt,g as pe,h as st,i as nt,j as at,C as I,k as ot,l as rt}from"./fluentui-react-a703efc7.js";import{E as it,e as ct,D as lt}from"./fluentui-icons-b19b89b5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();async function ut(){const t=await fetch("/auth_setup");if(!t.ok)throw new Error(`auth setup response was not ok: ${t.status}`);return await t.json()}const B=await ut(),L=B.useLogin,dt=B.msalConfig,ht=B.loginRequest,pt=B.tokenRequest,mt=t=>t.acquireTokenSilent({...pt,redirectUri:B.msalConfig.auth.redirectUri}).catch(n=>{console.log(n)});const gt="_layout_1nrkm_1",_t="_header_1nrkm_7",xt="_headerContainer_1nrkm_12",ft="_headerTitleContainer_1nrkm_20",vt="_headerLogo_1nrkm_28",Ct="_headerTitle_1nrkm_20",St="_headerNavList_1nrkm_37",yt="_headerNavPageLink_1nrkm_43",jt="_headerNavPageLinkActive_1nrkm_57",bt="_headerNavLeftMargin_1nrkm_62",wt="_headerRightText_1nrkm_66",Tt="_microsoftLogo_1nrkm_71",kt="_githubLogo_1nrkm_76",j={layout:gt,header:_t,headerContainer:xt,headerTitleContainer:ft,headerLogo:vt,headerTitle:Ct,headerNavList:St,headerNavPageLink:yt,headerNavPageLinkActive:jt,headerNavLeftMargin:bt,headerRightText:wt,microsoftLogo:Tt,githubLogo:kt},Nt="_loginButton_1y8c5_1",Lt={loginButton:Nt},At=()=>{const{instance:t}=Z(),n=t.getActiveAccount(),l=()=>{t.loginPopup({...ht,redirectUri:"/redirect"}).catch(s=>console.log(s))},h=()=>{t.logoutPopup({mainWindowRedirectUri:"/",account:t.getActiveAccount()}).catch(s=>console.log(s))},o=`Logout
${n?.username}`;return e.jsx(fe,{text:n?o:"Login",className:Lt.loginButton,onClick:n?h:l})},me=()=>e.jsxs("div",{className:j.layout,children:[e.jsx("header",{className:j.header,role:"banner",children:e.jsxs("div",{className:j.headerContainer,children:[e.jsx("nav",{children:e.jsxs("ul",{className:j.headerNavList,children:[e.jsx("li",{children:e.jsx(ue,{to:"/",className:({isActive:t})=>t?j.headerNavPageLinkActive:j.headerNavPageLink,children:"Chat"})}),e.jsx("li",{className:j.headerNavLeftMargin,children:e.jsx(ue,{to:"/qa",className:({isActive:t})=>t?j.headerNavPageLinkActive:j.headerNavPageLink,children:"Generate"})})]})}),L&&e.jsx(At,{})]})}),e.jsx(Ie,{})]}),Rt="_container_18ti9_1",Pt="_chatRoot_18ti9_8",Et="_chatContainer_18ti9_13",Mt="_chatEmptyState_18ti9_21",It="_chatEmptyStateTitle_18ti9_31",Bt="_chatEmptyStateSubtitle_18ti9_38",Ot="_chatMessageStream_18ti9_54",Qt="_chatMessageGpt_18ti9_66",Ft="_chatMessageGptMinWidth_18ti9_73",Gt="_chatInput_18ti9_78",$t="_chatAnalysisPanel_18ti9_91",qt="_chatSettingsSeparator_18ti9_99",Dt="_loadingLogo_18ti9_103",Ut="_commandsContainer_18ti9_107",Ht="_commandButton_18ti9_112",p={container:Rt,chatRoot:Pt,chatContainer:Et,chatEmptyState:Mt,chatEmptyStateTitle:It,chatEmptyStateSubtitle:Bt,chatMessageStream:Ot,chatMessageGpt:Qt,chatMessageGptMinWidth:Ft,chatInput:Gt,chatAnalysisPanel:$t,chatSettingsSeparator:qt,loadingLogo:Dt,commandsContainer:Ut,commandButton:Ht},Ce="";function zt(t){var n={"Content-Type":"application/json"};return L&&t&&(n.Authorization=`Bearer ${t}`),n}async function Wt(t){const n=t.shouldStream?"chat_stream":"chat";return await fetch(`${Ce}/${n}`,{method:"POST",headers:zt(t.idToken),body:JSON.stringify({history:t.history,approach:t.approach,overrides:{retrieval_mode:t.overrides?.retrievalMode,semantic_ranker:t.overrides?.semanticRanker,semantic_captions:t.overrides?.semanticCaptions,top:t.overrides?.top,temperature:t.overrides?.temperature,prompt_template:t.overrides?.promptTemplate,prompt_template_prefix:t.overrides?.promptTemplatePrefix,prompt_template_suffix:t.overrides?.promptTemplateSuffix,exclude_category:t.overrides?.excludeCategory,suggest_followup_questions:t.overrides?.suggestFollowupQuestions,use_oid_security_filter:t.overrides?.useOidSecurityFilter,use_groups_security_filter:t.overrides?.useGroupsSecurityFilter}})})}function Se(t){return`${Ce}/content/${t}`}var ye=(t=>(t.RetrieveThenRead="rtr",t.ReadRetrieveRead="rrr",t.ReadDecomposeAsk="rda",t))(ye||{}),b=(t=>(t.Hybrid="hybrid",t.Vectors="vectors",t.Text="text",t))(b||{});const Kt="_answerContainer_9n41r_1",Vt="_answerLogo_9n41r_9",Jt="_answerText_9n41r_13",Xt="_selected_9n41r_32",Yt="_citationLearnMore_9n41r_36",Zt="_citation_9n41r_36",es="_followupQuestionsList_9n41r_58",ts="_followupQuestionLearnMore_9n41r_62",ss="_followupQuestion_9n41r_58",ns="_supContainer_9n41r_81",as="_retryButton_9n41r_110",os="_loadingdots_9n41r_132",rs="_loading_9n41r_132",m={answerContainer:Kt,answerLogo:Vt,answerText:Jt,selected:Xt,citationLearnMore:Yt,citation:Zt,followupQuestionsList:es,followupQuestionLearnMore:ts,followupQuestion:ss,supContainer:ns,retryButton:as,loadingdots:os,loading:rs};function is(t,n,l){const h=[],o=[];let s=t.replace(/<<([^>>]+)>>/g,(d,C)=>(o.push(C),""));if(s=s.trim(),n){let d=s.length;for(let i=s.length-1;i>=0&&s[i]!=="]";i--)if(s[i]==="["){d=i;break}s=s.substring(0,d)}return{answerHtml:s.split(/\[([^\]]+)\]/g).map((d,C)=>{if(C%2===0)return d;{let i;h.indexOf(d)!==-1?i=h.indexOf(d)+1:(h.push(d),i=h.length);const g=Se(d);return Be(e.jsx("a",{className:"supContainer",title:d,onClick:()=>l(g),children:e.jsx("sup",{children:i})}))}}).join(""),citations:h,followupQuestions:o}}const ge=({answer:t,isSelected:n,isStreaming:l,onCitationClicked:h,onThoughtProcessClicked:o,onSupportingContentClicked:s,onFollowupQuestionClicked:u,showFollowupQuestions:x})=>{const d=c.useMemo(()=>is(t.answer,l,h),[t]),C=xe.sanitize(d.answerHtml);return e.jsxs(v,{className:`${m.answerContainer} ${n&&m.selected}`,verticalAlign:"space-between",children:[e.jsx(v.Item,{grow:!0,children:e.jsx("div",{className:m.answerText,dangerouslySetInnerHTML:{__html:C}})}),!!d.citations.length&&e.jsx(v.Item,{children:e.jsxs(v,{horizontal:!0,wrap:!0,tokens:{childrenGap:5},children:[e.jsx("span",{className:m.citationLearnMore,children:"Citations:"}),d.citations.map((i,g)=>{const D=Se(i);return e.jsx("a",{className:m.citation,title:i,onClick:()=>h(D),children:`${++g}. ${i}`},g)})]})}),!!d.followupQuestions.length&&x&&u&&e.jsx(v.Item,{children:e.jsxs(v,{horizontal:!0,wrap:!0,className:`${d.citations.length?m.followupQuestionsList:""}`,tokens:{childrenGap:6},children:[e.jsx("span",{className:m.followupQuestionLearnMore,children:"Follow-up questions:"}),d.followupQuestions.map((i,g)=>e.jsx("a",{className:m.followupQuestion,title:i,onClick:()=>u(i),children:`${i}`},g))]})})]})},cs=()=>{const t=Oe({from:{opacity:0},to:{opacity:1}});return e.jsx(Qe.div,{style:{...t},children:e.jsx(v,{className:m.answerContainer,verticalAlign:"space-between",children:e.jsx(v.Item,{grow:!0,children:e.jsxs("p",{className:m.answerText,children:["Generating answer",e.jsx("span",{className:m.loadingdots})]})})})})},ls=({error:t,onRetry:n})=>e.jsxs(v,{className:m.answerContainer,verticalAlign:"space-between",children:[e.jsx(it,{"aria-hidden":"true","aria-label":"Error icon",primaryFill:"red"}),e.jsx(v.Item,{grow:!0,children:e.jsx("p",{className:m.answerText,children:t})}),e.jsx(Ke,{className:m.retryButton,onClick:n,text:"Retry"})]}),us="_questionInputContainer_1e00p_1",ds="_questionInputTextArea_1e00p_10",hs="_questionInputButtonsContainer_1e00p_15",J={questionInputContainer:us,questionInputTextArea:ds,questionInputButtonsContainer:hs},ps=({onSend:t,disabled:n,placeholder:l,clearOnSend:h})=>{const[o,s]=c.useState(""),u=()=>{n||!o.trim()||(t(o),h&&s(""))},x=i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),u())},d=(i,g)=>{g?g.length<=1e3&&s(g):s("")},C=n||!o.trim();return e.jsxs(v,{horizontal:!0,className:J.questionInputContainer,children:[e.jsx(Ve,{className:J.questionInputTextArea,placeholder:l,multiline:!0,resizable:!1,borderless:!0,value:o,onChange:d,onKeyDown:x}),e.jsx("div",{className:J.questionInputButtonsContainer,children:e.jsx(Je,{content:"Ask question button",relationship:"label",children:e.jsx(ve,{size:"large",icon:e.jsx(ct,{primaryFill:"rgba(115, 118, 225, 1)"}),disabled:C,onClick:u})})})]})},ms="_examplesNavList_np86t_1",gs="_example_np86t_1",_s="_exampleText_np86t_29",X={examplesNavList:ms,example:gs,exampleText:_s},xs=({text:t,value:n,onClick:l})=>e.jsx("div",{className:X.example,onClick:()=>l(n),children:e.jsx("p",{className:X.exampleText,children:t})}),fs=[{text:"Tell me something about WBSO.",value:"Tell me something about WBSO"},{text:"Explain benefits of starting a business here.",value:"Explain benefits of starting a business here."},{text:"Pros of WBSO",value:"Pros of WBSO"}],vs=({onExampleClicked:t})=>e.jsx("ul",{className:X.examplesNavList,children:fs.map((n,l)=>e.jsx("li",{children:e.jsx(xs,{text:n.text,value:n.value,onClick:t})},l))}),Cs="_container_1rakl_1",Ss="_message_1rakl_9",_e={container:Cs,message:Ss},q=({message:t})=>e.jsx("div",{className:_e.container,children:e.jsx("div",{className:_e.message,children:t})});var w=(t=>(t.ThoughtProcessTab="thoughtProcess",t.SupportingContentTab="supportingContent",t.CitationTab="citation",t))(w||{});const ys={disabled:!0,style:{color:"grey"}},js=({answer:t,activeTab:n,activeCitation:l,citationHeight:h,className:o,onActiveTabChanged:s})=>{t.thoughts,t.data_points.length;const u=!l;return xe.sanitize(t.thoughts),e.jsx(Xe,{className:o,selectedKey:n,onLinkClick:x=>x&&s(x.props.itemKey),children:e.jsx(Ye,{itemKey:w.CitationTab,headerText:"Citation",headerButtonProps:u?ys:void 0,children:e.jsx("iframe",{title:"Citation",src:l,width:"100%",height:h})})})},bs="_container_cfwv2_1",ws={container:bs},Ts=({className:t,disabled:n,onClick:l})=>e.jsx("div",{className:`${ws.container} ${t??""}`,children:e.jsx(ve,{icon:e.jsx(lt,{}),disabled:n,onClick:l,children:"Clear chat"})}),ks=()=>{const{instance:t}=Z(),n=t.getActiveAccount(),l=s=>typeof s=="string"?s:JSON.stringify(s),h=n?.idTokenClaims?Object.keys(n.idTokenClaims).map(s=>({name:s,value:l((n.idTokenClaims??{})[s])})):[],o=[he({columnId:"name",compare:(s,u)=>s.name.localeCompare(u.name),renderHeaderCell:()=>"Name",renderCell:s=>s.name}),he({columnId:"value",compare:(s,u)=>s.value.localeCompare(u.value),renderHeaderCell:()=>"Value",renderCell:s=>s.value})];return e.jsxs("div",{children:[e.jsx(Ze,{children:"ID Token Claims"}),e.jsxs(et,{items:h,columns:o,sortable:!0,getRowId:s=>s.name,children:[e.jsx(tt,{children:e.jsx(pe,{children:({renderHeaderCell:s})=>e.jsx(st,{children:s()})})}),e.jsx(nt,{children:({item:s,rowId:u})=>e.jsx(pe,{children:({renderCell:x})=>e.jsx(at,{children:x(s)})},u)})]})]})},Ns=()=>{const[t,n]=c.useState(!1),[l,h]=c.useState(""),[o,s]=c.useState(3),[u,x]=c.useState(b.Hybrid),[d,C]=c.useState(!0),[i,g]=c.useState(!0),[D,As]=c.useState(!1),[ee,Rs]=c.useState(""),[U,Ps]=c.useState(!1),[te,je]=c.useState(!1),[se,be]=c.useState(!1),T=c.useRef(""),H=c.useRef(null),[O,Q]=c.useState(!1),[ne,z]=c.useState(!1),[F,W]=c.useState(),[ae,K]=c.useState(),[R,A]=c.useState(void 0),[P,oe]=c.useState(0),[S,G]=c.useState([]),[re,ie]=c.useState([]),we=async(r,a,_,V)=>{let y="",f={};const Pe=k=>new Promise(Ee=>{setTimeout(()=>{y+=k;const Me={...f,answer:y};ie([...a,[r,Me]]),Ee(null)},33)});try{z(!0);for await(const k of Fe(V))k.data_points?f=k:k.choices&&k.choices[0].delta.content&&(Q(!1),await Pe(k.choices[0].delta.content))}finally{z(!1)}return{...f,answer:y}},$=L?Z().instance:void 0,E=async r=>{T.current=r,F&&W(void 0),Q(!0),K(void 0),A(void 0);const a=$?await mt($):void 0;try{const V={history:[...S.map(f=>({user:f[0],bot:f[1].answer})),{user:r,bot:void 0}],approach:ye.ReadRetrieveRead,shouldStream:i,overrides:{promptTemplate:l.length===0?void 0:l,excludeCategory:ee.length===0?void 0:ee,top:o,retrievalMode:u,semanticRanker:d,semanticCaptions:D,suggestFollowupQuestions:U,useOidSecurityFilter:te,useGroupsSecurityFilter:se},idToken:a?.accessToken},y=await Wt(V);if(!y.body)throw Error("No response body");if(i){const f=await we(r,S,G,y.body);G([...S,[r,f]])}else{const f=await y.json();if(y.status>299||!y.ok)throw Error(f.error||"Unknown error");G([...S,[r,f]])}}catch(_){W(_)}finally{Q(!1)}},Te=()=>{T.current="",F&&W(void 0),K(void 0),A(void 0),G([]),ie([]),Q(!1),z(!1)};c.useEffect(()=>H.current?.scrollIntoView({behavior:"smooth"}),[O]),c.useEffect(()=>H.current?.scrollIntoView({behavior:"auto"}),[re]);const ke=(r,a,_)=>{x(a?.data||b.Hybrid)},ce=(r,a)=>{C(!!a)},Ne=(r,a)=>{g(!!a)},Le=(r,a)=>{je(!!a)},Ae=(r,a)=>{be(!!a)},Re=r=>{E(r)},le=(r,a)=>{ae===r&&R===w.CitationTab&&P===a?A(void 0):(K(r),A(w.CitationTab)),oe(a)},M=(r,a)=>{A(R===r&&P===a?void 0:r),oe(a)};return e.jsxs("div",{className:p.container,children:[e.jsx("div",{className:p.commandsContainer}),e.jsxs("div",{className:p.chatRoot,children:[e.jsxs("div",{className:p.chatContainer,children:[T.current?e.jsxs("div",{className:p.chatMessageStream,children:[ne&&re.map((r,a)=>e.jsxs("div",{children:[e.jsx(q,{message:r[0]}),e.jsx("div",{className:p.chatMessageGpt,children:e.jsx(ge,{isStreaming:!0,answer:r[1],isSelected:!1,onCitationClicked:_=>le(_,a),onThoughtProcessClicked:()=>M(w.ThoughtProcessTab,a),onSupportingContentClicked:()=>M(w.SupportingContentTab,a),onFollowupQuestionClicked:_=>E(_),showFollowupQuestions:U&&S.length-1===a},a)})]},a)),!ne&&S.map((r,a)=>e.jsxs("div",{children:[e.jsx(q,{message:r[0]}),e.jsx("div",{className:p.chatMessageGpt,children:e.jsx(ge,{isStreaming:!1,answer:r[1],isSelected:P===a&&R!==void 0,onCitationClicked:_=>le(_,a),onThoughtProcessClicked:()=>M(w.ThoughtProcessTab,a),onSupportingContentClicked:()=>M(w.SupportingContentTab,a),onFollowupQuestionClicked:_=>E(_),showFollowupQuestions:U&&S.length-1===a},a)})]},a)),O&&e.jsxs(e.Fragment,{children:[e.jsx(q,{message:T.current}),e.jsx("div",{className:p.chatMessageGptMinWidth,children:e.jsx(cs,{})})]}),F?e.jsxs(e.Fragment,{children:[e.jsx(q,{message:T.current}),e.jsx("div",{className:p.chatMessageGptMinWidth,children:e.jsx(ls,{error:F.toString(),onRetry:()=>E(T.current)})})]}):null,e.jsx("div",{ref:H})]}):e.jsxs("div",{className:p.chatEmptyState,children:[e.jsx("h2",{className:p.chatEmptyStateSubtitle,children:"Start Chatting...or try an example"}),e.jsx(vs,{onExampleClicked:Re})]}),e.jsxs("div",{className:p.chatInput,children:[e.jsx(ps,{clearOnSend:!0,placeholder:"Type a new question (e.g. does WBSO help save taxes?)",disabled:O,onSend:r=>E(r)}),e.jsx(I,{className:p.chatSettingsSeparator,checked:d,label:"Use Cognitive Search",onChange:ce})]}),e.jsx(Ts,{className:p.commandButton,onClick:Te,disabled:!T.current||O})]}),S.length>0&&R&&e.jsx(js,{className:p.chatAnalysisPanel,activeCitation:ae,onActiveTabChanged:r=>M(r,P),citationHeight:"810px",answer:S[P][1],activeTab:R}),e.jsxs(ot,{headerText:"Configure answer generation",isOpen:t,isBlocking:!1,onDismiss:()=>n(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e.jsx(fe,{onClick:()=>n(!1),children:"Close"}),isFooterAtBottom:!0,children:[e.jsx(I,{className:p.chatSettingsSeparator,checked:d,label:"Use Cognitive Search",onChange:ce}),L&&e.jsx(I,{className:p.chatSettingsSeparator,checked:te,label:"Use oid security filter",disabled:!$?.getActiveAccount(),onChange:Le}),L&&e.jsx(I,{className:p.chatSettingsSeparator,checked:se,label:"Use groups security filter",disabled:!$?.getActiveAccount(),onChange:Ae}),e.jsx(rt,{className:p.chatSettingsSeparator,label:"Retrieval mode",options:[{key:"hybrid",text:"Vectors + Text (Hybrid)",selected:u==b.Hybrid,data:b.Hybrid},{key:"vectors",text:"Vectors",selected:u==b.Vectors,data:b.Vectors},{key:"text",text:"Text",selected:u==b.Text,data:b.Text}],required:!0,onChange:ke}),e.jsx(I,{className:p.chatSettingsSeparator,checked:i,label:"Stream chat completion responses",onChange:Ne}),L&&e.jsx(ks,{})]})]})]})};var Y;if(L){var N=new Ge(dt);!N.getActiveAccount()&&N.getAllAccounts().length>0&&N.setActiveAccount(N.getActiveAccount()),N.addEventCallback(t=>{if(t.eventType===$e.LOGIN_SUCCESS&&t.payload){const n=t.payload;N.setActiveAccount(n)}}),Y=e.jsx(We,{instance:N,children:e.jsx(me,{})})}else Y=e.jsx(me,{});qe();const Ls=De([{path:"/",element:Y,children:[{index:!0,element:e.jsx(Ns,{})},{path:"qa",lazy:()=>de(()=>import("./OneShot-8c4d052f.js"),["assets/OneShot-8c4d052f.js","assets/vendor-6b183ce4.js","assets/fluentui-react-a703efc7.js","assets/fluentui-icons-b19b89b5.js","assets/OneShot-daa12333.css"])},{path:"*",lazy:()=>de(()=>import("./NoPage-1c4634d0.js"),["assets/NoPage-1c4634d0.js","assets/vendor-6b183ce4.js"])}]}]);Ue.createRoot(document.getElementById("root")).render(e.jsx(He.StrictMode,{children:e.jsx(ze,{router:Ls})}));export{ye as A,b as R,L as u};
//# sourceMappingURL=index-fb2930f2.js.map
