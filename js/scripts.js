
// Esercizio di oggi: Carosello Array di Oggetti
// nome repo: js-array-objects-carousel

// Dato un array di oggetti letterali con:
//  - url dell'immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:



const images = [
  {
    url: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg",
    title: "Svezia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quo dolore incidunt inventore labore fugit velit asperiores perferendis provident possimus!",
  },

  {
    url: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Perù",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium enim dicta sit, aliquid dolorum vitae consequatur ipsam provident natus velit!",
  },

  {
    url: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c",
    title: "Chile",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.",
  },
  {
    url: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg",
    title: "Argentina",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero voluptas, placeat magni quo error eum expedita consequatur quod est.",
  },
  {
    url: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop",
    title: "Colombia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, alias dolorem! Nisi corrupti quo, exercitationem nobis asperiores dolor quod praesentium?",
  },
];

let card = document.getElementById("container");
console.log("Card", card, typeof card);
let elImg = "";

 for (let i = 0; i < images.length; i++) {
   if (i == 0) {
     elImg += `
     <div id="item-${[i]}" class="item active">
        <div class="text-box">
          <ul id"text-list">
            <li class="img-box">
              <img src = "${images[i].url}"
            </li>
            <li class="title">${images[i].title}</li>
            <li>${images[i].description}</li>
          </ul>  
        </div>
     </div>`;
   } else {
     elImg += `
   <div id="item-${[i]}" class="item">
     <div class="text-box">
          <ul id"text-list">
            <li class="img-box">
              <img src = "${images[i].url}"
            </li>
            <li class="title">${images[i].title}</li>
            <li>${images[i].description}</li>
          </ul>  
        </div>
   </div>`;
   }
 }
 card.innerHTML += elImg;



  
let counter = 0
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let stop = document.getElementById("stop");

stop.addEventListener("click", function(){
  clearInterval(interval);
})

console.log(next)

let interval = setInterval(myFunction, 1000);
console.log('id intervallo' + interval)


 function myFunction() {
   let currentCounter = "item-" + counter;
   let item = document.getElementById(currentCounter);
   item.classList.remove("active");
 
   counter++;
   if (counter == 5) {
     counter = 0;
   }

   let nextCount = "item-" + counter;
   item = document.getElementById(nextCount);
   item.classList.add("active");
 }


next.addEventListener("click", function () {
  let currentCounter = "item-" + counter;
  let item = document.getElementById(currentCounter);
  item.classList.remove("active");

  counter++;
  if (counter == 5) {
    counter = 0;
  }

  let nextCount = "item-" + counter;
  item = document.getElementById(nextCount);
  item.classList.add("active");
});

 
  




prev.addEventListener("click", function () {
  let currentCounter = "item-" + counter;

  let item = document.getElementById(currentCounter);
  item.classList.remove("active");

  counter--;
  if (counter == -1) {
    counter = 4;
  }
  let nextCount = "item-" + counter;
  item = document.getElementById(nextCount);
  item.classList.add("active");
  
});
