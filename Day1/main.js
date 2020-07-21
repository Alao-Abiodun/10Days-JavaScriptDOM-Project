const wrapper = document.querySelector('.wrapper');
const headingOne = document.querySelector('h1');
const headingTwo = document.querySelector('h2');
const list = document.querySelectorAll('li');

wrapper.style.textAlign = 'center';
list.forEach(li => {
    li.style.listStyle = 'none';
})

