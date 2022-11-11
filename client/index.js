import m from "mithril";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import WholeCell from "./Pages/WholeCell";
import Sample from "./Pages/Sample";
import Dashboard from "./Pages/Dashboard";

// Private Route Wrapper
const PrivateRoute = {
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

// Public Route Wrapper
const PublicRoute = {
  view: (v) => {
    return localStorage.getItem("token")
      ? m.route.set("/dashboard")
      : v.children;
  },
};

// All Routes
m.route(document.body, "/", {
  "/": {
    render: () => (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  "/signup": {
    render: () => (
      <PublicRoute>
        <Signup />
      </PublicRoute>
    ),
  },
  "/wholecell": {
    render: () => (
      <PrivateRoute>
        <WholeCell />
      </PrivateRoute>
    ),
  },
  "/dashboard": {
    render: () => (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  "/sample": {
    render: () => (
      <PrivateRoute>
        <Sample />
      </PrivateRoute>
    ),
  },
});
