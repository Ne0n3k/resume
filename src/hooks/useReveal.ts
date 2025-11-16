import { useEffect, useRef, useState } from 'react'

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.2,
  rootMargin: '0px',
}

export const useReveal = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = elementRef.current
    if (!target) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      options ?? DEFAULT_OPTIONS,
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [options])

  return { ref: elementRef, isVisible }
}

