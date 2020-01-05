// https://api.nasa.gov/planetary/apod?api_key=J2bmLrlUbNdxgPBQqkvNMpl4uIP1mE52WYrpuOpq

let img = document.getElementById('image-two');
let title = document.getElementById('title-two');

const req = (() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=J2bmLrlUbNdxgPBQqkvNMpl4uIP1mE52WYrpuOpq')
             .then(res => res.json())
             .then(res => { 
                    img.style.background = `url(${res.url})`,
                    img.style.backgroundSize = 'contain',
                    img.style.backgroundRepeat = 'no-repeat',
                    img.style.backgroundSize = 'cover';
                    img.style.filter = 'brightness(1.5) contrast(1.2)',
                    title.appendChild(document.createTextNode(res.title))
             });
})();