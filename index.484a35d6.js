const t=[{image:"https://illustrators.ru/uploads/illustration/image/1529034/main_1_1.jpeg",title:"В музыкальный сборник",author:"G.Bedarev",category:"день"},{image:"https://illustrators.ru/uploads/illustration/image/1528989/main_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4_%D0%B2%D0%BE_%D1%81%D0%BD%D0%B5.jpg",title:"Город во сне",author:"Полина Богацкая",category:"неделя"},{image:"https://illustrators.ru/uploads/illustration/image/1528941/main_AD5FC830-575B-4F1F-9E08-0824AEAE0445.jpeg",title:"Вольная копия",author:"Elana Ekkerman",category:"день"},{image:"https://illustrators.ru/uploads/illustration/image/1528841/main_06BDCEA2-1CE1-4BBD-8675-C0A250317FE2.jpeg",title:"Fire",author:"Lena Alfimova",category:"неделя"},{image:"https://illustrators.ru/uploads/illustration/image/1528708/main_Valera_i.png",title:"Валера",author:"Константин Громыко",category:"день"},{image:"https://illustrators.ru/uploads/album_image/image/98481/E56DB733-F8DF-47D7-83BE-45511B17C89A.jpeg",title:"Русалки",author:"Katerina Putilina",category:"неделя"},{image:"https://illustrators.ru/uploads/illustration/image/1528663/main_20210604_173507.jpg",title:"Толпа",author:"Камочкин Михаил",category:"день"},{image:"https://illustrators.ru/uploads/illustration/image/1528652/main_20210804_233206.jpg",title:"Вечер",author:"Камочкин Михаил",category:"неделя"},{image:"https://illustrators.ru/uploads/illustration/image/1528651/main_20210804_233136.jpg",title:"Цветущий каштан",author:"Камочкин Михаил",category:"день"},{image:"https://illustrators.ru/uploads/illustration/image/1528649/main_20210604_173432.jpg",title:"Станция",author:"Камочкин Михаил",category:"неделя"},{image:"https://illustrators.ru/uploads/illustration/image/1528604/main_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F_%D0%B8%D0%B7_%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%D0%BE%D0%B2.jpg",title:"Город на берегу",author:"Катя Каменская",category:"день"},{image:"https://illustrators.ru/uploads/illustration/image/1528554/main_CDB0EA61-DBB5-499D-B048-10DC44C7F880.jpeg",title:"Toonme",author:"Bogdana Lazarieva",category:"неделя"}],e=document.querySelector(".header"),a=document.querySelector(".intro");document.querySelector(".intro__actions"),document.querySelector(".intro__join"),a&&(a.style.paddingTop=`calc(${e.offsetHeight}px + (var(--space-xl) - var(--space-sm)))`,a.style.paddingBottom="var(--space-xl)"),window.addEventListener("resize",()=>{a&&(a.style.paddingTop=`calc(${e.offsetHeight}px + (var(--space-xl) - var(--space-sm)))`,a.style.paddingBottom="var(--space-xl)")});const s=document.querySelector(".illustrations-list"),i=t.map(t=>`
		<li class="illustrations-list__item">
			<div class="card">
				<figure class="card__figure">
					<img alt="" class="card__image" src="${t.image}" />
				</figure>
				<h3 class="card__title">${t.title}</h3>
				<p class="card__author">${t.author}</p>
			</div>
		</li>
  `);s&&(s.innerHTML=i.join(""));const r=document.querySelectorAll(".tabs__nav-link"),l=document.querySelector(".tabs__panels"),o=document.querySelector("#day"),u=document.querySelector("#day .swiper-wrapper"),c=document.querySelector("#week"),n=document.querySelector("#week .swiper-wrapper");function p(e,a,s){// Filter the products array by category
let i=t.filter(t=>t.category===e);// Loop through the slide data array and create the slides dynamically
i.forEach(t=>{let e=document.createElement("div");e.classList.add("swiper-slide"),e.innerHTML=`
			<div class="card card--white">
				<figure class="card__figure">
					<img alt="" class="card__image" src="${t.image}" />
				</figure>
				<h3 class="card__title">${t.title}</h3>
				<p class="card__author">${t.author}</p>
			</div>
      	`,s.appendChild(e)});// Initialize Swiper
let r=new Swiper(a,{slidesPerView:2,spaceBetween:20,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1280:{slidesPerView:3,spaceBetween:32}},effect:"slide",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,slidesPerGroup:1,speed:300});return r}p("день",o,u),p("неделя",c,n),r.forEach(t=>{t.addEventListener("click",t=>{t.preventDefault();let e=t.target;if(!e.classList.contains("tabs__nav-link--is-active")){let t=e.dataset.tab,a=l.querySelector(`.tabs__panel[data-tab="${t}"]`);a.offsetHeight,r.forEach(t=>{t.classList.remove("tabs__nav-link--is-active")}),e.classList.add("tabs__nav-link--is-active"),a.classList.add("tabs__panel--is-visible");let s=Array.from(a.parentNode.children).filter(t=>t!==a);s.forEach(t=>{t.classList.remove("tabs__panel--is-visible")}),p("день",o,u),p("неделя",c,n)}})});const d=document.querySelector(".authors-list"),_=(t,[e,a,s])=>{let i=Math.abs(t)%100%10;return 1===i&&11!==t?e:i>1&&i<5&&(t<10||t>20)?a:s},m=[{title:"G.Bedarev",image:"https://illustrators.ru/uploads/user/avatar/5780/casual_avatar_original.jpg",subscribers:"1256",works:"685"},{title:"Elana Ekkerman",image:"https://illustrators.ru/uploads/user/avatar/248661/casual_wMsYVRePOVg.jpg",subscribers:"2",works:"54"},{title:"Камочкин Михаил",image:"https://illustrators.ru/uploads/user/avatar/106931/casual_P7026243.JPG",subscribers:"46",works:"63"},{title:"Bogdana Lazarieva",image:"https://illustrators.ru/uploads/user/avatar/198060/casual_5621426D-293B-4E0D-ABC6-54448B9F29D8.jpeg",subscribers:"114",works:"38"}].map(t=>`
		<li class="authors-list__item">
			<figure class="authors-list__figure">
				<img class="authors-list__image" src="${t.image}" />
			</figure>
			<div class="authors-list__title">${t.title}</div>
			<div class="authors-list__works">${t.works} ${_(t.works,["работа","работы","работ"])}</div>
			<div class="authors-list__actions">
				<button class="button" type="button">Подписаться</button>
			</div>
		</li>
  `);d&&(d.innerHTML=m.join(""));const g=document.querySelector(".jobs-list"),h=[{title:"Иллюстрации ко Дню авиации для печати на кружках и футболках",date:"3 августа",employer:"Дарья",price:"по\xa0договорённости",responses:"8"},{title:"Нужно перерисовывать эскизы и\xa0сделать чертежи",date:"3 августа",employer:"AlexKs",price:"по\xa0договорённости",responses:"1"},{title:"Иллюстрации к\xa0книге Льва Толстого \xabВоскресение\xbb",date:"2 августа",employer:"michaskruzelka",price:"по\xa0договорённости",responses:"24"},{title:"3D персонаж бренда",date:"2 августа",employer:"elena.barkhvits",price:"по\xa0договорённости",responses:"2"}].map(t=>`
		<li class="jobs-list__item">
			<a class="jobs-list__link" href="#">
				<div class="jobs-list__title">${t.title}</div>
				<div class="jobs-list__price">Оплата: <span>${t.price}</span></div>
				<div class="jobs-list__date">Дата: <span>${t.date}</span></div>
				<!--<div class="jobs-list__employer">${t.employer}</div>-->
				<div class="jobs-list__responses">Количество откликов: <span>${t.responses}</span></div>
			</a>
		</li>
  `);g&&(g.innerHTML=h.join(""));