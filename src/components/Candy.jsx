import { motion } from 'framer-motion';
import styles from './Candy.module.css';

const SEED_POSITIONS = [
  { top: '20%', left: '48%', rot: 8 },
  { top: '31%', left: '30%', rot: -24 },
  { top: '31%', left: '65%', rot: 20 },
  { top: '48%', left: '22%', rot: -10 },
  { top: '48%', left: '74%', rot: 12 },
  { top: '63%', left: '39%', rot: -4 },
  { top: '63%', left: '58%', rot: 18 },
];

/**
 * Shared candy visual — a glossy lollipop built entirely from layered CSS
 * (no image assets), so it stays crisp at any size and dependency-free.
 * `variant` picks the flavor treatment; `size` sets the width of the head.
 *
 * The gentle idle float lives on the inner `.floater` so it composes with
 * whatever scroll transform the parent applies (hero parallax, section
 * spin) — and because it's a Framer transform animation, MotionConfig's
 * reducedMotion="user" pauses it automatically for those users.
 */
export default function Candy({ variant = 'watermelon', size = '100%' }) {
  return (
    <div className={styles.wrap} style={{ width: size }}>
      <motion.div
        className={styles.floater}
        animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className={styles.stick} />
        <div className={`${styles.candy} ${styles[variant]}`}>
          {variant === 'blueberry' && <span className={styles.swirl} />}
          {variant === 'watermelon' &&
            SEED_POSITIONS.map((pos, i) => (
              <span
                key={i}
                className={styles.seed}
                style={{ top: pos.top, left: pos.left, transform: `rotate(${pos.rot}deg)` }}
              />
            ))}
          <span className={styles.gloss} />
        </div>
      </motion.div>
    </div>
  );
}
