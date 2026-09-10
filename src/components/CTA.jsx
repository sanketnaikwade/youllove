import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CTA.module.css';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="cta" className={styles.cta}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
      >
        <p className={styles.kicker}>🍬 Ready to taste the difference?</p>
        <h2>
          Bold candy.
          <br />
          Order yours now.
        </h2>
        <p className={styles.sub}>
          Two flavors built to be unforgettable. Ships in 2–3 days,
          free on orders above ₹499.
        </p>

        {/* Primary Order CTA */}
        <a href="#packs" id="cta-order-btn" className={styles.orderBtn}>
          Shop All Packs
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
            <path d="M3 8.5h11M9.5 4l4.5 4.5L9.5 13" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Divider */}
        <div className={styles.divider}>
          <span>or get early access</span>
        </div>

        {/* Email signup form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@example.com"
            required
            aria-label="Email address"
            disabled={submitted}
          />
          <button type="submit" id="cta-email-btn" className={submitted ? styles.done : ''}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={submitted ? 'done' : 'idle'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                {submitted ? "You're in ✓" : 'Get notified'}
              </motion.span>
            </AnimatePresence>
          </button>
        </form>

        <p className={styles.note}>No spam. Just a heads-up when new flavors drop.</p>
      </motion.div>
    </section>
  );
}
