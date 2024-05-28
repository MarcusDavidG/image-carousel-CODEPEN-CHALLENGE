function changeImage(thumbnail) {
  const mainImage = document.getElementById("currentImage");
  const tempSrc = mainImage.src;

  // Swap the main image src with the clicked thumbnail src
  mainImage.src = thumbnail.src;
  thumbnail.src = tempSrc;
}
