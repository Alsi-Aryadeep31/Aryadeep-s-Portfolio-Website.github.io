//Get the More abour=t me button



function downFunction(){
    document.documentElement.scrollTo(0,820);
}

function downFunction2(){
    document.documentElement.scrollTo(0,810);
}
function downFunction3(){
    document.documentElement.scrollTo(0,1625);
}
function downFunction4(){
    document.documentElement.scrollTo(0,6030);
}
function downFunction5(){
    document.documentElement.scrollTo(0,6820);
}
function downFunction6(){
    document.documentElement.scrollTo(0,7600);
}


function downFunction7(){
    document.documentElement.scrollTo(0,2330);
}
function downFunction8(){
    document.documentElement.scrollTo(0,3030);
}
function downFunction9(){
    document.documentElement.scrollTo(0,3730);
}
function downFunction10(){
    document.documentElement.scrollTo(0,4430);
}
function downFunction11(){
    document.documentElement.scrollTo(0,5130);
}


function topFunction(){
    document.documentElement.scrollTop=0;
}


function myFunctiontheme(){
    var element = document.body;
    element.classList.toggle("dark-mode" );
}





//show button when scrolled 30px

 
mybutton= document.getElementById(myBtn);
// myButton.style.visibility="hidden";

// function scrollFunction(){
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//         mybutton.style.display="block";
//     }
//     else{
//         mybutton.style.display="hidden";
//     }
// }












//         }, 600)
//     })





// /*--------------------testimonial------------------ */

(() =>{
     const sliderContainer = document.querySelector(".testi-slider-container"),
     slides = sliderContainer.querySelectorAll(".testi-item");
     slideWidth = sliderContainer.offsetWidth,
     prevBtn = document.querySelector(".testi-slider-nav .prev"),
     nextBtn = document.querySelector(".testi-slider-nav .next");
     let slideIndex = 0;

     slides.forEach((slide) =>{
         
         slide.style.width = slideWidth + "px";
     })

    sliderContainer.style.width = slideWidth * slides.length + "px";

    nextBtn.addEventListener("click",()=>{
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
    })

    prevBtn.addEventListener("click",()=>{
        if(slideIndex === 0){
            slideIndex= slides.length-1;
        }
        else{
            slideIndex --;
        }
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
    }) 
 
})();





