(self["webpackChunkportfolio_spa"]=self["webpackChunkportfolio_spa"]||[]).push([[532],{1768:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return F}});var a=o(6252),i=o(3577),c=o(9516),n=o(8182),p=o.p+"img/thats-all.6f2a8242.png";const s={class:"projects-section",id:"projects"},r={class:"container"},g=(0,a._)("h2",{class:"section-heading delay-2"},"_ Projects",-1),m={class:"projects-wrapper"},l=["project","title"],u=(0,a._)("img",{src:c,alt:"laptop",class:"laptop",loading:"lazy"},null,-1),h={class:"project-desktop-img"},j=["src","alt"],b={class:"phone-img-wrapper"},d=(0,a._)("img",{src:n,alt:"phone",class:"phone"},null,-1),v={class:"project-mobile-img"},y=["src","alt"],f={class:"project-info"},k={class:"project-description"},x={class:"project-tech-used"},I=["src","alt","title"],w=["src","alt"],_={class:"links-set"},A=["href"],M=(0,a._)("i",{class:"bi bi-github"},null,-1),L=[M],S=["href"],z=(0,a._)("i",{class:"bi bi-box-arrow-up-right"},null,-1),O=[z],q=(0,a._)("img",{src:p,alt:"that's all folks",class:"thats-all-img"},null,-1);function P(e,t,c,n,p,M){const z=(0,a.up)("MySelect");return(0,a.wg)(),(0,a.iD)("section",s,[(0,a._)("div",r,[g,(0,a.Wm)(z,{options:p.options,selectedOption:p.selectedOption,onSelectOption:M.selectOption,onSortByCategories:M.sortByCategories},null,8,["options","selectedOption","onSelectOption","onSortByCategories"]),(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(M.filteredProjects,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"project",key:e.name,project:e,title:e.name},[(0,a._)("span",{class:"project-label",style:(0,i.j5)(`background:${e.color}`)},(0,i.zw)(e.category),5),u,(0,a._)("div",h,[(0,a._)("img",{src:o(7895)("./"+e.projectImage),alt:e.name,class:"project-img"},null,8,j)]),(0,a._)("div",b,[d,(0,a._)("div",v,[(0,a._)("img",{src:o(7895)("./"+e.projectMobileImage),alt:e.name,class:"project-img-mob"},null,8,y)])]),(0,a._)("div",f,[(0,a._)("h3",{class:"project-name",style:(0,i.j5)(`color:${e.color}`)},(0,i.zw)(e.name),5),(0,a._)("p",k,(0,i.zw)(e.description),1),(0,a._)("div",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.techUsed,(e=>((0,a.wg)(),(0,a.iD)("img",{key:e.name,src:o(5291)("./"+e.icon),alt:e.name,class:"project-tech-icon",width:"20",height:"20",title:e.name},null,8,I)))),128))]),(0,a._)("img",{src:o(5291)("./"+e.technologyImg),alt:e.category,class:"project-tag"},null,8,w),(0,a._)("div",_,[(0,a._)("a",{href:e.githubLink,target:"_blank",title:"GitHub Code"},L,8,A),(0,a._)("a",{href:e.link,target:"_blank",title:"Demo"},O,8,S)])])],8,l)))),128))]),q])])}const U={class:"my-select delay-3",title:"Sort"},C=(0,a._)("span",{class:"arrow-right"},null,-1),D={key:0,class:"options"},W=["onClick"];function R(e,t,o,c,n,p){return(0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("h4",{class:"my-select-title",onClick:t[0]||(t[0]=e=>n.areOptionsVisible=!n.areOptionsVisible)},[(0,a.Uk)((0,i.zw)(o.selectedOption)+" ",1),C]),n.areOptionsVisible?((0,a.wg)(),(0,a.iD)("div",D,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.options,(e=>((0,a.wg)(),(0,a.iD)("p",{class:"option",style:(0,i.j5)(e.background),key:e.value,onClick:t=>p.selectOption(e)},(0,i.zw)(e.name),13,W)))),128))])):(0,a.kq)("",!0)])}var V={name:"MySelect",data(){return{areOptionsVisible:!1}},props:{options:{type:Array,default(){return[]}},selectedOption:{type:String,default:""}},methods:{selectOption(e){this.$emit("selectOption",e),this.areOptionsVisible=!1},hideSelect(){this.areOptionsVisible=!1},sortByCategories(e){this.$emit("sortByCategories",e)}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy(){document.removeEventListener("click",this.hideSelect.bind)}},J=o(3744);const B=(0,J.Z)(V,[["render",R]]);var E=B,H={name:"projects",components:{MySelect:E},data(){return{selectedOption:"All",sortedProjects:[],projects:[{name:"Quiz App Vue",description:"Web App created with Vue & Pinia",link:"https://andyalu.github.io/quiz-app-vue/",githubLink:"https://github.com/andyalu/quiz-app-vue",projectImage:"quiz-app-vue.jpg",projectMobileImage:"quiz-app-vue-mob.jpg",color:"var(--vue-color)",category:"vue",technologyImg:"vue.png",techUsed:[{name:"Vue",icon:"vue.png"},{name:"Pinia",icon:"pinia.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Code Snippets",description:"Web App made with JavaScript",link:"https://andyalu.github.io/snippets/",githubLink:"https://github.com/andyalu/snippets",projectImage:"snippets.jpg",projectMobileImage:"snippets-mob.jpg",color:"var(--js-color)",category:"js",technologyImg:"javascript.png",techUsed:[{name:"JavaScript",icon:"javascript.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Avex AI",description:"Landing Page",link:"https://andyalu.github.io/avex-ai/",githubLink:"https://github.com/andyalu/avex-ai",projectImage:"avex-ai.jpg",projectMobileImage:"avex-ai-mob.jpg",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"JavaScript",icon:"javascript.png"}]},{name:"Currency Converter",description:"Web App created with JavaScript",link:"https://andyalu.github.io/currency-converter/",githubLink:"https://github.com/andyalu/currency-converter",projectImage:"quick-currency-converter.jpg",projectMobileImage:"quick-currency-converter-mob.jpg",color:"var(--js-color)",category:"js",technologyImg:"javascript.png",techUsed:[{name:"js",icon:"javascript.png"},{name:"Rest API",icon:"rest.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Rick&Morty-Pedia",description:"SPA created with React",link:"https://andyalu.github.io/rampedia/",githubLink:"https://github.com/andyalu/rampedia",projectImage:"rampedia.jpg",projectMobileImage:"rampedia-mob.jpg",color:"var(--react-color)",category:"react",technologyImg:"react.png",techUsed:[{name:"React",icon:"react.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"Rest API",icon:"rest.png"}]},{name:"Quiz App JS",description:"Web App created with JavaScript",link:"https://andyalu.github.io/quiz-app-js/",githubLink:"https://github.com/andyalu/quiz-app-js",projectImage:"quiz-app-js.png",projectMobileImage:"quiz-app-js-mob.png",color:"var(--js-color)",category:"js",technologyImg:"javascript.png",techUsed:[{name:"js",icon:"javascript.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Enigma Aff",description:"Multipage Website",link:"https://andyalu.github.io/enigma-aff/",githubLink:"https://github.com/andyalu/enigma-aff",projectImage:"enigma-aff.jpg",projectMobileImage:"enigma-aff-mob.jpg",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"js",icon:"javascript.png"}]},{name:"AI Fortuna",description:"Landing Page",link:"https://andyalu.github.io/ai-fortuna/",githubLink:"https://github.com/andyalu/ai-fortuna",projectImage:"ai-fortuna.jpg",projectMobileImage:"ai-fortuna-mob.jpg",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"js",icon:"javascript.png"}]},{name:"AIMA Tech",description:"Landing Page",link:"https://andyalu.github.io/aima-tech/",githubLink:"https://github.com/andyalu/aima-tech",projectImage:"aima-tech.jpg",projectMobileImage:"aima-tech-mob.jpg",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"js",icon:"javascript.png"}]},{name:"Instant Weather",description:"Web Widget created with React",link:"https://andyalu.github.io/weather-app-react/",githubLink:"https://github.com/andyalu/weather-app-react",projectImage:"weather-app-react.jpg",projectMobileImage:"weather-app-react-mob.jpg",color:"var(--react-color)",category:"react",technologyImg:"react.png",techUsed:[{name:"React",icon:"react.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"Rest API",icon:"rest.png"}]},{name:"Brokernear",description:"Multipage Website",link:"https://andyalu.github.io/brokernear/",githubLink:"https://github.com/andyalu/brokernear",projectImage:"brokernear.png",projectMobileImage:"brokernear-mob.png",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"js",icon:"javascript.png"}]},{name:"Exercises App",description:"SPA created with React",link:"https://andyalu.github.io/exer-app/",githubLink:"https://github.com/andyalu/exer-app",projectImage:"exer-app.jpg",projectMobileImage:"exer-app-mob.jpg",color:"var(--react-color)",category:"react",technologyImg:"react.png",techUsed:[{name:"React",icon:"react.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"Rest API",icon:"rest.png"}]},{name:"Meal Match",description:"JavaScript Game",link:"https://andyalu.github.io/meal-match/",githubLink:"https://github.com/andyalu/meal-match",projectImage:"meal-match.jpg",projectMobileImage:"meal-match-mob.jpg",color:"var(--js-color)",category:"js",technologyImg:"javascript.png",techUsed:[{name:"js",icon:"javascript.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Heliorec",description:"Landing Page",link:"https://andyalu.github.io/heliorec/",githubLink:"https://github.com/andyalu/heliorec",projectImage:"heliorec.jpg",projectMobileImage:"heliorec-mob.jpg",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"js",icon:"javascript.png"},{name:"splide js",icon:"splide.svg"}]},{name:"Task List",description:"Web App created with Vue, Local Storage",link:"https://andyalu.github.io/task-list-vue/",githubLink:"https://github.com/andyalu/task-list-vue",projectImage:"task-list.jpg",projectMobileImage:"task-list-mob.jpg",color:"var(--vue-color)",category:"vue",technologyImg:"vue.png",techUsed:[{name:"Vue",icon:"vue.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Password Generator",description:"Web App created with JavaScript",link:"https://andyalu.github.io/passw/",githubLink:"https://github.com/andyalu/passw",projectImage:"passw-generator.jpg",projectMobileImage:"passw-generator-mob.jpg",color:"var(--js-color)",category:"js",technologyImg:"javascript.png",techUsed:[{name:"js",icon:"javascript.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]}],options:[{name:"All",value:"all",background:"background-color:#2196F3"},{name:"Vue JS App",value:"vue",background:"background-color:var(--vue-color)"},{name:"React App",value:"react",background:"background-color:var(--react-color)"},{name:"Javascript App",value:"js",background:"background-color:var(--js-color)"},{name:"Web Page",value:"layout",background:"background-color:var(--layout-color)"}]}},methods:{selectOption(e){this.selectedOption=e.name,this.sortByCategories(e)},sortByCategories(e){this.sortedProjects=[];let t=this;this.projects.map((function(o){o.category===e.value&&t.sortedProjects.push(o)}))}},computed:{filteredProjects(){return this.sortedProjects.length?this.sortedProjects:this.projects}}};const $=(0,J.Z)(H,[["render",P]]);var F=$},7895:function(e,t,o){var a={"./ai-fortuna-mob.jpg":4597,"./ai-fortuna.jpg":304,"./aima-tech-mob.jpg":2132,"./aima-tech.jpg":930,"./avex-ai-mob.jpg":2995,"./avex-ai.jpg":9088,"./brokernear-mob.png":7957,"./brokernear.png":7033,"./colors-mob.jpg":9426,"./colors.jpg":9695,"./covid-tracker-mob.jpg":5227,"./covid-tracker.jpg":9759,"./cryptoview-mob.jpg":5568,"./cryptoview.jpg":1543,"./enigma-aff-mob.jpg":5415,"./enigma-aff.jpg":6590,"./exer-app-mob.jpg":2787,"./exer-app.jpg":2790,"./heliorec-mob.jpg":2394,"./heliorec.jpg":9142,"./laptop.png":9516,"./meal-match-mob.jpg":481,"./meal-match.jpg":1944,"./movie-app-mob.jpg":7404,"./movie-app.jpg":9021,"./passw-generator-mob.jpg":6630,"./passw-generator.jpg":1365,"./phone.png":8182,"./portfolio-mob.jpg":966,"./portfolio.jpg":2163,"./quick-currency-converter-mob.jpg":8536,"./quick-currency-converter.jpg":3557,"./quiz-app-js-mob.png":9959,"./quiz-app-js.png":5191,"./quiz-app-vue-mob.jpg":8798,"./quiz-app-vue.jpg":6448,"./rampedia-mob.jpg":6250,"./rampedia.jpg":9722,"./snippets-mob.jpg":1994,"./snippets.jpg":9488,"./task-list-mob.jpg":5965,"./task-list.jpg":2895,"./tetris-mob.jpg":8794,"./tetris.jpg":244,"./weather-app-react-mob.jpg":8937,"./weather-app-react.jpg":9457};function i(e){var t=c(e);return o(t)}function c(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=c,e.exports=i,i.id=7895},4597:function(e,t,o){"use strict";e.exports=o.p+"img/ai-fortuna-mob.73b74cd5.jpg"},304:function(e,t,o){"use strict";e.exports=o.p+"img/ai-fortuna.ceb6f26a.jpg"},2132:function(e,t,o){"use strict";e.exports=o.p+"img/aima-tech-mob.2dba0a42.jpg"},930:function(e,t,o){"use strict";e.exports=o.p+"img/aima-tech.f868f27c.jpg"},2995:function(e,t,o){"use strict";e.exports=o.p+"img/avex-ai-mob.b0d9122e.jpg"},9088:function(e,t,o){"use strict";e.exports=o.p+"img/avex-ai.f7e668f0.jpg"},7957:function(e,t,o){"use strict";e.exports=o.p+"img/brokernear-mob.d066ed56.png"},7033:function(e,t,o){"use strict";e.exports=o.p+"img/brokernear.7637cda4.png"},9426:function(e,t,o){"use strict";e.exports=o.p+"img/colors-mob.0c1bd12e.jpg"},9695:function(e,t,o){"use strict";e.exports=o.p+"img/colors.281ef1cb.jpg"},5227:function(e,t,o){"use strict";e.exports=o.p+"img/covid-tracker-mob.8c1b2a12.jpg"},9759:function(e,t,o){"use strict";e.exports=o.p+"img/covid-tracker.15454b7d.jpg"},5568:function(e,t,o){"use strict";e.exports=o.p+"img/cryptoview-mob.2c7f78ed.jpg"},1543:function(e,t,o){"use strict";e.exports=o.p+"img/cryptoview.47cace14.jpg"},5415:function(e,t,o){"use strict";e.exports=o.p+"img/enigma-aff-mob.c53d05c8.jpg"},6590:function(e,t,o){"use strict";e.exports=o.p+"img/enigma-aff.7cd14044.jpg"},2787:function(e,t,o){"use strict";e.exports=o.p+"img/exer-app-mob.162edea0.jpg"},2790:function(e,t,o){"use strict";e.exports=o.p+"img/exer-app.46ea0509.jpg"},2394:function(e,t,o){"use strict";e.exports=o.p+"img/heliorec-mob.0a6e7681.jpg"},9142:function(e,t,o){"use strict";e.exports=o.p+"img/heliorec.103340c7.jpg"},9516:function(e,t,o){"use strict";e.exports=o.p+"img/laptop.108df13a.png"},481:function(e,t,o){"use strict";e.exports=o.p+"img/meal-match-mob.6635e937.jpg"},1944:function(e,t,o){"use strict";e.exports=o.p+"img/meal-match.426a38b7.jpg"},7404:function(e,t,o){"use strict";e.exports=o.p+"img/movie-app-mob.3b82c2d0.jpg"},9021:function(e,t,o){"use strict";e.exports=o.p+"img/movie-app.7847c17e.jpg"},6630:function(e,t,o){"use strict";e.exports=o.p+"img/passw-generator-mob.a01d9c4a.jpg"},1365:function(e,t,o){"use strict";e.exports=o.p+"img/passw-generator.f6674214.jpg"},8182:function(e,t,o){"use strict";e.exports=o.p+"img/phone.85d54cf8.png"},966:function(e,t,o){"use strict";e.exports=o.p+"img/portfolio-mob.49959d6e.jpg"},2163:function(e,t,o){"use strict";e.exports=o.p+"img/portfolio.2255bcd3.jpg"},8536:function(e,t,o){"use strict";e.exports=o.p+"img/quick-currency-converter-mob.2946f9d5.jpg"},3557:function(e,t,o){"use strict";e.exports=o.p+"img/quick-currency-converter.9a23d8f8.jpg"},9959:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-js-mob.4eb401d1.png"},5191:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-js.fb549b79.png"},8798:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-vue-mob.5c85fff7.jpg"},6448:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-vue.10c783e3.jpg"},6250:function(e,t,o){"use strict";e.exports=o.p+"img/rampedia-mob.168913e5.jpg"},9722:function(e,t,o){"use strict";e.exports=o.p+"img/rampedia.c3edae6a.jpg"},1994:function(e,t,o){"use strict";e.exports=o.p+"img/snippets-mob.deced9c6.jpg"},9488:function(e,t,o){"use strict";e.exports=o.p+"img/snippets.06059222.jpg"},5965:function(e,t,o){"use strict";e.exports=o.p+"img/task-list-mob.34a9462f.jpg"},2895:function(e,t,o){"use strict";e.exports=o.p+"img/task-list.79c1e1c8.jpg"},8794:function(e,t,o){"use strict";e.exports=o.p+"img/tetris-mob.e3558ceb.jpg"},244:function(e,t,o){"use strict";e.exports=o.p+"img/tetris.82dfe317.jpg"},8937:function(e,t,o){"use strict";e.exports=o.p+"img/weather-app-react-mob.9d85c9cc.jpg"},9457:function(e,t,o){"use strict";e.exports=o.p+"img/weather-app-react.65bd3048.jpg"}}]);
//# sourceMappingURL=532.fac41dac.js.map