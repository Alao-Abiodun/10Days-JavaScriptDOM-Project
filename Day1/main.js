const wrapper = document.querySelector('.wrapper');
const headingOne = document.querySelector('h1');
const headingTwo = document.querySelector('h2');
const list = document.querySelectorAll('li');
const year = document.querySelector('span');

wrapper.style.textAlign = 'center';


var dateElement = document.createElement('div');
dateElement.textContent = `August 3, 2020 10:52:46`
dateElement.style.textDecoration = 'none';
dateElement.style.paddingTop = '10px';
dateElement.style.width = '250px';
dateElement.style.height = '40px';
dateElement.style.fontSize = '18px';
dateElement.style.margin = '10px auto';
const changeDateElementBackground = () => {
    setInterval(() => {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        let rgbValues = `rgb(${R},${G},${B})`;
        dateElement.style.backgroundColor = rgbValues
    }, 1000);
}
changeDateElementBackground();

headingTwo.appendChild(dateElement);

const changeColor = () => {
    setInterval(() => {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        let rgbValues = `rgb(${R},${G},${B})`;
        year.style.color = rgbValues
    }, 1000);
}
changeColor();

list.forEach((li, i) => {
    li.style.width = '700px';
    li.style.height = '40px'
    li.style.margin = `10px auto`
    li.style.padding = '15px 0 0 15px'
    li.style.textAlign = 'center'
    li.style.textAlign = 'left'
    li.style.listStyle = 'none';
    // li.style.backgroundColor = 'red'
    if (i === 0) {
        li.style.backgroundColor = 'darkgreen';
    } else if (i === 1) {
        li.style.backgroundColor = 'yellow';
    } else {
        li.style.backgroundColor = 'red';
    }
})

headingTwo.style.fontFamily = 'arial sans-serif';
headingTwo.style.fontWeight = 'normal';
headingTwo.style.textDecoration = 'underline';





