"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4209],{41289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(74848),a=t(28453);const i={description:"Send transactions using eth_sendTransaction.",sidebar_position:3},r="Send transactions",o={id:"how-to/send-transactions",title:"Send transactions",description:"Send transactions using eth_sendTransaction.",source:"@site/wallet/how-to/send-transactions.md",sourceDirName:"how-to",slug:"/how-to/send-transactions",permalink:"/234-update-api/wallet/how-to/send-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/send-transactions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Send transactions using eth_sendTransaction.",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Add a network",permalink:"/234-update-api/wallet/how-to/manage-networks/add-network"},next:{title:"Sign data",permalink:"/234-update-api/wallet/how-to/sign-data/"}},c={},d=[{value:"Transaction parameters",id:"transaction-parameters",level:2},{value:"Nonce",id:"nonce",level:3},{value:"Gas price",id:"gas-price",level:3},{value:"Gas limit",id:"gas-limit",level:3},{value:"To",id:"to",level:3},{value:"Value",id:"value",level:3},{value:"Data",id:"data",level:3},{value:"Chain ID",id:"chain-id",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"send-transactions",children:"Send transactions"}),"\n",(0,s.jsxs)(n.p,{children:["You can send a transaction in MetaMask using the\n",(0,s.jsx)(n.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,s.jsx)(n.code,{children:"eth_sendTransaction"})}),"\nRPC method."]}),"\n",(0,s.jsx)(n.p,{children:"For example, the following JavaScript gets the user's accounts and sends a transaction when they\nselect each button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'const ethereumButton = document.querySelector(".enableEthereumButton");\nconst sendEthButton = document.querySelector(".sendEthButton");\n\nlet accounts = [];\n\n// Send Ethereum to an address.\nsendEthButton.addEventListener("click", () => {\n  provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({\n      method: "eth_sendTransaction",\n      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.\n      params: [\n        {\n          // The user\'s active address.\n          from: accounts[0],\n          // Required except during contract publications.\n          to: <recipient address>,\n          // Only required to send ether to the recipient from the initiating external account.\n          value: <value in wei to send>,\n          // Customizable by the user during MetaMask confirmation.\n          gasLimit: \'0x5028\',\n          // Customizable by the user during MetaMask confirmation.\n          maxPriorityFeePerGas: \'0x3b9aca00\',\n          // Customizable by the user during MetaMask confirmation.\n          maxFeePerGas: \'0x2540be400\',\n        },\n      ],\n    })\n    .then((txHash) => console.log(txHash))\n    .catch((error) => console.error(error));\n});\n\nethereumButton.addEventListener("click", () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  accounts = await provider // Or window.ethereum if you don\'t support EIP-6963.\n    .request({ method: "eth_requestAccounts" });\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The following HTML displays the buttons:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<button class="enableEthereumButton btn">Enable Ethereum</button>\n<button class="sendEthButton btn">Send ETH</button>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"transaction-parameters",children:"Transaction parameters"}),"\n",(0,s.jsx)(n.h3,{id:"nonce",children:"Nonce"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"MetaMask ignores this field."})}),"\n",(0,s.jsx)(n.p,{children:"In Ethereum, every transaction has a nonce, so each transaction can only be processed by the\nblockchain once.\nTo be a valid transaction, either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The nonce must be ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"A transaction with a nonce of the previous number, from the same account, must have been processed."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This means that transactions are always processed in order for a given account."}),"\n",(0,s.jsxs)(n.p,{children:["Nonces are easy to mess up, especially when a user is interacting with multiple applications with\npending transactions using the same account, potentially across multiple devices.\nBecause of this, MetaMask doesn't allow dapp developers to customize nonces.\nInstead, MetaMask\n",(0,s.jsx)(n.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360015489251",children:"assists the user in managing their transaction queue themselves"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"gas-price",children:"Gas price"}),"\n",(0,s.jsx)(n.p,{children:"Gas price is an optional parameter, and best used on private blockchains."}),"\n",(0,s.jsx)(n.p,{children:"In Ethereum, every transaction specifies a price for the gas it consumes.\nTo maximize their profit, block producers pick pending transactions with higher gas prices first\nwhen creating the next block.\nThis means that a high gas price usually causes your transaction to be processed faster, at the cost\nof greater transaction fees."}),"\n",(0,s.jsx)(n.p,{children:"Some networks, such as Layer 2 networks, might have a constant gas price or no gas price.\nSo while you can ignore this parameter on MetaMask's default networks, you might include it when\nyour dapp knows more about the target network than MetaMask does.\nOn the default networks, MetaMask allows users to choose between slow, medium, and fast options for\ntheir gas price."}),"\n",(0,s.jsxs)(n.p,{children:["Read about ",(0,s.jsx)(n.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360022895972",children:"how to use advanced gas controls"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"gas-limit",children:"Gas limit"}),"\n",(0,s.jsx)(n.p,{children:"Gas limit is an optional parameter, since MetaMask automatically calculates a reasonable gas price."}),"\n",(0,s.jsx)(n.h3,{id:"to",children:"To"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"to"})," parameter is a hex-encoded Ethereum address.\nIt's required for transactions with a recipient (all transactions except for contract creation)."]}),"\n",(0,s.jsxs)(n.p,{children:["Contract creation occurs when there is no ",(0,s.jsx)(n.code,{children:"to"})," value but there is a ",(0,s.jsx)(n.code,{children:"data"})," value."]}),"\n",(0,s.jsx)(n.h3,{id:"value",children:"Value"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"value"})," parameter is a hex-encoded value of the network's native currency to send.\nOn Mainnet, this is ",(0,s.jsx)(n.a,{href:"https://www.ethereum.org/eth",children:"ether"}),", which is denominated in wei."]}),"\n",(0,s.jsxs)(n.p,{children:["These numbers are often far higher precision than native JavaScript numbers, and can cause\nunpredictable behavior if not anticipated.\nWe recommend using ",(0,s.jsx)(n.a,{href:"https://github.com/indutny/bn.js/",children:"BN.js"})," when manipulating\nvalues intended for Ethereum."]}),"\n",(0,s.jsx)(n.h3,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"data"})," parameter is required for smart contract creation."]}),"\n",(0,s.jsxs)(n.p,{children:["This field is also used for specifying contract methods and their parameters.\nSee the ",(0,s.jsx)(n.a,{href:"https://solidity.readthedocs.io/en/develop/abi-spec.html",children:"Solidity ABI spec"})," for more\ninformation on how the data is encoded."]}),"\n",(0,s.jsx)(n.h3,{id:"chain-id",children:"Chain ID"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"MetaMask ignores this field."})}),"\n",(0,s.jsxs)(n.p,{children:["The chain ID is derived from the user's current selected network.\nUse ",(0,s.jsx)(n.a,{href:"/wallet/reference/eth_chainid",children:(0,s.jsx)(n.code,{children:"eth_chainId"})})," to get the user's chain ID.\nIf you need the network version, use ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#net_version",children:(0,s.jsx)(n.code,{children:"net_version"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In the future, MetaMask might allow connecting to multiple networks at the same time, at which point\nthis parameter will become important, so it might be useful to be in the habit of including it now."})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);