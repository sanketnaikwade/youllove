import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Candy from './Candy.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef(null);

  // Scoped to the hero itself, not the whole document — so this keeps
  // working correctly regardless of how tall the rest of the page is.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const blobAY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const blobBY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const candyY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const candyRotate = useTransform(scrollYProgress, [0, 1], [0, 65]);
  // Copy drifts up and fades as you leave — adds depth to the parallax.
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={heroRef} className={styles.hero} id="hero">
      <motion.div className={`${styles.blob} ${styles.blobA}`} style={{ y: blobAY }} />
      <motion.div className={`${styles.blob} ${styles.blobB}`} style={{ y: blobBY }} />

      <motion.div className={styles.inner} style={{ y: copyY, opacity: copyOpacity }}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} />
          Two flavors, one obsession
        </p>
        <h1 className={styles.headline}>Youllove</h1>
        <p className={styles.tagline}>
          Bold, exotic candy crafted for those who believe flavor should be
          felt — not just tasted.
        </p>
        <div className={styles.ctaRow}>
          <a href="#packs" className={styles.btnPrimary} id="hero-cta-shop">
            Shop Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#flavor-watermelon" className={styles.btnGhost} id="hero-cta-explore">
            Explore Flavors
          </a>
        </div>
      </motion.div>

      <motion.div className={styles.candyWrap} style={{ y: candyY, rotate: candyRotate }}>
        <Candy variant="watermelon" />
      </motion.div>

      <div className={styles.scrollCue}>
        <div className={styles.line} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
