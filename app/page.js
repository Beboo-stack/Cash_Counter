import Features from "@/components/Features";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
// import NewsLetter from "@/components/NewsLetter";
import Products from "@/components/Products";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="gap-12">
      <Hero />
      <Features />
      <Products />
      <Video />
      <Form />
    </div>
  );
}
