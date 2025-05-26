function alternarTamanho() {
  const atual = parseInt(window.getComputedStyle(document.body).fontSize);

  if (atual === 16) {
    document.body.style.fontSize = "32px";
  } else {
    document.body.style.fontSize = "16px";
  }
}
