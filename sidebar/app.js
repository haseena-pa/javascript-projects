const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarToogle = document.querySelector('.sidebar-toggle');

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});

sidebarToogle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});