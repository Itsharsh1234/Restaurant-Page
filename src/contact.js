const contact = () => {
  const content = document.getElementById("content");
  // a div main container is created under content container
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  // a contact container is created and appended to main container
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("child-container");
  const contactDetails = document.createElement("div");
  contactDetails.classList.add("desc-container");

  const heading = document.createElement("h2");
  heading.classList.add("heading-text");
  heading.style.border = "none";
  heading.innerText = "Contact Us";
  contactContainer.appendChild(heading);
  const name = document.createElement("p");
  name.classList.add("text");
  name.innerText = "Harsh Kumar";
  const phone = document.createElement("p");
  phone.classList.add("text");
  phone.innerText = "7339980606";
  const address = document.createElement("p");
  address.classList.add("text");
  address.innerText = "Pune, India";

  contactDetails.appendChild(name);
  contactDetails.appendChild(phone);
  contactDetails.appendChild(address);
  contactContainer.appendChild(contactDetails);

  mainContainer.appendChild(contactContainer);
  content.appendChild(mainContainer);
};

export default contact;
