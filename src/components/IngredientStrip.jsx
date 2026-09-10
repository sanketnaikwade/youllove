import { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import styles from './IngredientStrip.module.css';

const WORDS = ['Real fruit', 'Small batch', 'Hand rolled', 'No junk'];
const REPEATED = Array(6).fill(WORDS).flat();

/**
 * Kinetic marquee that reads global scroll. The base track slides on
 * scroll position; scroll *velocity* adds a brief skew so the strip feels
 * physically shoved as you fling the page — reinforcing that the whole
 * page responds to scrolling, not just the flavor sections.
 */
export default function IngredientStrip() {
  const stripRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-38%']);

  const scrollVelocity = useVelocity(scrollYProgress);
  const skew = useSpring(useTransform(scrollVelocity, [-4, 0, 4], [-8, 0, 8]), {
    stiffness: 200,
    damping: 40,
  });

  return (
    <div className={styles.strip} ref={stripRef}>
      <motion.div className={styles.track} style={{ x, skewX: skew }}>
        {REPEATED.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </motion.div>
    </div>
  );
}
