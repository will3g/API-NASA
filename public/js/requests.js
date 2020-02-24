const baseURL = 'http://localhost:3333';

const list = [
    `${baseURL}/apod`,                //0
    `${baseURL}/nebula`,              //1
    `${baseURL}/comets`,              //2
    `${baseURL}/telescope`,           //3
    `${baseURL}/curiosity`,           //4
    `${baseURL}/black-hole`,          //5
    `${baseURL}/all-planets`,         //6
    `${baseURL}/falcon-heavy`,        //7
    `${baseURL}/apollo-50-years`,     //8
]

let data = [];

function render(nameTagImg, nameTagTitle, jsonImage, jsonTitle) {
    let img = document.getElementById(nameTagImg);
    let title = document.getElementById(nameTagTitle);

    img.style.background = `url(${jsonImage})`;
    img.style.backgroundRepeat = 'no-repeat';
    img.style.backgroundSize = 'cover';
    img.style.filter = 'contrast(1.5)';
    img.style.backgroundPosition = 'center, center';
    title.appendChild(document.createTextNode(jsonTitle));
}

function request(indexURL, imgID, txtID) {
    fetch(list[indexURL])
      .then(res => res.json())
      .then(res => {
        render(imgID, txtID, res.img, res.title);
        data.push(res);
      });
}

(() => request(7, 'content-img-1', 'content-txt-1'))();

(() => request(4, 'content-img-2', 'content-txt-2'))();

(() => request(1, 'content-img-3', 'content-txt-3'))();

(() => request(2, 'content-img-4', 'content-txt-4'))();

(() => request(0, 'pod-img', 'pod-txt'))();

(() => request(1, 'content-img-5', 'content-txt-5'))();

(() => request(2, 'content-img-6', 'content-txt-6'))();

(() => request(5, 'content-img-7', 'content-txt-7'))();

(() => request(3, 'content-img-8', 'content-txt-8'))();

(() => request(6, 'content-img-9', 'content-txt-9'))();
