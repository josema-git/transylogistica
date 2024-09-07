import ImageSlider from "@/components/ImageSlider";

interface ImageData {
  src: string;
}

const imagesSlider: ImageData[] = [
  {
    src: "https://i.postimg.cc/q7226V3V/IMG-20240826-WA0035.jpg",
  },
  {
    src: "https://i.postimg.cc/V6RM4qgK/IMG-20240826-WA0036.jpg",
  },
  {
    src: "https://i.postimg.cc/tJ46csmp/IMG-20240826-WA0037.jpg",
  },
  {
    src: "https://i.postimg.cc/J4tJcBkQ/IMG-20240826-WA0038.jpg"
  },
  {
    src: "https://i.postimg.cc/28JWH8dN/IMG-20240826-WA0040.jpg"
  },
];

export default function Home() {
  return (
    <main>
      <ImageSlider images={imagesSlider} />
    </main>
  );
}
