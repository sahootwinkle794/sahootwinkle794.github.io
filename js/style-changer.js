const styleChangerToggle = document.querySelector(".style-changer-toggle");
styleChangerToggle.addEventListener("click",()=>{
    document.querySelector(".styler-changer").classList.toggle("open");
})

//hide style change on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".styler-changer").classList.contains("open")){
        document.querySelector(".styler-changer").classList.remove("open");
    }
})

/* Theme color change*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled",true);
        }
    })
}


/* Theme Light and dark Mode */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fmoon");
    }else{
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})