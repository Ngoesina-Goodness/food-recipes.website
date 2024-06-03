
const getElement = (selector) =>{
 
    const element = document.querySelector(selector);
    if(element) return element
    throw Error(`please double check your class names, there is no ${selector}
    class`)
}

const links = getElement('.nav-links')
const navBtnDom = getElement('.nav-btn')

navBtnDom.addEventListner('click',()=>{
   links.ClassList.toggle('show-links')
})

const date = getElement( '#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear