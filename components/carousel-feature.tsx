import * as React from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import promo1 from "../public/promo/1.png"
import promo2 from "../public/promo/2.png"
import promo3 from "../public/promo/3.png"
import promo4 from "../public/promo/4.png"
import promo5 from "../public/promo/5.png"

export function CarouselFeature() {
  return (
    <div className="flex justify-center items-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-0">
            <div className="p-1">
              <Image
                src={
                 promo1
                }
                width={500}
                height={500}
                className="w-full h-26 rounded-md"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={
                 promo2
                }
                width={500}
                height={500}
                className="w-full h-26 rounded-md"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={
                  promo3
                }
                width={500}
                height={500}
                className="w-full h-26 rounded-md"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={
                  promo4
                }
                width={500}
                height={500}
                className="w-full h-26 rounded-md"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Image
                src={
                  promo5
                }
                width={500}
                height={500}
                className="w-full h-26 rounded-md"
                alt=""
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="h-14 w-14 hidden md:grid" />
        <CarouselNext className="h-14 w-14 hidden md:grid" />
      </Carousel>
    </div>
  );
}
