document.addEventListener("DOMContentLoaded", function () {

  const btnYes = document.querySelector(".btnYes");
  const btnNo = document.querySelector(".btnNo");
  const text = document.getElementById("text");

  const clickSound = new Audio('shophiyaapi/newnew/TWICE.mp3');
  clickSound.preload = "auto";
  clickSound.volume = 0.7;

  let isFirstTimeClicked = true;

  const yesHandler = () => {
    text.innerHTML = `Do you <br> love me ??`;
    resetButtonPosition();
    isFirstTimeClicked = false;
  };

  const yes2Handler = () => {
    text.innerHTML = `I love you more ❤️❤️`;
    hideButtons();
  };

  function moveNoButton() {
    const randomLeft = Math.random() * (window.innerWidth - 50);
    const randomTop = Math.random() * (window.innerHeight - 50);
    btnNo.style.left = `${randomLeft}px`;
    btnNo.style.top = `${randomTop}px`;
  }

  function resetButtonPosition() {
    btnNo.style.left = "";
    btnNo.style.top = "";
  }

  function hideButtons() {
    btnYes.style.display = "none";
    btnNo.style.display = "none";
  }

  btnNo.addEventListener("click", moveNoButton);
  btnNo.addEventListener("mouseover", moveNoButton);
  btnNo.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
  });

  // ✅ SINGLE CLICK HANDLER
  btnYes.addEventListener("click", function () {

    clickSound.currentTime = 0;
    clickSound.play().catch(err => {
      console.log("Audio blocked:", err);
    });

    if (isFirstTimeClicked) {
      yesHandler();
    } else {
      yes2Handler();
    }

  });

});