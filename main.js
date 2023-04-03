// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
// Remove the error
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");
//Add event listener
document.addEventListener("DOMContentLoaded", () => {
  let hearts = document.querySelectorAll(".like-gylph");

  for (let heart of hearts) {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated heart ");
          }
        })
        .catch(() => {
          errorModal.classList.remove("hidden");
          const errorMessage = document.getElementById("modal-message");
          errorMessage.textContent = "Server Error.Something went wrong!.";
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
