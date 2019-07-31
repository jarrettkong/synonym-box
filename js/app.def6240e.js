(function(t){function n(n){for(var r,u,i=n[0],s=n[1],c=n[2],l=0,f=[];l<i.length;l++)u=i[l],a[u]&&f.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(n);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,i=1;i<e.length;i++){var s=e[i];0!==a[s]&&(r=!1)}r&&(o.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},a={app:0},o=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/my-project/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var p=s;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),a=e.n(r);a.a},3764:function(t,n,e){},"3adf":function(t,n,e){},"3b53":function(t,n,e){"use strict";var r=e("3764"),a=e.n(r);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app"},[e("h1",[t._v(t._s(t.title))]),e("SynonymForm",{attrs:{getSynonyms:t.getSynonyms}}),e("hr"),e("output",{staticClass:"app-output"},[t.error?e("div",[e("h3",[t._v(t._s(t.error))])]):t._l(t.wordData,function(n){return e("div",[e("SynonymView",{attrs:{data:n,updateQuery:t.updateQuery}})],1)})],2)],1)},o=[],u=(e("96cf"),e("3b8d")),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{staticClass:"synonym-form",on:{submit:t.handleSubmit}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"synonym-input",attrs:{type:"text",placeholder:"Enter a word to search for..."},domProps:{value:t.inputValue},on:{input:function(n){n.target.composing||(t.inputValue=n.target.value)}}}),e("input",{staticClass:"synonym-submit",attrs:{type:"submit",value:"Search"}})])},s=[],c={app:"SynonymForm",props:{getSynonyms:Function},methods:{handleSubmit:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,this.getSynonyms(this.inputValue);case 3:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}()},data:function(){return{inputValue:""}}},p=c,l=(e("6b64"),e("2877")),f=Object(l["a"])(p,i,s,!1,null,"6a97819c",null),y=f.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"synonym-view"},[e("h3",{staticClass:"definition"},[t._v("\n    Definition:\n    "),e("span",{staticClass:"definition-title"},[t._v(t._s(t.data.definition))])]),e("div",{staticClass:"synonym-output"},t._l(t.data.synonyms,function(n){return e("div",{key:n.id},[e("Synonym",{attrs:{synonym:n,updateQuery:t.updateQuery}})],1)}),0)])},m=[],h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"word-item",on:{click:t.handleClick}},[e("h3",{staticClass:"synonym"},[t._v(t._s(t.synonym))])])},v=[],b={app:"Synonym",props:{synonym:String,updateQuery:Function},methods:{handleClick:function(){this.updateQuery(this.synonym)}},data:function(){return{expanded:!1,synonyms:[]}}},w=b,g=(e("68a2"),Object(l["a"])(w,h,v,!1,null,"e9f8c35c",null)),S=g.exports,_={app:"SynonymView",components:{Synonym:S},props:{data:Object,updateQuery:Function}},x=_,j=(e("3b53"),Object(l["a"])(x,d,m,!1,null,"80415a74",null)),O=j.exports,C={name:"App",components:{SynonymForm:y,SynonymView:O},methods:{getSynonyms:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(n){var e,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://dictionaryapi.com/api/v3/references/thesaurus/json/".concat(n,"?key=").concat("0ccf235a-5744-4054-9db2-a9b14cffb0b9"));case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,a=r.reduce(function(t,n){return t.push({definition:"".concat(n.fl,". ").concat(n.shortdef[0]),synonyms:n.meta.syns[0]}),t},[]),this.wordData=a,this.error="",t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.error='Unable to find any synonyms for "'.concat(n,'".');case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function n(n){return t.apply(this,arguments)}return n}(),updateQuery:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getSynonyms(n);case 1:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}()},data:function(){return{title:"SynonymBox",wordData:[],error:""}}},k=C,V=(e("034f"),Object(l["a"])(k,a,o,!1,null,null,null)),Q=V.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Q)}}).$mount("#app")},"64a9":function(t,n,e){},"68a2":function(t,n,e){"use strict";var r=e("e337"),a=e.n(r);a.a},"6b64":function(t,n,e){"use strict";var r=e("3adf"),a=e.n(r);a.a},e337:function(t,n,e){}});
//# sourceMappingURL=app.def6240e.js.map