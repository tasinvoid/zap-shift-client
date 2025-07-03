import React from "react";
import { Link } from "react-router";

import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { signIn, googleSignIn } = useAuth();
  function handleGoogleBtn() {
    googleSignIn().then((res) => res);
  }

  const onSubmit = (data) =>
    signIn(data.email, data.password)
      .then((res) => res)
      .catch((error) => error);
  return (
    <div>
      <p className="text-3xl font-semibold">Welcome Back</p>
      <div className="flex-1 border border-gray-500 rounded-3xl p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Login with Profast</p>
          <fieldset className="fieldset flex flex-col items-center">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email")}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-400" role="alert">
                password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-400" role="alert">
                six characters
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
          </fieldset>
          <button className="btn btn-neutral mt-4 ">Login</button>
          <p className="mt-4">
            Already have an account?
            <Link className="btn btn-link" to={"/auth/login"}>
              Login
            </Link>
          </p>
        </form>
        <p>or</p>
        <button
          className="btn bg-white text-black border-[#e5e5e5]"
          onClick={handleGoogleBtn}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
