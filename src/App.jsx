import { useEffect, useState } from 'react'
import NeuralCard from './components/NeuralCard'
import ConstellationBackground from './components/ConstellationBackground'

const CARD_W = 876.62
const CARD_H = 623.38

const coverScale = (vw, vh) => Math.min(vw / CARD_W, vh / CARD_H)

export default function App() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => setScale(coverScale(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

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
