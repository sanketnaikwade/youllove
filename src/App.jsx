import { MotionConfig } from 'framer-motion';
import ScrollBackground from './components/ScrollBackground.jsx';
import Nav from './components/Nav.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Hero from './components/Hero.jsx';
import FlavorSection from './components/FlavorSection.jsx';
import IngredientStrip from './components/IngredientStrip.jsx';
import PacksSection from './components/PacksSection.jsx';
import CTA from './components/CTA.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';
import Footer from './components/Footer.jsx';
import { flavors } from './data/flavors.js';

export default function App() {
  return (
    // reducedMotion="user" makes every motion value in the tree respect
    // prefers-reduced-motion automatically — no per-component checks needed.
    <MotionConfig reducedMotion="user">
      <ScrollBackground />
      <ProgressBar />
      <Nav />
      {/* Floating sticky order button — appears after hero */}
      <FloatingCTA />
      <Hero />

      <FlavorSection {...flavors[0]} />
      <IngredientStrip />
      <FlavorSection {...flavors[1]} />

      {/* Pricing packs section */}
      <PacksSection />

      <CTA />
      <Footer />
    </MotionConfig>
  );
}
