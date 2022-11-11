import m from "mithril";

let formValues = {
  loading: true,
};

const apiEndpoints = [
  {
    endpoint: "st-api-users",
    tableId: "#api_users",
    title: "ST Api Users",
  },
  {
    endpoint: "tbl-wholecelldata",
    tableId: "#wholecelldata",
    title: "WholeCell Data",
  },
  {
    endpoint: "st-test-history-clean",
    tableId: "#test_history",
    title: "Test History",
  },
  {
    endpoint: "tbl-vendordatacopy",
    tableId: "#vendor_data",
    title: "Vendor Data",
  },
];

const get_Data = (endpoint, tableId) => {
  m.request({
    method: "GET",
    url: `${MITHRIL_SERVER_URL}${endpoint}`,
  }).then((response) => {
    let data = response.data;
    let column = Object.keys(response.data[0]);

    formValues.loading = false;
    $(document).ready(function () {
      $(tableId).DataTable({
        responsive: true,
        scrollX: true,
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
    {
      apiEndpoints.map((item) => {
        get_Data(item.endpoint, item.tableId);
      });
    }
  },
  view: () => (
    <div class="container-fluid py-2">
      <h5 class="my-5 text-primary ">Dashboard</h5>
      {apiEndpoints.map((item, index) => {
        return (
          <div class="my-5" key={index}>
            <h5>{item.title}</h5>
            <div class="">
              {formValues.loading && "Loading..."}
              <table
                id={item.tableId.slice(1)}
                class="display responsive nowrap"
                cellspacing="0"
                width="100%"
              ></table>
            </div>
          </div>
        );
      })}
    </div>
  ),
};

export default Dashboard;
