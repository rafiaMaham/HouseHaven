import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-semibold font-montserrat my-7 text-maroon4441  ">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg "
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-maroon text-white font-montsrrat p-3  rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="mt-5 flex gap-2 items-center justify-center">
        <p className="font-montserrat">Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500  font-montserrat">Sign In </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
