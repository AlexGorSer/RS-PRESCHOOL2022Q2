const reviu = "Самооценка в консоль:\n 1. Вёрстка валидная +10 \n 2. Вёрстка семантическая +20 \n 3. Вёрстка соответствует макету +48\n 4. Требования к css + 12\n 5. Интерактивность, реализуемая через css +20 ВНИМАНИЕ!!! Плавная прокрутка работает только в Mozilla, черт его знает почему в хроме не работает, но свойство прописано в теге <html>. \n Оценка:120\\100";

// alert('Приет, я не успеваю, не могли бы вы проверить перед дедлайном? Заранее спасибо!')
console.log(reviu);

const burgerButton = document.querySelector('.burger__button'),
      burgerMenu = document.querySelector('.burger__menu'),
      burgerConteiner = document.querySelector('.burger__conteiner'),
      burgerCloseButton = document.querySelector('.burger__close-button ');


//Burger

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger__menu-active');
    burgerConteiner.classList.toggle('burger__menu-active');

});

burgerCloseButton.addEventListener('click', () => {
    burgerMenu.classList.remove('burger__menu-active');
    burgerConteiner.classList.remove('burger__menu-active');
});

burgerConteiner.addEventListener('click', (e) => {
    if (e.target === burgerConteiner || e.target === e.target.closest('.navigation__menu') || e.target.closest('.burger__menu-active')) {
        burgerMenu.classList.remove('burger__menu-active');
        burgerConteiner.classList.remove('burger__menu-active');
    }
})

//Pop-up login

const buttonLogin = document.querySelector('.button__login'),
        loginpopUp = document.querySelector('.login'),
        loginReg = document.querySelector('.login__register'),
        loginSignIn = document.querySelector('.login__sign-in'),
        loginCreate = document.querySelector('.login__create'),
        register = document.querySelector('.register'),
        loginForm = document.querySelectorAll('.login__form'),
        navAccount = document.querySelector('.account');


buttonLogin.addEventListener('click', (e) => {
        loginpopUp.classList.add('login-active');
});

navAccount.addEventListener('click', (e) => {
    loginpopUp.classList.add('login-active');
});



loginpopUp.addEventListener('click', (e) => {
    if (e.target === loginpopUp) {
        loginpopUp.classList.remove('login-active');
    }
});

loginReg.addEventListener('click', () => {
    loginSignIn.classList.toggle('hide');
    loginCreate.classList.toggle('active');
});

register.addEventListener('click', () => {
    loginCreate.classList.toggle('active');
    loginSignIn.classList.toggle('hide');
});

loginForm.forEach((loginForm) => {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
    
        const email = formData.get('email');
        const pass = formData.get('password');
    
        alert(`Ваш email ${email}. Ваш пароль ${pass}.`);
    })
})


