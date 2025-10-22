import React, { useRef, useState } from 'react'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const contactMethods = [
  {
    label: 'Email',
    value: 'tanmayrokde@gmail.com',
    href: 'mailto:tanmayrokde@gmail.com',
  },
  {
    label: 'Location',
    value: 'Remote · Hyderabad, India',
  },
  {
    label: 'Availability',
    value: 'Open to senior DevOps / platform roles & collaborations.',
  },
]

const MailGlyph = ({ className }) => (
  <svg
    viewBox="0 0 64 48"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="6" width="56" height="36" rx="8" fill="currentColor" fillOpacity="0.25" />
    <path d="M8 10L32 28L56 10" />
  </svg>
)

const PhoneGlyph = ({ className }) => (
  <svg
    viewBox="0 0 48 64"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="10" y="2" width="28" height="60" rx="6" fill="currentColor" fillOpacity="0.22" />
    <circle cx="24" cy="52" r="3" fill="currentColor" fillOpacity="0.8" />
    <path d="M18 10H30" />
  </svg>
)

const PaperPlaneGlyph = ({ className }) => (
  <svg
    viewBox="0 0 64 56"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 28L60 4L40 52L30 32L4 28Z" fill="currentColor" fillOpacity="0.2" />
    <path d="M30 32L60 4" />
  </svg>
)

const ChatGlyph = ({ className }) => (
  <svg
    viewBox="0 0 64 60"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M12 12H52C56.4183 12 60 15.5817 60 20V34C60 38.4183 56.4183 42 52 42H28L14 56V42H12C7.58172 42 4 38.4183 4 34V20C4 15.5817 7.58172 12 12 12Z"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <circle cx="20" cy="28" r="3" />
    <circle cx="32" cy="28" r="3" />
    <circle cx="44" cy="28" r="3" />
  </svg>
)

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tanmay-rokde-204672229/',
    icon: <FaLinkedin />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tanmayrokde',
    icon: <FaGithub />,
  },
]

const backgroundGlyphs = [
  {
    Element: MailGlyph,
    className:
      'left-[6%] top-[16%] h-20 w-20 text-cyan-200 sm:h-30 sm:w-30 opacity-90',
    delay: 0,
    duration: 13,
  },
  {
    Element: PhoneGlyph,
    className:
      'right-[10%] top-[16%] h-20 w-20 text-emerald-200 sm:h-30 sm:w-30 opacity-85',
    delay: 0.8,
    duration: 11,
  },
  {
    Element: PaperPlaneGlyph,
    className:
      'left-[18%] bottom-[22%] h-20 w-20 text-sky-200 sm:h-30 sm:w-30 opacity-90',
    delay: 1.3,
    duration: 12,
  },
  {
    Element: ChatGlyph,
    className:
      'right-[14%] bottom-[24%] h-22 w-22 text-purple-200 sm:h-32 sm:w-32 opacity-90',
    delay: 1.9,
    duration: 14,
  },
]

const iconFloat = (delay = 0, duration = 12) => ({
  initial: { y: 0, rotate: 0, scale: 1 },
  animate: {
    y: [-16, 16, -16],
    rotate: [-8, 8, -8],
    scale: [1, 1.06, 1],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    },
  },
})

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 pb-28 pt-32 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-8%] h-[560px] w-[680px] rounded-full bg-sky-400/45 blur-[140px]" />
        <div className="absolute right-[-24%] bottom-[-26%] h-[720px] w-[660px] rounded-full bg-cyan-500/45 blur-[190px]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_60%)]"
          animate={{ opacity: [0.22, 0.4, 0.22] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        {backgroundGlyphs.map(({ Element, className, delay, duration }, index) => (
          <motion.span
            key={className}
            className={`absolute ${className} z-0 drop-shadow-[0_0_42px_rgba(14,165,233,0.8)]`}
            variants={iconFloat(delay, duration)}
            initial="initial"
            animate="animate"
            style={{
              filter: index % 2
                ? 'drop-shadow(0 0 42px rgba(168,85,247,0.8))'
                : 'drop-shadow(0 0 42px rgba(34,211,238,0.8))',
            }}
          >
            <Element className="h-full w-full text-current" />
          </motion.span>
        ))}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] border border-white/40"
          animate={{
            rotate: [0, 0, 6, 0],
            opacity: [0.26, 0.4, 0.48, 0.26],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-[56px] border border-cyan-300/35"
          animate={{
            rotate: [0, -6, 0],
            opacity: [0.22, 0.36, 0.45, 0.22],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 text-center sm:px-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-cyan-200/80">
            Contact
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Let&apos;s architect the next resilient system together.
          </h1>
          <p className="text-lg text-white/70">
            Whether it&apos;s automating infrastructure, crafting developer
            platforms, or exploring the edge of Web3, I&apos;m ready to pair up.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {contactMethods.map(({ label, value, href }) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-left text-sm text-white/70 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/70">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-3 block text-base font-semibold text-white transition hover:text-cyan-200"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-3 text-base text-white">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:tanmayrokde@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-gray-950 transition hover:bg-cyan-400"
          >
            Write me an email
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/70 backdrop-blur">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition hover:text-cyan-200"
              >
                <span className="text-lg">{social.icon}</span>
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mt-20 rounded-[54px] border border-white/10 bg-white/[0.04] px-8 pb-16 pt-16 backdrop-blur-2xl sm:px-14">
          <h2 className="text-lg font-semibold tracking-[0.3em] text-cyan-100/80">
            Digital Visiting Cards
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Drag, stack, and explore the ways we can connect. Each card carries a
            handle—pick the one that suits our next conversation.
          </p>
          <DragCards />
        </div>
      </div>
    </section>
  )
}

export default Contact

const digitalCards = [
  {
    id: 'email',
    heading: 'Email',
    handle: 'tanmayrokde@gmail.com',
    hint: 'Inbox response within 24hrs',
    link: 'mailto:tanmayrokde@gmail.com',
    rotate: '-4deg',
    top: '18%',
    left: '18%',
    accent: 'from-cyan-500/90 to-emerald-500/75',
  },
  {
    id: 'linkedin',
    heading: 'LinkedIn',
    handle: 'linkedin.com/in/tanmay-rokde',
    hint: 'Let’s connect and collaborate',
    link: 'https://www.linkedin.com/in/tanmay-rokde-204672229/',
    rotate: '6deg',
    top: '42%',
    left: '58%',
    accent: 'from-sky-500/90 to-indigo-500/75',
  },
  {
    id: 'github',
    heading: 'GitHub',
    handle: 'github.com/tanmayrokde',
    hint: 'DevOps-heavy repos & experiments',
    link: 'https://github.com/tanmayrokde',
    rotate: '10deg',
    top: '30%',
    left: '34%',
    accent: 'from-slate-200/95 to-slate-700/85',
  },
  {
    id: 'twitter',
    heading: 'X / Twitter',
    handle: '@tanmaydotjson',
    hint: 'Sharing infra notes & debug stories',
    link: 'https://x.com/tanmaydotjson',
    rotate: '-8deg',
    top: '58%',
    left: '26%',
    accent: 'from-purple-500/88 to-fuchsia-500/72',
  },
  {
    id: 'cal',
    heading: 'Book a slot',
    handle: 'cal.com/tanmayrokde',
    hint: '15-min intro sync',
    link: 'https://cal.com/',
    rotate: '14deg',
    top: '24%',
    left: '68%',
    accent: 'from-amber-400/90 to-orange-500/70',
  },
  {
    id: 'discord',
    heading: 'Discord',
    handle: 'tanmay.dev',
    hint: 'Join the automation hangout',
    link: 'https://discordapp.com/users/tanmay.dev',
    rotate: '-2deg',
    top: '50%',
    left: '46%',
    accent: 'from-blue-500/90 to-cyan-400/70',
  },
]

const DragCards = () => {
  const containerRef = useRef(null)

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-14 h-[640px] w-full max-w-[960px] overflow-visible sm:h-[560px] lg:h-[540px]"
    >
      <div className="absolute inset-0 rounded-[42px] border border-white/10 bg-white/[0.05]" />
      <div className="absolute inset-0 overflow-hidden rounded-[42px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_68%)]" />
        {digitalCards.map((card) => (
          <DragCard
            key={card.id}
            containerRef={containerRef}
            {...card}
          />
        ))}
      </div>
    </div>
  )
}

const DragCard = ({
  containerRef,
  heading,
  handle,
  hint,
  link,
  rotate,
  top,
  left,
  accent,
}) => {
  const [zIndex, setZIndex] = useState(1)
  const raiseCard = () => {
    const all = document.querySelectorAll('.contact-drag-card')
    let max = 1
    all.forEach((el) => {
      const value = Number.parseInt(
        window.getComputedStyle(el).getPropertyValue('z-index'),
        10,
      )
      if (!Number.isNaN(value) && value >= max) {
        max = value + 1
      }
    })
    setZIndex(max)
  }

  return (
    <motion.div
      onMouseDown={raiseCard}
      onTouchStart={raiseCard}
      className={`contact-drag-card absolute flex w-72 select-none flex-col gap-4 rounded-[34px] border border-white/10 bg-gradient-to-br ${accent} p-8 text-left shadow-[0_35px_80px_-40px_rgba(14,165,233,0.72)] sm:w-80`}
      style={{
        top,
        left,
        rotate,
        zIndex,
        cursor: 'grab',
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.4}
      whileTap={{ cursor: 'grabbing', scale: 1.02 }}
      whileHover={{ scale: 1.03 }}
    >
      <p className="text-xs uppercase tracking-[0.4em] text-white/70">
        {heading}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-lg font-semibold text-white transition hover:text-cyan-100"
      >
        {handle}
      </a>
      <p className="text-xs text-white/60">{hint}</p>
    </motion.div>
  )
}

DragCard.defaultProps = {
  hint: '',
}
