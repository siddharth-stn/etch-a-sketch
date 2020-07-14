const containerDiv = document.querySelector('#container');

let count = 1;

let noOfDivs = "";
const gridBtn = document.getElementById("gridBtn");

gridBtn.addEventListener("click", () => {
    if (noOfDivs > 0) {
        count = 1; 
        const div = document.querySelectorAll("div");
        div.forEach(element => {
            if (div[0] != element) {
                containerDiv.removeChild(element);
            }
        });
    }
    noOfDivs = prompt("How many Squares Per Side?");
    containerDiv.style.gridTemplateRows = `repeat(${noOfDivs}, 1fr)`;
    containerDiv.style.gridTemplateColumns = `repeat(${noOfDivs}, 1fr)`;
    while (count <= noOfDivs*noOfDivs) { 
        const div = document.createElement(`div`);
        div.id = `sq${count}`;
        div.classList.add("childDiv");
        containerDiv.appendChild(div);
        count += 1;
    }
});

containerDiv.addEventListener("mouseover", (event) => {
    if (event.target.id  != "container") {
        event.target.style.backgroundColor = "red";
    }
});
       
containerDiv.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "";
});  





  