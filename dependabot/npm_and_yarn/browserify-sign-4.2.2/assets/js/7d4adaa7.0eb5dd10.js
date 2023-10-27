"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5412],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),o=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=o(e.components);return t.createElement(p.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,b=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?t.createElement(b,s(s({ref:a},u),{},{components:n})):t.createElement(b,s({ref:a},u))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75143:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=n(87462),r=(n(67294),n(3905)),l=n(65488),s=n(85162);const i={sidebar_label:"Options",sidebar_position:1},p="Snaps command line options",o={unversionedId:"reference/cli/options",id:"reference/cli/options",title:"Snaps command line options",description:"b, bundle",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/options",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Options",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Snaps command line interface",permalink:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/"},next:{title:"Subcommands",permalink:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands"}},u={},m=[{value:"b, bundle",id:"b-bundle",level:2},{value:"d, dist",id:"d-dist",level:2},{value:"depsToTranspile",id:"depstotranspile",level:2},{value:"e, eval",id:"e-eval",level:2},{value:"fix, writeManifest",id:"fix-writemanifest",level:2},{value:"h, help",id:"h-help",level:2},{value:"m, manifest",id:"m-manifest",level:2},{value:"n, outfileName",id:"n-outfilename",level:2},{value:"p, port",id:"p-port",level:2},{value:"r, root",id:"r-root",level:2},{value:"s, src",id:"s-src",level:2},{value:"sourceMaps",id:"sourcemaps",level:2},{value:"strip, stripComments",id:"strip-stripcomments",level:2},{value:"suppressWarnings",id:"suppresswarnings",level:2},{value:"transpilationMode",id:"transpilationmode",level:2},{value:"verboseErrors",id:"verboseerrors",level:2},{value:"version",id:"version",level:2}],d={toc:m},c="wrapper";function b(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-command-line-options"},"Snaps command line options"),(0,r.kt)("h2",{id:"b-bundle"},"b, bundle"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--bundle <file>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-b out/bundle.js\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bundle: 'out/bundle.js' \n")))),(0,r.kt)("p",null,"Path to the Snap ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/concepts/anatomy#bundle-file"},"bundle file"),".\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/bundle.js"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#e-eval"},(0,r.kt)("inlineCode",{parentName:"a"},"eval"))," subcommand."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-b")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--bundle"),"."),(0,r.kt)("h2",{id:"d-dist"},"d, dist"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--dist <directory>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-d out\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"dist: 'out'\n")))),(0,r.kt)("p",null,"Path to the output directory.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-d")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--dist"),"."),(0,r.kt)("h2",{id:"depstotranspile"},"depsToTranspile"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile <array>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--depsToTranspile dep1,dep2\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"depsToTranspile: ['dep1','dep2']\n")))),(0,r.kt)("p",null,"List of dependencies to transpile, if ",(0,r.kt)("a",{parentName:"p",href:"#transpilationmode"},(0,r.kt)("inlineCode",{parentName:"a"},"--transpilationMode"))," is set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"localAndDeps"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("h2",{id:"e-eval"},"e, eval"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--eval <boolean>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-e false\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"eval: false\n")))),(0,r.kt)("p",null,"Indicates whether to attempt to evaluate the Snap bundle in SES.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--eval"),"."),(0,r.kt)("h2",{id:"fix-writemanifest"},"fix, writeManifest"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--fix <boolean>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--fix false\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fix: false\n")))),(0,r.kt)("p",null,"When validating the Snap ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/concepts/anatomy#manifest-file"},"manifest file")," using the\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#m-manifest"},(0,r.kt)("inlineCode",{parentName:"a"},"manifest"))," subcommand, indicates whether to make necessary changes to\nthe manifest file.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--fix")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--writeManifest"),"."),(0,r.kt)("h2",{id:"h-help"},"h, help"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-h, --help\n")),(0,r.kt)("p",null,"Displays the help message and exits.\nYou can use this option with ",(0,r.kt)("inlineCode",{parentName:"p"},"mm-snap")," or any ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-h")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),"."),(0,r.kt)("h2",{id:"m-manifest"},"m, manifest"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--manifest <boolean>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-m false\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"manifest: false\n")))),(0,r.kt)("p",null,"Indicates whether to validate the Snap ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/concepts/anatomy#manifest-file"},"manifest file"),".\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-m")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--manifest"),"."),(0,r.kt)("h2",{id:"n-outfilename"},"n, outfileName"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--outfileName <string>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-n snap.js\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"outfileName: 'snap.js'\n")))),(0,r.kt)("p",null,"Output file name when building a Snap from source.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle.js"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--outfileName"),"."),(0,r.kt)("h2",{id:"p-port"},"p, port"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--port <number>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-p 9000\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"port: 9000\n")))),(0,r.kt)("p",null,"Local server port for testing.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#s-serve"},(0,r.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--port"),"."),(0,r.kt)("h2",{id:"r-root"},"r, root"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--root <directory>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-r out\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"root: 'out'\n")))),(0,r.kt)("p",null,"Server root directory.\nThe default is the current working directory (",(0,r.kt)("inlineCode",{parentName:"p"},"."),")."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#s-serve"},(0,r.kt)("inlineCode",{parentName:"a"},"serve"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-r")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--root"),"."),(0,r.kt)("h2",{id:"s-src"},"s, src"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--src <file>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-s lib/index.js\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"src: 'lib/index.js'\n")))),(0,r.kt)("p",null,"Path to the Snap source file.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-s")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--src"),"."),(0,r.kt)("h2",{id:"sourcemaps"},"sourceMaps"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps <boolean>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--sourceMaps true\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sourceMaps: true\n")))),(0,r.kt)("p",null,"Indicates whether builds should include source maps.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("h2",{id:"strip-stripcomments"},"strip, stripComments"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--strip <boolean>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--strip false\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"strip: false\n")))),(0,r.kt)("p",null,"Indicates whether to remove code comments from the build output.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--strip")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"--stripComments"),"."),(0,r.kt)("h2",{id:"suppresswarnings"},"suppressWarnings"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings <boolean>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--suppressWarnings true\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"suppressWarnings: true\n")))),(0,r.kt)("p",null,"Indicates whether to suppress warnings.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"You can use this option with any ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands"},"subcommand"),"."),(0,r.kt)("h2",{id:"transpilationmode"},"transpilationMode"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode <string>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--transpilationMode localAndDeps\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"transpilationMode: 'localAndDeps'\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," transpilation mode.\nSpecify ",(0,r.kt)("inlineCode",{parentName:"p"},"localAndDeps")," to transpile all source code including dependencies, ",(0,r.kt)("inlineCode",{parentName:"p"},"localOnly")," to transpile\nlocal source code only, and ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," to transpile nothing."),(0,r.kt)("p",null,"The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"localOnly"),"."),(0,r.kt)("p",null,"You can use this option with the ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#b-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands#w-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch"))," subcommands."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For TypeScript Snaps, ",(0,r.kt)("inlineCode",{parentName:"p"},"--transpilationMode")," must be set to either ",(0,r.kt)("inlineCode",{parentName:"p"},"localOnly")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"localAndDeps"),".")),(0,r.kt)("h2",{id:"verboseerrors"},"verboseErrors"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors <boolean>\n"))),(0,r.kt)(s.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--verboseErrors false\n"))),(0,r.kt)(s.Z,{label:"Configuration file",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"verboseErrors: false\n")))),(0,r.kt)("p",null,"Indicates whether to display original errors.\nThe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"You can use this option with any ",(0,r.kt)("a",{parentName:"p",href:"/dependabot/npm_and_yarn/browserify-sign-4.2.2/snaps/reference/cli/subcommands"},"subcommand"),". "),(0,r.kt)("h2",{id:"version"},"version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--version\n")),(0,r.kt)("p",null,"Displays the version number and exits."))}b.isMDXComponent=!0},85162:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(87462),r=n(67294),l=n(86010),s=n(12466),i=n(70989),p=n(72389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:a,block:n,selectedValue:i,selectValue:p,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const a=e.currentTarget,n=m.indexOf(a),t=u[n].value;t!==i&&(d(a),p(t))},b=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;a=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;a=m[n]??m[m.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},a)},u.map((e=>{let{value:a,label:n,attributes:s}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>m.push(e),onKeyDown:b,onClick:c},s,{className:(0,l.Z)("tabs__item",o.tabItem,s?.className,{"tabs__item--active":i===a})}),n??a)})))}function m(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function d(e){const a=(0,i.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",o.tabList)},r.createElement(u,(0,t.Z)({},e,a)),r.createElement(m,(0,t.Z)({},e,a)))}function c(e){const a=(0,p.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},70989:(e,a,n)=>{n.d(a,{Y:()=>d});var t=n(67294),r=n(16550),l=n(91980),s=n(67392),i=n(50012);function p(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function o(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??p(n);return function(e){const a=(0,s.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function u(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(i),(0,t.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(s.location.search);a.set(i,e),s.replace({...s.location,search:a.toString()})}),[i,s])]}function d(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,l=o(e),[s,p]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[d,c]=m({queryString:n,groupId:r}),[b,k]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,i.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=d??b;return u({value:e,tabValues:l})?e:null})();(0,t.useLayoutEffect)((()=>{f&&p(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),c(e),k(e)}),[c,k,l]),tabValues:l}}}}]);