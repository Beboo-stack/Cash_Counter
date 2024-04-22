import React from "react";

const Video = () => {
  return (
    <section className="w-full  mb-[50px]   mt-[50px] flex items-center justify-center  ">
      <div className=" w-full flex items-center justify-center">
        <div className="videos w-full items-center justify-center">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center relative  h-[70vh]">
            <video
              loop
              controls
              playsInline
              className=" rounded-2xl h-full w-[75%] lg:w-[50%] flex justify-start items-center object-fill  
                "
            >
              <source src="/video.mp4" type="" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
