const images = [
  'img/background/alunos1.png',
  'img/background/alunos2.png',
  'img/background/alunos3.png',
];

let currentImageIndex = 0;

function changeImage() {
  const imaElement = document.getElementById('ima');
  currentImageIndex = (currentImageIndex + 1) % images.length; // Alterna entre os índices
  imaElement.src = images[currentImageIndex];
}

setInterval(changeImage, 10000); // Troca a cada 10 segundos
