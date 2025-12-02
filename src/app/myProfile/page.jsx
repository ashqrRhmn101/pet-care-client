"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function MyProfile() {
  const { user, setUser, userProfile } = useContext(AuthContext);
  const [updating, setUpdating] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      url: user?.photoURL || "",
    },
  });

  // Profile Update Handler
  const handleUpdateProfile = async (data) => {
    setUpdating(true);
    try {
      await userProfile({ displayName: data.name, photoURL: data.url });
      setUser({ ...user, displayName: data.name, photoURL: data.url });
      Swal.fire({
        title: "Success!",
        text: "Profile updated successfully!",
        icon: "success",
        timer: 2000,
      });
      reset();
    } catch (error) {
      console.error("Profile update error:", error);
      Swal.fire({
        title: "Error!",
        text: error.message || "Failed to update profile",
        icon: "error",
      });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-14 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#303082]">
        My Profile
      </h2>
      <div className="flex justify-center mb-5">
        <Image
          src={user?.photoURL || ""}
          alt="User Profile"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-[#303082] shadow-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-1">
        {user?.displayName || "Anonymous User"}
      </h3>
      <p className="text-center text-gray-500 mb-6">
        {user?.email || "No email available"}
      </p>
      <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-5">
        <div>
          <label className="font-semibold text-gray-700">Your Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="font-semibold text-gray-700">Photo URL</label>
          <input
            type="url"
            {...register("url", {
              required: "Photo URL is required",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Enter a valid URL starting with http/https",
              },
            })}
            className="input input-bordered w-full mt-1"
            placeholder="https://example.com/your-photo.jpg"
          />
          {errors.url && (
            <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={updating}
          className="btn w-full bg-[#303082] hover:bg-[#F7A703] text-white font-bold text-lg disabled:opacity-70"
        >
          {updating ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}