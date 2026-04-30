import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_DEMO_URL ??
  'https://calendly.com/marlongeo1999/demo-lumacore'

type DemoModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handle = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handle)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handle)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-4xl h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] rounded-xl bg-white shadow-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between shrink-0 border-b border-gray-100 px-4 py-2 sm:py-3">
          <h2
            id="demo-modal-title"
            className="text-base sm:text-lg font-semibold text-gray-900 font-body"
          >
            Solicitar demo
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Cerrar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 min-h-0 flex flex-col">
          <iframe
            title="Calendly - Solicitar demo"
            src={CALENDLY_URL}
            className="w-full flex-1 min-h-0 border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
