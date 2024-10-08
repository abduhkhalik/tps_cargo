import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSection[];
};

export type Layout396Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content2 = (props: Layout396Props) => {
  const { tagline, heading, featureSections } = {
    ...Layout396Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="py-12">
      <div className="container px-4 md:px-[65px]">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18">
          <p className="mb-3 font-semibold md:mb-4 text-2xl text-blue-600 uppercase">
            {tagline}
          </p>
          <h4 className="mb-5 text-lg font-bold md:mb-6 md:text-2xl">
            {heading}
          </h4>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {featureSections.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeatureSection(featureSection: FeatureSection) {
  return (
    <div className="flex flex-col justify-center border bg-white rounded-xl border-border-primary p-6 md:p-8">
      <div>
        <div className="rb-5 mb-5 md:mb-6 fill-current">
          <Image
            width={200}
            height={200}
            src={featureSection.icon.src}
            className="size-12 text-blue-600"
            alt={"Keunggulan Ekspedisi"}
          />
        </div>
        <h2 className="mb-3 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 font-bold md:mb-4 md:text-2xl md:leading-[1.3]">
          {featureSection.heading}
        </h2>
        <p className="text-slate-700">{featureSection.description}</p>
      </div>
    </div>
  );
}

export const Layout396Defaults: Layout396Props = {
  tagline: "Cepat Andal dan selalu ada!!",
  heading: "Mengapa Harus Kami?",
  featureSections: [
    {
      icon: {
        src: "https://cdn-icons-png.flaticon.com/256/17787/17787360.png",
        alt: "Relume logo 1",
      },
      heading: "Terpercaya",
      description:
        "Kami memastikan setiap pengiriman sampai dengan aman dan tepat waktu melalui sistem logistik yang andal dan tim profesional berpengalaman.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: "https://cdn-icons-png.flaticon.com/256/15597/15597902.png",
        alt: "Relume logo 2",
      },
      heading: "Cepat",
      description:
        "Layanan kami dirancang untuk memberikan pengiriman yang efisien dengan berbagai pilihan jalur transportasi yang sesuai kebutuhan pelanggan.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: "https://cdn-icons-png.flaticon.com/256/2974/2974310.png",
        alt: "Relume logo 3",
      },
      heading: "Fleksibel",
      description:
        "Kami menawarkan solusi pengiriman yang dapat disesuaikan dengan kebutuhan bisnis dan individu, baik untuk pengiriman skala kecil maupun besar.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: "https://cdn-icons-png.flaticon.com/256/2786/2786398.png",
        alt: "Relume logo 3",
      },
      heading: "Menjangkau Seluruh Wilayah Indonesia",
      description:
        "Dengan dukungan jaringan transportasi darat, laut, dan udara, kami memastikan pengiriman Anda dapat tiba di berbagai wilayah, dari kota besar hingga daerah terpencil di seluruh Indonesia.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
