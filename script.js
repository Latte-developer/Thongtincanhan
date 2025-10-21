window.addEventListener('load', () => {
  const welcome = document.getElementById('welcome-screen');
  setTimeout(() => {
    welcome.classList.add('hidden');
  }, 2500);
});