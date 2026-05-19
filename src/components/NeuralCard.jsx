import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'

const MENU_LINKS = [
  { label: 'Home', active: true },
  { label: 'Product', active: false },
  { label: 'Customers', active: false },
  { label: 'Contact', active: false },
  { label: 'Pricing', active: false },
]

function GridBackground() {
  const H_LINES = [699.73,399.18,549.45,248.90,98.62,624.59,324.04,474.32,173.76,23.48,662.16,361.61,511.89,211.33,61.05,587.02,286.47,436.75,136.19,-14.09]
  const V_LINES = [0,300.56,150.28,450.83,601.11,75.14,375.70,225.42,525.98,676.25,37.57,338.13,187.85,488.40,638.68,112.71,413.27,262.99,563.54,713.83]
  const BLUE_CELLS = [
    { x: 488.5, y: 230.42, w: 37.36, h: 36.82 },
    { x: 563.35, y: 193.18, w: 37.45, h: 37.45 },
    { x: 413.54, y: 155.20, w: 37.36, h: 36.82 },
    { x: 563.35, y: 118.28, w: 37.36, h: 36.82 },
    { x: 263.21, y: 155.20, w: 37.36, h: 36.82 },
    { x: 188.31, y: 267.56, w: 37.36, h: 36.82 },
  ]
  const EMPTY_CELLS = [
    { x: 375.70, y: 380.50, w: 37.36, h: 37.36 },
    { x: 187.85, y: 380.50, w: 37.36, h: 37.36 },
    { x: 526.19, y: 117.94, w: 37.36, h: 36.82 },
    { x: 225.20, y: 230.52, w: 37.36, h: 36.82 },
    { x: 488.30, y: 155.30, w: 37.36, h: 36.82 },
    { x: 187.78, y: 117.94, w: 37.36, h: 36.82 },
    { x: 488.30, y: 117.94, w: 37.36, h: 36.82 },
    { x: 187.78, y: 230.52, w: 37.36, h: 36.82 },
    { x: 150.91, y: 267.55, w: 37.36, h: 36.82 },
    { x: 488.50, y: 305.53, w: 37.36, h: 36.82 },
    { x: 188.05, y: 343.51, w: 37.36, h: 36.82 },
    { x: 150.49, y: 380.50, w: 37.36, h: 37.36 },
    { x: 150.49, y: 417.85, w: 37.36, h: 37.89 },
    { x: 75.25,  y: 343.14, w: 37.36, h: 37.36 },
    { x: 491.50, y: 303.65, w: 37.36, h: 37.36 },
    { x: 528.86, y: 341.01, w: 37.36, h: 37.36 },
  ]
  return (
    <svg className="ncard__grid" viewBox="-23.57 -107.86 826.53 713.82" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="blueFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#63A4FA" stopOpacity="1"/>
          <stop offset="100%" stopColor="#63A4FA" stopOpacity="0"/>
        </linearGradient>
        <mask id="revealMask">
          <radialGradient id="revealGrad" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1"/>
            <stop offset="100%" stopColor="white" stopOpacity="0.15"/>
          </radialGradient>
          <rect x="-23.57" y="-107.86" width="826.53" height="713.82" fill="url(#revealGrad)"/>
        </mask>
      </defs>
      <g mask="url(#revealMask)">
        <g transform="rotate(-90, 356, 248)">
          {H_LINES.map((y, i) => (
            <line key={`h${i}`} x1="0" y1={y} x2="703.84" y2={y} stroke="#ffffff" strokeWidth="0.587" strokeOpacity="0.5"/>
          ))}
        </g>
        <g transform="translate(21.72, 85.12)">
          {V_LINES.map((x, i) => (
            <line key={`v${i}`} x1={x} y1="0" x2={x} y2="543.58" stroke="#ffffff" strokeWidth="0.587" strokeOpacity="0.5"/>
          ))}
        </g>
        <g transform="translate(22.04, 93.5)">
          {EMPTY_CELLS.map((c, i) => (
            <rect key={`e${i}`} x={c.x} y={c.y} width={c.w} height={c.h}
              fill="rgba(72,130,247,0)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
          ))}
          {BLUE_CELLS.map((c, i) => (
            <rect key={`b${i}`} x={c.x} y={c.y} width={c.w} height={c.h}
              fill="url(#blueFade)" opacity="0.7"/>
          ))}
        </g>
      </g>
    </svg>
  )
}

function NCardCorner({ size = 3.69, color = '#ffffff' }) {
  return (
    <>
      <span className="ncard__corner ncard__corner--tl" style={{ width: size, height: size, borderColor: color }} />
      <span className="ncard__corner ncard__corner--tr" style={{ width: size, height: size, borderColor: color }} />
      <span className="ncard__corner ncard__corner--bl" style={{ width: size, height: size, borderColor: color }} />
      <span className="ncard__corner ncard__corner--br" style={{ width: size, height: size, borderColor: color }} />
    </>
  )
}

function ProductCorner({ size = 10.55, color = 'rgba(255,255,255,0.75)' }) {
  return (
    <>
      <span className="ncard__product-corner ncard__product-corner--tl" style={{ width: size, height: size, borderColor: color }} />
      <span className="ncard__product-corner ncard__product-corner--tr" style={{ width: size, height: size, borderColor: color }} />
      <span className="ncard__product-corner ncard__product-corner--bl" style={{ width: size, height: size, borderColor: color }} />
      <span className="ncard__product-corner ncard__product-corner--br" style={{ width: size, height: size, borderColor: color }} />
    </>
  )
}

const ResolutionIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1.88318 3.18932C1.88318 3.43558 2.07874 3.60748 2.3419 3.60748C2.60506 3.60748 2.7982 3.43558 2.7982 3.18932C2.7982 2.94306 2.60506 2.77792 2.3419 2.77792C2.07874 2.77792 1.88318 2.94354 1.88318 3.18932ZM1.79047 4.4776C1.79047 4.762 2.02804 4.95273 2.3419 4.95273C2.65383 4.95273 2.89381 4.762 2.89381 4.4776C2.89381 4.19319 2.65383 3.99811 2.3419 3.99811C2.02804 3.99811 1.79047 4.19319 1.79047 4.4776Z" fill="white"/>
    <path d="M0.965727 0.965729C0.7096 0.965729 0.463964 1.06747 0.282855 1.24858C0.101746 1.42969 0 1.67533 0 1.93146L0 5.79436C0 6.05049 0.101746 6.29613 0.282855 6.47724C0.463964 6.65835 0.7096 6.76009 0.965727 6.76009H6.76009C7.01622 6.76009 7.26185 6.65835 7.44296 6.47724C7.62407 6.29613 7.72582 6.05049 7.72582 5.79436V1.93146C7.72582 1.67533 7.62407 1.42969 7.44296 1.24858C7.26185 1.06747 7.01622 0.965729 6.76009 0.965729H0.965727ZM3.46213 4.51381C3.46213 5.01647 3.01452 5.36655 2.33561 5.36655C1.6567 5.36655 1.21923 5.01889 1.21923 4.51574C1.21923 4.05509 1.56303 3.84746 1.82619 3.79434V3.76875C1.57993 3.69439 1.33367 3.49931 1.33367 3.12606C1.33367 2.68472 1.73493 2.35976 2.34189 2.35976C2.94692 2.35976 3.34769 2.68472 3.34769 3.12606C3.34769 3.50366 3.09516 3.69681 2.85517 3.76875V3.79434C3.11833 3.84746 3.46213 4.0575 3.46213 4.51381ZM5.84361 2.41432H6.47423L5.44091 3.66204L6.51866 5.31102H5.82913L5.0184 4.04398L4.72144 4.38151V5.31102H4.1478V2.41432H4.72096V3.71081H4.74848L5.84361 2.41432Z" fill="white"/>
  </svg>
)
const NeuralIcon = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
    <path d="M0.809281 8.90209H2.0232V8.09281H0.809281V6.87889H0V8.09281C0.00026976 8.31563 0.0795793 8.50622 0.237929 8.66457C0.396278 8.82291 0.586729 8.90209 0.809281 8.90209Z" fill="white"/>
    <path d="M6.87889 8.09281V8.90209H8.09281C8.31563 8.90236 8.50622 8.82318 8.66457 8.66457C8.82291 8.50595 8.90209 8.31536 8.90209 8.09281V6.87889H8.09281V8.09281H6.87889Z" fill="white"/>
    <path d="M0 0.809281V2.0232H0.809281V0.809281H2.0232V0H0.809281C0.586998 0.00026976 0.396548 0.0795793 0.237929 0.237929C0.0793096 0.396278 0 0.586729 0 0.809281Z" fill="white"/>
    <path d="M8.09281 0.809281V2.0232H8.90209V0.809281C8.90236 0.586998 8.82318 0.396548 8.66457 0.237929C8.50595 0.0793096 8.31536 0 8.09281 0H6.87889V0.809281H8.09281Z" fill="white"/>
    <path d="M7.30339 4.87299C7.33048 5.33964 7.11673 5.78822 6.73438 6.06219L6.9662 6.51078C7.03544 6.64625 7.04447 6.80582 6.98426 6.94732C6.92706 7.08882 6.80964 7.20021 6.66513 7.24838L6.42729 7.32365C6.32825 7.35688 6.22137 7.35881 6.12119 7.32919C6.021 7.29956 5.93236 7.23981 5.86732 7.15806L5.22906 6.4054C4.96112 6.36024 4.70822 6.24584 4.49447 6.07423C4.34394 6.11939 4.19341 6.14348 4.04287 6.14348C3.77794 6.14348 3.513 6.06219 3.29022 5.90564C3.13065 5.95381 2.96808 5.97488 2.80249 5.97187C2.56465 5.97488 2.32983 5.92671 2.11005 5.83639C1.8984 5.74215 1.71754 5.59024 1.58817 5.39804C1.45879 5.20585 1.38612 4.98112 1.37847 4.74956C1.35438 4.53279 1.39051 4.31302 1.48384 4.11431C1.39653 3.88852 1.3875 3.64164 1.46276 3.41284C1.57416 3.12683 1.7849 2.88899 2.04683 2.73846C2.22144 2.22966 2.71218 1.88946 3.25108 1.92559C3.73278 1.47399 4.50038 1.42582 5.00628 1.81419C5.13272 1.78107 5.26519 1.76301 5.39766 1.76301C5.8071 1.75398 6.19548 1.93462 6.45138 2.25675C7.06555 2.41632 7.5051 2.96425 7.52919 3.60251C7.54424 3.93669 7.45392 4.26485 7.27027 4.54483C7.29135 4.65322 7.30339 4.7616 7.30339 4.87299ZM5.79807 4.44849C5.96968 4.46957 6.10516 4.59902 6.10516 4.77063C6.10516 4.85048 6.07344 4.92705 6.01698 4.98351C5.96052 5.03998 5.88394 5.07169 5.80409 5.07169H5.61442C5.51808 5.34265 5.34949 5.58049 5.1267 5.76113C5.20197 5.78822 5.28024 5.80328 5.35852 5.82435C6.90297 5.80328 6.72234 4.86095 6.72234 4.8459C6.71846 4.74347 6.69443 4.64282 6.65161 4.54969C6.6088 4.45657 6.54805 4.37279 6.47283 4.30317C6.39761 4.23354 6.3094 4.17943 6.21325 4.14392C6.1171 4.10842 6.01489 4.09222 5.91248 4.09625C5.83263 4.09625 5.75605 4.06453 5.69959 4.00807C5.64313 3.95161 5.61141 3.87503 5.61141 3.79519C5.61141 3.71534 5.64313 3.63876 5.69959 3.5823C5.75605 3.52584 5.83263 3.49412 5.91248 3.49412C6.28278 3.50316 6.63804 3.64164 6.91502 3.88551C6.93007 3.7982 6.9391 3.70788 6.9391 3.61756C6.92104 3.24424 6.75244 2.91909 6.07505 2.85587C5.69872 1.96472 4.75037 2.45847 4.75037 2.73544C4.74134 2.80469 4.8136 2.95221 4.82564 2.96124C4.90549 2.96124 4.98206 2.99296 5.03852 3.04942C5.09498 3.10588 5.1267 3.18246 5.1267 3.26231C5.1267 3.42789 4.99122 3.56337 4.82564 3.56337C4.66608 3.55735 4.51554 3.49713 4.39512 3.39477C4.25061 3.4881 4.08502 3.5453 3.91342 3.56337C3.74181 3.57842 3.60031 3.458 3.59128 3.29241C3.58582 3.2531 3.58844 3.21308 3.59896 3.17481C3.60949 3.13654 3.6277 3.10082 3.6525 3.06983C3.67729 3.03883 3.70815 3.01322 3.74317 2.99455C3.7782 2.97588 3.81666 2.96455 3.85622 2.96124C3.90439 2.95522 4.13921 2.91909 4.13921 2.72942C4.13921 2.53072 4.21448 2.34105 4.34394 2.19052C4.06696 2.11525 3.76891 2.21461 3.46784 2.57889C2.91389 2.49158 2.68809 2.56685 2.52251 3.15392C2.2365 3.29542 2.08596 3.39477 2.01973 3.69584C2.34488 3.6296 2.67906 3.6567 2.98915 3.7711C3.13968 3.8283 3.22398 3.9969 3.16678 4.15947C3.10958 4.31603 2.93496 4.3943 2.77841 4.3371C2.55863 4.24076 2.31176 4.23474 2.08596 4.31904C1.98962 4.40032 1.98962 4.56892 1.98962 4.70139C1.98962 4.92417 2.10102 5.13191 2.29069 5.25233C2.45025 5.33362 2.62788 5.37577 2.8055 5.37276C2.76035 5.29448 2.72121 5.21319 2.68809 5.1289C2.66439 5.05155 2.67161 4.96802 2.70823 4.89588C2.74485 4.82374 2.80802 4.76862 2.88445 4.7421C2.96088 4.71559 3.04462 4.71974 3.11805 4.7537C3.19148 4.78766 3.24888 4.84876 3.27817 4.92417C3.3986 5.26739 3.70568 5.50221 4.06696 5.54135C4.47942 5.52028 4.84671 5.27642 5.02735 4.90009C5.0966 4.48462 5.43078 4.44849 5.79807 4.44849ZM6.4002 6.69743L6.21354 6.30605L5.99978 6.35422L6.30085 6.73055L6.4002 6.69743ZM5.00026 4.10528C5.00287 4.02837 4.97594 3.95338 4.92499 3.89571C4.87404 3.83804 4.80293 3.80207 4.72629 3.79519C4.51253 3.78314 4.3048 3.8554 4.14524 3.9969C3.97363 4.17152 3.88331 4.41237 3.89234 4.65623C3.89234 4.73607 3.92406 4.81265 3.98052 4.86911C4.03698 4.92557 4.11356 4.95729 4.19341 4.95729C4.36501 4.95729 4.49447 4.82181 4.49447 4.65623C4.49447 4.57494 4.51554 4.49365 4.56371 4.42742C4.59984 4.39731 4.645 4.38226 4.69317 4.38226C4.85876 4.39129 5.00026 4.26786 5.00026 4.10528Z" fill="white"/>
  </svg>
)
const AudioIcon = () => (
  <svg width="8.44" height="8.44" viewBox="0 0 9 9" fill="none">
    <path d="M0.7 3.5v2M2.1 1.8v5.4M3.5 1.1v6.8M4.9 2.5v4M6.3 1.8v5.4M7.7 3.5v2" stroke="white" strokeWidth="0.7" strokeLinecap="round"/>
  </svg>
)
const DotMatrixDark = () => (
  <svg width="16.88" height="16.88" viewBox="0 0 16.88 16.88" fill="none">
    <circle cx="5.70" cy="5.70" r="0.844" fill="white" fillOpacity="0.3"/>
    <circle cx="8.44" cy="5.70" r="0.844" fill="white"/>
    <circle cx="11.18" cy="5.70" r="0.844" fill="white" fillOpacity="0.3"/>
    <circle cx="5.70" cy="8.44" r="0.844" fill="white"/>
    <circle cx="8.44" cy="8.44" r="0.791" fill="white"/>
    <circle cx="11.18" cy="8.44" r="0.844" fill="white"/>
    <circle cx="5.70" cy="11.18" r="0.844" fill="white" fillOpacity="0.3"/>
    <circle cx="8.44" cy="11.18" r="0.844" fill="white"/>
    <circle cx="11.18" cy="11.18" r="0.844" fill="white" fillOpacity="0.3"/>
  </svg>
)
const DotMatrixLight = () => (
  <svg width="16.88" height="16.88" viewBox="0 0 16.88 16.88" fill="none">
    <rect width="16.88" height="16.88" rx="1.055" fill="white"/>
    <circle cx="5.70" cy="5.70" r="0.844" fill="#171717" fillOpacity="0.12"/>
    <circle cx="8.44" cy="5.70" r="0.844" fill="#171717"/>
    <circle cx="11.18" cy="5.70" r="0.844" fill="#171717" fillOpacity="0.12"/>
    <circle cx="5.70" cy="8.44" r="0.844" fill="#171717"/>
    <circle cx="8.44" cy="8.44" r="0.791" fill="#171717"/>
    <circle cx="11.18" cy="8.44" r="0.844" fill="#171717"/>
    <circle cx="5.70" cy="11.18" r="0.844" fill="#171717" fillOpacity="0.12"/>
    <circle cx="8.44" cy="11.18" r="0.844" fill="#171717"/>
    <circle cx="11.18" cy="11.18" r="0.844" fill="#171717" fillOpacity="0.12"/>
  </svg>
)

/* Star sparkles — clean dots only, no white boxes */
function Sparkles() {
  const stars = [
    [42,12,1.6,1.5],[80,4,1.0,2.1],[132,18,1.4,1.8],[196,8,0.9,2.4],[220,30,1.2,1.7],
    [24,55,0.9,2.0],[66,44,1.3,1.6],[108,62,0.8,2.3],[160,52,1.1,1.9],[200,60,1.5,1.4],
    [50,88,1.0,2.2],[90,80,0.8,1.8],[130,92,1.3,2.5],[170,84,0.9,1.5],[210,96,1.1,2.0],
  ]
  return (
    <svg className="ncard__sparkles" viewBox="0 0 264 107.61" fill="none" aria-hidden>
      <defs>
        <filter id="star-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="1.8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {stars.map(([x, y, r, dur], i) => (
        <circle
          key={i} cx={x} cy={y} r={r}
          fill="white" filter="url(#star-glow)"
          style={{
            animation: `starTwinkle ${dur}s ease-in-out infinite alternate`,
            animationDelay: `${(i * 0.13).toFixed(2)}s`,
          }}
        />
      ))}
    </svg>
  )
}


export default function NeuralCard({ active }) {
  const cardRef = useRef(null)
  const productCardRef = useRef(null)

  /* 3D tilt on product card */
  const handleTiltMove = (e) => {
    const el = productCardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    el.style.transform = `perspective(420px) rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateZ(10px) scale(1.03)`
    el.style.boxShadow = `${x * -8}px ${y * -6}px 28px rgba(99,164,250,0.3), 0 8px 32px rgba(0,0,0,0.15)`
  }

  const handleTiltLeave = () => {
    const el = productCardRef.current
    if (!el) return
    el.style.transform = ''
    el.style.boxShadow = ''
  }

  useEffect(() => {
    if (!active || !cardRef.current) return
    const card = cardRef.current

    /* Reset */
    card.querySelectorAll('.anim-fade-up, .anim-fade-in').forEach(el => el.classList.remove('visible'))
card.querySelectorAll('.ncard__feature').forEach(f => f.classList.remove('visible'))

    const go = (sel, delay) => {
      const el = card.querySelector(sel)
      if (el) setTimeout(() => el.classList.add('visible'), delay)
    }

    go('.ncard__nav',           80)
    go('.ncard__tag',          180)
    go('.ncard__desc',         650)
    go('.ncard__product-group',  360)
    go('.ncard__connector-svg',  360)

    /* Feature pills — staggered */
    card.querySelectorAll('.ncard__feature').forEach((f, i) => {
      setTimeout(() => f.classList.add('visible'), 700 + i * 90)
    })
  }, [active])

  return (
    <div className="ncard" ref={cardRef}>
      <GridBackground />

      {/* Navbar */}
      <nav className="ncard__nav anim-fade-in">
        <div className="ncard__nav-inner">
          <div className="ncard__logo">
            <img src="/images/neural-logo-5068bf.png" alt="Neural logo" className="ncard__logo-img" />
            <span className="ncard__logo-text">Neural</span>
          </div>
          <div className="ncard__menu">
            <div className="ncard__menu-links">
              {MENU_LINKS.map((l) => (
                <a key={l.label} href="#"
                  className={`ncard__menu-link${l.active ? ' ncard__menu-link--active' : ''}`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <button className="ncard__cta">
            <span>View Products</span>
            <span className="ncard__cta-icon"><DotMatrixLight /></span>
          </button>
        </div>
      </nav>

      {/* Heading */}
      <div className="ncard__heading-wrap">
        <div className="ncard__hl-sub">
          <div className="ncard__tag anim-fade-up">
            <span className="ncard__tag-text">Entrez dans une nouvelle dimension</span>
            <NCardCorner />
          </div>
          <div className="ncard__texts">
                    <h2 className="ncard__title">
              <TypeAnimation
                key={active}
                sequence={[
                  'Découvrez le Futur\ndes Casques Immersifs',
                  2000,
                  '',
                  500,
                ]}
                speed={60}
                deletionSpeed={80}
                repeat={Infinity}
                style={{ whiteSpace: 'pre-line', display: 'block' }}
                cursor={true}
              />
            </h2>
            <p className="ncard__desc anim-fade-up">
              Une technologie pensée pour effacer la frontière entre<br/>
              le monde physique et le monde numérique.
            </p>
          </div>
        </div>

        {/* Feature pills — individually animated */}
        <div className="ncard__features" style={{ width: 492.12, position: 'relative', height: 23.21 }}>
          <div className="ncard__feature ncard__feature--resolution anim-fade-up">
            <div className="ncard__feature-inner">
              <span className="ncard__feature-icon"><ResolutionIcon /></span>
              <span className="ncard__feature-text">Résolution 8K par oeil</span>
            </div>
          </div>
          <div className="ncard__feature ncard__feature--neural anim-fade-up">
            <div className="ncard__feature-inner">
              <span className="ncard__feature-icon"><NeuralIcon /></span>
              <span className="ncard__feature-text">Tracking neuronal ultra-précis</span>
            </div>
          </div>
          <div className="ncard__feature ncard__feature--audio anim-fade-up">
            <div className="ncard__feature-inner">
              <span className="ncard__feature-icon"><AudioIcon /></span>
              <span className="ncard__feature-text">Audio spatial adaptatif</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product group */}
      <div className="ncard__product-group anim-fade-in">
        <img src="/images/neural-bg.png" alt="" className="ncard__product-bg" />
        <div className="ncard__headset-glow" />
        <div className="ncard__hand-glow" />
        <div className="ncard__sparkle-v9" style={{background: 'rgba(255,255,255,0.5)'}} />
        <Sparkles />
        <div className="ncard__ellipse-dot" />

        {/* Vector 10 — blue translucent hex shape between hand and face */}
        <svg className="ncard__vector10" viewBox="0 0 176 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M164.045 0L0 24.4668L9.75831 46.3773L166.155 52.2201L175.65 24.4668L164.045 0Z" fill="rgba(99,164,250,0.25)" stroke="#000000" strokeWidth="1"/>
        </svg>

        {/* Float wrapper + 3D tilt card */}
        <div className="ncard__product-float">
          <div
            className="ncard__product-card"
            ref={productCardRef}
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
          >
            <ProductCorner />
            <div className="ncard__product-img-row">
              <img src="/images/neural-product-75d4a3.png" alt="Neural 2.0" className="ncard__product-img" />
            </div>
            <div className="ncard__product-info">
              <div className="ncard__product-title-row">
                <span className="ncard__product-name">Neural 2.0</span>
                <span className="ncard__product-price">3 290€</span>
              </div>
              <button className="ncard__preorder">
                <span>Pré-commander</span>
                <span className="ncard__preorder-icon"><DotMatrixDark /></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg className="ncard__connector-svg anim-fade-in" viewBox="0 0 200 51" fill="none">
        <path
          d="M0.359436 0.386063L53.8983 50.2326H199.482"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.05495"
          strokeDasharray="4.22 4.22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Atmospheric glow — renders above product group, additive blend */}
      <div className="ncard__light-v2" />
      <div className="ncard__light-v3" />
      <div className="ncard__light-v4" />
      <div className="ncard__light-v5" />
    </div>
  )
}
