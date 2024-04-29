import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import { toast } from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Sign up successful");
          navigate(from, { replace: true });
          
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
          toast.error(err.response.data.message);
        }
      });
  };
  return (
    <div className="flex h-svh items-center justify-center ">
      <div>
        <div className="w-screen shadow-md  border  rounded-md md:p-8 dark:bg-slate-900 dark:text-white modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Sign up</h3>
            <div className=" mt-5">
              <label className="block text-sm mt-5" htmlFor="name">
                name
              </label>
              <input
                type="text"
                className="input input-bordered w-full dark:text-slate-900"
                placeholder="name"
                id="name"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-400">
                  This field is required
                </span>
              )}
              <label className="block text-sm mt-5" htmlFor="regEmail">
                Email
              </label>
              <input
                type="email"
                className="input input-bordered w-full dark:text-slate-900"
                placeholder="Email"
                id="regEmail"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-400">
                  This field is required
                </span>
              )}
              <label className="mt-5 block text-sm" htmlFor="regPassword">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full dark:text-slate-900"
                placeholder="Password"
                id="regPassword"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-400">
                  This field is required
                </span>
              )}

              <button className="btn btn-secondary w-full mt-7">
                Register
              </button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
