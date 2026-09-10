import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Solidify the bar once you've left the hero, so it stays legible over
  // the brighter flavor worlds without a permanent heavy background.
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60));

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Youllove</div>
      <a href="#cta" className={styles.cta}>
        Get notified
      </a>
    </nav>
  );
}
