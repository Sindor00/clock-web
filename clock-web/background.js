function applySavedBackground() {
  const savedBg = localStorage.getItem("selectedBackground");
  if (savedBg) {
    document.body.style.background = savedBg;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
}
applySavedBackground();
