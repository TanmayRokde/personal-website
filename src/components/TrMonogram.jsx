import clsx from 'clsx'
import { useEffect, useState } from 'react'
import profileImage from '../assets/me.png'

const TR_DRAW_DURATION = 6000
const PAUSE_AFTER_DRAW = 3000
const IMAGE_DISPLAY_DURATION = 6500

const TrMonogram = () => {
  const [showBack, setShowBack] = useState(false)
  const [showFlicker, setShowFlicker] = useState(true)

  useEffect(() => {
    const frontDuration = TR_DRAW_DURATION + PAUSE_AFTER_DRAW
    const duration = showBack ? IMAGE_DISPLAY_DURATION : frontDuration
    const timer = setTimeout(() => setShowBack((prev) => !prev), duration)
    return () => clearTimeout(timer)
  }, [showBack])

  useEffect(() => {
    if (!showBack) {
      const flickerTimeout = setTimeout(() => setShowFlicker(false), TR_DRAW_DURATION)
      return () => clearTimeout(flickerTimeout)
    }

    setShowFlicker(true)
  }, [showBack])

  return (
    <div className="relative w-full max-w-md">
      <div
        className="absolute -inset-5 rounded-[46px] bg-cyan-500/20 opacity-80 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative aspect-square tr-card-wrapper">
        <div className={clsx('tr-card', showBack && 'tr-card--flipped')}>
          <div className="tr-card__face tr-card__face--front">
            <div className="tr-card__layer">
              <div className={clsx('tr-outline w-full', showFlicker && 'tr-outline--flicker')}>
                <svg
                  viewBox="0 0 128.701 67.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="monogram-title"
                  role="img"
                  className="h-full w-full"
                >
                  <title id="monogram-title">Tanmay Rokde monogram</title>
                  <g strokeLinecap="round" fill="none">
                    <path
                      d="M 118.7 48.4 L 118.7 47.8 Q 118.7 46.9 119.2 46.9 Q 120.1 46.9 120.8 48 Q 121.5 49.1 121.9 50.4 Q 122.3 51.7 122.3 52.4 Q 122.5 54.9 121.3 57.15 Q 120.1 59.4 118 60.85 Q 115.9 62.3 113.4 62.3 Q 111.6 62.3 110.15 61.55 Q 108.7 60.8 107.4 59.6 Q 105.6 57.9 103.4 55.1 Q 101.2 52.3 98.85 49.05 Q 96.5 45.8 94.45 42.65 Q 92.4 39.5 91 37.1 Q 90.3 37.1 89.4 37 Q 88.5 36.9 87.7 36.7 Q 86.2 36.2 86.2 35.7 Q 86.2 35.3 86.8 35.1 Q 87.4 34.9 88.1 34.8 Q 91.4 34.3 96.1 33.35 Q 100.8 32.4 105.75 30.75 Q 110.7 29.1 115.05 26.85 Q 119.4 24.6 122.1 21.55 Q 124.8 18.5 124.8 14.6 Q 124.8 11.5 123 9.4 Q 121.2 7.3 118.35 5.95 Q 115.5 4.6 112.2 3.9 Q 108.9 3.2 105.85 2.95 Q 102.8 2.7 100.7 2.7 Q 95.5 2.7 89.3 3.9 Q 83.1 5.1 77.1 7 Q 71.1 8.9 66.5 11.2 Q 66.4 11.3 66.15 11.4 Q 65.9 11.5 65.7 11.5 Q 65.1 11.5 65.1 10.7 Q 65.1 8.7 67.3 7.15 Q 69.5 5.6 73.05 4.4 Q 76.6 3.2 80.7 2.35 Q 84.8 1.5 88.75 1 Q 92.7 0.5 95.75 0.25 Q 98.8 0 100.1 0 Q 102.9 0 106.6 0.35 Q 110.3 0.7 114.15 1.65 Q 118 2.6 121.3 4.4 Q 124.6 6.2 126.65 8.95 Q 128.7 11.7 128.7 15.8 Q 128.7 20.8 125.7 24.5 Q 122.7 28.2 117.95 30.7 Q 113.2 33.2 107.75 34.65 Q 102.3 36.1 97.5 36.7 Q 98.6 39.5 100.55 43.4 Q 102.5 47.3 104.9 51 Q 107.3 54.7 109.75 57.15 Q 112.2 59.6 114.1 59.6 Q 115.8 59.6 116.75 58.35 Q 117.7 57.1 118.1 55.2 Q 118.5 53.3 118.6 51.45 Q 118.7 49.6 118.7 48.4 Z M 32.9 0.9 L 38.4 0.9 Q 46.1 0.9 54 1.2 Q 61.9 1.5 69.2 2.9 Q 69.6 3 70.65 3.25 Q 71.7 3.5 72.65 3.95 Q 73.6 4.4 73.6 5.1 Q 73.6 5.6 72.75 5.75 Q 71.9 5.9 71.3 5.9 Q 70 5.9 68.6 5.7 L 65.8 5.3 Q 61.7 4.6 57.35 4.5 Q 53 4.4 48.7 4.4 Q 41.1 4.4 33.4 4.65 Q 25.7 4.9 18.1 5.8 Q 17.9 6.6 16 7.4 Q 14.1 8.2 11.55 8.8 Q 9 9.4 6.75 9.75 Q 4.5 10.1 3.7 10.1 Q 0 10.1 0 6.5 Q 0 5.1 2.1 4.15 Q 4.2 3.2 7.65 2.55 Q 11.1 1.9 15.05 1.6 Q 19 1.3 22.7 1.15 Q 26.4 1 29.2 0.95 Q 32 0.9 32.9 0.9 Z M 11.8 67.1 Q 9.6 67.1 8.7 65.55 Q 7.8 64 7.8 61.9 Q 7.8 58.5 9.3 53.75 Q 10.8 49 13.2 43.65 Q 15.6 38.3 18.3 33.05 Q 21 27.8 23.4 23.45 Q 25.8 19.1 27.4 16.4 Q 28.6 14.3 29.9 11.85 Q 31.2 9.4 32.7 7.5 Q 33.2 6.8 34.4 6.6 Q 35.6 6.4 36.3 6.4 Q 37.1 6.4 38.1 6.7 Q 39.1 7 39.2 8.1 Q 39.2 8.9 38.85 9.65 Q 38.5 10.4 38.1 11 Q 33.6 18.3 29.1 25 Q 24.6 31.7 20.7 39.4 Q 19.9 41 18.3 43.85 Q 16.7 46.7 15.05 50.1 Q 13.4 53.5 12.25 56.8 Q 11.1 60.1 11.1 62.6 Q 11.1 63 11.25 63.9 Q 11.4 64.8 12.3 64.8 Q 12.8 64.8 12.8 65.7 Q 12.8 66.2 12.55 66.65 Q 12.3 67.1 11.8 67.1 Z M 101.9 6.6 L 101.9 6.8 Q 101.9 8.1 100.8 9.4 Q 96.3 16.7 91.85 23.4 Q 87.4 30.1 83.5 37.8 Q 82.6 39.4 81 42.35 Q 79.4 45.3 77.65 48.8 Q 75.9 52.3 74.8 55.65 Q 73.7 59 73.9 61.5 Q 73.9 62 74.15 62.6 Q 74.4 63.2 75.1 63.2 Q 75.6 63.2 75.6 64.1 Q 75.6 64.6 75.35 65.05 Q 75.1 65.5 74.6 65.5 Q 72.4 65.5 71.5 63.95 Q 70.6 62.4 70.6 60.2 Q 70.6 56.9 72.1 52.15 Q 73.6 47.4 75.95 42.05 Q 78.3 36.7 81 31.5 Q 83.7 26.3 86.15 21.9 Q 88.6 17.5 90.2 14.8 Q 91.4 12.7 92.7 10.25 Q 94 7.8 95.5 5.9 Q 96 5.2 97.2 5 Q 98.4 4.8 99.1 4.8 Q 99.9 4.8 100.9 5.15 Q 101.9 5.5 101.9 6.6 Z"
                      pathLength="1"
                    />
                  </g>
                </svg>
              </div>
              <div
                className="absolute inset-6 rounded-[30px] border border-cyan-500/25 opacity-70"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 rounded-[40px] border border-white/10"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="tr-card__face tr-card__face--back">
            <div className="tr-card__layer tr-card__layer--back">
              <div className="tr-card__image-frame">
                <div className="tr-card__image-glow" aria-hidden="true" />
                <img
                  src={profileImage}
                  alt="Tanmay Rokde portrait"
                  loading="lazy"
                  className="tr-card__image"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/20 to-transparent" />
              <div className="absolute inset-x-8 bottom-8 rounded-full border border-cyan-400/30 bg-gray-950/60 px-5 py-2 text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/90">
                Tanmay Rokde
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 rounded-[48px] border border-cyan-500/20"
        aria-hidden="true"
      />
    </div>
  )
}

export default TrMonogram
