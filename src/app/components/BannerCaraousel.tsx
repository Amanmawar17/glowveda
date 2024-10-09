'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BannerCaraousel(props: any) {
    const { img1, img2, img3, img4 } = props.details;
    return (
        <Carousel className="w-full pb-20 h-fit" opts={{
            align: "start",
            loop: true,
          }}plugins={[
            Autoplay({
              delay: 2000,
            }),
            Fade({
              }),
          ]}>
            <CarouselContent>
                <CarouselItem >
                    <Image src={img1} alt="img" width={1000} height={1000} className="w-full h-fit" />
                </CarouselItem>
                <CarouselItem >
                    <Image src={img2} alt="img" width={1000} height={1000} className="w-full h-fit" />
                </CarouselItem>
                <CarouselItem >
                    <Image src={img3} alt="img" width={1000} height={1000} className="w-full h-fit" />
                </CarouselItem>
                <CarouselItem >
                    <Image src={img4} alt="img" width={1000} height={1000} className="w-full h-fit" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
