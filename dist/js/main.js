(()=>{"use strict";(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".modal-overlay"),c=document.querySelector(".button-services "),l=document.querySelector(".services-elements"),o=e=>{e.preventDefault(),t.style.display="block",(({timing:e,draw:t,duration:c})=>{let l=performance.now();requestAnimationFrame((function o(n){let r=(n-l)/c;r>1&&(r=1);let a=e(r);t(a),r<1&&requestAnimationFrame(o)}))})({duration:500,timing:e=>e,draw(e){t.style.opacity=e}})};e.forEach((e=>{e.addEventListener("click",(e=>o(e)))})),l.addEventListener("click",(e=>{e.target.closest(".absolute")&&o(e)})),c.addEventListener("click",(e=>o(e))),t.addEventListener("click",(e=>{e.preventDefault(),!e.target.closest(".modal-close")&&e.target.closest(".modal-callback ")||(t.style.display="none")}))})(),document.querySelectorAll(".top-menu>ul>li>a").forEach((e=>{const t=document.querySelector(e.getAttribute("href"));e.addEventListener("click",(e=>{((e,t)=>{e.preventDefault(),t&&t.scrollIntoView({block:"start",behavior:"smooth"})})(e,t)}))})),(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".item");let c,l=0;const o=(e,t,c)=>{e[t].classList.remove(c)},n=(e,t,c)=>{e[t].classList.add(c)};e.addEventListener("click",(e=>{e.preventDefault();const c=document.querySelectorAll(".dot");o(c,l,"slick-active"),o(t,l,"active"),e.target.classList.contains("dot")&&c.forEach(((t,c)=>{e.target===t&&(l=c)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),n(c,l,"slick-active"),n(t,l,"active")})),(()=>{let l=document.createElement("ul");l.classList.add("slick-dots"),e.append(l);for(let e=0;e<t.length;e++)c=document.createElement("li"),c.classList.add("dot"),l.append(c)})(),setInterval((()=>{const e=document.querySelectorAll(".slick-dots > li");o(e,l,"slick-active"),o(t,l,"active"),l++,l>=t.length&&(l=0),n(e,l,"slick-active"),n(t,l,"active")}),3e3)})(),document.querySelector(".up").addEventListener("click",(()=>{let e,t=window.pageYOffset;const c=()=>{t>0?(window.scrollTo(0,t),t-=300,e=setTimeout(c,50)):(clearTimeout(e),window.scrollTo(0,0))};c()})),(()=>{const e=document.querySelector(".accordeon").querySelectorAll(".element");e.forEach((t=>{t.querySelector(".title").addEventListener("click",(()=>{e.forEach((e=>{const c=e.querySelector(".element-content");t==e?(c.classList.toggle("accordeon-active"),e.classList.toggle("active")):(c.classList.remove("accordeon-active"),e.classList.remove("active"))}))}))}))})(),(()=>{const e=document.getElementsByName("fio"),t=document.getElementsByName("tel");e.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^а-яА-Я]/gi,"")))})),t.forEach((e=>{e.addEventListener("input",(t=>e.value=t.target.value.replace(/[^+\d]/g,"")))}))})(),((e=[])=>{const t=document.getElementById("form"),c=document.createElement("div");try{if(!t)throw new Error("Верните форму на место!");t.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".button")&&(()=>{const e=t.querySelectorAll("input"),l=new FormData(t),o={};c.textContent="Загрузка...",c.classList.add("titleBlock"),c.style.color="#333",t.append(c),l.forEach(((e,t)=>{o[t]=e})),(e=>{let t=!0;return e.forEach((e=>{""==e.value&&(t=!1)})),t})(e)?(async e=>{const t=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{ContentType:"application/json"}});return await t.json()})(o).then((t=>{c.textContent="Спасибо! Наш менеджер с вами свяжется.",e.forEach((e=>{document.querySelectorAll(".form-control").value=""})),setTimeout((()=>{document.querySelector(".modal-overlay").style.display="none"}),2e3)})).catch((e=>{c.textContent="Ошибка..."})):c.textContent="Заполните пустые поля!"})()}))}catch(e){console.log(e.massege)}})(),(()=>{let e=3;const t=document.querySelector(".services-elements"),c=t.querySelector(".services-carousel"),l=c.querySelectorAll(".element"),o=document.querySelector(".btn-left"),n=document.querySelector(".btn-right"),r=screen.width;r>=1250?e=3:r<1250&&r>=950?e=2:r<950&&(e=1);const a=Math.floor(t.clientWidth/e),s=1*a;let i=0;l.forEach((e=>{e.style.minWidth=`calc(${a}px - 7px)`}));const d=()=>{c.style.transform=`translateX(${i}px)`},u=()=>{let t=-(l.length-e)*a;0==i?o.setAttribute("disabled","disabled"):o.removeAttribute("disabled"),i==t?n.setAttribute("disabled","disabled"):n.removeAttribute("disabled")};o.addEventListener("click",(()=>{i+=Math.floor(s),d(),u()})),n.addEventListener("click",(()=>{i-=Math.floor(s),d(),u()})),u()})()})();