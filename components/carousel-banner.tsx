"use client";

import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import banner1 from "../public/banner/Frame 1.webp";
import banner2 from "../public/banner/Frame 2.webp";
import banner3 from "../public/banner/Frame 3.webp";
import banner4 from "../public/banner/Frame 5.webp";
import banner5 from "../public/banner/Frame 6.webp";
import Autoplay from "embla-carousel-autoplay";

const CarouselBanner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div className="pt-16">
      <Carousel plugins={[plugin.current]}>
        <CarouselContent className="max-w-max">
          <CarouselItem className="w-full max-w-full p-0">
            <div className="w-full flex justify-center items-center">
              <Image
                width={1000}
                height={1000}
                className="w-full h-auto md:h-[450px] object-center"
                src={banner5}
                alt="Ekspedisi Antar Pulau Dan Mancanegara"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full max-w-full p-0">
            <div className="w-full flex justify-center items-center">
              <Image
                width={1000}
                height={1000}
                className="w-full h-auto md:h-[450px] object-center"
                src={banner1}
                alt="Pengiriman Container"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full max-w-full p-0">
            <div className="w-full flex justify-center items-center">
              <Image
                width={1000}
                height={1000}
                className="w-full h-auto md:h-[450px] object-center"
                src={banner2}
                alt="Pengiriman Antar Pulau"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full max-w-full p-0">
            <div className="w-full flex justify-center items-center">
              <Image
                width={1000}
                height={1000}
                className="w-full h-auto md:h-[450px] object-center"
                src={banner3}
                alt="Pick up"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full max-w-full p-0">
            <div className="w-full flex justify-center items-center">
              <Image
                width={1000}
                height={1000}
                className="w-full h-auto md:h-[450px] object-center"
                src={banner4}
                alt="Menjangkau Seluruh Wilayah Indonesia"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="mr-20 w-12 h-12 invisible md:visible" />
        <CarouselPrevious className="ml-20 w-12 h-12 invisible md:visible" />
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
