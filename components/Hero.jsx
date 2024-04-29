import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="#"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-[#FF9800] mb-[150px]"
    >
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 ">
          <div className="max-w-xl mb-6 mt-12">
            <h2 className="max-w-lg text-center mb-6 pt-5 font-sans text-3xl sm:text-4xl md:text-5xl  font-bold tracking-tight text-gray-900  sm:leading-none">
              ماكينة عد العملات الورقية ماكينة{" "}
              <span className="text-white"> TE-750</span>{" "}
              {/* The quick, brown fox
              <br className="hidden md:block" />
              jumps over,{" "}
              <span className="inline-block text-white text-deep-purple-accent-400">
                a lazy dog
              </span> */}
            </h2>
            <p className="text-base text-gray-700 md:text-lg text-center">
              لو انت صاحب شركة او محل تجاري يبقا انت اكيد محتاج ماكينة عد
              العملات النقدية تي اي 750 اللي بتقدر تعد جميع فئات العملات الورقية
              و جمعها بضمان عامين و توصيل مجاني لكل المحافظات
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center w-full h-12 font-medium tracking-wide text-white transition duration-200 rounded  md:w-auto md:mr-4 md:mb-0 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3 font-medium text-white bg-orange-600 px-5 py-3 rounded">
                Order Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
