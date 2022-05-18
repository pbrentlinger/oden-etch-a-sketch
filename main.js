// Create a webpage with a 16x16 grid of square divs.
//     Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
//     It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
// There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
//     float/clear
// inline-block
// flexbox
// CSS Grid  - https://css-tricks.com/snippets/css/complete-guide-grid/

// todo: make a 16x16 grid of divs

const sketch = document.getElementById("etch_a_sketch");

function makeGrid(size){
//    take user input at size of grid limited to 100 x 100
    for (let divs = 0; divs < size; divs++){
        const newDiv = document.createElement("div");
        newDiv.className("pixel");
    }
}