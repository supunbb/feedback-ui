const ratingEls = document.querySelectorAll(".rating");

ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click",(event)=>{
        console.log(event.target.innerText||event.target.parentNode.innerText);
        event.target.classList
    });
});