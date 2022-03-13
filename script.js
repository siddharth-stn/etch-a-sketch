const container = document.querySelector(".container");
const gridSize = document.querySelector(".gridSize");
const clearBtn = document.querySelector(".clearBtn");
const colorPen = document.querySelector(".colorPicker");
const colorBtn = document.querySelector(".colorBtn");
const rainbowPicker = document.querySelector(".rainbowPicker");
let childDivsArray;
let pickedColor = "#000000";

rainbowPicker.addEventListener('click', function () {
    const rainbowColor = window.getComputedStyle(rainbowPicker).getPropertyValue('background-image');
    pickedColor = rainbowColor;
});


//to remove all items from the container (rest the container)
function clearGrid () {
    container.innerHTML = "";
}

clearBtn.addEventListener('click', function () {
    container.innerHTML = "";
    gridSize.value = null;
});

gridSize.addEventListener('change', function (e) {
    if (Number(e.target.value) < 50 ) {
        e.target.value = 50;
    } else if (Number(e.target.value) > 100) {
        e.target.value = 100;
    }
    clearGrid(); //clear remove child elements from container
    const containerWidth = container.clientWidth;
    
    const cellWidth = Math.floor(containerWidth/e.target.value);
    const noOfCells = e.target.value * e.target.value;

    // create and append divs to the container according to number entered by the user
    for (let i = 0; i < noOfCells; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${cellWidth}px`;
        container.appendChild(cell);
    }

    childDivsArray = Array.from(container.children);

    // drawing on the board function call
    // childDivsArray.forEach(div => div.addEventListener('mousedown', etchOnBoard));
    container.addEventListener('mousedown', etchOnBoard);
});

//to display the picked color as a background of the color picker and store the color value in pickedColor variable
colorPen.addEventListener('change', function (e) {
    pickedColor = e.target.value;
    colorBtn.style["background-image"] = `linear-gradient(${pickedColor}, ${pickedColor}`;
});

//function to etch on board cells
function etchOnBoard (event) {
    if (event.target.className !== "container") {
        //to continue etching over the board until mouse button is released
        container.addEventListener('mouseover', function _mouseover (div) {
            //to remove etching on board when mouse button is released
            container.addEventListener('mouseup', function () {
                container.removeEventListener('mouseover', _mouseover);
            });
            if (div.target.className !== "container") {
                if (pickedColor.length > 7) {
                    div.target.style["background-image"] = pickedColor;
                } else {
                    div.target.style["background-image"] = `linear-gradient(${pickedColor}, ${pickedColor}`;
                }
            }
        });
    }
}