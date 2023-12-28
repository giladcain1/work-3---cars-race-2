window.addEventListener("load", function () {
    var raceAudio = new Audio("./WORK3/sounds/race-start-beeps-125125.mp3");
    raceAudio.volume = 0.9;
    raceAudio.play();
});
var buttons = document.querySelectorAll(".carss");
// Adding event listener to the mouse click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
// Adding event listener to the keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
var currentAudio; 
function makeSound(key) {
    // Pause the currently playing audio
    if (currentAudio) {
        currentAudio.pause();
    }
    switch (key) {
     
        case 'a':
            currentAudio = new Audio("./carssounds/f1.mp3");
            break;
        case 's':
            currentAudio = new Audio("./carssounds/speedy.mp3");
            break;
            case 'w':
            currentAudio = new Audio("./carssounds/racestart.mp3");
                break;
        case 'j':
            currentAudio = new Audio("./carssounds/truck.mp3");
            break;
            case 'k':
             currentAudio = new Audio("./carssounds/firetruck.mp3");
          break;
        case 'c':
            currentAudio = new Audio("./carssounds/carengine.mp3");
            break;
            case 'd':
            currentAudio = new Audio("./carssounds/motorcycle.mp3");
            break;
        default:
            alert("Your car's engine doesn't start");
            return; 
    }
    // play the audio
    if (currentAudio) {
        currentAudio.play();
    }
}
// Button animation function
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 150);
}



//  shuffle the buttons
function shuffleButtons() {
    var container = document.getElementById('buttonsContainer');
    for (var i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
        // appendChild() moves it from its current position to the new position.
    }
}





// event listener to use also with click
document.addEventListener("click", function (event) {
    if (event.target.classList.contains('carss')) {
        shuffleButtons();
    }
});
// Adding event listener to the keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    shuffleButtons();
});
// rank with emojies
var emojiMap = {
    'w': ['🏎️', '🏎️', '🏎️', '🏎️'],
    'a': ['🏎️', '🏎️', '🏎️', '🏎️', '🏎️'],
    's': ['🏎️', '🏎️', '🏎️', '🏎️', '🏎️'],
    'd': ['🏎️', '🏎️', '🏎️', '🏎️'],
    'j': ['🏎️'] ,
    'k': ['🏎️','🏎️'],
    'c': ['🏎️','🏎️','🏎️'],
};
var buttons = document.querySelectorAll(".carss");

// Adding event listener to the mouse click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        displayEmojis(buttonInnerHTML);
    });
}
// Adding event listener to the keyboard press
document.addEventListener("keypress", function (event) {
    var key = event.key.toLowerCase(); 
    makeSound(key);
    buttonAnimation(key);
    displayEmojis(key);
});
function displayEmojis(key) {
    var emojiDisplay = document.getElementById('emojiDisplay');
    emojiDisplay.innerHTML =  '';

    if (emojiMap.hasOwnProperty(key)) {
        emojiDisplay.innerHTML += '<strong style="font-size: 1.5em;">Rate:</strong> ';

        emojiMap[key].forEach(function (emoji) {
            emojiDisplay.innerHTML += emoji;
        });
    }
}



