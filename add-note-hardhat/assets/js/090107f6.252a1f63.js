"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6940],{83638:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(74848),a=s(28453);const i={description:"Submit your Snap for allowlisting on the MetaMask extension.",sidebar_position:8},o="Get allowlisted",r={id:"how-to/get-allowlisted",title:"Get allowlisted",description:"Submit your Snap for allowlisting on the MetaMask extension.",source:"@site/snaps/how-to/get-allowlisted.md",sourceDirName:"how-to",slug:"/how-to/get-allowlisted",permalink:"/add-note-hardhat/snaps/how-to/get-allowlisted",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/get-allowlisted.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Submit your Snap for allowlisting on the MetaMask extension.",sidebar_position:8},sidebar:"snapsSidebar",previous:{title:"Publish a Snap",permalink:"/add-note-hardhat/snaps/how-to/publish-a-snap"},next:{title:"Connect to a Snap",permalink:"/add-note-hardhat/snaps/how-to/connect-to-a-snap"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Submit your Snap",id:"1-submit-your-snap",level:3},{value:"2. Allowlist review",id:"2-allowlist-review",level:3},{value:"3. Directory listing",id:"3-directory-listing",level:3},{value:"4. Distribute your Snap",id:"4-distribute-your-snap",level:3},{value:"5. Update your Snap",id:"5-update-your-snap",level:3},{value:"Open permissions",id:"open-permissions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-allowlisted",children:"Get allowlisted"}),"\n",(0,t.jsx)(n.p,{children:"Once you have built your Snap, tested it, and published it to npm, you can make it available to MetaMask users."}),"\n",(0,t.jsxs)(n.p,{children:["If your Snap only uses ",(0,t.jsx)(n.a,{href:"#open-permissions",children:"open permissions"}),", anyone can install it on the MetaMask extension.\nHowever, Snaps that use\n",(0,t.jsx)(n.a,{href:"#open-permissions",children:"protected permissions"}),"\nmust be put on an allowlist before users can install them.\nThis means that at this time, for Snaps that use protected permissions, only those that are selected and reviewed can be installed.\nIn the future, this system will be opened up."]}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,t.jsx)(n.p,{children:"By including a Snap on the allowlist, Consensys is not endorsing, recommending, or guaranteeing the\nsafety of a Snap for your use or use for any reason.\nAlways do your own research before installing a Snap."})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To be added to the allowlist, a Snap must:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Have publicly available source code.\nYou don't need to publish your code with an open source license, but users should be able to read\nthe source code of the Snap package."}),"\n",(0,t.jsxs)(n.li,{children:["Be ",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/how-to/publish-a-snap",children:"published"})," to npm."]}),"\n",(0,t.jsx)(n.li,{children:"Not impair our compliance with laws or regulations."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Furthermore, if your Snap uses any of the following API methods related to key management, you must provide\nevidence of a third-party audit from an approved auditor:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_getbip32entropy",children:(0,t.jsx)(n.code,{children:"snap_getBip32Entropy"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_getbip32publickey",children:(0,t.jsx)(n.code,{children:"snap_getBip32PublicKey"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_getbip44entropy",children:(0,t.jsx)(n.code,{children:"snap_getBip44Entropy"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_getentropy",children:(0,t.jsx)(n.code,{children:"snap_getEntropy"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_manageaccounts",children:(0,t.jsx)(n.code,{children:"snap_manageAccounts"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The audit must cover the Snap source code that is to run within the Snaps system, and any modules\nused for key management.\nYou must provide the commit that was audited and the commit that has any fixes documented in the\naudit report."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["A list of approved third-party auditors and details about the audit process are available on the\n",(0,t.jsx)(n.a,{href:"https://consensys.notion.site/Audit-process-1acbc67819dc4631b7a3d6c664e387a3",children:"MetaMask Snaps Builder Engagement Program"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-submit-your-snap",children:"1. Submit your Snap"}),"\n",(0,t.jsxs)(n.p,{children:["Fill out the ",(0,t.jsx)(n.a,{href:"https://go.metamask.io/snaps-directory-request",children:"MetaMask Snaps Directory Information form"}),".\nThe form requests information about your Snap, including the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap name"})," - The name of your Snap.\nThis must match the ",(0,t.jsx)(n.code,{children:"proposedName"})," field in the Snap ",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"}),'.\nYou cannot use these words in the name: "MetaMask," "Snap," "Meta," or "Mask."']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap builder name and URL"})," - The company, project, or personal site for your brand, where users\ncan learn more about you."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap website URL"})," - A website where users can interact with your Snap.\nIf your Snap does not require a website to be used, you can leave this blank.\nIf your Snap works with multiple websites, you can include the URLs of additional websites in the\n",(0,t.jsx)(n.strong,{children:"long description"}),", but this URL should be an official website designed to interact with your Snap."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap short description"}),' - A one or two sentence description of your Snap.\nTry not to say "is a MetaMask Snap" \u2013 users already know this!']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap long description"})," - A description of your Snap's features and how to use them.\nYou can use line breaks, lists, and URLs.\nYou cannot use HTML.\nIf applicable, describe quick steps to onboard and use the Snap.\nFor example: ",(0,t.jsxs)(n.em,{children:["After installing the Snap, visit the companion dapp at\n",(0,t.jsx)(n.a,{href:"https://voyager-snap.linea.build",children:"https://voyager-snap.linea.build"})," to connect an account and track your Linea Voyage progress."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GitHub repository and npm package URLs"})," - The public GitHub repo that hosts your Snap's\nsource code, and the npm package of your ",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/how-to/publish-a-snap",children:"published Snap"}),".\nIf your Snap's source code is hosted on a different site, such as GitLab, you can link to that instead."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap version number to be allowlisted"})," - The Snap version number as specified in ",(0,t.jsx)(n.code,{children:"package.json"}),"\nand ",(0,t.jsx)(n.code,{children:"snap.manifest.json"}),".\nMake sure that the version numbers match and that the Snap has been built with the correct ",(0,t.jsx)(n.code,{children:"shasum"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap auditor and audit report"})," - A PDF or URL of the ",(0,t.jsx)(n.a,{href:"#prerequisites",children:"required audit report"}),",\nif your Snap uses one or more of the key management API methods.\nIf your Snap doesn't require an audit, leave this field blank."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The audit report will be made public.\nYou can ask your auditor to publish the report on their website and provide the link to us."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Customer support details"})," -\n",(0,t.jsx)(n.a,{href:"https://consensys.notion.site/Providing-User-Support-Information-cff79a7d896e4da6a2f8a17ce074e585",children:"Customer support information"}),"\nto ensure a smooth user experience for your Snap.\nThis allows MetaMask to escalate any issues that a user might encounter with your Snap.\nThe escalation contact will be kept confidential within MetaMask, and the rest of the information\nwill be public.\nYou must provide an escalation contact and at least one other customer support item."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Images"})," - Screenshots or promotional images to help users get an idea of what your Snap can do.\nHere's your opportunity to provide compelling previews of your Snap!"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Demo video"})," - A video walking through how to use your Snap.\nThis will help MetaMask review your Snap, and might also be used by the MetaMask marketing team."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-allowlist-review",children:"2. Allowlist review"}),"\n",(0,t.jsx)(n.p,{children:"Your Snap will be reviewed by the MetaMask Snaps team to ensure it is functional and well-designed.\nIf the Snap requires an audit, the team will review the audit report to ensure that all\nvulnerabilities with medium or higher risk have been addressed.\nAll Snaps require at least two approvals to be allowlisted."}),"\n",(0,t.jsx)(n.h3,{id:"3-directory-listing",children:"3. Directory listing"}),"\n",(0,t.jsxs)(n.p,{children:["Once your Snap is on the allowlist, it will appear in the ",(0,t.jsx)(n.a,{href:"https://snaps.metamask.io",children:"MetaMask Snaps Directory"}),".\nYou can direct users to the directory to find and install your Snap."]}),"\n",(0,t.jsx)(n.h3,{id:"4-distribute-your-snap",children:"4. Distribute your Snap"}),"\n",(0,t.jsx)(n.p,{children:"You can deploy a companion dapp where users can learn about your Snap and install it, or you can\nintegrate your Snap with your existing dapp."}),"\n",(0,t.jsxs)(n.p,{children:["If your Snap is designed to communicate with dapps, you can encourage other dapp developers to\n",(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/how-to/connect-to-a-snap",children:"connect to your Snap"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"While testing your Snap, you might have designed your dapp to require MetaMask Flask.\nOnce your Snap is allowlisted, you should update your dapp to support any flavor of MetaMask,\nand show the orange MetaMask logo instead of the purple Flask logo."})}),"\n",(0,t.jsx)(n.h3,{id:"5-update-your-snap",children:"5. Update your Snap"}),"\n",(0,t.jsxs)(n.p,{children:["The allowlist uses strict versioning for all Snaps.\nAfter publishing a new version of your Snap to npm, you must re-submit it for allowlisting by\nfilling out the\n",(0,t.jsx)(n.a,{href:"https://go.metamask.io/snaps-directory-update-request",children:"MetaMask Snaps Directory Information Update form"}),".\nUsers will not be able to install a new version until it is allowlisted."]}),"\n",(0,t.jsx)(n.p,{children:'You can also update any information about your Snap using the form.\nFor fields that you don\'t need to update, you can leave them blank or enter "N/A."\nWhen providing the new version to be allowlisted, you should also note whether previous versions of\nyour Snap should be removed from the allowlist (effectively, replaced with the new version).'}),"\n",(0,t.jsx)(n.h2,{id:"open-permissions",children:"Open permissions"}),"\n",(0,t.jsx)(n.p,{children:"The following is a list of permissions that do not require allowlisting:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentcronjob",children:(0,t.jsx)(n.code,{children:"endowment:cronjob"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentethereum-provider",children:(0,t.jsx)(n.code,{children:"endowment:ethereum-provider"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentlifecycle-hooks",children:(0,t.jsx)(n.code,{children:"endowment:lifecycle-hooks"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentpage-home",children:(0,t.jsx)(n.code,{children:"endowment:page-home"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmentsignature-insight",children:(0,t.jsx)(n.code,{children:"endowment:signature-insight"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/permissions#endowmenttransaction-insight",children:(0,t.jsx)(n.code,{children:"endowment:transaction-insight"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_dialog",children:(0,t.jsx)(n.code,{children:"snap_dialog"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_getlocale",children:(0,t.jsx)(n.code,{children:"snap_getLocale"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_managestate",children:(0,t.jsx)(n.code,{children:"snap_manageState"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/add-note-hardhat/snaps/reference/snaps-api#snap_notify",children:(0,t.jsx)(n.code,{children:"snap_notify"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If your Snap only uses permissions from this list,\nit can be installed in the MetaMask extension without inclusion on the allowlist."}),"\n",(0,t.jsxs)(n.p,{children:["Any permissions not on this list are ",(0,t.jsx)(n.em,{children:"protected permissions"})," and require allowlisting."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);