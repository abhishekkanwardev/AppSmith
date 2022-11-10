



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

const get_oddit_carton = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/oddit-carton",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#oddit_carton").DataTable({
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

const get_oddit_log_carton = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/oddit-log-carton",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#oddit__log_carton").DataTable({
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

const get_oddit_log_project = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/oddit-log-project",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#oddit_log_project").DataTable({
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

const get_oddit_project = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/oddit-project",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#oddit_project").DataTable({
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

const WholeCell_Filter = () => {
  return {
    oninit: () => {
      get_log_device();
      get_oddit_device();
      get_oddit_carton();
      get_oddit_log_carton();
      get_oddit_log_project();
      get_oddit_project();
    },
    view: () => (
      <>
        <div class="container-fluid py-2">
          <h5 class="my-5 text-primary ">WholeCell_Filter</h5>

          <div class="row">
            {/* Table No-1 */}
            <div class="col-lg-6 mb-5">
              <div class="responsive-table">
                <h5>Log Table</h5>
                {formValues.loading && "Loading..."}
                <table
                  id="log_table"
                  class="display responsive nowrap "
                  cellspacing="0"
                  width="100%"
                ></table>
              </div>
            </div>
            {/* Table No-2 */}
            <div class="col-lg-6 mb-5">
              <div class="responsive-table">
                <h5>Oddit Table</h5>
                {formValues.loading && "Loading..."}

                <table
                  id="oddit_table"
                  class="display responsive nowrap"
                  cellspacing="0"
                  width="100%"
                ></table>
              </div>
            </div>

            {/* Table No-3 */}
            <div class="col-lg-6 mb-5">
              <div class="responsive-table">
                <h5>Oddit Carton</h5>
                {formValues.loading && "Loading..."}

                <table
                  id="oddit_carton"
                  class="display responsive nowrap"
                  cellspacing="0"
                  width="100%"
                ></table>
              </div>
            </div>

            {/* Table No-4 */}
            <div class="col-lg-6 mb-5">
              <div class="responsive-table">
                <h5>Oddit Log Carton</h5>
                {formValues.loading && "Loading..."}

                <table
                  id="oddit__log_carton"
                  class="display responsive nowrap"
                  cellspacing="0"
                  width="100%"
                ></table>
              </div>
            </div>
          </div>

          <hr />

          <div class="my-5">
            <i class="bx bx-refresh rounded fs-3 shadow-sm  mb-2 p-1 text-white bg-success"></i>
            <h5>Oddit Log Project</h5>
            {formValues.loading && "Loading..."}

            <div class="responsive-table">
              <table
                id="oddit_log_project"
                class="display responsive nowrap"
                cellspacing="0"
                width="100%"
              ></table>
            </div>
          </div>

          <div class="my-5">
            <i class="bx bx-refresh rounded fs-3 shadow-sm  mb-2 p-1 text-white bg-success"></i>{" "}
            <h5>Oddit Project</h5>
            {formValues.loading && "Loading..."}
            <div class="responsive-table">
              <table
                id="oddit_project"
                class="display responsive nowrap"
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

export default WholeCell_Filter;

