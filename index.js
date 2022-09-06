//  adding addEventListener



var arrayOfSource = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

function checkSwitch(who) {
    switch (who) {
        case "w":
            addclick(0);
            break;
        case "a":
            addclick(1);
            break;
        case "s":
            addclick(2);
            break;
        case "d":
            addclick(3);
            break;
        case "j":
            addclick(4);
            break;
        case "k":
            addclick(5);
            break;
        case "l":
            addclick(6);
            break;

    
        default:
            break;
    }
}

function addclick(i) {
    var audio = new Audio(arrayOfSource[i]);
    audio.play();
}
var lengthOfButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < lengthOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var who = this.innerHTML;
        // this.style.color = "white";

        checkSwitch(who);
        activeAnimation(who);

    });

}

// adding event listner

document.addEventListener("keydown", function(event) {

        checkSwitch(event.key);
        activeAnimation(event.key);
    });


function activeAnimation(key) {
    var activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed");

    setTimeout((event) => {
        activeBtn.classList.remove("pressed");
    }, 100);
}

