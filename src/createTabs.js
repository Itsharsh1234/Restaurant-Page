import home from "./home";
import menu from "./menu";
import contact from "./contact";

const createTabs = () => {
  const content = document.getElementById("content");

  //navbar is created
  const navContainer = document.createElement("nav");
  const navList = document.createElement("ul");

  const createNavItem = (text, action) => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.textContent = text;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);

    navLink.addEventListener("click", () => {
      clearContent();
      action();
      setActiveTab(navLink);
    });
  };

  const setActiveTab = (selectedTab) => {
    const navLinks = navList.getElementsByTagName("a");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.backgroundColor =
        navLinks[i] === selectedTab
          ? "rgb(241, 241, 108)"
          : "rgb(239, 179, 179)";
    }
  };

  createNavItem("Home", home);
  createNavItem("Menu", menu);
  createNavItem("Contact", contact);

  const defaultTab = navList.getElementsByTagName("a")[0];
  setActiveTab(defaultTab);

  navContainer.appendChild(navList);

  //navbar is appended to content container
  content.appendChild(navContainer);
};

const clearContent = () => {
  const content = document.querySelector("#content");
  const mainContainer = document.querySelector(".main-container");
  content.removeChild(mainContainer);
};

export default createTabs;
