import m from "mithril";
const Sidebar = () => {
  const navItems = [
    {
      name: "Dashboard",
      icon: " bxs-dashboard ",
      path: "/dashboard",
    },
    {
      name: "Purchase Orders",
      icon: " bx-package ",
      path: "#",
    },
    {
      name: "Inventory",
      icon: " bx-barcode ",
      path: "#",
    },
    {
      name: "Process batches",
      icon: " bx-list-ul ",
      path: "#",
    },
    {
      name: "Inventory Report",
      icon: " bxs-report ",
      path: "#",
    },
    {
      name: "Sales",
      icon: " bxs-cart ",
      path: "#",
    },
    {
      name: "Setting",
      icon: " bxs-cog ",
      path: "#",
    },
    {
      name: "Product Catalog",
      icon: " bxs-book-alt ",
      path: "#",
    },
    {
      name: "Integrations",
      icon: " bx-refresh ",
      path: "#",
    },
    {
      name: "Scan report",
      icon: " bx-scan ",
      path: "#",
    },
  ];
  return {
    view: () => {
      return (
        <div
          onmouseover={() => {
            document.getElementById("add-class").classList.add("wrap-over");
          }}
          onmouseout={() => {
            document.getElementById("add-class").classList.remove("wrap-over");
          }}
          className="aside-bar"
        >
          <div className="/dashboard">
            <ul className="side_menu_list p-0 mt-3">
              {navItems.map((items, index) => {
                return (
                  <li key={index} className="sm_menu">
                    <div
                      onclick={() => m.route.set(items.path)}
                      class="cursor-pointer"
                    >
                      <i class={`bx ${items.icon} fs-4`}></i>
                      <span class="side-menu-text">{items.name}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    },
  };
};

export default Sidebar;
