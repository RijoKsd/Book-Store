import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form   onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

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
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-400">This field is required</span>
              )}
              <label className="mt-5 block text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full dark:text-slate-900"
                placeholder="Password"
                id="password"
                {...register("password ", { required: true })}
              />

              {errors.password && (
                <span className="text-red-400">This field is required</span>
              )}

              <button className="btn btn-secondary w-full mt-7">Login</button>
            </div>
            <div className="flex mt-10 justify-between">
              <p className="text-sm">Don&#39;t have an account?</p>
              <Link
                to="/signup"
                className="text-blue-500 underline cursor-pointer"
              >
                Register{" "}
              </Link>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
