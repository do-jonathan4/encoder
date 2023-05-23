const [reverse, asc, copy, paste] = document.querySelectorAll('button')
const txtarea = document.querySelector('textarea')
const alert = document.querySelector('.alert')

reverse.addEventListener('click', () => {
    const arr = txtarea.value.split("").reverse()
    let str = ''
    arr.forEach(x => str += x)
    txtarea.value = str
})

asc.addEventListener('click', () => {
    let str = ''
    if (Number(txtarea.value.replaceAll(' ', ''))) {
        //convert to letter
        const arr = txtarea.value.split(" ")
        str = String.fromCodePoint(...arr)
    } else {
        //convert to number
        str = txtarea.value.split("")
        .map(x => x.charCodeAt())
        .toString()
        .replaceAll(',', ' ')
    }
    txtarea.value = str
})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(txtarea.value)
})

copy.addEventListener('mousedown', () => {
    alert.classList.remove('d-none')
})
copy.addEventListener('mouseup', () => {
    setTimeout(() => alert.classList.add('d-none'), 1000)
})

paste.addEventListener('click', () => {
    navigator.clipboard.readText()
    .then(x => txtarea.value = x)
})

