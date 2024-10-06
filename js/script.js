const buttons = document.querySelectorAll('.button');
let popupCount = 0; // Açılan pop-up sayısını takip etmek için

const menuButton = document.getElementById('menu-button');
const menuContainer = document.getElementById('menu-container');
const closeMenu = document.getElementById('close-menu');

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    menuContainer.classList.remove('active'); // Kapatmak için 'active' class'ını kaldır
});

buttons.forEach(button => {
    const content = button.querySelector('.content');

    button.addEventListener('mouseenter', () => {
        content.innerText = button.getAttribute('data-text'); // data-text içeriğini al
        content.style.opacity = 1; // Metni görünür yap
    });

    button.addEventListener('mouseleave', () => {
        content.innerText = ""; // Fare butondan ayrıldığında metni temizle
        content.style.opacity = 0; // Metni gizle
    });
});
