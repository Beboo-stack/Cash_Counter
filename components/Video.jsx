import React from "react";

const Video = () => {
  return (
    <section className="w-full flex justify-center items-center my-[120px]">
      <div className="w-[350px] md:w-[700px] lg:w-[600px] flex justify-center items-center">
        <video className="w-full rounded-md" controls>
          {" "}
          <source src="/video.mp4" type="video/mp4 " />
        </video>
      </div>
    </section>
  );
};
  
export default Video;
