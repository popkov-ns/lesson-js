'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a');

const deleteElement = (e) => {
    e.target.remove();
}

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
})

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});