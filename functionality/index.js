// const homeViewCvBtn = document.querySelector('.home-view-cv-btn')
// nav elements
const navHome = document.querySelector('.nav-home')
const navMyWork = document.querySelector('.nav-my-work')
const navSkills = document.querySelector('.nav-skills')
const navCommunication = document.querySelector('.nav-communication')
const navLeft = document.querySelector('.nav-left')

// sections
const sectionHome = document.querySelector('.section-home')
const sectionMyWork = document.querySelector('.section-my-work')
const sectionSkills = document.querySelector('.section-skills')
const sectionCommunication = document.querySelector('.section-communication')

// projects elements
// const projectBtn01 = document.querySelector('.project-btn-01')

// scroll in to view functionalities
navHome.addEventListener('click', ()=>{
    sectionHome.scrollIntoView()
})
navMyWork.addEventListener('click', ()=>{
    sectionMyWork.scrollIntoView()
})
navSkills.addEventListener('click', ()=>{
    sectionSkills.scrollIntoView()
})
navCommunication.addEventListener('click', ()=>{
    sectionCommunication.scrollIntoView()
})
// 
navLeft.addEventListener('click', ()=>{
    location.reload()
})
