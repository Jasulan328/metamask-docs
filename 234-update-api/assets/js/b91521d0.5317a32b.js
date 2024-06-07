"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1273],{67841:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=s(74848),r=s(28453),l=s(11470),c=s(19365);const i={sidebar_label:"Subcommands",sidebar_position:2,toc_max_heading_level:4,description:"See the Snaps CLI subcommands reference."},t="Snaps subcommands",o={id:"reference/cli/subcommands",title:"Snaps subcommands",description:"See the Snaps CLI subcommands reference.",source:"@site/snaps/reference/cli/subcommands.md",sourceDirName:"reference/cli",slug:"/reference/cli/subcommands",permalink:"/234-update-api/snaps/reference/cli/subcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/subcommands.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Subcommands",sidebar_position:2,toc_max_heading_level:4,description:"See the Snaps CLI subcommands reference."},sidebar:"snapsSidebar",previous:{title:"Options",permalink:"/234-update-api/snaps/reference/cli/options"},next:{title:"Snaps entry points",permalink:"/234-update-api/snaps/reference/entry-points"}},d={},u=[{value:"<code>b</code>, <code>build</code>",id:"b-build",level:3},{value:"<code>c</code>, <code>config</code>",id:"c-config",level:4},{value:"<code>e</code>, <code>eval</code>",id:"e-eval",level:3},{value:"<code>m</code>, <code>manifest</code>",id:"m-manifest",level:3},{value:"<code>fix</code>",id:"fix",level:4},{value:"<code>s</code>, <code>serve</code>",id:"s-serve",level:3},{value:"<code>p</code>, <code>port</code>",id:"p-port",level:4},{value:"<code>w</code>, <code>watch</code>",id:"w-watch",level:3},{value:"<code>p</code>, <code>port</code>",id:"p-port-1",level:4},{value:"Global options",id:"global-options",level:2},{value:"<code>h</code>, <code>help</code>",id:"h-help",level:4},{value:"<code>version</code>",id:"version",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"snaps-subcommands",children:"Snaps subcommands"}),"\n",(0,a.jsx)(n.p,{children:"This reference describes the syntax of the Snaps command line interface (CLI) subcommands and\nsubcommand options."}),"\n",(0,a.jsxs)(n.p,{children:["You can specify subcommands and their options using the ",(0,a.jsx)(n.code,{children:"yarn mm-snap"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"b-build",children:[(0,a.jsx)(n.code,{children:"b"}),", ",(0,a.jsx)(n.code,{children:"build"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap build\n"})}),"\n",(0,a.jsx)(n.p,{children:"Builds a Snap from source."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"b"})," is an alias for ",(0,a.jsx)(n.code,{children:"build"}),"."]}),"\n",(0,a.jsxs)(n.h4,{id:"c-config",children:[(0,a.jsx)(n.code,{children:"c"}),", ",(0,a.jsx)(n.code,{children:"config"})]}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(c.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap build --config <FILE>\n"})})}),(0,a.jsx)(c.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap build --config ./snap.config.build.ts\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Path to the ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/learn/about-snaps/files#configuration-file",children:"configuration file"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-c"})," is an alias for ",(0,a.jsx)(n.code,{children:"--config"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"e-eval",children:[(0,a.jsx)(n.code,{children:"e"}),", ",(0,a.jsx)(n.code,{children:"eval"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap eval\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Attempts to evaluate the Snap bundle in\n",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/learn/about-snaps/execution-environment#secure-ecmascript-ses",children:"Secure ECMAScript (SES)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"e"})," is an alias for ",(0,a.jsx)(n.code,{children:"eval"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"m-manifest",children:[(0,a.jsx)(n.code,{children:"m"}),", ",(0,a.jsx)(n.code,{children:"manifest"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap manifest\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Validates the Snap ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"m"})," is an alias for ",(0,a.jsx)(n.code,{children:"manifest"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"fix",children:(0,a.jsx)(n.code,{children:"fix"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(c.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap manifest --fix <BOOLEAN>\n"})})}),(0,a.jsx)(c.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap manifest --fix false\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables making any changes to fix the manifest file.\nThe default is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"s-serve",children:[(0,a.jsx)(n.code,{children:"s"}),", ",(0,a.jsx)(n.code,{children:"serve"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap serve\n"})}),"\n",(0,a.jsx)(n.p,{children:"Locally serves Snap files for testing."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"s"})," is an alias for ",(0,a.jsx)(n.code,{children:"serve"}),"."]}),"\n",(0,a.jsxs)(n.h4,{id:"p-port",children:[(0,a.jsx)(n.code,{children:"p"}),", ",(0,a.jsx)(n.code,{children:"port"})]}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(c.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap serve --port <PORT>\n"})})}),(0,a.jsx)(c.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap serve --port 9000\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The local server port for testing.\nThe default is ",(0,a.jsx)(n.code,{children:"8081"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-p"})," is an alias for ",(0,a.jsx)(n.code,{children:"--port"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"w-watch",children:[(0,a.jsx)(n.code,{children:"w"}),", ",(0,a.jsx)(n.code,{children:"watch"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap watch\n"})}),"\n",(0,a.jsx)(n.p,{children:"Rebuilds a Snap from source upon changes."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"w"})," is an alias for ",(0,a.jsx)(n.code,{children:"watch"}),"."]}),"\n",(0,a.jsxs)(n.h4,{id:"p-port-1",children:[(0,a.jsx)(n.code,{children:"p"}),", ",(0,a.jsx)(n.code,{children:"port"})]}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(c.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap watch --port <PORT>\n"})})}),(0,a.jsx)(c.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn mm-snap watch --port 9000\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The local server port for testing.\nThe default is ",(0,a.jsx)(n.code,{children:"8081"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-p"})," is an alias for ",(0,a.jsx)(n.code,{children:"--port"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"global-options",children:"Global options"}),"\n",(0,a.jsxs)(n.h4,{id:"h-help",children:[(0,a.jsx)(n.code,{children:"h"}),", ",(0,a.jsx)(n.code,{children:"help"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"-h, --help\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Displays the help message and exits.\nYou can use this option with ",(0,a.jsx)(n.code,{children:"mm-snap"})," or any subcommand."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-h"})," is an alias for ",(0,a.jsx)(n.code,{children:"--help"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"version",children:(0,a.jsx)(n.code,{children:"version"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--version\n"})}),"\n",(0,a.jsx)(n.p,{children:"Displays the version number and exits."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>c});s(96540);var a=s(18215);const r={tabItem:"tabItem_Ymn6"};var l=s(74848);function c(e){let{children:n,hidden:s,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,c),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>S});var a=s(96540),r=s(18215),l=s(23104),c=s(56347),i=s(205),t=s(57485),o=s(31682),d=s(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,c.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,t.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=h(e),[c,t]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,u]=m({queryString:s,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),j=(()=>{const e=o??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&t(j)}),[j]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function v(e){let{className:n,block:s,selectedValue:a,selectValue:c,tabValues:i}=e;const t=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=t.indexOf(n),r=i[s].value;r!==a&&(o(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=t.indexOf(e.currentTarget)+1;n=t[s]??t[0];break}case"ArrowLeft":{const s=t.indexOf(e.currentTarget)-1;n=t[s]??t[t.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>t.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function S(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var a=s(96540);const r={},l=a.createContext(r);function c(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);