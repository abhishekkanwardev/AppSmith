import m from "mithril";
import Home from "./Home";
import WholeSale_Filter from "./WholeSale_Filter";

m.route(document.body, "/", {
  "/": Home,
  "/WholeSale_Filter": WholeSale_Filter,
});
