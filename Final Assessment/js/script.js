const skill = [
  {
    title: "Web Development",
    img: "./assets/web-design.png",
    description:
      "I am passionate about web development and enjoy building websites. My aim is to create web apps which are functional and can increase accessability",
    skills: [
      { name: "React", logo: "./assets/react.png" },
      { name: "Redux", logo: "./assets/redux-icon.png" },
      { name: "MUI", logo: "./assets/MUI.png" },
      { name: "Sanity", logo: "./assets/sanity.webp" },
      { name: "Javascript", logo: "./assets/javascript.png" },
      { name: "css", logo: "./assets/css.png" },
      { name: "Git", logo: "./assets/git.png" },
      { name: "Node Js", logo: "./assets/nodejs.png" },
    ],
  },
  {
    title: "Software Engineering",
    img: "./assets/software-application.png",
    description:
      "I started my journey by learning c language and then trying my hands on C++, while growing a passion for problem solving through Data Structures and Algorithms",
    skills: [
      { name: "C", logo: "./assets/c.png" },
      { name: "C++", logo: "./assets/c++.png" },
      { name: "DSA", logo: "./assets/dsa.png" },
    ],
  },
  {
    title: "Free Time",
    img: "./assets/relax.png",
    description:
      "When I am not indulging myself in the above activities, I usually watch anime, movies, explore new technologies and try to be grateful to God",
    skills: [
      { name: "Watching anime", logo: "./assets/anime.png" },
      { name: "Excercising", logo: "./assets/gym.jpg" },
      { name: "Reading Books", logo: "./assets/books.jpg" },
      { name: "Relaxing and Meeting with Friends", logo: "./assets/social.jpg" },
    ],
  },
];

let skill_cont = document.querySelector(".skill_cont");



skill.forEach(function (skill) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  
  card.setAttribute("data-aos","fade-up");
  card.setAttribute("data-aos-delay","150");
  card.setAttribute("data-aos-duration","1500");


  const logo_cont = document.createElement("div");
  logo_cont.setAttribute("class", "logo_cont");
  const image = document.createElement("img");
  image.setAttribute("src", skill.img);
  image.setAttribute("alt", "logo");
  logo_cont.appendChild(image);

  const card_cont = document.createElement("div");
  card_cont.setAttribute("class", "card_cont");
  const head = document.createElement("h2");
  const text = document.createTextNode(skill.title);
  head.appendChild(text);

  const para = document.createElement("p");
  const text2 = document.createTextNode(skill.description);
  para.appendChild(text2);

  card_cont.appendChild(head);
  card_cont.appendChild(para);

  let skill_div = document.createElement("div");
  skill_div.setAttribute("class", "skill_div");
  skill.skills.forEach((icon)=>{
    let addDiv = document.createElement("div");
    let logo_img_cont = document.createElement("div");
    logo_img_cont.setAttribute("class","logo_img_cont");
    let newImg= document.createElement("img");
    newImg.setAttribute("src",icon.logo);
    newImg.setAttribute("alt","logo");
    let logoDef=document.createElement("p");
    logoDef.setAttribute("class","logoDef");
    let textNde=document.createTextNode(icon.name);
    logoDef.appendChild(textNde);
    logo_img_cont.appendChild(newImg);
    addDiv.appendChild(logo_img_cont);
    addDiv.appendChild(logoDef);
    
    skill_div.appendChild(addDiv);
  })

  card.appendChild(logo_cont);
  card.appendChild(card_cont);
  card_cont.appendChild(skill_div);
  skill_cont.appendChild(card);
});


const form=document.querySelector("#form");

function checkValidForm(){
  const isValidName=validName();
  const isValidEmail=validEmail();
  const isValidPostalCode=validPostalCode();
let isOk=true;
  if(!isValidName){
    form.name.style.border='2px solid red';
    isOk=false;
  }
  if(!isValidEmail){
    form.email.style.border='2px solid red';
    isOk=false;

  }
  if(!isValidPostalCode){
    form.postal_Code.style.border='2px solid red';
    isOk=false;

  }
return isOk;
}

function validName(){
  
  const name=form.name.value;
 const regex=/^[A-Za-z]+((\s)?([A-Za-z])+)*$/;
  const ans=regex.test(name);
  
  return ans;
}

function validEmail(){
  const email=form.email.value;
  const regex=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const ans=regex.test(email);
  return ans;

}

function validPostalCode(){
  const postalCode= form.postal_Code.value;
  let regex = /^[^DFIOQWUZ\d][\d][^DFIOQU\d]\s?[\d][^DFIOQU\d][\d]$/;
  const ans=regex.test(postalCode);
 
  return ans;

}

let otherRadio=document.getElementById("other");
let jobOfferRadio=document.getElementById("jobOffer");
let SchoolRadio=document.getElementById("School");

let otherBox=document.querySelector("#otherBox");

otherRadio.addEventListener('click',(e)=>{
  otherBox.style.visibility="visible";
})

jobOfferRadio.addEventListener('click',(e)=>{
  otherBox.style.visibility="hidden";
})
SchoolRadio.addEventListener('click',(e)=>{
  otherBox.style.visibility="hidden"; 
})