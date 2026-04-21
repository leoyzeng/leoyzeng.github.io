import { useState } from 'react'
import { photos } from '../data/portfolioData'

// ─── Lightbox ─────────────────────────────────────────────
function Lightbox({ photo, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-noir/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="small-control absolute top-4 right-4 w-10 h-10 flex items-center justify-center
          text-warm-400 hover:text-warm-100 transition-colors"
        onClick={onClose} aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <button
        className="small-control absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10
          flex items-center justify-center text-warm-400 hover:text-warm-100 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
      </button>

      <div className="flex flex-col items-center gap-3 max-w-full" onClick={e => e.stopPropagation()}>
        <img
          src={photo.src} alt={photo.alt}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl animate-fade-in"
        />
        {photo.caption && (
          <p className="text-xs tracking-wide text-warm-400 text-center max-w-md">
            {photo.caption}
          </p>
        )}
      </div>

      <button
        className="small-control absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10
          flex items-center justify-center text-warm-400 hover:text-warm-100 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9,18 15,12 9,6"/>
        </svg>
      </button>
    </div>
  )
}

// ─── Other page ───────────────────────────────────────────
export default function Other() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox  = (i) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prevPhoto     = () => setLightbox(i => (i - 1 + photos.length) % photos.length)
  const nextPhoto     = () => setLightbox(i => (i + 1) % photos.length)

  return (
    <div className="page-wrapper">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 sm:mb-12 stagger">
          <p className="section-label mb-3">Miscellaneous</p>
          <h1 className="page-title">Other</h1>
          <div className="divider" />
          <p className="text-xs sm:text-sm text-warm-500 dark:text-warm-400 max-w-sm leading-relaxed">
            Snapshots from the world outside the terminal.
          </p>
        </div>

        {/* Photo grid
            - 'wide' photos span 2 columns
            - Each cell: image + optional caption below
            - On mobile: all items are 1 column (col-span overridden)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span === 'wide' ? 'sm:col-span-2' : ''} group cursor-pointer`}
              onClick={() => openLightbox(i)}
            >
              {/* Image container — fixed height so the grid stays tidy */}
              <div className="relative overflow-hidden"
                style={{ height: photo.span === 'wide' ? '220px' : '260px' }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-500
                    group-hover:scale-105 group-hover:brightness-90"
                  loading="lazy"
                />
                {/* Expand indicator on hover */}
                <div className="absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 border border-white/60 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="1.5">
                      <polyline points="15,3 21,3 21,9"/>
                      <polyline points="9,21 3,21 3,15"/>
                      <line x1="21" y1="3" x2="14" y2="10"/>
                      <line x1="3" y1="21" x2="10" y2="14"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Optional caption */}
              {photo.caption && (
                <p className="mt-1.5 text-[10px] sm:text-xs tracking-wide leading-relaxed
                  text-warm-500 dark:text-warm-500 px-0.5">
                  {photo.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-[10px] tracking-wide text-warm-400 dark:text-warm-600 text-center mt-10">
          Edit <code className="text-amber">photos</code> in{' '}
          <code className="text-amber">portfolioData.js</code> — add a{' '}
          <code className="text-amber">caption</code> field to any photo, or omit it for none.
        </p>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          photo={photos[lightbox]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </div>
  )
}
