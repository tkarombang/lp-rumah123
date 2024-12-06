// IMAGE HERO AUTO CHANGE
const images = [
  '../img/hero.jpg',
  '../img/hero2.jpg',
  '../img/hero3.jpg',
]
let currentIndex = 0
function changeImage() {
  const heroSection = document.getElementById('hero');
  heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length
}
setInterval(changeImage, 5000)

const downBtn = document.querySelector('#down-btn');
const optSelect = document.querySelector('.opt-select');

downBtn.addEventListener('click', function () {
  optSelect.classList.toggle('active')
})