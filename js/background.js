const images = ["0","1","2","3","4"];

const randomIdx = Math.floor(Math.random() * (images.length));
const todaysImg = `${images[randomIdx]}.jpg`;
const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImg}`;
document.body.style.backgroundImage = `url(${bgImage.src})`;