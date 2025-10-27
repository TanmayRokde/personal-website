import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';
import { experiences } from '../utils/constants';
import { textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';
import { CometCard } from './ui/comet-card';
import { cn } from '../lib/utils';

const cardAccents = [
  'from-cyan-500/40 via-sky-500/30 to-transparent',
  'from-emerald-500/40 via-teal-500/25 to-transparent',
  'from-indigo-500/35 via-violet-500/25 to-transparent',
  'from-amber-500/40 via-orange-500/25 to-transparent',
];

const fallbackExperiences = [
  {
    id: 'Intern',
    role: 'Freelance Full Stack Engineer',
    company: 'Independent',
    timeframe: '2023 - Present',
    highlight:
      'Partner with early-stage founders to ship MVPs, tighten developer workflows, and deploy resilient cloud infra on tight deadlines.',
    code: '#FREELANCE',
    accent: cardAccents[2],
    points: [
      'Shipped six MVPs for fintech, analytics, and membership startups with TypeScript, Next.js, and Serverless.',
      'Implemented GitHub Actions pipelines, Terraform IaC, and multi-region rollouts to keep releases under an hour.',
      'Led post-launch observability setup: Prometheus, OpenTelemetry traces, and on-call playbooks for lean teams.',
    ],
  },
  {
    id: 'community',
    role: 'Community Tech Lead',
    company: 'Local Dev Collective',
    timeframe: '2022 - 2024',
    highlight:
      'Mentored student teams on production-ready side projects, code quality, and CI/CD adoption to ship more confidently.',
    code: '#MENTOR',
    accent: cardAccents[3],
    points: [
      'Ran quarterly build sprints for 30+ contributors, setting shared UI kits and lint/test baselines.',
      'Hosted workshops on SRE fundamentals, alert design, and cloud cost governance for early-career engineers.',
      'Reviewed deployments, introduced trunk-based workflows, and coached teams through incident retrospectives.',
    ],
  },
];

const deriveExperienceCards = () => {
  const derived = experiences.map((experience, index) => ({
    id: `${experience.company_name || experience.title}-${index}`,
    role: experience.title,
    company: experience.company_name,
    timeframe: experience.date,
    highlight: experience.points?.[0],
    points: experience.points?.slice(1),
    code: `#${(experience.company_name || experience.title || 'IMPACT')
      .replace(/[^a-zA-Z0-9]/g, '')
      .slice(0, 6)
      .toUpperCase() || 'IMPACT'}`,
    accent: cardAccents[index % cardAccents.length],
  }));

  if (derived.length >= 4) {
    return derived.slice(0, 4);
  }

  return [...derived, ...fallbackExperiences].slice(0, 4);
};

const cards = deriveExperienceCards();

const ExperienceCardContent = ({ card }) => (
  <article className="flex h-full w-full flex-col rounded-[22px] p-4 sm:p-5">
    <div
      className={cn(
        'relative overflow-hidden rounded-[16px] border border-white/10 bg-gradient-to-br',
        card.accent,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_0,rgba(255,255,255,0)_55%)] opacity-80" />
      <div className="relative space-y-4 p-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.45em] text-white/80">
          {card.timeframe}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{card.role}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.34em] text-white/70">
            {card.company}
          </p>
        </div>
      </div>
    </div>
    <p className="mt-4 flex-1 text-sm text-white/70 sm:text-base">{card.highlight}</p>
    <div className="mt-4 flex flex-shrink-0 items-center justify-between rounded-[14px] border border-white/5 bg-white/5 px-4 py-2.5 font-mono text-white/90">
      <span className="text-[0.7rem] uppercase tracking-[0.35em] text-white/80">
        Outcomes
      </span>
      <span className="text-[0.7rem] text-gray-300/70">{card.code}</span>
    </div>
  </article>
);

const TimelineConnector = ({ reversed = false }) => (
  <div className="relative hidden h-full w-full items-center justify-center lg:flex">
    <span className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-cyan-200/30 bg-cyan-400/80 shadow-[0_0_18px_rgba(6,182,212,0.55)]" />
    <span
      className={cn(
        'absolute top-1/2 h-px w-full -translate-y-1/2',
        reversed
          ? 'bg-gradient-to-l from-cyan-400/70 via-cyan-400/50 to-transparent'
          : 'bg-gradient-to-r from-cyan-400/70 via-cyan-400/50 to-transparent',
      )}
    />
  </div>
);

const ExperienceDetails = ({ points = [], align = 'right' }) => {
  if (!points || points.length === 0) {
    return <div className="hidden lg:flex" />;
  }

  return (
    <div
      className={cn(
        'hidden max-w-xs flex-col gap-3 text-sm text-white/70 lg:flex',
        align === 'right'
          ? 'items-start pl-4 text-left'
          : 'items-end pr-4 text-right lg:pr-4',
      )}
    >
      {points.map((point, index) => (
        <p
          key={index}
          className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 leading-relaxed shadow-[0_18px_45px_-30px_rgba(6,182,212,0.45)]"
        >
          {point}
        </p>
      ))}
    </div>
  );
};

ExperienceCardContent.propTypes = {
  card: PropTypes.shape({
    company: PropTypes.string,
    code: PropTypes.string,
    highlight: PropTypes.string,
    role: PropTypes.string,
    timeframe: PropTypes.string,
    accent: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  }),
};

TimelineConnector.propTypes = {
  reversed: PropTypes.bool,
};

ExperienceDetails.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  points: PropTypes.arrayOf(PropTypes.string),
};

const Experience = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-950/60 p-6 text-white backdrop-blur-md sm:p-10">
      <motion.div variants={textVariant()}>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <div className="pointer-events-none absolute right-0 top-0 hidden translate-x-[120%] items-center justify-center lg:flex">
            <motion.div
              className="relative flex h-24 w-24 items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            >
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
            </motion.div>
          </div>
          <h2 className="text-4xl font-bold text-cyan-400 sm:text-5xl">Work Experience</h2>
          <p className="text-base text-white/60 sm:text-lg">
            A snapshot of the roles, teams, and outcomes that shaped my engineering practice.
          </p>
        </div>
      </motion.div>

      <div className="relative mt-16 space-y-12 sm:space-y-14">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/40 via-white/20 to-cyan-500/40 lg:block" />

        {cards.map((card, index) => {
          const alignLeft = index % 2 === 0;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              className="relative"
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] lg:items-center">
                {alignLeft ? (
                  <>
                    <div className="flex w-full justify-center lg:justify-end">
                      <CometCard className="w-full max-w-xs border border-white/10 bg-[#1b1d1f]/85 p-0 sm:max-w-sm">
                        <ExperienceCardContent card={card} />
                      </CometCard>
                    </div>
                    <TimelineConnector />
                    <div className="flex w-full justify-center lg:justify-start">
                      <ExperienceDetails align="right" points={card.points} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex w-full justify-center lg:justify-end">
                      <ExperienceDetails align="left" points={card.points} />
                    </div>
                    <TimelineConnector reversed />
                    <div className="flex w-full justify-center lg:justify-start">
                      <CometCard className="w-full max-w-xs border border-white/10 bg-[#1b1d1f]/85 p-0 sm:max-w-sm">
                        <ExperienceCardContent card={card} />
                      </CometCard>
                    </div>
                  </>
                )}
              </div>
              {card.points && card.points.length > 0 && (
                <div className="mt-6 flex flex-col gap-3 text-sm text-white/70 lg:hidden">
                  {card.points.map((point, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 leading-relaxed shadow-[0_18px_45px_-30px_rgba(6,182,212,0.45)]"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
