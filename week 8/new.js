var cont=document.querySelector(".container");

const child2=document.querySelector("#child2");
const child1=document.querySelector("#child1");

cont.removeChild(child2);
cont.insertBefore(child2,child1);


const div=document.createElement("div");
div.setAttribute("class", "container");
div.setAttribute("id","myDiv");

const para=document.createElement("p");
const text2=document.createTextNode("Hello Everyone");
para.appendChild(text2);
div.appendChild(para);
document.body.appendChild(div);


const heading=document.createElement("h3");
const maintext=document.createTextNode("Dynamic Content");
heading.appendChild(maintext);
document.body.appendChild(heading  );

const menu=document.querySelector("#menu12");

menu.addEventListener("click",function(e){

showResult();

})