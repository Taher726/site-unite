import { Hero } from "./components/hero/hero";
import { AboutLanding } from "./components/landing/about_landing";
import { KeyFigures } from "./components/landing/key_figures_landing";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutLanding/>
      <KeyFigures/>
    </>
  );
}
