import Image, { StaticImageData } from "next/image";
import Mitra1 from "../public/mitra/telkom.png";
import Mitra2 from "../public/mitra/Huawei-Logo.png";
import Mitra3 from "../public/mitra/Logo-Kementerian-Kesehatan_.png";
import Mitra4 from "../public/mitra/Wahana Visi Indonesia Job Vacancy.png";
import Mitra5 from "../public/mitra/telkomsel.png";
import Mitra6 from "../public/mitra/master.png";

type ImageProps = {
  src: StaticImageData;
  alt?: string;
};

type Props = {
  heading: string;
  desc: string;
  logos: ImageProps[];
};

export type Logo1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Mitra = (props: Logo1Props) => {
  const { heading, logos, desc } = {
    ...Logo1Defaults,
    ...props,
  } as Props;
  return (
    <section id="mitra" className="py-16">
      <div className="container px-4 md:px-[65px]">
        <h1 className="mx-auto mb-2 w-full max-w-lg text-center text-2xl font-bold leading-[1.2] md:mb-2 md:text-4xl">
          {heading}
        </h1>
        <p className="mx-auto text-slate-700 mb-6 w-full max-w-lg text-center text-base leading-[1.2] md:mb-8 md:text-md">
          {desc}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-2 pt-4 md:pt-2">
          {logos.map((logo, index) => (
            <Image
              width={150}
              height={150}
              key={index}
              src={logo.src}
              alt={""}
              className="md:w-20 h-20 w-20 md:h-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Logo1Defaults: Logo1Props = {
  heading: "Mitra Kami",
  desc: "Perusahaan Yang Telah Bekerjasama dengan kami",
  logos: [
    {
      src: Mitra2,
      alt: "#",
    },
    {
      src: Mitra3,
      alt: "#",
    },
    {
      src: Mitra1,
      alt: "#",
    },
    {
      src: Mitra4,
      alt: "#",
    },
    {
      src: Mitra5,
      alt: "#",
    },
    {
      src: Mitra6,
      alt: "#",
    },
  ],
};
