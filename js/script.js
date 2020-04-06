const buttonForChange = document.getElementById('buttonForChange')
const container = document.getElementsByClassName('container')
const header = document.getElementsByClassName('header ')
const mainContent = document.getElementsByClassName('main-content')
const contentFormSubmit = document.getElementsByClassName('content-form-submit')
const greenText = document.getElementsByClassName('green-text')
//console.log(greenText);
const mainContentLine1 = document.getElementsByClassName('main-content-line1')
const mainContentLine2 = document.getElementsByClassName('main-content-line2')

//const mainContentLogoText = window.getComputedStyle(document.querySelector('.main-content-logo-text'),':before').backgroundColor
//console.log(mainContentLogoText);


let flag

document.addEventListener("DOMContentLoaded", function(){
    console.log(flag)
    if (localStorage.getItem('key')){
        flag = false
        setTheme()
    }
})

buttonForChange.addEventListener('click', () => {
    setTheme()
    if (localStorage.getItem('key')){
        localStorage.removeItem('key')
    } else {
        localStorage.setItem('key', 'changed')
    }
})

function setTheme() {
    if (flag === true){
        container[0].style.backgroundImage = 'url(img/background-body.png)'
        header[0].style.background = 'rgba( 0, 0, 0, 0.5)'
        mainContent[0].style.backgroundColor = 'white'
        contentFormSubmit[0].style.backgroundColor = '#329a65'
        buttonForChange.style.backgroundColor = '#329a65'
        buttonForChange.style.border = '1px solid #329a65'
        for (let i = 0; i < greenText.length; i++) {
            greenText[i].style.color = '#329a65'
        }
        mainContentLine1[0].style.border = '1px solid white'
        mainContentLine2[0].style.border = '1px solid white'
        flag = false

    } else {
        container[0].style.backgroundImage = 'url(img/body-bg.png)'
        header[0].style.background = 'rgba( 165, 206, 220, 0.7)'
        mainContent[0].style.backgroundColor = '#e7eda5'
        contentFormSubmit[0].style.backgroundColor = '#e5c354'
        buttonForChange.style.backgroundColor = '#e5c354'
        buttonForChange.style.border = '1px solid #e5c354'
        for (let i = 0; i < greenText.length; i++) {
            greenText[i].style.color = '#b3820b'
        }
        mainContentLine1[0].style.border = '1px solid #e5c354'
        mainContentLine2[0].style.border = '1px solid #e5c354'
        flag = true
    }
}