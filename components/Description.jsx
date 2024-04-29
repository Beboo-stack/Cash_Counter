"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import client from "@/app/utils/utils";
const Description = () => {
  // Data Store
  const [data, setData] = useState([]);

  // Fetch Data
  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "features",
      });
      setData(response.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <h2 className="text-center text-5xl mb-[50px] font-bold text-orange-500">
    //     Description
    //   </h2>
    //   <div className="max-w-screen text-center sm:mx-auto">
    //     <ul className="grid gap-5 md:grid-cols-3 ">
    //       {features.map((item, index) => (
    //         <li
    //           className="text-lg text-gray-700 md:text-xl lg:text-2xl sm:px-4"
    //           key={index}
    //         >
    //           {item.text}✅
    //         </li>
    //       ))}
    //     </ul>
    //     <hr className="w-full my-8 border-gray-300" />
    //   </div>
    // </div>

    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className=" mb-[50px] md:text-5xl text-orange-500 font-semibold text-4xl">
            Features
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <Image
                    width={20}
                    height={20}
                    src="/success.png"
                    className="w-full"
                    alt=""
                  />
                </div>
                <h4 className="text-lg md:text-xl text-gray-800 font-semibold">
                  {item.fields.feature}
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Description;
