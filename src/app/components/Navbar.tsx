"use client"
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, User, ShoppingCart, ArrowDownToLine, Heart } from "lucide-react";
import SideMenu from "./Menu";
import logo from '../assets/icons/logo-color.svg'

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.id === "overlay") {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className='bg-foreground'>
      <div className="lg:pl-10 max-w-screen-2xl m-auto py-3 sm:py-6 sticky top-0 z-50 backdrop-blur-lg backdrop-filter">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row-reverse justify-between items-center px-5 shrink-0">
            <Link href="/" className="flex flex-row-reverse items-center">
              <CldImage
                src="https://res.cloudinary.com/dckdognik/image/upload/v1725770289/glowveda/yg7lstsrrr7tsgxvplue.png"
                alt="Logo"
                height={180}
                width={180}
                quality={100}
                priority
                className="hidden sm:block"
              />
              <Image src={logo} alt="logo" width={32} height={32} className="w-8 sm:hidden" priority />
            </Link>
            <div className="grid place-content-center mr-4 lg:hidden">
              <button onClick={handleclick} >
                <Menu className='stroke-white'/>
              </button>
            </div>
          </div>
          <ul className="list-none hidden font-rubik lg:flex justify-center items-center text-2xl font-semibold w-full text-white">
            <li className="relative inline-block group hover:text-primary cursor-pointer">
              <Link href="/health-plans" className={` ${pathname === '/' ? '' : ''}`}>
                Women
              </Link>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </li>
            <li className="relative inline-block group mx-14 hover:text-primary cursor-pointer">
              <Link href="/store" className={` ${pathname === '/' ? '' : ''}`}>
                Men
              </Link>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </li>
            <li className="relative inline-block group hover:text-primary cursor-pointer">
              <Link href="/blogs" className={` ${pathname === '/' ? '' : ''}`}>
                Blog
              </Link>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </ul>
          <ul className="flex justify-center items-center px-3 sm:px-5 gap-x-4 md:gap-x-8 shrink-0">
            <li>
              <button className="lg:outline outline-white outline-2 py-2 px-[3px] lg:px-4 rounded text-lg">
                <span className="hidden lg:block font-nunito text-white">Get App</span>{" "}
                <ArrowDownToLine className="block lg:hidden w-6 font-medium stroke-white" />
              </button>
            </li>
            <li className="">
              <Link href="/" className={` ${pathname === '/' ? '' : ''}`}>
                <Heart className="h-6 w-6 stroke-white" />
              </Link>
            </li>
            <li className="">
              <Link href="/" className={` ${pathname === '/' ? '' : ''}`}>
                <User className="h-6 w-6 stroke-white" />
              </Link>
            </li>
            <li>
              <Link href="/" className={` ${pathname === '/' ? '' : ''}`}>
                <ShoppingCart className="h-6 w-6 stroke-white" />
              </Link>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div
            id="overlay"
            className="fixed inset-0 z-40"
            onClick={handleOutsideClick}
          >
            <SideMenu closeSidebar={closeSidebar} />
          </div>
        )}
      </div>
    </nav>
  );
}
