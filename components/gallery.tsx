import Image, { StaticImageData } from "next/image";
import Img1 from "../public/feature/IMG-20200722-WA0006.webp";
import Img2 from "../public/feature/IMG-20220114-WA0017.webp";
import Img3 from "../public/feature/WhatsApp Image 2024-10-04 at 20.43.09_79e3ca27.webp";

type ImageProps = {
  url?: string;
  src: StaticImageData;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Gallery = (props: Gallery3Props) => {
  const { heading, description, images } = {
    ...Gallery3Defaults,
    ...props,
  } as Props;
  return (
    <section id="gallery" className="py-12">
      <div className="container px-4 md:px-[65px]">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-2xl font-bold md:mb-6 md:text-3xl ">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-6 md:grid-cols-3 md:gap-8">
          {images.map((image, index) => (
            <div key={index}>
              <Image
                width={500}
                height={500}
                src={image.src}
                alt={"Dokumentasi Ekspedisi dan Cargo"}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery3Defaults: Gallery3Props = {
  heading: "Gallery",
  description: "Dokumentasi Kegiatan Serah Terima Barang dan Pengantaran Barang",
  images: [
    {
      src: Img1,
      alt: "Relume placeholder image 1",
    },
    {
      src: Img2,
      alt: "Relume placeholder image 2",
    },
    {
      src: Img3,
      alt: "Relume placeholder image 3",
    },
  ],
};
