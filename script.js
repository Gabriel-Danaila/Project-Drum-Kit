// Event listener for keydown event
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Add click event listeners to all buttons
const drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    const buttonInnerHTML = this.classList[0];
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Function to make sound
function makeSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
  }

  if (audio) {
    audio.play();
  }
}

// Function to add animation to buttons
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
