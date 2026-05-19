import { useEffect, useRef } from 'react'
import { useIsDesktop } from '../hooks/useIsDesktop'

const CONFIG = {
  particleCount: 100,
  maxDistance: 150,
  mouseRadius: 180,
  speed: 0.45,
  particleRadius: 2.8,
  lineOpacityMax: 0.45,
  particleOpacity: 0.9,
  mouseLineOpacity: 0.7,
}

function createParticle(w, h) {
  const angle = Math.random() * Math.PI * 2
  const spd = (0.3 + Math.random() * 0.7) * CONFIG.speed
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * spd,
    vy: Math.sin(angle) * spd,
    r: 1.2 + Math.random() * CONFIG.particleRadius,
  }
}

export default function ConstellationBackground() {
  const isDesktop = useIsDesktop()
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(null)

  useEffect(() => {
    if (!isDesktop) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let w, h

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      particles = Array.from({ length: CONFIG.particleCount }, () => createParticle(w, h))
    }

    const onMouse = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const onLeave = () => {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const mx = mouse.current.x
      const my = mouse.current.y

      // update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        else if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        else if (p.y > h + 10) p.y = -10
      }

      // draw links between particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONFIG.maxDistance) {
            const alpha = CONFIG.lineOpacityMax * (1 - dist / CONFIG.maxDistance)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // draw mouse links
      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONFIG.mouseRadius) {
          const alpha = CONFIG.mouseLineOpacity * (1 - dist / CONFIG.mouseRadius)
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(99,164,250,${alpha.toFixed(3)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      // draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${CONFIG.particleOpacity})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  if (!isDesktop) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  )
}
