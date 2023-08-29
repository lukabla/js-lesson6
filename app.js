const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

function mainsSlider() {
  const slide = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let activeIndex = 0;

  function renderSlides() {
    slide.forEach((slide, index) => {
      if (activeIndex === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  renderSlides();

  function showNext() {
    if (activeIndex === slide.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlides();
  }
  function showPrev() {
    if (activeIndex === 0) {
      activeIndex = slide.length - 1;
    } else {
      activeIndex--;
    }
    renderSlides();
  }
  prev.addEventListener("click", showPrev);
  next.addEventListener("click", showNext);

  let setIntervalId = null;

  function startAutoSlider() {
    setIntervalId = setInterval(showNext, 1000);
  }
  startAutoSlider();
  const sliderWraper = document.querySelector(".slider-wraper");

  sliderWraper.addEventListener("mouseenter", () => {});

  //   startAutoSlider();

  document.addEventListener("keyup", (e) => {
    console.log(e);
    if (e.code === "ArrowRight") {
      showNext();
    }
    if (e.code === "ArrowLeft") {
      showPrev();
    }
  });
}
mainsSlider();
