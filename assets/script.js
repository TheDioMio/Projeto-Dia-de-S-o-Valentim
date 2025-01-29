const naoButton = document.getElementById("nao");
const buttonsContainer = document.querySelector(".buttons");

naoButton.addEventListener("mouseover", () => {
  const containerWidth = buttonsContainer.offsetWidth;
  const containerHeight = buttonsContainer.offsetHeight;

  const randomX = Math.random() * (containerWidth - naoButton.offsetWidth);
  const randomY = Math.random() * (containerHeight - naoButton.offsetHeight);

  naoButton.style.left = `${randomX}px`;
  naoButton.style.top = `${randomY}px`;
});

document.getElementById("sim").addEventListener("click", () => {
    document.body.innerHTML = `
    <h1>🎉 Hehehehe amo-te ❤️</h1>
    <p>Vamos ter um dia dos namorados perfeito meu amor 🥰</p>
    <img src="assets/imagens/OIP.jfif" alt="Imagem botao sim">
  `;
});               

document.getElementById("nao").addEventListener("click", () => {
  document.body.innerHTML = `
  <h1>😡 Não conta. 😡</h1>  
  <p>Não é suposto conseguires clicar neste botão, por isso tenta novamente e REPENSA A TUA ESCOLHA 😡😡😡</p>
  <img src="assets/imagens/gatoenervado.png" alt="Imagem botao nao">
`;
});   

setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animation = 'float 5s ease-in-out';
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 5000);
  }, 500);