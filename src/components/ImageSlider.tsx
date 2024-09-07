"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
interface ImageData {
  src: string;
}

export default function ImageSlider({ images }: { images: ImageData[] }): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
   setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 2000)
  }, [ ] );

  return (
    <div className="relative w-full">
      <div className="relative h-[720px] group">
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out cursor-pointer"
        />
      </div>
    </div>
  );
}
  