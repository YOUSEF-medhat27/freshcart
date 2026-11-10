"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import image from "../../../../public/images/main-slider.png";


const slides = [
  {
    image: image,
    title: "Fresh Products Delivered to your Door",
    text: "Get 20% off your first order",
    primary: { label: "Shop Now", href: "/Shop" },
    secondary: { label: "View Deals", href: "/deals" },
  },
  {
    image: image,
    title: "Premium Quality Guaranteed",
    text: "Fresh from farm to your table",
    primary: { label: "Shop Now", href: "/Shop" },
    secondary: { label: "Learn More", href: "/about" },
  },
  {
    image: image,
    title: "Fast & Free Delivery",
    text: "Free shipping on orders over 500 EGP",
    primary: { label: "Order Now", href: "/Shop" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
];

export default function HeaderCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);



  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return <>
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
       
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="pl-0">
              <div className="relative h-100 w-full overflow-hidden">
                
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

             
                <div className="absolute inset-0 bg-linear-to-r from-[#16A34A]/90 via-[#22C55E]/80 to-[#22C55E]/60" />

             
                <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 sm:px-16">
                  <h2 className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-sm text-white">{slide.text}</p>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href={slide.primary.href}
                      className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-spring-green-36 transition hover:bg-green-50"
                    >
                      {slide.primary.label}
                    </Link>
                    <Link
                      href={slide.secondary.href}
                      className="rounded-lg border border-white/60 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      {slide.secondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      
      <button
        type="button"
        onClick={() => api?.scrollPrev()}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-spring-green-36 shadow-md transition hover:bg-white cursor-pointer"
      >
        <FaChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => api?.scrollNext()}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-spring-green-36 shadow-md transition hover:bg-white cursor-pointer"
      >
        <FaChevronRight />
      </button>

   
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              current === i ? "w-9 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  
  </>
  
 
}
