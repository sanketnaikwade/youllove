import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollBackground.module.css';

/**
 * The signature interaction: a single fixed layer behind the whole page
 * whose color is driven by GLOBAL scroll progress. As you scroll, the
 * entire page travels through a color journey — intro → the hot watermelon
 * world → a transition → the deep blueberry world → the CTA glow — so the
 * page reads as one continuous experience rather than isolated sections.
 *
 * It's one motion value interpolating between colors on the compositor,
 * off React's render path, so it stays smooth.
 */
export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.14, 0.3, 0.46, 0.6, 0.8, 1],
    [
      '#150d13', // intro
      '#2c0a13', // entering watermelon
      '#3b0c17', // watermelon peak (hottest)
      '#1e0f24', // transition / ingredient beat
      '#180a30', // entering blueberry
      '#1e0d3c', // blueberry peak
      '#23122c', // CTA
    ],
  );

  return <motion.div className={styles.bg} style={{ background }} aria-hidden="true" />;
}
