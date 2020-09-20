const quoteDots = document.querySelectorAll(".dots i");

quoteDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    quoteDots.forEach((dots, index) => {
      dots.classList.add("far");
      dots.classList.remove("fas");
    });

    e.target.classList.add("fas");
  });
});
