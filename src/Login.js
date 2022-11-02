import m from "mithril";
const Login = () => {
  return {
    view: () => (
      <>
        <div class="h-100 ">
          <h3 class="text-center w-100 my-5">App Smith</h3>
          <div class="bg-white shadow-md rounded w-50 mx-auto p-5">
            <h4 class="text-center">Sign into your account</h4>
            <div class="text-center py-2">
              <span>New to Appsmith?</span>
              <a href="" class="px-2 cursor-pointer">
                Sign up
              </a>
            </div>

            <form class="my-4">
              <div>
                <label class="">Email</label>
                <input
                  type="email"
                  class="form-input fs-6"
                  placeholder="abc@gmail.com"
                />
              </div>

              <div class="my-3">
                <label class="">Password</label>
                <input
                  type="password"
                  class="form-input fs-6"
                  placeholder="password"
                />
              </div>
              <button
                id="login-btn"
                onclick={() => m.route.set("/dashboard")}
                class="w-100 py-2 my-1 fs-6 text-white border-none text-center"
              >
                Signin
              </button>
              <div class="text-center my-2">Forgot Password</div>
            </form>
          </div>
        </div>
      </>
    ),
  };
};

export default Login;
