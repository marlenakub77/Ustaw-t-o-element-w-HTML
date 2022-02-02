const setBackground = () => {
    let firstParagraf = document.querySelector(`.first`);
    let lastParagraf = document.querySelector(`.last`);  

    firstParagraf.classList.add('bg-red');
    lastParagraf.classList.add('bg-yellow');
}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackground);


