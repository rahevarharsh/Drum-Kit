var butlist = document.querySelectorAll(".drum");
var limit = document.querySelectorAll(".drum").length;
for (let i = 0; i < limit; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        sound(this.innerHTML)
        pressedButtonCss(this.innerHTML)
    })

}

document.addEventListener("keypress", function (event) {
    sound(event.key)
    pressedButtonCss(event.key)
})

function sound(selection) {
    switch (selection) {
        case 'w':
            var aud = new Audio("tom-1.mp3")
            aud.play();
            break;
        case 'a':
            var aud = new Audio("tom-2.mp3")
            aud.play();
            break;
        case 's':
            var aud = new Audio("tom-3.mp3")
            aud.play();
            break;
        case 'd':
            var aud = new Audio("tom-4.mp3")
            aud.play();
            break;
        case 'j':
            var aud = new Audio("kick-bass.mp3")
            aud.play();
            break;
        case 'k':
            var aud = new Audio("snare.mp3")
            aud.play();
            break;
         case 'l':
            var aud = new Audio("crash.mp3")
            aud.play();
            break;
        default:
            break;
    }
}
function pressedButtonCss(button){
  
    document.querySelector("."+button).classList.add("pressed")
    setTimeout(function (){
        document.querySelector("."+button).classList.remove("pressed")
    },100)
}
//