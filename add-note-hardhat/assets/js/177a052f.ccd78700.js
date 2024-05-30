"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9566],{63131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=s(74848),r=s(28453);const a={description:"Learn about the Snaps execution environment.",sidebar_position:3},i="Snaps execution environment",o={id:"learn/about-snaps/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/learn/about-snaps/execution-environment.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/execution-environment",permalink:"/add-note-hardhat/snaps/learn/about-snaps/execution-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/execution-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps files",permalink:"/add-note-hardhat/snaps/learn/about-snaps/files"},next:{title:"Tutorials",permalink:"/add-note-hardhat/snaps/learn/tutorials"}},c={},l=[{value:"Supported globals",id:"supported-globals",level:2},{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"snaps-execution-environment",children:"Snaps execution environment"}),"\n",(0,t.jsxs)(n.p,{children:["Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,t.jsx)(n.a,{href:"#secure-ecmascript-ses",children:"Secure ECMAScript (SES)"}),".\nThis allows MetaMask to restrict access to global JavaScript APIs and to isolate a Snap's code from\nother parts of the application."]}),"\n",(0,t.jsxs)(n.p,{children:["This environment does not have a DOM, Node.js built-ins, or platform-specific APIs other than the\ndefault ",(0,t.jsx)(n.code,{children:"snap"})," global and MetaMask's ",(0,t.jsx)(n.code,{children:"ethereum"})," global."]}),"\n",(0,t.jsx)(n.p,{children:"The execution environment is designed to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prevent Snaps from polluting the global environment."}),"\n",(0,t.jsx)(n.li,{children:"Prevent malicious Snaps from stealing from users."}),"\n",(0,t.jsxs)(n.li,{children:["Prevent Snaps from accessing sensitive JavaScript global APIs (such as ",(0,t.jsx)(n.code,{children:"fetch"}),") without permission."]}),"\n",(0,t.jsx)(n.li,{children:'Be "fully virtualizable," or platform-independent.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."}),"\n",(0,t.jsx)(n.h2,{id:"supported-globals",children:"Supported globals"}),"\n",(0,t.jsxs)(n.p,{children:["A Snap can access the ",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/learn/about-snaps/apis#snaps-api",children:"Snaps API"})," using the ",(0,t.jsx)(n.code,{children:"snap"})," global, and the\n",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/learn/about-snaps/apis#metamask-json-rpc-api",children:"MetaMask JSON-RPC API"})," using the ",(0,t.jsx)(n.code,{children:"ethereum"})," global.\nTo access the ",(0,t.jsx)(n.code,{children:"ethereum"})," global, a Snap must request the\n",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentethereum-provider",children:(0,t.jsx)(n.code,{children:"endowment:ethereum-provider"})})," permission."]}),"\n",(0,t.jsxs)(n.p,{children:["Almost all\n",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",children:"standard JavaScript globals"}),"\nthat are also in Node.js are available to Snaps.\nThis includes globals such as ",(0,t.jsx)(n.code,{children:"Promise"}),", ",(0,t.jsx)(n.code,{children:"Error"}),", ",(0,t.jsx)(n.code,{children:"Math"}),", ",(0,t.jsx)(n.code,{children:"Set"}),", and ",(0,t.jsx)(n.code,{children:"Reflect"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The following globals are also available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"console"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fetch"})," (with the\n",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentnetwork-access",children:(0,t.jsx)(n.code,{children:"endowment:network-access"})})," permission)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setTimeout"})," / ",(0,t.jsx)(n.code,{children:"clearTimeout"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setInterval"})," / ",(0,t.jsx)(n.code,{children:"clearInterval"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"SubtleCrypto"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WebAssembly"})," (with the\n",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentwebassembly",children:(0,t.jsx)(n.code,{children:"endowment:webassembly"})})," permission)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TextEncoder"})," / ",(0,t.jsx)(n.code,{children:"TextDecoder"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"atob"})," / ",(0,t.jsx)(n.code,{children:"btoa"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"URL"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"note",type:"info",children:(0,t.jsxs)(n.p,{children:["To use Node.js built-in modules such as ",(0,t.jsx)(n.code,{children:"crypto"})," and ",(0,t.jsx)(n.code,{children:"path"}),", set the\n",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/cli/options#polyfills",children:(0,t.jsx)(n.code,{children:"polyfills"})})," configuration option to ",(0,t.jsx)(n.code,{children:"true"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"secure-ecmascript-ses",children:"Secure ECMAScript (SES)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/endojs/endo/tree/master/packages/ses",children:"Secure ECMAScript (SES)"})," is a subset of\nJavaScript designed to enable mutually suspicious programs to execute in the same JavaScript process\n(or the same ",(0,t.jsx)(n.a,{href:"https://tc39.es/ecma262/#realm",children:"realm"}),").\nYou can think of it as a more severe form of\n",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",children:"JavaScript strict mode"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);