"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1930],{77048:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=a(74848),i=a(28453);const s={description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",sidebar_position:2,sidebar_label:"Wagmi",tags:["JavaScript SDK"]},r="Use Wagmi with MetaMask SDK",o={id:"how-to/use-sdk/3rd-party-libraries/wagmi",title:"Use Wagmi with MetaMask SDK",description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/3rd-party-libraries/wagmi.md",sourceDirName:"how-to/use-sdk/3rd-party-libraries",slug:"/how-to/use-sdk/3rd-party-libraries/wagmi",permalink:"/234-update-api/wallet/how-to/use-sdk/3rd-party-libraries/wagmi",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/3rd-party-libraries/wagmi.md",tags:[{label:"JavaScript SDK",permalink:"/234-update-api/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{description:"Integrate MetaMask SDK with Wagmi in your JavaScript dapp.",sidebar_position:2,sidebar_label:"Wagmi",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"Web3-Onboard",permalink:"/234-update-api/wallet/how-to/use-sdk/3rd-party-libraries/web3-onboard"},next:{title:"Onboard users",permalink:"/234-update-api/wallet/how-to/onboard-users"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Configure MetaMask SDK",id:"1-configure-metamask-sdk",level:3},{value:"Dapp metadata",id:"dapp-metadata",level:4},{value:"Infura API key",id:"infura-api-key",level:4},{value:"Universal links",id:"universal-links",level:4},{value:"2. Configure Wagmi with the MetaMask connector",id:"2-configure-wagmi-with-the-metamask-connector",level:3},{value:"3. Implement contract interaction using <code>usePrepareContractWrite</code>",id:"3-implement-contract-interaction-using-usepreparecontractwrite",level:3},{value:"Benefits of using the Infura API with Wagmi",id:"benefits-of-using-the-infura-api-with-wagmi",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-wagmi-with-metamask-sdk",children:"Use Wagmi with MetaMask SDK"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://wagmi.sh/",children:"Wagmi"})," is a powerful and efficient React Hooks library designed to streamline\ndapp development by simplifying Ethereum interactions."]}),"\n",(0,t.jsxs)(n.p,{children:["You can integrate ",(0,t.jsx)(n.a,{href:"/234-update-api/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your dapp alongside Wagmi,\nusing the MetaMask connector with Wagmi, to enable your users to seamlessly and securely connect to\nthe MetaMask browser extension and MetaMask Mobile."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure you have a basic understanding of Ethereum smart contracts and React Hooks."}),"\n",(0,t.jsxs)(n.li,{children:["Set up a project with ",(0,t.jsx)(n.a,{href:"https://wagmi.sh/react/getting-started",children:"Wagmi"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create an Infura API key and allowlist to ",(0,t.jsx)(n.a,{href:"/234-update-api/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only requests"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-configure-metamask-sdk",children:"1. Configure MetaMask SDK"}),"\n",(0,t.jsxs)(n.p,{children:["In your Wagmi project, configure MetaMask SDK with the proper ",(0,t.jsx)(n.a,{href:"/234-update-api/wallet/reference/sdk-js-options",children:"SDK options"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const MetaMaskOptions = {\n  dappMetadata: {\n    name: "Example Wagmi dapp",\n  },\n  infuraAPIKey: "YOUR-API-KEY",\n  // Other options.\n};\n'})}),"\n",(0,t.jsx)(n.h4,{id:"dapp-metadata",children:"Dapp metadata"}),"\n",(0,t.jsxs)(n.p,{children:["Specify the ",(0,t.jsx)(n.a,{href:"/234-update-api/wallet/reference/sdk-js-options#dappmetadata",children:(0,t.jsx)(n.code,{children:"dappMetadata"})})," option to help\nidentify your dapp within the MetaMask ecosystem.\nThis option is required when configuring the MetaMask connector with Wagmi."]}),"\n",(0,t.jsx)(n.h4,{id:"infura-api-key",children:"Infura API key"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend specifying the ",(0,t.jsx)(n.a,{href:"/234-update-api/wallet/reference/sdk-js-options#infuraapikey",children:(0,t.jsx)(n.code,{children:"infuraAPIKey"})}),"\noption to ",(0,t.jsx)(n.a,{href:"/234-update-api/wallet/how-to/use-sdk/javascript/make-read-only-requests",children:"make read-only requests"})," using the Infura API.\nRead more about the ",(0,t.jsx)(n.a,{href:"#benefits-of-using-the-infura-api-with-wagmi",children:"benefits of using the Infura API with Wagmi"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"universal-links",children:"Universal links"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend using universal links instead of deeplinks to avoid issues on iOS.\nThus, do not enable the ",(0,t.jsx)(n.a,{href:"/234-update-api/wallet/reference/sdk-js-options#usedeeplink",children:(0,t.jsx)(n.code,{children:"useDeeplink"})})," option.\nUsing universal links ensures a smoother transition for users accessing your dapp from mobile\ndevices, providing a better user experience compared to traditional deeplinking methods."]}),"\n",(0,t.jsx)(n.h3,{id:"2-configure-wagmi-with-the-metamask-connector",children:"2. Configure Wagmi with the MetaMask connector"}),"\n",(0,t.jsxs)(n.p,{children:["Configure Wagmi to include MetaMask as a connector and specify the Ethereum chains your dapp will support.\nUse the ",(0,t.jsx)(n.code,{children:"MetaMaskOptions"})," you created in the previous step when adding the ",(0,t.jsx)(n.code,{children:"metaMask"})," connector.\nFor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { createConfig, http } from "wagmi";\nimport { mainnet, sepolia } from "wagmi/chains";\nimport { metaMask } from "wagmi/connectors";\n\nconst MetaMaskOptions = {\n  dappMetadata: {\n    name: "Example Wagmi dapp",\n  },\n  infuraAPIKey: "YOUR-API-KEY",\n  // Other options.\n};\n\nexport const config = createConfig({\n  chains: [mainnet, sepolia],\n  connectors: [\n    metaMask(MetaMaskOptions),\n    // Other connectors\n  ],\n  transports: {\n    [mainnet.id]: http(),\n    [sepolia.id]: http(),\n  },\n});\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"3-implement-contract-interaction-using-usepreparecontractwrite",children:["3. Implement contract interaction using ",(0,t.jsx)(n.code,{children:"usePrepareContractWrite"})]}),"\n",(0,t.jsxs)(n.p,{children:["Due to a known issue in Safari where a 500ms timeout can interrupt smart contract interactions, we\nrecommend using the ",(0,t.jsx)(n.a,{href:"https://1.x.wagmi.sh/react/prepare-hooks/usePrepareContractWrite",children:(0,t.jsx)(n.code,{children:"usePrepareContractWrite"})}),"\nhook from Wagmi.\nThis approach ensures smooth transactions by preparing the contract write operation ahead of the\nactual execution."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { usePrepareContractWrite, useContractWrite } from "wagmi";\n\nconst { config } = usePrepareContractWrite({\n  address: "0xContractAddress",\n  abi: contractABI,\n  functionName: "functionToCall",\n  args: [arg1, arg2],\n});\n\nconst { write } = useContractWrite(config);\n\nwrite();\n'})}),"\n",(0,t.jsx)(n.h2,{id:"benefits-of-using-the-infura-api-with-wagmi",children:"Benefits of using the Infura API with Wagmi"}),"\n",(0,t.jsx)(n.p,{children:"Read-only requests are blockchain requests that do not require user wallet interaction.\nMobile dapps can lose their continuous connection with MetaMask, causing read-only requests to fail."}),"\n",(0,t.jsx)(n.p,{children:"These are some errors that might occur in mobile environments:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Wagmi errors",src:a(16925).A+"",width:"1136",height:"340"})}),"\n",(0,t.jsxs)(n.p,{children:["To overcome this limitation in mobile dapps that rely on a continuous connection with MetaMask,\nuse the Infura API to make read-only requests.\nYou can do this by ",(0,t.jsx)(n.a,{href:"#2-configure-the-sdk",children:"configuring the SDK with an Infura API key"}),".\nThis approach offloads the read operations to Infura's nodes, reducing the load on your own\ninfrastructure and ensuring high availability and reliability, independent of the user's wallet connection."]}),"\n",(0,t.jsx)(n.p,{children:"By using the Infura API, you can ensure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Uninterrupted access:"})," Continuous network access for read-only requests, regardless of MetaMask's state."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enhanced stability:"})," Stabilized dapp functionality by relying on Infura's robust infrastructure\nrather than the mobile environment's variable connectivity and background processing constraints."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In summary, using the Infura API compensates for Wagmi's lack of mobile optimization by providing a\nstable network backend for read-only operations."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},16925:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/wagmi-errors-a2d119e19bfdb281e9ffe8513b6e823b.png"},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);