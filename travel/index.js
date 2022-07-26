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
        if (email === '') {
            alert('Введите email');
        } else if (pass === ''){
            alert('Введите password');
        } else {
            alert(`Ваш email ${email}.\nВаш пароль ${pass}.`);
        }
        
    })
});


// Slider


const leftArrow = document.querySelector('.arrow-left'),
      rightArrow = document.querySelector('.arrow-right'),
      destinationSlide = document.querySelectorAll('.destinations__slide'),
      destcopButtons = document.querySelectorAll('.destcop'),
      mobileButtons = document.querySelectorAll('.incard'),
      slideConteiner = document.querySelector('.destinations__cards');



destcopButtons[0].addEventListener('click', () => {
    slideConteiner.style.transform = `translate(${(imgSlide + 60)}px)`
    destcopButtons[0].classList.add('nav-button-active');
    destcopButtons[1].classList.remove('nav-button-active');
    destcopButtons[2].classList.remove('nav-button-active');
 })

 destcopButtons[1].addEventListener('click', () => {
    slideConteiner.style.transform = `translate(${(0)}px)`
    destcopButtons[0].classList.remove('nav-button-active');
    destcopButtons[1].classList.add('nav-button-active');
    destcopButtons[2].classList.remove('nav-button-active');
 })

 destcopButtons[2].addEventListener('click', () => {
    slideConteiner.style.transform = `translate(${-(imgSlide + 60)}px)`
    destcopButtons[0].classList.remove('nav-button-active');
    destcopButtons[1].classList.remove('nav-button-active');
    destcopButtons[2].classList.add('nav-button-active');
 })

 mobileButtons[0].addEventListener('click', () => {
    slideConteiner.style.transform = `translate(${(imgSlide + 60)}px)`
    mobileButtons[0].classList.add('nav-button-active');
    mobileButtons[1].classList.remove('nav-button-active');
    mobileButtons[2].classList.remove('nav-button-active');
 })

 mobileButtons[1].addEventListener('click', () => {
    slideConteiner.style.transform = `translate(${(0)}px)`
    mobileButtons[0].classList.remove('nav-button-active');
    mobileButtons[1].classList.add('nav-button-active');
    mobileButtons[2].classList.remove('nav-button-active');
 })

 mobileButtons[2].addEventListener('click', () => {
    slideConteiner.style.transform = `translate(${-(imgSlide + 60)}px)`
    mobileButtons[0].classList.remove('nav-button-active');
    mobileButtons[1].classList.remove('nav-button-active');
    mobileButtons[2].classList.add('nav-button-active');
 })

let buttonSlideIndex = 1;
let sliderIndex = 0;
let imgSlide = document.querySelector('.destinations__slide-back').clientWidth;

const buttonActiv = function(index) {
    for(button of mobileButtons) {
        button.classList.remove('nav-button-active');
    }
    mobileButtons[index].classList.add('nav-button-active');
}
rightArrow.classList.add('arrow-active');
leftArrow.classList.add('arrow-active');

leftArrow.addEventListener('click', () => {
    buttonSlideIndex--
    sliderIndex--
    // console.log(sliderIndex);
    if (sliderIndex < -1) {
        sliderIndex = destinationSlide.length-2;
    }
    rollSlide();
    buttonActiv(sliderIndex+1);
})

rightArrow.addEventListener('click', () => {
    buttonSlideIndex++
    sliderIndex++
    // console.log(sliderIndex);
    if (sliderIndex >= destinationSlide.length-1) {
        sliderIndex = -1;
    }
    rollSlide();
    buttonActiv(sliderIndex+1);
});


function rollSlide(){
    slideConteiner.style.transform = `translate(${- sliderIndex * (imgSlide + 60)}px)`
}










// leftArrow.addEventListener('click', () => {
//     if (sliderIndex > 0){
//         sliderIndex--;
//         // sliderIndex = destinationSlide.length -1;
//     }
//     console.log(sliderIndex);
//     slideConteiner.style.transform = `translate(${(imgSlide + 60)}px)`
//     // slideConteiner.style.transform = 'translate(-' + sliderIndex * imgSlide +'px)'
// })

// rightArrow.addEventListener('click', () => {  
//     sliderIndex++;
//     if (sliderIndex <= destinationSlide.length){  
        
//     }
//     console.log(sliderIndex);
//     slideConteiner.style.transform = `translate(${-(imgSlide + 60)}px)`
//     // slideConteiner.style.transform = 'translate(-' + sliderIndex * imgSlide +'px)'
// })

// slideConteiner.style.transform = `translateX(${-(imgSlide + 60)}px)`




// alert('Привет, будте добры проверте перед дедлайном, я все еще пытаюсь наладить слайдер, спасибо за понимание')