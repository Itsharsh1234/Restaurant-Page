import home from "./home";
import createTabs from "./createTabs";

const pageLoad = () => {
  createTabs();
  home();
};

export default pageLoad;
