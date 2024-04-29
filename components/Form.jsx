"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Form = () => {
  const sliderRef = useRef(null);
  const images = [
    {
      src: "/6.jpg",
      type: "image",
    },
    {
      src: "/7.jpg",
      type: "image",
    },
    {
      src: "/8.jpg",
      type: "image",
    },
  ];

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: 1,
    address: "",
    total: 7500,
    selcetedOption: "دفع عند الاستلام",
  });

  // Increase Button
  const Increase = () => {
    setFormData((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
      total: 7500 * (prev.quantity + 1),
    }));
  };

  // Decreament Button
  const Decrease = () => {
    if (formData.quantity >= 2) {
      setFormData((prev) => ({
        ...prev,
        quantity: prev.quantity - 1,
        total: 7500 * (prev.quantity - 1),
      }));
    }
  };

  // Increament and Decreament Handler
  // const handleInputChange = (e) => {
  //   const newValue = parseInt(e.target.value);
  //   if (!isNaN(newValue)) {
  //     setFormData({ ...formData, quantity: newValue });
  //   }
  // };

  // Form Handler
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle Option Value
  const handleSelectedOption = (event) => {
    const selectedOption = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selcetedOption: selectedOption,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) return;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
      router.push("/successfull");
    } catch (error) {}
    setFormData({
      name: "",
      phone: "",
      address: "",
      total: 1,
      quantity: 7500,
      selcetedOption: "",
    });
  };

  return (
    <section id="contact" className="bg-[#FFFBDA] ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-x-16 gap-y-8 ">
          <div className="w-full h-full flex justify-center  ">
            <Swiper
              ref={sliderRef}
              spaceBetween={30} // Add spacing between slides
              slidesPerView={1} // Show one slide at a time
              navigation // Enable navigation arrows
              className="w-full h-full"
              autoplay={{ delay: 3000, disableOnInteraction: true }} // Optional: Enable autoplay with 3 seconds delay
            >
              {images.map((item) => (
                <SwiperSlide key={item.src}>
                  <Image
                    src={item.src}
                    alt=""
                    className="w-full h-full object-fill"
                    width={500}
                    height={500}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="rounded-[10px] bg-white p-8  shadow-lg  lg:p-12 ">
            <h2 className="text-3xl font-bold pt-8 mb-8 text-center text-orange-500">
              Order
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-between items-center overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-lg">عدد القطع</h2>
                  <div className="flex justify-start items-center gap-5">
                    <button
                      type="button"
                      className="cursor-pointer text-[30px] text-center self-center w-[30px]"
                      onClick={Decrease}
                    >
                      -
                    </button>
                    <h2 className="text-lg">{formData.quantity} </h2>
                    <button
                      type="button"
                      className="w-[30px] cursor-pointer text-[30px]   "
                      onClick={Increase}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-xl">السعر النهائي</h2>
                  <p className="text-[20px] font-bold">
                    {" "}
                    {formData.total} <span>EGB</span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="الاسم"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="رقم التليفون"
                    type="tel"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}
                    required
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="address">
                  Address
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  required
                  placeholder="العنوان بالكامل "
                  rows="8"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  id="address"
                ></textarea>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-lg font-bold">Choose Payment Method</p>
                <div className="flex flex-col">
                  <div className="flex p-2  w-full gap-3">
                    <label
                      htmlFor="radio_1"
                      className="flex gap-3 w-full border-2 p-2 rounded-xl hover:border-gray-500 duration-300 transition-all"
                    >
                      <input
                        checked={formData.selcetedOption === "دفع عند الاستلام"}
                        onChange={handleSelectedOption}
                        value="دفع عند الاستلام"
                        type="radio"
                        name="radio"
                        id="radio_1"
                        className="w-5"
                      />
                      <p className="text-lg font-bold text-gray-700">
                        دفع عند الاستلام <br />
                        <span className=" font-normal  ">
                          {" "}
                          ادفع عند استلام طلبك
                        </span>
                      </p>
                    </label>
                  </div>

                  <div className="flex p-2  w-full gap-3">
                    <label
                      htmlFor="radio_2"
                      className="flex gap-3 w-full border-2 p-2 rounded-xl hover:border-gray-500 duration-300 transition-all"
                    >
                      <input
                        checked={
                          formData.selcetedOption ===
                          "الدفع عن طريق المحافظ الاكترونية"
                        }
                        value="الدفع عن طريق المحافظ الاكترونية"
                        onChange={handleSelectedOption}
                        type="radio"
                        name="radio"
                        id="radio_2"
                        className="w-5"
                      />
                      <p className="text-lg font-bold text-gray-700">
                        الدفع عن طريق المحافظ الاكترونية
                        <br />
                        <span className=" text-base font-normal  ">
                          {" "}
                          ادفع باستخدام المحافظ الاكترونيه مثل فودافون كاش و
                          اتصالات كاش
                        </span>
                      </p>
                    </label>
                  </div>

                  <div className="flex p-2  w-full gap-3">
                    <label
                      htmlFor="radio_3"
                      className="flex gap-3 w-full border-2 p-2 rounded-xl hover:border-gray-500 duration-300 transition-all"
                    >
                      <input
                        checked={
                          formData.selcetedOption ===
                          "الدفع عن طريق البطاقات الائتمانية"
                        }
                        onChange={handleSelectedOption}
                        value="الدفع عن طريق البطاقات الائتمانية"
                        type="radio"
                        name="radio"
                        id="radio_3"
                        className="w-5"
                      />
                      <p className="text-lg font-bold text-gray-700">
                        الدفع عن طريق البطاقات الائتمانية <br />
                        <span className=" font-normal text-base ">
                          {" "}
                          ادفع باستخدام بطاقة ائتمان فيزا او ماستر كارد او ميزة
                        </span>
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className=" inline-block w-full rounded-xl bg-orange-600 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Order Now
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
