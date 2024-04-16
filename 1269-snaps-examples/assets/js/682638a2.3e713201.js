"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5685],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),l=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=l(e.components);return r.createElement(i.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(h,p(p({ref:a},c),{},{components:t})):r.createElement(h,p({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,p=new Array(s);p[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var l=2;l<s;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94340:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(58168),n=(t(96540),t(15680));const s={sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},p="Use MetaMask SDK with pure JavaScript",o={unversionedId:"how-to/use-sdk/javascript/pure-js",id:"how-to/use-sdk/javascript/pure-js",title:"Use MetaMask SDK with pure JavaScript",description:"Set up the SDK in your Pure JavaScript dapp.",source:"@site/wallet/how-to/use-sdk/javascript/pure-js.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/pure-js",permalink:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/pure-js",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/pure-js.md",tags:[{label:"JavaScript SDK",permalink:"/1269-snaps-examples/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Pure JavaScript",sidebar_position:2,description:"Set up the SDK in your Pure JavaScript dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"React UI",permalink:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/react/react-ui"},next:{title:"Other web frameworks",permalink:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/other-web-frameworks"}},i={},l=[{value:"Example",id:"example",level:2}],c={toc:l},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"use-metamask-sdk-with-pure-javascript"},"Use MetaMask SDK with pure JavaScript"),(0,n.yg)("p",null,"Import ",(0,n.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/concepts/sdk/"},"MetaMask SDK")," into your pure JavaScript dapp to enable\nyour users to easily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for pure JavaScript has the ",(0,n.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,n.yg)("p",null,"To import, instantiate, and use the SDK, you can insert a script in the head section of your website:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<head>\n    ...\n    <script src="https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/cdn/metamask-sdk.js"><\/script>\n    <script>\n        const MMSDK = new MetaMaskSDK.MetaMaskSDK(\n            dappMetadata: {\n                name: "Example Pure JS Dapp",\n                url: window.location.href,\n            },\n            infuraAPIKey: process.env.INFURA_API_KEY,\n            // Other options\n        )\n        // Because the init process of MetaMask SDK is async.\n        setTimeout(() => {\n            // You can also access via window.ethereum\n            const ethereum = MMSDK.getProvider();\n\n            ethereum.request({ method: \'eth_requestAccounts\' });\n        }, 0)\n    <\/script>\n    ...\n</head>\n')),(0,n.yg)("p",null,"You can configure the SDK using any ",(0,n.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/reference/sdk-js-options"},"options"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/reference/sdk-js-options#dappmetadata"},(0,n.yg)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/reference/sdk-js-options#infuraapikey"},(0,n.yg)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,n.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"make read-only RPC requests")," from your dapp."),(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/reference/sdk-js-options#modals"},(0,n.yg)("inlineCode",{parentName:"a"},"modals"))," to ",(0,n.yg)("a",{parentName:"li",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/display-custom-modals"},"customize the logic and UI of\nthe displayed modals"),".")),(0,n.yg)("p",null,"You can call any ",(0,n.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/reference/provider-api"},"provider API methods")," using the SDK.\nAlways call ",(0,n.yg)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,n.yg)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/reference/provider-api#request"},(0,n.yg)("inlineCode",{parentName:"a"},"request()"))," first, since it prompts the installation\nor connection popup to appear."),(0,n.yg)("p",null,"You can also call the SDK's ",(0,n.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/connect-and-sign"},(0,n.yg)("inlineCode",{parentName:"a"},"connectAndSign"))," method, and\n",(0,n.yg)("a",{parentName:"p",href:"/1269-snaps-examples/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"batch multiple JSON-RPC requests")," using the ",(0,n.yg)("inlineCode",{parentName:"p"},"metamask_batch")," method."),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)("p",null,"See the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/pure-javascript"},"example pure JavaScript dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}m.isMDXComponent=!0}}]);