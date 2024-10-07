import { FaXTwitter } from "react-icons/fa6";
import myLogo from "../public/logo/Mask group.png";

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import Image from "next/image";

type ImageProps = {
  url?: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer3 = (props: Footer3Props) => {
  const { logo, address, contact, columnLinks, socialMediaLinks, footerText } =
    {
      ...Footer3Defaults,
      ...props,
    } as Props;
  return (
    <footer
      id="footer"
      className="bg-blue-400 text-white py-12 md:py-18 lg:py-20"
    >
      <div className="container px-0">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="rb-6 mb-6 md:mb-8">
              <a href={logo.url}>
                <Image
                  width={500}
                  height={500}
                  src={myLogo}
                  alt={""}
                  className="inline-block w-20 h-20"
                />
              </a>
            </div>
            <div className="rb-6 mb-6 md:mb-8">
              <div>
                <p className="mb-1 text-lg font-semibold">{address.label}</p>
                <p className="mb-5 text-md md:mb-6">{address.value}</p>
              </div>
              <div>
                <p className="mb-1 text-lg font-semibold">{contact.label}</p>
                <p className="flex flex-col text-md md:mb-6">
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 gap-y-0">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            {columnLinks.map((column, index) => (
              <ul key={index}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm font-semibold">
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="W-full flex items-start justify-center rounded pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="w-full mt-8 md:mt-0 text-[17px] text-center font-semibold bg-red-800 px-4 py-4">{footerText}</p>
        </div>
      </div>
    </footer>
  );
};

export const Footer3Defaults: Footer3Props = {
  logo: {
    url: "#",
    alt: "Logo image",
  },
  address: {
    label: "Alamat:",
    value:
      "Jl. Rahmatulah Perum.Taman Ria Estate Kav. Matahari No.4 Kel. Silae Kec. Ulujadi, Kota Palu",
  },
  contact: {
    label: "Contact:",
    phone: "0451 - 4710124",
    email: "tunggalprimasejahtera@gmail.com",
  },
  columnLinks: [
    {
      links: [
        { title: "Layanan Kami", url: "#" },
        { title: "Container", url: "#" },
        { title: "Shipper", url: "#" },
        { title: "Airplane", url: "#" },
        { title: "Pick up", url: "#" },
      ],
    },
    {
      links: [
        { title: "Tentang Kami", url: "#" },
        { title: "Ekspedisi", url: "#" },
        { title: "Cargo", url: "#" },
        { title: "Fleksibel", url: "#" },
        { title: "Tepat Waktu", url: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2024 CV.Tunggal Prima Sejahtra. All rights reserved.",
};
