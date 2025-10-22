import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const profileHighlights = [
  'Backend & DevOps engineer building resilient services with Kubernetes, Docker, and cloud infrastructure.',
  'Exploring blockchain ecosystems while sharpening Rust, Anchor, and Solidity fundamentals.',
  'Detail-oriented collaborator who thrives on pairing thoughtful design with scalable engineering.',
  'Automation-first mindset that ships CI/CD pipelines and observability into every project.',
]

const techCategories = [
  {
    title: 'Programming & Styling',
    items: [
      'CSS3',
      'HTML5',
      'JavaScript',
      'TypeScript',
      'Python',
      'Go',
      'Rust',
      'Shell Script',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      'React',
      'Redux',
      'React Router',
      'Material UI',
      'Bootstrap',
      'Express.js',
      'Node.js',
      'NPM',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
      'Terraform',
      'GitHub Actions',
      'Jenkins',
    ],
  },
  {
    title: 'Blockchain',
    items: ['Solidity', 'Anchor', 'Ethereum', 'Polkadot'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Pytest', 'Playwright'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Postman', 'Insomnia', 'Confluence', 'Jira', 'Nodemon'],
  },
]

const currentFocus = [
  'Scaling apps with Kubernetes & cloud-native tooling.',
  'Writing Rust and Anchor smart contracts.',
  'Building Web3 infrastructure side-projects.',
  'Automating workflows with CI/CD pipelines.',
]

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeInStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
}

const glowPulse = {
  initial: { opacity: 0.25, scale: 0.95 },
  animate: {
    opacity: [0.25, 0.5, 0.25],
    scale: [0.95, 1.05, 0.95],
    transition: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
  },
}

const TechStack = () => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-12">
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/5 via-gray-950 to-gray-950"
        aria-hidden="true"
        variants={glowPulse}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute left-[-15%] top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
        aria-hidden="true"
        variants={glowPulse}
        initial="initial"
        animate="animate"
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-18%] bottom-12 -z-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
        aria-hidden="true"
        variants={glowPulse}
        initial="initial"
        animate="animate"
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="mx-auto max-w-6xl space-y-16">
        <motion.div
          className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div>
            <motion.p
              className="text-sm uppercase tracking-[0.6em] text-cyan-300/70"
              variants={fadeInStagger}
              custom={0}
            >
              Tech Stack
            </motion.p>
            <motion.h1
              className="mt-4 text-4xl font-bold leading-snug text-white sm:text-5xl"
              variants={fadeInStagger}
              custom={1}
            >
              Helloz hello — I&apos;m Tanmay, a DevOps engineer & blockchain tinkerer.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-white/70"
              variants={fadeInStagger}
              custom={2}
            >
              Effective communication, meticulous organization, and a bias for shipping
              production-ready solutions define my work. I delight in pairing clean
              interfaces with robust systems, automating just enough so ideas make it
              from whiteboard to users faster.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              variants={fadeInStagger}
              custom={3}
            >
              <motion.a
                href="https://www.linkedin.com/in/tanmay-rokde-204672229/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a
                href="https://x.com/tanmaydotjson"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-cyan-300/70 hover:text-cyan-200"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaXTwitter /> @tanmaydotjson
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_55px_rgba(34,211,238,0.25)] backdrop-blur"
            variants={fadeInStagger}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              className="absolute inset-x-8 top-8 h-20 rounded-full bg-cyan-400/25 blur-3xl"
              variants={glowPulse}
              initial="initial"
              animate="animate"
            />
            <div className="relative px-6 pb-6 pt-10 text-sm text-white/80">
              <div className="text-center text-xs uppercase tracking-[0.4em] text-cyan-200/80">
                Profile Snapshot
              </div>
              <motion.img
                src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
                alt="Developer at work illustration"
                className="mx-auto my-6 h-32 w-auto rounded-2xl object-cover"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              />
              <p className="text-center text-base font-semibold text-white">
                Builder · DevOps Engineer · Rust Explorer
              </p>
              <p className="mt-3 text-center text-sm text-white/60">
                Automating side-projects to the point of forgetting the manual path (and
                loving every moment).
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {profileHighlights.map((item, index) => (
            <motion.div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white/80 shadow-[0_30px_60px_-35px_rgba(15,118,110,0.65)] backdrop-blur transition hover:border-cyan-400/40 hover:text-white"
              variants={fadeInStagger}
              custom={index}
              whileHover={{ y: -6, boxShadow: '0 35px 90px -45px rgba(34,211,238,0.45)' }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-semibold text-white sm:text-3xl"
            variants={fadeInStagger}
            custom={0}
          >
            Technologies I work with
          </motion.h2>
          <motion.p
            className="mt-3 max-w-3xl text-white/60"
            variants={fadeInStagger}
            custom={1}
          >
            A cross-disciplinary toolbox for shipping products—from polished interfaces to
            programmable infrastructure and smart contracts.
          </motion.p>
          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {techCategories.map((group, index) => (
              <motion.div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent p-6 shadow-[0_0_55px_rgba(14,116,144,0.35)] backdrop-blur"
                variants={fadeInStagger}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="badge-pill"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                      custom={techIndex}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_0_65px_rgba(14,165,233,0.25)] backdrop-blur"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-2xl font-semibold text-white sm:text-3xl"
            variants={fadeInStagger}
            custom={0}
          >
            Currently geeking out on
          </motion.h2>
          <motion.div
            className="mt-6 grid gap-4 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {currentFocus.map((focus, index) => (
              <motion.div
                key={focus}
                className="flex items-start gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-4 text-white/80"
                variants={fadeInStagger}
                custom={index}
                whileHover={{ scale: 1.02, borderColor: 'rgba(103,232,249,0.6)' }}
              >
                <motion.div
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)]"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                />
                <p>{focus}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
