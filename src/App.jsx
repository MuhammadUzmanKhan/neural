import { useEffect, useState } from 'react'
import NeuralCard from './components/NeuralCard'
import ConstellationBackground from './components/ConstellationBackground'
import { useIsDesktop } from './hooks/useIsDesktop'

const CARD_W = 876.62
const CARD_H = 623.38
const coverScale = (vw, vh) => Math.min(vw / CARD_W, vh / CARD_H)

export default function App() {
  const isDesktop = useIsDesktop()
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!isDesktop) return
    const update = () => setScale(coverScale(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [isDesktop])

  useEffect(() => {
    document.documentElement.style.overflow = isDesktop ? '' : 'auto'
    document.body.style.overflow = isDesktop ? '' : 'auto'
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isDesktop])

  if (!isDesktop) {
    return (
      <div style={{ position: 'relative', minHeight: '100dvh', background: '#060606', overflowX: 'hidden' }}>
        <ConstellationBackground />
        <NeuralCard active={true} />
      </div>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      overflow: 'hidden',
      background: '#060606',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ConstellationBackground />
      <div style={{
        position: 'relative',
        zIndex: 1,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
      }}>
        <NeuralCard active={true} />
      </div>
    </div>
  )
}
