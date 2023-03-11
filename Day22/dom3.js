const button = document.getElementById('btn')

button.addEventListener('click', function(e) {
    console.log('butona tikladin')
})


const input = document.getElementById('name')
input.addEventListener('input', e => {
    console.log('Bir şeyler yaziliyor.', e.target.value )
})


const colorInput = document.getElementById('color-picker')
colorInput.addEventListener('input', e => {
    document.body.style.backgroundColor = e.target.value
})

const saveRulesCheckbox = document.getElementById('save-rules')

const saveButton = document.getElementById('save-btn')
saveButton.addEventListener('click', e => {
    console.log(
        input.value,
        colorInput.value,
        saveRulesCheckbox.checked
    )
})

const genderSelect = document.getElementById('gender')
genderSelect.addEventListener('change', e => {
    console.log(
        e.target.value
    )
})


