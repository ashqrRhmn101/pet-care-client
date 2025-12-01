"use client";

import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { setCookie } from "cookies-next";
// import GoogleSocial from "@/app/about/social/page";

export default function Register() {
  const { registerUser, userProfile, user } = useContext(AuthContext);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [regError, setRegError] = useState(""); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // If already logged in → stop register
  if (user) {
    return (
      <div className="container mx-auto mt-10 p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold text-red-500">
          You are already logged in!
        </h2>
        <p>Please logout before creating a new account.</p>
        <Link href="/">
          <button className="btn btn-neutral mt-3">Go Home</button>
        </Link>
      </div>
    );
  }

  const handleRegister = (data) => {
    setRegError(""); 
    setLoading(true);

    registerUser(data.email, data.password)
      .then((result) => {
        const profileData = {
          displayName: data.name,
          photoURL: data.url,
        };

        userProfile(profileData)
          .then(() => {
            console.log("Profile Updated ✔️");

            // Set Cookie
            // setCookie("authUser", result.user.uid, { path: "/" });

            setLoading(false);
            router.push("/");
          })
          .catch((error) => {
            setRegError(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        // Show firebase error
        setRegError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white container mx-auto my-10 border-base-300 rounded-box w-xs border p-4">
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset rounded-box p-4">

          <h2 className="text-3xl font-bold text-[#03373D]">Create Account</h2>
          <p className="text-lg">Register with ZapShift</p>

          {/* 🔥 Show Error */}
          {regError && (
            <p className="text-red-500 my-2 text-sm">{regError}</p>
          )}

          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          {/* Photo */}
          <label className="label">Photo URL</label>
          <input
            type="url"
            {...register("url", { required: "Photo URL is required" })}
            className="input"
            placeholder="Your Photo URL"
          />
          {errors.url && (
            <p className="text-red-500 text-sm">{errors.url.message}</p>
          )}

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <button className="btn btn-neutral mt-4" disabled={loading}>
            {loading ? "Please wait..." : "Register"}
          </button>

          <p className="text-sm mt-2">
            Already have an account?{" "}
            <Link href="/auth/login">
              <span className="text-[#CAEB66] cursor-pointer">Login</span>
            </Link>
          </p>
        </fieldset>
      </form>
      {/* <GoogleSocial/> */}
    </div>
  );
}
