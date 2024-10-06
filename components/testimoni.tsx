import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimoni = (props: Testimonial17Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="py-12">
      <div className="container px-4 md:px-[65px]">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8"
            >
              <div className="rb-5 mb-5 md:mb-6">
                <div className="rb-6 mb-6 flex">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <BiSolidStar key={starIndex} className="mr-1 size-6 fill-current text-yellow-400" />
                    ))}
                </div>
                <blockquote className="md:text-md">
                  {testimonial.quote}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                <Image
                  width={100}
                  height={100}
                  src={testimonial.avatar.src}
                  alt={""}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>
                    {testimonial.position}, {testimonial.companyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults: Testimonial17Props = {
  heading: "Testimonial",
  description: "Ulasan Mitra Kami.",
  testimonials: [
    {
      quote:
        '"Selama 2 tahun berlangganan di Tunggal Prima Sejahtera , sy dan customer sy sangat puas dgn pelayanannya dan selalu tepat waktu dan tanpa kendala , pelayananya ramah yang membuat kami puas Terimakasih untuk Tunggal Prima Sejahtera."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Fadli Rusli",
      position: "Owner",
      companyName: "Agana Coffee Roastery",
      numberOfStars: 4,
    },
    {
      quote:
        '"Alhamdulillah selama 2tahun berlangganan tidaa pernaa kecewa dalam pelayanann 🥰🥰 selalu.a respon baik pengiriman banyak dan tidak banyak pun selalunya di jemput di toko .Ingatt see.x waktu pertama kalii pengiriman kuu ke LUAR NEGERI masya Allah dengan sabarrnya kk baa ajarr dan mengarahkan diriku yg tidak tau apaa" inii 😁🤗🤗 pokoknya selalu menyelesaikannya masalaa kuu dalam pengiriman barang"kuu 😁😁"',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Karmonawati",
      position: "Founder",
      companyName: "Syariah Muslimah Collection",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};
