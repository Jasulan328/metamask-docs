"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5651],{42284:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var a=t(74848),i=t(28453);const s={description:"Authorize specific websites to automatically connect to a Snap.",sidebar_position:5},o="Allow automatic connections",l={id:"how-to/allow-automatic-connections",title:"Allow automatic connections",description:"Authorize specific websites to automatically connect to a Snap.",source:"@site/snaps/how-to/allow-automatic-connections.md",sourceDirName:"how-to",slug:"/how-to/allow-automatic-connections",permalink:"/allowlisting-audit-caveat/snaps/how-to/allow-automatic-connections",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/allow-automatic-connections.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Authorize specific websites to automatically connect to a Snap.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Restrict RPC API methods",permalink:"/allowlisting-audit-caveat/snaps/how-to/restrict-rpc-api"},next:{title:"Test a Snap",permalink:"/allowlisting-audit-caveat/snaps/how-to/test-a-snap"}},c={},r=[{value:"Steps",id:"steps",level:2},{value:"1. Add authorized dapps in <code>initialConnections</code>",id:"1-add-authorized-dapps-in-initialconnections",level:3},{value:"2. Connect to the Snap from an authorized dapp",id:"2-connect-to-the-snap-from-an-authorized-dapp",level:3},{value:"Example",id:"example",level:2},{value:"When to use initial connections",id:"when-to-use-initial-connections",level:2},{value:"Snap used by multiple dapps",id:"snap-used-by-multiple-dapps",level:4},{value:"Snap installed from the Snaps directory",id:"snap-installed-from-the-snaps-directory",level:4},{value:"Snap installed from your companion dapp",id:"snap-installed-from-your-companion-dapp",level:4}];function p(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"allow-automatic-connections",children:"Allow automatic connections"}),"\n",(0,a.jsxs)(e.p,{children:["You can authorize specific dapps or Snaps to automatically connect to your Snap, skipping the need\nfor users to manually confirm a connection when the dapp or Snap calls\n",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(e.code,{children:"wallet_requestSnaps"})}),".\nThis is useful, for example, for ",(0,a.jsx)(e.a,{href:"#snap-used-by-multiple-dapps",children:"Snaps used by multiple dapps"})," or\n",(0,a.jsx)(e.a,{href:"#snap-installed-from-the-snaps-directory",children:"Snaps installed from the Snaps directory"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsxs)(e.h3,{id:"1-add-authorized-dapps-in-initialconnections",children:["1. Add authorized dapps in ",(0,a.jsx)(e.code,{children:"initialConnections"})]}),"\n",(0,a.jsxs)(e.p,{children:["Add an ",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/permissions#initial-connections",children:(0,a.jsx)(e.code,{children:"initialConnections"})})," field in the Snap\nmanifest file, specifying each dapp you want to allow to automatically connect.\nFor example:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialConnections": {\n  "https://voyager-snap.linea.build": {}\n}\n'})}),"\n",(0,a.jsx)(e.admonition,{title:"important",type:"caution",children:(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"initialConnections"})," is not a replacement for ",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/permissions#endowmentrpc",children:(0,a.jsx)(e.code,{children:"endowment:rpc"})}),".\n",(0,a.jsx)(e.code,{children:"endowment:rpc"})," is still required to allow dapps or Snaps to call RPC methods of your Snap."]})}),"\n",(0,a.jsx)(e.p,{children:"When testing, you can specify the local site.\nFor example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",metastring:'title="snap.manifest.json" ',children:'"initialConnections": {\n  "http://localhost:8000": {}\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"We recommend removing local sites before deploying your Snap to production."}),"\n",(0,a.jsx)(e.h3,{id:"2-connect-to-the-snap-from-an-authorized-dapp",children:"2. Connect to the Snap from an authorized dapp"}),"\n",(0,a.jsxs)(e.p,{children:["When you visit a dapp specified in the Snap's ",(0,a.jsx)(e.code,{children:"initialConnections"}),", and the dapp calls\n",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(e.code,{children:"wallet_requestSnaps"})}),", if the Snap is\nalready installed, the dapp connects immediately and can make further calls to the Snap.\nIf the Snap is not installed, you see a confirmation to install the Snap."]}),"\n",(0,a.jsxs)(e.p,{children:["Additionally, since the connection between the Snap and a dapp listed in ",(0,a.jsx)(e.code,{children:"initialConnections"}),"\nis automatic, calling ",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/wallet-api-for-snaps#wallet_getsnaps",children:(0,a.jsx)(e.code,{children:"wallet_getSnaps"})})," from\nthe dapp returns the Snap even if the dapp never called\n",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(e.code,{children:"wallet_requestSnaps"})}),".\nThis makes the flow of using the Snap from an authorized dapp completely seamless."]}),"\n",(0,a.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(e.p,{children:["The following sample code, adapted from the\n",(0,a.jsx)(e.a,{href:"https://github.com/Consensys/linea-voyager-snap",children:"Linea Voyager Snap"})," companion dapp, shows the flow\nof connecting to a Snap from a dapp authorized in ",(0,a.jsx)(e.code,{children:"initialConnections"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["While the code is exactly the same as it would be without the dapp being listed in\n",(0,a.jsx)(e.code,{children:"initialConnections"}),", the comments show how the flow is different from the user's perspective."]}),"\n",(0,a.jsxs)(e.p,{children:["The key is that calling ",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/wallet-api-for-snaps#wallet_getsnaps",children:(0,a.jsx)(e.code,{children:"wallet_getSnaps"})}),"\nfrom an authorized dapp when the Snap is already installed returns that Snap even if the dapp never\nexplicitly connected to it by calling\n",(0,a.jsx)(e.a,{href:"/allowlisting-audit-caveat/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,a.jsx)(e.code,{children:"wallet_requestSnaps"})}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="script.js"',children:"const snapId = \"npm:@myorg/mysnap\";\n\n// This function is called when the EIP-6963 process of finding MetaMask is successful.\nconst MetaMaskFound = async (providerDetail) => {\n  const { provider } = providerDetail;\n\n  // This call returns the Snap ID if it is already installed.\n  const snaps = await provider.request({\n    method: \"wallet_getSnaps\",\n  });\n\n  if (Object.keys(snaps).includes(snapId)) {\n    // If we're here, the Snap is installed. We're good to go.\n    return;\n  }\n\n  // If we're here, the Snap is not installed. Let's install it.\n  // Since the Snap is not installed, the user still sees a confirmation to install the Snap.\n  try {\n    const result = await provider.request({\n      method: \"wallet_requestSnaps\",\n      params: {\n        [snapId]: {},\n      },\n    });\n\n    // If we're here, the Snap is installed, and the dapp is successfully connected to it.\n  } catch (err) {\n    // If we're here, something went wrong. For example, the user might have declined the Snap\n    // installation confirmation.\n  }\n};\n"})}),"\n",(0,a.jsx)(e.h2,{id:"when-to-use-initial-connections",children:"When to use initial connections"}),"\n",(0,a.jsxs)(e.p,{children:["The following scenarios showcase ",(0,a.jsx)(e.code,{children:"initialConnection"}),"'s usefulness, in order from most to least useful:"]}),"\n",(0,a.jsx)(e.h4,{id:"snap-used-by-multiple-dapps",children:"Snap used by multiple dapps"}),"\n",(0,a.jsx)(e.p,{children:"This flow is as follows:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["You build a Snap that can be used by multiple dapps, for example, a protocol Snap.\nYou authorize an automatic connection to your Snap's companion dapp by listing it in ",(0,a.jsx)(e.code,{children:"initialConnections"}),"."]}),"\n",(0,a.jsx)(e.li,{children:"A user installs your Snap while interacting with a dapp that uses it."}),"\n",(0,a.jsx)(e.li,{children:"The user lands on your Snap's companion dapp."}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"The user can interact with the companion dapp without having to manually connect to the Snap."})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"For even greater benefit, consider authorizing an automatic connection for some known dapps that\ninteract with your Snap."}),"\n",(0,a.jsx)(e.h4,{id:"snap-installed-from-the-snaps-directory",children:"Snap installed from the Snaps directory"}),"\n",(0,a.jsx)(e.p,{children:"This flow is as follows:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["You build a Snap that is only really useful for one dapp, its companion dapp.\nYou authorize an automatic connection to the companion dapp by listing it in ",(0,a.jsx)(e.code,{children:"initialConnections"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["A user finds your Snap through the ",(0,a.jsx)(e.a,{href:"https://snaps.metamask.io",children:"Snaps directory"})," and installs it."]}),"\n",(0,a.jsx)(e.li,{children:"The user lands on your Snap's companion dapp."}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"The user can interact with the companion dapp without having to manually connect to the Snap."})}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"snap-installed-from-your-companion-dapp",children:"Snap installed from your companion dapp"}),"\n",(0,a.jsx)(e.p,{children:"This flow is as follows:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["You build a Snap, and authorize an automatic connection to its companion dapp by listing the dapp\nin ",(0,a.jsx)(e.code,{children:"initialConnections"}),"."]}),"\n",(0,a.jsx)(e.li,{children:"A user discovers your Snap through its companion dapp."}),"\n",(0,a.jsx)(e.li,{children:"The user must install the Snap, going through the normal flow."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["In this case, adding the companion dapp to ",(0,a.jsx)(e.code,{children:"initialConnections"})," is not useful."]})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var a=t(96540);const i={},s=a.createContext(i);function o(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);