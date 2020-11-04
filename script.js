const clickDiv = document.getElementById('clicky');
const clickableButton = clickDiv.querySelector('button');

clickableButton.addEventListener("click", logEvent);

function logEvent(e) {
    clickableButton.innerText = e.type;
    clickableButton.removeEventListener('click',logEvent);
    console.log(e.type)
}





