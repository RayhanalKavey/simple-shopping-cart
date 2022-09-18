// Image array for banner
const bannerImages = [
  "media/banner-image/banner-img-1.png",
  "media/banner-image/banner-img-2.png",
  "media/banner-image/banner-img-3.png",
];
///Image interval setup
let imgIndex = 0;
const img = document.getElementById("carousal-img");
setInterval(() => {
  if (imgIndex === bannerImages.length) {
    imgIndex = 0;
  }
  const imageLink = bannerImages[imgIndex];
  img.setAttribute("src", imageLink);
  console.log(imageLink);
  imgIndex++;
}, 1000);
