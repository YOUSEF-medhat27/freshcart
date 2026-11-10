"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaHeadset,
  FaPaperPlane,
  FaQuestion,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeadphones,
  FaPhone,
} from "react-icons/fa6";
import PageHeader from "../header/page";

const cardClass = "rounded-xl border border-gray-100 bg-white p-4 shadow-sm";
const iconBox =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-sm text-primary-600";
const labelClass = "mb-1.5 block text-[11px] text-gray-700";
const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs text-gray-700 outline-none placeholder:text-gray-400 transition focus:border-spring-green-36";
const socialClass =
  "flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500 transition hover:bg-spring-green-36 hover:text-white";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <main className="bg-slate-50 py-8">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team."
        icon={FaHeadphones}
        background="bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
      />
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 lg:grid-cols-[320px_1fr] lg:px-6">
        <div className="space-y-4">
          <div className={cardClass}>
            <div className="flex items-start gap-3">
              <span className={iconBox}>
                <FaPhone />
              </span>
              <div>
                <h3 className="text-xs font-semibold text-gray-900">Phone</h3>
                <p className="mt-0.5 text-[11px] text-gray-500">
                  Mon-Fri from 8am to 6pm
                </p>
                <a
                  href="mailto:support@freshcart.com"
                  className="mt-2 block text-xs font-medium text-primary-600 hover:underline"
                >
                  +1 (800) 123-4567
                </a>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <div className="flex items-start gap-3">
              <span className={iconBox}>
                <FaEnvelope />
              </span>
              <div>
                <h3 className="text-xs font-semibold text-gray-900">Email</h3>
                <p className="mt-0.5 text-[11px] text-gray-500">
                  We&apos;ll respond within 24 hours
                </p>
                <a
                  href="mailto:support@freshcart.com"
                  className="mt-2 block text-xs font-medium text-primary-600 hover:underline"
                >
                  support@freshcart.com
                </a>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <div className="flex items-start gap-3">
              <span className={iconBox}>
                <FaLocationDot />
              </span>
              <div>
                <h3 className="text-xs font-semibold text-gray-900">Office</h3>
                <p className="mt-0.5 text-[11px] leading-relaxed text-gray-500">
                  123 Commerce Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <div className="flex items-start gap-3">
              <span className={iconBox}>
                <FaClock />
              </span>
              <div>
                <h3 className="text-xs font-semibold text-gray-900">
                  Business Hours
                </h3>
                <p className="mt-0.5 text-[11px] leading-relaxed text-gray-500">
                  Monday - Friday: 8am - 6pm
                  <br />
                  Saturday: 9am - 4pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <h3 className="text-xs font-semibold text-gray-900">Follow Us</h3>
            <div className="mt-3 flex gap-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
                className={socialClass}
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
                className={socialClass}
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                className={socialClass}
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className={socialClass}
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {/* Form card */}
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className={iconBox}>
                <FaHeadset />
              </span>
              <div className="leading-tight">
                <h2 className="text-base font-bold text-gray-900">
                  Send us a Message
                </h2>
                <p className="text-[11px] text-gray-500">
                  Fill out the form and we&apos;ll get back to you
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer text-gray-800`}
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="flex items-center bg-linear-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80] gap-2 rounded-lg  px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-green-700 cursor-pointer"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-xs text-primary-600 shadow-sm">
              <FaQuestion />
            </span>
            <div>
              <h3 className="text-xs font-semibold text-gray-900">
                Looking for quick answers?
              </h3>
              <p className="mt-1 text-[11px] text-gray-600">
                Check out our Help Center for frequently asked questions about
                orders, shipping, returns, and more.
              </p>
              <Link
                href="/help"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-primary-600 hover:underline"
              >
                Visit Help Center
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
