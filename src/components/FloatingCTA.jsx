import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FloatingCTA.module.css';

/**
 * Sticky floating pill that appears after scrolling past the hero
 * and disappears near the bottom CTA section.
 */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const scrollY = window.scrollY;
      const docH   = document.documentElement.scrollHeight;
      const winH   = window.innerHeight;
      const nearBottom = scrollY + winH > docH * 0.82;
      setVisible(scrollY > winH * 0.75 && !nearBottom);
    };

    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0,  scale: 1   }}
          exit={{ opacity: 0,    y: 12, scale: 0.95 }}
          transition={{ duration: 0.32, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <a
            href="#cta"
            id="floating-order-btn"
            className={styles.btn}
            aria-label="Order Youllove Candies now"
          >
            <span aria-hidden="true">🍬</span>
            Order Now
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
