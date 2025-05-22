const mainElem = document.querySelector('.main')
const passwordElem = document.createElement('input')
passwordElem.setAttribute('placeholder', 'Password Generate')
passwordElem.classList.add('password')
passwordElem.addEventListener('keypress', event => {
    event.preventDefault()
})
// range
const range = document.createElement('input')
range.setAttribute('type', 'range')
const rangeParagraph = document.createElement('input')
rangeParagraph.setAttribute('type', 'number')
range.addEventListener('input',() => (rangeParagraph.value = range.value)
)
rangeParagraph.addEventListener('input', () => (range.value = rangeParagraph.value)
)
// button
const generateBth = document.createElement('button')
generateBth.innerText = 'Generate Password'
generateBth.classList.add('password-bth')
generateBth.addEventListener('click', () => {
    let password = passwordGenerate(range.value)
    passwordElem.value = password
})
//copy bth
const copyBth = document.createElement('button')
copyBth.innerText = 'Copy Password'
copyBth.classList.add('password-bth')
copyBth.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordElem.value)
})
function passwordGenerate(passwordLength) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@?&';
    let password = ''
    for(let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars[randomNumber]
    }
    return password
}
mainElem.appendChild(passwordElem)
mainElem.appendChild(range)
mainElem.appendChild(rangeParagraph)
mainElem.appendChild(generateBth)
mainElem.appendChild(copyBth)