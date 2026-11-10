"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaCartShopping,
  FaHouse,
  FaArrowLeft,
  FaAppleWhole,
  FaCarrot,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa6";

const destinations = [
  { label: "All Products", href: "/shop", active: true },
  { label: "Categories", href: "/Categories" },
  { label: "Today's Deals", href: "/deals" },
  { label: "Contact Us", href: "/Contact" },
];

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-[calc(100vh-200px)] items-center justify-center overflow-hidden bg-slate-50 px-4 py-16">
      <FaAppleWhole className="absolute left-[5%] top-[12%] text-2xl text-green-200" />
      <FaAppleWhole className="absolute left-[15%] top-[55%] text-sm text-green-200" />
      <FaLeaf className="absolute bottom-[15%] left-[8%] text-xl text-green-200" />
      <FaCarrot className="absolute right-[10%] top-[20%] rotate-45 text-lg text-green-200" />
      <FaCarrot className="absolute right-[6%] top-[45%] rotate-45 text-sm text-green-200" />
      <FaSeedling className="absolute bottom-[10%] right-[15%] text-2xl text-green-200" />

      <div className="relative z-10 flex flex-col items-center text-center">
    
        <div className="relative">
          <div className="flex h-28 w-40 items-center justify-center rounded-3xl bg-linear-to-br from-white to-green-50 shadow-lg">
            <FaCartShopping className="text-6xl text-green-300" />
          </div>

          <span className="absolute -right-6 -top-4 flex h-15 w-15 items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80] text-sm font-extrabold text-white shadow-lg">
            404
          </span>
        </div>

       

        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
          Oops! Nothing Here
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
          Looks like this page went out of stock! Don&apos;t worry, there&apos;s
          plenty more fresh content to explore.
        </p>

        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-500/30 transition hover:bg-green-700"
          >
            <FaHouse />
            Go to Homepage
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 cursor-pointer"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        <div className="mt-10 w-full max-w-md rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
            Popular Destinations
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {destinations.map(({ label, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium transition ${
                  active
                    ? "bg-green-50 text-green-800 hover:bg-green-100"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}