"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6875],{93195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(74848),a=t(28453);const o={description:"Configure and connect to a Ganache development network.",sidebar_position:9},s="Run a development network",c={id:"how-to/run-devnet",title:"Run a development network",description:"Configure and connect to a Ganache development network.",source:"@site/wallet/how-to/run-devnet.md",sourceDirName:"how-to",slug:"/how-to/run-devnet",permalink:"/add-note-hardhat/wallet/how-to/run-devnet",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/run-devnet.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Configure and connect to a Ganache development network.",sidebar_position:9},sidebar:"walletSidebar",previous:{title:"Onboard users",permalink:"/add-note-hardhat/wallet/how-to/onboard-users"},next:{title:"Secure your dapp",permalink:"/add-note-hardhat/wallet/how-to/secure-dapp"}},d={},i=[{value:"Connect to Hardhat Network",id:"connect-to-hardhat-network",level:2},{value:"Reset your local nonce calculation",id:"reset-your-local-nonce-calculation",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"run-a-development-network",children:"Run a development network"}),"\n",(0,r.jsxs)(n.p,{children:["You can run a personal Ethereum development network using ",(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-network/docs/overview#hardhat-network",children:"Hardhat"}),",\nwhich allows you to develop a dapp in a secure test environment."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When using a local development blockchain such as Hardhat Network or\n",(0,r.jsx)(n.a,{href:"https://book.getfoundry.sh/anvil/#overview-of-anvil",children:"anvil"}),", your node must calculate gas to make\ntransactions on MetaMask."]})}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-hardhat-network",children:"Connect to Hardhat Network"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps to connect MetaMask to Hardhat Network."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/guides/project-setup",children:"Set up a Hardhat project."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a new\n",(0,r.jsx)(n.a,{href:"https://support.metamask.io/hc/en-us/articles/360060826432-What-is-a-Secret-Recovery-Phrase-and-how-to-keep-your-crypto-wallet-secure#:~:text=Your%20Secret%20Recovery%20Phrase%20(SRP,are%20connected%20to%20that%20phrase.)",children:"MetaMask seed phrase"}),"\nspecifically for development."]}),"\n",(0,r.jsx)(n.admonition,{title:"important",type:"caution",children:(0,r.jsx)(n.p,{children:"Your seed phrase controls all your accounts, so we recommend keeping at least one seed phrase for\ndevelopment, separate from any used to store real value.\nYou can manage multiple seed phrases by using multiple browser profiles, each with its own\nMetaMask installation."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In your ",(0,r.jsx)(n.code,{children:"hardhat.config.js"})," file, specify a\n",(0,r.jsxs)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/config#networks-configuration",children:[(0,r.jsx)(n.code,{children:"networks"})," configuration"]}),"\nwith a ",(0,r.jsx)(n.code,{children:"hardhat"})," network.\nIn this ",(0,r.jsx)(n.code,{children:"networks.hardhat"})," configuration:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Specify your MetaMask seed phrase in the\n",(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-network/docs/reference#accounts",children:(0,r.jsx)(n.code,{children:"accounts.mnemonic"})})," field."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Alternatively, to prevent committing your seed phrase, we recommend adding your seed phrase to a\n",(0,r.jsxs)(n.a,{href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv",children:[(0,r.jsx)(n.code,{children:".env"})," file"]})," and using the\n",(0,r.jsx)(n.code,{children:"process.env"})," global variable in ",(0,r.jsx)(n.code,{children:"hardhat.config.js"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Specify the ",(0,r.jsxs)(n.a,{href:"https://hardhat.org/hardhat-network/docs/metamask-issue",children:["chain ID ",(0,r.jsx)(n.code,{children:"1337"})]})," in the\n",(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-network/docs/reference#chainid",children:(0,r.jsx)(n.code,{children:"chainId"})})," field."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="hardhat.config.js"',children:"module.exports = {\n  networks: {\n    hardhat: {\n      accounts: {\n        mnemonic: process.env.SEED_PHRASE,\n      },\n      chainId: 1337,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Hardhat automatically gives each of your first 20 accounts 10000 test ether (you can modify\nthese numbers in the ",(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-network/docs/reference#accounts",children:(0,r.jsx)(n.code,{children:"accounts"})}),"\nconfiguration), which makes it easy to start development."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"npx hardhat node"})," to run Hardhat Network and expose a JSON-RPC interface."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You can now connect MetaMask to your Hardhat Network RPC URL, ",(0,r.jsx)(n.code,{children:"http://127.0.0.1:8545/"}),".\nIn the MetaMask extension:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the upper left corner, select the network you're currently connected to."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Add network"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Add a network manually"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter your Hardhat Network RPC URL, ",(0,r.jsx)(n.code,{children:"http://127.0.0.1:8545/"})," (or ",(0,r.jsx)(n.code,{children:"http://localhost:8545"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter your Hardhat Network chain ID, ",(0,r.jsx)(n.code,{children:"1337"})," (or ",(0,r.jsx)(n.code,{children:"0x539"})," in hexadecimal format)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Alternatively, you can add Hardhat Network to MetaMask using\n",(0,r.jsx)(n.a,{href:"/wallet/reference/wallet_addethereumchain/?AddEthereumChainParameter%5BrpcUrls%5D%5B0%5D=http://127.0.0.1:8545&AddEthereumChainParameter%5BchainId%5D=0x539&AddEthereumChainParameter%5BchainName%5D=Hardhat&AddEthereumChainParameter%5BnativeCurrency%5D%5Bname%5D=testEth&AddEthereumChainParameter%5BnativeCurrency%5D%5Bsymbol%5D=testEth&AddEthereumChainParameter%5BnativeCurrency%5D%5Bdecimals%5D=18",children:(0,r.jsx)(n.code,{children:"wallet_addEthereumChain"})}),"\nin the interactive API playground."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reset-your-local-nonce-calculation",children:"Reset your local nonce calculation"}),"\n",(0,r.jsxs)(n.p,{children:["If you restart your development network, you can accidentally confuse MetaMask\nbecause it calculates the next ",(0,r.jsx)(n.a,{href:"/add-note-hardhat/wallet/how-to/send-transactions#nonce",children:"nonce"})," based on both the\nnetwork state ",(0,r.jsx)(n.em,{children:"and"})," the known sent transactions."]}),"\n",(0,r.jsxs)(n.p,{children:["To clear MetaMask's transaction queue and reset its nonce calculation, go to ",(0,r.jsx)(n.strong,{children:"Settings > Advanced"}),"\nand select ",(0,r.jsx)(n.strong,{children:"Reset account"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have your development environment set up and development network running, you can\n",(0,r.jsx)(n.a,{href:"/wallet/how-to/connect",children:"connect your dapp to MetaMask"})," by setting up MetaMask SDK, detecting\nMetaMask, detecting a user's network, and accessing a user's accounts."]}),"\n",(0,r.jsxs)(n.p,{children:["For an end-to-end example, you can also follow the\n",(0,r.jsx)(n.a,{href:"/add-note-hardhat/wallet/tutorials/react-dapp-local-state",children:"Create a simple React dapp"})," tutorial."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);