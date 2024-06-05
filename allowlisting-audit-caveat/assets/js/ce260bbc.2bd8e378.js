"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8280],{68703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(74848),i=n(28453);const a={description:"See the Unity SDK API reference.",sidebar_position:2,toc_max_heading_level:4,tags:["Unity SDK"]},o="Unity SDK API",c={id:"reference/sdk-unity-api",title:"Unity SDK API",description:"See the Unity SDK API reference.",source:"@site/wallet/reference/sdk-unity-api.md",sourceDirName:"reference",slug:"/reference/sdk-unity-api",permalink:"/allowlisting-audit-caveat/wallet/reference/sdk-unity-api",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-unity-api.md",tags:[{label:"Unity SDK",permalink:"/allowlisting-audit-caveat/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"See the Unity SDK API reference.",sidebar_position:2,toc_max_heading_level:4,tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript SDK options",permalink:"/allowlisting-audit-caveat/wallet/reference/sdk-js-options"},next:{title:"Ethereum provider API",permalink:"/allowlisting-audit-caveat/wallet/reference/provider-api"}},r={},l=[{value:"<code>MetaMaskUnity</code>",id:"metamaskunity",level:3},{value:"<code>Instance</code>",id:"instance",level:4},{value:"<code>Initialize</code>",id:"initialize",level:4},{value:"<code>SaveSession</code>",id:"savesession",level:4},{value:"<code>LoadSession</code>",id:"loadsession",level:4},{value:"<code>MetaMaskWallet</code>",id:"metamaskwallet",level:3},{value:"<code>Connect</code>",id:"connect",level:4},{value:"<code>Disconnect</code>",id:"disconnect",level:4},{value:"<code>Request</code>",id:"request",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"unity-sdk-api",children:"Unity SDK API"}),"\n",(0,s.jsxs)(t.p,{children:["The following is an overview of the API methods used in the ",(0,s.jsx)(t.a,{href:"/allowlisting-audit-caveat/wallet/how-to/use-sdk/gaming/unity/",children:"Unity SDK"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"metamaskunity",children:(0,s.jsx)(t.code,{children:"MetaMaskUnity"})}),"\n",(0,s.jsxs)(t.p,{children:["This is a singleton class that you can use to access the ",(0,s.jsx)(t.code,{children:"MetaMaskWallet"})," instance, which is\nspecific to Unity."]}),"\n",(0,s.jsx)(t.h4,{id:"instance",children:(0,s.jsx)(t.code,{children:"Instance"})}),"\n",(0,s.jsxs)(t.p,{children:["This is the singleton instance of the ",(0,s.jsx)(t.code,{children:"MetaMaskUnity"})," class that is lazy-loaded when you access it\nfor the first time."]}),"\n",(0,s.jsx)(t.h4,{id:"initialize",children:(0,s.jsx)(t.code,{children:"Initialize"})}),"\n",(0,s.jsxs)(t.p,{children:["This method initializes the ",(0,s.jsx)(t.code,{children:"MetaMaskWallet"})," instance and makes it accessible via the ",(0,s.jsx)(t.code,{children:"Wallet"})," property.\nYou can also pass extra options and parameters to it to customize the wallet instance:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"// Initialize using default settings.\nMetaMaskUnity.Instance.Initialize();\n\n// Initialize using custom transport and socket provider.\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(transport, socketProvider);\n\n// Initialize using custom config, transport and socket provider.\nvar config = myMetaMaskConfig;\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(config, transport, socketProvider);\n"})}),"\n",(0,s.jsx)(t.h4,{id:"savesession",children:(0,s.jsx)(t.code,{children:"SaveSession"})}),"\n",(0,s.jsx)(t.p,{children:"This method saves the current session to persistent storage.\nIt is useful when you want to save the session and restore it later.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."}),"\n",(0,s.jsx)(t.h4,{id:"loadsession",children:(0,s.jsx)(t.code,{children:"LoadSession"})}),"\n",(0,s.jsx)(t.p,{children:"This method loads the session from persistent storage.\nIt is useful when you want to restore the session after the application quits.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."}),"\n",(0,s.jsx)(t.h3,{id:"metamaskwallet",children:(0,s.jsx)(t.code,{children:"MetaMaskWallet"})}),"\n",(0,s.jsx)(t.h4,{id:"connect",children:(0,s.jsx)(t.code,{children:"Connect"})}),"\n",(0,s.jsx)(t.p,{children:"This method connects to MetaMask.\nIt renders a generated QR code in the user interface for your users to scan with MetaMask Mobile.\nAfter the user scans this QR code, a connection screen appears in MetaMask Mobile where the user can\napprove the connection with your Unity game."}),"\n",(0,s.jsx)(t.h4,{id:"disconnect",children:(0,s.jsx)(t.code,{children:"Disconnect"})}),"\n",(0,s.jsx)(t.p,{children:"This method disconnects the user from the MetaMask session."}),"\n",(0,s.jsx)(t.h4,{id:"request",children:(0,s.jsx)(t.code,{children:"Request"})}),"\n",(0,s.jsxs)(t.p,{children:["This method sends a request to MetaMask.\nYou can use it to call any ",(0,s.jsx)(t.a,{href:"/allowlisting-audit-caveat/wallet/reference/provider-api",children:"provider API method"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);