"use client"
import { secNav, topSelfData } from "@/app/data/data";
import { GetApp, GetHear } from "@/app/components/GetAppnHear";

import Image from "next/image";
export default function Blog() {
  return (
    <section className="min-h-screen max-w-screen-2xl m-auto">
      <div className="flex justify-center py-20">
        <ul className="flex justify-evenly items-center text-2xl lg:text-4xl gap-x-8 list-none font-poppins font-medium">
          {secNav.map((item, index) => (
            <li key={index} className="">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center relative">
        <Image src="https://res.cloudinary.com/dmaaauim1/image/upload/v1725126444/b7kjadprmo4djlqd8uxj.png" alt="hero" width={1980} height={1080} className="h-60 md:h-96 lg:h-full object-cover" />
        <div className="absolute bottom-20 left-4 md:left-10 lg:left-16 text-white grid gap-1 md:gap-3 max-w-xl">
          <div className="flex font-montega" >
            <h3>Dr. Dimple Vats </h3>
            <p className="ml-3"> 22 Dec 2023</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold">THE TRUTH ABOUT SUGAR:
          </h1>
          <p className="font-krub text-xl">How to reduce your intake and improve health.</p>
        </div>
      </div>
      <div className="py-20 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5">
        {topSelfData.map((item, index) => (
          <div
            key={item.id}
            className="max-w-80 sm:max-w-96 shadow-xl place-self-center">
            <Image
              src={item.imgsrc}
              alt="img"
              width={600}
              height={800}
              className="rounded-t-lg"
            />
            <div className="grid gap-3 px-3 pt-2 pb-4 rounded-b-lg">
              <p className="text-sm">
                {item.name} <span>{item.date}</span>{" "}
              </p>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="line-clamp-3 text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Get Your App */}
      <GetApp />
      {/* Be the first one to hear all things Femease section*/}
      <GetHear />
    </section>
  );
}
