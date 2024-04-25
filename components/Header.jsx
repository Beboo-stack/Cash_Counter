"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const menuData = [
    {
      id: 1,
      title: "Home",
      path: "#",
      newTab: false,
    },
    {
      id: 33,
      title: "Products",
      path: "#products",
      newTab: false,
    },
    {
      id: 3,
      title: "Contact Us",
      path: "#contact",
      newTab: false,
    },
  ];

  const [activePath, setActivepath] = useState("#");

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <header
      class={`bg-white w-full ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 overflow-hidden items-center justify-between ">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-[#FF9800]" href="#">
              <span class="sr-only">Home</span>
              <Image src="/logo.png" alt="" width={150} height={60} />
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                {menuData.map((item, id) => (
                  <li className="text-[17px] font-medium" key={id}>
                    <Link
                      href={item.path}
                      className={`hover:text-orange-500 transition-all duration-300 ${
                        activePath === item.path ? "text-orange-500" : ""
                      }`}
                      onClick={() => setActivepath(item.path)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex w-full items-center justify-between px-4 md:hidden">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 md:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((item, index) => (
                    <li key={index} className="group relative">
                      <Link
                        onClick={() => {
                          setActivepath(item.path);
                          navbarToggleHandler();
                        }}
                        href={item.path}
                        className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-all duration-300 hover:text-orange-500 ${
                          activePath === item.path ? "text-orange-500" : ""
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
