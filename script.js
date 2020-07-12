const containerDiv = document.querySelector('#container');

let count = 1;

while (count <= 256) { //inserted 256 div in the container Div//
    const div = document.createElement(`div`);
    div.id = `sq${count}`;
    div.classList.add("childDiv");
    containerDiv.appendChild(div);
    count += 1;
}
