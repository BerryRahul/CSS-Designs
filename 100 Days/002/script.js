const hamMenu = docutment.querySelector('.nav-ham-menu')

const offScreenMenu = docutment.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
}
)