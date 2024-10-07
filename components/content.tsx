import Image from "next/image";
import FotoContent from "../public/feature/imagePTS.webp";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: React.ReactNode;
  image: ImageProps;
  children: React.ReactNode;
};

export type Content1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content = (props: Content1Props) => {
  const { heading, children } = {
    ...Content1Defaults,
    ...props,
  } as Props;
  return (
    <section id="about" className="py-12">
      <div className="container px-4 md:px-[65px]">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 text-2xl font-bold md:mb-6 md:text-3xl">
              {heading}
            </div>
            <div className="prose text-slate-600">{children}</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              src={FotoContent}
              className="w-96 h-full object-cover brightness-100 bg-cover"
              alt={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content1Defaults: Content1Props = {
  heading: <p>Jasa <span className="text-blue-600">Ekspedisi</span> Cargo</p>,
  children: (
    <div>
      <p>
        <span className="text-blue-600 text-lg font-bold">
          Tunggal Prima Sejahtera{" "}
        </span>{" "}
        adalah ekspedisi cargo yang menyediakan pelayanan jasa pengiriman dengan
        harga fleksibel.
      </p>
      <p>
        Selain itu, kami menawarkan solusi pengiriman yang mudah dan aman,
        karena menggunakan asuransi, dan{" "}
        <span className="text-blue-600 text-lg font-bold">
          Tunggal Prima Sejahtera
        </span>{" "}
        dilengkapai spesialis handling ke seluruh wilayah sulawesi.
      </p>
      <p>
        Lebih Dari Itu{" "}
        <span className="text-blue-600 text-lg font-bold">
          Tunggal Prima Sejahtera
        </span>{" "}
        membuka kerja sama lembaga usaha yang mendistribusikan barangya dengan
        berkelanjutan.
      </p>
    </div>
  ),
};
