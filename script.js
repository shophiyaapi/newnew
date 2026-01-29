document.addEventListener("DOMContentLoaded", function () {
  const btnYes = document.querySelector(".btnYes");
  const btnNo = document.querySelector(".btnNo");
  const text = document.getElementById("text");

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

  btnNo.addEventListener("click", function () {
    moveNoButton();
  });

  btnNo.addEventListener("mouseover", function () {
    moveNoButton();
  });

  btnNo.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
    moveNoButton();
  });

  btnYes.addEventListener("click", function () {
    if (isFirstTimeClicked) {
      yesHandler();
    } else {
      yes2Handler();
    }
  });
});
