import { Link } from 'react-router-dom'
import { HelpCircle, Mail, Shield, Scale } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()
const SUPPORT_EMAIL = 'marlon.castro@thefndrs.com'
const CONTACT_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=Contacto - LumaCore LIS`

const footerLinks = {
  soporte: [
    { label: 'Centro de ayuda', href: '/centro-de-ayuda', internal: true },
    { label: 'Contacto', href: CONTACT_MAILTO, internal: false },
  ],
  legal: [
    { label: 'Privacidad', href: '/privacidad', internal: true },
    { label: 'Términos de uso', href: '/terminos', internal: true },
  ],
}

const icons = { soporte: [HelpCircle, Mail], legal: [Shield, Scale] } as const

export function Footer() {
  return (
    <footer
      className="mt-10 w-full shrink-0 border-t border-gray-200 bg-white"
      role="contentinfo"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-tight text-gray-900">
              LumaCore LIS
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Sistema de trazabilidad
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Soporte
            </p>
            <ul className="mt-2 space-y-1">
              {footerLinks.soporte.map((item, i) => {
                const Icon = icons.soporte[i]
                return (
                  <li key={item.label}>
                    {item.internal ? (
                      <Link
                        to={item.href}
                        className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <Icon
                          className="size-3.5 shrink-0 text-gray-400"
                          aria-hidden
                        />
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                      >
                        <Icon
                          className="size-3.5 shrink-0 text-gray-400"
                          aria-hidden
                        />
                        {item.label}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Legal
            </p>
            <ul className="mt-2 space-y-1">
              {footerLinks.legal.map((item, i) => {
                const Icon = icons.legal[i]
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                    >
                      <Icon
                        className="size-3.5 shrink-0 text-gray-400"
                        aria-hidden
                      />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-gray-200 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-xs text-gray-500">
            © {CURRENT_YEAR} LumaCore LIS. Todos los derechos reservados.
          </p>
          <p className="flex shrink-0 items-center gap-1.5 text-xs text-gray-500">
            <Shield className="size-3.5 shrink-0 text-gray-400" aria-hidden />
            Datos seguros · LumaCore LIS v1.0
          </p>
        </div>
      </div>
    </footer>
  )
}
