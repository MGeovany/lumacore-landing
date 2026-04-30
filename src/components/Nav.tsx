import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'

const links = [
  { href: '#product', label: 'Producto' },
  { href: '#how-it-works', label: 'Cómo funciona' },
  { href: '#pricing', label: 'Precios' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contact', label: 'Contacto' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={
        'fixed w-full z-50 border-b transition-all duration-300 ' +
        (scrolled
          ? 'bg-white/90 backdrop-blur-md border-gray-100'
          : 'bg-white/90 backdrop-blur-md border-gray-100')
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/images/logo-black.png"
            alt="LumaCore"
            className="h-3 sm:h-6 w-auto"
            width={24}
            height={24}
          />
          <span className="font-body font-semibold text-lg sm:text-xl tracking-tight text-gray-900 group-hover:text-cyan-600 transition-colors">
            LumaCore
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map(({ href, label }) =>
            isHome ? (
              <a
                key={href}
                href={href}
                className="hover:text-cyan-500 transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={`/#${href.slice(1)}`}
                className="hover:text-cyan-500 transition-colors"
              >
                {label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/demo" className="hidden sm:block">
            <Button className="!py-2.5 !px-5 sm:!px-6 text-sm font-medium font-body">
              Solicitar demo
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 -mr-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          'md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-200 overflow-hidden ' +
          (mobileOpen
            ? 'max-h-[80vh] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none')
        }
      >
        <div className="px-4 py-4 space-y-1">
          {links.map(({ href, label }) =>
            isHome ? (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-cyan-600 min-h-[44px] flex items-center"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={`/#${href.slice(1)}`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-cyan-600 min-h-[44px] flex items-center"
              >
                {label}
              </Link>
            )
          )}
          <Link
            to="/demo"
            onClick={() => setMobileOpen(false)}
            className="block pt-2"
          >
            <Button className="w-full !py-3 text-sm min-h-[44px]">
              Solicitar demo
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
