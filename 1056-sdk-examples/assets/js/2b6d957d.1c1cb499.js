"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6250],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=l(a),c=s,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:s,i[1]=r;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const o={description:"Develop, test, and publish a Snap.",sidebar_position:1},i="Develop a Snap",r={unversionedId:"how-to/develop-a-snap",id:"how-to/develop-a-snap",title:"Develop a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/develop-a-snap.md",sourceDirName:"how-to",slug:"/how-to/develop-a-snap",permalink:"/1056-sdk-examples/snaps/how-to/develop-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/develop-a-snap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"How to",permalink:"/1056-sdk-examples/snaps/how-to"},next:{title:"Request permissions",permalink:"/1056-sdk-examples/snaps/how-to/request-permissions"}},p={},l=[{value:"Detect the user&#39;s MetaMask version",id:"detect-the-users-metamask-version",level:2},{value:"Test your Snap",id:"test-your-snap",level:2},{value:"Debug your Snap",id:"debug-your-snap",level:2},{value:"Publish your Snap",id:"publish-your-snap",level:2},{value:"Distribute your Snap",id:"distribute-your-snap",level:2},{value:"Resources and tools",id:"resources-and-tools",level:2}],u={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"develop-a-snap"},"Develop a Snap"),(0,s.kt)("p",null,"A Snap can extend the dapp-facing ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/rpc-api"},"MetaMask JSON-RPC API")," in\narbitrary ways, or integrate with and extend the functionality of MetaMask using the\n",(0,s.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/exports"},"Snaps Exports"),", ",(0,s.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/reference/rpc-api"},"Snaps JSON-RPC API"),", and\n",(0,s.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/how-to/request-permissions"},"permissions"),"."),(0,s.kt)("admonition",{title:"important",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Before developing a Snap, make sure you understand the following concepts and guidelines:"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/concepts/anatomy"},"Snaps anatomy")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/concepts/lifecycle"},"Snaps lifecycle")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/concepts/user-interface"},"Snaps user interface")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/concepts/execution-environment"},"Snaps execution environment")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/concepts/design-guidelines"},"Snaps design guidelines")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1056-sdk-examples/snaps/concepts/security-guidelines"},"Snaps security guidelines")))),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/get-started/quickstart"},"get started quickly using the Snaps template")," or follow a\n",(0,s.kt)("a",{parentName:"p",href:"/snaps/category/tutorials"},"tutorial"),"."),(0,s.kt)("p",null,"This page describes additional important steps when developing a Snap."),(0,s.kt)("h2",{id:"detect-the-users-metamask-version"},"Detect the user's MetaMask version"),(0,s.kt)("p",null,"When developing a website that depends on ",(0,s.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/get-started/install-flask#install-metamask-flask"},"MetaMask Flask"),",\nyou first need to know whether the user has it installed."),(0,s.kt)("p",null,"The following example uses the\n",(0,s.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/detect-provider"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," package to get\nthe provider object from MetaMask first:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import detectEthereumProvider from '@metamask/detect-provider';\n\n// This resolves to the value of window.ethereum or null\nconst provider = await detectEthereumProvider();\n\n// web3_clientVersion returns the installed MetaMask version as a string\nconst isFlask = (\n  await provider?.request({ method: 'web3_clientVersion' })\n)?.includes('flask');\n\nif (provider && isFlask) {\n  console.log('MetaMask Flask successfully detected!');\n\n  // Now you can use Snaps!\n} else {\n  console.error('Please install MetaMask Flask!', error);\n}\n")),(0,s.kt)("h2",{id:"test-your-snap"},"Test your Snap"),(0,s.kt)("p",null,"Test your Snap by hosting it locally using ",(0,s.kt)("inlineCode",{parentName:"p"},"mm-snap serve"),", installing it in Flask, and calling its\nAPI methods from a web page."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you use the template Snap monorepo, running ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn start")," will serve the Snap at\n",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,s.kt)("inlineCode",{parentName:"a"},"http://localhost:8080")))),(0,s.kt)("p",null,"For end-to-end Snap testing, ",(0,s.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/how-to/test-a-snap"},"use the ",(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-jest")," package"),"."),(0,s.kt)("h2",{id:"debug-your-snap"},"Debug your Snap"),(0,s.kt)("p",null,"To debug your Snap, use ",(0,s.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process.\nYou can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,s.kt)("inlineCode",{parentName:"p"},"mm-snap manifest --fix")," to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,s.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,s.kt)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Go to ",(0,s.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,s.kt)("li",{parentName:"ol"},"Toggle ",(0,s.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,s.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,s.kt)("strong",{parentName:"li"},"Details"),"."),(0,s.kt)("li",{parentName:"ol"},"Under ",(0,s.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,s.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,s.kt)("p",null,"The log output displays in the console that pops up."),(0,s.kt)("h2",{id:"publish-your-snap"},"Publish your Snap"),(0,s.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The version in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,s.kt)("li",{parentName:"ul"},"The image specified in ",(0,s.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,s.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,s.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,s.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If you are using the Snap template, make sure to only publish the Snap package in ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,s.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,s.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,s.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,s.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,s.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,s.kt)("p",null,"You should deploy a dapp where users can learn about your Snap and install it, or integrate with your existing dapp."),(0,s.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to ",(0,s.kt)("a",{parentName:"p",href:"/1056-sdk-examples/snaps/how-to/use-3rd-party-snaps"},"integrate your Snap"),"."),(0,s.kt)("h2",{id:"resources-and-tools"},"Resources and tools"),(0,s.kt)("p",null,"You can review the growing number of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples"},"example Snaps")," maintained by MetaMask, as well as the following fully functional and open source Snaps: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/ziad-saab/dogecoin-snap"},"Dogecoin")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Consensys/starknet-snap"},"StarkNet")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Montoya/mobymask-snap"},"MobyMask Phishing Warning"))),(0,s.kt)("p",null,"MetaMask also maintains tools to help developers build, debug, and maintain Snaps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/template-snap-monorepo"},"Template Snap")," - A template that includes\nTypeScript/React and vanilla JavaScript options and a CLI for building, packaging, and deploying\nyour Snap and a companion dapp."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://metamask.github.io/snaps/snaps-simulator/latest"},"Snaps Simulator")," - A developer tool built for simulating Snaps in the browser, streamlining the development process."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/test-snaps"},"Test Snaps")," - A collection of test Snaps and a dapp for\nevaluating them.")),(0,s.kt)("p",null,"If you have any questions, ask them on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/discussions"},"GitHub discussions"),", and if you encounter\nany issues, please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps-monorepo/issues"},"open a GitHub issue"),"."))}d.isMDXComponent=!0}}]);