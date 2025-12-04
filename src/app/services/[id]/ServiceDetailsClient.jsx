"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";

export default function ServiceDetails({ id }) {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load Service Data
  useEffect(() => {
    fetch(`https://pet-care-server-ten.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleBook = () => {
    if (!user) {
      router.push("/auth/login");
    } else {
      Swal.fire({
        icon: "success",
        title: "Booking Confirmed!",
        text: `Your booking for ${product.serviceName} is successful.`,
        confirmButtonColor: "#303082",
      });

      reset();
    }
  };

  if (loading) {
    return (
      <h1 className="text-center text-xl mt-20 text-blue-700 font-semibold">
        Loading service details...
      </h1>
    );
  }

  if (!product?._id) {
    return (
      <h1 className="text-center text-2xl font-semibold mt-20 text-red-600">
        Service Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-12 px-5">
      {/* Back Button */}
      <Link
        href="/services/allServices"
        className="inline-block mb-6 text-blue-700 hover:text-blue-900 hover:underline transition"
      >
        ← Back to Services
      </Link>

      <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <Image
          src={product.image}
          alt={product.serviceName}
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover w-full h-96"
        />

        {/* DETAILS */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {product.serviceName}
          </h1>

          <p className="text-gray-500">
            Category:
            <span className="font-semibold text-yellow-600">
              {" "}
              {product.category}
            </span>
          </p>

          <div className="flex justify-between items-center border-b pb-4">
            <p className="text-2xl font-bold text-blue-700">${product.price}</p>
            <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
              Slots: {product.slotsAvailable}
            </span>
          </div>

          <div>
            <p className="text-gray-700 text-lg font-medium">
              Provider: {product.providerName}
            </p>
            <p className="text-gray-500 text-sm">{product.providerEmail}</p>

            <p className="text-yellow-600 font-bold text-lg mt-2">
              ⭐ {product.rating}
            </p>
          </div>

          {/* Description */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit(handleBook)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="font-semibold text-gray-700">Your Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border p-3 rounded-md mt-1"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold text-gray-700">Your Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border p-3 rounded-md mt-1"
                placeholder="Enter email"
              />
            </div>

            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition shadow-md">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
