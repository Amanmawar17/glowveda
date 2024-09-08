"use client";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { essentialsData } from "@/data/data";
import { CldImage } from "next-cloudinary";

export default function BeautyEssentialCarausel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleClick = (index: number) => {
    api?.scrollTo(index);
    setCurrent(index);
  };

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center px-2 sm:px-4 lg:px-20">
      <div className="flex flex-row lg:flex-col justify-around sm:justify-between lg:justify-start items-start gap-2 sm:gap-5 lg:gap-12 lg:pr-14 lg:w-auto w-full shrink-0">
        {essentialsData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              current == index
                ? "bg-primary text-white shadow-md font-medium"
                : ""
            } font-poppins text-xs sm:text-lg md:text-2xl text-start hover:bg-primary hover:text-white p-1 sm:p-2 sm:rounded-md`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="max-w-xl md:max-w-full lg:max-w-3xl mt-10 lg:mt-0">
        <Carousel
          setApi={setApi}
          plugins={[Autoplay({ delay: 4000 }), Fade({})]}
          opts={{
            align: "start",
            startIndex: 0,
            loop: true,
          }}
        >
          <CarouselContent>
            {essentialsData.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-5 place-content-center">
                  <CldImage
                    src={item.one}
                    height={600}
                    width={300}
                    alt="img"
                    sizes="80vw"
                    unoptimized
                    crop="fill"
                    gravity="center"
                    priority
                    className="hidden md:flex row-span-2 place-self-center rounded-md shadow-md h-full"
                  />
                  <div className="row-span-2 flex flex-col h-full gap-2 sm:gap-5">
                    <CldImage
                      src={item.two}
                      height={400}
                      width={400}
                      alt="img"
                      sizes="80vw"
                      unoptimized
                      crop="fill"
                      gravity="center"
                      className="place-self-center rounded-md shadow-md basis-[53%]"
                    />
                    <CldImage
                      src={item.four}
                      height={300}
                      width={300}
                      alt="img"
                      sizes="80vw"
                      unoptimized
                      crop="fill"
                      gravity="center"
                      className="place-self-center rounded-md shadow-md basis-[47%]"
                    />
                  </div>
                  <div className="flex flex-col h-full row-span-2 place-self-start gap-2 sm:gap-5">
                    <CldImage
                      src={item.three}
                      height={300}
                      width={300}
                      alt="img"
                      sizes="70vw"
                      unoptimized
                      crop="fill"
                      gravity="center"
                      className="place-self-start rounded-md shadow-md basis-[47%]"
                    />
                    <CldImage
                      src={item.five}
                      height={400}
                      width={400}
                      alt="img"
                      sizes="70vw"
                      unoptimized
                      crop="fill"
                      gravity="center"
                      className="place-self-start rounded-md shadow-md basis-[53%]"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
