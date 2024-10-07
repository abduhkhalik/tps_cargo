import CarouselBanner from "@/components/carousel-banner";
import { CarouselFeature } from "@/components/carousel-feature";
import { Navbar } from "../components/navbar";
import { Content } from "@/components/content";
import { Content2 } from "@/components/content2";
import { Footer3 } from "@/components/footer";
import WhatsAppButton from "@/components/ui/whatsappButton";
import { Gallery } from "@/components/gallery";
import { Mitra } from "@/components/mitra";
import { Testimoni } from "@/components/testimoni";
import { Team } from "@/components/our-team";

const Home = () => {
  return (
    <main>
      {/* Header */}
      <Navbar />
      {/* Carousel Banner */}
      <section className="px-4 md:px-0">
        <CarouselBanner />
      </section>
      {/* Carousel Feature */}
      <section className="md:container py-12 px-4 md:px-[65px]">
        <h1 className="font-bold md:text-2xl text-xl">
          Ada <span className="text-blue-600">Promo</span> Menarik, Lho!
        </h1>
        <CarouselFeature />
      </section>
      {/* Content */}
      <section>
        <Content />
      </section>
      <section className="bg-slate-100">
        <Content2 />
      </section>
      <section>
        <Mitra />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Testimoni />
      </section>
      <section className="bg-slate-50">
        <Gallery />
      </section>
      <WhatsAppButton />
      {/* Footer */}

      <footer>
        <Footer3 />
      </footer>
    </main>
  );
};

export default Home;
