(()=>{"use strict";var e,f,a,c,d,b={},t={};function r(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=b,e=[],r.O=(f,a,c,d)=>{if(!a){var b=1/0;for(i=0;i<e.length;i++){a=e[i][0],c=e[i][1],d=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&d||b>=d)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,d<b&&(b=d));if(t){e.splice(i--,1);var n=c();void 0!==n&&(f=n)}}return f}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[a,c,d]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var b={};f=f||[null,a({}),a([]),a(a)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((f=>b[f]=()=>e[f]));return b.default=()=>e,r.d(d,b),d},r.d=(e,f)=>{for(var a in f)r.o(f,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((f,a)=>(r.f[a](e,f),f)),[])),r.u=e=>"assets/js/"+({53:"74e5817e",242:"ba4cac81",257:"ab4cafa2",289:"9fb62b98",296:"c66adc2f",520:"cb2c0fed",528:"9cea254b",531:"52198f09",736:"f186a5d0",767:"98dc6f17",785:"e8973b68",790:"a8664c23",792:"cfc76383",910:"a015cb1d",957:"c141421f",1158:"9659c6a2",1180:"92d77c2e",1235:"a7456010",1266:"7d4adaa7",1273:"b91521d0",1343:"dfbcf5f2",1588:"8145e54e",1617:"85a3bb2e",1660:"6e004e16",1697:"4a530d18",1717:"40d431ee",1733:"ff576332",1784:"c66e041d",1787:"526f936c",1818:"6218e207",1874:"9947d6d2",1891:"aee6d0cb",1930:"030193d7",1969:"17a18c8c",2008:"320bcfb3",2138:"1a4e3797",2146:"55d0cf22",2166:"df3ffe2a",2167:"43ff9a0a",2169:"76d3ef76",2273:"1125384b",2358:"a767f895",2383:"cc5249cc",2416:"63b87658",2445:"c23d85eb",2520:"82c9c8ff",2522:"9e7e4f2c",2675:"486ba757",2782:"3ee3d2fe",2844:"f8f7b6b2",2894:"3e112a3e",2900:"12dfdc87",2923:"cc21c413",2971:"47fa8f02",2980:"3925c87d",3056:"284a1a9e",3102:"ce634f1e",3235:"b6db0fd4",3254:"33e31673",3287:"3de97a21",3329:"4b3d02b9",3349:"c90162c2",3374:"f8a3ce18",3442:"453c9f5d",3499:"97c42b41",3523:"54713468",3557:"c3be8443",3582:"03c51261",3623:"bdecca60",3692:"57e75615",3794:"d5f74ffe",3843:"cec98bc3",3860:"ba7d2542",3908:"1fa276e3",3967:"4ecdda4a",4022:"6721d267",4050:"66ba7e9e",4151:"6380b8b5",4209:"70334ba8",4279:"df203c0f",4318:"17220580",4520:"2a5de1af",4583:"1df93b7f",4687:"c5e4f5c1",4698:"2e39c2b3",4712:"263803f3",4787:"3720c009",4933:"eb2b80f1",4939:"011b5d76",4961:"66d369c7",5044:"839511b6",5138:"666bb528",5188:"37285b91",5246:"cf946124",5312:"19fab523",5484:"4c2d8e7b",5498:"c9715042",5569:"d4b4a7ff",5586:"c455d87c",5593:"2c1888ff",5651:"7269d794",5685:"682638a2",5690:"6ebf937c",5693:"ae6e9ecd",5742:"aba21aa0",5892:"11b7fc92",6023:"a2353af7",6041:"94590018",6056:"d9e978fc",6095:"ab8b636d",6213:"14bc7481",6286:"f9fecb86",6325:"f4fa537f",6373:"7c5954e6",6433:"3d86cae6",6564:"32842639",6594:"e4b21b58",6694:"f60fed4d",6744:"ee067fe3",6764:"286d8836",6838:"4b100ba1",6874:"b1bbba7d",6875:"e1aa5429",6940:"090107f6",6969:"14eb3368",7032:"13983fd7",7098:"a7bd4aaa",7170:"0fffe3b1",7441:"ab85252c",7540:"d70a1ef5",7775:"5e56b9d4",7777:"98c66646",7785:"68c12626",7856:"1f774f9a",7914:"20fe3aa7",8228:"f6d13bb3",8280:"ce260bbc",8298:"3e786943",8317:"501c7dd0",8401:"17896441",8428:"f5000f06",8483:"78eb1577",8566:"06ef2faa",8573:"d4eda5b9",8584:"981f208c",8638:"037997aa",8691:"8329f30e",8760:"ab3b18fd",8873:"fd49626c",8874:"079a82bd",8883:"93556f9a",8957:"652081cc",9048:"a94703ab",9071:"4ad67257",9107:"90e119fe",9175:"d2011f4f",9329:"ef8d09aa",9375:"4efa9f2e",9400:"debbc54f",9477:"49f67c63",9545:"77a46a80",9566:"177a052f",9588:"44fb6b83",9594:"0db58064",9631:"41f5386a",9647:"5e95c892",9664:"95fa971a",9703:"b223888a",9944:"7dd3f6c4",9987:"5a6432d3"}[e]||e)+"."+{4:"3b2e30f1",53:"36481f89",242:"7e820426",257:"c48b20de",289:"116ce2fa",296:"64d913da",416:"cd044015",520:"963aa6e5",528:"d4614677",531:"aeb9823e",660:"34100840",736:"2cb3290f",751:"04caa54d",767:"6a144035",785:"d5facee3",790:"43460e43",792:"94736659",910:"640c3b47",957:"41a3db51",1158:"525b1485",1169:"b53e2b87",1176:"925776c6",1180:"9456957d",1235:"f9c14d4b",1245:"6c57f6d0",1266:"73f46fb6",1273:"f32fe27a",1343:"f3d71ed7",1412:"5b9a1462",1432:"ebb7a1e9",1555:"a6295fca",1588:"662010af",1617:"d4bbcb19",1659:"3e430d53",1660:"24ec22f8",1697:"acdc52c6",1717:"3e1f6c60",1733:"83bc391d",1784:"9103fbd4",1787:"41429fd8",1818:"27dc4a52",1874:"c49f852e",1891:"873027d0",1930:"45ea403e",1969:"60764891",2008:"009d8edb",2130:"e4f7a6fc",2138:"becf8b9f",2146:"b684419b",2166:"f3a02897",2167:"74537789",2169:"1adfd720",2235:"3ed29692",2237:"a734cec9",2273:"a062a832",2317:"f057e7ba",2358:"789a224d",2383:"74efb8a5",2416:"ec9ddd61",2445:"10e44d30",2520:"cc811e0f",2522:"709d37a4",2675:"86ba02db",2746:"2e11a940",2782:"ee1e5344",2844:"6e63e632",2894:"bfb1b600",2900:"266d31ae",2923:"ebfc7a7b",2971:"8214ce56",2980:"4a3bd838",3056:"8fd1be36",3102:"dc48212c",3235:"c4e99aa8",3254:"838e252f",3287:"892e46eb",3329:"9f4f4028",3349:"498f689c",3374:"0d439385",3442:"493d321e",3499:"a8422c7f",3523:"4f04576f",3557:"37fccf84",3582:"7f231b75",3623:"c1aceb8a",3692:"86eb3e86",3794:"93aecede",3843:"b220ce06",3860:"706b2eeb",3863:"8e034069",3908:"b31ab873",3967:"221eccd1",4022:"cc5b72c5",4050:"183c43b9",4151:"0759b6c2",4209:"624ae240",4279:"92175d83",4318:"b2f3f196",4520:"d20416de",4583:"aacbceb9",4687:"5875e379",4698:"0e1a7285",4712:"cee77725",4787:"e4acceb8",4933:"8d768b2c",4939:"70059394",4961:"8abc00d3",5044:"f3e7225d",5138:"c19ef7c1",5188:"1b6e37b2",5246:"29febc19",5312:"3f25e950",5484:"ef2d0d7d",5498:"ec347ab6",5569:"4d6f6f54",5586:"43a6d2b7",5593:"78a70398",5642:"b45a5197",5651:"57c9dfe0",5685:"629c1f1f",5688:"9599a08a",5690:"6108dd6a",5693:"f1bfde9f",5742:"f55bb376",5892:"de1438fa",6023:"ca87e69d",6041:"a7843710",6056:"11735c87",6063:"460b28a6",6095:"b25b7838",6213:"70b29913",6216:"1141f61c",6286:"f6728c21",6292:"01375355",6325:"096cae8d",6362:"f7c39f78",6373:"845d376d",6433:"75cd9a09",6506:"1d0fb24a",6564:"790ff26c",6594:"2d449fbf",6694:"8f2aec83",6732:"4325602a",6744:"fb381170",6764:"20939ed9",6838:"e9e1e649",6874:"5b2d4c4e",6875:"269d56e0",6940:"a8a4fee4",6969:"a0d54616",7032:"04e9ff28",7098:"bf956da2",7147:"6cdd15ff",7161:"1b5aebea",7170:"2cec6ba7",7200:"e9875fb0",7211:"ea88d000",7308:"e7166035",7441:"e77892fe",7540:"3a0e55fb",7775:"137386b5",7777:"89f43e14",7785:"f8476978",7856:"8a3b353e",7914:"63771e89",8228:"606a6cbc",8280:"2bd8e378",8298:"1e40f0cc",8317:"7ed4da46",8327:"4507b199",8401:"14e341b3",8428:"bcc1846b",8483:"a04a5efd",8566:"7503226b",8573:"95749c23",8584:"17c342b6",8609:"156ef001",8638:"94bb9597",8691:"03c97461",8747:"70b3d14c",8760:"31b134ba",8873:"5a64adb8",8874:"3fa84e35",8883:"191812a2",8913:"a65b2f19",8947:"b6500e08",8957:"f55af24e",9048:"6c87deaf",9071:"80c83e4b",9107:"c543e86a",9175:"f7162887",9329:"2cf8d6c2",9375:"88fa0c48",9400:"35e73477",9462:"d9acc313",9469:"05398b99",9477:"8e59442f",9545:"5ea4f385",9566:"18d13fb0",9588:"28642a5a",9593:"453a0fb5",9594:"f1867b2e",9631:"e233be65",9647:"36645f55",9664:"f21658ed",9688:"2dc475ab",9703:"a36c1069",9944:"74387acb",9987:"1fb20e27"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),c={},d="metamask-docs:",r.l=(e,f,a,b)=>{if(c[e])c[e].push(f);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==d+a){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+a),t.src=e),c[e]=[f];var s=(f,a)=>{t.onerror=t.onload=null,clearTimeout(u);var d=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(a))),f)return f(a)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/allowlisting-audit-caveat/",r.gca=function(e){return e={17220580:"4318",17896441:"8401",32842639:"6564",54713468:"3523",94590018:"6041","74e5817e":"53",ba4cac81:"242",ab4cafa2:"257","9fb62b98":"289",c66adc2f:"296",cb2c0fed:"520","9cea254b":"528","52198f09":"531",f186a5d0:"736","98dc6f17":"767",e8973b68:"785",a8664c23:"790",cfc76383:"792",a015cb1d:"910",c141421f:"957","9659c6a2":"1158","92d77c2e":"1180",a7456010:"1235","7d4adaa7":"1266",b91521d0:"1273",dfbcf5f2:"1343","8145e54e":"1588","85a3bb2e":"1617","6e004e16":"1660","4a530d18":"1697","40d431ee":"1717",ff576332:"1733",c66e041d:"1784","526f936c":"1787","6218e207":"1818","9947d6d2":"1874",aee6d0cb:"1891","030193d7":"1930","17a18c8c":"1969","320bcfb3":"2008","1a4e3797":"2138","55d0cf22":"2146",df3ffe2a:"2166","43ff9a0a":"2167","76d3ef76":"2169","1125384b":"2273",a767f895:"2358",cc5249cc:"2383","63b87658":"2416",c23d85eb:"2445","82c9c8ff":"2520","9e7e4f2c":"2522","486ba757":"2675","3ee3d2fe":"2782",f8f7b6b2:"2844","3e112a3e":"2894","12dfdc87":"2900",cc21c413:"2923","47fa8f02":"2971","3925c87d":"2980","284a1a9e":"3056",ce634f1e:"3102",b6db0fd4:"3235","33e31673":"3254","3de97a21":"3287","4b3d02b9":"3329",c90162c2:"3349",f8a3ce18:"3374","453c9f5d":"3442","97c42b41":"3499",c3be8443:"3557","03c51261":"3582",bdecca60:"3623","57e75615":"3692",d5f74ffe:"3794",cec98bc3:"3843",ba7d2542:"3860","1fa276e3":"3908","4ecdda4a":"3967","6721d267":"4022","66ba7e9e":"4050","6380b8b5":"4151","70334ba8":"4209",df203c0f:"4279","2a5de1af":"4520","1df93b7f":"4583",c5e4f5c1:"4687","2e39c2b3":"4698","263803f3":"4712","3720c009":"4787",eb2b80f1:"4933","011b5d76":"4939","66d369c7":"4961","839511b6":"5044","666bb528":"5138","37285b91":"5188",cf946124:"5246","19fab523":"5312","4c2d8e7b":"5484",c9715042:"5498",d4b4a7ff:"5569",c455d87c:"5586","2c1888ff":"5593","7269d794":"5651","682638a2":"5685","6ebf937c":"5690",ae6e9ecd:"5693",aba21aa0:"5742","11b7fc92":"5892",a2353af7:"6023",d9e978fc:"6056",ab8b636d:"6095","14bc7481":"6213",f9fecb86:"6286",f4fa537f:"6325","7c5954e6":"6373","3d86cae6":"6433",e4b21b58:"6594",f60fed4d:"6694",ee067fe3:"6744","286d8836":"6764","4b100ba1":"6838",b1bbba7d:"6874",e1aa5429:"6875","090107f6":"6940","14eb3368":"6969","13983fd7":"7032",a7bd4aaa:"7098","0fffe3b1":"7170",ab85252c:"7441",d70a1ef5:"7540","5e56b9d4":"7775","98c66646":"7777","68c12626":"7785","1f774f9a":"7856","20fe3aa7":"7914",f6d13bb3:"8228",ce260bbc:"8280","3e786943":"8298","501c7dd0":"8317",f5000f06:"8428","78eb1577":"8483","06ef2faa":"8566",d4eda5b9:"8573","981f208c":"8584","037997aa":"8638","8329f30e":"8691",ab3b18fd:"8760",fd49626c:"8873","079a82bd":"8874","93556f9a":"8883","652081cc":"8957",a94703ab:"9048","4ad67257":"9071","90e119fe":"9107",d2011f4f:"9175",ef8d09aa:"9329","4efa9f2e":"9375",debbc54f:"9400","49f67c63":"9477","77a46a80":"9545","177a052f":"9566","44fb6b83":"9588","0db58064":"9594","41f5386a":"9631","5e95c892":"9647","95fa971a":"9664",b223888a:"9703","7dd3f6c4":"9944","5a6432d3":"9987"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(f,a)=>{var c=r.o(e,f)?e[f]:void 0;if(0!==c)if(c)a.push(c[2]);else if(/^(1869|5354)$/.test(f))e[f]=0;else{var d=new Promise(((a,d)=>c=e[f]=[a,d]));a.push(c[2]=d);var b=r.p+r.u(f),t=new Error;r.l(b,(a=>{if(r.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var d=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+d+": "+b+")",t.name="ChunkLoadError",t.type=d,t.request=b,c[1](t)}}),"chunk-"+f,f)}},r.O.j=f=>0===e[f];var f=(f,a)=>{var c,d,b=a[0],t=a[1],o=a[2],n=0;if(b.some((f=>0!==e[f]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(f&&f(a);n<b.length;n++)d=b[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},a=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();