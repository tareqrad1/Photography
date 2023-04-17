const Option = {
    root:null,
}
const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
},Option);
const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => Observer.observe(el));

const slideleft = document.querySelectorAll('.slide-left');
slideleft.forEach((el) => Observer.observe(el));

const slidebottom = document.querySelectorAll('.slide-bottom');
slidebottom.forEach((el) => Observer.observe(el));

const slidetop = document.querySelectorAll('.slide-top');
slidetop.forEach((el) => Observer.observe(el));

const hiddenb = document.querySelectorAll('.hiddenb');
hiddenb.forEach((el) => Observer.observe(el));
