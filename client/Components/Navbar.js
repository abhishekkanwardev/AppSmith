import m from "mithril";

const Navbar = () => {
  return {
    view: () => {
      return (
        <div
          style={{
            background: "rgb(39,147,239) ",
            color: "white",
            zIndex: "10",
          }}
          class="position-sticky text-white top-0 start-0"
        >
          <nav class="navbar container-fluid px-3 d-flex justify-content-between  navbar-expand-lg">
            <div class="fs-5 gap-1 cursor-pointer d-flex align-items-center ">
              {/* <i class="bx bxs-hot fs-4"></i> */}
              MET DERP
            </div>
            <div class="d-md-flex gap-md-4 gap-2">
              {/* Searchbar */}
              <div class="rounded d-flex align-items-center">
                <i class="bx bx-search cursor-pointer"></i>
                <input
                  type="text"
                  placeholder="Search by id, transaction"
                  class="search-input"
                />
              </div>
              <div class="d-md-flex">
                {/* Updates */}
                <div class="d-flex align-items-center cursor-pointer me-2">
                  <i class="bx bxs-message-rounded-dots fs-5"></i> Updates
                </div>

                {/* Support */}
                <div class="d-flex align-items-center cursor-pointer me-2">
                  <i class="bx bxs-message-rounded-dots fs-5"></i> Support
                </div>

                {/* Profile */}
                <div class="position-relative">
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle d-flex align-items-center cursor-pointer navbar-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      shane@metint.com
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <span
                        class="text-danger d-flex px-3 text-align-center cursor-pointer"
                        onclick={() => {
                          localStorage.removeItem("token");
                          m.route.set("/");
                        }}
                      >
                        Log out
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    },
  };
};

export default Navbar;
