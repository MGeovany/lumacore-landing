import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LegalLayout } from './LegalLayout'
import { Button } from '../components/ui/Button'

const SUPPORT_EMAIL = 'marlon.castro@thefndrs.com'
const DEFAULT_SUBJECT = 'Centro de ayuda - LumaCore LIS'

export function CentroDeAyudaPage() {
  const [asunto, setAsunto] = useState(DEFAULT_SUBJECT)
  const [mensaje, setMensaje] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(asunto.trim() || DEFAULT_SUBJECT)
    const body = encodeURIComponent(mensaje.trim() || '—')
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <LegalLayout title="Centro de ayuda">
      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden font-poppins">
        <div className="border-b border-gray-100 px-6 py-5">
          <h1 className="text-xl font-bold text-gray-900 font-body">
            Centro de ayuda
          </h1>
          <p className="mt-1 text-sm text-gray-500 font-body">
            Redacte su mensaje y se abrirá su cliente de correo para enviarlo a
            soporte.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
          <div className="space-y-2">
            <label
              htmlFor="centro-asunto"
              className="block text-sm font-medium text-gray-700"
            >
              Asunto
            </label>
            <input
              id="centro-asunto"
              type="text"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              placeholder="Resumen de su consulta"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="centro-mensaje"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="centro-mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Describa su consulta o problema con el mayor detalle posible..."
              rows={6}
              required
              className="w-full resize-y min-h-[120px] rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
          <Button type="submit" className="rounded-full">
            Abrir correo para enviar
          </Button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Si su correo no se abre, envíe su mensaje directamente a{' '}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-gray-700 underline hover:no-underline"
        >
          {SUPPORT_EMAIL}
        </a>
      </p>

      <p className="mt-4 text-center text-sm text-gray-500">
        <Link to="/" className="text-cyan-500 hover:text-cyan-600 underline">
          Volver al inicio
        </Link>
        {' · '}
        <Link
          to="/privacidad"
          className="text-cyan-500 hover:text-cyan-600 underline"
        >
          Privacidad
        </Link>
        {' · '}
        <Link
          to="/terminos"
          className="text-cyan-500 hover:text-cyan-600 underline"
        >
          Términos
        </Link>
      </p>
    </LegalLayout>
  )
}
