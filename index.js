import{a as d,S as u,i as l}from"./assets/vendor-ChM9eTe_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const f="49113920-f9af0cc3a936c3f1f6e808981",m="https://pixabay.com/api/";function h(i){return d.get(m,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data).catch(r=>{throw console.error("Error fetching data:",r),r})}let c=null;function p(i=[]){const r=document.querySelector(".gallery");r.innerHTML="";const a=i.map(t=>`
      <div class="card-container">
        <div class="card">
          <a href="${t.largeImageURL}">
            <img class="card-image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="card-body">
            <div class="card-item">
              <h4>Likes</h4><p>${t.likes}</p>
            </div>
            <div class="card-item">
              <h4>Views</h4><p>${t.views}</p>
            </div>
            <div class="card-item">
              <h4>Comments</h4><p>${t.comments}</p>
            </div>
            <div class="card-item">
              <h4>Downloads</h4><p>${t.downloads}</p>
            </div>
          </div>
        </div>
      </div>
    `).join("");r.innerHTML=a,c?c.refresh():c=new u(".gallery a")}function y(){const i=document.querySelector(".gallery");i.innerHTML=""}const n={form:document.querySelector(".form"),searchQueryInput:document.querySelector(".form-input"),imagesContainer:document.querySelector(".gallery"),button:document.querySelector(".form-button"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",i=>{i.preventDefault();const r=n.searchQueryInput.value.trim();if(!r){l.error({messageColor:"#FAFAFB",iconUrl:"./img/bi_x-octagon.svg",iconColor:"white",message:"Please enter a search word!",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"});return}y(),n.loader.style.display="inline-block",h(r).then(a=>{if(a.hits.length===0)throw new Error("No images found for this query");p(a.hits)}).catch(a=>{l.error({messageColor:"#FAFAFB",iconUrl:"./img/bi_x-octagon.svg",iconColor:"white",message:"Sorry, there are no images matching</br> your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"})}).finally(()=>{n.loader.style.display="none"})});
//# sourceMappingURL=index.js.map
