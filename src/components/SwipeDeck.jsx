import React, { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'

const SwipeDeck = ({ cards, onExhausted }) => {
  const initialCards = useMemo(
    () => cards.map((card) => ({ ...card })),
    [cards],
  )
  const [deck, setDeck] = useState(initialCards)
  const [swipeThreshold, setSwipeThreshold] = useState(() => {
    if (typeof window === 'undefined') return 80
    return window.innerWidth < 640 ? 45 : 80
  })

  useEffect(() => {
    setDeck(initialCards)
  }, [initialCards])

  useEffect(() => {
    if (deck.length === 0) {
      const timeout = setTimeout(() => {
        setDeck(initialCards)
        if (onExhausted) onExhausted()
      }, 350)
      return () => clearTimeout(timeout)
    }
    return undefined
  }, [deck, initialCards, onExhausted])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const updateThreshold = () => {
      setSwipeThreshold(window.innerWidth < 640 ? 45 : 80)
    }
    updateThreshold()
    window.addEventListener('resize', updateThreshold)
    return () => window.removeEventListener('resize', updateThreshold)
  }, [])

  return (
    <div className="relative grid h-[320px] w-full place-items-center overflow-visible sm:h-[340px] md:h-[360px]">
      {deck.map((card) => (
        <DeckCard
          key={card.id}
          {...card}
          cards={deck}
          setDeck={setDeck}
          swipeThreshold={swipeThreshold}
        />
      ))}
    </div>
  )
}

const DeckCard = ({ id, title, headline, body, cards, setDeck, swipeThreshold }) => {
  const x = useMotionValue(0)

  const rotateRaw = useTransform(x, [-120, 120], [-14, 14])
  const isFront = id === cards[cards.length - 1].id

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 4 : -4
    return `${rotateRaw.get() + offset}deg`
  })

  const cardOpacity = useTransform(x, (latest) => {
    const distance = Math.min(1, Math.abs(latest) / 120)
    const base = isFront ? 1 : 0.16
    return Math.max(0.08, (1 - distance * 0.8) * base)
  })

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > swipeThreshold) {
      setDeck((prev) => prev.filter((card) => card.id !== id))
    }
  }

  return (
    <motion.article
      className="relative mx-auto h-[18rem] w-[16.5rem] sm:h-[18.5rem] sm:w-[18rem] md:w-[19.5rem]"
      style={{ gridRow: 1, gridColumn: 1 }}
    >
      <motion.div
        className={`flex h-full w-full origin-bottom flex-col justify-between rounded-[28px] border border-white/10 bg-gradient-to-br from-gray-950 via-gray-950/97 to-gray-900/94 p-6 shadow-[0_25px_55px_-28px_rgba(15,118,110,0.65)] transition`}
        style={{
          x,
          opacity: cardOpacity,
          rotate,
          cursor: 'grab',
          pointerEvents: isFront ? 'auto' : 'none',
          filter: isFront ? 'none' : 'blur(0.3px)',
        }}
        animate={{ scale: isFront ? 1 : 0.97 }}
        drag={isFront ? 'x' : false}
        dragConstraints={{ left: -160, right: 160 }}
        dragElastic={0.35}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">
            {title}
          </p>
          <h3 className="text-lg font-semibold text-white">{headline}</h3>
          <p className="text-sm leading-relaxed text-white/70">{body}</p>
        </div>
        <motion.div
          className="pointer-events-none flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70"
          style={{
            opacity: useTransform(x, [-120, 0, 120], [0.3, 1, 0.3]),
          }}
        >
          <span>Swipe</span>
          <motion.span
            style={{
              opacity: useTransform(x, [0, 60], [1, 0.2]),
              x: useTransform(x, [0, 60], [0, 6]),
            }}
          >
            →
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}

SwipeDeck.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onExhausted: PropTypes.func,
}

DeckCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ).isRequired,
  setDeck: PropTypes.func.isRequired,
  swipeThreshold: PropTypes.number.isRequired,
}

SwipeDeck.defaultProps = {
  onExhausted: undefined,
}

export default SwipeDeck
