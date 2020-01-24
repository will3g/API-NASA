// https://api.nasa.gov/planetary/apod?api_key=J2bmLrlUbNdxgPBQqkvNMpl4uIP1mE52WYrpuOpq

let list = [
    'https://api.nasa.gov/planetary/apod?api_key=J2bmLrlUbNdxgPBQqkvNMpl4uIP1mE52WYrpuOpq', 
    'https://images-api.nasa.gov/search?q=all%2019&description=planets%20landing&media_type=image', 
    'https://images-api.nasa.gov/search?q=apollo%2019&description=moon%20landing&media_type=image',
    'https://images-api.nasa.gov/search?q=nebula&media_type=image',
    'https://images-api.nasa.gov/search?q=black-hole&media_type=image',
    'https://images-api.nasa.gov/search?q=telescope&media_type=image',
    'https://images-api.nasa.gov/search?q=comets&media_type=image',
    'https://images-api.nasa.gov/search?q=falcon-heavy&media_type=image',
    'https://images-api.nasa.gov/search?q=curiosity&media_type=image',
    'https://images-api.nasa.gov/search?q=comets&media_type=image'
];

function render(nameTagImg, nameTagTitle, jsonImage, jsonTitle) {
    let img = document.getElementById(nameTagImg);
    let title = document.getElementById(nameTagTitle);

    img.style.background = `url(${jsonImage})`;
    img.style.backgroundRepeat = 'no-repeat';
    img.style.backgroundSize = 'cover';
    img.style.filter = 'brightness(1.5) contrast(1.2)';
    img.style.backgroundPosition = 'center, center';
    title.appendChild(document.createTextNode(jsonTitle));
}

let random = function(min, max) {
    if (min==null && max==null) return 0;    
       
    if (max == null) max = min; min = 0;

    return min + Math.floor(Math.random() * (max - min + 1));
};

function content(JSON, item, index = 0) {
	const news = JSON.collection.items[item];
	return {
		'img': news.links[index].href,
		'photographer': news.data[index].photographer,
		'location': news.data[index].location,
		'keywords': news.data[index].keywords,
		'description': news.data[index].description,
		'title': news.data[index].title
	}
}

function selectArticle(JSON) {
    const total = JSON.collection.items.length;
	const item = random(0, total);
    return content(JSON, item);
}

function request(indexURL, imgID, txtID) {
    fetch(list[indexURL])
        .then(res => res.json())
        .then(res => {
            const article = selectArticle(res);
            render(imgID, txtID, article.img, article.title)
        });
}

const req = (() => { // Foto do dia
    fetch(list[0])
        .then(res => res.json())
        .then(res => { 
            const image = res.url;
            const title = res.title;
            render('pod-img', 'pod-txt', image, title);
        });
})();

(() => request(7, 'content-img-1', 'content-txt-1'))();

(() => request(8, 'content-img-2', 'content-txt-2'))();

(() => request(3, 'content-img-3', 'content-txt-3'))();

(() => request(9, 'content-img-4', 'content-txt-4'))();

(() => request(3, 'content-img-5', 'content-txt-5'))();

(() => request(6, 'content-img-6', 'content-txt-6'))();

(() => request(4, 'content-img-7', 'content-txt-7'))();

(() => request(5, 'content-img-8', 'content-txt-8'))();

(() => request(1, 'content-img-9', 'content-txt-9'))();