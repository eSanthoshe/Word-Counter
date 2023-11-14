/* let phonearray = [
  {
    id: 0,
    name: "iphone",
    src: "./images/apple.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    id: 1,
    name: "1+",
    src: "./images/1+.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    id: 2,
    name: "Pixel",
    src: "./images/pixel.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    id: 3,
    name: "S23Ultra",
    src: "./images/s23ultra.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];

showphonearray(phonearray);

function showphonearray(phones) {
  for (var i = 0; i < phones.length; i++) {
    document.getElementById("card").innerHTML += `<div class="mt-3">
    <div class="card p-3 ps-5 pe-5">
      <h4 class="text-capitalize text-center">${phones[i].name}</h4>
      <img src="${phones[i].src}" class = "phones" />
      <p class="mt-2">${phones[i].desc}</p>
      <button class="btn addtocart btn-primary w-100 mx-auto">Add To Cart</button>
    </div>
  </div>`;
  }
}
 */

const wordsTextarea = document.querySelector(".word-counter-container .words");
const countBtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(
  ".word-counter-container .word-count span"
);

const countWords = () => {
  let words = wordsTextarea.value;
  let wordsTrimmed = words.replace(/\s+/g, " ").trim();
  let splitWords = wordsTrimmed.split(" ");

  console.log(splitWords);

  let numberOfWords = splitWords.length;
  if (splitWords[0] == "") {
    numberOfWords = 0;
  }

  wordCount.innerHTML = numberOfWords;
};

countBtn.addEventListener("click", countWords);
