import "./index.html";
import "./styles/reset.css";
import "swiper/css/bundle";
import "./styles/text.css";
import "./styles/vars.css";
import "./styles/layout.css";
import "./styles/header.css";
import "./styles/style.css";
import "./styles/section.css";
import "./styles/buttons.css";
import "./styles/feedback-swiper.css";
import "./styles/footer.css";
import starFilled from "./assets/icons/star_filled.svg";
import star from "./assets/icons/star.svg";
import Swiper from "swiper/bundle";

const feedbackFromPeople = [
  {
    id: 1,
    rate: 4,
    title: "We had an amazing stay at the Guest House!",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    author: "Nate Davidsson",
  },
  {
    id: 2,
    rate: 5,
    title: "Best vacation ever!",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    author: "Laura Paulie",
  },
  {
    id: 3,
    rate: 5,
    title: "Best vacation!",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    author: "Nick Phlie",
  },
  {
    id: 4,
    rate: 4,
    title: "Very good!",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    author: "Sara Norton",
  },
];

const possibleRate = [1, 2, 3, 4, 5];

// Feedback slider

const feedbackBlock = document.getElementById("feedback");

function renderRateStars(rate) {
  const test = possibleRate.map((num) =>
    num <= rate
      ? `<svg><use href="${starFilled}#icon" /></svg>`
      : `<svg><use href="${star}#icon" /></svg>`
  );

  return test.join("");
}

function renderFeedbackCard() {
  feedbackFromPeople.forEach((feedback) => {
    const feedbackCard = `
            <div class="swiper-slide feedback-card flex-col">
                <div class="feedback-card-header flex-col">
                    <div class="feedback-rate flex-row">
                        ${renderRateStars(feedback.rate)}
                    </div>
                    <p class="heading-xs">${feedback.title}</p>
                </div>
                <p class="body-md">
                    ${feedback.feedback}
                </p>
                <p class="feedback-card-author-info body-md">
                    ${feedback.author}
                </p>
            </div>
        `;
    feedbackBlock.insertAdjacentHTML("beforeend", feedbackCard);
  });
}

renderFeedbackCard();

const swiper = new Swiper(".swiper-init", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Burger menu

const burgerBtn = document.getElementById("burger-btn");
const navMenu = document.getElementById("nav-menu");

burgerBtn.addEventListener("click", () => {
  if (!burgerBtn.classList.contains("burger-button-open")) {
    burgerBtn.classList.add("burger-button-open");
    navMenu.classList.add("nav-mobile");
  } else {
    burgerBtn.classList.remove("burger-button-open");
    navMenu.classList.remove("nav-mobile");
  }
});
