!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(l,i,function(t){return e[t]}.bind(null,i));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5)},function(e,t){const n=document.querySelector(".characters"),l=document.querySelector(".main_characters"),i=l.querySelector("#species"),r=l.querySelector("#role"),s=l.querySelector(".species_list"),c=l.querySelector(".role_list"),o=s.querySelector("#human"),d=s.querySelector("#ghost"),a=s.querySelector("#creature"),y=c.querySelector("#students"),u=c.querySelector("#teachers"),p=l.querySelector(".scroll"),m=(l.querySelector("#p"),l.querySelector(".next")),f=l.querySelector(".prev"),h=l.querySelector(".back_from_char"),g=l.querySelector(".back_from_list"),S=l.querySelector(".back_from_category"),_=document.querySelector(".landing_page"),k=l.querySelector(".char_title");let b=0,v=1,L=[];function q(){i.style.display="none",r.style.display="none"}function w(){i.style.display="block",r.style.display="block"}function E(){q(),s.style.display="none",c.style.display="none"}function V(){s.style.display="flex",S.style.display="block"}function P(){c.style.display="flex",S.style.display="block"}function T(e){m.style.display=b<e-1?"block":"none",f.style.display=b>0?"block":"none"}async function M(e,t){let n=await async function(e){B(e);let t=[];for(let n=1;n<=v;n++){let l=6*n-5-1,i=[];for(let t=0;t<6&&l<e.length;t++)i[t]=e[l],l++;t.push([...i])}return t}(t),l=document.createElement("ul");l.setAttribute("class","elements_list"),p.insertBefore(l,i);for(let t=0;t<n[e].length;t++){let i=document.createElement("li");i.classList.add("listed_element"),i.setAttribute("id",`${n[e][t]._id}`),i.setAttribute("onclick","showCharacter(this.getAttribute('id'))"),l.appendChild(i),i.innerHTML=`${n[e][t].name}`}return t}function B(e){return v=Math.ceil(e.length/6)}n.addEventListener("click",()=>{resetLandingPage(),l.style.display="block",back_page.style.display="inline-block",herb_menu.style.display="flex",teach_spells.style.width="50%",back.push("characters"),w(),b=0}),i.addEventListener("click",()=>{q(),V()}),r.addEventListener("click",async()=>{q(),P()}),o.addEventListener("click",async()=>{E();let e=await getHumans();return L=e,M(b,e),T(v=B(e)),k.innerHTML="Humans",g.style.display="block",S.style.display="none",e}),d.addEventListener("click",async()=>{E();let e=await getGhosts();return L=e,M(b,e),T(v=B(e)),k.innerHTML="Ghosts",g.style.display="block",S.style.display="none",e}),a.addEventListener("click",async()=>{E();let e=await getCreatures();return L=e,M(b,e),T(v=B(e)),k.innerHTML="Creatures",g.style.display="block",S.style.display="none",e}),y.addEventListener("click",async()=>{E();let e=await getStudents();return L=e,M(b,e),T(v=B(e)),k.innerHTML="Students",g.style.display="block",S.style.display="none",e}),u.addEventListener("click",async()=>{E();let e=await getTeachers();return L=e,M(b,e),T(v=B(e)),k.innerHTML="Teachers",g.style.display="block",S.style.display="none",e}),h.addEventListener("click",()=>{let e=document.querySelector(".character_params");e.parentNode.removeChild(e),h.style.display="none",M(b,L),T(v=B(L)),g.style.display="block"}),g.addEventListener("click",()=>{let e=document.querySelector(".elements_list");e.parentNode.removeChild(e),m.style.display="none",f.style.display="none","Students"==k.innerHTML||"Teachers"==k.innerHTML?P():V(),g.style.display="none",k.innerHTML="",b=0}),S.addEventListener("click",()=>{s.style.display="none",c.style.display="none",S.style.display="none",w()}),m.addEventListener("click",()=>{let e=document.querySelector(".elements_list");e.parentNode.removeChild(e),function(e){M(b+=1,e),T(v)}(L)}),f.addEventListener("click",()=>{let e=document.querySelector(".elements_list");e.parentNode.removeChild(e),function(e){M(b-=1,e),T(v)}(L)}),_.addEventListener("click",()=>{E();let e=document.querySelector(".character_params");null!=e&&e.parentNode.removeChild(e),h.style.display="none";let t=document.querySelector(".elements_list");null!=t&&t.parentNode.removeChild(t),m.style.display="none",f.style.display="none",k.innerHTML=""})},function(e,t){const n=document.querySelector(".sorting_hat"),l=document.querySelector(".main_button"),i=document.querySelector(".back_page"),r=document.querySelector(".landing_page"),s=document.querySelector(".h_sl"),c=document.querySelector(".h_gr"),o=document.querySelector(".h_ra"),d=document.querySelector(".h_hu"),a=herbs.children[0],y=herbs.children[1],u=herbs.children[2],p=herbs.children[3];let m=["main"];async function f(){spells.style.display="none";teach.style.display="none",characters.style.display="none",header.style.display="none",herbs.style.display="none",herb_menu.style.display="none",main_house.style.display="none",main_teachers.style.display="none",main_spells.style.display="none",back_page.style.display="none",miArOr.style.display="none",studentView.style.display="none",main_characters.style.display="none",char_title.innerHTML=""}async function h(){m.push("main");teach_spells.style.width="30%";characters.style.display="block",spells.style.display="block",teach.style.display="block",header.style.display="block",herbs.style.display="block",l.style.display="flex",main_button.style.order="-1",main_button.style.display="block"}async function g(){const e=m.length-2;if("Ravenclaw"==m[e])return setTimeout(()=>{resetLandingPage()},0),void setTimeout(()=>{RavenclawView()},0);if("Hufflepuff"==m[e])return resetLandingPage(),await HufflepuffView();if("Slytherin"==m[e])return resetLandingPage(),await SlytherinView();if("Gryffindor"==m[e])return resetLandingPage(),await GryffindorView();if("main"==m[e])return f(),await h();if("spells"==m[e])return resetLandingPage(),spellsView();if("teachers"==m[e])return resetLandingPage(),teachersView();if("StGr"==m[e])return resetLandingPage(),GryffindorStudentsView();if("StSl"==m[e])return resetLandingPage(),SlytherinStudentsView();if("StHu"==m[e])return resetLandingPage(),HufflepuffStudentsView();if("StRa"==m[e])return resetLandingPage(),RavenclawStudentsView();if(m[e]==t(m[e])+"Ar")return resetLandingPage(),ArmyView(),ArmyMembers(t(m[e]));if(m[e]==t(m[e])+"Or")return resetLandingPage(),OrderView(),OrderMembers(t(m[e]));if(m[e]==t(m[e])+"Mi")return resetLandingPage(),MinistryView(),MinistryMembers(t(m[e]));if("characters"==m[e])return resetLandingPage(),charactersView();function t(e){return e.slice(0,-2)}}a.addEventListener("click",()=>{resetLandingPage(),SlytherinView()}),y.addEventListener("click",()=>{resetLandingPage(),GryffindorView()}),u.addEventListener("click",()=>{resetLandingPage(),HufflepuffView()}),p.addEventListener("click",()=>{resetLandingPage(),RavenclawView()}),s.addEventListener("click",()=>{setTimeout(()=>{resetLandingPage()},0),setTimeout(()=>{SlytherinView()},0)}),c.addEventListener("click",()=>{setTimeout(()=>{resetLandingPage()},0),setTimeout(()=>{GryffindorView()},0)}),d.addEventListener("click",()=>{setTimeout(()=>{resetLandingPage()},0),setTimeout(()=>{HufflepuffView()},0)}),o.addEventListener("click",()=>{setTimeout(()=>{resetLandingPage()},0),setTimeout(()=>{RavenclawView()},0)}),students.lastElementChild.addEventListener("click",()=>(resetLandingPage(),"Gryffindor"==m[m.length-1]?GryffindorStudentsView():"Slytherin"==m[m.length-1]?SlytherinStudentsView():"Hufflepuff"==m[m.length-1]?HufflepuffStudentsView():"Ravenclaw"==m[m.length-1]?RavenclawStudentsView():void 0)),blockButtons.children[0].addEventListener("click",()=>{resetLandingPage(),MinistryView(),MinistryMembers(m[m.length-2])}),blockButtons.children[1].addEventListener("click",()=>{resetLandingPage(),OrderView(),OrderMembers(m[m.length-2])}),blockButtons.children[2].addEventListener("click",()=>{resetLandingPage(),ArmyView(),ArmyMembers(m[m.length-2])}),n.addEventListener("click",()=>{setTimeout(()=>{resetLandingPage()},0),setTimeout(()=>{!async function(){const e=Math.floor(4*Math.random()+1);1==e?await RavenclawView():2==e?await HufflepuffView():3==e?await SlytherinView():4==e&&await GryffindorView()}()},0)}),r.addEventListener("click",()=>{f(),h()}),i.addEventListener("click",()=>{g(),m.pop(),m.pop()});document.querySelectorAll("div")},function(e,t){const n=document.querySelector(".main_house"),l=(n.querySelector("h3"),n.querySelector(".founder > span"),n.querySelector(".house_ghost > span"),n.querySelector(".head_house > span"),n.querySelector(".house_buttons"));l.querySelector(".students"),l.querySelector(".block_buttons").querySelectorAll("div");document.querySelector(".studentsView"),document.querySelector(".pureBlood"),document.querySelector(".halfBlood"),document.getElementById("unknownBlood"),document.getElementById("muggleBorn");document.querySelector(".ministry_army_order_view"),document.querySelector(".ministry_army_order_view h3"),document.getElementById("members");document.getElementById("book_container")},function(e,t){const n=document.querySelector(".main_spells"),l=document.querySelector(".btn_spells"),r=document.querySelector(".spells_types_list"),s=document.querySelector(".spells_list"),c=document.querySelector(".spells_list_title"),o=document.querySelector("#all"),d=document.querySelector("#charm"),a=document.querySelector("#curse"),y=document.querySelector("#enchantment"),u=document.querySelector("#hex"),p=document.querySelector("#jinx"),m=document.querySelector("#spell");spells.addEventListener("click",resetLandingPage),spells.addEventListener("click",(function(){back.push("spells"),n.style.display="block",back_page.style.display="inline-block",herb_menu.style.display="flex",teach_spells.style.width="50%"})),l.addEventListener("click",(function(){l.style.display="none",r.style.display="",s.style.display="",c.style.display=""})),l.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++){let t=document.createElement("div");t.className="spells_list_item",t.style.display="grid";let n=document.createElement("p");n.appendChild(document.createTextNode(e[i].spell));let l=document.createElement("p");l.appendChild(document.createTextNode(e[i].type));let r=document.createElement("p");r.appendChild(document.createTextNode(e[i].effect)),t.setAttribute("id",e[i]._id),t.appendChild(n),t.appendChild(l),t.appendChild(r),document.querySelector(".spells_list").appendChild(t)}})),o.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++)document.getElementById(e[i]._id).style.display="grid"})),d.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++)"Charm"===e[i].type?document.getElementById(e[i]._id).style.display="grid":document.getElementById(e[i]._id).style.display="none"})),a.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++)"Curse"===e[i].type?document.getElementById(e[i]._id).style.display="grid":document.getElementById(e[i]._id).style.display="none"})),y.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++)"Enchantment"===e[i].type?document.getElementById(e[i]._id).style.display="grid":document.getElementById(e[i]._id).style.display="none"})),u.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++)"Hex"===e[i].type?document.getElementById(e[i]._id).style.display="grid":document.getElementById(e[i]._id).style.display="none"})),p.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++)"Jinx"===e[i].type?document.getElementById(e[i]._id).style.display="grid":document.getElementById(e[i]._id).style.display="none"})),m.addEventListener("click",(async function(){let e=await getSpells();for(i=0;i<e.length;i++)"Spell"===e[i].type?document.getElementById(e[i]._id).style.display="grid":document.getElementById(e[i]._id).style.display="none"}))},function(e,t){const n=document.querySelector(".teachers"),l=document.querySelector("header"),r=document.querySelector(".herbs"),s=document.querySelector(".main_button h3"),c=document.querySelector(".back_page"),o=(document.querySelector("main"),document.querySelector(".main_teachers")),d=document.querySelector(".spells"),a=document.querySelector(".herb_menu"),y=document.querySelector(".teach_spells"),u=document.querySelector(".btn_teachers"),p=document.querySelector(".landing_page"),m=document.querySelector(".teacher_list"),f=document.querySelector("img.wizard"),h=document.querySelector(".wizard_words"),g=document.querySelector(".witek"),S=[];n.addEventListener("click",(async function(){const e=document.querySelectorAll(".house_herb"),t=document.querySelectorAll(".ministry_army_order_view img:nth-of-type(2)"),i=document.querySelectorAll(".ministry_army_order_view h4"),c=document.querySelectorAll(".ministry_army_order_view li"),y=document.querySelectorAll(".scroll_container li");d.style.display="none",n.style.display="none",characters.style.display="none",l.style.display="none",r.style.display="none",main_house.style.display="none",s.style.display="none",o.style.display="none",main_spells.style.display="none",main_characters.style.display="none",miArOr.style.display="none",studentView.style.display="none",species.style.display="none",role.style.display="none",species_list.style.display="none",role_list.style.display="none";let u=document.querySelector(".character_params");null!=u&&u.parentNode.removeChild(u),backFromChar.style.display="none";let p=document.querySelector(".elements_list");null!=p&&p.parentNode.removeChild(p),next.style.display="none",prev.style.display="none";for(let t=0;t<e.length;t++)e[t].remove();for(let e=0;e<t.length;e++)t[e].remove();for(let e=0;e<i.length;e++)i[e].remove();for(let e=0;e<c.length;e++)c[e].remove();for(let e=0;e<y.length;e++)y[e].remove();for(let e=0;e<a.children.length;e++)a.children[e].style.display="block"})),n.addEventListener("click",(function(){back.push("teachers"),o.style.display="block",c.style.display="inline-block",a.style.display="flex",y.style.width="50%"})),u.addEventListener("click",(function(){!async function(){const e=await getCharacters();for(let t=0;t<e.length;t++)if(void 0!==e[t].role){if(!(e[t].role.indexOf("Professor,")>-1))continue;S.push(e[t])}(function(e){for(i=0;i<e.length;i++){function t(){const t=document.createElement("li");u.style.display="none",m.appendChild(t),m.style.display="grid",t.innerHTML=`${e[i].name} ${e[i].role}`;let n=e[i]._id;t.setAttribute("id",`${n}`),f.style.display="block"}t()}})(S)}()})),p.addEventListener("click",(function(){})),f.addEventListener("mouseenter",(function(){h.style.display="block",g.style.display="block"})),f.addEventListener("mouseout",(function(){h.style.display="none",g.style.display="none"}))}]);