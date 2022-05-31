//Get the More abour=t me button

mybutton=document.getElementById("myBtn");

function downFunction(){
    document.documentElement.scrollTo(0,830);
}

function downFunction2(){
    document.documentElement.scrollTo(0,830);
}
function downFunction3(){
    document.documentElement.scrollTo(0,1635);
}
function downFunction4(){
    document.documentElement.scrollTo(0,2435);
}
function downFunction5(){
    document.documentElement.scrollTo(0,3200);
}

// show button when scrolled 30px

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display="block";
    }
    else{
        mybutton.style.display="none";
    }
}


function topFunction(){
    document.documentElement.scrollTop=0;
}




function myFunctiontheme(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}









// addEventListener("load", ()=> {
//         document.querySelector(".preloader").classList.add("fade-out");
//         setTimeout(() => {
//             document.querySelector(".preloader").style.display = "none";

//         }, 600)
//     })




// /*--------------------testimonial------------------ */


// (() =>{
//     const sliderContainer = document.querySelector(".testi-slider-container"),
//     slides = sliderContainer.querySelectorAll(".testi-item"),
//     slideWidth = sliderContainer.offsetWidth,
//     prevBtn = document.querySelector(".testi-slider-nav .prev"),
//     nextBtn = document.querySelector(".testi-slider-nav .next");
//     let slideIndex = 0;

//     slides.forEach((slide) =>{
//         console.log(slide);
//         // slide.style.width = slideWidth + "px"
//     })

//     // sliderContainer.style.width = slideWidth * slides.length + "px";

//     // nextBtn.addEventListener("click,()=>{
//     //     if(slideIndex === slides.length-1){
//     //         slideIndex = 0;
//     //     }
//     //     else{
//     //         slideIndex++;
//     //     }
//     //     sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
//     // })


// })();


