import React, { useRef, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const contactMethods = [
  {
    label: "Email",
    value: "tanmay.json@gmail.com",
    href: "mailto:tanmay.json@gmail.com",
  },
  {
    label: "Location",
    value: "Remote · Hyderabad, India",
  },
  {
    label: "Availability",
    value: "Open to senior DevOps / platform roles & collaborations.",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanmay-rokde-204672229/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/tanmay.json",
    icon: <FaGithub />,
  },
];

const digitalCards = [
  {
    id: "email",
    heading: "Email",
    handle: "tanmay.json@gmail.com",
    hint: "Inbox response within 24hrs",
    link: "mailto:tanmay.json@gmail.com",
    accent: "from-cyan-500/90 to-emerald-500/70",
    rotate: "-4deg",
    top: "18%",
    left: "16%",
  },
  {
    id: "linkedin",
    heading: "LinkedIn",
    handle: "linkedin.com/in/tanmay-rokde",
    hint: "Let’s connect and collaborate",
    link: "https://www.linkedin.com/in/tanmay-rokde-204672229/",
    accent: "from-sky-500/90 to-indigo-500/70",
    rotate: "6deg",
    top: "38%",
    left: "58%",
  },
  {
    id: "github",
    heading: "GitHub",
    handle: "github.com/tanmay.json",
    hint: "DevOps-heavy repos & experiments",
    link: "https://github.com/tanmay.json",
    accent: "from-slate-200/95 to-slate-700/80",
    rotate: "10deg",
    top: "28%",
    left: "34%",
  },
  {
    id: "twitter",
    heading: "X / Twitter",
    handle: "@tanmaydotjson",
    hint: "Sharing infra notes & debug stories",
    link: "https://x.com/tanmaydotjson",
    accent: "from-purple-500/85 to-fuchsia-500/65",
    rotate: "-10deg",
    top: "56%",
    left: "24%",
  },
  {
    id: "cal",
    heading: "Book a slot",
    handle: "cal.com/tanmay.json",
    hint: "15-min intro sync",
    link: "https://cal.com/",
    accent: "from-amber-400/90 to-orange-500/70",
    rotate: "14deg",
    top: "24%",
    left: "70%",
  },
  {
    id: "discord",
    heading: "Discord",
    handle: "tanmay.dev",
    hint: "Join the automation hangout",
    link: "https://discordapp.com/users/tanmay.dev",
    accent: "from-blue-500/90 to-cyan-400/70",
    rotate: "-2deg",
    top: "50%",
    left: "46%",
  },
];

const Contacts = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 pb-28 pt-32 text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/10 via-gray-950 to-gray-950"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 text-center sm:px-10">
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
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left text-sm text-white/70 backdrop-blur"
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
            href="mailto:tanmay.json@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-gray-950 transition hover:bg-cyan-400"
          >
            Write me an email
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white/70 backdrop-blur">
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

        <div className="relative mt-20 rounded-[54px] border border-white/10 bg-white/[0.05] px-8 pb-16 pt-16 backdrop-blur-2xl sm:px-14">
          <h2 className="text-lg font-semibold tracking-[0.3em] text-cyan-100/80">
            Digital Visiting Cards
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Drag, stack, and explore the ways we can connect. Each card carries
            a handle—pick the one that suits our next conversation.
          </p>
          <DragCards />
        </div>
      </div>
    </section>
  );
};

export default Contacts;

const DragCards = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mt-14 h-[640px] w-full max-w-[960px] overflow-visible sm:h-[560px] lg:h-[540px]"
    >
      <div className="absolute inset-0 rounded-[42px] border border-white/10 bg-white/[0.05]" />
      <div className="absolute inset-0 overflow-hidden rounded-[42px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_68%)]" />
        {digitalCards.map((card) => (
          <DragCard key={card.id} containerRef={containerRef} {...card} />
        ))}
      </div>
    </div>
  );
};

const DragCard = ({
  containerRef,
  heading,
  handle,
  hint,
  link,
  accent,
  rotate,
  top,
  left,
}) => {
  const [zIndex, setZIndex] = useState(1);

  const raiseCard = () => {
    const allCards = document.querySelectorAll(".contact-drag-card");
    let max = 1;
    allCards.forEach((el) => {
      const value = Number.parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
        10
      );
      if (!Number.isNaN(value) && value >= max) {
        max = value + 1;
      }
    });
    setZIndex(max);
  };

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
        cursor: "grab",
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.4}
      whileTap={{ cursor: "grabbing", scale: 1.02 }}
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
  );
};

DragCard.defaultProps = {
  hint: "",
};
