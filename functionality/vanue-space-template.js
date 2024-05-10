// sections
const sectionGeneralDescription = document.querySelector('.section-general-desc')
const templateDisplay = document.querySelector('.template-display')
const sectionTemplateAllImgs = document.querySelector('.template-all-imgs')
const sectionCommunication = document.querySelector('.section-communication')


// nav elements
const navHome = document.querySelector('.nav-home')
const navOverview = document.querySelector('.nav-overview')
const navGallery = document.querySelector('.nav-gallery')
const navCommunication = document.querySelector('.nav-communication')
const navLeft = document.querySelector('.nav-left')

// prev next elements
const displayPrevBtn = document.querySelector('.display-prev-btn')
const displayNextBtn = document.querySelector('.display-next-btn')
const displayImg = document.querySelector('.display-img')

// image viewing elements
const expandHideBtnArray = document.querySelectorAll('.expand-hide-icon')
const imgFrameArray = document.querySelectorAll('.img-container')
const templateImgArray = document.querySelectorAll('.template-img')
// 
const expandAllBtn = document.querySelector('.expand-all-btn')
const collapseAllBtn = document.querySelector('.collapse-all-btn')
// other elements
const displayText = document.querySelector('.display-text')


navOverview.addEventListener('click', ()=>{
    templateDisplay.scrollIntoView()
})
navHome.addEventListener('click', ()=>{
    sectionGeneralDescription.scrollIntoView()
})
navGallery.addEventListener('click', ()=>{
    sectionTemplateAllImgs.scrollIntoView()
})
navCommunication.addEventListener('click', ()=>{
    sectionCommunication.scrollIntoView()
})



// image displaying

let imageDisplaySwitchArray = [false, false, false, false, false]

function imageOpener(iterator){
        imgFrameArray[iterator].style.height = '70vh'
        imgFrameArray[iterator].style.padding = '2rem 2rem'
        expandHideBtnArray[iterator].src = 'images/icons/minus-solid.svg'
        imageDisplaySwitchArray[iterator] = true
        setTimeout(()=>{
            templateImgArray[iterator].style.display = 'block'
        }, 250)
}

function imageCloser(iterator){
    templateImgArray[iterator].style.display = 'none'
    expandHideBtnArray[iterator].src = 'images/icons/plus-solid.svg'
    imageDisplaySwitchArray[iterator] = false
    setTimeout(()=>{
        imgFrameArray[iterator].style.height = '1vh'
        imgFrameArray[iterator].style.padding = '0rem 2rem'
    }, 250)
}

for(let i = 0; i < expandHideBtnArray.length; i++){
    expandHideBtnArray[i].addEventListener('click', ()=>{
        if(!imageDisplaySwitchArray[i]){
            imageOpener(i)
        }else{
            imageCloser(i)
        }
    })
}

expandAllBtn.addEventListener('click', ()=>{
    for(let i = 0; i < expandHideBtnArray.length; i++){
        imgFrameArray[i].style.height = '70vh'
        imgFrameArray[i].style.padding = '2rem 2rem'
        expandHideBtnArray[i].src = 'images/icons/minus-solid.svg'
        imageDisplaySwitchArray[i] = true
        
        setTimeout(()=>{
            templateImgArray[i].style.display = 'block'
        }, 250)
    }
})


collapseAllBtn.addEventListener('click', ()=>{
    for(let i = 0; i < expandHideBtnArray.length; i++){
        templateImgArray[i].style.display = 'none'
        expandHideBtnArray[i].src = 'images/icons/plus-solid.svg'
        imageDisplaySwitchArray[i] = false
        setTimeout(()=>{
            imgFrameArray[i].style.height = '1vh'
            imgFrameArray[i].style.padding = '0rem 2rem'
        }, 250)
    }
})

// prev next
let imgArrayIndex = 0
const displayImgsArray = [
    'venue01.png',
    'venue02.png',
    'venue03.png',
    'venue04.png',
    'venue05.png',
    'venue06.png',
    'venue07.png'
]
const displayTextArray = [
    `Opening panel, introdusing the theme of the page to the user. A venue space business`,
    `This section of the page allows the user to discover more details about the business.`,
    `Here, the website can direct the user to the full service list.`,
    `A communication form. Bringing potential customers in touch with the business.`,
    `5`,
    `6`,
    `7`,
]

displayImg.src = `images/project01/${displayImgsArray[imgArrayIndex]}`
displayText.textContent = `${displayTextArray[imgArrayIndex]}`

function prevImgHandler(){
    imgArrayIndex--
    if(imgArrayIndex < 0){
        imgArrayIndex = 0;
        return
    }
    displayImg.src = `images/project01/${displayImgsArray[imgArrayIndex]}`
    displayText.textContent = `${displayTextArray[imgArrayIndex]}`
}

function nextImgHandler(){
    imgArrayIndex++
    if(imgArrayIndex == displayImgsArray.length){
        imgArrayIndex = displayImgsArray.length-1; 
        alert('No more')
        return
    }
    displayImg.src = `images/project01/${displayImgsArray[imgArrayIndex]}`
    displayText.textContent = `${displayTextArray[imgArrayIndex]}`
}

displayPrevBtn.addEventListener('click', ()=>{
    prevImgHandler()
})

displayNextBtn.addEventListener('click', ()=>{
    nextImgHandler()
})
// 
navLeft.addEventListener('click', ()=>{
    window.location = 'index.html'
})


