html{
    scroll-behavior: smooth;
}
html, section, main, body{
    margin: 0;
    padding: 0;
}
html img{
    width: 4rem;
    height: 4rem;
}

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5rem;
    border-bottom: 1px solid rgb(255, 255, 255);
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
}
nav div{
    display: flex;
}
nav h2, nav p{
    margin: 0;
}
nav div:first-of-type{
    margin-left: 3rem;
}
nav div:first-of-type img{
    width: 2.5rem;
    height: 2.5rem;
    filter: invert(100%);
    margin-right: 1rem;
}
nav h2{
font-size: 2.2rem;
}
nav div:nth-of-type(2){
    margin-right: 5rem;
}
nav p{
    font-size: 1.4rem;
    margin-left: 1.6rem;
    padding: 0.3rem 1rem;
    border-bottom: solid rgba(0, 0, 0, 0) 1px;
    transition: 250ms;
    cursor: pointer
}
nav p:hover{
    border-bottom-color: white;
}
/* sections */
.section-general-desc{
    padding-top: 5rem;
}
.description{
        font-size: 1.5rem;
        width: 75%;
        margin: 1.5rem auto;
        text-align: justify;
        letter-spacing: 0.1rem;
}
.template-display{
    border-top: solid 1px rgb(0, 0, 0);
    padding-top: 5rem;
}
.display-img-description-pair,
.template-display-btn-container{
    display: grid;
    grid-template-columns: 1.35fr 0.5fr;
}
.display-img-wrapper{
    /* border: solid yellow 1px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.display-img-description-pair img{
    width: 90%;
    height: 90%;
}
.display-text-wrapper{
    /* background-color: red; */
    background-color: rgb(24, 24, 24);
    display: flex;
    justify-content: center;
    align-items: center;
}
.display-img-description-pair p{
    width: 75%;
    color: white;
    text-align: justify;
    font-size: 1.35rem;
    padding-bottom: 2.5rem;
    letter-spacing: 0.05rem;
    border-bottom: solid gray 1px;
}

.template-display-btn-container{
    display: flex;
    justify-content: space-evenly;
}
.template-display-btn-container button{
    font-size: 1rem;
    width: 15vw;
    padding: 0.4rem 0;
    border: solid 2px;
    color: white;
    background-color: rgb(36, 36, 36);
    transition: 250ms;
    cursor: pointer;
}
.template-display-btn-container button:hover{
    background-color: rgb(0, 0, 0);
}
.template-display-btn-container button:first-of-type{
    border-radius: 20px 0 0 20px;
}
.template-display-btn-container button:nth-of-type(2){
    border-radius: 0 20px 20px 0;
}


/* it uses the same css as the h3 in the home page sections */
section h3{
        font-size: 2.75rem;
        margin: 3rem auto 2rem auto;
        text-align: center;
        width: calc(100% - 13.4rem);
        letter-spacing: 0.15rem;
        word-spacing: 0.3rem;
        padding: 0 1.3rem 1.5rem 1.3rem;
        border-bottom: solid 1px black;
}


/* section all images */
.template-all-imgs{
    padding-top: 5rem;
}
.expand-hide-btn-wrapper{
    width: 50%;
    margin: 0 auto 1rem auto;
    /* border-bottom: solid rgb(0, 0, 0) 1px; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.expand-hide-btn-wrapper button{
    font-size: 1.2rem;
    padding: 0.2rem 1.5rem 0.1rem 1.5rem;
    background-color: rgba(104, 104, 104, 0);
    border: solid 1px rgba(128, 128, 128, 0);
    border-left: solid 1px black;
    border-right: solid 1px black;
    cursor: pointer;
    transition: 250ms;
}
.expand-hide-btn-wrapper button:hover{
    /* background-color: rgb(209, 209, 209); */
    border-color: black;
}
.expand-hide-btn-wrapper span{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: black;
    display: inline-block;
    margin: 1.5rem;
}
.all-imgs-span{
    display: inline-block;
    margin-left: 15%;
    margin-bottom: 0.5rem;
}
.all-imgs-span p{
    margin: 0;
    display: inline;
    font-size: 1.3rem;
    margin-right: 1rem
}
.expand-hide-icon{
    width: 1rem;
    height: 1rem;
    border:solid 1px black;
    padding: 0 0.1rem;
    cursor: pointer;
    transition: 250ms;
}
.expand-hide-icon:hover{
    box-shadow: 3px 3px black;
}
.all-imgs-wrapper{
    margin: 1.5rem 0;
}
.img-container{
    width: calc(70% - 4rem);
    height: 1vh;
    background-color: rgb(196, 196, 196);
    margin: 0.25rem auto 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem;
    transition: 250ms;
}
.img-container img{
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    z-index: 1;
    animation: appearing-img 0.5s linear forwards;
}
@keyframes appearing-img {
    100%{
        opacity: 1;
    }
}

/* .full-wall-img{
    width: 100%;
    height: 75vh;
}
.full-wall-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
} */
/* communications */


.section-communication{
    height: auto;
}
.contact-container{
    width: calc(100% - 14rem);
    background: linear-gradient(90deg, rgb(10, 10, 10), rgb(20, 20, 20), rgb(10, 10, 10));
    padding: 2rem 7rem 1rem 7rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    box-shadow: inset 5px 5px 15px black;
}
.contact-container div{
    width: 90%;
    padding: 1rem 0 0.5rem 1.5rem;
    margin: 1rem 0 0.5rem 0;
    border-left: solid white 2px;
}
.contact-container span{
    display: flex;
    align-items: center;
    padding-left: 1rem;
}
.contact-container h4{
    margin: 0;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
    color: white;
    letter-spacing: 0.05rem;
    word-spacing: 0.5rem;
    color: rgb(212, 211, 211)
}
.contact-container p{
    margin: 0;
    margin-left: 0.8rem;
    color: white;
    display: inline;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.3rem;
    line-height: 1.7rem;
    transition: 250ms;
    /* cursor: pointer; */
}
.contact-container p a,
.contact-container p a:visited,
.contact-container p a:after{
    color: white;
    text-decoration: none;
    transition: 250ms;
}

.contact-certifications:hover,
.contact-container span p a:hover{
    color: rgb(139, 139, 139);
    cursor: pointer;
}
.contact-container img{
    width: 1rem;
    height: 1rem;
    filter: invert(100%);
}
/*  */
footer{
    background-color: rgb(7, 7, 7);
}
footer p{
    margin: 0;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem 0;
    box-shadow: 0px -3px 10px rgb(7, 7, 7);
    letter-spacing: 0.1rem;
}
footer p a{
    color: rgb(185, 185, 185);
    transition: 250ms;
}
footer p a:visited{
    color: rgb(185, 185, 185)
}
footer p a:hover{
    color: rgb(139, 139, 139);
}
