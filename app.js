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
  // const next = document.querySelector(".next");
  // const prev = document.querySelector(".prev");

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
  // prev.addEventListener("click", showPrev);
  // next.addEventListener("click", showNext);

  let setIntervalId = null;

  function startAutoSlider() {
    const setIntervalId = setInterval(showNext, 5000);
  }
  startAutoSlider();
  const sliderWraper = document.querySelector(".slider-wraper");

  sliderWraper.addEventListener("mouseleave", startAutoSlider);
  // sliderWraper.addEventListener("mouseenter", clearInterval(se));

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

const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
