"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3349],{56678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=t(74848),i=t(28453);const s={description:"Display and update interactive user interfaces.",sidebar_position:1},r="Interactive UI",c={id:"features/custom-ui/interactive-ui",title:"Interactive UI",description:"Display and update interactive user interfaces.",source:"@site/snaps/features/custom-ui/interactive-ui.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/interactive-ui",permalink:"/234-update-api/snaps/features/custom-ui/interactive-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/interactive-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display and update interactive user interfaces.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Custom UI",permalink:"/234-update-api/snaps/features/custom-ui/"},next:{title:"Dialogs",permalink:"/234-update-api/snaps/features/custom-ui/dialogs"}},d={},o=[{value:"Create an interactive interface",id:"create-an-interactive-interface",level:2},{value:"Update an interactive interface",id:"update-an-interactive-interface",level:2},{value:"Get an interactive interface&#39;s state",id:"get-an-interactive-interfaces-state",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"interactive-ui",children:"Interactive UI"}),"\n",(0,a.jsxs)(n.p,{children:["You can display interactive user interface (UI) components.\nInteractive UI is an extension of ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/features/custom-ui/",children:"custom UI"}),".\nIt allows interfaces returned from ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/features/custom-ui/dialogs",children:"dialogs"}),", ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/features/custom-ui/home-pages",children:"home pages"}),", and\n",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/entry-points#ontransaction",children:"transaction insights"})," to respond to user input."]}),"\n",(0,a.jsx)(n.p,{children:"The following interactive UI components are available:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/234-update-api/snaps/features/custom-ui/#button",children:(0,a.jsx)(n.code,{children:"button"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/234-update-api/snaps/features/custom-ui/#form",children:(0,a.jsx)(n.code,{children:"form"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/234-update-api/snaps/features/custom-ui/#input",children:(0,a.jsx)(n.code,{children:"input"})})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"create-an-interactive-interface",children:"Create an interactive interface"}),"\n",(0,a.jsxs)(n.p,{children:["Create an interactive interface using the\n",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/snaps-api#snap_createinterface",children:(0,a.jsx)(n.code,{children:"snap_createInterface"})})," method.\nThis method returns the ID of the created interface.\nYou can pass this ID to ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/snaps-api#snap_dialog",children:(0,a.jsx)(n.code,{children:"snap_dialog"})}),", returned from\n",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/entry-points#ontransaction",children:(0,a.jsx)(n.code,{children:"onTransaction"})}),", or from\n",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/entry-points#onhomepage",children:(0,a.jsx)(n.code,{children:"onHomePage"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you need to ",(0,a.jsx)(n.a,{href:"#update-an-interactive-interface",children:"update the interface"})," or\n",(0,a.jsx)(n.a,{href:"#get-an-interactive-interfaces-state",children:"get its state"})," at a future time, you should store its ID in\nthe Snap's storage."]}),"\n",(0,a.jsx)(n.h2,{id:"update-an-interactive-interface",children:"Update an interactive interface"}),"\n",(0,a.jsxs)(n.p,{children:["To update an interactive interface that is still active, use the\n",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/snaps-api#snap_updateinterface",children:(0,a.jsx)(n.code,{children:"snap_updateInterface"})})," method.\nPass the ID of the interface to be updated, and the new UI."]}),"\n",(0,a.jsxs)(n.p,{children:["Updating an interface can be done as part of the\n",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/entry-points#onuserinput",children:(0,a.jsx)(n.code,{children:"onUserInput"})})," entry point or as part of an\nasynchronous process."]}),"\n",(0,a.jsx)(n.p,{children:"The following is an example flow:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The user activates an interactive interface to send Bitcoin funds to an address.\nThe initial interface contains an address input, an amount input, and a ",(0,a.jsx)(n.strong,{children:"Send funds"})," button."]}),"\n",(0,a.jsxs)(n.li,{children:["The user fills the fields, and selects the ",(0,a.jsx)(n.strong,{children:"Send funds"})," button."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"onUserInput"})," is called, and the logic detects that the ",(0,a.jsx)(n.strong,{children:"Send funds"})," button was selected."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"snap_updateInterface"})," is called, replacing the ",(0,a.jsx)(n.strong,{children:"Send funds"})," button with a ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/features/custom-ui/#spinner",children:(0,a.jsx)(n.code,{children:"spinner"})}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Custom logic sends the funds."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"snap_updateInterface"})," is called again, replacing the whole UI with a success message."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"get-an-interactive-interfaces-state",children:"Get an interactive interface's state"}),"\n",(0,a.jsxs)(n.p,{children:["At any point you can retrieve an interactive interface's state.\nTo do this, call the ",(0,a.jsx)(n.a,{href:"/234-update-api/snaps/reference/snaps-api#snap_getinterfacestate",children:(0,a.jsx)(n.code,{children:"snap_getInterfaceState"})}),"\nmethod with the ID of the interface."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/interactive-ui",children:(0,a.jsx)(n.code,{children:"@metamask/interactive-ui-example-snap"})}),"\npackage for a full example of implementing interactive UI."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);