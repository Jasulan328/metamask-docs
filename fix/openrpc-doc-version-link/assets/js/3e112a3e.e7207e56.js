"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2894],{15680:(e,r,t)=>{t.d(r,{xA:()=>f,yg:()=>d});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),l=p(t),y=i,d=l["".concat(s,".").concat(y)]||l[y]||u[y]||a;return t?n.createElement(d,o(o({ref:r},f),{},{components:t})):n.createElement(d,o({ref:r},f))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},73818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(58168),i=(t(96540),t(15680));const a={description:"Reference content for the Gas API."},o="API reference",c={unversionedId:"gas-api/api-reference/index",id:"gas-api/api-reference/index",title:"API reference",description:"Reference content for the Gas API.",source:"@site/services/gas-api/api-reference/index.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/",permalink:"/fix/openrpc-doc-version-link/services/gas-api/api-reference/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/index.md",tags:[],version:"current",frontMatter:{description:"Reference content for the Gas API."},sidebar:"servicesSidebar",previous:{title:"Supported networks",permalink:"/fix/openrpc-doc-version-link/services/gas-api/supported-networks"},next:{title:"Get the base fee history",permalink:"/fix/openrpc-doc-version-link/services/gas-api/api-reference/basefeehistory"}},s={},p=[],f={toc:p},l="wrapper";function u(e){let{components:r,...t}=e;return(0,i.yg)(l,(0,n.A)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"api-reference"},"API reference"),(0,i.yg)("p",null,"This section provides reference information for the various Gas REST APIs.\nUse the APIs to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/fix/openrpc-doc-version-link/services/gas-api/api-reference/gasprices-type2"},"Get EIP-1559 gas prices.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/fix/openrpc-doc-version-link/services/gas-api/api-reference/basefeehistory"},"Get the base fee history (in Gwei).")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/fix/openrpc-doc-version-link/services/gas-api/api-reference/basefeepercentile"},"Get the base fee percentile (in Gwei).")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/fix/openrpc-doc-version-link/services/gas-api/api-reference/busythreshold"},"Get the busy threshold for a network."))),(0,i.yg)("admonition",{title:"note",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"You need your ",(0,i.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,i.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the interactive APIs.")))}u.isMDXComponent=!0}}]);