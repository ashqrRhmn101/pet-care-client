// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useForm } from "react-hook-form";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const BASE = "https://pet-care-server-ten.vercel.app/services";

// export default function ServiceDetails({ id }) {
//   const bidModalRef = useRef(null);

//   // Fetch single service by ID
//   const { data: product, isLoading, isError } = useQuery({
//     queryKey: ["service", id],
//     queryFn: async () => {
//       const res = await axios.get(`${BASE}/${id}`);
//       return res.data;
//     }
//   });

//   // FORM
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm();

//   // AOS Init
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out", once: true });
//   }, []);

//   const plusCount = () => setCount((prev) => prev + 1);
//   const minusCount = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

//   // Booking Submit
//   const handleBook = (data) => {
//     bidModalRef.current.close();

//     Swal.fire({
//       title: "Booking Confirmed!",
//       text: `Your booking for ${product?.serviceName} is successful.`,
//       icon: "success"
//     });

//     reset();
//   };

//   if (isLoading)
//     return (
//       <h1 className="text-center text-2xl font-semibold my-20 text-blue-600">
//         Loading service details...
//       </h1>
//     );

//   if (isError)
//     return (
//       <h1 className="text-center text-2xl font-semibold my-20 text-red-600">
//         Failed to load service details.
//       </h1>
//     );

//   return (
//     <div className="max-w-7xl mx-auto my-10 bg-white rounded-xl shadow-2xl overflow-hidden p-6 lg:p-10">
//       {/* BACK BUTTON */}
//       <div className="mb-6">
//         <Link
//           href="/services/allServices"
//           className="text-md flex items-center gap-2 hover:text-[#303082] transition-all font-medium"
//         >
//           <span className="text-xl">←</span> Back to Services
//         </Link>
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* IMAGE */}
//         <div
//           data-aos="fade-right"
//           className="bg-gray-100 p-4 rounded-xl flex items-center justify-center"
//         >
//           <Image
//             src={product.image}
//             alt={product.serviceName}
//             width={500}
//             height={500}
//             className="w-full h-96 object-cover rounded-xl shadow-lg hover:scale-[1.02] transition"
//           />
//         </div>

//         {/* DETAILS */}
//         <div data-aos="fade-left" className="space-y-6">
//           <div className="border-b pb-4">
//             <h1 className="text-3xl font-extrabold text-[#303082] uppercase">
//               {product.serviceName}
//             </h1>
//             <p className="text-sm text-gray-600">
//               Category:{" "}
//               <span className="text-[#F7A703] font-semibold">
//                 {product.category}
//               </span>
//             </p>
//           </div>

//           {/* PRICE */}
//           <div className="flex items-center justify-between">
//             <p className="text-xl font-bold text-[#303082]">
//               USD <span className="text-2xl">{product.price}</span>
//             </p>
//             <span className="text-xs bg-green-100 text-green-700 py-1 px-3 rounded-full font-bold">
//               Pay in 4
//             </span>
//           </div>

//           {/* PROVIDER */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-700">
//               Provider: {product.providerName}
//             </h3>

//             <div className="flex items-center gap-2 mt-2">
//               <span className="font-medium text-gray-700">Rating:</span>
//               <span className="font-bold text-yellow-500">
//                 ⭐ {product.rating}
//               </span>
//             </div>

//             <p className="text-sm mt-2 text-gray-600">
//               Slots Available:{" "}
//               <span
//                 className={`font-semibold ${
//                   product.slotsAvailable > 0
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {product.slotsAvailable}
//               </span>
//             </p>
//           </div>

//           {/* DESCRIPTION */}
//           <div className="pt-4 border-t">
//             <h3 className="text-xl font-semibold text-gray-700">Description</h3>
//             <p className="text-gray-600 mt-2 leading-relaxed">
//               {product.description}
//             </p>
//           </div>

//           {/* BOOK BTN */}
//           <button
//             onClick={() => bidModalRef.current.showModal()}
//             className="bg-[#303082] text-white w-full py-3 rounded-lg hover:bg-[#F7A703] transition"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>

//       {/* MODAL */}
//       <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg mb-4">Book This Service</h3>

//           <form onSubmit={handleSubmit(handleBook)} className="space-y-4">
//             {/* Name */}
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//               className="input input-bordered w-full"
//               placeholder="Enter full name"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name.message}</p>
//             )}

//             {/* Email */}
//             <input
//               type="email"
//               {...register("email")}
//               className="input input-bordered w-full"
//               defaultValue={product.providerEmail}
//             />

//             <button
//               type="submit"
//               className="btn w-full bg-[#303082] text-white hover:bg-[#F7A703]"
//             >
//               Confirm Booking
//             </button>
//           </form>

//           <div className="modal-action">
//             <button className="btn" onClick={() => bidModalRef.current.close()}>
//               Close
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// }
