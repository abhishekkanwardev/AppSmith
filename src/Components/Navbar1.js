import m from "mithril";

const links = [
  { title: "Oddit Viewer", path: "/dashboard" },
  { title: "WholeSale Filter", path: "/WholeSale_Filter" },
];
let data = {
  setState: (item) => {
    m.route.set(item.path);
  },
};

const Navbar1 = {
  view: () => (
    <div
      style={{ backgroundColor: "white", zIndex: "10" }}
      class="position-sticky top-0 start-0"
    >
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid justify-content-center px-md-4">
          <a class="navbar-brand text-center" href="#!/">
            MMD Search
          </a>
        </div>
      </nav>
      <nav class="border-top border-bottom">
        <div class="container-fluid px-md-4 py-2">
          {links.map((item, index) => {
            return (
              <span
                key={index}
                id="link"
                onclick={() => data.setState(item)}
                class={item.path == m.route.get() && "active"}
              >
                {item.title}
              </span>
            );
          })}
        </div>
      </nav>
    </div>
  ),
};

export default Navbar1;
