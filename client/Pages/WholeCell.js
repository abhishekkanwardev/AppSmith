import m from "mithril";

let formValues = {
  loading: true,
};

const apiEndpoints = [
  {
    endpoint: "oddit-log-device",
    tableId: "#log_table",
    title: "Log Table",
  },
  {
    endpoint: "oddit-device",
    tableId: "#oddit_table",
    title: "Oddit Table    ",
  },
  {
    endpoint: "oddit-carton",
    tableId: "#oddit_carton",
    title: "Oddit Carton",
  },
  {
    endpoint: "oddit-log-carton",
    tableId: "#oddit__log_carton",
    title: "Oddit Log Carton",
  },
  {
    endpoint: "oddit-log-project",
    tableId: "#oddit_log_project",
    title: "Oddit Log Project",
  },
  {
    endpoint: "oddit-project",
    tableId: "#oddit_project",
    title: "Oddit Project",
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
        pagingType: "simple",
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

const WholeCell = () => {
  return {
    oninit: () => {
      {
        apiEndpoints.map((item) => {
          get_Data(item.endpoint, item.tableId);
        });
      }
    },
    view: () => (
      <div class="container-fluid py-2">
        <h5 class="my-5 text-primary ">WholeCell</h5>

        <div class="row">
          {apiEndpoints.slice(0, 4).map((item, index) => {
            return (
              <div class="col-lg-6 my-5" key={index}>
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

        <hr />

        {apiEndpoints.slice(4).map((item, index) => {
          return (
            <div class="my-5" key={index}>
              <i class="bx bx-refresh rounded fs-3 shadow-sm  mb-2 p-1 text-white bg-success"></i>
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
};

export default WholeCell;
