import React from 'react';
import { Link } from 'react-router';
export default function Register() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Register </h1>

      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          className="border-0 p-3 rounded-lg bg-white focus:outline-slate-600"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-0 p-3 rounded-lg bg-white focus:outline-slate-600"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-0 p-3 rounded-lg bg-white focus:outline-slate-600"
          id="password"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase font-medium hover:opacity-95 transition disabled:opacity-80"
        >
          Register
        </button>
      </form>
      <div className="flex items-center gap-2 mt-5">
        <p>Have an account? </p>
        <Link to="/sign-in">
          <span className="text-blue-700 ">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
