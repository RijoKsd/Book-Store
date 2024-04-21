import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className=" mt-5">
            <label className="block text-sm mt-5" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full dark:text-slate-900"
              placeholder="Email"
              id="email"
            />
            <label className="mt-5 block text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full dark:text-slate-900"
              placeholder="Password"
              id="password"
            />

            <button className="btn btn-secondary w-full mt-7">Login</button>
          </div>
          <div className="flex mt-10 justify-between">
            <p className="text-sm">Don&#39;t have an account?</p>
            <Link to="/signup" className="text-blue-500 underline cursor-pointer">
              Register{" "}
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
