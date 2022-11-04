import m from "mithril";
import axios from "axios";

const Login = () => {
  let formValues = {
    username: "",
    password: "",
  };

  let handleInput = (e) => {
    formValues = { ...formValues, [e.target.name]: e.target.value };
  };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   let url = "http://127.0.0.1:8000/auth/token/";
  //   m.request({
  //     method: "POST",
  //     url: url,
  //     body: formValues,
  //   }).then(function (result) {
  //     console.log(result);
  //   });
  // };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let url = "http://127.0.0.1:8000/auth/token/";
    const payload = new FormData();
    payload.append("username", formValues.username);
    payload.append("password", formValues.password);
    try {
      let response = await axios.post(url, payload);
      localStorage.setItem("token", response.data.access_token);
      m.route.set("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    view: () => (
      <>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5">
              <div class="h-100 ">
                <h3 class="text-center w-100 my-4">App Smith</h3>
                <div class="bg-white shadow-lg rounded mx-auto p-md-5 p-4">
                  <h4 class="text-center">Sign into your account</h4>
                  <div class="text-center py-2">
                    <span>New to Appsmith ?</span>
                    <span
                      onclick={() => m.route.set("/signup")}
                      class="px-2 text-primary cursor-pointer"
                    >
                      Sign up
                    </span>
                  </div>
                  <form onsubmit={handleSubmit} class="my-4">
                    {/* username */}
                    <div>
                      <label class="">Username</label>
                      <input
                        name="username"
                        type="text"
                        required
                        class="form-input fs-6"
                        placeholder="username"
                        value={formValues.username}
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
                        required
                        class="form-input fs-6"
                        placeholder="password"
                        value={formValues.password}
                        oninput={(e) => {
                          handleInput(e);
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <input
                      type="submit"
                      id="login-btn"
                      // onclick={() => {
                      //   console.log(formValues);
                      //   m.route.set("/dashboard");
                      // }}
                      value="Sign in"
                      class="w-100 py-2 my-1 fs-6 text-white border-none text-center"
                    />

                    <div class="text-center my-2">Forgot Password</div>
                  </form>
                </div>
                <div class="d-flex m-4  justify-content-between align-items-center">
                  <span>Privacy Policy</span>
                  <span>Terms and conditions </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  };
};

export default Login;
