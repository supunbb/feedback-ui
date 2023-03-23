const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");

const containerEl=document.getElementById("container");
let selectedRating = "";

ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click",(event)=>{
        removeActive();
        selectedRating=event.target.innerText||event.target.parentNode.innerText;
        console.log(event.target.innerText||event.target.parentNode.innerText);
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click",()=>{
    if(selectedRating !==""){
        containerEl.innerHTML = `<strong>Thank you!</strong>
        <br><br><strong>Feedback : ${selectedRating}</strong>
        <p>We'll use your feedback to umprove our customer support.</p>`;
    }
})

function removeActive(){
    ratingEls.forEach((ratingsEl)=>{
        ratingsEl.classList.remove("active");
    });
}