//variables decleration

let items = document.querySelectorAll(".slider .list .item");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let thumbnail = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
console.log(countItem);
let activeItem = 0;

nextBtn.onclick = function () {
  //   alert("c");
  activeItem = activeItem + 1;

  if (activeItem >= countItem) {
    activeItem = 0;
  }
  showSlider();
};

prevBtn.onclick = function () {
  activeItem = activeItem - 1;
  if (activeItem < 0) {
    activeItem = countItem - 1;
  }
  showSlider();
};

const showSlider = () => {
  let activeOldItem = document.querySelector(".slider .list .item.active");
  let activeOldThumbnail = document.querySelector(".thumbnail .item.active");

  activeOldItem.classList.remove("active");
  activeOldThumbnail.classList.remove("active");

  items[activeItem].classList.add("active");
  thumbnail[activeItem].classList.add("active");
};

thumbnail.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeItem = index;
    showSlider();
  });
});

// setInterval(() => {
//   activeItem = activeItem + 1;
//   if (activeItem >= countItem) {
//     activeItem = 0;
//   }
//   showSlider();
// }, 5000);
