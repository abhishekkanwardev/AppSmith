const Sidebar = () => {
  return {
    view: () => {
      return (
        <>
          <div
            onmouseover={() => {
              document.getElementById("add-class").classList.add("wrap-over");
            }}
            onmouseout={() => {
              document
                .getElementById("add-class")
                .classList.remove("wrap-over");
            }}
            className="aside-bar"
          >
            <div className="">
              <ul className="side_menu_list p-0 mt-3">
                <li className="sm_menu active">
                  <a href="#">
                    <i class="bx bxs-dashboard fs-5"></i>
                    <span class="side-menu-text">Inventory</span>
                  </a>
                </li>
                <li className="sm_menu">
                  <a href="#">
                    <i class="bx bxs-dashboard fs-5"></i>
                    <span class="side-menu-text">Process</span>
                  </a>
                </li>
                <li className="sm_menu">
                  <a href="#">
                    <i class="bx bxs-dashboard fs-5"></i>
                    <span class="side-menu-text">Inventory Report</span>
                  </a>
                </li>
                <li className="sm_menu">
                  <a href="#">
                    <i class="bx bxs-dashboard fs-5"></i>
                    <span class="side-menu-text">Sales</span>
                  </a>
                </li>
                <li className="sm_menu">
                  <a href="#">
                    <i class="bx bxs-dashboard fs-5"></i>
                    <span class="side-menu-text">Setting</span>
                  </a>
                </li>
                <li className="sm_menu">
                  <a href="#">
                    <i class="bx bxs-dashboard fs-5"></i>
                    <span class="side-menu-text">Product</span>
                  </a>
                </li>
                <li className="sm_menu">
                  <a href="#">
                    <i class="bx bxs-dashboard fs-5"></i>
                    <span class="side-menu-text">Report</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    },
  };
};

export default Sidebar;
