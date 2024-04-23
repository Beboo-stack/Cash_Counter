"use client";
import React from "react";
import { useState } from "react";

const Form = () => {
  const initialData = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) return;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
    } catch (error) {}
  };

  return (
    <section id="contact" className="bg-[#FFFBDA] ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-1 justify-center">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 ">
            <h2 className="text-3xl font-bold sm:text-3xl pt-8 text-center text-orange-500">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  id="message"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className=" inline-block w-full rounded-xl bg-orange-600 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
