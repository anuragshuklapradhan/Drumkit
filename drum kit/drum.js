document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function() {
      playSound(this.id);
      buttonAnimation(this.id);
  });
});

document.addEventListener("keydown", function(event) {
  playSound(`key-${event.key}`);
  buttonAnimation(`key-${event.key}`);
});

function playSound(key) {
  switch (key) {
      case "key-w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
      case "key-a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
      case "key-s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
      case "key-d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
      case "key-j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
      case "key-k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
      case "key-l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
      default:
          console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.getElementById(currentKey);
  if (activeButton) {
      activeButton.classList.add("pressed");
      setTimeout(function() {
          activeButton.classList.remove("pressed");
      }, 100);
  }
}
