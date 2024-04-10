// sections
const sectionGeneralDescription = document.querySelector('.section-general-desc')
const templateDisplay = document.querySelector('.template-display')

// nav elements
const navHome = document.querySelector('.nav-home')
const navOverview = document.querySelector('.nav-overview')


navOverview.addEventListener('click', ()=>{
    templateDisplay.scrollIntoView()
})
navHome.addEventListener('click', ()=>{
    sectionGeneralDescription.scrollIntoView()
})