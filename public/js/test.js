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
                     const image = res.collection.items[0].links[0].href;
                     const title = res.collection.items[0].data[0].title;
                     render('image-three', 'title-three', image, title);
                });
   })();

const req4 = (() => {
       fetch(list[3])
                .then(res => res.json())
                .then(res => { 
                       for (const item in res.collection.items) {
                              if (res.collection.items.hasOwnProperty(item)) {
                                     const news = res.collection.items[item];
                                   //   console.log('imagem: '+news.links[0].href);
                                   //   console.log('fotógrafo: '+news.data[0].photographer);
                                   //   console.log('local: '+news.data[0].location);
                                   //   console.log('keywords: '+news.data[0].keywords);
                                   //   console.log('descrição: '+news.data[0].description);
                                   //   console.log('-----------------------');
                              }
                       }
                });
   })();