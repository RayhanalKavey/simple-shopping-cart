// let dataSet;
// //Load data
// fetch("../data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     dataSet = data;
//     displayData(data);
//   });
const phoneData = async () => {
  const res = await fetch("../data.json");
  const data = await res.json();
  dataSet = data;
  displayData(data);
};
phoneData();
//ParT : display data
const displayData = (items) => {
  // console.log(items[0]);
  const cardContainer = document.getElementById("homepage-card-container");
  items.map((item) => {
    const { id, price, img, name } = item;
    const cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "lg:mx-6",
      "card",
      "w-full",
      "bg-base-100",
      "shadow-2xl",
      "border",
      "border-orange-200"
    );
    cardDiv.innerHTML = `
      <figure>
                <div class="p-4">
                  <img
                    class="rounded-lg"
                    src=${img}
                    alt="Shoes"
                  />
                </div>
              </figure>
              <div class="card-body">
                <div
                  id="parent-name-icon-container"
                  class="flex justify-between items-center"
                >
                  <h2 class="card-title">${name}!</h2>
                  <div>
                    <span
                      ><i class="fa-solid fa-heart text-slate-500 mr-2"></i
                    ></span>
                    <span>
                      <i class="fa-regular fa-square-minus text-red-500"></i
                    ></span>
                  </div>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p><span>Price: </span>$${price}</p>
                <div class="flex flex-col items-center sm:flex-row gap-2">
                  <label
                    onclick="handleModal(${id})"
                    for="my-modal-3"
                    class="btn hover:bg-orange-500 btn-outline w-full sm:w-1/2"
                  >
                    <i class="fa-solid fa-circle-info mr-2"></i> Details</label
                  >

                  <button
                    class="btn bg-orange-500 hover:bg-orange-600 w-full sm:w-1/2"
                  >
                    <i class="fa-solid fa-cart-shopping mr-2"></i>Buy Now
                  </button>
                </div>
              </div>
    
    `;
    cardContainer.appendChild(cardDiv);
  });
};
///Modal Click
const handleModal = (id) => {
  const modalContainer = document.getElementById("modal-info");
  // console.log(typeof dataSet[0].id, typeof id);
  const product = dataSet.find((item) => +item.id === id);
  const { name, img, price } = product;
  // console.log(product);

  modalContainer.innerHTML = `
  <img class="rounded-lg" src="${img}" />
            <h1 class="text-xl mt-5">
              <span class="text-orange-700 uppercase font-bold">Product: </span>
                  ${name}
            </h1>
            <p class="text-lg text-gray-500 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, maiores?
            </p>
            <h1 class="text-xl mt-5">
              <span class="text-orange-700 uppercase font-bold">Feature: </span>
            </h1>
            <p class="text-lg text-gray-500 mt-1">
              Feature1,Feature1,Feature1,Feature1,Feature1.
            </p>
            <h1 class="text-xl mt-5">
              <span class="text-orange-700 uppercase font-bold">Price: </span
              >$${price}
            </h1>
  `;
};
