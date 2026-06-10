const buttons =
document.querySelectorAll(".media-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const media =
button.nextElementSibling;

media.classList.toggle("active");

if(media.classList.contains("active")){

button.textContent =
"Ocultar Multimedia ▲";

}else{

button.textContent =
"Ver Multimedia ▼";

}

});

});

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".7s";

observer.observe(card);

});