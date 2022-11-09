let formValues = {
  loading: true,
};
const get_log_device = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/oddit-log-device",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    $(document).ready(function () {
      $("#log_table").DataTable({
        responsive: true,
        data: data.map((item) => {
          return Object.values(item);
        }),
        columns: column.map((item) => {
          return { title: item };
        }),
      });
    });
  });
};

const get_oddit_device = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/oddit-device",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#oddit_table").DataTable({
        responsive: true,
        data: data.map((item) => {
          return Object.values(item);
        }),
        columns: column.map((item) => {
          return { title: item };
        }),
      });
    });
  });
};

const Dashboard = () => {
  return {
    oninit: () => {
      get_log_device();
      get_oddit_device();
    },
    view: () => (
      <>
        <div class="container-fluid py-2">
          <h5 class="text-center  my-3">Dashboard</h5>
          <div class="">
            {/* Table No-1 */}
            <div class="">
              <h5 class="  my-2">Oddit Log Devices</h5>
          {formValues.loading && "Loading..."}
              <table
                id="log_table"
                class="display"
                cellspacing="0"
                width="100%"
              ></table>
            </div>
            {/* Table No-2 */}
            <div class=" my-5">
              <h5 class="  my-2">Oddit Devices</h5>
              {formValues.loading && "Loading..."}

              <table
                id="oddit_table"
                class="display"
                cellspacing="0"
                width="100%"
              ></table>
            </div>
          </div>
        </div>
      </>
    ),
  };
};

export default Dashboard;
