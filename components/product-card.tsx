import Link from "next/link";
import React from "react";
import Image from "next/image";
import Overlay from "./overlay";

const ProductCard = () => {
  return (
    <div>
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <div className="image-container relative group">
            <Image
              height={400}
              width={400}
              className="object-cover"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="product image"
            />
            <div className="overlay opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center backdrop-blur-lg transition-all duration-500 ease-in-out rounded-xl">
              <span className="text-black">View Details</span>
            </div>
          </div>
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              Nike Air MX Super 2500 - Red
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">$449</span>
              <span className="text-sm text-slate-900 line-through">$699</span>
            </p>
            <div className="flex items-center">
              {/* Star rating SVGs */}
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
            </svg>
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
