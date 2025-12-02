import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetails({ params }) {
  // FIX: params is NOT a promise
  const { id } = await params;

  // Fetch single service
  const res = await fetch(
    `https://pet-care-server-ten.vercel.app/services/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <h1 className="text-center text-2xl font-semibold my-20 text-red-500">
        Failed to load service details.
      </h1>
    );
  }

  const product = await res.json();

  if (!product?._id) {
    return (
      <h1 className="text-center text-2xl font-semibold my-20 text-red-500">
        Service Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-12 px-5">
      {/* Back Button */}
      <Link
        href="/services/allServices"
        className="inline-block mb-6 text-blue-700 hover:underline hover:text-blue-900 transition"
      >
        ← Back to Services
      </Link>

      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 border">
        
        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.serviceName}
            width={500}
            height={500}
            className="rounded-xl shadow-md object-cover w-full h-96"
          />
        </div>

        {/* DETAILS */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              {product.serviceName}
            </h1>
            <p className="text-gray-500 text-sm">
              Category:{" "}
              <span className="text-yellow-600 font-semibold">
                {product.category}
              </span>
            </p>
          </div>

          {/* Price */}
          <div className="flex justify-between items-center border-b pb-4">
            <p className="text-2xl font-bold text-blue-700">
              ${product.price}
            </p>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              Slots: {product.slotsAvailable}
            </span>
          </div>

          {/* Provider */}
          <div>
            <p className="text-gray-700 text-lg font-medium">
              Provider: {product.providerName}
            </p>
            <p className="text-gray-500 text-sm">
              Email: {product.providerEmail}
            </p>
            <p className="text-yellow-600 text-lg font-bold mt-2">
              ⭐ {product.rating}
            </p>
          </div>

          {/* Description */}
          <div className="pt-4 border-t">
            <h3 className="text-lg font-semibold text-gray-800">
              Description
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Book Button */}
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
