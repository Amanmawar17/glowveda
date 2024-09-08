'use client'
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 p-6 sm:p-10 text-white">
      <div className=" max-w-screen-2xl m-auto ">
        <div className="grid place-content-start justify-items-start md:justify-items-center grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-col gap-y-10 gap-x-20">
          <div className="max-w-60 sm:max-w-40 lg:max-w-60">
            <Link href="/">
              <CldImage
                src="https://res.cloudinary.com/dckdognik/image/upload/v1725770289/glowveda/yg7lstsrrr7tsgxvplue.png"
                alt="Logo"
                height={200}
                width={200}
                quality={100}
                className=""
              />
            </Link>
            <p className="text-xl text-wrap font-nunito mt-6">
            107-b, Hashim Manzil, Mohammedali Road, Mohamadali Road Maharashtra 400003
            </p>
          </div>
          <div className="">
            <h1 className="text-3xl my-4 font-rubik">Help center</h1>
            <ul className="text-xl font-nunito">
              <li>
                <Link
                  href="/"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  About Us
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/policies/#userpolicy"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  User Policy
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/policies/#privacypolicy"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/#disclaimer"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Disclaimer
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/policies/#terms&services"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Terms & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  FAQs
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-3xl my-4 font-rubik">Contact us</h1>
            <ul className="text-xl font-nunito">
              <li className=" ">
                <Link
                  href="/"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Raise a query
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="mailto:hello@glowveda.in" target="_blank"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  hello@glowveda.in
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/policies/#support"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Support
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/policies/#deleteaccount"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-3xl my-4 font-rubik">Work with us</h1>
            <ul className="text-xl font-nunito">
              <li className="">
                <Link
                  href="/"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Join the team
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/"
                  className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
                >
                  Business Offerings
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid place-items-start md:place-items-center lg:place-items-end">
          <h1 className="text-3xl mt-8 mb-4 self-start md:self-center lg:self-end font-rubik">
            Follow us on
          </h1>
          <ul className="flex justify-end items-center gap-x-3 sm:gap-x-6">
            <li>
              <Link href="https://www.facebook.com/glowveda" target="_blank">
              <Facebook  className="w-10 h-10 stroke-1 text-white hover:stroke-primary" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/glowveda"
                target="_blank"
              >
                <Instagram  className="w-10 h-10 stroke-1 text-white hover:stroke-primary" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/glowveda/"
                target="_blank"
              >
                <Linkedin  className="w-10 h-10 stroke-1 text-white hover:stroke-primary" />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/glowveda" target="_blank">
              <Twitter  className="w-10 h-10 stroke-1 text-white hover:stroke-primary" />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@glowveda" target="_blank">
                <Youtube  className="w-10 h-10 stroke-1 text-white hover:stroke-primary" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
