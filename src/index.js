import m from "mithril";
import Home from "./Home";
import Login from "./Login";
import WholeSale_Filter from "./WholeSale_Filter";

m.route(document.body, "/", {
  "/": Login,
  "/WholeSale_Filter": WholeSale_Filter,
  "/dashboard": Home,
});
