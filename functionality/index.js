const homeViewCvBtn = document.querySelector('.home-view-cv-btn')
// nav elements
const navHome = document.querySelector('.nav-home')
const navMyWork = document.querySelector('.nav-my-work')
const navSkills = document.querySelector('.nav-skills')
const navCommunication = document.querySelector('.nav-communication')

// sections
const sectionHome = document.querySelector('.section-home')
const sectionMyWork = document.querySelector('.section-my-work')
const sectionSkills = document.querySelector('.section-skills')
const sectionCommunication = document.querySelector('.section-communication')

// contact elements
const contactCertifications = document.querySelector('.contact-certifications')
const certificationsContainer = document.querySelector('.certifications-container')
const certificationsCloseBtn = document.querySelector('.certifications-close-btn')
const certificateContainer = document.querySelector('.certificate-container')
const cpi01 = document.querySelector('.cpi-01')
const cpi02 = document.querySelector('.cpi-02')
const cpi03 = document.querySelector('.cpi-03')

// 
const alertsArray = [homeViewCvBtn]

for(let i = 0; i < alertsArray.length; i++){
    alertsArray[i].addEventListener('click', ()=>{
        alert('comming soon')
    })
}


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


// contact (animation & opening/closing funcionality)
contactCertifications.addEventListener('click', ()=>{
    certificationsContainer.style.opacity = '0'
    certificationsContainer.style.display = 'block'
    setTimeout(()=>{
    certificationsContainer.style.opacity = '1'
    }, 1)
})

certificationsCloseBtn.addEventListener('click', ()=>{
    certificationsContainer.style.top = '55%'
    certificationsContainer.style.opacity = '0'
    setTimeout(()=>{
        certificationsContainer.style.top = '50%'
        certificationsContainer.style.display = 'none'
    }, 250)
})
// 
cpi01.addEventListener('click', ()=>{alert('cpi1')})
cpi02.addEventListener('click', ()=>{alert('cpi2')})

// certificate opening
cpi03.addEventListener('click', ()=>{
    certificateContainer.style.display = 'block';
    // just change the src value of the image + add a switch for knowing when to display and when to close
    setTimeout(()=>{
        certificateContainer.style.width = '90%'
        certificateContainer.style.height = '40vh'
        certificateContainer.style.marginTop = '2rem'
    }, 1)
})
