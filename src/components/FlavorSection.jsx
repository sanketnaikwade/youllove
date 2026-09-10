import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Candy from './Candy.jsx';
import styles from './FlavorSection.module.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 0.8, 0.3, 1] } },
};

/**
 * One component for both flavors. Nothing flavor-specific is hardcoded
 * here — colors/accent glow come from `candyVariant` (matched in
 * FlavorSection.module.css + Candy.module.css), spin direction and layout
 * order come from props, all content comes from data/flavors.js. To add a
 * third flavor: add a CSS variant block + a new data entry — this
 * component doesn't change.
 */
export default function FlavorSection({
  id,
  numeral,
  kicker,
  headline,
  body,
  tags,
  candyVariant,
  spinDirection,
  reverse,
}) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 300 * spinDirection]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1.12]);
  // Giant background numeral drifts against the scroll for editorial depth.
  const numeralY = useTransform(scrollYProgress, [0, 1], [110, -110]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0.14, 0.14, 0]);

  return (
    <section ref={sectionRef} id={id} className={`${styles.section} ${styles[candyVariant]}`}>
      <div className={styles.pin}>
        <div className={styles.numeralWrap} aria-hidden="true">
          <motion.span className={styles.numeral} style={{ y: numeralY, opacity: numeralOpacity }}>
            {numeral}
          </motion.span>
        </div>

        <div className={`${styles.grid} ${reverse ? styles.reverse : ''}`}>
          <motion.div className={styles.visual} style={{ rotate, scale }}>
            <Candy variant={candyVariant} size="100%" />
          </motion.div>

          <motion.div
            className={styles.copy}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p variants={item} className={styles.kicker}>
              {kicker}
            </motion.p>
            <motion.h2 variants={item} className={styles.headline}>
              {headline}
            </motion.h2>
            <motion.p variants={item} className={styles.body}>
              {body}
            </motion.p>
            <motion.div variants={item} className={styles.tags}>
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </motion.div>

            <motion.div variants={item} className={styles.ctaWrap}>
              <a href="#packs" className={styles.flavorCta} id={`flavor-cta-${id}`}>
                Shop This Flavor
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
