import m from "mithril";

const Sample = {
  view: () => {
    return m("div", { class: "container-fluid" }, [
      m("div", { class: "row justify-content-center" }, [
        m("div", { class: "col-md-8 col-lg-5" }, [
          m("h3", { class: "text-center w-100 my-4" }, "App Smith"),
          m("div", { class: "bg-white shadow-lg rounded mx-auto p-md-5 p-4" }, [
            // Title
            m("h4", { class: "text-center" }, "Create your free account"),
            m("div", { class: "text-center py-2" }, [
              m("span", "Already have an Account ?"),
              m(
                "span",
                {
                  onclick: () => m.route.set("/"),
                  class: "px-2 text-primary cursor-pointer",
                },
                "Already have an Account ?"
              ),
            ]),
            // Form Start
            m("div", { class: "my-4" }, [
              m("div", [
                m("label", "Email"),
                m("input", {
                  class: "form-input fs-6",
                  placeholder: "abc@gmail.com",
                  name: "email",
                  type: "email",
                }),
              ]),

              m("div", { class: "my-3" }, [
                m("label", "Password"),
                m("input", {
                  class: "form-input fs-6",
                  placeholder: "password",
                  name: "password",
                  type: "password",
                }),
              ]),

              m(
                "button",
                {
                  id: "login-btn",
                  class:
                    "w-100 py-2 my-1 fs-6 text-white border-none text-center",
                },
                "Sign Up"
              ),
            ]),
          ]),

          // Privacy & Conditions
          m(
            "div",
            { class: "d-flex m-4  justify-content-between align-items-center" },
            [
              m("span", { class: "cursor-pointer" }, "Privacy Policy"),
              m("span", { class: "cursor-pointer" }, "Terms and conditions"),
            ]
          ),
        ]),
      ]),
    ]);
  },
};

export default Sample;
