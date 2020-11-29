const navAppend = () => {
    const burger = document.querySelector(".burger");
    const navbar = document.querySelector(".navbar-list");

    burger.addEventListener('click', () =>{
        navbar.classList.toggle('addCla');
    });
}
navAppend();