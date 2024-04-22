"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7775],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>h});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={description:"Register a contract's method names with users.",sidebar_position:2},s="Display a contract's method names",i={unversionedId:"how-to/display/method-names",id:"how-to/display/method-names",title:"Display a contract's method names",description:"Register a contract's method names with users.",source:"@site/wallet/how-to/display/method-names.md",sourceDirName:"how-to/display",slug:"/how-to/display/method-names",permalink:"/fix/openrpc-doc-version-link/wallet/how-to/display/method-names",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/method-names.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Register a contract's method names with users.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Display tokens",permalink:"/fix/openrpc-doc-version-link/wallet/how-to/display/tokens"},next:{title:"Display a dapp icon",permalink:"/fix/openrpc-doc-version-link/wallet/how-to/display/icon"}},c={},p=[],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"display-a-contracts-method-names"},"Display a contract's method names"),(0,a.yg)("p",null,"MetaMask uses the ",(0,a.yg)("a",{parentName:"p",href:"https://www.4byte.directory/"},"Ethereum Signature Database")," to display\nmethod names on the confirmation screen.\nFor many common method names, such as token methods, this allows MetaMask to look up the method\nnames by their ",(0,a.yg)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"},"method signature"),".\nHowever, sometimes you're using a method that isn't in that database, and MetaMask simply\ndisplays ",(0,a.yg)("strong",{parentName:"p"},"Contract Interaction")," to the user."),(0,a.yg)("p",null,"To register your contract's method names so they show in the MetaMask interface,\n",(0,a.yg)("a",{parentName:"p",href:"https://www.4byte.directory/submit/"},"submit each method's signature to the Ethereum Signature Database"),"."))}d.isMDXComponent=!0}}]);