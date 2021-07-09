import './sass/main.scss';
let timeOutId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const button = document.querySelector(".js-button");
button.addEventListener("click", changeRandomColor);

function changeRandomColor(e) {
    console.log(e.target.dataset)
    if(e.target.dataset.action === "start"){
        timeOutId = setInterval(() => {
          document.body.style.backgroundColor = getRandomHexColor()}, 1000);
          e.target.disabled = true; }
          else {
            clearInterval(timeOutId);
            button.firstElementChild.disabled = false;
          }
    }