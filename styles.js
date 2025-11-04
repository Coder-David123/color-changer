const button = document.getElementById("btn");

//console.log(button);

//Function to generate a random color

//declare the function
function getRandomColor() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue}`;
}

//Event Listeners
button.addEventListener('click', function () {
    const Color = getRandomColor();
    document.body.style.backgroundColor = Color;
})