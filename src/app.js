const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function saveBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}


addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value) {
        bookmarks.push(value);
        input.value = "";

        saveBookmarks(); 
        renderList(bookmarks);
    }
});

function renderList(array) {
    list.innerHTML = array.map((item, index) => {
        return `<li class="bookmark" data-idx="${index}">
            <a target="_blank" href="${item}">${item}</a>
            <button type="button" class="delete">Видалити</button>
        </li>`;
    }).join("");
}

list.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        const li = event.target.closest("li");
        const index = parseInt(li.dataset.idx); 
        bookmarks.splice(index, 1);
        
        saveBookmarks(); 
        renderList(bookmarks);
    }
});

renderList(bookmarks);
