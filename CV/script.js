// Smooth Scroll

document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Fade In

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.item").forEach(el=>{

observer.observe(el);

});

// Current Year

const footer=document.createElement("footer");

footer.innerHTML="<p style='text-align:center;padding:20px;'>© "+new Date().getFullYear()+" Piyush Bhatia</p>";

document.body.appendChild(footer);
