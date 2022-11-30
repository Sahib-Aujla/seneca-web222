/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sahibpreet Singh
 *      Student ID: 165338211
 *      Date:       24 November 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
const prods = document.querySelector("#products");

function main() {
  createBtns();
  const allBtns = document.querySelectorAll(".all_btns");
  filterCat(categories[0].id);
  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener("click", () => {
      prods.innerHTML = "";
      let currentCategory = allBtns[i].id;
      filterCat(currentCategory);
    });
  }
}

function CreateCard(prod) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", prod.id);
  const dollars = (prod.price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "CAD"
  });
  const price = document.createElement("h4");
  price.innerHTML = dollars;
  const img = document.createElement("img");
  img.setAttribute("class", "myImg");
  img.setAttribute("src", prod.img);
  img.setAttribute("alt", "image");
  card.appendChild(img);

  const heading = document.createElement("h3");
  heading.setAttribute("class", "heading");
  const textHead = document.createTextNode(prod.name);
  heading.appendChild(textHead);

  const desc = document.createElement("p");
  desc.setAttribute("class", "desc");
  const textP = document.createTextNode(prod.description);
  desc.appendChild(textP);

  card.appendChild(heading);
  card.appendChild(desc);
  card.appendChild(price);

  prods.appendChild(card);
}

function filterCat(currentCategory) {
  displayHeading(currentCategory);
  let filteredeCategory = products.filter((prod) => {
    return (
      prod.categories.find((categ) => {
        return categ === currentCategory;
      }) && prod.discontinued === false
    );
  });
  filteredeCategory.forEach((prod) => {
    CreateCard(prod);
  });
}

function displayHeading(currentCategory) {
  let cat = document.querySelector("#category");
  let index = categories.findIndex((category) => {
    return category.id === currentCategory;
  });
  cat.innerText = categories[index].description;
}

function createBtns() {
  const catMenu = document.querySelector("#category-menu");

  for (let categ of categories) {
    let btn = document.createElement("button");

    btn.setAttribute("type", "button");
    btn.setAttribute("id", categ.id);
    btn.setAttribute("class", "all_btns");
    let txt = document.createTextNode(categ.description);
    btn.appendChild(txt);
    catMenu.appendChild(btn);
  }
}

addEventListener("DOMContentLoaded", main);
