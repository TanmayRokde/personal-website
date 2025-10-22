import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import TrMonogram from './TrMonogram'
import { motion } from 'framer-motion'

const floatingTech = [
  {
    label: 'DevOps',
    position: 'top-8 left-[6%]',
    delay: 0,
    strength: 14,
    amplitude: 18,
    duration: 8.8,
    repeatDelay: 1.2,
    tilt: {
      x: [-16, 8, -12, 10],
      y: [12, -18, 14, -10],
    },
    parallaxTilt: { x: 1.2, y: 0.6 },
  },
  {
    label: 'Rust',
    position: 'top-16 right-[18%]',
    delay: 0.35,
    strength: 18,
    amplitude: 24,
    duration: 9.6,
    repeatDelay: 0.8,
    tilt: {
      x: [-20, 14, -8, 12],
      y: [10, -20, 16, -6],
    },
    parallaxTilt: { x: -1, y: 0.8 },
  },
  {
    label: 'Kubernetes',
    position: 'top-[38%] left-[5%]',
    delay: 0.75,
    strength: 16,
    amplitude: 20,
    duration: 10.5,
    repeatDelay: 1.6,
    tilt: {
      x: [-12, 10, -14, 8],
      y: [14, -16, 18, -12],
    },
    parallaxTilt: { x: 0.8, y: 1.1 },
  },
  {
    label: 'CI/CD',
    position: 'top-[48%] right-[10%]',
    delay: 1.1,
    strength: 12,
    amplitude: 16,
    duration: 7.9,
    repeatDelay: 2,
    tilt: {
      x: [-14, 6, -10, 12],
      y: [8, -10, 14, -6],
    },
    parallaxTilt: { x: -0.6, y: 1.2 },
  },
  {
    label: 'Cloud',
    position: 'bottom-[14%] left-[10%]',
    delay: 1.45,
    strength: 10,
    amplitude: 14,
    duration: 8.4,
    repeatDelay: 1.4,
    tilt: {
      x: [-10, 8, -6, 12],
      y: [10, -12, 8, -14],
    },
    parallaxTilt: { x: 0.7, y: 0.9 },
  },
  {
    label: 'Web3',
    position: 'bottom-[30%] right-[14%]',
    delay: 1.85,
    strength: 14,
    amplitude: 22,
    duration: 11.2,
    repeatDelay: 0.6,
    tilt: {
      x: [-18, 12, -14, 10],
      y: [16, -18, 12, -16],
    },
    parallaxTilt: { x: -1.1, y: -0.7 },
  },
  {
    label: 'PostgreSQL',
    position: 'top-[24%] left-[22%]',
    delay: 0.6,
    strength: 12,
    amplitude: 19,
    duration: 9.8,
    repeatDelay: 1.3,
    tilt: {
      x: [-14, 9, -16, 12],
      y: [12, -14, 10, -12],
    },
    parallaxTilt: { x: 1.1, y: 0.4 },
  },
  {
    label: 'Redis',
    position: 'bottom-[24%] left-[4%]',
    delay: 1.55,
    strength: 11,
    amplitude: 17,
    duration: 8.6,
    repeatDelay: 1.1,
    tilt: {
      x: [-16, 8, -10, 14],
      y: [10, -14, 8, -10],
    },
    parallaxTilt: { x: -0.9, y: 1 },
  },
  {
    label: 'AWS',
    position: 'top-[10%] right-[6%]',
    delay: 0.95,
    strength: 15,
    amplitude: 21,
    duration: 10.8,
    repeatDelay: 1.9,
    tilt: {
      x: [-18, 11, -15, 9],
      y: [14, -16, 12, -18],
    },
    parallaxTilt: { x: -1.2, y: 0.5 },
  },
  {
    label: 'GraphQL',
    position: 'bottom-[6%] right-[16%]',
    delay: 2.25,
    strength: 13,
    amplitude: 18,
    duration: 9.2,
    repeatDelay: 1.7,
    tilt: {
      x: [-12, 15, -9, 13],
      y: [18, -12, 16, -10],
    },
    parallaxTilt: { x: 0.9, y: -1 },
  },
]

const heroTextVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(16px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

const heroChildVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.25 + i * 0.12,
    },
  }),
}

const heroChipVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 12 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: [0.75, 1.06, 0.98, 1],
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
      times: [0, 0.5, 0.85, 1],
      delay: 0.4 + i * 0.08,
    },
  }),
}

const heroCardVariants = {
  hidden: { opacity: 0, y: 32, rotateX: -10, filter: 'blur(12px)' },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: 'easeOut',
      delay: 0.55 + i * 0.12,
    },
  }),
}

const heroMonogramVariants = {
  hidden: { opacity: 0, scale: 0.85, filter: 'blur(18px)', y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 },
  },
}

const chipLabels = ['DevOps & Cloud', 'Rust & Web3', 'Problem Solver']

const focusHighlights = [
  {
    title: 'Focus',
    body: 'End-to-end product delivery—cloud, API, and immersive front-end experiences.',
  },
  {
    title: 'Mindset',
    body: 'Automation-first builder collaborating across design and infrastructure teams.',
  },
  {
    title: 'Availability',
    body: 'Open to remote roles & partnerships on impactful products.',
  },
]

const Hero = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [typedName, setTypedName] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const fullName = 'Tanmay Rokde'
    let index = 0
    let typingInterval
    let endTimeout

    const startTimeout = setTimeout(() => {
      setIsTyping(true)
      typingInterval = setInterval(() => {
        index += 1
        setTypedName(fullName.slice(0, index))
        if (index === fullName.length) {
          clearInterval(typingInterval)
          endTimeout = setTimeout(() => setIsTyping(false), 800)
        }
      }, 110)
    }, 250)

    return () => {
      clearTimeout(startTimeout)
      if (typingInterval) clearInterval(typingInterval)
      if (endTimeout) clearTimeout(endTimeout)
    }
  }, [])

  const displayName = typedName || '\u00A0'

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const relativeX = (event.clientX - rect.left) / rect.width
    const relativeY = (event.clientY - rect.top) / rect.height
    const x = (relativeX - 0.5) * 2
    const y = (relativeY - 0.5) * 2
    setParallax({ x, y })
  }

  const resetParallax = () => setParallax({ x: 0, y: 0 })

  return (
    <motion.section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
    >
      <div
        className="absolute inset-x-0 top-0 flex justify-center blur-3xl"
        aria-hidden="true"
      >
        <div className="h-48 w-[36rem] rounded-full bg-cyan-500/20" />
      </div>
      <div
        className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-10 hidden h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl sm:block"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0">
        {floatingTech.map(
          ({
            label,
            position,
            delay,
            strength,
            amplitude = 18,
            duration = 9,
            repeatDelay = 1,
            tilt,
            parallaxTilt,
          }) => (
            <div
              key={label}
              className={`floating-chip ${position}`}
            >
              <motion.div
                className="floating-chip__layer"
                animate={{
                  x: parallax.x * strength * 1.8 * (parallaxTilt?.x ?? 1),
                  y: parallax.y * strength * 1.8 * (parallaxTilt?.y ?? 1),
                }}
                transition={{
                  type: 'spring',
                  stiffness: 110,
                  damping: 14,
                  mass: 0.35,
                }}
              >
                <motion.div
                  className="floating-chip__inner"
                  initial={{ y: 0, rotateX: -18, rotateY: 12, opacity: 0 }}
                  animate={{
                    y: [0, -amplitude, 0, amplitude * 0.4, -amplitude * 0.25, 0],
                    rotateX: tilt?.x ?? [-12, 12, -12],
                    rotateY: tilt?.y ?? [12, -18, 12],
                    opacity: [0.2, 0.85, 0.35, 0.7, 0.4],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    delay,
                    ease: 'easeInOut',
                    repeatDelay,
                  }}
                >
                  <span>{label}</span>
                </motion.div>
              </motion.div>
            </div>
          ),
        )}
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 py-20 sm:px-10 lg:flex-row lg:px-12">
        <motion.div
          className="w-full flex-1 text-center lg:text-left"
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-sm tracking-[0.55em] text-cyan-300/80"
            variants={heroChildVariants}
            custom={0}
          >
            <span
              className={`typewriter ${isTyping ? 'typewriter--active' : 'typewriter--steady'}`}
              aria-label="Tanmay Rokde"
            >
              {displayName}
            </span>
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            variants={heroChildVariants}
            custom={1}
          >
            Designing resilient cloud-native systems
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-white/70"
            variants={heroChildVariants}
            custom={2}
          >
            Backend &amp; DevOps engineer who loves solving problems from
            scratch. I blend a front-end sensibility with infrastructure rigor,
            automating deployments, shaping intuitive interfaces, and exploring
            blockchain ecosystems with Rust-powered smart contracts.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80 lg:justify-start"
            variants={heroChildVariants}
            custom={3}
          >
            {chipLabels.map((chip, index) => (
              <motion.span
                key={chip}
                className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2"
                variants={heroChipVariants}
                custom={index}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 grid gap-3 text-sm text-white/60 sm:grid-cols-3"
            variants={heroChildVariants}
            custom={4}
          >
            {focusHighlights.map(({ title, body }, index) => (
              <motion.div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur"
                variants={heroCardVariants}
                custom={index}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                  {title}
                </p>
                <p className="mt-2 text-white">{body}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-white/70 backdrop-blur"
            variants={heroChildVariants}
            custom={8}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
              Currently exploring
            </p>
            <p className="mt-2 text-white">
              Rust, Anchor framework, Solidity, and the evolving world of Web3
              infrastructure.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-1 items-center justify-center"
          variants={heroMonogramVariants}
          initial="hidden"
          animate="visible"
        >
          <TrMonogram />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
