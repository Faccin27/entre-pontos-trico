import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return(
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Portfolio />
      <About />
    </div>
  )
}
