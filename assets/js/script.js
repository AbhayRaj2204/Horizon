// Loader Management
const loader = document.getElementById("loader")
const loaderBar = document.querySelector(".loader-bar")
const loaderText = document.querySelector(".loader-text")

if (loader) {
  document.body.classList.add("loading")
}

const hideLoader = () => {
  if (loaderBar) loaderBar.style.width = "100%"

  setTimeout(() => {
    if (loader) {
      loader.classList.add("loader-hidden")
    }
    document.body.classList.remove("loading")
    const hero = document.querySelector(".hero")
    if (hero) hero.classList.add("loaded")
  }, 500)
}

// Asset Preloading Logic
const preloadAssets = () => {
  const images = Array.from(document.querySelectorAll("img"))
  const videos = Array.from(document.querySelectorAll("video"))

  // Find background images on all elements
  const bgImages = []
  const allElements = document.getElementsByTagName("*")
  for (let i = 0; i < allElements.length; i++) {
    const bg = window.getComputedStyle(allElements[i]).backgroundImage
    if (bg && bg !== "none" && bg.includes("url")) {
      const urlMatches = bg.match(/url\(["']?([^"']+)["']?\)/)
      if (urlMatches && urlMatches[1]) {
        bgImages.push(urlMatches[1])
      }
    }
  }

  const totalAssets = images.length + videos.length + bgImages.length
  let loadedAssets = 0

  if (totalAssets === 0) {
    hideLoader()
    return
  }

  const updateProgress = () => {
    loadedAssets++
    const progress = (loadedAssets / totalAssets) * 100
    if (loaderBar) loaderBar.style.width = `${progress}%`

    if (loadedAssets === totalAssets) {
      setTimeout(hideLoader, 500)
    }
  }

  // Preload Images
  images.forEach((img) => {
    if (img.complete) {
      updateProgress()
    } else {
      img.addEventListener("load", updateProgress)
      img.addEventListener("error", updateProgress)
    }

    if (img.getAttribute("loading") === "lazy") {
      img.removeAttribute("loading")
    }
  })

  // Preload Background Images
  bgImages.forEach((url) => {
    const img = new Image()
    img.src = url
    img.onload = updateProgress
    img.onerror = updateProgress
  })

  // Preload Videos
  videos.forEach((video) => {
    // Basic preloading check
    if (video.readyState >= 3) {
      updateProgress()
    } else {
      // For hero video, we want it to be very ready
      const onCanPlay = () => {
        updateProgress()
        video.removeEventListener("canplaythrough", onCanPlay)
      }
      video.addEventListener("canplaythrough", onCanPlay)
      video.addEventListener("error", updateProgress, { once: true })
    }
  })

  // Fallback: Max 15 seconds for slower connections
  setTimeout(() => {
    if (loadedAssets < totalAssets) {
      console.warn("Preloader timed out. Assets loaded:", loadedAssets, "of", totalAssets)
      hideLoader()
    }
  }, 15000)
}

// Initialize preloader
window.addEventListener("DOMContentLoaded", () => {
  // We start preloading after DOM is ready so we can find all elements
  preloadAssets()
})


// Mobile menu toggle logic is handled in navbar-init.js
// Removing redundant listeners from script.js to avoid console errors

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -80px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe sections with animation
const sections = document.querySelectorAll(".destinations-preview, .gallery, .services, .about, .reviews, .cta-section")
sections.forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(40px)"
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  observer.observe(section)
})

// Gallery items stagger animation
const galleryItems = document.querySelectorAll(".gallery-item")
const galleryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "scale(1)"
        }, index * 50)
      }
    })
  },
  { threshold: 0.1 },
)

galleryItems.forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "scale(0.95)"
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  galleryObserver.observe(item)
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero-content")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.4}px)`
    hero.style.opacity = Math.max(0, 1 - scrolled / 600)
  }

  const heroOverlay = document.querySelector(".hero-overlay")
  if (heroOverlay) {
    heroOverlay.style.opacity = Math.min(1, 0.5 + scrolled / 2000)
  }
})

// Destination cards hover effect
const destinationCards = document.querySelectorAll(".destination-card")
destinationCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 30
    const rotateY = (centerX - x) / 30

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
  })
})

// Service cards hover lift
const serviceCards = document.querySelectorAll(".service-card")
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 30px 60px rgba(212, 165, 116, 0.2)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.05)"
  })
})

// Review cards stagger animation
const reviewCards = document.querySelectorAll(".review-card")
const reviewObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
      }
    })
  },
  { threshold: 0.1 },
)

reviewCards.forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(30px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  reviewObserver.observe(card)
})

// Button click effects
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")

    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
})

// Add ripple effect styles dynamically
const style = document.createElement("style")
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Console Easter Egg
console.log("%c🌏 Horizon Tours & Travels", "color: #1a3a52; font-size: 24px; font-weight: bold;")
console.log("%cPlan your dream tour holiday today!", "color: #f4a261; font-size: 14px;")

const filterButtons = document.querySelectorAll(".filter-btn")
const galleryItemsFilter = document.querySelectorAll(".gallery-item[data-category]")

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter")

    filterButtons.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    galleryItemsFilter.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block"
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        }, 50)
      } else {
        item.style.opacity = "0"
        item.style.transform = "scale(0.95)"
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
  })
})

// Initialize gallery filter with animations
galleryItemsFilter.forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "scale(0.95)"
  item.style.transition = "opacity 0.3s ease, transform 0.3s ease"
  setTimeout(() => {
    item.style.opacity = "1"
    item.style.transform = "scale(1)"
  }, 50)
})

const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(contactForm)
    const submitBtn = contactForm.querySelector(".form-submit-btn")
    const originalText = submitBtn.textContent

    submitBtn.textContent = "MESSAGE SENT ✓"
    submitBtn.style.background = "var(--accent-forest)"

    setTimeout(() => {
      submitBtn.textContent = originalText
      submitBtn.style.background = "var(--accent-gold)"
      contactForm.reset()
    }, 3000)
  })
}

const destinationItems = document.querySelectorAll(".destination-item")
const destinationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        destinationObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 },
)

destinationItems.forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(40px)"
  item.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  destinationObserver.observe(item)
})

const faqItems = document.querySelectorAll(".faq-item")
const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 80)
      }
    })
  },
  { threshold: 0.1 },
)

faqItems.forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(30px)"
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  faqObserver.observe(item)
})

const reviewFullCards = document.querySelectorAll(".review-full-card")
const reviewFullObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
      }
    })
  },
  { threshold: 0.1 },
)

reviewFullCards.forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(40px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  reviewFullObserver.observe(card)
})

const serviceDetailCards = document.querySelectorAll(".service-detail-card")
const serviceDetailObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 80)
      }
    })
  },
  { threshold: 0.1 },
)

serviceDetailCards.forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(40px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  serviceDetailObserver.observe(card)
})
