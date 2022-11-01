document.addEventListener('DOMContentLoaded', () => {
// github info
const loadBtn = document.querySelector(".js-load")
const resultsContainer = document.querySelector(".js-results")
const searchInput = document.querySelector(".js-input")


loadBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const searchValue = searchInput.value.trim().toLowerCase()
  
  if(!searchValue) return

  fetch(`https://api.github.com/usedrs/${searchValue}`)
    .then(response => response.json()
    .then(data => (
            resultsContainer.innerHTML = `
              <div class="response-container">
                <img src="${data?.avatar_url}">
                <p> Имя: <span>${data?.name}</span><p>
                <p> О себе: <span>${data?.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data?.public_repos}</span><p>
              </div>`
    ))
    .catch(error => {
            console.error(error)
            resultsContainer.innerHTML = `
             <div class="response-container">
                Пользователь не найден.
              </div>`
    })
 )
})


// users fetching
const fetchButton = document.querySelector('.js-fetch')
const fetchResultsContainer = document.querySelector(".js-fetch-results")
const mockDataUrl = 'https://jsonplaceholder.typicode.com/users'


const requestMockData = (url = mockDataUrl) => axios.get(url)


const userBlock = (data) => (
        `<div class="results-list-item">
              <p> Имя: <span>${data?.name}</span><p>
              <p> Никнейм: <span>${data?.username}</span><p> 
              <p> Сайт: <span>${data?.website}</span><p>
              <p> Компания: <span>${data?.company.name}</span><p>
          </div>`

)



  fetchButton.addEventListener('click', event => {
    event.preventDefault();
    fetchResultsContainer.innerHTML = ``
  
    requestMockData()
      .then(response => {
        if (!response.data.length) 
          fetchResultsContainer.innerHTML = userBlock(response.data) 
       
 
       for (let i = 0; i < response.data.length; i++) 
        fetchResultsContainer.innerHTML += userBlock(response.data[i])

     })

  })

  
})