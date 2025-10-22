import React from 'react'
import { motion } from 'framer-motion'

const BrandSpark = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <motion.span
          className="brand-orb"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        />
        <span className="brand-orb__core" />
      </div>
      <div className="leading-tight">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.55em] text-white/70"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          
        </motion.p>
      </div>
    </div>
  )
}

export default BrandSpark
