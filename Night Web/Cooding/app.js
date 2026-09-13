document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  let current = 0;

  const btnPrev = document.querySelector('.prev-btn');
  const btnNext = document.querySelector('.next-btn');
  const indexEl = document.getElementById('current-index');
  const totalEl = document.getElementById('total-index');

  totalEl.textContent = total;
  update();

  btnPrev.addEventListener('click', () => {
    current = (current - 1 + total) % total;
    update();
  });
  btnNext.addEventListener('click', () => {
    current = (current + 1) % total;
    update();
  });

  function update() {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === current);
    });
    indexEl.textContent = current + 1;
  }
});


