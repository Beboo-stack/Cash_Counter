// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// const CarouselHero = () => {
//   return (
//     <Carousel>
//       <CarouselContent>
//         <CarouselItem className="">
//           <Image
//             src="/4.jpg"
//             className="h-full w-full rounded-xl object-contain"
//             alt=""
//             width={500}
//             height={300}
//           />
//         </CarouselItem>
//         <CarouselItem className="">
//           <Image
//             src="/3.jpg"
//             className="h-full w-full rounded-xl object-contain"
//             alt=""
//             width={500}
//             height={300}
//           />
//         </CarouselItem>
//         <CarouselItem className="">
//           <Image
//             src="/2.jpg"
//             className="h-full w-full rounded-xl object-contain"
//             alt=""
//             width={500}
//             height={300}
//           />
//         </CarouselItem>
//         <CarouselItem className="">
//           <Image
//             src="/1.jpg"
//             className="h-full w-full rounded-xl object-contain"
//             alt=""
//             width={500}
//             height={300}
//           />
//         </CarouselItem>
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// };

// export default CarouselHero;
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselHero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const img = [
    {
      imagePath: "/4.jpg",
    },
    {
      imagePath: "/3.jpg",
    },
    {
      imagePath: "/2.jpg",
    },
    {
      imagePath: "/1.jpg",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {img.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image.imagePath}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselHero;
