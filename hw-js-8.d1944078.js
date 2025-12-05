let t=document.getElementById("bookmarkInput"),e=document.getElementById("addBookmarkBtn"),a=document.getElementById("bookmarkList"),n=JSON.parse(localStorage.getItem("bookmarks"))||[];function o(){localStorage.setItem("bookmarks",JSON.stringify(n))}function l(t){a.innerHTML=t.map((t,e)=>`<li class="bookmark" data-idx="${e}">
            <a target="_blank" href="${t}">${t}</a>
            <button type="button" class="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
        </li>`).join("")}e.addEventListener("click",()=>{let e=t.value.trim();e&&(n.push(e),t.value="",o(),l(n))}),a.addEventListener("click",t=>{if(t.target.classList.contains("delete")){let e=parseInt(t.target.closest("li").dataset.idx);n.splice(e,1),o(),l(n)}}),l(n);
//# sourceMappingURL=hw-js-8.d1944078.js.map
