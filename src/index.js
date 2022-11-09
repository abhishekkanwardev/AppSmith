import m from "mithril";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import WholeSale_Filter from "./Pages/WholeSale_Filter";
import Sample from "./Pages/Sample";
import Dashboard from "./Pages/Dashboard";

const Layout = {
  view: (v) => {
    return (
      <div class="h-screen">
        <Navbar />
        <div id="add-class" className="wrap ">
          <div className="main-wrap">
            <Sidebar />
            <div class="wrap-inner">
              <div class="wrap-inner-content p-2">
                {localStorage.getItem("token") ? v.children : m.route.set("/")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Routes
m.route(document.body, "/", {
  "/": Login,
  "/signup": Signup,
  "/wholecell": {
    render: () => (
      <Layout>
        <WholeSale_Filter />
      </Layout>
    ),
  },
  "/dashboard": {
    render: () => (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  "/sample": {
    render: () => (
      <Layout>
        <Sample />
      </Layout>
    ),
  },
});
