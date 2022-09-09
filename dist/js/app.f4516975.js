(function(){"use strict";var t={711:function(t,e,o){var n=o(9242),s=o(3396),r=o(7139),i=o(6409);const a={class:"todo"},l={class:"todo__main-block"},u=(0,s._)("div",{class:"todo__tittle tittle"},"Список дел",-1),d={class:"todo__creator"},f={class:"todo__list"},c=["onClick"],A=["onClick"],k={class:"todo__filter"},D={class:"todo__filter__item"},T={class:"todo__filter__item"},_={class:"todo__filter__item"};function v(t,e,o,v,w,g){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",l,[u,(0,s._)("div",d,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.$store.state.taskText=e),onKeydown:e[1]||(e[1]=(0,n.D2)(((...t)=>g.add&&g.add(...t)),["enter"])),type:"text",placeholder:"Введите новое дело..."},null,544),[[n.nr,t.$store.state.taskText]]),(0,s._)("button",{onClick:e[2]||(e[2]=(...t)=>g.add&&g.add(...t)),id:"savebtn"},"Сохранить")])]),(0,s._)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.$store.getters.filtered,(t=>((0,s.wg)(),(0,s.iD)("ul",{key:t},[(0,s._)("li",{onClick:e=>t.isDone=!t.isDone,class:(0,r.C_)([{notDone:!t.isDone,_done:t.isDone},"taskEl _notDone"])},[(0,s.Uk)((0,r.zw)(t.item)+" ",1),(0,s._)("img",{onClick:(0,n.iM)((e=>g.remove(t)),["stop"]),id:"deleting",src:i,alt:""},null,8,A)],10,c)])))),128))]),(0,s._)("div",k,[(0,s._)("div",D,[(0,s._)("a",{onClick:e[3]||(e[3]=e=>t.$store.state.filter=g.FILTER.DONE),class:(0,r.C_)({bold:t.$store.state.filter===g.FILTER.DONE}),id:"done",href:"#"},"Сделано("+(0,r.zw)(g.doneTasks)+")",3)]),(0,s._)("div",T,[(0,s._)("a",{onClick:e[4]||(e[4]=e=>t.$store.state.filter=g.FILTER.NOTDONE),class:(0,r.C_)({bold:t.$store.state.filter===g.FILTER.NOTDONE}),id:"notDone",href:"#"},"Не сделано("+(0,r.zw)(g.notDoneTasks)+")",3)]),(0,s._)("div",_,[(0,s._)("a",{onClick:e[5]||(e[5]=e=>t.$store.state.filter=g.FILTER.ALL),class:(0,r.C_)({bold:t.$store.state.filter===g.FILTER.ALL}),id:"all",href:"#"},"Все("+(0,r.zw)(g.doneTasks+g.notDoneTasks)+")",3)])])])}var w={methods:{add(){this.$store.commit("addNewTask")},remove(t){this.$store.commit("remove",t)}},computed:{FILTER:function(){return this.$store.getters.FILTER},doneTasks:function(){return this.$store.getters.doneTasks},notDoneTasks:function(){return this.$store.getters.notDoneTasks}}},g=o(89);const p=(0,g.Z)(w,[["render",v]]);var C=p,E=o(9749);const O={ALL:"all",DONE:"done",NOTDONE:"notDone"};var h=(0,E.MT)({state:{taskText:"",tasks:[],filter:O.ALL},getters:{FILTER(){return O},doneTasks(t){return t.tasks.filter((t=>t.isDone)).length},notDoneTasks(t){return t.tasks.filter((t=>!t.isDone)).length},filtered(t){return t.filter===O.DONE?t.tasks.filter((t=>t.isDone)):t.filter===O.NOTDONE?t.tasks.filter((t=>!t.isDone)):t.tasks}},mutations:{addNewTask(t){const e={item:t.taskText,isDone:!1};t.tasks.push(e),t.taskText=""},remove(t,e){t.tasks=t.tasks.filter((t=>t!=e))}}});(0,n.ri)(C).use(h).mount("#app");const m=(0,n.ri)(C);m.use(h)},6409:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADPklEQVR4Xq2WS0hUURjH/3dKxdeiclMtNMoppFVR4KLIQItKsrKIiBa1iMoxZ8qICFoKyTiCFm1c2IMgCykqyCkEiWiRtIgip4VaiyC1Rfh+dPp/594Z78yc0TIPXEbvPd/3O//vdS9U9zul/NVK3WlVXJ+wCIt+POp6XYfaV6ZU56tDlgCQng6MjwH5awD/hZuWZZ37H5aqqXqDSE8xsrOBsVF4sGmzDcjijf4+IBQ8y5OcXCiEgDZ8iRQjNxcYGQG2lzz24PiJK1rB6ChBWVFQC0HlvKx/gSl/1T0CKpGTAwwPA971Xai9fEA7obPDVPBAKxGQAPMLJHS7+DjM8Kn5YFTQTkBFDFDofWQ1NleKXeykBJ0m6JYBVM59zwn6bQJptX7fWwK2zirwPrFCzfuj++PCQYP7aAweRV+Sohoa3CBo2g3i/gwEfN8RiSxzKeigAolAbCXFnIZDBC03gOpodY2gKe5Zwr9XUsE3KoAL0EPAhkTFxsRKwzB0dhHE56iTDpp5+QjYEQfwesEQGf2lrB4jqIBVWBMAAtVgH7gVsPSbMqly3JS3uSB5NBiIUzTNlAwNAoMDQGamXaaFXgFs4d7uVFXoSVWaNKA3FLGMAVEwOQk9GdKW2r8TE9IHApBR9HGuMv+rZtOhq2WYxPnPIer7AczMAO1PQefz+kipxGnSjRrQ2CAdy66iP8V2ifplbuQ5V1JFuSOUEkLDFdz4Qeekr9dWISGbYl7kNyPDTr7fJ/7auZ+jwryMEBrQIz4nlfGq1UBLK7B2nZ10mVHSJ36fKJFDGRezGL/kXcA77wnIS+oTlq/kQIdQFEQbUX4Dvq+0M+YnTokzdevZ8UWGRowlWSc71GSXb1RRJAIOyYfz9gkhuQT8MowUsfW4y9QZLWEqKOHscjdmKUfLS2PitVHICNgmJ0/sA/4/w2snGprSqKjNlaNwoprZcIWCVxNC1MVGlNO/TpVQuS+TmSc/QlBFFKT2lsW9fySJjG/wPAEh1zC8ZAUu1s/lPNUzDXDejNazDl0IHty9fQr9vW7AmYUCtDJx7BSD2lOqFSV+rewm4MVCFCS1ggCcrxXwu+uY893Fsbq4y/nuOvgHIwe/SEYvyUcAAAAASUVORK5CYII="}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,r){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],r=t[d][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[n,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,r,i=n[0],a=n[1],l=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var d=l(o)}for(e&&e(n);u<i.length;u++)r=i[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(d)},n=self["webpackChunktodo_list_vue"]=self["webpackChunktodo_list_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(711)}));n=o.O(n)})();
//# sourceMappingURL=app.f4516975.js.map