
// HM1

const clickText = document.querySelector('.homework1 p');
clickText.textContent = 'Hello world'
const clickButton = document.querySelector('.homework1 button');
clickButton.textContent = 'Hello people'

// HM2

let holaimages = document.getElementById('hola');
holaimages.src = './img/images.jpg';

// HM3

const linkgoogle = document.getElementById('google');
const imageyoutube = document.getElementById('yt');
linkgoogle.href = 'https://www.youtube.com/';
imageyoutube.alt = 'youTube';

// HM4

const list = document.querySelectorAll('.listfood li');
const firstchild = list[0];
firstchild.textContent = 'burger';
