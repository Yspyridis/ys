document.querySelectorAll('nav a, .scroll-b a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    const offset = -60;
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
});
