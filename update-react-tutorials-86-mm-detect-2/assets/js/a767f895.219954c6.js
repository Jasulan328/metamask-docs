"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2358],{88057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(74848),r=n(28453);const s={description:"Learn about wallet interoperability.",sidebar_position:6},a="Wallet interoperability",o={id:"concepts/wallet-interoperability",title:"Wallet interoperability",description:"Learn about wallet interoperability.",source:"@site/wallet/concepts/wallet-interoperability.md",sourceDirName:"concepts",slug:"/concepts/wallet-interoperability",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/wallet-interoperability",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-interoperability.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Learn about wallet interoperability.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Signing methods",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/signing-methods"},next:{title:"Smart contracts",permalink:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/smart-contracts"}},l={},d=[{value:"EIP-6963 interfaces",id:"eip-6963-interfaces",level:2},{value:"Provider info",id:"provider-info",level:3},{value:"Provider detail",id:"provider-detail",level:3},{value:"Announce and request events",id:"announce-and-request-events",level:3},{value:"Third-party library support",id:"third-party-library-support",level:2},{value:"MIPD Store",id:"mipd-store",level:3},{value:"MetaMask SDK support",id:"metamask-sdk-support",level:2},{value:"Wallet support",id:"wallet-support",level:2},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"wallet-interoperability",children:"Wallet interoperability"}),"\n",(0,i.jsxs)(t.p,{children:["A web dapp can integrate with multiple installed browser wallets simultaneously by adding support for\n",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"}),", which introduces an alternative wallet detection\nmechanism to the ",(0,i.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/concepts/wallet-api#ethereum-provider-api",children:(0,i.jsx)(t.code,{children:"window.ethereum"})})," injected provider.\nThis mechanism is enabled by using the standardized interfaces defined by EIP-6963."]}),"\n",(0,i.jsx)(t.admonition,{title:"Why EIP-6963?",type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"})," standardizes the interface for wallet providers,\nbut it results in conflicts when users have multiple wallets installed, due to how the provider\nobject is injected.\nThis can cause issues with wallet discovery, user onboarding, and connecting.\nThe wallet discovery mechanism introduced by EIP-6963 solves these issues."]})}),"\n",(0,i.jsx)(t.p,{children:"The following is a demo of the user experience of detecting multiple wallets, showing the data\nprovided from each installed wallet:"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("video",{width:"100%",controls:!0,children:(0,i.jsx)("source",{src:"/eip-6963.mp4"})})}),"\n",(0,i.jsxs)(t.p,{children:["You can ",(0,i.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/connect/",children:"connect to MetaMask using EIP-6963"})," and see the\n",(0,i.jsx)(t.a,{href:"https://github.com/MetaMask/vite-react-ts-eip-6963/tree/main",children:"EIP-6963 Vite React + TypeScript demo"}),"\nfor more information."]}),"\n",(0,i.jsx)(t.h2,{id:"eip-6963-interfaces",children:"EIP-6963 interfaces"}),"\n",(0,i.jsxs)(t.p,{children:["Wallets that support EIP-6963 implement and expose the following standardized interfaces.\nWhen ",(0,i.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/connect/",children:"connecting to MetaMask using EIP-6963"}),", it's important to review\nand understand these interfaces."]}),"\n",(0,i.jsx)(t.h3,{id:"provider-info",children:"Provider info"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963#provider-info",children:(0,i.jsx)(t.code,{children:"EIP6963ProviderInfo"})})," interface\nrepresents the assets needed to display a wallet:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"uuid"})," - The wallet ID (",(0,i.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc4122",children:"UUIDv4"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"name"})," - A human-readable name of the wallet."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"icon"})," - A ",(0,i.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc3986",children:"URI"})," pointing to an icon of the wallet."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"rdns"})," - The wallet's domain name."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"provider-detail",children:"Provider detail"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963#provider-detail",children:(0,i.jsx)(t.code,{children:"EIP6963ProviderDetail"})})," interface\nrepresents additional metadata about the wallet:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"info"})," - The ",(0,i.jsx)(t.a,{href:"#provider-info",children:(0,i.jsx)(t.code,{children:"EIP6963ProviderInfo"})}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"provider"})," - The ",(0,i.jsx)(t.code,{children:"EIP1193Provider"})," defined by ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"announce-and-request-events",children:"Announce and request events"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963#announce-and-request-events",children:(0,i.jsx)(t.code,{children:"EIP6963AnnounceProviderEvent"})}),"\ninterface announces an event dispatched by the wallet:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'interface EIP6963AnnounceProviderEvent extends CustomEvent {\n  type: "eip6963:announceProvider";\n  detail: EIP6963ProviderDetail;\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963#announce-and-request-events",children:(0,i.jsx)(t.code,{children:"EIP6963RequestProviderEvent"})}),"\ninterface requests an event dispatched by a dapp:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'interface EIP6963RequestProviderEvent extends Event {\n  type: "eip6963:requestProvider";\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"third-party-library-support",children:"Third-party library support"}),"\n",(0,i.jsx)(t.p,{children:"The following third-party libraries support EIP-6963:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://wagmi.sh",children:"Wagmi 2+"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.walletconnect.com/web3modal/about",children:"Web3Modal 3+"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/wevm/mipd",children:"MIPD Store"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.rainbowkit.com/",children:"RainbowKit"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"mipd-store",children:"MIPD Store"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://github.com/wevm/mipd",children:"MIPD Store"})," stores the wallet providers and enables you to\nsubscribe to the store and retrieve the providers.\nUnlike ",(0,i.jsx)(t.a,{href:"https://wagmi.sh",children:"Wagmi"})," and ",(0,i.jsx)(t.a,{href:"https://onboard.blocknative.com/",children:"Web3-Onboard"}),", which are\nlibraries that provide components and connectors for multiple wallets and depend on MetaMask SDK for\nintegration, the MIPD Store is a utility library that makes it easier to work with EIP-6963 and\nsupports TypeScript types."]}),"\n",(0,i.jsx)(t.h2,{id:"metamask-sdk-support",children:"MetaMask SDK support"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["MetaMask SDK does not support connecting to non-MetaMask wallets via EIP-6963.\nIf you intend to support discovery of other wallets, we recommend using other methods of adding\nEIP-6963 support such as ",(0,i.jsx)(t.a,{href:"https://wagmi.sh",children:"Wagmi 2+"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/update-react-tutorials-86-mm-detect-2/wallet/how-to/use-sdk/javascript/",children:"MetaMask JavaScript SDK"})," automatically checks\nfor the presence of the MetaMask extension via EIP-6963.\nThis eliminates the need for manual configuration or detection methods, simplifying the initial\nsetup process for both developers and users."]}),"\n",(0,i.jsx)(t.p,{children:"By adhering to the standards set by EIP-6963, the SDK unambiguously identifies and connects to\nMetaMask, resolving potential conflicts that might arise with other wallet extensions, ensuring a\nmore stable and reliable interaction for users."}),"\n",(0,i.jsxs)(t.p,{children:["The SDK is also being integrated into ",(0,i.jsx)(t.a,{href:"https://wagmi.sh/",children:"Wagmi 2+"}),", which supports EIP-6963.\nThe SDK on its own supports connecting ",(0,i.jsx)(t.em,{children:"only"})," to MetaMask via EIP-6963, so if you intend to support\ndiscovery of other wallets, we recommend using other methods of adding EIP-6963 support, such as\nWagmi 2+."]}),"\n",(0,i.jsx)(t.h2,{id:"wallet-support",children:"Wallet support"}),"\n",(0,i.jsxs)(t.p,{children:["The EIP-6963 alternative discovery mechanism works for wallets that have implemented support for EIP-6963.\nThis includes MetaMask, Coinbase, Trust Wallet, OKX, and other major wallets.\nSee the ",(0,i.jsx)(t.a,{href:"https://github.com/WalletConnect/EIP6963/blob/master/src/utils/constants.ts",children:"list of wallets that support EIP-6963"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"backwards-compatibility",children:"Backwards compatibility"}),"\n",(0,i.jsxs)(t.p,{children:["Dapps that do not support EIP-6963 can still\n",(0,i.jsxs)(t.a,{href:"/wallet/tutorials/javascript-dapp-simple",children:["detect MetaMask using the ",(0,i.jsx)(t.code,{children:"window.ethereum"})," provider"]}),".\nHowever, we recommend adding support to improve the user experience for multiple installed wallets.\nRead more about ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-6963#backwards-compatibility",children:"EIP-6963 backwards compatibility"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);