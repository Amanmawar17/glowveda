"use client";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

import img16 from "../assets/icons/googleplay.svg";
import img17 from "../assets/icons/applestore.svg";

export const GetApp = () => {
  return (
    <>
      {/* Get Your App */}
      <section className="bg-gradient-to-276-1 w-11/12 max-w-screen-2xl lg:w-full rounded-xl m-auto">
        <div className="flex justify-start md:justify-between items-start gap-y-5 lg:items-center flex-col lg:flex-row pt-10 lg:py-20 overflow-hidden lg:px-12 min-h-fit">
          <div className="grid gap-8 px-6">
            <div className=" grid text-start z-20 max-w-2xl lg:max-w-2xl gap-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-rubik sm:text-pretty">
                Download the most loved female wellness app
              </h3>
              <p className="text-xl lg:text-2xl font-nunito lg:mt-8">
                Start you wellness journey with us.
              </p>
              <p className="text-xl lg:text-2xl font-nunito lg:mb-8">
                Join the <strong className="text-primary"> Glowveda </strong>.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-start gap-2 sm:gap-5 z-10">
              <button className="flex justify-start items-center bg-black px-3 py-1 rounded-md w-fit">
                <Image
                  src={img17}
                  alt="img"
                  height={28}
                  width={28}
                  className="w-5 md:w-6"
                />
                <div className="ml-2 text-start font-rubik text-white">
                  <h6 className="uppercase text-[8px] font-normal">
                    Download on the
                  </h6>
                  <h4 className="text-sm md:text-xl font-medium">App Store</h4>
                </div>
              </button>
              <button className="flex justify-start items-center bg-black px-3 py-1 rounded-md w-fit">
                <Image
                  src={img16}
                  alt="img"
                  height={28}
                  width={28}
                  className="w-5 md:w-6"
                />
                <div className="ml-2 text-start font-rubik text-white">
                  <h6 className="uppercase text-[8px] font-normal">
                    Get it on
                  </h6>
                  <h4 className="text-sm md:text-xl font-medium">
                    Google Play{" "}
                  </h4>
                </div>
              </button>
            </div>
          </div>
          <div className="relative flex justify-between gap-5">
            <CldImage
              width="960"
              height="600"
              src="https://res.cloudinary.com/dckdognik/image/upload/v1725774872/glowveda/zcdahzfxciyt65upmdjk.png"
              sizes="50vw"
              alt="img"
              className="relative -rotate-[21deg] -bottom-24 left-8 md:left-20 md:-bottom-40 lg:-top-40 lg:-left-40 w-28 md:w-44 "
            />
            <CldImage
              width="960"
              height="600"
              src="https://res.cloudinary.com/dckdognik/image/upload/v1725774872/glowveda/z09baoaxjm7ztqgqtnzj.png"
              sizes="50vw"
              alt="img"
              className="relative -rotate-[21deg] lg:-rotate-[18deg] left-8 sm:left-36 md:-leftt-16 lg:-left-0 -bottom-8 lg:-bottom-28 w-28 md:w-44"
            />
            <CldImage
              width="960"
              height="600"
              src="https://res.cloudinary.com/dckdognik/image/upload/v1725774872/glowveda/gg2o9ayx3iwior86xdye.png"
              sizes="50vw"
              alt="img"
              className="relative -rotate-[21deg] lg:-rotate-[21deg] -bottom-4 -right-14 sm:-right-60 md:-right-60 md:-top-20 lg:-top-40 lg:-right-8  w-28 md:w-44"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const GetHear = () => (
  <>
    {/* Be the first one to hear all things glowveda section*/}
    <section className="bg-gradient-to-90 rounded-xl max-w-screen-2xl w-11/12 lg:w-full m-auto">
      <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-y-6 my-20 py-10 md:py-20 px-6 lg:px-12">
        <div className="grid gap-4 lg:px-5">
          <h4 className="text-2xl lg:text-4xl font-rubik font-semibold sm:text-pretty">
            Be the first one to hear all things{" "}
            <span className="font-satisfy"> glowveda</span>
          </h4>
          <p className="font-nunito text-xl lg:text-2xl">
            Stay connected for our latest product launches,
            <br className="md:block hidden" /> interesting reads and more
            delivered straight to your inbox.
          </p>
        </div>
        <div className="flex w-full lg:w-96 lg:pr-5">
          <input
            name="email"
            autoComplete="true"
            type="email"
            className="outline-none border-b-2 border-foreground bg-transparent placeholder:text-slate-600 placeholder:text-lg mb-3 w-full max-w-96"
            placeholder="Email address"
          />
          <button className="bg-primary text-white ml-2 sm:ml-5  py-2 px-2 sm:px-4 rounded text-base sm:text-lg font-semibold">
            Submit
          </button>
        </div>
      </div>
    </section>
  </>
);
