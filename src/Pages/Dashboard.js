const Dashboard = () => {
  let formValues = {
    loading: true,
    data: [],
    column: [],
  };
  const getData = () => {
    m.request({
      method: "GET",
      url: "http://127.0.0.1:8000/api/v1/oddit-log-device",
    }).then((response) => {
      formValues.data = response.data;
      formValues.column = Object.keys(response.data[0]);
      formValues.loading = false;
    });
  };
  return {
    oninit: getData(),
    view: () => (
      <>
        <div class="container-fluid py-2">
          <h5 class="text-center  my-3">Dashboard</h5>
          <div class="d-flex bg-white w-100 p-2 justify-content-between  border align-items-center">
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
          {formValues.loading ? (
            <p>Fetching Data...</p>
          ) : (
            <table
              id="table_id"
              cellspacing="0"
              width="100%"
              class="table display table-hover table-bordered"
            >
              <thead>
                <tr>
                  <th scope="col ">
                    <input type="checkbox" />
                  </th>
                  {formValues.column.map((item, index) => {
                    return (
                      <th scope="col" class="text-capitalize" key={index}>
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {formValues.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col ">
                        <input type="checkbox" />
                      </td>
                      {Object.values(item).map((value) => {
                        return <td scope="col ">{value}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </>
    ),
  };
};

export default Dashboard;
