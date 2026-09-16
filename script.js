// ปีปัจจุบัน
document.getElementById("year").textContent = new Date().getFullYear();

// Animation เมื่อเลื่อนหน้าจอ
const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// Contact form
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับโดยเร็วที่สุด");
    form.reset();
  });
}
