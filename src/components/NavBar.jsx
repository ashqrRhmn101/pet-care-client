"use client";

import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function NavBar() {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user)

  const handleSignOut = () => {
    signOutUser()
      .then(() =>
        Swal.fire({
          title: "Logged Out!",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonColor: "#303082",
        })
      )
      .catch((error) =>
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        })
      );
  };

  // Navigation Links
  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="font-semibold text-primary hover:text-secondary"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/services/allServices"
          className="font-semibold text-primary hover:text-secondary"
        >
          All Services
        </Link>
      </li>
      <li>
        <Link
          href="/shop/allProducts"
          className="font-semibold text-primary hover:text-secondary"
        >
          Shop
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pet-logo.jpg"
            alt="Logo"
            width={55}
            height={55}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-primary">Pate Care</h1>
        </Link>
      </div>

      {/* CENTER (Desktop menu) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      {/* RIGHT — USER + THEME SWITCH */}
      <div className="navbar-end flex items-center">
        {/* DARK/LIGHT TOGGLE */}
        <label className="swap swap-rotate mr-3 cursor-pointer">
          <input
            type="checkbox"
            onChange={(e) =>
              document.documentElement.setAttribute(
                "data-theme",
                e.target.checked ? "dark" : "light"
              )
            }
          />

          {/* Moon  */}
          <FaMoon className="swap-on text-xl text-primary" />

          {/* Sun */}
          <FaSun className="swap-off text-xl text-secondary" />
        </label>

        {/* USER MENU */}
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-green-500">
                <Image
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  alt="User Avatar"
                  width={40}
                  height={40}
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="text-center font-semibold text-primary">
                {user.displayName}
              </li>
              <li className="text-center font-medium text-gray-500 text-sm mb-2">
                {user.email}
              </li>
              <li>
                <Link href="/my-profile">Profile</Link>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
              <li>
                <button onClick={handleSignOut} className="text-red-500">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/auth/login">
              <button className="btn btn-primary">Login</button>
            </Link>
            <Link href="/auth/register">
              <button className="btn btn-secondary ml-2">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
