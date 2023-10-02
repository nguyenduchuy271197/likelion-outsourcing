import Companies from "./components/companies";
import CTA from "./components/cta";
import Elementors from "./components/elementors";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Reviews from "./components/reviews";
import Solutions from "./components/solutions";

export default function HomePage() {
  return (
    <div className="space-y-40">
      <Hero />
      <Introduction />
      <Solutions />
      <Elementors />
      <Companies />
      <CTA />
      <Reviews />
    </div>
  );
}
