import { motion, useScroll } from 'framer-motion';
import styles from './ProgressBar.module.css';

/**
 * Tracks overall page scroll. Uses a motion value driving `scaleX`
 * (not width) so this animates on the compositor thread, not layout.
 */
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.track}>
      <motion.div className={styles.fill} style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
