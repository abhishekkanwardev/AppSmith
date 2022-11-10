import m from "mithril";

let formValues = {
  loading: true,
};

const get_api_users = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/st-api-users",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#api_users").DataTable({
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

const get_wholecelldata = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/tbl-wholecelldata",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#wholecelldata").DataTable({
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

const get_test_history = () => {
  m.request({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/st-test-history-clean",
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $("#test_history").DataTable({
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

const Dashboard = {
  oninit: () => {
    get_api_users();
    get_wholecelldata();
    get_test_history();
  },
  view: () => (
    <>
      <div class="container-fluid py-2">
        <h5 class="my-5 text-primary ">Dashboard</h5>
        <div class="my-5">
          <h5>St Api Users</h5>
          <div class="responsive-table">
            {formValues.loading&&"Loading..."}
            <table
              id="api_users"
              class="display responsive nowrap"
              cellspacing="0"
              width="100%"
            ></table>
          </div>
        </div>

        <div class="my-5">
          <h5>Wholecell Data</h5>
          <div class="responsive-table">
            {formValues.loading&&"Loading..."}
            <table
              id="wholecelldata"
              class="display responsive nowrap"
              cellspacing="0"
              width="100%"
            ></table>
          </div>
        </div>

        <div class="my-5">
          <h5>Test History Clean</h5>
          <div class="responsive-table">
            {formValues.loading&&"Loading..."}
            <table
              id="test_history"
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

export default Dashboard;