import React, { useState} from "react";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (form.email === "" && form.password === "") {
      toast.error("input fields cannot be empty");
      return false;
    } else if (form.password.length < 8) {
      toast.error("password must be more than 8 characters ");
      return false;
    } else {
      sessionStorage.setItem("adminDetails", JSON.stringify({ ...form }));
      window.location = "/";
      toast.success("success");
    }
  };

  return (
    <div className="flex flex-col shadow-md justify-center items-center min-h-screen">
      <ToastContainer />
      <div className="w-fit h-96 p-5 shadow-lg">
        <h2 className="text-center">Sign In</h2>
        <form method="" className="flex flex-col" onSubmit={submitHandler}>
          <input
            type="email"
            className="w-72 p-2 mt-5 border-2 rounded-sm border-solid "
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="w-72 p-2 mt-5 border-2 rounded-sm border-solid "
            placeholder="password"
            name="password"
            autoComplete="true"
            onChange={handleChange}
          />

          <button
            type="submit"
            // disabled={formValid ? false : true}
            className="bg-[#6161F5] text-white mt-10 p-2 rounded-md"
          >
            Sign In
          </button>
          <div className="flex mt-2 items-center">
            <input type="checkbox" className="mr-2" />
            <small>Remember me</small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
