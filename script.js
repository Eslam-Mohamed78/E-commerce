const inputField = document.getElementById("inputField");

const searchIcon = document.getElementById("searchIcon");

const carousel = document.getElementById("carouselProducts");

const carouselInner = carousel.querySelector(".carousel-inner");

const carouselItems = carouselInner.querySelectorAll(".carousel-item");

searchIcon.addEventListener("click", () => {
  const searchQuery = inputField.value.trim().toLowerCase();

  carouselItems.forEach((item) => {
    console.log(item.querySelector(".info"));
    const productName = item.querySelector(".info a").textContent;

    if (productName.toLowerCase().startsWith(searchQuery)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
