"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8874],{52776:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=e(74848),i=e(28453);const a={description:"Provide transaction insights in MetaMask's transaction confirmation window.",toc_max_heading_level:4,sidebar_position:13},r="Transaction insights",o={id:"features/transaction-insights",title:"Transaction insights",description:"Provide transaction insights in MetaMask's transaction confirmation window.",source:"@site/snaps/features/transaction-insights.md",sourceDirName:"features",slug:"/features/transaction-insights",permalink:"/234-update-api/snaps/features/transaction-insights",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/transaction-insights.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{description:"Provide transaction insights in MetaMask's transaction confirmation window.",toc_max_heading_level:4,sidebar_position:13},sidebar:"snapsSidebar",previous:{title:"Static files",permalink:"/234-update-api/snaps/features/static-files"},next:{title:"How to",permalink:"/234-update-api/snaps/how-to"}},c={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to display transaction insights",id:"1-request-permission-to-display-transaction-insights",level:3},{value:"2. Implement the <code>onTransaction</code> entry point",id:"2-implement-the-ontransaction-entry-point",level:3},{value:"Transaction severity level",id:"transaction-severity-level",level:4},{value:"Example",id:"example",level:2}];function h(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"transaction-insights",children:"Transaction insights"}),"\n",(0,s.jsx)(t.p,{children:"You can provide transaction insights in MetaMask's transaction confirmation window before a user\nsigns a transaction.\nFor example, you can show the user the percentage of gas fees they would pay for their transaction."}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(t.h3,{id:"1-request-permission-to-display-transaction-insights",children:"1. Request permission to display transaction insights"}),"\n",(0,s.jsxs)(t.p,{children:["Request the ",(0,s.jsx)(t.a,{href:"/234-update-api/snaps/reference/permissions#endowmenttransaction-insight",children:(0,s.jsx)(t.code,{children:"endowment:transaction-insight"})}),"\npermission by adding the following to your Snap's manifest file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:transaction-insight": {}\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If you need to receive the origin of the transaction request, add ",(0,s.jsx)(t.code,{children:"allowTransactionOrigin"})," to the\npermission object, and set it to ",(0,s.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:signature-insight": {\n    "allowTransactionOrigin": true\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.h3,{id:"2-implement-the-ontransaction-entry-point",children:["2. Implement the ",(0,s.jsx)(t.code,{children:"onTransaction"})," entry point"]}),"\n",(0,s.jsxs)(t.p,{children:["Expose an ",(0,s.jsx)(t.a,{href:"/234-update-api/snaps/reference/entry-points#ontransaction",children:(0,s.jsx)(t.code,{children:"onTransaction"})})," entry point, which receives\na raw unsigned transaction payload, the chain ID, and the optional transaction origin.\nWhen a user submits a transaction using the MetaMask extension, MetaMask calls the ",(0,s.jsx)(t.code,{children:"onTransaction"}),"\nhandler method."]}),"\n",(0,s.jsxs)(t.p,{children:["The following is an example implementation of ",(0,s.jsx)(t.code,{children:"onTransaction"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n  };\n};\n'})}),"\n",(0,s.jsx)(t.p,{children:"The Snap tab in the transaction confirmation window displays the transaction insights:"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:e(62982).A,alt:"Transaction insights",width:"360px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(t.h4,{id:"transaction-severity-level",children:"Transaction severity level"}),"\n",(0,s.jsx)(t.admonition,{type:"flaskOnly"}),"\n",(0,s.jsxs)(t.p,{children:["A Snap providing transaction insights can return an optional severity level of ",(0,s.jsx)(t.code,{children:'"critical"'}),".\nMetaMask shows a modal with the warning before the user can confirm the transaction."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onTransaction: OnTransactionHandler = async ({\n  transaction,\n  chainId,\n  transactionOrigin,\n}) => {\n  const insights = /* Get insights */;\n  return {\n    content: panel([\n      heading("My Transaction Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    // highlight-next-line\n    severity: "critical",\n  };\n};\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:e(26056).A,alt:"Transaction insights warning",width:"360px"})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["For a full end-to-end tutorial that walks you through creating a transaction insights Snap, see\n",(0,s.jsx)(t.a,{href:"/234-update-api/snaps/learn/tutorials/transaction-insights",children:"Create a Snap to calculate gas fee percentages"}),".\nYou can also see the\n",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/transaction-insights",children:(0,s.jsx)(t.code,{children:"@metamask/transaction-insights-example-snap"})}),"\npackage for a full example of implementing transaction insights."]})]})}function d(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},26056:(n,t,e)=>{e.d(t,{A:()=>s});const s=e.p+"assets/images/transaction-insights-warning-bcc44107b136efbe6df830c536f9bbeb.png"},62982:(n,t,e)=>{e.d(t,{A:()=>s});const s=e.p+"assets/images/transaction-insights-window-993288f566e310f6a5a7a86b0ebd8e08.png"},28453:(n,t,e)=>{e.d(t,{R:()=>r,x:()=>o});var s=e(96540);const i={},a=s.createContext(i);function r(n){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(a.Provider,{value:t},n.children)}}}]);