// https://api.nasa.gov/planetary/apod?api_key=J2bmLrlUbNdxgPBQqkvNMpl4uIP1mE52WYrpuOpq

let list = [
    'https://api.nasa.gov/planetary/apod?api_key=J2bmLrlUbNdxgPBQqkvNMpl4uIP1mE52WYrpuOpq', 
    'https://images-api.nasa.gov/search?q=all%2019&description=planets%20landing&media_type=image', 
    'https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image'];

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
    if (min==null && max==null)
    return 0;    
       
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

function content(json, item, index = 0) {
	const news = json.collection.items[item];
	return {
		'img': news.links[index].href,
		'photographer': news.data[index].photographer,
		'location': news.data[index].location,
		'keywords': news.data[index].keywords,
		'description': news.data[index].description,
		'title': news.data[index].title
	}
}

const req = (() => {
    fetch(list[0])
        .then(res => res.json())
        .then(res => { 
            const image = res.url;
            const title = res.title;
            render('image-two', 'title-two', image, title);
        });
})();

const req2 = (() => {
    fetch(list[1])
        .then(res => res.json())
        .then(res => {
            const total = res.collection.items.length;
			const item = random(0, total);
            const obj = content(res, item);
            render('image-three', 'title-three', obj.img, obj.title)
            console.log('---- first request -----');
            console.log(obj.img);
            console.log(obj.title);
            
        });
})();

const req3 = (() => {
    fetch(list[2])
        .then(res => res.json())
        .then(res => { 
			const total = res.collection.items.length;
			const item = random(0, total);
            const obj = content(res, item);
            render('content-random-img', 'content-random-txt', obj.img, obj.title)
            console.log('---- second request -----');
            console.log(obj.img);
            console.log(obj.title);
        });
})();