import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <div className="flex h-svh items-center justify-center ">
      <div>
        <div
        
          className="w-screen shadow-md  border  rounded-md md:p-8 dark:bg-slate-900 dark:text-white modal-box"
        >
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Sign up</h3>
          <div className=" mt-5">
            <label className="block text-sm mt-5" htmlFor="name">
              name
            </label>
            <input
              type="text"
              className="input input-bordered w-full dark:text-slate-900"
              placeholder="Email"
              id="name"
            />
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

            <button className="btn btn-secondary w-full mt-7">Register</button>
          </div>
          <div className="flex mt-10 justify-between">
            <p className="text-sm">Already have an account ?</p>
            <button
              className="text-blue-500 underline cursor-pointer"
              onClick={() => {
                document.getElementById("my_modal_3").showModal();
               }}
            >
              Sign in
            </button>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
