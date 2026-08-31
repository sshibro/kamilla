import { useEffect } from 'react'

export default function useHomeMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const processMedia = window.matchMedia('(min-width:1024px)')
    const revealEls = Array.from(
      document.querySelectorAll('.reveal, .about-shot, .chart, [data-split]'),
    )
    const processTrack = document.getElementById('procTrack')
    const processStage = document.getElementById('procStage')
    const processCurrent = document.getElementById('procCur')
    const processSegments = Array.from(document.querySelectorAll('.proc-progress .seg i'))
    const slides = Array.from(document.querySelectorAll('.proc .slide'))
    const parallaxImages = Array.from(document.querySelectorAll('[data-plx]'))
    const header = document.getElementById('hdr')
    const dock = document.getElementById('dock')
    const timeouts = new Set()
    let shownStep = -1
    let ticking = false
    let disposed = false

    document.querySelectorAll('[data-trace]').forEach((path) => {
      path.style.setProperty('--len', Math.ceil(path.getTotalLength()))
    })

    const runCount = (element) => {
      const target = Number.parseFloat(element.dataset.count)
      if (Number.isNaN(target)) return
      if (reducedMotion) {
        element.textContent = target
        return
      }

      const duration = 1200
      let startedAt = null
      const tick = (timestamp) => {
        if (disposed) return
        if (startedAt === null) startedAt = timestamp
        const progress = Math.min((timestamp - startedAt) / duration, 1)
        element.textContent = Math.round(target * (1 - (1 - progress) ** 3))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const activate = (element) => {
      element.classList.add('in')
      if (!element.classList.contains('stats')) return
      element.querySelectorAll('.num [data-count]').forEach((counter, index) => {
        const timeout = window.setTimeout(() => {
          timeouts.delete(timeout)
          runCount(counter)
        }, reducedMotion ? 0 : index * 110)
        timeouts.add(timeout)
      })
    }

    const sweepReveals = (viewportHeight) => {
      for (let index = revealEls.length - 1; index >= 0; index -= 1) {
        if (reducedMotion || revealEls[index].getBoundingClientRect().top < viewportHeight * 0.9) {
          activate(revealEls[index])
          revealEls.splice(index, 1)
        }
      }
    }

    const updateProcess = (viewportHeight) => {
      if (!processTrack || !slides.length || reducedMotion || !processMedia.matches) return
      const bounds = processTrack.getBoundingClientRect()
      const total = bounds.height - viewportHeight
      if (total <= 0) return

      const progress = Math.max(0, Math.min(1, -bounds.top / total))
      const step = Math.min(slides.length - 1, Math.floor(progress * slides.length))
      const localProgress = Math.max(0, Math.min(1, progress * slides.length - step))

      processStage?.style.setProperty('--pp', progress.toFixed(4))
      slides.forEach((slide, index) => slide.classList.toggle('on', index === step))
      slides[step].style.setProperty('--ly', ((localProgress - 0.5) * -34).toFixed(1))
      processSegments.forEach((segment, index) => {
        const fill = Math.max(0, Math.min(1, progress * slides.length - index))
        segment.style.transform = `scaleX(${fill.toFixed(3)})`
      })

      if (processCurrent && step !== shownStep) {
        shownStep = step
        processCurrent.innerHTML = `<span>${String(step + 1).padStart(2, '0')}</span>`
      }
    }

    const frame = () => {
      if (disposed) return
      const viewportHeight = window.innerHeight
      if (revealEls.length) sweepReveals(viewportHeight)
      const scrollY = window.scrollY || window.pageYOffset

      header?.classList.toggle('stuck', scrollY > 24)
      dock?.classList.toggle('show', scrollY > viewportHeight * 0.8)

      if (!reducedMotion) {
        parallaxImages.forEach((image) => {
          const bounds = image.parentNode.getBoundingClientRect()
          if (bounds.bottom < -40 || bounds.top > viewportHeight + 40) return
          const progress =
            (bounds.top + bounds.height / 2 - viewportHeight / 2) /
            (viewportHeight / 2 + bounds.height / 2)
          image.style.transform = `translateY(${(progress * 16).toFixed(1)}px) scale(1.12)`
        })
      }

      updateProcess(viewportHeight)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }

    const syncDockPadding = () => {
      if (!dock) return
      const visible = getComputedStyle(dock).display !== 'none'
      document.documentElement.style.setProperty(
        '--dock-h',
        visible ? `${dock.offsetHeight + 8}px` : '0px',
      )
    }

    const onVisibilityChange = () => {
      if (!document.hidden) {
        ticking = false
        onScroll()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    window.addEventListener('resize', syncDockPadding, { passive: true })
    window.addEventListener('load', frame)
    window.addEventListener('load', syncDockPadding)
    document.addEventListener('visibilitychange', onVisibilityChange)
    syncDockPadding()
    frame()

    return () => {
      disposed = true
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('resize', syncDockPadding)
      window.removeEventListener('load', frame)
      window.removeEventListener('load', syncDockPadding)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])
}
