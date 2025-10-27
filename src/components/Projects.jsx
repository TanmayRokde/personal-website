import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDownLong } from 'react-icons/fa6'
import SwipeDeck from './SwipeDeck'

const deckContent = [
  {
    id: 'aurora',
    name: 'Aurora Ops Platform',
    subtitle: 'Intelligent Kubernetes command center',
    description:
      'Unified runbooks, progressive delivery pipelines, and lighting-fast rollbacks powered by Rust microservices and a React control plane.',
    tech: ['Rust', 'Kubernetes', 'GraphQL', 'Temporal', 'Helm'],
    cards: [
      {
        id: 'aurora-1',
        title: 'Mission Scheduler',
        headline: 'Blueprint-driven deployments',
        body: 'Declarative runbooks orchestrate canary releases and rollbacks through a Rust scheduler that loves safety.',
      },
      {
        id: 'aurora-2',
        title: 'Edge Insights',
        headline: 'Latency-focused observability',
        body: 'Dashboards stream Kubernetes metrics, tracing, and chaos tests into one command center.',
      },
      {
        id: 'aurora-3',
        title: 'Incident Studio',
        headline: 'Simulate outages before they happen',
        body: 'Game-day playbooks and rollback choreography rehearsed automatically each sprint.',
      },
      {
        id: 'aurora-4',
        title: 'Workflow Author',
        headline: 'No YAML? No problem.',
        body: 'Visual composer that exports Helm/Terraform bundles with guardrails for infra teams.',
      },
      {
        id: 'aurora-5',
        title: 'Dev Portal',
        headline: 'Zero-friction onboarding',
        body: 'Self-service pipelines with credential vending, linting, and golden templates in one pane.',
      },
    ],
  },
  {
    id: 'nebula',
    name: 'Nebula Commerce',
    subtitle: 'Real-time storefront personalization layer',
    description:
      'Dynamic pricing, recommendation engines, and inventory intelligence that syncs across marketplaces within 150ms.',
    tech: ['TypeScript', 'Next.js', 'Edge Functions', 'Redis', 'Turborepo'],
    cards: [
      {
        id: 'nebula-1',
        title: 'Scene Builder',
        headline: 'Composable merchandising layouts',
        body: 'Product managers drag-and-drop hero blocks that compile into edge-ready React islands.',
      },
      {
        id: 'nebula-2',
        title: 'Pricing Lab',
        headline: 'Experiment at the edge',
        body: 'Feature flags and AB tests execute at 200+ POPs with instant feedback loops.',
      },
      {
        id: 'nebula-3',
        title: 'Signals Engine',
        headline: 'Realtime behavior streams',
        body: 'Redis streams fuel personalisation models that adjust product bundles mid-session.',
      },
      {
        id: 'nebula-4',
        title: 'Order Brain',
        headline: 'Inventory-aware checkouts',
        body: 'Fulfillment APIs negotiate between warehouses and marketplaces in under 150ms.',
      },
      {
        id: 'nebula-5',
        title: 'Insight Canvas',
        headline: 'Everything measurable, everywhere',
        body: 'Story dashboards overlay core KPIs with qualitative experiments to guide merch teams.',
      },
    ],
  },
  {
    id: 'solstice',
    name: 'Solstice Studio',
    subtitle: 'Design system for immersive fintech dashboards',
    description:
      'From tokenized theming to accessibility at scale, Solstice delivers trust-grade visual language for wealth platforms.',
    tech: ['React', 'Storybook', 'Zustand', 'Tailwind', 'Chromatic'],
    cards: [
      {
        id: 'solstice-1',
        title: 'Token Palette',
        headline: 'Design tokens that speak finance',
        body: 'Semantic palettes translate risk levels and compliance badges into visual language.',
      },
      {
        id: 'solstice-2',
        title: 'Motion Codex',
        headline: 'Micro-interactions for trust',
        body: 'Zustand state orchestration drives subtle motion to keep wealth dashboards responsive.',
      },
      {
        id: 'solstice-3',
        title: 'Chart Archetypes',
        headline: 'Financial data, human readable',
        body: 'Composable chart kit built with D3 primitives and Storybook documentation for teams.',
      },
      {
        id: 'solstice-4',
        title: 'Audit Layer',
        headline: 'Every decision annotated',
        body: 'Component suite surfaces lineage and approvals, critical for regulated workflows.',
      },
      {
        id: 'solstice-5',
        title: 'Research Library',
        headline: 'From discovery to release',
        body: 'Centralized insights pipeline ensures product, design, and engineering share context.',
      },
    ],
  },
  {
    id: 'vapor',
    name: 'Vapor Trails',
    subtitle: 'CI/CD observability for Web3 infrastructure',
    description:
      'Command center for orchestrating on-chain deployments, with automated rollbacks, RPC health, and ledger analytics.',
    tech: ['Rust', 'Solana', 'Docker', 'Prometheus', 'Fly.io'],
    cards: [
      {
        id: 'vapor-1',
        title: 'Chain Telemetry',
        headline: 'RPC health at a glance',
        body: 'Prometheus-backed dashboards correlate slot health, leader success, and latency.',
      },
      {
        id: 'vapor-2',
        title: 'Pipeline Matrix',
        headline: 'Rust CI/CD with context',
        body: 'Every build step mapped against on-chain events for deterministic deployments.',
      },
      {
        id: 'vapor-3',
        title: 'Validator Radar',
        headline: 'Spot drift before it hurts',
        body: 'Aggregated metrics flag stake distribution shifts and leader rotation anomalies.',
      },
      {
        id: 'vapor-4',
        title: 'Rollback Studio',
        headline: 'Safe fails for smart contracts',
        body: 'Instant revert tooling that snapshots state and orchestrates community comms.',
      },
      {
        id: 'vapor-5',
        title: 'Insights Feed',
        headline: 'Digestible on-chain alerts',
        body: 'Curated signal stream keeps ops engineers ahead of stuck transactions and forks.',
      },
    ],
  },
]

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <section className="relative overflow-hidden pb-28 pt-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-950/45 to-gray-950/85"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          className="pointer-events-none absolute right-2 top-4 hidden h-28 w-28 -translate-y-1/2 translate-x-6 items-center justify-center md:right-6 md:top-6 md:h-32 md:w-32 lg:flex"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-dotted border-cyan-300/70" />
            <motion.div
              className="flex flex-col items-center gap-1 text-[0.65rem] uppercase tracking-[0.5em] text-cyan-100/80"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            >
              <span>Scroll</span>
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="text-cyan-100"
              >
                <FaArrowDownLong />
              </motion.span>
              <span>Down</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-[0.6em] text-cyan-200/80">
            Featured Projects
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Swipe through the products I&apos;ve engineered and shipped.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Each deck showcases a build—from DevOps automation to design
            systems—revealing the workflows, visuals, and touchpoints that made
            them shine.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {deckContent.map((deck, index) => {
            const animationProps =
              index < 2
                ? {
                    initial: { opacity: 0, y: 40, scale: 0.96 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.05 },
                  }
                : {
                    initial: { opacity: 0, y: 60, scale: 0.98 },
                    whileInView: { opacity: 1, y: 0, scale: 1 },
                    viewport: { once: true, amount: 0.18, margin: '-20px 0px -60px 0px' },
                    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.05 },
                  }

            return (
              <motion.div
                key={deck.id}
                className="relative flex h-full flex-col justify-between gap-8 rounded-[36px] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-2xl sm:p-7 lg:p-8"
                {...animationProps}
              >
                <div className="relative space-y-5">
                  <p className="text-xs uppercase tracking-[0.45em] text-cyan-200/70">
                    {deck.subtitle}
                  </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  {deck.name}
                </h2>
                <p className="text-base leading-relaxed text-white/70">
                  {deck.description}
                </p>
                <div className="flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-cyan-100/80">
                  {deck.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[30px] border border-cyan-300/15 bg-gradient-to-br from-white/[0.04] via-cyan-500/5 to-transparent shadow-[0_60px_100px_-60px_rgba(14,165,233,0.55)] blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-[24px] border border-white/5 bg-white/[0.02] p-3 backdrop-blur-xl sm:p-4">
                  <SwipeDeck cards={deck.cards} />
                </div>
              </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
