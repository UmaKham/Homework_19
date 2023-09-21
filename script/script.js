let input = document.querySelector('.volume')

let btns = document.querySelectorAll('[data-btn]')

btns.forEach((btn, idx) => {
  btn.onclick = function() {
    input.value = idx * 20
  }
})