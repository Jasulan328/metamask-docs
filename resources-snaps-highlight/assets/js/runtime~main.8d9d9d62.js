(()=>{"use strict";var e,a,f,c,d,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=b,e=[],r.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(d,b),d},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"74e5817e",117:"522edf2d",242:"ba4cac81",257:"ab4cafa2",289:"9fb62b98",296:"c66adc2f",428:"dffd2023",520:"cb2c0fed",528:"9cea254b",531:"52198f09",655:"54b196a6",736:"f186a5d0",785:"e8973b68",792:"cfc76383",910:"a015cb1d",957:"c141421f",1158:"9659c6a2",1180:"92d77c2e",1235:"a7456010",1266:"7d4adaa7",1273:"b91521d0",1343:"dfbcf5f2",1408:"67e0471a",1588:"8145e54e",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1874:"9947d6d2",1891:"aee6d0cb",1930:"030193d7",1969:"17a18c8c",2008:"320bcfb3",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2167:"43ff9a0a",2169:"76d3ef76",2358:"a767f895",2368:"97cf6e84",2416:"63b87658",2445:"c23d85eb",2483:"080a8117",2520:"82c9c8ff",2675:"486ba757",2782:"3ee3d2fe",2844:"f8f7b6b2",2894:"3e112a3e",2923:"cc21c413",2971:"47fa8f02",2980:"3925c87d",3009:"9fd6936c",3012:"a1fd5277",3056:"284a1a9e",3102:"ce634f1e",3235:"b6db0fd4",3302:"facbd801",3349:"c90162c2",3374:"f8a3ce18",3442:"453c9f5d",3443:"2ff9bf14",3499:"97c42b41",3514:"239aedef",3523:"54713468",3547:"8a8bbcea",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3647:"183ed252",3692:"57e75615",3794:"d5f74ffe",3843:"cec98bc3",3860:"ba7d2542",3967:"4ecdda4a",4022:"6721d267",4050:"66ba7e9e",4151:"6380b8b5",4209:"70334ba8",4279:"df203c0f",4284:"d89de9d2",4429:"0b1c3b4c",4520:"2a5de1af",4583:"1df93b7f",4687:"c5e4f5c1",4698:"2e39c2b3",4787:"3720c009",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5122:"c94a3153",5133:"ac3e5984",5138:"666bb528",5188:"37285b91",5246:"cf946124",5312:"19fab523",5484:"4c2d8e7b",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5627:"b625c402",5651:"7269d794",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5742:"aba21aa0",5892:"11b7fc92",6023:"a2353af7",6041:"94590018",6091:"d142ef55",6095:"ab8b636d",6213:"14bc7481",6286:"f9fecb86",6306:"81c3c88c",6325:"f4fa537f",6373:"7c5954e6",6433:"3d86cae6",6594:"e4b21b58",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6804:"c0a8c6cc",6838:"4b100ba1",6875:"e1aa5429",6940:"090107f6",6969:"14eb3368",7098:"a7bd4aaa",7170:"0fffe3b1",7441:"ab85252c",7540:"d70a1ef5",7689:"e9f37fc3",7775:"5e56b9d4",7785:"68c12626",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8401:"17896441",8428:"f5000f06",8483:"78eb1577",8638:"037997aa",8691:"8329f30e",8760:"ab3b18fd",8799:"d8201ec1",8873:"fd49626c",8874:"079a82bd",8883:"93556f9a",8957:"652081cc",8982:"ed09b01b",9048:"a94703ab",9071:"4ad67257",9107:"90e119fe",9175:"d2011f4f",9329:"ef8d09aa",9346:"fe6ffccb",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9647:"5e95c892",9664:"95fa971a",9703:"b223888a",9895:"470859f7",9944:"7dd3f6c4",9981:"358f292a",9987:"5a6432d3"}[e]||e)+"."+{53:"3f46a565",117:"0659303e",242:"f45aad8a",257:"c621f83d",289:"842e4f7f",296:"a815ac71",416:"cd044015",428:"cc6a7005",520:"1a660dac",528:"15977a68",531:"95cbb81e",655:"8ad63744",736:"e95486a0",785:"cf499bfa",792:"35c05ce7",838:"dc3b2162",910:"8c07f3a0",957:"41a3db51",1046:"9cd8198e",1158:"525b1485",1169:"b53e2b87",1176:"925776c6",1180:"1ab54e61",1235:"f9c14d4b",1245:"0749e348",1266:"56d3f713",1273:"63ffd2c7",1303:"80265757",1331:"ead622ac",1343:"5b534df9",1408:"f3d49023",1588:"2d91357f",1660:"2b049a52",1697:"4cb0a3ef",1717:"545119f1",1733:"d264daa3",1784:"019a8992",1874:"9b12f6a0",1891:"84613096",1930:"7d060bda",1946:"787e92f0",1969:"003ce012",2008:"8900ff82",2130:"e4f7a6fc",2138:"b96c3803",2146:"436957a8",2166:"f2895a6d",2167:"f8f3f10f",2169:"0d23839a",2237:"a734cec9",2358:"2c2d9162",2368:"809d00c5",2376:"ae498060",2416:"9c8817d6",2445:"aaabbc70",2453:"8b96f516",2483:"a427ca49",2520:"ee2e4d46",2548:"ea55dc10",2675:"50290e17",2782:"d2a61799",2843:"daf57efb",2844:"79717d09",2894:"9dc2c8a5",2923:"67f78ea5",2925:"a74ce76c",2971:"4f5700fb",2980:"1b914e58",2983:"59c2a45f",3009:"d6f7ef0e",3012:"4283ab2c",3056:"b2dc26c5",3068:"19b57203",3102:"a98d70dd",3235:"49b3c902",3302:"0242b307",3349:"3a078552",3374:"42341f74",3442:"5ef926db",3443:"254c387d",3499:"fee8c4d2",3514:"d8d56415",3523:"02565178",3547:"cc694ee7",3557:"09480cf1",3582:"7cf40e2d",3623:"aa81fe1a",3626:"98712162",3647:"810f1e70",3692:"3ba7ea26",3706:"0c168a4d",3794:"c4207e13",3843:"49a37cac",3860:"7f4b3221",3967:"96ff7d1b",4022:"5c9de0e5",4050:"28e1b7a8",4151:"f507b3eb",4162:"663513c9",4209:"de12180f",4279:"3e49c531",4284:"92602b1e",4429:"dafcc00a",4520:"d3946498",4583:"aacbceb9",4687:"f4af2f1d",4698:"4b0f2793",4741:"9d5716d7",4787:"4e8845aa",4933:"8c85b7c8",4939:"4ca903a2",4943:"813aebf1",4961:"6ab350d7",5044:"5a378f54",5122:"a5bef69b",5133:"544c85a6",5138:"c19ef7c1",5188:"6f51bb0f",5246:"faddd29e",5312:"2f0b7e57",5458:"c2d86b0d",5484:"797fd3f9",5569:"e3ad615c",5586:"ea12cfbc",5593:"e03e9df7",5627:"07d0646c",5651:"efbcb967",5685:"12be44ff",5690:"b8659029",5693:"d4cb63eb",5742:"f55bb376",5892:"35d47861",6007:"b34e6659",6023:"0c937b1a",6041:"a7843710",6091:"3940498c",6095:"b25b7838",6213:"949c22a0",6286:"f6f44fb5",6306:"92d4660f",6325:"0550fe60",6333:"94ffd26d",6373:"b121212b",6420:"b3e97c2e",6433:"e1fa14ca",6594:"9943079d",6694:"2bb9716a",6744:"160fe6b8",6764:"ada0cd92",6803:"fab09ccb",6804:"77485b6d",6838:"e9e1e649",6875:"bffa354e",6940:"4b93aed0",6969:"0b254afb",7098:"bf956da2",7170:"e47a1b0d",7198:"7c123de5",7426:"a2ce0940",7441:"aadc2283",7540:"1032f18d",7689:"9b4f06ac",7775:"69c1d5d9",7785:"1ed98124",8055:"833d5a20",8228:"2a44b70b",8280:"c71dba6a",8298:"398c1b60",8317:"85c0fe4a",8401:"fc356725",8428:"836db766",8478:"a56f7191",8483:"3d1b389b",8628:"a47baedd",8635:"661832f4",8638:"6e8aa855",8691:"c23f9aae",8760:"4d45a0b9",8799:"3b2830dd",8869:"47e5bae3",8873:"6e9dcb1f",8874:"bfdb355c",8883:"df9fc2e7",8913:"a65b2f19",8957:"cf4efd6f",8982:"6b20551f",9048:"e339ac66",9071:"ffe84450",9107:"226c32f1",9175:"d9062380",9179:"79dc2d37",9329:"e1bb564c",9346:"001cf134",9375:"5d7f54f6",9400:"811cbc48",9462:"d9acc313",9477:"76b86698",9545:"6e0ec8aa",9566:"3001e647",9588:"dfe14ef7",9594:"e07aa37e",9631:"b56604d4",9647:"36645f55",9664:"8e211093",9689:"344e9039",9703:"8ca2e3bc",9895:"67e7958e",9944:"269364f6",9981:"7b51e550",9987:"d31abff9"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="metamask-docs:",r.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==d+f){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+f),t.src=e),c[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(u);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(f))),a)return a(f)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/resources-snaps-highlight/",r.gca=function(e){return e={17896441:"8401",54713468:"3523",94590018:"6041","74e5817e":"53","522edf2d":"117",ba4cac81:"242",ab4cafa2:"257","9fb62b98":"289",c66adc2f:"296",dffd2023:"428",cb2c0fed:"520","9cea254b":"528","52198f09":"531","54b196a6":"655",f186a5d0:"736",e8973b68:"785",cfc76383:"792",a015cb1d:"910",c141421f:"957","9659c6a2":"1158","92d77c2e":"1180",a7456010:"1235","7d4adaa7":"1266",b91521d0:"1273",dfbcf5f2:"1343","67e0471a":"1408","8145e54e":"1588","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","9947d6d2":"1874",aee6d0cb:"1891","030193d7":"1930","17a18c8c":"1969","320bcfb3":"2008","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","43ff9a0a":"2167","76d3ef76":"2169",a767f895:"2358","97cf6e84":"2368","63b87658":"2416",c23d85eb:"2445","080a8117":"2483","82c9c8ff":"2520","486ba757":"2675","3ee3d2fe":"2782",f8f7b6b2:"2844","3e112a3e":"2894",cc21c413:"2923","47fa8f02":"2971","3925c87d":"2980","9fd6936c":"3009",a1fd5277:"3012","284a1a9e":"3056",ce634f1e:"3102",b6db0fd4:"3235",facbd801:"3302",c90162c2:"3349",f8a3ce18:"3374","453c9f5d":"3442","2ff9bf14":"3443","97c42b41":"3499","239aedef":"3514","8a8bbcea":"3547",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","183ed252":"3647","57e75615":"3692",d5f74ffe:"3794",cec98bc3:"3843",ba7d2542:"3860","4ecdda4a":"3967","6721d267":"4022","66ba7e9e":"4050","6380b8b5":"4151","70334ba8":"4209",df203c0f:"4279",d89de9d2:"4284","0b1c3b4c":"4429","2a5de1af":"4520","1df93b7f":"4583",c5e4f5c1:"4687","2e39c2b3":"4698","3720c009":"4787",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044",c94a3153:"5122",ac3e5984:"5133","666bb528":"5138","37285b91":"5188",cf946124:"5246","19fab523":"5312","4c2d8e7b":"5484",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593",b625c402:"5627","7269d794":"5651","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693",aba21aa0:"5742","11b7fc92":"5892",a2353af7:"6023",d142ef55:"6091",ab8b636d:"6095","14bc7481":"6213",f9fecb86:"6286","81c3c88c":"6306",f4fa537f:"6325","7c5954e6":"6373","3d86cae6":"6433",e4b21b58:"6594",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764",c0a8c6cc:"6804","4b100ba1":"6838",e1aa5429:"6875","090107f6":"6940","14eb3368":"6969",a7bd4aaa:"7098","0fffe3b1":"7170",ab85252c:"7441",d70a1ef5:"7540",e9f37fc3:"7689","5e56b9d4":"7775","68c12626":"7785",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317",f5000f06:"8428","78eb1577":"8483","037997aa":"8638","8329f30e":"8691",ab3b18fd:"8760",d8201ec1:"8799",fd49626c:"8873","079a82bd":"8874","93556f9a":"8883","652081cc":"8957",ed09b01b:"8982",a94703ab:"9048","4ad67257":"9071","90e119fe":"9107",d2011f4f:"9175",ef8d09aa:"9329",fe6ffccb:"9346","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","5e95c892":"9647","95fa971a":"9664",b223888a:"9703","470859f7":"9895","7dd3f6c4":"9944","358f292a":"9981","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=r.p+r.u(a),t=new Error;r.l(b,(f=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],t=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(f);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},f=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();