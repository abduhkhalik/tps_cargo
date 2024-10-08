import Image, { StaticImageData } from "next/image";
import Ade from "../public/ade.jpg";
import Bambang from "../public/bambang.jpg";

type ImageProps = {
  src: StaticImageData;
  alt?: string;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  teamMembers: TeamMember[];
};

export type Team2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Team = (props: Team2Props) => {
  const { tagline, heading, description, teamMembers } = {
    ...Team2Defaults,
    ...props,
  } as Props;
  return (
    <section id="team" className="px-[5%] py-12">
      <div className="container px-4 md:px-[65px]">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 ">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-stretch text-center">
      <div className="relative mx-auto mb-5 overflow-hidden md:mb-6">
        <Image
          width={500}
          height={500}
          src={member.image.src}
          alt={"Marketing"}
          className="size-20 rounded-full inset-0 object-cover"
        />
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
        <h6 className="md:text-md">{member.jobTitle}</h6>
      </div>
      <a href={member.description} className="hover:text-blue-600 font-semibold" target="_blank">
        <p>WhatsApp</p>
      </a>
    </div>
  );
};

export const Team2Defaults: Team2Props = {
  tagline: "Tunggal Prima Sejahtera",
  heading: "Our team",
  description: "",
  teamMembers: [
    {
      image: {
        src: Bambang,
        alt: "Relume placeholder image 1",
      },
      name: "Bambang",
      jobTitle: "Marketing 1",
      description: "tel:+6282225699993",
    },
    {
      image: {
        src: Ade,
        alt: "Relume placeholder image 2",
      },
      name: "Ade",
      jobTitle: "Marketing 2",
      description: "tel:+6285340012835",
    },
  ],
};
