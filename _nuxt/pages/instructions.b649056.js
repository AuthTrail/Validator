(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{273:function(t,n,e){var content=e(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(46).default)("4a6c359c",content,!0,{sourceMap:!1})},400:function(t,n,e){"use strict";var o=e(273);e.n(o).a},401:function(t,n,e){(n=e(45)(!1)).push([t.i,".how-it-works-img[data-v-6d27c998]{width:100%;height:auto}.validator-link[data-v-6d27c998]{display:flex;align-items:flex-end;width:100%;justify-content:flex-end;padding-bottom:19px}.validator-link a[data-v-6d27c998]{color:#2b57f9;font-weight:600;text-decoration:none}.validator-link a[data-v-6d27c998]:hover{opacity:.7}.main-container[data-v-6d27c998]{margin-top:130px}.title[data-v-6d27c998]{font-size:70px;font-weight:600}@media (max-width:576px){.title[data-v-6d27c998]{font-size:60px}}.instructions-container[data-v-6d27c998]{margin-bottom:80px}.instructions-container .instructions-content[data-v-6d27c998]{background-color:#fff;box-shadow:0 8px 63px rgba(28,50,91,.05882);padding:45px 44px 62px}.instructions-container .instructions-content .instructions-title[data-v-6d27c998]{font-weight:600;margin-bottom:20px;margin-top:38px}",""]),t.exports=n},676:function(t,n,e){"use strict";e.r(n);var o=e(7).default.extend({data:function(){return{hashedData:""}},methods:{handleHashedData:function(t){this.hashedData=t;var n=e(106),element=document.getElementById("#second-step");n.scrollTo(element,1e3)}}}),c=(e(400),e(48)),component=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"main-container"},[n("div",{staticClass:"row mb-5 pt-5 d-flex"},[n("h1",{staticClass:"col-12 col-sm-6 title"},[this._v("\n        Instructions\n      ")]),this._v(" "),n("div",{staticClass:"col-12 col-sm-6 validator-link"},[n("nuxt-link",{attrs:{to:"/"}},[this._v("\n          Validator\n        ")])],1)]),this._v(" "),this._m(0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"instructions-container"},[n("div",{staticClass:"instructions-content"},[this._v("\n        Instructions for Authtrail validator for manual verification of Authtrail data with public anchors on Ethereum.\n        "),n("h3",{staticClass:"instructions-title"},[this._v("\n          Hashing\n        ")]),this._v("\n        The hashing step site calculates the SHA256 hash value of enetered data or document that can be used as leaves\n        in the Merkle tree. The leaves are sorted by hash value number.\n        "),n("h3",{staticClass:"instructions-title"},[this._v("\n          Validation\n        ")]),this._v("\n        The validation step verifies the hash to the Merkle proof and the chain of blocks from the block where the data exists\n        up to the first anchor.\n        The resulting hash can then be directly compared to the value stored on the public ledger.\n        The public anchor can either be copied from a public explorer, deep verify data or one can connect to Ethereum RPC\n        using Metamask and read the anchor directly from Ethereum smart contract.\n        "),n("h3",{staticClass:"instructions-title"},[this._v("\n          How it works?\n        ")]),this._v(" "),n("img",{staticClass:"how-it-works-img",attrs:{src:"/img/how-it-works.png"}})])])}],!1,null,"6d27c998",null);n.default=component.exports}}]);