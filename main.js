document.addEventListener('DOMContentLoaded', function() {
    innerDisplay(16);

    let btnPop = document.querySelector(".popup");
    btnPop.addEventListener('click', () => {
        let size = getSize();
        innerDisplay(size);
    })

    let clear = document.querySelector('.resetbtn');
    clear.addEventListener('click', () => {
        resetBtn();
    })
})



innerDisplay = (size) => {
    let display = document.querySelector(".display");


    display.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    display.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {

        let squares = document.createElement('div');
        squares.addEventListener('mouseover', () => {
            squares.style.backgroundColor = 'black';
        })
        display.insertAdjacentElement('beforeend', squares);
    }
}



getSize = () => {
    let input = prompt('Select the size')
    let message = document.querySelector('h2')
    if(input == ""){
        message.innerHTML = "Please insert a size :";
    }else if((input < 1) || (input > 100)){
        message.innerHTML = "Select a size between 0 to 100 :";
        input = 16;
    }
    return input;
}

resetBtn = () => {
    let btnReset = document.querySelectorAll('div');
    btnReset.forEach((div) => div.style.background = "");
}

