(self["webpackChunkportfolio_spa"]=self["webpackChunkportfolio_spa"]||[]).push([[212],{3983:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return F}});var i=o(6252),p=o(3577),s=o(9516),c=o(8182),n=o(334),a=o(7918),r=o.p+"img/thats-all.6f2a8242.png";const g={class:"projects-section",id:"projects"},l={class:"container"},m=(0,i._)("h2",{class:"section-heading delay-2"},"_ Projects",-1),u={class:"projects-wrapper"},j=["project","title"],d=(0,i._)("img",{src:s,alt:"laptop",class:"laptop",loading:"lazy"},null,-1),b={class:"project-desktop-img"},h=["src","alt"],f={class:"phone-img-wrapper"},v=(0,i._)("img",{src:c,alt:"phone",class:"phone"},null,-1),y={class:"project-mobile-img"},k=["src","alt"],x={class:"project-info"},w={class:"project-description"},_={class:"project-tech-used"},z=["src","alt","title"],O=["src","alt"],I={class:"links-set"},q=["href"],S=(0,i._)("img",{src:n,width:"24",height:"24",alt:"GitHub Link"},null,-1),A=[S],C=["href"],P=(0,i._)("img",{src:a,width:"24",height:"24",alt:"Demo Link"},null,-1),D=[P],L=(0,i._)("img",{src:r,alt:"that's all folks",class:"thats-all-img"},null,-1);function M(e,t,s,c,n,a){const r=(0,i.up)("MySelect");return(0,i.wg)(),(0,i.iD)("section",g,[(0,i._)("div",l,[m,(0,i.Wm)(r,{options:n.options,selectedOption:n.selectedOption,onSelectOption:a.selectOption,onSortByCategories:a.sortByCategories},null,8,["options","selectedOption","onSelectOption","onSortByCategories"]),(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.filteredProjects,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"project",key:e.name,project:e,title:e.name},[(0,i._)("span",{class:"project-label",style:(0,p.j5)(`background:${e.color}`)},(0,p.zw)(e.category),5),d,(0,i._)("div",b,[(0,i._)("img",{src:o(7895)("./"+e.projectImage),alt:e.name,class:"project-img"},null,8,h)]),(0,i._)("div",f,[v,(0,i._)("div",y,[(0,i._)("img",{src:o(7895)("./"+e.projectMobileImage),alt:e.name,class:"project-img-mob"},null,8,k)])]),(0,i._)("div",x,[(0,i._)("h3",{class:"project-name",style:(0,p.j5)(`color:${e.color}`)},(0,p.zw)(e.name),5),(0,i._)("p",w,(0,p.zw)(e.description),1),(0,i._)("div",_,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.techUsed,(e=>((0,i.wg)(),(0,i.iD)("img",{key:e.name,src:o(5291)("./"+e.icon),alt:e.name,class:"project-tech-icon",width:"20",height:"20",title:e.name},null,8,z)))),128))]),(0,i._)("img",{src:o(5291)("./"+e.technologyImg),alt:e.category,class:"project-tag"},null,8,O),(0,i._)("div",I,[(0,i._)("a",{href:e.githubLink,target:"_blank",title:"GitHub Code"},A,8,q),(0,i._)("a",{href:e.link,target:"_blank",title:"Demo"},D,8,C)])])],8,j)))),128))]),L])])}const U={class:"my-select delay-3",title:"Sort"},V=(0,i._)("span",{class:"arrow-right"},null,-1),B={key:0,class:"options"},J=["onClick"];function W(e,t,o,s,c,n){return(0,i.wg)(),(0,i.iD)("div",U,[(0,i._)("h4",{class:"my-select-title",onClick:t[0]||(t[0]=e=>c.areOptionsVisible=!c.areOptionsVisible)},[(0,i.Uk)((0,p.zw)(o.selectedOption)+" ",1),V]),c.areOptionsVisible?((0,i.wg)(),(0,i.iD)("div",B,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.options,(e=>((0,i.wg)(),(0,i.iD)("p",{class:"option",style:(0,p.j5)(e.background),key:e.value,onClick:t=>n.selectOption(e)},(0,p.zw)(e.name),13,J)))),128))])):(0,i.kq)("",!0)])}var E={name:"MySelect",data(){return{areOptionsVisible:!1}},props:{options:{type:Array,default(){return[]}},selectedOption:{type:String,default:""}},methods:{selectOption(e){this.$emit("selectOption",e),this.areOptionsVisible=!1},hideSelect(){this.areOptionsVisible=!1},sortByCategories(e){this.$emit("sortByCategories",e)}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy(){document.removeEventListener("click",this.hideSelect.bind)}},H=o(3744);const R=(0,H.Z)(E,[["render",W]]);var $=R,K={name:"projects",components:{MySelect:$},data(){return{selectedOption:"All",sortedProjects:[],projects:[{name:"Quiz App Vue",description:"Web App created with Vue & Pinia",link:"https://andyalu.github.io/quiz-app-vue/",githubLink:"https://github.com/andyalu/quiz-app-vue",projectImage:"quiz-app-vue.jpg",projectMobileImage:"quiz-app-vue-mob.jpg",color:"var(--vue-color)",category:"vue",technologyImg:"vue.png",techUsed:[{name:"Vue",icon:"vue.png"},{name:"Pinia",icon:"pinia.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Code Snippets",description:"Web App made with JavaScript",link:"https://andyalu.github.io/snippets/",githubLink:"https://github.com/andyalu/snippets",projectImage:"snippets.jpg",projectMobileImage:"snippets-mob.jpg",color:"var(--js-color)",category:"js",technologyImg:"javascript.png",techUsed:[{name:"JavaScript",icon:"javascript.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Avex AI",description:"Landing Page",link:"https://andyalu.github.io/avex-ai/",githubLink:"https://github.com/andyalu/avex-ai",projectImage:"avex-ai.jpg",projectMobileImage:"avex-ai-mob.jpg",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"JavaScript",icon:"javascript.png"}]},{name:"Rick&Morty-Pedia",description:"SPA created with React",link:"https://andyalu.github.io/rampedia/",githubLink:"https://github.com/andyalu/rampedia",projectImage:"rampedia.jpg",projectMobileImage:"rampedia-mob.jpg",color:"var(--react-color)",category:"react",technologyImg:"css.png",techUsed:[{name:"React",icon:"react.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"Rest API",icon:"rest.png"}]},{name:"Quiz App JS",description:"Web App created with JavaScript",link:"https://andyalu.github.io/quiz-app-js/",githubLink:"https://github.com/andyalu/quiz-app-js",projectImage:"quiz-app-js.png",projectMobileImage:"quiz-app-js-mob.png",color:"var(--js-color)",category:"js",technologyImg:"javascript.png",techUsed:[{name:"js",icon:"javascript.png"},{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"}]},{name:"Enigma Aff",description:"Multipage Website",link:"https://andyalu.github.io/enigma-aff/",githubLink:"https://github.com/andyalu/enigma-aff",projectImage:"enigma-aff.jpg",projectMobileImage:"enigma-aff-mob.jpg",color:"var(--layout-color)",category:"layout",technologyImg:"css.png",techUsed:[{name:"html",icon:"html-5.png"},{name:"css",icon:"css.png"},{name:"js",icon:"javascript.png"}]}],options:[{name:"All",value:"all",background:"background-color:#2196F3"},{name:"Vue JS App",value:"vue",background:"background-color:var(--vue-color)"},{name:"React App",value:"react",background:"background-color:var(--react-color)"},{name:"Javascript App",value:"js",background:"background-color:var(--js-color)"},{name:"Web Page",value:"layout",background:"background-color:var(--layout-color)"}]}},methods:{selectOption(e){this.selectedOption=e.name,this.sortByCategories(e)},sortByCategories(e){this.sortedProjects=[];let t=this;this.projects.map((function(o){o.category===e.value&&t.sortedProjects.push(o)}))}},computed:{filteredProjects(){return this.sortedProjects.length?this.sortedProjects:this.projects}}};const Y=(0,H.Z)(K,[["render",M]]);var F=Y},7895:function(e,t,o){var i={"./avex-ai-mob.jpg":2995,"./avex-ai.jpg":9088,"./brokernear-mob.png":7957,"./brokernear.png":7033,"./colors-mob.jpg":9426,"./colors.jpg":9695,"./covid-tracker-mob.jpg":5227,"./covid-tracker.jpg":9759,"./cryptoview-mob.jpg":5568,"./cryptoview.jpg":1543,"./enigma-aff-mob.jpg":5415,"./enigma-aff.jpg":6590,"./exer-app-mob.jpg":2787,"./exer-app.jpg":2790,"./laptop.png":9516,"./meal-match-mob.jpg":481,"./meal-match.jpg":1944,"./movie-app-mob.jpg":7404,"./movie-app.jpg":9021,"./passw-generator-mob.jpg":6630,"./passw-generator.jpg":1365,"./phone.png":8182,"./portfolio-mob.jpg":966,"./portfolio.jpg":2163,"./quick-currency-converter-mob.jpg":8536,"./quick-currency-converter.jpg":3557,"./quiz-app-js-mob.png":9959,"./quiz-app-js.png":5191,"./quiz-app-vue-mob.jpg":8798,"./quiz-app-vue.jpg":6448,"./rampedia-mob.jpg":6250,"./rampedia.jpg":9722,"./react-weather-app-mob.jpg":5742,"./react-weather-app.jpg":522,"./snippets-mob.jpg":1994,"./snippets.jpg":9488,"./task-list-mob.jpg":5965,"./task-list.jpg":2895,"./tetris-mob.jpg":8794,"./tetris.jpg":244};function p(e){var t=s(e);return o(t)}function s(e){if(!o.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}p.keys=function(){return Object.keys(i)},p.resolve=s,e.exports=p,p.id=7895},2995:function(e,t,o){"use strict";e.exports=o.p+"img/avex-ai-mob.e4304178.jpg"},9088:function(e,t,o){"use strict";e.exports=o.p+"img/avex-ai.27260c12.jpg"},7957:function(e,t,o){"use strict";e.exports=o.p+"img/brokernear-mob.d066ed56.png"},7033:function(e,t,o){"use strict";e.exports=o.p+"img/brokernear.9cf0fb12.png"},9426:function(e,t,o){"use strict";e.exports=o.p+"img/colors-mob.971e7ecb.jpg"},9695:function(e,t,o){"use strict";e.exports=o.p+"img/colors.c5e69180.jpg"},5227:function(e,t,o){"use strict";e.exports=o.p+"img/covid-tracker-mob.8c1b2a12.jpg"},9759:function(e,t,o){"use strict";e.exports=o.p+"img/covid-tracker.15454b7d.jpg"},5568:function(e,t,o){"use strict";e.exports=o.p+"img/cryptoview-mob.2c7f78ed.jpg"},1543:function(e,t,o){"use strict";e.exports=o.p+"img/cryptoview.7fcb34bd.jpg"},5415:function(e,t,o){"use strict";e.exports=o.p+"img/enigma-aff-mob.d50206b8.jpg"},6590:function(e,t,o){"use strict";e.exports=o.p+"img/enigma-aff.c1d9290b.jpg"},2787:function(e,t,o){"use strict";e.exports=o.p+"img/exer-app-mob.162edea0.jpg"},2790:function(e,t,o){"use strict";e.exports=o.p+"img/exer-app.46ea0509.jpg"},9516:function(e,t,o){"use strict";e.exports=o.p+"img/laptop.108df13a.png"},481:function(e,t,o){"use strict";e.exports=o.p+"img/meal-match-mob.6635e937.jpg"},1944:function(e,t,o){"use strict";e.exports=o.p+"img/meal-match.426a38b7.jpg"},7404:function(e,t,o){"use strict";e.exports=o.p+"img/movie-app-mob.3b82c2d0.jpg"},9021:function(e,t,o){"use strict";e.exports=o.p+"img/movie-app.88c7aa0d.jpg"},6630:function(e,t,o){"use strict";e.exports=o.p+"img/passw-generator-mob.eb403b0c.jpg"},1365:function(e,t,o){"use strict";e.exports=o.p+"img/passw-generator.f6674214.jpg"},8182:function(e,t,o){"use strict";e.exports=o.p+"img/phone.85d54cf8.png"},966:function(e,t,o){"use strict";e.exports=o.p+"img/portfolio-mob.49959d6e.jpg"},2163:function(e,t,o){"use strict";e.exports=o.p+"img/portfolio.2255bcd3.jpg"},8536:function(e,t,o){"use strict";e.exports=o.p+"img/quick-currency-converter-mob.2946f9d5.jpg"},3557:function(e,t,o){"use strict";e.exports=o.p+"img/quick-currency-converter.9a23d8f8.jpg"},9959:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-js-mob.4eb401d1.png"},5191:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-js.fb549b79.png"},8798:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-vue-mob.5c85fff7.jpg"},6448:function(e,t,o){"use strict";e.exports=o.p+"img/quiz-app-vue.10c783e3.jpg"},6250:function(e,t,o){"use strict";e.exports=o.p+"img/rampedia-mob.168913e5.jpg"},9722:function(e,t,o){"use strict";e.exports=o.p+"img/rampedia.c3edae6a.jpg"},5742:function(e,t,o){"use strict";e.exports=o.p+"img/react-weather-app-mob.9d85c9cc.jpg"},522:function(e,t,o){"use strict";e.exports=o.p+"img/react-weather-app.3407810a.jpg"},1994:function(e,t,o){"use strict";e.exports=o.p+"img/snippets-mob.efb8f2f8.jpg"},9488:function(e,t,o){"use strict";e.exports=o.p+"img/snippets.1ef1f7ac.jpg"},5965:function(e,t,o){"use strict";e.exports=o.p+"img/task-list-mob.34a9462f.jpg"},2895:function(e,t,o){"use strict";e.exports=o.p+"img/task-list.1a5673e3.jpg"},8794:function(e,t,o){"use strict";e.exports=o.p+"img/tetris-mob.c9919d77.jpg"},244:function(e,t,o){"use strict";e.exports=o.p+"img/tetris.46595530.jpg"}}]);
//# sourceMappingURL=212.c18f2cc4.js.map