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


//Create a webpage with a 16x16 grid of square divs using JavaScrip

innerDisplay = (size) => {
    let display = document.querySelector(".display");


    display.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    display.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {

        let squares = document.createElement('div');
//Set up a “hover” effect so that the grid divs change color
//when your mouse passes over them. changing the div’s background color using JavaScript
        squares.addEventListener('mouseover', () => {
            squares.style.backgroundColor = 'black';
        })
//the existing grid should be removed and a new grid should be generated in the same total space as before 
        display.insertAdjacentElement('beforeend', squares);
    }
}


//Add a button to the top of the screen that will send
//The user a popup asking for the number of squares per side for the new grid
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

