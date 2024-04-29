import CarouselHero from "@/components/CarouselHero";
import Description from "@/components/Description";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full flex justify-center">
        <CarouselHero />
      </div>
      <Description />
      <Video />
      <Form />
    </div>
  );
}
