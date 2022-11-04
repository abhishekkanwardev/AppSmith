import m from "mithril";
import Navbar from "../Components/Navbar";

const fakeData = {
  data: [
    {
      checkbox: true,
      model: "Samsung",
      count: 2,
    },
    {
      checkbox: false,
      model: "Apple",
      count: 6,
    },
    {
      checkbox: true,
      model: "Vivo",
      count: 10,
    },
    {
      checkbox: true,
      model: "Redmi",
      count: 1,
    },
  ],
};

const WholeSale_Filter = {
  view: () => (
    <>
      <div class="container-fluid  py-2 px-md-4">
        <h5 class="text-center my-3">WholeSale Filter</h5>

        {/* First Part */}
        <section class="row gap-2 px-2  px-lg-2">
          {/* manufacturer */}
          <div class="col-lg  ">
            <div class="d-flex justify-content-end bg-white p-2  border align-items-center">
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
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col ">
                    <input type="checkbox" />
                  </th>
                  <th scope="col ">manufacturer</th>
                  <th scope="col">count</th>
                </tr>
              </thead>
              <tbody>
                {fakeData.data.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col  ">
                        <input type="checkbox" checked={items.checkbox} />
                      </td>
                      <td scope="col ">{items.model}</td>
                      <td scope="col">{items.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* grade */}
          <div class="col-lg  ">
            <div class="d-flex justify-content-end bg-white p-2  border align-items-center">
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
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col ">
                    <input type="checkbox" />
                  </th>
                  <th scope="col ">grade</th>
                  <th scope="col">count</th>
                </tr>
              </thead>
              <tbody>
                {fakeData.data.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col  ">
                        <input type="checkbox" checked={items.checkbox} />
                      </td>
                      <td scope="col ">{items.model}</td>
                      <td scope="col">{items.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* model */}
          <div class="col-lg  ">
            <div class="d-flex bg-white p-2 justify-content-between  border align-items-center">
              {/* left Search box */}
              <form class="d-flex align-items-center" role="search">
                <i class="bx bx-search fs-6 mx-2"></i>
                <input
                  class="custom-input"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  className="search-input"
                />
              </form>
              <div class="d-flex align-items-center ">
                <div class="buttons">
                  <i class="bx bx-download"></i> Downloads
                </div>
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
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col ">
                    <input type="checkbox" />
                  </th>
                  <th scope="col ">model</th>
                  <th scope="col">count</th>
                </tr>
              </thead>
              <tbody>
                {fakeData.data.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col  ">
                        <input type="checkbox" checked={items.checkbox} />
                      </td>
                      <td scope="col ">{items.model}</td>
                      <td scope="col">{items.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        <section class="row gap-2 px-2  px-lg-2">
          {/* network */}
          <div class="col-lg  ">
            <div class="d-flex justify-content-end bg-white p-2  border align-items-center">
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
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col ">
                    <input type="checkbox" />
                  </th>
                  <th scope="col ">network</th>
                  <th scope="col">count</th>
                </tr>
              </thead>
              <tbody>
                {fakeData.data.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col  ">
                        <input type="checkbox" checked={items.checkbox} />
                      </td>
                      <td scope="col ">{items.model}</td>
                      <td scope="col">{items.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* color */}
          <div class="col-lg  ">
            <div class="d-flex justify-content-end bg-white p-2  border align-items-center">
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
            <table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col ">
                    <input type="checkbox" />
                  </th>
                  <th scope="col ">color</th>
                  <th scope="col">count</th>
                </tr>
              </thead>
              <tbody>
                {fakeData.data.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col  ">
                        <input type="checkbox" checked={items.checkbox} />
                      </td>
                      <td scope="col ">{items.model}</td>
                      <td scope="col">{items.count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Second Part */}
        <i class="bx bx-refresh fs-3 shadow-sm  mb-3 p-1 text-white bg-success"></i>
        <div class="d-flex bg-white p-2 justify-content-between  border align-items-center">
          {/* left Search box */}
          <form class="d-flex align-items-center" role="search">
            <i class="bx bx-search fs-6 mx-2"></i>
            <input
              class="custom-input"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              className="search-input"
            />
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
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col ">
                <input type="checkbox" />
              </th>
              <th scope="col ">esn</th>
              <th scope="col">model</th>
              <th scope="col">grade</th>
              <th scope="col">damage</th>
              <th scope="col">status</th>
              <th scope="col">sam_sku</th>
              <th scope="col">color</th>
              <th scope="col">gb</th>
              <th scope="col">carrier</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.data.map(() => {
              return (
                <tr>
                  <td scope="col ">
                    <input type="checkbox" />
                  </td>
                  <td scope="col "></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Third Part*/}
        <i class="bx bx-refresh fs-3 shadow-sm  mb-3 p-1 text-white bg-success"></i>
        <div class="d-flex bg-white p-2 justify-content-between  border align-items-center">
          {/* left Search box */}
          <form class="d-flex align-items-center" role="search">
            <i class="bx bx-search fs-6 mx-2"></i>
            <input
              class="custom-input"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              className="search-input"
            />

            <div class="buttons mx-2">
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
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col ">
                <input type="checkbox" />
              </th>
              <th scope="col">model</th>
              <th scope="col">color</th>
              <th scope="col">gb</th>
              <th scope="col">carrier</th>
              <th scope="col">count</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.data.map(() => {
              return (
                <tr>
                  <td scope="col ">
                    <input type="checkbox" />
                  </td>
                  <td scope="col "></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ),
};

export default WholeSale_Filter;
