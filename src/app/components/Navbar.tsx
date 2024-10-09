"use client"

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, User, ShoppingCart, Heart } from "lucide-react";
import SideMenu from "./Menu";
import logo from '../assets/icons/logo.webp'

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
    <nav className='bg-background text-foreground'>
      <div className="lg:px-10 max-w-screen-2xl m-auto py-3 sm:py-6 sticky top-0 z-50 backdrop-blur-lg backdrop-filter">
        <div className='flex justify-between items-center'>
          <ul className="list-none hidden font-rubik lg:flex justify-center items-center text-lg text-foreground gap-x-5">
            <li className="relative inline-block group hover:text-primary cursor-pointer">
              <Link href="/mom&baby" className={` ${pathname === '/mom&baby' ? 'text-primary' : ''}`}>
                Mom & Baby
              </Link>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </li>
            <li className="relative inline-block group hover:text-primary cursor-pointer">
              <Link href="/men" className={` ${pathname === '/men' ? 'text-primary' : ''}`}>
                Men
              </Link>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </li>
            <li className="relative inline-block group hover:text-primary cursor-pointer">
              <Link href="/wellness" className={` ${pathname === '/wellness' ? 'text-primary' : ''}`}>
                Wellness
              </Link>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </li>
            <li className="relative inline-block group hover:text-primary cursor-pointer">
              <Link href="/blogs" className={` ${pathname === '/blogs' ? 'text-primary' : ''}`}>
                Blog
              </Link>
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </li>
          </ul>
          <div className='flex flex-row-reverse items-center'>
            <Link href="/" className="">
              <div className='flex flex-col items-center gap-y-1'>
                <Image src={logo} alt="logo" width={48} height={48} className="w-14 hidden sm:block" priority />
                <Image src={logo} alt="logo" width={32} height={32} className="w-8 sm:hidden" priority />
                <p className='font-pt text-base hidden lg:block'>Glowveda</p>
              </div>
            </Link>
            <div className="grid place-content-center mr-4 lg:hidden">
              <button onClick={handleclick} >
                <Menu className='stroke-foreground' />
              </button>
            </div>
          </div>
          <ul className="flex justify-center items-center px-3 sm:px-5 gap-x-4 md:gap-x-8 shrink-0">
            <li className='relative inline-block group hover:text-primary cursor-pointer font-rubik text-lg'>
              <Link href="/login" className={` ${pathname === '/login' ? 'text-primary' : ''}`}>
                Login
                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
            <li className="">
              <Link href="/" className={` ${pathname === '/' ? '' : ''}`}>
                <Heart className="h-6 w-6 stroke-foreground hover:stroke-primary" />
              </Link>
            </li>
            <li className="">
              <Link href="/" className={` ${pathname === '/' ? '' : ''}`}>
                <User className="h-6 w-6 stroke-foreground hover:stroke-primary" />
              </Link>
            </li>
            <li>
              <Link href="/" className={` ${pathname === '/' ? '' : ''}`}>
                <ShoppingCart className="h-6 w-6 stroke-foreground hover:stroke-primary" />
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










