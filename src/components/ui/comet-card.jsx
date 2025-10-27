import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { cn } from '../../lib/utils';

const springConfig = { stiffness: 180, damping: 18, mass: 0.3 };

function useCometMotion(initialScale) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(initialScale);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springGlowX = useSpring(glowX, springConfig);
  const springGlowY = useSpring(glowY, springConfig);

  const glowBackground = useMotionTemplate`radial-gradient(420px circle at ${springGlowX}% ${springGlowY}%, rgba(34,211,238,0.18), transparent 65%)`;
  const glowBorder = useMotionTemplate`radial-gradient(380px circle at ${springGlowX}% ${springGlowY}%, rgba(34,211,238,0.25), transparent 70%)`;

  return {
    rotateX,
    rotateY,
    scale,
    glowX,
    glowY,
    springRotateX,
    springRotateY,
    springScale,
    springGlowX,
    springGlowY,
    glowBackground,
    glowBorder,
  };
}

const CometCard = React.forwardRef(
  (
    {
      className,
      glow = true,
      children,
      intensity = 18,
      hoverScale = 1.02,
      initialScale = 1,
      ...props
    },
    ref,
  ) => {
    const localRef = useRef(null);
    const mergedRef = useCallback(
      (node) => {
        localRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    const {
      rotateX,
      rotateY,
      scale,
      glowX,
      glowY,
      springRotateX,
      springRotateY,
      springScale,
      springGlowX,
      springGlowY,
      glowBackground,
      glowBorder,
    } = useCometMotion(initialScale);

    const handlePointerMove = useCallback(
      (event) => {
        const element = localRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentageX = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);
        const percentageY = Math.min(Math.max((offsetY / rect.height) * 100, 0), 100);

        const rotateAmountX = ((offsetY - centerY) / centerY) * intensity;
        const rotateAmountY = ((offsetX - centerX) / centerX) * intensity * -1;

        rotateX.set(rotateAmountX);
        rotateY.set(rotateAmountY);
        scale.set(hoverScale);
        glowX.set(percentageX);
        glowY.set(percentageY);
      },
      [glowX, glowY, hoverScale, intensity, rotateX, rotateY, scale],
    );

    const handlePointerLeave = useCallback(() => {
      rotateX.set(0);
      rotateY.set(0);
      scale.set(initialScale);
      glowX.set(50);
      glowY.set(50);
    }, [glowX, glowY, initialScale, rotateX, rotateY, scale]);

    return (
      <motion.div
        ref={mergedRef}
        className={cn(
          'group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111213]/85 shadow-[0_45px_95px_-45px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-all duration-300 ease-out',
          className,
        )}
        style={{ perspective: 1200 }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {glow && (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: glowBackground,
              }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-16 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: glowBorder }}
            />
          </>
        )}

        <motion.div
          className="relative h-full w-full"
          style={{
            transformStyle: 'preserve-3d',
            rotateX: springRotateX,
            rotateY: springRotateY,
            scale: springScale,
          }}
        >
          <div className="relative h-full w-full" style={{ transform: 'translateZ(18px)' }}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    );
  },
);

CometCard.displayName = 'CometCard';

CometCard.propTypes = {
  className: PropTypes.string,
  glow: PropTypes.bool,
  children: PropTypes.node,
  intensity: PropTypes.number,
  hoverScale: PropTypes.number,
  initialScale: PropTypes.number,
};

export { CometCard };
