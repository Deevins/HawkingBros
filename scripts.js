// input validation
document.addEventListener('DOMContentLoaded', () => {
const errorContainer = document.querySelector(".error-container")
const loadBtn = document.querySelector(".js-load")
const userInput = document.querySelector(".input-name")
let text;

loadBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const inputValue = userInput.value

  if(isNaN(inputValue) || !inputValue) {
    errorContainer.classList.add('input-error-container')
    userInput.classList.add('input-error')
    errorContainer.innerHTML = `<p>Введите, пожалуйста, число</p>`
    console.log(1)
    return

  } 
  if(inputValue < 5 || inputValue > 10){
    errorContainer.classList.add('input-error-container')
    userInput.classList.add('input-error')
    errorContainer.innerHTML = `<p>Введите, пожалуйста, корректное число</p>`
    console.log(2)
  }
  else{
    userInput.classList.remove('input-error')
    errorContainer.classList.remove('input-error-container')
    errorContainer.innerHTML = ``
    console.log(3)

  }
    })


  })


  // lottery async/await

  // function lottery() {
  //   console.log("Вы начали игру");
  //   let promise = new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
  //     }, 1000);
  //   });
  //   return promise;
  // }
  
  // lottery()
  //   .then(() => console.log("Вы выиграли"))
  //   .then(() => console.log("Вам заплатили"))
  //   .catch(() => console.log("Вы проиграли"))
  //   .finally(() => console.log("Игра закончена"));

  function lottery() {
    let happyNum

    try {

    } catch(er) {

    }
    console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
      }, 1000);
    });
    return promise;
  }
  
  lottery()
    .then(() => console.log("Вы выиграли"))
    .then(() => console.log("Вам заплатили"))
    .catch(() => console.log("Вы проиграли"))
    .finally(() => console.log("Игра закончена"));
  
  