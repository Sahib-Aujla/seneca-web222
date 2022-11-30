/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    name: "Samsung S20 FE",
    description: "Best product and affordable",
    price: 70199,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P2",
    name: "Google pixel 6a",
    description: "Best Google phone",
    price: 59099,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P3",
    name: "iPhone 14",
    description: "Latest by apple",
    price: 122199,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80",
    categories: ["all", "ios", "sph"]
  },
  {
    id: "P4",
    name: "HP envy",
    description: "Best laptop with ryzen 7",
    price: 130000,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    categories: ["all", "lap"]
  },
  {
    id: "P5",
    name: "iPhone 4",
    description: "Old but still compatible",
    price: 230000,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80",

    categories: ["all", "ios", "sph"]
  },
  {
    id: "P6",
    name: "Macbook Pro",
    description: "Best apple laptop with the m1 chip",
    price: 130000,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    categories: ["all", "ios", "lap"]
  },
  {
    id: "P6",
    name: "Dell Inspirion 15",
    description: "Best dell laptop with the latest specs",
    price: 129999,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",

    categories: ["all", "lap"]
  },
  {
    id: "P7",
    name: "Micromax canvas 2",
    description: "retro smart phone",
    price: 23000,
    discontinued: true,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P8",
    name: "Lenovo thinkpad",
    description: "Lenovo: Think for you",
    price: 73000,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",

    categories: ["all", "lap"]
  },
  {
    id: "P9",
    name: "Motorola moto E",
    description: "Latest specs and affordable",
    price: 14900,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P10",
    name: "Motorola moto G Stylus",
    description: "long battery life : 2 Days",
    price: 41545,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P11",
    name: "Pixel 6A cell",
    description: "Be with pixel",
    price: 48700,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P12",
    name: "Pixel 7",
    description: "With Best Features",
    price: 69900,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P13",
    name: "Apple iPhone 14 pro max 1TB",
    description: "The top notch class",
    price: 200000,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80",

    categories: ["all", "ios", "sph"]
  },
  {
    id: "P14",
    name: "Apple iPhone 13 pro max 1TB",
    description: "Be with apple",
    price: 130000,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80",

    categories: ["all", "ios", "sph"]
  },
  {
    id: "P15",
    name: "Asus vivobook",
    description: "affordable laptop",
    price: 39900,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",

    categories: ["all", "lap"]
  },
  {
    id: "P16",
    name: "Asus vivobook flip thin",
    description: "affordable laptop with 360",
    price: 44900,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",

    categories: ["all", "lap"]
  },
  {
    id: "P17",
    name: "Asus gaming laptop",
    description: "Best gaming laptop",
    price: 109900,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",

    categories: ["all", "lap"]
  },
  {
    id: "P18",
    name: "Macbook Air",
    description: "Macbook with retina display",
    price: 119900,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",

    categories: ["all", "lap", "ios"]
  },
  {
    id: "P19",
    name: "Macbook pro 2022",
    description: "WIth the latest m2 chip",
    price: 169999,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",

    categories: ["all", "lap", "ios"]
  },
  {
    id: "P20",
    name: "Samsung galaxy s22",
    description: "latest samsung phone",
    price: 1319.99,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",

    categories: ["all", "and", "sph"]
  },
  {
    id: "P21",
    name: "Samsung galaxy A33",
    description: "Cheap and affordable",
    price: 408.8,
    discontinued: false,
    img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    categories: ["all", "and", "sph"]
  }
];
