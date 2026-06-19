import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let intersectionObserver = null
  let mutationObserver = null

  function observe(el) {
    if (el.hasAttribute('data-reveal') && !el.classList.contains('is-visible')) {
      intersectionObserver.observe(el)
    }
  }

  onMounted(() => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            intersectionObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe elements already in the DOM on mount
    document.querySelectorAll('[data-reveal]').forEach(observe)

    // Watch for show cards added later (async data loads)
    mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return
          if (node.hasAttribute?.('data-reveal')) observe(node)
          node.querySelectorAll?.('[data-reveal]').forEach(observe)
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    intersectionObserver?.disconnect()
    mutationObserver?.disconnect()
  })
}
