const menu = () => {
  const content = document.getElementById("content");

  //mainContainer will contain dishes and food items
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  //this container will contain tea-type and its description
  const teaContainer = document.createElement("div");
  teaContainer.classList.add("child-container");

  const teaDescContainer = document.createElement("div");
  teaDescContainer.classList.add("desc-container");

  const honeyTea = document.createElement("h4");
  honeyTea.classList.add("sub-heading");
  honeyTea.innerText = "Honey Tea";

  const honeyTeaDesc = document.createElement("p");
  honeyTeaDesc.classList.add("text");
  honeyTeaDesc.innerText =
    "Indulge in the exquisite flavors of our Honey Tea, a harmonious blend of natural sweetness and aromatic herbs.";

  const honeyTeaPrice = document.createElement("p");
  honeyTeaPrice.classList.add("text");
  honeyTeaPrice.innerText = "80 Rs";

  const honeyTeaImg = document.createElement("img");
  honeyTeaImg.src =
    "https://www.niir.org/blog/wp-content/uploads/2021/05/gc-200x300.png";
  honeyTeaImg.alt = "honeyTea - Image";
  honeyTeaImg.style.height = "200px";

  teaContainer.appendChild(honeyTeaImg);
  teaDescContainer.appendChild(honeyTea);
  teaDescContainer.appendChild(honeyTeaDesc);
  teaDescContainer.appendChild(honeyTeaPrice);
  teaContainer.appendChild(teaDescContainer);

  //tea item will be appended to mainContainer
  mainContainer.appendChild(teaContainer);

  //this container will contains description about fruit items
  const fruitContainer = document.createElement("div");
  fruitContainer.classList.add("child-container");

  const fruitDescContainer = document.createElement("div");
  fruitDescContainer.classList.add("desc-container");

  const fruitSalad = document.createElement("h4");
  fruitSalad.classList.add("sub-heading");
  fruitSalad.innerText = "Fresh Fruit";

  const fruitSaladDesc = document.createElement("p");
  fruitSaladDesc.classList.add("text");
  fruitSaladDesc.innerText =
    "Experience the refreshing burst of nature with our Fresh Fruit selection, a vibrant medley of seasonal delights bursting with juiciness and natural flavors.";

  const fruitSaladPrice = document.createElement("p");
  fruitSaladPrice.classList.add("text");
  fruitSaladPrice.innerText = "150 Rs";

  const fruitSaladImg = document.createElement("img");
  fruitSaladImg.src =
    "https://www.californiastrawberries.com/wp-content/uploads/2021/05/Rainbow-Fruit-Salad-1024-500x500.jpg";
  fruitSaladImg.alt = "fruit salad img";
  fruitSaladImg.style.height = "200px";

  fruitContainer.appendChild(fruitSaladImg);
  fruitDescContainer.appendChild(fruitSalad);
  fruitDescContainer.appendChild(fruitSaladDesc);
  fruitDescContainer.appendChild(fruitSaladPrice);
  fruitContainer.appendChild(fruitDescContainer);

  //fruit dish container will be appended to main Container
  mainContainer.appendChild(fruitContainer);
  content.appendChild(mainContainer);
};

export default menu;
