const  Img = document.createElement("img");
Img.src="https://th.bing.com/th/id/OIP.zadw8uLdzyfGQALi28ZXbwHaK7?w=208&h=302&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3";
Img.width = 250;
Img.height = 250;
const h4 = document.createElement("h4");
h4.innerText="Title: Physics";
const h3 = document.createElement("h3");
h3.innerText="Price: ₹350/-";
const btn = document.createElement("button")
btn.innerText = "Add to cart"
const child = document.createElement("div")
child.className = "card";
child.appendChild(Img)
child.appendChild(h4)
child.appendChild(h3)
child.appendChild(btn)
const parent = document.getElementById("root")
parent.appendChild(child)