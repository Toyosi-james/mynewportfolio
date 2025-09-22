"use client";
import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import Image from "next/image";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzjpepd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Thanks for reaching out! I’ll get back to you soon.");
        form.reset();
      } else {
        setStatus("❌ Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-5 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg text-gray-700 dark:text-gray-300">
        Connect with me
      </h4>
      <h2 className="text-center text-4xl md:text-5xl text-black dark:text-white">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-800 dark:text-gray-200 md:text-base">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-gray-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-gray-200"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-gray-200"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 mt-5"
        >
          Send A Message
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>
      </form>

      {status && (
        <p className="text-center mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          {status}
        </p>
      )}
    </div>
  );
};

export default Contact;
