const Navbar = () => {
  return {
    view: () => {
      return (
        <div
          style={{ background: "rgb(39,147,239)", color: "white" }}
          class="position-sticky text-white top-0 start-0"
        >
          <nav class="navbar container-fluid px-3 d-flex justify-content-between  navbar-expand-lg">
            <div class="fs-5 gap-1 d-flex align-items-center ">
              {" "}
              <i class="bx bxs-hot fs-4"></i> WholeCell
            </div>
            <div class="d-flex gap-md-4 gap-2">
              {/* Searchbar */}
              <div class="rounded d-flex align-items-center">
                <i class="bx bx-search cursor-pointer"></i>
                <input
                  type="text"
                  placeholder="Search by id, transaction"
                  class="search-input"
                />
              </div>

              {/* Updates */}
              <div class="d-flex align-items-center cursor-pointer gap-1">
                <i class="bx bxs-message-rounded-dots fs-5"></i> Updates
              </div>

              {/* Support */}
              <div class="d-flex align-items-center cursor-pointer gap-1">
                <i class="bx bxs-message-rounded-dots fs-5"></i> Support
              </div>

              {/* Profile */}
              <div class="position-relative">
              <div class="d-flex align-items-center cursor-pointer">
                shane@metint.com<i class="bx bx-chevron-down fs-5"></i>
              </div>
              <div class="position-">
                Hello
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
