"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8280],{68703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const a={description:"See the Unity SDK API reference.",sidebar_position:2,toc_max_heading_level:4,tags:["Unity SDK"]},o="Unity SDK API",r={id:"reference/sdk-unity-api",title:"Unity SDK API",description:"See the Unity SDK API reference.",source:"@site/wallet/reference/sdk-unity-api.md",sourceDirName:"reference",slug:"/reference/sdk-unity-api",permalink:"/fix-link/wallet/reference/sdk-unity-api",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/reference/sdk-unity-api.md",tags:[{label:"Unity SDK",permalink:"/fix-link/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"See the Unity SDK API reference.",sidebar_position:2,toc_max_heading_level:4,tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript SDK options",permalink:"/fix-link/wallet/reference/sdk-js-options"},next:{title:"Ethereum provider API",permalink:"/fix-link/wallet/reference/provider-api"}},c={},l=[{value:"<code>MetaMaskUnity</code>",id:"metamaskunity",level:3},{value:"<code>Instance</code>",id:"instance",level:4},{value:"<code>Initialize</code>",id:"initialize",level:4},{value:"<code>SaveSession</code>",id:"savesession",level:4},{value:"<code>LoadSession</code>",id:"loadsession",level:4},{value:"<code>MetaMaskWallet</code>",id:"metamaskwallet",level:3},{value:"<code>Connect</code>",id:"connect",level:4},{value:"<code>Disconnect</code>",id:"disconnect",level:4},{value:"<code>Request</code>",id:"request",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"unity-sdk-api",children:"Unity SDK API"}),"\n",(0,s.jsxs)(n.p,{children:["The following is an overview of the API methods used in the ",(0,s.jsx)(n.a,{href:"/fix-link/wallet/how-to/use-sdk/gaming/unity/",children:"Unity SDK"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"metamaskunity",children:(0,s.jsx)(n.code,{children:"MetaMaskUnity"})}),"\n",(0,s.jsxs)(n.p,{children:["This is a singleton class that you can use to access the ",(0,s.jsx)(n.code,{children:"MetaMaskWallet"})," instance, which is\nspecific to Unity."]}),"\n",(0,s.jsx)(n.h4,{id:"instance",children:(0,s.jsx)(n.code,{children:"Instance"})}),"\n",(0,s.jsxs)(n.p,{children:["This is the singleton instance of the ",(0,s.jsx)(n.code,{children:"MetaMaskUnity"})," class that is lazy-loaded when you access it\nfor the first time."]}),"\n",(0,s.jsx)(n.h4,{id:"initialize",children:(0,s.jsx)(n.code,{children:"Initialize"})}),"\n",(0,s.jsxs)(n.p,{children:["This method initializes the ",(0,s.jsx)(n.code,{children:"MetaMaskWallet"})," instance and makes it accessible via the ",(0,s.jsx)(n.code,{children:"Wallet"})," property.\nYou can also pass extra options and parameters to it to customize the wallet instance:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// Initialize using default settings.\nMetaMaskUnity.Instance.Initialize();\n\n// Initialize using custom transport and socket provider.\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(transport, socketProvider);\n\n// Initialize using custom config, transport and socket provider.\nvar config = myMetaMaskConfig;\nvar transport = new MyCustomTransport();\nvar socketProvider = new MyCustomSocketProvider();\nMetaMaskUnity.Instance.Initialize(config, transport, socketProvider);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"savesession",children:(0,s.jsx)(n.code,{children:"SaveSession"})}),"\n",(0,s.jsx)(n.p,{children:"This method saves the current session to persistent storage.\nIt is useful when you want to save the session and restore it later.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."}),"\n",(0,s.jsx)(n.h4,{id:"loadsession",children:(0,s.jsx)(n.code,{children:"LoadSession"})}),"\n",(0,s.jsx)(n.p,{children:"This method loads the session from persistent storage.\nIt is useful when you want to restore the session after the application quits.\nWhen the application starts, it automatically calls this method.\nYou can also manually call this method."}),"\n",(0,s.jsx)(n.h3,{id:"metamaskwallet",children:(0,s.jsx)(n.code,{children:"MetaMaskWallet"})}),"\n",(0,s.jsx)(n.h4,{id:"connect",children:(0,s.jsx)(n.code,{children:"Connect"})}),"\n",(0,s.jsx)(n.p,{children:"This method connects to MetaMask.\nIt renders a generated QR code in the user interface for your users to scan with MetaMask Mobile.\nAfter the user scans this QR code, a connection screen appears in MetaMask Mobile where the user can\napprove the connection with your Unity game."}),"\n",(0,s.jsx)(n.h4,{id:"disconnect",children:(0,s.jsx)(n.code,{children:"Disconnect"})}),"\n",(0,s.jsx)(n.p,{children:"This method disconnects the user from the MetaMask session."}),"\n",(0,s.jsx)(n.h4,{id:"request",children:(0,s.jsx)(n.code,{children:"Request"})}),"\n",(0,s.jsxs)(n.p,{children:["This method sends a request to MetaMask.\nYou can use it to call any ",(0,s.jsx)(n.a,{href:"/fix-link/wallet/reference/provider-api",children:"provider API method"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);