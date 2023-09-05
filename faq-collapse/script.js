const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const toggleBtn = faq.querySelector(".faq-toggle");
  toggleBtn.addEventListener("click", () => {
    faqs.forEach((i) => {
      if (i == faq) {
        i.classList.toggle("active");
      } else {
        i.classList.remove("active");
      }
    });
  });
});
