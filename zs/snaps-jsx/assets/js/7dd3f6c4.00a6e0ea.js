"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9944],{42639:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=s(74848),r=s(28453);const a={description:"Learn about best practices for creating secure and reliable Snaps.",sidebar_position:2},t="Snaps security guidelines",o={id:"learn/best-practices/security-guidelines",title:"Snaps security guidelines",description:"Learn about best practices for creating secure and reliable Snaps.",source:"@site/snaps/learn/best-practices/security-guidelines.md",sourceDirName:"learn/best-practices",slug:"/learn/best-practices/security-guidelines",permalink:"/zs/snaps-jsx/snaps/learn/best-practices/security-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/best-practices/security-guidelines.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about best practices for creating secure and reliable Snaps.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Snaps design guidelines",permalink:"/zs/snaps-jsx/snaps/learn/best-practices/design-guidelines"},next:{title:"Resources",permalink:"/zs/snaps-jsx/snaps/learn/resources"}},c={},l=[{value:"Manage permissions",id:"manage-permissions",level:2},{value:"Handle transactions securely",id:"handle-transactions-securely",level:2},{value:"Notify users",id:"notify-users",level:2},{value:"Secure sensitive information",id:"secure-sensitive-information",level:2},{value:"Validate parameters",id:"validate-parameters",level:2},{value:"Avoid using deprecated methods",id:"avoid-using-deprecated-methods",level:2},{value:"Coding best practices",id:"coding-best-practices",level:2},{value:"Manage dependencies",id:"manage-dependencies",level:2},{value:"Publish and serve your Snap",id:"publish-and-serve-your-snap",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"snaps-security-guidelines",children:"Snaps security guidelines"}),"\n",(0,i.jsx)(n.p,{children:"This page outlines essential principles for builders to develop secure and reliable Snaps.\nUse these guidelines when creating your Snap to ensure it is safe for users."}),"\n",(0,i.jsx)(n.h2,{id:"manage-permissions",children:"Manage permissions"}),"\n",(0,i.jsxs)(n.p,{children:["The following are guidelines for ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/how-to/request-permissions",children:"managing permissions"})," in the Snap manifest file."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Minimum permissions"})," - Follow the principle of least authority by only adding the minimum\npermissions needed by your Snap in the manifest file.\nBefore publishing your Snap, check the permissions again and remove any unused permissions.\nYou can validate your permissions using the ",(0,i.jsx)(n.a,{href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest",children:"Snaps Simulator Manifest\nValidator"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Minimum RPC access"})," - When adding the ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/permissions#endowmentrpc",children:(0,i.jsx)(n.code,{children:"endowment:rpc"})}),"\npermission for Snaps or dapps, ask yourself if both are necessary.\nFor example, if permission is granted to communicate with Snaps, it means other Snaps can call\nyour Snap's sensitive RPC methods."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Minimum network access"})," - Only add the ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/permissions#endowmentnetwork-access",children:(0,i.jsx)(n.code,{children:"endowment:network-access"})}),"\npermission if it's absolutely necessary, such as when needing to communicate with a remote API\nthat is part of your Snap's functionality.\nThis to mitigate users' concern about sharing wallet usage to remote servers.\nIf your Snap needs this permission, inform the user before communicating with remote servers and\ninclude a privacy policy in your Snap that explains how data is shared."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"handle-transactions-securely",children:"Handle transactions securely"}),"\n",(0,i.jsx)(n.p,{children:"The following are guidelines for handling and signing transactions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transaction details"})," - When handling transactions, provide a prompt displaying\nall transaction details, including the receiver address, chain ID, network, and amount.\nDisplay the originating site's domain name and the target blockchain.\nEnsure the user verifies the receiver address to avoid sending funds to an incorrect destination."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transparent signing"})," - Display the message to be signed by the user in the Snap confirmation flow.\nDo not rely on the requesting site to display this message, as it might choose not to, leading to the Snap signing the message silently."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Consentful confirmations"})," - Before signing a transaction, display a user confirmation prompt\nwith all the transaction details as previously mentioned."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notify-users",children:"Notify users"}),"\n",(0,i.jsx)(n.p,{children:"The following are guidelines for user notifications, dialogs, and authorizations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Transparent and consentful actions"})," - Before performing any of the following actions, display a\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/dialogs#display-a-confirmation-dialog",children:"confirmation dialog"})," that\ncontains detailed information about the action and asks the user to reject or accept it:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Modifying or reading state."})," (In general, notify the user about any state changes.)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Switching networks or accounts."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Deriving or generating key pairs, accounts, or smart contracts."})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Signing transactions."})," (If your Snap is designed to allow automatic transactions, prompt the\nuser before enabling this and make sure they know how it works.\nAlso provide a way to disable it.)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Protect user keys"})," - Do not allow your Snap to return all user wallet addresses to the\nsite, even public keys.\nUsers should choose and authorize the addresses to expose."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Limit access to sensitive methods"}),' - When building a Snap with sensitive RPC methods,\nuse a companion dapp as an "admin interface" to interact with your Snap\'s sensitive methods.\nThere are two ways to do this:']}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Restrict the ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/permissions#endowmentrpc",children:(0,i.jsx)(n.code,{children:"endowment:rpc"})})," permission to specific\nURLs using the ",(0,i.jsx)(n.code,{children:"allowedOrigins"})," caveat."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Filter specific methods to specific URLs using the built-in ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL",children:"URL\nlibrary"}),":"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const referrer = new URL(origin);\n\nif(referrer.protocol === "https:" && \n  (referrer.host.endsWith(".metamask.io") || referrer.host === "metamask.io")) { \n    console.log("URL is valid"); \n}\nelse { \n  console.log("URL is NOT valid"); \n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the RPC method can be restricted when the origin matches ",(0,i.jsx)(n.code,{children:"https://metamask.io"}),"\nor any subdomain.\nThis check can be used on any RPC method that should not be callable by all sites."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Avoid using regular expressions or string matching to filter URLs.\nThe URL library provides a much more reliable interface for matching URLs."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"secure-sensitive-information",children:"Secure sensitive information"}),"\n",(0,i.jsx)(n.p,{children:"The following are guidelines for handling sensitive or personally identifiable information such as\nuser IPs, emails, passwords, and private keys:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Logging"})," - Remove all logs to the JavaScript console that contain sensitive information.\nDisable all logging before publishing your Snap."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Errors"})," - Review parts of your code where errors and exceptions can be raised.\nIn some cases, error stacks can be written to the console with sensitive information.\nThis information can be captured in data logs, or a malicious actor can phish the user into\ncopying and sending the error."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Private keys"})," - Avoid retrieving the user's private key from the Snap unless\nabsolutely necessary, such as to sign a transaction.\nIf you only need the user's public key, use ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_getbip32publickey",children:(0,i.jsx)(n.code,{children:"snap_getBip32PublicKey"})}),"\ninstead of deriving it from the private key.\nNever return the private key in an RPC method to a dapp or another Snap.\nTo give users a way to view their private key, display it in a dialog."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Limit exposure"})," - Avoid accidentally returning sensitive information from a method.\nFor example, you might have a method that intends to return sensitive information only in specific\ncases, but due to a typo or bad logic, it returns the information incorrectly, leaking data.\nEven if you have a legitimate reason for allowing a user to export sensitive information, you\nshould prevent that information from being revealed carelessly (similar to how MetaMask makes it\ndifficult to reveal a Secret Recovery Phrase and for an observer looking over a user's shoulder to\nsee it)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When in doubt, choose friction over convenience for sensitive information."}),"\n",(0,i.jsx)(n.h2,{id:"validate-parameters",children:"Validate parameters"}),"\n",(0,i.jsx)(n.p,{children:"The following are guidelines for validating RPC parameters and handling values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Validate user inputs"})," - Validate and sanitize user inputs coming into the Snap-exposed RPC methods.\nNever assume a parameter is safe to use.\nIf unvalidated user inputs are used inside the logic of your Snap methods, a dapp or a user can\nexploit that logic in an unsafe way."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Get values from MetaMask"})," - Get values such as chain ID or address from MetaMask instead\nof the dapp.\nA dapp can accidentally or maliciously display incorrect values, tricking users into performing\ncertain actions (for example, signing a transaction for a network to which they didn't intend to\nbroadcast the transaction).\nIf a dapp provides values that do not match the values from MetaMask, warn the user in your\nconfirmation flow."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Use ",(0,i.jsx)(n.code,{children:"copyable"})," for safe disclosures"]})," - When displaying arbitrary content in a Snap dialog, such\nas for signing a message, use the ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/#copyable",children:(0,i.jsx)(n.code,{children:"copyable"})})," user\ninterface component instead of ",(0,i.jsx)(n.code,{children:"text"}),".\nWhen using dialogs, the input may contain special characters that render as Markdown and can\nmislead the user.\nFor example:"]}),"\n",(0,i.jsx)("img",{src:s(26157).A,alt:"Example not using copyable with Markdown rendering",style:{border:"1px solid #DCDCDC"}}),"\n",(0,i.jsxs)(n.p,{children:["The special characters ",(0,i.jsx)(n.code,{children:"*"})," and ",(0,i.jsx)(n.code,{children:"_"})," render Markdown formatting, so what the user sees does not\nmatch the content.\nTo avoid this, use ",(0,i.jsx)(n.code,{children:"copyable"})," instead:"]}),"\n",(0,i.jsx)("img",{src:s(94390).A,alt:"Example using copyable with clean rendering",style:{border:"1px solid #DCDCDC"}}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"copyable"})," does not render Markdown and has the added benefit that the user can select to copy the content.\nAlso, the formatting provides a visual delineator to separate arbitrary input or fields from user\ninterface text."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Check transaction data size"})," - Check the size of the ABI-encoded transaction data's function arguments.\nThe ABI specification requires all arguments, regardless of their type, to be 32 bytes.\nIf an argument is not 32 bytes, the calling contract's behavior might depend on the contract\ncompiler version.\nFor example, Solidity 0.5.0 treats these non-aligned arguments as invalid and reverts the function call.\nOlder Solidity versions automatically append zeros at the end of the transaction data to ensure\nall arguments are 32 bytes.\nAn attacker can exploit this feature to bypass security checks implemented in the corresponding\ncontract function that reads those function arguments."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"avoid-using-deprecated-methods",children:"Avoid using deprecated methods"}),"\n",(0,i.jsx)(n.p,{children:"Avoid using the following deprecated methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"wallet_enable"}),", which is deprecated in favor of\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,i.jsx)(n.code,{children:"wallet_requestSnaps"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"snap_confirm"}),", which is deprecated in favor of ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_dialog",children:(0,i.jsx)(n.code,{children:"snap_dialog"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"endowment:long-running"}),", which is deprecated for MetaMask stable but still allowed in MetaMask Flask."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"coding-best-practices",children:"Coding best practices"}),"\n",(0,i.jsx)(n.p,{children:"The following are coding security tips and warnings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SES compatibility"})," - Use packages or libraries compatible with SES (hardened JavaScript).\nIf you don't, you might encounter errors that require ",(0,i.jsx)(n.a,{href:"../../how-to/debug-a-snap/common-issues.md#patch-dependencies",children:"patching a specific\ndependency"})," to fix."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Timers and side-channel attacks"})," - Certain JavaScript features such as timers (for example,\n",(0,i.jsx)(n.code,{children:"Date.now"}),") can expose critical system information, making a user vulnerable to\n",(0,i.jsx)(n.a,{href:"https://www.rambus.com/blogs/side-channel-attacks/",children:"side-channel attacks"}),".\nIn the Snaps execution environment, the precision of these timers has been reduced to prevent this."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unsafe cryptographic libraries"})," - Avoid using unsafe cryptographic libraries.\nDo not use ",(0,i.jsx)(n.code,{children:"Math.random"}),", which is not sufficiently random for generating cryptographic hashes and\ncan expose a user to reverse engineering or brute-forcing keys in the future.\nDo not use insufficient hashing algorithms such as ",(0,i.jsx)(n.code,{children:"md5"})," or ",(0,i.jsx)(n.code,{children:"sha2"}),".\nDo not roll your own cryptography or use custom or unproven cryptography methods or libraries."]}),"\n",(0,i.jsxs)(n.p,{children:["We recommend using ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_getentropy",children:(0,i.jsx)(n.code,{children:"snap_getEntropy"})})," for entropy, the\nbuilt-in ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",children:"Web Crypto API"})," or\n",(0,i.jsx)(n.a,{href:"https://paulmillr.com/noble/",children:"Noble cryptography libraries"}),", and safe hashing algorithms such as ",(0,i.jsx)(n.code,{children:"sha256"}),".\nChoose audited, widely used libraries over obscure, untested implementations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"manage-dependencies",children:"Manage dependencies"}),"\n",(0,i.jsx)(n.p,{children:"The following are guidelines for securing your supply chain:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pin npm package dependencies"})," - Pin all npm package dependencies in the Snap's dependency tree\nto exact versions.\nIf you don't, a supply chain attacker can trick you into including a malicious version of a\npackage instead of the original, legitimate one.\nYou can quickly check the status of your dependencies by running ",(0,i.jsx)(n.code,{children:"npm audit"})," in your Snap directory."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Secure your stack"})," - Your Snap companion dapp and any remote servers are part of your security model.\nWe recommend using ",(0,i.jsx)(n.a,{href:"https://github.com/LavaMoat/LavaMoat",children:"LavaMoat"})," to secure relevant parts of\nyour stack and following security best practices for your dapp or server."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"publish-and-serve-your-snap",children:"Publish and serve your Snap"}),"\n",(0,i.jsx)(n.p,{children:"The following are guidelines for making your Snap available to users safely:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Snap updates"})," - When serving a Snap from a dapp, make sure users are getting the latest version\nof your Snap.\nDo not allow any actions on the dapp before reconnecting it to MetaMask and loading a new or\nupdated version of the Snap.\nThis prevents users from using outdated versions of the Snap that may have potential bugs and\nsecurity issues."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Snap publication"})," - Ensure correct publication of the Snap.\nOnly publish the ",(0,i.jsx)(n.code,{children:"packages/snap"})," folder, and not the entire GitHub repository for a project."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Other wallet extensions"})," - Be aware that if the user has other wallet browser extensions\ninstalled, a call to the MetaMask provider ",(0,i.jsx)(n.code,{children:"window.ethereum"})," can be overridden.\n",(0,i.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/discussions/2001",children:"Connect to Snaps using EIP-6963"})," to reliably\naccess the MetaMask provider."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"In general, when developing Snaps, put yourself in the user's shoes and consider how they use MetaMask.\nAlways prioritize their privacy and the security of their assets."}),"\n",(0,i.jsxs)(n.p,{children:["If you have any questions or a security best practice not listed here, post it in the\n",(0,i.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/discussions",children:"Snaps GitHub discussions"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},26157:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/copyable-example-1-19ebcec288d171780516abf6c11460c2.png"},94390:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/copyable-example-2-619a18d7220bdfd794ad81f1c8f9d4ea.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(96540);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);