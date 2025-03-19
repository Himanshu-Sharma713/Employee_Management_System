import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center justify-center "
        >
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-3 py-5 text-xl placeholder:text-gray-500"
            type="email"
            placeholder="Enter Email"
          />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-3 py-5 text-xl placeholder:text-gray-500 mt-4"
            type="password"
            placeholder="Enter Password"
          />
          <button className="text-white outline-none border-none bg-emerald-600 hover:bg-emerald-300  rounded-full px-5 py-3 text-2xl placeholder:text-white mt-4">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
