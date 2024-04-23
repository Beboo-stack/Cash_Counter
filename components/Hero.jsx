import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="#"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-[#FF9800] mb-[150px]"
    >
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 ">
          <div className="max-w-xl mb-6">
            <div className="text-center">
              <p className="inline-block text-center px-3 py-px mb-4 text-sm font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg text-center mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over{" "}
              <span className="inline-block text-deep-purple-accent-400">
                a lazy dog
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center w-full h-12 font-medium tracking-wide text-white transition duration-200 rounded  md:w-auto md:mr-4 md:mb-0 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3 text-white bg-orange-600 px-5 py-3 rounded">
                Start Shopping
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
