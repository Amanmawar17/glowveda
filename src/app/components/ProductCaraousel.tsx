'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BannerCaraousel() {
    return (
        <Carousel className="w-full pb-20" opts={{
            align: "start",
            loop: true,
        }} plugins={[
            Autoplay({
                delay: 2000,
            }),
            Fade({
            }),
        ]}>
            <CarouselContent>
                <CarouselItem >
                    <ProductCard/>
                </CarouselItem>
                <CarouselItem >
                <ProductCard/>
                </CarouselItem>
                <CarouselItem >
                <ProductCard/>
                </CarouselItem>
                <CarouselItem >
                <ProductCard/>
                </CarouselItem>
                <CarouselItem >
                <ProductCard/>
                </CarouselItem>
                <CarouselItem >
                <ProductCard/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


export function ProductCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}