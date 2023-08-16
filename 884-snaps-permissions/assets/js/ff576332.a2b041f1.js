"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4151],{3905:(e,n,s)=>{s.d(n,{Zo:()=>l,kt:()=>d});var t=s(67294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function a(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var p=t.createContext({}),m=function(e){var n=t.useContext(p),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},l=function(e){var n=m(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=m(s),f=r,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return s?t.createElement(d,o(o({ref:n},l),{},{components:s})):t.createElement(d,o({ref:n},l))}));function d(e,n){var s=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=s.length,o=new Array(i);o[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[c]="string"==typeof e?e:r,o[1]=a;for(var m=2;m<i;m++)o[m]=s[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}f.displayName="MDXCreateElement"},3932:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var t=s(87462),r=(s(67294),s(3905));const i={description:"Request permissions in a manifest file.",sidebar_position:2},o="Request permissions",a={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/884-snaps-permissions/snaps/how-to/request-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/request-permissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Request permissions in a manifest file.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Develop a snap",permalink:"/884-snaps-permissions/snaps/how-to/develop-a-snap"},next:{title:"Manage keys",permalink:"/884-snaps-permissions/snaps/how-to/manage-keys"}},p={},m=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2}],l={toc:m},c="wrapper";function u(e){let{components:n,...s}=e;return(0,r.kt)(c,(0,t.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,r.kt)("p",null,"To access certain powerful JavaScript globals or API methods, a snap must ask the user for permission.\nSnaps follow the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),",\nand you must specify a snap's required permissions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the\n",(0,r.kt)("a",{parentName:"p",href:"/884-snaps-permissions/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,r.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,r.kt)("p",null,"You must request permission to use any\n",(0,r.kt)("a",{parentName:"p",href:"/884-snaps-permissions/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,r.kt)("p",null,"For example, to request to use ",(0,r.kt)("a",{parentName:"p",href:"/884-snaps-permissions/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the\nfollowing to the manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,r.kt)("h2",{id:"endowments"},"Endowments"),(0,r.kt)("p",null,"Endowments are a type of permission.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/884-snaps-permissions/snaps/reference/permissions"},"Snaps permissions reference")," for the full list of endowments\nyou can specify in the manifest file."),(0,r.kt)("p",null,"For example, to request the ",(0,r.kt)("a",{parentName:"p",href:"/884-snaps-permissions/snaps/reference/permissions#endowmentnetwork-access"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission, add the following to the manifest file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')))}u.isMDXComponent=!0}}]);