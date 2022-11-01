// input validation
document.addEventListener('DOMContentLoaded', () => {
const errorContainer = document.querySelector(".error-container")
const loadBtn = document.querySelector(".js-load")
const userInput = document.querySelector(".input-name")

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

// another ver of lottery

 async function lottery() {
  console.log("Вы начали игру")

    try {
      await new Promise( (resolve, reject) => {
        setTimeout(function () {
          Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
        }, 1000)
      })
      console.log("Вы выиграли")
      console.log("Вам заплатили")

    } catch(er) {
      console.log(er)
      console.log("Вы проиграли")
    }
    console.log("Игра закончена")
  }
  
  lottery()
  