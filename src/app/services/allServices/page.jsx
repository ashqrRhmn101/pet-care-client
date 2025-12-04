"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "@/app/loading/Loading";

export default function AllServicesCard() {
  const [products, setProducts] = useState([]);

  // Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch(
        "https://pet-care-server-ten.vercel.app/services",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      // console.log(data)
      setProducts(data);
    };

    fetchServices();
  }, []);

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative">
        <div className="p-10 bg-gradient-to-r from-[#303082] to-[#4a42b8]">
          <h1 className="text-[#F7A703] text-4xl font-bold text-center tracking-wide">
            All Services
          </h1>
        </div>
        <div className="p-3 bg-[#F7A703]" />
        <div className="p-2 bg-[#f7a603b7]" />
        <div className="p-1 bg-[#f7a6036d]" />
      </div>

      {/* Services Grid */}
      <div className="px-4 sm:px-8 lg:px-12 py-12 bg-gradient-to-b from-[#66470325] to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((card) => (
              <div key={card._id} data-aos="fade-up">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
                  {/* Image */}
                  <div className="relative overflow-hidden h-52 bg-gray-100">
                    <Image
                      src={card.image}
                      alt={card.serviceName}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm font-semibold text-yellow-600 flex items-center gap-1">
                        ⭐ {card.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-5 flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-[#303082] transition-colors">
                        {card.serviceName}
                      </h3>

                      {card.description && (
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {card.description}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      {/* Price */}
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-gray-600 text-sm font-medium">
                          Starting at
                        </span>
                        <span className="text-2xl font-bold text-[#303082]">
                          ${card.price}
                        </span>
                      </div>

                      {/* Button */}
                      <Link href={`/services/${card._id}`} className="block">
                        <button className="w-full py-3 px-6 bg-gradient-to-r from-[#303082] to-[#4a42b8] hover:from-[#F7A703] hover:to-[#ff9800] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {products.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg">
                <Loading />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
