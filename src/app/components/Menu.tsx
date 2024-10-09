import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
// import { Profiles } from "@/data/data";
import logo from '../assets/icons/logo.webp' 

interface MenuProps {
  closeSidebar: () => void;
}

export default function Sidebar({ closeSidebar }: MenuProps) {
  const pathname = usePathname();
  return (
    <div
      className="fixed top-0 left-0 z-50 w-3/4 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0"
    >
      <div className="flex justify-between items-center bg-gradient-to-276-2 py-4 px-2">
        <ul className="flex justify-evenly items-center text-foreground font-nunito">
          <li onClick={closeSidebar}>
            <Link href="/">
              <Image src={logo} alt="logo" width={32} height={32} className="w-8" loading="lazy"/>
            </Link>
          </li>
          <li onClick={closeSidebar} className="mx-5">
            <Link href="/" className={` ${pathname === '/' ? '' : ''}text-lg`}>
              Login
            </Link>
          </li>
          <li onClick={closeSidebar}>
            <Link href="/" className={` ${pathname === '/' ? '' : ''}text-lg`}>
              Signup
            </Link>
          </li>
        </ul>
        <button onClick={closeSidebar} className="">
          <X className="text-foreground h-6 w-6" />
        </button>
      </div>
      <ul className="p-3 text-foreground font-nunito">
        <li onClick={closeSidebar}>
          <Link href="/health-plans" className={` ${pathname === '/' ? '' : ''} text-base`}>
            Women
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link href="/store" className={` ${pathname === '/' ? '' : ''} text-base`}>
            Men
          </Link>
        </li>
        <li onClick={closeSidebar}>
          <Link href="/blogs" className={` ${pathname === '/' ? '' : ''} text-base`}>
            Blog
          </Link>
        </li>
      </ul>
      <hr className="text-foreground/80 w-full my-2 lg:hidden" />
      
    </div>
  );
};


