
let article = document.querySelectorAll("li[type*='article']");

article.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add("article");
    })
});