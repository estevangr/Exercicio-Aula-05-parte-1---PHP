const imagens = [
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200",
  "https://images.unsplash.com/photo-1516820580870-3f66c730d990?q=80&w=1200",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200",
];
let indice = 0;
function nextSlide() {
  indice = (indice + 1) % imagens.length;
  document.getElementById("carrossel-img").src = imagens[indice];
}
function prevSlide() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  document.getElementById("carrossel-img").src = imagens[indice];
}

document.getElementById("prev-btn").addEventListener("click", prevSlide);
document.getElementById("next-btn").addEventListener("click", nextSlide);

document.getElementById("btn-comprar").addEventListener("click", function () {
  document.getElementById("comprar").scrollIntoView({
    behavior: "smooth",
  });
});

// Removi a função comprar() do JavaScript pois agora o PHP faz isso através do submit do form!
