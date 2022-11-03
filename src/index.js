import m from "mithril";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import WholeSale_Filter from "./Pages/WholeSale_Filter";
const Layout = {
  view: (v) => {
    return (
      <div class="h-screen">
        <Navbar />
        <div id="add-class" className="wrap ">
          <div className="main-wrap">
            <Sidebar />
            {v.children}
          </div>
        </div>
      </div>
    );
  },
  // m(
  //   "div",
  //   m(Navbar),
  //   m("div.main", [m(Sidebar), v.children]),
  //   m(".footer", "FOOTER")
  // ),
};

m.route(document.body, "/", {
  "/": Login,
  "/signup": Signup,
  "/wholesale": {
    render: () => (
      <Layout>
        <WholeSale_Filter />
      </Layout>
    ),
  },
  "/dashboard": {
    render: () => (
      <Layout>
        <Home />
      </Layout>
    ),
  },
});
