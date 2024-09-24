const historyBtn = document.getElementById("historyBtn");
const donateBtn = document.getElementById("donateBtn");

const donateSection = document.getElementById("donateSection");
const historySection = document.getElementById("historySection");

historyBtn.addEventListener("click", (e) => {
  historyBtn.classList.add("bg-lime-300");
  historyBtn.classList.add("border-none");
  historySection.classList.remove("hidden");
  donateSection.classList.add("hidden");

  donateBtn.classList.remove("bg-lime-300");
  donateBtn.classList.add("border");
});

donateBtn.addEventListener("click", (e) => {
  donateBtn.classList.add("bg-lime-300");
  donateBtn.classList.add("border-none");
  donateSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  historyBtn.classList.remove("bg-lime-300");
  historyBtn.classList.add("border");
});
