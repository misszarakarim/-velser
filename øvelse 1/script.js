const h1 = document.querySelector("h1")
console.log(h1.textContent)
h1.innerHTML = "overskrift";

const h2 = document.querySelector("h2")
console.log(h2.textContent)
h2.textContent = "h2 text";

const h3 = document.querySelector("h3")
console.log(h3.textContent)
h3.textContent = "h3 text";

const p = document.querySelector("p")
console.log(p.textContent)
p.textContent = "hej med digggg"


const p2 = document.querySelector("div:nth-child(2) p")
console.log(p2.textContent)
p2.innerHTML = "heeeeyyyyyy"

const img = document.querySelector("img")
console.log(img.src);
img.src = "pics/mad1.jpg";
img.alt = "hey1"

const img2 = document.querySelector("div:nth-child(2) img")
console.log(img2.src);
img2.src = "pics/mad2.jpg";
img2.alt = "hey2"



