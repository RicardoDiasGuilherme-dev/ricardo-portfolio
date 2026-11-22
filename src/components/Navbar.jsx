import { useEffect, useRef, useState } from 'react'
import { navigation } from '../data/portfolio'
import Icon from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    let scheduled = false
    const update = () => {
      const threshold = window.innerHeight * 0.32
      let current = 'home'
      navigation.forEach(({ id }) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= threshold) {
          current = id
        }
      })
      setActive(current)
      scheduled = false
    }
    const onScroll = () => {
      if (!scheduled) {
        scheduled = true
        window.requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (
        !panelRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setOpen(false)
      }
    }
    const media = window.matchMedia('(min-width: 960px)')
    const onResize = () => {
      if (media.matches) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    media.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      media.removeEventListener('change', onResize)
    }
  }, [open])

  const navigate = (id) => {
    setOpen(false)
    setActive(id)
    // Move focus to the destination when a collapsed mobile menu disappears.
    document.getElementById(id)?.focus({ preventScroll: true })
  }

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={23} />
        </button>
        <nav
          ref={panelRef}
          id="primary-navigation"
          aria-label="Main navigation"
          className={`nav-panel${open ? ' is-open' : ''}`}
        >
          <div className="nav-links">
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => navigate(id)}
                className={active === id ? 'active' : undefined}
                aria-current={active === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
