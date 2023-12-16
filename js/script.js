const options = document.querySelectorAll(".rating .option")
const btn = document.querySelector(".btn")

options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(option => option.classList.remove("active"))
    option.classList.add("active");
  })
})

btn.addEventListener("click", () => {
  const active = document.querySelector(".rating .option.active")?.textContent
  const card = document.querySelector(".card")
  const thankYou = document.querySelector(".thank-you")
  const yourOption = document.querySelector(".your-answer .number")

  card.style.display = "none"
  thankYou.style.display = "block"
  
  if(active) yourOption.textContent = active
  else yourOption.textContent = 0
})