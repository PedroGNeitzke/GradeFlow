lucide.createIcons();

const profileBtn = document.querySelector('.profile-btn');
const dropdown = document.querySelector('.dropdown');

profileBtn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});