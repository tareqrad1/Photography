"use strict";
// ============== navbar ===============
let links = document.querySelectorAll('.collapse ul > li > a');
links.forEach((links) => {
    links.addEventListener('click',() => {
        links.style.color = 'white';
    });
});

const str = 'NSCODE YT GALLARY PHOTO NOW TO Y';
const text = document.querySelectorAll('#text')[0];
for(let i =0; i<str.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = str[i];
    text.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
}
const textt = document.querySelectorAll('#text')[1];
for(let i =0; i<str.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = str[i];
    textt.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
}

    // start the numberCounter
    let numbers = document.querySelectorAll('.num');
    let sec = document.querySelector('.secTow');
    let started = false; // Function Started ? No

    window.onscroll = function() {
        if (window.scrollY >= sec.offsetTop - 100) {
            if(!started) { //لسا مشتغلتش ف شغلهالي
                numbers.forEach((ele) => {
                    startCounter(ele);
                });
            }
            started = true; //غير هيك شغاله
        }
        
        function startCounter(ele) {
            let goal = ele.dataset.num; //هتلي ياها وخزنها بمتغير
            let counter = setInterval(() => {
                ele.textContent++;
                if(ele.textContent === goal) {
                    clearInterval(counter);
                }
            },3000 / goal);
    };
}

// start the generate photo
let li = document.querySelectorAll('.secThree .col-two .choose ul > li');
let arr = Array.from(document.querySelectorAll('.secThree .col-one > img'));

li.forEach((li) => {
    li.addEventListener('click',active);
    li.addEventListener('click',show);
})

function active() {
    li.forEach((li) => {
        this.classList.add('active');
        li.classList.remove('active');
    });
}
function show() {
    arr.forEach((ele) => {
        ele.style.display = 'none';
    });
    let dataset = document.querySelectorAll(this.dataset.photo);
    dataset.forEach((data) => {
        data.style.display = 'block';
    });
}

// start the location
const iconLocation = document.getElementById('icon');
const box = document.querySelector('.secMap .row .imges .location');
const close = document.getElementById('close');

iconLocation.onclick = function() {
    box.style.display = 'block';
};
close.onclick = function() {
    box.style.display = 'none';
};
