import m from "mithril";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

let data = {
  state: "Search",
  setState: (item) => {
    data.state = item;
  },
};

const Tabs = {
  view: () => {
    switch (data.state) {
      case "Search":
        return (
          <div class=" my-2 border">
            <div class="d-flex justify-content-between px-1 py-2 align-items-center">
              {/* left Search box */}
              <form class="d-flex align-items-center" role="search">
                <i class="bx bx-search mx-2"></i>
                <input
                  class="custom-input"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <div class="d-flex align-items-center ">
                <span class="page-box-text"> 0 records </span>
                <span class="page-box">
                  <i class="bx fs-5 bx-chevron-left"></i>
                </span>
                <span class="page-box-text"> Page </span>
                <input type="text" value="1" class="page-box-number" />
                <span class="page-box-text"> of 1 </span>
                <span class="page-box">
                  <i class="bx fs-5 bx-chevron-right"></i>
                </span>
              </div>
            </div>
            <table class="table border-top ">
              <thead class="bg-light">
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Pallete</th>
                  <th scope="col">Carton</th>
                  <th scope="col">Carton_Desc</th>
                </tr>
              </thead>
              <tbody>
                {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
                  (item, index) => {
                    return (
                      <tr key={index} class="fs-6">
                        <th scope="row">{index + 1}</th>
                        <td>Mark {index + 1}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        );

      case "Tree":
        return <div>Tree</div>;

      case "Device Log":
        return (
          <div class=" my-2 border">
            <div class="d-flex justify-content-between px-1 py-2 align-items-center">
              {/* left Search box */}
              <form class="d-flex align-items-center" role="search">
                <i class="bx bx-search mx-2"></i>
                <input
                  class="custom-input"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <div class="d-flex align-items-center ">
                <span class="page-box-text"> 0 records </span>
                <span class="page-box">
                  <i class="bx fs-5 bx-chevron-left"></i>
                </span>
                <span class="page-box-text"> Page </span>
                <input type="text" value="1" class="page-box-number" />
                <span class="page-box-text"> of 1 </span>
                <span class="page-box">
                  <i class="bx fs-5 bx-chevron-right"></i>
                </span>
              </div>
            </div>
            <table class="table border-top ">
              <thead class="bg-light">
                <tr>
                  <th scope="col">Device</th>
                  <th scope="col">Carton</th>
                  <th scope="col">Project</th>
                  <th scope="col">Carton_User</th>
                </tr>
              </thead>
              <tbody>
                {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
                  (item, index) => {
                    return (
                      <tr key={index} class="fs-6">
                        <th scope="row">{index + 1}</th>
                        <td>Mark {index + 1}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        );

      case "History View (new)":
        return (
          <>
            {/* inputs */}
            <div class="d-flex justify-content-between px-1 py-2 align-items-center">
              {/* left Search box */}
              <form class="d-flex gap-3 my-2 align-items-center" role="search">
                <div class="d-flex align-items-center ">
                  <label class="pagination-title">Device:</label>
                  <input
                    class="custom-input-2"
                    type="text"
                    aria-label="Search"
                  />
                </div>
                <div class="d-flex align-items-center ">
                  <label class="pagination-title">Carton:</label>
                  <input
                    class="custom-input-2"
                    type="text"
                    aria-label="Search"
                  />
                </div>
                <div class="d-flex align-items-center ">
                  <label class="pagination-title">Project:</label>
                  <input
                    class="custom-input-2"
                    type="text"
                    aria-label="Search"
                  />
                  <button class="text-light mx-2 border-0 px-3 bg-success">
                    <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </form>
              <div class="pagination-title">
                Limited to 100 results for performance...
              </div>
            </div>
            <div class=" my-2 border">
              {/* Search , filter  & download */}
              <div class="d-flex justify-content-between px-1 py-2 align-items-center">
                {/* left Search box */}
                <form class="d-flex align-items-center" role="search">
                  <i class="bx bx-search mx-2"></i>
                  <input
                    class="custom-input"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <div class="buttons">
                    <i class="bx bx-filter"></i> Filters
                  </div>
                  <div class="buttons">
                    <i class="bx bx-download"></i> Downloads
                  </div>
                </form>
                <div class="d-flex align-items-center ">
                  <span class="page-box-text"> 0 records </span>
                  <span class="page-box">
                    <i class="bx fs-5 bx-chevron-left"></i>
                  </span>
                  <span class="page-box-text"> Page </span>
                  <input type="text" value="1" class="page-box-number" />
                  <span class="page-box-text"> of 1 </span>
                  <span class="page-box">
                    <i class="bx fs-5 bx-chevron-right"></i>
                  </span>
                </div>
              </div>
              <table class="table border-top ">
                <thead class="bg-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Pallete</th>
                    <th scope="col">Carton</th>
                    <th scope="col">Carton_Desc</th>
                    <th scope="col">Project</th>
                    <th scope="col">Pallete</th>
                    <th scope="col">Carton</th>
                    <th scope="col">Carton_Desc</th>
                  </tr>
                </thead>
                <tbody>
                  {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
                    (item, index) => {
                      return (
                        <tr key={index} class="fs-6">
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <th></th>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </>
        );

      default:
        return (
          <div class=" my-2 border">
            <div class="d-flex justify-content-between px-1 py-2 align-items-center">
              {/* left Search box */}
              <form class="d-flex align-items-center" role="search">
                <i class="bx bx-search mx-2"></i>
                <input
                  class="custom-input"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <div class="d-flex align-items-center">
                <span class="page-box">
                  <i class="bx fs-6 bx-chevron-left"></i>
                </span>
                <span class="page-box">1</span>
                <span class="page-box">
                  <i class="bx fs-6 bx-chevron-right"></i>
                </span>
              </div>
            </div>
            <table class="table border-top ">
              <thead class="bg-light">
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Pallete</th>
                  <th scope="col">Carton</th>
                  <th scope="col">Carton_Desc</th>
                </tr>
              </thead>
              <tbody>
                {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
                  (item, index) => {
                    return (
                      <tr key={index} class="fs-6">
                        <th scope="row">{index + 1}</th>
                        <td>Mark {index + 1}</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        );
    }
  },
};

const Home = () => {
  return {
    view: () => (
      <>
       
        <div class="container-fluid py-2">
          <h5 class="text-center  my-3">Oddit Viewer</h5>

          <section class=" p-3 bg-white  rounded">
            <div class="pt-2 border-bottom">
              {["Search", "Tree", "Device Log", "History View (new)"].map(
                (item, index) => {
                  return (
                    <span
                      key={index}
                      id="link"
                      onclick={() => data.setState(item)}
                      class={item == data.state && "active"}
                    >
                      {item}
                    </span>
                  );
                }
              )}
            </div>
            <Tabs />
          </section>
        </div>
     
      </>
    ),
  };
};

export default Home;
