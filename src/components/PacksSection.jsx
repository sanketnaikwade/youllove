import { motion } from 'framer-motion';
import styles from './PacksSection.module.css';

const packs = [
  {
    id: 'starter',
    name: 'Starter Pack',
    price: '₹199',
    qty: '50g · 12 pieces',
    description: 'Your intro to the Youllove universe. Pick one flavor, taste the obsession.',
    flavor: 'Choose any 1 flavor',
    badge: null,
    cta: 'Try a Pack',
    featured: false,
  },
  {
    id: 'duo',
    name: 'Duo Pack',
    price: '₹349',
    qty: '100g · 24 pieces',
    description: 'Both worlds in one box — the sweet-spicy heat of Watermelon and the deep berry pull of Blueberry.',
    flavor: 'Watermelon Masala + Blueberry Jam',
    badge: 'Most Popular',
    cta: 'Get the Duo',
    featured: true,
  },
  {
    id: 'party',
    name: 'Party Box',
    price: '₹799',
    qty: '250g · 60 pieces',
    description: 'Share the love — or don\'t. Bulk box for events, gifting, or pure personal indulgence.',
    flavor: 'Mix of both flavors',
    badge: 'Best Value',
    cta: 'Order a Box',
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 0.8, 0.3, 1] },
  }),
};

export default function PacksSection() {
  return (
    <section className={styles.section} id="packs" aria-label="Choose your pack">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>🍬 Pick Your Pack</p>
          <h2 className={styles.heading}>
            Every craving,{' '}
            <span className={styles.headingAccent}>every budget.</span>
          </h2>
          <p className={styles.sub}>
            Free shipping on orders above ₹499. Ships in 2–3 business days.
          </p>
        </motion.div>

        {/* Cards */}
        <div className={styles.grid}>
          {packs.map((pack, i) => (
            <motion.article
              key={pack.id}
              className={`${styles.card} ${pack.featured ? styles.cardFeatured : ''}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {pack.badge && <span className={styles.badge}>{pack.badge}</span>}

              <div className={styles.cardTop}>
                <h3 className={styles.packName}>{pack.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{pack.price}</span>
                  <span className={styles.qty}>{pack.qty}</span>
                </div>
              </div>

              <p className={styles.desc}>{pack.description}</p>
              <p className={styles.flavorNote}>{pack.flavor}</p>

              <a
                href="#cta"
                id={`pack-cta-${pack.id}`}
                className={`${styles.cardCta} ${pack.featured ? styles.cardCtaPrimary : styles.cardCtaGhost}`}
              >
                {pack.cta}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          className={styles.trust}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {['🚚 Free shipping ₹499+', '🔒 Secure checkout', '↩️ Easy returns', '🌿 All natural'].map(t => (
            <span key={t} className={styles.trustBadge}>{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
