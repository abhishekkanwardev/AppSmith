import m from "mithril";

const Signup = () => {
  let formData = {
    email: "",
    password: "",
  };

  let handleInput = (e) => {
    formData = { ...formData, [e.target.name]: e.target.value };
  };
  return {
    view: () => {
      return (
        
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-5">
                
                  <h3 class="text-center w-100 my-4">App Smith</h3>
                  <div class="bg-white shadow-lg rounded mx-auto p-md-5 p-4">
                    <h4 class="text-center">Create your free account</h4>
                    <div class="text-center py-2">
                      <span>Already have an Account ?</span>
                      <span
                        onclick={() => m.route.set("/")}
                        class="px-2 text-primary cursor-pointer"
                      >
                        Sign in
                      </span>
                    </div>
                    <div class="my-4">
                      {/* Email */}
                      <div>
                        <label class="">Email</label>
                        <input
                          name="email"
                          type="email"
                          class="form-input fs-6"
                          placeholder="abc@gmail.com"
                          value={formData.email}
                          oninput={(e) => {
                            handleInput(e);
                          }}
                        />
                      </div>

                      {/* Password */}
                      <div class="my-3">
                        <label class="">Password</label>
                        <input
                          name="password"
                          type="password"
                          class="form-input fs-6"
                          placeholder="password"
                          value={formData.password}
                          oninput={(e) => {
                            handleInput(e);
                          }}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        id="login-btn"
                        onclick={() => {
                          console.log(formData);
                          m.route.set("/");
                        }}
                        class="w-100 py-2 my-1 fs-6 text-white border-none text-center"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div class="d-flex m-4  justify-content-between align-items-center">
                    <span class="cursor-pointer">Privacy Policy</span>
                    <span class="cursor-pointer">Terms and conditions </span>
                  </div>
               
              </div>
            </div>
          </div>
        
      );
    },
  };
};

export default Signup;
