document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const skills = document.querySelectorAll('.skill-level');
function animateSkills() {
  const trigger = window.innerHeight - 100;
  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    if (top < trigger) { skill.style.width = skill.getAttribute('data-width'); }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

const heroText = document.querySelector('.hero-content');
const heroParagraphs = heroText.querySelectorAll('p');
const heroBtn = heroText.querySelector('.btn');
const heroImage = document.querySelector('.hero-image img');
window.addEventListener('load', () => {
  heroText.style.animationPlayState = 'running';
  heroParagraphs.forEach((p, i) => { p.style.animationPlayState = 'running'; });
  heroBtn.style.animationPlayState = 'running';
  heroImage.style.animationPlayState = 'running';
});
