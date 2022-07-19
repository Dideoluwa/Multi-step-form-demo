let prev = document.querySelectorAll('.prev')
let next = document.querySelectorAll('.next')
let component = document.querySelectorAll('.component')
let forms = document.querySelectorAll('.form')
let form = document.querySelector('form')
let componentCount = component.length
let formsCount = forms.length

let count = 0
form.addEventListener('submit' , (e) =>{
  e.preventDefault()
})
for (let nex of next) {
    nex.addEventListener('click', () => {
        forms[count].classList.remove('active-form')
        if (count < componentCount - 1) {
            count++
        }
        component[count].classList.add('active')
        forms[count].classList.add('active-form')
    })
}

for (let pre of prev) {
    pre.addEventListener('click', () => {
        component[count].classList.remove('active')
        forms[count].classList.remove('active-form')
        if (count > 0) {
            count--
        }
        component[count].classList.add('active')
        forms[count].classList.add('active-form')
    })
}
