import { motion } from 'framer-motion';
import Candy from './Candy.jsx';
import styles from './PacksSection.module.css';

const packs = [
  {
    id: 'starter',
    name: 'Starter Pack',
    tagline: 'Your first taste of Youllove.',
    price: '₹199',
    qty: '50g · 12 pieces',
    flavor: 'Watermelon Masala',
    badge: null,
    cta: 'Choose Starter →',
    featured: false,
    visualType: 'starter',
  },
  {
    id: 'duo',
    name: 'Duo Pack',
    tagline: 'Two flavours. One box.',
    price: '₹349',
    qty: '100g · 24 pieces',
    flavor: 'Watermelon Masala + Blueberry Jam',
    badge: 'Recommend',
    cta: 'Get the Duo →',
    featured: true,
    visualType: 'duo',
  },
  {
    id: 'party',
    name: 'Party Box',
    tagline: 'Made for sharing. Or not.',
    price: '₹799',
    qty: '250g · 60 pieces',
    flavor: 'Mix of both flavours',
    badge: null,
    cta: 'Order the Box →',
    featured: false,
    visualType: 'party',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 0.8, 0.3, 1] },
  }),
};

export default function PacksSection() {
  return (
    <section className={styles.section} id="packs" aria-label="Choose your pack">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>🍭 PICK YOUR PACK</p>
          <h2 className={styles.heading}>How much Youllove?</h2>
          <p className={styles.sub}>One pop, a couple, or the whole box.</p>
        </motion.div>

        {/* Product Cards */}
        <div className={styles.grid}>
          {packs.map((pack, i) => (
            <motion.article
              key={pack.id}
              className={`${styles.card} ${pack.featured ? styles.cardFeatured : ''}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {pack.badge && <span className={styles.badge}>{pack.badge}</span>}

              {/* Product Visual Display Area */}
              <div className={`${styles.productVisual} ${styles[`visual_${pack.id}`]}`}>
                {pack.visualType === 'starter' && (
                  <div className={styles.singleCandy}>
                    <Candy variant="watermelon" size="84px" />
                  </div>
                )}
                {pack.visualType === 'duo' && (
                  <div className={styles.duoCandies}>
                    <div className={styles.candyLeft}>
                      <Candy variant="watermelon" size="78px" />
                    </div>
                    <div className={styles.candyRight}>
                      <Candy variant="blueberry" size="78px" />
                    </div>
                  </div>
                )}
                {pack.visualType === 'party' && (
                  <div className={styles.partyCandies}>
                    <div className={styles.partyWrap}>
                      <Candy variant="watermelon" size="62px" />
                      <Candy variant="blueberry" size="68px" />
                      <Candy variant="watermelon" size="62px" />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <h3 className={styles.packName}>{pack.name}</h3>
                  <p className={styles.tagline}>{pack.tagline}</p>
                </div>

                <div className={styles.flavorLine}>
                  <span className={styles.flavorBullet}>•</span>
                  <span>{pack.flavor}</span>
                </div>

                <div className={styles.priceBlock}>
                  <span className={styles.price}>{pack.price}</span>
                  <span className={styles.qty}>{pack.qty}</span>
                </div>

                <a
                  href="#cta"
                  id={`pack-cta-${pack.id}`}
                  className={`${styles.cardCta} ${pack.featured ? styles.cardCtaFeatured : styles.cardCtaStandard}`}
                >
                  {pack.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Understated D2C Trust Information */}
        <motion.p
          className={styles.trustLine}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Free shipping over ₹499 · Secure checkout · Easy returns
        </motion.p>
      </div>
    </section>
  );
}
