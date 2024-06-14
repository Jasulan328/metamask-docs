"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4933],{7125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=r(74848),n=r(28453);const i={sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},a="About the Wallet API",c={id:"concepts/wallet-api",title:"About the Wallet API",description:"Learn about the MetaMask Ethereum provider API.",source:"@site/wallet/concepts/wallet-api.md",sourceDirName:"concepts",slug:"/concepts/wallet-api",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/wallet-api",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/architecture"},next:{title:"About MetaMask SDK",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/sdk/"}},l={},o=[{value:"Ethereum provider API",id:"ethereum-provider-api",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Restricted methods",id:"restricted-methods",level:3},{value:"Unrestricted methods",id:"unrestricted-methods",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"about-the-wallet-api",children:"About the Wallet API"}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask's Wallet API consists of an ",(0,s.jsx)(t.a,{href:"#ethereum-provider-api",children:"Ethereum provider API"}),", which wraps\na ",(0,s.jsx)(t.a,{href:"#json-rpc-api",children:"JSON-RPC API"}),"."]}),"\n",(0,s.jsxs)(t.admonition,{title:"API documentation",type:"tip",children:[(0,s.jsx)(t.p,{children:"The API methods are documented in the following references:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api",children:"Ethereum provider API reference"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API reference"})}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"ethereum-provider-api",children:"Ethereum provider API"}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask injects a global JavaScript API into websites visited by its users using the\n",(0,s.jsx)(t.code,{children:"window.ethereum"})," provider object.\nThis API is specified by ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"}),", and it allows dapps to\nrequest users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"info",children:[(0,s.jsxs)(t.p,{children:["MetaMask supports ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"}),", which introduces an\nalternative wallet detection mechanism to the ",(0,s.jsx)(t.code,{children:"window.ethereum"})," injected provider.\nThis alternative mechanism enables dapps to support ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/wallet-interoperability",children:"wallet interoperability"}),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/connect/",children:"using this mechanism to connect to MetaMask"}),"."]}),(0,s.jsxs)(t.p,{children:["You can access the provider API using the selected EIP-6963 provider object.\nThroughout this documentation, we refer to the selected provider using ",(0,s.jsx)(t.code,{children:"provider"}),"."]})]}),"\n",(0,s.jsx)(t.p,{children:"The MetaMask Ethereum provider API contains the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api#properties",children:"Properties"})," - The provider contains a property that\ndetects if a user has MetaMask installed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api#methods",children:"Methods"})," - The provider contains methods that dapps can call.\nThe ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api#request",children:(0,s.jsx)(t.code,{children:"request()"})}),"\nprovider method wraps the ",(0,s.jsx)(t.a,{href:"#json-rpc-api",children:"JSON-RPC API"}),"; dapps can use this\nprovider method to call any RPC method."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api#events",children:"Events"})," - The provider emits events that dapps can listen to."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["View the ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api",children:"provider API reference"})," for all the provider properties,\nmethods, and events."]}),"\n",(0,s.jsx)(t.h2,{id:"json-rpc-api",children:"JSON-RPC API"}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask uses the ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api#request",children:(0,s.jsx)(t.code,{children:"request()"})}),"\nmethod of the ",(0,s.jsx)(t.a,{href:"#ethereum-provider-api",children:"provider API"})," to wrap a JSON-RPC API.\nThe JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."]}),"\n",(0,s.jsxs)(t.p,{children:["The RPC methods are documented in the interactive ",(0,s.jsx)(t.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API reference"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/reference/provider-api#request",children:(0,s.jsx)(t.code,{children:"request()"})}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"The RPC methods are divided into the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#restricted-methods",children:"Restricted methods"})," -  Require user consent for actions that impact assets or data (for example, initiating a transaction)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#unrestricted-methods",children:"Unrestricted methods"})," - Allow dapps to perform basic actions without permission (for example, retrieving a public address)."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"restricted-methods",children:"Restricted methods"}),"\n",(0,s.jsxs)(t.p,{children:["MetaMask implements permissions based on ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2255",children:"EIP-2255"})," to enhance security for when users interact with dapps.\nThis requires that dapps obtain user consent before accessing certain features.\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."]}),"\n",(0,s.jsxs)(t.p,{children:["Restricted methods are methods that cannot be called unless you have permission to do so using\n",(0,s.jsx)(t.a,{href:"/wallet/reference/wallet_requestpermissions",children:(0,s.jsx)(t.code,{children:"wallet_requestPermissions"})})," or\n",(0,s.jsx)(t.a,{href:"/snaps/reference/wallet-api-for-snaps/#wallet_requestsnaps",children:(0,s.jsx)(t.code,{children:"wallet_requestSnaps"})}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The following methods are restricted:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/wallet/reference/eth_accounts",children:(0,s.jsx)(t.code,{children:"eth_accounts"})})," - Gaining permission requires calling ",(0,s.jsx)(t.code,{children:"wallet_requestPermissions"}),".\nGranting permission for ",(0,s.jsx)(t.code,{children:"eth_accounts"})," also grants permissions for the following methods:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,s.jsx)(t.code,{children:"eth_sendTransaction"})})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/wallet/reference/personal_sign",children:(0,s.jsx)(t.code,{children:"personal_sign"})})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/wallet/reference/eth_signTypedData_v4",children:(0,s.jsx)(t.code,{children:"eth_signTypedData_v4"})})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"important",type:"caution",children:(0,s.jsxs)(t.p,{children:["To access accounts, we recommend using ",(0,s.jsx)(t.a,{href:"/wallet/reference/eth_requestAccounts",children:(0,s.jsx)(t.code,{children:"eth_requestAccounts"})}),",\nwhich automatically asks for permission to use ",(0,s.jsx)(t.code,{children:"eth_accounts"})," by calling ",(0,s.jsx)(t.code,{children:"wallet_requestPermissions"})," internally.\nSee ",(0,s.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/connect/access-accounts",children:"how to access a user's accounts"})," for more information."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/snaps/reference/wallet-api-for-snaps/#wallet_snap",children:(0,s.jsx)(t.code,{children:"wallet_snap"})})," - Gaining permission requires\ncalling ",(0,s.jsx)(t.code,{children:"wallet_requestSnap"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/snaps/reference/wallet-api-for-snaps/#wallet_invokesnap",children:(0,s.jsx)(t.code,{children:"wallet_invokeSnap"})})," - Gaining\npermission requires calling ",(0,s.jsx)(t.code,{children:"wallet_requestSnap"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"unrestricted-methods",children:"Unrestricted methods"}),"\n",(0,s.jsxs)(t.p,{children:["Unrestricted methods do not require requesting permission to call them, but they might require confirmation by the\nuser (for example, ",(0,s.jsx)(t.a,{href:"/wallet/reference/wallet_addethereumchain",children:(0,s.jsx)(t.code,{children:"wallet_addEthereumChain"})}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);