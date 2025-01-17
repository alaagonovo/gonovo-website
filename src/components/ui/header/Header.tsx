"use client";
import navLinks from "@/app/data/links";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LinkNavigation from "../link/LinkNavigation";
import Aside from "../aside/Aside";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();
  console.log(pathname);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <header className="h-[50px] flex justify-between items-center">
      <Link
        href="/"
        className="relative w-[180px] h-[36px] sm:w-[215px] sm:h-[32px] inline-block"
      >
        {/* w-[161px] h-[24px] */}
        <Image src="/svgs/logo.svg" alt="logo of website" fill />
      </Link>
      <div>
        <ul className="w-[651px] py-[13px] hidden xl:flex px-[52px] bg-white  justify-between gap-10 rounded-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`font-semibold text-[15px] text-linksColor ${
                  link.path === pathname && pathname !== "/" && "activeLink"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center ">
        <div className="hidden sm:flex">
          {pathname === "/softwaredevelopment" ? (
            <LinkNavigation
              text="+ Become a Client"
              link="/"
              bg="#4541F1"
              color="#FFF"
            />
          ) : (
            <LinkNavigation text="+ Become a Client" link="/" />
          )}
        </div>

        <button onClick={handleToggle} className="relative w-[50px] h-[50px]">
          <Image src="/svgs/burger.svg" alt="burger icon" fill />
        </button>
      </div>
      {open && <Aside handleOpen={handleToggle} />}
    </header>
  );
}

export default Header;
