// Create a webpage with a 16x16 grid of square divs.
//     Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
//     It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// There are several different ways to make the divs appear as a grid (versus just one on each line).
// Feel free to use any or play with each of them:
//     float/clear
// inline-block
// flexbox
// CSS Grid  - https://css-tricks.com/snippets/css/complete-guide-grid/


const sketch = document.getElementById("etch_a_sketch");

function makeGrid(size){
//    take user input at size of grid limited to 100 x 100
    // for the size I want to loop over a loop the size of the grid
    for (let rows = 0; rows < size; rows++){
        const newRow = document.createElement("div");
        newRow.className = "gridRow";

        for (let divs = 0; divs < size; divs++){
            const newCell = document.createElement("div");
            newCell.className = "cell";
            newRow.appendChild(newCell);
        }
        sketch.appendChild(newRow);
    }
    
    sketch.addEventListener("mouseover", function (e){
       if(e.target && e.target.matches("div.cell")) {
           // console.log("click");
           e.target.classList.add("line");
       } 
    });
    
}

function promptGrid() {
    let gridSize = prompt("Please enter a number (less than 100) for the size of the grid you'd like");
    
    if (isNaN(gridSize)){
        console.log("Not a number");
    } else if (gridSize > 100) {
        console.log("Too large a number")
    } else {
        sketch.innerHTML = "";
        makeGrid(gridSize);
    }
}




